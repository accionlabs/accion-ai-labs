import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ArrowPathIcon,
  PhoneIcon,
  ArrowRightIcon,
  CheckIcon,
  CircleStackIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

interface SolutionDef {
  id: string;
  translationKey: string;
  categoryKey: string;
  icon: React.ElementType;
  color: string;
  capabilityKeys: string[];
  outcomeKeys: string[];
  status: 'deep-dive' | 'showcase-only';
  link?: string;
}

const solutionDefs: SolutionDef[] = [
  {
    id: 'product-engineering',
    translationKey: 'productEngineering',
    categoryKey: 'featuredDeepDives',
    icon: RocketLaunchIcon,
    color: 'indigo',
    capabilityKeys: ['semanticExtraction', 'multiStakeholder', 'automatedArtifact', 'continuousSprint'],
    outcomeKeys: ['fasterTime', 'reducedAmbiguity', 'fewerDefects'],
    status: 'deep-dive',
    link: '/solutions/product-development',
  },
  {
    id: 'app-reengineering',
    translationKey: 'appReengineering',
    categoryKey: 'featuredDeepDives',
    icon: WrenchScrewdriverIcon,
    color: 'orange',
    capabilityKeys: ['automatedDiscovery', 'multiStakeholder', 'aiImplementation', 'continuousSprint'],
    outcomeKeys: ['fasterModernization', 'costReduction', 'fewerDefects'],
    status: 'deep-dive',
    link: '/solutions/application-reengineering',
  },
  {
    id: 'portfolio-rat',
    translationKey: 'portfolioRat',
    categoryKey: 'featuredDeepDives',
    icon: CpuChipIcon,
    color: 'blue',
    capabilityKeys: ['crossApp', 'overlapDetection', 'similarityScoring', 'migrationStrategy'],
    outcomeKeys: ['maintenanceCost', 'eliminatedDuplicate', 'unifiedStack'],
    status: 'deep-dive',
    link: '/solutions/portfolio-rationalization',
  },
  {
    id: 'asimov-migration',
    translationKey: 'asimovMigration',
    categoryKey: 'featuredDeepDives',
    icon: ArrowPathIcon,
    color: 'purple',
    capabilityKeys: ['codeTranslation', 'dependencyMapping', 'incrementalMigration', 'zeroDowntime'],
    outcomeKeys: ['migrationTime', 'costSavings', 'uptime'],
    status: 'deep-dive',
    link: '/solutions/asimov',
  },
  {
    id: 'customer-service-ai',
    translationKey: 'customerServiceAi',
    categoryKey: 'featuredDeepDives',
    icon: PhoneIcon,
    color: 'green',
    capabilityKeys: ['selfHealBot', 'assistedHealBot', 'optimizationHub', 'multiChannel'],
    outcomeKeys: ['autoResolution', 'agentProductivity', 'costReduction'],
    status: 'deep-dive',
    link: '/solutions/customer-service',
  },
  {
    id: 'data-engineering',
    translationKey: 'dataEngineering',
    categoryKey: 'dataAnalytics',
    icon: CircleStackIcon,
    color: 'indigo',
    capabilityKeys: ['qualityChecks', 'pipelineDesign', 'anomalyDetection', 'lineageTracking'],
    outcomeKeys: ['errorReduction', 'fasterPipeline', 'realTimeInsights'],
    status: 'showcase-only',
    link: '/solutions/data-engineering',
  }
];

const categoryKeys = ['featuredDeepDives', 'dataAnalytics'];

const SolutionShowcase: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedCategoryKey, setSelectedCategoryKey] = useState<string>('featuredDeepDives');
  const filteredSolutions = solutionDefs.filter(s => s.categoryKey === selectedCategoryKey);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      orange: 'from-orange-400 to-red-500',
      blue: 'from-blue-400 to-indigo-500',
      green: 'from-green-400 to-teal-500',
      purple: 'from-purple-400 to-pink-500',
      indigo: 'from-indigo-400 to-purple-500',
      red: 'from-red-400 to-pink-500',
    };
    return colorMap[color] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{t('showcase.header.title')}</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            {t('showcase.header.description')}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categoryKeys.map((catKey) => (
              <button
                key={catKey}
                onClick={() => setSelectedCategoryKey(catKey)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategoryKey === catKey
                    ? 'bg-secondary text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {t(`showcase.categories.${catKey}`)}
                <span className="ml-2 text-sm opacity-80">
                  ({solutionDefs.filter(s => s.categoryKey === catKey).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => {
            const Icon = solution.icon;
            const isDeepDive = solution.status === 'deep-dive';
            const sk = `showcase.solutions.${solution.translationKey}`;

            return (
              <div
                key={solution.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all ${
                  isDeepDive ? 'hover:scale-105' : ''
                }`}
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${getColorClasses(solution.color)}`} />

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getColorClasses(solution.color)}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {solution.status === 'deep-dive' && (
                      <span className="px-2 py-1 bg-brand-purple-100 text-brand-purple-600 text-xs font-semibold rounded-full">
                        {t('showcase.labels.deepDive')}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t(`${sk}.title`)}</h3>
                  <p className="text-sm text-gray-600 mb-4">{t(`${sk}.description`)}</p>

                  {/* Capabilities */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">{t('showcase.labels.keyCapabilities')}</h4>
                    <ul className="space-y-1">
                      {solution.capabilityKeys.slice(0, 3).map((capKey, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-600">
                          <CheckIcon className="h-3 w-3 text-success mr-2 mt-0.5 flex-shrink-0" />
                          {t(`${sk}.capabilities.${capKey}`)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">{t('showcase.labels.businessOutcomes')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.outcomeKeys.slice(0, 2).map((outKey, index) => (
                        <span key={index} className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">
                          {t(`${sk}.outcomes.${outKey}`)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  <div className="text-xs text-gray-500 mb-4">
                    <span className="font-semibold">{t('showcase.labels.caseStudy')}</span> {t(`${sk}.caseStudy`)}
                  </div>

                  {/* Action Button */}
                  {solution.link && (
                    <Link
                      to={solution.link}
                      className={`inline-flex items-center text-sm font-medium ${
                        isDeepDive ? 'text-secondary hover:text-brand-blue-700' : 'text-gray-600 hover:text-gray-700'
                      }`}
                    >
                      {solution.status === 'deep-dive' ? t('showcase.labels.exploreDeepDive') : t('showcase.labels.learnMore')}
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-innovation-gradient rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">{t('showcase.cta.title')}</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            {t('showcase.cta.description')}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-secondary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('showcase.cta.button')}
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionShowcase;