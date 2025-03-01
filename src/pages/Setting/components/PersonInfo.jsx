import { Button, Form, Input } from "antd";
import { useState } from "react";
import "./PersonInfo.less";
const { TextArea } = Input;

class CreateInfo {
  constructor() {
    this.nickname = "战斗机"; // 昵称
    this.profile = "飞一般的感觉"; // 个人简介
    this.email = "zhandouji12138@qq.com"; // 邮箱
  }
}

class CreateRuleForm {
  constructor() {
    this.nickname = ""; // 昵称
    this.profile = ""; // 个人简介
    this.email = ""; // 邮箱
  }
}

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

let checkEmail = (rule, value, callback) => {
  if (!isValidEmail(value)) {
    return callback(new Error("请输入正确的邮箱地址"));
  } else {
    callback();
  }
};

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 16 },
};

const rules = {
  nickname: [
    {
      required: true,
      message: "请输入昵称",
      trigger: "change",
    },
  ],
  profile: [
    {
      required: true,
      message: "请输入简介",
      trigger: "change",
    },
  ],
  email: [
    {
      validator: checkEmail,
      trigger: "change",
    },
  ],
};

const PersonInfo = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [info, setInfo] = useState(new CreateInfo());
  const [ruleForm] = Form.useForm();
  const onFinish = (value) => {
    setIsEdit(false);
    setInfo({ ...value });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const toEdit = () => {
    setIsEdit(true);
  };

  const onCancel = () => {
    ruleForm.resetFields();
    ruleForm.setFieldsValue({
      ...info,
    });
    setIsEdit(false);
  };

  return (
    <div className="personal-info">
      <Form
        name="PersonalInfo"
        layout="vertical"
        form={ruleForm}
        label-col={layout.labelCol}
        wrapper-col={layout.wrapperCol}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        initialValues={new CreateRuleForm()}
      >
        {isEdit && (
          <>
            <Form.Item label="昵称" name="nickname" rules={rules.nickname}>
              <Input
                type="text"
                maxLength="20"
                placeholder="请输入昵称"
              ></Input>
            </Form.Item>
            <Form.Item label="个人简介" name="profile" rules={rules.profile}>
              <TextArea
                type="text"
                style={{
                  height: "100px",
                }}
                placeholder="请输入个人简介"
                maxLength="500"
              ></TextArea>
            </Form.Item>
            <Form.Item label="邮箱" name="email" rules={rules.email}>
              <Input
                type="text"
                placeholder="请输入邮箱"
                maxLength="150"
              ></Input>
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
              <Button
                style={{
                  marginLeft: "10px",
                }}
                onClick={onCancel}
              >
                取消
              </Button>
            </Form.Item>
          </>
        )}
        {!isEdit && (
          <>
            <Form.Item label="昵称" name="nickname">
              {info.nickname}
            </Form.Item>
            <Form.Item label="个人简介" name="profile">
              {info.profile}
            </Form.Item>
            <Form.Item label="邮箱" name="email">
              {info.email}
            </Form.Item>
            <Form.Item label={null}>
              <Button type="primary" onClick={toEdit}>
                修改
              </Button>
            </Form.Item>
          </>
        )}
      </Form>
    </div>
  );
};

export default PersonInfo;
