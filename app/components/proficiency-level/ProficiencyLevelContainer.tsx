"use client";

import { levels } from "./ProficiencyLevelContainer.utils";
import { useFormContext, useWatch } from "react-hook-form";
import { IGenerateExerciseSchema } from "../gerenate-exercise-form/GenerateExerciseForm.types";

export function ProficiencyLevelContainer() {
  const { setValue } = useFormContext<IGenerateExerciseSchema>();

  const proficiencyLevelValue = useWatch<IGenerateExerciseSchema>({ name: "proficiencyLevel" });

  return (
    <div className="bg-background flex gap-1 rounded-sm">
      {levels.map((level) => (
        <button
          key={level}
          className={`uppercase w-full h-[44px] rounded-sm cursor-pointer text-[14px] font-bold ${proficiencyLevelValue !== level && "text-muted-foreground"} ${proficiencyLevelValue === level && "bg-primary"}`}
          onClick={() => setValue("proficiencyLevel", level)}
        >
          {level}
        </button>
      ))}
    </div>
  );
}
