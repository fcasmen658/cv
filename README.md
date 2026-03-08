# CV React — CV Digital Interactivo

Currículum vitae digital desarrollado con React 18 y Material UI, desplegado en GitHub Pages.

🌐 **Demo en vivo:** [https://indalosoftware.com/](https://indalosoftware.com/)

---

## Autor

**Francisco Miguel Casas Méndez**
Desarrollador Web Full Stack · Técnico Informático

- GitHub: [@fcasmen658](https://github.com/fcasmen658)
- LinkedIn: [franciscocasasmendez](https://www.linkedin.com/in/franciscocasasmendez/)

---

## Descripción

Aplicación SPA (Single Page Application) que actúa como CV digital interactivo. Consta de tres páginas navegables sin recarga, diseño completamente responsive y datos centralizados en archivos JSON para facilitar su actualización.

---

## Características

- Navegación SPA sin recarga con React Router v6
- Diseño responsive: menú hamburguesa en móvil, tabs en escritorio
- Tema global personalizado mediante MUI ThemeProvider
- Datos de proyectos y experiencia gestionados desde archivos JSON
- Tarjetas de proyecto con descripción expandible/colapsable
- Footer con año dinámico y enlaces a redes sociales
- Desplegado en GitHub Pages mediante `gh-pages`

---

## Páginas

| Ruta          | Descripción                                               |
| ------------- | --------------------------------------------------------- |
| `/`           | Presentación personal, avatar y habilidades técnicas      |
| `/portfolio`  | Galería de proyectos con tecnologías y enlace a cada repo |
| `/experience` | Historial laboral en orden cronológico inverso            |

---

## Stack tecnológico

| Tecnología        | Versión | Uso                              |
| ----------------- | ------- | -------------------------------- |
| React             | 18      | Librería de UI                   |
| Vite              | 6       | Bundler y servidor de desarrollo |
| Material UI (MUI) | 6       | Componentes de interfaz          |
| React Router      | 6       | Enrutamiento cliente             |
| gh-pages          | 6       | Despliegue en GitHub Pages       |

---

## Estructura del proyecto

```
CV_React/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── favicon.ico / favicon-32.png / favicon-180.png
└── src/
    ├── main.jsx            # Punto de entrada, ReactDOM.createRoot
    ├── App.jsx             # Tema MUI, BrowserRouter, layout y rutas
    ├── components/
    │   ├── Header.jsx      # Cabecera común (AppBar)
    │   ├── Nav.jsx         # Navegación responsive (Tabs / Drawer)
    │   ├── Footer.jsx      # Pie de página con copyright y redes
    │   ├── ProjectCard.jsx # Tarjeta individual de proyecto
    │   ├── Projects.jsx    # Grid de tarjetas (renderizado dinámico)
    │   └── ExperienceItem.jsx # Elemento de experiencia laboral
    ├── data/
    │   ├── projects.json   # Datos de los proyectos del portfolio
    │   └── experience.json # Datos del historial laboral
    ├── img/
    │   └── avatar.jpg      # Foto de perfil
    └── pages/
        ├── LandingPage.jsx     # Ruta: /
        ├── PortfolioPage.jsx   # Ruta: /portfolio
        └── ExperiencePage.jsx  # Ruta: /experience
```

---

## Instalación y desarrollo local

```bash
# Clonar el repositorio
git clone https://github.com/fcasmen658/cv.git
cd cv

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo (http://localhost:5173/cv/)
npm run dev
```

---

## Despliegue en GitHub Pages

```bash
# Construye el proyecto y publica la carpeta dist/ en la rama gh-pages
npm run deploy
```

El script `predeploy` ejecuta `vite build` automáticamente antes del deploy.

> **Nota:** el `base` en `vite.config.js` está configurado como `/cv/` para que coincida con el nombre del repositorio en GitHub.

---

## Actualizar contenido

Los datos se gestionan desde dos archivos JSON, sin necesidad de tocar código de componentes:

**Proyectos** → `src/data/projects.json`

```json
{
  "id": 1,
  "title": "Nombre del proyecto",
  "description": "Descripción",
  "image": "/cv/img/proyecto.png",
  "link": "https://github.com/...",
  "tags": ["React", "MUI"]
}
```

**Experiencia** → `src/data/experience.json`

```json
{
  "id": 1,
  "role": "Puesto",
  "place": "Empresa",
  "dates": "Ene 2023 – Actualidad",
  "details": "Descripción de responsabilidades."
}
```

---

## Licencia

Uso personal. Código libre para adaptar como CV propio.
