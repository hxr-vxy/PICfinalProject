import { Route, Routes } from "react-router-dom";
import Nav from "./NavBar.jsx";
import Home from "./Home.jsx";
import Community from "./Community.jsx";
import History from "./History.jsx";
import Language from "./Language.jsx";
import Today from "./Today.jsx";
// import './App.css';
import Digital from "./Digital.jsx";
import Creators from "./Creators.jsx";

function App() {
  return(
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        |
        <Route path="/community" element={<Community />} />
        |
        <Route path="/history" element={<History />} />
        |
        <Route path="/language" element={<Language />} />
        |
        <Route path="/today" element={<Today />} />
        |
        <Route path="/digital" element={<Digital />} />
        |
        <Route path="/creators" element={<Creators />} />

      </Routes>
    </div>
  )
}

export default App;