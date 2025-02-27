import { lazy } from "react";
import { SettingOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/setting",
    name: "个人设置",
    icon: SettingOutlined,
    Component: lazy(() => import("../../pages/Setting/Setting.jsx")),
  },
];

export default routes;