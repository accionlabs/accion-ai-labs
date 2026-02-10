import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import fourOntologies from '../assets/fourOntologies.svg';
import ontologyConnectionFlow from '../assets/ontologyConnectionFlow.svg';
import implementationHierarchy from '../assets/implementationHierarchy.svg';
import fourOntologiesJa from '../assets/ja/fourOntologies.svg';
import ontologyConnectionFlowJa from '../assets/ja/ontologyConnectionFlow.svg';
import implementationHierarchyJa from '../assets/ja/implementationHierarchy.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface SemanticModelOverviewNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const SemanticModelOverviewNew: React.FC<SemanticModelOverviewNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const semanticModelOverviewConfig: TopicConfig = React.useMemo(() => ({
    "id": "semantic-model-overview",
    "title": t('semantic.overview.header.title'),
    "slides": [
      {
        "id": "semantic-model-overview-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.overview.header.prominentTitle'),
              "subtitle": t('semantic.overview.header.prominentSubtitle'),
              "titleGradient": "from-purple-600 via-blue-600 to-green-600",
              "description": t('semantic.overview.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.overview.corePrinciples.title'),
              "backgroundColor": "from-purple-50 to-blue-50",
              "borderColor": "border-purple-500",
              "categories": [
                {
                  "title": t('semantic.overview.corePrinciples.foundation.title'),
                  "color": "purple",
                  "benefits": [
                    t('semantic.overview.corePrinciples.foundation.benefits.0'),
                    t('semantic.overview.corePrinciples.foundation.benefits.1')
                  ]
                },
                {
                  "title": t('semantic.overview.corePrinciples.operational.title'),
                  "color": "blue",
                  "benefits": [
                    t('semantic.overview.corePrinciples.operational.benefits.0'),
                    t('semantic.overview.corePrinciples.operational.benefits.1')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.overview.fourOntologies.title'),
              "description": t('semantic.overview.fourOntologies.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50",
              "items": [
                {
                  "id": "four-ontologies-diagram",
                  "title": t('semantic.overview.fourOntologies.diagramTitle'),
                  "description": t('semantic.overview.fourOntologies.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(fourOntologies, fourOntologiesJa),
                    "alt": t('semantic.overview.fourOntologies.diagramAlt'),
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
            "id": "flexibleGrid-section-3b",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.overview.ontologyDetails.title'),
              "description": t('semantic.overview.ontologyDetails.description'),
              "layout": "grid-2",
              "variant": "cards",
              "items": [
                {
                  "id": "functional",
                  "title": t('semantic.overview.ontologyDetails.functional.title'),
                  "subtitle": t('semantic.overview.ontologyDetails.functional.subtitle'),
                  "description": t('semantic.overview.ontologyDetails.functional.description'),
                  "icon": "🎯",
                  "backgroundColor": "bg-purple-100",
                  "borderColor": "border-purple-500",
                  "color": "text-purple-700",
                  "example": t('semantic.overview.ontologyDetails.functional.example'),
                  "isClickable": true
                },
                {
                  "id": "design",
                  "title": t('semantic.overview.ontologyDetails.design.title'),
                  "subtitle": t('semantic.overview.ontologyDetails.design.subtitle'),
                  "description": t('semantic.overview.ontologyDetails.design.description'),
                  "icon": "🎨",
                  "backgroundColor": "bg-blue-100",
                  "borderColor": "border-blue-500",
                  "color": "text-blue-700",
                  "example": t('semantic.overview.ontologyDetails.design.example'),
                  "isClickable": true
                },
                {
                  "id": "architecture",
                  "title": t('semantic.overview.ontologyDetails.architecture.title'),
                  "subtitle": t('semantic.overview.ontologyDetails.architecture.subtitle'),
                  "description": t('semantic.overview.ontologyDetails.architecture.description'),
                  "icon": "🏗️",
                  "backgroundColor": "bg-green-100",
                  "borderColor": "border-green-500",
                  "color": "text-green-700",
                  "example": t('semantic.overview.ontologyDetails.architecture.example'),
                  "isClickable": true
                },
                {
                  "id": "code",
                  "title": t('semantic.overview.ontologyDetails.code.title'),
                  "subtitle": t('semantic.overview.ontologyDetails.code.subtitle'),
                  "description": t('semantic.overview.ontologyDetails.code.description'),
                  "icon": "⚙️",
                  "backgroundColor": "bg-orange-100",
                  "borderColor": "border-orange-500",
                  "color": "text-orange-700",
                  "example": t('semantic.overview.ontologyDetails.code.example'),
                  "isClickable": true
                }
              ]
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.overview.ontologyConnection.title'),
              "description": t('semantic.overview.ontologyConnection.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50",
              "items": [
                {
                  "id": "ontology-connection-flow-diagram",
                  "title": t('semantic.overview.ontologyConnection.diagramTitle'),
                  "description": t('semantic.overview.ontologyConnection.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(ontologyConnectionFlow, ontologyConnectionFlowJa),
                    "alt": t('semantic.overview.ontologyConnection.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 700 400",
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
              "title": t('semantic.overview.implementationHierarchy.title'),
              "description": t('semantic.overview.implementationHierarchy.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-orange-50",
              "items": [
                {
                  "id": "implementation-hierarchy-diagram",
                  "title": t('semantic.overview.implementationHierarchy.diagramTitle'),
                  "description": t('semantic.overview.implementationHierarchy.diagramDescription'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(implementationHierarchy, implementationHierarchyJa),
                    "alt": t('semantic.overview.implementationHierarchy.diagramAlt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 739.76 450",
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
            "id": "flexibleGrid-section-5b",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.overview.hierarchySummary.title'),
              "description": t('semantic.overview.hierarchySummary.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "what-users-want",
                  "title": t('semantic.overview.hierarchySummary.whatUsersWant.title'),
                  "description": t('semantic.overview.hierarchySummary.whatUsersWant.description'),
                  "backgroundColor": "bg-purple-50",
                  "color": "text-purple-800"
                },
                {
                  "id": "how-it-works",
                  "title": t('semantic.overview.hierarchySummary.howItWorks.title'),
                  "description": t('semantic.overview.hierarchySummary.howItWorks.description'),
                  "backgroundColor": "bg-blue-50",
                  "color": "text-blue-800"
                },
                {
                  "id": "what-runs",
                  "title": t('semantic.overview.hierarchySummary.whatRuns.title'),
                  "description": t('semantic.overview.hierarchySummary.whatRuns.description'),
                  "backgroundColor": "bg-orange-50",
                  "color": "text-orange-800"
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-6",
            "type": "flexibleGrid",
            "content": {
              "title": t('semantic.overview.governanceBenefits.title'),
              "description": t('semantic.overview.governanceBenefits.description'),
              "backgroundColor": "from-gray-50 to-blue-50",
              "borderColor": "border-blue-500",
              "categories": [
                {
                  "title": t('semantic.overview.governanceBenefits.strategic.title'),
                  "color": "blue",
                  "benefits": [
                    t('semantic.overview.governanceBenefits.strategic.benefits.0'),
                    t('semantic.overview.governanceBenefits.strategic.benefits.1'),
                    t('semantic.overview.governanceBenefits.strategic.benefits.2'),
                    t('semantic.overview.governanceBenefits.strategic.benefits.3')
                  ]
                },
                {
                  "title": t('semantic.overview.governanceBenefits.analytics.title'),
                  "color": "green",
                  "benefits": [
                    t('semantic.overview.governanceBenefits.analytics.benefits.0'),
                    t('semantic.overview.governanceBenefits.analytics.benefits.1'),
                    t('semantic.overview.governanceBenefits.analytics.benefits.2'),
                    t('semantic.overview.governanceBenefits.analytics.benefits.3')
                  ]
                },
                {
                  "title": t('semantic.overview.governanceBenefits.quality.title'),
                  "color": "purple",
                  "benefits": [
                    t('semantic.overview.governanceBenefits.quality.benefits.0'),
                    t('semantic.overview.governanceBenefits.quality.benefits.1'),
                    t('semantic.overview.governanceBenefits.quality.benefits.2'),
                    t('semantic.overview.governanceBenefits.quality.benefits.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-7",
            "type": "prominentDisplay",
            "content": {
              "title": t('semantic.overview.cta.title'),
              "description": t('semantic.overview.cta.description'),
              "backgroundGradient": "from-purple-600 via-blue-600 to-green-600",
              "textColor": "text-white",
              "variant": "cta",
              "buttonText": t('semantic.overview.cta.buttonText')
            }
          }
        ]
      }
    ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [t, l]);

  return (
    <TopicLayout
      config={semanticModelOverviewConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default SemanticModelOverviewNew;
