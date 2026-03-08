import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";

/**
 * Componente Footer — Pie de página común de la aplicación.
 *
 * Se muestra en la parte inferior de todas las páginas.
 * Contiene:
 * - Copyright con el año actual calculado dinámicamente.
 * - Iconos/botones con enlaces a perfiles sociales (GitHub, LinkedIn).
 *
 * El año se obtiene en tiempo de ejecución con Date para que no quede
 * hardcodeado y se actualice automáticamente cada año.
 *
 * No recibe props: su contenido es estático.
 */
function Footer() {
  const anioActual = new Date().getFullYear();
  // Muestra solo "2026" si es el año de lanzamiento, o "2026 - YYYY" si es posterior
  const copyright = anioActual > 2026 ? `2026 - ${anioActual}` : "2026";

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        px: 3,
        mt: "auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 1,
      }}
    >
      <Typography variant="body2">
        © {copyright} Francisco Miguel Casas Méndez · Hecho con React
      </Typography>
      <Box>
        {/* Enlace a GitHub */}
        <IconButton
          href="https://github.com/fcasmen658"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
          aria-label="GitHub"
        >
          <GitHubIcon />
        </IconButton>
        {/* Enlace a LinkedIn */}
        <IconButton
          href="https://www.linkedin.com/in/franciscocasasmendez/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: "white" }}
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default Footer;
