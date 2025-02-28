import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import "./VisitsData.less";
import moment from "moment";
import MyCard from "./MyCard.jsx";
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

const today = moment();
const chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "cross",
    },
  },
  grid: {
    left: "5px", // 距离容器左侧的距离
    right: "5px", // 距离容器右侧的距离
    top: "10px", // 距离容器顶部的距离
    bottom: "0px", // 距离容器底部的距离
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
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
      type: "line",
      smooth: 0.6,
      symbol: "none",
      areaStyle: {},
    },
  ],
};

const App = ({ info, ref }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  const renderChart = () => {
    if (!chartRef.current) {
      const chartDom = document.getElementById("total-visitors-chart");
      chartRef.current = echarts.init(chartDom);
    }
    chartOption.series[0].data =
      info?.past7daysVisitors.map((item) => item.visitors) || [];
    chartRef.current.setOption(chartOption);
  };

  React.useImperativeHandle(ref, () => ({
    renderChart,
  }));

  return (
    <MyCard
      title="总访客数"
      numberSlot={<span>{info.TotalVistors.toLocaleString()}</span>}
      descSlot={<span>每日访客数 {info.todayVistors.toLocaleString()}</span>}
    >
      <div id="total-visitors-chart" className="total-visitors-chart"></div>
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
