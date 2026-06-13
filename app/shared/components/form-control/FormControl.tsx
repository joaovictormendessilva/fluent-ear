import { FormControlProps } from "./FormControl.types";

export function FormControl({ children }: FormControlProps) {
  return <div className="flex flex-col gap-[16px]">{children}</div>;
}
