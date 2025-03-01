import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

import React, { useRef, useEffect } from "react";
import "./SalesData.less";

const chartOption = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "60px", // 距离容器左侧的距离
    right: "40px", // 距离容器右侧的距离
    top: "10px", // 距离容器顶部的距离
    bottom: "40px", // 距离容器底部的距离
  },
  xAxis: {
    type: "category",
    data: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月",
    ],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130, 120, 200, 150, 80, 70],
      type: "bar",
    },
  ],
};
const App = React.forwardRef((_, ref) => {
  const chartRef = useRef(null);

  const renderChart = () => {
    if (!chartRef.current) {
      const chartDom = document.getElementById("sales-data-chart");
      chartRef.current = echarts.init(chartDom);
    }
    chartRef.current.setOption(chartOption);
  };

  useEffect(() => {
    renderChart();
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
    };
  }, []);

  React.useImperativeHandle(ref, () => ({
    renderChart,
  }));

  return (
    <div className="sales-data">
      <div className="sales-data-chart-wrap">
        <div className="sales-data-title">销售数据</div>
        <div id="sales-data-chart" className="sales-data-chart"></div>
      </div>
    </div>
  );
});

App.displayName = "SalesData";

export default App;
