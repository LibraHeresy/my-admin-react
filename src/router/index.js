import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const App = lazy(() => import("./App"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [],
  },
]);

export default routes;