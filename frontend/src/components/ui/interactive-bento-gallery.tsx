'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// MediaItemType defines the structure of a media item
interface MediaItemType {
    id: number;
    type: string;
    title: string;
    desc: string;
    url: string;
    span: string;
}
// MediaItem component renders either a video or image based on item.type
const MediaItem = ({
    item,
    className,
    onClick,
}: {
    item: MediaItemType;
    className?: string;
    onClick?: () => void;
}) => {
    const videoRef = useRef<HTMLVideoElement>(null); // Reference for video element
    const [isInView, setIsInView] = useState(false); // To track if video is in the viewport
    const [isBuffering, setIsBuffering] = useState(true); // To track if video is buffering

    // Intersection Observer to detect if video is in view and play/pause accordingly
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setIsInView(entry.isIntersecting); // Set isInView to true if the video is in view
            });
        }, options);

        if (videoRef.current) {
            observer.observe(videoRef.current); // Start observing the video element
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current); // Clean up observer when component unmounts
            }
        };
    }, []);
    // Handle video play/pause based on whether the video is in view or not
    useEffect(() => {
        let mounted = true;

        const handleVideoPlay = async () => {
            if (!videoRef.current || !isInView || !mounted) return; // Don't play if video is not in view or component is unmounted

            try {
                if (videoRef.current.readyState >= 3) {
                    setIsBuffering(false);
                    await videoRef.current.play(); // Play the video if it's ready
                } else {
                    setIsBuffering(true);
                    await new Promise((resolve) => {
                        if (videoRef.current) {
                            videoRef.current.oncanplay = resolve; // Wait until the video can start playing
                        }
                    });
                    if (mounted) {
                        setIsBuffering(false);
                        await videoRef.current.play();
                    }
                }
            } catch (error) {
                console.warn('Video playback failed:', error);
            }
        };

        if (isInView) {
            handleVideoPlay();
        } else if (videoRef.current) {
            videoRef.current.pause();
        }

        return () => {
            mounted = false;
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.removeAttribute('src');
                videoRef.current.load();
            }
        };
    }, [isInView]);

    // Render either a video or image based on item.type

    if (item.type === 'video') {
        return (
            <div className={`${className} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    onClick={onClick}
                    playsInline
                    muted
                    loop
                    preload="auto"
                    style={{
                        opacity: isBuffering ? 0.8 : 1,
                        transition: 'opacity 0.2s',
                        transform: 'translateZ(0)',
                        willChange: 'transform',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/10">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    </div>
                )}
            </div>
        );
    }

    return (
        <Image
            src={item.url} // Image source URL
            alt={item.title} // Alt text for the image
            width={800}
            height={600}
            className={`${className} cursor-pointer object-cover`} // Style the image
            onClick={onClick} // Trigger onClick when the image is clicked
            loading="lazy" // Lazy load the image for performance
            decoding="async" // Decode the image asynchronously
        />
    );
};

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[];
    title?: string;
    description?: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
    mediaItems,
    title,
    description,
}) => {
    const [items] = useState(mediaItems);

    return (
        <div className="container mx-auto max-w-6xl px-4 py-8">
            {(title || description) && (
                <div className="mb-8 text-center">
                    {title && (
                        <motion.h1
                            className="bg-linear-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl dark:from-white dark:via-gray-200 dark:to-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {title}
                        </motion.h1>
                    )}
                    {description && (
                        <motion.p
                            className="mt-2 text-sm text-gray-600 sm:text-base dark:text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            {description}
                        </motion.p>
                    )}
                </div>
            )}
            <motion.div
                className="grid auto-rows-[120px] grid-cols-1 gap-4 sm:grid-cols-3 md:grid-flow-dense md:grid-cols-4"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 },
                    },
                }}
            >
                {items.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={`relative overflow-hidden rounded-xl ${item.span}`}
                        variants={{
                            hidden: { y: 50, scale: 0.9, opacity: 0 },
                            visible: {
                                y: 0,
                                scale: 1,
                                opacity: 1,
                                transition: {
                                    type: 'spring',
                                    stiffness: 350,
                                    damping: 25,
                                    delay: index * 0.05,
                                },
                            },
                        }}
                        whileHover={{ scale: 1.02 }}
                    >
                        <MediaItem
                            item={item}
                            className="absolute inset-0 h-full w-full"
                        />
                        <motion.div
                            className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="absolute inset-0 flex flex-col justify-end p-2 sm:p-3 md:p-4">
                                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
                                <h3 className="relative line-clamp-1 text-xs font-medium text-white sm:text-sm md:text-base">
                                    {item.title}
                                </h3>
                                <p className="relative mt-0.5 line-clamp-2 text-[10px] text-white/70 sm:text-xs md:text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default InteractiveBentoGallery;
