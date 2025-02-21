"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useMenu } from "./Nav/MenuContext";
import { MobileNavMenu } from "./Nav/MobileMenu";
import { AnimatePresence } from "motion/react";
import Image from "next/image";

export const Navbar = () => {
  const { isOpen, toggleMenu } = useMenu();
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-20 bg-green z-[99]">
        <div className="container flex items-center justify-between h-full px-4">
          <Link
            href="/"
            className="flex flex-row space-x-4 items-center text-[1rem] md:text-2xl font-bold text-white hover:opacity-90 transition-opacity"
          >
            <Image
              src="/images/msf-logo.png"
              alt="Msf-logo"
              width={50}
              height={50}
              priority
            />
            <span>Modupe Sapiential Foundation</span>

          </Link>
          <button
            className="lg:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-8 h-8 text-white" />
            ) : (
              <Menu className="w-8 h-8 text-white" />
            )}
          </button>
          <div className="hidden lg:flex items-center gap-6 text-white">
            <Link href="/" className="hover:text-white/80 transition-colors">
              Who we are
            </Link>
            <Link
              href="/scholarships"
              className="hover:text-white/80 transition-colors"
            >
              Scholarships
            </Link>
            <Link
              href="/legal-services"
              className="hover:text-white/80 transition-colors"
            >
              Legal Services
            </Link>
          </div>
        </div>
        <hr className="h-[1px] border-white/30" />
      </nav>
      <AnimatePresence>{isOpen && <MobileNavMenu />}</AnimatePresence>
    </header>
  );
};
