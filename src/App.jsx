import "./App.css";
import "./index.css";
import "./style/common.less";
import useStore from "./store/theme.js";
import { ConfigProvider } from "antd";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import enUS from "antd/locale/en_US";
import zhCN from "antd/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n.js";
function App() {
  const themeStore = useStore();
  const { color, localLanguage } = themeStore;

  const dict = {
    enUS,
    zhCN,
  };

  useEffect(() => {
    dayjs.locale(localLanguage === "zhCN" ? "zh-cn" : "en");
  }, [localLanguage]);

  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider
        locale={dict[localLanguage]}
        theme={{
          token: { colorPrimary: color },
        }}
      >
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;
