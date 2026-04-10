'use client';

import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import Image from 'next/image';
import {
    getLeadersTeamSectionCropStyle,
    teamImageCropClassName,
} from '@/lib/team-image-crop';
import { Button } from './button';
import { teamData } from '../../../constant/constant-data';

const MotionImage = motion(Image);

const members = [
    {
        name: 'Trần Thị Diễm Hương',
        role: 'Tổng Giám Đốc',
        bio: 'Điều hành chiến lược phát triển và định hướng vận hành tổng thể của HPPM.',
        link: '#',
    },
    {
        name: 'Nguyễn Lê Duy Khánh',
        role: 'Phó Tổng Giám Đốc',
        bio: 'Phụ trách điều phối vận hành và tối ưu hiệu quả quản trị tại các dự án.',
        link: '#',
    },
    {
        name: 'Phan Thị Như Giang',
        role: 'Giám Đốc Dự Án',
        bio: 'Trực tiếp triển khai, giám sát và đảm bảo chất lượng vận hành tại dự án.',
        link: '#',
    },
    {
        name: 'Lê Nhật Anh',
        role: 'Trợ Lý Tổng Giám Đốc',
        bio: 'Hỗ trợ điều phối công việc điều hành và kết nối các bộ phận trong hệ thống.',
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
            <div className="from-primary/5 via-background to-accent/5 relative overflow-hidden py-24 md:py-32">
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
                                Ban lãnh đạo
                            </span>
                        </motion.div>

                        <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance sm:text-6xl md:text-7xl lg:text-8xl">
                            <span className="text-foreground">
                                Ban lãnh đạo
                            </span>
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
                                HPPM
                            </motion.span>
                        </h1>

                        <p className="text-muted-foreground mx-auto mb-8 max-w-3xl text-lg leading-relaxed text-pretty sm:text-xl md:text-2xl">
                            Gặp gỡ những con người tận tâm đứng sau thành công
                            của công ty. Đội ngũ chuyên nghiệp với kinh nghiệm
                            và đam mê.
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="cursor-pointer bg-transparent px-8"
                            >
                                Về chúng tôi
                            </Button>
                            <Button size="lg" className="bg-primary px-8">
                                Open positions
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div className="mb-16 text-center" variants={fadeInUp}>
                    <div className="mx-auto w-full max-w-6xl">
                        <div className="mt-12 px-6 md:mt-24">
                            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                                {members.map((member, index) => {
                                    const memberImage =
                                        teamData[index % teamData.length]
                                            ?.imageSrc;
                                    return (
                                        <motion.div
                                            key={index}
                                            className="group text-left"
                                            initial={{ opacity: 0, y: 32 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: index * 0.1,
                                                ease: [0.23, 0.86, 0.39, 0.96],
                                            }}
                                            viewport={{
                                                once: true,
                                                amount: 0.2,
                                            }}
                                        >
                                            <div className="mb-4 aspect-3/4 w-full overflow-hidden rounded-lg">
                                                <div className="h-full w-full transition-transform duration-300 group-hover:scale-[1.03]">
                                                    <MotionImage
                                                        className={`h-full w-full ${teamImageCropClassName}`}
                                                        src={memberImage}
                                                        alt={member.name}
                                                        style={getLeadersTeamSectionCropStyle(
                                                            member.name,
                                                        )}
                                                        width={400}
                                                        height={400}
                                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                                                        quality={80}
                                                        initial={{ opacity: 0 }}
                                                        whileInView={{
                                                            opacity: 1,
                                                        }}
                                                        transition={{
                                                            duration: 0.8,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                            <h3 className="text-foreground text-lg font-semibold">
                                                {member.name}
                                            </h3>
                                            <p className="text-primary mb-2 text-sm font-medium">
                                                {member.role}
                                            </p>
                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                {member.bio}
                                            </p>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
