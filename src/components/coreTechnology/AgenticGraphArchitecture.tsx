import React, { useState } from 'react';
import {
  CircleStackIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  CpuChipIcon,
  DocumentTextIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const AgenticGraphArchitecture: React.FC = () => {
  const { t, i18n } = useTranslation('coreTechnology');
  const svgSuffix = i18n.language.startsWith('ja') ? '-ja' : '';
  const [selectedStage, setSelectedStage] = useState<number>(2);

  const evolutionStages = [
    {
      id: 0,
      name: t('agenticGraph.evolution.stages.vectorSearch.name'),
      description: t('agenticGraph.evolution.stages.vectorSearch.description'),
      icon: MagnifyingGlassIcon,
      color: 'blue',
      capabilities: t('agenticGraph.evolution.stages.vectorSearch.capabilities', { returnObjects: true }) as unknown as string[],
      limitations: t('agenticGraph.evolution.stages.vectorSearch.limitations', { returnObjects: true }) as unknown as string[],
      accuracy: t('agenticGraph.evolution.stages.vectorSearch.accuracy'),
      reliability: t('agenticGraph.evolution.stages.vectorSearch.reliability')
    },
    {
      id: 1,
      name: t('agenticGraph.evolution.stages.graphRag.name'),
      description: t('agenticGraph.evolution.stages.graphRag.description'),
      icon: LinkIcon,
      color: 'purple',
      capabilities: t('agenticGraph.evolution.stages.graphRag.capabilities', { returnObjects: true }) as unknown as string[],
      limitations: t('agenticGraph.evolution.stages.graphRag.limitations', { returnObjects: true }) as unknown as string[],
      accuracy: t('agenticGraph.evolution.stages.graphRag.accuracy'),
      reliability: t('agenticGraph.evolution.stages.graphRag.reliability')
    },
    {
      id: 2,
      name: t('agenticGraph.evolution.stages.agenticGraphRag.name'),
      description: t('agenticGraph.evolution.stages.agenticGraphRag.description'),
      icon: CpuChipIcon,
      color: 'green',
      capabilities: t('agenticGraph.evolution.stages.agenticGraphRag.capabilities', { returnObjects: true }) as unknown as string[],
      limitations: t('agenticGraph.evolution.stages.agenticGraphRag.limitations', { returnObjects: true }) as unknown as string[],
      accuracy: t('agenticGraph.evolution.stages.agenticGraphRag.accuracy'),
      reliability: t('agenticGraph.evolution.stages.agenticGraphRag.reliability')
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
            {t('agenticGraph.header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('agenticGraph.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('agenticGraph.header.description')}
          </p>
        </div>

        {/* Evolution Journey */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('agenticGraph.evolution.title')}</h2>

          {/* Evolution Diagram */}
          <div className="relative mb-8">
            <img
              src={`${process.env.PUBLIC_URL}/assets/diagrams/agentic-evolution${svgSuffix}.svg`}
              alt="Evolution to Agentic Graph RAG"
              className="w-full h-auto"
            />

            {/* Overlay for interactive stage selection */}
            <div className="absolute inset-0">
              {[
                { id: 0, x: 100, y: 150, width: 100, height: 100 },
                { id: 1, x: 400, y: 150, width: 100, height: 100 },
                { id: 2, x: 690, y: 140, width: 120, height: 120 }
              ].map((area) => (
                <button
                  key={area.id}
                  className={`absolute rounded-full bg-transparent hover:bg-secondary hover:bg-opacity-10 transition-colors cursor-pointer ${
                    selectedStage === area.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  style={{
                    left: `${area.x}px`,
                    top: `${area.y}px`,
                    width: `${area.width}px`,
                    height: `${area.height}px`
                  }}
                  onClick={() => setSelectedStage(area.id)}
                  aria-label={`Select ${evolutionStages[area.id].name} stage`}
                />
              ))}
            </div>
          </div>

          {/* Stage Details */}
          {selectedStage !== null && (
            <div className="bg-gray-50 rounded-lg p-6">
              {evolutionStages.filter(s => s.id === selectedStage).map(stage => (
                <div key={stage.id}>
                  <div className="flex items-center mb-4">
                    <stage.icon className={`h-8 w-8 text-${stage.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{stage.name}</h3>
                      <p className="text-gray-600">{stage.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                        {t('agenticGraph.evolution.capabilitiesLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {stage.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <XCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                        {t('agenticGraph.evolution.limitationsLabel')}
                      </h4>
                      <ul className="space-y-2">
                        {stage.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">×</span>
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('agenticGraph.evolution.performanceLabel')}</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">{t('agenticGraph.evolution.accuracyLabel')}</span>
                            <span className={`text-sm font-semibold text-${stage.color}-600`}>{stage.accuracy}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`bg-${stage.color}-600 h-2 rounded-full`}
                              style={{ width: stage.accuracy }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">{t('agenticGraph.evolution.reliabilityLabel')}</span>
                            <span className={`text-sm font-semibold text-${stage.color}-600`}>{stage.reliability}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`bg-${stage.color}-600 h-2 rounded-full`}
                              style={{
                                width: stage.reliability === 'High' ? '100%' :
                                       stage.reliability === 'Medium' ? '60%' : '30%'
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Implementation Architecture */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('agenticGraph.implementation.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Architecture Layers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('agenticGraph.implementation.architectureLayers.title')}</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{t('agenticGraph.implementation.architectureLayers.knowledgeLayer.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('agenticGraph.implementation.architectureLayers.knowledgeLayer.description')}
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{t('agenticGraph.implementation.architectureLayers.embeddingLayer.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('agenticGraph.implementation.architectureLayers.embeddingLayer.description')}
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{t('agenticGraph.implementation.architectureLayers.agentLayer.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('agenticGraph.implementation.architectureLayers.agentLayer.description')}
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">{t('agenticGraph.implementation.architectureLayers.orchestrationLayer.title')}</h4>
                  <p className="text-sm text-gray-600">
                    {t('agenticGraph.implementation.architectureLayers.orchestrationLayer.description')}
                  </p>
                </div>
              </div>
            </div>

            {/* Key Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('agenticGraph.implementation.technologyStack.title')}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <CircleStackIcon className="h-6 w-6 text-secondary mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{t('agenticGraph.implementation.technologyStack.graphDatabase.title')}</h4>
                  <p className="text-xs text-gray-600 mt-1">{t('agenticGraph.implementation.technologyStack.graphDatabase.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <DocumentTextIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{t('agenticGraph.implementation.technologyStack.vectorStore.title')}</h4>
                  <p className="text-xs text-gray-600 mt-1">{t('agenticGraph.implementation.technologyStack.vectorStore.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <CpuChipIcon className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{t('agenticGraph.implementation.technologyStack.llmFramework.title')}</h4>
                  <p className="text-xs text-gray-600 mt-1">{t('agenticGraph.implementation.technologyStack.llmFramework.description')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <SparklesIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">{t('agenticGraph.implementation.technologyStack.aiModels.title')}</h4>
                  <p className="text-xs text-gray-600 mt-1">{t('agenticGraph.implementation.technologyStack.aiModels.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('agenticGraph.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">95%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('agenticGraph.benefits.accuracy.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('agenticGraph.benefits.accuracy.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-secondary">10x</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('agenticGraph.benefits.context.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('agenticGraph.benefits.context.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-600">&lt; 2s</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('agenticGraph.benefits.responseTime.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('agenticGraph.benefits.responseTime.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticGraphArchitecture;
