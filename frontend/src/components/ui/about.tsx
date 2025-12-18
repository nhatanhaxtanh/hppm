'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function AboutSection({ className }: { className?: string }) {
    return (
        <section
            aria-labelledby="about-hppm-title"
            className={cn('w-full', className)}
        >
            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className="order-1 lg:order-2 lg:col-span-6">
                        <h2
                            id="about-hppm-title"
                            className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                        >
                            Giới thiệu về HPPM
                        </h2>

                        <div className="mt-3 h-1 w-24 rounded-full bg-linear-to-r from-indigo-600 to-purple-300 dark:to-indigo-400" />

                        <div className="text-muted-foreground mt-6 space-y-4 text-base leading-relaxed">
                            <p>
                                HPPM là đơn vị chuyên nghiệp trong lĩnh vực{' '}
                                <strong className="text-foreground">
                                    quản lý
                                </strong>{' '}
                                và{' '}
                                <strong className="text-foreground">
                                    vận hành bất động sản
                                </strong>
                                , bao gồm chung cư, khu đô thị, biệt thự và dự
                                án thương mại.
                            </p>
                            <p>
                                Chúng tôi tập trung vào{' '}
                                <strong className="text-foreground">
                                    chuẩn hoá quy trình
                                </strong>
                                , tối ưu vận hành, đảm bảo an toàn và nâng trải
                                nghiệm cư dân bằng hệ thống quản trị rõ ràng,
                                minh bạch.
                            </p>
                            <p>
                                Với đội ngũ nhân sự giàu kinh nghiệm và chuyên
                                môn, HPPM đồng hành cùng cư dân và chủ đầu tư
                                trong mục tiêu xây dựng cộng đồng sống văn minh,
                                hiện đại và thân thiện.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <Link
                                href="/intro"
                                className={cn(
                                    'inline-flex items-center justify-center gap-2',
                                    'rounded-full px-6 py-2.5 text-sm leading-none font-semibold',
                                    'bg-neutral-900 text-white hover:bg-neutral-800',
                                    'dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
                                    'ring-1 ring-neutral-900/10 hover:ring-neutral-900/20',
                                    'dark:ring-white/15 dark:hover:ring-white/25',
                                    'focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none',
                                    'dark:focus-visible:ring-offset-black',
                                    'transition-colors',
                                )}
                            >
                                <span>Xem thêm</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    <div className="order-2 lg:order-1 lg:col-span-6">
                        <div className="border-border bg-muted relative overflow-hidden rounded-[28px] border shadow-[0_22px_80px_rgba(0,0,0,0.12)]">
                            <div className="relative h-80 w-full sm:h-105 lg:h-130">
                                <Image
                                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80"
                                    alt="Hình ảnh minh hoạ khu dân cư và không gian sống hiện đại"
                                    fill
                                    priority={false}
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-black/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
