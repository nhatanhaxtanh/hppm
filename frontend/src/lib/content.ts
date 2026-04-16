import { posts, projects } from '../../constant/constant-data';

type ProjectMetric = {
    label: string;
    value: string;
};

type ProjectSection = {
    title: string;
    content: string;
};

type PostSection = {
    title: string;
    content: string[];
};

type ProjectDetail = {
    slug: string;
    overview: string;
    date: string;
    author: string;
    location: string;
    status: string;
    metrics: ProjectMetric[];
    sections: ProjectSection[];
};

type PostDetail = {
    slug: string;
    category: string;
    readTime: string;
    sections: PostSection[];
};

const projectDetails: ProjectDetail[] = [
    {
        slug: 'lavela-garden',
        overview:
            'HPPM tham gia chuẩn hóa quy trình vận hành, phối hợp kỹ thuật và nâng cao trải nghiệm cư dân cho khu dân cư Lavela Garden. Trong quá trình triển khai, đội ngũ tập trung vào việc xây dựng cách vận hành rõ ràng, dễ kiểm soát chất lượng dịch vụ hằng ngày, đồng thời giữ sự phối hợp ổn định giữa ban quản lý, nhà thầu và các bộ phận liên quan trong dự án.',
        date: '08/04/2024',
        author: 'HPPM',
        location: 'TP. Ho Chi Minh',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Khu dan cu' },
            { label: 'Pham vi', value: 'Van hanh tong the' },
            { label: 'Muc tieu', value: 'On dinh dich vu cu dan' },
        ],
        sections: [
            {
                title: 'Muc tieu van hanh',
                content:
                    'Tap trung xay dung quy trinh tiep nhan va xu ly yeu cau, ket hop van hanh ky thuat, an ninh va ve sinh theo tieu chuan thong nhat.',
            },
            {
                title: 'Hang muc trien khai',
                content:
                    'Chuan hoa checklist hang ngay, lich bao tri dinh ky, bao cao van hanh va co che phoi hop giua BQL, nha thau va cu dan.',
            },
            {
                title: 'Ket qua ky vong',
                content:
                    'Tang tinh minh bach trong van hanh, rut ngan thoi gian phan hoi va giu chat luong dich vu on dinh tren toan du an.',
            },
        ],
    },
    {
        slug: 'sky-residences',
        overview:
            'Dự án yêu cầu một mô hình quản lý phù hợp cho cụm chung cư có mật độ sử dụng cao và nhiệm vụ phối hợp liên bộ phận chặt chẽ. HPPM định hướng vận hành theo hướng gọn quy trình, rõ đầu việc và tăng tốc độ phản hồi, giúp quá trình tiếp nhận, xử lý và theo dõi các vấn đề phát sinh trong sinh hoạt hằng ngày được minh bạch hơn.',
        date: '14/04/2024',
        author: 'HPPM',
        location: 'Binh Duong',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Chung cu' },
            { label: 'Pham vi', value: 'Van hanh va CSKH' },
            { label: 'Muc tieu', value: 'Toi uu trai nghiem cu dan' },
        ],
        sections: [
            {
                title: 'Bai toan dat ra',
                content:
                    'Can giam xung dot trong van hanh gio cao diem, dong bo quy trinh xu ly su co va tang kha nang giam sat chat luong dich vu.',
            },
            {
                title: 'Giai phap HPPM',
                content:
                    'Van hanh theo ca truc ro rang, ap dung quy trinh doi soat cong viec va to chuc dau moi cham soc cu dan de xu ly nhanh cac phan anh.',
            },
            {
                title: 'Gia tri tao ra',
                content:
                    'He thong van hanh ro dau viec, de bao cao va de mo rong khi quy mo du an tang theo tung giai doan khai thac.',
            },
        ],
    },
    {
        slug: 'riviera-cove',
        overview:
            'Riviera Cove yêu cầu tiêu chuẩn vận hành phù hợp cho mô hình khu biệt thự, trong đó cảnh quan, an ninh và trải nghiệm sống của cộng đồng cư dân là những yếu tố được ưu tiên. HPPM tiếp cận dự án theo hướng duy trì sự đồng bộ trong hình ảnh, chất lượng dịch vụ và tính sẵn sàng của đội ngũ vận hành để giữ môi trường sống ổn định và chỉn chu.',
        date: '21/04/2024',
        author: 'HPPM',
        location: 'Dong Nai',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Biet thu' },
            { label: 'Pham vi', value: 'Canh quan va an ninh' },
            { label: 'Muc tieu', value: 'Duy tri chat luong song' },
        ],
        sections: [
            {
                title: 'Dinh huong van hanh',
                content:
                    'Uu tien kiem soat chat luong dich vu tai khong gian chung, he thong bao ve, tuan tra va cong tac bao tri canh quan.',
            },
            {
                title: 'To chuc thuc hien',
                content:
                    'Phan quyen ro theo cum, kiem tra dinh ky va theo doi SLA cho cac hang muc anh huong truc tiep den trai nghiem chu nha.',
            },
            {
                title: 'Tac dong',
                content:
                    'Giu hinh anh du an dong bo, han che phat sinh su co trong khuon vien va tang muc do hai long cua cu dan.',
            },
        ],
    },
    {
        slug: 'imperial-place',
        overview:
            'Imperial Place cần nâng cao năng lực giám sát vận hành kỹ thuật, bảo trì và báo cáo cho mô hình chung cư quy mô lớn. HPPM tập trung vào việc theo sát các hệ thống thiết yếu, chuẩn hóa cách vận hành hằng ngày và giúp quá trình đánh giá hiện trạng, lập lịch bảo trì và theo dõi sự cố trở nên rõ ràng, dễ ưu tiên xử lý đúng hạng mục cần thiết.',
        date: '28/04/2024',
        author: 'HPPM',
        location: 'TP. Ho Chi Minh',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Chung cu' },
            { label: 'Pham vi', value: 'Ky thuat va bao tri' },
            { label: 'Muc tieu', value: 'On dinh he thong' },
        ],
        sections: [
            {
                title: 'Trong tam trien khai',
                content:
                    'He thong dien, nuoc, PCCC va thang may duoc dua vao lich kiem tra va bao tri ro rang de giam downtime khong mong muon.',
            },
            {
                title: 'Cach van hanh',
                content:
                    'Bao cao dinh ky theo nhom he thong, doi soat nha thau va theo doi lich su xu ly su co cho tung hang muc ky thuat.',
            },
            {
                title: 'Ket qua',
                content:
                    'Van hanh co du lieu de ra quyet dinh, de uu tien ngan sach cho nhung diem co rui ro cao va anh huong lon.',
            },
        ],
    },
    {
        slug: 'holm-residences',
        overview:
            'Holm Residences được định hướng vận hành theo tiêu chuẩn dịch vụ ở phân khúc cao cấp, trong đó trải nghiệm cư dân là trọng tâm. HPPM tham gia với mục tiêu duy trì tính nhất quán trong cách phục vụ, nâng cao khả năng phản hồi và kiểm soát chất lượng các dịch vụ liên quan đến không gian chung, nhà thầu và yêu cầu phát sinh trong quá trình sinh sống tại dự án.',
        date: '05/05/2024',
        author: 'HPPM',
        location: 'TP. Thu Duc',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Biet thu' },
            { label: 'Pham vi', value: 'Dich vu va cong dong' },
            { label: 'Muc tieu', value: 'Tron ven trai nghiem song' },
        ],
        sections: [
            {
                title: 'Yeu cau dich vu',
                content:
                    'Phan hoi nhanh, giao tiep ro rang, khong gian chung sach dep va quy trinh xu ly yeu cau co the theo doi minh bach.',
            },
            {
                title: 'Giai phap',
                content:
                    'Dong bo quy trinh cham soc cu dan, phan luong yeu cau theo muc do uu tien va quan ly chat luong nha thau dich vu.',
            },
            {
                title: 'Gia tri',
                content:
                    'Tao ra trai nghiem nhat quan, giu hinh anh du an va ho tro chu dau tu duy tri gia tri tai san ve lau dai.',
            },
        ],
    },
    {
        slug: 'giai-viet',
        overview:
            'Dự án tập trung vào sự ổn định vận hành hằng ngày và nâng cao hiệu quả phối hợp giữa bộ phận kỹ thuật và chăm sóc cư dân. HPPM định hướng xây dựng quy trình làm việc để theo dõi dễ hơn, giảm bỏ sót trong vận hành và giúp thông tin được luân chuyển rõ ràng hơn giữa các đầu mối, từ đó cải thiện khả năng phản hồi với cư dân và ban quản lý.',
        date: '12/05/2024',
        author: 'HPPM',
        location: 'Quan 8, TP. Ho Chi Minh',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Chung cu' },
            { label: 'Pham vi', value: 'Van hanh tong hop' },
            { label: 'Muc tieu', value: 'Minh bach va on dinh' },
        ],
        sections: [
            {
                title: 'Thach thuc',
                content:
                    'Khoi luong phan anh lon, nhieu dau moi phoi hop va can co bao cao de ban quan ly theo sat tinh hinh van hanh.',
            },
            {
                title: 'Huong xu ly',
                content:
                    'Ap dung quy trinh tiep nhan va dong viec ro rang, kiem tra chat luong dich vu theo tuan va tong hop so lieu theo thang.',
            },
            {
                title: 'Tac dong van hanh',
                content:
                    'Giam tinh trang bo sot cong viec, de theo doi trang thai xu ly va cai thien kha nang phan hoi voi cu dan.',
            },
        ],
    },
    {
        slug: 'btd',
        overview:
            'Chung cư Bình Trị Đông B được quản lý theo hướng tối ưu chi phí vận hành nhưng vẫn giữ chất lượng dịch vụ cốt lõi. Trong quá trình triển khai, HPPM chú trọng cân bằng giữa yêu cầu ngân sách, chất lượng nhà thầu và mức độ sẵn sàng của các hệ thống thiết yếu, để đảm bảo dự án vẫn duy trì được nền vận hành ổn định và dễ giải trình.',
        date: '19/05/2024',
        author: 'HPPM',
        location: 'Binh Tan, TP. Ho Chi Minh',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Chung cu' },
            { label: 'Pham vi', value: 'Tai chinh va van hanh' },
            { label: 'Muc tieu', value: 'Toi uu chi phi' },
        ],
        sections: [
            {
                title: 'Muc tieu quan tri',
                content:
                    'Can bang giua ngan sach, chat luong nha thau va muc do san sang cua cac he thong thiet yeu trong toa nha.',
            },
            {
                title: 'Cach trien khai',
                content:
                    'Lap dinh muc chi phi, doi soat thuc te theo ky va uu tien ngan sach cho nhung hang muc lien quan an toan va van hanh lien tuc.',
            },
            {
                title: 'Ket qua ky vong',
                content:
                    'Tang hieu qua su dung ngan sach, minh bach thu chi va de giai trinh cho cac ben lien quan.',
            },
        ],
    },
    {
        slug: 'vision',
        overview:
            'Vision-1 cần mô hình vận hành chung cư có tính linh hoạt, dễ kiểm soát chất lượng dịch vụ và xử lý nhanh các sự cố phát sinh. HPPM xây dựng cách tiếp cận dựa trên việc rõ đầu mối tiếp nhận, theo dõi trạng thái xử lý và tăng cường kiểm tra hiện trường, nhằm giúp ban quản lý dễ nắm được tình hình vận hành và cải thiện trải nghiệm cư dân theo từng giai đoạn.',
        date: '26/05/2024',
        author: 'HPPM',
        location: 'Binh Tan, TP. Ho Chi Minh',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Chung cu' },
            { label: 'Pham vi', value: 'Quan ly dich vu' },
            { label: 'Muc tieu', value: 'Tang toc do phan hoi' },
        ],
        sections: [
            {
                title: 'Van de can giai quyet',
                content:
                    'Dong bo thong tin giua cac bo phan va dam bao cu dan luon nhan duoc phan hoi ro rang ve tien do xu ly.',
            },
            {
                title: 'Giai phap',
                content:
                    'Chuan hoa dau moi tiep nhan, cap nhat trang thai xu ly va gia tang kiem tra hien truong cho cac hang muc phan anh lap lai.',
            },
            {
                title: 'Gia tri dem lai',
                content:
                    'Quy trinh van hanh gon hon, de do luong va de nhan ra cac diem can cai tien trong qua trinh khai thac du an.',
            },
        ],
    },
    {
        slug: 'an-lac',
        overview:
            'Cụm nhà chung cư An Lạc được tổ chức vận hành theo hướng ổn định hệ thống, chuẩn quy trình và tăng tính sẵn sàng của đội ngũ. HPPM tập trung vào việc tạo nên một cách vận hành bền vững hơn, dễ đào tạo, dễ bàn giao và dễ duy trì chất lượng khi khối lượng công việc thay đổi, đồng thời giúp các bộ phận phối hợp với nhau mạch lạc hơn trong thực tế.',
        date: '02/06/2024',
        author: 'HPPM',
        location: 'Binh Tan, TP. Ho Chi Minh',
        status: 'Da trien khai',
        metrics: [
            { label: 'Loai hinh', value: 'Chung cu' },
            { label: 'Pham vi', value: 'Nhan su va quy trinh' },
            { label: 'Muc tieu', value: 'Van hanh ben vung' },
        ],
        sections: [
            {
                title: 'Trong tam',
                content:
                    'Chuan hoa ca truc, quy trinh ban giao cong viec va he thong kiem tra dinh ky cho nhung hang muc anh huong truc tiep den cu dan.',
            },
            {
                title: 'Tiep can',
                content:
                    'Ket hop giam sat hien truong voi bao cao ngan gon de cap quan ly co the ra quyet dinh nhanh va dung uu tien.',
            },
            {
                title: 'Ket qua mong doi',
                content:
                    'Van hanh on dinh hon, de dao tao nhan su moi va de duy tri chat luong khi quy mo van hanh thay doi.',
            },
        ],
    },
];

