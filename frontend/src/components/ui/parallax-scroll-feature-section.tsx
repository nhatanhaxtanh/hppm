'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Feature } from '@/lib/service/ui';
import { features } from '../../../constant/constant-data';
import { ArrowRight } from 'lucide-react';

function FeatureRow({ feature }: { feature: Feature }) {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'start start'],
    });

    const yText = useTransform(scrollYProgress, [0, 0.75], [28, 0]);
    const opacity = useTransform(scrollYProgress, [0.15, 0.6], [0, 1]);
    const clip = useTransform(
        scrollYProgress,
        [0.15, 0.7],
        ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
    );
    const yImg = useTransform(scrollYProgress, [0, 1], [24, -12]);

    const titleId = `feature-${feature.id}-title`;
    const eyebrowId = `feature-${feature.id}-eyebrow`;

    return (
        <section
            ref={ref as any}
            aria-labelledby={titleId}
            className={cn('w-full', 'py-12 sm:py-16 lg:py-20')}
        >
            <div
                className={cn(
                    'mx-auto w-full max-w-6xl px-4 sm:px-6',
                    'grid items-center gap-10 lg:gap-14',
                    'lg:grid-cols-12',
                )}
            >
                {/* TEXT */}
                <motion.div
                    style={{ opacity, y: yText }}
                    className={cn(
                        'lg:col-span-5',
                        feature.reverse ? 'lg:order-2' : 'lg:order-1',
                    )}
                >
                    <div className="flex items-center gap-3">
                        <div className="border-border bg-background/70 flex h-11 w-11 items-center justify-center rounded-2xl border backdrop-blur">
                            {feature.icon}
                        </div>

                        <div
                            id={eyebrowId}
                            className="text-muted-foreground text-sm font-medium tracking-wide"
                        >
                            {feature.eyebrow}
                        </div>
                    </div>

                    <h3
                        id={titleId}
                        className="text-foreground mt-4 text-2xl font-semibold tracking-tight sm:text-3xl"
                    >
                        {feature.title}
                    </h3>

                    <p className="text-muted-foreground mt-3 text-base leading-relaxed">
                        {feature.description}
                    </p>

                    <ul className="text-muted-foreground mt-6 space-y-2 text-sm">
                        {feature.bullets.map((b, i) => (
                            <li key={i} className="flex gap-2">
                                <span className="bg-primary/70 mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full" />
                                <span>{b}</span>
                            </li>
                        ))}
                    </ul>

                    {/* Optional CTA nếu có href */}
                    {'href' in feature && (feature as any).href ? (
                        <div className="mt-8">
                            <Link
                                href={(feature as any).href}
                                className={cn(
                                    'inline-flex items-center gap-2 text-sm font-semibold',
                                    'text-foreground hover:text-foreground/80',
                                    'transition-colors',
                                )}
                                aria-label={`Xem thêm: ${feature.title}`}
                            >
                                <span>Xem thêm</span>
                                <ArrowRight className="h-4 w-4" />
                            </Link>
                        </div>
                    ) : null}
                </motion.div>

                {/* IMAGE */}
                <motion.div
                    style={{ opacity, clipPath: clip as any, y: yImg }}
                    className={cn(
                        'lg:col-span-7',
                        feature.reverse ? 'lg:order-1' : 'lg:order-2',
                    )}
                >
                    <div className="border-border bg-muted relative overflow-hidden rounded-[28px] border shadow-[0_28px_100px_rgba(0,0,0,0.12)]">
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />

                        {/* Next Image: wrapper có height để fill */}
                        <div className="relative h-80 w-full sm:h-105 lg:h-130">
                            <Image
                                src={feature.imageUrl}
                                alt={feature.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 58vw"
                                className="object-cover"
                                quality={85}
                                priority={false}
                            />
                        </div>

                        <div className="absolute top-5 left-5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                            {feature.eyebrow}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default function ExperienceFeatures() {
    return (
        <div className="w-full">
            <header
                className="w-full py-14 sm:py-16"
                aria-labelledby="experience-title"
            >
                <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
                    <div className="text-muted-foreground text-sm font-medium tracking-wide">
                        NĂNG LỰC & KINH NGHIỆM
                    </div>
                    <h2
                        id="experience-title"
                        className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        25+ năm đồng hành vận hành & quản lý bất động sản
                    </h2>
                </div>
            </header>

            <div className="w-full">
                {features.map((f) => (
                    <FeatureRow key={f.id} feature={f} />
                ))}
            </div>
        </div>
    );
}
