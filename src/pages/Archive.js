import React, { useEffect, useState } from "react";
import "./Archive.css";

function Archive() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
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
