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
      className="py-24"
    >
      <div className="container">
        <BadgeTitle text={slice.primary.title} />

        <div className="flex flex-col lg:flex-row gap-x-8 gap-y-4">
          {/* text */}
          <div className="w-full lg:w-[40%]">
            <div className="text-center max-w-[46rem] pt-8">
              <p className="text-4xl md:text-6xl font-medium" lang="en">
                {slice.primary.description}
              </p>
            </div>
          </div>

          <div className="w-full lg:w-[60%]">
            <div className="flex flex-col gap-6 max-w-xl mx-auto">
              {slice.primary.faqs.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-b-black/10 pt-4 pb-8"
                >
                  <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleClick(index)}
                  >
                    <h3 className="font-semibold">{item.title}</h3>
                    <Plus
                      className={twMerge(
                        "text-green flex-shrink-0 transition duration-300",
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
