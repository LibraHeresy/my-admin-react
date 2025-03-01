import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enUS from "./enUS.json";
import zhCN from "./zhCN.json";

const resources = {
  enUS: { translation: enUS },
  zhCN: { translation: zhCN },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "zhCN", // 默认语言
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
