'use client';
import { Footer } from '@/components/common/footer';
import { Header } from '@/components/common/header';
import { Toaster } from '@/components/ui/sonner';
import { useGetMeProfile } from '@/lib/service/auth';
import { usePathname } from 'next/navigation';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    useGetMeProfile();
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
