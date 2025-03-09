import React from "react";

// ** Components
import SidebarNavigation from "./SidebarNavigation";
import SidebarTags from "./SidebarTags";
import SidebarFooter from "./SidebarFooter";
import WelcomeCard from "./WelcomeCard";

// ** Utils
import { cn } from "@/lib/utils";

// ** Auth
import { SignedOut } from "@clerk/nextjs";

const AsidePrimarySidebar: React.FC = () => {
  return (
    <aside
      className={cn(
        "flex h-max p-4 w-full bg-sidebar flex-col space-y-6 overflow-y-auto border-r text-sidebar-foreground scrollbar-hide"
      )}
    >
      <SignedOut>
        <WelcomeCard />
      </SignedOut>
      <SidebarNavigation />
      <SidebarTags />
      <SidebarFooter />
    </aside>
  );
};

export default AsidePrimarySidebar;
