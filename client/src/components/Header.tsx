import React from "react";
import Image from "next/image";

// ** UI Components
import { Button } from "@/components/ui/button";

// ** Icons
import { Menu, Search } from "lucide-react";

// ** Custom Components
import AuthButtons from "@/components/auth/AuthButtons";

// ** Assets
import LogoImg from "@/assets/images/logo.png";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="mr-4 md:hidden"
            aria-label="Menu"
          >
            <Menu size={24} className="text-foreground" />
          </Button>

          {/* Logo */}
          <div className="flex items-center mr-4">
            <Image
              src={LogoImg.src}
              alt="Forem Logo"
              width={114}
              height={114 / 2.38} // Maintain aspect ratio
              className="object-contain"
            />
          </div>

          {/* Desktop search area (optional) */}
          <div className="hidden md:flex flex-1">
            {/* You can add a desktop search input here if needed */}
          </div>

          {/* Mobile search button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-auto mr-3 bg-muted"
            aria-label="Search"
          >
            <Search size={24} className="text-foreground" />
          </Button>

          {/* Auth buttons */}
          <AuthButtons />
        </div>
      </div>
    </header>
  )
}

export default Header
