import { Card, Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        borderRadius: "10px",
      }}
      variant="borderless"
    >
      <Result
        class="my-body"
        status="500"
        title="500"
        subTitle="Sorry, the server is wrong."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            返回工作台
          </Button>
        }
      />
    </Card>
  );
};

export default App;
