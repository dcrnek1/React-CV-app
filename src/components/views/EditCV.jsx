import General from "../sections/General";
import Education from "../sections/Education";
import Work from "../sections/Work";
import Settings from "../sections/Settings";
import Language from "../sections/Language";
import Skills from "../sections/Skills";
import { UserPen, Library, Briefcase, Settings2, Languages, Lightbulb } from "lucide-react";
import { useState } from "react";

export default function EditCV() {
  const inactiveButtonStyle = "p-4 hover:bg-slate-800 transition-colors";
  const activeButtonStyle = "bg-slate-700 p-4 transition-colors";
  const [buttons, setButtons] = useState([
    {name: "General", icon: UserPen, active: true, component: General}, 
    {name: "Education", icon: Library, active: false, component: Education},
    {name: "Work", icon: Briefcase, active: false, component: Work},
    {name: "Language", icon: Languages, active: false, component: Language},
    {name: "Skills", icon: Lightbulb, active: false, component: Skills},
    {name: "Settings", icon: Settings2, active: false, component: Settings}
  ]);
  const ActiveComponent = buttons.find(button => button.active).component;

  function handleButtonClick(button) {
    setButtons((prevButtons) => {
      return prevButtons.map((prevButton) => {
       return prevButton.name === button.name ? {...prevButton, active: true} : {...prevButton, active: false};
      })
    })
  }

  return (
    <div className="flex flex-row bg-slate-900 text-neutral-200">
      <div className="flex flex-col">
      {buttons.map((button) => {
        const IconName = button.icon;
        return <button key={button.name} className={button.active ? activeButtonStyle : inactiveButtonStyle} onClick={() => handleButtonClick(button)}><IconName strokeWidth={1}/></button>
      })}
      </div>
      <div className="px-6 py-3 bg-slate-700 w-full sm:min-w-md">
        <ActiveComponent />
      </div>
    </div>
  );
}
