import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface AppHeaderProps {
  title?: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({ title = "Breeze AI - UI Rationalization" }) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h1 className="text-xl font-bold text-gray-900">{title}</h1>
            </Link>
          </div>
          
          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            <Link 
              to="/dashboard" 
              className={`transition-colors text-sm font-medium ${
                isActive('/dashboard') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/graph-explorer" 
              className={`transition-colors text-sm font-medium ${
                isActive('/graph-explorer') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Graph Explorer
            </Link>
            <Link 
              to="/component-comparator" 
              className={`transition-colors text-sm font-medium ${
                isActive('/component-comparator') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Comparator
            </Link>
            <Link 
              to="/rationalization-roadmap" 
              className={`transition-colors text-sm font-medium ${
                isActive('/rationalization-roadmap') 
                  ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Roadmap
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;