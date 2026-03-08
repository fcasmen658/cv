import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CodeIcon from "@mui/icons-material/Code";
import Box from "@mui/material/Box";

/**
 * Componente Header — Cabecera común de la aplicación.
 *
 * Se muestra en la parte superior de todas las páginas.
 * Utiliza el AppBar de MUI con:
 * - position="static": la barra no se superpone al contenido al hacer scroll.
 * - color="primary": usa el color primario del tema global.
 * - elevation={3}: sombra que da profundidad visual.
 *
 * No recibe props: su contenido es estático (identidad del CV).
 */
function Header() {
  return (
    <AppBar position="static" color="primary" elevation={3}>
      <Toolbar>
        <CodeIcon sx={{ mr: 1, alignSelf: "flex-start", mt: 0.8 }} />
        {/* Columna: título arriba, subtítulo debajo */}
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 700, lineHeight: 1.2 }}
          >
            Mi CV React
          </Typography>
          <Typography variant="caption" sx={{ opacity: 0.85, lineHeight: 1.3 }}>
            Desarrollador Web, Técnico Informático y Apasionado por la
            Tecnología
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
