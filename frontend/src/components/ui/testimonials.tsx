'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

import { teamData } from '../../../constant/constant-data';
import type { Testimonial } from '@/lib/service/ui';
import { cn } from '@/lib/utils';

export interface TestimonialSectionProps {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
    variant?: 'overlay' | 'profile';
}

const TestimonialSection = ({
    title,
    subtitle,
    testimonials,
    variant = 'profile',
}: TestimonialSectionProps) => {
    const containerVariants: Variants = {
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    const sectionTitleId = 'team-title';

    return (
        <section
            className="bg-background w-full py-16 sm:py-20"
            aria-labelledby={sectionTitleId}
        >
            <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
                <header>
                    <h2
                        id={sectionTitleId}
                        className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl"
                    >
                        {title}
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                        {subtitle}
                    </p>
                </header>

                <motion.div
                    className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    role="list"
                >
                    {testimonials.map((t) => {
                        const alt = t.imageAlt ?? `${t.name} — ${t.role}`;
                        const href =
                            (t as any).href || (t as any).profileUrl || '';

                        const CardInner =
                            variant === 'profile' ? (
                                <>
                                    <div className="bg-muted relative">
                                        {/* Image wrapper for fill */}
                                        <div className="relative h-65 w-full sm:h-70">
                                            <Image
                                                src={t.imageSrc}
                                                alt={alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover"
                                                quality={85}
                                                priority={false}
                                            />
                                        </div>
                                    </div>

                                    <figcaption className="px-6 py-5 text-center">
                                        <div className="text-foreground text-base font-semibold">
                                            {t.name}
                                        </div>
                                        <div className="text-muted-foreground mt-1 text-sm font-medium">
                                            {t.role}
                                        </div>

                                        {t.quote ? (
                                            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                                {t.quote}
                                            </p>
                                        ) : null}
                                    </figcaption>
                                </>
                            ) : (
                                <>
                                    <div className="relative">
                                        <div className="relative h-80 w-full sm:h-90">
                                            <Image
                                                src={t.imageSrc}
                                                alt={alt}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                className="object-cover"
                                                quality={85}
                                                priority={false}
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-transparent" />
                                    </div>

                                    <figcaption className="absolute right-0 bottom-0 left-0 p-6 text-left text-white">
                                        {t.quote ? (
                                            <>
                                                <Quote
                                                    className="mb-4 h-8 w-8 text-white/40"
                                                    aria-hidden="true"
                                                />
                                                <blockquote className="text-base leading-relaxed font-medium">
                                                    {t.quote}
                                                </blockquote>
                                            </>
                                        ) : null}

                                        <p className={t.quote ? 'mt-4' : ''}>
                                            <span className="font-semibold">
                                                {t.name}
                                            </span>
                                            <span className="ml-2 text-white/70">
                                                {t.role}
                                            </span>
                                        </p>
                                    </figcaption>
                                </>
                            );

                        return (
                            <motion.figure
                                key={t.id}
                                variants={itemVariants}
                                role="listitem"
                                className={cn(
                                    'group border-border bg-card overflow-hidden shadow-sm transition',
                                    variant === 'profile'
                                        ? 'rounded-2xl border hover:-translate-y-0.5 hover:shadow-md'
                                        : 'relative rounded-2xl',
                                )}
                            >
                                {href ? (
                                    <Link
                                        href={href}
                                        aria-label={`Xem thông tin: ${t.name}`}
                                        className="focus-visible:ring-ring block rounded-2xl focus:outline-none focus-visible:ring-2"
                                    >
                                        {CardInner}
                                    </Link>
                                ) : (
                                    CardInner
                                )}
                            </motion.figure>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default function TeamSection() {
    return (
        <TestimonialSection
            title="Đội ngũ HPPM"
            subtitle="Nhân sự nòng cốt đồng hành cùng chủ đầu tư và cư dân trong quản lý – vận hành bất động sản."
            testimonials={teamData}
            variant="profile"
        />
    );
}
