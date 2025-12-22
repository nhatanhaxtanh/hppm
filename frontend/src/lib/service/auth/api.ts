import { useAuthStore } from '@/lib/stores/authStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { LoginFormValues, AuthResponse, loginSchema } from './type';
import {
    ApiResponse,
    axiosWrapper,
    deserialize,
    throwIfError,
} from '@/lib/api/axios-config';
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

export const useLogin = () => {
    const router = useRouter();
    const setToken = useAuthStore((s) => s.setToken);
    const mutation = useMutation({
        mutationFn: async (values: LoginFormValues) => {
            const response = await axiosWrapper.post<ApiResponse<AuthResponse>>(
                '/auth/login',
                values,
            );

            throwIfError(response.data, response.status);
            return {
                message: response.data.message,
                result: deserialize<AuthResponse>(response.data),
            };
        },
        onSuccess: ({ result }) => {
            setToken(result.token);
            toast.success('Đăng nhập thành công');
            router.push('/admin');
        },
        onError: (err) => {
            toast.error(err.message ?? 'Đăng nhập thất bại');
        },
    });

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    return {
        form,
        mutation,
    };
};

export const useRefreshToken = (options?: { toastOnError?: boolean }) => {
    const setToken = useAuthStore((s) => s.setToken);
    const clear = useAuthStore((s) => s.clear);

    const mutation = useMutation({
        mutationFn: async () => {
            const response =
                await axiosWrapper.post<ApiResponse<AuthResponse>>(
                    '/auth/refresh',
                );

            throwIfError(response.data, response.status);
            return {
                message: response.data.message,
                result: deserialize<AuthResponse>(response.data),
            };
        },
        onSuccess: ({ result }) => {
            setToken(result.token);
        },
        onError: (err) => {
            clear();
            if (options?.toastOnError) {
                toast.error(err?.message ?? 'Phiên đăng nhập đã hết hạn');
            }
        },
    });
    return { mutation };
};

export const useLogout = () => {
    const router = useRouter();
    const clear = useAuthStore((s) => s.clear);

    const mutation = useMutation({
        mutationFn: async () => {
            const response =
                await axiosWrapper.post<ApiResponse<void>>('/auth/logout');

            throwIfError(response.data, response.status);
            return {
                message: response.data.message,
                result: deserialize<void>(response.data),
            };
        },
        onSuccess: () => {
            clear();
            toast.success('Đăng xuất thành công');
            router.replace('/home');
        },
        onError: (err) => {
            clear();
            toast.error(err?.message ?? 'Đăng xuất thất bại');
            router.replace('/home');
        },
    });

    return { mutation };
};
