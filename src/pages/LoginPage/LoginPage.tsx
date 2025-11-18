import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import "./LoginPage.scss";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginSuccess = () => {
    // Sau khi login thành công, chuyển sang trang chủ
    navigate("/");
  };
  const handleRegisterSuccess = () => {
    // Sau khi login thành công, chuyển sang trang chủ
    navigate("/login");
  };

  return (
    <div className="login-page w-100 d-flex align-items-center justify-content-center">
      <Tabs>
        <TabList>
          <Tab>Đăng nhập</Tab>
          <Tab>Đăng ký</Tab>
        </TabList>
        <TabPanel>
          <LoginForm onSuccess={handleLoginSuccess} />
        </TabPanel>
        <TabPanel>
          <RegisterForm onSuccess={handleRegisterSuccess} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default LoginPage;
