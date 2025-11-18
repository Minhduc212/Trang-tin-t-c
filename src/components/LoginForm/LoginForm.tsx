import React, { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import "./LoginForm.scss";
import { DEMO_EMAIL, DEMO_PASSWORD } from "../../constants/auth";
import type { LoginValues } from "../../types/auth";

interface LoginFormProps {
  onSuccess?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSuccess }) => {
  const [authError, setAuthError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginValues>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<LoginValues> = async (values) => {
    setAuthError("");
    setSuccess("");

    // Giả lập call API
    await new Promise((resolve) => setTimeout(resolve, 600));

    if (values.email === DEMO_EMAIL && values.password === DEMO_PASSWORD) {
      setSuccess("Đăng nhập thành công! Đang chuyển hướng...");
      setAuthError("");
      if (onSuccess) onSuccess();
      reset(); // nếu muốn clear form sau khi login
    } else {
      setAuthError("Tài khoản hoặc mật khẩu không chính xác.");
      setSuccess("");
    }
  };

  return (
    <div className="login-form rounded px-2 py-1">
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-3">
        {/* EMAIL */}
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-dark">
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="username"
            placeholder="Nhập email của bạn"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
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

        {/* PASSWORD */}
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-dark">
            Mật khẩu
          </label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Nhập mật khẩu"
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
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

        {/* ERROR / SUCCESS */}
        {authError && (
          <div className="alert alert-danger py-2">{authError}</div>
        )}

        {success && (
          <div className="alert alert-success py-2">{success}</div>
        )}

        <button
          type="submit"
          className="btn btn-primary w-100 mt-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang kiểm tra..." : "Đăng nhập"}
        </button>
      </form>

      <div className="d-flex justify-content-between align-items-center mt-3 small text-muted">
        <button
          type="button"
          className="btn btn-link p-0 fw-normal text-dark text-decoration-none"
          onClick={() => alert("Demo nên chưa làm chức năng này")}
        >
          Quên mật khẩu
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
