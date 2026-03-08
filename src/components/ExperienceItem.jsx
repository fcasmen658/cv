import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Divider from "@mui/material/Divider";

/**
 * Componente ExperienceItem — Elemento de experiencia laboral.
 *
 * Muestra un puesto de trabajo dentro de una tarjeta con borde izquierdo
 * de color primario, siguiendo el patrón de línea de tiempo vertical.
 *
 * @param {string} role    - Título o nombre del puesto (ej. "Dev Frontend").
 * @param {string} place   - Empresa u organización donde se trabajó.
 * @param {string} dates   - Período de tiempo (ej. "Ene 2023 – Actualidad").
 * @param {string} details - Descripción de responsabilidades y logros.
 *
 * Efecto hover: aumenta la sombra del Paper para indicar interactividad.
 * Las fechas se muestran en un Chip para destacarlas visualmente.
 */
function ExperienceItem({ role, place, dates, details }) {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        borderLeft: "4px solid",
        borderColor: "primary.main",
        transition: "box-shadow 0.7s",
        "&:hover": { boxShadow: 9 },
        borderRadius: 5, // Radio del borde (1 = 4px, 2 = 8px, 3 = 12px, 4 = 16px...)
      }}
    >
      {/* Cabecera: puesto, empresa y fechas */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          gap: 1,
          mb: 1,
          // En móvil se apila en columna; en escritorio permanece en fila
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        {/* Fila con icono + puesto + empresa */}
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 1,
            flexGrow: 1,
          }}
        >
          <WorkOutlineIcon color="tertiary" sx={{ mt: 0.5 }} />
          <Box>
            <Typography variant="h6" component="h3" fontWeight={700}>
              {role}
            </Typography>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 0.3 }}
            >
              <LocationOnIcon fontSize="small" color="action" />
              <Typography variant="subtitle2" color="text.secondary">
                {place}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Chip con las fechas: a la derecha en escritorio, debajo en móvil */}
        <Box sx={{ ml: { sm: "auto" }, mt: { xs: 0.5, sm: 0 }, flexShrink: 0 }}>
          <Chip
            icon={<CalendarTodayIcon />}
            label={dates}
            size="small"
            variant="outlined"
            color="secondary"
          />
        </Box>
      </Box>

      <Divider sx={{ my: 1 }} />

      {/* Descripción de las responsabilidades */}
      <Typography variant="body2" color="text.primary">
        {details}
      </Typography>
    </Paper>
  );
}

export default ExperienceItem;
