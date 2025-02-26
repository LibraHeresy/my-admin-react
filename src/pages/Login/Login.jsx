import "./Login.less";
import { Tabs } from "antd";
import LoginForm from "./LoginForm";

const tabs = [
  {
    key: "1",
    label: "账号登录",
    children: <LoginForm />, // 渲染 LoginForm 组件
  },
];

const Login = () => {
  return (
    <div className="my-login">
      <div className="login-form">
        <div className="title">My-Admin-React</div>
        <Tabs defaultActiveKey="1" size="large" centered items={tabs}></Tabs>
      </div>
    </div>
  );
};

export default Login;