"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// ** Icons
import {
  Home,
  Search,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Twitch,
} from "lucide-react";

// ** UI Components
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

// ** Assets & Utilities
import LogoImg from "@/assets/images/logo.png";
import { cn } from "@/lib/utils";

// ** Store
import { useLayoutStore } from "@/store/layout";

// Define navigation items and chips as arrays for better maintainability
const primaryNavItems = [
  { title: "Search...", icon: Search, action: "search" },
  { title: "Home", icon: Home, href: "/" },
];

const otherNavItems = [
  { title: "Code of Conduct", href: "/code-of-conduct" },
  { title: "Privacy Policy", href: "/privacy-policy" },
  { title: "Terms of Use", href: "/terms-of-use" },
];

const popularTopics = [
  { tag: "javascript", color: "bg-blue-100 text-blue-800" },
  { tag: "react", color: "bg-green-100 text-green-800" },
  { tag: "webdev", color: "bg-purple-100 text-purple-800" },
  { tag: "nextjs", color: "bg-yellow-100 text-yellow-800" },
  { tag: "tailwindcss", color: "bg-red-100 text-red-800" },
  { tag: "ai", color: "bg-blue-100 text-blue-800" },
  { tag: "python", color: "bg-green-100 text-green-800" },
  { tag: "machinelearning", color: "bg-purple-100 text-purple-800" },
  { tag: "datascience", color: "bg-yellow-100 text-yellow-800" },
];

const socialMediaLinks = [
  { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
  { name: "Twitter", icon: X, href: "https://twitter.com" },
  { name: "Twitch", icon: Twitch, href: "https://twitch.tv" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
];

export default function MobileSidebar(
  props: React.ComponentProps<typeof Sidebar>
) {
  const { toggleMobileSidebar, toggleMobileSearchVisibility } =
    useLayoutStore();
  const currentYear = new Date().getFullYear();

  const handleSearchClick = () => {
    toggleMobileSidebar();
    toggleMobileSearchVisibility();
  };

  return (
    <Sidebar className="md:hidden" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex items-center p-4">
            <Link href="/">
              <Image
                src={LogoImg.src}
                alt="Forem Logo"
                width={114}
                height={114 / 2.38}
                className="object-contain"
              />
            </Link>
          </div>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        {/* Primary Navigation */}
        <SidebarMenu className="pl-2">
          {primaryNavItems.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild={!!item.href}
                onClick={
                  item.action === "search" ? handleSearchClick : undefined
                }
                className="flex items-center space-x-2 p-4 cursor-pointer"
              >
                {item.href ? (
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5 mr-2" />
                    <span>{item.title}</span>
                  </Link>
                ) : (
                  <>
                    <item.icon className="h-5 w-5 mr-2" />
                    <span>{item.title}</span>
                  </>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        {/* Other Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Other</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {otherNavItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="flex items-center space-x-2 p-4 cursor-pointer"
                  >
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Popular Topics Group */}
        <SidebarGroup>
          <SidebarGroupLabel>Popular Topics</SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="flex flex-wrap gap-2 p-2">
              {popularTopics.map((topic) => (
                <Link
                  key={topic.tag}
                  href={`/tags/${topic.tag}`}
                  className="hover:opacity-80 transition-opacity"
                >
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-medium cursor-pointer",
                      topic.color
                    )}
                  >
                    #{topic.tag}
                  </span>
                </Link>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="py-4 px-4">
        <div className="flex flex-col items-center space-y-4 w-full">
          <span className="text-xs text-muted-foreground">
            Forem © {currentYear}
          </span>
          <div className="flex space-x-6">
            {socialMediaLinks.map((link) => (
              <Button
                key={link.name}
                variant="ghost"
                size="icon"
                asChild
                aria-label={link.name}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <link.icon className="h-5 w-5 text-muted-foreground hover:text-foreground" />
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
