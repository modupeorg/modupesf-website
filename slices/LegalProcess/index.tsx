import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BadgeTitle } from "@/components/Badge";
import { PrismicNextImage } from "@prismicio/next";
import { staticBlurDataUrl } from "@/lib/staticBlur";
/**
 * Props for `LegalProcess`.
 */
export type LegalProcessProps = SliceComponentProps<Content.LegalProcessSlice>;

/**
 * Component for "LegalProcess" Slices.
 */
const LegalProcess: FC<LegalProcessProps> = ({ slice }) => {
  const getBlurSvg = staticBlurDataUrl();

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-8 md:py-32"
    >
      <div className="container">
        <BadgeTitle text={slice.primary.title} />

        <div className="grid lg:grid-cols-2 gap-x-8 pt-8">
          {/* Description */}
          <div className="flex flex-col space-y-4">
            <div className="w-full lg:max-w-[30rem]">
              <p className="text-lg">{slice.primary.description}</p>
            </div>

            {/* Image */}
            <div className="block lg:hidden py-4">
              <PrismicNextImage
                field={slice.primary.image}
                width={slice.primary.image.dimensions?.width}
                height={slice.primary.image.dimensions?.height}
                placeholder="blur"
                blurDataURL={getBlurSvg}
                className="rounded-[1.25rem] object-cover size-full"
              />
            </div>

            {slice.primary.process.map((item, index) => (
              <div
                key={index}
                className="flex flex-col space-y-4 w-full lg:max-w-[30rem] py-4"
              >
                <div className="w-[fit-content] flex items-center bg-green text-white px-4 py-1 rounded-full space-x-2">
                  <span className="text-[0.875rem] font-bold">
                    {item.number}
                  </span>
                </div>

                <h2 className="text-[2.25rem] font-bold">{item.title}</h2>

                <p className="text-[1.125rem]">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden lg:block">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              placeholder="blur"
              blurDataURL={getBlurSvg}
              className="rounded-[1.25rem] object-cover size-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalProcess;
