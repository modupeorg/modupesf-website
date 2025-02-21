import { KeyTextField } from "@prismicio/client";
import React from "react";
type TextBlockProps = {
  title: KeyTextField;
  content: KeyTextField;
  children: React.ReactNode;
};

export function TextBlock({ title, content, children }: TextBlockProps) {
  return (
    <div className="relative w-[inherit] h-[inherit] overflow-hidden rounded-br-[0px]">
      <div className="absolute rounded-[1.25rem] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      <div className="overflow-hidden rounded-[1.25rem] h-full w-full border-green border-2 bg-[#f4faef]">
        <div className="px-4 py-8">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className="text-lg hyphens-auto text-justify" lang="en">
              {content}
            </p>
          </div>
        </div>

        {/* Icon */}
        <div className="top-icon">
          <div className="icon-box bg-lime border border-green h-16 w-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
