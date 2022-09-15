import "./style/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Pricing from "./Pricing";
import Training from "./Training";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/training" element={<Training />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
