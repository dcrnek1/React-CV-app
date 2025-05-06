import { useRef, useState } from "react";
import ClearButton from "./helper/ClearButton";
import { Edit2, Plus, Save, X } from "lucide-react";

export default function Education({ resetData, resetDefault, setData, data }) {
  const [inputSchool, setInputSchool] = useState("");
  const [inputLocation, setInputLocation] = useState("");
  const [inputDateFrom, setInputDateFrom] = useState("");
  const [inputDateTo, setInputDateTo] = useState("");
  const [inputField, setInputField] = useState("");
  const [inputNotesArray, setInputNotesArray] = useState([]);
  const [inputNote, setInputNote] = useState("");

  const [validation, setValidation] = useState(true);
  const [editing, setEditing] = useState({isEditing: false, index: null});
  
  const inputNotesButton = useRef(null);
  const inputSchoolRef = useRef(null);

  function addNote() {
    if (inputNotesArray.length < 4 && inputNote != "") {
      setInputNotesArray((prev) => [...prev, inputNote])
      setInputNote("");
      inputNotesButton.current?.focus();
    }
  }

  function saveEducation() {
    if (inputSchool != "" && inputLocation != "" && inputDateFrom != "" && inputDateTo != "") {
      setValidation(true);
      if(!editing.isEditing) {
        setData((prev) => ({...prev,
          education: [
            {
              school: inputSchool,
              dateFrom: inputDateFrom,
              dateTo: inputDateTo,
              location: inputLocation,
              field: inputField,
              notes: inputNotesArray,
            },
            ...prev.education
          ]
        }));
      } else if (editing.isEditing) {
        setData((prev) => {
          const newData = {...prev};
          newData.education[editing.id] ={
            school: inputSchool,
            dateFrom: inputDateFrom,
            dateTo: inputDateTo,
            location: inputLocation,
            field: inputField,
            notes: inputNotesArray,
          };
          console.log(newData);
          return newData;
        });
      cancelEdit();
    }
      
      clearInputs();
      inputSchoolRef.current?.focus();
    } else {
      setValidation(false);
    }
  }

  function clearInputs() {
    setInputSchool(""); setInputLocation(""); setInputDateFrom(""); setInputDateTo(""); setInputField(""); setInputNotesArray([]); setInputNote("");
  }

  function cancelEdit() {
    setEditing({isEditing: false, index: null});
  }

  function removeEducation(index) {
    // TO-DO
    console.log("Removing education with index " + index);
  }

  function editExperience(index) {
    
      setInputSchool(data.education[index].school);
      setInputLocation(data.education[index].location);
      setInputDateFrom(data.education[index].dateFrom);
      setInputDateTo(data.education[index].dateTo);
      setInputField(data.education[index].field);
      setInputNotesArray(data.education[index].notes);

      setEditing({isEditing: true, id: index});
    
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        <div className="flex flex-row place-content-between">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">Education</div>
            <div className="text-xs italic text-slate-400">
              Input your education in form below
            </div>
          </div>
          <div>
            <ClearButton resetData={resetData} resetDefault={resetDefault} />
          </div>
        </div>
        <div className=" border border-slate-500 rounded-lg p-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label htmlFor="Company_name" className="block mb-2 text-sm font-medium text-slate-300">School name <span className={!validation && inputSchool === "" ? "text-red-500" : ""}>*</span></label>
              <input ref={inputSchoolRef} value={inputSchool || ''} onChange={(e) => setInputSchool(e.target.value)} type="text" id="Company_name" className={`border ${!validation && inputSchool === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="location" className="block mb-2 text-sm font-medium text-slate-300">School location <span className={!validation && inputLocation === "" ? "text-red-500" : ""}>*</span></label>
              <input value={inputLocation || ''} onChange={(e) => setInputLocation(e.target.value)} type="text" id="location" className={`border ${!validation && inputLocation === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="emplyment_from" className="block mb-2 text-sm font-medium text-slate-300">Start date (mm/YYYY) <span className={!validation && inputDateFrom === "" ? "text-red-500" : ""}>*</span></label>
              <input value={inputDateFrom || ''} onChange={(e) => setInputDateFrom(e.target.value)} type="text" id="emplyment_from" className={`border ${!validation && inputDateFrom === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="emplyment_to" className="block mb-2 text-sm font-medium text-slate-300">End date (mm/YYYY) <span className={!validation && inputDateTo === "" ? "text-red-500" : ""}>*</span></label>
              <input value={inputDateTo || ''} onChange={(e) => setInputDateTo(e.target.value)} type="text" id="emplyment_to" className={`border ${!validation && inputDateTo === "" && "border-red-500"} text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`} placeholder="" />
            </div>
            <div>
              <label htmlFor="field" className="block mb-2 text-sm font-medium text-slate-300">Field of study</label>
              <input value={inputField || ''} onChange={(e) => setInputField(e.target.value)} type="text" id="field" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
          </div>
          <div className="text-xs italic text-slate-400 my-3">
              Below add maximum of 4 achievements
          </div>
          <div className="flex flex-row justify-between items-end gap-2 mb-6">
            <div className="flex-1">
              <label htmlFor="work_task" className="block mb-2 text-sm font-medium text-slate-300">New achivement</label>
              <input disabled={inputNotesArray.length >= 4 ? true : false} placeholder={inputNotesArray.length >= 4 ? "Maximum of 4 tasks already added" : ""} value={inputNote || ""} ref={inputNotesButton} onChange={(e) => setInputNote(e.target.value)} type="text" id="work_task" className="border text-sm rounded-lg block max-w-100 w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault(); // prevent form submit or newline
                  addNote();
                }
              }} />
            </div>
            <div className=" justify-self-end">
              <button className="rounded-md p-2.5 px-5 text-sm font-bold text-gray-300 hover:bg-slate-500 bg-slate-600 hover:text-white flex justify-between gap-2 items-center font-bold text-lg"
              onClick={() => addNote()}>
                <Plus size={17} strokeWidth={3} />
                <div>Add</div>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            {inputNotesArray.length > 0 && inputNotesArray.map((task, index) => {
              return (
                <div key={"language-" + index} className="flex flex-row place-content-between bg-slate-600 hover:bg-slate-500 rounded-lg py-2 px-3 text-md font-semibold">
                  <div>{task}</div>
                  <div>
                    <button className="rounded-md p-1 text-sm font-bold text-gray-300 hover:bg-slate-700 bg-slate-800 hover:text-white flex justify-between gap-2 items-center font-bold text-lg"
                      onClick={() => setInputNotesArray(
                        (prev) => (prev.filter((task, i) => i !== index)))}>
                      <X size={15} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          
          <div className="flex flex-row gap-3 mt-3">
              <button onClick={() => saveEducation()} className="flex-4 rounded-md p-2.5 text-sm font-bold text-gray-300 hover:bg-sky-500 bg-sky-600/70 hover:text-white flex justify-center gap-2 items-center font-bold text-lg">
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
          {data.education.length > 0 && 
          data.education.map((education, index) => {
            return (
              <div key={"workExperience-" + index} className={`${editing.isEditing && editing.id === index ? "outline-4 outline-sky-700" : ""} flex flex-row gap-2 bg-slate-600 p-2 rounded-md text-slate-200 items-center justify-between`}>
                <div className="flex flex-col">
                  <div className="font-semibold text-lg">{education.school}</div>
                  <div className="text-xs italic text-slate-400">{education.dateFrom + " - " + education.dateTo} - {education.location}</div>
                </div>
                <div className="flex flex-row gap-2">
                  <button className="rounded-md p-1.5 text-sm font-bold text-slate-300 hover:bg-slate-700 bg-slate-800 flex justify-between gap-2 items-center font-bold text-lg"
                  onClick={() => removeEducation(index)}>
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
