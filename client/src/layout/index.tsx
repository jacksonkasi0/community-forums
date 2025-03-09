"use client";

import React from "react";

// ** UI Components
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";
import Header from "./Header";
import MobileSidebar from "./MobileSidebar";
import SearchBar from "@/components/SearchBar";

// ** Store
import { useLayoutStore } from "@/store/layout";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { isMobileSidebarOpen, toggleMobileSidebar, isMobileSearchVisible } =
    useLayoutStore();

  return (
    <SidebarProvider
      open={isMobileSidebarOpen}
      onOpenChange={toggleMobileSidebar}
    >
      <Sidebar variant="sidebar" />
      <MobileSidebar />
      <SidebarInset>
        <div className="space-y-6">
          <Header />
          {/* Mobile search bar below header */}
          {isMobileSearchVisible && (
            <div className="md:hidden bg-background border-b border-border px-4 sm:px-6 lg:px-8 pb-4">
              <SearchBar />
            </div>
          )}
        </div>
        <main className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 md:pl-64">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
