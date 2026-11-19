
"use client";

import type { Task } from "@/types";
import TaskItem from "./TaskItems";
import { Check } from "lucide-react";

type TaskListProps = {
  tasks: Task[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TaskList = ({
  tasks,
  onToggle,
  onDelete,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
      <div className="flex mn-h-60 flex-col items-center justify-center px-6 py-10 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#f0f6f2] text-[#6c9b82]">
          <Check />
        </div>
        <h2 className="text-base font-semibold text-[#304c3e]">Your list starts here</h2>
        <p className="mt-2 text-sm text-[#7a8881]">Add your first task above.</p>
      </div>
    );
  }

  return (
    <ul className="w-full divide-y divide-[#EDF1EE] px-3 py-2 sm:px-5">
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
