import { useAuthStore } from '@/lib/stores/authStore';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { LoginFormValues, LoginResponse, loginSchema } from './type';
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
            const response = await axiosWrapper.post<
                ApiResponse<LoginResponse>
            >('/auth/login', values);

            throwIfError(response.data, response.status);
            return {
                message: response.data.message,
                result: deserialize<LoginResponse>(response.data),
            };
        },
        onSuccess: ({ result }) => {
            setToken(result.token);
            toast.success('Login Successfully');
            router.push('/admin');
        },
        onError: (err) => {
            toast.error(err.message);
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
