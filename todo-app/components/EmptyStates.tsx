
import { Check } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center px-5 py-10 text-center sm:px-6 sm:py-12">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F6F2] text-[#6C9B82]">
        <Check size={24} />
      </div>

      <h2 className="text-base font-semibold text-[#304C3E]">
        Your list starts here
      </h2>

      <p className="mt-2 text-sm text-[#7A8881]">
        Add your first task above
      </p>
    </div>
  );
}

