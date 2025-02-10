import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BadgeTitle } from "@/components/Badge";
import { PrismicNextImage } from "@prismicio/next";
import { Icons } from "@/components/Icons";
import { PrismicNextLink } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlur";

/**
 * Props for `DirectorsSection`.
 */
export type DirectorsSectionProps =
  SliceComponentProps<Content.DirectorsSectionSlice>;

/**
 * Component for "DirectorsSection" Slices.
 */
const DirectorsSection: FC<DirectorsSectionProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-12 md:py-24"
    >
      <div className="container">
        <BadgeTitle text={slice.primary.title} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 gap-y-8 py-8">
          {/* Image */}
          {slice.primary.directors.map((item, index) => (
            <div key={index}>
              <div className="relative overflow-hidden max-h-[30rem] rounded-[1.25rem] rounded-br-[0]">
                <div className="w-full h-full rounded-[1.25rem] overflow-hidden">
                  <PrismicNextImage
                    field={item.image}
                    width={item.image.dimensions?.width}
                    height={item.image.dimensions?.height}
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL={getBlurSvg}
                  />

                  <div className="flex justify-center items-center space-x-2 directors-container">
                    <PrismicNextLink
                      field={item.link}
                      type="button"
                      className="link-icon bg-lime border border-green cursor-pointer"
                    >
                      <Icons.LinkedIn />
                    </PrismicNextLink>
                  </div>
                </div>
              </div>

              <div className="py-4">
                <p className="text-center text-lg font-medium">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectorsSection;
