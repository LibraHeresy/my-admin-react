import "./ListPageSearch.less";
import {
  OrderStatusDict,
  OrderTypeDict,
  OrderPayMentDict,
} from "../../configs/dict";
import { UpOutlined, DownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Form, Select, Button, Input, Row, Col } from "antd";
import PropTypes from "prop-types";

class CreateRuleForm {
  constructor() {
    // 订单号
    this.orderNo = "";
    // 订单状态
    this.orderStatus = undefined;
    // 订单类型
    this.orderType = undefined;
    // 工作人员
    this.worker = "";
    // 支付渠道
    this.orderPayment = undefined;
  }
}

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 17 },
};

const ListPageSearch = ({ onReset, onSearch }) => {
  const [ruleForm] = Form.useForm();
  const [advanced, setAdvanced] = useState(false);

  const toggleAdvanced = () => {
    setAdvanced(!advanced);
  };

  const handleReset = () => {
    ruleForm.value = new CreateRuleForm();
    onReset();
  };

  const handleSearch = () => {
    onSearch({ ...ruleForm.value });
  };

  return (
    <Form
      name="ListPageSeach"
      layout="horizontal"
      form={ruleForm}
      labelCol={layout.labelCol}
      wrapperCol={layout.wrapperCol}
      initialValues={new CreateRuleForm()}
    >
      <Row>
        <Col span={8}>
          <Form.Item label="订单号" name="orderNo">
            <Input placeholder="请输入订单号" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="订单状态" name="orderStatus">
            <Select
              placeholder="请选择订单状态"
              options={OrderStatusDict.map((item) => ({
                value: item.key,
                label: <span>{item.value}</span>,
              }))}
            ></Select>
          </Form.Item>
        </Col>
        {advanced && (
          <>
            <Col span={8}>
              <Form.Item label="订单类型" name="orderType">
                <Select
                  placeholder="请选择订单类型"
                  options={OrderTypeDict.map((item) => ({
                    value: item.key,
                    label: <span>{item.value}</span>,
                  }))}
                ></Select>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="工作人员" name="worker">
                <Input placeholder="请输入工作人员姓名" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="支付渠道" name="orderPayment">
                <Select
                  placeholder="请选择支付渠道"
                  options={OrderPayMentDict.map((item) => ({
                    value: item.key,
                    label: <span>{item.value}</span>,
                  }))}
                ></Select>
              </Form.Item>
            </Col>
          </>
        )}

        <Col span={(!advanced && 8) || 24}>
          <span
            style={(advanced && { float: "right", overflow: "hidden" }) || {}}
          >
            <Button type="primary" onClick={handleSearch}>
              查询
            </Button>
            <Button
              style={{
                marginLeft: "8px",
              }}
              onClick={handleReset}
            >
              重置
            </Button>
            <Button
              type="link"
              onClick={toggleAdvanced}
              style={{
                marginLeft: "8px",
              }}
            >
              {advanced ? "收起" : "展开"}
              {advanced ? <UpOutlined /> : <DownOutlined />}
            </Button>
          </span>
        </Col>
      </Row>
    </Form>
  );
};

ListPageSearch.propTypes = {
  onReset: PropTypes.func,
  onSearch: PropTypes.func,
};

export default ListPageSearch;
