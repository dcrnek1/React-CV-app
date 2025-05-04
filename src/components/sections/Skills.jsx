import ClearButton from "./helper/ClearButton";

export default function Skills({ resetData, resetDefault }) {
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
        <div>Form goes here</div>
      </div>
    </>
  );
}
