import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      order: {
        orderNo: "20200801-0003",
        orderAmount: "300.00",
        orderStatus: "已支付",
        orderDate: "2020-08-01",
        orderType: "采购单",
        worker: "王五",
        orderPayment: "支付宝",
      },
      setOrder: (data) => set(() => ({ order: data })),
    }),
    {
      name: "order-storage",
    }
  )
);

export default useStore;
