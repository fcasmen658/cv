import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";

/**
 * Componente Projects — Galería de proyectos con renderizado dinámico.
 *
 * Implementa la extensión 2.8: recibe un array de proyectos desde un JSON
 * externo y genera automáticamente una ProjectCard por cada entrada,
 * sin duplicar código (principio DRY).
 *
 * @param {Object[]} [proyectos=[]] - Array de objetos de proyecto con la
 *   estructura definida en src/data/projects.json:
 *   { id, title, description, image, link, tags[] }
 *
 * Grid responsivo:
 * - xs={12}: 1 columna en móvil
 * - sm={6}:  2 columnas en tableta
 * - md={4}:  3 columnas en escritorio
 *
 * Retorna null si el array está vacío para no renderizar un grid vacío.
 */
function Projects({ proyectos = [] }) {
  // Si no hay proyectos, no se renderiza nada (evita un grid vacío)
  if (proyectos.length === 0) {
    return null;
  }

  return (
    <Grid container spacing={3}>
      {/*
        .map() itera el array de proyectos del JSON y devuelve un
        elemento Grid + ProjectCard por cada uno.
        La prop key={proyecto.id} es obligatoria en React para que el
        reconciliador identifique de forma eficiente cada elemento de la lista.
      */}
      {proyectos.map((proyecto) => (
        <Grid item xs={12} sm={6} md={4} key={proyecto.id}>
          {/* Se desestructuran las props del objeto JSON directamente */}
          <ProjectCard
            title={proyecto.title}
            description={proyecto.description}
            image={proyecto.image}
            link={proyecto.link}
            tags={proyecto.tags}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default Projects;
