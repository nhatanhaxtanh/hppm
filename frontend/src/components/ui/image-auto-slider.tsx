import Image from 'next/image';
import React from 'react';

export const Component = () => {
    // Images for the infinite scroll - using Unsplash URLs
    const images = [
        'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1673264933212-d78737f38e48?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1711434824963-ca894373272e?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1675705721263-0bbeec261c49?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1524799526615-766a9833dec0?q=70&w=960&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ];

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <>
            <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

            <div className="bg-background relative flex min-h-screen w-full items-center justify-center overflow-hidden">
                {/* Background gradient */}
                <div className="absolute inset-0 z-0 bg-linear-to-b from-background via-background/95 to-background" />

                {/* Scrolling images container */}
                <div className="relative z-10 flex w-full items-center justify-center py-8">
                    <div className="scroll-container w-full max-w-6xl">
                        <div className="infinite-scroll flex w-max gap-6">
                            {duplicatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="image-item h-48 w-48 shrink-0 overflow-hidden rounded-xl shadow-2xl md:h-64 md:w-64 lg:h-80 lg:w-80"
                                >
                                    <Image
                                        src={image}
                                        alt={`Gallery image ${(index % images.length) + 1}`}
                                        width={320}
                                        height={320}
                                        sizes="(max-width: 768px) 192px, (max-width: 1024px) 256px, 320px"
                                        quality={75}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom gradient overlay */}
                <div className="absolute right-0 bottom-0 left-0 z-20 h-24 bg-linear-to-t from-background to-transparent" />
            </div>
        </>
    );
};
