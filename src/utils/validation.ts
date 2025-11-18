import type { LoginErrors, LoginValues } from "../types/auth"

export const validateLogin = (values: LoginValues): LoginErrors => {
  const errors: LoginErrors = {};

  if (!values.email.trim()) {
    errors.email = "Email không được để trống.";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(values.email)) {
      errors.email = "Email không đúng định dạng.";
    }
  }

  if (!values.password.trim()) {
    errors.password = "Mật khẩu không được để trống.";
  } else if (values.password.length < 4) {
    errors.password = "Mật khẩu phải có ít nhất 4 ký tự.";
  }

  return errors;
};
