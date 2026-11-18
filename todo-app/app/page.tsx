import Image from "next/image";
import { Tasktop } from "@/components/TaskTop";
import { TaskMid } from "@/components/TaskMid";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EAF0EB] px-16 py-20">
      <div className="w-2xl h-119 rounded-3xl bg-white mx-auto">
        <Tasktop />
        <TaskMid />
      </div>
    </main>
  );
}
