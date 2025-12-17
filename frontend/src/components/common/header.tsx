import HeaderClient from './header-client';
import type { NavItem } from '@/lib/service/navbar';
import {
    Building2,
    Users,
    Target,
    Network,
    Image as ImageIcon,
    BadgeCheck,
    AppWindow,
    Home,
    Hotel,
    Building,
    Wrench,
    Handshake,
    Phone,
    Newspaper,
    FolderKanban,
} from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
    {
        id: 1,
        label: 'Giới thiệu',
        subMenus: [
            {
                title: 'Về HPPM',
                items: [
                    {
                        label: 'Giới thiệu công ty',
                        description: 'Tổng quan về HPPM và năng lực cốt lõi',
                        icon: Building2,
                        href: '/intro',
                        iconBg: 'bg-blue-50',
                        iconColor: 'text-blue-600',
                    },
                    {
                        label: 'Ban lãnh đạo công ty',
                        description:
                            'Đội ngũ lãnh đạo và định hướng phát triển',
                        icon: Users,
                        href: '/intro/leaders',
                        iconBg: 'bg-indigo-50',
                        iconColor: 'text-indigo-600',
                    },
                    {
                        label: 'Mục tiêu HPPM',
                        description: 'Tầm nhìn, sứ mệnh và giá trị cốt lõi',
                        icon: Target,
                        href: '/intro/target',
                        iconBg: 'bg-emerald-50',
                        iconColor: 'text-emerald-600',
                    },
                    {
                        label: 'Cơ cấu tổ chức',
                        description: 'Sơ đồ tổ chức và các phòng ban',
                        icon: Network,
                        href: '/intro/organization',
                        iconBg: 'bg-amber-50',
                        iconColor: 'text-amber-700',
                    },
                    {
                        label: 'Hình ảnh công ty',
                        description: 'Văn hoá doanh nghiệp & hoạt động nổi bật',
                        icon: ImageIcon,
                        href: '/intro/images',
                        iconBg: 'bg-pink-50',
                        iconColor: 'text-pink-600',
                    },
                    {
                        label: 'Lý do nên chọn HPPM',
                        description: 'Cam kết chất lượng & lợi thế cạnh tranh',
                        icon: BadgeCheck,
                        href: '/intro/why',
                        iconBg: 'bg-violet-50',
                        iconColor: 'text-violet-600',
                    },
                ],
            },
        ],
    },

    {
        id: 2,
        label: 'Dịch vụ',
        subMenus: [
            {
                title: 'Giải pháp',
                items: [
                    {
                        label: 'Phần mềm quản lý',
                        description: 'Tối ưu vận hành, báo cáo, quy trình',
                        icon: AppWindow,
                        href: '/services/programs',
                        iconBg: 'bg-cyan-50',
                        iconColor: 'text-cyan-700',
                    },
                    {
                        label: 'Kinh doanh nhà ở',
                        description: 'Quản lý cho thuê, cư dân, vận hành',
                        icon: Home,
                        href: '/services/locations',
                        iconBg: 'bg-sky-50',
                        iconColor: 'text-sky-700',
                    },
                    {
                        label: 'Khách sạn nghỉ dưỡng',
                        description:
                            'Vận hành – dịch vụ – trải nghiệm khách hàng',
                        icon: Hotel,
                        href: '/services/hotel',
                        iconBg: 'bg-rose-50',
                        iconColor: 'text-rose-600',
                    },
                    {
                        label: 'Quản lý bất động sản',
                        description: 'Quản trị tài sản, hợp đồng, bảo trì',
                        icon: Building,
                        href: '/services/estate',
                        iconBg: 'bg-orange-50',
                        iconColor: 'text-orange-700',
                    },
                ],
            },
        ],
    },

    {
        id: 3,
        label: 'Bảo trì tòa nhà',
        link: '/bao-tri-toa-nha',
        iconTop: Wrench,
    },
    { id: 4, label: 'Khách hàng', link: '/khach-hang', iconTop: Handshake },

    {
        id: 5,
        label: 'Thông tin công ty',
        subMenus: [
            {
                title: 'Thông tin',
                items: [
                    {
                        label: 'Liên hệ',
                        description: 'Gửi yêu cầu, nhận tư vấn nhanh',
                        icon: Phone,
                        href: '/thong-tin-cong-ty/lien-he',
                        iconBg: 'bg-lime-50',
                        iconColor: 'text-lime-700',
                    },
                    {
                        label: 'Tin tức sự kiện',
                        description: 'Cập nhật hoạt động & thông báo mới',
                        icon: Newspaper,
                        href: '/thong-tin-cong-ty/tin-tuc-su-kien',
                        iconBg: 'bg-slate-50',
                        iconColor: 'text-slate-700',
                    },
                ],
            },
        ],
    },

    {
        id: 6,
        label: 'Dự án',
        subMenus: [
            {
                title: 'Danh mục',
                items: [
                    {
                        label: 'Các dự án thực hiện',
                        description: 'Những dự án tiêu biểu HPPM đã triển khai',
                        icon: FolderKanban,
                        href: '/du-an',
                        iconBg: 'bg-fuchsia-50',
                        iconColor: 'text-fuchsia-700',
                    },
                ],
            },
        ],
    },
];
export function Header() {
    return <HeaderClient navItems={NAV_ITEMS} />;
}
