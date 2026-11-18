import React from "react";
import { ListTodo } from "lucide-react";

export const Tasktop = () => {
  return (
    <div className="items-center gap-3 px-8 pt-8 pb-6 flex sm:px-8 sm:pt-8">
      <div className="w-11 h-11 rounded-2xl text-[#23735A] bg-[#E5F2ED] flex justify-center items-center">
        <ListTodo className="" />
      </div>
      <h1 className="text-2xl font-semibold tracking-tight text-[#213D35] ">
        My tasks.
      </h1>
    </div>
  );
};
