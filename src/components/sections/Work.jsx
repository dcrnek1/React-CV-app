import { useRef, useState } from "react";
import ClearButton from "./helper/ClearButton";
import { Edit, Edit2, Plus, Save, X } from "lucide-react";

export default function Work({ resetData, resetDefault, setData, data }) {
  const [inputCompanyName, setInputCompanyName] = useState("");
  const [inputCompanyLocation, setInputCompanyLocation] = useState("");
  const [inputEmploymentFrom, setInputEmploymentFrom] = useState("");
  const [inputEmploymentTo, setInputEmploymentTo] = useState("");
  const [inputPosition, setInputPosition] = useState("");
  const [inputWorkArray, setInputWorkArray] = useState([]);
  const [inputWorkTask, setInputWorkTask] = useState("");

  const [validation, setValidation] = useState(true);
  const [editing, setEditing] = useState({isEditing: false, index: null});
  
  const inputTaskButton = useRef(null);
  const inputCompanyRef = useRef(null);

  function addTask() {
    if (inputWorkArray.length < 4 && inputWorkTask != "") {
      setInputWorkArray((prev) => [...prev, inputWorkTask])
      setInputWorkTask("");
      inputTaskButton.current?.focus();
    }
  }

  function saveExperience() {
    if (inputCompanyName != "" && inputCompanyLocation != "" && inputEmploymentFrom != "" && inputEmploymentTo != "") {
      setValidation(true);
      if(!editing.isEditing) {
        setData((prev) => ({...prev,
          experience: [
            {
              employer: inputCompanyName,
              dateFrom: inputEmploymentFrom,
              dateTo: inputEmploymentTo,
              location: inputCompanyLocation,
              position: inputPosition,
              work: inputWorkArray,
            },
            ...prev.experience
          ]
        }));
      } else if (editing.isEditing) {
        setData((prev) => {
          const newData = {...prev};
          newData.experience[editing.id] ={
            employer: inputCompanyName,
            dateFrom: inputEmploymentFrom,
            dateTo: inputEmploymentTo,
            location: inputCompanyLocation,
            position: inputPosition,
            work: inputWorkArray,
          };
          return newData;
        });
      cancelEdit();
    }
      
      clearInputs();
      inputCompanyRef.current?.focus();
    } else {
      setValidation(false);
    }
  }

  function clearInputs() {
    setInputCompanyName(""); setInputCompanyLocation(""); setInputEmploymentFrom(""); setInputEmploymentTo(""); setInputPosition(""); setInputWorkArray([]); setInputWorkTask("");
  }

  function cancelEdit() {
    setEditing({isEditing: false, index: null});
  }

  function removeExperience(index) {
    // TO-DO
    console.log("Removing experience with index " + index);
  }

  function editExperience(index) {
    
      setInputCompanyName(data.experience[index].employer);
      setInputCompanyLocation(data.experience[index].location);
      setInputEmploymentFrom(data.experience[index].dateFrom);
      setInputEmploymentTo(data.experience[index].dateTo);
      setInputPosition(data.experience[index].position);
      setInputWorkArray(data.experience[index].work);

      setEditing({isEditing: true, id: index});
    
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row place-content-between">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">Work</div>
            <div className="text-xs italic text-slate-400">
              Input your work experience in form below
            </div>
          </div>
          <div>
            <ClearButton resetData={resetData} resetDefault={resetDefault} />
          </div>
        </div>
        <div className=" border border-slate-500 rounded-lg p-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="Company_name" className="block mb-2 text-sm font-medium text-slate-300">Company name <span className={!validation && inputCompanyName === "" ? "text-red-500" : ""}>*</span></label>
              <input ref={inputCompanyRef} value={inputCompanyName || ''} onChange={(e) => setInputCompanyName(e.target.value)} type="text" id="Company_name" className={`border ${!validation && inputCompanyName === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-medium text-slate-300">Work location <span className={!validation && inputCompanyLocation === "" ? "text-red-500" : ""}>*</span></label>
              <input value={inputCompanyLocation || ''} onChange={(e) => setInputCompanyLocation(e.target.value)} type="text" id="location" className={`border ${!validation && inputCompanyLocation === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="emplyment_from" className="block mb-2 text-sm font-medium text-slate-300">Employment start date <span className={!validation && inputEmploymentFrom === "" ? "text-red-500" : ""}>*</span></label>
              <input value={inputEmploymentFrom || ''} onChange={(e) => setInputEmploymentFrom(e.target.value)} type="text" id="emplyment_from" className={`border ${!validation && inputEmploymentFrom === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="emplyment_to" className="block mb-2 text-sm font-medium text-slate-300">Employment end date <span className={!validation && inputEmploymentTo === "" ? "text-red-500" : ""}>*</span></label>
              <input value={inputEmploymentTo || ''} onChange={(e) => setInputEmploymentTo(e.target.value)} type="text" id="emplyment_to" className={`border ${!validation && inputEmploymentTo === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="position" className="block mb-2 text-sm font-medium text-slate-300">Job title</label>
              <input value={inputPosition || ''} onChange={(e) => setInputPosition(e.target.value)} type="text" id="position" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
          </div>
          <div className="text-xs italic text-slate-400 my-3">
              Below add maximum of 4 job tasks
          </div>
          <div className="flex flex-row justify-between items-end gap-2 mb-6">
            <div className="flex-1">
              <label htmlFor="work_task" className="block mb-2 text-sm font-medium text-slate-300">New work task</label>
              <input disabled={inputWorkArray.length >= 4 ? true : false} placeholder={inputWorkArray.length >= 4 ? "Maximum of 4 tasks already added" : ""} value={inputWorkTask || ""} ref={inputTaskButton} onChange={(e) => setInputWorkTask(e.target.value)} type="text" id="work_task" className="border text-sm rounded-lg block max-w-100 w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // prevent form submit or newline
                  addTask();
                }
              }} />
            </div>
            <div className=" justify-self-end">
              <button className="rounded-md p-2.5 px-5 text-sm font-bold text-gray-300 hover:bg-slate-500 bg-slate-600 hover:text-white flex justify-between gap-2 items-center font-bold text-lg"
              onClick={() => addTask()}>
                <Plus size={17} strokeWidth={3} />
                <div>Add</div>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {inputWorkArray.length > 0 && inputWorkArray.map((task, index) => {
              return (
                <div key={"language-" + index} className="flex flex-row place-content-between bg-slate-600 hover:bg-slate-500 rounded-lg py-2 px-3 text-md font-semibold">
                  <div>{task}</div>
                  <div>
                    <button className="rounded-md p-1 text-sm font-bold text-gray-300 hover:bg-slate-700 bg-slate-800 hover:text-white flex justify-between gap-2 items-center font-bold text-lg"
                      onClick={() => setInputWorkArray(
                        (prev) => (prev.filter((task, i) => i !== index)))}>
                      <X size={15} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="flex flex-row gap-3 mt-3">
              <button onClick={() => saveExperience()} className="flex-4 rounded-md p-2.5 text-sm font-bold text-gray-300 hover:bg-sky-500 bg-sky-600/70 hover:text-white flex justify-center gap-2 items-center font-bold text-lg">
              <Save />
              <div>Save {editing.isEditing ? "edit" : ""}</div>
              </button>
              {editing.isEditing && <button onClick={() => {cancelEdit(); clearInputs();}} className="flex-2 rounded-md p-2.5 text-sm font-bold text-gray-300 hover:bg-red-400 bg-red-400/70 hover:text-white flex justify-center gap-2 items-center font-bold text-lg">
              <X size={30}/>
              <div className="text-md">Cancel {editing.isEditing ? "edit" : ""}</div>
              </button>}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          {data.experience.length > 0 && 
          data.experience.map((work, index) => {
            return (
              <div key={"workExperience-" + index} className={`${editing.isEditing && editing.id === index ? "outline-4 outline-sky-700" : ""} flex flex-row gap-2 bg-slate-600 p-2 rounded-md text-slate-200 items-center justify-between`}>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">{work.employer}</div>
                  <div className="text-xs italic text-slate-400">{work.dateFrom + " - " + work.dateTo} - {work.location}</div>
                </div>
                <div className="flex flex-row gap-2">
                  <button className="rounded-md p-1.5 text-sm font-bold text-slate-300 hover:bg-slate-700 bg-slate-800 flex justify-between gap-2 items-center font-bold text-lg"
                  onClick={() => removeExperience(index)}>
                    <X size={15} strokeWidth={3} />
                  </button>
                  <button className="rounded-md p-1.5 text-sm font-bold text-slate-300 hover:bg-slate-700 bg-slate-800 flex justify-between gap-2 items-center font-bold text-lg"
                  onClick={() => editExperience(index)}>
                    <Edit2 size={15} strokeWidth={3} />
                  </button>
                </div>
              </div>
            )
          })
          
          }
        </div>
      </div>
    </>
  );
}
