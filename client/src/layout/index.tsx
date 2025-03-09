"use client";

import React from "react";

// ** UI Components
import { Sidebar, SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

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
        <div className="space-y-6">
          <Header />
          {/* Mobile search bar below header */}
          {isMobileSearchVisible && (
            <div className="md:hidden bg-background border-b border-border px-4 sm:px-6 lg:px-8 pb-4">
              <SearchBar />
            </div>
          )}
        </div>
        {/* Main content wrapped in a 12-column grid */}
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-6 mx-auto max-w-full">
            {/* Empty left spacer on larger screens */}
            <div className="hidden md:block md:col-span-1 lg:col-span-1" />
            {/* Main content centered */}
            <main
              className={cn(
                "col-span-12 md:col-span-10 lg:col-span-10",
                "w-full"
              )}
            >
              {children}
            </main>
            {/* Empty right spacer on larger screens */}
            <div className="hidden md:block md:col-span-1 lg:col-span-1" />
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;