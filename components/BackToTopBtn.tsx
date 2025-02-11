"use client";
import { ArrowUp } from "lucide-react";

export function BackToTopBtn() {
  const backToTop = () => window.scrollTo({ top: 0 });

  return (
    <button
      role="button"
      aria-label="icon"
      onClick={backToTop}
      className="absolute bottom-8 md:bottom-4 right-4 rounded-full transition duration-300 hover:bg-orange hover:text-gray-200"
    >
      <ArrowUp className="w-10 h-10 rounded-full bg-white text-black px-2" />
    </button>
  );
}
