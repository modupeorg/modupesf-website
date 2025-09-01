import React from "react";
import { Label } from "./ui/label";
import { ActionResponse, ScholarshipFormData } from "@/lib/types";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type FormSelectProps = {
  id: string;
  questionNumber: string;
  label: string;
  name: keyof ScholarshipFormData;
  placeholder: string;
  state: ActionResponse;
  defaultValue?: string;
};

export function FormSelect({
  id,
  questionNumber,
  label,
  name,
  placeholder,
  state,
  defaultValue,
}: FormSelectProps) {
  const [value, setValue] = React.useState(defaultValue ?? "");
  return (
    <div className="flex flex-col md:flex-row md:items-baseline md:space-x-4 space-y-4 md:space-y-0">
      <span className="inline-block w-[fit-content] px-2 bg-green rounded-xl text-white">
        {questionNumber}
      </span>

      <div className="w-full">
        <Label className="inline-block text-2xl font-medium pb-4">
          {label}
        </Label>

        <Select
          onValueChange={(val) => setValue(val)}
          defaultValue={defaultValue}
          aria-describedby={`${name}-error`}
        >
          <SelectTrigger
            className={`
                w-full
                py-4
                bg-[#f5f7fb] placeholder:text-grey placeholder:text-sm placeholder:italic
                border-2
                ${state?.errors?.[name] ? "border-red-500" : "border-black"}
                outline-none 
                disabled:opacity-70
                disabled:cursor-not-allowed resize-y   
              `}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="University of Lagos">
              University of Lagos
            </SelectItem>
          </SelectContent>
        </Select>

        <input id={id} type="hidden" name={name} value={value} />

        {state?.errors?.[name] && (
          <p id={`${name}-error`} className="text-red-500 text-sm">
            {state?.errors?.[name]}
          </p>
        )}
      </div>
    </div>
  );
}
