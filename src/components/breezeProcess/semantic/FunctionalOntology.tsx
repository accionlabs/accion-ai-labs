import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import functionalOntologyLayers from '../assets/functionalOntologyLayers.svg';
import modalityIndependence from '../assets/modalityIndependence.svg';
import ecommerceJourney from '../assets/ecommerceJourney.svg';
import functionalOntologyLayersJa from '../assets/ja/functionalOntologyLayers.svg';
import modalityIndependenceJa from '../assets/ja/modalityIndependence.svg';
import ecommerceJourneyJa from '../assets/ja/ecommerceJourney.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface FunctionalOntologyNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const FunctionalOntologyNew: React.FC<FunctionalOntologyNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const functionalOntologyConfig: TopicConfig = React.useMemo(() => ({
    "id": "functional-ontology",
    "title": t('semantic.functional.header.title'),
    "slides": [
      {
        "id": "functional-ontology-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.functional.header.prominentTitle'),
              "titleGradient": "from-purple-600 to-blue-600",
              "description": t('semantic.functional.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.layerStructure.title'),
              "description": t('semantic.functional.layerStructure.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-red-50",
              "items": [
                {
                  "id": "functional-layers-diagram",
                  "title": t('semantic.functional.layerStructure.diagramTitle'),
                  "description": t('semantic.functional.layerStructure.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(functionalOntologyLayers, functionalOntologyLayersJa),
                    "alt": t('semantic.functional.layerStructure.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 800 600",
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
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.layerDefinitions.title'),
              "layout": "single",
              "items": [
                {
                  "id": "persona-layer",
                  "title": t('semantic.functional.layerDefinitions.persona.title'),
                  "description": t('semantic.functional.layerDefinitions.persona.description'),
                  "backgroundColor": "bg-purple-100",
                  "borderColor": "border-purple-300",
                  "items": [
                    t('semantic.functional.layerDefinitions.persona.example')
                  ]
                },
                {
                  "id": "outcomes-layer",
                  "title": t('semantic.functional.layerDefinitions.outcomes.title'),
                  "description": t('semantic.functional.layerDefinitions.outcomes.description'),
                  "backgroundColor": "bg-blue-100",
                  "borderColor": "border-blue-300",
                  "items": [
                    t('semantic.functional.layerDefinitions.outcomes.example')
                  ]
                },
                {
                  "id": "scenarios-layer",
                  "title": t('semantic.functional.layerDefinitions.scenarios.title'),
                  "description": t('semantic.functional.layerDefinitions.scenarios.description'),
                  "backgroundColor": "bg-green-100",
                  "borderColor": "border-green-300",
                  "items": [
                    t('semantic.functional.layerDefinitions.scenarios.example')
                  ]
                },
                {
                  "id": "steps-layer",
                  "title": t('semantic.functional.layerDefinitions.steps.title'),
                  "description": t('semantic.functional.layerDefinitions.steps.description'),
                  "backgroundColor": "bg-orange-100",
                  "borderColor": "border-orange-300",
                  "items": [
                    t('semantic.functional.layerDefinitions.steps.example')
                  ]
                },
                {
                  "id": "actions-layer",
                  "title": t('semantic.functional.layerDefinitions.actions.title'),
                  "description": t('semantic.functional.layerDefinitions.actions.description'),
                  "backgroundColor": "bg-red-100",
                  "borderColor": "border-red-300",
                  "items": [
                    t('semantic.functional.layerDefinitions.actions.example')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.ecommerceJourney.title'),
              "description": t('semantic.functional.ecommerceJourney.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-red-50",
              "items": [
                {
                  "id": "ecommerce-journey-diagram",
                  "title": t('semantic.functional.ecommerceJourney.diagramTitle'),
                  "description": t('semantic.functional.ecommerceJourney.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(ecommerceJourney, ecommerceJourneyJa),
                    "alt": t('semantic.functional.ecommerceJourney.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 800 700",
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
            "id": "flexibleGrid-section-5",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.actionDetail.title'),
              "description": t('semantic.functional.actionDetail.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "search-actions",
                  "title": t('semantic.functional.actionDetail.search.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('semantic.functional.actionDetail.search.items.0'),
                    t('semantic.functional.actionDetail.search.items.1')
                  ]
                },
                {
                  "id": "review-actions",
                  "title": t('semantic.functional.actionDetail.review.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('semantic.functional.actionDetail.review.items.0'),
                    t('semantic.functional.actionDetail.review.items.1'),
                    t('semantic.functional.actionDetail.review.items.2')
                  ]
                },
                {
                  "id": "decision-actions",
                  "title": t('semantic.functional.actionDetail.decision.title'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "items": [
                    t('semantic.functional.actionDetail.decision.items.0'),
                    t('semantic.functional.actionDetail.decision.items.1')
                  ]
                },
                {
                  "id": "transaction-actions",
                  "title": t('semantic.functional.actionDetail.transaction.title'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "items": [
                    t('semantic.functional.actionDetail.transaction.items.0'),
                    t('semantic.functional.actionDetail.transaction.items.1'),
                    t('semantic.functional.actionDetail.transaction.items.2')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "prominentDisplay-section-6",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.functional.modalityIndependence.title'),
              "backgroundGradient": "from-purple-50 to-blue-50",
              "borderColor": "border-purple-500",
              "description": t('semantic.functional.modalityIndependence.description'),
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-7",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.modalityVisualization.title'),
              "description": t('semantic.functional.modalityVisualization.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50",
              "items": [
                {
                  "id": "modality-independence-diagram",
                  "title": t('semantic.functional.modalityVisualization.diagramTitle'),
                  "description": t('semantic.functional.modalityVisualization.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(modalityIndependence, modalityIndependenceJa),
                    "alt": t('semantic.functional.modalityVisualization.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 900 500",
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
            "id": "flexibleGrid-section-7b",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.implementationExamples.title'),
              "description": t('semantic.functional.implementationExamples.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "search-term-implementations",
                  "title": t('semantic.functional.implementationExamples.searchTerm.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('semantic.functional.implementationExamples.searchTerm.items.0'),
                    t('semantic.functional.implementationExamples.searchTerm.items.1'),
                    t('semantic.functional.implementationExamples.searchTerm.items.2'),
                    t('semantic.functional.implementationExamples.searchTerm.items.3')
                  ]
                },
                {
                  "id": "filter-implementations",
                  "title": t('semantic.functional.implementationExamples.filter.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('semantic.functional.implementationExamples.filter.items.0'),
                    t('semantic.functional.implementationExamples.filter.items.1'),
                    t('semantic.functional.implementationExamples.filter.items.2'),
                    t('semantic.functional.implementationExamples.filter.items.3')
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
              "title": t('semantic.functional.semanticRichness.title'),
              "description": t('semantic.functional.semanticRichness.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "persona-context",
                  "title": t('semantic.functional.semanticRichness.personaContext.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('semantic.functional.semanticRichness.personaContext.items.0'),
                    t('semantic.functional.semanticRichness.personaContext.items.1'),
                    t('semantic.functional.semanticRichness.personaContext.items.2'),
                    t('semantic.functional.semanticRichness.personaContext.items.3'),
                    t('semantic.functional.semanticRichness.personaContext.items.4')
                  ]
                },
                {
                  "id": "outcome-validation",
                  "title": t('semantic.functional.semanticRichness.outcomeValidation.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('semantic.functional.semanticRichness.outcomeValidation.items.0'),
                    t('semantic.functional.semanticRichness.outcomeValidation.items.1'),
                    t('semantic.functional.semanticRichness.outcomeValidation.items.2'),
                    t('semantic.functional.semanticRichness.outcomeValidation.items.3'),
                    t('semantic.functional.semanticRichness.outcomeValidation.items.4')
                  ]
                },
                {
                  "id": "action-semantics",
                  "title": t('semantic.functional.semanticRichness.actionSemantics.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('semantic.functional.semanticRichness.actionSemantics.items.0'),
                    t('semantic.functional.semanticRichness.actionSemantics.items.1'),
                    t('semantic.functional.semanticRichness.actionSemantics.items.2'),
                    t('semantic.functional.semanticRichness.actionSemantics.items.3'),
                    t('semantic.functional.semanticRichness.actionSemantics.items.4')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-9",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.crossOntologyMapping.title'),
              "description": t('semantic.functional.crossOntologyMapping.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "traceability-relationships",
                  "title": t('semantic.functional.crossOntologyMapping.traceability.title'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "items": [
                    t('semantic.functional.crossOntologyMapping.traceability.items.0'),
                    t('semantic.functional.crossOntologyMapping.traceability.items.1'),
                    t('semantic.functional.crossOntologyMapping.traceability.items.2'),
                    t('semantic.functional.crossOntologyMapping.traceability.items.3')
                  ]
                },
                {
                  "id": "validation-benefits",
                  "title": t('semantic.functional.crossOntologyMapping.validation.title'),
                  "backgroundColor": "bg-teal-50",
                  "borderColor": "border-teal-200",
                  "items": [
                    t('semantic.functional.crossOntologyMapping.validation.items.0'),
                    t('semantic.functional.crossOntologyMapping.validation.items.1'),
                    t('semantic.functional.crossOntologyMapping.validation.items.2'),
                    t('semantic.functional.crossOntologyMapping.validation.items.3')
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
              "title": t('semantic.functional.aiAgent.title'),
              "description": t('semantic.functional.aiAgent.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "agent-capabilities",
                  "title": t('semantic.functional.aiAgent.capabilities.title'),
                  "backgroundColor": "bg-yellow-50",
                  "borderColor": "border-yellow-200",
                  "items": [
                    t('semantic.functional.aiAgent.capabilities.items.0'),
                    t('semantic.functional.aiAgent.capabilities.items.1'),
                    t('semantic.functional.aiAgent.capabilities.items.2'),
                    t('semantic.functional.aiAgent.capabilities.items.3')
                  ]
                },
                {
                  "id": "automation-benefits",
                  "title": t('semantic.functional.aiAgent.automation.title'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "items": [
                    t('semantic.functional.aiAgent.automation.items.0'),
                    t('semantic.functional.aiAgent.automation.items.1'),
                    t('semantic.functional.aiAgent.automation.items.2'),
                    t('semantic.functional.aiAgent.automation.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-11",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.functional.benefits.title'),
              "backgroundColor": "from-purple-50 to-blue-50",
              "borderColor": "border-purple-500",
              "categories": [
                {
                  "title": t('semantic.functional.benefits.strategic.title'),
                  "color": "purple",
                  "benefits": [
                    t('semantic.functional.benefits.strategic.items.0'),
                    t('semantic.functional.benefits.strategic.items.1'),
                    t('semantic.functional.benefits.strategic.items.2'),
                    t('semantic.functional.benefits.strategic.items.3')
                  ]
                },
                {
                  "title": t('semantic.functional.benefits.operational.title'),
                  "color": "blue",
                  "benefits": [
                    t('semantic.functional.benefits.operational.items.0'),
                    t('semantic.functional.benefits.operational.items.1'),
                    t('semantic.functional.benefits.operational.items.2'),
                    t('semantic.functional.benefits.operational.items.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-12",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.functional.cta.title'),
              "description": t('semantic.functional.cta.description'),
              "buttonText": t('semantic.functional.cta.buttonText'),
              "backgroundGradient": "from-purple-600 to-blue-600",
              "variant": "cta"
            }
          }
        ]
      }
    ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [t, l]);

  return (
    <TopicLayout
      config={functionalOntologyConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default FunctionalOntologyNew;
