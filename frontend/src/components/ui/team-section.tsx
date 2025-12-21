'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MotionImage = motion(Image);

const members = [
    {
        name: 'Liam Brown',
        role: 'Founder - CEO',
        avatar: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        link: '#',
    },
    {
        name: 'Elijah Jones',
        role: 'Co-Founder - CTO',
        avatar: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        link: '#',
    },
    {
        name: 'Isabella Garcia',
        role: 'Sales Manager',
        avatar: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        link: '#',
    },
    {
        name: 'Henry Lee',
        role: 'UX Engeneer',
        avatar: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        link: '#',
    },
    {
        name: 'Ava Williams',
        role: 'Interaction Designer',
        avatar: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        link: '#',
    },
    {
        name: 'Olivia Miller',
        role: 'Visual Designer',
        avatar: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
        link: '#',
    },
];

export default function TeamSection() {
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

    return (
        <section className="bg-background text-foreground">
            <div className="from-primary/5 via-background to-accent/5 relative overflow-hidden py-16 md:py-24">
                <motion.div
                    className="relative z-10 mx-auto max-w-7xl px-6"
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
                            <Users className="text-primary h-5 w-5" />
                            <span className="text-sm font-medium">
                                Đội ngũ chuyên nghiệp
                            </span>
                        </motion.div>

                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                            <span className="text-foreground">Đội ngũ</span>
                            <br />
                            <motion.span
                                className="bg-linear-to-r from-emerald-300 via-teal-500 to-cyan-600 bg-clip-text text-transparent"
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
                                của chúng tôi
                            </motion.span>
                        </h1>

                        <p className="text-muted-foreground mx-auto max-w-3xl text-lg leading-relaxed text-pretty sm:text-xl md:text-2xl">
                            Gặp gỡ những con người tận tâm đứng sau thành công
                            của công ty. Đội ngũ chuyên nghiệp với kinh nghiệm
                            và đam mê.
                        </p>
                    </motion.div>
                </motion.div>

                <motion.div className="mb-16 text-center" variants={fadeInUp}>
                    <div className="mx-auto max-w-6xl">
                        <div className="mt-12 md:mt-24">
                            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                                {members.map((member, index) => (
                                    <motion.div
                                        key={index}
                                        className="group overflow-hidden"
                                        initial={{ opacity: 0, y: 32 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.7,
                                            delay: index * 0.1,
                                            ease: [0.23, 0.86, 0.39, 0.96],
                                        }}
                                        viewport={{ once: true, amount: 0.2 }}
                                    >
                                        <MotionImage
                                            className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 group-hover:h-90 group-hover:rounded-xl hover:grayscale-0"
                                            src={member.avatar}
                                            alt="team member"
                                            width="826"
                                            height="1239"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            transition={{ duration: 0.8 }}
                                            viewport={{ once: true }}
                                        />
                                        <div className="px-2 pt-2 sm:pt-4 sm:pb-0">
                                            <div className="flex justify-between">
                                                <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                                                    {member.name}
                                                </h3>
                                                <span className="text-xs">
                                                    _0{index + 1}
                                                </span>
                                            </div>
                                            <div className="mt-1 flex items-center justify-between">
                                                <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                                    {member.role}
                                                </span>
                                                <Link
                                                    href={member.link}
                                                    className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 hover:underline"
                                                >
                                                    {' '}
                                                    Linktree
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
