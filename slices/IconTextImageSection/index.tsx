import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `IconTextImageSection`.
 */
export type IconTextImageSectionProps =
  SliceComponentProps<Content.IconTextImageSectionSlice>;

/**
 * Component for "IconTextImageSection" Slices.
 */
const IconTextImageSection: FC<IconTextImageSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for icon_text_image_section (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default IconTextImageSection;
