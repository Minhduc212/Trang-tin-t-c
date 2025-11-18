import React from "react";
import Logo from "../../assets/bm-logo-v3.png";
import { CiSearch, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <header className="bm-header">
      <div className="bm-header__top">
        <div className="container d-flex align-items-center">
          {/* Logo */}
          <div className="bm-logo me-4">
            <div className="bm-logo__text">
              <img src={Logo} alt="bm-logo" />
            </div>
          </div>

          {/* Search */}
          <form className="bm-search">
            <div className="container">
              <input
                type="text"
                className="form-control bm-search__input"
                placeholder="Nhập nội dung tìm kiếm"
              />
              <button type="submit" className="bm-search__button">
                <CiSearch />
              </button>

            </div>
          </form>

          {/* Icons bên phải */}
          <div className="bm-header__icons ms-4 d-flex align-items-center">
            <Link to="/auth" className="bm-icon-btn me-3">
              <CiUser />
            </Link>
            <button type="button" className="bm-icon-btn me-3">
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      {/* Dòng dưới: menu teal */}
      <div className="bm-header__bottom">
        <div className="container d-flex align-items-stretch p-0">
          {/* Menu chính */}
          <ul className="bm-main-menu mb-0 d-flex align-items-stretch flex-grow-1">
            <li className="bm-main-menu__item">
              <a href="#" className="bm-main-menu__link">
                NÓNG
              </a>
            </li>
            <li className="bm-main-menu__item">
              <a href="#" className="bm-main-menu__link bm-main-menu__link--new">
                MỚI
                <span className="bm-main-menu__badge">6</span>
              </a>
            </li>
            <li className="bm-main-menu__item">
              <a href="#" className="bm-main-menu__link">
                VIDEO
              </a>
            </li>
            <li className="bm-main-menu__item">
              <a href="#" className="bm-main-menu__link">
                CHỦ ĐỀ
              </a>
            </li>
            <li className="bm-main-menu__item">
              <Link to="/blog" className="bm-main-menu__link">
                Blog
              </Link>
            </li>
            <li className="bm-main-menu__item">
              <Link to="/contact" className="bm-main-menu__link">
                Liên hệ
              </Link>
            </li>
            {/* Hashtag */}
            <li className="bm-main-menu__tags d-flex align-items-center">
              <button className="bm-tag"># Đại hội Đảng XIV</button>
              <button className="bm-tag"># Nghị quyết 57</button>
              <button className="bm-tag"># Năng lượng tích cực</button>
            </li>
          </ul>

          {/* Nút menu 3 gạch bên phải */}
          <button className="bm-menu-toggle">
            <i className="bi bi-list" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
