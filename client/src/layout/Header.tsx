"use client";

import React, { useEffect, useState, useRef, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";

// ** Components
import AuthButtons from "@/components/auth/AuthButtons";
import SearchBar from "@/components/SearchBar";
import { ModeToggle } from "@/components/ModeToggle";

// ** UI Components
import { SidebarTrigger } from "@/components/ui/sidebar";

// ** Assets
import LogoImg from "@/assets/images/logo.png";

// ** Utils
import { cn } from "@/lib/utils";

const HEADER_HEIGHT = 64; // Tailwind h-16 is 64px

const Header = () => {
  const [headerOffset, setHeaderOffset] = useState(0);
  const lastScrollY = useRef(0);
  const offsetRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const delta = currentScrollY - lastScrollY.current;
          let newOffset = offsetRef.current + delta;
          // Clamp newOffset between 0 and HEADER_HEIGHT
          newOffset = Math.max(0, Math.min(newOffset, HEADER_HEIGHT));
          offsetRef.current = newOffset;
          setHeaderOffset(newOffset);
          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full fixed px-4 sm:px-6 lg:px-8  top-0 left-0 right-0 bg-background border-b border-border h-16",
        "transition-transform duration-100 ease-out will-change-transform z-40"
      )}
      style={{ transform: `translateY(-${headerOffset}px)` }}
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex items-center justify-between h-full space-x-2">
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
            <Suspense>
              <SearchBar className="max-w-[420px]" />
            </Suspense>
          </div>

          {/* Theme Toggle */}
          <ModeToggle />

          {/* Auth buttons */}
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
