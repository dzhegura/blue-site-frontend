import React, { useEffect } from "react";

const Grid = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.id = "gridCanvas";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");

    function drawGrid() {
      const GRID_SIZE = 40;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "rgba(253, 241, 231, 0.2)";
      ctx.lineWidth = 1;

      for (let x = 0; x < canvas.width; x += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let y = 0; y < canvas.height; y += GRID_SIZE) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
    }

    drawGrid();
    window.addEventListener("resize", drawGrid);
  }, []);

  return null;
};

export default Grid;
