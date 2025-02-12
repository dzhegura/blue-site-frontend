import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Archive.css";

// URL API из переменной окружения
const API_URL = process.env.REACT_APP_API_URL;

const Archive = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_URL) {
      console.error("Ошибка: Переменная REACT_APP_API_URL не установлена!");
      setError("API URL не настроен.");
      return;
    }

    axios.get(`${API_URL}/api/projects`)
      .then((response) => setProjects(response.data))
      .catch((error) => {
        console.error("Ошибка загрузки данных:", error);
        setError("Не удалось загрузить данные.");
      });
  }, []);

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

        {error ? (
          <div className="error-message">{error}</div>
        ) : (
          projects.map((project, index) => (
            <div key={index} className="table-row">
              <span>{project.title}</span>
              <span>{project.year}</span>
              <span>{project.category}</span>
              <span>{project.type}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Archive;
