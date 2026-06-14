import * as yup from "yup";
import { IGenerateExerciseSchema } from "./GenerateExerciseForm.types";

export const generateExerciseSchema: yup.ObjectSchema<IGenerateExerciseSchema> = yup.object({
  proficiencyLevel: yup.string().required(),
  topic: yup.string().required(),
  length: yup.string().required(),
});
