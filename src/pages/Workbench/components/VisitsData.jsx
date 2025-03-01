import * as echarts from "echarts/core";
import { TooltipComponent, GridComponent } from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([GridComponent, BarChart, CanvasRenderer, TooltipComponent]);

import "./VisitsData.less";
import React, { useEffect, useRef } from "react";

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
      data: [120, 200, 150, 80, 70, 110, 130, 150, 80, 70, 110, 130],
      type: "bar",
    },
  ],
};
const App = React.forwardRef((_, ref) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // 销毁 echarts
      if (chartRef.current != null) {
        chartRef.current.dispose();
      }
    };
  }, []);

  const renderChart = () => {
    if (!chartRef.current) {
      const chartDom = document.getElementById("visits-data-chart");
      chartRef.current = echarts.init(chartDom);
    }
    chartRef.current.setOption(chartOption);
  };

  React.useImperativeHandle(ref, () => ({
    renderChart,
  }));

  return (
    <div className="visits-data">
      <div className="visits-data-chart-wrap">
        <div className="visits-data-title">访问数据</div>
        <div id="visits-data-chart" className="visits-data-chart"></div>
      </div>
    </div>
  );
});

App.displayName = "VisitsData";

export default App;
