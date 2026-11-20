
"use client";
import { EmptyStates } from "./EmptyStates";
import type { Task } from "@/types";
import TaskItem from "./TaskItems";
import { Check } from "lucide-react";

type TaskListProps = {
  tasks: Task[];
  hasTask: boolean
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export const TaskList = ({
  tasks,
  hasTask,
  onToggle,
  onDelete,
}: TaskListProps) => {
  if (tasks.length === 0) {
    return (
    <EmptyStates hasTask = {hasTask} />
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
