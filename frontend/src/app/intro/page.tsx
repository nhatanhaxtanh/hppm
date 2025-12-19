'use client';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Building2,
    Users,
    Award,
    TrendingUp,
    Shield,
    Clock,
    HeartHandshake,
    Target,
    CheckCircle2,
    ArrowRight,
} from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';
import { ParallaxScrollSecond } from '@/components/ui/parallax-scroll';

const companyFeatures = [
    {
        label: 'Căn hộ & biệt thự đang phục vụ',
        value: '18.000+',
        description:
            'Đơn vị tiên phong trong lĩnh vực quản lý vận hành bất động sản cao cấp',
        icon: Building2,
        image: '/villa.jpg',
    },
    {
        label: 'Khu đô thị, chung cư, biệt thự',
        value: '45+ dự án',
        description: 'Phủ sóng các dự án bất động sản hàng đầu tại Việt Nam',
        icon: Target,
        image: '/building2.jpg',
    },
    {
        label: 'Đội ngũ onsite & kỹ thuật',
        value: '600+ nhân sự',
        description: 'Đội ngũ chuyên nghiệp, tận tâm phục vụ cư dân 24/7',
        icon: Users,
        image: '/hr.jpg',
    },
    {
        label: 'Mức độ hài lòng cư dân',
        value: '4.8/5',
        description:
            'Cam kết chất lượng dịch vụ vượt trội được cư dân tin tưởng',
        icon: Award,
        image: '/residents.jpg',
    },
];

const services = [
    {
        icon: Shield,
        title: 'Quản lý vận hành chuyên nghiệp',
        description:
            'Đội ngũ quản lý dày dặn kinh nghiệm, vận hành theo tiêu chuẩn quốc tế cho chung cư cao cấp và khu biệt thự',
    },
    {
        icon: Clock,
        title: 'Dịch vụ cư dân 24/7',
        description:
            'Hotline tiếp nhận yêu cầu, bảo trì sửa chữa và hỗ trợ khẩn cấp hoạt động liên tục cho cư dân và chủ đầu tư',
    },
    {
        icon: TrendingUp,
        title: 'Tối ưu chi phí vận hành',
        description:
            'Giải pháp quản lý thông minh giúp giảm chi phí năng lượng, bảo trì và nâng cao giá trị tài sản bất động sản',
    },
    {
        icon: HeartHandshake,
        title: 'Xây dựng cộng đồng văn minh',
        description:
            'Tổ chức hoạt động, sự kiện kết nối cư dân tạo nên môi trường sống an toàn, thân thiện và đẳng cấp',
    },
];

