"use client";

import { ContentLengthContainer } from "@/app/components/content-length";
import { ExercisePreview } from "@/app/components/exercise-preview";
import { ProficiencyLevelContainer } from "@/app/components/proficiency-level";
import { TopicContainer } from "@/app/components/topic-selector";
import { exerciseService } from "@/app/services/exercise/exercise.service";
import { FormControl } from "@/app/shared/components/form-control";
import { FormSectionTitle } from "@/app/shared/components/form-section-title";
import { GenerateExerciseRequest } from "@/app/shared/types/exercise";
import { yupResolver } from "@hookform/resolvers/yup";
import { Globe, PanelsTopLeft, Timer, WandSparklesIcon } from "lucide-react";
import { FormProvider, useForm } from "react-hook-form";
import { lengths } from "../content-length/ContentLengthContainer.utils";
import { levels } from "../proficiency-level/ProficiencyLevelContainer.utils";
import { topics } from "../topic-selector/TopicContainer.utils";
import { generateExerciseSchema } from "./GenerateExerciseForm.schemas";
import { IGenerateExerciseSchema } from "./GenerateExerciseForm.types";

export function GenerateExerciseForm() {
  const methods = useForm<IGenerateExerciseSchema>({
    resolver: yupResolver(generateExerciseSchema),
    defaultValues: {
      proficiencyLevel: levels[0],
      topic: topics[0].value,
      length: lengths[0],
    },
  });

  const createPayload = (data: IGenerateExerciseSchema): GenerateExerciseRequest => {
    return {
      level: data.proficiencyLevel,
      topic: data.topic,
      contentLength: data.length,
    };
  };

  const handleSubmit = methods.handleSubmit(async (data) => {
    const payload: GenerateExerciseRequest = createPayload(data);

    await exerciseService().generateExercise(payload);
  });

  return (
    <FormProvider {...methods}>
      <div className="bg-surface max-w-[672px] w-full p-[32px] rounded-sm mt-[32px] flex flex-col gap-[32px]">
        <FormControl>
          <FormSectionTitle icon={<PanelsTopLeft size={16} />} title="SECTION 1: PROFICIENCY LEVEL" />

          <ProficiencyLevelContainer />
        </FormControl>

        <FormControl>
          <FormSectionTitle icon={<Globe size={16} />} title="SECTION 2: CHOOSE TOPIC" />

          <TopicContainer />
        </FormControl>

        <FormControl>
          <FormSectionTitle icon={<Timer size={16} />} title="SECTION 3: CONTENT LENGTH" />

          <ContentLengthContainer />
        </FormControl>

        <div className="border-1 border-surface-2" />

        <ExercisePreview />

        <button className="background-gradient btn-brand flex items-center justify-center gap-3" onClick={handleSubmit}>
          <WandSparklesIcon /> Generate Exercise
        </button>
      </div>
    </FormProvider>
  );
}
