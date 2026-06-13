"use client";

import { useState } from "react";

export function ContentLengthContainer() {
  const [selectedLength, setSelectedLength] = useState("Short");

  const lengths = ["Short", "Medium", "Long"];

  return (
    <div className="flex gap-[11px]">
      {lengths.map((length) => (
        <div
          key={length}
          className={`w-full bg-background rounded-md overflow-hidden ${selectedLength === length && "border-1 border-accent"}`}
        >
          <button
            className={`w-full h-[54px] text-[14px] font-bold ${selectedLength === length ? "bg-[#06B6D41A] text-accent" : "text-muted-foreground "}`}
            onClick={() => setSelectedLength(length)}
          >
            {length}
          </button>
        </div>
      ))}
    </div>
  );
}
