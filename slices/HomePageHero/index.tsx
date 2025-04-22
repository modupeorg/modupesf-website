"use client";

import TexCircleAnimation from "@/components/TextCircleAnimation";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { Star } from "lucide-react";
import { FC } from "react";

/**
 * Props for `HomePageHero`.
 */
export type HomePageHeroProps = SliceComponentProps<Content.HomePageHeroSlice>;

/**
 * Component for "HomePageHero" Slices.
 */
const HomePageHero: FC<HomePageHeroProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 mt-12 md:mt-16 bg-green"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-8 mb-8 max-w-[46rem]">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {slice.primary.title}
            </h1>
            <p
              className="text-white text-[1rem] text-justify hyphens-auto"
              lang="en"
            >
              {slice.primary.content}
            </p>
          </div>
          <TexCircleAnimation text="Join us in making a lasting legacy">
            <Star className="text-green w-8 h-8 transform -rotate-45" />
          </TexCircleAnimation>
        </div>
        <div className="relative overflow-hidden h-[35dvh] md:h-[65dvh] lg:h-[80dvh] rounded-[1.25rem] border-white border">
          <PrismicNextImage
            field={slice.primary.hero_image}
            width={slice.primary.hero_image.dimensions?.width}
            height={slice.primary.hero_image.dimensions?.height}
            className="object-cover size-full object-top"
            placeholder="blur"
            blurDataURL={getBlurSvg}
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
