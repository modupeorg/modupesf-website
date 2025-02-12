"use client";
import { submitScholarshipForm } from "@/app/scholarships/actions";
import { ActionResponse } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { BadgeTitle } from "./Badge";
import Button from "./Button";
import { FormInput } from "./FormInput";
import { staticBlurDataUrl } from "@/lib/staticBlur";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

export function ScholarshipForm() {
  const getBlurSvg = staticBlurDataUrl();
  const [state, action, isPending] = useActionState(
    submitScholarshipForm,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      window.scrollTo({ top: 30 });
      toast.success("Your application was successful", {
        classNames: {
          toast: "bg-white text-black border-green shadow-none",
          icon: "text-green",
        },
        duration: 3000,
        position: "bottom-right",
      });
    } else if (state.errors) {
      toast.error("Something went wrong", {
        classNames: {
          toast: "bg-white text-black border-green shadow-none",
          actionButton: "bg-red-500",
          title: "text-red-500",
          icon: "text-red-500",
        },
      });
    }
  });

  if (state.success) {
    return (
      <div className="grid md:grid-cols-2  md:gap-x-4 lg:gap-x-16 gap-y-8 md:pb-16">
        <div className="relative w-full h-[50dvh] aspect-[16/9] rounded-[1.25rem] overflow-hidden bg-bottom">
          {/* Text */}
          <div className="absolute bg-[#173f2c] text-lime py-2 px-4 w-[fit-content] text-center bottom-4 left-4 rounded-lg">
            <span className="font-bold">Empowering Women</span>
          </div>

          {/* Image */}
          <Image
            src="/images/modupe-sf-scholarships.webp"
            alt="Scholarship Application"
            width={1000}
            height={500}
            className="object-cover size-full object-[center_27%]"
            priority
            placeholder="blur"
            blurDataURL={getBlurSvg}
          />
        </div>

        {/* TextBlock */}
        <div className="flex flex-col justify-center items-center gap-y-16 h-[50dvh] border border-green bg-[#f4faef] text-center rounded-[1.25rem] py-8 px-4 relative">
          <div className="absolute rounded-[1.25rem] bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:20px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

          <BadgeTitle text="Scholarship Application" />
          <h2 className="text-4xl lg:text-6xl font-semibold">
            Thank you for your submission
          </h2>
          <p className="text-lg w-full max-w-[30rem]">
            {state.message ||
              "Your scholarship application has been submitted successfully. You will be notified if its successful."}
          </p>
        </div>
      </div>
    );
  }

  console.log(state.inputs);

  return (
    <form action={action}>
      <div className="grid lg:grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-16">
        {/* First Name */}
        <FormInput
          questionNumber="01"
          id="firstName"
          name="firstName"
          type="text"
          label="What is your first name?"
          placeholder="Type your first name"
          state={state}
          minLength={1}
          maxLength={100}
          defaultValue={state?.inputs?.firstName}
        />

        {/* Last Name */}
        <FormInput
          questionNumber="02"
          id="lastName"
          name="lastName"
          type="text"
          label="What is your last name?"
          placeholder="Type your last name"
          state={state}
          minLength={1}
          maxLength={100}
          defaultValue={state?.inputs?.lastName}
        />

        {/* Date of Birth */}
        <FormInput
          questionNumber="03"
          id="dob"
          name="dob"
          type="text"
          label="What is your date of birth?"
          placeholder="e.g 22/01/2000"
          state={state}
          minLength={1}
          maxLength={100}
          defaultValue={state?.inputs?.dob}
        />

        {/* Email */}
        <FormInput
          questionNumber="04"
          id="email"
          name="email"
          type="email"
          label="What is your email address?"
          placeholder="example@email.com"
          state={state}
          defaultValue={state?.inputs?.email}
        />

        {/* Phone Number */}
        <FormInput
          questionNumber="05"
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          label="What is your phone number?"
          placeholder="e.g 08037365356"
          state={state}
          defaultValue={state?.inputs?.phoneNumber}
        />

        {/* Home Address */}
        <FormInput
          questionNumber="06"
          id="homeAddress"
          name="homeAddress"
          type="text"
          label="What is your home address?"
          placeholder="e.g 324 Ketu Lagos"
          state={state}
          defaultValue={state?.inputs?.homeAddress}
        />

        {/* State of Residence */}
        <FormInput
          questionNumber="07"
          id="stateOfResidence"
          name="stateOfResidence"
          type="text"
          label="What is your state of residence?"
          placeholder="e.g Lagos"
          state={state}
          defaultValue={state?.inputs?.stateOfResidence}
        />

        {/* Current University */}
        <FormInput
          questionNumber="08"
          id="currentUniversity"
          name="currentUniversity"
          type="text"
          label="Name of your current university"
          placeholder="e.g. University of Lagos"
          state={state}
          defaultValue={state?.inputs?.currentUniversity}
        />

        {/* Level of Study */}
        <FormInput
          questionNumber="09"
          id="levelOfStudy"
          name="levelOfStudy"
          type="text"
          label="Current level of study"
          placeholder="e.g. 100 level"
          state={state}
          defaultValue={state?.inputs?.levelOfStudy}
        />

        {/* Field of Study */}
        <FormInput
          questionNumber="10"
          id="fieldOfStudy"
          name="fieldOfStudy"
          type="text"
          label="Field of Study/Major"
          placeholder="e.g Biological Sciences"
          state={state}
          defaultValue={state?.inputs?.fieldOfStudy}
        />

        {/* Expected Graduation Year */}
        <FormInput
          questionNumber="11"
          id="graduationYear"
          name="graduationYear"
          type="text"
          label="Expected Graduation Year"
          placeholder="e.g. 2030"
          state={state}
          defaultValue={state?.inputs?.graduationYear}
        />

        {/* Current CGPA */}
        <FormInput
          questionNumber="12"
          id="cgpa"
          name="cgpa"
          type="text"
          label="Current CGPA"
          placeholder="e.g. 4.34/5.00"
          state={state}
          defaultValue={state?.inputs?.cgpa}
        />
      </div>

      <div className="flex justify-center w-full mx-auto py-16 items-center">
        <Button
          type="submit"
          disabled={isPending}
          text={isPending ? "Submitting..." : "Submit"}
        >
          <ArrowRight className="w-4 h-4 text-white" />
        </Button>
      </div>
    </form>
  );
}
