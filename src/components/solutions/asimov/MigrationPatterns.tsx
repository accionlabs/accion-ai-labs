import React, { useState } from 'react';
import {
  CodeBracketIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  BoltIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  ArrowRightIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const MigrationPatterns: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedPattern, setSelectedPattern] = useState('strangler-fig');

  const patternI18nKeys: Record<string, string> = {
    'strangler-fig': 'stranglerFig',
    'big-bang': 'bigBang',
    'parallel-run': 'parallelRun',
    'database-first': 'databaseFirst',
    'hybrid-bridge': 'hybridBridge'
  };

  const patternIcons: Record<string, any> = {
    'strangler-fig': ArrowPathIcon,
    'big-bang': BoltIcon,
    'parallel-run': ServerStackIcon,
    'database-first': CircleStackIcon,
    'hybrid-bridge': CubeTransparentIcon
  };

  const agentKeys: Record<string, string[]> = {
    'stranglerFig': ['boundaryIdentifier', 'trafficRouter', 'validation', 'decommission'],
    'bigBang': ['fullSystemAnalyzer', 'parallelBuilder', 'cutoverOrchestrator', 'rollbackManager'],
    'parallelRun': ['transactionDuplicator', 'outputComparator', 'discrepancyResolver', 'switchoverAgent'],
    'databaseFirst': ['schemaMigration', 'dataSync', 'queryOptimizer', 'performanceMonitor'],
    'hybridBridge': ['apiBridgeBuilder', 'protocolTranslator', 'integrationMonitor', 'deprecationManager']
  };

  const getPatternData = (patternKey: string) => {
    const i18nKey = patternI18nKeys[patternKey];
    const base = `asimov.patterns.migrationPatterns.${i18nKey}`;

    return {
      name: t(`${base}.name`),
      icon: patternIcons[patternKey],
      description: t(`${base}.description`),
      bestFor: t(`${base}.bestFor`),
      approach: t(`${base}.approach`, { returnObjects: true }) as unknown as string[],
      benefits: t(`${base}.benefits`, { returnObjects: true }) as unknown as string[],
      agents: agentKeys[i18nKey].map(ak => ({
        name: t(`${base}.agents.${ak}.name`),
        role: t(`${base}.agents.${ak}.role`)
      })),
      timeline: t(`${base}.timeline`),
      riskLevel: t(`${base}.riskLevel`),
      complexity: t(`${base}.complexity`)
    };
  };

  const comparisonFactorKeys = ['migrationSpeed', 'riskLevel', 'costEfficiency', 'complexity'];
  const patternComparison = comparisonFactorKeys.map((fk, idx) => ({
    factor: t(`asimov.patterns.comparison.factors.${fk}`),
    patterns: {
      'strangler-fig': [3, 5, 4, 3][idx],
      'big-bang': [5, 2, 3, 5][idx],
      'parallel-run': [2, 5, 2, 2][idx],
      'database-first': [4, 3, 4, 3][idx],
      'hybrid-bridge': [3, 4, 3, 2][idx]
    }
  }));

  const implementationStepKeys = ['patternSelection', 'architectureDesign', 'agentConfiguration', 'pilotMigration', 'fullExecution'];
  const implementationSteps = implementationStepKeys.map((sk, idx) => ({
    step: idx + 1,
    title: t(`asimov.patterns.implementationProcess.steps.${sk}.title`),
    description: t(`asimov.patterns.implementationProcess.steps.${sk}.description`),
    duration: t(`asimov.patterns.implementationProcess.steps.${sk}.duration`)
  }));

  const currentPattern = getPatternData(selectedPattern);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <CodeBracketIcon className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('asimov.patterns.header.title')}</h1>
              <p className="text-sm text-gray-600 mt-1">{t('asimov.patterns.header.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pattern Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.patterns.select')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {Object.entries(patternI18nKeys).map(([key, i18nKey]) => {
              const Icon = patternIcons[key];
              const name = t(`asimov.patterns.migrationPatterns.${i18nKey}.name`);
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPattern(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPattern === key
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${
                    selectedPattern === key ? 'text-purple-600' : 'text-gray-600'
                  }`} />
                  <p className={`text-xs font-medium ${
                    selectedPattern === key ? 'text-purple-900' : 'text-gray-700'
                  }`}>
                    {name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Pattern Details */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {currentPattern.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {currentPattern.description}
                </p>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{t('asimov.patterns.bestFor')}</p>
                  <p className="text-sm text-gray-600">
                    {currentPattern.bestFor}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{t('asimov.patterns.approach')}</p>
                  <ol className="space-y-2">
                    {currentPattern.approach.map((step, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-600">{t('asimov.patterns.timeline')}</p>
                    <p className="text-sm font-bold text-purple-600">
                      {currentPattern.timeline}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600">{t('asimov.patterns.riskLevel')}</p>
                    <p className={`text-sm font-bold ${
                      currentPattern.riskLevel === t('asimov.patterns.riskLevels.low') ? 'text-green-600' :
                      currentPattern.riskLevel === t('asimov.patterns.riskLevels.medium') ? 'text-yellow-600' :
                      currentPattern.riskLevel === t('asimov.patterns.riskLevels.veryLow') ? 'text-green-500' :
                      'text-red-600'
                    }`}>
                      {currentPattern.riskLevel}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600">{t('asimov.patterns.complexity')}</p>
                    <p className="text-sm font-bold text-indigo-600">
                      {currentPattern.complexity}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">{t('asimov.patterns.benefits')}</p>
                  <ul className="space-y-2">
                    {currentPattern.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{t('asimov.patterns.agents')}</p>
                  <div className="space-y-2">
                    {currentPattern.agents.map((agent, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3">
                        <div className="flex items-start">
                          <CpuChipIcon className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                            <p className="text-xs text-gray-600">{agent.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.patterns.comparison.title')}</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">{t('asimov.patterns.comparison.factor')}</th>
                  {Object.entries(patternI18nKeys).map(([key, i18nKey]) => (
                    <th key={key} className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                      {t(`asimov.patterns.migrationPatterns.${i18nKey}.name`)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {patternComparison.map((comparison, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-700">{comparison.factor}</td>
                    {Object.entries(comparison.patterns).map(([pattern, score]) => (
                      <td key={pattern} className="py-3 px-4 text-center">
                        <div className="flex justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-8 rounded ${
                                i < score ? 'bg-purple-600' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.patterns.implementationProcess.title')}</h2>
          <div className="relative">
            <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid grid-cols-5 gap-4">
              {implementationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-purple-600 rounded-full ring-4 ring-white"></div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-4">
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-purple-600">{t('asimov.patterns.implementationProcess.stepLabel')} {step.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{step.description}</p>
                    <p className="text-xs text-purple-600 font-medium">{step.duration}</p>
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

export default MigrationPatterns;
