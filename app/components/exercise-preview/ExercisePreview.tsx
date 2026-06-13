export function ExercisePreview() {
  return (
    <div className="border-2 border-surface-2 p-[25px] rounded-md bg-background flex flex-col gap-[18px]">
      <span className="text-primary text-[12px] font-bold">EXERCISE PREVIEW</span>

      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">LEVEL</span>
          <span className="text-[11px] md:text-[14px] font-bold">B1</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">TOPIC</span>
          <span className="text-[11px] md:text-[14px] font-bold">Technology</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] text-muted-foreground">LENGTH</span>
          <span className="text-[11px] md:text-[14px] font-bold">Medium</span>
        </div>
      </div>
    </div>
  );
}
