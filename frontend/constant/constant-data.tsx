import {
    Feature,
    Option,
    Partner,
    PostItem,
    Project,
    ServiceItem,
    Testimonial,
} from '@/lib/service/ui';
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

// thanh vien cong ty, thay anh that
export const teamData: Testimonial[] = [
    {
        id: 1,
        name: 'Trần Thị Diễm Hương',
        role: 'Tổng Giám Đốc',
        imageSrc:
            'https://images.unsplash.com/photo-1581403341630-a6e0b9d2d257?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Trần Thị Diễm Hương - Tổng Giám Đốc HPPM',
    },
    {
        id: 2,
        name: 'Nguyễn Lê Duy Khánh',
        role: 'Phó Tổng Giám Đốc',
        imageSrc:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Nguyễn Lê Duy Khánh - Phó Tổng Giám Đốc HPPM',
    },
    {
        id: 3,
        name: 'Nguyễn Tấn Phú',
        role: 'Giám Đốc Dự Án',
        imageSrc:
            'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Nguyễn Tấn Phú - Giám Đốc Dự Án HPPM',
    },
    {
        id: 4,
        name: 'Lê Nhật Anh',
        role: 'Trợ Lý Tổng Giám Đốc',
        imageSrc:
            'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1400&q=80',
        imageAlt: 'Chân dung Lê Nhật Anh - Trợ Lý Tổng Giám Đốc HPPM',
    },
];

// cac dich vu chinh, sau phan gioi thieu ve thanh vien cong ty
export const items: ServiceItem[] = [
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
// cac du an cua cong ty
export const projects: Project[] = [
    {
        title: 'Khu dân cư Lavela Garden',
        category: 'Khu dân cư',
        href: '/du-an/lavela-garden',
        imageUrl:
            'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Khu dân cư Lavela Garden',
    },
    {
        title: 'Cụm chung cư Sky Residences',
        category: 'Chung cư',
        href: '/du-an/sky-residences',
        imageUrl:
            'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Cụm chung cư Sky Residences',
    },
    {
        title: 'Khu biệt thự Riviera Cove',
        category: 'Biệt thự',
        href: '/du-an/riviera-cove',
        imageUrl:
            'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Khu biệt thự Riviera Cove',
    },
    {
        title: 'Chung cư Eden Riverside',
        category: 'Chung cư',
        href: '/du-an/eden-riverside',
        imageUrl:
            'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Chung cư Eden Riverside',
    },
    {
        title: 'Khu biệt thự Holm Residences',
        category: 'Biệt thự',
        href: '/du-an/holm-residences',
        imageUrl:
            'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Khu biệt thự Holm Residences',
    },
    {
        title: 'Chung cư Giai Việt',
        category: 'Chung cư',
        href: '/du-an/giai-viet',
        imageUrl:
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Chung cư Giai Việt',
    },
    {
        title: 'Cụm nhà chung cư Vision-1',
        category: 'Chung cư',
        href: '/du-an/vision-1',
        imageUrl:
            'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Cụm nhà chung cư Vision-1',
    },
    {
        title: 'Chung cư Vĩnh Tường',
        category: 'Chung cư',
        href: '/du-an/vinh-tuong',
        imageUrl:
            'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Chung cư Vĩnh Tường',
    },
    {
        title: 'Cụm nhà chung cư An Lạc',
        category: 'Chung cư',
        href: '/du-an/an-lac',
        imageUrl:
            'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Ảnh minh hoạ dự án Cụm nhà chung cư An Lạc',
    },
];
// 3 cai card sau phan du an
export const posts: PostItem[] = [
    {
        id: '1',
        title: 'Hình ảnh công ty HPPM tại các dự án',
        excerpt:
            'Những hình ảnh mà chúng tôi chia sẻ không chỉ là một tập hợp các hình ảnh đơn giản, mà chúng là biểu hiện của sự chăm sóc, quản lý [...]',
        date: '08/04/2024',
        author: 'HPPM',
        href: '/bai-viet/hinh-anh-cong-ty-hppm',
        imageUrl:
            'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Hình ảnh minh hoạ đội ngũ làm việc tại dự án',
    },
    {
        id: '2',
        title: 'Phần mềm quản lý POMA — giải pháp vận hành toà nhà',
        excerpt:
            'POMA giúp quản lý vận hành tòa nhà tự động, minh bạch và dễ theo dõi. Một trong những cải tiến giúp nâng cao trải nghiệm cư dân [...]',
        date: '14/11/2021',
        author: 'HPPM',
        href: '/bai-viet/phan-mem-quan-ly-poma',
        imageUrl:
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Hình ảnh minh hoạ màn hình ứng dụng / phần mềm quản lý',
    },
    {
        id: '3',
        title: 'Căn hộ nhanh bị xuống cấp phải làm sao?',
        excerpt:
            'Hệ thống kỹ thuật của mỗi tòa nhà theo thời gian sẽ có nhiều hỏng hóc khiến cư dân bất tiện. Cần quy trình kiểm soát và bảo trì chuẩn [...]',
        date: '24/11/2021',
        author: 'HPPM',
        href: '/bai-viet/can-ho-xuong-cap',
        imageUrl:
            'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80',
        imageAlt: 'Hình ảnh minh hoạ kỹ thuật viên kiểm tra hệ thống',
    },
];

// cac doi tac
export const partners: Partner[] = [
    {
        name: 'Vingroup',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Samsung',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'FPT',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Viettel',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Toyota',
        image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=800&q=80',
    },
    {
        name: 'Grab',
        image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=800&q=80',
    },
];
