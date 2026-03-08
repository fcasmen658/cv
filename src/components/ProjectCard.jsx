import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

/**
 * Componente ProjectCard — Tarjeta individual de proyecto.
 *
 * @param {string}   title       - Nombre del proyecto.
 * @param {string}   description - Descripción breve del proyecto.
 * @param {string}   [image]     - URL de la imagen de portada (opcional).
 * @param {string}   [link]      - URL al repositorio o demo en vivo (opcional).
 * @param {string[]} [tags=[]]   - Array de tecnologías o etiquetas del proyecto.
 *
 * Comportamiento interactivo:
 * - Hover: eleva la tarjeta con translateY(-6px) y aumenta la sombra mediante
 *   CSS puro (`&:hover` en sx). En móvil (touch) no se activa, evitando que
 *   la tarjeta quede "atascada" en el estado elevado tras un toque.
 * - Click en "Ver descripción": expande/colapsa el texto con Collapse de MUI.
 */
function ProjectCard({ title, description, image, link, tags = [] }) {
  // Controla si el panel de descripción está abierto (true) o cerrado (false)
  const [expandida, setExpandida] = useState(false);

  // Alterna el estado de expansión usando la forma funcional del setter
  // para garantizar que siempre opera sobre el valor más reciente
  const toggleExpandir = () => setExpandida((prev) => !prev);

  return (
    <Card
      elevation={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "default",
        borderRadius: 4,
        // Hover solo con CSS: en móvil (touch) no se activa, evitando que quede fijo
        "&:hover": {
          boxShadow: 8,
          transform: "translateY(-6px)",
        },
      }}
    >
      {/* Imagen del proyecto */}
      {image && (
        <CardMedia
          component="img"
          height="180"
          image={image}
          alt={`Imagen del proyecto ${title}`}
        />
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        {/* Título del proyecto */}
        <Typography variant="h6" component="h3" gutterBottom fontWeight={700}>
          {title}
        </Typography>

        {/* Botón para expandir/colapsar la descripción (evento click interactivo) */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            mb: 0.5,
          }}
          onClick={toggleExpandir}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ flexGrow: 1 }}
          >
            {expandida ? "Ocultar descripción" : "Ver descripción"}
          </Typography>
          <Tooltip title={expandida ? "Colapsar" : "Expandir"}>
            <IconButton size="small" aria-label="Expandir descripción">
              <ExpandMoreIcon
                sx={{
                  transition: "transform 0.3s",
                  transform: expandida ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>

        {/* Descripción colapsable */}
        <Collapse in={expandida} timeout="auto" unmountOnExit>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            {description}
          </Typography>
        </Collapse>

        {/* Chips con las tecnologías */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 1 }}>
          {tags.map((tag) => (
            <Chip
              key={tag}
              label={tag}
              size="small"
              color="primary"
              variant="outlined"
            />
          ))}
        </Box>
      </CardContent>

      {/* Botón de enlace al proyecto */}
      {link && (
        <CardActions>
          <Button
            size="small"
            variant="contained"
            endIcon={<OpenInNewIcon />}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto
          </Button>
        </CardActions>
      )}
    </Card>
  );
}

export default ProjectCard;
