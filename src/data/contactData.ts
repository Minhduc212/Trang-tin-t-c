export interface OfficeContact {
  id: number;
  title: string;
  description?: string;
  address: string;
  phone?: string;
  email?: string;
}

export interface SupportChannel {
  id: number;
  label: string;
  value: string;
  type: "email" | "phone" | "link";
}

export const offices: OfficeContact[] = [
  {
    id: 1,
    title: "Tòa soạn",
    description: "Tiếp nhận bài viết, góp ý nội dung, thông tin phản hồi.",
    address: "Tầng 7, Tòa nhà Demo, 123 Đường Tin Tức, Quận 1, TP.HCM",
    phone: "0379775576",
    email: "buivuminhduc21@gmail.com",
  },
  {
    id: 2,
    title: "Quảng cáo",
    description: "Hợp tác truyền thông, booking banner, advertorial.",
    address: "Tầng 5, Tòa nhà Demo, 123 Đường Tin Tức, Quận 1, TP.HCM",
    phone: "0379775576",
    email: "buivuminhduc21@gmail.com",
  },
  {
    id: 3,
    title: "Hỗ trợ kỹ thuật",
    description: "Báo lỗi hiển thị, tài khoản, tính năng trên trang.",
    address: "Phòng Dev, Tầng 4, Tòa nhà Demo",
    phone: "0379775576",
    email: "buivuminhduc21@gmail.com",
  },
];

export const supportChannels: SupportChannel[] = [
  {
    id: 1,
    label: "Email chung",
    value: "buivuminhduc21@gmail.com",
    type: "email",
  },
  {
    id: 2,
    label: "Hotline 24/7",
    value: "0379775576",
    type: "phone",
  },
  {
    id: 3,
    label: "Fanpage Facebook",
    value: "https://www.facebook.com/Meomeo2102zzz/",
    type: "link",
  },
  {
    id: 4,
    label: "Kênh YouTube",
    value: "https://www.youtube.com/@LazyCat2102",
    type: "link",
  },
];
