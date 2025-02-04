"use client";

import Link from "next/link";
import { Icons } from "./Icons";
import { useMenu } from "./Nav/MenuContext";
import { MobileNavMenu } from "./Nav/MobileMenu";

export const Navbar = () => {
  const { isOpen, toggleMenu } = useMenu();
  return (
    <header>
      <nav className="fixed top-0 left-0 w-full h-16 bg-green z-[99]">
        <div className="container flex items-center justify-between h-full px-4">
          <h1 className="text-2xl font-bold text-white">Modupe</h1>
          <button className="md:hidden" onClick={toggleMenu}>
            {isOpen ? (
              <Icons.Close className="w-12 text-white" />
            ) : (
              <Icons.Menu className="w-12 text-white" />
            )}
          </button>
          <div className="hidden md:flex items-center gap-4 text-white">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      <hr className="h-[1px] border-white/30" />
      </nav>
      {isOpen && <MobileNavMenu />}
    </header>
  );
};
