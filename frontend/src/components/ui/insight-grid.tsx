'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CalendarDays, User2 } from 'lucide-react';

import { cn } from '@/lib/utils';

type PostItem = {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    href: string;
    imageUrl: string;
    imageAlt: string;
};

const posts: PostItem[] = [
    {
        id: '1',
        title: 'Hình ảnh công ty HPPM tại các dự án',
        excerpt:
            'Những hình ảnh mà chúng tôi chia sẻ không chỉ là một tập hợp các hình ảnh đơn giản, mà chúng là biểu hiện của sự chăm sóc, quản lý [...]',
        date: '08/04/2024',
        author: 'HPPM',
        href: '/bai-viet/hinh-anh-cong-ty-hppm',
        imageUrl:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Hình ảnh minh hoạ đội ngũ làm việc tại dự án',
    },
    {
        id: '2',
        title: 'Phần mềm quản lý POMA — giải pháp vận hành toà nhà',
        excerpt:
            'POMA giúp quản lý vận hành tòa nhà tự động, minh bạch và dễ theo dõi. Một trong những cải tiến giúp nâng cao trải nghiệm cư dân [...]',
        date: '14/11/2021',
        author: 'HPPM',
        href: '/bai-viet/phan-mem-quan-ly-poma',
        imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Hình ảnh minh hoạ màn hình ứng dụng / phần mềm quản lý',
    },
    {
        id: '3',
        title: 'Căn hộ nhanh bị xuống cấp phải làm sao?',
        excerpt:
            'Hệ thống kỹ thuật của mỗi tòa nhà theo thời gian sẽ có nhiều hỏng hóc khiến cư dân bất tiện. Cần quy trình kiểm soát và bảo trì chuẩn [...]',
        date: '24/11/2021',
        author: 'HPPM',
        href: '/bai-viet/can-ho-xuong-cap',
        imageUrl:
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Hình ảnh minh hoạ kỹ thuật viên kiểm tra hệ thống',
    },
];

export default function InsightsGrid({ className }: { className?: string }) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Góc chia sẻ & Cập nhật',
        itemListElement: posts.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: p.title,
            url: p.href,
        })),
    };

    return (
        <div
            className={cn('w-full', className)}
            aria-labelledby="insights-title"
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium tracking-wide">
                        CẬP NHẬT
                    </p>
                    <h2
                        id="insights-title"
                        className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        Góc chia sẻ & Cập nhật
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                        Tổng hợp bài viết, hình ảnh và kiến thức vận hành — ngắn
                        gọn, dễ đọc, ưu tiên trải nghiệm.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className={cn(
                                'group bg-card relative overflow-hidden rounded-[28px] border',
                                'shadow-[0_22px_80px_rgba(0,0,0,0.06)] transition-all duration-300',
                                'hover:-translate-y-1 hover:shadow-[0_22px_80px_rgba(0,0,0,0.14)]',
                            )}
                        >
                            <div
                                aria-hidden="true"
                                className={cn(
                                    'pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300',
                                    'group-hover:opacity-100',
                                    'bg-[radial-gradient(1200px_circle_at_30%_-20%,rgba(59,130,246,0.35),transparent_55%),radial-gradient(900px_circle_at_110%_30%,rgba(16,185,129,0.25),transparent_55%)]',
                                )}
                            />
                            <div
                                aria-hidden="true"
                                className={cn(
                                    'pointer-events-none absolute inset-0 rounded-[28px] opacity-0 transition-opacity duration-300',
                                    'group-hover:opacity-100',
                                    'ring-1 ring-white/10 ring-inset',
                                )}
                            />

                            <Link
                                href={post.href}
                                className="focus-visible:ring-ring relative block rounded-[28px] focus:outline-none focus-visible:ring-2"
                                aria-label={`Xem thêm: ${post.title}`}
                            >
                                <div className="relative overflow-hidden">
                                    <div className="relative h-50 w-full sm:h-55 lg:h-60">
                                        <Image
                                            src={post.imageUrl}
                                            alt={post.imageAlt}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className={cn(
                                                'object-cover transition-transform duration-500',
                                                'group-hover:scale-[1.06]',
                                            )}
                                        />
                                    </div>

                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/15 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />

                                    <div className="pointer-events-none absolute inset-x-5 bottom-5">
                                        <div
                                            className={cn(
                                                'inline-flex items-center gap-2 rounded-full',
                                                'border border-white/15 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur',
                                                'translate-y-2 opacity-0 transition-all duration-300',
                                                'group-hover:translate-y-0 group-hover:opacity-100',
                                            )}
                                        >
                                            Xem thêm
                                            <ArrowRight className="h-4 w-4 translate-x-0 transition-transform duration-300 group-hover:translate-x-1.5" />
                                        </div>
                                    </div>
                                </div>

                                <div className="relative p-5">
                                    <h3 className="text-foreground line-clamp-2 text-[15px] leading-6 font-semibold tracking-tight">
                                        {post.title}
                                    </h3>

                                    <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-6">
                                        {post.excerpt}
                                    </p>

                                    <div className="text-muted-foreground mt-4 flex items-center gap-4 text-xs">
                                        <span className="inline-flex items-center gap-2">
                                            <CalendarDays
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                            <time
                                                dateTime={toISODate(post.date)}
                                            >
                                                {post.date}
                                            </time>
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <User2
                                                className="h-4 w-4"
                                                aria-hidden="true"
                                            />
                                            <span>{post.author}</span>
                                        </span>
                                    </div>

                                    <div className="mt-6">
                                        <span
                                            className={cn(
                                                'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold',
                                                'bg-[#F4C400] text-black transition-all',
                                                'group-hover:brightness-95',
                                            )}
                                        >
                                            Xem thêm
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/bai-viet"
                        className={cn(
                            'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold',
                            'border-border bg-card hover:bg-accent/50 border shadow-sm transition-colors',
                            'focus-visible:ring-ring focus:outline-none focus-visible:ring-2',
                        )}
                        aria-label="Xem tất cả bài viết"
                    >
                        Xem tất cả bài viết
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

function toISODate(input: string) {
    const [dd, mm, yyyy] = input.split('/');
    if (!dd || !mm || !yyyy) return input;
    return `${yyyy}-${mm.padStart(2, '0')}-${dd.padStart(2, '0')}`;
}
