import { Globe, Mail, MapPin, PhoneIncoming } from 'lucide-react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function PreviewCV() {
  const contentRef = useRef();
  const handlePrint = useReactToPrint({
    documentTitle: "CV",
    contentRef: contentRef,
  });

  function printHandler() {
    contentRef.current.className = contentRef.current.className.replace("w-[186.9mm] h-[264.33mm] rounded-md", "w-[210mm] h-[297mm]");
    handlePrint();
    contentRef.current.className = contentRef.current.className.replace("w-[210mm] h-[297mm]", "w-[186.9mm] h-[264.33mm] rounded-md");
  }

  const leftHeadingStyle = "text-xl font-semibold uppercase tracking-widest border-b mb-2";
  const leftItemNormal = "text-sm text-neutral-200";

  return <div className="lg:w-full -mt-56 -mb-58 lg:mt-0 lg:mb-0 lg:bg-slate-400/20 px-6 py-3 flex items-center flex-col scale-60 transform-gpu lg:scale-none lg:transform-none">
    <button onClick={printHandler}>Print</button>
    <div ref={contentRef} className="w-[186.9mm] h-[264.33mm] rounded-md bg-slate-300 flex overflow-hidden flex-row border border-slate-300">
      <div className='bg-blue-900/80 h-full flex-2 contain flex flex-col gap-3 px-4 pt-6 text-neutral-100'>
      {/* Profile pic */}
        <div className='self-center bg-neutral-200 size-47 rounded-full p3 flex items-center justify-center mb-5'>
          <div className='bg-neutral-300 size-45 rounded-full bg-[url(/src/assets/profile.jpg)] bg-cover bg-center'></div>
        </div>
        {/* Contact */}
        <div className='w-full flex flex-col gap-1'>
          <div className={leftHeadingStyle}>Contact</div>
          <div className={leftItemNormal + " flex flex-row items-center gap-2"}><PhoneIncoming size={15}/><div>+385 98 562 934</div></div>
          <div className={leftItemNormal + " flex flex-row items-center gap-2"}><Mail size={15}/><div>dario.crnek@gmail.com</div></div>
          <div className={leftItemNormal + " flex flex-row items-center gap-2"}><MapPin size={15}/><div>Zagorska 22, 10 000 Zagreb</div></div>
          <div className={leftItemNormal + " flex flex-row items-center gap-2"}><Globe size={15}/><div><a href='https://google.com' target='_blank'>www.dariocrnek.com</a></div></div>
          {/* Skills */}
          <div className={leftHeadingStyle + " mt-10"}>Skills</div>
          <div className={leftItemNormal}><li>Project Management</li></div>
          <div className={leftItemNormal}><li>Public Relations</li></div>
          <div className={leftItemNormal}><li>Teamwork</li></div>
          <div className={leftItemNormal}><li>Effective Communication</li></div>
          <div className={leftItemNormal}><li>Critical Thinking</li></div>
          <div className={leftItemNormal}><li>Leadership</li></div>
          {/* Languages */}
          <div className={leftHeadingStyle + " mt-10"}>Languages</div>
          <div className={leftItemNormal}><li>English - Fluent</li></div>
          <div className={leftItemNormal}><li>French - Fluent</li></div>
          <div className={leftItemNormal}><li>Croatian - Fluent</li></div>
          <div className={leftItemNormal}><li>Italian - Basics</li></div>
        </div>
      </div>
      <div className='bg-slate-100 h-full flex-[3.5] p-3'></div>
    </div>
  </div>;
}
