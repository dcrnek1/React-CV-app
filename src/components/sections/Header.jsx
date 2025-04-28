import { BookText } from "lucide-react";

export default function Header() {
  return (
    <>
      <div className="text-white font-bold text-xl py-3 flex flex-row items-center min-w-screen w-full bg-gradient-to-r from-cyan-500 from--20% via-sky-500 via-10% to-indigo-500 to-120%">
        <div className="flex gap-2 px-4 items-center">
          <div><BookText strokeWidth={2} /></div>
          <div className="font-playball text-3xl font-thin">Curriculum Vitae</div>
        </div>
        
      </div>
    </>
  );
}
