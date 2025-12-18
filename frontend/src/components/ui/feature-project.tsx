'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type Project = {
    title: string;
    category: string;
    href: string;
    imageUrl: string;
    imageAlt: string;
};

const projects: Project[] = [
    {
        title: 'Khu dân cư Lavela Garden',
        category: 'Khu dân cư',
        href: '/du-an/lavela-garden',
        imageUrl:
            'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Khu dân cư Lavela Garden',
    },
    {
        title: 'Cụm chung cư Sky Residences',
        category: 'Chung cư',
        href: '/du-an/sky-residences',
        imageUrl:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Cụm chung cư Sky Residences',
    },
    {
        title: 'Khu biệt thự Riviera Cove',
        category: 'Biệt thự',
        href: '/du-an/riviera-cove',
        imageUrl:
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Khu biệt thự Riviera Cove',
    },
    {
        title: 'Chung cư Eden Riverside',
        category: 'Chung cư',
        href: '/du-an/eden-riverside',
        imageUrl:
            'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Chung cư Eden Riverside',
    },
    {
        title: 'Khu biệt thự Holm Residences',
        category: 'Biệt thự',
        href: '/du-an/holm-residences',
        imageUrl:
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Khu biệt thự Holm Residences',
    },
    {
        title: 'Chung cư Giai Việt',
        category: 'Chung cư',
        href: '/du-an/giai-viet',
        imageUrl:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Chung cư Giai Việt',
    },
    {
        title: 'Cụm nhà chung cư Vision-1',
        category: 'Chung cư',
        href: '/du-an/vision-1',
        imageUrl:
            'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Cụm nhà chung cư Vision-1',
    },
    {
        title: 'Chung cư Vĩnh Tường',
        category: 'Chung cư',
        href: '/du-an/vinh-tuong',
        imageUrl:
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Chung cư Vĩnh Tường',
    },
    {
        title: 'Cụm nhà chung cư An Lạc',
        category: 'Chung cư',
        href: '/du-an/an-lac',
        imageUrl:
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Cụm nhà chung cư An Lạc',
    },
];

export default function FeaturedProjectsGrid({
    className,
}: {
    className?: string;
}) {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Dự án tiêu biểu',
        itemListElement: projects.map((p, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            name: p.title,
            url: p.href,
        })),
    };

    return (
        <div
            className={cn('w-full', className)}
            aria-labelledby="projects-title"
        >
            <script
                type="application/ld+json"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium tracking-wide">
                        DỰ ÁN TIÊU BIỂU
                    </p>
                    <h2
                        id="projects-title"
                        className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        Những dự án nổi bật đã triển khai
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                        Lựa chọn dự án để xem chi tiết. Bố cục tối giản, rõ ràng
                        và tối ưu trải nghiệm.
                    </p>
                </div>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {projects.map((project) => (
                        <article
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
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className={cn(
                                                'object-cover transition duration-300',
                                                'group-hover:opacity-85 group-hover:blur-[1px]',
                                            )}
                                        />
                                    </div>

                                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

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

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="text-foreground text-[15px] leading-6 font-semibold tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground mt-2 text-sm">
                                        {project.category}
                                    </p>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="mt-10 flex justify-center">
                    <Link
                        href="/ho-so-nang-luc"
                        className={cn(
                            'inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold',
                            'border-border bg-card hover:bg-accent/50 border shadow-sm transition-colors',
                            'focus-visible:ring-ring focus:outline-none focus-visible:ring-2',
                        )}
                        aria-label="Xem hồ sơ năng lực"
                    >
                        Xem hồ sơ năng lực
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
}
