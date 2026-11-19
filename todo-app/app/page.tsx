
"use client";

import { useState } from "react";
import type { Task, TaskFilter } from "@/types";

import {
  TaskList,
  TaskFilters,
  TaskForm,
  TaskHeader,
} from "@/components";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [activeFilter, setActiveFilter] = useState<TaskFilter>("All");

  // Add task
  const addTask = (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  // Toggle task
  const toggleTask = (id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id: number) => {
    setTasks((prev) =>
      prev.filter((task) => task.id !== id)
    );
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Active") return !task.completed;
    if (activeFilter === "Completed") return task.completed;

    return true;
  });

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-[#EAF0EB] px-4 py-8 font-sans sm:px-6 sm:py-12 md:px-10 md:py-16">
      <div className="min-h-[476px] w-full max-w-[672px] overflow-hidden rounded-2xl bg-white shadow-sm sm:rounded-[24px]">
        <TaskHeader />

        <TaskForm onAddTask={addTask} />

        <section className="pb-5 sm:pb-7">
          <TaskFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            taskCount={tasks.length}
          />

          <TaskList
            tasks={filteredTasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </section>
      </div>
    </main>
  );
}
