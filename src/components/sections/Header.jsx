import { BookText } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="text-white font-bold text-xl py-3 flex flex-row items-center w-screen bg-gradient-to-r from-cyan-500 from--20% via-sky-500 via-10% to-indigo-500 to-120%">
        <div className="flex gap-2 px-6 items-center">
          <div><BookText strokeWidth={1.5} /></div>
          <div>CV Generator App</div>
        </div>
        
      </div>
    </>
  );
}
