import { ArrowRightFromLine, RotateCcw } from "lucide-react";
import { useState } from "react";

export default function ClearButton({ resetData, resetDefault }) {

  const [isVisibleClearModal, setIsVisibleClearModal] = useState(false);
  const [isVisibleResetModal, setIsVisibleResetModal] = useState(false);
  const closeClearModal = () => setIsVisibleClearModal(false);
  const closeResetModal = () => setIsVisibleResetModal(false);

  return (
    <>
      <ModalConfirm isVisibleModal={isVisibleClearModal} closeModal={closeClearModal} subject="Clear all?" content='This action will clear all of your data and cant be undone.' action={resetData}/>
      <ModalConfirm isVisibleModal={isVisibleResetModal} closeModal={closeResetModal} subject="Set to default?" content='This action will clear all of your data and cant be undone.' action={resetDefault}/>
      <div className="flex flex-row gap-1">
        <button
          onClick={() => setIsVisibleClearModal(true)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800 bg-gray-600 hover:text-whit"
        >
          <RotateCcw size={12} strokeWidth={3} />
          <div>Clear all</div>
        </button>

        <button
          onClick={() => setIsVisibleResetModal(true)}
          className="flex items-center gap-1 rounded-md px-3 py-2 text-xs font-medium text-gray-300 hover:bg-gray-800 bg-gray-600 hover:text-whit"
        >
          <ArrowRightFromLine size={12} strokeWidth={3} />
          <div>Set default</div>
        </button>
      </div>
    </>
  );
}

function ModalConfirm({isVisibleModal, closeModal, content, action, subject}) {
  console.log(isVisibleModal ? 'block' : 'hidden')
  return (
    <div className={isVisibleModal ? 'block' + ' fixed inset-0 z-50 flex items-center justify-center bg-black/70' : 'hidden'}>
        <section className="bg-slate-700 p-4 rounded-lg flex flex-col gap-6 text-slate-200">
          <div className="text-lg font-semibold text-slate-200">{subject}</div>
          <div className="text-sm text-slate-200">
            <div>{content}</div>
            <div>Are you sure you want to proceed?</div>
          </div>
          <div className="flex flex-row gap-1 justify-end">
            <button className="rounded-md px-3 py-2 text-sm font-bold text-gray-300 hover:bg-orange-800 bg-orange-700 hover:text-white" onClick={() => closeModal()}>
              No
            </button>
            <button className="rounded-md px-3 py-2 text-sm font-semibold text-gray-300 hover:bg-sky-700 bg-sky-600 hover:text-white" onClick={() => {action(); closeModal()}}>
              Yes
            </button>
          </div>
        </section>
    </div>
  )
}
