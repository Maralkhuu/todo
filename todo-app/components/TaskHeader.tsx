
import { ListTodo } from "lucide-react";

export const TaskHeader = () => {
  return (
    <header className="flex items-center gap-3 px-5 pt-6 pb-6 sm:px-8 sm:pt-8">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E5F2ED] text-[#23735A]">
        <ListTodo size={22} />
      </div>

      <h1 className="text-xl font-semibold tracking-tight text-[#213D35] sm:text-2xl">
        My tasks.
      </h1>
    </header>
  );
};
