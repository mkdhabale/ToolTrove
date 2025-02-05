import { create } from "zustand";

const useZustandStore = create((set) => {
  return {
    count: 0,
    listOfProducts: [],
    actions: {
      handleIncrementCount: () =>
        set((state) => ({
          count: state.count + 1,
        })),

      handleDecrementCount: () =>
        set((state) => ({
          count: state.count - 1,
        })),

      fetchListOfProducts: async () => {
        const apiResponse = await fetch("https://dummyjson.com/products");
        const result = await apiResponse.json();

        set({
          listOfProducts: result?.products,
        });
      },
    },
  };
});

export const useActions = () => useZustandStore((state) => state.actions);

export default useZustandStore;
