import React from 'react';
import { Link } from 'react-router-dom';
import {
  CubeTransparentIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
  MagnifyingGlassCircleIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  SparklesIcon,
  ServerStackIcon,
  PuzzlePieceIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const PortfolioRationalizationShowcase: React.FC = () => {
  const { t } = useTranslation('solutions');
  const capabilities = [
    {
      icon: MagnifyingGlassCircleIcon,
      titleKey: 'portfolioRationalization.capabilities.semanticAnalysis.title',
      descriptionKey: 'portfolioRationalization.capabilities.semanticAnalysis.description'
    },
    {
      icon: DocumentDuplicateIcon,
      titleKey: 'portfolioRationalization.capabilities.overlapDetection.title',
      descriptionKey: 'portfolioRationalization.capabilities.overlapDetection.description'
    },
    {
      icon: PuzzlePieceIcon,
      titleKey: 'portfolioRationalization.capabilities.integrationMapping.title',
      descriptionKey: 'portfolioRationalization.capabilities.integrationMapping.description'
    },
    {
      icon: ScaleIcon,
      titleKey: 'portfolioRationalization.capabilities.consolidationPlanning.title',
      descriptionKey: 'portfolioRationalization.capabilities.consolidationPlanning.description'
    }
  ];

  const metricKeys = ['applications', 'costReduction', 'redundancy', 'timeToValue'] as const;

  const ontologyLayerKeys = ['functional', 'design', 'architecture', 'code'] as const;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{t('portfolioRationalization.header.title')}</h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-4 py-2 bg-innovation-gradient text-white rounded-lg hover:from-brand-blue-700 hover:to-brand-purple-700 transition-all"
          >
            {t('portfolioRationalization.header.viewDeepDive')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl">
          {t('portfolioRationalization.header.description')}
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-secondary/10 to-brand-purple-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-innovation-gradient rounded-xl flex items-center justify-center">
            <CubeTransparentIcon className="h-8 w-8 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">{t('portfolioRationalization.hero.title')}</h2>
            <p className="text-gray-600">{t('portfolioRationalization.hero.subtitle')}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {metricKeys.map((key) => (
            <div key={key} className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{t(`portfolioRationalization.metrics.${key}.value`)}</div>
              <div className="text-sm font-semibold text-gray-700">{t(`portfolioRationalization.metrics.${key}.label`)}</div>
              <div className="text-xs text-gray-500">{t(`portfolioRationalization.metrics.${key}.subtext`)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Four Ontology Framework */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolioRationalization.framework.title')}</h2>
        <div className="bg-gradient-to-br from-gray-50 to-secondary/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ontologyLayerKeys.map((layerKey, idx) => (
              <div key={layerKey} className="bg-white rounded-lg p-6 border-2 border-secondary hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{t(`portfolioRationalization.framework.layers.${layerKey}.name`)}</h3>
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded">{t('portfolioRationalization.framework.layerLabel')} {idx + 1}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{t(`portfolioRationalization.framework.layers.${layerKey}.description`)}</p>
                <div className="space-y-1">
                  {(t(`portfolioRationalization.framework.layers.${layerKey}.examples`, { returnObjects: true }) as unknown as string[]).map((example: string, exIdx: number) => (
                    <div key={exIdx} className="text-xs text-gray-500 flex items-start">
                      <span className="text-secondary mr-2">•</span>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolioRationalization.capabilities.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-brand-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-brand-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t(capability.titleKey)}</h3>
                  <p className="text-sm text-gray-600">{t(capability.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolioRationalization.process.title')}</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-secondary text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{t('portfolioRationalization.process.steps.discovery.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('portfolioRationalization.process.steps.discovery.description')}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{t('portfolioRationalization.process.steps.discovery.duration')}</span>
                  <span>•</span>
                  <span>{t('portfolioRationalization.process.steps.discovery.metric')}</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-brand-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{t('portfolioRationalization.process.steps.overlap.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('portfolioRationalization.process.steps.overlap.description')}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{t('portfolioRationalization.process.steps.overlap.duration')}</span>
                  <span>•</span>
                  <span>{t('portfolioRationalization.process.steps.overlap.metric')}</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-teal-500 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{t('portfolioRationalization.process.steps.consolidation.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('portfolioRationalization.process.steps.consolidation.description')}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{t('portfolioRationalization.process.steps.consolidation.duration')}</span>
                  <span>•</span>
                  <span>{t('portfolioRationalization.process.steps.consolidation.metric')}</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-success text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{t('portfolioRationalization.process.steps.implementation.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('portfolioRationalization.process.steps.implementation.description')}
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>{t('portfolioRationalization.process.steps.implementation.duration')}</span>
                  <span>•</span>
                  <span>{t('portfolioRationalization.process.steps.implementation.metric')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Analysis Example */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolioRationalization.visualAnalysis.title')}</h2>
        <div className="bg-gradient-to-r from-brand-purple-50 to-secondary/10 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-brand-purple-200">
              <div className="flex items-center mb-3">
                <ChartPieIcon className="h-6 w-6 text-brand-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('portfolioRationalization.visualAnalysis.coverageAnalysis.title')}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('portfolioRationalization.visualAnalysis.coverageAnalysis.analyzed')}</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-brand-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-secondary">
              <div className="flex items-center mb-3">
                <ServerStackIcon className="h-6 w-6 text-secondary mr-2" />
                <h3 className="font-semibold text-gray-900">{t('portfolioRationalization.visualAnalysis.redundancyDetection.title')}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('portfolioRationalization.visualAnalysis.redundancyDetection.overlaps')}</span>
                  <span className="font-semibold">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-secondary h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-success">
              <div className="flex items-center mb-3">
                <CurrencyDollarIcon className="h-6 w-6 text-success mr-2" />
                <h3 className="font-semibold text-gray-900">{t('portfolioRationalization.visualAnalysis.costSavings.title')}</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('portfolioRationalization.visualAnalysis.costSavings.reduction')}</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-success h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Agent Teams */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolioRationalization.agentTeams.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border-2 border-secondary">
            <div className="flex items-center mb-3">
              <SparklesIcon className="h-6 w-6 text-secondary mr-2" />
              <h3 className="font-semibold text-gray-900">{t('portfolioRationalization.agentTeams.discovery.title')}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {t('portfolioRationalization.agentTeams.discovery.description')}
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              {(t('portfolioRationalization.agentTeams.discovery.items', { returnObjects: true }) as unknown as string[]).map((item: string, idx: number) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-brand-purple-200">
            <div className="flex items-center mb-3">
              <ChartBarIcon className="h-6 w-6 text-brand-purple-600 mr-2" />
              <h3 className="font-semibold text-gray-900">{t('portfolioRationalization.agentTeams.analysis.title')}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {t('portfolioRationalization.agentTeams.analysis.description')}
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              {(t('portfolioRationalization.agentTeams.analysis.items', { returnObjects: true }) as unknown as string[]).map((item: string, idx: number) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-success">
            <div className="flex items-center mb-3">
              <ArrowPathIcon className="h-6 w-6 text-success mr-2" />
              <h3 className="font-semibold text-gray-900">{t('portfolioRationalization.agentTeams.planning.title')}</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              {t('portfolioRationalization.agentTeams.planning.description')}
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              {(t('portfolioRationalization.agentTeams.planning.items', { returnObjects: true }) as unknown as string[]).map((item: string, idx: number) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('portfolioRationalization.successStory.title')}</h2>
        <div className="border-l-4 border-secondary pl-6">
          <h3 className="font-semibold text-gray-900 mb-2">{t('portfolioRationalization.successStory.client')}</h3>
          <p className="text-gray-600 mb-4">
            {t('portfolioRationalization.successStory.description')}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-secondary">{t('portfolioRationalization.successStory.appsRetired.value')}</div>
              <div className="text-sm text-gray-600">{t('portfolioRationalization.successStory.appsRetired.label')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-brand-purple-600">{t('portfolioRationalization.successStory.costReduction.value')}</div>
              <div className="text-sm text-gray-600">{t('portfolioRationalization.successStory.costReduction.label')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">{t('portfolioRationalization.successStory.fasterDelivery.value')}</div>
              <div className="text-sm text-gray-600">{t('portfolioRationalization.successStory.fasterDelivery.label')}</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">{t('portfolioRationalization.successStory.timeToInsights.value')}</div>
              <div className="text-sm text-gray-600">{t('portfolioRationalization.successStory.timeToInsights.label')}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRationalizationShowcase;
