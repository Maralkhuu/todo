
"use client";

import type { Task } from "@/types";
import { Check, Trash2 } from "lucide-react";

type TaskItemProps = {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TaskItems({
  task,
  onToggle,
  onDelete,
}: TaskItemProps) {
  return (
    <div
      className={`flex min-h-[64px] w-full items-center justify-between gap-3 px-2 py-3 sm:px-3 ${
        task.completed
          ? "rounded-xl border border-[#F8FAF8] bg-[#F8FAF8]"
          : "border-b border-[#EEF2EF]"
      }`}
    >
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <button
          type="button"
          onClick={() => onToggle(task.id)}
          aria-label="Toggle task completion"
          aria-pressed={task.completed}
          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full transition-colors ${
            task.completed
              ? "bg-[#236B53] text-white"
              : "border-[1.5px] border-[#C7D5CC] hover:border-[#236B53]"
          }`}
        >
          {task.completed && <Check size={14} />}
        </button>

        <p
          className={`min-w-0 text-sm leading-relaxed sm:text-[15px] ${
            task.completed
              ? "text-[#A6B2AA] line-through"
              : "text-[#213D35]"
          }`}
        >
          {task.title}
        </p>
      </div>

      <button
        type="button"
        onClick={() => onDelete(task.id)}
        aria-label="Delete task"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-[#A6B2AA] transition-colors hover:bg-red-50 hover:text-red-500 sm:h-11 sm:w-11"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}
