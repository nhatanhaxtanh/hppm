import { Option } from '@/lib/service/ui';
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
