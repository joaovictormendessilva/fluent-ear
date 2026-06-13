import { CircleUserRound, Flame, Settings, Target, WavesHorizontal } from "lucide-react";
import { HeaderStatistic } from "../header-statistic";

export function AppBar() {
  return (
    <div className="bg-surface h-[65px]">
      <div className="max-w-[1440px] h-full m-auto px-[20px] flex justify-between items-center">
        <div className="flex items-center gap-[6px]">
          <div className="w-[32px] h-[32px] flex justify-center items-center bg-foreground text-[#16191DFF] rounded-[6px]">
            <WavesHorizontal />
          </div>

          <span className="text-[20px] font-bold">FluentEar</span>
        </div>

        <div className="flex items-center gap-[6px] sm:gap-[50px]">
          <div className="flex sm:gap-[32px]">
            <HeaderStatistic
              title="STREAK"
              value="12 Days"
              backgroundColor="#ff572257"
              icon={<Flame size={16} color="#F97316FF" />}
            />
            <HeaderStatistic
              title="ACCURACY"
              value="94%"
              backgroundColor="#06B6D41A"
              icon={<Target size={16} color="#06B6D4FF" />}
            />
          </div>

          <div className="flex items-center gap-[12px] text-muted-foreground">
            <Settings />
            <CircleUserRound size={36} />
          </div>
        </div>
      </div>
    </div>
  );
}
