import { lazy } from "react";
import { DesktopOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/workbench",
    name: "工作台",
    icon: DesktopOutlined,
    Component: lazy(() => import("../../pages/Workbench/Workbench.jsx")),
  },
];

export default routes;