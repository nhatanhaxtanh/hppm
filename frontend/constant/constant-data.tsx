import { Feature, Option } from '@/lib/service/ui';
import { ClipboardCheck, ShieldCheck, Wrench } from 'lucide-react';
import {
    FaCampground,
    FaFire,
    FaHiking,
    FaHotTub,
    FaTint,
} from 'react-icons/fa';

// data cho carousel, thay image bang anh that
export const options: Option[] = [
    {
        title: 'Giải pháp vận hành',
        description: 'Chuẩn quy trình, giảm lỗi, tăng trải nghiệm cư dân',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
        icon: <FaCampground size={24} className="text-white" />,
    },
    {
        title: 'Bảo trì định kỳ',
        description: 'Lên lịch thông minh, theo dõi minh bạch',
        image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1600&q=80',
        icon: <FaFire size={24} className="text-white" />,
    },
    {
        title: 'An toàn hệ thống',
        description: 'Giám sát rủi ro – xử lý sự cố đúng chuẩn',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
        icon: <FaTint size={24} className="text-white" />,
    },
    {
        title: 'Tiện ích & dịch vụ',
        description: 'Tối ưu vận hành, nâng chuẩn chất lượng',
        image: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&q=80',
        icon: <FaHotTub size={24} className="text-white" />,
    },
    {
        title: 'Hỗ trợ chuyên gia',
        description: 'Đồng hành triển khai – đào tạo – bàn giao',
        image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1600&q=80',
        icon: <FaHiking size={24} className="text-white" />,
    },
];

// kinh nghiem
export const features: Feature[] = [
    {
        id: 1,
        eyebrow: '25+ năm kinh nghiệm',
        title: 'Vận hành chuẩn quy trình, minh bạch từng hạng mục',
        description:
            'Từ checklist vận hành đến báo cáo định kỳ: mọi thứ rõ ràng, dễ kiểm soát và dễ bàn giao cho ban quản lý.',
        bullets: [
            'Quy trình chuẩn hoá theo từng loại tài sản',
            'Báo cáo theo tuần/tháng, dễ audit',
            'Giảm “mất dấu” công việc khi chuyển ca / thay người',
        ],
        imageUrl:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
        icon: <ClipboardCheck className="text-primary h-5 w-5" />,
        reverse: false,
    },
    {
        id: 2,
        eyebrow: 'Bảo trì & tối ưu chi phí',
        title: 'Bảo trì định kỳ thông minh, hạn chế downtime',
        description:
            'Lên lịch bảo trì theo rủi ro và tần suất sử dụng để giảm sự cố đột xuất, tối ưu chi phí và tuổi thọ hệ thống.',
        bullets: [
            'Kế hoạch bảo trì theo tuần/tháng/quý',
            'Theo dõi tiến độ & lịch sử xử lý',
            'Ưu tiên hạng mục ảnh hưởng an toàn/vận hành',
        ],
        imageUrl:
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80',
        icon: <Wrench className="text-primary h-5 w-5" />,
        reverse: true,
    },
    {
        id: 3,
        eyebrow: 'An toàn hệ thống',
        title: 'Giám sát rủi ro, xử lý sự cố đúng chuẩn',
        description:
            'Tập trung vào an toàn điện/nước/PCCC và các điểm rủi ro vận hành để giảm sự cố và tăng sự an tâm cho cư dân/khách hàng.',
        bullets: [
            'Checklist an toàn định kỳ, có đối soát',
            'Quy trình xử lý sự cố rõ ràng',
            'Tăng tính sẵn sàng của hệ thống quan trọng',
        ],
        imageUrl:
            'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1800&q=80',
        icon: <ShieldCheck className="text-primary h-5 w-5" />,
        reverse: false,
    },
];
