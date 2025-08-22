import React from 'react';
import MainSidebar from '../navigation/MainSidebar';

interface AppLayoutProps {
  children: React.ReactNode;
  showToolSidebar?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {

  return (
    <div className="min-h-screen bg-gray-50">
      <MainSidebar />
      <div 
        className="transition-all duration-300 ml-0 md:ml-64 pt-16 md:pt-0"
      >
        {children}
      </div>
    </div>
  );
};

export default AppLayout;