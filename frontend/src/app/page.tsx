'use client';
import React, { useCallback, useState } from 'react';
import { FlipWords } from '@/components/ui/flip-words';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();
    const [leave, setLeave] = useState(false);

    const words = ['hiệu quả', 'chuẩn mực', 'bền vững'];

    const goHome = useCallback(() => {
        setLeave(true);
        setTimeout(() => router.push('/home'), 1100);
    }, [router]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            className="relative flex h-160 items-center justify-center overflow-hidden px-4"
            animate={leave ? { y: 120, opacity: 0 } : { y: 0, opacity: 1 }}
            transition={{ duration: 2.0, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="text-3xl font-medium text-neutral-700 sm:text-4xl md:text-5xl dark:text-neutral-300">
                <span
                    className="font-extrabold tracking-wide text-blue-800 dark:text-blue-500"
                    style={{
                        textShadow:
                            '0 0 18px rgba(56,189,248,0.30), 0 0 40px rgba(56,189,248,0.16)',
                    }}
                >
                    HPPM
                </span>{' '}
                <span className="opacity-80">— quản lý vận hành</span>{' '}
                <FlipWords
                    words={words}
                    duration={1200}
                    className="font-semibold text-neutral-900 dark:text-white"
                    onComplete={goHome}
                    loop={false}
                />
            </div>
        </motion.div>
    );
}
