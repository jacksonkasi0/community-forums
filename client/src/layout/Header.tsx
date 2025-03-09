import React from "react";
import Image from "next/image";
import Link from "next/link";

// ** Components
import AuthButtons from "@/components/auth/AuthButtons";
import SearchBar from "@/components/SearchBar";

// ** UI Components
import { SidebarTrigger } from "@/components/ui/sidebar";

// ** Assets
import LogoImg from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center space-x-4">
          <SidebarTrigger className="p-4 md:hidden text-primary" />
          {/* Logo */}
          <div className="flex items-center mr-4">
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

          {/* Desktop search area */}
          <div className="hidden md:flex flex-1">
            <SearchBar className="max-w-[420px]" />
          </div>

          {/* Auth buttons */}
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
