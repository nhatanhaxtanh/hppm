'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const badgeIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

export default function HomeCtaSection() {
    return (
        <section className="bg-muted/30 w-full py-20 md:py-32">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="mx-auto w-full max-w-7xl px-4 md:px-6"
            >
                <div className="bg-background mx-auto flex w-full max-w-6xl flex-col items-center rounded-2xl border p-12 text-center shadow-lg md:p-16">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={badgeIn}
                        className="mb-6"
                    >
                        <Badge>Liên hệ ngay</Badge>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-6 max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                    >
                        Cùng HPPM tối ưu vận hành và nâng tầm giá trị tài sản
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-muted-foreground mb-8 max-w-2xl text-lg"
                    >
                        Nhận tư vấn giải pháp quản lý vận hành phù hợp với mô
                        hình dự án của bạn — minh bạch, hiệu quả và dễ kiểm soát.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col gap-4 sm:flex-row"
                    >
                        <Button size="lg" className="group" asChild>
                            <Link href="/info/contact">
                                Liên hệ ngay
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/services/estate">
                                Xem dịch vụ quản lý
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
