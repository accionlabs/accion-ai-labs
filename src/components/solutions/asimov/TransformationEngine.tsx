import React, { useState } from 'react';
import {
  CpuChipIcon,
  CodeBracketIcon,
  ArrowPathIcon,
  BoltIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  DocumentDuplicateIcon,
  SparklesIcon,
  BeakerIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const TransformationEngine: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedTransformation, setSelectedTransformation] = useState('cobol-to-java');

  const transformationAgents = [
    {
      name: t('asimov.transformation.agents.codeTranslator.name'),
      icon: CodeBracketIcon,
      description: t('asimov.transformation.agents.codeTranslator.description'),
      capabilities: t('asimov.transformation.agents.codeTranslator.capabilities', { returnObjects: true }) as unknown as string[],
      performance: {
        [t('asimov.transformation.agents.codeTranslator.performance.translationSpeed.label')]: t('asimov.transformation.agents.codeTranslator.performance.translationSpeed.value'),
        [t('asimov.transformation.agents.codeTranslator.performance.accuracy.label')]: t('asimov.transformation.agents.codeTranslator.performance.accuracy.value'),
        [t('asimov.transformation.agents.codeTranslator.performance.manualReview.label')]: t('asimov.transformation.agents.codeTranslator.performance.manualReview.value')
      }
    },
    {
      name: t('asimov.transformation.agents.refactoring.name'),
      icon: ArrowPathIcon,
      description: t('asimov.transformation.agents.refactoring.description'),
      capabilities: t('asimov.transformation.agents.refactoring.capabilities', { returnObjects: true }) as unknown as string[],
      performance: {
        [t('asimov.transformation.agents.refactoring.performance.patternsApplied.label')]: t('asimov.transformation.agents.refactoring.performance.patternsApplied.value'),
        [t('asimov.transformation.agents.refactoring.performance.codeQuality.label')]: t('asimov.transformation.agents.refactoring.performance.codeQuality.value'),
        [t('asimov.transformation.agents.refactoring.performance.techDebt.label')]: t('asimov.transformation.agents.refactoring.performance.techDebt.value')
      }
    },
    {
      name: t('asimov.transformation.agents.apiDesigner.name'),
      icon: CubeTransparentIcon,
      description: t('asimov.transformation.agents.apiDesigner.description'),
      capabilities: t('asimov.transformation.agents.apiDesigner.capabilities', { returnObjects: true }) as unknown as string[],
      performance: {
        [t('asimov.transformation.agents.apiDesigner.performance.apisGenerated.label')]: t('asimov.transformation.agents.apiDesigner.performance.apisGenerated.value'),
        [t('asimov.transformation.agents.apiDesigner.performance.documentation.label')]: t('asimov.transformation.agents.apiDesigner.performance.documentation.value'),
        [t('asimov.transformation.agents.apiDesigner.performance.compliance.label')]: t('asimov.transformation.agents.apiDesigner.performance.compliance.value')
      }
    },
    {
      name: t('asimov.transformation.agents.testGenerator.name'),
      icon: BeakerIcon,
      description: t('asimov.transformation.agents.testGenerator.description'),
      capabilities: t('asimov.transformation.agents.testGenerator.capabilities', { returnObjects: true }) as unknown as string[],
      performance: {
        [t('asimov.transformation.agents.testGenerator.performance.coverage.label')]: t('asimov.transformation.agents.testGenerator.performance.coverage.value'),
        [t('asimov.transformation.agents.testGenerator.performance.testCases.label')]: t('asimov.transformation.agents.testGenerator.performance.testCases.value'),
        [t('asimov.transformation.agents.testGenerator.performance.executionTime.label')]: t('asimov.transformation.agents.testGenerator.performance.executionTime.value')
      }
    }
  ];

  const patternStepKeys: Record<string, string[]> = {
    'cobol-to-java': ['codeAnalysis', 'patternMapping', 'codeGeneration', 'optimization', 'testing'],
    'monolith-to-microservices': ['domainAnalysis', 'dependencyExtraction', 'serviceGeneration', 'apiCreation', 'containerization'],
    'database-modernization': ['schemaAnalysis', 'dataProfiling', 'schemaTransformation', 'dataMigration', 'performanceTuning']
  };

  const patternI18nKeys: Record<string, string> = {
    'cobol-to-java': 'cobolToJava',
    'monolith-to-microservices': 'monolithToMicroservices',
    'database-modernization': 'databaseModernization'
  };

  const getPatternData = (patternKey: string) => {
    const i18nKey = patternI18nKeys[patternKey];
    const stepKeys = patternStepKeys[patternKey];
    const base = `asimov.transformation.patterns.${i18nKey}`;

    const steps = stepKeys.map(sk => ({
      phase: t(`${base}.steps.${sk}.phase`),
      description: t(`${base}.steps.${sk}.description`),
      agent: t(`${base}.steps.${sk}.agent`),
      output: t(`${base}.steps.${sk}.output`)
    }));

    const metricsObj = t(`${base}.metrics`, { returnObjects: true }) as unknown as Record<string, { label: string; value: string }>;
    const metrics: Record<string, string> = {};
    Object.values(metricsObj).forEach(m => {
      metrics[m.label] = m.value;
    });

    return {
      title: t(`${base}.title`),
      description: t(`${base}.description`),
      steps,
      metrics
    };
  };

  const transformationTools = [
    {
      name: t('asimov.transformation.tools.llmCodeAnalyzer.name'),
      description: t('asimov.transformation.tools.llmCodeAnalyzer.description'),
      icon: SparklesIcon,
      features: t('asimov.transformation.tools.llmCodeAnalyzer.features', { returnObjects: true }) as unknown as string[]
    },
    {
      name: t('asimov.transformation.tools.astProcessor.name'),
      description: t('asimov.transformation.tools.astProcessor.description'),
      icon: CubeTransparentIcon,
      features: t('asimov.transformation.tools.astProcessor.features', { returnObjects: true }) as unknown as string[]
    },
    {
      name: t('asimov.transformation.tools.semanticPreserver.name'),
      description: t('asimov.transformation.tools.semanticPreserver.description'),
      icon: ShieldCheckIcon,
      features: t('asimov.transformation.tools.semanticPreserver.features', { returnObjects: true }) as unknown as string[]
    },
    {
      name: t('asimov.transformation.tools.performanceOptimizer.name'),
      description: t('asimov.transformation.tools.performanceOptimizer.description'),
      icon: BoltIcon,
      features: t('asimov.transformation.tools.performanceOptimizer.features', { returnObjects: true }) as unknown as string[]
    }
  ];

  const currentPattern = getPatternData(selectedTransformation);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <CpuChipIcon className="h-8 w-8 text-indigo-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('asimov.transformation.header.title')}</h1>
              <p className="text-sm text-gray-600 mt-1">{t('asimov.transformation.header.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Transformation Agents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.transformation.agents.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transformationAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-indigo-600 mr-3 flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">{agent.name}</h3>
                      <p className="text-sm text-gray-600 mb-4">{agent.description}</p>

                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-700 mb-2">{t('asimov.transformation.agents.coreCapabilities')}</p>
                        <ul className="space-y-1">
                          {agent.capabilities.map((cap, idx) => (
                            <li key={idx} className="text-xs text-gray-600 flex items-start">
                              <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                              {cap}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="border-t pt-3">
                        <div className="grid grid-cols-3 gap-2">
                          {Object.entries(agent.performance).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <p className="text-sm font-bold text-indigo-600">{value}</p>
                              <p className="text-xs text-gray-600">{key}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Transformation Patterns */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.transformation.patterns.title')}</h2>

          <div className="mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {Object.keys(patternI18nKeys).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedTransformation(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors text-sm ${
                    selectedTransformation === key
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t(`asimov.transformation.patterns.${patternI18nKeys[key]}.title`)}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {currentPattern.title}
            </h3>
            <p className="text-sm text-gray-600 mb-6">
              {currentPattern.description}
            </p>

            {/* Transformation Steps */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-4">{t('asimov.transformation.patterns.pipeline')}</h4>
              <div className="space-y-3">
                {currentPattern.steps.map((step, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 flex items-start">
                    <div className="bg-indigo-100 rounded-full p-2 mr-4">
                      <span className="text-sm font-bold text-indigo-600">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-gray-900 mb-1">{step.phase}</h5>
                      <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <CpuChipIcon className="h-3 w-3 mr-1" />
                        <span className="mr-3">{t('asimov.transformation.patterns.agentLabel')} {step.agent}</span>
                        <DocumentDuplicateIcon className="h-3 w-3 mr-1" />
                        <span>{t('asimov.transformation.patterns.outputLabel')} {step.output}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Object.entries(currentPattern.metrics).map(([key, value]) => (
                <div key={key} className="bg-white rounded-lg p-3 text-center">
                  <p className="text-lg font-bold text-indigo-600">{value}</p>
                  <p className="text-xs text-gray-600">{key}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Transformation Tools */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.transformation.tools.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transformationTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg p-6">
                  <Icon className="h-8 w-8 text-indigo-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-xs text-gray-600 mb-3">{tool.description}</p>
                  <ul className="space-y-1">
                    {tool.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-center">
                        <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformationEngine;
