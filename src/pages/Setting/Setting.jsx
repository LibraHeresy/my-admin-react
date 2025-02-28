import { useState } from "react";
import "./Setting.less";
import { Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import CustomSetting from "./components/CustomSetting";
import PersonInfo from "./components/PersonInfo";

const App = () => {
  const menus = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "个人信息",
    },
    {
      key: "2",
      icon: <SettingOutlined />,
      label: "自定义设置",
    },
  ];

  const [activeKey, setActiveKey] = useState("1");

  const handleMenuSelect = (e) => {
    setActiveKey(e.key);
  };

  const renderContent = (key) => {
    switch (key) {
      case "1":
        return <PersonInfo />;
      case "2":
        return <CustomSetting />;
      default:
        return null;
    }
  };

  return (
    <div className="my-setting">
      <Menu
        className="menus"
        selectedKeys={[activeKey]}
        mode="inline"
        theme="light"
        items={menus}
        onClick={handleMenuSelect}
      />
      <div className="content">
        <h2>{menus.find((item) => item.key === activeKey)?.label || ""}</h2>
        {renderContent(activeKey)}
      </div>
    </div>
  );
};

export default App;