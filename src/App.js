import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Carnivore from "./components/types/carnivore/Carnivore";
import Ominivore from "./components/types/ominivore/Ominivore";
import Pollotarians from "./components/types/pollotarians/Pollotarians";
import Vegetarians from "./components/types/vegetarians/Vegetarians";
import Pescetarians from "./components/types/pescetarians/Pescetarians";

import Welcome from "./components/Welcome";
import Vegan from "./components/types/vegan/Vegan";
import Kosher from "./components/types/kosher/Kosher";
import Halal from "./components/halal/Halal";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faMeat, faChicken } from '@fortawesome/free-solid-svg-icons'

// library.add(fab, faMeat, faChicken)

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
          <Route path="/vegan" element={<Vegan />} />
          <Route path="/kosher" element={<Kosher />} />
          <Route path="/halal" element={<Halal />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
