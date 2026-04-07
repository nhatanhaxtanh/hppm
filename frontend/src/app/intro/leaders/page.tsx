import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import TeamSection from '@/components/ui/team-section';
import { teamData } from '../../../../constant/constant-data';

export default function Home() {
    const leadershipQuotes: Record<string, string> = {
        'Trần Thị Diễm Hương':
            'Định hướng chiến lược phát triển dài hạn và xây dựng chuẩn vận hành bền vững cho toàn hệ thống HPPM.',
        'Nguyễn Lê Duy Khánh':
            'Điều phối vận hành liên phòng ban, tối ưu quy trình quản trị và nâng cao hiệu quả triển khai tại các dự án.',
        'Nguyễn Hoàng Thiên Phúc':
            'Giám sát thực thi tại dự án, đảm bảo tiến độ, chất lượng dịch vụ và sự ổn định trong vận hành thực tế.',
        'Lê Nhật Anh':
            'Kết nối điều hành với các bộ phận, hỗ trợ tổ chức công việc và theo sát các đầu việc trọng tâm của ban lãnh đạo.',
    };

    const testimonials = teamData.map((member) => ({
        quote: leadershipQuotes[member.name] ?? '',
        name: member.name,
        designation: member.role,
        src: member.imageSrc,
        alt: member.imageAlt,
    }));

    return (
        <main className="min-h-screen">
            <TeamSection />
            <div className="-mt-40">
                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </main>
    );
}
