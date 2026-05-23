import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavLink />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}



const NavLink = () => {
  return (
    <>
    <ul className="navLinks">
      <li><Link to="/"> Home</Link></li>
      <li><Link to="/about"> About</Link></li>
      <li><Link to="/projects"> Projects</Link></li>
      <li><Link to="/contact"> Contact</Link></li>
    </ul>

    </>
  );
};

export default App;




