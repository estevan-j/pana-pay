import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  path: string;
}

export interface MenuSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  items: MenuItem[];
  activeMenuItem: string;
  handleMenuClick: (route: string, menuItem: string) => void;
}

// Actualizando o añadiendo interfaces para la autenticación
export interface HeaderProps {
  user: string | null;
  onHomeClick: () => void;
  onLogout: () => void;
}

export interface MobileHeaderProps {
  onToggleMenu: () => void;
  onHomeClick: () => void;
  onLogout: () => void;
  isMenuOpen: boolean;
}

export interface MobileSidebarProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}
