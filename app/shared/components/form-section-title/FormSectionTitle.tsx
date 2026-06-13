import { FormSectionTitleProps } from "./FormSectionTitle.types";

export function FormSectionTitle({ icon, title }: FormSectionTitleProps) {
  return (
    <div className="flex items-center gap-[8px]">
      <div className="text-primary">{icon}</div>

      <span className="text-[14px] text-muted-foreground font-bold">{title}</span>
    </div>
  );
}
