'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Image from 'next/image';
import { Plus } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { items } from '../../../constant/constant-data';

export default function ServicesAccordion({
    className,
}: {
    className?: string;
}) {
    return (
        <section
            aria-labelledby="services-title"
            className={cn('w-full', className)}
        >
            <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:py-20">
                <header className="text-center">
                    <h2
                        id="services-title"
                        className="text-foreground mt-3 text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                        Năng lực vận hành theo chuẩn — dễ kiểm soát, dễ bàn giao
                    </h2>
                    <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base sm:text-lg">
                        Chọn hạng mục bạn quan tâm để xem mô tả chi tiết. Nội
                        dung minh bạch, quy trình rõ ràng và phù hợp nhiều loại
                        hình bất động sản.
                    </p>
                </header>

                <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                    <div className="lg:col-span-6">
                        <div className="border-border bg-card rounded-[28px] border p-2 sm:p-3">
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full"
                                defaultValue="1"
                            >
                                {items.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="px-2 sm:px-3"
                                    >
                                        <AccordionPrimitive.Header className="flex">
                                            <AccordionPrimitive.Trigger
                                                className={cn(
                                                    'flex flex-1 items-center justify-between gap-3',
                                                    'rounded-2xl px-3 py-4 text-left text-[15px] leading-6 font-semibold',
                                                    'hover:bg-accent/50 transition-colors',
                                                    'data-[state=open]:bg-zinc-950 data-[state=open]:text-white',
                                                    '[&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200',
                                                    'data-[state=open]:[&>svg>path:last-child]:rotate-90 data-[state=open]:[&>svg>path:last-child]:opacity-0',
                                                )}
                                            >
                                                <span className="pr-2">
                                                    {item.title}
                                                </span>
                                                <Plus
                                                    size={18}
                                                    strokeWidth={2}
                                                    className={cn(
                                                        'shrink-0 opacity-70 transition-transform duration-200',
                                                        'data-[state=open]:opacity-100',
                                                    )}
                                                    aria-hidden="true"
                                                />
                                            </AccordionPrimitive.Trigger>
                                        </AccordionPrimitive.Header>

                                        <AccordionContent className="text-muted-foreground px-3 pt-2 pb-5 data-[state=open]:text-white/85">
                                            {item.content}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>

                    <div className="lg:col-span-6">
                        <div className="border-border bg-muted relative overflow-hidden rounded-[28px] border shadow-[0_22px_80px_rgba(0,0,0,0.12)]">
                            <div className="relative h-80 w-full sm:h-105 lg:h-130">
                                <Image
                                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80"
                                    alt="Hình ảnh minh hoạ dự án bất động sản và vận hành tòa nhà"
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    className="object-cover"
                                    quality={85}
                                    priority={false}
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-black/5 to-transparent" />

                            <div className="absolute top-5 left-5 rounded-full border border-white/15 bg-white/75 px-3 py-1 text-xs font-medium text-slate-900 backdrop-blur dark:bg-black/35 dark:text-white">
                                Danh mục dịch vụ
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
