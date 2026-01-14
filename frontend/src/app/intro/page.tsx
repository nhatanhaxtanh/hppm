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
import { TestimonialsColumn } from '@/components/ui/testimonials-column';

const testimonials = [
    {
        text: 'Ban quản lý phản hồi nhanh, xử lý sự cố đúng SLA và luôn chủ động cập nhật tiến độ cho cư dân.',
        image: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Nguyễn Thị Mai',
        role: 'Cư dân',
    },
    {
        text: 'Chất lượng vệ sinh và an ninh được duy trì ổn định, không gian sống an toàn và sạch sẽ hơn hẳn.',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Trần Quốc Hùng',
        role: 'Cư dân',
    },
    {
        text: 'Báo cáo vận hành minh bạch, số liệu rõ ràng giúp chúng tôi dễ dàng kiểm soát chi phí.',
        image: 'https://randomuser.me/api/portraits/women/3.jpg',
        name: 'Lê Hoàng Nam',
        role: 'Cư dân',
    },
    {
        text: 'Đội kỹ thuật hỗ trợ nhanh, bảo trì định kỳ đúng kế hoạch nên thiết bị hoạt động ổn định.',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        name: 'Phạm Ngọc Anh',
        role: 'Cư dân',
    },
    {
        text: 'Ứng dụng phản ánh của cư dân rất tiện, mọi yêu cầu đều được ghi nhận và xử lý nhanh.',
        image: 'https://randomuser.me/api/portraits/women/5.jpg',
        name: 'Võ Thu Hà',
        role: 'Cư dân',
    },
    {
        text: 'Tác phong làm việc chuyên nghiệp, quy trình rõ ràng giúp nâng chất lượng dịch vụ dự án.',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
        name: 'Đặng Minh Trí',
        role: 'Cư dân',
    },
    {
        text: 'Chăm sóc cư dân tận tâm, các hoạt động cộng đồng được tổ chức đều đặn và hiệu quả.',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        name: 'Bùi Thảo Nguyên',
        role: 'Cư dân',
    },
    {
        text: 'Công ty làm việc minh bạch, phối hợp tốt với ban quản trị và luôn lắng nghe góp ý.',
        image: 'https://randomuser.me/api/portraits/women/8.jpg',
        name: 'Phan Đức Long',
        role: 'Cư dân',
    },
    {
        text: 'Dịch vụ vận hành ổn định, cư dân an tâm và tòa nhà luôn được bảo trì đúng chuẩn.',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        name: 'Hoàng Anh Tuấn',
        role: 'Cư dân',
    },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

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

const data = [
    {
        title: '2019',
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Thành lập công ty và triển khai những dự án quản lý bất động
                    sản đầu tiên, xây nền tảng quy trình vận hành chuẩn.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/templates/startup-1.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-2.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-3.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-4.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: '2020 - 2021',
        content: (
            <div>
                <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Mở rộng danh mục quản lý, nâng chuẩn KPI vận hành và chất
                    lượng dịch vụ cư dân.
                </p>
                <div className="grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: '2022',
        content: (
            <div>
                <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Đẩy mạnh chuyển đổi số trong quản lý tài sản và báo cáo vận
                    hành minh bạch.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    <li>Dashboard báo cáo tài chính theo thời gian thực.</li>
                    <li>Ứng dụng quản lý bảo trì, tài sản và SLA sự cố.</li>
                    <li>Tối ưu năng lượng, giảm OPEX nhờ dữ liệu.</li>
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/pro/hero-sections.png"
                        alt="hero template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/features-section.png"
                        alt="feature template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/pro/bento-grids.png"
                        alt="bento template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/cards.png"
                        alt="cards template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                </div>
            </div>
        ),
    },
    {
        title: '2023 - Nay',
        content: (
            <div>
                <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
                    Phát triển mô hình quản lý bất động sản bền vững, tập trung
                    trải nghiệm cư dân và chuẩn mực ESG.
                </p>
                <ul className="space-y-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
                    <li>Đào tạo định kỳ, chuẩn hóa năng lực quản lý dự án.</li>
                    <li>Hệ sinh thái dịch vụ cư dân 24/7 đa kênh.</li>
                    <li>Kiểm soát tuân thủ pháp lý và quản trị rủi ro.</li>
                </ul>
                <div className="mt-6 grid grid-cols-2 gap-4">
                    <Image
                        src="https://assets.aceternity.com/templates/startup-1.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-2.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-3.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
                    <Image
                        src="https://assets.aceternity.com/templates/startup-4.webp"
                        alt="startup template"
                        width={500}
                        height={500}
                        className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,42,53,0.06),0_1px_1px_rgba(0,0,0,0.05),0_0_0_1px_rgba(34,42,53,0.04),0_0_4px_rgba(34,42,53,0.08),0_16px_68px_rgba(47,48,55,0.05),0_1px_0_rgba(255,255,255,0.1)_inset] md:h-44 lg:h-60"
                    />
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
        value: 'info@hppm.vn',
        link: 'mailto:info@hppm.vn',
    },
    {
        icon: Phone,
        title: 'Hotline',
        description: 'Liên hệ qua hotline',
        value: '028 3620 3160',
        link: 'tel:02836203160',
    },
    {
        icon: MapPin,
        title: 'Địa chỉ',
        description: 'Visit us at our office',
        value: '30D2 Phan Văn Trị, Phường Hạnh Thông, TP. HCM',
        link: 'https://maps.google.com/?q=30D2+Phan+Văn+Trị,+Phường+Hạnh+Thông,+TP.+HCM',
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
            <section className="from-primary/5 to-accent/5 relative overflow-hidden py-24 md:py-32">
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
            <section className="bg-background py-24 md:py-32">
                <div className="text-center">
                    <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                        Hành trình phát triển
                    </h2>
                    <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                        14 năm không ngừng đổi mới và phát triển
                    </p>
                </div>
                <div className="w-full">
                    <Timeline data={data} />
                </div>
            </section>

            {/* Parallax Scroll Gallery Section */}
            <section className="bg-background py-24 md:py-32">
                <motion.div
                    className="mx-auto max-w-7xl px-6"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="mb-16 text-center">
                        <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                            Hình ảnh Ban Quản Lý tại dự án
                        </h2>
                        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                            Khám phá những dự án tiêu biểu mà chúng tôi đã và
                            đang quản lý
                        </p>
                    </div>
                </motion.div>
                <ParallaxScrollSecond images={galleryImages} />
            </section>

            {/* Testimonials Section */}
            <section className="bg-background py-24 md:py-52">
                <div className="z-10 container mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.1,
                            ease: [0.16, 1, 0.3, 1],
                        }}
                        viewport={{ once: true }}
                        className="mx-auto flex max-w-135 flex-col items-center justify-center"
                    >
                        <div className="mb-16 text-center">
                            <h2 className="text-foreground mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                Khách hàng nói gì về chúng tôi
                            </h2>
                            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
                                Những lời đánh giá từ các chủ dự án và cư dân
                                tin tưởng chúng tôi
                            </p>
                        </div>
                    </motion.div>

                    <div className="mt-10 flex max-h-185 justify-center gap-6 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
                        <TestimonialsColumn
                            testimonials={firstColumn}
                            className="md:block"
                            duration={15}
                        />
                        <TestimonialsColumn
                            testimonials={secondColumn}
                            className="hidden md:block"
                            duration={20}
                        />
                        <TestimonialsColumn
                            testimonials={thirdColumn}
                            className="hidden lg:block"
                            duration={17}
                        />
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-24 md:py-12">
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
