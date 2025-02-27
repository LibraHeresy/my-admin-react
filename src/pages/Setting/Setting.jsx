import { useState, useMemo } from "react";
import "./Setting.less";
import { Menu } from "antd";
import { UserOutlined, SettingOutlined } from "@ant-design/icons";
import CustomSetting from "./components/CustomSetting";
import PersonInfo from "./components/PersonInfo";
const App = () => {
  const menus = useMemo(
    () => [
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
    ],
    []
  );

  const [activeKey, setActiveKey] = useState("1");

  const handleMenuSelect = (e) => {
    setActiveKey(e.key);
  };

  const menu = useMemo(() => {
    return menus.find((item) => item.key === activeKey);
  }, [activeKey, menus]);

  return (
    <div className="my-setting">
      <Menu
        className="menus"
        defaultSelectedKeys={[menus[0]?.key]}
        selectedKeys={[activeKey]}
        mode="inline"
        theme="light"
        items={menus}
        onClick={handleMenuSelect}
      ></Menu>
      <div className="content">
        <h2>{menu.label || ""}</h2>
        {activeKey === "1" && <PersonInfo />}
        {activeKey === "2" && <CustomSetting />}
      </div>
    </div>
  );
};

export default App;
