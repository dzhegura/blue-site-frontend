import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Archive.css";

// Используем API URL из переменной окружения
const API_URL = process.env.REACT_APP_API_URL;

const Archive = () => {
  const [projects, setProjects] = useState([]);
  const [expandedProject, setExpandedProject] = useState(null);

  useEffect(() => {
    if (!API_URL) {
      console.error("Ошибка: Переменная REACT_APP_API_URL не установлена!");
      return;
    }

    axios
      .get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.error("Ошибка загрузки проектов:", error));
  }, []);

  const toggleDescription = (index) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  return (
    <div className="archive-container">
      <div className="archive-table">
        <div className="table-header">
          <span className="header-item">
            <img src="/images/arrow.svg" alt="Sort Icon" className="sort-icon" />
            PROJECT
          </span>
          <span className="header-item">
            <img src="/images/arrow.svg" alt="Sort Icon" className="sort-icon" />
            YEAR
          </span>
          <span>CATEGORY</span>
          <span>TYPE</span>
        </div>

        {projects.map((project, index) => (
          <div key={index} className={`project-container ${expandedProject === index ? "active" : ""}`}>
            <div className="table-row" onClick={() => toggleDescription(index)}>
              <span>{project.title}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
              <span>{project.type}</span>
            </div>

            {/* Выпадающее описание */}
            <div className={`project-description ${expandedProject === index ? "expanded" : ""}`}>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Archive;
