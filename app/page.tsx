import { Headphones, Sparkles } from "lucide-react";
import { GenerateExerciseForm } from "./components/gerenate-exercise-form";

export default function Home() {
  return (
    <div className="max-w-[1192px] w-full px-[20px] m-auto mt-[48px]">
      <h1 className="text-[22px] md:text-[36px] font-bold text-center md:text-left">Create Your Listening Session</h1>
      <p className="text-[14px] md:text-[18px] text-muted-foreground text-center md:text-left">
        Generate a personalized listening exercise tailored to your goals.
      </p>

      <div className="flex flex-row justify-center md:justify-between gap-[48px]">
        <GenerateExerciseForm />

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
