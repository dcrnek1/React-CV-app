import "./App.css";
import Header from "./components/sections/Header";
import EditCV from "./components/views/EditCV";
import PreviewCV from "./components/views/PreviewCS";

function App() {
  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header />
      <div className="flex flex-row flex-1 gap-6 max-w-[1440px] w-full">
        <EditCV />
        <PreviewCV />
      </div>
    </div>
  );
}

export default App;
