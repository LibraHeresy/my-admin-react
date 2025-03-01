import MyCard from "./MyCard.jsx";
import { Progress } from "antd";
import PropTypes from "prop-types";

const App = ({ info = {} }) => {
  return (
    <MyCard
      title="完成进度"
      numberSlot={<span>{info.totalProgress}%</span>}
      descSlot={<span>今日进度 {info.todayProcess}%</span>}
    >
      <Progress
        style={{
          marginBottom: "10px",
        }}
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

export default App;
