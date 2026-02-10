import React, { useState } from 'react';
import {
  DocumentMagnifyingGlassIcon,
  CpuChipIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ServerIcon,
  BoltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CubeTransparentIcon,
  ClockIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const DiscoveryAnalysis: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [activeTab, setActiveTab] = useState('codebase');

  const discoveryAgents = [
    {
      name: t('asimov.discovery.agents.codeAnalysis.name'),
      icon: CodeBracketIcon,
      description: t('asimov.discovery.agents.codeAnalysis.description'),
      capabilities: t('asimov.discovery.agents.codeAnalysis.capabilities', { returnObjects: true }) as unknown as string[],
      metrics: {
        [t('asimov.discovery.agents.codeAnalysis.metrics.linesAnalyzed.label')]: t('asimov.discovery.agents.codeAnalysis.metrics.linesAnalyzed.value'),
        [t('asimov.discovery.agents.codeAnalysis.metrics.accuracy.label')]: t('asimov.discovery.agents.codeAnalysis.metrics.accuracy.value'),
        [t('asimov.discovery.agents.codeAnalysis.metrics.speed.label')]: t('asimov.discovery.agents.codeAnalysis.metrics.speed.value')
      }
    },
    {
      name: t('asimov.discovery.agents.dependencyMapper.name'),
      icon: CubeTransparentIcon,
      description: t('asimov.discovery.agents.dependencyMapper.description'),
      capabilities: t('asimov.discovery.agents.dependencyMapper.capabilities', { returnObjects: true }) as unknown as string[],
      metrics: {
        [t('asimov.discovery.agents.dependencyMapper.metrics.dependenciesFound.label')]: t('asimov.discovery.agents.dependencyMapper.metrics.dependenciesFound.value'),
        [t('asimov.discovery.agents.dependencyMapper.metrics.depth.label')]: t('asimov.discovery.agents.dependencyMapper.metrics.depth.value'),
        [t('asimov.discovery.agents.dependencyMapper.metrics.coverage.label')]: t('asimov.discovery.agents.dependencyMapper.metrics.coverage.value')
      }
    },
    {
      name: t('asimov.discovery.agents.documentationGenerator.name'),
      icon: DocumentTextIcon,
      description: t('asimov.discovery.agents.documentationGenerator.description'),
      capabilities: t('asimov.discovery.agents.documentationGenerator.capabilities', { returnObjects: true }) as unknown as string[],
      metrics: {
        [t('asimov.discovery.agents.documentationGenerator.metrics.pagesGenerated.label')]: t('asimov.discovery.agents.documentationGenerator.metrics.pagesGenerated.value'),
        [t('asimov.discovery.agents.documentationGenerator.metrics.completeness.label')]: t('asimov.discovery.agents.documentationGenerator.metrics.completeness.value'),
        [t('asimov.discovery.agents.documentationGenerator.metrics.timeSaved.label')]: t('asimov.discovery.agents.documentationGenerator.metrics.timeSaved.value')
      }
    },
    {
      name: t('asimov.discovery.agents.riskAssessment.name'),
      icon: ExclamationTriangleIcon,
      description: t('asimov.discovery.agents.riskAssessment.description'),
      capabilities: t('asimov.discovery.agents.riskAssessment.capabilities', { returnObjects: true }) as unknown as string[],
      metrics: {
        [t('asimov.discovery.agents.riskAssessment.metrics.risksIdentified.label')]: t('asimov.discovery.agents.riskAssessment.metrics.risksIdentified.value'),
        [t('asimov.discovery.agents.riskAssessment.metrics.falsePositives.label')]: t('asimov.discovery.agents.riskAssessment.metrics.falsePositives.value'),
        [t('asimov.discovery.agents.riskAssessment.metrics.priorityAccuracy.label')]: t('asimov.discovery.agents.riskAssessment.metrics.priorityAccuracy.value')
      }
    }
  ];

  const analysisOutputs = {
    codebase: {
      title: t('asimov.discovery.results.tabs.codebase'),
      icon: CodeBracketIcon,
      sections: [
        {
          name: t('asimov.discovery.results.codebase.languageDistribution'),
          data: [
            { language: 'COBOL', lines: '2.5M', percentage: 45 },
            { language: 'Java', lines: '1.8M', percentage: 32 },
            { language: 'PL/SQL', lines: '800K', percentage: 15 },
            { language: 'Shell Scripts', lines: '450K', percentage: 8 }
          ]
        },
        {
          name: t('asimov.discovery.results.codebase.codeQualityMetrics'),
          data: [
            { metric: 'Cyclomatic Complexity', value: 'High (>20)', status: 'warning' },
            { metric: 'Code Duplication', value: '23%', status: 'warning' },
            { metric: 'Test Coverage', value: '35%', status: 'error' },
            { metric: 'Documentation', value: '60%', status: 'success' }
          ]
        }
      ]
    },
    dependencies: {
      title: t('asimov.discovery.results.tabs.dependencies'),
      icon: CubeTransparentIcon,
      sections: [
        {
          name: t('asimov.discovery.results.dependencies.systemDependencies'),
          data: [
            { type: 'Databases', count: 12, critical: true },
            { type: 'External APIs', count: 45, critical: true },
            { type: 'File Systems', count: 8, critical: false },
            { type: 'Message Queues', count: 6, critical: true }
          ]
        },
        {
          name: t('asimov.discovery.results.dependencies.libraryAnalysis'),
          data: [
            { library: 'Spring Framework', version: '3.2', status: 'outdated' },
            { library: 'Apache Commons', version: '2.4', status: 'outdated' },
            { library: 'Log4j', version: '1.2', status: 'vulnerable' },
            { library: 'JUnit', version: '4.12', status: 'current' }
          ]
        }
      ]
    },
    risks: {
      title: t('asimov.discovery.results.tabs.risks'),
      icon: ExclamationTriangleIcon,
      sections: [
        {
          name: t('asimov.discovery.results.risks.criticalRisks'),
          data: [
            { risk: 'Data Migration Complexity', impact: 'High', probability: 'Medium', mitigation: 'Phased migration approach' },
            { risk: 'Business Logic Gaps', impact: 'High', probability: 'Low', mitigation: 'Comprehensive testing suite' },
            { risk: 'Performance Degradation', impact: 'Medium', probability: 'Medium', mitigation: 'Performance benchmarking' },
            { risk: 'Integration Failures', impact: 'High', probability: 'Low', mitigation: 'API compatibility layer' }
          ]
        },
        {
          name: t('asimov.discovery.results.risks.complexityFactors'),
          data: [
            { factor: 'Database Procedures', complexity: 85, description: '2000+ stored procedures' },
            { factor: 'Business Rules', complexity: 75, description: '500+ complex rules' },
            { factor: 'Integrations', complexity: 70, description: '45 external systems' },
            { factor: 'Data Volume', complexity: 60, description: '100TB+ data' }
          ]
        }
      ]
    }
  };

  const discoveryProcess = [
    {
      step: 1,
      name: t('asimov.discovery.process.steps.initialScan.name'),
      duration: t('asimov.discovery.process.steps.initialScan.duration'),
      description: t('asimov.discovery.process.steps.initialScan.description'),
      agents: t('asimov.discovery.process.steps.initialScan.agents', { returnObjects: true }) as unknown as string[]
    },
    {
      step: 2,
      name: t('asimov.discovery.process.steps.deepAnalysis.name'),
      duration: t('asimov.discovery.process.steps.deepAnalysis.duration'),
      description: t('asimov.discovery.process.steps.deepAnalysis.description'),
      agents: t('asimov.discovery.process.steps.deepAnalysis.agents', { returnObjects: true }) as unknown as string[]
    },
    {
      step: 3,
      name: t('asimov.discovery.process.steps.dependencyMapping.name'),
      duration: t('asimov.discovery.process.steps.dependencyMapping.duration'),
      description: t('asimov.discovery.process.steps.dependencyMapping.description'),
      agents: t('asimov.discovery.process.steps.dependencyMapping.agents', { returnObjects: true }) as unknown as string[]
    },
    {
      step: 4,
      name: t('asimov.discovery.process.steps.riskAssessment.name'),
      duration: t('asimov.discovery.process.steps.riskAssessment.duration'),
      description: t('asimov.discovery.process.steps.riskAssessment.description'),
      agents: t('asimov.discovery.process.steps.riskAssessment.agents', { returnObjects: true }) as unknown as string[]
    },
    {
      step: 5,
      name: t('asimov.discovery.process.steps.reportGeneration.name'),
      duration: t('asimov.discovery.process.steps.reportGeneration.duration'),
      description: t('asimov.discovery.process.steps.reportGeneration.description'),
      agents: t('asimov.discovery.process.steps.reportGeneration.agents', { returnObjects: true }) as unknown as string[]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-secondary-light">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <DocumentMagnifyingGlassIcon className="h-8 w-8 text-secondary mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('asimov.discovery.header.title')}</h1>
              <p className="text-sm text-gray-600 mt-1">{t('asimov.discovery.header.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Discovery Agents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.discovery.agents.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discoveryAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Icon className="h-8 w-8 text-secondary mr-3" />
                      <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{agent.description}</p>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">{t('asimov.discovery.agents.capabilities')}</p>
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
                      {Object.entries(agent.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-sm font-bold text-secondary">{value}</p>
                          <p className="text-xs text-gray-600">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analysis Outputs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.discovery.results.title')}</h2>

          <div className="mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {Object.keys(analysisOutputs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-secondary text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {analysisOutputs[key as keyof typeof analysisOutputs].title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-secondary-light rounded-lg p-6">
            {analysisOutputs[activeTab as keyof typeof analysisOutputs].sections.map((section, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.name}</h3>

                {activeTab === 'codebase' && idx === 0 && (
                  <div className="space-y-3">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{item.language}</span>
                          <span className="text-sm text-gray-600">{item.lines} {t('asimov.discovery.results.codebase.lines')}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-secondary h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'codebase' && idx === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                          <span className={`text-sm font-semibold ${
                            item.status === 'error' ? 'text-red-600' :
                            item.status === 'warning' ? 'text-yellow-600' :
                            'text-green-600'
                          }`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'dependencies' && (
                  <div className="space-y-3">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            {item.type || item.library}
                          </span>
                          {item.version && (
                            <span className="text-xs text-gray-500 ml-2">v{item.version}</span>
                          )}
                        </div>
                        <div className="flex items-center">
                          {item.count && (
                            <span className="text-sm font-semibold text-secondary mr-2">{item.count}</span>
                          )}
                          {item.critical !== undefined && item.critical && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">{t('asimov.discovery.results.dependencies.critical')}</span>
                          )}
                          {item.status && (
                            <span className={`text-xs px-2 py-1 rounded ${
                              item.status === 'outdated' ? 'bg-yellow-100 text-yellow-700' :
                              item.status === 'vulnerable' ? 'bg-red-100 text-red-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {item.status}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'risks' && (
                  <div className="space-y-3">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        {item.risk ? (
                          <>
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{item.risk}</h4>
                              <div className="flex space-x-2">
                                <span className={`text-xs px-2 py-1 rounded ${
                                  item.impact === 'High' ? 'bg-red-100 text-red-700' :
                                  item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {t('asimov.discovery.results.risks.impactLabel')} {item.impact}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  item.probability === 'High' ? 'bg-red-100 text-red-700' :
                                  item.probability === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  {t('asimov.discovery.results.risks.probabilityLabel')} {item.probability}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">
                              <span className="font-semibold">{t('asimov.discovery.results.risks.mitigationLabel')}</span> {item.mitigation}
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{item.factor}</span>
                              <span className="text-sm font-semibold text-secondary">{item.complexity}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div
                                className={`h-2 rounded-full ${
                                  item.complexity > 75 ? 'bg-red-500' :
                                  item.complexity > 50 ? 'bg-yellow-500' :
                                  'bg-green-500'
                                }`}
                                style={{ width: `${item.complexity}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Process Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.discovery.process.title')}</h2>
          <div className="relative">
            <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid grid-cols-5 gap-4">
              {discoveryProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-secondary rounded-full ring-4 ring-white"></div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-secondary">{t('asimov.discovery.process.stepLabel')} {step.step}</span>
                      <ClockIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{step.duration}</p>
                    <p className="text-xs text-gray-600 mb-3">{step.description}</p>
                    <div className="border-t pt-2">
                      <p className="text-xs font-semibold text-gray-700 mb-1">{t('asimov.discovery.process.activeAgents')}</p>
                      {step.agents.map((agent, idx) => (
                        <p key={idx} className="text-xs text-gray-600">• {agent}</p>
                      ))}
                    </div>
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

export default DiscoveryAnalysis;
