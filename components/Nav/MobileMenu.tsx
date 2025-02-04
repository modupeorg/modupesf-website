import React from "react";
import { useMenu } from "./MenuContext";
import Link from "next/link";

export function MobileNavMenu() {
  const { isOpen } = useMenu();
  return (
    <div
      className={`fixed top-0 right-0 w-full h-full z-[98] bg-green transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
