import { create } from "zustand";

const useStore = create((set) => ({
  theme: "dark",
  localLanguage: "zhCN",
  color: '#1890ff',
  setTheme: (data) => set(() => ({ theme: data })),
  setLocalLanguage: (data) => set(() => ({ localLanguage: data })),
  setColor: (data) => set(() => ({ color: data })),
}));

export default useStore;
