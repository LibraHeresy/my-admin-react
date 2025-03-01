import { OrderTypeDict, OrderPayMentDict } from "../../configs/dict";
import MyEditor from "@/components/MyEditor/MyEditor.jsx";
import moment from "moment";
import { Form, Modal, Button, Select, Input } from "antd";
import React, { useState } from "react";
import PropTypes from "prop-types";

class CreateRuleForm {
  constructor() {
    // 订单金额
    this.orderAmount = undefined;
    // 订单类型
    this.orderType = undefined;
    // 工作人员
    this.worker = "";
    // 支付渠道
    this.orderPayment = undefined;
    // 备注
    this.desc = "";
  }
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 24 },
};

const rules = {
  orderAmount: [
    {
      required: true,
      message: "请输入订单金额",
      trigger: "change",
    },
  ],
  orderType: [
    {
      required: true,
      message: "请选择订单类型",
      trigger: "change",
    },
  ],
  worker: [
    {
      required: true,
      message: "请输入工作人员姓名",
      trigger: "change",
    },
  ],
  orderPayment: [
    {
      required: true,
      message: "请选择支付渠道",
      trigger: "change",
    },
  ],
  desc: [
    {
      required: true,
      message: "请输入备注",
      trigger: "change",
    },
  ],
};

const AddOrderModal = React.forwardRef(({ onSubmit }, ref) => {
  const [visible, setVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [ruleForm] = Form.useForm();

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    ruleForm.resetFields();
    ruleForm.setFieldsValue({
      ...new CreateRuleForm(),
    });
  };

  const handleOk = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setVisible(false);
      const values = ruleForm.getFieldsValue();
      const value = {
        ...values,
        orderStatus: "待支付",
        orderAmount: Number(values.orderAmount).toFixed(2),
        orderDate: moment().format("YYYY-MM-DD"),
        orderNo: `${moment().format("YYYYMMDD")}-${Math.floor(
          Math.random() * 7000 + 1000
        )}`,
      };
      onSubmit(value);
      handleCancel();
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  React.useImperativeHandle(ref, () => ({
    showModal,
  }));

  return (
    <Modal
      width="800px"
      open={visible}
      title="新增订单"
      onCancel={handleCancel}
      footer={
        <>
          <Button key="back" onClick={handleCancel}>
            关闭
          </Button>
          <Button
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={handleOk}
          >
            提交
          </Button>
        </>
      }
    >
      <Form
        name="AddOrderModal"
        layout="vertical"
        form={ruleForm}
        labelCol={layout.labelCol}
        wrapperCol={layout.wrapperCol}
        onFinishFailed={onFinishFailed}
        initialValues={new CreateRuleForm()}
      >
        <Form.Item
          label="订单金额"
          name="orderAmount"
          rules={rules.orderAmount}
        >
          <Input placeholder="请输入订单金额" type="number" />
        </Form.Item>
        <Form.Item label="订单类型" name="orderType" rules={rules.orderType}>
          <Select
            placeholder="请选择订单类型"
            options={OrderTypeDict.map((item) => ({
              value: item.key,
              label: item.value,
            }))}
          />
        </Form.Item>
        <Form.Item label="工作人员" name="worker" rules={rules.worker}>
          <Input placeholder="请输入工作人员姓名" />
        </Form.Item>
        <Form.Item
          label="支付渠道"
          name="orderPayment"
          rules={rules.orderPayment}
        >
          <Select
            placeholder="请选择支付渠道"
            options={OrderPayMentDict.map((item) => ({
              value: item.key,
              label: item.value,
            }))}
          />
        </Form.Item>
        <Form.Item label="备注" name="desc" rules={rules.desc}>
          <MyEditor
            value={ruleForm.getFieldValue("desc")}
            onInput={(value) => ruleForm.setFieldsValue({ desc: value })}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
});

AddOrderModal.displayName = "AddOrderModal";

AddOrderModal.propTypes = {
  onSubmit: PropTypes.func,
};

export default AddOrderModal;
