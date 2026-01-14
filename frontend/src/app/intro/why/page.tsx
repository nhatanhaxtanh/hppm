'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Clock,
    Award,
    HeadphonesIcon,
    TrendingUp,
    Sparkles,
    Lock,
    Users2,
    CheckCircle2,
    Star,
    Quote,
    ArrowRight,
    Building2,
} from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

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
        transition: { staggerChildren: 0.1 },
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

interface Reason {
    id: number;
    title: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    badge?: string;
}

interface WhyChooseUsLandingProps {
    companyName?: string;
    tagline?: string;
    reasons?: Reason[];
}

const WhyChooseUsLanding: React.FC<WhyChooseUsLandingProps> = ({
    companyName = 'HPPM',
    tagline = 'Đối tác quản lý bất động sản tin cậy của bạn',
    reasons = [
        {
            id: 1,
            title: 'Kinh nghiệm vận hành thực tế',
            description:
                'Hơn 15 năm quản lý tòa nhà và khu dân cư, quy trình chuẩn hóa giúp vận hành ổn định và minh bạch.',
            icon: <Award className="h-6 w-6" />,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950',
            badge: '15+ năm',
        },
        {
            id: 2,
            title: 'Hỗ trợ cư dân 24/7',
            description:
                'Đội ngũ trực vận hành phản hồi nhanh mọi sự cố kỹ thuật, an ninh và dịch vụ tiện ích.',
            icon: <HeadphonesIcon className="h-6 w-6" />,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950',
            badge: 'Luôn sẵn sàng',
        },
        {
            id: 3,
            title: 'An ninh & an toàn nghiêm ngặt',
            description:
                'Quy trình kiểm soát ra vào, PCCC và giám sát 24/7 giúp bảo vệ tài sản và cư dân.',
            icon: <Shield className="h-6 w-6" />,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950',
            badge: 'Quy trình chuẩn',
        },
        {
            id: 4,
            title: 'Vận hành hiệu quả',
            description:
                'Tối ưu chi phí vận hành, đảm bảo hệ thống kỹ thuật hoạt động liên tục, giảm tối đa gián đoạn.',
            icon: <Clock className="h-6 w-6" />,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950',
            badge: 'Ổn định cao',
        },
        {
            id: 5,
            title: 'Giải pháp linh hoạt',
            description:
                'Phù hợp đa dạng loại hình bất động sản: chung cư, văn phòng, khu phức hợp và khu đô thị.',
            icon: <TrendingUp className="h-6 w-6" />,
            color: 'text-cyan-600',
            bgColor: 'bg-cyan-50 dark:bg-cyan-950',
            badge: 'Đa dạng mô hình',
        },
        {
            id: 6,
            title: 'Ứng dụng công nghệ',
            description:
                'Ứng dụng phần mềm quản lý, báo cáo số liệu minh bạch và kênh phản hồi cư dân tiện lợi.',
            icon: <Sparkles className="h-6 w-6" />,
            color: 'text-pink-600',
            bgColor: 'bg-pink-50 dark:bg-pink-950',
            badge: 'Số hóa',
        },
        {
            id: 7,
            title: 'Minh bạch tài chính',
            description:
                'Báo cáo chi phí rõ ràng, kiểm soát ngân sách vận hành và quỹ bảo trì hiệu quả.',
            icon: <Lock className="h-6 w-6" />,
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50 dark:bg-indigo-950',
            badge: 'Rõ ràng chi phí',
        },
        {
            id: 8,
            title: 'Được cư dân tin tưởng',
            description:
                'Nhiều ban quản trị và chủ đầu tư đánh giá cao chất lượng dịch vụ và thái độ phục vụ.',
            icon: <Users2 className="h-6 w-6" />,
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50 dark:bg-emerald-950',
            badge: 'Hàng nghìn cư dân',
        },
    ],
}) => {
    return (
        <div className="min-h-screen bg-background">
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
                            Vì sao chọn{' '}
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
                                {companyName}
                            </motion.span>
                            ?
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                            className="text-muted-foreground max-w-3xl text-lg md:text-xl"
                        >
                            Đồng hành tối ưu vận hành, minh bạch tài chính và
                            nâng cao trải nghiệm cư dân.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.6 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <Button size="lg" className="group">
                                Nhận tư vấn miễn phí
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Liên hệ kinh doanh
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Goals Grid Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mx-auto max-w-7xl"
                >
                    <motion.div
                        variants={fadeIn}
                        className="mb-16 space-y-4 text-center"
                    >
                        <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                            Điểm khác biệt của chúng tôi
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Khám phá các lợi thế giúp {companyName} trở thành
                            đơn vị quản lý bất động sản được tin chọn.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {reasons.map((reason) => (
                            <motion.div key={reason.id} variants={itemFadeIn}>
                                <Card className="group border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <CardHeader>
                                        <div
                                            className={`h-14 w-14 rounded-xl ${reason.bgColor} mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <div className={reason.color}>
                                                {reason.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="mb-2 text-xl">
                                            {reason.title}
                                        </CardTitle>
                                        {reason.badge && (
                                            <Badge
                                                variant="secondary"
                                                className="w-fit"
                                            >
                                                {reason.badge}
                                            </Badge>
                                        )}
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription className="text-base leading-relaxed">
                                            {reason.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Testimonials Section */}
            <section className="border-border border-y bg-background">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="container mx-auto px-4 py-16 md:py-24"
                >
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            variants={fadeIn}
                            className="mb-16 space-y-4 text-center"
                        >
                            <Badge variant="outline" className="mb-2">
                                <Star className="mr-1 h-3 w-3 fill-yellow-500 text-yellow-500" />
                                Đối tác tin cậy
                            </Badge>
                            <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                                Khách hàng nói gì
                            </h2>
                            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                                Lắng nghe trải nghiệm thực tế từ ban quản trị,
                                chủ đầu tư và cư dân.
                            </p>
                        </motion.div>

                        <motion.div
                            variants={staggerContainer}
                            className="grid grid-cols-1 gap-6 md:grid-cols-3"
                        >
                            {[
                                {
                                    name: 'Anh Hoang',
                                    role: 'Trưởng ban quản trị, The Garden',
                                    content:
                                        'HPPM vận hành rất bài bản, phản hồi sự cố nhanh và báo cáo minh bạch. Cư dân hài lòng rõ rệt.',
                                    rating: 5,
                                    avatar: 'AH',
                                },
                                {
                                    name: 'Chị Thu',
                                    role: 'Giám đốc tòa nhà, Tower One',
                                    content:
                                        'Chi phí được kiểm soát tốt, quy trình bảo trì rõ ràng. Đội ngũ phối hợp rất chủ động.',
                                    rating: 5,
                                    avatar: 'CT',
                                },
                                {
                                    name: 'Anh Nam',
                                    role: 'Chủ đầu tư, Riverside',
                                    content:
                                        'Chất lượng dịch vụ ổn định, an ninh đảm bảo. HPPM giúp chúng tôi nâng chuẩn vận hành.',
                                    rating: 5,
                                    avatar: 'AN',
                                },
                            ].map((testimonial, index) => (
                                <motion.div key={index} variants={itemFadeIn}>
                                    <Card className="relative">
                                        <CardHeader>
                                            <Quote className="text-primary/20 absolute top-4 right-4 h-10 w-10" />
                                            <div className="mb-4 flex items-center gap-3">
                                                <div className="bg-primary/10 text-primary flex h-12 w-12 items-center justify-center rounded-full font-semibold">
                                                    {testimonial.avatar}
                                                </div>
                                                <div>
                                                    <CardTitle className="text-base">
                                                        {testimonial.name}
                                                    </CardTitle>
                                                    <CardDescription className="text-sm">
                                                        {testimonial.role}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                            <div className="mb-3 flex gap-1">
                                                {[...Array(testimonial.rating)].map(
                                                    (_, i) => (
                                                        <Star
                                                            key={i}
                                                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                                                        />
                                                    ),
                                                )}
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground leading-relaxed">
                                                &quot;{testimonial.content}&quot;
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Comparison Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mx-auto max-w-6xl"
                >
                    <motion.div
                        variants={fadeIn}
                        className="mb-16 space-y-4 text-center"
                    >
                        <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                            So sánh nhanh
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Không chỉ đạt chuẩn, chúng tôi còn nâng chuẩn dịch
                            vụ quản lý bất động sản.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        className="grid gap-8 md:grid-cols-2"
                    >
                        <motion.div variants={itemFadeIn}>
                            <Card className="border-muted border-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <div className="bg-muted flex h-10 w-10 items-center justify-center rounded-lg">
                                            ✕
                                        </div>
                                        Dịch vụ thông thường
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        'Giờ hỗ trợ hạn chế',
                                        'Chi phí phát sinh chưa rõ ràng',
                                        'Vận hành thiếu ổn định',
                                        'Bảo trì phản ứng chậm',
                                        'Thiếu công cụ số hóa',
                                        'Quy trình giám sát rời rạc',
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="text-muted-foreground flex items-start gap-3"
                                        >
                                            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-100 dark:bg-red-950">
                                                <span className="text-xs text-red-600">
                                                    ✕
                                                </span>
                                            </div>
                                            <span className="text-sm">{item}</span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={itemFadeIn}>
                            <Card className="border-primary shadow-primary/20 border-2 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <div className="bg-primary flex h-10 w-10 items-center justify-center rounded-lg text-white">
                                            ✓
                                        </div>
                                        {companyName}
                                    </CardTitle>
                                    <Badge className="w-fit">
                                        Lợi thế của chúng tôi
                                    </Badge>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    {[
                                        'Hỗ trợ 24/7 cho cư dân',
                                        'Minh bạch tài chính và ngân sách',
                                        'Vận hành ổn định, giảm gián đoạn',
                                        'Bảo trì phòng ngừa định kỳ',
                                        'Báo cáo số liệu theo thời gian thực',
                                        'Quy trình an ninh & PCCC chuẩn hóa',
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="text-primary mt-0.5 h-5 w-5 shrink-0" />
                                            <span className="text-sm font-medium">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="border-border border-y bg-background">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="container mx-auto px-4 py-16"
                >
                    <motion.div
                        variants={staggerContainer}
                        className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
                    >
                        {[
                            { label: 'Năm kinh nghiệm', value: '15+' },
                            { label: 'Nhân sự vận hành', value: '500+' },
                            { label: 'Dự án đang quản lý', value: '120+' },
                            { label: 'Mức hài lòng', value: '98%' },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                variants={itemFadeIn}
                                className="space-y-2 text-center"
                            >
                                <div className="bg-linear-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
                                    {stat.value}
                                </div>
                                <div className="text-muted-foreground text-sm md:text-base">
                                    {stat.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Trust Badges Section */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mx-auto max-w-6xl"
                >
                    <motion.div variants={fadeIn} className="mb-12 text-center">
                        <h3 className="text-foreground mb-2 text-2xl font-bold">
                            Chứng nhận & tiêu chuẩn
                        </h3>
                        <p className="text-muted-foreground">
                            Cam kết chất lượng được chứng thực qua các tiêu
                            chuẩn quản lý và vận hành.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-2 gap-6 md:grid-cols-5"
                    >
                        {[
                            { name: 'ISO 9001', desc: 'Quản lý chất lượng' },
                            { name: 'ISO 41001', desc: 'Quản lý cơ sở' },
                            { name: 'PCCC', desc: 'Tuân thủ quy định' },
                            { name: 'An ninh', desc: 'Giám sát 24/7' },
                            { name: 'ESG', desc: 'Vận hành bền vững' },
                        ].map((cert, index) => (
                            <motion.div key={index} variants={itemFadeIn}>
                                <Card className="text-center transition-shadow hover:shadow-md">
                                    <CardHeader className="pb-3">
                                        <div className="bg-primary/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
                                            <Shield className="text-primary h-6 w-6" />
                                        </div>
                                        <CardTitle className="text-sm">
                                            {cert.name}
                                        </CardTitle>
                                        <CardDescription className="text-xs">
                                            {cert.desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="bg-muted/30 w-full py-20 md:py-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeIn}
                    className="mx-auto w-full max-w-7xl px-4 md:px-6"
                >
                    <div className="mx-auto flex w-full max-w-6xl flex-col items-center rounded-2xl border bg-background p-12 text-center shadow-lg md:p-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-6">Đồng hành cùng bạn</Badge>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6 max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Sẵn sàng nâng tầm quản lý tòa nhà?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-muted-foreground mb-8 max-w-2xl text-lg"
                        >
                            Hãy để {companyName} đồng hành cùng bạn trong quản
                            lý vận hành, tối ưu chi phí và nâng cao trải nghiệm
                            cư dân.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <Button size="lg" className="group">
                                Nhận tư vấn giải pháp
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Xem dịch vụ quản lý
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default WhyChooseUsLanding;
