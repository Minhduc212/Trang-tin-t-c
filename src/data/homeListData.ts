import featureImage from "../assets/home/feature.jpg"

import featureImage1 from "../assets/home/featureThumbs1.jpg"
import featureImage2 from "../assets/home/featureThumbs2.jpg"
import featureImage3 from "../assets/home/featureThumbs3.jpg"
import featureImage4 from "../assets/home/featureThumbs4.jpg"


import newsImage53773392 from "../assets/home/news_53773392.jpg";
import newsImage53730469 from "../assets/home/news_53730469.jpg";
import newsImage53733274 from "../assets/home/news_53733274.jpg";
import newsImage53729261 from "../assets/home/news_53729261.jpg";
import newsImage53679237 from "../assets/home/news_53679237.jpg";
import newsImage53696976 from "../assets/home/news_53696976.jpg";
import newsImage53669631 from "../assets/home/news_53669631.jpg";
import newsImage53660758 from "../assets/home/news_53660758.jpg";
import newsImage53659440 from "../assets/home/news_53659440.jpg";
import newsImage53667387 from "../assets/home/news_53667387.jpg";
import newsImage53764657 from "../assets/home/news_53764657.jpg";
import newsImage53769631 from "../assets/home/news_53769631.jpg";
import newsImage53728586 from "../assets/home/news_53728586.jpg";
import newsImage53743253 from "../assets/home/news_53743253.jpg";
import newsImage53761689 from "../assets/home/news_53761689.jpg";
import newsImage53760976 from "../assets/home/news_53760976.jpg";


import videoNews1 from "../assets/home/videoNews1.jpg"
import videoNews2 from "../assets/home/videoNews2.jpg"
import videoNews3 from "../assets/home/videoNews3.jpg"

interface Article {
  id: number;
  title: string;
  category?: string;
  time?: string;
  image?: string;
  summary?: string;
}
export const featuredArticle: Article = {
  id: 1,
  title:
    "Vụ sạt lở đèo làm 6 người chết, 19 người bị thương: Thủ tướng chỉ đạo khẩn trương cứu hộ, cứu nạn",
  time: "1 giờ trước",
  image: featureImage,
  summary:
    "Do ảnh hưởng của mưa lớn, trên địa bàn xã Nam Vĩnh Khánh, tỉnh Khánh Hòa đã xảy ra sự cố sạt lở đất, đá tại khu đèo Khánh Lê vào đêm ngày 16-11, làm vùi lấp, biến dạng 1 xe chở khách, gây hậu quả rất nghiêm trọng (6 người chết, 19 người bị thương).",
};

export const featuredThumbs: Article[] = [
  {
    id: 2,
    title: "Bất ngờ khả năng đá chính của Xuân Son ở trận ĐT Việt Nam vs Lào",
    image: featureImage1,
  },
  {
    id: 3,
    title: "Lũ bủa vây nhà dân ở Huế – Quảng Trị, ô tô ngập trong biển nước",
    image: featureImage2,
  },
  {
    id: 4,
    title: "Người thế chỗ Tim Cook",
    image: featureImage3,
  },
  {
    id: 5,
    title: "Bắt kẻ tàng trữ ma túy, lộ đại lý bán lẻ 'hàng trắng'",
    image: featureImage4,
  },
];



