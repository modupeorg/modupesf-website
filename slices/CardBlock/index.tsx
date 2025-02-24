import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { BadgeTitle } from "@/components/Badge";
import Card from "@/components/Card";

/**
 * Props for `CardBlock`.
 */
export type CardBlockProps = SliceComponentProps<Content.CardBlockSlice>;

/**
 * Component for "CardBlock" Slices.
 */
const CardBlock: FC<CardBlockProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-16 md:py:32"
    >
      <div className="container">
        <div className="flex flex-col space-y-4 md:space-y-8">
          <BadgeTitle text={slice.primary.title} />

          <h3 className="text-2xl md:text-3xl xl:text-7xl font-bold max-w-[40rem]">
            {slice.primary.content}
          </h3>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-y-8 md:gap-x-4 xl:gap-x-8">
            {slice.primary.cards.map(({ image, content, title }, index) => (
              <div className="" key={index}>
                <Card image={image} title={title} content={content} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBlock;
