"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function MaskedCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const size = isHovered ? 250 : 30;

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <motion.div
        className="-mt-16 absolute bg-green h-screen w-screen flex items-center justify-center text-white"
        style={{
          maskRepeat: "no-repeat",
          maskImage: `url('data:image/svg+xml,<svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="150" r="150" fill="%23DD641F"/></svg>')`,
          maskSize: "3.125rem",
          background: "#042b22",
        }}
        animate={{
          WebkitMaskPosition: `${mousePosition.x}px ${mousePosition.y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ ease: "backOut", duration: 0.4 }}
      >
        <h1
          className="text-[3rem] md:text-[6rem] text-center uppercase font-black leading-tight cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Justice in <br /> your community
        </h1>
      </motion.div>
      <div className="mb-8">
        <h1 className="text-[3rem] md:text-[6rem] text-center uppercase font-black leading-tight cursor-pointer">
          Page <br /> not found
        </h1>
      </div>

      {/* <Icons.Mask /> */}

      <Link
        href={"/"}
        type="button"
        className="bg-green border border-black text-white font-bold py-2 px-4 rounded-lg relative z-[99]"
      >
        Return to Home Page
      </Link>
    </div>
  );
}
