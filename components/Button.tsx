"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { KeyTextField } from "@prismicio/client";

type ButtonProps = {
  text: KeyTextField | string;
  type: "submit" | "button";
  disabled?: boolean;
  children?: React.ReactNode;
};

function Button({ text, type, disabled, children }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <button
      type={type}
      disabled={disabled}
      className="relative flex justify-center items-center cursor-pointer bg-lime rounded-[1.5rem] py-3 px-9 overflow-clip border border-green"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        animate={{
          scale: isHovered ? 45 : 1,
          backgroundColor: isHovered ? "#042b22" : "#000000",
          color: isHovered ? "#fffeff" : "#000000",
        }}
        transition={{
          ease: "easeIn",
          duration: 0.2,
        }}
        className="w-[6px] h-[6px] bg-black rounded-[50%] absolute left-[1.375rem]"
      ></motion.div>
      <motion.div
        animate={{
          x: isHovered ? -8 : 8,
          color: isHovered ? "#fffeff" : "#000000",
        }}
        className="-tracking-[0.5px] font-medium z-[1]"
      >
        {text}
      </motion.div>
      <motion.div
        animate={{
          x: isHovered ? 0 : 24,
        }}
        className="flex items-center absolute right-[0.375rem]"
      >
        {children}
      </motion.div>
    </button>
  );
}

export default Button;
