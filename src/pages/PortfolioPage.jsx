import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Projects from "../components/Projects";
// Importación del JSON de proyectos (renderizado dinámico - extensión 2.8)
import proyectosData from "../data/projects.json";

/**
 * Página PortfolioPage — Galería de proyectos del desarrollador.
 *
 * Ruta: /portfolio
 *
 * Carga los datos de proyectos directamente desde el archivo JSON
 * (src/data/projects.json) y los pasa al componente Projects, que se
 * encarga de renderizar una ProjectCard por cada entrada.
 *
 * Este patrón separa responsabilidades:
 * - La página gestiona de dónde vienen los datos (JSON import).
 * - Projects gestiona cómo se muestran (layout en grid).
 * - ProjectCard gestiona la presentación individual de cada proyecto.
 */
function PortfolioPage() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* Cabecera de la sección */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
          Portfolio
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Selección de proyectos personales y profesionales. Haz clic en cada
          tarjeta para ver la descripción completa.
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      {/* Componente Projects: renderiza dinámicamente una ProjectCard por cada entrada JSON */}
      <Projects proyectos={proyectosData} />
    </Container>
  );
}

export default PortfolioPage;
