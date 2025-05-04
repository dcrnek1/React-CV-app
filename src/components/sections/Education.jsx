import ClearButton from "./helper/ClearButton";

export default function Education({ resetData, resetDefault }) {
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
            <ClearButton resetData={resetData} resetDefault={resetDefault}/>
          </div>
        </div>
        <div>Form goes here</div>
      </div>
    </>
  );
}
