import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import ClientLayout from './client-layout';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Công ty TNHH Quản Lý Bất Động Sản HPPM',
    description:
        'HPPM là đơn vị chuyên nghiệp trong lĩnh vực quản lý và vận hành bất động sản, bao gồm chung cư, khu đô thị, biệt thự và dự án thương mại.',
    applicationName: 'HPPM',
    openGraph: {
        title: 'Công ty TNHH Quản Lý Bất Động Sản HPPM',
        description:
            'HPPM là đơn vị chuyên nghiệp trong lĩnh vực quản lý và vận hành bất động sản.',
        siteName: 'HPPM',
        type: 'website',
        locale: 'vi_VN',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'HPPM',
        alternateName: ['HPPM Real Estate', 'Công ty HPPM'],
        url: 'https://www.hppm.vn/',
    };

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />

                <Providers>
                    <ClientLayout>{children}</ClientLayout>
                </Providers>
            </body>
        </html>
    );
}
