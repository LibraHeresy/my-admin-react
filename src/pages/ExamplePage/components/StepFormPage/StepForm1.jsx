import { useEffect } from "react";
import { Form, Select, Input, Button } from "antd";
import useStore from "@/store/step";

const StepForm1 = () => {
  const stepStore = useStore();
  const { step, transferInfo } = stepStore;

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  const rules = {
    paymentAccount: [
      {
        required: true,
        message: "请选择付款账户",
      },
    ],
    receiverAccount: [
      {
        required: true,
        message: "请选择收款账户",
      },
    ],
    receiver: [
      {
        required: true,
        message: "请输入收款人姓名",
      },
    ],
    transferAmount: [
      {
        required: true,
        message: "请输入转账金额",
      },
    ],
  };

  useEffect(() => {
    if (transferInfo) {
      form.setFieldsValue(transferInfo);
    }
  }, [transferInfo, form]);

  const onSubmit = () => {
    form.validateFields().then((values) => {
      stepStore.setTransferInfo(values);
      stepStore.setStep(step + 1);
    });
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      initialValues={{
        paymentAccount: "my-admin-vue3@alipay.com", // 设置一个默认值
        receiverAccount: "test@example.com",
        receiver: "Alex",
        transferAmount: "100.00",
      }}
      labelCol={layout.labelCol}
      wrapperCol={layout.wrapperCol}
      rules={rules}
    >
      <Form.Item
        label="付款账户"
        name="paymentAccount"
        rules={rules.paymentAccount}
      >
        <Select placeholder="my-admin-vue3@alipay.com">
          <Select.Option value="my-admin-vue3@alipay.com">
            my-admin-vue3@alipay.com
          </Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="收款账户"
        name="receiverAccount"
        rules={rules.receiverAccount}
      >
        <Input maxLength={50} />
      </Form.Item>
      <Form.Item label="收款人姓名" name="receiver" rules={rules.receiver}>
        <Input maxLength={20} />
      </Form.Item>
      <Form.Item
        label="转账金额"
        name="transferAmount"
        rules={rules.transferAmount}
      >
        <Input type="number" maxLength={20} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button type="primary" onClick={onSubmit}>
          下一步
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StepForm1;
