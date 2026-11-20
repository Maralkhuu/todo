
"use client";

import type { TaskFilter } from "@/types";
import type {Task} from "@/types"


type TaskFiltersProps = {
  activeFilter: TaskFilter;
  onFilterChange: (filter: TaskFilter) => void;
  tasks: Task[];
};

export default function TaskFilters({
  activeFilter,
  onFilterChange,
  tasks
}: TaskFiltersProps) {
  const filters: TaskFilter[] = ["All", "Active", "Completed"];

  return (
    <div className="mb-4 flex items-center justify-between border-b border-[#E8EEE9] px-3 pb-3 sm:px-6 md:px-8">
      <div className="flex items-center gap-4 sm:gap-6">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => onFilterChange(filter)}
            aria-pressed={activeFilter === filter}
            className={`relative cursor-pointer pb-3 text-xs sm:text-sm ${
              activeFilter === filter
                ? "border-b-2 border-[#236B53] font-semibold text-[#236B53]"
                : "text-[#93A198] hover:text-[#236B53]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <span className="flex h-[25px] min-w-[25px] items-center justify-center rounded-[6px] bg-[#EAF3ED] px-2 text-xs font-semibold text-[#236B53]">
        {tasks.length}
      </span>
    </div>
  );
}
