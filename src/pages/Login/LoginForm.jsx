import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

const rules = {
  account: [
    {
      max: 20,
      required: true,
      message: "请输入账号",
      trigger: "change",
    },
  ],
  password: [
    {
      max: 20,
      required: true,
      message: "请输入密码",
      trigger: "change",
    },
  ],
};

const LoginForm = () => {
  const navigate = useNavigate();

  // 用户登录
  const onFinish = async (ruleForm) => {
    if (ruleForm.account === "admin" && ruleForm.password === "123456") {
      message.success("登录成功");
      localStorage.setItem("token", "token");
      navigate("/");
    } else {
      message.error("账号或密码错误");
    }
  };
  const onFinishFailed = (error) => {
    message.error(error.message);
  };

  return (
    <Form
      label-col={layout.labelCol}
      wrapper-col={layout.wrapperCol}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item hasFeedback name="account" rules={rules.account}>
        <Input
          size="large"
          type="text"
          autoComplete="off"
          maxLength="20"
          placeholder="admin"
          prefix={<UserOutlined />}
        ></Input>
      </Form.Item>
      <Form.Item hasFeedback name="password" rules={rules.password}>
        <Input
          size="large"
          type="password"
          autoComplete="off"
          maxLength="20"
          placeholder="123456"
          prefix={<LockOutlined />}
        ></Input>
      </Form.Item>
      <Form.Item label={null}>
        <Button
          className="login-button"
          size="large"
          type="primary"
          htmlType="submit"
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
