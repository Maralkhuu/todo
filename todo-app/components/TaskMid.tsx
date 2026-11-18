import React from "react";
import { Plus, CornerDownLeft } from "lucide-react";

export const TaskMid = () => {
  return (
    <div className="px-8">
      <div className="rounded-2xl border p-2 flex gap-2 bg-[#F4F8F5] border-[#DCE9E2] ">
        <input
          type="search"
          placeholder="Plan this week’s projects"
          enterKeyHint="search"
          autoComplete="off"
          maxLength={120}
          className="text-[#213D35] min-w-0 flex-1 rounded-xl p-4 text-sm placeholder:text-[#75867e] focus:bg-white focus:outline-none sm:px-4 sm:text-base "
        />
        <button type="submit"
        className="cursor-pointer flex min-h-12 shrink-0 items-center gap-2 rounded-xl bg-[#236b53] px-4 text-sm font-semibold transition hover:bg-[#18523e] active:scale-95 disabled:bg-[#d8e5dd] disabled:text-[#63796c] sm:px-5 " disabled>
            <Plus />
            Add
        </button>
      </div>
      <p className="mx-7 mb-7 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7a8881] sm:mx-9">
        <CornerDownLeft />
        Enter to add a task</p>
    </div>
  );
};
