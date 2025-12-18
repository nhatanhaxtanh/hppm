'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HeroHighlight, Highlight } from '@/components/ui/hero-highlight';
import { cn } from '@/lib/utils';
import { options } from '../../../constant/constant-data';
import Link from 'next/link';

export default function HeroInteractive() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
    const [isHovering, setIsHovering] = useState(false);

    const reduceMotion = useReducedMotion();

    useEffect(() => {
        const timers: number[] = [];
        options.forEach((_, i) => {
            const timer = window.setTimeout(() => {
                setAnimatedOptions((prev) =>
                    prev.includes(i) ? prev : [...prev, i],
                );
            }, 160 * i);
            timers.push(timer);
        });
        return () => timers.forEach((t) => window.clearTimeout(t));
    }, [options]);

    const intervalRef = useRef<number | null>(null);

    const startAuto = () => {
        if (reduceMotion) return;
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = window.setInterval(() => {
            setActiveIndex((i) => (i + 1) % options.length);
        }, 3200);
    };

    const stopAuto = () => {
        if (intervalRef.current) window.clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    useEffect(() => {
        if (isHovering) stopAuto();
        else startAuto();
        return () => stopAuto();
    }, [isHovering, reduceMotion, options.length]);

    const handleClickOption = (index: number) => {
        setActiveIndex(index);
        if (!isHovering) startAuto();
    };

    return (
        <HeroHighlight
            containerClassName={cn('h-auto w-full py-10 sm:py-14 lg:py-16')}
        >
            <div className="w-full px-4 sm:px-6">
                <div className="mx-auto max-w-6xl text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 18 }}
                        animate={{ opacity: 1, y: [18, -6, 0] }}
                        transition={{
                            duration: 0.55,
                            ease: [0.4, 0.0, 0.2, 1],
                        }}
                        className="text-3xl leading-tight font-semibold tracking-tight text-neutral-800 sm:text-4xl lg:text-5xl dark:text-white"
                    >
                        Vận hành tòa nhà chuẩn mực, minh bạch —{' '}
                        <Highlight className="text-neutral-900 dark:text-white">
                            an tâm từ ngày đầu.
                        </Highlight>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.12 }}
                        className="mt-4 text-base text-neutral-600 sm:text-lg dark:text-neutral-300"
                    >
                        Tối ưu{' '}
                        <Highlight className="text-neutral-900 dark:text-white">
                            bảo trì
                        </Highlight>
                        , chuẩn hóa{' '}
                        <Highlight className="text-neutral-900 dark:text-white">
                            quy trình vận hành
                        </Highlight>
                        , và nâng trải nghiệm cư dân với hệ thống quản trị rõ
                        ràng.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: 0.22 }}
                        className="mt-6 flex flex-wrap items-center justify-center gap-3"
                    >
                        <Link
                            href="/info/contact"
                            className={cn(
                                'inline-flex items-center justify-center',
                                'rounded-full px-6 py-2.5 text-sm font-semibold',
                                'leading-none tracking-[0.01em]',
                                'bg-neutral-900 text-white hover:bg-neutral-800',
                                'dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
                                'ring-1 ring-neutral-900/10 hover:ring-neutral-900/20',
                                'dark:ring-white/15 dark:hover:ring-white/25',
                                'focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none',
                                'dark:focus-visible:ring-offset-black',
                                'transition-colors',
                            )}
                        >
                            Liên hệ tư vấn
                        </Link>{' '}
                    </motion.div>
                </div>

                <div className="mt-10">
                    <div
                        className={cn(
                            'border-border mx-auto flex w-full items-stretch overflow-hidden border bg-neutral-950',
                            'h-130 max-w-420',
                            'rounded-[32px]',
                            'shadow-[0_28px_100px_rgba(0,0,0,0.40)]',
                        )}
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                    >
                        {options.map((option, index) => {
                            const isActive = activeIndex === index;
                            const isShown = animatedOptions.includes(index);

                            return (
                                <div
                                    key={index}
                                    className={cn(
                                        'relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out',
                                    )}
                                    style={{
                                        backgroundImage: `url('${option.image}')`,
                                        backgroundSize: isActive
                                            ? 'cover'
                                            : 'auto 120%',
                                        backgroundPosition: 'center',
                                        opacity: isShown ? 1 : 0,
                                        transform: isShown
                                            ? 'translateX(0)'
                                            : 'translateX(-50px)',
                                        minWidth: '72px',
                                        borderRight:
                                            '1px solid rgba(255,255,255,0.10)',
                                        cursor: 'pointer',
                                        boxShadow: isActive
                                            ? '0 20px 60px rgba(0,0,0,0.50)'
                                            : '0 10px 30px rgba(0,0,0,0.30)',
                                        flex: isActive ? '7 1 0%' : '1 1 0%',
                                        zIndex: isActive ? 10 : 1,
                                        willChange:
                                            'flex-grow, box-shadow, background-size, background-position',
                                    }}
                                    onClick={() => handleClickOption(index)}
                                    aria-label={option.title}
                                    role="button"
                                    tabIndex={0}
                                >
                                    <div
                                        className="pointer-events-none absolute inset-x-0 transition-all duration-700 ease-in-out"
                                        style={{
                                            bottom: isActive ? '0' : '-40px',
                                            height: '200px',
                                            boxShadow: isActive
                                                ? 'inset 0 -140px 140px -120px #000, inset 0 -140px 140px -80px #000'
                                                : 'inset 0 -140px 0px -120px #000, inset 0 -140px 0px -80px #000',
                                        }}
                                    />

                                    <div className="pointer-events-none absolute inset-x-0 bottom-5 z-10 flex items-center gap-3 px-4">
                                        <div className="flex h-11 max-w-11 min-w-11 items-center justify-center rounded-full border border-white/15 bg-black/40 backdrop-blur-md">
                                            {option.icon}
                                        </div>

                                        <div className="text-white">
                                            <div
                                                className="text-base font-semibold transition-all duration-700 ease-in-out"
                                                style={{
                                                    opacity: isActive ? 1 : 0,
                                                    transform: isActive
                                                        ? 'translateX(0)'
                                                        : 'translateX(25px)',
                                                }}
                                            >
                                                {option.title}
                                            </div>
                                            <div
                                                className="text-sm text-white/80 transition-all duration-700 ease-in-out"
                                                style={{
                                                    opacity: isActive ? 1 : 0,
                                                    transform: isActive
                                                        ? 'translateX(0)'
                                                        : 'translateX(25px)',
                                                }}
                                            >
                                                {option.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </HeroHighlight>
    );
}
