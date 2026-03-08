import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/**
 * Configuración de Vite para el proyecto CV React.
 *
 * - @vitejs/plugin-react: activa el soporte de JSX, Fast Refresh en desarrollo
 *   (recarga instantánea sin perder el estado) y la transformación de React.
 * - defineConfig() proporciona autocompletado TypeScript en el IDE.
 *
 * DESPLIEGUE EN HOSTING CON CPANEL:
 * - Si el sitio se sirve desde la raíz del dominio (ej: https://tudominio.com/),
 *   deja base: "/" (valor por defecto, no hace falta indicarlo).
 * - Si se sirve desde un subdirectorio (ej: https://tudominio.com/cv/),
 *   cambia base a: "/cv/"
 */
export default defineConfig({
  base: "/cv/", // Subdirectorio del repositorio en GitHub Pages
  plugins: [
    react(), // Habilita JSX y Fast Refresh para desarrollo ágil
  ],
});
