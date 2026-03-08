import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import WorkIcon from "@mui/icons-material/Work";
import FolderIcon from "@mui/icons-material/Folder";

/**
 * Componente Nav — Barra de navegación principal responsive.
 *
 * - Escritorio (≥ sm): muestra Tabs horizontales de MUI.
 * - Móvil (< sm): muestra un botón hamburguesa que abre un Drawer lateral
 *   con la lista de enlaces de navegación.
 *
 * Hooks usados:
 * - useLocation(): obtiene la ruta activa para resaltar el enlace correcto.
 * - useMediaQuery(): detecta si la pantalla es móvil o escritorio.
 * - useState(): controla si el Drawer está abierto o cerrado.
 */

/** Definición centralizada de los enlaces de navegación */
const enlaces = [
  { label: "Inicio", to: "/", icon: <HomeIcon /> },
  { label: "Portfolio", to: "/portfolio", icon: <FolderIcon /> },
  { label: "Experiencia", to: "/experience", icon: <WorkIcon /> },
];

function Nav() {
  const location = useLocation();
  const theme = useTheme();
  // true cuando la pantalla es menor al breakpoint "sm" (600px)
  const esMobil = useMediaQuery(theme.breakpoints.down("sm"));
  // Controla la visibilidad del Drawer en móvil
  const [drawerAbierto, setDrawerAbierto] = useState(false);

  // Índice de la tab activa (solo usado en la vista de escritorio)
  const rutaActual = location.pathname;
  let tabActual = 0;
  if (rutaActual.startsWith("/portfolio")) tabActual = 1;
  if (rutaActual.startsWith("/experience")) tabActual = 2;

  /** Contenido del Drawer: lista de enlaces de navegación */
  const contenidoDrawer = (
    <Box sx={{ width: 220 }} role="presentation">
      <List>
        {enlaces.map((enlace) => {
          // Resalta el enlace cuya ruta coincide con la actual
          const activo =
            enlace.to === "/"
              ? rutaActual === "/"
              : rutaActual.startsWith(enlace.to);

          return (
            <ListItem key={enlace.to} disablePadding>
              <ListItemButton
                component={NavLink}
                to={enlace.to}
                selected={activo}
                onClick={() => setDrawerAbierto(false)} // Cierra el drawer al navegar
                sx={{
                  "&.Mui-selected": {
                    bgcolor: "primary.light",
                    color: "primary.contrastText",
                    "& .MuiListItemIcon-root": {
                      color: "primary.contrastText",
                    },
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 36 }}>{enlace.icon}</ListItemIcon>
                <ListItemText primary={enlace.label} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      {esMobil ? (
        /* ── Vista MÓVIL: botón hamburguesa + Drawer lateral ── */
        <>
          <Box sx={{ px: 1, py: 0.5 }}>
            <IconButton
              aria-label="Abrir menú de navegación"
              onClick={() => setDrawerAbierto(true)}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          <Drawer
            anchor="left"
            open={drawerAbierto}
            onClose={() => setDrawerAbierto(false)}
          >
            {contenidoDrawer}
          </Drawer>
        </>
      ) : (
        /* ── Vista ESCRITORIO: tabs horizontales ── */
        <Tabs
          value={tabActual}
          indicatorColor="primary"
          textColor="primary"
          aria-label="Navegación principal"
        >
          {enlaces.map((enlace) => (
            <Tab
              key={enlace.to}
              icon={enlace.icon}
              iconPosition="start"
              label={enlace.label}
              component={NavLink}
              to={enlace.to}
            />
          ))}
        </Tabs>
      )}
    </Box>
  );
}

export default Nav;
