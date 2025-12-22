'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export function UnauthorizedPage() {
    const router = useRouter();

    return (
        <section className="flex min-h-screen items-center justify-center bg-white font-serif">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full text-center sm:w-10/12 md:w-8/12">
                        <div
                            className="h-62.5 bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)] bg-contain bg-center bg-no-repeat sm:h-87.5 md:h-100"
                            aria-hidden="true"
                        >
                            <h1 className="pt-6 text-center text-6xl text-black sm:pt-8 sm:text-7xl md:text-8xl">
                                401
                            </h1>
                        </div>

                        <div className="mt-12.5">
                            <h3 className="mb-4 text-2xl font-bold text-black sm:text-3xl">
                                Bạn cần đăng nhập
                            </h3>

                            <p className="mb-6 text-black sm:mb-5">
                                Vui lòng đăng nhập để truy cập trang quản trị.
                            </p>

                            <Button
                                variant="default"
                                onClick={() => router.push('/login')}
                                className="my-5 bg-green-600 hover:bg-green-700"
                            >
                                Đi tới trang đăng nhập
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
