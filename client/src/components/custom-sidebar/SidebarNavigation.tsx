"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ** Utils
import { cn } from "@/lib/utils";

// ** Icons
import {
  Home,
  Hash,
  Info,
  Mail,
  Shield,
  FileText,
  ScrollText,
} from "lucide-react";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
        isActive
          ? "bg-sidebar-accent text-sidebar-accent-foreground"
          : "text-sidebar-foreground hover:bg-sidebar-accent/80"
      )}
    >
      {icon}
      <span>{label}</span>
    </Link>
  );
};

const SidebarNavigation: React.FC = () => {
  const mainNavItems = [
    { icon: <Home size={20} />, label: "Home", href: "/" },
    { icon: <Hash size={20} />, label: "Tags", href: "/tags" },
    { icon: <Info size={20} />, label: "About", href: "/about" },
    { icon: <Mail size={20} />, label: "Contact", href: "/contact" },
  ];

  const otherNavItems = [
    {
      icon: <Shield size={20} />,
      label: "Code of Conduct",
      href: "/code-of-conduct",
    },
    { icon: <FileText size={20} />, label: "Privacy Policy", href: "/privacy" },
    { icon: <ScrollText size={20} />, label: "Terms of use", href: "/terms" },
  ];

  return (
    <nav className="flex flex-col space-y-1 ">
      <div className="space-y-1">
        {mainNavItems.map((item, index) => (
          <NavItem
            key={`main-${index}`}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>

      <div className="mt-6 space-y-1">
        <h3 className=" text-lg font-semibold text-sidebar-foreground">
          Other
        </h3>
        {otherNavItems.map((item, index) => (
          <NavItem
            key={`other-${index}`}
            icon={item.icon}
            label={item.label}
            href={item.href}
          />
        ))}
      </div>
    </nav>
  );
};

export default SidebarNavigation;