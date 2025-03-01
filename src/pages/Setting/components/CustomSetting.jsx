import { List, Switch } from "antd";
import { useState } from "react";
import { ColorPicker } from "antd";
import { throttle } from "lodash"

const ListOne = () => {
  const [theme, setTheme] = useState("dark");
  const handleSwitchChange = (checked) => {
    if (checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <List.Item
      extra={
        <Switch
          checkedChildren="暗色"
          unCheckedChildren="浅色"
          defaultChecked
          checked={theme === "dark"}
          onChange={handleSwitchChange}
        />
      }
    >
      <List.Item.Meta title="风格配色" description="整体风格配色设置" />
    </List.Item>
  );
};

const ListTwo = () => {
  const [color, setColor] = useState("#ffffff");
  const handleColorChange = throttle((value) => {
    setColor(value);
  });

  return (
    <List.Item
      extra={<ColorPicker value={color} onChange={handleColorChange} />}
    >
      <List.Item.Meta title="主题色" description="页面风格配色设置" />
    </List.Item>
  );
};

const CustomSetting = () => {
  return (
    <div className="custom-setting">
      <List itemLayout="horizontal">
        <ListOne />
        <ListTwo />
      </List>
    </div>
  );
};

export default CustomSetting;
