'use client';

import { cn } from '@/lib/utils';
import { InfiniteSlider } from '@/components/ui/infinite-slider';
import { Partner } from '@/lib/service/ui';
import { partners } from '../../../constant/constant-data';
import Image from 'next/image';

export default function ClientsInfiniteSlider({
    className,
}: {
    className?: string;
}) {
    return (
        <div
            className={cn('w-full', className)}
            aria-labelledby="clients-title"
        >
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
                <div className="text-center">
                    <h2
                        id="clients-title"
                        className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        Được tin tưởng đồng hành
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                        Một số khách hàng và đối tác tiêu biểu trong quá trình
                        vận hành và triển khai dự án.
                    </p>
                </div>

                <div className="relative mt-16">
                    <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-linear-to-r to-transparent" />
                    <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-linear-to-l to-transparent" />

                    <InfiniteSlider
                        gap={50}
                        duration={40}
                        durationOnHover={90}
                        className="w-full"
                    >
                        {partners.map((partner) => (
                            <PartnerImage
                                key={partner.name}
                                partner={partner}
                            />
                        ))}
                    </InfiniteSlider>
                </div>
            </div>
        </div>
    );
}

function PartnerImage({ partner }: { partner: Partner }) {
    return (
        <div
            className={cn(
                'group flex shrink-0 items-center justify-center',
                'h-32.5 sm:h-40 lg:h-48',
                'transition-all duration-300',
                'hover:-translate-y-1 hover:scale-[1.02]',
            )}
            title={partner.name}
            aria-label={partner.name}
        >
            <Image
                src={partner.image}
                alt={`Hình ảnh đại diện ${partner.name}`}
                width={320}
                height={160}
                className={cn(
                    'h-full w-auto rounded-xl object-cover',
                    'opacity-90 transition-opacity duration-300 group-hover:opacity-100',
                    'shadow-[0_20px_60px_rgba(0,0,0,0.15)]',
                )}
                loading="lazy"
            />
        </div>
    );
}
