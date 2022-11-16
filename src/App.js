import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Carnivore from "./components/types/carnivore/Carnivore";
import Ominivore from "./components/types/ominivore/Ominivore";
import Pollotarians from "./components/types/pollotarians/Pollotarians";
import Vegetarians from "./components/types/vegetarians/Vegetarians";
import Pescetarians from "./components/types/pescetarians/Pescetarians";

import Welcome from "./components/Welcome";
function App() {
  return (
    <div className="app">

      <BrowserRouter>
      <Welcome />

        <Routes>
          <Route path="/" element={<Ominivore />} />
          <Route path="/carnivore" element={<Carnivore />} />
          <Route path="/pollotarians" element={<Pollotarians />} />
          <Route path="/vegetarians" element={<Vegetarians />} />
          <Route path="/pescetarians" element={<Pescetarians />} />



        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
