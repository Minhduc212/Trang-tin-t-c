import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import "./RegisterForm.scss"; // dùng lại style khung login cho đồng bộ

interface RegisterFormProps {
    onSuccess?: () => void;
}

export interface RegisterFormValues {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSuccess }) => {
    const [serverError, setServerError] = useState<string>("");
    const [success, setSuccess] = useState<string>("");

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch,
        reset,
    } = useForm<RegisterFormValues>({
        mode: "onBlur",
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });

    const passwordValue = watch("password");

    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        setServerError("");
        setSuccess("");

        try {
            // Giả lập gọi API
            await new Promise((resolve) => setTimeout(resolve, 800));

            // Demo: luôn coi là thành công
            console.log("Register data:", data);
            setSuccess("Đăng ký thành công! Bạn có thể đăng nhập ngay bây giờ.");
            if (onSuccess) onSuccess();
            reset();
        } catch (err) {
            console.log(err);
            setServerError("Có lỗi xảy ra, vui lòng thử lại sau.");
        }
    };

    return (
        <div className="login-form rounded px-2 py-1">
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-3">
                {/* Họ tên */}
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label text-dark">
                        Họ và tên
                    </label>
                    <input
                        id="fullName"
                        type="text"
                        className={`form-control ${errors.fullName ? "is-invalid" : ""
                            }`}
                        placeholder="Nhập họ tên đầy đủ"
                        {...register("fullName", {
                            required: "Vui lòng nhập họ tên",
                            minLength: {
                                value: 3,
                                message: "Họ tên phải có ít nhất 3 ký tự",
                            },
                        })}
                    />
                    {errors.fullName && (
                        <div className="invalid-feedback d-block">
                            {errors.fullName.message}
                        </div>
                    )}
                </div>

                {/* Email */}
                <div className="mb-3">
                    <label htmlFor="email" className="form-label text-dark">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        placeholder="Nhập email của bạn"
                        autoComplete="email"
                        {...register("email", {
                            required: "Vui lòng nhập email",
                            pattern: {
                                value:
                                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: "Email không hợp lệ",
                            },
                        })}
                    />
                    {errors.email && (
                        <div className="invalid-feedback d-block">
                            {errors.email.message}
                        </div>
                    )}
                </div>

                {/* Mật khẩu */}
                <div className="mb-3">
                    <label htmlFor="password" className="form-label text-dark">
                        Mật khẩu
                    </label>
                    <input
                        id="password"
                        type="password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        placeholder="Nhập mật khẩu"
                        autoComplete="new-password"
                        {...register("password", {
                            required: "Vui lòng nhập mật khẩu",
                            minLength: {
                                value: 6,
                                message: "Mật khẩu phải có ít nhất 6 ký tự",
                            },
                        })}
                    />
                    {errors.password && (
                        <div className="invalid-feedback d-block">
                            {errors.password.message}
                        </div>
                    )}
                </div>

                {/* Xác nhận mật khẩu */}
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label text-dark">
                        Xác nhận mật khẩu
                    </label>
                    <input
                        id="confirmPassword"
                        type="password"
                        className={`form-control ${errors.confirmPassword ? "is-invalid" : ""
                            }`}
                        placeholder="Nhập lại mật khẩu"
                        autoComplete="new-password"
                        {...register("confirmPassword", {
                            required: "Vui lòng xác nhận mật khẩu",
                            validate: (value) =>
                                value === passwordValue || "Mật khẩu nhập lại không khớp",
                        })}
                    />
                    {errors.confirmPassword && (
                        <div className="invalid-feedback d-block">
                            {errors.confirmPassword.message}
                        </div>
                    )}
                </div>

                {/* Thông báo lỗi / thành công */}
                {serverError && (
                    <div className="alert alert-danger py-2">{serverError}</div>
                )}
                {success && (
                    <div className="alert alert-success py-2">{success}</div>
                )}

                <button
                    type="submit"
                    className="btn btn-primary w-100 mt-2"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Đang gửi..." : "Đăng ký"}
                </button>
            </form>
        </div>
    );
};

export default RegisterForm;