const postDetails: PostDetail[] = [
    {
        slug: 'hinh-anh-cong-ty-hppm',
        category: 'Hinh anh du an',
        readTime: '4 phut doc',
        sections: [
            {
                title: 'Tong quan',
                content: [
                    'Nhung hinh anh duoc chia se tai cac du an khong chi de gioi thieu doi ngu, ma con phan anh cach HPPM to chuc van hanh, kiem tra hien truong va phoi hop voi cac ben lien quan.',
                    'Moi khoanh khac deu gan voi mot cong viec cu the: kiem tra ky thuat, hop van hanh, dao tao nhan su, cham soc cu dan hoac danh gia chat luong dich vu.',
                ],
            },
            {
                title: 'Dieu chung toi muon truyen tai',
                content: [
                    'Van hanh bat dong san la cong viec can su hien dien lien tuc ngoai hien truong. Chat luong dich vu duoc tao ra tu ky luat quy trinh va su theo sat moi ngay.',
                    'Thong qua hinh anh, HPPM muon khach hang nhin thay cach doi ngu lam viec minh bach, bai ban va ton trong trai nghiem cua cu dan.',
                ],
            },
        ],
    },
    {
        slug: 'phan-mem-quan-ly-poma',
        category: 'Cong nghe van hanh',
        readTime: '5 phut doc',
        sections: [
            {
                title: 'Vi sao can phan mem van hanh',
                content: [
                    'Khi quy mo toa nha tang, viec theo doi yeu cau, lich bao tri va trang thai xu ly bang cong cu roi rac se de that lac thong tin va cham phan hoi.',
                    'Mot nen tang nhu POMA giup gom du lieu ve mot dau moi de ban quan ly, ky thuat va cham soc cu dan co the cung theo doi.',
                ],
            },
            {
                title: 'Gia tri thuc te',
                content: [
                    'Phan mem khong thay the quy trinh, nhung giup quy trinh duoc van hanh ro rang hon: biet ai dang xu ly, han xu ly den dau va lich su cong viec da dien ra nhu the nao.',
                    'Do la nen tang de minh bach hoa van hanh, de bao cao va nang cao trai nghiem cu dan trong dai han.',
                ],
            },
        ],
    },
    {
        slug: 'can-ho-xuong-cap',
        category: 'Kien thuc van hanh',
        readTime: '6 phut doc',
        sections: [
            {
                title: 'Dau hieu xuong cap',
                content: [
                    'Can ho va he thong chung cua toa nha co the xuong cap tu nhung dau hieu nho: tham dot, ro ri, thiet bi hoat dong khong on dinh, tieng on lap lai hoac chat luong khong khi giam.',
                    'Neu khong duoc xu ly som, nhung dau hieu nay se dan den chi phi sua chua lon hon va anh huong truc tiep den trai nghiem song cua cu dan.',
                ],
            },
            {
                title: 'Nen bat dau tu dau',
                content: [
                    'Buoc dau tien la danh gia dung hien trang va phan loai van de theo muc do anh huong. Sau do moi lap ke hoach bao tri, sua chua hay nang cap theo uu tien.',
                    'Dieu quan trong la co quy trinh theo doi sau xu ly, tranh tinh trang sua xong nhung loi lap lai vi khong xu ly dung nguyen nhan goc.',
                ],
            },
        ],
    },
];

function getSlug(href: string) {
    return href.split('/').filter(Boolean).at(-1) ?? '';
}

export function getAllProjectSlugs() {
    return projects.map((project) => getSlug(project.href));
}

export function getAllPostSlugs() {
    return posts.map((post) => getSlug(post.href));
}

export function getProjectBySlug(slug: string) {
    const project = projects.find((item) => getSlug(item.href) === slug);
    const detail = projectDetails.find((item) => item.slug === slug);

    if (!project || !detail) return null;

    return { ...project, ...detail };
}

export function getPostBySlug(slug: string) {
    const post = posts.find((item) => getSlug(item.href) === slug);
    const detail = postDetails.find((item) => item.slug === slug);

    if (!post || !detail) return null;

    return { ...post, ...detail };
}
