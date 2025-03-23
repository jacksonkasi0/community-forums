"use client";

import React, { Suspense, useEffect } from "react";

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

// ** Hooks
import { useMediaQuery } from "@/hooks/use-media-query";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { 
    isMobileSidebarOpen, 
    toggleMobileSidebar, 
    closeMobileSidebar,
    isMobileSearchVisible 
  } = useLayoutStore();
  
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Close mobile sidebar when navigating or switching to desktop
  useEffect(() => {
    if (isDesktop) {
      closeMobileSidebar();
    }
  }, [isDesktop, closeMobileSidebar]);

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
            <div className="md:hidden bg-background border-b border-border px-4 sm:px-6 lg:px-8 pb-4 mt-4">
              <Suspense>
                <SearchBar />
              </Suspense>
            </div>
          )}

          {/* Main content */}
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1440px] mx-auto">
              <main className="min-h-screen">{children}</main>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
