import { useState } from "react";
import "./App.css";
import Header from "./components/views/Header";
import EditCV from "./components/views/EditCV";
import PreviewCV from "./components/views/PreviewCS";

function App() {
  const defaultData = {
    contact: {
      phone: '+385 98 564 964',
      email: 'dario@gmail.com',
      address: 'Zagreb 10, 10 000 Zagreb',
      website: 'www.namesurname.com',
    },
    nameSummary: {
      firstName: 'Name',
      lastName: 'Surname',
      summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pretium, odio nec porttitor rutrum, augue quam aliquet lorem, quis tempor leo diam quis ex. Nullam lobortis efficitur bibendum. Nullam laoreet at ipsum sit amet auctor. Curabitur a tortor ex.',
    },
    skills: ['Project Management', 'Public Relations', 'Teamwork', 'Effective Communication', 'Critical Thinking', 'Leadership'],
    languages: ['English - Fluent', 'French - Fluent', 'Croatian - Fluent', 'Italian - Basics'],
    experience: [
      { 
        employer: 'Company.hr',
        dateFrom: '09/2016',
        dateTo: '08/2019',
        location: 'Varaždin, HR',
        position: 'PHP Backend Developer',
        work: [
          'Lorem ipsum dolor sit amet',
          'Consectetur adipisicing elit',
          'Recusandae explicabo est rerumasda asd asd asda dsasda sda',
          'Nesciunt dolor consequuntur eaque repudiandae',
        ],
      },
      {
        employer: 'Company 2',
        dateFrom: '09/2019',
        dateTo: '08/2024',
        location: 'Zagreb, HR',
        position: 'React Developer',
        work: [
          'Lorem ipsum dolor sit amet',
          'Consectetur adipisicing elit',
          'Recusandae explicabo est rerumasda asd asd asda dsasda sda',
          'Nesciunt dolor consequuntur eaque repudiandae',
        ],
      }
    ],
    education: [
      { 
        school: 'Srednja škola',
        dateFrom: '09/2016',
        dateTo: '08/2019',
        location: 'Bedekovčina, HR',
        field: 'Građevinski tehničar',
        notes: [
          'Lorem ipsum dolor sit amet',
          'Consectetur adipisicing elit',
        ],
      },
      {
        school: 'Fakultet organizacije i informatike',
        dateFrom: '09/2016',
        dateTo: '08/2019',
        location: 'Varaždin, HR',
        field: 'Informacijski sustavi',
        notes: [
          'Lorem ipsum dolor sit amet',
          'Consectetur adipisicing elit',
        ],
      }
    ],
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
    <div className="flex flex-col h-screen w-full items-center">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 w-full items-stretch">
        <EditCV resetData={resetData} resetDefault={resetDefault} data={data} setData={setData}/>
        <PreviewCV data={data} />
      </div>
    </div>
  );
}

export default App;
