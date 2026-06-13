"use client";

import { useState } from "react";

export function ProficiencyLevelContainer() {
  const [selectedLevel, setSelectedLevel] = useState("a1");

  const levels = ["a1", "a2", "b1", "b2", "c1"];

  return (
    <div className="bg-background flex gap-1 rounded-sm">
      {levels.map((level) => (
        <button
          key={level}
          className={`uppercase w-full h-[44px] rounded-sm cursor-pointer text-[14px] font-bold ${selectedLevel !== level && "text-muted-foreground"} ${selectedLevel === level && "bg-primary"}`}
          onClick={() => setSelectedLevel(level)}
        >
          {level}
        </button>
      ))}
    </div>
  );
}
