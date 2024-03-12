import "./App.css";
import { PlateEditor } from "./components/pages/editor";

function App() {
  return (
    <div className="flex items-start justify-center h-screen">
      <div className="w-5/6">
        <PlateEditor />
      </div>
    </div>
  );
}

export default App;
