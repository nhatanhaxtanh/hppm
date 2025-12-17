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
                transition={{ type: 'spring', stiffness: 100, damping: 12 }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: 'blur(8px)',
                    scale: 1.6,
                    position: 'absolute',
                }}
                className={cn(
                    'relative z-10 inline-block px-2 text-left text-neutral-900 dark:text-neutral-100',
                    className,
                )}
            >
                {currentWord.split(' ').map((word, wordIndex) => (
                    <motion.span
                        key={word + wordIndex}
                        initial={{ opacity: 0, y: 10, filter: 'blur(8px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        transition={{ delay: wordIndex * 0.22, duration: 0.28 }}
                        className="inline-block whitespace-nowrap"
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
