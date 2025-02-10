import { BadgeTitle } from "@/components/Badge";
import { TextBlock } from "@/components/TextBlock";
import { staticBlurDataUrl } from "@/lib/staticBlur";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import { FileText, HandHelping } from "lucide-react";
import { FC } from "react";

/**
 * Props for `Memorabilia`.
 */
export type MemorabiliaProps = SliceComponentProps<Content.MemorabiliaSlice>;

/**
 * Component for "Memorabilia" Slices.
 */
const Memorabilia: FC<MemorabiliaProps> = ({ slice }) => {
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
          <div className="flex flex-col xl:h-[33rem] ">
            <PrismicNextImage
              field={slice.primary.image}
              width={slice.primary.image.dimensions?.width}
              height={slice.primary.image.dimensions?.height}
              className="rounded-[1.25rem] object-cover size-full"
              placeholder="blur"
              blurDataURL={getBlurSvg}
            />
          </div>

          {/* Biography */}
          <TextBlock
            title={slice.primary.subtitle1}
            content={slice.primary.biography}
          >
            <FileText className="w-8 h-8 text-black" />
          </TextBlock>

          {/* Life of service */}
          <TextBlock
            title={slice.primary.subtitle2}
            content={slice.primary.life_of_service}
          >
            <HandHelping className="w-8 h-8 text-black" />
          </TextBlock>
        </div>
      </div>
    </section>
  );
};

export default Memorabilia;
