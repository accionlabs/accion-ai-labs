import React, { useState } from 'react';
import {
  CircleStackIcon,
  ChartBarIcon,
  BoltIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  ArrowPathIcon,
  CubeTransparentIcon,
  BeakerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const DataEngineeringShowcase: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [activeTab, setActiveTab] = useState('ingestion');

  const tabKeys = ['ingestion', 'processing', 'governance'] as const;

  const agentKeys: Record<string, string[]> = {
    ingestion: ['schemaDiscovery', 'pipelineOrchestrator', 'qualityGuardian'],
    processing: ['transformation', 'aggregationOptimizer', 'streamProcessor'],
    governance: ['complianceMonitor', 'lineageTracker', 'securitySentinel']
  };

  const architectureLayerKeys = ['dataSources', 'ingestionLayer', 'processingEngine', 'storageLake', 'analyticsAi'] as const;

  const useCaseKeys = ['realTimeAnalytics', 'unifiedLakehouse', 'iotPipeline'] as const;

  const implementationPhaseKeys = ['assessment', 'design', 'build', 'deploy', 'optimize'] as const;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CircleStackIcon className="h-8 w-8 text-brand-purple-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{t('dataEngineering.header.title')}</h1>
                <p className="text-sm text-gray-600 mt-1">{t('dataEngineering.header.subtitle')}</p>
              </div>
            </div>
            <Link
              to="/solutions/data-engineering"
              className="px-4 py-2 bg-brand-purple-600 text-white rounded-lg hover:bg-brand-purple-700 transition-colors flex items-center"
            >
              {t('dataEngineering.header.viewDeepDive')}
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('dataEngineering.hero.title')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('dataEngineering.hero.description')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-brand-purple-600">{t('dataEngineering.hero.metrics.processing.value')}</p>
                  <p className="text-sm text-gray-600">{t('dataEngineering.hero.metrics.processing.label')}</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-success">{t('dataEngineering.hero.metrics.uptime.value')}</p>
                  <p className="text-sm text-gray-600">{t('dataEngineering.hero.metrics.uptime.label')}</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-brand-purple-600">{t('dataEngineering.hero.metrics.costReduction.value')}</p>
                  <p className="text-sm text-gray-600">{t('dataEngineering.hero.metrics.costReduction.label')}</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-secondary">{t('dataEngineering.hero.metrics.latency.value')}</p>
                  <p className="text-sm text-gray-600">{t('dataEngineering.hero.metrics.latency.label')}</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-brand-purple-600 text-white rounded-lg hover:bg-brand-purple-700 transition-colors">
                  {t('dataEngineering.hero.scheduleDemo')}
                </button>
                <button className="px-6 py-3 bg-white text-brand-purple-600 border border-brand-purple-600 rounded-lg hover:bg-brand-purple-50 transition-colors">
                  {t('dataEngineering.hero.viewCaseStudies')}
                </button>
              </div>
            </div>

            {/* Architecture Visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('dataEngineering.hero.architectureTitle')}</h3>
              <div className="space-y-3">
                {architectureLayerKeys.map((layerKey, index) => (
                  <div key={layerKey} className="relative">
                    <div className={`bg-gradient-to-r ${t(`dataEngineering.architecture.layers.${layerKey}.color`)} text-white rounded-lg p-3`}>
                      <h4 className="font-semibold mb-1">{t(`dataEngineering.architecture.layers.${layerKey}.name`)}</h4>
                      <div className="flex flex-wrap gap-2">
                        {(t(`dataEngineering.architecture.layers.${layerKey}.components`, { returnObjects: true }) as unknown as string[]).map((comp: string, idx: number) => (
                          <span key={idx} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                    {index < architectureLayerKeys.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 z-10">
                        <ArrowPathIcon className="h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agent Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('dataEngineering.agents.title')}</h2>
          <div className="mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {tabKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-brand-purple-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t(`dataEngineering.agents.tabs.${key}`)}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {agentKeys[activeTab].map((agentKey, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <CpuChipIcon className="h-8 w-8 text-brand-purple-600" />
                  <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                    {t(`dataEngineering.agents.${activeTab}.${agentKey}.performance`)}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t(`dataEngineering.agents.${activeTab}.${agentKey}.name`)}</h3>
                <p className="text-sm text-gray-600 mb-4">{t(`dataEngineering.agents.${activeTab}.${agentKey}.role`)}</p>
                <div className="space-y-2">
                  {(t(`dataEngineering.agents.${activeTab}.${agentKey}.capabilities`, { returnObjects: true }) as unknown as string[]).map((cap: string, idx: number) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('dataEngineering.successStories.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCaseKeys.map((useCaseKey, index) => {
              const metricKeys = t(`dataEngineering.successStories.${useCaseKey}.metricKeys`, { returnObjects: true }) as unknown as string[];
              return (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
                    <h3 className="font-semibold mb-1">{t(`dataEngineering.successStories.${useCaseKey}.title`)}</h3>
                    <p className="text-sm opacity-90">{t(`dataEngineering.successStories.${useCaseKey}.industry`)}</p>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">{t('dataEngineering.successStories.labels.challenge')}</p>
                      <p className="text-sm text-gray-600">{t(`dataEngineering.successStories.${useCaseKey}.challenge`)}</p>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">{t('dataEngineering.successStories.labels.solution')}</p>
                      <p className="text-sm text-gray-600">{t(`dataEngineering.successStories.${useCaseKey}.solution`)}</p>
                    </div>
                    <div className="border-t pt-4">
                      <p className="text-sm font-semibold text-gray-700 mb-3">{t('dataEngineering.successStories.labels.keyMetrics')}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {metricKeys.map((metricKey: string) => (
                          <div key={metricKey} className="text-center">
                            <p className="text-lg font-bold text-brand-purple-600">{t(`dataEngineering.successStories.${useCaseKey}.metrics.${metricKey}.value`)}</p>
                            <p className="text-xs text-gray-600">{t(`dataEngineering.successStories.${useCaseKey}.metrics.${metricKey}.label`)}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('dataEngineering.implementation.title')}</h2>
          <div className="relative">
            <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid grid-cols-5 gap-4">
              {implementationPhaseKeys.map((phaseKey, index) => (
                <div key={phaseKey} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-brand-purple-600 rounded-full ring-4 ring-white"></div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{t(`dataEngineering.implementation.phases.${phaseKey}.phase`)}</h3>
                    <p className="text-xs text-brand-purple-600 font-semibold mb-3">{t(`dataEngineering.implementation.phases.${phaseKey}.weeks`)}</p>
                    <ul className="space-y-1">
                      {(t(`dataEngineering.implementation.phases.${phaseKey}.activities`, { returnObjects: true }) as unknown as string[]).map((activity: string, idx: number) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-brand-purple-600 mr-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataEngineeringShowcase;
