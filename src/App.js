import { BrowserRouter, Routes, Route } from "react-router-dom"
import Carnivore from "./components/types/carnivore/Carnivore";
import Ominivore from "./components/types/ominivore/Ominivore";
import Pollotarians from "./components/types/pollotarians/Pollotarians";
import Vegetarians from "./components/types/vegetarians/Vegetarians";
import Pescetarians from "./components/types/pescetarians/Pescetarians";
import Vegan from "./components/types/vegan/Vegan";
import Kosher from "./components/types/kosher/Kosher";
import Halal from "./components/types/halal/Halal";
import FileUpload from "./components/FileUpload";
import DietCalendar from "./components/calendar/DietCalendar";

import './App.css';


function App() {
  return (
    <div className="app">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Ominivore />} />
          <Route path="/carnivore" element={<Carnivore />} />
          <Route path="/pollotarians" element={<Pollotarians />} />
          <Route path="/vegetarians" element={<Vegetarians />} />
          <Route path="/pescetarians" element={<Pescetarians />} />
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/kosher" element={<Kosher />} />
          <Route path="/halal" element={<Halal />} />
          <Route path="/watch" element={<FileUpload />} />
          <Route path="/calender" element={<DietCalendar />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
