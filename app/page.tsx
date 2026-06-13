import { Globe, Headphones, PanelsTopLeft, Sparkles, Timer, WandSparklesIcon } from "lucide-react";
import { ContentLengthContainer } from "@/app/components/content-length";
import { ExercisePreview } from "@/app/components/exercise-preview";
import { ProficiencyLevelContainer } from "@/app/components/proficiency-level";
import { TopicContainer } from "@/app/components/topic-selector";
import { FormControl } from "./shared/components/form-control";
import { FormSectionTitle } from "./shared/components/form-section-title";

export default function Home() {
  return (
    <div className="max-w-[1192px] w-full px-[20px] m-auto mt-[48px]">
      <h1 className="text-[22px] md:text-[36px] font-bold text-center md:text-left">Create Your Listening Session</h1>
      <p className="text-[14px] md:text-[18px] text-muted-foreground text-center md:text-left">
        Generate a personalized listening exercise tailored to your goals.
      </p>

      <div className="flex flex-row justify-center md:justify-between gap-[48px]">
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

          <button className="background-gradient btn-brand flex items-center justify-center gap-3">
            <WandSparklesIcon /> Generate Exercise
          </button>
        </div>

        <div className="hidden md:flex flex-col items-center justify-center gap-[16px] bg-surface rounded-[40px] max-w-[432px] w-full h-[432px] mt-[100px]">
          <div className="background-gradient h-[128px] w-[128px] rounded-full flex items-center justify-center">
            <Headphones size={64} />
          </div>

          <div className="flex flex-col items-center">
            <span className="text-[20px] font-bold flex gap-2 items-center">
              <Sparkles size={14} />
              AI Engine Active
            </span>

            <p className="text-muted-foreground text-[14px] max-w-[307px] w-full text-center">
              Our neural models are processing thousands of authentic audio samples to create your unique session.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
