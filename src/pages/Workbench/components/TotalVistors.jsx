import * as echarts from "echarts/core";
import { GridComponent } from "echarts/components";
import { LineChart } from "echarts/charts";
import { UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

import "./TotalVistors.less";
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

const TotalVistors = React.forwardRef(({ info = {} }, ref) => {
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
      const chartDom = document.getElementById("total-vistors-chart");
      chartRef.current = echarts.init(chartDom);
    }
    chartOption.series[0].data =
      info?.past7daysVistors.map((item) => item.vistors) || [];
    chartRef.current.setOption(chartOption);
  };

  React.useImperativeHandle(ref, () => ({
    renderChart,
  }));

  return (
    <MyCard
      title="总访客数"
      numberSlot={<span>{info.totalVistors?.toLocaleString()}</span>}
      descSlot={<span>每日访客数 {info.todayVistors?.toLocaleString()}</span>}
    >
      <div id="total-vistors-chart" className="total-vistors-chart"></div>
    </MyCard>
  );
});

TotalVistors.displayName = "TotalVistors";

TotalVistors.propTypes = {
  info: PropTypes.object,
};

export default TotalVistors;
