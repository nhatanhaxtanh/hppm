'use client';
import { useRefreshToken } from '@/lib/service/auth';
import { useAuthStore } from '@/lib/stores/authStore';
import { useEffect } from 'react';

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const setBootstrapped = useAuthStore((s) => s.setBootstrapped);
    const { mutation } = useRefreshToken();

    useEffect(() => {
        mutation.mutate(undefined, {
            onSettled: () => {
                setBootstrapped(true);
            },
        });
    }, []);

    return <>{children}</>;
}
