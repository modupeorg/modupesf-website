import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BadgeTitle } from "@/components/Badge";
import { Archive, Bird, Scale } from "lucide-react";
import { TextBlock } from "@/components/TextBlock";

/**
 * Props for `ServicesSection`.
 */
export type ServicesSectionProps =
  SliceComponentProps<Content.ServicesSectionSlice>;

/**
 * Component for "ServicesSection" Slices.
 */
const ServicesSection: FC<ServicesSectionProps> = ({ slice }) => {
  const iconsArray = new Map([
    [0, Scale],
    [1, Bird],
    [2, Archive],
  ]);
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="pt-24 pb-16"
    >
      <div className="container">
        <div className="flex flex-col items-center space-y-4 lg:space-y-8 w-full lg:max-w-[46rem] text-center mx-auto">
          <BadgeTitle text={slice.primary.title} />

          <p className="text-lg text-center hyphens-auto" lang="en">
            {slice.primary.description}
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-4 xl:gap-x-8 pt-16">
          {slice.primary.service.map((item, index) => {
            const IconComponent = iconsArray.get(index);
            return (
              IconComponent && (
                <div key={index}>
                  <TextBlock
                    key={index}
                    title={item.title}
                    content={item.content}
                  >
                    <IconComponent className="w-8 h-8 text-black" />
                  </TextBlock>
                </div>
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
