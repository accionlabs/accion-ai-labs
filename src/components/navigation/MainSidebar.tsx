import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigation } from '../../contexts/NavigationContext';
import { 
  HomeIcon, 
  ChartBarIcon, 
  BeakerIcon,
  DocumentChartBarIcon,
  MapIcon,
  ScaleIcon,
  CubeTransparentIcon,
  PuzzlePieceIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  Bars3Icon,
  XMarkIcon,
  CpuChipIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path?: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    id: 'home',
    label: 'Home',
    icon: HomeIcon,
    path: '/'
  },
  {
    id: 'technical-debt',
    label: 'Technical Debt Analysis',
    icon: WrenchScrewdriverIcon,
    children: [
      {
        id: 'td-overview',
        label: 'Overview',
        icon: ChartBarIcon,
        path: '/technical-debt'
      },
      {
        id: 'agent-analysis',
        label: 'Agent-Based Extraction',
        icon: SparklesIcon,
        path: '/technical-debt/agent-analysis'
      },
      {
        id: 'td-graph',
        label: 'Graph Explorer',
        icon: CpuChipIcon,
        path: '/technical-debt/graph-explorer'
      },
      {
        id: 'debt-assessment',
        label: 'Debt Assessment',
        icon: ScaleIcon,
        path: '/technical-debt/assessment'
      },
      {
        id: 'remediation',
        label: 'Remediation Roadmap',
        icon: ArrowTrendingUpIcon,
        path: '/technical-debt/remediation'
      }
    ]
  },
  {
    id: 'portfolio',
    label: 'Portfolio Rationalization',
    icon: PuzzlePieceIcon,
    children: [
      {
        id: 'portfolio-overview',
        label: 'Overview',
        icon: DocumentChartBarIcon,
        path: '/portfolio'
      },
      {
        id: 'graph-explorer',
        label: 'Ontology Graph Explorer',
        icon: CubeTransparentIcon,
        path: '/portfolio/graph-explorer'
      },
      {
        id: 'component-comparator',
        label: 'Component Comparator',
        icon: ScaleIcon,
        path: '/portfolio/component-comparator'
      },
      {
        id: 'ux-roadmap',
        label: 'UX Rationalization Roadmap',
        icon: MapIcon,
        path: '/portfolio/rationalization-roadmap'
      }
    ]
  }
];

const MainSidebar: React.FC = () => {
  const location = useLocation();
  const { sidebarMode, setSidebarMode, toggleSidebar } = useNavigation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['technical-debt', 'portfolio']));

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    // Exact match
    if (location.pathname === path) return true;
    // For child paths, only mark as active if it's an exact child path match
    // This prevents parent routes from being highlighted when child routes are active
    return false;
  };

  const renderMenuItem = (item: MenuItem, depth = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const Icon = item.icon;
    
    // Check if any child is active
    const hasActiveChild = hasChildren && item.children?.some(child => 
      isActive(child.path) || (child.children?.some(grandchild => isActive(grandchild.path)))
    );

    if (hasChildren) {
      return (
        <div key={item.id} className="mb-1">
          <button
            onClick={() => toggleSection(item.id)}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-lg
              ${hasActiveChild ? 'bg-blue-50 text-blue-700' : 'text-gray-700'} 
              hover:bg-gray-100 transition-colors
              ${depth > 0 ? 'ml-3' : ''}
            `}
          >
            <div className="flex items-center">
              <Icon className={`h-5 w-5 mr-3 ${hasActiveChild ? 'text-blue-600' : 'text-gray-500'}`} />
              {sidebarMode === 'expanded' && (
                <span className="text-sm font-medium">{item.label}</span>
              )}
            </div>
            {sidebarMode === 'expanded' && (
              <ChevronRightIcon 
                className={`h-4 w-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
              />
            )}
          </button>
          {sidebarMode === 'expanded' && isExpanded && item.children && (
            <div className="mt-1">
              {item.children.map(child => renderMenuItem(child, depth + 1))}
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        key={item.id}
        to={item.path || '#'}
        className={`
          flex items-center px-3 py-2 rounded-lg mb-1 transition-colors
          ${depth > 0 && sidebarMode === 'expanded' ? 'ml-8' : ''}
          ${isActive(item.path) 
            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
            : 'text-gray-700 hover:bg-gray-100'
          }
        `}
        title={sidebarMode === 'collapsed' ? item.label : undefined}
      >
        <Icon className={`h-5 w-5 ${sidebarMode === 'expanded' ? 'mr-3' : ''} ${isActive(item.path) ? 'text-blue-600' : 'text-gray-500'}`} />
        {sidebarMode === 'expanded' && (
          <span className="text-sm font-medium">{item.label}</span>
        )}
      </Link>
    );
  };

  if (sidebarMode === 'hidden') return null;

  return (
    <>
      {/* Sidebar */}
      <div
        className={`
          fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 z-40
          ${sidebarMode === 'expanded' ? 'w-64' : 'w-16'}
        `}
      >
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4">
          {sidebarMode === 'expanded' ? (
            <>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mr-2" />
                <span className="font-bold text-gray-900">Breeze.AI</span>
              </div>
              <button
                onClick={toggleSidebar}
                className="p-1 rounded hover:bg-gray-100"
                title="Collapse sidebar (⌘B)"
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
              </button>
            </>
          ) : (
            <button
              onClick={toggleSidebar}
              className="p-1 rounded hover:bg-gray-100 mx-auto"
              title="Expand sidebar (⌘B)"
            >
              <Bars3Icon className="h-5 w-5 text-gray-500" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-4rem)]">
          {menuItems.map(item => renderMenuItem(item))}
        </nav>
      </div>

      {/* Overlay for mobile */}
      {sidebarMode === 'expanded' && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarMode('collapsed')}
        />
      )}
    </>
  );
};

export default MainSidebar;