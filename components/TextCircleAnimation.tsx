"use client";

import { motion } from "framer-motion";

type TextCircleAnimationProps = {
  text: string;
  children: React.ReactNode;
};

export default function TextCircleAnimation({
  text,
  children,
}: TextCircleAnimationProps) {
  return (
    <div className="hidden lg:block overflow-hidden">
      <div className="relative">
        <motion.svg
          animate={{ rotate: 360 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
          viewBox="0 0 300 300"
          className="xl:w-64 lg:h-64"
        >
          <defs>
            <path
              id="circlePath"
              d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0"
            />
          </defs>
          <circle cx="150" cy="150" r="90" fill="#1f443e" />
          <text fill="#fffeff">
            <textPath xlinkHref="#circlePath" className="text-xl mr-2">
              {text}
            </textPath>
            <textPath
              xlinkHref="#circlePath"
              fill="#c7eb5f"
              className="text-2xl"
              startOffset="90%"
            >
              ★
            </textPath>
          </text>
        </motion.svg>
        <div
          className="w-16 h-16 absolute top-0 left-0 right-0
            bottom-0 m-auto bg-white text-white rounded-full
             flex items-center justify-center"
        >
          {/* <Star className="text-green w-8 h-8 transform -rotate-45" /> */}
          {children}
        </div>
      </div>
    </div>
  );
}
