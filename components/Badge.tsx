import { KeyTextField } from "@prismicio/client";
import React from "react";

export function BadgeTitle({ text }: { text: KeyTextField }) {
  return (
    <div className="w-[fit-content] flex items-center bg-lime px-4 py-1 rounded-full space-x-2">
      <div className="w-[6px] h-[6px] bg-black rounded-[50%] animate-pulse"></div>

      <h3 className="text-xl font-bold">{text}</h3>
    </div>
  );
}
