'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const ParallaxScrollSecond = ({ images }: { images: string[] }) => {
    const gridRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: gridRef,
        offset: ['start end', 'end start'],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(images.length / 3);
    const firstPart = images.slice(0, third);
    const secondPart = images.slice(third, 2 * third);
    const thirdPart = images.slice(2 * third);

    return (
        <div ref={gridRef} className="w-full">
            <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-4 px-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="grid gap-4">
                    {firstPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={'grid-1' + idx}
                        >
                            <Image
                                src={el || '/placeholder.svg'}
                                width={640}
                                height={320}
                                className="m-0! h-80 w-full gap-4 rounded-lg object-cover object-top-left p-0!"
                                alt={`Gallery image ${idx + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4">
                    {secondPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateSecond }}
                            key={'grid-2' + idx}
                        >
                            <Image
                                src={el || '/placeholder.svg'}
                                width={640}
                                height={320}
                                className="m-0! h-80 w-full gap-4 rounded-lg object-cover object-top-left p-0!"
                                alt={`Gallery image ${idx + third + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-4">
                    {thirdPart.map((el, idx) => (
                        <motion.div
                            style={{ y: translateThird }}
                            key={'grid-3' + idx}
                        >
                            <Image
                                src={el || '/placeholder.svg'}
                                width={640}
                                height={320}
                                className="m-0! h-80 w-full gap-4 rounded-lg object-cover object-top-left p-0!"
                                alt={`Gallery image ${idx + 2 * third + 1}`}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
