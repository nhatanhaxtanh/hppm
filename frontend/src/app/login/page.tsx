'use client';
import Image from 'next/image';
import { LoginForm } from './login-form';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function LoginPage() {
    return (
        <div className="grid min-h-svh lg:grid-cols-2">
            <div className="flex flex-col gap-4 p-6 md:p-10">
                <div className="flex justify-center gap-2 md:justify-start">
                    <Link
                        href="/home"
                        aria-label="HPPM Home"
                        className="flex items-center md:static md:mr-0 md:translate-x-0"
                    >
                        <div className="relative flex h-11 w-45 items-center sm:h-12 sm:w-50 md:h-14 md:w-55">
                            <Image
                                src="/logoHPPM.png"
                                alt="HPPM"
                                fill
                                priority
                                quality={100}
                                sizes="(max-width: 768px) 220px, 260px"
                                className={cn(
                                    'origin-left object-contain drop-shadow-sm',
                                    'absolute top-5 right-0.75',
                                    'scale-x-[1.05] scale-y-[0.85]',
                                )}
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex flex-1 items-center justify-center">
                    <LoginForm />
                </div>
            </div>
            <div className="bg-muted relative hidden min-h-screen lg:block">
                <Image
                    src="/login-image.jpg"
                    alt="Image"
                    fill
                    className="object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    );
}
