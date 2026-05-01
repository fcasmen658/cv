import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";

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
/**
 * Plugin que intercepta las rutas de sub-aplicaciones estáticas (/inventario/, /tpv/)
 * ANTES de que el SPA fallback de Vite las capture y devuelva el index.html de React.
 * Lee el fichero directamente del sistema de archivos y lo sirve como HTML.
 */
function servePublicSubApps() {
  return {
    name: "serve-public-subapps",
    configureServer(server) {
      const root = process.cwd();
      const subApps = {
        "/inventario": path.resolve(root, "public/inventario/index.html"),
        "/inventario/": path.resolve(root, "public/inventario/index.html"),
        "/tpv": path.resolve(root, "public/tpv/index.html"),
        "/tpv/": path.resolve(root, "public/tpv/index.html"),
      };
      // Middleware añadido ANTES de los internos de Vite (no se devuelve una función)
      server.middlewares.use((req, res, next) => {
        const url = (req.url ?? "").split("?")[0];
        const filePath = subApps[url];
        if (filePath && fs.existsSync(filePath)) {
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          res.end(fs.readFileSync(filePath));
          return;
        }
        next();
      });
    },
  };
}

export default defineConfig({
  base: "/", // Raíz del dominio para servidor Ubuntu
  plugins: [
    react(), // Habilita JSX y Fast Refresh para desarrollo ágil
    servePublicSubApps(), // Sirve sub-apps estáticas sin pasar por React Router
  ],
});
