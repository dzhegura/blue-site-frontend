import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Grid from "./components/Grid";
import Dots from "./components/Dots";
import "./styles.css";

function App() {
  return (
    <div className="app-container">
      <Grid />
      <nav className="navbar">
        <Link to="/" className="logo">
          KIRILLKOZLIT<span className="logo-dot">.</span>IN
        </Link>
        <div className="nav-links">
          <Link to="/archive">Archive</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <button className="sort-button">Sort</button>
      </nav>

      {/* Точки только на главной странице */}
      {window.location.pathname === "/" && <Dots />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
