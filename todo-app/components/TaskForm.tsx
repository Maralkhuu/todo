
"use client";

import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { Plus, CornerDownLeft } from "lucide-react";

type TaskFormProps = {
  onAddTask: (title: string) => void;
};

export default function TaskForm({ onAddTask }: TaskFormProps) {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!newTask.trim()) return;

    onAddTask(newTask.trim());
    setNewTask("");
  };

  return (
    <div className="px-5 sm:px-8">
      <form
        onSubmit={handleSubmit}
        className="flex w-full gap-2 rounded-2xl border border-[#DCE9E2] bg-[#F4F8F5] p-2 transition focus-within:border-[#236B53]"
      >
        <input
          type="text"
          required
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
          placeholder="Plan this week's projects"
          maxLength={120}
          className="min-w-0 flex-1 rounded-xl bg-transparent px-3 py-3 text-sm text-[#213D35] placeholder:text-[#75867E] outline-none transition focus:bg-white sm:px-4 sm:text-base"
        />

        <button
          type="submit"
          className="flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-[#236B53] px-3 text-sm font-semibold text-white transition hover:bg-[#18523E] active:scale-95 disabled:cursor-not-allowed disabled:bg-[#D8E5DD] disabled:text-[#63796C] sm:gap-2 sm:px-5"
        >
          <Plus size={18} />
          Add
        </button>
      </form>

      <p className="mb-6 mt-3 flex items-center justify-end gap-1.5 text-[11px] text-[#7A8881] sm:mb-7">
        <CornerDownLeft size={13} />
        Enter to add a task
      </p>
    </div>
  );
};
