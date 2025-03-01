import { lazy } from "react";
import { BulbOutlined } from "@ant-design/icons";

const routes = [
  {
    path: "/example-page",
    name: "示例页",
    icon: BulbOutlined,
    i18n: "examplePage",
    Component: lazy(() => import("../../layout/PageView.jsx")),
    children: [
      {
        index: true,
        path: "/example-page/list-page",
        name: "列表页",
        i18n: "listPage",
        Component: lazy(() => import("../../pages/ExamplePage/ListPage.jsx")),
      },
      {
        path: "/example-page/detail-page/:id",
        name: "详情页",
        i18n: "detailPage",
        Component: lazy(() => import("../../pages/ExamplePage/DetailPage.jsx")),
      },
      {
        path: "/example-page/success-page",
        name: "成功页",
        i18n: "successPage",
        Component: lazy(() =>
          import("../../pages/ExamplePage/SuccessPage.jsx")
        ),
      },
      {
        path: "/example-page/step-form-page",
        name: "分布表单页",
        i18n: "stepFormPage",
        Component: lazy(() =>
          import("../../pages/ExamplePage/StepFormPage.jsx")
        ),
      },
    ],
  },
];

export default routes;
