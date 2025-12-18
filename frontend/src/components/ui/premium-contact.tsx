'use client';

import type React from 'react';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    User,
    MessageSquare,
    Building,
    ArrowRight,
    Sparkles,
    CheckCircle,
    Clock,
    Globe,
    Shield,
    Zap,
} from 'lucide-react';

const contactMethods = [
    {
        icon: Mail,
        title: 'Gửi email',
        description: 'Liên hệ qua email',
        value: 'dhileepkumargm@21st.dev',
        link: 'mailto:dhileepkumargm@gmail.com',
        gradient: 'from-gray-500/20 to-gray-400/20',
        hoverColor: 'gray',
    },
    {
        icon: Phone,
        title: 'Gọi cho chúng tôi',
        description: 'Trò chuyện trực tiếp với đội ngũ',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567',
        gradient: 'from-gray-600/20 to-gray-500/20',
        hoverColor: 'gray',
    },
    {
        icon: MapPin,
        title: 'Đến thăm văn phòng',
        description: 'Trụ sở chính của chúng tôi',
        value: 'San Francisco, CA',
        link: '#Europe, Middle East, and Africa (EMEA)',
        gradient: 'from-gray-700/20 to-gray-600/20',
        hoverColor: 'gray',
    },
];

const companyStats = [
    { label: 'Thời gian phản hồi', value: '< 2 giờ', icon: Clock },
    { label: 'Khách hàng toàn cầu', value: '500+', icon: Globe },
    { label: 'Chuẩn bảo mật', value: 'SOC 2', icon: Shield },
    { label: 'Tỉ lệ thành công', value: '99.9%', icon: Zap },
];

