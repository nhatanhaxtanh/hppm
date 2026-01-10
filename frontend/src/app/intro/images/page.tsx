'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Building2 } from 'lucide-react';
import InteractiveBentoGallery from '@/components/ui/interactive-bento-gallery';
import { Component as ImageAutoSlider } from '@/components/ui/image-auto-slider';
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';

const heroIconClass = 'text-sky-600';

const galleryItems = [
    {
        id: 1,
        type: 'image',
        title: 'Anurag Mishra',
        desc: 'Driven, innovative, visionary',
        url: 'https://kxptt4m9j4.ufs.sh/f/9YHhEDeslzkcbP3rYTiXwH7Y106CepJOsoAgQjyFi3MUfDkh',
        span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
    },
    {
        id: 2,
        type: 'video',
        title: 'Dog Puppy',
        desc: 'Adorable loyal companion.',
        url: 'https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4',
        span: 'md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2',
    },
    {
        id: 3,
        type: 'image',
        title: 'Forest Path',
        desc: 'Mystical forest trail',
        url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
        span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
    },
    {
        id: 4,
        type: 'image',
        title: 'Falling Leaves',
        desc: 'Autumn scenery',
        url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
        span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
    },
    {
        id: 5,
        type: 'video',
        title: 'Bird Parrot',
        desc: 'Vibrant feathered charm',
        url: 'https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4',
        span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
    },
    {
        id: 6,
        type: 'image',
        title: 'Beach Paradise',
        desc: 'Sunny tropical beach',
        url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
        span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
    },
    {
        id: 7,
        type: 'video',
        title: 'Shiva Temple',
        desc: 'Peaceful Shiva sanctuary.',
        url: 'https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4',
        span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
    },
];

const parallaxImages = [
    'https://images.unsplash.com/photo-1486325212027-8081e485255e',
    'https://images.unsplash.com/photo-1449844908441-8829872d2607',
    'https://images.unsplash.com/photo-1489515217757-5fd1be406fef',
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    'https://images.unsplash.com/photo-1494526585095-c41746248156',
    'https://images.unsplash.com/photo-1460317442991-0ec209397118',
    'https://images.unsplash.com/photo-1430285561322-7808604715df',
    'https://images.unsplash.com/photo-1472220625704-91e1462799b2',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
    'https://images.unsplash.com/photo-1502005097973-6a7082348e28',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9',
];

const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.23, 0.86, 0.39, 0.96] as const,
        },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
};

export default function CompanyIntroduction() {
    return (
        <main className="bg-background text-foreground min-h-screen">
            {/* Hero Section */}
            <section className="from-primary/5 via-background to-accent/5 relative overflow-hidden py-24 md:py-32">
                <motion.div
                    className="relative z-10 mx-auto max-w-7xl px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-16 text-center"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="border-border bg-card/80 mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 shadow-sm backdrop-blur-sm"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Building2 className={`h-5 w-5 ${heroIconClass}`} />
                            <span className="text-sm font-medium">
                                Đơn vị quản lý tòa nhà hàng đầu Việt Nam
                            </span>
                        </motion.div>

                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                            Hình ảnh{' '}
                            <motion.span
                                className="bg-linear-to-r from-blue-300 via-blue-600 to-blue-900 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: [
                                        '0% 50%',
                                        '100% 50%',
                                        '0% 50%',
                                    ],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: 'easeInOut',
                                }}
                                style={{
                                    backgroundSize: '200% 200%',
                                }}
                            >
                                HPPM
                            </motion.span>
                        </h1>

                        <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed text-pretty sm:text-xl md:text-2xl">
                            Hơn 14 năm kinh nghiệm quản lý vận hành chung cư,
                            khu biệt thự và tổ hợp thương mại. Chúng tôi mang
                            đến giải pháp toàn diện cho cư dân và chủ đầu tư.
                        </p>

                        <motion.div
                            className="mt-8 flex flex-wrap items-center justify-center gap-4"
                            variants={fadeInUp}
                        >
                            <a
                                href="#services"
                                className="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-8 py-4 font-semibold shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            >
                                Khám phá dịch vụ
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <Link
                                href="/info/contact"
                                className="border-border bg-background text-foreground hover:bg-accent inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 font-semibold transition-all"
                            >
                                Liên hệ tư vấn
                            </Link>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Interactive Gallery */}
            <section className="bg-background -mt-20 pb-10 md:pb-12">
                <InteractiveBentoGallery mediaItems={galleryItems} />
            </section>

            {/* Parallax Scroll */}
            <section className="bg-background pt-12 pb-10 md:pt-16 md:pb-12">
                <ParallaxScrollSecond images={parallaxImages} />
            </section>

            {/* Image Auto Slider */}
            <section className="bg-background pb-12 md:pb-16">
                <ImageAutoSlider />
            </section>
        </main>
    );
}
