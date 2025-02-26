import { lazy } from "react";
import { DesktopOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/login",
    hideInMenu: true,
    Component: lazy(() => import("../pages/Login/Login.jsx")),
  },
  {
    path: "/",
    name: "首页",
    icon: DesktopOutlined,
    Component: lazy(() => import("../layout/BasicLayout.jsx")),
  },
];

export default routes;
