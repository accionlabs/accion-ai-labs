import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import atomicDesignHierarchy from '../assets/atomicDesignHierarchy.svg';
import crossModalConsistency from '../assets/crossModalConsistency.svg';
import designBreakdownExample from '../assets/designBreakdownExample.svg';
import atomicDesignHierarchyJa from '../assets/ja/atomicDesignHierarchy.svg';
import crossModalConsistencyJa from '../assets/ja/crossModalConsistency.svg';
import designBreakdownExampleJa from '../assets/ja/designBreakdownExample.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface DesignOntologyNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const DesignOntologyNew: React.FC<DesignOntologyNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const designOntologyConfig: TopicConfig = React.useMemo(() => ({
    "id": "design-ontology",
    "title": t('semantic.design.header.title'),
    "slides": [
      {
        "id": "design-ontology-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.design.header.prominentTitle'),
              "titleGradient": "from-blue-600 to-purple-600",
              "description": t('semantic.design.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.design.atomicHierarchy.title'),
              "description": t('semantic.design.atomicHierarchy.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50",
              "items": [
                {
                  "id": "atomic-design-diagram",
                  "title": t('semantic.design.atomicHierarchy.diagramTitle'),
                  "description": t('semantic.design.atomicHierarchy.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(atomicDesignHierarchy, atomicDesignHierarchyJa),
                    "alt": t('semantic.design.atomicHierarchy.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 900 650",
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
              "title": t('semantic.design.layerDefinitions.title'),
              "description": t('semantic.design.layerDefinitions.description'),
              "layout": "single",
              "items": [
                {
                  "id": "user-journeys-layer",
                  "title": t('semantic.design.layerDefinitions.userJourneys.title'),
                  "description": t('semantic.design.layerDefinitions.userJourneys.description'),
                  "backgroundColor": "bg-purple-100",
                  "borderColor": "border-purple-300",
                  "items": [
                    t('semantic.design.layerDefinitions.userJourneys.items.0'),
                    t('semantic.design.layerDefinitions.userJourneys.items.1'),
                    t('semantic.design.layerDefinitions.userJourneys.items.2'),
                    t('semantic.design.layerDefinitions.userJourneys.items.3')
                  ]
                },
                {
                  "id": "flows-layer",
                  "title": t('semantic.design.layerDefinitions.flows.title'),
                  "description": t('semantic.design.layerDefinitions.flows.description'),
                  "backgroundColor": "bg-blue-100",
                  "borderColor": "border-blue-300",
                  "items": [
                    t('semantic.design.layerDefinitions.flows.items.0'),
                    t('semantic.design.layerDefinitions.flows.items.1'),
                    t('semantic.design.layerDefinitions.flows.items.2'),
                    t('semantic.design.layerDefinitions.flows.items.3')
                  ]
                },
                {
                  "id": "pages-layer",
                  "title": t('semantic.design.layerDefinitions.pages.title'),
                  "description": t('semantic.design.layerDefinitions.pages.description'),
                  "backgroundColor": "bg-green-100",
                  "borderColor": "border-green-300",
                  "items": [
                    t('semantic.design.layerDefinitions.pages.items.0'),
                    t('semantic.design.layerDefinitions.pages.items.1'),
                    t('semantic.design.layerDefinitions.pages.items.2'),
                    t('semantic.design.layerDefinitions.pages.items.3')
                  ]
                },
                {
                  "id": "templates-layer",
                  "title": t('semantic.design.layerDefinitions.templates.title'),
                  "description": t('semantic.design.layerDefinitions.templates.description'),
                  "backgroundColor": "bg-yellow-100",
                  "borderColor": "border-yellow-300",
                  "items": [
                    t('semantic.design.layerDefinitions.templates.items.0'),
                    t('semantic.design.layerDefinitions.templates.items.1'),
                    t('semantic.design.layerDefinitions.templates.items.2'),
                    t('semantic.design.layerDefinitions.templates.items.3')
                  ]
                },
                {
                  "id": "organisms-layer",
                  "title": t('semantic.design.layerDefinitions.organisms.title'),
                  "description": t('semantic.design.layerDefinitions.organisms.description'),
                  "backgroundColor": "bg-red-100",
                  "borderColor": "border-red-300",
                  "items": [
                    t('semantic.design.layerDefinitions.organisms.items.0'),
                    t('semantic.design.layerDefinitions.organisms.items.1'),
                    t('semantic.design.layerDefinitions.organisms.items.2'),
                    t('semantic.design.layerDefinitions.organisms.items.3')
                  ]
                },
                {
                  "id": "molecules-layer",
                  "title": t('semantic.design.layerDefinitions.molecules.title'),
                  "description": t('semantic.design.layerDefinitions.molecules.description'),
                  "backgroundColor": "bg-indigo-100",
                  "borderColor": "border-indigo-300",
                  "items": [
                    t('semantic.design.layerDefinitions.molecules.items.0'),
                    t('semantic.design.layerDefinitions.molecules.items.1'),
                    t('semantic.design.layerDefinitions.molecules.items.2'),
                    t('semantic.design.layerDefinitions.molecules.items.3')
                  ]
                },
                {
                  "id": "atoms-layer",
                  "title": t('semantic.design.layerDefinitions.atoms.title'),
                  "description": t('semantic.design.layerDefinitions.atoms.description'),
                  "backgroundColor": "bg-pink-100",
                  "borderColor": "border-pink-300",
                  "items": [
                    t('semantic.design.layerDefinitions.atoms.items.0'),
                    t('semantic.design.layerDefinitions.atoms.items.1'),
                    t('semantic.design.layerDefinitions.atoms.items.2'),
                    t('semantic.design.layerDefinitions.atoms.items.3')
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
              "title": t('semantic.design.breakdownExample.title'),
              "description": t('semantic.design.breakdownExample.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-br from-gray-50 to-pink-50",
              "items": [
                {
                  "id": "design-breakdown-diagram",
                  "title": t('semantic.design.breakdownExample.diagramTitle'),
                  "description": t('semantic.design.breakdownExample.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(designBreakdownExample, designBreakdownExampleJa),
                    "alt": t('semantic.design.breakdownExample.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 1000 700",
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
              "title": t('semantic.design.crossModal.title'),
              "description": t('semantic.design.crossModal.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-r from-blue-50 via-purple-50 to-yellow-50",
              "items": [
                {
                  "id": "cross-modal-diagram",
                  "title": t('semantic.design.crossModal.diagramTitle'),
                  "description": t('semantic.design.crossModal.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(crossModalConsistency, crossModalConsistencyJa),
                    "alt": t('semantic.design.crossModal.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 950 580",
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
            "id": "flexibleGrid-section-6",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.design.modalityAdaptations.title'),
              "description": t('semantic.design.modalityAdaptations.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "web-adaptations",
                  "title": t('semantic.design.modalityAdaptations.web.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('semantic.design.modalityAdaptations.web.items.0'),
                    t('semantic.design.modalityAdaptations.web.items.1'),
                    t('semantic.design.modalityAdaptations.web.items.2'),
                    t('semantic.design.modalityAdaptations.web.items.3'),
                    t('semantic.design.modalityAdaptations.web.items.4')
                  ]
                },
                {
                  "id": "mobile-adaptations",
                  "title": t('semantic.design.modalityAdaptations.mobile.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('semantic.design.modalityAdaptations.mobile.items.0'),
                    t('semantic.design.modalityAdaptations.mobile.items.1'),
                    t('semantic.design.modalityAdaptations.mobile.items.2'),
                    t('semantic.design.modalityAdaptations.mobile.items.3'),
                    t('semantic.design.modalityAdaptations.mobile.items.4')
                  ]
                },
                {
                  "id": "voice-adaptations",
                  "title": t('semantic.design.modalityAdaptations.voice.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('semantic.design.modalityAdaptations.voice.items.0'),
                    t('semantic.design.modalityAdaptations.voice.items.1'),
                    t('semantic.design.modalityAdaptations.voice.items.2'),
                    t('semantic.design.modalityAdaptations.voice.items.3'),
                    t('semantic.design.modalityAdaptations.voice.items.4')
                  ]
                },
                {
                  "id": "api-adaptations",
                  "title": t('semantic.design.modalityAdaptations.api.title'),
                  "backgroundColor": "bg-yellow-50",
                  "borderColor": "border-yellow-200",
                  "items": [
                    t('semantic.design.modalityAdaptations.api.items.0'),
                    t('semantic.design.modalityAdaptations.api.items.1'),
                    t('semantic.design.modalityAdaptations.api.items.2'),
                    t('semantic.design.modalityAdaptations.api.items.3'),
                    t('semantic.design.modalityAdaptations.api.items.4')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "prominentDisplay-section-7",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.design.designFunctionMapping.title'),
              "backgroundGradient": "from-blue-50 to-purple-50",
              "borderColor": "border-blue-500",
              "description": t('semantic.design.designFunctionMapping.description'),
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-8",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.design.traceability.title'),
              "description": t('semantic.design.traceability.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "functional-mapping",
                  "title": t('semantic.design.traceability.functionalMapping.title'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "items": [
                    t('semantic.design.traceability.functionalMapping.items.0'),
                    t('semantic.design.traceability.functionalMapping.items.1'),
                    t('semantic.design.traceability.functionalMapping.items.2'),
                    t('semantic.design.traceability.functionalMapping.items.3')
                  ]
                },
                {
                  "id": "cross-ontology-links",
                  "title": t('semantic.design.traceability.crossOntologyLinks.title'),
                  "backgroundColor": "bg-teal-50",
                  "borderColor": "border-teal-200",
                  "items": [
                    t('semantic.design.traceability.crossOntologyLinks.items.0'),
                    t('semantic.design.traceability.crossOntologyLinks.items.1'),
                    t('semantic.design.traceability.crossOntologyLinks.items.2'),
                    t('semantic.design.traceability.crossOntologyLinks.items.3')
                  ]
                },
                {
                  "id": "quality-assurance",
                  "title": t('semantic.design.traceability.qualityAssurance.title'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "items": [
                    t('semantic.design.traceability.qualityAssurance.items.0'),
                    t('semantic.design.traceability.qualityAssurance.items.1'),
                    t('semantic.design.traceability.qualityAssurance.items.2'),
                    t('semantic.design.traceability.qualityAssurance.items.3')
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
              "title": t('semantic.design.aiAgent.title'),
              "description": t('semantic.design.aiAgent.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "design-generation",
                  "title": t('semantic.design.aiAgent.generation.title'),
                  "backgroundColor": "bg-yellow-50",
                  "borderColor": "border-yellow-200",
                  "items": [
                    t('semantic.design.aiAgent.generation.items.0'),
                    t('semantic.design.aiAgent.generation.items.1'),
                    t('semantic.design.aiAgent.generation.items.2'),
                    t('semantic.design.aiAgent.generation.items.3')
                  ]
                },
                {
                  "id": "consistency-maintenance",
                  "title": t('semantic.design.aiAgent.consistency.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('semantic.design.aiAgent.consistency.items.0'),
                    t('semantic.design.aiAgent.consistency.items.1'),
                    t('semantic.design.aiAgent.consistency.items.2'),
                    t('semantic.design.aiAgent.consistency.items.3')
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
              "title": t('semantic.design.benefits.title'),
              "backgroundColor": "from-blue-50 to-purple-50",
              "borderColor": "border-blue-500",
              "categories": [
                {
                  "title": t('semantic.design.benefits.strategic.title'),
                  "color": "blue",
                  "benefits": [
                    t('semantic.design.benefits.strategic.items.0'),
                    t('semantic.design.benefits.strategic.items.1'),
                    t('semantic.design.benefits.strategic.items.2'),
                    t('semantic.design.benefits.strategic.items.3')
                  ]
                },
                {
                  "title": t('semantic.design.benefits.operational.title'),
                  "color": "purple",
                  "benefits": [
                    t('semantic.design.benefits.operational.items.0'),
                    t('semantic.design.benefits.operational.items.1'),
                    t('semantic.design.benefits.operational.items.2'),
                    t('semantic.design.benefits.operational.items.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-11",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.design.cta.title'),
              "description": t('semantic.design.cta.description'),
              "buttonText": t('semantic.design.cta.buttonText'),
              "backgroundGradient": "from-blue-600 to-purple-600",
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
      config={designOntologyConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default DesignOntologyNew;
