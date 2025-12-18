'use client';

import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
    FacebookIcon,
    FrameIcon,
    InstagramIcon,
    LinkedinIcon,
    YoutubeIcon,
} from 'lucide-react';

interface FooterLink {
    title: string;
    href: string;
    icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
    label: string;
    links: FooterLink[];
}

const footerLinks: FooterSection[] = [
    {
        label: 'Dịch vụ',
        links: [
            { title: 'Quản lý vận hành', href: '#dich-vu' },
            { title: 'Bảo trì kỹ thuật', href: '#dich-vu' },
            { title: 'Chăm sóc cư dân', href: '#dich-vu' },
            { title: 'Tư vấn & nâng cấp tài sản', href: '#dich-vu' },
        ],
    },
    {
        label: 'Công ty',
        links: [
            { title: 'Giới thiệu', href: '/gioi-thieu' },
            { title: 'Dự án tiêu biểu', href: '/du-an' },
            { title: 'Đội ngũ', href: '/doi-ngu' },
            { title: 'Liên hệ', href: '/lien-he' },
        ],
    },
    {
        label: 'Tài nguyên',
        links: [
            { title: 'Tin tức & Bài viết', href: '/bai-viet' },
            { title: 'Hồ sơ năng lực', href: '/ho-so-nang-luc' },
            { title: 'Tuyển dụng', href: '/tuyen-dung' },
            { title: 'Hỗ trợ khách hàng', href: '/ho-tro' },
        ],
    },
    {
        label: 'Kết nối',
        links: [
            { title: 'Facebook', href: '#', icon: FacebookIcon },
            { title: 'Instagram', href: '#', icon: InstagramIcon },
            { title: 'Youtube', href: '#', icon: YoutubeIcon },
            { title: 'LinkedIn', href: '#', icon: LinkedinIcon },
        ],
    },
];

export function Footer() {
    return (
        <footer className="md:rounded-t-6xl relative mx-auto flex w-full max-w-6xl flex-col items-center justify-center rounded-t-4xl border-t bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)] px-6 py-12 lg:py-16">
            {/* top glow line */}
            <div className="bg-foreground/20 absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur" />

            <div className="grid w-full gap-8 xl:grid-cols-3 xl:gap-8">
                {/* Brand */}
                <AnimatedContainer className="space-y-4">
                    <FrameIcon className="size-8" />
                    <p className="text-muted-foreground mt-8 text-sm md:mt-0">
                        © {new Date().getFullYear()} HPPM. Bảo lưu mọi quyền.
                    </p>
                </AnimatedContainer>

                {/* Links */}
                <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4 xl:col-span-2 xl:mt-0">
                    {footerLinks.map((section, index) => (
                        <AnimatedContainer
                            key={section.label}
                            delay={0.1 + index * 0.1}
                        >
                            <div className="mb-10 md:mb-0">
                                <h3 className="text-xs font-semibold tracking-wide uppercase">
                                    {section.label}
                                </h3>
                                <ul className="text-muted-foreground mt-4 space-y-2 text-sm">
                                    {section.links.map((link) => (
                                        <li key={link.title}>
                                            <a
                                                href={link.href}
                                                className="hover:text-foreground inline-flex items-center transition-all duration-300"
                                            >
                                                {link.icon && (
                                                    <link.icon className="me-1 size-4" />
                                                )}
                                                {link.title}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </footer>
    );
}

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({
    className,
    delay = 0.1,
    children,
}: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <>{children}</>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
