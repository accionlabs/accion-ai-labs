import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import componentInteractionsDiagram from '../assets/componentInteractionsDiagram.svg';
import componentInteractionsDiagramJa from '../assets/ja/componentInteractionsDiagram.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface ComponentInteractionsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ComponentInteractionsNew: React.FC<ComponentInteractionsNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const config: TopicConfig = React.useMemo(() => ({
    "id": "component-interactions",
    "title": t('architecture.componentInteractions.configTitle'),
    "slides": [
      {
        "id": "component-interactions-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.componentInteractions.header.title'),
              "titleGradient": "from-brand-purple-600 to-brand-pink-600",
              "description": t('architecture.componentInteractions.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.interactionArchitecture.title'),
              "description": t('architecture.componentInteractions.interactionArchitecture.description'),
              "layout": "single",
              "items": [
                {
                  "id": "central-architecture",
                  "title": t('architecture.componentInteractions.interactionArchitecture.diagram.title'),
                  "description": t('architecture.componentInteractions.interactionArchitecture.diagram.description'),
                  "backgroundColor": "bg-gradient-to-br from-purple-50 to-pink-50",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(componentInteractionsDiagram, componentInteractionsDiagramJa),
                    "alt": t('architecture.componentInteractions.interactionArchitecture.diagram.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 600 384",
                    "preserveAspectRatio": "xMidYMid meet",
                    "className": "border border-gray-200 rounded-lg bg-white p-4 max-w-full h-auto"
                  }
                }
              ],
              "variant": "content",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.coreInteractionComponents.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "specification-engine",
                  "title": t('architecture.componentInteractions.coreInteractionComponents.specificationEngine.title'),
                  "subtitle": t('architecture.componentInteractions.coreInteractionComponents.specificationEngine.subtitle'),
                  "description": t('architecture.componentInteractions.coreInteractionComponents.specificationEngine.description'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-300",
                  "color": "text-yellow-800"
                },
                {
                  "id": "agent-platform",
                  "title": t('architecture.componentInteractions.coreInteractionComponents.agentPlatform.title'),
                  "subtitle": t('architecture.componentInteractions.coreInteractionComponents.agentPlatform.subtitle'),
                  "description": t('architecture.componentInteractions.coreInteractionComponents.agentPlatform.description'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-300",
                  "color": "text-red-800"
                },
                {
                  "id": "knowledge-graph",
                  "title": t('architecture.componentInteractions.coreInteractionComponents.knowledgeGraph.title'),
                  "subtitle": t('architecture.componentInteractions.coreInteractionComponents.knowledgeGraph.subtitle'),
                  "description": t('architecture.componentInteractions.coreInteractionComponents.knowledgeGraph.description'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-300",
                  "color": "text-blue-800"
                },
                {
                  "id": "generation-engine",
                  "title": t('architecture.componentInteractions.coreInteractionComponents.generationEngine.title'),
                  "subtitle": t('architecture.componentInteractions.coreInteractionComponents.generationEngine.subtitle'),
                  "description": t('architecture.componentInteractions.coreInteractionComponents.generationEngine.description'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-300",
                  "color": "text-green-800"
                },
                {
                  "id": "quality-engine",
                  "title": t('architecture.componentInteractions.coreInteractionComponents.qualityEngine.title'),
                  "subtitle": t('architecture.componentInteractions.coreInteractionComponents.qualityEngine.subtitle'),
                  "description": t('architecture.componentInteractions.coreInteractionComponents.qualityEngine.description'),
                  "backgroundColor": "bg-brand-indigo-50",
                  "borderColor": "border-brand-indigo-300",
                  "color": "text-indigo-800"
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.informationFlowPatterns.title'),
              "layout": "grid-4",
              "items": [
                {
                  "id": "requirements-flow",
                  "title": t('architecture.componentInteractions.informationFlowPatterns.requirementsFlow.title'),
                  "description": t('architecture.componentInteractions.informationFlowPatterns.requirementsFlow.description'),
                  "icon": "🟡",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200"
                },
                {
                  "id": "agent-coordination",
                  "title": t('architecture.componentInteractions.informationFlowPatterns.agentCoordination.title'),
                  "description": t('architecture.componentInteractions.informationFlowPatterns.agentCoordination.description'),
                  "icon": "🔴",
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200"
                },
                {
                  "id": "implementation-flow",
                  "title": t('architecture.componentInteractions.informationFlowPatterns.implementationFlow.title'),
                  "description": t('architecture.componentInteractions.informationFlowPatterns.implementationFlow.description'),
                  "icon": "🟢",
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200"
                },
                {
                  "id": "quality-feedback",
                  "title": t('architecture.componentInteractions.informationFlowPatterns.qualityFeedback.title'),
                  "description": t('architecture.componentInteractions.informationFlowPatterns.qualityFeedback.description'),
                  "icon": "🟣",
                  "backgroundColor": "bg-brand-indigo-50",
                  "borderColor": "border-brand-indigo-200"
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-5",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.eventDrivenCommunication.title'),
              "description": t('architecture.componentInteractions.eventDrivenCommunication.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "semantic-event-structure",
                  "title": t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.title'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-200",
                  "items": [
                    t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.items.0'),
                    t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.items.1'),
                    t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.items.2'),
                    t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.items.3'),
                    t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.items.4'),
                    t('architecture.componentInteractions.eventDrivenCommunication.semanticEventStructure.items.5')
                  ]
                },
                {
                  "id": "event-categories",
                  "title": t('architecture.componentInteractions.eventDrivenCommunication.eventCategories.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-200",
                  "items": [
                    t('architecture.componentInteractions.eventDrivenCommunication.eventCategories.items.0'),
                    t('architecture.componentInteractions.eventDrivenCommunication.eventCategories.items.1'),
                    t('architecture.componentInteractions.eventDrivenCommunication.eventCategories.items.2'),
                    t('architecture.componentInteractions.eventDrivenCommunication.eventCategories.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "sequentialContent-section-6",
            "type": "sequentialContent",
            "content": {
              "title": t('architecture.componentInteractions.eventFlowExample.title'),
              "layout": "vertical",
              "steps": [
                {
                  "id": "requirement-change",
                  "number": 1,
                  "title": t('architecture.componentInteractions.eventFlowExample.steps.requirementChange.title'),
                  "description": t('architecture.componentInteractions.eventFlowExample.steps.requirementChange.description'),
                  "color": "bg-brand-purple-500",
                  "backgroundColor": "bg-brand-purple-50"
                },
                {
                  "id": "impact-analysis",
                  "number": 2,
                  "title": t('architecture.componentInteractions.eventFlowExample.steps.impactAnalysis.title'),
                  "description": t('architecture.componentInteractions.eventFlowExample.steps.impactAnalysis.description'),
                  "color": "bg-brand-blue-500",
                  "backgroundColor": "bg-brand-blue-50"
                },
                {
                  "id": "agent-orchestration",
                  "number": 3,
                  "title": t('architecture.componentInteractions.eventFlowExample.steps.agentOrchestration.title'),
                  "description": t('architecture.componentInteractions.eventFlowExample.steps.agentOrchestration.description'),
                  "color": "bg-success-500",
                  "backgroundColor": "bg-success-50"
                },
                {
                  "id": "synchronized-update",
                  "number": 4,
                  "title": t('architecture.componentInteractions.eventFlowExample.steps.synchronizedUpdate.title'),
                  "description": t('architecture.componentInteractions.eventFlowExample.steps.synchronizedUpdate.description'),
                  "color": "bg-warning-500",
                  "backgroundColor": "bg-warning-50"
                }
              ],
              "variant": "timeline"
            }
          },
          {
            "id": "flexibleGrid-section-7",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.agentCoordinationPatterns.title'),
              "description": t('architecture.componentInteractions.agentCoordinationPatterns.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "sequential-coordination",
                  "title": t('architecture.componentInteractions.agentCoordinationPatterns.sequential.title'),
                  "description": t('architecture.componentInteractions.agentCoordinationPatterns.sequential.description'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "items": [
                    t('architecture.componentInteractions.agentCoordinationPatterns.sequential.items.0'),
                    t('architecture.componentInteractions.agentCoordinationPatterns.sequential.items.1')
                  ]
                },
                {
                  "id": "parallel-coordination",
                  "title": t('architecture.componentInteractions.agentCoordinationPatterns.parallel.title'),
                  "description": t('architecture.componentInteractions.agentCoordinationPatterns.parallel.description'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "items": [
                    t('architecture.componentInteractions.agentCoordinationPatterns.parallel.items.0'),
                    t('architecture.componentInteractions.agentCoordinationPatterns.parallel.items.1')
                  ]
                },
                {
                  "id": "collaborative-coordination",
                  "title": t('architecture.componentInteractions.agentCoordinationPatterns.collaborative.title'),
                  "description": t('architecture.componentInteractions.agentCoordinationPatterns.collaborative.description'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-200",
                  "items": [
                    t('architecture.componentInteractions.agentCoordinationPatterns.collaborative.items.0'),
                    t('architecture.componentInteractions.agentCoordinationPatterns.collaborative.items.1')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-8",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.dataFlowStateManagement.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "centralized-knowledge",
                  "title": t('architecture.componentInteractions.dataFlowStateManagement.centralizedKnowledge.title'),
                  "description": t('architecture.componentInteractions.dataFlowStateManagement.centralizedKnowledge.description'),
                  "backgroundColor": "bg-brand-indigo-50",
                  "borderColor": "border-brand-indigo-200",
                  "items": [
                    t('architecture.componentInteractions.dataFlowStateManagement.centralizedKnowledge.items.0'),
                    t('architecture.componentInteractions.dataFlowStateManagement.centralizedKnowledge.items.1'),
                    t('architecture.componentInteractions.dataFlowStateManagement.centralizedKnowledge.items.2'),
                    t('architecture.componentInteractions.dataFlowStateManagement.centralizedKnowledge.items.3')
                  ]
                },
                {
                  "id": "distributed-caching",
                  "title": t('architecture.componentInteractions.dataFlowStateManagement.distributedCaching.title'),
                  "description": t('architecture.componentInteractions.dataFlowStateManagement.distributedCaching.description'),
                  "backgroundColor": "bg-info-50",
                  "borderColor": "border-info-200",
                  "items": [
                    t('architecture.componentInteractions.dataFlowStateManagement.distributedCaching.items.0'),
                    t('architecture.componentInteractions.dataFlowStateManagement.distributedCaching.items.1'),
                    t('architecture.componentInteractions.dataFlowStateManagement.distributedCaching.items.2')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "sequentialContent-section-9",
            "type": "sequentialContent",
            "content": {
              "title": t('architecture.componentInteractions.stateSynchronizationFlow.title'),
              "layout": "vertical",
              "steps": [
                {
                  "id": "state-change-detection",
                  "number": 1,
                  "title": t('architecture.componentInteractions.stateSynchronizationFlow.steps.stateChangeDetection.title'),
                  "description": t('architecture.componentInteractions.stateSynchronizationFlow.steps.stateChangeDetection.description'),
                  "color": "bg-brand-indigo-500",
                  "backgroundColor": "bg-brand-indigo-50"
                },
                {
                  "id": "dependency-analysis",
                  "number": 2,
                  "title": t('architecture.componentInteractions.stateSynchronizationFlow.steps.dependencyAnalysis.title'),
                  "description": t('architecture.componentInteractions.stateSynchronizationFlow.steps.dependencyAnalysis.description'),
                  "color": "bg-brand-blue-500",
                  "backgroundColor": "bg-brand-blue-50"
                },
                {
                  "id": "coordinated-update",
                  "number": 3,
                  "title": t('architecture.componentInteractions.stateSynchronizationFlow.steps.coordinatedUpdate.title'),
                  "description": t('architecture.componentInteractions.stateSynchronizationFlow.steps.coordinatedUpdate.description'),
                  "color": "bg-success-500",
                  "backgroundColor": "bg-success-50"
                },
                {
                  "id": "validation-confirmation",
                  "number": 4,
                  "title": t('architecture.componentInteractions.stateSynchronizationFlow.steps.validationConfirmation.title'),
                  "description": t('architecture.componentInteractions.stateSynchronizationFlow.steps.validationConfirmation.description'),
                  "color": "bg-info-500",
                  "backgroundColor": "bg-info-50"
                }
              ],
              "variant": "timeline"
            }
          },
          {
            "id": "flexibleGrid-section-10",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.qualityAssuranceInteractions.title'),
              "description": t('architecture.componentInteractions.qualityAssuranceInteractions.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "continuous-validation",
                  "title": t('architecture.componentInteractions.qualityAssuranceInteractions.continuousValidation.title'),
                  "description": t('architecture.componentInteractions.qualityAssuranceInteractions.continuousValidation.description'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('architecture.componentInteractions.qualityAssuranceInteractions.continuousValidation.items.0'),
                    t('architecture.componentInteractions.qualityAssuranceInteractions.continuousValidation.items.1'),
                    t('architecture.componentInteractions.qualityAssuranceInteractions.continuousValidation.items.2'),
                    t('architecture.componentInteractions.qualityAssuranceInteractions.continuousValidation.items.3')
                  ]
                },
                {
                  "id": "quality-gates",
                  "title": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityGates.title'),
                  "description": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityGates.description'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "items": [
                    t('architecture.componentInteractions.qualityAssuranceInteractions.qualityGates.items.0'),
                    t('architecture.componentInteractions.qualityAssuranceInteractions.qualityGates.items.1'),
                    t('architecture.componentInteractions.qualityAssuranceInteractions.qualityGates.items.2'),
                    t('architecture.componentInteractions.qualityAssuranceInteractions.qualityGates.items.3')
                  ]
                },
                {
                  "id": "quality-interaction-pattern",
                  "title": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.title'),
                  "description": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.description'),
                  "backgroundColor": "bg-gradient-to-br from-red-50 to-orange-50",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "📝",
                      "title": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.componentAction.title'),
                      "description": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.componentAction.description'),
                      "backgroundColor": "bg-white",
                      "iconColor": "bg-brand-blue-500"
                    },
                    {
                      "icon": "✓",
                      "title": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.qualityValidation.title'),
                      "description": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.qualityValidation.description'),
                      "backgroundColor": "bg-white",
                      "iconColor": "bg-error-500"
                    },
                    {
                      "icon": "✓",
                      "title": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.passContinue.title'),
                      "description": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.passContinue.description'),
                      "backgroundColor": "bg-white",
                      "iconColor": "bg-success-500"
                    },
                    {
                      "icon": "⚠",
                      "title": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.failRemediate.title'),
                      "description": t('architecture.componentInteractions.qualityAssuranceInteractions.qualityInteractionPattern.processSteps.failRemediate.description'),
                      "backgroundColor": "bg-white",
                      "iconColor": "bg-warning-500"
                    }
                  ]
                }
              ],
              "variant": "process-flow"
            }
          },
          {
            "id": "flexibleGrid-section-11",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.humanInTheLoopIntegration.title'),
              "description": t('architecture.componentInteractions.humanInTheLoopIntegration.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "strategic-decisions",
                  "title": t('architecture.componentInteractions.humanInTheLoopIntegration.strategicDecisions.title'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-200",
                  "items": [
                    t('architecture.componentInteractions.humanInTheLoopIntegration.strategicDecisions.items.0'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.strategicDecisions.items.1'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.strategicDecisions.items.2'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.strategicDecisions.items.3')
                  ]
                },
                {
                  "id": "approval-workflows",
                  "title": t('architecture.componentInteractions.humanInTheLoopIntegration.approvalWorkflows.title'),
                  "backgroundColor": "bg-brand-pink-50",
                  "borderColor": "border-brand-pink-200",
                  "items": [
                    t('architecture.componentInteractions.humanInTheLoopIntegration.approvalWorkflows.items.0'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.approvalWorkflows.items.1'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.approvalWorkflows.items.2'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.approvalWorkflows.items.3')
                  ]
                },
                {
                  "id": "collaborative-refinement",
                  "title": t('architecture.componentInteractions.humanInTheLoopIntegration.collaborativeRefinement.title'),
                  "backgroundColor": "bg-info-50",
                  "borderColor": "border-info-200",
                  "items": [
                    t('architecture.componentInteractions.humanInTheLoopIntegration.collaborativeRefinement.items.0'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.collaborativeRefinement.items.1'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.collaborativeRefinement.items.2'),
                    t('architecture.componentInteractions.humanInTheLoopIntegration.collaborativeRefinement.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-12",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.componentInteractions.interactionBenefits.title'),
              "backgroundColor": "from-purple-50 to-pink-50",
              "borderColor": "border-brand-purple-500",
              "categories": [
                {
                  "title": t('architecture.componentInteractions.interactionBenefits.technical.title'),
                  "color": "purple",
                  "benefits": [
                    t('architecture.componentInteractions.interactionBenefits.technical.items.0'),
                    t('architecture.componentInteractions.interactionBenefits.technical.items.1'),
                    t('architecture.componentInteractions.interactionBenefits.technical.items.2'),
                    t('architecture.componentInteractions.interactionBenefits.technical.items.3')
                  ]
                },
                {
                  "title": t('architecture.componentInteractions.interactionBenefits.business.title'),
                  "color": "pink",
                  "benefits": [
                    t('architecture.componentInteractions.interactionBenefits.business.items.0'),
                    t('architecture.componentInteractions.interactionBenefits.business.items.1'),
                    t('architecture.componentInteractions.interactionBenefits.business.items.2'),
                    t('architecture.componentInteractions.interactionBenefits.business.items.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-13",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.componentInteractions.cta.title'),
              "description": t('architecture.componentInteractions.cta.description'),
              "buttonText": t('architecture.componentInteractions.cta.buttonText'),
              "backgroundGradient": "from-brand-purple-600 to-brand-pink-600",
              "variant": "cta",
              "items": [
                {
                  "id": "tool-integration",
                  "title": t('architecture.componentInteractions.cta.toolIntegration.title'),
                  "description": t('architecture.componentInteractions.cta.toolIntegration.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "infrastructure-integration",
                  "title": t('architecture.componentInteractions.cta.infrastructureIntegration.title'),
                  "description": t('architecture.componentInteractions.cta.infrastructureIntegration.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "process-integration",
                  "title": t('architecture.componentInteractions.cta.processIntegration.title'),
                  "description": t('architecture.componentInteractions.cta.processIntegration.description'),
                  "backgroundColor": "bg-white/20"
                }
              ]
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

export default ComponentInteractionsNew;
