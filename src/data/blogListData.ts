// src/data/blogPageData.ts
import Blog_1 from "../assets/blog/blog_1.jpg";
import DefaultImage from "../assets/blog/VitaminA.mp4";
import Blog_3 from "../assets/blog/blog_3.jpg";
import Blog_4 from "../assets/blog/blog_4.jpg";
import Blog_5 from "../assets/blog/blog_5.jpg";
import Blog_7 from "../assets/blog/blog_7.png";
import Blog_8 from "../assets/blog/blog_8.jpg";
import Blog_9 from "../assets/blog/blog_9.jpg";
import Blog_10 from "../assets/blog/blog_10.jpg";
import Blog_11 from "../assets/blog/blog_11.jpg";
import Blog_12 from "../assets/blog/blog_12.jpg";
import Blog_13 from "../assets/blog/blog_13.jpg";
import Blog_15 from "../assets/blog/blog_15.jpg";
import Blog_16 from "../assets/blog/blog_16.jpg";
import Blog_17 from "../assets/blog/blog_17.jpg";
import Blog_18 from "../assets/blog/blog_18.jpg";
import Blog_19 from "../assets/blog/blog_19.jpg";
import Blog_20 from "../assets/blog/blog_20.jpg";
import Blog_22 from "../assets/blog/blog_22.jpeg";
import Blog_23 from "../assets/blog/blog_23.jpg";


import img4964661 from '../assets/blog/4964661.jpg';
import img4964652 from '../assets/blog/4964652.jpg';
import img4964463 from '../assets/blog/4964463.png';
import img4964493 from '../assets/blog/4964493.jpg';
import img4964643 from '../assets/blog/4964643.gif';
import img4964628 from '../assets/blog/4964628.jpg';
import img4964528 from '../assets/blog/4964528.jpg';
import img4964571 from '../assets/blog/4964571.png';
import img4964545 from '../assets/blog/4964545.jpg';
import img4964319 from '../assets/blog/4964319.jpg';
import img4964488 from '../assets/blog/4964488.jpg';
import img4964574 from '../assets/blog/4964574.png';
import img4964625 from '../assets/blog/4964625.gif';
import img4964517 from '../assets/blog/4964517.png';
import img4964491 from '../assets/blog/4964491.png';
import img4964553 from '../assets/blog/4964553.jpg';
import img4964536 from '../assets/blog/4964536.png';
import img4963933 from '../assets/blog/4963933.jpg';
import img4962930 from '../assets/blog/4962930.png';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  views: number;
  image: string;
  isVideo?: boolean;
}

