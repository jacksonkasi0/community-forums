"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, Search, X } from "lucide-react";
import AuthButtons from "@/components/auth/AuthButtons";
import SearchBar from "@/components/SearchBar";
import LogoImg from "@/assets/images/logo.png";

const Header = () => {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <section className="sticky top-0 z-50 bg-background space-y-6">
      <header className="w-full border-b border-border bg-background">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-14 flex items-center">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="mr-4 md:hidden cursor-pointer"
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
                height={114 / 2.38}
                className="object-contain"
              />
            </div>

            {/* Desktop search area */}
            <div className="hidden md:flex flex-1">
              <SearchBar className="max-w-[420px]" />
            </div>

            {/* Mobile search toggle button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden ml-auto mr-3 bg-muted cursor-pointer"
              aria-label={isMobileSearchOpen ? "Close search" : "Open search"}
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            >
              {isMobileSearchOpen ? (
                <X size={24} className="text-foreground" />
              ) : (
                <Search size={24} className="text-foreground" />
              )}
            </Button>

            {/* Auth buttons */}
            <AuthButtons />
          </div>
        </div>
      </header>

      {/* Mobile search bar below header */}
      {isMobileSearchOpen && (
        <div className="md:hidden bg-background border-b border-border px-4 sm:px-6 lg:px-8 pb-4">
          <SearchBar />
        </div>
      )}
    </section>
  );
};

export default Header;
