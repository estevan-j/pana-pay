
import { ROUTES_CONFIG } from '../config/routesConfig';
import { MenuItem } from './Interfaces';

// Function to format menu item labels
export const formatMenuLabel = (id: string) => id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, ' ');

// Function to generate menu items for a category (sin filtrar por rol)
export const generateMenuItems = (category: string, isAdmin: boolean): MenuItem[] => {
  return ROUTES_CONFIG
    .filter(route => {
      // Primero verificamos que la ruta pertenezca a la categoría correcta
      if (route.category !== category) return false;

      // Si es la ruta "registros", solo la mostramos si el usuario es admin
      if (route.id === 'registros' && !isAdmin) return false;

      // Para todas las demás rutas, las mostramos normalmente
      return true;
    })
    .map(item => ({
      id: item.id,
      name: formatMenuLabel(item.id),
      path: `/dashboard${item.path}`
    }));
};