const timelineData = [
    {
        title: '2010',
        content: (
            <div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">
                    Thành lập công ty
                </h3>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                    Khởi đầu với 5 dự án chung cư tại TP.HCM, đặt nền móng cho
                    sự phát triển bền vững trong lĩnh vực quản lý bất động sản.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            5
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Dự án đầu tiên
                        </div>
                    </div>
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            50+
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Nhân viên
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: '2015',
        content: (
            <div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">
                    Mở rộng toàn quốc
                </h3>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                    Phục vụ 15 dự án tại Hà Nội, Đà Nẵng và các tỉnh thành.
                    Khẳng định vị thế trong ngành quản lý tòa nhà chuyên nghiệp.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            15
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Dự án
                        </div>
                    </div>
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            3
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Thành phố lớn
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: '2020',
        content: (
            <div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">
                    Chuyển đổi số
                </h3>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                    Triển khai hệ thống quản lý thông minh trên nền tảng AI, tối
                    ưu hóa quy trình và nâng cao trải nghiệm cư dân.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            100%
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Số hóa quy trình
                        </div>
                    </div>
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            AI
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Công nghệ tiên tiến
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
    {
        title: '2024',
        content: (
            <div>
                <h3 className="text-foreground mb-3 text-2xl font-bold">
                    Dẫn đầu thị trường
                </h3>
                <p className="text-muted-foreground mb-4 text-base leading-relaxed">
                    Quản lý hơn 45 dự án với 18.000+ căn hộ trên cả nước. Trở
                    thành đơn vị quản lý tòa nhà hàng đầu Việt Nam.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            45+
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Dự án
                        </div>
                    </div>
                    <div className="border-border bg-card rounded-lg border p-4">
                        <div className="text-primary mb-1 text-2xl font-bold">
                            18K+
                        </div>
                        <div className="text-muted-foreground text-sm">
                            Căn hộ
                        </div>
                    </div>
                </div>
            </div>
        ),
    },
];

const contactMethods = [
    {
        icon: Mail,
        title: 'Email',
        description: 'Gửi yêu cầu tư vấn qua email',
        value: 'operation@hppm.com',
        link: 'mailto:operation@hppm.com',
    },
    {
        icon: Phone,
        title: 'Hotline',
        description: 'Liên hệ qua hotline',
        value: '1900 6060',
        link: 'tel:19006060',
    },
    {
        icon: MapPin,
        title: 'Địa chỉ',
        description: 'Visit us at our office',
        value: '123 Đường ABC, TP.HCM',
        link: 'https://maps.google.com/?q=123+Đường+ABC,+TP.HCM',
    },
];

const heroIconClass = 'text-sky-600';

const statIconStyles = [
    { wrapper: 'bg-sky-100', icon: 'text-sky-600' },
    { wrapper: 'bg-emerald-100', icon: 'text-emerald-600' },
    { wrapper: 'bg-amber-100', icon: 'text-amber-600' },
    { wrapper: 'bg-indigo-100', icon: 'text-indigo-600' },
];

const serviceIconStyles = [
    { wrapper: 'bg-blue-100', icon: 'text-blue-600' },
    { wrapper: 'bg-rose-100', icon: 'text-rose-600' },
    { wrapper: 'bg-lime-100', icon: 'text-lime-600' },
    { wrapper: 'bg-fuchsia-100', icon: 'text-fuchsia-600' },
];

const contactIconStyles = [
    { wrapper: 'bg-cyan-100', icon: 'text-cyan-600' },
    { wrapper: 'bg-violet-100', icon: 'text-violet-600' },
    { wrapper: 'bg-orange-100', icon: 'text-orange-600' },
];

const galleryImages = [
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1682686581854-5e71f58e7e3f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1510784722466-f2aa9c52fff6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1439853949127-fa647821eba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2640&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
    'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    'https://images.unsplash.com/photo-1505144808419-1957a94ca61e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3070&q=80',
];

export default function CompanyIntroduction() {
    const [activeService, setActiveService] = useState<number | null>(null);

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
                            <span className="text-foreground">
                                Chuyên nghiệp
                            </span>
                            <br />
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
                                trong từng dịch vụ
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

                    {/* Features */}
                    <motion.div
                        className="grid gap-6 md:grid-cols-2"
                        variants={fadeInUp}
                    >
                        {companyFeatures.map((feature, index) => {
                            const colors =
                                statIconStyles[index % statIconStyles.length];
                            return (
                                <motion.div
                                    key={index}
                                    className="group border-border bg-card overflow-hidden rounded-2xl border shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                                    whileHover={{ scale: 1.02 }}
                                    variants={fadeInUp}
                                >
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={
                                                feature.image ||
                                                '/placeholder.svg'
                                            }
                                            alt={feature.label}
                                            width={800}
                                            height={400}
                                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

                                        {/* Icon Badge */}
                                        <motion.div
                                            className={`absolute top-4 right-4 flex h-12 w-12 items-center justify-center rounded-xl ${colors.wrapper} shadow-lg`}
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <feature.icon
                                                className={`h-6 w-6 ${colors.icon}`}
                                            />
                                        </motion.div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-6">
                                        <div className="mb-2 flex items-baseline gap-2">
                                            <div className="text-foreground text-4xl font-bold">
                                                {feature.value}
                                            </div>
                                        </div>
                                        <h3 className="text-foreground mb-2 text-lg font-semibold">
                                            {feature.label}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 md:py-32">
                <motion.div
                    className="mx-auto max-w-7xl px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-16 text-center"
                        variants={fadeInUp}
                    >
                        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Dịch vụ của chúng tôi
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Giải pháp quản lý toàn diện cho mọi loại hình bất
                            động sản
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {services.map((service, index) => {
                            const colors =
                                serviceIconStyles[
                                    index % serviceIconStyles.length
                                ];
                            return (
                                <motion.div
                                    key={index}
                                    className="group border-border bg-card relative overflow-hidden rounded-2xl border p-8 shadow-lg transition-all hover:shadow-2xl"
                                    variants={fadeInUp}
                                    onMouseEnter={() => setActiveService(index)}
                                    onMouseLeave={() => setActiveService(null)}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="relative z-10">
                                        <motion.div
                                            className={`mb-4 inline-flex h-16 w-16 items-center justify-center rounded-xl ${colors.wrapper}`}
                                            animate={{
                                                scale:
                                                    activeService === index
                                                        ? 1.1
                                                        : 1,
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <service.icon
                                                className={`h-8 w-8 ${colors.icon}`}
                                            />
                                        </motion.div>
                                        <h3 className="text-foreground mb-3 text-2xl font-bold">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground">
                                            {service.description}
                                        </p>
                                    </div>
                                    <motion.div
                                        className="from-primary/5 absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                                        initial={false}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* Timeline Section */}
            <section className="bg-background">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <div className="mb-8 text-center">
                        <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Hành trình phát triển
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            14 năm không ngừng đổi mới và phát triển
                        </p>
                    </div>
                </div>
                <Timeline data={timelineData} />
            </section>

            {/* Parallax Scroll Gallery Section */}
            <section className="bg-background py-24">
                <motion.div
                    className="mx-auto max-w-7xl px-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Thư viện dự án
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Khám phá những dự án tiêu biểu mà chúng tôi đã và
                            đang quản lý
                        </p>
                    </div>
                </motion.div>
                <ParallaxScrollSecond images={galleryImages} />
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 md:py-32">
                <motion.div
                    className="mx-auto max-w-7xl px-6"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-16 text-center"
                        variants={fadeInUp}
                    >
                        <h2 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Liên hệ với chúng tôi
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Đội ngũ tư vấn sẵn sàng hỗ trợ bạn 24/7
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        {contactMethods.map((method, index) => {
                            const colors =
                                contactIconStyles[
                                    index % contactIconStyles.length
                                ];
                            return (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    className="group border-border bg-card relative overflow-hidden rounded-2xl border p-8 shadow-lg transition-all hover:-translate-y-2 hover:shadow-2xl"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.03 }}
                                >
                                    <motion.div
                                        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${colors.wrapper}`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <method.icon
                                            className={`h-7 w-7 ${colors.icon}`}
                                        />
                                    </motion.div>
                                    <h3 className="text-foreground mb-2 text-xl font-bold">
                                        {method.title}
                                    </h3>
                                    <p className="text-muted-foreground mb-4 text-sm">
                                        {method.description}
                                    </p>
                                    <p className="text-primary font-semibold">
                                        {method.value}
                                    </p>
                                    <motion.div
                                        className="from-primary/5 absolute inset-0 bg-linear-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                                        initial={false}
                                    />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="from-primary/10 via-primary/5 to-background bg-linear-to-br py-24">
                <motion.div
                    className="mx-auto max-w-4xl px-6 text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <CheckCircle2 className="mx-auto mb-6 h-16 w-16 text-emerald-500" />
                    <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl">
                        Sẵn sàng nâng cao chất lượng vận hành?
                    </h2>
                    <p className="text-muted-foreground mb-8 text-xl">
                        Liên hệ ngay để được tư vấn giải pháp quản lý phù hợp
                        nhất cho dự án của bạn
                    </p>
                    <Link
                        href="/info/contact"
                        className="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-10 py-5 text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                    >
                        Gửi yêu cầu tư vấn
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>
            </section>
        </main>
    );
}
