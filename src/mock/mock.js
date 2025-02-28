import Mock from "mockjs";

Mock.mock("/api/workbench/getData", "get", {
  code: 200,
  message: "成功",
  data: Mock.mock({
    "totalSales|200000-2000000": 1,
    "todaySales|10000-100000": 1,
    "salesIncreasePrecent|0-2000": 1,
    "salesDecreasePrecent|0-2000": 1,
    "totalVistors|100000-1000000": 1,
    "todayVistors|10000-100000": 1,
    "past7daysVisitors|7": [
      {
        "visitors|10000-100000": 1,
      },
    ],
    "totalOrders|10000000-100000000": 1,
    "todayOrders|10000-100000": 1,
    "past7daysOrders|7": [
      {
        "orders|10000-100000": 1,
      },
    ],
    "totalProgress|70-100": 1,
    "todayProcess|10-20": 1,
  }),
});
