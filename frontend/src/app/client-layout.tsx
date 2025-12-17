'use client';
import { Header } from '@/components/common/header';
import { Toaster } from '@/components/ui/sonner';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            {children}
            <Toaster />
        </>
    );
}
