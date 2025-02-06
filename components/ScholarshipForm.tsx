"use client";
import { ActionResponse } from "@/lib/types";
import { useActionState } from "react";
// import { Button } from "./ui/button";
import { submitScholarshipForm } from "@/app/scholarships/actions";
import { ArrowRight, CircleCheckBig } from "lucide-react";
import Confetti from "react-confetti";
import Button from "./Button";
import { FormInput } from "./FormInput";
const initialState: ActionResponse = {
  success: false,
  message: "",
};

export function ScholarshipForm() {
  const [state, action, isPending] = useActionState(
    submitScholarshipForm,
    initialState
  );

  if (state.success) {
    return (
      <>
        <Confetti
          recycle={false}
          numberOfPieces={1000}
          className="h-full w-full"
        />
        <div className="flex flex-col md:pt-28 items-center justify-center space-y-4 text-center">
          <CircleCheckBig className="bg-green rounded-full text-white p-3 w-16 h-16" />

          <h2 className="text-2xl font-semibold">Submission Successful!</h2>
          <p className="text-gray-600">
            {state.message ||
              "Your scholarship form has been submitted successfully."}
          </p>
        </div>
      </>
    );
  }

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

        {/* Email */}
        <FormInput
          questionNumber="03"
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
          questionNumber="04"
          id="phoneNumber"
          name="phoneNumber"
          type="number"
          label="What is your phone number?"
          placeholder="08037365356"
          state={state}
          defaultValue={state?.inputs?.phoneNumber}
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
