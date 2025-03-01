import { Card, Result, Button } from "antd";
import { useNavigate } from "react-router-dom";

const NoPermission = () => {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        borderRadius: "10px",
      }}
      variant="borderless"
    >
      <Result
        className="my-body"
        status="403"
        title="403"
        subTitle="Sorry, you are not authorized to access this page."
        extra={
          <Button type="primary" onClick={() => navigate("/")}>
            返回工作台
          </Button>
        }
      />
    </Card>
  );
};

export default NoPermission;
