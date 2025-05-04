import { useState } from "react";
import "./App.css";
import Header from "./components/views/Header";
import EditCV from "./components/views/EditCV";
import PreviewCV from "./components/views/PreviewCS";

function App() {
  const defaultData = {
    contact: {
      phone: '+385 98 562 934',
      email: 'dario.crnek@gmail.com',
      address: 'Zagorska 22, 10 000 Zagreb',
      website: 'www.dariocrnek.com',
    },
    nameSummary: {
      firstName: 'Dario',
      lastName: 'Crnek',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, odio nec porttitor rutrum, augue quam aliquet lorem, quis tempor leo diam quis ex. Nullam lobortis efficitur bibendum. Nullam laoreet at ipsum sit amet auctor. Curabitur a tortor ex.',
    },
  };
  const [data, setData] = useState(defaultData);

  const resetData = () => {
    setData(clearObject(defaultData));
  };

  function clearObject (obj) {
    return Object.fromEntries(
      Object.keys(obj).map(key => [key, ''])
    );
  }

  const resetDefault = () => {
    setData(defaultData);
  }

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 w-full items-stretch">
        <EditCV resetData={resetData} resetDefault={resetDefault} data={data} setData={setData}/>
        <PreviewCV data={data} />
      </div>
    </div>
  );
}

export default App;
