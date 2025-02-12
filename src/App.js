import React, { useState, useEffect } from "react";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Archive from "./pages/Archive";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Grid from "./components/Grid";
import "./styles.css";

function App() {
  const [isSorted, setIsSorted] = useState(false);
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <Grid />
      <nav className="navbar">
        <div className="logo-container">
          <NavLink to="/" className="logo">
            KIRILLKOZLIT<span className="logo-dot">.</span>IN
          </NavLink>
        </div>
        <div className="nav-links">
          <NavLink to="/archive" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            archive
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            about
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>
            contact
          </NavLink>
        </div>
        {location.pathname === "/" && (
          <div className="sort-container">
            <button
              className={`sort-button ${isSorted ? "active" : ""}`}
              onClick={() => setIsSorted((prev) => !prev)}
            >
              {isSorted ? "UNSORT" : "SORT"}
            </button>
          </div>
        )}
      </nav>

      <Routes>
        <Route path="/" element={<Home isSorted={isSorted} setIsSorted={setIsSorted} />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Футер */}
      <footer className="footer">
        <div className="footer-left">
          {time.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true })}
        </div>
        <div className="footer-right">© 2024</div>
      </footer>
    </div>
  );
}

export default App;
