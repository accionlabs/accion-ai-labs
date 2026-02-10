import React from 'react';
import {
  CpuChipIcon,
  ServerStackIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  CommandLineIcon,
  CogIcon,
  LockClosedIcon,
  ArrowsRightLeftIcon,
  BeakerIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BoltIcon,
  CubeTransparentIcon,
  SignalIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  QueueListIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const AgenticArchitecture: React.FC = () => {
  const { t } = useTranslation('coreTechnology');

  // Architecture layers for AI Agentic Systems
  const architectureLayers = [
    {
      id: 'agent-layer',
      name: t('agentArchitecture.layers.agentOrchestration.name'),
      color: 'purple',
      icon: RocketLaunchIcon,
      tagline: t('agentArchitecture.layers.agentOrchestration.tagline'),
      description: t('agentArchitecture.layers.agentOrchestration.description'),
      importance: t('agentArchitecture.layers.agentOrchestration.importance'),
      components: [
        {
          title: t('agentArchitecture.layers.agentOrchestration.components.registry.title'),
          description: t('agentArchitecture.layers.agentOrchestration.components.registry.description'),
          icon: DocumentMagnifyingGlassIcon,
          features: t('agentArchitecture.layers.agentOrchestration.components.registry.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.agentOrchestration.components.registry.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.agentOrchestration.components.registry.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.agentOrchestration.components.orchestrator.title'),
          description: t('agentArchitecture.layers.agentOrchestration.components.orchestrator.description'),
          icon: CogIcon,
          features: t('agentArchitecture.layers.agentOrchestration.components.orchestrator.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.agentOrchestration.components.orchestrator.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.agentOrchestration.components.orchestrator.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.agentOrchestration.components.communicationBus.title'),
          description: t('agentArchitecture.layers.agentOrchestration.components.communicationBus.description'),
          icon: ArrowsRightLeftIcon,
          features: t('agentArchitecture.layers.agentOrchestration.components.communicationBus.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.agentOrchestration.components.communicationBus.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.agentOrchestration.components.communicationBus.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.agentOrchestration.components.policyEngine.title'),
          description: t('agentArchitecture.layers.agentOrchestration.components.policyEngine.description'),
          icon: ShieldCheckIcon,
          features: t('agentArchitecture.layers.agentOrchestration.components.policyEngine.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.agentOrchestration.components.policyEngine.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.agentOrchestration.components.policyEngine.examples', { returnObjects: true }) as unknown as string[]
        }
      ],
      metrics: t('agentArchitecture.layers.agentOrchestration.metrics', { returnObjects: true }) as unknown as string[]
    },
    {
      id: 'cognitive-layer',
      name: t('agentArchitecture.layers.cognitiveProcessing.name'),
      color: 'blue',
      icon: CpuChipIcon,
      tagline: t('agentArchitecture.layers.cognitiveProcessing.tagline'),
      description: t('agentArchitecture.layers.cognitiveProcessing.description'),
      importance: t('agentArchitecture.layers.cognitiveProcessing.importance'),
      components: [
        {
          title: t('agentArchitecture.layers.cognitiveProcessing.components.llmGateway.title'),
          description: t('agentArchitecture.layers.cognitiveProcessing.components.llmGateway.description'),
          icon: GlobeAltIcon,
          features: t('agentArchitecture.layers.cognitiveProcessing.components.llmGateway.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.cognitiveProcessing.components.llmGateway.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.cognitiveProcessing.components.llmGateway.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.cognitiveProcessing.components.reasoningEngine.title'),
          description: t('agentArchitecture.layers.cognitiveProcessing.components.reasoningEngine.description'),
          icon: BoltIcon,
          features: t('agentArchitecture.layers.cognitiveProcessing.components.reasoningEngine.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.cognitiveProcessing.components.reasoningEngine.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.cognitiveProcessing.components.reasoningEngine.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.cognitiveProcessing.components.memoryContext.title'),
          description: t('agentArchitecture.layers.cognitiveProcessing.components.memoryContext.description'),
          icon: CircleStackIcon,
          features: t('agentArchitecture.layers.cognitiveProcessing.components.memoryContext.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.cognitiveProcessing.components.memoryContext.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.cognitiveProcessing.components.memoryContext.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.cognitiveProcessing.components.learningAdaptation.title'),
          description: t('agentArchitecture.layers.cognitiveProcessing.components.learningAdaptation.description'),
          icon: ChartBarIcon,
          features: t('agentArchitecture.layers.cognitiveProcessing.components.learningAdaptation.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.cognitiveProcessing.components.learningAdaptation.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.cognitiveProcessing.components.learningAdaptation.examples', { returnObjects: true }) as unknown as string[]
        }
      ],
      metrics: t('agentArchitecture.layers.cognitiveProcessing.metrics', { returnObjects: true }) as unknown as string[]
    },
    {
      id: 'execution-layer',
      name: t('agentArchitecture.layers.executionIntegration.name'),
      color: 'green',
      icon: ServerStackIcon,
      tagline: t('agentArchitecture.layers.executionIntegration.tagline'),
      description: t('agentArchitecture.layers.executionIntegration.description'),
      importance: t('agentArchitecture.layers.executionIntegration.importance'),
      components: [
        {
          title: t('agentArchitecture.layers.executionIntegration.components.toolRegistry.title'),
          description: t('agentArchitecture.layers.executionIntegration.components.toolRegistry.description'),
          icon: WrenchScrewdriverIcon,
          features: t('agentArchitecture.layers.executionIntegration.components.toolRegistry.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.executionIntegration.components.toolRegistry.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.executionIntegration.components.toolRegistry.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.executionIntegration.components.integrationHub.title'),
          description: t('agentArchitecture.layers.executionIntegration.components.integrationHub.description'),
          icon: CubeTransparentIcon,
          features: t('agentArchitecture.layers.executionIntegration.components.integrationHub.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.executionIntegration.components.integrationHub.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.executionIntegration.components.integrationHub.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.executionIntegration.components.workflowEngine.title'),
          description: t('agentArchitecture.layers.executionIntegration.components.workflowEngine.description'),
          icon: QueueListIcon,
          features: t('agentArchitecture.layers.executionIntegration.components.workflowEngine.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.executionIntegration.components.workflowEngine.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.executionIntegration.components.workflowEngine.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.executionIntegration.components.monitoring.title'),
          description: t('agentArchitecture.layers.executionIntegration.components.monitoring.description'),
          icon: SignalIcon,
          features: t('agentArchitecture.layers.executionIntegration.components.monitoring.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.executionIntegration.components.monitoring.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.executionIntegration.components.monitoring.examples', { returnObjects: true }) as unknown as string[]
        }
      ],
      metrics: t('agentArchitecture.layers.executionIntegration.metrics', { returnObjects: true }) as unknown as string[]
    },
    {
      id: 'infrastructure-layer',
      name: t('agentArchitecture.layers.infrastructurePlatform.name'),
      color: 'orange',
      icon: CloudArrowUpIcon,
      tagline: t('agentArchitecture.layers.infrastructurePlatform.tagline'),
      description: t('agentArchitecture.layers.infrastructurePlatform.description'),
      importance: t('agentArchitecture.layers.infrastructurePlatform.importance'),
      components: [
        {
          title: t('agentArchitecture.layers.infrastructurePlatform.components.runtime.title'),
          description: t('agentArchitecture.layers.infrastructurePlatform.components.runtime.description'),
          icon: CubeTransparentIcon,
          features: t('agentArchitecture.layers.infrastructurePlatform.components.runtime.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.infrastructurePlatform.components.runtime.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.infrastructurePlatform.components.runtime.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.infrastructurePlatform.components.dataStorage.title'),
          description: t('agentArchitecture.layers.infrastructurePlatform.components.dataStorage.description'),
          icon: CircleStackIcon,
          features: t('agentArchitecture.layers.infrastructurePlatform.components.dataStorage.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.infrastructurePlatform.components.dataStorage.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.infrastructurePlatform.components.dataStorage.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.infrastructurePlatform.components.security.title'),
          description: t('agentArchitecture.layers.infrastructurePlatform.components.security.description'),
          icon: LockClosedIcon,
          features: t('agentArchitecture.layers.infrastructurePlatform.components.security.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.infrastructurePlatform.components.security.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.infrastructurePlatform.components.security.examples', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('agentArchitecture.layers.infrastructurePlatform.components.mlops.title'),
          description: t('agentArchitecture.layers.infrastructurePlatform.components.mlops.description'),
          icon: CommandLineIcon,
          features: t('agentArchitecture.layers.infrastructurePlatform.components.mlops.features', { returnObjects: true }) as unknown as string[],
          technologies: t('agentArchitecture.layers.infrastructurePlatform.components.mlops.technologies', { returnObjects: true }) as unknown as string[],
          examples: t('agentArchitecture.layers.infrastructurePlatform.components.mlops.examples', { returnObjects: true }) as unknown as string[]
        }
      ],
      metrics: t('agentArchitecture.layers.infrastructurePlatform.metrics', { returnObjects: true }) as unknown as string[]
    }
  ];

  // Helper function to get color classes
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; lightBg: string; hoverBg: string } } = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
        lightBg: 'bg-blue-50',
        hoverBg: 'hover:bg-blue-50'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-300',
        lightBg: 'bg-purple-50',
        hoverBg: 'hover:bg-purple-50'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
        lightBg: 'bg-green-50',
        hoverBg: 'hover:bg-green-50'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-700',
        border: 'border-orange-300',
        lightBg: 'bg-orange-50',
        hoverBg: 'hover:bg-orange-50'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4">
            {t('agentArchitecture.header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('agentArchitecture.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('agentArchitecture.header.description')}
          </p>
        </div>

        {/* Architecture Overview Diagram */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('agentArchitecture.layeredArchitecture.title')}</h2>
          <div className="bg-gradient-to-b from-purple-50 via-blue-50 via-green-50 to-orange-50 rounded-lg p-6">
            <div className="space-y-3">
              {/* Visual representation of layers */}
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-purple-800">{t('agentArchitecture.layeredArchitecture.agentOrchestration')}</span>
                <p className="text-xs text-purple-600 mt-1">{t('agentArchitecture.layeredArchitecture.agentOrchestrationSub')}</p>
              </div>
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-blue-800">{t('agentArchitecture.layeredArchitecture.cognitiveProcessing')}</span>
                <p className="text-xs text-blue-600 mt-1">{t('agentArchitecture.layeredArchitecture.cognitiveProcessingSub')}</p>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-green-800">{t('agentArchitecture.layeredArchitecture.executionIntegration')}</span>
                <p className="text-xs text-green-600 mt-1">{t('agentArchitecture.layeredArchitecture.executionIntegrationSub')}</p>
              </div>
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-orange-800">{t('agentArchitecture.layeredArchitecture.infrastructurePlatform')}</span>
                <p className="text-xs text-orange-600 mt-1">{t('agentArchitecture.layeredArchitecture.infrastructurePlatformSub')}</p>
              </div>
            </div>
          </div>

          {/* Key Architecture Principles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="text-sm font-semibold text-gray-900">{t('agentArchitecture.layeredArchitecture.principles.looselyCoupled.title')}</h4>
              <p className="text-xs text-gray-600 mt-1">
                {t('agentArchitecture.layeredArchitecture.principles.looselyCoupled.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="text-sm font-semibold text-gray-900">{t('agentArchitecture.layeredArchitecture.principles.horizontallyScalable.title')}</h4>
              <p className="text-xs text-gray-600 mt-1">
                {t('agentArchitecture.layeredArchitecture.principles.horizontallyScalable.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="text-sm font-semibold text-gray-900">{t('agentArchitecture.layeredArchitecture.principles.secureByDesign.title')}</h4>
              <p className="text-xs text-gray-600 mt-1">
                {t('agentArchitecture.layeredArchitecture.principles.secureByDesign.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎭</div>
              <h4 className="text-sm font-semibold text-gray-900">{t('agentArchitecture.layeredArchitecture.principles.eventDriven.title')}</h4>
              <p className="text-xs text-gray-600 mt-1">
                {t('agentArchitecture.layeredArchitecture.principles.eventDriven.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Critical Capabilities Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-3">{t('agentArchitecture.autonomyBanner.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">{t('agentArchitecture.autonomyBanner.agentFirstDesign.title')}</h4>
              <p className="text-sm text-purple-100">
                {t('agentArchitecture.autonomyBanner.agentFirstDesign.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t('agentArchitecture.autonomyBanner.cognitiveCapabilities.title')}</h4>
              <p className="text-sm text-purple-100">
                {t('agentArchitecture.autonomyBanner.cognitiveCapabilities.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{t('agentArchitecture.autonomyBanner.enterpriseReady.title')}</h4>
              <p className="text-sm text-purple-100">
                {t('agentArchitecture.autonomyBanner.enterpriseReady.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Layers - Detailed Sections */}
        <div className="space-y-8">
          {architectureLayers.map((layer, layerIndex) => {
            const colors = getColorClasses(layer.color);
            const LayerIcon = layer.icon;

            return (
              <div key={layer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Layer Header */}
                <div className={`${colors.bg} border-b-4 border-${layer.color}-400 p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className={`p-3 bg-white rounded-lg mr-4 shadow-sm`}>
                        <LayerIcon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">{layer.name}</h2>
                          <span className={`ml-3 px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                            {t('agentArchitecture.layers.layer')} {layerIndex + 1}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-700">{layer.tagline}</p>
                        <p className="text-sm text-gray-600 mt-2">{layer.description}</p>
                        <p className="text-sm font-medium text-gray-700 mt-3">
                          <span className="font-semibold">{t('agentArchitecture.layers.whyCritical')}</span> {layer.importance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Components */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('agentArchitecture.layers.coreComponents')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {layer.components.map((component, index) => {
                        const ComponentIcon = component.icon;
                        return (
                          <div
                            key={index}
                            className={`border border-gray-200 rounded-lg p-4 hover:border-${layer.color}-300 ${colors.hoverBg} transition-all`}
                          >
                            <div className="flex items-start mb-3">
                              <div className={`p-2 ${colors.bg} rounded-lg mr-3 flex-shrink-0`}>
                                <ComponentIcon className={`h-5 w-5 ${colors.text}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{component.title}</h4>
                                <p className="text-sm text-gray-600">{component.description}</p>
                              </div>
                            </div>

                            {/* Features */}
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-700 mb-2">{t('agentArchitecture.layers.keyFeatures')}</p>
                              <div className="flex flex-wrap gap-2">
                                {component.features.map((feature, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-2 py-1 bg-gray-50 text-xs text-gray-600 rounded"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Technologies */}
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-700 mb-2">{t('agentArchitecture.layers.technologies')}</p>
                              <div className="flex flex-wrap gap-2">
                                {component.technologies.map((tech, idx) => (
                                  <span
                                    key={idx}
                                    className={`inline-block px-2 py-1 ${colors.lightBg} text-xs ${colors.text} rounded`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Implementation Examples */}
                            <div>
                              <p className="text-xs font-semibold text-gray-700 mb-2">{t('agentArchitecture.layers.implementationExamples')}</p>
                              <div className="flex flex-wrap gap-2">
                                {component.examples.map((example, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-2 py-1 bg-green-50 text-xs text-green-700 rounded"
                                  >
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('agentArchitecture.layers.layerSuccessMetrics')}</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {layer.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`inline-block w-3 h-3 ${colors.bg} rounded-full mb-2`} />
                          <p className="text-xs text-gray-600">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Patterns */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('agentArchitecture.integrationPatterns.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('agentArchitecture.integrationPatterns.syncRequestResponse.title')}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {t('agentArchitecture.integrationPatterns.syncRequestResponse.description')}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">{t('agentArchitecture.integrationPatterns.useForLabel')}</span> {t('agentArchitecture.integrationPatterns.syncRequestResponse.useFor')}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">📨</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('agentArchitecture.integrationPatterns.asyncMessageQueue.title')}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {t('agentArchitecture.integrationPatterns.asyncMessageQueue.description')}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">{t('agentArchitecture.integrationPatterns.useForLabel')}</span> {t('agentArchitecture.integrationPatterns.asyncMessageQueue.useFor')}
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🌊</div>
              <h4 className="font-semibold text-gray-900 mb-2">{t('agentArchitecture.integrationPatterns.eventDrivenStreaming.title')}</h4>
              <p className="text-sm text-gray-600 mb-2">
                {t('agentArchitecture.integrationPatterns.eventDrivenStreaming.description')}
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">{t('agentArchitecture.integrationPatterns.useForLabel')}</span> {t('agentArchitecture.integrationPatterns.eventDrivenStreaming.useFor')}
              </p>
            </div>
          </div>
        </div>

        {/* Deployment Models */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('agentArchitecture.deploymentModels.title')}</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('agentArchitecture.deploymentModels.centralizedHub.title')}</h4>
                <p className="text-sm text-gray-600">{t('agentArchitecture.deploymentModels.centralizedHub.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 text-purple-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('agentArchitecture.deploymentModels.distributedNetwork.title')}</h4>
                <p className="text-sm text-gray-600">{t('agentArchitecture.deploymentModels.distributedNetwork.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('agentArchitecture.deploymentModels.edgeDeployment.title')}</h4>
                <p className="text-sm text-gray-600">{t('agentArchitecture.deploymentModels.edgeDeployment.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('agentArchitecture.deploymentModels.hybridMultiCloud.title')}</h4>
                <p className="text-sm text-gray-600">{t('agentArchitecture.deploymentModels.hybridMultiCloud.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">⚖️</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('agentArchitecture.considerations.governanceControl.title')}</h4>
            <p className="text-xs text-gray-600">
              {t('agentArchitecture.considerations.governanceControl.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">🔐</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('agentArchitecture.considerations.securityTrust.title')}</h4>
            <p className="text-xs text-gray-600">
              {t('agentArchitecture.considerations.securityTrust.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">📊</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('agentArchitecture.considerations.observabilityControl.title')}</h4>
            <p className="text-xs text-gray-600">
              {t('agentArchitecture.considerations.observabilityControl.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticArchitecture;
