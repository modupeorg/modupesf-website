import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ActionResponse, ScholarshipFormData } from "@/lib/types";

type FormInputProps = {
  id: string;
  questionNumber: string;
  label: string;
  name: keyof ScholarshipFormData;
  placeholder: string;
  type: string;
  state: ActionResponse;
  minLength?: number;
  maxLength?: number;
  defaultValue?: string;
};

export function FormInput({
  id,
  questionNumber,
  label,
  name,
  placeholder,
  type,
  state,
  minLength,
  maxLength,
  defaultValue,
}: FormInputProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 space-y-4 md:space-y-0">
      <span className="inline-block w-[fit-content] px-2 bg-green rounded-xl text-white">
        {questionNumber}
      </span>

      <div className="w-full">
        <Label className="inline-block text-2xl font-medium">{label}</Label>

        <Input
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          required
          defaultValue={defaultValue}
          minLength={minLength}
          maxLength={maxLength}
          autoComplete={name}
          aria-describedby={`${name}-error`}
          className={`
                w-full
                py-4
                bg-[#f5f7fb] placeholder:text-grey placeholder:text-sm placeholder:italic
                border-b-2
                ${state?.errors?.[name] ? "border-red-500" : "border-b-black"}
                outline-none 
                disabled:opacity-70
                disabled:cursor-not-allowed resize-y   
              `}
        />
        {state?.errors?.[name] && (
          <p id={`${name}-error`} className="text-red-500 text-sm">
            {state?.errors?.[name]}
          </p>
        )}
      </div>
    </div>
  );
}
