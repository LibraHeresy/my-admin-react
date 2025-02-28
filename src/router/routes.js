import { lazy } from "react";
import Workbenches from "./module/workbench.js";
import ExceptionPage from "./module/exception-page.js";
import ExamplePage from "./module/example-page.js";
import Setting from "./module/setting.js";

const routes = [
  {
    path: "/login",
    hideInMenu: true,
    Component: lazy(() => import("../pages/Login/Login.jsx")),
  },
  {
    path: "/",
    name: "首页",
    Component: lazy(() => import("../layout/BasicLayout.jsx")),
    children: [
      ...Workbenches,
      ...ExamplePage,
      ...ExceptionPage,
      ...Setting,
    ],
  },
  {
    path: "*",
    hideInMenu: true,
    Component: lazy(() => import("../pages/ExceptionPage/NotFound.jsx")),
  }
];

export default routes;
