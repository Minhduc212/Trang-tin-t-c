import React, { useState } from "react";
import type { FormEvent, ChangeEvent } from "react"
import "./ContactPage.scss";
import { offices, supportChannels } from "../../data/contactData";

interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const initialValues: ContactFormValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

const ContactPage: React.FC = () => {
    const [values, setValues] = useState<ContactFormValues>(initialValues);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        setSubmitted(false);
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        // Ở dự án thật bạn sẽ gọi API gửi form tại đây
        console.log("Contact form submit:", values);
        setSubmitted(true);
        setValues(initialValues);
    };

    return (
        <main className="contact-page">
            <div className="container">
                <div className="row">
                    {/* LEFT: INFO + FORM */}
                    <div className="col-lg-8 contact-page__main">
                        <section className="contact-hero">
                            <h1>Liên hệ</h1>
                            <p>
                                Nếu bạn có bài viết, thông tin muốn chia sẻ, cần hợp tác quảng
                                cáo, hoặc gặp vấn đề kỹ thuật khi sử dụng trang, hãy gửi thông
                                tin cho chúng tôi qua form dưới đây.
                            </p>
                        </section>

                        {/* OFFICE CARDS */}
                        <section className="contact-offices">
                            <div className="row g-3">
                                {offices.map((office) => (
                                    <div key={office.id} className="col-md-4">
                                        <div className="contact-office-card">
                                            <h3>{office.title}</h3>
                                            {office.description && (
                                                <p className="contact-office-card__desc">
                                                    {office.description}
                                                </p>
                                            )}
                                            <p className="contact-office-card__addr">
                                                {office.address}
                                            </p>
                                            {office.phone && (
                                                <p className="contact-office-card__line">
                                                    Điện thoại:{" "}
                                                    <a href={`tel:${office.phone}`}>{office.phone}</a>
                                                </p>
                                            )}
                                            {office.email && (
                                                <p className="contact-office-card__line">
                                                    Email:{" "}
                                                    <a href={`mailto:${office.email}`}>{office.email}</a>
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* FORM */}
                        <section className="contact-form card mt-3">
                            <div className="card-body">
                                <h2 className="contact-form__title">Gửi thông tin liên hệ</h2>
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Họ và tên</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="form-control"
                                                value={values.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="form-control"
                                                value={values.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Chủ đề</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control"
                                            value={values.subject}
                                            onChange={handleChange}
                                            placeholder="Ví dụ: Góp ý nội dung, Đề nghị quảng cáo..."
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Nội dung</label>
                                        <textarea
                                            name="message"
                                            className="form-control"
                                            rows={5}
                                            value={values.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {submitted && (
                                        <div className="alert alert-success py-2">
                                            Cảm ơn bạn, chúng tôi đã ghi nhận thông tin liên hệ!
                                        </div>
                                    )}

                                    <button type="submit" className="btn btn-primary">
                                        Gửi liên hệ
                                    </button>
                                </form>
                            </div>
                        </section>
                    </div>

                    {/* RIGHT: SUPPORT CHANNELS / INFO */}
                    <div className="col-lg-4 contact-page__sidebar">
                        <aside className="contact-sidebox">
                            <div className="contact-sidebox__header">
                                <h3>Kênh liên hệ khác</h3>
                            </div>
                            <div className="contact-sidebox__body">
                                {supportChannels.map((ch) => (
                                    <div key={ch.id} className="contact-channel">
                                        <div className="contact-channel__label">{ch.label}</div>
                                        {ch.type === "email" && (
                                            <a
                                                className="contact-channel__value"
                                                href={`mailto:${ch.value}`}
                                            >
                                                {ch.value}
                                            </a>
                                        )}
                                        {ch.type === "phone" && (
                                            <a
                                                className="contact-channel__value"
                                                href={`tel:${ch.value}`}
                                            >
                                                {ch.value}
                                            </a>
                                        )}
                                        {ch.type === "link" && (
                                            <a
                                                className="contact-channel__value"
                                                href={ch.value}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                {ch.value}
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </aside>

                        <aside className="contact-sidebox mt-3">
                            <div className="contact-sidebox__header">
                                <h3>Giờ làm việc</h3>
                            </div>
                            <div className="contact-sidebox__body">
                                <p className="mb-1">
                                    Thứ 2 – Thứ 6: <strong>08:30 – 18:00</strong>
                                </p>
                                <p className="mb-1">
                                    Thứ 7: <strong>08:30 – 12:00</strong>
                                </p>
                                <p className="mb-0 text-muted" style={{ fontSize: "0.85rem" }}>
                                    Ngoài khung giờ trên, vui lòng gửi email, chúng tôi sẽ phản hồi
                                    sớm nhất có thể.
                                </p>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
