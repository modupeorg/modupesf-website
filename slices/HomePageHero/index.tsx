"use client";

import TexCircleAnimation from "@/components/TextCircleAnimation";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { FC, useCallback, useState } from "react";

/**
 * Props for `HomePageHero`.
 */
export type HomePageHeroProps = SliceComponentProps<Content.HomePageHeroSlice>;

/**
 * Component for "HomePageHero" Slices.
 */
const HomePageHero: FC<HomePageHeroProps> = ({ slice }) => {
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
      className="py-24 mt-12 md:mt-16 bg-green min-h-[100dvh]"
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
            <Star className="text-green w-8 h-8 transform -rotate-45"  />
          </TexCircleAnimation>
        </div>
        <div className="relative overflow-hidden h-[35dvh] md:h-[65dvh] lg:h-[80dvh] rounded-[1.25rem] rounded-br-[0]">
          <div className="w-full h-full rounded-[1.25rem] overflow-hidden">
            {slice.primary.carousel.map((item, index) => (
              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
                key={index}
              >
                <div className="absolute bg-[#173f2c] text-lime py-2 px-4 w-[fit-content] text-center top-4 left-4 rounded-lg">
                  <span className="font-bold">{item.service_name}</span>
                </div>
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

            <div className="flex justify-center items-center space-x-2 arrow-container">
              <button
                type="button"
                className="iconBox bg-lime"
                onClick={prevSlide}
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                className="iconBox bg-lime "
                onClick={nextSlide}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageHero;
