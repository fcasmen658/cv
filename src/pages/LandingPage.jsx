import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
// Importación del avatar: Vite procesa la imagen y genera la URL optimizada
import avatarImg from "../img/avatar.jpg";
import FolderIcon from "@mui/icons-material/Folder";
import WorkIcon from "@mui/icons-material/Work";
import EmailIcon from "@mui/icons-material/Email";

/**
 * Array de habilidades técnicas y conocimientos del desarrollador.
 * Se define fuera del componente para que no se recree en cada render.
 * Se renderiza dinámicamente como Chips de MUI en la sección de habilidades.
 */
const habilidades = [
  "React",
  "JavaScript",
  "TypeScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Laravel",
  "Git",
  "REST APIs",
  "SQL",
  "Figma",
  "Docker",
  "AWS",
  "Testing (Jest, React Testing Library)",
  "Micro Soldadura",
  "Electrónica",
  "Reparaciones de Móviles, Tablets y Portátiles",
  "Técnico de Soporte Informático",
  "Técnico de Redes",
  "Técnico de Hardware",
  "Técnico de impresoras Kyocera y Olivetti",
];

/**
 * Página LandingPage — Página de inicio y presentación personal.
 *
 * Ruta: /
 *
 * Secciones:
 * 1. Hero: avatar con iniciales, nombre completo y presentación breve.
 * 2. Habilidades Técnicas: chips renderizados dinámicamente desde el array.
 * 3. Navegación rápida: botones que enlazan a Portfolio y Experiencia.
 *
 * No recibe props: es una página de nivel superior que obtiene
 * su contenido de constantes locales.
 */
function LandingPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* Sección hero: avatar, nombre y presentación */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: 4,
          mb: 5,
        }}
      >
        {/*
          src={avatarImg}: usa la variable importada por Vite.
          Si la imagen no carga, MUI muestra las iniciales del alt como fallback.
        */}
        <Avatar
          src={avatarImg}
          alt="Foto de perfil"
          sx={{ width: 200, height: 200, fontSize: "3.5rem" }}
        />

        <Box>
          <Typography variant="h3" component="h1" fontWeight={800} gutterBottom>
            Francisco Miguel Casas Méndez
          </Typography>

          <Typography variant="h5" color="primary" gutterBottom>
            Desarrollador Web Full Stack
          </Typography>

          <Typography variant="body1" color="text.secondary">
            Apasionado por construir aplicaciones web modernas con React.
            Siempre aprendiendo y buscando nuevos retos tecnológicos.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
            Home Assistatnt, micro soldadura, electrónica y reparación de
            dispositivos móviles son mis otras pasiones.
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
            Puedes explorar mis proyectos, experiencia y habilidades técnicas a
            través de las secciones de este CV digital.
          </Typography>
        </Box>
      </Box>

      <Divider sx={{ mb: 4 }} />

      {/* Sección de habilidades */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Habilidades Técnicas
      </Typography>
      <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 5 }}>
        {habilidades.map((hab) => (
          <Chip key={hab} label={hab} color="primary" variant="outlined" />
        ))}
      </Stack>

      <Divider sx={{ mb: 4 }} />

      {/* Botones de navegación rápida */}
      <Typography variant="h5" fontWeight={700} gutterBottom>
        Explora mi CV
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mt: 2 }}>
        <Button
          variant="contained"
          size="large"
          startIcon={<FolderIcon />}
          component={Link}
          to="/portfolio"
        >
          Ver Portfolio
        </Button>
        <Button
          variant="outlined"
          size="large"
          startIcon={<WorkIcon />}
          component={Link}
          to="/experience"
        >
          Ver Experiencia
        </Button>
        <Button
          variant="text"
          size="large"
          startIcon={<EmailIcon />}
          href="mailto:juan@ejemplo.com"
        >
          Contactar
        </Button>
      </Stack>
    </Container>
  );
}

export default LandingPage;
