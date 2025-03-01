export const ListPageColumns = [
  {
    title: "序号",
    dataIndex: "index",
    scopedSlots: { customRender: "index" },
  },
  {
    title: "订单号",
    dataIndex: "orderNo",
    scopedSlots: { customRender: "orderNo" },
  },
  {
    title: "订单金额",
    dataIndex: "orderAmount",
  },
  {
    title: "订单状态",
    dataIndex: "orderStatus",
  },
  {
    title: "下单日期",
    dataIndex: "orderDate",
  },
  {
    title: "订单类型",
    dataIndex: "orderType",
  },
  {
    title: "工作人员",
    dataIndex: "worker",
  },
  {
    title: "支付渠道",
    dataIndex: "orderPayment",
  },
];
