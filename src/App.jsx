import "./App.css";
import Header from "./components/sections/Header";
import EditCV from "./components/views/EditCV";
import PreviewCV from "./components/views/PreviewCS";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row justify-center gap-6">
        <EditCV />
        <PreviewCV />
      </div>
    </>
  );
}

export default App;
