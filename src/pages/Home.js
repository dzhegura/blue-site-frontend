import React, { useEffect, useState } from "react";
import axios from "axios";
import { sortDots } from "./sortHandler";
import "./Home.css";

// Используем API URL из переменной окружения
const API_URL = process.env.REACT_APP_API_URL;

const GRID_SIZE = 40;
const HEADER_HEIGHT = 80;
const FOOTER_HEIGHT = 60;

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
  const maxY = Math.floor((window.innerHeight - HEADER_HEIGHT - FOOTER_HEIGHT) / GRID_SIZE);
  return {
    left: Math.floor(Math.random() * maxX) * GRID_SIZE,
    top: Math.floor(Math.random() * maxY) * GRID_SIZE + HEADER_HEIGHT,
  };
}

function Home({ isSorted, setIsSorted }) {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!API_URL) {
      console.error("Ошибка: Переменная REACT_APP_API_URL не установлена!");
      setError("API URL не настроен.");
      return;
    }

    axios.get(`${API_URL}/api/projects`)
      .then(response => {
        const projectsData = response.data.map(project => ({
          ...project,
          position: getRandomPosition(),
        }));
        setProjects(projectsData);
      })
      .catch(error => {
        console.error("Ошибка загрузки проектов:", error);
        setError("Не удалось загрузить проекты.");
      });

    axios.get(`${API_URL}/api/contacts`)
      .then(response => {
        const contactsData = response.data.map(contact => ({
          ...contact,
          position: getRandomPosition(),
        }));
        setContacts(contactsData);
      })
      .catch(error => {
        console.error("Ошибка загрузки контактов:", error);
        setError("Не удалось загрузить контакты.");
      });
  }, []);

  useEffect(() => {
    if (!isSorted) {
      const interval = setInterval(() => {
        setProjects(prevProjects =>
          prevProjects.map(project => {
            const direction = getRandomDirection();
            let newLeft = project.position.left + direction.dx;
            let newTop = project.position.top + direction.dy;

            if (newLeft < 0) newLeft += window.innerWidth;
            if (newLeft >= window.innerWidth) newLeft -= window.innerWidth;
            if (newTop < HEADER_HEIGHT) newTop = HEADER_HEIGHT;
            if (newTop >= window.innerHeight - FOOTER_HEIGHT) newTop = window.innerHeight - FOOTER_HEIGHT - GRID_SIZE;

            return { ...project, position: { left: newLeft, top: newTop } };
          })
        );

        setContacts(prevContacts =>
          prevContacts.map(contact => {
            const direction = getRandomDirection();
            let newLeft = contact.position.left + direction.dx;
            let newTop = contact.position.top + direction.dy;

            if (newLeft < 0) newLeft += window.innerWidth;
            if (newLeft >= window.innerWidth) newLeft -= window.innerWidth;
            if (newTop < HEADER_HEIGHT) newTop = HEADER_HEIGHT;
            if (newTop >= window.innerHeight - FOOTER_HEIGHT) newTop = window.innerHeight - FOOTER_HEIGHT - GRID_SIZE;

            return { ...contact, position: { left: newLeft, top: newTop } };
          })
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isSorted]);

  useEffect(() => {
    sortDots(projects, contacts, isSorted, setProjects, setContacts);
  }, [isSorted]);

  return (
    <div className="home-container">
      {error && <div className="error-message">{error}</div>}
      <div className="grid-dots">
        {projects.map((project, index) => (
          <div
            key={`project-${index}`}
            className={`dot-container project-dot ${project.cssClass}`}
            style={{
              left: `${project.position.left}px`,
              top: `${project.position.top}px`
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
            className={`dot-container contact-dot ${contact.cssClass}`}
            style={{
              left: `${contact.position.left}px`,
              top: `${contact.position.top}px`
            }}
          >
            <div className="dot"></div>
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
