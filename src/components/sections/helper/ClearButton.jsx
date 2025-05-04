import { ArrowRightFromLine, RotateCcw } from "lucide-react";

export default function ClearButton({ resetData, resetDefault }) {
  return (
    <>
      <div className="flex flex-row gap-1">
        <button
          onClick={resetData}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800 bg-gray-600 hover:text-whit"
        >
          <RotateCcw size={12} strokeWidth={3} />
          <div>Clear</div>
        </button>

        <button
          onClick={resetDefault}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800 bg-gray-600 hover:text-whit"
        >
          <ArrowRightFromLine size={12} strokeWidth={3} />
          <div>Set default</div>
        </button>
      </div>
    </>
  );
}
