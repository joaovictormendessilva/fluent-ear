import { GenerateExerciseRequest, GenerateExerciseResponse } from "@/app/shared/types/exercise";

export const exerciseService = () => {
  const saveForm = async (data: GenerateExerciseRequest): Promise<void> => {
    await fetch("/api/exercises/save-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  const generateExercise = async (data: GenerateExerciseRequest): Promise<GenerateExerciseResponse> => {
    const response = await fetch("/api/exercises/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response.json();
  };

  return { saveForm, generateExercise };
};
