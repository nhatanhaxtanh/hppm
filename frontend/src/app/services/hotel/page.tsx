'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    ArrowRight,
    Award,
    Building2,
    CheckCircle2,
    Clock,
    HeartHandshake,
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

interface ResortLandingProps {
    tagline?: string;
    heroTitle?: React.ReactNode;
    heroDescription?: string;
    goals?: Goal[];
}

function ResortLanding({
    tagline = 'Dịch vụ quản lý & vận hành khách sạn chuyên nghiệp',
    heroTitle = (
        <>
            <span className="text-foreground block">Chuẩn hóa vận hành</span>
            <span className="block bg-linear-to-r from-teal-500 via-emerald-500 to-amber-500 bg-clip-text text-transparent">
                nâng tầm trải nghiệm lưu trú
            </span>
        </>
    ),
    heroDescription = 'Chúng tôi cung cấp giải pháp quản lý và vận hành khách sạn toàn diện: tối ưu chi phí, chuẩn hóa dịch vụ, đảm bảo an toàn và nâng cao mức độ hài lòng của khách lưu trú.',
    goals = [
        {
            icon: <MapPin className="h-10 w-10 text-emerald-500" />,
            title: 'Chuẩn hóa quy trình',
            description:
                'Thiết lập SOP rõ ràng cho buồng phòng, lễ tân, F&B và kỹ thuật.',
            metrics: '100% quy trình được chuẩn hóa',
        },
        {
            icon: <Building2 className="h-10 w-10 text-amber-500" />,
            title: 'Vận hành tối ưu',
            description:
                'Tối ưu nhân sự, năng lượng và chi phí vận hành theo mùa vụ.',
            metrics: 'Giảm 12-18% chi phí OPEX',
        },
        {
            icon: <HeartHandshake className="h-10 w-10 text-rose-500" />,
            title: 'Đào tạo & chất lượng',
            description:
                'Đào tạo định kỳ, giám sát chất lượng dịch vụ theo tiêu chuẩn 5 sao.',
            metrics: 'Điểm hài lòng 4.7/5',
        },
        {
            icon: <Award className="h-10 w-10 text-sky-500" />,
            title: 'Doanh thu bền vững',
            description:
                'Chiến lược giá linh hoạt, tăng công suất phòng và RevPAR.',
            metrics: 'Tăng 15% công suất phòng',
        },
        {
            icon: <ShieldCheck className="h-10 w-10 text-indigo-500" />,
            title: 'An toàn & tuân thủ',
            description:
                'Kiểm soát rủi ro, an ninh, PCCC và tiêu chuẩn vận hành.',
            metrics: 'Tuân thủ 100% quy định',
        },
        {
            icon: <TrendingUp className="h-10 w-10 text-amber-600" />,
            title: 'Chuyển đổi số',
            description:
                'Ứng dụng PMS, BI và tự động hóa để tối ưu vận hành.',
            metrics: 'Báo cáo realtime theo ngày',
        },
    ],
}: ResortLandingProps) {
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
                                <Clock className="h-5 w-5" />
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
                                    Đặt kỳ nghỉ ngay
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                                <Button variant="outline" size="lg">
                                    Xem phòng & villa
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
                                Điểm nhấn nghỉ dưỡng
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Vận hành chuẩn mực, tối ưu hiệu quả kinh doanh
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground max-w-2xl md:text-xl"
                            >
                                Hệ thống quản trị đồng bộ giúp khách sạn vận
                                hành ổn định, nâng cao trải nghiệm khách lưu trú
                                và tăng trưởng bền vững.
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
                                    Vận hành thông minh, dịch vụ nhất quán
                                </h2>
                                <p className="text-muted-foreground text-lg">
                                    Chúng tôi giúp khách sạn vận hành trơn tru
                                    thông qua quy trình, con người và công nghệ,
                                    đảm bảo chất lượng dịch vụ đồng nhất.
                                </p>
                                <div className="space-y-4">
                                    {[
                                        'Chuẩn hóa quy trình và kiểm soát chất lượng',
                                        'Tối ưu lịch vận hành và năng suất nhân sự',
                                        'Gia tăng doanh thu nhờ tối ưu giá và kênh bán',
                                        'Báo cáo minh bạch, hỗ trợ quyết định nhanh',
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
                                                24/7
                                            </div>
                                            <p className="text-xl font-semibold">
                                                Vận hành liên tục
                                            </p>
                                            <p className="text-muted-foreground">
                                                Giám sát chất lượng theo ca
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
                                    Giải pháp quản lý
                                </Badge>
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mb-6 max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                            >
                                Tối ưu vận hành khách sạn của bạn
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="text-muted-foreground mb-8 max-w-2xl text-lg"
                            >
                                Nhận tư vấn chiến lược quản lý, vận hành và đào
                                tạo đội ngũ để nâng cao chất lượng dịch vụ và
                                lợi nhuận dài hạn.
                            </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <Button size="lg" className="group">
                                    Nhận ưu đãi đặt phòng
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
    return <ResortLanding />;
}