export interface SidebarItem {
  id: number;
  title: string;
  date?: string;
  image?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Trump đóng blog",
    excerpt: "Blog của Trump, nơi ông chia sẻ các tuyên bố với người ủng hộ sau khi bị cấm trên những mạng xã hội như Twitter và Facebook, đã bị đóng.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_1,
  },
  {
    id: 2,
    title: "Vitamin A có nhiều trong phụ nữ?",
    excerpt: "Một người nước ngoài học tiếng Việt viết trên blog của mình:",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: DefaultImage,
    isVideo: true
  },
  {
    id: 3,
    title: "Ác mộng bị đàn ông đeo bám của nữ phượt thủ độc hành",
    excerpt: "Người đàn ông lạ mặt bám theo, chạm vào tay Lauren và nói bằng thứ tiếng Anh bồi rằng \"em đẹp quá\", nhưng anh ta không dừng lại ở đó.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_3,
  },
  {
    id: 4,
    title: "Hành trình đến nhà tù của du khách viết về sex nổi tiếng",
    excerpt: "Du khách chuyên viết về sex nổi tiếng nhất thế giới đang đấu tranh để được thả tự do tại nhà tù ở Costa Rica. Trước đó ông bị tòa tuyên án 12 năm tù.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_4,
  },
  {
    id: 5,
    title: "Khách Tây mách nhau 5 điều nên tránh ở Việt Nam",
    excerpt: "Đừng nhầm lẫn “15” và “50”, đừng ăn sáng trong khách sạn hay cẩn thận khi đi xe máy là những điều hai du khách Mỹ đã rút ra sau một tháng du lịch Việt Nam.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_5,
  },
  {
    id: 6,
    title: "Nam thanh niên phát tán hơn 700 clip xuyên tạc, bôi nhọ lãnh đạo",
    excerpt: "Nguyễn Danh Dũng lập nhiều tài khoản trên Facebook, Youtube... để đăng tải hơn 700 clip bị cáo buộc có nội dung xuyên tạc, bôi nhọ lãnh đạo Đảng, nhà nước.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_7,
  },
  {
    id: 7,
    title: "Sở Xây dựng Thanh Hóa bác tin đồn nữ cán bộ có tài sản 'khủng'",
    excerpt: "Khẳng định tin đồn trên mạng xã hội liên quan đến cán bộ do đơn vị quản lý là sai sự thật, Sở Xây dựng tỉnh Thanh Hóa đồng thời cho biết công an đang tổ chức điều tra việc tung tin.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_8,
  },
  {
    id: 8,
    title: "5 blog Việt hữu ích cho chuyến đi tiết kiệm",
    excerpt: "Cách săn vé máy bay giá rẻ, tư vấn lịch trình, chia sẻ tọa độ quán ăn giá rẻ… là những chia sẻ trên 5 blog của các tác giả Việt mà bạn không nên bỏ qua.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_9,
  },
  {
    id: 9,
    title: "Khách Tây kể chuyện thuê bạn gái ở Nhật Bản",
    excerpt: "Bạn gái Chris Colin thuê tên là Miyabi. Suốt 5 năm qua, cô kiếm sống bằng việc trở thành người bạn cho thuê chuyên nghiệp, làm việc tại công ty Client Partners.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_10,
  },
  {
    id: 10,
    title: "Khách Tây thích thú với trải nghiệm ngắm Hà Nội sáng sớm",
    excerpt: "Xem lễ đổi gác của đội cảnh vệ tại lăng chủ tịch Hồ Chí Minh, cùng người dân tập dưỡng sinh hay ăn sáng trong phố cổ là những thú vui không phải du khách nào cũng có cơ hội được trải nghiệm khi ghé thăm Hà Nội.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_11,
  },
  {
    id: 11,
    title: "Kênh quảng cáo tiết kiệm cho doanh nghiệp nhỏ",
    excerpt: "Những thông tin thú vị cập nhập trên blog sẽ giúp doanh nghiệp có được lượng độc giả thường xuyên, thu hút khách hàng tiềm năng.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_12,
  },
  {
    id: 12,
    title: "Tưởng tượng và thực tế khác biệt khi du lịch Việt Nam của một blogger",
    excerpt: "Wengie là một blogger đang sống tại Australia, cô chia sẻ điều tưởng tượng và thực tế khi đi du lịch ở Việt Nam có sự khác biệt như thế nào về chụp hình, thời tiết, ẩm thực...",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_13,
  },
  {
    id: 13,
    title: "Khó khăn sau những bức ảnh của cặp du khách nổi tiếng",
    excerpt: "Trên blog cá nhân, họ vẽ ra một cuộc sống trong mơ của chủ nghĩa xê dịch, nhưng thực tế cặp du khách Australia đã gặp không ít những rắc rối, bực dọc, thậm chí liên tục cãi vả nhau.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_15,
  },
  {
    id: 14,
    title: "Chuyện tình yêu của những người mê phượt",
    excerpt: "Sau một lần lặn cùng cá mập búa huyền thoại, nữ blogger lên bờ trở về nhà với \"chiến lợi phẩm\" lớn nhất cuộc đời - người chồng của mình.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_16,
  },
  {
    id: 15,
    title: "Thủ phạm xả súng trường cao đẳng Mỹ tự sát",
    excerpt: "Chris Harper Mercer, kẻ xả súng ở trường Umpqua, bang Oregon, khiến 10 người thiệt mạng, được xác định đã tự sát tại hiện trường sau khi đấu súng với cảnh sát.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_17,
  },
  {
    id: 16,
    title: "Du khách thoát chết nhờ lời kêu cứu để lại trên cát",
    excerpt: "Một du khách Anh mất tích hai ngày ở khu vực hoang vu phía bắc Australia đã viết dòng chữ kêu cứu lên cát và được giải thoát.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_18,
  },
  {
    id: 17,
    title: "Cô bé 13 tuổi du lịch vòng quanh thế giới",
    excerpt: "Réka Kaponay, người Australia, cùng gia đình chu du tới 23 nước và đang hoàn thiện cuốn tiểu thuyết đầu tay khi mới 13 tuổi.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_19,
  },
  {
    id: 18,
    title: "Ông Nguyễn Quang Lập bị bắt",
    excerpt: "Ngày 6/12, Cơ quan An ninh điều tra Công an TP HCM đã khám xét và tạm giữ hình sự đối với ông Nguyễn Quang Lập.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_20,
  },
  {
    id: 19,
    title: "Những bài học yêu thương",
    excerpt: "Tháng mười một về, gió se se thổi qua những hàng cây trước cổng trường, mang theo hương hoa cúc vàng và mùi phấn trắng thoang thoảng. Con đường nhỏ năm nào tôi từng đi qua, giờ vẫn rợp bóng hàng me, chỉ khác là mái tóc thầy cô đã bạc thêm vài sợi. Còn chúng tôi, những đứa học trò năm cũ, mỗi người đã đi qua một quãng đời riêng, mang theo trong tim bóng dáng người gieo chữ thuở nào.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_23,
  },
  {
    id: 20,
    title: "Viết blog kiếm tiền",
    excerpt: "Có những trang blog kiếm được hàng triệu USD mỗi tháng từ các nhà quảng cáo trả tiền đăng thông tin trên blog hoặc để hàng triệu người đọc bấm vào, đơn cử trang The Huffington Post có thu nhập hàng tháng khoảng 2,3 triệu USD.",
    author: "VnExpress",
    date: "17/11/2025",
    views: 0,
    image: Blog_22,
  },
];

