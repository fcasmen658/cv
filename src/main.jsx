import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

/**
 * Punto de entrada principal de la aplicación React.
 *
 * ReactDOM.createRoot() utiliza el modo concurrent (React 18), que permite
 * a React interrumpir y reanudar renders para mantener la interfaz fluida.
 *
 * El elemento #root está definido en index.html y es el contenedor raíz
 * donde React monta toda la árbol de componentes.
 *
 * StrictMode no afecta al build de producción; solo en desarrollo:
 * - Detecta efectos secundarios inesperados (llama a ciertos hooks dos veces).
 * - Avisa sobre APIs obsoletas de React.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
