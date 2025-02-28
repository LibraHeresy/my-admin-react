import "./Workbench.less";
import { getWorkbenchData } from "@/api/common";
import SalesDataCard from "./components/SalesDataCard.jsx";
import OnlineTopSearch from "./components/OnlineTopSearch.jsx";
import ProportionOfSales from "./components/ProportionOfSales.jsx";
import TotalSales from "./components/TotalSales.jsx";
import TotalVistors from "./components/TotalVistors.jsx";
import TotalOrders from "./components/TotalOrders.jsx";
import TotalProgress from "./components/TotalProgress.jsx";
import { useEffect, useState, useRef } from "react";
import { Skeleton } from "antd";

class CreateInfo {
  constructor() {
    // 销售总额
    this.totalSales = 1021214;
    // 今日销售额
    this.todaySales = 24355;
    // 销售额增长率
    this.salesIncreasePrecent = 50;
    // 销售额下降率
    this.salesDecreasePrecent = 50;
    // 总访客数
    this.totalVistors = 830355;
    // 今日访客数
    this.todayVistors = 93036;
    // 7天访客数
    this.past7daysVisitors = [
      { visitors: 85738 },
      { visitors: 11710 },
      { visitors: 19806 },
      { visitors: 57725 },
      { visitors: 60947 },
      { visitors: 65521 },
      { visitors: 18719 },
    ];
    // 总订单数
    this.totalOrders = 36394641;
    // 今日订单数
    this.todayOrders = 22320;
    // 7天订单数
    this.past7daysOrders = [
      { orders: 74753 },
      { orders: 94412 },
      { orders: 12363 },
      { orders: 19583 },
      { orders: 69487 },
      { orders: 16963 },
      { orders: 15375 },
    ];
    // 完成进度
    this.totalProgress = 76;
    // 今日进度
    this.todayProcess = 16;
  }
}

const App = () => {
  const [info, setInfo] = useState(new CreateInfo());
  const [isLoading, setIsLoading] = useState(true);
  const refTotalVistors = useRef(null);
  const refTotalOrders = useRef(null);

  useEffect(() => {
    getWorkbenchData({}).then((res) => {
      if (res.code === 200) {
        setInfo(res.data);
      }
    }).finally(() => {
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (refTotalVistors.current && refTotalOrders.current) {
      refTotalVistors.current.renderChart();
      refTotalOrders.current.renderChart();
    }
  }, [info]);

  return (
    <>
      {isLoading && (
        <div className="my-workbench">
          <div className="desc-cards">
            <div className="desc-card skeleton">
              <Skeleton active={true} loading={isLoading} />
            </div>
            <div className="desc-card skeleton">
              <Skeleton active={true} loading={isLoading} />
            </div>
            <div className="desc-card skeleton">
              <Skeleton active={true} loading={isLoading} />
            </div>
            <div className="desc-card skeleton">
              <Skeleton active={true} loading={isLoading} />
            </div>
          </div>

          <div className="sales-data-card skeleton">
            <Skeleton active={true} loading={isLoading} />
          </div>

          <div className="info-cards">
            <div className="info-card skeleton">
              <Skeleton active={true} loading={isLoading} />
            </div>
            <div className="info-card skeleton">
              <Skeleton active={true} loading={isLoading} />
            </div>
          </div>
        </div>
      )}
      {!isLoading && (
        <div className="my-workbench">
          <div className="desc-cards">
            <TotalSales className="desc-card" info={info} />
            <TotalVistors ref={refTotalVistors} className="desc-card" info={info} />
            <TotalOrders ref={refTotalOrders} className="desc-card" info={info} />
            <TotalProgress className="desc-card" info={info} />
          </div>

          <SalesDataCard className="sales-data-card" />

          <div className="info-cards">
            <OnlineTopSearch className="info-card" />
            <ProportionOfSales className="info-card" />
          </div>
        </div>
      )}
    </>
  );
};

export default App;