export function PremiumContact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleInputChange = (field: string, value: string) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors((prev) => ({ ...prev, [field]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Vui lòng nhập tên';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Vui lòng nhập email';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email không hợp lệ';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Vui lòng nhập nội dung';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Nội dung tối thiểu 10 ký tự';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

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
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <section className="relative overflow-hidden bg-white py-32 text-gray-900 dark:bg-black dark:text-white">

            <motion.div
                ref={containerRef}
                className="relative z-10 mx-auto max-w-7xl px-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
            >
                {/* Header */}
                <motion.div className="mb-20 text-center" variants={fadeInUp}>
                    <motion.div
                        className="mb-6 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-gray-700 shadow-sm backdrop-blur-sm dark:border-white/15 dark:bg-white/10 dark:text-white/80"
                        whileHover={{
                            scale: 1.05,
                            borderColor: 'rgba(255, 255, 255, 0.3)',
                        }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{
                                duration: 3,
                                repeat: Number.POSITIVE_INFINITY,
                                ease: 'linear',
                            }}
                        >
                            <Sparkles className="h-4 w-4 text-amber-500 dark:text-indigo-300" />
                        </motion.div>
                        <span className="text-sm font-medium text-gray-700 dark:text-white/80">
                            Kết nối ngay
                        </span>
                        <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-500 dark:bg-white" />
                    </motion.div>

                    <motion.h2
                        className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl"
                        variants={fadeInUp}
                    >
                        <span className="bg-linear-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent dark:from-white dark:to-white/80">
                            Kết nối
                        </span>
                        <br />
                        <motion.span
                            className="bg-linear-to-r from-indigo-600 via-purple-600 to-rose-500 bg-clip-text text-transparent"
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
                            cùng chúng tôi
                        </motion.span>
                    </motion.h2>

                    <motion.p
                        className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-600 sm:text-2xl dark:text-white/60"
                        variants={fadeInUp}
                    >
                        Bạn đã sẵn sàng chuyển đổi doanh nghiệp với AI? Hãy chia
                        sẻ mục tiêu để chúng tôi cùng bạn hiện thực hóa.
                    </motion.p>
                </motion.div>

                {/* Stats Bar */}
                <motion.div
                    className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4"
                    variants={fadeInUp}
                >
                    {companyStats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-md transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/15 dark:bg-white/5 dark:backdrop-blur-xl dark:hover:bg-white/10"
                            whileHover={{ scale: 1.03, y: -5 }}
                            variants={fadeInUp}
                        >
                            <motion.div
                                className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-gray-100 bg-gray-50 text-gray-900 dark:border-white/20 dark:bg-linear-to-br dark:from-gray-500/20 dark:to-gray-700/20"
                                whileHover={{ rotateY: 180 }}
                                transition={{ duration: 0.6 }}
                            >
                                <stat.icon className="h-6 w-6 text-gray-900 dark:text-white" />
                            </motion.div>
                            <div className="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
                                {stat.value}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-white/60">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Contact Form */}
                    <motion.div className="space-y-8" variants={fadeInUp}>
                        <div>
                            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                                Gửi tin nhắn cho chúng tôi
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-white/60">
                                Chia sẻ về dự án, chúng tôi sẽ phản hồi trong 24
                                giờ.
                            </p>
                        </div>

                        <AnimatePresence mode="wait">
                            {!isSubmitted ? (
                                <motion.form
                                    key="form"
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                    initial={{ opacity: 1 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                        <div className="relative">
                                            <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400 dark:text-white/40" />
                                            <input
                                                type="text"
                                                placeholder="Họ và tên"
                                                value={formData.name}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'name',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`w-full rounded-xl border bg-white py-4 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-all focus:border-gray-400 focus:outline-none dark:bg-white/10 dark:text-white dark:placeholder-white/50 dark:focus:border-white ${
                                                    errors.name
                                                        ? 'border-red-400 dark:border-red-400'
                                                        : 'border-gray-200 dark:border-white/15'
                                                }`}
                                            />
                                            {errors.name && (
                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    className="mt-2 text-sm text-red-400"
                                                >
                                                    {errors.name}
                                                </motion.p>
                                            )}
                                        </div>

                                        <div className="relative">
                                            <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400 dark:text-white/40" />
                                            <input
                                                type="email"
                                                placeholder="Địa chỉ email"
                                                value={formData.email}
                                                onChange={(e) =>
                                                    handleInputChange(
                                                        'email',
                                                        e.target.value,
                                                    )
                                                }
                                                className={`w-full rounded-xl border bg-white py-4 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-all focus:border-gray-400 focus:outline-none dark:bg-white/10 dark:text-white dark:placeholder-white/50 dark:focus:border-white ${
                                                    errors.email
                                                        ? 'border-red-400 dark:border-red-400'
                                                        : 'border-gray-200 dark:border-white/15'
                                                }`}
                                            />
                                            {errors.email && (
                                                <motion.p
                                                    initial={{
                                                        opacity: 0,
                                                        y: -10,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        y: 0,
                                                    }}
                                                    className="mt-2 text-sm text-red-400"
                                                >
                                                    {errors.email}
                                                </motion.p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <Building className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400 dark:text-white/40" />
                                        <input
                                            type="text"
                                            placeholder="Công ty (không bắt buộc)"
                                            value={formData.company}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'company',
                                                    e.target.value,
                                                )
                                            }
                                            className="w-full rounded-xl border border-gray-200 bg-white py-4 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-all focus:border-gray-400 focus:outline-none dark:border-white/15 dark:bg-white/10 dark:text-white dark:placeholder-white/50 dark:focus:border-white"
                                        />
                                    </div>

                                    <div className="relative">
                                        <MessageSquare className="absolute top-4 left-3 h-5 w-5 text-gray-400 dark:text-white/40" />
                                        <textarea
                                            placeholder="Chia sẻ về dự án của bạn..."
                                            rows={6}
                                            value={formData.message}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    'message',
                                                    e.target.value,
                                                )
                                            }
                                            className={`w-full resize-none rounded-xl border bg-white py-4 pr-4 pl-10 text-gray-900 placeholder-gray-500 transition-all focus:border-gray-400 focus:outline-none dark:bg-white/10 dark:text-white dark:placeholder-white/50 dark:focus:border-white ${
                                                errors.message
                                                    ? 'border-red-400 dark:border-red-400'
                                                    : 'border-gray-200 dark:border-white/15'
                                            }`}
                                        />
                                        {errors.message && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-2 text-sm text-red-400"
                                            >
                                                {errors.message}
                                            </motion.p>
                                        )}
                                    </div>

                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="group relative w-full overflow-hidden rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-6 py-4 font-medium text-white shadow-lg transition-all hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.div
                                            className="absolute inset-0 bg-linear-to-r from-white/20 to-transparent"
                                            initial={{ x: '-100%' }}
                                            whileHover={{ x: '100%' }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <span className="relative flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <motion.div
                                                    className="h-5 w-5 rounded-full border-2 border-gray-300 border-t-gray-600 dark:border-white/30 dark:border-t-white"
                                                    animate={{ rotate: 360 }}
                                                    transition={{
                                                        duration: 1,
                                                        repeat: Number.POSITIVE_INFINITY,
                                                        ease: 'linear',
                                                    }}
                                                />
                                            ) : (
                                                <>
                                                    <Send className="h-5 w-5" />
                                                    Gửi tin nhắn
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </>
                                            )}
                                        </span>
                                    </motion.button>
                                </motion.form>
                            ) : (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="py-12 text-center"
                                >
                                    <motion.div
                                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-green-400/30 bg-green-500/20"
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{
                                            delay: 0.2,
                                            type: 'spring',
                                            stiffness: 200,
                                        }}
                                    >
                                        <CheckCircle className="h-10 w-10 text-green-400" />
                                    </motion.div>
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                                        Đã gửi thành công!
                                    </h3>
                                    <p className="mb-6 text-lg text-gray-600 dark:text-white/60">
                                        Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản
                                        hồi trong vòng 24 giờ.
                                    </p>
                                    <motion.button
                                        onClick={() => {
                                            setIsSubmitted(false);
                                            setFormData({
                                                name: '',
                                                email: '',
                                                company: '',
                                                message: '',
                                            });
                                        }}
                                        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-gray-900 transition-all hover:bg-gray-50 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        Gửi thêm tin nhắn
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Contact Methods */}
                    <motion.div className="space-y-8" variants={fadeInUp}>
                        <div>
                            <h3 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                                Các kênh liên hệ khác
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-white/60">
                                Chọn phương thức phù hợp nhất với bạn.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {contactMethods.map((method, index) => (
                                <motion.a
                                    key={index}
                                    href={method.link}
                                    className="group block rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl dark:border-white/15 dark:bg-white/5 dark:backdrop-blur-xl dark:hover:bg-white/10"
                                    variants={fadeInUp}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                >
                                    <div className="flex items-center gap-4">
                                        <motion.div
                                            className={`h-14 w-14 rounded-xl border border-gray-100 bg-white bg-linear-to-br text-gray-900 shadow-inner dark:border-white/20 dark:bg-transparent ${method.gradient} flex items-center justify-center`}
                                            whileHover={{
                                                scale: 1.1,
                                                rotateY: 180,
                                            }}
                                            transition={{ duration: 0.6 }}
                                        >
                                            <method.icon className="h-7 w-7 text-gray-900 dark:text-white" />
                                        </motion.div>
                                        <div className="flex-1">
                                            <h4 className="mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                                                {method.title}
                                            </h4>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-white/60">
                                                {method.description}
                                            </p>
                                            <p className="font-medium text-gray-900 dark:text-white">
                                                {method.value}
                                            </p>
                                        </div>
                                        <ArrowRight className="h-5 w-5 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-gray-900 dark:text-white/40 dark:group-hover:text-white" />
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        <motion.div
                            className="rounded-2xl border border-gray-200 bg-linear-to-br from-gray-50 to-gray-100 p-6 shadow-md dark:border-gray-400/30 dark:from-gray-500/8 dark:to-gray-700/8 dark:backdrop-blur-xl"
                            variants={fadeInUp}
                        >
                            <h4 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                                Cam kết phản hồi nhanh
                            </h4>
                            <p className="text-sm leading-relaxed text-gray-600 dark:text-white/80">
                                Chúng tôi luôn phản hồi trong vòng 2 giờ làm
                                việc và sắp xếp cuộc gọi chi tiết trong 24 giờ
                                để bàn bạc sâu về dự án của bạn.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Floating Elements */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-2 w-2 rounded-full bg-gray-400/40 dark:bg-white/20"
                        style={{
                            left: `${10 + i * 12}%`,
                            top: `${20 + i * 10}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 3 + i * 0.5,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                            delay: i * 0.3,
                        }}
                    />
                ))}
            </motion.div>
        </section>
    );
}
