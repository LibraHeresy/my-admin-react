import MyCard from "./MyCard";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const App = ({ info }) => {
  const salesIncreasePercent = useMemo(() => {
    return ((info.todaySales / info.totalSales) * 100).toFixed(2);
  }, [info]);

  return (
    <MyCard
      title="销售总额"
      numberSlot={<span>￥{info.totalSales.toLocaleString()}</span>}
      descSlot={<span>每日销售额 ￥{info.todaySales.toLocaleString()}</span>}
    >
      <div style="margin-bottom: 10px; display: flex">
        <div>
          <span style="font-size: 14px"> 新增 {salesIncreasePercent}% </span>
          <CaretUpOutlined style="color: red; font-size: 14px" />
        </div>
        <div style="margin-left: 24px">
          <span style="font-size: 14px"> 下降 {salesIncreasePercent}% </span>
          <CaretDownOutlined style="color: green; font-size: 14px" />
        </div>
      </div>
    </MyCard>
  );
};

App.propTypes = {
  info: PropTypes.object,
};

App.defaultProps = {
  info: {},
};

export default App;
