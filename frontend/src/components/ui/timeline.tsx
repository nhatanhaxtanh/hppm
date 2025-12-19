'use client';
import type React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="relative mx-auto w-full max-w-7xl px-6 py-20"
            ref={containerRef}
        >
            <div ref={ref} className="relative">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="mb-20 flex justify-start md:gap-10"
                    >
                        {/* Left side - Year */}
                        <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
                            <div className="bg-background absolute left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3">
                                <div className="bg-primary h-4 w-4 rounded-full border-4 border-neutral-200 p-2 dark:border-neutral-700" />
                            </div>
                            <h3 className="text-foreground ml-16 block text-2xl font-bold md:ml-20 md:pl-20 md:text-5xl">
                                {item.title}
                            </h3>
                        </div>

                        {/* Right side - Content */}
                        <div className="relative w-full pr-4 pl-20 md:pl-4">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                className="border-border bg-card rounded-2xl border p-8 shadow-lg"
                            >
                                {item.content}
                            </motion.div>
                        </div>
                    </div>
                ))}

                {/* Vertical Line */}
                <div
                    style={{
                        height: '100%',
                    }}
                    className="absolute top-0 left-8 w-0.5 overflow-hidden bg-gradient-to-b from-purple-200 via-blue-200 to-transparent md:left-8 dark:from-purple-400 dark:via-blue-400 dark:to-transparent"
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-gradient-to-b from-purple-500 via-pink-500 to-amber-400"
                    />
                </div>
            </div>
        </div>
    );
};
