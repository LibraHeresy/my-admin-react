import MyCard from "./MyCard.jsx";
import { useMemo } from "react";
import PropTypes from "prop-types";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

const App = ({ info = {} }) => {
  const salesIncreasePercent = useMemo(() => {
    return ((info.todaySales / info.totalSales) * 100).toFixed(2);
  }, [info]);

  return (
    <MyCard
      title="销售总额"
      numberSlot={<span>￥{info.totalSales?.toLocaleString()}</span>}
      descSlot={<span>每日销售额 ￥{info.todaySales?.toLocaleString()}</span>}
    >
      <div
        style={{
          marginBottom: "10px",
          display: "flex",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "14px",
            }}
          >
            新增 {salesIncreasePercent}%{" "}
          </span>
          <CaretUpOutlined
            style={{
              color: "red",
              fontSize: "14px",
            }}
          />
        </div>
        <div
          style={{
            marginLeft: "24px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
            }}
          >
            下降 {salesIncreasePercent}%{" "}
          </span>
          <CaretDownOutlined
            style={{
              color: "green",
              fontSize: "14px",
            }}
          />
        </div>
      </div>
    </MyCard>
  );
};

App.propTypes = {
  info: PropTypes.object,
};

export default App;
