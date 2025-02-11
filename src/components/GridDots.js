import React, { useEffect, useState } from "react";
import "./GridDots.css";

const GRID_SIZE = 40; // Шаг сетки
const NUM_DOTS = 20; // Количество точек

function getRandomPosition() {
  const maxX = Math.floor(window.innerWidth / GRID_SIZE);
  const maxY = Math.floor(window.innerHeight / GRID_SIZE);
  return {
    x: Math.floor(Math.random() * maxX) * GRID_SIZE,
    y: Math.floor(Math.random() * maxY) * GRID_SIZE,
  };
}

function GridDots() {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Создаём точки в случайных местах
    const initialDots = Array.from({ length: NUM_DOTS }, () => getRandomPosition());
    setDots(initialDots);

    const interval = setInterval(() => {
      setDots((prevDots) =>
        prevDots.map(() => getRandomPosition())
      );
    }, 3000); // Меняем позицию каждые 3 секунды

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid-dots">
      {dots.map((dot, index) => (
        <div key={index} className="dot" style={{ left: dot.x, top: dot.y }}></div>
      ))}
    </div>
  );
}

export default GridDots;
