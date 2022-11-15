import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Carnivore from "./components/types/carnivore/Ominivore";
import Ominivore from "./components/types/ominivore/Ominivore";
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/ominivore" element={<Ominivore />} />
          <Route path="/carnivore" element={<Carnivore />} />

        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
