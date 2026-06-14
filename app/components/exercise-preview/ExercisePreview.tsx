import { useWatch } from "react-hook-form";
import { IGenerateExerciseSchema } from "../gerenate-exercise-form/GenerateExerciseForm.types";
import { RHFSelectInputOptionsProps } from "@/app/shared/components/rhf-select-input/RHFSelectInput.types";
import { captalizeFirstLetter } from "@/app/shared/helpers/captalize-first-letter";

export function ExercisePreview() {
  const proficiencyLevelValue = useWatch<IGenerateExerciseSchema>({ name: "proficiencyLevel" }).toString();
  const selectedTopic = useWatch<IGenerateExerciseSchema>({ name: "topic" }) as RHFSelectInputOptionsProps;
  const lengthValue = useWatch<IGenerateExerciseSchema>({ name: "length" }).toString();

  const captalizedLengthValue = captalizeFirstLetter(lengthValue);

  return (
    <div className="border-2 border-surface-2 p-[25px] rounded-md bg-background flex flex-col gap-[18px]">
      <span className="text-primary text-[12px] font-bold">EXERCISE PREVIEW</span>

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">LEVEL</span>
          <span className="text-[11px] md:text-[14px] font-bold">{proficiencyLevelValue.toUpperCase()}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">TOPIC</span>
          <span className="text-[11px] md:text-[14px] font-bold">{selectedTopic.label}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">LENGTH</span>
          <span className="text-[11px] md:text-[14px] font-bold">{captalizedLengthValue}</span>
        </div>
      </div>
    </div>
  );
}
