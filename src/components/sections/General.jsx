import { Upload, X } from "lucide-react";
import ClearButton from "./helper/ClearButton";

export default function General({ resetData, resetDefault, data, setData }) {
  function handleImageChange(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setData((prev) => ({...prev, picture: reader.result}))
      }
      reader.readAsDataURL(file)
      setData((prev) => ({...prev, pictureName: event.target.files[0].name}))
    }
  }

  return (
    <>
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div className="flex flex-row place-content-between">
          <div className="flex flex-col">
            <div className="text-lg font-semibold">Personal info</div>
            <div className="text-xs italic text-slate-400">
              Input your personal info in form below
            </div>
          </div>
          <div>
            <ClearButton resetData={resetData} resetDefault={resetDefault} />
          </div>
        </div>
        {/* Form */}
        <div>
          {/* //TO-do */}
          <label htmlFor="profile_pic" className={`${data.picture ? "hidden" : ""} pl-3 border text-sm rounded-lg block w-full mb-6 p-2.5 bg-slate-600 h-12 hover:bg-slate-500 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500 flex flex-row gap-4 items-center`}>
            <Upload size={18}/>
            <div>{!data.picture && "Choose profile picture (PNG, JPG)"}</div>
          </label>
            {data.picture && 
              <div className={`${data.picture ? "" : "hidden"} flex flex-row pl-3 justify-between border text-sm rounded-lg block w-full mb-6 p-2.5 h-12 bg-slate-600 hover:bg-slate-500 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500`}>
                <div className="flex flex-row gap-4 items-center">
                  <div className={`self-center bg-neutral-200 size-8 rounded-full flex items-center justify-center`}>
                    <div className={`bg-neutral-300 size-8 rounded-full bg-cover bg-center`} style={{backgroundImage: `url("${data.picture}")`}}></div>
                  </div>
                  <div>
                    {data.pictureName}
                  </div>
                </div>
                <div className="z-41">
                  <button className="rounded-md p-1 z40 text-sm font-bold text-slate-300 hover:bg-slate-700 bg-slate-800 flex justify-between gap-2 items-center font-bold text-lg"
                  onClick={(e) => {e.stopPropagation(); setData((prev) =>{console.log("test"); return ({...prev, picture: null, pictureName: null})})}}>
                    <X size={15} strokeWidth={3} />
                  </button>
                </div>
              </div>
            }
          <input type="file" value={""} onChange={(e) => handleImageChange(e)} className="hidden" id="profile_pic" name="avatar" accept="image/png, image/jpeg" />
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-300">First name</label>
              <input value={data.nameSummary.firstName || ''} onChange={(e) => setData(prev => ({...prev, nameSummary: {...prev.nameSummary, firstName: e.target.value}}))} type="text" id="first_name" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
            <div>
              <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-slate-300">Last name</label>
              <input value={data.nameSummary.lastName || ''} onChange={(e) => setData(prev => ({...prev, nameSummary: {...prev.nameSummary, lastName: e.target.value}}))} type="text" id="last_name" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-slate-300">Phone number</label>
              <input value={data.contact.phone || ''} onChange={(e) => setData(prev => ({...prev, contact: {...prev.contact, phone: e.target.value}}))} type="text" id="phone" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-300">E-mail</label>
              <input value={data.contact.email || ''} onChange={(e) => setData(prev => ({...prev, contact: {...prev.contact, email: e.target.value}}))} type="text" id="email" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
            <div>
              <label htmlFor="address" className="block mb-2 text-sm font-medium text-slate-300">Address</label>
              <input value={data.contact.address || ''} onChange={(e) => setData(prev => ({...prev, contact: {...prev.contact, address: e.target.value}}))} type="text" id="address" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
            <div>
              <label htmlFor="website" className="block mb-2 text-sm font-medium text-slate-300">Website address</label>
              <input value={data.contact.website || ''} onChange={(e) => setData(prev => ({...prev, contact: {...prev.contact, website: e.target.value}}))} type="text" id="website" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500" placeholder="" />
            </div>
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-1 lg:h-50 sm:h-30 mb-10">
          <div>
              <label htmlFor="summary" className="block mb-2 text-sm font-medium text-slate-300">Summary</label>
              <textarea value={data.nameSummary.summary || ''} onChange={(e) => setData(prev => ({...prev, nameSummary: {...prev.nameSummary, summary: e.target.value}}))} type="text" id="summary" className="border text-sm rounded-lg block w-full p-2.5 bg-slate-600 border-gray-600 placeholder-slate-400 text-white focus:ring-blue-500 [&::-webkit-scrollbar]:bg-gray-700 sm:h-30 lg:h-50 [&::-webkit-scrollbar-thumb]:bg-gray-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar]:w-2" placeholder="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
