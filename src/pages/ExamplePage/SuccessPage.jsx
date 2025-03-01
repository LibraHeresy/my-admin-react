import { Card, Result, Steps, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./SuccessPage.less";

const SuccessPage = () => {
  const navigate = useNavigate();

  return (
    <Card style={{ borderRadius: "10px", border: "none" }}>
      <Result
        status="success"
        title="恭喜你成功订购本商品！"
        subTitle="订单号: 20200808-1111 虚拟商品 5 分钟后到账"
        extra={[
          <Button key="list" type="primary" onClick={() => navigate("/list")}>
            返回列表
          </Button>,
          <Button key="home" onClick={() => navigate("/workbench")}>
            返回工作台
          </Button>,
        ]}
      >
        <div>
          <div className="step-title">订单进度</div>
          <Steps current={0}>
            <Steps.Step title="待入库" description="商品待入库" />
            <Steps.Step title="待发货" description="商品待发货" />
            <Steps.Step title="已发货" description="商品已发货" />
            <Steps.Step title="已签收" description="商品已签收" />
          </Steps>
        </div>
      </Result>
    </Card>
  );
};

export default SuccessPage;