export const photoItems: SidebarItem[] = [
  {
    id: 4964726,
    title: "Hiện trường sạt lở núi đè ôtô khách làm 6 người chết",
    date: "2025-11-17",
    image: "https://i-vnexpress.vnecdn.net/2025/11/17/satlo-29-1763362978.jpg",
  },
  {
    id: 4964545,
    title: "Thủ phủ mai Tết xác xơ sau bão Kalmaegi",
    date: "2025-11-16",
    image: "https://i-vnexpress.vnecdn.net/2025/11/16/langmai-24-1763279810-1763280013-1763281858-1763281928.jpg",
  },
  {
    id: 4964463,
    title: "10 cha con không chung màu áo ĐTQG",
    date: "2025-11-16",
    image: "https://i-thethao.vnecdn.net/2025/11/15/marcelo-PNG-1763224309.png",
  },
  {
    id: 4964319,
    title: "Hàng bún cá duy nhất trong danh sách Michelin ở Hà Nội",
    date: "2025-11-16",
    image: "https://i-dulich.vnecdn.net/2025/11/15/hgn06653-1763181776-1763181800-1763181808-1763181991.jpg",
  },
];

export const xemNhieuItems: SidebarItem[] = [
  {
    id: 4964661,
    title: "Bồ Đào Nha thắng 9-1 khi vắng Ronaldo",
    date: "2025-11-16",
    image: img4964661,
  },
  {
    id: 4964652,
    title: "Nhóm người tháo chạy khi đất đá tràn xuống đường",
    date: "2025-11-16",
    image: img4964652,
  },
  {
    id: 4964463,
    title: "10 cha con không chung màu áo ĐTQG",
    date: "2025-11-16",
    image: img4964463,
  },
  {
    id: 4964493,
    title: "Suy thận giai đoạn cuối tuổi 20",
    date: "2025-11-16",
    image: img4964493,
  },
  {
    id: 4964643,
    title: "Mưa ngập đường sắt, nhiều tàu dừng chạy",
    date: "2025-11-16",
    image: img4964643,
  },
  {
    id: 4964628,
    title: "Hai cậu cháu nằm gục sau hỗn chiến",
    date: "2025-11-16",
    image: img4964628,
  },
  {
    id: 4964528,
    title: "Túi vải đựng iPhone giá 230 USD cháy hàng",
    date: "2025-11-16",
    image: img4964528,
  },
  {
    id: 4964571,
    title: "Ảnh vệ tinh đơn vị S-400 Nga sau đòn tập kích của Ukraine",
    date: "2025-11-16",
    image: img4964571,
  },
  {
    id: 4964545,
    title: "Thủ phủ mai Tết xác xơ sau bão Kalmaegi",
    date: "2025-11-16",
    image: img4964545,
  },
  {
    id: 4964319,
    title: "Hàng bún cá duy nhất trong danh sách Michelin ở Hà Nội",
    date: "2025-11-16",
    image: img4964319,
  },
  {
    id: 4964488,
    title: "'Tam giác chết' của thiết giáp phương Tây gần Pokrovsk",
    date: "2025-11-16",
    image: img4964488,
  },
  {
    id: 4964574,
    title: "Vườn quốc gia Ba Vì 'thất thủ' vì khách đến săn mây, ngắm hoa",
    date: "2025-11-16",
    image: img4964574,
  },
  {
    id: 4964625,
    title: "Khoảnh khắc Iskander, UAV Nga tập kích 'bệ phóng HIMARS, Neptune'",
    date: "2025-11-16",
    image: img4964625,
  },
  {
    id: 4964517,
    title: "Trương Vinh Hiển thắng Lý Hoàng Nam ở chung kết PPA Australia",
    date: "2025-11-16",
    image: img4964517,
  },
  {
    id: 4964491,
    title: "Biểu tình lớn tại Mexico sau vụ thị trưởng bị bắn chết",
    date: "2025-11-16",
    image: img4964491,
  },
  {
    id: 4964553,
    title: "Cháy ôtô đỗ trong chung cư ở TP HCM",
    date: "2025-11-16",
    image: img4964553,
  },
  {
    id: 4964522,
    title: "Thu hồi kem chống nắng ghi SPF 45+, kiểm nghiệm chỉ đạt SPF 2",
    date: "2025-11-16",
  },
  {
    id: 4964536,
    title: "Trung Quốc điều tàu áp sát quần đảo tranh chấp với Nhật Bản",
    date: "2025-11-16",
    image: img4964536,
  },
  {
    id: 4963933,
    title: "Quán bánh canh bò viên vỉa hè ngày bán hơn 1.000 tô",
    date: "2025-11-16",
    image: img4963933,
  },
  {
    id: 4962930,
    title: "Nguy cơ mất tài sản nếu mắc 'bẫy' hợp đồng ủy quyền",
    date: "2025-11-16",
    image: img4962930,
  }
];

export const videoItems: SidebarItem[] = [
  {
    id: 4964625,
    title: "Khoảnh khắc Iskander, UAV Nga tập kích 'bệ phóng HIMARS, Neptune'",
    date: "2025-11-16",
    image: img4964625,
  }
];
