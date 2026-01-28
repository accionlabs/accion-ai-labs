import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';

// Route labels for human-readable breadcrumb names
const routeLabels: { [key: string]: string } = {
  // Core Technology
  'core-technology': 'Core Technology',
  'kaps-framework': 'KAPS Framework',
  'agent-architecture': 'Agent Architecture',
  'breeze-ai': 'Breeze.AI',
  'gen-ai-box': 'Gen AI in a Box',
  'guardrails': 'Strategic Guardrails',

  // Solutions
  'solutions': 'Solutions',
  'product-engineering': 'Product Engineering',
  'overview': 'Overview',
  'requirements': 'Requirements Capture',
  'design': 'Design Generation',
  'implementation': 'Implementation',
  'application-reengineering': 'Application Re-engineering',
  'discovery': 'Discovery & Assessment',
  'strategy': 'Strategy',
  'validation': 'Continuous Validation',
  'asimov': 'ASIMOV',
  'transformation': 'Transformation Engine',
  'patterns': 'Migration Patterns',
  'success-stories': 'Success Stories',
  'customer-service': 'Customer Service',
  'self-heal-bot': 'Self-Heal Bot',
  'assisted-heal-bot': 'Assisted Heal Bot',
  'business-optimization': 'Business Optimization',
  'data-engineering': 'Data Engineering',

  // Portfolio
  'portfolio': 'Portfolio',
  'comparator': 'Component Comparator',
  'graph-explorer': 'Graph Explorer',
  'roadmap': 'Roadmap',

  // Technical Debt
  'technical-debt': 'Technical Debt',
  'assessment': 'Assessment',
  'agent-analysis': 'Agent Analysis',

  // Breeze Deep Dive
  'breeze-process': 'Breeze.AI Deep Dive',
  'challenge': 'Challenge & Solution',
  'manual-translation-tax': 'Manual Translation Tax',
  'traditional-approaches': 'Traditional Approaches',
  'breeze-breakthrough': 'Breeze Breakthrough',
  'competitive-advantages': 'Competitive Advantages',
  'architecture': 'Architecture',
  'components': 'Core Components',
  'interactions': 'Component Interactions',
  'integration': 'Integration Points',
  'scalability': 'Scalability & Performance',
  'security': 'Security & Compliance',
  'semantic': 'Semantic Model',
  'functional': 'Functional Ontology',
  'code': 'Code Ontology',
  'relationships': 'Cross-Ontology Relationships',
  'agents': 'Agents Layer',
  'flow': 'Process Flow',
  'phase1': 'Phase 1: Foundation',
  'phase2': 'Phase 2: Evolution',
  'phase3': 'Phase 3: Semantic First',

  // Contact
  'contact': 'Get Started'
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();

  // Generate breadcrumbs from pathname
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isHomePage = pathnames.length === 0;

  // Don't show breadcrumbs on home page
  if (isHomePage) {
    return null;
  }

  const breadcrumbs = [{ label: 'Home', path: '/' }];
  let currentPath = '';

  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] ||
      segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
    breadcrumbs.push({ label, path: currentPath });
  });

  return (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-30 md:z-10">
      <div className="px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-1 text-sm h-10 overflow-x-auto">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1;

            return (
              <li key={crumb.path} className="flex items-center whitespace-nowrap">
                {index > 0 && (
                  <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-1 flex-shrink-0" />
                )}
                {index === 0 ? (
                  <Link
                    to={crumb.path}
                    className="text-gray-500 hover:text-secondary transition-colors flex items-center"
                  >
                    <HomeIcon className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span className="text-gray-900 font-medium truncate max-w-[200px]">
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    to={crumb.path}
                    className="text-gray-500 hover:text-secondary transition-colors"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default Breadcrumbs;
