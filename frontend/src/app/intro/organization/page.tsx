'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    Users,
    Briefcase,
    Target,
    Network,
    Mail,
    ArrowRight,
    Phone,
    MapPin,
    UserCircle2,
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

interface Department {
    id: number;
    name: string;
    description: string;
    icon: React.ReactNode;
    color: string;
    bgColor: string;
    headCount: number;
    teamLead: string;
}

interface TeamMember {
    id: number;
    name: string;
    position: string;
    department: string;
    avatar: string;
    email: string;
    linkedin?: string;
    bio: string;
}

interface OrganizationLandingProps {
    companyName?: string;
    tagline?: string;
    departments?: Department[];
    leadership?: TeamMember[];
}

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.23, 0.86, 0.39, 0.96] as const },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
};

const OrganizationLanding: React.FC<OrganizationLandingProps> = ({
    companyName = 'HPPM',
    tagline = 'Xuất sắc trong quản lý vận hành và giải pháp bất động sản',
    departments = [
        {
            id: 1,
            name: 'Ban Lãnh đạo',
            description:
                'Định hướng chiến lược và giám sát toàn bộ hoạt động quản lý vận hành để tạo giá trị vượt trội.',
            icon: <Target className="h-6 w-6" />,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50 dark:bg-blue-950',
            headCount: 5,
            teamLead: 'Tổng Giám đốc & HĐQT',
        },
        {
            id: 2,
            name: 'Quản lý Vận hành',
            description:
                'Vận hành hàng ngày, bảo trì, quan hệ cư dân và tối ưu hóa giá trị tài sản.',
            icon: <Building2 className="h-6 w-6" />,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50 dark:bg-purple-950',
            headCount: 85,
            teamLead: 'Phó TGĐ Vận hành - Nguyễn Văn Minh',
        },
        {
            id: 3,
            name: 'Cho thuê & Kinh doanh',
            description:
                'Quản lý niêm yết, thu hút khách thuê, đàm phán hợp đồng và giao dịch.',
            icon: <Briefcase className="h-6 w-6" />,
            color: 'text-pink-600',
            bgColor: 'bg-pink-50 dark:bg-pink-950',
            headCount: 45,
            teamLead: 'Giám đốc - Trần Thị Hương',
        },
        {
            id: 4,
            name: 'Kỹ thuật & Bảo trì',
            description:
                'Đảm bảo tài sản được bảo trì tốt, an toàn và tuân thủ quy định.',
            icon: <Network className="h-6 w-6" />,
            color: 'text-green-600',
            bgColor: 'bg-green-50 dark:bg-green-950',
            headCount: 120,
            teamLead: 'Quản lý kỹ thuật - Lê Quang Dũng',
        },
        {
            id: 5,
            name: 'Dịch vụ Cư dân',
            description:
                'Chăm sóc cư dân, tiếp nhận yêu cầu và xử lý vấn đề nhanh chóng.',
            icon: <Users className="h-6 w-6" />,
            color: 'text-cyan-600',
            bgColor: 'bg-cyan-50 dark:bg-cyan-950',
            headCount: 40,
            teamLead: 'Quản lý - Phạm Minh Châu',
        },
        {
            id: 6,
            name: 'Tài chính & Kế toán',
            description:
                'Thu phí, lập ngân sách, báo cáo tài chính và đảm bảo hiệu quả tài sản.',
            icon: <Target className="h-6 w-6" />,
            color: 'text-orange-600',
            bgColor: 'bg-orange-50 dark:bg-orange-950',
            headCount: 28,
            teamLead: 'GĐ Tài chính - Hoàng Anh Tuấn',
        },
        {
            id: 7,
            name: 'Pháp chế & Tuân thủ',
            description:
                'Quản lý hợp đồng, tuân thủ pháp lý và xử lý các vấn đề pháp chế.',
            icon: <Briefcase className="h-6 w-6" />,
            color: 'text-indigo-600',
            bgColor: 'bg-indigo-50 dark:bg-indigo-950',
            headCount: 12,
            teamLead: 'Cố vấn pháp lý - Đỗ Thị Lan',
        },
        {
            id: 8,
            name: 'Tiếp thị & Quan hệ khách hàng',
            description:
                'Quảng bá dự án, xây dựng thương hiệu và chăm sóc chủ đầu tư.',
            icon: <Network className="h-6 w-6" />,
            color: 'text-red-600',
            bgColor: 'bg-red-50 dark:bg-red-950',
            headCount: 25,
            teamLead: 'Giám đốc - Vũ Thanh Hà',
        },
    ],
}) => {
    return (
        <main className="bg-background text-foreground min-h-screen">
            {/* Hero Section */}
            <section className="border-border relative overflow-hidden border-b">
                <motion.div
                    className="relative container mx-auto px-4 py-20 md:py-32"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mx-auto max-w-4xl space-y-6 text-center"
                        variants={fadeInUp}
                    >
                        <Badge
                            variant="outline"
                            className="mb-4 px-4 py-1 text-sm"
                        >
                            <Building2 className="mr-1 h-3 w-3" />
                            Tổ chức của chúng tôi
                        </Badge>
                        <h1 className="text-foreground text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                            Cơ cấu tổ chức{' '}
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
                        </h1>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-xl md:text-2xl">
                            {tagline}
                        </p>
                        <motion.div
                            className="flex flex-wrap justify-center gap-4 pt-6"
                            variants={fadeInUp}
                        >
                            <Button size="lg" className="gap-2">
                                <Users className="h-5 w-5" />
                                Gia nhập đội ngũ
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="gap-2"
                            >
                                <Mail className="h-5 w-5" />
                                Liên hệ
                            </Button>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Organization Chart Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    className="mx-auto max-w-7xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-16 space-y-4 text-center"
                        variants={fadeInUp}
                    >
                        <Badge variant="outline">
                            <Network className="mr-1 h-3 w-3" />
                            Cơ cấu tổ chức
                        </Badge>
                        <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                            Cách chúng tôi vận hành
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Cơ cấu tổ chức được thiết kế để tối ưu hóa hiệu quả
                            quản lý và mang lại giá trị tốt nhất cho tài sản của
                            bạn.
                        </p>
                    </motion.div>

                    {/* Org Chart Visual */}
                    <div className="mb-16">
                        <div className="flex flex-col items-center space-y-8">
                            {/* CEO Level */}
                            <Card className="border-primary w-full max-w-md border-2 shadow-lg">
                                <CardHeader className="pb-4 text-center">
                                    <div className="bg-primary/10 mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full">
                                        <UserCircle2 className="text-primary h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-base">
                                        Tổng Giám đốc
                                    </CardTitle>
                                    <CardDescription className="text-sm">
                                        Trần Thị Diễm Hương
                                    </CardDescription>
                                    <Badge
                                        variant="secondary"
                                        className="mx-auto mt-2 w-fit text-xs"
                                    >
                                        Ban Lãnh đạo
                                    </Badge>
                                </CardHeader>
                            </Card>

                            {/* Connection Lines */}
                            <div className="flex items-center justify-center">
                                <div className="bg-border h-8 w-0.5"></div>
                            </div>

                            {/* C-Level */}
                            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3">
                                {[
                                    {
                                        title: 'Phó Tổng Giám Đốc',
                                        name: 'Nguyễn Lê Duy Khánh',
                                        dept: 'Quản lý Vận hành',
                                        color: 'purple',
                                    },
                                    {
                                        title: 'Giám Đốc Dự Án',
                                        name: 'Phan Thị Như Giang',
                                        dept: 'Quản lý vận hành',
                                        color: 'pink',
                                    },
                                    {
                                        title: 'Trợ lý Tổng Giám Đốc',
                                        name: 'Lê Nhật Anh',
                                        dept: 'Quản lý vận hành',
                                        color: 'green',
                                    },
                                ].map((exec, index) => (
                                    <Card
                                        key={index}
                                        className="transition-shadow hover:shadow-md"
                                    >
                                        <CardHeader className="pb-4 text-center">
                                            <div
                                                className={`mx-auto h-12 w-12 rounded-full bg-${exec.color}-100 dark:bg-${exec.color}-950 mb-2 flex items-center justify-center`}
                                            >
                                                <Briefcase
                                                    className={`h-6 w-6 text-${exec.color}-600`}
                                                />
                                            </div>
                                            <CardTitle className="text-base">
                                                {exec.title}
                                            </CardTitle>
                                            <CardDescription className="text-sm">
                                                {exec.name}
                                            </CardDescription>
                                            <Badge
                                                variant="secondary"
                                                className="mx-auto mt-2 w-fit text-xs"
                                            >
                                                {exec.dept}
                                            </Badge>
                                        </CardHeader>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Departments Grid */}
                    <motion.div
                        className="mb-12 space-y-4 text-center"
                        variants={fadeInUp}
                    >
                        <h3 className="text-foreground text-2xl font-bold md:text-3xl">
                            Các phòng ban
                        </h3>
                        <p className="text-muted-foreground">
                            Mỗi phòng ban đều đóng vai trò quan trọng trong việc
                            cung cấp dịch vụ quản lý bất động sản chuyên nghiệp.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
                        variants={staggerContainer}
                    >
                        {departments.map((dept) => (
                            <motion.div
                                key={dept.id}
                                variants={fadeInUp}
                                whileHover={{ y: -6 }}
                                transition={{ type: 'spring', stiffness: 280 }}
                            >
                                <Card className="group border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                                    <CardHeader>
                                        <div
                                            className={`h-14 w-14 rounded-xl ${dept.bgColor} mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                                        >
                                            <div className={dept.color}>
                                                {dept.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="mb-2 text-lg">
                                            {dept.name}
                                        </CardTitle>
                                        <div className="flex flex-wrap gap-2">
                                            <Badge
                                                variant="secondary"
                                                className="text-xs"
                                            >
                                                <Users className="mr-1 h-3 w-3" />
                                                {dept.headCount} nhân sự
                                            </Badge>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-3">
                                        <CardDescription className="text-sm leading-relaxed">
                                            {dept.description}
                                        </CardDescription>
                                        <div className="border-border border-t pt-2">
                                            <p className="text-muted-foreground text-xs">
                                                <span className="font-medium">
                                                    Trưởng bộ phận:
                                                </span>{' '}
                                                {dept.teamLead}
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* Company Info Section */}
            <section className="container mx-auto px-4 py-16 md:py-24">
                <motion.div
                    className="mx-auto max-w-6xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-16 space-y-4 text-center"
                        variants={fadeInUp}
                    >
                        <h2 className="text-foreground text-3xl font-bold md:text-4xl">
                            Tổng quan công ty
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Thông tin quan trọng về tổ chức và sự hiện diện của
                            chúng tôi trên thị trường.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid gap-8 md:grid-cols-2"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp}>
                            <Card className="border-border border-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Building2 className="text-primary h-6 w-6" />
                                        Trụ sở chính
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                                        <div>
                                            <p className="font-medium">
                                                Văn phòng chính
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                30D2 Phan Văn Trị, Phường Hạnh
                                                Thông, TP. HCM
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                                        <div>
                                            <p className="font-medium">
                                                Liên hệ
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                028 3620 3160
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="text-muted-foreground mt-0.5 h-5 w-5 shrink-0" />
                                        <div>
                                            <p className="font-medium">Email</p>
                                            <p className="text-muted-foreground text-sm">
                                                info@hppm.vn
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <Card className="border-border border-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2 text-xl">
                                        <Network className="text-primary h-6 w-6" />
                                        Khu vực hoạt động
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div>
                                            <p className="font-medium">
                                                Hồ Chí Minh
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Quận 1, Quận 2, Quận 7, Thủ Đức
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Hà Nội
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Ba Đình, Cầu Giấy, Hoàn Kiếm
                                            </p>
                                        </div>
                                        <div>
                                            <p className="font-medium">
                                                Các tỉnh thành khác
                                            </p>
                                            <p className="text-muted-foreground text-sm">
                                                Đà Nẵng, Bình Dương, Đồng Nai
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="border-border bg-background border-y">
                <motion.div
                    className="container mx-auto px-4 py-16"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mx-auto grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                label: 'Nhân viên',
                                value: '360',
                                icon: <Users className="h-6 w-6" />,
                            },
                            {
                                label: 'Phòng ban',
                                value: '8',
                                icon: <Building2 className="h-6 w-6" />,
                            },
                            {
                                label: 'BĐS quản lý',
                                value: '500+',
                                icon: <MapPin className="h-6 w-6" />,
                            },
                            {
                                label: 'Khách hàng',
                                value: '1,200+',
                                icon: <Network className="h-6 w-6" />,
                            },
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="group space-y-3 text-center"
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                                transition={{ type: 'spring', stiffness: 280 }}
                            >
                                <div className="flex justify-center">
                                    <div className="bg-primary/10 text-primary flex h-14 w-14 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110">
                                        {stat.icon}
                                    </div>
                                </div>
                                <div className="text-primary text-3xl font-bold md:text-4xl">
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

            {/* Culture & Values Section */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    className="mx-auto max-w-6xl"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="mb-12 text-center"
                        variants={fadeInUp}
                    >
                        <h3 className="text-foreground mb-2 text-2xl font-bold">
                            Văn hóa & Giá trị
                        </h3>
                        <p className="text-muted-foreground">
                            Các giá trị cốt lõi định hướng cách chúng tôi làm
                            việc và phục vụ khách hàng
                        </p>
                    </motion.div>
                    <motion.div
                        className="grid grid-cols-1 gap-6 md:grid-cols-3"
                        variants={staggerContainer}
                    >
                        {[
                            {
                                title: 'Chuyên nghiệp',
                                desc: 'Đội ngũ có trình độ cao, quy trình chuẩn quốc tế trong quản lý bất động sản',
                                icon: <Target className="h-6 w-6" />,
                            },
                            {
                                title: 'Minh bạch',
                                desc: 'Báo cáo tài chính rõ ràng, công khai mọi giao dịch với chủ đầu tư',
                                icon: <Users className="h-6 w-6" />,
                            },
                            {
                                title: 'Tận tâm',
                                desc: 'Phục vụ khách hàng 24/7, giải quyết mọi vấn đề nhanh chóng và hiệu quả',
                                icon: <Briefcase className="h-6 w-6" />,
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                whileHover={{ y: -4 }}
                                transition={{ type: 'spring', stiffness: 280 }}
                            >
                                <Card className="text-center transition-shadow hover:shadow-md">
                                    <CardHeader>
                                        <div className="bg-primary/10 mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl">
                                            <div className="text-primary">
                                                {value.icon}
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg">
                                            {value.title}
                                        </CardTitle>
                                        <CardDescription className="pt-2 text-sm">
                                            {value.desc}
                                        </CardDescription>
                                    </CardHeader>
                                </Card>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </section>

            {/* CTA Section */}
            <section className="bg-background w-full py-20 md:py-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="mx-auto w-full max-w-7xl px-4 md:px-6"
                >
                    <div className="bg-background mx-auto flex w-full max-w-6xl flex-col items-center rounded-2xl border p-12 text-center shadow-lg md:p-16">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Badge className="mb-6">Cơ hội nghề nghiệp</Badge>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mb-6 max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
                        >
                            Gia nhập đội ngũ đang phát triển
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-muted-foreground mb-8 max-w-2xl text-lg"
                        >
                            Gia nhập đội ngũ chuyên nghiệp trong lĩnh vực quản
                            lý bất động sản hàng đầu. Khám phá cơ hội nghề
                            nghiệp hấp dẫn.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-col gap-4 sm:flex-row"
                        >
                            <Button size="lg" className="group">
                                Xem vị trí tuyển dụng
                                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Button>
                            <Button size="lg" variant="outline">
                                Liên hệ nhân sự
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </main>
    );
};

export default OrganizationLanding;
