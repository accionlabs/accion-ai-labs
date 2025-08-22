import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  HomeIcon, 
  CpuChipIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  PuzzlePieceIcon,
  ChevronRightIcon,
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  ChartBarIcon,
  SparklesIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  CubeTransparentIcon,
  DocumentChartBarIcon,
  MapIcon,
  RectangleStackIcon,
  BeakerIcon,
  UserGroupIcon,
  ArrowPathIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  DocumentMagnifyingGlassIcon,
  CodeBracketIcon
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
    id: 'core-technology',
    label: 'Core Technology',
    icon: CpuChipIcon,
    children: [
      {
        id: 'kaps-framework',
        label: 'KAPS Framework',
        icon: RectangleStackIcon,
        path: '/core-technology'
      },
      {
        id: 'agentic-architecture',
        label: 'Agent Architecture',
        icon: CubeTransparentIcon,
        path: '/core-technology/agent-architecture'
      },
      {
        id: 'core-overview',
        label: 'Breeze.AI',
        icon: CpuChipIcon,
        path: '/core-technology/breeze-ai'
      },
      {
        id: 'gen-ai-box',
        label: 'Gen AI in a Box',
        icon: BeakerIcon,
        path: '/core-technology/gen-ai-box'
      },
      {
        id: 'guardrails',
        label: 'Strategic Guardrails',
        icon: ScaleIcon,
        path: '/core-technology/guardrails'
      }
    ]
  },
  {
    id: 'solutions',
    label: 'Solution Showcase',
    icon: LightBulbIcon,
    children: [
      {
        id: 'solutions-overview',
        label: 'Overview',
        icon: LightBulbIcon,
        path: '/solutions'
      },
      {
        id: 'tech-debt-showcase',
        label: 'Technical Debt Management',
        icon: WrenchScrewdriverIcon,
        path: '/solutions/technical-debt'
      },
      {
        id: 'portfolio-showcase',
        label: 'Portfolio Rationalization',
        icon: PuzzlePieceIcon,
        path: '/solutions/portfolio-rationalization'
      },
      {
        id: 'customer-service',
        label: 'Customer Service',
        icon: PhoneIcon,
        path: '/solutions/customer-service'
      },
      {
        id: 'app-modernization',
        label: 'App Modernization',
        icon: ArrowPathIcon,
        path: '/solutions/app-modernization'
      },
      {
        id: 'data-engineering',
        label: 'Data Engineering',
        icon: CircleStackIcon,
        path: '/solutions/data-engineering'
      }
    ]
  },
  {
    id: 'live-examples',
    label: 'Solution Deep Dives',
    icon: RectangleStackIcon,
    children: [
      {
        id: 'asimov-migration',
        label: 'ASIMOV Migration',
        icon: ArrowPathIcon,
        children: [
          {
            id: 'asimov-overview',
            label: 'Overview',
            icon: ArrowPathIcon,
            path: '/solutions/asimov'
          },
          {
            id: 'discovery-analysis',
            label: 'Discovery & Analysis',
            icon: DocumentMagnifyingGlassIcon,
            path: '/solutions/asimov/discovery'
          },
          {
            id: 'transformation-engine',
            label: 'Transformation Engine',
            icon: CpuChipIcon,
            path: '/solutions/asimov/transformation'
          },
          {
            id: 'migration-patterns',
            label: 'Migration Patterns',
            icon: CodeBracketIcon,
            path: '/solutions/asimov/patterns'
          },
          {
            id: 'success-stories',
            label: 'Success Stories',
            icon: ChartBarIcon,
            path: '/solutions/asimov/success-stories'
          }
        ]
      },
      {
        id: 'customer-service-deep',
        label: 'Customer Service AI',
        icon: PhoneIcon,
        children: [
          {
            id: 'cs-overview',
            label: 'Overview',
            icon: PhoneIcon,
            path: '/solutions/customer-service'
          },
          {
            id: 'self-heal-bot',
            label: 'Self Heal Bot',
            icon: SparklesIcon,
            path: '/solutions/customer-service/self-heal-bot'
          },
          {
            id: 'assisted-heal-bot',
            label: 'Assisted Heal Bot',
            icon: UserGroupIcon,
            path: '/solutions/customer-service/assisted-heal-bot'
          },
          {
            id: 'optimization-hub',
            label: 'Optimization Hub',
            icon: ChartBarIcon,
            path: '/solutions/customer-service/optimization-hub'
          },
          {
            id: 'implementation',
            label: 'Implementation',
            icon: MapIcon,
            path: '/solutions/customer-service/implementation'
          }
        ]
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
            id: 'rationalization-roadmap',
            label: 'Rationalization Roadmap',
            icon: MapIcon,
            path: '/portfolio/rationalization-roadmap'
          },
          {
            id: 'unified-product',
            label: 'Unified Product View',
            icon: BeakerIcon,
            path: '/portfolio/unified-product'
          }
        ]
      }
    ]
  },
  {
    id: 'contact',
    label: 'Get Started',
    icon: PhoneIcon,
    path: '/contact'
  }
];

