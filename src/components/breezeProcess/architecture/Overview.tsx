import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface ArchitectureOverviewNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ArchitectureOverviewNew: React.FC<ArchitectureOverviewNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "architecture-overview",
    "title": t('architecture.overview.configTitle'),
    "slides": [
      {
        "id": "architecture-overview-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.overview.header.title'),
              "subtitle": t('architecture.overview.header.subtitle'),
              "titleGradient": "from-blue-600 to-purple-600",
              "description": t('architecture.overview.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.overview.principles.title'),
              "layout": "grid-4",
              "items": [
                {
                  "id": "semantic-first",
                  "title": t('architecture.overview.principles.semanticFirst.title'),
                  "description": t('architecture.overview.principles.semanticFirst.description'),
                  "icon": "🧠",
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "color": "text-blue-800"
                },
                {
                  "id": "agent-orchestrated",
                  "title": t('architecture.overview.principles.agentOrchestrated.title'),
                  "description": t('architecture.overview.principles.agentOrchestrated.description'),
                  "icon": "🤖",
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "color": "text-green-800"
                },
                {
                  "id": "bidirectional-traceability",
                  "title": t('architecture.overview.principles.bidirectionalTraceability.title'),
                  "description": t('architecture.overview.principles.bidirectionalTraceability.description'),
                  "icon": "🔄",
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "color": "text-purple-800"
                },
                {
                  "id": "evolutionary-design",
                  "title": t('architecture.overview.principles.evolutionaryDesign.title'),
                  "description": t('architecture.overview.principles.evolutionaryDesign.description'),
                  "icon": "📈",
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "color": "text-orange-800"
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.overview.layers.title'),
              "description": t('architecture.overview.layers.description'),
              "layout": "single",
              "variant": "architecture-layers",
              "items": [
                {
                  "id": "knowledge-layer",
                  "title": t('architecture.overview.layers.knowledge.title'),
                  "subtitle": t('architecture.overview.layers.knowledge.subtitle'),
                  "description": t('architecture.overview.layers.knowledge.description'),
                  "backgroundColor": "bg-gradient-to-r from-blue-50 to-purple-50",
                  "borderColor": "border-l-4 border-blue-500",
                  "color": "text-blue-800",
                  "subItems": [
                    {
                      "id": "functional",
                      "title": t('architecture.overview.layers.knowledge.functional.title'),
                      "subtitle": t('architecture.overview.layers.knowledge.functional.subtitle'),
                      "backgroundColor": "bg-blue-100",
                      "borderColor": "border-blue-300",
                      "color": "text-blue-800"
                    },
                    {
                      "id": "design",
                      "title": t('architecture.overview.layers.knowledge.design.title'),
                      "subtitle": t('architecture.overview.layers.knowledge.design.subtitle'),
                      "backgroundColor": "bg-green-100",
                      "borderColor": "border-green-300",
                      "color": "text-green-800"
                    },
                    {
                      "id": "architecture",
                      "title": t('architecture.overview.layers.knowledge.architecture.title'),
                      "subtitle": t('architecture.overview.layers.knowledge.architecture.subtitle'),
                      "backgroundColor": "bg-purple-100",
                      "borderColor": "border-purple-300",
                      "color": "text-purple-800"
                    },
                    {
                      "id": "code",
                      "title": t('architecture.overview.layers.knowledge.code.title'),
                      "subtitle": t('architecture.overview.layers.knowledge.code.subtitle'),
                      "backgroundColor": "bg-orange-100",
                      "borderColor": "border-orange-300",
                      "color": "text-orange-800"
                    }
                  ]
                },
                {
                  "id": "agent-orchestration-layer",
                  "title": t('architecture.overview.layers.agentOrchestration.title'),
                  "subtitle": t('architecture.overview.layers.agentOrchestration.subtitle'),
                  "description": t('architecture.overview.layers.agentOrchestration.description'),
                  "backgroundColor": "bg-gradient-to-r from-yellow-50 to-red-50",
                  "borderColor": "border-l-4 border-yellow-500",
                  "color": "text-yellow-800",
                  "subItems": [
                    {
                      "id": "semantic-agents",
                      "title": t('architecture.overview.layers.agentOrchestration.semanticAgents.title'),
                      "subtitle": t('architecture.overview.layers.agentOrchestration.semanticAgents.subtitle'),
                      "backgroundColor": "bg-yellow-100",
                      "borderColor": "border-yellow-300",
                      "color": "text-yellow-800"
                    },
                    {
                      "id": "implementation-agents",
                      "title": t('architecture.overview.layers.agentOrchestration.implementationAgents.title'),
                      "subtitle": t('architecture.overview.layers.agentOrchestration.implementationAgents.subtitle'),
                      "backgroundColor": "bg-red-100",
                      "borderColor": "border-red-300",
                      "color": "text-red-800"
                    },
                    {
                      "id": "quality-agents",
                      "title": t('architecture.overview.layers.agentOrchestration.qualityAgents.title'),
                      "subtitle": t('architecture.overview.layers.agentOrchestration.qualityAgents.subtitle'),
                      "backgroundColor": "bg-indigo-100",
                      "borderColor": "border-indigo-300",
                      "color": "text-indigo-800"
                    }
                  ]
                },
                {
                  "id": "execution-layer",
                  "title": t('architecture.overview.layers.execution.title'),
                  "subtitle": t('architecture.overview.layers.execution.subtitle'),
                  "description": t('architecture.overview.layers.execution.description'),
                  "backgroundColor": "bg-gradient-to-r from-gray-50 to-teal-50",
                  "borderColor": "border-l-4 border-gray-500",
                  "color": "text-gray-800",
                  "subItems": [
                    {
                      "id": "development-environment",
                      "title": t('architecture.overview.layers.execution.developmentEnvironment.title'),
                      "subtitle": t('architecture.overview.layers.execution.developmentEnvironment.subtitle'),
                      "backgroundColor": "bg-gray-100",
                      "borderColor": "border-gray-300",
                      "color": "text-gray-800"
                    },
                    {
                      "id": "deployment-pipeline",
                      "title": t('architecture.overview.layers.execution.deploymentPipeline.title'),
                      "subtitle": t('architecture.overview.layers.execution.deploymentPipeline.subtitle'),
                      "backgroundColor": "bg-teal-100",
                      "borderColor": "border-teal-300",
                      "color": "text-teal-800"
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.overview.ontologyFramework.title'),
              "description": t('architecture.overview.ontologyFramework.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "functional-ontology",
                  "title": t('architecture.overview.ontologyFramework.functional.title'),
                  "description": t('architecture.overview.ontologyFramework.functional.description'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "color": "text-blue-800",
                  "items": [
                    t('architecture.overview.ontologyFramework.functional.items.0'),
                    t('architecture.overview.ontologyFramework.functional.items.1'),
                    t('architecture.overview.ontologyFramework.functional.items.2'),
                    t('architecture.overview.ontologyFramework.functional.items.3')
                  ]
                },
                {
                  "id": "design-ontology",
                  "title": t('architecture.overview.ontologyFramework.design.title'),
                  "description": t('architecture.overview.ontologyFramework.design.description'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "color": "text-green-800",
                  "items": [
                    t('architecture.overview.ontologyFramework.design.items.0'),
                    t('architecture.overview.ontologyFramework.design.items.1'),
                    t('architecture.overview.ontologyFramework.design.items.2'),
                    t('architecture.overview.ontologyFramework.design.items.3')
                  ]
                },
                {
                  "id": "architecture-ontology",
                  "title": t('architecture.overview.ontologyFramework.architecture.title'),
                  "description": t('architecture.overview.ontologyFramework.architecture.description'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "color": "text-purple-800",
                  "items": [
                    t('architecture.overview.ontologyFramework.architecture.items.0'),
                    t('architecture.overview.ontologyFramework.architecture.items.1'),
                    t('architecture.overview.ontologyFramework.architecture.items.2'),
                    t('architecture.overview.ontologyFramework.architecture.items.3')
                  ]
                },
                {
                  "id": "code-ontology",
                  "title": t('architecture.overview.ontologyFramework.code.title'),
                  "description": t('architecture.overview.ontologyFramework.code.description'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "color": "text-orange-800",
                  "items": [
                    t('architecture.overview.ontologyFramework.code.items.0'),
                    t('architecture.overview.ontologyFramework.code.items.1'),
                    t('architecture.overview.ontologyFramework.code.items.2'),
                    t('architecture.overview.ontologyFramework.code.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-5",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.overview.agentOrchestrationModel.title'),
              "description": t('architecture.overview.agentOrchestrationModel.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "semantic-agents-detail",
                  "title": t('architecture.overview.agentOrchestrationModel.semanticAgents.title'),
                  "description": t('architecture.overview.agentOrchestrationModel.semanticAgents.description'),
                  "backgroundColor": "bg-yellow-50",
                  "borderColor": "border-yellow-200",
                  "color": "text-yellow-800",
                  "items": [
                    t('architecture.overview.agentOrchestrationModel.semanticAgents.items.0'),
                    t('architecture.overview.agentOrchestrationModel.semanticAgents.items.1'),
                    t('architecture.overview.agentOrchestrationModel.semanticAgents.items.2')
                  ]
                },
                {
                  "id": "implementation-agents-detail",
                  "title": t('architecture.overview.agentOrchestrationModel.implementationAgents.title'),
                  "description": t('architecture.overview.agentOrchestrationModel.implementationAgents.description'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "color": "text-red-800",
                  "items": [
                    t('architecture.overview.agentOrchestrationModel.implementationAgents.items.0'),
                    t('architecture.overview.agentOrchestrationModel.implementationAgents.items.1'),
                    t('architecture.overview.agentOrchestrationModel.implementationAgents.items.2')
                  ]
                },
                {
                  "id": "quality-agents-detail",
                  "title": t('architecture.overview.agentOrchestrationModel.qualityAgents.title'),
                  "description": t('architecture.overview.agentOrchestrationModel.qualityAgents.description'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "color": "text-indigo-800",
                  "items": [
                    t('architecture.overview.agentOrchestrationModel.qualityAgents.items.0'),
                    t('architecture.overview.agentOrchestrationModel.qualityAgents.items.1'),
                    t('architecture.overview.agentOrchestrationModel.qualityAgents.items.2')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-6",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.overview.benefits.title'),
              "backgroundColor": "from-blue-50 to-purple-50",
              "borderColor": "border-blue-500",
              "categories": [
                {
                  "title": t('architecture.overview.benefits.technical.title'),
                  "color": "blue",
                  "benefits": [
                    t('architecture.overview.benefits.technical.items.0'),
                    t('architecture.overview.benefits.technical.items.1'),
                    t('architecture.overview.benefits.technical.items.2'),
                    t('architecture.overview.benefits.technical.items.3')
                  ]
                },
                {
                  "title": t('architecture.overview.benefits.business.title'),
                  "color": "purple",
                  "benefits": [
                    t('architecture.overview.benefits.business.items.0'),
                    t('architecture.overview.benefits.business.items.1'),
                    t('architecture.overview.benefits.business.items.2'),
                    t('architecture.overview.benefits.business.items.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-7",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.overview.technologyFoundation.title'),
              "layout": "grid-4",
              "items": [
                {
                  "id": "knowledge-graphs",
                  "title": t('architecture.overview.technologyFoundation.knowledgeGraphs.title'),
                  "description": t('architecture.overview.technologyFoundation.knowledgeGraphs.description'),
                  "icon": "🔗",
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200"
                },
                {
                  "id": "ai-orchestration",
                  "title": t('architecture.overview.technologyFoundation.aiOrchestration.title'),
                  "description": t('architecture.overview.technologyFoundation.aiOrchestration.description'),
                  "icon": "🤖",
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200"
                },
                {
                  "id": "cloud-infrastructure",
                  "title": t('architecture.overview.technologyFoundation.cloudInfrastructure.title'),
                  "description": t('architecture.overview.technologyFoundation.cloudInfrastructure.description'),
                  "icon": "☁️",
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200"
                },
                {
                  "id": "integration-apis",
                  "title": t('architecture.overview.technologyFoundation.integrationApis.title'),
                  "description": t('architecture.overview.technologyFoundation.integrationApis.description'),
                  "icon": "🔌",
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200"
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "prominentDisplay-section-8",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.overview.cta.title'),
              "description": t('architecture.overview.cta.description'),
              "backgroundGradient": "bg-gradient-to-r from-blue-600 to-purple-600",
              "textColor": "text-white",
              "variant": "cta",
              "items": [
                {
                  "id": "semantic-intelligence",
                  "title": t('architecture.overview.cta.semanticIntelligence.title'),
                  "description": t('architecture.overview.cta.semanticIntelligence.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "agent-orchestration",
                  "title": t('architecture.overview.cta.agentOrchestration.title'),
                  "description": t('architecture.overview.cta.agentOrchestration.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "seamless-integration",
                  "title": t('architecture.overview.cta.seamlessIntegration.title'),
                  "description": t('architecture.overview.cta.seamlessIntegration.description'),
                  "backgroundColor": "bg-white/20"
                }
              ],
              "conclusion": {
                "title": t('architecture.overview.cta.conclusion.title'),
                "description": t('architecture.overview.cta.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('architecture.overview.cta.buttonText')
            }
          }
        ]
      }
    ]
  }), [t]);

  return (
    <TopicLayout
      config={config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default ArchitectureOverviewNew;
