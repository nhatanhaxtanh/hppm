'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export const FlipWords = ({
    words,
    duration = 1200,
    className,
    onComplete,
    loop = false,
}: {
    words: string[];
    duration?: number;
    className?: string;
    onComplete?: () => void;
    loop?: boolean;
}) => {
    const [index, setIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const finishedRef = useRef(false);

    const currentWord = useMemo(() => words[index] ?? words[0], [index, words]);

    const startAnimation = useCallback(() => {
        if (finishedRef.current) return;

        const nextIndex = index + 1;

        if (nextIndex >= words.length) {
            if (loop) {
                setIndex(0);
                setIsAnimating(true);
                return;
            }

            finishedRef.current = true;
            onComplete?.();
            return;
        }

        setIndex(nextIndex);
        setIsAnimating(true);
    }, [index, words.length, loop, onComplete]);

    useEffect(() => {
        if (finishedRef.current) return;

        if (!isAnimating) {
            const t = setTimeout(() => startAnimation(), duration);
            return () => clearTimeout(t);
        }
    }, [isAnimating, duration, startAnimation]);

    return (
        <AnimatePresence
            onExitComplete={() => {
                setIsAnimating(false);
            }}
            mode="popLayout"
        >
            <motion.div
                key={currentWord}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 140, damping: 14 }}
                exit={{
                    opacity: 0,
                    y: -24,
                    x: 24,
                    filter: 'blur(8px)',
                    scale: 1.2,
                    position: 'absolute',
                }}
                className={cn(
                    // ✅ responsive-friendly: không khóa wrap toàn bộ dòng, giữ baseline ổn định
                    'relative z-10 inline-flex px-1 align-baseline sm:px-2',
                    'min-h-[1.2em] leading-tight break-keep',
                    'text-left text-neutral-900 dark:text-neutral-100',
                    className,
                )}
            >
                {currentWord.split(' ').map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: wordIndex * 0.22, duration: 0.28 }}
                        className="inline-block"
                    >
                        {word.split('').map((letter, letterIndex) => (
                            <motion.span
                                key={word + letterIndex}
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                    filter: 'blur(8px)',
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    filter: 'blur(0px)',
                                }}
                                transition={{
                                    delay:
                                        wordIndex * 0.22 + letterIndex * 0.035,
                                    duration: 0.18,
                                }}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                        <span className="inline-block">&nbsp;</span>
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};
