'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Feature } from '@/lib/service/ui';
import { features } from '../../../constant/constant-data';

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

    return (
        <section ref={ref} className={cn('w-full', 'py-12 sm:py-16 lg:py-20')}>
            <div
                className={cn(
                    'mx-auto w-full max-w-6xl px-4 sm:px-6',
                    'grid items-center gap-10 lg:gap-14',
                    'lg:grid-cols-12',
                )}
            >
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
                        <div className="text-muted-foreground text-sm font-medium">
                            {feature.eyebrow}
                        </div>
                    </div>

                    <h3 className="text-foreground mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
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
                </motion.div>

                <motion.div
                    style={{ opacity, clipPath: clip, y: yImg }}
                    className={cn(
                        'lg:col-span-7',
                        feature.reverse ? 'lg:order-1' : 'lg:order-2',
                    )}
                >
                    <div className="border-border bg-muted relative overflow-hidden rounded-[28px] border shadow-[0_28px_100px_rgba(0,0,0,0.12)]">
                        <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-black/10 to-transparent" />
                        <img
                            src={feature.imageUrl}
                            alt={feature.title}
                            className="h-80 w-full object-cover sm:h-105 lg:h-130"
                            loading="lazy"
                        />
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
            <div className="w-full py-14 sm:py-16">
                <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
                    <div className="text-muted-foreground text-sm font-medium tracking-wide">
                        NĂNG LỰC & KINH NGHIỆM
                    </div>
                    <h2 className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        25+ năm đồng hành vận hành & quản lý bất động sản
                    </h2>
                </div>
            </div>

            <div className="w-full">
                {features.map((f) => (
                    <FeatureRow key={f.id} feature={f} />
                ))}
            </div>
        </div>
    );
}
