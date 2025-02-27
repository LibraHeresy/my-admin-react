import { lazy } from "react";
import { WarningOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/exception-page",
    name: "异常页",
    icon: WarningOutlined,
    Component: lazy(() => import("../../layout/PageView.jsx")),
    children: [
      {
        index: true,
        path: "/exception-page/no-permission",
        name: "403",
        Component: lazy(() => import("../../pages/ExceptionPage/NoPermission.jsx")),
      },
      {
        path: "/exception-page/not-found",
        name: "404",
        Component: lazy(() => import("../../pages/ExceptionPage/NotFound.jsx")),
      },
      {
        path: "/exception-page/server-error",
        name: "500",
        Component: lazy(() => import("../../pages/ExceptionPage/ServerError.jsx")),
      }
    ]
  },
];

export default routes;