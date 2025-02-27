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
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
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
