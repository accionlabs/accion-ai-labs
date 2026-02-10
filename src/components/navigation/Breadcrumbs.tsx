import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRightIcon, HomeIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const { t } = useTranslation('navigation');

  // Route labels for human-readable breadcrumb names
  const routeLabels: { [key: string]: string } = useMemo(() => ({
    // Core Technology
    'core-technology': t('breadcrumbs.coreTechnology'),
    'kaps-framework': t('breadcrumbs.kapsFramework'),
    'agent-architecture': t('breadcrumbs.agentArchitecture'),
    'breeze-ai': t('breadcrumbs.breezeAI'),
    'gen-ai-box': t('breadcrumbs.genAIBox'),
    'guardrails': t('breadcrumbs.guardrails'),

    // Solutions
    'solutions': t('breadcrumbs.solutions'),
    'product-engineering': t('breadcrumbs.productEngineering'),
    'product-development': t('breadcrumbs.productDevelopment'),
    'overview': t('breadcrumbs.overview'),
    'requirements': t('breadcrumbs.requirements'),
    'design': t('breadcrumbs.design'),
    'implementation': t('breadcrumbs.implementation'),
    'extraction': t('breadcrumbs.extraction'),
    'validation': t('breadcrumbs.validation'),
    'application-reengineering': t('breadcrumbs.applicationReengineering'),
    'discovery': t('breadcrumbs.discovery'),
    'strategy': t('breadcrumbs.strategy'),
    'asimov': t('breadcrumbs.asimov'),
    'transformation': t('breadcrumbs.transformation'),
    'patterns': t('breadcrumbs.patterns'),
    'success-stories': t('breadcrumbs.successStories'),
    'customer-service': t('breadcrumbs.customerService'),
    'self-heal-bot': t('breadcrumbs.selfHealBot'),
    'assisted-heal-bot': t('breadcrumbs.assistedHealBot'),
    'optimization-hub': t('breadcrumbs.optimizationHub'),
    'business-optimization': t('breadcrumbs.businessOptimization'),
    'data-engineering': t('breadcrumbs.dataEngineering'),

    // Portfolio
    'portfolio': t('breadcrumbs.portfolio'),
    'comparator': t('breadcrumbs.comparator'),
    'graph-explorer': t('breadcrumbs.graphExplorer'),
    'roadmap': t('breadcrumbs.roadmap'),

    // Technical Debt
    'technical-debt': t('breadcrumbs.technicalDebt'),
    'assessment': t('breadcrumbs.assessment'),
    'agent-analysis': t('breadcrumbs.agentAnalysis'),

    // Breeze Deep Dive
    'breeze-process': t('breadcrumbs.breezeProcess'),
    'challenge': t('breadcrumbs.challenge'),
    'manual-translation-tax': t('breadcrumbs.manualTranslationTax'),
    'traditional-approaches': t('breadcrumbs.traditionalApproaches'),
    'breeze-breakthrough': t('breadcrumbs.breezeBreakthrough'),
    'breakthrough': t('breadcrumbs.breakthrough'),
    'competitive-advantages': t('breadcrumbs.competitiveAdvantages'),
    'capabilities': t('breadcrumbs.capabilities'),
    'legacy': t('breadcrumbs.legacy'),
    'advantages': t('breadcrumbs.advantages'),
    'architecture': t('breadcrumbs.architecture'),
    'components': t('breadcrumbs.components'),
    'interactions': t('breadcrumbs.interactions'),
    'integration': t('breadcrumbs.integration'),
    'scalability': t('breadcrumbs.scalability'),
    'security': t('breadcrumbs.security'),
    'semantic': t('breadcrumbs.semantic'),
    'functional': t('breadcrumbs.functional'),
    'code': t('breadcrumbs.code'),
    'relationships': t('breadcrumbs.relationships'),
    'agents': t('breadcrumbs.agents'),
    'flow': t('breadcrumbs.flow'),
    'phase1': t('breadcrumbs.phase1'),
    'phase2': t('breadcrumbs.phase2'),
    'phase3': t('breadcrumbs.phase3'),

    // Contact
    'contact': t('breadcrumbs.contact')
  }), [t]);

  // Generate breadcrumbs from pathname
  const pathnames = location.pathname.split('/').filter((x) => x);
  const isHomePage = pathnames.length === 0;

  // Don't show breadcrumbs on home page
  if (isHomePage) {
    return null;
  }

  const breadcrumbs = [{ label: t('breadcrumbs.home'), path: '/' }];
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
                    <span className="sr-only">{t('breadcrumbs.home')}</span>
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
