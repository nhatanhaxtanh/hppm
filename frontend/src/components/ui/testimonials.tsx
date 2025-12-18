'use client';

import { motion, Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

export interface Testimonial {
    id: number;
    quote?: string;
    name: string;
    role: string;
    imageSrc: string;
    imageAlt?: string;
}

const teamData: Testimonial[] = [
    {
        id: 1,
        name: 'Trần Thị Diễm Hương',
        role: 'Tổng Giám Đốc',
        imageSrc:
            'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Trần Thị Diễm Hương - Tổng Giám Đốc HPPM',
    },
    {
        id: 2,
        name: 'Nguyễn Lê Duy Khánh',
        role: 'Phó Tổng Giám Đốc',
        imageSrc:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Nguyễn Lê Duy Khánh - Phó Tổng Giám Đốc HPPM',
    },
    {
        id: 3,
        name: 'Nguyễn Tấn Phú',
        role: 'Giám Đốc Dự Án',
        imageSrc:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Nguyễn Tấn Phú - Giám Đốc Dự Án HPPM',
    },
    {
        id: 4,
        name: 'Lê Nhật Anh',
        role: 'Trợ Lý Tổng Giám Đốc',
        imageSrc:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Lê Nhật Anh - Trợ Lý Tổng Giám Đốc HPPM',
    },
];

export interface TestimonialSectionProps {
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
    variant?: 'overlay' | 'profile';
}

const TestimonialSection = ({
    title,
    subtitle,
    testimonials,
    variant = 'profile',
}: TestimonialSectionProps) => {
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.12 },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 18 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: 'easeOut' },
        },
    };

    return (
        <section className="bg-background w-full py-16 sm:py-20">
            <div className="mx-auto w-full max-w-6xl px-4 text-center sm:px-6">
                <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                    {title}
                </h2>
                <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                    {subtitle}
                </p>

                <motion.div
                    className="mt-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {testimonials.map((t) => {
                        const alt = t.imageAlt ?? `${t.name} — ${t.role}`;

                        if (variant === 'profile') {
                            return (
                                <motion.figure
                                    key={t.id}
                                    className="group border-border bg-card overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                                    variants={itemVariants}
                                >
                                    <div className="bg-muted relative">
                                        <img
                                            src={t.imageSrc}
                                            alt={alt}
                                            className="h-65 w-full object-cover sm:h-70"
                                            loading="lazy"
                                        />
                                    </div>

                                    <figcaption className="px-6 py-5 text-center">
                                        <div className="text-foreground text-base font-semibold">
                                            {t.name}
                                        </div>
                                        <div className="text-muted-foreground mt-1 text-sm font-medium">
                                            {t.role}
                                        </div>

                                        {/* nếu sau này bạn muốn thêm quote nhỏ thì vẫn hỗ trợ */}
                                        {t.quote ? (
                                            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                                                {t.quote}
                                            </p>
                                        ) : null}
                                    </figcaption>
                                </motion.figure>
                            );
                        }

                        // ===== OVERLAY variant (testimonial style: text nổi trên ảnh) =====
                        return (
                            <motion.figure
                                key={t.id}
                                className="bg-card relative overflow-hidden rounded-2xl shadow-sm"
                                variants={itemVariants}
                            >
                                <div className="relative">
                                    <img
                                        src={t.imageSrc}
                                        alt={alt}
                                        className="h-80 w-full object-cover sm:h-90"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/40 to-transparent" />
                                </div>

                                <figcaption className="absolute right-0 bottom-0 left-0 p-6 text-left text-white">
                                    {t.quote ? (
                                        <>
                                            <Quote
                                                className="mb-4 h-8 w-8 text-white/40"
                                                aria-hidden="true"
                                            />
                                            <blockquote className="text-base leading-relaxed font-medium">
                                                {t.quote}
                                            </blockquote>
                                        </>
                                    ) : null}

                                    <p className={t.quote ? 'mt-4' : ''}>
                                        <span className="font-semibold">
                                            {t.name}
                                        </span>
                                        <span className="ml-2 text-white/70">
                                            {t.role}
                                        </span>
                                    </p>
                                </figcaption>
                            </motion.figure>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default function TeamSection() {
    return (
        <TestimonialSection
            title="Đội ngũ HPPM"
            subtitle="Nhân sự nòng cốt đồng hành cùng chủ đầu tư và cư dân trong quản lý – vận hành bất động sản."
            testimonials={teamData}
            variant="profile"
        />
    );
}
