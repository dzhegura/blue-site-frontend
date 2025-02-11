import React, { useEffect, useState } from "react";
import "./Archive.css";

const API_URL = process.env.REACT_APP_API_URL; // API URL из переменной окружения

function Archive() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Ошибка загрузки данных:", error));
  }, []);

  return (
    <div className="archive-container">
      <table className="archive-table">
        <thead>
          <tr>
            <th>Project</th>
            <th>Year</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.title}</td>
              <td>{project.year}</td>
              <td>{project.category}</td>
              <td>{project.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Archive;
