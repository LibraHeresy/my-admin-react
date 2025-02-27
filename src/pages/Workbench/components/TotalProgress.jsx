import MyCard from "./MyCard";
import { Progress } from "antd";
import PropTypes from "prop-types";

const App = ({ info }) => {
  return (
    <MyCard
      title="完成进度"
      numberSlot={<span>{info.totalProgress}%</span>}
      descSlot={<span>今日进度 {info.todayProcess}%</span>}
    >
      <Progress
        style="margin-bottom: 10px"
        percent={info.totalProgress}
        showInfo={false}
        strokeColor="#748EDE"
      />
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
