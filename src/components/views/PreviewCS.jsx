import { Globe, Mail, MapPin, PhoneIncoming, Calendar } from 'lucide-react';
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

  const leftHeadingStyle = "text-lg font-semibold uppercase tracking-widest border-b mb-2";
  const leftItemNormal = "text-sm text-neutral-200";
  const rightHeadingStyle = "font-semibold uppercase w-fit text-xl border-b border-slate-400 text-blue-800/80 mt-6 w-full";
  const rightNormalStyle = "text-sm text-justify text-slate-600 leading-4 mt-3";

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
      <div className='bg-slate-100 h-full flex-[3.5] p-3 flex flex-col'>
        <div className='font-semibold uppercase text-blue-900/80 tracking-widest text-3xl text-center pb-2 pt-6'>Dario Crnek</div>
        {/* Summary */}
        <div className={rightHeadingStyle}>Summary</div>
        <div className={rightNormalStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium modi? Cupiditate vero facilis tempore. Earum, architecto, facere repellat fugit reiciendis tempore distinctio non reprehenderit sed cum fuga impedit unde!</div>
        {/* Experience */}
        <div className={rightHeadingStyle}>Experience</div>
        <div className='flex flex-col'>
          {/* First experience */}
          <div className='text-slate-600 pb-5'>
            <div className='text-lg font-semibold text-slate-700 leading-4 mt-3'>Marker.hr</div>
            <div className='flex flex-row gap-6 text-xs leading-6 text-slate-600'>
              <div className='flex flex-row items-center gap-1'>
                <Calendar size={11}/>
                <div>09/2016 - 08/2019</div>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <MapPin size={11}/>
                <div>Varaždin, HR</div>
              </div>
            </div>
            <div className='pl-4 text-base'>PHP Backend Developer</div>
            <div className='pl-4 leading-4 text-sm'>
              <ul className='list-disc list-outside pl-6 text-slate-500'>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Recusandae explicabo est rerumasda asd asd asda dsasda sda</li>
                <li>Nesciunt dolor consequuntur eaque repudiandae</li>
              </ul>
            </div>
          </div>
          <div className='border-b border-dashed border-slate-400 w-1/2'></div>
          {/* Second experience */}
          <div className='text-slate-600'>
            <div className='text-lg font-semibold text-slate-700 leading-4 mt-3'>Financijska agencija</div>
            <div className='flex flex-row gap-6 text-xs leading-6 text-slate-600'>
              <div className='flex flex-row items-center gap-1'>
                <Calendar size={11}/>
                <div>09/2016 - 08/2019</div>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <MapPin size={11}/>
                <div>Varaždin, HR</div>
              </div>
            </div>
            <div className='pl-4 text-base'>PHP Backend Developer</div>
            <div className='pl-4 leading-4 text-sm'>
              <ul className='list-disc list-outside pl-6 text-slate-500'>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Recusandae explicabo est rerumasda asd asd asda dsasda sda</li>
                <li>Nesciunt dolor consequuntur eaque repudiandae</li>
              </ul>
            </div>
          </div>
        </div>
        {/* Education */}
        <div className={rightHeadingStyle}>Education</div>
        {/* First education */}
        <div className='text-slate-600'>
            <div className='text-lg font-semibold text-slate-700 leading-4 mt-3'>Srednja škola Stjepana Radića</div>
            <div className='flex flex-row gap-6 text-xs leading-6 text-slate-600'>
              <div className='flex flex-row items-center gap-1'>
                <Calendar size={11}/>
                <div>09/2016 - 08/2019</div>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <MapPin size={11}/>
                <div>Bedekovčina, HR</div>
              </div>
            </div>
            <div className='pl-4 text-base'>Građevinski tehničar</div>
            <div className='pl-4 leading-4 text-sm'>
              <ul className='list-disc list-outside pl-6 text-slate-500'>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
          <div className='border-b border-dashed border-slate-400 w-1/2 mt-4'></div>
          {/* Second education */}
          <div className='text-slate-600'>
            <div className='text-lg font-semibold text-slate-700 leading-4 mt-3'>Fakultet organizacije i informatike</div>
            <div className='flex flex-row gap-6 text-xs leading-6 text-slate-600'>
              <div className='flex flex-row items-center gap-1'>
                <Calendar size={11}/>
                <div>09/2016 - 08/2019</div>
              </div>
              <div className='flex flex-row items-center gap-1'>
                <MapPin size={11}/>
                <div>Varaždin, HR</div>
              </div>
            </div>
            <div className='pl-4 text-base'>Informacijski sustavi</div>
            <div className='pl-4 leading-4 text-sm'>
              <ul className='list-disc list-outside pl-6 text-slate-500'>
                <li>Lorem ipsum dolor sit amet</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  </div>;
}
