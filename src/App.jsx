import { useState } from "react";
import "./App.css";
import Header from "./components/sections/Header";
import EditCV from "./components/views/EditCV";
import PreviewCV from "./components/views/PreviewCS";

function App() {
  const defaultContactData = {
    phone: '+385 98 562 934',
    email: 'dario.crnek@gmail.com',
    address: 'Zagorska 22, 10 000 Zagreb',
    website: 'www.dariocrnek.com',
  };
  const [contactData, setContactData] = useState(defaultContactData);

  const defaultNameSummary = {
    name: 'Dario Crnek',
    summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, laudantium modi? Cupiditate vero facilis tempore. Earum, architecto, facere repellat fugit reiciendis tempore distinctio non reprehenderit sed cum fuga impedit unde!',
  }
  const [nameSummary, setNameSummary] = useState(defaultNameSummary);

  const resetData = () => {
    setContactData(clearObject(defaultContactData));
    setNameSummary(clearObject(defaultNameSummary));
  };

  function clearObject (obj) {
    return Object.fromEntries(
      Object.keys(obj).map(key => [key, ''])
    );
  }

  const resetDefault = () => {
    setContactData(defaultContactData);
    setNameSummary(defaultNameSummary);
  }

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 w-full items-stretch">
        <EditCV resetData={resetData} resetDefault={resetDefault}/>
        <PreviewCV data={{contactData, setContactData, nameSummary}} />
      </div>
    </div>
  );
}

export default App;
