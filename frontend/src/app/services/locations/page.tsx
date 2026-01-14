'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    ArrowRight,
    Building2,
    CheckCircle2,
    FileCheck,
    Handshake,
    Home,
    MapPin,
    ShieldCheck,
    TrendingUp,
} from 'lucide-react';

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

interface Goal {
    icon: React.ReactNode;
    title: string;
    description: string;
    metrics?: string;
}

interface HousingLandingProps {
    tagline?: string;
    heroTitle?: React.ReactNode;
    heroDescription?: string;
    goals?: Goal[];
}

function HousingBusinessLanding({
    tagline = 'Kinh doanh nhà ở bền vững, gia tăng giá trị đầu tư',
    heroTitle = (
        <>
            <span className="text-foreground block">Kiến tạo</span>
            <span className="block bg-linear-to-r from-amber-500 via-orange-500 to-rose-500 bg-clip-text text-transparent">
                chuẩn sống & cơ hội sinh lời
            </span>
        </>
    ),
    heroDescription =
        'Chúng tôi phát triển và vận hành các dự án nhà ở với chiến lược tài chính rõ ràng, pháp lý minh bạch và chuẩn dịch vụ cư dân cao cấp. Mỗi sản phẩm là một tài sản bền vững cho nhà đầu tư và cộng đồng.',
    goals = [
        {
            icon: <Home className="h-10 w-10 text-amber-500" />,
            title: 'Phát triển dự án chuẩn sống',
            description:
                'Thiết kế tối ưu công năng, môi trường xanh và tiện ích trọn vẹn cho cư dân.',
            metrics: '8 tiêu chuẩn sống xanh áp dụng',
        },
        {
            icon: <TrendingUp className="h-10 w-10 text-emerald-500" />,
            title: 'Tối ưu dòng tiền',
            description:
                'Chiến lược bán hàng, cho thuê và khai thác vận hành theo từng chu kỳ thị trường.',
            metrics: 'Tăng 20% tỷ suất lợi nhuận',
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-sky-500" />,
            title: 'Vận hành & hậu mãi',
            description:
                'Dịch vụ cư dân 24/7, bảo trì chuẩn và nâng cấp trải nghiệm dài hạn.',
            metrics: '99% yêu cầu được xử lý trong 24h',
        },
        {
            icon: <Handshake className="h-10 w-10 text-indigo-500" />,
            title: 'Tư vấn đầu tư minh bạch',
            description:
                'Thông tin thị trường, pháp lý và dòng tiền được chuẩn hóa rõ ràng.',
            metrics: '100% hồ sơ tài chính minh bạch',
        },
        {
            icon: <MapPin className="h-10 w-10 text-rose-500" />,
            title: 'Quỹ đất chiến lược',
            description:
                'Chọn lựa vị trí kết nối hạ tầng, đảm bảo tiềm năng tăng trưởng dài hạn.',
            metrics: '15 khu vực trọng điểm 2025',
        },
        {
            icon: <FileCheck className="h-10 w-10 text-violet-500" />,
            title: 'Pháp lý & tài chính chuẩn',
            description:
                'Kiểm soát pháp lý chặt chẽ, cấu trúc vốn an toàn cho dự án.',
            metrics: 'Kiểm định 3 vòng thẩm định',
        },
    ],
}: HousingLandingProps) {
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
                                {tagline}
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="max-w-4xl text-4xl leading-[1.15] font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
                            >
                                {heroTitle}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.4 }}
                                className="text-muted-foreground max-w-3xl text-lg md:text-xl"
                            >
                                {heroDescription}
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.6 }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <Button size="lg" className="group">
                                    Khám phá dự án
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Tư vấn đầu tư
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section
                    id="goals"
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
                                Mục tiêu kinh doanh
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Nền tảng cho tăng trưởng nhà ở
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground max-w-2xl md:text-xl"
                            >
                                Tập trung vào giá trị tài sản, trải nghiệm cư
                                dân và hiệu quả vận hành dài hạn
                            </motion.p>
                        </div>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                        >
                            {goals.map((goal, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemFadeIn}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.3 },
                                    }}
                                >
                                    <Card className="group relative h-full overflow-hidden transition-all hover:shadow-lg">
                                        <div className="bg-primary/10 group-hover:bg-primary/20 absolute -top-20 -right-20 h-40 w-40 rounded-full transition-all duration-300"></div>
                                        <CardHeader>
                                            <div className="mb-4">
                                                {goal.icon}
                                            </div>
                                            <h3 className="text-xl font-bold">
                                                {goal.title}
                                            </h3>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <p className="text-muted-foreground">
                                                {goal.description}
                                            </p>
                                            {goal.metrics && (
                                                <div className="text-primary flex items-center gap-2 text-sm font-medium">
                                                    <CheckCircle2 className="h-4 w-4" />
                                                    {goal.metrics}
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </section>

                <section id="vision" className="w-full py-12 md:py-24 lg:py-32">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mx-auto w-full max-w-7xl px-4 md:px-6"
                    >
                        <div className="grid items-center gap-12 lg:grid-cols-2">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="space-y-6"
                            >
                                <div className="bg-muted inline-block rounded-full px-4 py-2 text-sm">
                                    Tầm nhìn phát triển
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Nâng chuẩn thị trường nhà ở hiện đại
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Chúng tôi tập trung vào mô hình kinh doanh
                                    nhà ở cân bằng giữa giá trị tài sản, chất
                                    lượng sống và lợi ích bền vững cho nhà đầu
                                    tư.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Chuỗi sản phẩm nhà ở có thiết kế đồng bộ',
                                        'Cam kết pháp lý rõ ràng và quy trình minh bạch',
                                        'Quản trị vận hành tối ưu, giảm chi phí dài hạn',
                                        'Hệ sinh thái tiện ích nâng chuẩn sống cư dân',
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                delay: index * 0.1,
                                            }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="text-primary mt-0.5 h-6 w-6 shrink-0" />
                                            <span className="text-muted-foreground">
                                                {item}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="relative"
                            >
                                <div className="from-primary/20 aspect-square rounded-3xl bg-linear-to-br to-amber-500/20 p-8">
                                    <div className="bg-background/80 flex h-full w-full items-center justify-center rounded-2xl border backdrop-blur-sm">
                                        <div className="space-y-4 p-8 text-center">
                                            <div className="text-primary text-6xl font-bold">
                                                2030
                                            </div>
                                            <p className="text-xl font-semibold">
                                                Tầm nhìn phát triển
                                            </p>
                                            <p className="text-muted-foreground">
                                                Hơn 30 dự án nhà ở chất lượng
                                                cao trên toàn quốc
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

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
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Badge className="mb-6">
                                    Đồng hành đầu tư
                                </Badge>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-6 max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Bắt đầu hành trình kinh doanh nhà ở hiệu quả
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground mb-8 max-w-2xl text-lg"
                            >
                                Kết nối với đội ngũ chuyên gia để nhận tư vấn
                                chiến lược, phân tích thị trường và giải pháp
                                triển khai dự án phù hợp mục tiêu đầu tư.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <Button size="lg" className="group">
                                    Nhận tư vấn dự án
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Xem danh mục dự án
                                </Button>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
}

export default function Page() {
    return <HousingBusinessLanding />;
}
