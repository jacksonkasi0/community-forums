// store/layout.ts
import { create } from "zustand";

interface LayoutState {
  isMobileSearchVisible: boolean;
  toggleMobileSearchVisibility: () => void;
  hideMobileSearch: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isMobileSearchVisible: false,
  toggleMobileSearchVisibility: () =>
    set((state) => ({ isMobileSearchVisible: !state.isMobileSearchVisible })),
  hideMobileSearch: () => set({ isMobileSearchVisible: false }),
}));