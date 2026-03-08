import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

// --- Componentes del layout común ---
import Header from "./components/Header"; // Barra superior con título
import Nav from "./components/Nav"; // Menú de navegación con tabs
import Footer from "./components/Footer"; // Pie de página con links sociales

// --- Páginas de la aplicación ---
import LandingPage from "./pages/LandingPage"; // Ruta: /
import PortfolioPage from "./pages/PortfolioPage"; // Ruta: /portfolio
import ExperiencePage from "./pages/ExperiencePage"; // Ruta: /experience

/**
 * Tema global de Material UI personalizado para toda la aplicación.
 *
 * - palette.primary: color azul corporativo usado en botones, tabs, chips...
 * - palette.secondary: color rosa/fucsia para acentos secundarios.
 * - typography.fontFamily: fuentes consistentes con el ecosistema MUI.
 *
 * ThemeProvider inyecta el tema en todos los componentes hijos de MUI
 * sin necesidad de pasarlo como prop manualmente.
 */
const tema = createTheme({
  palette: {
    primary: {
      main: "#1d0452", // Azul oscuro principal
    },
    secondary: {
      main: "#1ba941", // Azul claro para elementos secundarios
    },
    tertiary: {
      main: "#ec560b", // Color adicional para acentos (ej. tarjetas de proyectos)
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

/**
 * Componente raíz de la aplicación.
 *
 * Responsabilidades:
 * 1. Aplica el tema global de MUI mediante ThemeProvider.
 * 2. Normaliza los estilos CSS del navegador con CssBaseline.
 * 3. Configura el enrutador de cliente (BrowserRouter) con React Router v6.
 * 4. Define el layout general: Header → Nav → Contenido → Footer.
 * 5. Registra todas las rutas de la aplicación.
 *
 * Estructura de rutas:
 *   /            → LandingPage  (presentación y habilidades)
 *   /portfolio   → PortfolioPage (tarjetas de proyectos)
 *   /experience  → ExperiencePage (historial laboral)
 *   *            → Redirige a / (gestión de rutas desconocidas)
 */
function App() {
  return (
    // ThemeProvider hace accesible el tema a todos los componentes MUI descendientes
    <ThemeProvider theme={tema}>
      {/* CssBaseline resetea márgenes, paddings y box-sizing del navegador */}
      <CssBaseline />

      {/* BrowserRouter habilita la navegación SPA sin recargar la página */}
      <BrowserRouter>
        {/*
          Layout en columna de altura mínima completa (100vh).
          flexGrow: 1 en <main> hace que el contenido ocupe el espacio disponible
          y empuje el footer siempre hacia la parte inferior de la pantalla.
        */}
        <Box
          sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
        >
          <Header />
          <Nav />

          {/* Zona de contenido variable según la ruta activa */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              {/* Ruta raíz: página de presentación personal */}
              <Route path="/" element={<LandingPage />} />

              {/* Ruta de portfolio: galería de proyectos */}
              <Route path="/portfolio" element={<PortfolioPage />} />

              {/* Ruta de experiencia: historial laboral */}
              <Route path="/experience" element={<ExperiencePage />} />

              {/* Catch-all: redirige cualquier URL no reconocida a la raíz */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Box>

          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
