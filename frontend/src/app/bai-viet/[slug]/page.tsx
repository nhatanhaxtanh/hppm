import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getAllPostSlugs, getPostBySlug } from '@/lib/content';

type PostPageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return {
            title: 'Bai viet khong ton tai',
        };
    }

    return {
        title: `${post.title} | HPPM`,
        description: post.excerpt,
    };
}

export default async function PostDetailPage({ params }: PostPageProps) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) notFound();

    return (
        <main className="bg-background min-h-screen pt-24">
            <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
                <Link
                    href="/bai-viet"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                    Quay lai danh sach bai viet
                </Link>

                <p className="mt-8 text-sm font-medium tracking-[0.24em] uppercase text-emerald-700">
                    {post.category}
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
                    {post.title}
                </h1>

                <div className="text-muted-foreground mt-6 flex flex-wrap gap-4 text-sm">
                    <span>{post.date}</span>
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                </div>

                <p className="text-muted-foreground mt-8 text-lg leading-8">
                    {post.excerpt}
                </p>

                <div className="relative mt-10 h-[320px] overflow-hidden rounded-[32px] border shadow-[0_24px_80px_rgba(0,0,0,0.1)] sm:h-[440px]">
                    <Image
                        src={post.imageUrl}
                        alt={post.imageAlt}
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>

                <div className="mt-12 space-y-10">
                    {post.sections.map((section) => (
                        <section key={section.title} className="space-y-4">
                            <h2 className="text-2xl font-semibold tracking-tight">
                                {section.title}
                            </h2>
                            {section.content.map((paragraph) => (
                                <p
                                    key={paragraph}
                                    className="text-muted-foreground leading-8"
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </section>
                    ))}
                </div>
            </article>
        </main>
    );
}
