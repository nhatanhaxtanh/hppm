'use client';
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

const companyStats = [
    {
        label: 'Căn hộ & biệt thự đang phục vụ',
        value: '18.000+',
        icon: Building2,
    },
    {
        label: 'Khu đô thị, chung cư, biệt thự',
        value: '45+ dự án',
        icon: Target,
    },
    {
        label: 'Đội ngũ onsite & kỹ thuật',
        value: '600+ nhân sự',
        icon: Users,
    },
    {
        label: 'Mức độ hài lòng cư dân',
        value: '4.8/5',
        icon: Award,
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
            <section className="from-primary/5 via-background to-accent/5 relative overflow-hidden bg-gradient-to-br py-24 md:py-32">
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
                            <span className="from-blue-700 via-blue-800 to-blue-900 bg-gradient-to-r bg-clip-text text-transparent">
                                trong từng dịch vụ
                            </span>
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
                            <a
                                href="#contact"
                                className="border-border bg-background text-foreground hover:bg-accent inline-flex items-center gap-2 rounded-xl border-2 px-8 py-4 font-semibold transition-all"
                            >
                                Liên hệ tư vấn
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
                        variants={fadeInUp}
                    >
                        {companyStats.map((stat, index) => {
                            const colors =
                                statIconStyles[
                                    index % statIconStyles.length
                                ];
                            return (
                                <motion.div
                                    key={index}
                                    className="group border-border bg-card rounded-2xl border p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                                    whileHover={{ scale: 1.03 }}
                                    variants={fadeInUp}
                                >
                                    <motion.div
                                        className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl ${colors.wrapper}`}
                                        whileHover={{ rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <stat.icon
                                            className={`h-7 w-7 ${colors.icon}`}
                                        />
                                    </motion.div>
                                    <div className="text-foreground mb-1 text-3xl font-bold">
                                        {stat.value}
                                    </div>
                                    <div className="text-muted-foreground text-sm">
                                        {stat.label}
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
                                        className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100"
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
                                        className="from-primary/5 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                                        initial={false}
                                    />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="from-primary/10 via-primary/5 to-background bg-gradient-to-br py-24">
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
                    <a
                        href="mailto:operation@hppm.com"
                        className="group bg-primary text-primary-foreground inline-flex items-center gap-2 rounded-xl px-10 py-5 text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
                    >
                        Gửi yêu cầu tư vấn
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </a>
                </motion.div>
            </section>
        </main>
    );
}
