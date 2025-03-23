import { create } from "zustand";

interface LayoutState {
  isMobileSidebarOpen: boolean;
  toggleMobileSidebar: () => void;
  closeMobileSidebar: () => void;
  isMobileSearchVisible: boolean;
  toggleMobileSearchVisibility: () => void;
  hideMobileSearch: () => void;
}

export const useLayoutStore = create<LayoutState>((set) => ({
  isMobileSidebarOpen: false,
  toggleMobileSidebar: () =>
    set((state) => ({ isMobileSidebarOpen: !state.isMobileSidebarOpen })),
  closeMobileSidebar: () => set({ isMobileSidebarOpen: false }),
  isMobileSearchVisible: false,
  toggleMobileSearchVisibility: () =>
    set((state) => ({ isMobileSearchVisible: !state.isMobileSearchVisible })),
  hideMobileSearch: () => set({ isMobileSearchVisible: false }),
}));
