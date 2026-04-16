import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

import { getAllProjectSlugs, getProjectBySlug } from '@/lib/content';

const imageBlurDataUrl =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE2IDkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCIgeTE9IjAiIHgyPSIxIiB5Mj0iMSI+PHN0b3Agc3RvcC1jb2xvcj0iI2Y1ZjFmMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Q2ZGRkNiIvPjwvbGluZWFyR3JhZGllbnQ+PHJlY3QgZmlsbD0idXJsKCNhKSIgd2lkdGg9IjE2IiBoZWlnaHQ9IjkiLz48L3N2Zz4=';

type ProjectPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: 'Du an khong ton tai',
        };
    }

    return {
        title: `${project.title} | HPPM`,
        description: project.overview,
    };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) notFound();

    return (
        <main className="bg-background min-h-screen pt-8">
            <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
                <Link
                    href="/du-an"
                    className="group inline-flex items-center gap-3 rounded-full border border-slate-200/80 bg-white/85 px-4 py-2.5 text-sm font-medium text-slate-700 shadow-[0_10px_30px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-50 hover:text-slate-950 hover:shadow-[0_16px_40px_rgba(245,158,11,0.16)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/70"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white transition-colors duration-300 group-hover:bg-amber-500">
                        <ArrowLeft className="h-4 w-4" />
                    </span>
                    <span>Quay lại danh sách dự án</span>
                </Link>

                <p className="mt-8 text-sm font-medium tracking-[0.24em] uppercase text-amber-600">
                    {project.category}
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {project.title}
                </h1>

                <div className="text-muted-foreground mt-6 flex flex-wrap gap-4 text-sm">
                    <span>{project.date}</span>
                    <span>{project.author}</span>
                </div>

                <p className="text-muted-foreground mt-8 text-lg leading-8">
                    {project.overview}
                </p>

                <div className="relative mt-10 h-[320px] overflow-hidden rounded-[32px] border shadow-[0_24px_80px_rgba(0,0,0,0.1)] sm:h-[440px]">
                    <Image
                        src={project.imageUrl}
                        alt={project.imageAlt}
                        fill
                        priority
                        quality={75}
                        placeholder="blur"
                        blurDataURL={imageBlurDataUrl}
                        className="object-cover"
                        sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 48px), 896px"
                    />
                </div>
            </article>
        </main>
    );
}
