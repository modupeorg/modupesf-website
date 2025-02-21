import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import TextCircleAnimation from "@/components/TextCircleAnimation";
import { Scale } from "lucide-react";

/**
 * Props for `LegalHero`.
 */
export type LegalHeroProps = SliceComponentProps<Content.LegalHeroSlice>;

/**
 * Component for "LegalHero" Slices.
 */
const LegalHero: FC<LegalHeroProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 mt-12 md:mt-16 bg-green"
    >
      {/* <div className="container">
        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="w-full h-full -z-[1] overflow-hidden inset-[0%]">
              <PrismicNextImage
                field={slice.primary.image}
                width={slice.primary.image.dimensions?.width}
                height={slice.primary.image.dimensions?.height}
                className="object-contain rounded-[1.25rem]"
                placeholder="blur"
                blurDataURL={getBlurSvg}
              />
              <div className="absolute bg-gradient-custom h-[50%] inset-[auto_0%_0%] opacity-100 rounded-b-[1.25rem]"></div>
            </div>
            <div className="absolute bottom-4 md:bottom-16 left-0 max-w-[12rem] md:max-w-[46rem] px-4 md:px-8  space-y-4 text-white">
              <h1 className="text-xl md:text-5xl lg:text-7xl">{slice.primary.title}</h1>
              <p className="hidden md:block">{slice.primary.description}</p>
            </div>
          </div>
        </div>
      </div> */}

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
              {slice.primary.description}
            </p>
          </div>
          <TextCircleAnimation text="Justice • Equity • Accountability">
            <Scale className="text-green w-8 h-8" />
          </TextCircleAnimation>
        </div>
        <PrismicNextImage
          field={slice.primary.image}
          width={slice.primary.image.dimensions?.width}
          height={slice.primary.image.dimensions?.height}
          className="object-contain rounded-[1.25rem]"
          placeholder="blur"
          blurDataURL={getBlurSvg}
        />
      </div>
    </section>
  );
};

export default LegalHero;
