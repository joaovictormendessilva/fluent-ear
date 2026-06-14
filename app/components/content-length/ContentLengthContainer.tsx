"use client";

import { captalizeFirstLetter } from "@/app/shared/helpers/captalize-first-letter";
import { useFormContext, useWatch } from "react-hook-form";
import { IGenerateExerciseSchema } from "../gerenate-exercise-form/GenerateExerciseForm.types";
import { lengths } from "./ContentLengthContainer.utils";

export function ContentLengthContainer() {
  const { setValue } = useFormContext<IGenerateExerciseSchema>();

  const lengthValue = useWatch<IGenerateExerciseSchema>({ name: "length" });

  return (
    <div className="flex gap-[11px]">
      {lengths.map((length) => (
        <div
          key={length}
          className={`w-full bg-background rounded-md overflow-hidden ${lengthValue === length && "border-1 border-accent"}`}
        >
          <button
            className={`w-full h-[54px] text-[14px] font-bold ${lengthValue === length ? "bg-[#06B6D41A] text-accent" : "text-muted-foreground "}`}
            onClick={() => setValue("length", length)}
          >
            {captalizeFirstLetter(length)}
          </button>
        </div>
      ))}
    </div>
  );
}
