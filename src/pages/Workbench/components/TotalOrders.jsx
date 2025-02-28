import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import "./TotalOrders.less";
import moment from "moment";
import React, { useRef, useEffect } from "react";
import MyCard from "./MyCard.jsx";
import PropTypes from "prop-types";

const today = moment();
const chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "0px", // 距离容器左侧的距离
    right: "0px", // 距离容器右侧的距离
    top: "10px", // 距离容器顶部的距离
    bottom: "0px", // 距离容器底部的距离
  },
  xAxis: {
    type: "category",
    data: [
      today.subtract(7, "days").format("YYYY-MM-DD"),
      today.subtract(6, "days").format("YYYY-MM-DD"),
      today.subtract(5, "days").format("YYYY-MM-DD"),
      today.subtract(4, "days").format("YYYY-MM-DD"),
      today.subtract(3, "days").format("YYYY-MM-DD"),
      today.subtract(2, "days").format("YYYY-MM-DD"),
      today.subtract(1, "days").format("YYYY-MM-DD"),
    ],
  },
  yAxis: {
    type: "value",
    splitLine: {
      show: false, // 隐藏网格线
    },
  },
  series: [
    {
      data: [0, 0, 0, 0, 0, 0, 0],
      type: "bar",
    },
  ],
};

const App = ({ info, ref }) => {
  const chartRef = useRef(null);

  const renderChart = () => {
    if (!chartRef.current) {
      const chartDom = document.getElementById("total-orders-chart");
      chartRef.current = echarts.init(chartDom);
    }
    chartOption.series[0].data =
      info?.past7daysOrders.map((item) => item.orders) || [];
    chartRef.current.setOption(chartOption);
  };

  useEffect(() => {
    return () => {
      // 销毁 echarts
      if (chartRef.current != null) {
        chartRef.current.dispose();
      }
    };
  }, []);

  React.useImperativeHandle(ref, () => ({
    renderChart,
  }));

  return (
    <MyCard
      title="总订单数"
      numberSlot={<span>{info.totalOrders.toLocaleString()}</span>}
      descSlot={<span>每日订单数 {info.todayOrders.toLocaleString()}</span>}
    >
      <div id="total-orders-chart" className="total-orders-chart"></div>
    </MyCard>
  );
};

App.propTypes = {
  info: PropTypes.object,
  ref: PropTypes.object,
};

App.defaultProps = {
  info: {},
  ref: null,
};

export default App;
