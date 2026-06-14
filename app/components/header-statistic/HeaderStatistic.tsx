import { HeaderStatisticProps } from "./HeaderStatistic.types";

export function HeaderStatistic({ title, value, icon, backgroundColor }: HeaderStatisticProps) {
  return (
    <div className="flex gap-[11px] items-center">
      <div className={`h-[32px] w-[32px] rounded-[12px] flex items-center justify-center`} style={{ backgroundColor }}>
        {icon}
      </div>

      <div className="flex flex-col">
        <span className="hidden sm:block text-muted-foreground text-[10px]">{title}</span>
        <span className="hidden sm:block text-foreground text-[14px] font-bold mt-[-4px]">{value}</span>
      </div>
    </div>
  );
}
