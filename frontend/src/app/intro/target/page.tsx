'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
    Target,
    TrendingUp,
    Users,
    Globe,
    Zap,
    Award,
    ArrowRight,
    CheckCircle2,
} from 'lucide-react';

// Animation variants
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

interface Goal {
    icon: React.ReactNode;
    title: string;
    description: string;
    metrics?: string;
}

interface CompanyGoalsLandingProps {
    companyName?: string;
    tagline?: string;
    heroTitle?: string;
    heroDescription?: string;
    goals?: Goal[];
}

function CompanyGoalsLanding({
    tagline = 'Quản lý bất động sản chuyên nghiệp, vận hành hiệu quả',
    heroTitle = 'Nâng tầm giá trị tài sản & trải nghiệm cư dân',
    heroDescription = 'Chúng tôi cung cấp giải pháp quản lý vận hành bất động sản toàn diện, tối ưu chi phí, đảm bảo an toàn và nâng cao sự hài lòng của cư dân. Mỗi mục tiêu đều hướng đến chất lượng dịch vụ bền vững và giá trị lâu dài.',
    goals = [
        {
            icon: <Target className="text-primary h-10 w-10" />,
            title: 'Dẫn đầu dịch vụ quản lý',
            description:
                'Trở thành đối tác quản lý vận hành đáng tin cậy hàng đầu, đặt chuẩn mực mới về chất lượng và tính minh bạch.',
            metrics: 'Chuẩn hóa 100% quy trình vận hành',
        },
        {
            icon: <TrendingUp className="text-primary h-10 w-10" />,
            title: 'Tăng trưởng bền vững',
            description:
                'Mở rộng danh mục dự án quản lý đi cùng tối ưu chi phí vận hành và tiêu chuẩn xanh.',
            metrics: 'Giảm 15% chi phí vận hành mỗi năm',
        },
        {
            icon: <Users className="text-primary h-10 w-10" />,
            title: 'Đội ngũ onsite xuất sắc',
            description:
                'Xây dựng đội ngũ quản lý và kỹ thuật chuyên nghiệp, phản hồi nhanh và phục vụ 24/7.',
            metrics: 'Thời gian xử lý sự cố < 30 phút',
        },
        {
            icon: <Globe className="text-primary h-10 w-10" />,
            title: 'Mở rộng danh mục dự án',
            description:
                'Mở rộng quản lý tại nhiều khu đô thị, chung cư và khu biệt thự cao cấp.',
            metrics: '25+ dự án vào năm 2026',
        },
        {
            icon: <Zap className="text-primary h-10 w-10" />,
            title: 'Công nghệ hóa vận hành',
            description:
                'Ứng dụng nền tảng số để giám sát, báo cáo và nâng cao trải nghiệm cư dân.',
            metrics: '100% tòa nhà kết nối số',
        },
        {
            icon: <Award className="text-primary h-10 w-10" />,
            title: 'Hài lòng của cư dân',
            description:
                'Duy trì mức hài lòng cao nhờ dịch vụ tận tâm và cải tiến liên tục.',
            metrics: '4.8/5 điểm hài lòng cư dân',
        },
    ],
}: CompanyGoalsLandingProps) {
    return (
        <div className="bg-background flex min-h-screen flex-col">
            <main className="flex-1">
                {/* Hero Section */}
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
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-muted inline-flex items-center rounded-full px-4 py-2 text-sm"
                            >
                                <Zap className="mr-2 h-4 w-4" />
                                {tagline}
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.2 }}
                                className="max-w-4xl text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
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
                                    Khám phá mục tiêu
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Giải pháp quản lý
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Goals Grid Section */}
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
                                Mục tiêu chiến lược
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Những điều chúng tôi hướng đến
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground max-w-2xl md:text-xl"
                            >
                                Những mục tiêu tham vọng định hướng mọi quyết
                                định và truyền cảm hứng để chúng tôi vượt giới
                                hạn
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

                {/* Vision Statement Section */}
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
                                    Tầm nhìn của chúng tôi
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Vận hành chuẩn mực, sống xanh bền vững
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Chúng tôi hướng tới hệ sinh thái bất động sản
                                    được vận hành hiệu quả, minh bạch và thân thiện
                                    với môi trường, nơi cư dân được phục vụ tốt
                                    nhất mỗi ngày.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Chuẩn hóa quy trình quản lý vận hành',
                                        'Ứng dụng công nghệ để nâng trải nghiệm cư dân',
                                        'Đảm bảo an toàn, an ninh và tiện ích 24/7',
                                        'Gia tăng giá trị tài sản cho chủ đầu tư',
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
                                <div className="from-primary/20 aspect-square rounded-3xl bg-linear-to-br to-purple-500/20 p-8">
                                    <div className="bg-background/80 flex h-full w-full items-center justify-center rounded-2xl border backdrop-blur-sm">
                                        <div className="space-y-4 p-8 text-center">
                                            <div className="text-primary text-6xl font-bold">
                                                2025
                                            </div>
                                            <p className="text-xl font-semibold">
                                                Mốc mục tiêu
                                            </p>
                                            <p className="text-muted-foreground">
                                                Cho các cột mốc vận hành chính
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section
                    id="impact"
                    className="bg-primary text-primary-foreground w-full py-12 md:py-24 lg:py-32"
                >
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeIn}
                        className="mx-auto w-full max-w-7xl px-4 md:px-6"
                    >
                        <div className="flex flex-col items-center space-y-8 text-center">
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Đồng hành cùng chúng tôi
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-primary-foreground/90 max-w-2xl text-lg"
                            >
                                Hãy để chúng tôi đồng hành cùng dự án của bạn
                                trong việc tối ưu vận hành, tiết kiệm chi phí và
                                nâng cao chất lượng sống.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <Button
                                    size="lg"
                                    variant="secondary"
                                    className="group"
                                >
                                    Nhận tư vấn
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <div className="flex gap-3">
                                    <Input
                                        type="email"
                                        placeholder="Nhập email của bạn"
                                        className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                                    />
                                    <Button variant="secondary">Gửi yêu cầu</Button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </section>
            </main>
        </div>
    );
}

export default function Demo() {
    return <CompanyGoalsLanding />;
}
