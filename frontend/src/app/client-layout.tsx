'use client';
import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { Toaster } from '@/components/ui/sonner';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const hideLayout =
        pathname === '/' ||
        pathname.startsWith('/admin') ||
        pathname.startsWith('/login');
    return (
        <>
            {!hideLayout && <Header />}
            {children}
            <Toaster />
            {!hideLayout && <Footer />}
        </>
    );
}
