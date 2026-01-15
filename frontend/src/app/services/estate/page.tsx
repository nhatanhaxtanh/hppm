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
    ClipboardCheck,
    Handshake,
    ShieldCheck,
    TrendingUp,
    Users,
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

interface EstateLandingProps {
    tagline?: string;
    heroTitle?: React.ReactNode;
    heroDescription?: string;
    goals?: Goal[];
}

function EstateLanding({
    tagline = 'Dịch vụ quản lý bất động sản minh bạch, hiệu quả',
    heroTitle = (
        <>
            <span className="text-foreground block">Vận hành chuẩn hóa</span>
            <span className="block bg-linear-to-r from-emerald-500 via-lime-500 to-amber-500 bg-clip-text text-transparent">
                gia tăng giá trị tài sản
            </span>
        </>
    ),
    heroDescription = 'Chúng tôi cung cấp giải pháp quản lý bất động sản toàn diện cho chung cư, khu đô thị và tòa nhà thương mại: tối ưu chi phí, đảm bảo an toàn và nâng cao trải nghiệm cư dân.',
    goals = [
        {
            icon: <ClipboardCheck className="h-10 w-10 text-emerald-500" />,
            title: 'Quy trình chuẩn',
            description:
                'Chuẩn hóa SOP cho lễ tân, kỹ thuật, an ninh, vệ sinh và CSKH.',
            metrics: '100% quy trình được kiểm soát',
        },
        {
            icon: <TrendingUp className="h-10 w-10 text-amber-500" />,
            title: 'Tối ưu chi phí',
            description:
                'Quản trị ngân sách, giảm thất thoát và tối ưu vận hành theo dữ liệu.',
            metrics: 'Giảm 10-15% OPEX',
        },
        {
            icon: <Users className="h-10 w-10 text-sky-500" />,
            title: 'Đội ngũ chuyên nghiệp',
            description:
                'Tuyển dụng, đào tạo và đánh giá KPI định kỳ cho từng vị trí.',
            metrics: 'Đáp ứng 24/7',
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-indigo-500" />,
            title: 'An toàn & tuân thủ',
            description:
                'PCCC, an ninh, an toàn lao động và quy định pháp lý được đảm bảo.',
            metrics: 'Tuân thủ 100% quy định',
        },
        {
            icon: <Building2 className="h-10 w-10 text-rose-500" />,
            title: 'Bảo trì tài sản',
            description:
                'Kế hoạch bảo trì định kỳ giúp kéo dài tuổi thọ công trình.',
            metrics: 'Tăng 20% tuổi thọ thiết bị',
        },
        {
            icon: <Handshake className="h-10 w-10 text-violet-500" />,
            title: 'Chăm sóc cư dân',
            description:
                'Hệ thống tiếp nhận phản ánh nhanh, nâng cao sự hài lòng.',
            metrics: 'Điểm hài lòng 4.8/5',
        },
    ],
}: EstateLandingProps) {
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
                                    Nhận tư vấn quản lý
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Xem gói dịch vụ
                                </Button>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                <section
                    id="highlights"
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
                                Điểm mạnh vận hành
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Vận hành hiệu quả, gia tăng giá trị tài sản
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground max-w-2xl md:text-xl"
                            >
                                Hệ thống quản trị đồng bộ giúp chủ đầu tư và cư
                                dân an tâm, tài sản được chăm sóc đúng chuẩn.
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
                                    Tầm nhìn vận hành
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Chuẩn mực dịch vụ, minh bạch tài chính
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Chúng tôi hướng tới mô hình quản lý bất động
                                    sản minh bạch, công nghệ hóa và tối ưu trải
                                    nghiệm sống.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Báo cáo vận hành rõ ràng theo tháng',
                                        'Quy trình xử lý sự cố nhanh & có SLA',
                                        'Ứng dụng công nghệ để theo dõi tài sản',
                                        'Tăng sự hài lòng cư dân dài hạn',
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
                                <div className="from-primary/20 aspect-square rounded-3xl bg-linear-to-br to-emerald-500/20 p-8">
                                    <div className="bg-background/80 flex h-full w-full items-center justify-center rounded-2xl border backdrop-blur-sm">
                                        <div className="space-y-4 p-8 text-center">
                                            <div className="text-primary text-6xl font-bold">
                                                99%
                                            </div>
                                            <p className="text-xl font-semibold">
                                                Tỷ lệ hài lòng
                                            </p>
                                            <p className="text-muted-foreground">
                                                Với quy trình vận hành chuẩn
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
                                    Dịch vụ quản lý
                                </Badge>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-6 max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Tối ưu vận hành bất động sản của bạn
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground mb-8 max-w-2xl text-lg"
                            >
                                Nhận tư vấn phương án quản lý, vận hành và chăm
                                sóc cư dân để nâng cao chất lượng dịch vụ và giá
                                trị tài sản lâu dài.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <Button size="lg" className="group">
                                    Nhận đề xuất giải pháp
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button size="lg" variant="outline">
                                    Liên hệ tư vấn
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
    return <EstateLanding />;
}
