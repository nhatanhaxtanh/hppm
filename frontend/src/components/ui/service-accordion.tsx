'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus } from 'lucide-react';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
} from '@/components/ui/accordion';
import { cn } from '@/lib/utils';

type ServiceItem = {
    id: string;
    title: string;
    content: string;
};

const items: ServiceItem[] = [
    {
        id: '1',
        title: 'Quản lý tòa nhà chung cư',
        content:
            'Dịch vụ quản lý toàn diện: vận hành kỹ thuật, an ninh, vệ sinh, chăm sóc khách hàng và tổ chức cư dân. Quy trình rõ ràng, báo cáo định kỳ và kiểm soát chất lượng theo tiêu chuẩn.',
    },
    {
        id: '2',
        title: 'Bảo trì & vận hành hệ thống kỹ thuật',
        content:
            'Xây dựng kế hoạch bảo trì theo tuần/tháng/quý, theo dõi lịch sử xử lý sự cố và tối ưu tuổi thọ thiết bị. Ưu tiên hạng mục ảnh hưởng an toàn và tính sẵn sàng của hệ thống.',
    },
    {
        id: '3',
        title: 'Quản lý khu thương mại & văn phòng',
        content:
            'Tối ưu trải nghiệm khách thuê với vận hành chuyên nghiệp: kiểm soát an ninh, vệ sinh, kỹ thuật, PCCC và phối hợp xử lý sự cố nhanh. Quản trị chi phí minh bạch, dễ đối soát.',
    },
    {
        id: '4',
        title: 'Quản lý khu biệt thự',
        content:
            'Vận hành đồng bộ cảnh quan – vệ sinh – an ninh – kỹ thuật, đảm bảo tiêu chuẩn dịch vụ ổn định. Thiết lập quy trình kiểm tra định kỳ, xử lý sự cố và chăm sóc cư dân.',
    },
    {
        id: '5',
        title: 'Dịch vụ chăm sóc cộng đồng cư dân',
        content:
            'Tổ chức hoạt động cộng đồng, tiếp nhận – xử lý phản ánh, hỗ trợ cư dân theo SLA rõ ràng. Mục tiêu: tăng hài lòng và giảm mâu thuẫn trong vận hành hằng ngày.',
    },
    {
        id: '6',
        title: 'Tư vấn & nâng cấp tài sản bất động sản',
        content:
            'Đánh giá hiện trạng, đề xuất phương án nâng cấp theo ngân sách và mục tiêu khai thác. Tối ưu công năng, tiêu chuẩn vận hành và tăng giá trị tài sản theo thời gian.',
    },
    {
        id: '7',
        title: 'Quản lý tài chính & chi phí vận hành',
        content:
            'Thiết lập định mức – ngân sách – báo cáo chi phí định kỳ; minh bạch thu/chi và đối soát. Tối ưu chi phí nhưng vẫn đảm bảo chất lượng dịch vụ và an toàn hệ thống.',
    },
];

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
                {/* Header */}
                <div className="text-center">
                    <p className="text-muted-foreground text-sm font-medium tracking-wide">
                        DỊCH VỤ
                    </p>
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
                </div>

                {/* Content */}
                <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                    {/* Accordion (left) */}
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
                            <img
                                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80"
                                alt="Hình ảnh minh hoạ dự án bất động sản và vận hành tòa nhà"
                                className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                                loading="lazy"
                            />
                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-black/5 to-transparent" />

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
