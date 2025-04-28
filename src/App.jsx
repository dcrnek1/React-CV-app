import "./App.css";
import Header from "./components/sections/Header";
import EditCV from "./components/views/EditCV";
import PreviewCV from "./components/views/PreviewCS";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-fit items-center">
      <Header />
      <div className="flex lg:flex-row flex-1 max-w-[1440px] w-full">
        <EditCV />
        <PreviewCV />
      </div>
    </div>
  );
}

export default App;
