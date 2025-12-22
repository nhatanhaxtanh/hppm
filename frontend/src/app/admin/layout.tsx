'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useAuthStore } from '@/lib/stores/authStore';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();

    const bootstrapped = useAuthStore((s) => s.bootstrapped);
    const isAccessTokenValid = useAuthStore((s) => s.isAccessTokenValid);

    useEffect(() => {
        if (!bootstrapped) return;

        if (!isAccessTokenValid()) {
            toast.info('Bạn cần đăng nhập để vào trang quản trị');
            router.replace('/login');
        }
    }, [bootstrapped, isAccessTokenValid, router]);

    if (!bootstrapped) return null;

    if (!isAccessTokenValid()) return null;

    return <>{children}</>;
}
