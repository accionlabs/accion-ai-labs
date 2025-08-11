import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigation } from '../../contexts/NavigationContext';
import MainSidebar from '../navigation/MainSidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  showToolSidebar?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, showToolSidebar }) => {
  const { sidebarMode, setSidebarMode } = useNavigation();
  const location = useLocation();

  // Auto-collapse sidebar for specific routes
  useEffect(() => {
    if (showToolSidebar && sidebarMode === 'expanded') {
      setSidebarMode('collapsed');
    }
  }, [location.pathname]);

  const getMainContentMargin = () => {
    // No margins on mobile, proper margins on desktop
    if (sidebarMode === 'hidden') return 'ml-0';
    if (sidebarMode === 'collapsed') return 'ml-0 md:ml-16';
    return 'ml-0 md:ml-64';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <MainSidebar />
      <div 
        className={`
          transition-all duration-300
          ${getMainContentMargin()}
          pt-16 md:pt-0
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default AppLayout;