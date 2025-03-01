import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      theme: "dark",
      localLanguage: "zhCN",
      color: "#1890ff",
      setTheme: (data) => set(() => ({ theme: data })),
      setLocalLanguage: (data) => set(() => ({ localLanguage: data })),
      setColor: (data) => set(() => ({ color: data })),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useStore;
