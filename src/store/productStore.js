// src/store/productStore.js
import { create } from "zustand";
import api from "/services/api";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,

  // دریافت همه محصولات از دیتابیس SQLite
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/products");
      set({ products: response.data, loading: false });
    } catch (err) {
      set({
        error: err.response?.data?.message || "خطا در دریافت اطلاعات از سرور",
        loading: false,
      });
    }
  },
  catProducts: [],
  catLoading: false,
  catError: null,

  fetchSelectedProduct: async (category, subCategory) => {
    set({ catLoading: true, catError: null });
    try {
      const res = await api.get("/products", {
        params: { category, subCategory },
      });
      set({ catProducts: res.data, catLoading: false });
    } catch (err) {
      set({ catError: err.message, catLoading: false });
    }
  },
}));
