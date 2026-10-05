import { create } from "zustand";
import api from "/services/api";

export const useMenuStore = create((set, get) => ({
  menuTree: [],
  loading: false,
  fetched: false,

  fetchMenuTree: async () => {
    if (get().fetched) return;
    set({ loading: true });
    try {
      const res = await api.get("/categories/MTree");
      set({ menuTree: res.data, loading: false, fetched: true });
    } catch {
      set({ loading: false });
    }
  },
}));
