import React, { createContext, useContext, useState, useEffect } from 'react';

interface NavigationContextType {
  sidebarMode: 'expanded' | 'collapsed' | 'hidden';
  setSidebarMode: (mode: 'expanded' | 'collapsed' | 'hidden') => void;
  toggleSidebar: () => void;
  currentSection: 'technical-debt' | 'portfolio' | null;
  setCurrentSection: (section: 'technical-debt' | 'portfolio' | null) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [sidebarMode, setSidebarMode] = useState<'expanded' | 'collapsed' | 'hidden'>('expanded');
  const [currentSection, setCurrentSection] = useState<'technical-debt' | 'portfolio' | null>(null);

  // Auto-collapse sidebar for specific routes will be handled by the AppLayout component

  const toggleSidebar = () => {
    setSidebarMode(prev => {
      if (prev === 'expanded') return 'collapsed';
      if (prev === 'collapsed') return 'expanded';
      return 'expanded';
    });
  };

  // Keyboard shortcut for toggle
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <NavigationContext.Provider value={{
      sidebarMode,
      setSidebarMode,
      toggleSidebar,
      currentSection,
      setCurrentSection
    }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};