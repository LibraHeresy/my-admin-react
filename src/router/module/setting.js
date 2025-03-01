import { lazy } from "react";
import { SettingOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/setting",
    name: "个人设置",
    icon: SettingOutlined,
    i18n: "personalSettings",
    Component: lazy(() => import("../../pages/Setting/Setting.jsx")),
  },
];

export default routes;
