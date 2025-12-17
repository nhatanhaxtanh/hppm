'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ArrowDown, ShieldCheck, Wrench, ClipboardCheck } from 'lucide-react';

type Feature = {
    id: number;
    title: string;
    eyebrow: string;
    description: string;
    bullets: string[];
    imageUrl: string;
    icon: React.ReactNode;
    reverse?: boolean;
};

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
                {/* Text */}
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
                        {/* overlay nhẹ để chữ/nhãn nổi */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
                        <img
                            src={feature.imageUrl}
                            alt={feature.title}
                            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
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
    const features: Feature[] = [
        {
            id: 1,
            eyebrow: '25+ năm kinh nghiệm',
            title: 'Vận hành chuẩn quy trình, minh bạch từng hạng mục',
            description:
                'Từ checklist vận hành đến báo cáo định kỳ: mọi thứ rõ ràng, dễ kiểm soát và dễ bàn giao cho ban quản lý.',
            bullets: [
                'Quy trình chuẩn hoá theo từng loại tài sản',
                'Báo cáo theo tuần/tháng, dễ audit',
                'Giảm “mất dấu” công việc khi chuyển ca / thay người',
            ],
            imageUrl:
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
            icon: <ClipboardCheck className="text-primary h-5 w-5" />,
            reverse: false,
        },
        {
            id: 2,
            eyebrow: 'Bảo trì & tối ưu chi phí',
            title: 'Bảo trì định kỳ thông minh, hạn chế downtime',
            description:
                'Lên lịch bảo trì theo rủi ro và tần suất sử dụng để giảm sự cố đột xuất, tối ưu chi phí và tuổi thọ hệ thống.',
            bullets: [
                'Kế hoạch bảo trì theo tuần/tháng/quý',
                'Theo dõi tiến độ & lịch sử xử lý',
                'Ưu tiên hạng mục ảnh hưởng an toàn/vận hành',
            ],
            imageUrl:
                'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80',
            icon: <Wrench className="text-primary h-5 w-5" />,
            reverse: true,
        },
        {
            id: 3,
            eyebrow: 'An toàn hệ thống',
            title: 'Giám sát rủi ro, xử lý sự cố đúng chuẩn',
            description:
                'Tập trung vào an toàn điện/nước/PCCC và các điểm rủi ro vận hành để giảm sự cố và tăng sự an tâm cho cư dân/khách hàng.',
            bullets: [
                'Checklist an toàn định kỳ, có đối soát',
                'Quy trình xử lý sự cố rõ ràng',
                'Tăng tính sẵn sàng của hệ thống quan trọng',
            ],
            imageUrl:
                'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80',
            icon: <ShieldCheck className="text-primary h-5 w-5" />,
            reverse: false,
        },
    ];

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
