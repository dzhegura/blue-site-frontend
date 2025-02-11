import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const GRID_SIZE = 40; // Шаг по сетке
const NUM_DOTS = 5; // Количество точек
const DIRECTIONS = ["up", "down", "left", "right"]; // Только горизонталь и вертикаль

const Dots = () => {
  const location = useLocation();
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Если не главная страница, скрываем точки
    if (location.pathname !== "/") {
      setDots([]);
      return;
    }

    // Функция движения точек
    const moveDots = () => {
      setDots((prevDots) =>
        prevDots.map((dot) => {
          let newX = dot.x;
          let newY = dot.y;

          // Определяем случайный шаг от 1 до 5 клеток
          const step = GRID_SIZE * (Math.floor(Math.random() * 5) + 1);

          switch (dot.direction) {
            case "up":
              newY = Math.max(0, dot.y - step);
              break;
            case "down":
              newY = Math.min(window.innerHeight - GRID_SIZE, dot.y + step);
              break;
            case "left":
              newX = Math.max(0, dot.x - step);
              break;
            case "right":
              newX = Math.min(window.innerWidth - GRID_SIZE, dot.x + step);
              break;
            default:
              break;
          }

          // Новое направление
          const newDirection = DIRECTIONS[Math.floor(Math.random() * DIRECTIONS.length)];

          return { x: newX, y: newY, direction: newDirection };
        })
      );
    };

    const interval = setInterval(moveDots, 2000);
    return () => clearInterval(interval);
  }, [location]);

  return (
    <div>
      {dots.map((dot, index) => (
        <div
          key={index}
          className="dot"
          style={{
            left: `${dot.x - 5}px`, // Центрируем по X
            top: `${dot.y - 5}px`,  // Центрируем по Y
          }}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
