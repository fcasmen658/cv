import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import ExperienceItem from "../components/ExperienceItem";
// Importación del JSON de experiencia
import experienciaData from "../data/experience.json";

/**
 * Página ExperiencePage — Historial de experiencia laboral.
 *
 * Ruta: /experience
 *
 * Carga la lista de experiencias desde src/data/experience.json
 * y las renderiza en orden cronológico inverso (más reciente primero,
 * según el orden definido en el JSON).
 *
 * Usa el componente Stack de MUI para apilar verticalmente los
 * ExperienceItem con un espaciado uniforme entre ellos.
 */
function ExperiencePage() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      {/* Cabecera de la sección */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h2" fontWeight={800} gutterBottom>
          Experiencia Laboral
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Historial profesional en orden cronológico inverso.
        </Typography>
        <Divider sx={{ mt: 2 }} />
      </Box>

      {/* Lista de experiencias renderizadas dinámicamente */}
      <Stack spacing={3}>
        {experienciaData.map((exp) => (
          <ExperienceItem
            key={exp.id}
            role={exp.role}
            place={exp.place}
            dates={exp.dates}
            details={exp.details}
          />
        ))}
      </Stack>
    </Container>
  );
}

export default ExperiencePage;
