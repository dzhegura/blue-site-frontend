import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles.css";

const rootElement = document.getElementById("root");

if (rootElement) {
    createRoot(rootElement).render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
} else {
    console.error("❌ Ошибка: контейнер #root не найден в index.html!");
}
