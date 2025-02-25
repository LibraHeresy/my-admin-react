import { create } from "zustand";

const useStore = create((set) => ({
  step: 0,
  transferInfo: null,
  setStep: (data) => set(() => ({ step: data })),
  setTransferInfo: (data) => set(() => ({ transferInfo: data })),
}));

export default useStore;
