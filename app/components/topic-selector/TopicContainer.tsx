import { RHFSelectInput } from "@/app/shared/components/rhf-select-input";
import { topics } from "./TopicContainer.utils";

export function TopicContainer() {
  return <RHFSelectInput name="topic" options={topics} />;
}
