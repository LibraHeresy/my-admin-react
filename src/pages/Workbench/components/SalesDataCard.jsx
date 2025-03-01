import { useState, useEffect, useRef } from "react";
import SalesData from "./SalesData";
import VisitsData from "./VisitsData";
import moment from "moment";
import { Card, DatePicker, Button } from "antd";

const { RangePicker } = DatePicker;

const dateFormat = "YYYY-MM-DD";
const tabList = [
  {
    key: "sales",
    tab: "销售",
  },
  {
    key: "visits",
    tab: "访问",
  },
];
const dateList = [
  {
    key: "前6月",
    value: "前6月",
  },
  {
    key: "前3月",
    value: "前3月",
  },
  {
    key: "前30天",
    value: "前30天",
  },
  {
    key: "前7天",
    value: "前7天",
  },
];

const SalesDataCard = () => {
  const [dateRange, setDateRange] = useState(["", ""]);
  const [tab, setTab] = useState("sales");
  const refSalesData = useRef(null);
  const refVisitsData = useRef(null);

  useEffect(() => {
    if (tab === "sales" && refSalesData.current) {
      refSalesData.current.renderChart();
    } else if (tab === "visits" && refVisitsData.current) {
      refVisitsData.current.renderChart();
    }
  }, [tab]);

  const onTabChange = (key) => {
    setTab(key);
  };

  const handleDateClick = (key) => {
    const endTime = moment();
    let startTime = "";

    switch (key) {
      case "前6月":
        startTime = moment().subtract(6, "months");
        break;
      case "前3月":
        startTime = moment().subtract(3, "months");
        break;
      case "前30天":
        startTime = moment().subtract(30, "days");
        break;
      case "前7天":
        startTime = moment().subtract(7, "days");
        break;
      default:
        break;
    }
    setDateRange([startTime, endTime]);
  };

  return (
    <Card
      style={{ width: "100%", borderRadius: "10px" }}
      tabList={tabList}
      activeTabKey={tab}
      onTabChange={onTabChange}
      tabBarExtraContent={
        <>
          {dateList.map((item) => (
            <Button
              type="link"
              key={item.key}
              onClick={() => handleDateClick(item.key)}
            >
              {item.value}
            </Button>
          ))}
          <RangePicker
            value={dateRange}
            format={dateFormat}
            onChange={(dates) => setDateRange(dates)}
          />
        </>
      }
    >
      {tab === "sales" && <SalesData ref={refSalesData} />}
      {tab === "visits" && <VisitsData ref={refVisitsData} />}
    </Card>
  );
};

export default SalesDataCard;
