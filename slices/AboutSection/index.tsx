"use client";

import { FC, useCallback, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import { Icons } from "@/components/Icons";
import { BadgeTitle } from "@/components/Badge";

/**
 * Props for `AboutSection`.
 */
export type AboutSectionProps = SliceComponentProps<Content.AboutSectionSlice>;

/**
 * Component for "AboutSection" Slices.
 */
const AboutSection: FC<AboutSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slice.primary.carousel.length - 1 ? 0 : prevIndex + 1
    );
  }, [slice.primary.carousel.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slice.primary.carousel.length - 1 : prevIndex - 1
    );
  }, [slice.primary.carousel.length]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24 pb-16"
    >
      <div className="container">
        <BadgeTitle text={slice.primary.title} />

        <div className="max-w-[46rem] py-8">
          <p className="text-lg hyphens-auto text-justify" lang="en">
            {slice.primary.description}
          </p>
        </div>

        {/* Carousel */}
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          <div className="relative overflow-hidden h-[40dvh] lg:h-[50dvh] xl:h-[58dvh] 2xl:h-[65dvh] rounded-[1.25rem] rounded-br-[0]">
            <div className="w-full h-full rounded-[1.25rem] overflow-hidden">
              {slice.primary.carousel.map((item, index) => (
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                  key={index}
                >
                  <PrismicNextImage
                    field={item.image}
                    width={item.image.dimensions?.width}
                    height={item.image.dimensions?.height}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={getBlurSvg}
                  />
                </div>
              ))}

              <div className="flex justify-center items-center space-x-2 about-container">
                <button
                  type="button"
                  className="iconBox bg-lime"
                  onClick={prevSlide}
                >
                  <Icons.LeftArrow />
                </button>

                <button
                  type="button"
                  className="iconBox bg-lime "
                  onClick={nextSlide}
                >
                  <Icons.RightArrow />
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:justify-center lg:px-8 xl:px-32">
            <div className="transition-opacity duration-500">
              <h3 className="text-2xl md:text-3xl xl:text-7xl font-bold mb-4">
                {slice.primary.carousel[currentIndex].image_title}
              </h3>
              <p className="text-lg hyphens-auto text-justify" lang="en">
                {slice.primary.carousel[currentIndex].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
