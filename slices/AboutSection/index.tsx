"use client";

import { BadgeTitle } from "@/components/Badge";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { FC } from "react";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection: FC<AboutSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24"
    >
      <div className="container">
        <BadgeTitle text={slice.primary.title} />

        <div className="max-w-[46rem] py-8">
          <p className="text-lg hyphens-auto text-justify" lang="en">
            {slice.primary.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
