import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import layeredArchitecture from '../assets/layeredArchitecture.svg';
import specificationProcessFlow from '../assets/specificationProcessFlow.svg';
import layeredArchitectureJa from '../assets/ja/layeredArchitecture.svg';
import specificationProcessFlowJa from '../assets/ja/specificationProcessFlow.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface CoreComponentsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CoreComponentsNew: React.FC<CoreComponentsNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const config: TopicConfig = React.useMemo(() => ({
    "id": "core-components",
    "title": t('architecture.coreComponents.configTitle'),
    "slides": [
      {
        "id": "core-components-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.coreComponents.header.title'),
              "subtitle": t('architecture.coreComponents.header.subtitle'),
              "titleGradient": "from-green-600 to-blue-600",
              "description": t('architecture.coreComponents.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.knowledgeGraphEngine.title'),
              "description": t('architecture.coreComponents.knowledgeGraphEngine.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "storage-management",
                  "title": t('architecture.coreComponents.knowledgeGraphEngine.storageManagement.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "titleColor": "text-blue-800",
                  "textColor": "text-blue-700",
                  "items": [
                    t('architecture.coreComponents.knowledgeGraphEngine.storageManagement.items.0'),
                    t('architecture.coreComponents.knowledgeGraphEngine.storageManagement.items.1'),
                    t('architecture.coreComponents.knowledgeGraphEngine.storageManagement.items.2'),
                    t('architecture.coreComponents.knowledgeGraphEngine.storageManagement.items.3'),
                    t('architecture.coreComponents.knowledgeGraphEngine.storageManagement.items.4')
                  ]
                },
                {
                  "id": "ontology-management",
                  "title": t('architecture.coreComponents.knowledgeGraphEngine.ontologyManagement.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "titleColor": "text-green-800",
                  "textColor": "text-green-700",
                  "items": [
                    t('architecture.coreComponents.knowledgeGraphEngine.ontologyManagement.items.0'),
                    t('architecture.coreComponents.knowledgeGraphEngine.ontologyManagement.items.1'),
                    t('architecture.coreComponents.knowledgeGraphEngine.ontologyManagement.items.2'),
                    t('architecture.coreComponents.knowledgeGraphEngine.ontologyManagement.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.graphEngineArchitecture.title'),
              "layout": "grid-2",
              "backgroundColor": "bg-gradient-to-br from-blue-50 to-green-50",
              "items": [
                {
                  "id": "architecture-layers",
                  "title": t('architecture.coreComponents.graphEngineArchitecture.threeLayer.title'),
                  "backgroundColor": "bg-white/80",
                  "items": [
                    t('architecture.coreComponents.graphEngineArchitecture.threeLayer.items.0'),
                    t('architecture.coreComponents.graphEngineArchitecture.threeLayer.items.1'),
                    t('architecture.coreComponents.graphEngineArchitecture.threeLayer.items.2')
                  ]
                },
                {
                  "id": "architecture-diagram",
                  "title": t('architecture.coreComponents.graphEngineArchitecture.diagram.title'),
                  "backgroundColor": "bg-white/80",
                  "gridSpan": "single",
                  "svgDiagram": {
                    "src": l(layeredArchitecture, layeredArchitectureJa),
                    "alt": t('architecture.coreComponents.graphEngineArchitecture.diagram.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 300 220",
                    "preserveAspectRatio": "xMidYMid meet",
                    "className": "w-full h-auto border border-gray-200 rounded-lg bg-white p-4"
                  }
                }
              ],
              "variant": "content",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.agentOrchestrationPlatform.title'),
              "description": t('architecture.coreComponents.agentOrchestrationPlatform.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "agent-lifecycle",
                  "title": t('architecture.coreComponents.agentOrchestrationPlatform.agentLifecycle.title'),
                  "backgroundColor": "bg-yellow-50",
                  "borderColor": "border-yellow-200",
                  "titleColor": "text-yellow-800",
                  "textColor": "text-yellow-700",
                  "items": [
                    t('architecture.coreComponents.agentOrchestrationPlatform.agentLifecycle.items.0'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.agentLifecycle.items.1'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.agentLifecycle.items.2'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.agentLifecycle.items.3')
                  ]
                },
                {
                  "id": "task-coordination",
                  "title": t('architecture.coreComponents.agentOrchestrationPlatform.taskCoordination.title'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "titleColor": "text-red-800",
                  "textColor": "text-red-700",
                  "items": [
                    t('architecture.coreComponents.agentOrchestrationPlatform.taskCoordination.items.0'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.taskCoordination.items.1'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.taskCoordination.items.2'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.taskCoordination.items.3')
                  ]
                },
                {
                  "id": "quality-assurance",
                  "title": t('architecture.coreComponents.agentOrchestrationPlatform.qualityAssurance.title'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "titleColor": "text-indigo-800",
                  "textColor": "text-indigo-700",
                  "items": [
                    t('architecture.coreComponents.agentOrchestrationPlatform.qualityAssurance.items.0'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.qualityAssurance.items.1'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.qualityAssurance.items.2'),
                    t('architecture.coreComponents.agentOrchestrationPlatform.qualityAssurance.items.3')
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
              "title": t('architecture.coreComponents.agentTypes.title'),
              "layout": "grid-2",
              "backgroundColor": "bg-gray-50",
              "items": [
                {
                  "id": "semantic-agents",
                  "title": t('architecture.coreComponents.agentTypes.semanticAgents.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "titleColor": "text-gray-800",
                  "textColor": "text-gray-600",
                  "items": [
                    t('architecture.coreComponents.agentTypes.semanticAgents.items.0'),
                    t('architecture.coreComponents.agentTypes.semanticAgents.items.1'),
                    t('architecture.coreComponents.agentTypes.semanticAgents.items.2'),
                    t('architecture.coreComponents.agentTypes.semanticAgents.items.3')
                  ]
                },
                {
                  "id": "implementation-agents",
                  "title": t('architecture.coreComponents.agentTypes.implementationAgents.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "titleColor": "text-gray-800",
                  "textColor": "text-gray-600",
                  "items": [
                    t('architecture.coreComponents.agentTypes.implementationAgents.items.0'),
                    t('architecture.coreComponents.agentTypes.implementationAgents.items.1'),
                    t('architecture.coreComponents.agentTypes.implementationAgents.items.2'),
                    t('architecture.coreComponents.agentTypes.implementationAgents.items.3')
                  ]
                }
              ],
              "variant": "content",
              "containerStyle": "default"
            }
          },
          {
            "id": "flexibleGrid-section-6",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.semanticSpecificationEngine.title'),
              "description": t('architecture.coreComponents.semanticSpecificationEngine.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "requirements-processing",
                  "title": t('architecture.coreComponents.semanticSpecificationEngine.requirementsProcessing.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "titleColor": "text-purple-800",
                  "textColor": "text-purple-700",
                  "items": [
                    t('architecture.coreComponents.semanticSpecificationEngine.requirementsProcessing.items.0'),
                    t('architecture.coreComponents.semanticSpecificationEngine.requirementsProcessing.items.1'),
                    t('architecture.coreComponents.semanticSpecificationEngine.requirementsProcessing.items.2'),
                    t('architecture.coreComponents.semanticSpecificationEngine.requirementsProcessing.items.3')
                  ]
                },
                {
                  "id": "specification-generation",
                  "title": t('architecture.coreComponents.semanticSpecificationEngine.specificationGeneration.title'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "titleColor": "text-orange-800",
                  "textColor": "text-orange-700",
                  "items": [
                    t('architecture.coreComponents.semanticSpecificationEngine.specificationGeneration.items.0'),
                    t('architecture.coreComponents.semanticSpecificationEngine.specificationGeneration.items.1'),
                    t('architecture.coreComponents.semanticSpecificationEngine.specificationGeneration.items.2'),
                    t('architecture.coreComponents.semanticSpecificationEngine.specificationGeneration.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-7",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.specificationFlow.title'),
              "description": t('architecture.coreComponents.specificationFlow.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-br from-purple-50 to-orange-50",
              "items": [
                {
                  "id": "specification-flow-diagram",
                  "title": t('architecture.coreComponents.specificationFlow.diagram.title'),
                  "description": t('architecture.coreComponents.specificationFlow.diagram.description'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(specificationProcessFlow, specificationProcessFlowJa),
                    "alt": t('architecture.coreComponents.specificationFlow.diagram.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 680 140",
                    "preserveAspectRatio": "xMidYMid meet",
                    "className": "w-full h-auto object-contain"
                  }
                }
              ],
              "variant": "content",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-8",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.implementationGenerationEngine.title'),
              "description": t('architecture.coreComponents.implementationGenerationEngine.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "documentation-generation",
                  "title": t('architecture.coreComponents.implementationGenerationEngine.documentationGeneration.title'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "titleColor": "text-red-800",
                  "textColor": "text-red-700",
                  "items": [
                    t('architecture.coreComponents.implementationGenerationEngine.documentationGeneration.items.0'),
                    t('architecture.coreComponents.implementationGenerationEngine.documentationGeneration.items.1'),
                    t('architecture.coreComponents.implementationGenerationEngine.documentationGeneration.items.2'),
                    t('architecture.coreComponents.implementationGenerationEngine.documentationGeneration.items.3')
                  ],
                  "example": t('architecture.coreComponents.implementationGenerationEngine.documentationGeneration.example')
                },
                {
                  "id": "code-generation",
                  "title": t('architecture.coreComponents.implementationGenerationEngine.codeGeneration.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "titleColor": "text-green-800",
                  "textColor": "text-green-700",
                  "items": [
                    t('architecture.coreComponents.implementationGenerationEngine.codeGeneration.items.0'),
                    t('architecture.coreComponents.implementationGenerationEngine.codeGeneration.items.1'),
                    t('architecture.coreComponents.implementationGenerationEngine.codeGeneration.items.2'),
                    t('architecture.coreComponents.implementationGenerationEngine.codeGeneration.items.3')
                  ],
                  "example": t('architecture.coreComponents.implementationGenerationEngine.codeGeneration.example')
                },
                {
                  "id": "test-generation",
                  "title": t('architecture.coreComponents.implementationGenerationEngine.testGeneration.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "titleColor": "text-blue-800",
                  "textColor": "text-blue-700",
                  "items": [
                    t('architecture.coreComponents.implementationGenerationEngine.testGeneration.items.0'),
                    t('architecture.coreComponents.implementationGenerationEngine.testGeneration.items.1'),
                    t('architecture.coreComponents.implementationGenerationEngine.testGeneration.items.2'),
                    t('architecture.coreComponents.implementationGenerationEngine.testGeneration.items.3')
                  ],
                  "example": t('architecture.coreComponents.implementationGenerationEngine.testGeneration.example')
                }
              ],
              "variant": "detailed-list"
            }
          },
          {
            "id": "flexibleGrid-section-9",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.qualityAssuranceEngine.title'),
              "description": t('architecture.coreComponents.qualityAssuranceEngine.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "automated-quality-checks",
                  "title": t('architecture.coreComponents.qualityAssuranceEngine.automatedQualityChecks.title'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "titleColor": "text-indigo-800",
                  "textColor": "text-indigo-700",
                  "items": [
                    t('architecture.coreComponents.qualityAssuranceEngine.automatedQualityChecks.items.0'),
                    t('architecture.coreComponents.qualityAssuranceEngine.automatedQualityChecks.items.1'),
                    t('architecture.coreComponents.qualityAssuranceEngine.automatedQualityChecks.items.2'),
                    t('architecture.coreComponents.qualityAssuranceEngine.automatedQualityChecks.items.3')
                  ]
                },
                {
                  "id": "compliance-validation",
                  "title": t('architecture.coreComponents.qualityAssuranceEngine.complianceValidation.title'),
                  "backgroundColor": "bg-teal-50",
                  "borderColor": "border-teal-200",
                  "titleColor": "text-teal-800",
                  "textColor": "text-teal-700",
                  "items": [
                    t('architecture.coreComponents.qualityAssuranceEngine.complianceValidation.items.0'),
                    t('architecture.coreComponents.qualityAssuranceEngine.complianceValidation.items.1'),
                    t('architecture.coreComponents.qualityAssuranceEngine.complianceValidation.items.2'),
                    t('architecture.coreComponents.qualityAssuranceEngine.complianceValidation.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-10",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.qualityGateProcess.title'),
              "description": t('architecture.coreComponents.qualityGateProcess.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-br from-indigo-50 to-teal-50",
              "items": [
                {
                  "id": "quality-gates",
                  "title": t('architecture.coreComponents.qualityGateProcess.sequentialValidation.title'),
                  "backgroundColor": "bg-white/80",
                  "items": [
                    t('architecture.coreComponents.qualityGateProcess.sequentialValidation.items.0'),
                    t('architecture.coreComponents.qualityGateProcess.sequentialValidation.items.1'),
                    t('architecture.coreComponents.qualityGateProcess.sequentialValidation.items.2'),
                    t('architecture.coreComponents.qualityGateProcess.sequentialValidation.items.3')
                  ]
                }
              ],
              "variant": "content",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-11",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.humanInTheLoop.title'),
              "description": t('architecture.coreComponents.humanInTheLoop.description'),
              "columns": 4,
              "items": [
                {
                  "id": "stakeholder-dashboards",
                  "title": t('architecture.coreComponents.humanInTheLoop.stakeholderDashboards.title'),
                  "description": t('architecture.coreComponents.humanInTheLoop.stakeholderDashboards.description'),
                  "icon": "👥",
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "iconBackgroundColor": "bg-blue-100",
                  "titleColor": "text-blue-800",
                  "textColor": "text-blue-600"
                },
                {
                  "id": "visual-validation-tools",
                  "title": t('architecture.coreComponents.humanInTheLoop.visualValidationTools.title'),
                  "description": t('architecture.coreComponents.humanInTheLoop.visualValidationTools.description'),
                  "icon": "🔍",
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "iconBackgroundColor": "bg-green-100",
                  "titleColor": "text-green-800",
                  "textColor": "text-green-600"
                },
                {
                  "id": "approval-workflows",
                  "title": t('architecture.coreComponents.humanInTheLoop.approvalWorkflows.title'),
                  "description": t('architecture.coreComponents.humanInTheLoop.approvalWorkflows.description'),
                  "icon": "✅",
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "iconBackgroundColor": "bg-purple-100",
                  "titleColor": "text-purple-800",
                  "textColor": "text-purple-600"
                },
                {
                  "id": "customization-interface",
                  "title": t('architecture.coreComponents.humanInTheLoop.customizationInterface.title'),
                  "description": t('architecture.coreComponents.humanInTheLoop.customizationInterface.description'),
                  "icon": "🔧",
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "iconBackgroundColor": "bg-orange-100",
                  "titleColor": "text-orange-800",
                  "textColor": "text-orange-600"
                }
              ],
              "variant": "icons"
            }
          },
          {
            "id": "prominentDisplay-section-12",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.coreComponents.integrationSynergy.title'),
              "backgroundGradient": "from-green-50 to-blue-50",
              "borderColor": "border-green-500",
              "description": t('architecture.coreComponents.integrationSynergy.description'),
              "variant": "hero"
            }
          },
          {
            "id": "multiColumn-section-13",
            "type": "multiColumn",
            "content": {
              "title": t('architecture.coreComponents.integrationBenefits.title'),
              "leftColumn": {
                "sections": [
                  {
                    "title": t('architecture.coreComponents.integrationBenefits.seamlessDataFlow.title'),
                    "backgroundColor": "bg-green-50",
                    "borderColor": "border border-green-200",
                    "titleColor": "text-green-800",
                    "textColor": "text-green-700",
                    "icon": "🔄",
                    "items": [
                      t('architecture.coreComponents.integrationBenefits.seamlessDataFlow.items.0'),
                      t('architecture.coreComponents.integrationBenefits.seamlessDataFlow.items.1'),
                      t('architecture.coreComponents.integrationBenefits.seamlessDataFlow.items.2'),
                      t('architecture.coreComponents.integrationBenefits.seamlessDataFlow.items.3')
                    ]
                  }
                ]
              },
              "rightColumn": {
                "title": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.title'),
                "backgroundColor": "bg-gradient-to-br from-blue-50 to-green-50",
                "sections": [
                  {
                    "title": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.smartDecisionMaking.title'),
                    "description": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.smartDecisionMaking.description'),
                    "borderColor": "border border-blue-200",
                    "titleColor": "text-blue-800",
                    "textColor": "text-blue-600"
                  },
                  {
                    "title": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.humanOversight.title'),
                    "description": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.humanOversight.description'),
                    "borderColor": "border border-green-200",
                    "titleColor": "text-green-800",
                    "textColor": "text-green-600"
                  },
                  {
                    "title": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.continuousQuality.title'),
                    "description": t('architecture.coreComponents.integrationBenefits.intelligentAutomation.continuousQuality.description'),
                    "borderColor": "border border-purple-200",
                    "titleColor": "text-purple-800",
                    "textColor": "text-purple-600"
                  }
                ]
              },
              "variant": "complex-content",
              "layout": "two-column"
            }
          },
          {
            "id": "flexibleGrid-section-14",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.coreComponents.understandingInteractions.title'),
              "backgroundColor": "from-green-50 to-blue-50",
              "borderColor": "border-green-500",
              "categories": [
                {
                  "title": t('architecture.coreComponents.understandingInteractions.architecturePatterns.title'),
                  "color": "green",
                  "benefits": [
                    t('architecture.coreComponents.understandingInteractions.architecturePatterns.items.0'),
                    t('architecture.coreComponents.understandingInteractions.architecturePatterns.items.1'),
                    t('architecture.coreComponents.understandingInteractions.architecturePatterns.items.2')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-15",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.coreComponents.cta.title'),
              "description": t('architecture.coreComponents.cta.description'),
              "backgroundGradient": "bg-gradient-to-r from-green-600 to-blue-600",
              "textColor": "text-white",
              "variant": "cta",
              "items": [
                {
                  "id": "event-driven-architecture",
                  "title": t('architecture.coreComponents.cta.eventDrivenArchitecture.title'),
                  "description": t('architecture.coreComponents.cta.eventDrivenArchitecture.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "shared-knowledge-base",
                  "title": t('architecture.coreComponents.cta.sharedKnowledgeBase.title'),
                  "description": t('architecture.coreComponents.cta.sharedKnowledgeBase.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "quality-feedback-loops",
                  "title": t('architecture.coreComponents.cta.qualityFeedbackLoops.title'),
                  "description": t('architecture.coreComponents.cta.qualityFeedbackLoops.description'),
                  "backgroundColor": "bg-white/20"
                }
              ],
              "conclusion": {
                "title": t('architecture.coreComponents.cta.conclusion.title'),
                "description": t('architecture.coreComponents.cta.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('architecture.coreComponents.cta.buttonText')
            }
          }
        ]
      }
    ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [t, l]);

  return (
    <TopicLayout
      config={config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default CoreComponentsNew;
