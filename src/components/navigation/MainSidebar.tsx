import React, { useState, useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  CodeBracketIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import SearchBox from '../search/SearchBox';
import LanguageSwitcher from '../common/LanguageSwitcher';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  path?: string;
  children?: MenuItem[];
}

const MainSidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useTranslation('navigation');

  const menuItems: MenuItem[] = useMemo(() => [
    {
      id: 'home',
      label: t('sidebar.home'),
      icon: HomeIcon,
      path: '/'
    },
    {
      id: 'core-technology',
      label: t('sidebar.coreTechnology'),
      icon: CpuChipIcon,
      children: [
        {
          id: 'semantic-engineering',
          label: t('sidebar.overview'),
          icon: SparklesIcon,
          path: '/core-technology'
        },
        {
          id: 'kaps-framework',
          label: t('sidebar.kapsFramework'),
          icon: RectangleStackIcon,
          path: '/core-technology/kaps-framework'
        },
        {
          id: 'agentic-architecture',
          label: t('sidebar.agentArchitecture'),
          icon: CubeTransparentIcon,
          path: '/core-technology/agent-architecture'
        },
        {
          id: 'core-overview',
          label: t('sidebar.breezeAI'),
          icon: CpuChipIcon,
          path: '/core-technology/breeze-ai'
        },
        {
          id: 'gen-ai-box',
          label: t('sidebar.genAIInABox'),
          icon: BeakerIcon,
          path: '/core-technology/gen-ai-box'
        },
        {
          id: 'guardrails',
          label: t('sidebar.strategicGuardrails'),
          icon: ScaleIcon,
          path: '/core-technology/guardrails'
        }
      ]
    },
    {
      id: 'solutions',
      label: t('sidebar.solutionShowcase'),
      icon: LightBulbIcon,
      children: [
        {
          id: 'solutions-overview',
          label: t('sidebar.allSolutions'),
          icon: LightBulbIcon,
          path: '/solutions'
        },
        {
          id: 'product-engineering-showcase',
          label: t('sidebar.productEngineering'),
          icon: RocketLaunchIcon,
          path: '/solutions/product-development'
        },
        {
          id: 'app-reengineering-showcase',
          label: t('sidebar.applicationReengineering'),
          icon: WrenchScrewdriverIcon,
          path: '/solutions/application-reengineering'
        },
        {
          id: 'portfolio-showcase',
          label: t('sidebar.portfolioRationalization'),
          icon: PuzzlePieceIcon,
          path: '/solutions/portfolio-rationalization'
        },
        {
          id: 'asimov-showcase',
          label: t('sidebar.asimovLegacyMigration'),
          icon: ArrowPathIcon,
          path: '/solutions/asimov'
        },
        {
          id: 'customer-service-showcase',
          label: t('sidebar.customerServiceAI'),
          icon: PhoneIcon,
          path: '/solutions/customer-service'
        },
        {
          id: 'data-engineering',
          label: t('sidebar.dataEngineering'),
          icon: CircleStackIcon,
          path: '/solutions/data-engineering'
        }
      ]
    },
    {
      id: 'live-examples',
      label: t('sidebar.solutionDeepDives'),
      icon: RectangleStackIcon,
      children: [
        {
          id: 'product-engineering-deep',
          label: t('sidebar.productEngineering'),
          icon: RocketLaunchIcon,
          children: [
            {
              id: 'pe-overview',
              label: t('sidebar.overview'),
              icon: RocketLaunchIcon,
              path: '/solutions/product-development'
            },
            {
              id: 'knowledge-graph-extraction',
              label: t('sidebar.knowledgeGraphExtraction'),
              icon: SparklesIcon,
              path: '/solutions/product-development/extraction'
            },
            {
              id: 'stakeholder-validation',
              label: t('sidebar.stakeholderValidation'),
              icon: UserGroupIcon,
              path: '/solutions/product-development/validation'
            },
            {
              id: 'implementation-pipeline',
              label: t('sidebar.implementationPipeline'),
              icon: CodeBracketIcon,
              path: '/solutions/product-development/implementation'
            }
          ]
        },
        {
          id: 'application-reengineering',
          label: t('sidebar.applicationReengineering'),
          icon: WrenchScrewdriverIcon,
          children: [
            {
              id: 'app-reeng-overview',
              label: t('sidebar.overview'),
              icon: WrenchScrewdriverIcon,
              path: '/solutions/application-reengineering'
            },
            {
              id: 'discovery-assessment',
              label: t('sidebar.discoveryAssessment'),
              icon: SparklesIcon,
              path: '/solutions/application-reengineering/discovery'
            },
            {
              id: 'reengineering-strategy',
              label: t('sidebar.reengineeringStrategy'),
              icon: UserGroupIcon,
              path: '/solutions/application-reengineering/strategy'
            },
            {
              id: 'implementation-modernization',
              label: t('sidebar.implementationModernization'),
              icon: CodeBracketIcon,
              path: '/solutions/application-reengineering/implementation'
            },
            {
              id: 'continuous-validation',
              label: t('sidebar.continuousValidation'),
              icon: ShieldCheckIcon,
              path: '/solutions/application-reengineering/validation'
            }
          ]
        },
        {
          id: 'portfolio',
          label: t('sidebar.portfolioRationalization'),
          icon: PuzzlePieceIcon,
          children: [
            {
              id: 'portfolio-overview',
              label: t('sidebar.overview'),
              icon: DocumentChartBarIcon,
              path: '/portfolio'
            },
            {
              id: 'graph-explorer',
              label: t('sidebar.ontologyGraphExplorer'),
              icon: CubeTransparentIcon,
              path: '/portfolio/graph-explorer'
            },
            {
              id: 'component-comparator',
              label: t('sidebar.componentComparator'),
              icon: ScaleIcon,
              path: '/portfolio/component-comparator'
            },
            {
              id: 'rationalization-roadmap',
              label: t('sidebar.rationalizationRoadmap'),
              icon: MapIcon,
              path: '/portfolio/rationalization-roadmap'
            },
            {
              id: 'unified-product',
              label: t('sidebar.unifiedProductView'),
              icon: BeakerIcon,
              path: '/portfolio/unified-product'
            }
          ]
        },
        {
          id: 'asimov-migration',
          label: t('sidebar.asimovLegacyMigration'),
          icon: ArrowPathIcon,
          children: [
            {
              id: 'asimov-overview',
              label: t('sidebar.overview'),
              icon: ArrowPathIcon,
              path: '/solutions/asimov'
            },
            {
              id: 'discovery-analysis',
              label: t('sidebar.discoveryAnalysis'),
              icon: DocumentMagnifyingGlassIcon,
              path: '/solutions/asimov/discovery'
            },
            {
              id: 'transformation-engine',
              label: t('sidebar.transformationEngine'),
              icon: CpuChipIcon,
              path: '/solutions/asimov/transformation'
            },
            {
              id: 'migration-patterns',
              label: t('sidebar.migrationPatterns'),
              icon: CodeBracketIcon,
              path: '/solutions/asimov/patterns'
            },
            {
              id: 'success-stories',
              label: t('sidebar.successStories'),
              icon: ChartBarIcon,
              path: '/solutions/asimov/success-stories'
            }
          ]
        },
        {
          id: 'customer-service-deep',
          label: t('sidebar.customerServiceAI'),
          icon: PhoneIcon,
          children: [
            {
              id: 'cs-overview',
              label: t('sidebar.overview'),
              icon: PhoneIcon,
              path: '/solutions/customer-service'
            },
            {
              id: 'self-heal-bot',
              label: t('sidebar.selfHealBot'),
              icon: SparklesIcon,
              path: '/solutions/customer-service/self-heal-bot'
            },
            {
              id: 'assisted-heal-bot',
              label: t('sidebar.assistedHealBot'),
              icon: UserGroupIcon,
              path: '/solutions/customer-service/assisted-heal-bot'
            },
            {
              id: 'optimization-hub',
              label: t('sidebar.optimizationHub'),
              icon: ChartBarIcon,
              path: '/solutions/customer-service/optimization-hub'
            },
            {
              id: 'implementation',
              label: t('sidebar.implementation'),
              icon: MapIcon,
              path: '/solutions/customer-service/implementation'
            }
          ]
        }
      ]
    },
    {
      id: 'breeze-process-model',
      label: t('sidebar.breezeAIDeepDive'),
      icon: Bars3Icon,
      children: [
        {
          id: 'breeze-challenge',
          label: t('sidebar.challengeSolution'),
          icon: LightBulbIcon,
          children: [
            {
              id: 'manual-translation-tax',
              label: t('sidebar.manualTranslationTax'),
              icon: DocumentChartBarIcon,
              path: '/breeze-process/challenge/manual-translation-tax'
            },
            {
              id: 'traditional-approaches',
              label: t('sidebar.whyTraditionalFails'),
              icon: XMarkIcon,
              path: '/breeze-process/challenge/traditional-approaches'
            },
            {
              id: 'breeze-breakthrough',
              label: t('sidebar.breezeBreakthrough'),
              icon: SparklesIcon,
              path: '/breeze-process/challenge/breakthrough'
            },
            {
              id: 'revolutionary-capabilities',
              label: t('sidebar.revolutionaryCapabilities'),
              icon: RocketLaunchIcon,
              path: '/breeze-process/challenge/capabilities'
            },
            {
              id: 'legacy-transformation',
              label: t('sidebar.legacyTransformation'),
              icon: ArrowPathIcon,
              path: '/breeze-process/challenge/legacy'
            },
            {
              id: 'competitive-advantages',
              label: t('sidebar.competitiveAdvantages'),
              icon: ChartBarIcon,
              path: '/breeze-process/challenge/advantages'
            }
          ]
        },
        {
          id: 'breeze-architecture',
          label: t('sidebar.systemArchitecture'),
          icon: CpuChipIcon,
          children: [
            {
              id: 'architecture-overview',
              label: t('sidebar.architectureOverview'),
              icon: CubeTransparentIcon,
              path: '/breeze-process/architecture/overview'
            },
            {
              id: 'core-components',
              label: t('sidebar.coreComponents'),
              icon: PuzzlePieceIcon,
              path: '/breeze-process/architecture/components'
            },
            {
              id: 'component-interactions',
              label: t('sidebar.componentInteractions'),
              icon: ArrowPathIcon,
              path: '/breeze-process/architecture/interactions'
            },
            {
              id: 'integration-points',
              label: t('sidebar.integrationPoints'),
              icon: CircleStackIcon,
              path: '/breeze-process/architecture/integration'
            },
            {
              id: 'scalability-performance',
              label: t('sidebar.scalabilityPerformance'),
              icon: ArrowTrendingUpIcon,
              path: '/breeze-process/architecture/scalability'
            },
            {
              id: 'security-compliance',
              label: t('sidebar.securityCompliance'),
              icon: ScaleIcon,
              path: '/breeze-process/architecture/security'
            }
          ]
        },
        {
          id: 'breeze-semantic-model',
          label: t('sidebar.semanticModel'),
          icon: CircleStackIcon,
          children: [
            {
              id: 'semantic-overview',
              label: t('sidebar.frameworkOverview'),
              icon: DocumentChartBarIcon,
              path: '/breeze-process/semantic/overview'
            },
            {
              id: 'functional-ontology',
              label: t('sidebar.functionalOntology'),
              icon: BeakerIcon,
              path: '/breeze-process/semantic/functional'
            },
            {
              id: 'design-ontology',
              label: t('sidebar.designOntology'),
              icon: PuzzlePieceIcon,
              path: '/breeze-process/semantic/design'
            },
            {
              id: 'architecture-ontology',
              label: t('sidebar.architectureOntology'),
              icon: CubeTransparentIcon,
              path: '/breeze-process/semantic/architecture'
            },
            {
              id: 'code-ontology',
              label: t('sidebar.codeOntology'),
              icon: CodeBracketIcon,
              path: '/breeze-process/semantic/code'
            },
            {
              id: 'cross-relationships',
              label: t('sidebar.crossOntologyRelationships'),
              icon: ArrowPathIcon,
              path: '/breeze-process/semantic/relationships'
            },
            {
              id: 'agents-layer',
              label: t('sidebar.agentsLayer'),
              icon: SparklesIcon,
              path: '/breeze-process/semantic/agents'
            }
          ]
        },
        {
          id: 'breeze-process-flow',
          label: t('sidebar.processFlow'),
          icon: ArrowTrendingUpIcon,
          children: [
            {
              id: 'process-overview',
              label: t('sidebar.processOverview'),
              icon: DocumentChartBarIcon,
              path: '/breeze-process/flow/overview'
            },
            {
              id: 'phase1-foundation',
              label: t('sidebar.phase1Foundation'),
              icon: CubeTransparentIcon,
              path: '/breeze-process/flow/phase1'
            },
            {
              id: 'phase2-evolution',
              label: t('sidebar.phase2Evolution'),
              icon: ArrowTrendingUpIcon,
              path: '/breeze-process/flow/phase2'
            },
            {
              id: 'phase3-semantic-first',
              label: t('sidebar.phase3SemanticFirst'),
              icon: RocketLaunchIcon,
              path: '/breeze-process/flow/phase3'
            }
          ]
        }
      ]
    },
    {
      id: 'contact',
      label: t('sidebar.getStarted'),
      icon: PhoneIcon,
      path: '/contact'
    }
  ], [t]);

  // Initialize expanded sections based on current path
  const getInitialExpandedSections = () => {
    const expanded = new Set<string>();

    // Auto-expand ONLY the section that contains the active path
    menuItems.forEach(item => {
      if (item.children) {
        const shouldExpand = item.children.some(child => {
          if (child.path && pathname.startsWith(child.path)) return true;
          if (child.children) {
            return child.children.some(grandchild =>
              grandchild.path && pathname.startsWith(grandchild.path)
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
                grandchild.path && pathname.startsWith(grandchild.path)
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
    const expanded = new Set<string>();

    // Auto-expand ONLY the section that contains the active path
    menuItems.forEach(item => {
      if (item.children) {
        const shouldExpand = item.children.some(child => {
          if (child.path && pathname.startsWith(child.path)) return true;
          if (child.children) {
            return child.children.some(grandchild =>
              grandchild.path && pathname.startsWith(grandchild.path)
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
                grandchild.path && pathname.startsWith(grandchild.path)
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
  }, [pathname, menuItems]);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set<string>();

    // Find if this is a top-level section
    const isTopLevel = menuItems.some(item => item.id === sectionId);

    if (isTopLevel) {
      // For top-level sections, collapse all others and toggle this one
      if (!expandedSections.has(sectionId)) {
        newExpanded.add(sectionId);
      }
    } else {
      // For nested sections, preserve parent and toggle child
      // First, keep the parent section expanded
      menuItems.forEach(item => {
        if (item.children && item.children.some(child => child.id === sectionId)) {
          newExpanded.add(item.id);
        } else if (expandedSections.has(item.id) && !item.children?.some(child => expandedSections.has(child.id))) {
          // Keep other top-level sections that don't have the toggled child
          const hasTargetChild = item.children?.some(child => child.id === sectionId);
          if (!hasTargetChild) {
            // This is a different parent, close it
          } else {
            newExpanded.add(item.id);
          }
        }
      });

      // Toggle the nested section
      if (expandedSections.has(sectionId)) {
        // Closing nested section
      } else {
        newExpanded.add(sectionId);
      }
    }

    setExpandedSections(newExpanded);
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    // Normalize paths by removing trailing slashes for comparison
    const normalizedPathname = pathname.replace(/\/$/, '');
    const normalizedPath = path.replace(/\/$/, '');
    // Check for exact match
    return normalizedPathname === normalizedPath;
  };

  const isParentActive = (item: MenuItem) => {
    // Check if current path matches the parent path
    if (item.path && pathname.startsWith(item.path)) {
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
              <Icon className={`h-5 w-5 mr-3 ${hasActiveChild ? 'text-secondary' : 'text-gray-500'}`} />
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
            ? 'bg-brand-blue-50 text-secondary border-l-4 border-secondary'
            : 'text-gray-700 hover:bg-gray-100'
          }
        `}
      >
        <Icon className={`h-5 w-5 mr-3 ${isActive(item.path) ? 'text-secondary' : 'text-gray-500'}`} />
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
        className="md:hidden fixed top-4 left-4 z-[9999] p-3 bg-white rounded-lg shadow-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100"
        aria-label="Toggle navigation menu"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-6 w-6 text-gray-800" />
        ) : (
          <Bars3Icon className="h-6 w-6 text-gray-800" />
        )}
      </button>

      {/* Sidebar - Hidden on mobile by default, slides in when menu is open */}
      <div
        className={`
          fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-transform duration-300 z-[9998]
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
              <div className="w-8 h-8 bg-innovation-gradient rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-gray-900">Accion AI Labs</span>
            </Link>
          </div>

          {/* Desktop header */}
          <div className="hidden md:flex md:items-center md:justify-between md:w-full">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 bg-innovation-gradient rounded-lg mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-gray-900">Accion AI Labs</span>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Search Box */}
        <div className="px-3 py-2 border-b border-gray-200">
          <SearchBox onResultClick={() => setIsMobileMenuOpen(false)} />
        </div>

        {/* Navigation */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-7.5rem)]">
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
          className="fixed inset-0 bg-black bg-opacity-50 z-[9997] md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default MainSidebar;
