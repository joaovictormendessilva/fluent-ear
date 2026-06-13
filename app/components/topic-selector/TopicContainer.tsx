import { ChevronDown } from "lucide-react";

export function TopicContainer() {
  return (
    <div className="relative flex justify-end items-center">
      <select className="form-control">
        <option>Technology</option>
        <option>Travel</option>
        <option>Food</option>
        <option>Business</option>
        <option>Daily Life</option>
        <option>Gaming</option>
        <option>Science</option>
      </select>

      <div className="absolute pr-[20px] pointer-events-none">
        <ChevronDown />
      </div>
    </div>
  );
}
