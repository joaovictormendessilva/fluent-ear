import { RHFSelectInputOptionsProps } from "@/app/shared/components/rhf-select-input/RHFSelectInput.types";
import * as yup from "yup";
import { IGenerateExerciseSchema } from "./GenerateExerciseForm.types";

export const generateExerciseSchema: yup.ObjectSchema<IGenerateExerciseSchema> = yup.object({
  proficiencyLevel: yup.string().required(),
  topic: yup.mixed<RHFSelectInputOptionsProps>().required(),
  length: yup.string().required(),
});
