import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { UserCircle, Menu, X, LogOut } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';
import Logo from '../assets/Isotipo.webp';
import MenuSection from './MenuSection';
import { ROUTES_CONFIG } from '../config/routesConfig';
import { generateMenuItems } from '../utils/utils';
import { HeaderProps, MobileHeaderProps, MobileSidebarProps } from '../utils/Interfaces';

// =============== COMPONENTS ===============

const Header = React.memo(({ user, onHomeClick, onLogout }: HeaderProps) => (
  <header className="hidden md:flex bg-white shadow-sm p-4 justify-between items-center">
    <button className="text-menu font-bold hover:text-menu-hover transition-colors" onClick={onHomeClick}>
      Volver a PanaPay
    </button>
    <div className="flex items-center space-x-2">
      <UserCircle className="h-8 w-8 text-menu" />
      <span className="font-medium">{user}</span>
      <button onClick={onLogout} className="text-menu hover:text-menu-hover">
        <LogOut className="h-6 w-6" />
      </button>
    </div>
  </header>
));

const MobileHeader = React.memo(({ onToggleMenu, onHomeClick, onLogout, isMenuOpen }: MobileHeaderProps) => (
  <div className="md:hidden bg-white shadow-sm p-4 flex justify-between items-center">
    <button
      className="text-menu font-bold hover:text-menu-hover transition-colors"
      onClick={onHomeClick}
    >
      PanaPay
    </button>
    <div className="flex items-center space-x-2">
      <button onClick={onToggleMenu} className="text-menu hover:text-menu-hover">
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      <button onClick={onLogout} className="text-menu hover:text-menu-hover">
        <LogOut className="h-6 w-6" />
      </button>
    </div>
  </div>
));

// Navigation Components

const Sidebar: React.FC<{ children: React.ReactNode }> = React.memo(({ children }) => (
  <div className="hidden md:block bg-white shadow-md p-4 h-screen sticky top-0 sidebar-scroll sidebar-fixed">
    <div className="mb-8 text-center">
      <h2 className="text-xl font-bold text-menu">MENU</h2>
    </div>
    {children}
  </div>
));

const MobileSidebar = React.memo(({ children, isOpen, onClose }: MobileSidebarProps) => (
  <div
    className={`md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    onClick={onClose}
  >
    <div
      className={`absolute top-0 left-0 w-64 h-screen bg-white shadow-md transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-menu">MENU</h2>
      </div>
      <div className="flex-1 overflow-y-auto p-4">{children}</div>
    </div>
  </div>
));

// Update the DashboardMenu interface to remove role
interface DashboardMenuProps {
  menuState: {
    admin: boolean;
    services: boolean;
    financial: boolean;
  };
  toggleMenu: (menuKey: string) => void;
  activeMenuItem: string;
  handleNavigation: (route: string, menuItem: string) => void;
  menuItems: {
    serviciosItems: { id: string; name: string; path: string }[];
    adminItems: { id: string; name: string; path: string }[];
    financialItems: { id: string; name: string; path: string }[];
  };
}

const DashboardMenu: React.FC<DashboardMenuProps> = React.memo(({
  menuState,
  toggleMenu,
  activeMenuItem,
  handleNavigation,
  menuItems
}) => (
  <div className="space-y-2">
    <div
      className={`menu-item ${activeMenuItem === 'home' ? '' : ''}`}
      onClick={() => handleNavigation('/dashboard', 'home')}
    >
      <div className="flex items-center justify-center">
        <img src={Logo} alt="PanaPay Logo" className="h-8 w-auto" />
      </div>
    </div>

    <MenuSection
      title="Servicios"
      isOpen={menuState.services}
      onToggle={() => toggleMenu('services')}
      items={menuItems.serviciosItems}
      activeMenuItem={activeMenuItem}
      handleMenuClick={handleNavigation}
    />

    <MenuSection
      title="Administrativas"
      isOpen={menuState.admin}
      onToggle={() => toggleMenu('admin')}
      items={menuItems.adminItems}
      activeMenuItem={activeMenuItem}
      handleMenuClick={handleNavigation}
    />

    <MenuSection
      title="Financiera"
      isOpen={menuState.financial}
      onToggle={() => toggleMenu('financial')}
      items={menuItems.financialItems}
      activeMenuItem={activeMenuItem}
      handleMenuClick={handleNavigation}
    />

    {(
      <div className="mt-8">
        <div
          className={`menu-item ${activeMenuItem === 'api' ? 'active' : ''}`}
          onClick={() => handleNavigation('/dashboard/api', 'api')}
        >
          API
        </div>
      </div>
    )}
  </div>
));

// =============== MAIN COMPONENT ===============

const DashboardPage = () => {
  const { user, logout, isAdmin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize menu state
  const [menuState, setMenuState] = useState({
    admin: true,
    services: true,
    financial: true
  });

  // Determine active menu item from current path
  const [activeMenuItem, setActiveMenuItem] = useState(() => {
    const path = location.pathname.split('/').pop() || 'home';
    return path;
  });

  // Scroll to top when location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // Menu toggle function
  const toggleMenu = useCallback((menuKey: keyof typeof menuState) => {
    setMenuState(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  }, []);

  // Unified navigation handler
  const handleNavigation = useCallback((route: string, menuItem: string) => {
    setActiveMenuItem(menuItem);
    navigate(route);
    setMobileMenuOpen(false);
  }, [navigate]);

  // Logout handler
  const handleLogout = useCallback(() => {
    logout();
    navigate('/login');
  }, [logout, navigate]);

  // Generate menu items based on role (memoized)
  const menuItems = useMemo(() => ({
    serviciosItems: generateMenuItems('services', isAdmin),
    adminItems: generateMenuItems('administrative', isAdmin),
    financialItems: generateMenuItems('financial', isAdmin)
  }), [isAdmin]);

  // Generate routes based on configuration (memoized)
  const routeElements = useMemo(() => (
    ROUTES_CONFIG.map(route => (
      <Route
        key={route.path}
        path={route.path}
        element={<route.element />}
      />
    ))
  ), []);

  return (
    <div className="min-h-screen bg-menu flex flex-col md:flex-row">
      {/* Mobile Header */}
      <MobileHeader
        onToggleMenu={() => setMobileMenuOpen(prev => !prev)}
        onHomeClick={() => handleNavigation('/dashboard', 'home')}
        onLogout={handleLogout}
        isMenuOpen={mobileMenuOpen}
      />

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      >
        <DashboardMenu
          menuState={menuState}
          toggleMenu={toggleMenu}
          activeMenuItem={activeMenuItem}
          handleNavigation={handleNavigation}
          menuItems={menuItems}
        />
      </MobileSidebar>

      {/* Desktop Sidebar */}
      <Sidebar>
        <DashboardMenu
          menuState={menuState}
          toggleMenu={toggleMenu}
          activeMenuItem={activeMenuItem}
          handleNavigation={handleNavigation}
          menuItems={menuItems}
        />
      </Sidebar>

      {/* Main Content */}
      <div className="flex-1">
        {/* Header - Desktop */}
        <Header
          user={user}
          onHomeClick={() => handleNavigation('/dashboard', 'home')}
          onLogout={handleLogout}
        />

        {/* Content */}
        <main className="p-4 md:p-6">
          <Routes>{routeElements}</Routes>
        </main>
      </div>
    </div>
  );
};

export default DashboardPage;