export const latestNews: Article[] = [
  { id: 53773392, title: "Mức thu nhập của chuyên gia, nhà khoa học, người có tài năng đặc biệt sẽ được áp dụng cho cả khu vực Bình Dương, Bà Rịa-Vũng Tàu (cũ)", category: "Báo Nhân Dân", time: "2025-11-16T23:00:00", image: newsImage53773392 },
  { id: 53730469, title: "Tổ chức lại giao thông Quốc lộ 51 đoạn qua Bà Rịa - Vũng Tàu cũ", category: "Báo Người Lao Động", time: "2025-11-11T17:39:00", image: newsImage53730469 },
  { id: 53733274, title: "Chiếu miễn phí phim 'Mưa đỏ' và 'Địa đạo' tại Bà Rịa-Vũng Tàu và Đặc khu Côn Đảo", category: "Báo Văn hóa", time: "2025-11-12T01:43:00", image: newsImage53733274 },
  { id: 53729261, title: "Kết quả xổ số hôm nay, 11-11: Xổ số miền Nam - Bến Tre, Bà Rịa - Vũng Tàu, Bạc Liêu", category: "Báo Người Lao Động", time: "2025-11-11T15:54:00", image: newsImage53729261 },
  { id: 53679237, title: "Huy động 82 nghìn tỷ đồng phát triển cảng biển Bà Rịa-Vũng Tàu", category: "Báo Nhân Dân", time: "2025-11-05T17:05:00", image: newsImage53679237 },
  { id: 53696976, title: "Nguyên Phó Bí thư Thường trực Tỉnh ủy Bà Rịa - Vũng Tàu nhận Huy hiệu 50 năm tuổi Đảng", category: "Báo Người Lao Động", time: "2025-11-07T13:08:00", image: newsImage53696976 },
  { id: 53669631, title: "Hệ thống cảng biển Bà Rịa - Vũng Tàu phấn đấu đạt 60 bến vào năm 2030", category: "Tạp chí VnEconomy", time: "2025-11-04T17:05:00", image: newsImage53669631 },
  { id: 53660758, title: "Đến 2030, khu vực Bà Rịa - Vũng Tàu trước đây sẽ có 60 bến cảng", category: "Báo Người Lao Động", time: "2025-11-03T18:12:00", image: newsImage53660758 },
  { id: 53659440, title: "Cần hơn 81.000 tỷ đồng phát triển cảng biển Bà Rịa - Vũng Tàu tới năm 2030", category: "Báo Xây Dựng", time: "2025-11-03T15:41:00", image: newsImage53659440 },
  { id: 53667387, title: "Cựu Giám đốc Sở Y tế Bà Rịa - Vũng Tàu sắp hầu tòa vụ gây thiệt hại 18 tỉ đồng", category: "Báo Pháp Luật TP.HCM", time: "2025-11-04T13:31:06", image: newsImage53667387 },
  { id: 53764657, title: "TP HCM hỗ trợ Tây Ninh 1.806 tỷ đồng triển khai cao tốc TP HCM – Mộc Bài", category: "Chuyên trang Vietnamdaily - Báo Tri thức & Cuộc sống", time: "2025-11-15T14:15:00", image: newsImage53764657 },
  { id: 53769631, title: "TP. HCM: Gần 2.000 người đồng diễn dưỡng sinh", category: "Báo Công Lý", time: "2025-11-16T10:37:00", image: newsImage53769631 },
  { id: 53728586, title: "Nguy cơ sạt lở tại Núi Lớn ở phường Vũng Tàu: Sở Xây dựng TP HCM đến hiện trường", category: "Báo Người Lao Động", time: "2025-11-11T14:48:00", image: newsImage53728586 },
  { id: 53743253, title: "Nâng tầm hạ tầng TP HCM", category: "Báo Người Lao Động", time: "2025-11-13T07:32:00", image: newsImage53743253 },
  { id: 53761689, title: "TP HCM hỗ trợ Tây Ninh hơn 1.800 tỷ thực hiện dự án thành phần 4 cao tốc TP HCM - Mộc Bài", category: "Tạp chí Doanh Nhân VN", time: "2025-11-15T07:53:00", image: newsImage53761689 },
  { id: 53760976, title: "TP HCM đẩy mạnh chuyển đổi xanh bền vững", category: "Báo Người Lao Động", time: "2025-11-15T04:05:00", image: newsImage53760976 },
];

export const moreNews: Article[] = [
  {
    id: 11,
    title: "Phiên họp chuyên đề xây dựng pháp luật diễn ra tại Hà Nội",
    category: "Chính trị",
    time: "3 giờ trước",
  },
  {
    id: 12,
    title: "Ngành bán lẻ ghi nhận mức tăng trưởng ấn tượng dịp cuối năm",
    category: "Kinh tế",
    time: "3 giờ trước",
  },
  {
    id: 13,
    title: "Loạt hoạt động kỷ niệm Ngày Nhà giáo Việt Nam",
    category: "Giáo dục",
    time: "4 giờ trước",
  },
  {
    id: 14,
    title: "Thêm tuyến phố đi bộ mới thu hút đông đảo du khách",
    category: "Đời sống",
    time: "4 giờ trước",
  },
  {
    id: 15,
    title: "Ra mắt tuyến xe buýt điện kết nối các khu đô thị lớn",
    category: "Xã hội",
    time: "5 giờ trước",
  },
];

export const mostRead: Article[] = [
  { id: 21, title: "Những lưu ý khi mua nhà trong dự án chưa hoàn thành" },
  { id: 22, title: "Lộ trình tăng lương tối thiểu vùng từ năm 2025" },
  { id: 23, title: "Top điểm đến mùa đông được tìm kiếm nhiều nhất" },
  { id: 24, title: "Bí quyết giữ sức khỏe trong mùa mưa lạnh" },
  { id: 25, title: "Câu chuyện khởi nghiệp của nhóm sinh viên trẻ" },
];

export const hot24h: Article[] = [
  { id: 31, title: "CLB bóng đá ra mắt tân HLV trưởng người châu Âu" },
  { id: 32, title: "Hàng loạt tuyến phố trung tâm ngập sau mưa lớn" },
  { id: 33, title: "Nhiều trường học chuyển sang học trực tuyến tạm thời" },
  { id: 34, title: "Xuất hiện đợt không khí lạnh tăng cường cuối tuần" },
];

export const videoNews: Article[] = [
  {
    id: 41,
    title: "Tổng thống Mỹ D. Trump hé lộ khả năng mở đối thoại với Venezuela",
    image: videoNews1,
  },
  {
    id: 42,
    title: "Chiến dịch mới của Nga tạo bước ngoặt trên mặt trận phía đông",
    image: videoNews2,
  },
  {
    id: 43,
    title: "Căn bệnh mà mẹ ca sĩ Tuấn Hưng mắc phải và qua đời nguy hiểm ra sao?",
    image: videoNews3,
  },
];

export const trending: Article[] = [
  { id: 51, title: "Xu hướng làm việc từ xa năm 2025" },
  { id: 52, title: "Du lịch một mình: trào lưu của giới trẻ" },
  { id: 53, title: "Các ứng dụng AI phổ biến trong đời sống" },
  { id: 54, title: "Làn sóng đầu tư năng lượng tái tạo" },
];
