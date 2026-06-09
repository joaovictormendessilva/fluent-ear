import { WavesHorizontal } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-surface h-[65px]">
      <div className="max-w-[1440px] h-full px-[20px] flex items-center">
        <div className="flex items-center gap-[6px]">
          <div className="w-[32px] h-[32px] flex justify-center items-center bg-foreground text-[#16191DFF] rounded-[6px]">
            <WavesHorizontal />
          </div>

          <span className="text-[20px] font-bold">FluentEar</span>
        </div>
      </div>
    </div>
  );
}
