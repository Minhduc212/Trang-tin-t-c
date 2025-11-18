// src/pages/Home/HomePage.tsx
import React from "react";
import "./HomePage.scss";
import {featuredArticle, featuredThumbs,latestNews, moreNews, mostRead, hot24h, videoNews, trending } from "../../data/homeListData"


const HomePage: React.FC = () => {
  return (
    <main className="bm-home">
      <div className="container">
        <div className="row">
          {/* CỘT TRÁI - MAIN */}
          <div className="col-lg-8 bm-home__main">
            {/* Khối tin nổi bật */}
            <section className="bm-featured card mb-3">
              <div className="bm-featured__image-wrapper">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="img-fluid bm-featured__image"
                />
              </div>
              <div className="bm-featured__body">
                <h1 className="bm-featured__title">
                  {featuredArticle.title}
                </h1>
                <div className="bm-featured__meta">
                  <span>{featuredArticle.time}</span>
                </div>
                <p className="bm-featured__summary">
                  {featuredArticle.summary}
                </p>

                {/* 4 tin nhỏ ngang dưới ảnh */}
                <div className="row g-3 bm-featured__thumbs">
                  {featuredThumbs.map((item) => (
                    <div
                      key={item.id}
                      className="col-6 col-md-3 bm-featured__thumb-item"
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid mb-1"
                      />
                      <div className="bm-featured__thumb-title">
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Danh sách tin mới (có ảnh nhỏ bên trái) */}
            <section className="bm-block mb-3">
              <div className="bm-block__header">
                <h2>TIN MỚI</h2>
              </div>
              <div className="bm-list bm-list--with-image">
                {latestNews.map((item) => (
                  <article key={item.id} className="bm-list__item">
                    <div className="bm-list__thumb">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                    </div>
                    <div className="bm-list__content">
                      <h3 className="bm-list__title">{item.title}</h3>
                      <div className="bm-list__meta">
                        {item.category && (
                          <span className="bm-list__category">
                            {item.category}
                          </span>
                        )}
                        {item.time && (
                          <span className="bm-list__time">{item.time}</span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* Dòng tin tiếp theo (không ảnh hoặc ảnh nhỏ hơn) */}
            <section className="bm-block mb-3">
              <div className="bm-block__header">
                <h2>TIN TỔNG HỢP</h2>
              </div>
              <div className="bm-list bm-list--compact">
                {moreNews.map((item) => (
                  <article key={item.id} className="bm-list__item">
                    <h3 className="bm-list__title">{item.title}</h3>
                    <div className="bm-list__meta">
                      {item.category && (
                        <span className="bm-list__category">
                          {item.category}
                        </span>
                      )}
                      {item.time && (
                        <span className="bm-list__time">{item.time}</span>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </div>

          {/* CỘT PHẢI - SIDEBAR */}
          <div className="col-lg-4 bm-home__sidebar">
            {/* Box Đọc nhiều */}
            <aside className="bm-sidebox mb-3">
              <div className="bm-sidebox__header">
                <h3>ĐỌC NHIỀU</h3>
              </div>
              <div className="bm-sidebox__body">
                {mostRead.map((item, idx) => (
                  <div key={item.id} className="bm-sidebox__item">
                    <span className="bm-sidebox__index">{idx + 1}</span>
                    <span className="bm-sidebox__title">{item.title}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Box Nóng 24h */}
            <aside className="bm-sidebox mb-3">
              <div className="bm-sidebox__header bm-sidebox__header--hot">
                <h3>NÓNG 24H</h3>
              </div>
              <div className="bm-sidebox__body">
                {hot24h.map((item) => (
                  <div key={item.id} className="bm-sidebox__item">
                    <span className="bm-sidebox__dot" />
                    <span className="bm-sidebox__title">{item.title}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Box Tiện ích (weather demo) */}
            <aside className="bm-sidebox mb-3">
              <div className="bm-sidebox__header">
                <h3>TIỆN ÍCH</h3>
              </div>
              <div className="bm-sidebox__body bm-utilities">
                <div className="bm-utilities__row">
                  <div>
                    <div className="bm-utilities__label">Thời tiết</div>
                    <div className="bm-utilities__value">29°C · Nhiều mây</div>
                  </div>
                  <div>
                    <div className="bm-utilities__label">Tỷ giá USD</div>
                    <div className="bm-utilities__value">24.500 VND</div>
                  </div>
                </div>
                <div className="bm-utilities__note">
                  Dữ liệu minh họa cho giao diện. Bạn có thể kết nối API thời
                  tiết / tỷ giá thật sau.
                </div>
              </div>
            </aside>

            {/* Box Video */}
            <aside className="bm-sidebox mb-3">
              <div className="bm-sidebox__header">
                <h3>VIDEO</h3>
              </div>
              <div className="bm-sidebox__body">
                {videoNews.map((item) => (
                  <div key={item.id} className="bm-video-item">
                    <div className="bm-video-item__thumb">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="img-fluid"
                      />
                      <span className="bm-video-item__play">▶</span>
                    </div>
                    <div className="bm-video-item__title">{item.title}</div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Box Xu hướng */}
            <aside className="bm-sidebox mb-3">
              <div className="bm-sidebox__header">
                <h3>XU HƯỚNG</h3>
              </div>
              <div className="bm-sidebox__body">
                {trending.map((item) => (
                  <div key={item.id} className="bm-sidebox__item">
                    <span className="bm-sidebox__dot" />
                    <span className="bm-sidebox__title">{item.title}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
