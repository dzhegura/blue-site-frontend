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
        {/* Лого в отдельном контейнере */}
        <div className="logo-container">
          <Link to="/" className="logo">
            KIRILLKOZLIT<span className="logo-dot">.</span>IN
          </Link>
        </div>

        {/* Навигационные ссылки */}
        <div className="nav-links">
          <Link to="/archive">archive</Link>
          <Link to="/about">about</Link>
          <Link to="/contact">contact</Link>
        </div>

        {/* Кнопка сортировки в отдельном контейнере */}
        <div className="sort-container">
          <button className="sort-button">SORT</button>
        </div>
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
