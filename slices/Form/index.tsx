import { ScholarshipForm } from "@/components/ScholarshipForm";
import TexCircleAnimation from "@/components/TextCircleAnimation";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { GraduationCap } from "lucide-react";
import { FC } from "react";
/**
 * Props for `Form`.
 */
export type FormProps = SliceComponentProps<Content.FormSlice>;

/**
 * Component for "Form" Slices.
 */
const Form: FC<FormProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24 mt-12 md:mt-16 min-h-[100dvh]"
    >
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-8 mb-8 max-w-[46rem]">
            <h1 className="text-4xl md:text-7xl font-bold">
              {slice.primary.title}
            </h1>
            <p className=" text-lg text-justify hyphens-auto" lang="en">
              {slice.primary.description}
            </p>
          </div>
          <TexCircleAnimation text="Scholarship • Apply now • Women">
            <GraduationCap className="text-green w-8 h-8" />
          </TexCircleAnimation>
        </div>

        <div className="pt-8">
          <ScholarshipForm />
        </div>
      </div>
    </section>
  );
};

export default Form;
