"use client";

import { ChevronDown } from "lucide-react";
import { Controller, useFormContext } from "react-hook-form";
import { RHFSelectInputProps } from "./RHFSelectInput.types";

export function RHFSelectInput({ name, options }: RHFSelectInputProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="relative flex justify-end items-center">
          <select {...field} className="form-control">
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <div className="absolute pr-[20px] pointer-events-none">
            <ChevronDown />
          </div>
        </div>
      )}
    />
  );
}
