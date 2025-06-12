import { Globe, Mail, MapPin, PhoneIncoming, Calendar } from 'lucide-react';
import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

export default function PreviewCV({data}) {
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

  const leftHeadingStyle = "text-lg font-semibold uppercase tracking-widest border-b mb-2";
  const leftItemNormal = "text-sm text-neutral-200";
  const rightHeadingStyle = "font-semibold uppercase w-fit text-xl border-b border-slate-400 text-blue-800/80 mt-6 w-full";
  const rightNormalStyle = "text-sm text-justify text-slate-600 leading-4 mt-3";

  return <div className="lg:w-full -mt-56 -mb-58 lg:mt-0 lg:mb-0 lg:bg-slate-400/20 px-6 py-3 flex items-center flex-col scale-52 transform-gpu lg:scale-none lg:transform-none">
    <button onClick={printHandler}>Print</button>
    <div ref={contentRef} className="w-[186.9mm] h-[264.33mm] rounded-md bg-slate-300 flex overflow-hidden flex-row border border-slate-300">
      <div className='bg-blue-900/80 h-full flex-2 contain flex flex-col gap-3 px-6 pt-6 text-neutral-100'>
      {/* Profile pic */}
        <div className={`${data.picture ? "" : "hidden"} self-center bg-neutral-200 size-47 rounded-full p3 flex items-center justify-center mb-5`}>
          <div className={`bg-neutral-300 size-45 rounded-full bg-cover bg-center`} style={{backgroundImage: `url("${data.picture}")`}}></div>
        </div>
        {/* Contact */}
        <div className='w-full flex flex-col gap-1'>
        {Object.values(data.contact).some(val => val != '') && <div className={leftHeadingStyle + " mt-6"}>Kontakt</div>}
          {data.contact.phone && <div className={leftItemNormal + " flex flex-row items-center gap-2"}><PhoneIncoming size={15}/><div>{data.contact.phone}</div></div>}
          {data.contact.email && <div className={leftItemNormal + " flex flex-row items-center gap-2"}><Mail size={15}/><div>{data.contact.email}</div></div>}
          {data.contact.address && <div className={leftItemNormal + " flex flex-row items-center gap-2"}><MapPin size={15}/><div>{data.contact.address}</div></div>}
          {data.contact.website && <div className={leftItemNormal + " flex flex-row items-center gap-2"}><Globe size={15}/><div><a href='https://google.com' target='_blank'>{data.contact.website}</a></div></div>}
          {/* Skills */}
          {data.skills.length > 0 && <div className={leftHeadingStyle + " mt-6"}>Vještine</div>}
          {data.skills.length > 0 && data.skills.map((skill, index) => <div key={"skill-" + index} className={leftItemNormal}><li>{skill}</li></div>)}
          {/* Languages */}
          {data.languages.length > 0 && <div className={leftHeadingStyle + " mt-6"}>Strani jezici</div>}
          {data.languages.length > 0 && data.languages.map((language, index) => <div key={"language-" + index} className={leftItemNormal}><li>{language}</li></div>)}
        </div>
      </div>
      <div className='bg-slate-100 h-full flex-[3.5] px-6 py-3 flex flex-col'>
        {(data.nameSummary.firstName || data.nameSummary.lastName) && <div className='font-semibold uppercase text-blue-900/80 tracking-widest text-3xl text-left pb-2 pt-6'>{data.nameSummary.firstName && data.nameSummary.firstName} {data.nameSummary.lastName && data.nameSummary.lastName}</div>}
        {/* Summary */}
        {data.nameSummary.summary && <><div className={rightHeadingStyle}>O meni</div>
        <div className={rightNormalStyle}>{data.nameSummary.summary}</div>
        </>}
        {/* Experience */}
        {data.experience.length >0 && <div className={rightHeadingStyle}>Radno iskustvo</div>}
        <div className='flex flex-col'>
          {/* First experience */}
          {data.experience.length > 0 && data.experience.map((experience, index) => {
            return (<React.Fragment key={"experience-" + index}>
              <div className='text-slate-600 pb-5'>
              <div className='text-lg font-semibold text-slate-700 leading-4 mt-3'>{experience.employer}</div>
              <div className='flex flex-row gap-6 text-xs leading-6 text-slate-600'>
                <div className='flex flex-row items-center gap-1'>
                  <Calendar size={11}/>
                  <div>{experience.dateFrom} - {experience.dateTo}</div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <MapPin size={11}/>
                  <div>{experience.location}</div>
                </div>
              </div>
              <div className='pl-4 text-base'>{experience.position}</div>
              <div className='pl-4 leading-4 text-sm'>
                <ul className='list-disc list-outside pl-6 text-slate-500'>
                  {experience.work.length > 0 && experience.work.map((bullet, index) => {
                    return <li key={"workBullet" + index}>{bullet}</li>
                  })}
                </ul>
              </div>
            </div>
            {index != data.experience.length -1 && <div className='border-b border-dashed border-slate-400 w-1/2'></div>}
            </React.Fragment>
            )})}
          
        </div>
        {/* Education */}
        {data.education.length > 0 && <div className={rightHeadingStyle}>Obrazovanje</div>}
        {/* First education */}
        {data.education.length > 0 && data.education.map((education, index) => {
          return (
          <React.Fragment key={"education-" + index}>
              <div className='text-slate-600'>
              <div className='text-lg font-semibold text-slate-700 leading-4 mt-3'>{education.school}</div>
              <div className='flex flex-row gap-6 text-xs leading-6 text-slate-600'>
                <div className='flex flex-row items-center gap-1'>
                  <Calendar size={11}/>
                  <div>{education.dateFrom} - {education.dateTo}</div>
                </div>
                <div className='flex flex-row items-center gap-1'>
                  <MapPin size={11}/>
                  <div>{education.location}</div>
                </div>
              </div>
              <div className='pl-4 text-base'>{education.field}</div>
              <div className='pl-4 leading-4 text-sm'>
                <ul className='list-disc list-outside pl-6 text-slate-500'>
                  {education.notes.length > 0 && education.notes.map((note, index) => <li key={"note-" + index}>{note}</li>)}
                </ul>
              </div>
            </div>
            {index != data.education.length -1 && <div className='border-b border-dashed border-slate-400 w-1/2 mt-4'></div>}
          </React.Fragment>
          )})}
      </div>
    </div>
  </div>;
}
