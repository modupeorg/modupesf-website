import Button from "@/components/Button";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { ArrowRight } from "lucide-react";
import { FC } from "react";

/**
 * Props for `AboutImageText`.
 */
export type AboutImageTextProps =
  SliceComponentProps<Content.AboutImageTextSlice>;

/**
 * Component for "AboutImageText" Slices.
 */
const AboutImageText: FC<AboutImageTextProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-4 md:py-16"
    >
      <div className="container">
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          <div className="w-full h-full rounded-[1.25rem] overflow-hidden">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="object-cover size-full"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>

          <div className="flex flex-col lg:justify-center lg:px-8 space-y-4">
            <h3 className="text-2xl md:text-3xl xl:text-7xl font-bold mb-4">
              {slice.primary.title}
            </h3>
            <p className="text-lg hyphens-auto text-justify" lang="en">
              {slice.primary.content}
            </p>
            <PrismicNextLink field={slice.primary.btn_link}>
              <Button type="submit" text={slice.primary.btn_text}>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutImageText;
