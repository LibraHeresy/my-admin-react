import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);

import "./ProportionOfSales.less";
import { useEffect, useRef } from "react";
import { Card } from "antd";

const chartOption = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: false,
        position: "center",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        { value: 1048, name: "搜索引擎" },
        { value: 735, name: "门户" },
        { value: 580, name: "邮箱" },
        { value: 484, name: "渠道广告" },
        { value: 300, name: "视频广告" },
      ],
    },
  ],
};

const ProportionOfSales = () => {
  const chartRef = useRef(null);

  const renderChart = () => {
    if (!chartRef.current) {
      const chartDom = document.getElementById("proportion-of-sales-chart");
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

  return (
    <div className="proportion-of-sales">
      <Card
        title="销售渠道占比"
        style={{
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <div>
          <div
            id="proportion-of-sales-chart"
            className="proportion-of-sales-chart"
          ></div>
        </div>
      </Card>
    </div>
  );
};

export default ProportionOfSales;
