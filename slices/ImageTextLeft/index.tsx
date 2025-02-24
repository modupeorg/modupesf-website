import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { BadgeTitle } from "@/components/Badge";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import Button from "@/components/Button";
import { ArrowRight } from "lucide-react";

/**
 * Props for `ImageTextLeft`.
 */
export type ImageTextLeftProps =
  SliceComponentProps<Content.ImageTextLeftSlice>;

/**
 * Component for "ImageTextLeft" Slices.
 */
const ImageTextLeft: FC<ImageTextLeftProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 md:gap-x-4 lg:gap-x-8 xl:gap-x-16 gap-y-8">
          {/* Text */}
          <div className="flex flex-col justify-center space-y-4 lg:space-y-8 w-full lg:max-w-[40rem]">
            <BadgeTitle text={slice.primary.title} />
            <div className="flex md:hidden">
              <PrismicNextImage
                field={slice.primary.image}
                width={slice.primary.image.dimensions?.width}
                height={slice.primary.image.dimensions?.height}
                className="object-cover rounded-[1.25rem] h-full"
                placeholder="blur"
                blurDataURL={getBlurSvg}
              />
            </div>
            <h3 className="text-2xl md:text-3xl xl:text-7xl font-bold">
              {slice.primary.heading}
            </h3>
            <p className="text-lg text-justify hyphens-auto" lang="en">
              {slice.primary.description}
            </p>

            <PrismicNextLink field={slice.primary.link}>
              <Button type="submit" text={slice.primary.link_text}>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </PrismicNextLink>
          </div>

          {/* Image */}
          <div className="hidden md:block">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="object-cover rounded-[1.25rem] h-full"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageTextLeft;
