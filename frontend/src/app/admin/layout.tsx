'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
            router.replace('/unauthorized');
        }
    }, [bootstrapped, isAccessTokenValid, router]);

    if (!bootstrapped) return null;

    if (!isAccessTokenValid()) return null;

    return <>{children}</>;
}
