import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function PreviewCV() {
  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    documentTitle: "CV",
    contentRef: contentRef,
  })

  return <div className="lg:w-full -mt-56 -mb-58 lg:mt-0 lg:mb-0 lg:bg-slate-100 px-6 py-3 flex items-center flex-col scale-60 transform-gpu lg:scale-none lg:transform-none">
    {/* <button onClick={handlePrint}>Print this DIV</button> */}
    <div ref={contentRef} className="w-[210mm] h-[297mm] bg-slate-300 rounded-md p-3">
      This is where a CV will show
    </div>
  </div>;
}
