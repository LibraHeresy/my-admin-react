import { useState } from "react";
import { Card, List, Descriptions } from "antd";

const DetailPage = () => {
  const [order] = useState({});

  return (
    <Card style={{ borderRadius: "10px", border: "none" }}>
      <List itemLayout="horizontal">
        <List.Item>
          <List.Item.Meta
            description={
              <Descriptions title="订单信息">
                <Descriptions.Item label="订单号">
                  {order.orderNo}
                </Descriptions.Item>
                <Descriptions.Item label="订单金额">
                  {order.orderAmount}
                </Descriptions.Item>
                <Descriptions.Item label="订单状态">
                  {order.orderStatus}
                </Descriptions.Item>
                <Descriptions.Item label="下单日期">
                  {order.orderDate}
                </Descriptions.Item>
                <Descriptions.Item label="订单类型">
                  {order.orderType}
                </Descriptions.Item>
              </Descriptions>
            }
          />
        </List.Item>
        <List.Item>
          <List.Item.Meta
            description={
              <Descriptions title="其他信息">
                <Descriptions.Item label="工作人员">
                  {order.worker}
                </Descriptions.Item>
                <Descriptions.Item label="支付渠道">
                  {order.orderPayment}
                </Descriptions.Item>
                <Descriptions.Item label="备注">{order.desc}</Descriptions.Item>
              </Descriptions>
            }
          />
        </List.Item>
      </List>
    </Card>
  );
};

export default DetailPage;
