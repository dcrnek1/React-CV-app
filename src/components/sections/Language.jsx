import { useRef, useState } from "react";
import ClearButton from "./helper/ClearButton";
import { Plus, X } from "lucide-react";

export default function Language({ resetData, resetDefault, data, setData }) {

  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  function addLanguage() {
    if (data.languages.length < 6 && inputValue != "") {
      setData(prev => ({
        ...prev,
        languages: [...prev.languages, inputValue]
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
            <div className="text-lg font-semibold">Languages</div>
            <div className="text-xs italic text-slate-400">
              Input your languages in form below
            </div>
          </div>
          <div>
            <ClearButton resetData={resetData} resetDefault={resetDefault} />
          </div>
        </div>
        <div>
          <div className="flex flex-row justify-between items-end gap-2 mb-6">
            <div className="flex-1">
              <label htmlFor="first_name" ref={inputRef} className="block mb-2 text-sm font-medium text-slate-300">New language</label>
              <input disabled={data.languages.length >= 6 ? true : false} value={inputValue || ''} placeholder={data.languages.length >= 6 ? "Maximum of 6 languages saved" : ""} onChange={(e) => setInputValue(e.target.value)} type="text" id="first_name" className="border text-sm rounded-lg block max-w-100 w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault(); // prevent form submit or newline
                    addLanguage();
                  }
                }} />
            </div>
            <div className=" justify-self-end">
              <button className="rounded-md p-2.5 px-5 text-sm font-bold text-gray-300 hover:bg-sky-500 bg-sky-600 hover:text-white flex justify-between gap-2 items-center font-bold text-lg"
                onClick={() => addLanguage()} >
                <Plus size={17} strokeWidth={3} />
                <div>Add</div>
              </button>
            </div>
          </div>
          {/* Skills list */}
          <div className="flex flex-col gap-2">
            {data.languages.length > 0 && data.languages.map((language, index) => {
              return (
                <div key={"language-" + index} className="flex flex-row place-content-between bg-slate-600 hover:bg-slate-500 rounded-lg py-2 px-3 text-md font-semibold">
                  <div>{language}</div>
                  <div>
                    <button className="rounded-md p-1 text-sm font-bold text-slate-300 hover:bg-slate-700 bg-slate-800 hover:text-slate-300 flex justify-between gap-2 items-center font-bold text-lg"
                      onClick={() => setData(
                        (prev) => ({
                          ...prev,
                          languages: prev.languages.filter((language, i) => i !== index)
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
      </div>
    </>
  );
}
