import { Result, Descriptions, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useStore } from "@/store/step";

const StepForm3 = () => {
  const navigate = useNavigate();
  const stepStore = useStore();
  const { transferInfo } = stepStore;

  const handleConfirm = () => {
    navigate("/");
  };

  return (
    <div>
      <Result title="转账成功">
        <Descriptions column={1} bordered size="small">
          <Descriptions.Item label="付款账户">
            {transferInfo.paymentAccount}
          </Descriptions.Item>
          <Descriptions.Item label="收款账户">
            {transferInfo.receiverAccount}
          </Descriptions.Item>
          <Descriptions.Item label="收款人姓名">
            {transferInfo.receiver}
          </Descriptions.Item>
          <Descriptions.Item label="转账金额">
            {transferInfo.transferAmount}
          </Descriptions.Item>
        </Descriptions>
        <Button
          style={{ marginTop: "24px" }}
          type="primary"
          onClick={handleConfirm}
        >
          确定
        </Button>
      </Result>
    </div>
  );
};

export default StepForm3;
