import React from "react";
import Logo from "../../assets/bm-logo-v3.png";

import "./NewsFooter.scss";

import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { FiArrowUp } from "react-icons/fi";

const NewsFooter: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="tn-footer">
            <div className="container">
                {/* Cột chuyên mục trên cùng */}
                <div className="tn-footer__categories row">
                    <div className="col-6 col-md-3">
                        <ul>
                            <li>Chính trị</li>
                            <li>Thời sự</li>
                            <li>Thế giới</li>
                            <li>Kinh tế</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3">
                        <ul>
                            <li>Đời sống</li>
                            <li>Sức khoẻ</li>
                            <li>Giới trẻ</li>
                            <li>Giáo dục</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <ul>
                            <li>Du lịch</li>
                            <li>Văn hoá</li>
                            <li>Giải trí</li>
                            <li>Thể thao</li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-3 mt-3 mt-md-0">
                        <ul>
                            <li>Công nghệ</li>
                            <li>Xe</li>
                            <li>Thời trang trẻ</li>
                            <li>Video</li>
                        </ul>
                    </div>
                </div>

                <hr className="tn-footer__divider" />

                {/* Hàng logo + menu + social */}
                <div className="tn-footer__middle row align-items-center">
                    <div className="col-12 col-md-3 mb-3 mb-md-0">
                        <div className="tn-footer__logo">
                            <img src={Logo} alt="bm-logo" />
                        </div>
                    </div>

                    <div className="col-12 col-md-6 mb-3 mb-md-0">
                        <nav className="tn-footer__nav">
                            <a href="#">Đặt báo</a>
                            <a href="#">Quảng cáo</a>
                            <a href="#">RSS</a>
                            <a href="#">Tòa soạn</a>
                            <a href="#">Chính sách bảo mật</a>
                        </nav>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="tn-footer__social">
                            <span className="tn-footer__social-label">
                                Theo dõi báo trên
                            </span>
                            <div className="tn-footer__social-icons">
                                <a href="https://www.facebook.com/Meomeo2102zzz/" aria-label="Facebook">
                                    <FaFacebookF />
                                </a>
                                <a href="/" aria-label="Zalo">
                                    <SiZalo />
                                </a>
                                <a href="https://www.youtube.com/@LazyCat2102/" aria-label="YouTube">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hàng dưới cùng: hotline + thông tin pháp lý */}
                <div className="tn-footer__bottom row">
                    <div className="col-12 col-md-4 mb-3 mb-md-0">
                        <div className="tn-footer__hotline">
                            <div>Hotline</div>
                            <a href="tel:0906645777">0379 775 576</a>
                            <div>Liên hệ quảng cáo</div>
                            <a href="tel:0908780404">0379 775 576</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="tn-footer__legal">
                            <p>
                                Giấy phép xuất bản số 110/GP - BTTTT cấp ngày 24.3.2020.
                                <br />
                                © 2003–2024 Bản quyền thuộc về Báo demo Mới. Cấm sao
                                chép dưới mọi hình thức nếu không có sự chấp thuận bằng văn
                                bản.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Nút back to top */}
            <button className="tn-footer__to-top" onClick={scrollToTop}>
                <FiArrowUp />
                <span>TOP</span>
            </button>
        </footer>
    );
};

export default NewsFooter;
