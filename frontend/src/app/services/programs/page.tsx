'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Building2,
    BarChart3,
    Users,
    MessageSquare,
    CheckCircle2,
} from 'lucide-react';
import Image from 'next/image';

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemFadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
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

interface Software {
    name: string;
    category: string;
    description: string;
    icon: React.ReactNode;
    useCase: string;
    benefits: string[];
    image: string;
}

const RealEstateSoftwareShowcase: React.FC = () => {
    const softwares: Software[] = [
        {
            name: 'Building Care',
            category: 'Quản lý dự án',
            description: 'Phần mềm quản lý dự án và vận hành tòa nhà',
            icon: <Building2 className="h-8 w-8" />,
            useCase:
                'Theo dõi tiến độ dự án, quản lý hạng mục công việc và phối hợp đội onsite',
            benefits: [
                'Tổng hợp kế hoạch và tiến độ theo thời gian thực',
                'Phân công nhiệm vụ rõ ràng theo từng hạng mục',
                'Báo cáo vận hành nhanh chóng cho ban quản lý',
            ],
            image: '/images/programs/building-care.svg',
        },
        {
            name: 'Dose',
            category: 'Kế toán',
            description: 'Phần mềm kế toán và quản trị tài chính',
            icon: <BarChart3 className="h-8 w-8" />,
            useCase:
                'Ghi nhận thu chi, tổng hợp sổ sách và lập báo cáo tài chính định kỳ',
            benefits: [
                'Theo dõi công nợ và dòng tiền minh bạch',
                'Chuẩn hóa nghiệp vụ kế toán nội bộ',
                'Lập báo cáo nhanh cho từng dự án',
            ],
            image: '/images/programs/dose.svg',
        },
        {
            name: 'Cy Home',
            category: 'Quản lý dự án',
            description: 'Nền tảng quản lý dự án dành cho bất động sản',
            icon: <Users className="h-8 w-8" />,
            useCase:
                'Quản lý thông tin dự án, hồ sơ kỹ thuật và kế hoạch triển khai',
            benefits: [
                'Lưu trữ tập trung hồ sơ và tài liệu dự án',
                'Dễ dàng tra cứu, chia sẻ thông tin theo phân quyền',
                'Đồng bộ tiến độ giữa các bộ phận',
            ],
            image: '/images/programs/cy-home.svg',
        },
        {
            name: 'Poma',
            category: 'Quản lý dự án',
            description: 'Hệ thống quản lý dự án và quy trình vận hành',
            icon: <MessageSquare className="h-8 w-8" />,
            useCase:
                'Theo dõi quy trình triển khai, kiểm soát chất lượng và cập nhật trạng thái dự án',
            benefits: [
                'Giảm sai sót nhờ quy trình chuẩn hóa',
                'Cập nhật trạng thái công việc nhanh chóng',
                'Tăng khả năng phối hợp giữa các phòng ban',
            ],
            image: '/images/programs/poma.svg',
        },
    ];

    return (
        <div className="bg-background flex min-h-screen flex-col">
            <main className="flex-1">
                <section className="w-full overflow-hidden py-12 md:py-24 lg:py-32">
                    <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            className="flex flex-col items-center space-y-8 text-center"
                        >
                            <motion.div
                                variants={badgeIn}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.05 }}
                                className="border-border bg-card/80 mb-6 inline-flex items-center gap-3 rounded-full border px-5 py-2.5 text-sm shadow-sm backdrop-blur-sm"
                            >
                                <Building2 className="h-5 w-5" />
                                Công nghệ quản lý bất động sản hàng đầu
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="max-w-4xl text-4xl leading-[1.15] font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                            >
                                <span className="block bg-linear-to-r from-fuchsia-500 via-pink-500 to-rose-500 bg-clip-text text-transparent">
                                    Phần mềm chuyên nghiệp
                                </span>
                                <span className="text-foreground block">
                                    chúng tôi sử dụng
                                </span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-muted-foreground max-w-3xl text-lg md:text-xl"
                            >
                                Các công cụ và nền tảng công nghệ tiên tiến mà
                                HPPM đang sử dụng để mang đến dịch vụ quản lý
                                bất động sản chuyên nghiệp và hiệu quả nhất cho
                                khách hàng
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                <section
                    id="software"
                    className="w-full py-12 md:py-24 lg:py-32"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mx-auto w-full max-w-7xl px-4 md:px-6"
                    >
                        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-primary/10 text-primary inline-block rounded-full px-4 py-2 text-sm"
                            >
                                Công nghệ của chúng tôi
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Phần mềm chúng tôi sử dụng hàng ngày
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground max-w-2xl md:text-xl"
                            >
                                Đầu tư vào các nền tảng hàng đầu để đảm bảo chất
                                lượng dịch vụ tốt nhất
                            </motion.p>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                        >
                            {softwares.map((software, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemFadeIn}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Card className="group overflow-hidden transition-all hover:shadow-lg">
                                        <div className="bg-muted relative h-48 overflow-hidden">
                                            <Image
                                                src={software.image}
                                                alt={software.name}
                                                fill
                                                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            <div className="from-background/90 absolute inset-0 bg-linear-to-t to-transparent" />
                                            <div className="text-primary bg-background/90 absolute bottom-4 left-4 rounded-lg p-2">
                                                {software.icon}
                                            </div>
                                        </div>
                                        <CardContent className="p-6">
                                            <div className="mb-3 flex items-start justify-between">
                                                <CardTitle className="group-hover:text-primary text-xl transition-colors">
                                                    {software.name}
                                                </CardTitle>
                                                <Badge
                                                    variant="secondary"
                                                    className="ml-2 shrink-0"
                                                >
                                                    {software.category}
                                                </Badge>
                                            </div>
                                            <CardDescription className="mb-3 text-sm">
                                                {software.description}
                                            </CardDescription>
                                            <div className="text-muted-foreground mb-4 text-sm">
                                                <strong>Ứng dụng:</strong>{' '}
                                                {software.useCase}
                                            </div>
                                            <div className="space-y-2">
                                                <p className="text-foreground text-sm font-semibold">
                                                    Lợi ích:
                                                </p>
                                                {software.benefits.map(
                                                    (benefit, bIndex) => (
                                                        <div
                                                            key={bIndex}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <CheckCircle2 className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                                                            <span className="text-muted-foreground text-xs">
                                                                {benefit}
                                                            </span>
                                                        </div>
                                                    ),
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                <section
                    id="benefits"
                    className="bg-muted/30 w-full py-12 md:py-24 lg:py-32"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mx-auto w-full max-w-7xl px-4 md:px-6"
                    >
                        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-primary/10 text-primary inline-block rounded-full px-4 py-2 text-sm"
                            >
                                Lợi ích
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Tại sao chúng tôi đầu tư vào công nghệ
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground max-w-2xl md:text-xl"
                            >
                                Mang đến trải nghiệm tốt nhất cho khách hàng
                                thông qua công nghệ hiện đại
                            </motion.p>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {[
                                {
                                    icon: <Users className="h-6 w-6" />,
                                    accent: 'from-sky-300/20 to-transparent',
                                    iconWrap: 'bg-sky-500/40 text-sky-900',
                                    title: 'Dịch vụ chuyên nghiệp',
                                    description:
                                        'Quản lý thông tin khách hàng chặt chẽ, phản hồi nhanh chóng và chăm sóc tận tâm với hệ thống CRM hiện đại',
                                },
                                {
                                    icon: <BarChart3 className="h-6 w-6" />,
                                    accent: 'from-emerald-300/20 to-transparent',
                                    iconWrap:
                                        'bg-emerald-500/40 text-emerald-900',
                                    title: 'Thông tin minh bạch',
                                    description:
                                        'Cập nhật tiến độ dự án real-time, báo cáo chi tiết và số liệu chính xác nhờ hệ thống quản lý dữ liệu tập trung',
                                },
                                {
                                    icon: <CheckCircle2 className="h-6 w-6" />,
                                    accent: 'from-amber-300/20 to-transparent',
                                    iconWrap: 'bg-amber-500/40 text-amber-900',
                                    title: 'Quy trình nhanh chóng',
                                    description:
                                        'Ký kết hợp đồng điện tử, xử lý hồ sơ tự động và giảm thời gian giao dịch xuống còn vài ngày thay vì vài tuần',
                                },
                            ].map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemFadeIn}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Card className="group relative h-full overflow-hidden border-0 transition-all hover:shadow-lg">
                                        <div
                                            className={`absolute inset-0 bg-linear-to-b ${benefit.accent}`}
                                        />
                                        <div className="bg-primary/10 group-hover:bg-primary/20 absolute -top-20 -right-20 h-40 w-40 rounded-full transition-all duration-300"></div>
                                        <CardHeader>
                                            <div
                                                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${benefit.iconWrap}`}
                                            >
                                                {benefit.icon}
                                            </div>
                                            <CardTitle className="text-foreground">
                                                {benefit.title}
                                            </CardTitle>
                                            <CardDescription className="text-foreground/80">
                                                {benefit.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
};

export default RealEstateSoftwareShowcase;
