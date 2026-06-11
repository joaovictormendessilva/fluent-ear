import { HeaderStatisticProps } from "./HeaderStatistic.types";

export function HeaderStatistic({ title, value, icon, backgroundColor }: HeaderStatisticProps) {
  return (
    <div className="flex gap-[11px] items-center">
      <div className={`h-[32px] w-[32px] rounded-[12px] bg-[${backgroundColor}] flex items-center justify-center`}>
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="hidden sm:block text-muted-foreground text-[10px]">{title}</span>
        <span className="hidden sm:block text-foreground text-[14px] font-bold">{value}</span>
      </div>
    </div>
  );
}
