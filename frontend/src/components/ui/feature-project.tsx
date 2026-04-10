'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowRight, ArrowUp, Building2 } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { projects } from '../../../constant/constant-data';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const badgeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

export default function FeaturedProjectsGrid({
    className,
    variant = 'default',
    expandable = false,
    initialCount,
}: {
    className?: string;
    variant?: 'default' | 'enhanced';
    expandable?: boolean;
    initialCount?: number;
}) {
    const titleId = 'projects-title';
    const descId = 'projects-desc';
    const defaultCount = initialCount ?? projects.length;
    const [visibleCount, setVisibleCount] = useState(defaultCount);
    const visibleProjects = projects.slice(0, visibleCount);
    const hasMoreProjects = visibleCount < projects.length;
    const isExpanded = visibleCount >= projects.length;

    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Dự án tiêu biểu',
        itemListElement: visibleProjects.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: p.title,
            url: p.href,
        })),
    };

    return (
        <section
            className={cn('w-full', className)}
            aria-labelledby={titleId}
            aria-describedby={descId}
        >
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                {variant === 'enhanced' ? (
                    <header className="text-center">
                        <motion.div
                            variants={badgeIn}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="border-border bg-card/80 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm shadow-sm backdrop-blur-sm"
                        >
                            <Building2 className="h-5 w-5" />
                            Dự án tiêu biểu HPPM
                        </motion.div>

                        <motion.h2
                            id={titleId}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="mx-auto mt-6 max-w-4xl text-4xl leading-[1.15] font-bold tracking-tighter sm:text-5xl md:text-6xl"
                        >
                            <span className="text-foreground block">
                                Những dự án nổi bật
                            </span>
                            <span className="block bg-linear-to-r from-fuchsia-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                                đã được HPPM triển khai
                            </span>
                        </motion.h2>

                        <motion.p
                            id={descId}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="text-muted-foreground mx-auto mt-6 max-w-3xl text-lg md:text-xl"
                        >
                            Tổng hợp những dự án tiêu biểu mà HPPM đã đồng hành
                            triển khai và vận hành, giúp bạn hình dung rõ hơn về
                            quy mô dịch vụ, cách tiếp cận thực tế và tiêu chuẩn
                            chất lượng mà chúng tôi theo đuổi trong từng mô hình
                            bất động sản.
                        </motion.p>
                    </header>
                ) : (
                    <header className="text-center">
                        <p className="text-muted-foreground text-sm font-medium tracking-wide">
                            DỰ ÁN TIÊU BIỂU
                        </p>

                        <h2
                            id={titleId}
                            className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                        >
                            Những dự án nổi bật đã triển khai
                        </h2>

                        <p
                            id={descId}
                            className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg"
                        >
                            Những dự án tiêu biểu HPPM Quản lý - Vận hành
                        </p>
                    </header>
                )}

                <motion.div
                    layout
                    className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                >
                    {visibleProjects.map((project, index) => (
                        <motion.article
                            layout
                            initial={expandable ? { opacity: 0, y: 18 } : false}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.35, ease: 'easeOut' }}
                            key={project.title}
                            className={cn(
                                'border-border bg-card group overflow-hidden rounded-[28px] border',
                                'shadow-[0_22px_80px_rgba(0,0,0,0.08)] transition-shadow',
                                'hover:shadow-[0_22px_80px_rgba(0,0,0,0.14)]',
                            )}
                        >
                            <Link
                                href={project.href}
                                aria-label={`Đọc thêm: ${project.title}`}
                                className="focus-visible:ring-ring block rounded-[28px] focus:outline-none focus-visible:ring-2"
                            >
                                <div className="relative overflow-hidden">
                                    <div className="relative h-50 w-full sm:h-55 lg:h-60">
                                        <Image
                                            src={project.imageUrl}
                                            alt={project.imageAlt}
                                            fill
                                            quality={85}
                                            priority={index === 0}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className={cn(
                                                'object-cover transition duration-300',
                                                'group-hover:opacity-85 group-hover:blur-[1px]',
                                            )}
                                        />
                                    </div>

                                    <div className="group-hover:opacity-и style? pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="pointer-events-none absolute inset-x-4 bottom-4 flex items-center justify-between opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <span className="rounded-full border border-white/15 bg-white/75 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur dark:bg-black/35 dark:text-white">
                                            Đọc thêm
                                        </span>

                                        <span className="flex items-center gap-2 text-sm font-semibold text-white">
                                            <span className="sr-only">
                                                Đọc thêm
                                            </span>
                                            <ArrowRight className="h-5 w-5 translate-x-0 transition-transform duration-300 group-hover:translate-x-2" />
                                        </span>
                                    </div>

                                    <div className="absolute top-4 left-4">
                                        <Badge className="rounded-full border border-white/15 bg-white/75 text-slate-900 backdrop-blur dark:bg-black/35 dark:text-white">
                                            {project.category}
                                        </Badge>
                                    </div>
                                </div>

                                <div className="p-5">
                                    <h3 className="text-foreground text-[15px] leading-6 font-semibold tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-sm">
                                        {project.category}
                                    </p>
                                </div>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>

                <div className="mt-10 flex justify-center">
                    {expandable ? (
                        <button
                            type="button"
                            onClick={() =>
                                setVisibleCount(
                                    isExpanded ? defaultCount : projects.length
                                )
                            }
                            className={cn(
                                'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold',
                                'border-border bg-card hover:bg-accent/50 border shadow-sm transition-colors',
                                'focus-visible:ring-ring focus:outline-none focus-visible:ring-2',
                            )}
                            aria-label={
                                isExpanded
                                    ? 'Thu gọn danh sách dự án'
                                    : 'Xem thêm dự án'
                            }
                        >
                            {isExpanded ? 'Thu gọn' : 'Xem thêm dự án'}
                            {isExpanded ? (
                                <ArrowUp className="h-4 w-4" />
                            ) : (
                                <ArrowDown className="h-4 w-4" />
                            )}
                        </button>
                    ) : (
                        <Link
                            href="/du-an"
                            className={cn(
                                'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold',
                                'border-border bg-card hover:bg-accent/50 border shadow-sm transition-colors',
                                'focus-visible:ring-ring focus:outline-none focus-visible:ring-2',
                            )}
                            aria-label="Xem thêm dự án"
                        >
                            Xem thêm dự án
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    )}
                </div>
            </div>
        </section>
    );
}
