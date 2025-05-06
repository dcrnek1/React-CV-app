import { Plus, X } from "lucide-react";
import ClearButton from "./helper/ClearButton";
import { useRef, useState } from "react";

export default function Skills({ resetData, resetDefault, data, setData }) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  function addSkill() {
    if (data.skills.length < 6 && inputValue != "") {
      setData(prev => ({
        ...prev,
        skills: [...prev.skills, inputValue]
      }));
      setInputValue(""); 
      inputRef.current?.focus();
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row place-content-between">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">Skills</div>
            <div className="text-xs italic text-slate-400">
              Input your skills in form below
            </div>
          </div>
          <div>
            <ClearButton resetData={resetData} resetDefault={resetDefault} />
          </div>
        </div>
        {/* Input and add button */}
        <div className="flex flex-row justify-between items-end gap-2">
            <div className="flex-1">
              <label htmlFor="first_name" ref={inputRef} className="block mb-2 text-sm font-medium text-slate-300">New skill</label>
              <input disabled={data.skills.length >= 6 ? true : false} value={inputValue || ''} placeholder={data.skills.length >= 6 ? "Maximum of 6 skills saved" : ""} onChange={(e) => setInputValue(e.target.value)} type="text" id="first_name" className="border text-sm rounded-lg block max-w-100 w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" 
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // prevent form submit or newline
                  addSkill();
                }
              }} />
            </div>
            <div className=" justify-self-end">
              <button className="rounded-md p-2.5 px-5 text-sm font-bold text-gray-300 hover:bg-sky-500 bg-sky-600 hover:text-white flex justify-between gap-2 items-center font-bold text-lg" 
              onClick={() => addSkill()} >
                <Plus size={17} strokeWidth={3} />
                <div>Add</div>
              </button>
            </div>
          </div>
          {/* Skills list */}
        <div className="flex flex-col gap-2">
          {data.skills.length > 0 && data.skills.map((skill, index) => {
            return (
              <div key={"skill-" + index} className="flex flex-row place-content-between bg-slate-600 hover:bg-slate-500 rounded-lg py-2 px-3 text-md font-semibold">
                <div>{skill}</div>
                <div>
                <button className="rounded-md p-1 text-sm font-bold text-gray-300 hover:bg-red-500 bg-red-600/70 hover:text-white flex justify-between gap-2 items-center font-bold text-lg"
                onClick={() => setData(
                  (prev) => ({
                    ...prev,
                    skills: prev.skills.filter((skill, i) => i !== index)
                  })
                )}>
                  <X size={15} strokeWidth={3} />
                </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}
