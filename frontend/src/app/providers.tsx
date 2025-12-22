'use client';

import AuthProvider from '@/providers/auth-provider';
import { QueryProvider } from '@/providers/query-provider';
import { ThemeProvider } from '@/providers/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <QueryProvider>
                <AuthProvider>{children}</AuthProvider>
            </QueryProvider>
        </ThemeProvider>
    );
}
