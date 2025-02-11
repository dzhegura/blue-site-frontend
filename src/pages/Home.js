import React, { useEffect, useState } from "react";
import axios from "axios";
import { sortDots } from "./sortHandler"; // Подключаем сортировку
import "./Home.css";

const GRID_SIZE = 40;
const API_URL = process.env.REACT_APP_API_URL; // API URL из переменной окружения

function getRandomDirection() {
  const step = Math.floor(Math.random() * 5 + 1) * GRID_SIZE;
  const directions = [
    { dx: step, dy: 0 },
    { dx: -step, dy: 0 },
    { dx: 0, dy: step },
    { dx: 0, dy: -step }
  ];
  return directions[Math.floor(Math.random() * directions.length)];
}

function getRandomPosition() {
  const maxX = Math.floor(window.innerWidth / GRID_SIZE);
  const maxY = Math.floor(window.innerHeight / GRID_SIZE);
  return {
    x: Math.floor(Math.random() * maxX) * GRID_SIZE + 15,
    y: Math.floor(Math.random() * maxY) * GRID_SIZE,
  };
}

function Home() {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    axios.get(`${API_URL}/api/projects`)
      .then(response => {
        const projectsData = response.data.map(project => ({
          ...project,
          position: getRandomPosition(),
        }));
        setProjects(projectsData);
      })
      .catch(error => console.error("Ошибка загрузки проектов:", error));

    axios.get(`${API_URL}/api/contacts`)
      .then(response => {
        const contactsData = response.data.map(contact => ({
          ...contact,
          position: getRandomPosition(),
        }));
        setContacts(contactsData);
      })
      .catch(error => console.error("Ошибка загрузки контактов:", error));

    const interval = setInterval(() => {
      if (!isSorted) {
        setProjects(prevProjects =>
          prevProjects.map(project => {
            const direction = getRandomDirection();
            let newX = project.position.x + direction.dx;
            let newY = project.position.y + direction.dy;

            if (newX < 0) newX += window.innerWidth;
            if (newX >= window.innerWidth) newX -= window.innerWidth;
            if (newY < 0) newY += window.innerHeight;
            if (newY >= window.innerHeight) newY -= window.innerHeight;

            return { ...project, position: { x: newX, y: newY } };
          })
        );

        setContacts(prevContacts =>
          prevContacts.map(contact => {
            const direction = getRandomDirection();
            let newX = contact.position.x + direction.dx;
            let newY = contact.position.y + direction.dy;

            if (newX < 0) newX += window.innerWidth;
            if (newX >= window.innerWidth) newX -= window.innerWidth;
            if (newY < 0) newY += window.innerHeight;
            if (newY >= window.innerHeight) newY -= window.innerHeight;

            return { ...contact, position: { x: newX, y: newY } };
          })
        );
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isSorted]);

  return (
    <div className="home-container">
      <button className="sort-button" onClick={() => sortDots(projects, contacts, isSorted, setProjects, setContacts, setIsSorted)}>
        {isSorted ? "Unsort" : "Sort"}
      </button>

      <div className="grid-dots">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className="dot-container project-dot"
            style={{
              left: `${project.position.x}px`,
              top: `${project.position.y}px`
            }}
          >
            <div className="dot"></div>
            <div className="dot-label">
              {project.title} <br /> {project.year}
            </div>
          </div>
        ))}

        {contacts.map((contact, index) => (
          <div
            key={`contact-${index}`}
            className="dot-container contact-dot"
            style={{
              left: `${contact.position.x}px`,
              top: `${contact.position.y}px`
            }}
          >
            <div className="contact-dot"></div>
            <div className="dot-label">
              {contact.type}: {contact.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
