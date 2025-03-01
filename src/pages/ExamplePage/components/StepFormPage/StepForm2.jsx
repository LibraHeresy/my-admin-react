import { useEffect } from "react";
import { Form, Input, Button } from "antd";
import useStore from "@/store/step";

const StepForm2 = () => {
  const stepStore = useStore();
  const { step, transferInfo } = stepStore;

  const [form] = Form.useForm();

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };

  const rules = {
    paySecret: [
      {
        required: true,
        message: "请输入支付密码",
      },
    ],
  };

  useEffect(() => {
    if (transferInfo) {
      form.setFieldsValue({
        paymentAccount: transferInfo.paymentAccount,
        receiverAccount: transferInfo.receiverAccount,
        receiver: transferInfo.receiver,
        transferAmount: transferInfo.transferAmount,
      });
    }
  }, [transferInfo, form]);

  const onSubmit = () => {
    form.validateFields().then(() => {
      stepStore.setStep(step + 1);
    });
  };

  const prevStep = () => {
    stepStore.setStep(step - 1);
  };

  return (
    <Form
      form={form}
      layout="horizontal"
      initialValues={{}}
      labelCol={layout.labelCol}
      wrapperCol={layout.wrapperCol}
      rules={rules}
    >
      <Form.Item label="付款账户" name="paymentAccount">
        <span>{transferInfo?.paymentAccount}</span>
      </Form.Item>
      <Form.Item label="收款账户" name="receiverAccount">
        <span>{transferInfo?.receiverAccount}</span>
      </Form.Item>
      <Form.Item label="收款人姓名" name="receiver">
        <span>{transferInfo?.receiver}</span>
      </Form.Item>
      <Form.Item label="转账金额" name="transferAmount">
        <span>{transferInfo?.transferAmount}</span>
      </Form.Item>
      <Form.Item label="支付密码" name="paySecret" rules={rules.paySecret}>
        <Input.Password maxLength={20} />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
        <Button type="default" onClick={prevStep}>
          上一步
        </Button>
        <Button style={{ marginLeft: 10 }} type="primary" onClick={onSubmit}>
          下一步
        </Button>
      </Form.Item>
    </Form>
  );
};

export default StepForm2;
