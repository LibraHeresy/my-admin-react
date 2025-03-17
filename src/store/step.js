import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      step: 0,
      transferInfo: null,
      setStep: (data) => set(() => ({ step: data })),
      setTransferInfo: (data) => set(() => ({ transferInfo: data })),
    }),
    {
      name: "step-storage",
    }
  )
);

export default useStore;
