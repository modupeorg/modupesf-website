"use client";
import { BadgeTitle } from "@/components/Badge";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { Plus } from "lucide-react";
import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { FC, useCallback, useState } from "react";
import { twMerge } from "tailwind-merge";

/**
 * Props for `Faqs`.
 */
export type FaqsProps = SliceComponentProps<Content.FaqsSlice>;

/**
 * Component for "Faqs" Slices.
 */
const Faqs: FC<FaqsProps> = ({ slice }) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const handleClick = useCallback((index: number) => {
    setSelectedIndex(selectedIndex === index ? -1 : index);
  }, [selectedIndex]);

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-8 pb-32 md:pt-16"
    >
      <div className="container">
        <BadgeTitle text={slice.primary.title} />

        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
          {/* text */}
          <div className="w-full lg:w-[40%]">
            <div className="max-w-xl mx-auto md:text-center lg:text-left py-8">
              <p className="text-4xl 2xl:text-6xl font-medium" lang="en">
                {slice.primary.description}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-6 max-w-xl mx-auto md:py-8">
              {slice.primary.faqs.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-b-black/10 pt-4 pb-8"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="text-[1.25rem] font-semibold">
                      {item.title}
                    </h3>
                    <Plus
                      className={twMerge(
                        "bg-lime p-1 rounded-full text-green flex-shrink-0 transition duration-300",
                        selectedIndex === index && "rotate-45"
                      )}
                    />
                  </div>
                  <AnimatePresence>
                    {selectedIndex === index && (
                      <motion.div
                        className={twMerge("overflow-hidden")}
                        initial={{ height: 0, marginTop: 0 }}
                        animate={{ height: "auto", marginTop: 24 }}
                        exit={{ opacity: 0, marginTop: 0 }}
                      >
                        <p className="text-black/60">{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
