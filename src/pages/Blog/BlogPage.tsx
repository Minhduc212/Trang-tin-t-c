// src/pages/BlogIndex/BlogPage.tsx
import React from "react";
import "./BlogPage.scss";
import {
  blogPosts,
  xemNhieuItems,
  photoItems,
  videoItems,
} from "../../data/blogListData";

const BlogPage: React.FC = () => {
  return (
    <main className="vx-blog">
      <div className="container">
        <div className="row">
          {/* CỘT TRÁI: DANH SÁCH BLOG */}
          <div className="col-lg-8 vx-blog__main">
            <h1 className="vx-blog__title">blog</h1>

            <div className="vx-blog__list">
              {blogPosts.map((post) => (
                <article key={post.id} className="vx-post">
                  <div className="vx-post__thumb">
                    {post.isVideo ? (
                      <video
                        src={post.image}
                        controls
                        className="vx-post__video"
                      />
                    ) : (
                      <img src={post.image} alt={post.title} />
                    )}
                  </div>
                  <div className="vx-post__body">
                    <h2 className="vx-post__title">{post.title}</h2>
                    <p className="vx-post__excerpt">{post.excerpt}</p>
                    <div className="vx-post__meta">
                      <span>{post.author}</span>
                      <span className="dot">•</span>
                      <span>{post.date}</span>
                      <span className="dot">•</span>
                      <span>{post.views} lượt đọc</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination đơn giản */}
            <div className="vx-blog__pagination">
              <button className="page-btn page-btn--active">1</button>
              <button className="page-btn">2</button>
              <button className="page-btn">3</button>
              <button className="page-btn">&gt;</button>
            </div>
          </div>

          {/* CỘT PHẢI: SIDEBAR */}
          <div className="col-lg-4 vx-blog__sidebar">
            {/* Xem nhiều */}
            <aside className="vx-box">
              <div className="vx-box__header">
                <h3>Xem nhiều</h3>
              </div>
              <div className="vx-box__body">
                {xemNhieuItems.map((item) => (
                  <div key={item.id} className="vx-box__item">
                    <span className="vx-box__bullet" />
                    <span className="vx-box__text">{item.title}</span>
                  </div>
                ))}
              </div>
            </aside>

            {/* Ảnh */}
            <aside className="vx-box">
              <div className="vx-box__header">
                <h3>Ảnh</h3>
              </div>
              <div className="vx-box__body vx-box__body--photo">
                {photoItems.map((item) => (
                  <div key={item.id} className="vx-photo">
                    <img src={item.image} alt={item.title} />
                    <div className="vx-photo__title">{item.title}</div>
                  </div>
                ))}
              </div>
            </aside>

            {/* Video */}
            <aside className="vx-box">
              <div className="vx-box__header">
                <h3>Video</h3>
              </div>
              <div className="vx-box__body vx-box__body--photo">
                {videoItems.map((item) => (
                  <div key={item.id} className="vx-photo">
                    <div className="vx-photo__thumb">
                      <img src={item.image} alt={item.title} />
                      <span className="vx-photo__play">▶</span>
                    </div>
                    <div className="vx-photo__title">{item.title}</div>
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

export default BlogPage;