const MainSidebar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Initialize expanded sections based on current path
  const getInitialExpandedSections = () => {
    const expanded = new Set<string>(['live-examples']);
    
    // Auto-expand sections that contain the active path
    menuItems.forEach(item => {
      if (item.children) {
        const shouldExpand = item.children.some(child => {
          if (child.path && location.pathname.startsWith(child.path)) return true;
          if (child.children) {
            return child.children.some(grandchild => 
              grandchild.path && location.pathname.startsWith(grandchild.path)
            );
          }
          return false;
        });
        if (shouldExpand) {
          expanded.add(item.id);
          // Also expand child sections if needed
          item.children.forEach(child => {
            if (child.children) {
              const shouldExpandChild = child.children.some(grandchild =>
                grandchild.path && location.pathname.startsWith(grandchild.path)
              );
              if (shouldExpandChild) {
                expanded.add(child.id);
              }
            }
          });
        }
      }
    });
    
    return expanded;
  };
  
  const [expandedSections, setExpandedSections] = useState<Set<string>>(getInitialExpandedSections());

  // Update expanded sections when location changes
  useEffect(() => {
    const expanded = new Set<string>(['live-examples']);
    
    // Auto-expand sections that contain the active path
    menuItems.forEach(item => {
      if (item.children) {
        const shouldExpand = item.children.some(child => {
          if (child.path && location.pathname.startsWith(child.path)) return true;
          if (child.children) {
            return child.children.some(grandchild => 
              grandchild.path && location.pathname.startsWith(grandchild.path)
            );
          }
          return false;
        });
        if (shouldExpand) {
          expanded.add(item.id);
          // Also expand child sections if needed
          item.children.forEach(child => {
            if (child.children) {
              const shouldExpandChild = child.children.some(grandchild =>
                grandchild.path && location.pathname.startsWith(grandchild.path)
              );
              if (shouldExpandChild) {
                expanded.add(child.id);
              }
            }
          });
        }
      }
    });
    
    setExpandedSections(expanded);
  }, [location.pathname]);

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
    // Exact match for specific paths
    return location.pathname === path;
  };

  const isParentActive = (item: MenuItem) => {
    // Check if current path matches the parent path
    if (item.path && location.pathname.startsWith(item.path)) {
      return true;
    }
    // Check if any child or grandchild is active
    if (item.children) {
      return item.children.some(child => {
        if (isActive(child.path)) return true;
        if (child.children) {
          return child.children.some(grandchild => isActive(grandchild.path));
        }
        return false;
      });
    }
    return false;
  };

  const renderMenuItem = (item: MenuItem, depth = 0, isMobile = false) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const Icon = item.icon;
    
    // Check if this parent item should be highlighted
    const hasActiveChild = hasChildren && isParentActive(item);

    if (hasChildren) {
      return (
        <div key={item.id} className="mb-1">
          <button
            onClick={() => !isMobile && toggleSection(item.id)}
            className={`
              w-full flex items-center justify-between px-3 py-2 rounded-lg relative group
              ${hasActiveChild ? 'bg-blue-50 text-blue-700' : 'text-gray-700'} 
              hover:bg-gray-100 transition-colors
              ${depth > 0 ? 'ml-3' : ''}
              ${isMobile ? 'cursor-default' : ''}
            `}
            title={undefined}
          >
            <div className="flex items-center">
              <Icon className={`h-5 w-5 mr-3 ${hasActiveChild ? 'text-blue-600' : 'text-gray-500'}`} />
              <span className="text-sm font-medium">{item.label}</span>
            </div>
            {!isMobile && (
              <ChevronRightIcon 
                className={`h-4 w-4 text-gray-400 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
              />
            )}
          </button>
          {((isMobile || isExpanded)) && item.children && (
            <div className="mt-1">
              {item.children.map(child => renderMenuItem(child, depth + 1, isMobile))}
            </div>
          )}
        </div>
      );
    }

    const marginClass = depth === 1 ? 'ml-8' : depth === 2 ? 'ml-12' : depth > 2 ? 'ml-16' : '';
    
    return (
      <Link
        key={item.id}
        to={item.path || '#'}
        onClick={() => isMobile && setIsMobileMenuOpen(false)}
        className={`
          flex items-center px-3 py-2 rounded-lg mb-1 transition-colors relative group
          ${marginClass}
          ${isActive(item.path) 
            ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600' 
            : 'text-gray-700 hover:bg-gray-100'
          }
        `}
      >
        <Icon className={`h-5 w-5 mr-3 ${isActive(item.path) ? 'text-blue-600' : 'text-gray-500'}`} />
        <span className="text-sm font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <>
      {/* Mobile Menu Button - Always visible on mobile */}
      <button
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-700" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Sidebar - Hidden on mobile by default, slides in when menu is open */}
      <div
        className={`
          fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-transform duration-300 z-40
          w-full md:w-64
          ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        {/* Header */}
        <div className="h-16 border-b border-gray-200 flex items-center justify-between px-4">
          {/* Always show full header on mobile */}
          <div className="flex items-center md:hidden">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-gray-900">Accion AI Labs</span>
            </Link>
          </div>
          
          {/* Desktop header */}
          <div className="hidden md:flex md:items-center md:justify-between md:w-full">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-gray-900">Accion AI Labs</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-4rem)]">
          <div className="md:hidden">
            {/* Mobile: Always show all items expanded */}
            {menuItems.map(item => renderMenuItem(item, 0, true))}
          </div>
          <div className="hidden md:block">
            {/* Desktop: Collapsible sections */}
            {menuItems.map(item => renderMenuItem(item, 0, false))}
          </div>
        </nav>
      </div>

      {/* Overlay for mobile */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default MainSidebar;