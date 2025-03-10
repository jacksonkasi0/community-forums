"use client";

import React, { Suspense } from "react";

// ** UI Components
import {
  Sidebar,
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

// ** Custom Components
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
        {/* Header section */}
        <Header />
        
        {/* Content wrapper with padding for header */}
        <div className="pt-16"> {/* Fixed padding for constant header height */}
          {/* Mobile search bar below header */}
          {isMobileSearchVisible && (
            <div className="md:hidden bg-background border-b border-border px-4 sm:px-6 lg:px-8 pb-4">
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
          )}

          {/* Main content */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <main className="min-h-screen">{children}</main>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
