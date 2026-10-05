import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLoginStore = create(
  persist(
    (set) => ({
      loggedIN: false,
      user: null,
      login: (user) => set({ loggedIN: true, user }),
      logout: () => set({ loggedIN: false, user: null }),
    }),
    { name: "login-storage" },
  ),
);
