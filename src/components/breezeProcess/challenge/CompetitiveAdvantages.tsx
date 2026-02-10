import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface CompetitiveAdvantagesNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CompetitiveAdvantagesNew: React.FC<CompetitiveAdvantagesNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "competitive-advantages",
    "title": t('challenge.competitiveAdvantages.configTitle'),
    "slides": [
      {
        "id": "competitive-advantages-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.competitiveAdvantages.header.title'),
              "titleGradient": "from-success-600 to-secondary-600",
              "description": t('challenge.competitiveAdvantages.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.competitiveAdvantages.limitationOfStandard.title'),
              "description": t('challenge.competitiveAdvantages.limitationOfStandard.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "what-they-cant-do",
                  "title": t('challenge.competitiveAdvantages.limitationOfStandard.items.whatTheyCantDo.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.whatTheyCantDo.items.0'),
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.whatTheyCantDo.items.1'),
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.whatTheyCantDo.items.2'),
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.whatTheyCantDo.items.3'),
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.whatTheyCantDo.items.4')
                  ]
                },
                {
                  "id": "practical-implications",
                  "title": t('challenge.competitiveAdvantages.limitationOfStandard.items.practicalImplications.title'),
                  "backgroundColor": "bg-gray-50",
                  "borderColor": "border-gray-200",
                  "items": [
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.practicalImplications.items.0'),
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.practicalImplications.items.1'),
                    t('challenge.competitiveAdvantages.limitationOfStandard.items.practicalImplications.items.2')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "prominentDisplay-section-3",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.competitiveAdvantages.semanticAdvantage.title'),
              "backgroundGradient": "from-fresh-green-50 to-brand-blue-50",
              "borderColor": "border-fresh-green-500",
              "description": t('challenge.competitiveAdvantages.semanticAdvantage.description'),
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.competitiveAdvantages.semanticModelIntegration.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "semantic-model-integration",
                  "title": t('challenge.competitiveAdvantages.semanticModelIntegration.items.semanticModel.title'),
                  "backgroundColor": "bg-fresh-green-50",
                  "borderColor": "border-fresh-green-200",
                  "items": [
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.semanticModel.items.0'),
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.semanticModel.items.1'),
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.semanticModel.items.2'),
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.semanticModel.items.3')
                  ]
                },
                {
                  "id": "contextual-code-generation",
                  "title": t('challenge.competitiveAdvantages.semanticModelIntegration.items.contextualCodeGen.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-brand-blue-200",
                  "items": [
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.contextualCodeGen.items.0'),
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.contextualCodeGen.items.1'),
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.contextualCodeGen.items.2'),
                    t('challenge.competitiveAdvantages.semanticModelIntegration.items.contextualCodeGen.items.3')
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
              "title": t('challenge.competitiveAdvantages.customAgentWorkflows.title'),
              "description": t('challenge.competitiveAdvantages.customAgentWorkflows.description'),
              "backgroundColor": "bg-white",
              "innerBackgroundColor": "bg-brand-purple-50",
              "borderColor": "border-brand-purple-200",
              "variant": "detailed-list",
              "items": [
                {
                  "id": "beyond-simple-generation",
                  "title": t('challenge.competitiveAdvantages.customAgentWorkflows.items.beyondSimple.title'),
                  "description": t('challenge.competitiveAdvantages.customAgentWorkflows.items.beyondSimple.description'),
                  "bulletColor": "bg-brand-purple-500"
                }
              ],
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-5b",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.competitiveAdvantages.patternCategories.title'),
              "layout": "grid-3",
              "variant": "content",
              "items": [
                {
                  "id": "business-logic-patterns",
                  "title": t('challenge.competitiveAdvantages.patternCategories.items.businessLogic.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-brand-purple-200",
                  "titleColor": "text-purple-800",
                  "textColor": "text-purple-600",
                  "items": [
                    t('challenge.competitiveAdvantages.patternCategories.items.businessLogic.items.0'),
                    t('challenge.competitiveAdvantages.patternCategories.items.businessLogic.items.1'),
                    t('challenge.competitiveAdvantages.patternCategories.items.businessLogic.items.2')
                  ]
                },
                {
                  "id": "architectural-implementation",
                  "title": t('challenge.competitiveAdvantages.patternCategories.items.architecturalImpl.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-brand-purple-200",
                  "titleColor": "text-purple-800",
                  "textColor": "text-purple-600",
                  "items": [
                    t('challenge.competitiveAdvantages.patternCategories.items.architecturalImpl.items.0'),
                    t('challenge.competitiveAdvantages.patternCategories.items.architecturalImpl.items.1'),
                    t('challenge.competitiveAdvantages.patternCategories.items.architecturalImpl.items.2')
                  ]
                },
                {
                  "id": "design-interaction-patterns",
                  "title": t('challenge.competitiveAdvantages.patternCategories.items.designInteraction.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-brand-purple-200",
                  "titleColor": "text-purple-800",
                  "textColor": "text-purple-600",
                  "items": [
                    t('challenge.competitiveAdvantages.patternCategories.items.designInteraction.items.0'),
                    t('challenge.competitiveAdvantages.patternCategories.items.designInteraction.items.1'),
                    t('challenge.competitiveAdvantages.patternCategories.items.designInteraction.items.2')
                  ]
                }
              ]
            }
          },
          {
            "id": "flexibleGrid-section-6",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.competitiveAdvantages.ecommerceExample.title'),
              "backgroundColor": "bg-brand-orange-50",
              "borderColor": "border-brand-orange-200",
              "layout": "grid-2",
              "variant": "content",
              "items": [
                {
                  "id": "standard-tool-approach",
                  "title": t('challenge.competitiveAdvantages.ecommerceExample.items.standardTool.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-brand-orange-200",
                  "titleColor": "text-orange-800",
                  "textColor": "text-orange-600",
                  "items": [
                    t('challenge.competitiveAdvantages.ecommerceExample.items.standardTool.items.0')
                  ]
                },
                {
                  "id": "breeze-approach",
                  "title": t('challenge.competitiveAdvantages.ecommerceExample.items.breezeApproach.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-brand-orange-200",
                  "titleColor": "text-orange-800",
                  "textColor": "text-orange-600",
                  "items": [
                    t('challenge.competitiveAdvantages.ecommerceExample.items.breezeApproach.items.0')
                  ]
                }
              ]
            }
          },
          {
            "id": "flexibleGrid-section-7",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.competitiveAdvantages.systematicQA.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "standard-tools-quality",
                  "title": t('challenge.competitiveAdvantages.systematicQA.items.standardTools.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('challenge.competitiveAdvantages.systematicQA.items.standardTools.items.0'),
                    t('challenge.competitiveAdvantages.systematicQA.items.standardTools.items.1'),
                    t('challenge.competitiveAdvantages.systematicQA.items.standardTools.items.2'),
                    t('challenge.competitiveAdvantages.systematicQA.items.standardTools.items.3'),
                    t('challenge.competitiveAdvantages.systematicQA.items.standardTools.items.4')
                  ]
                },
                {
                  "id": "breeze-integrated-quality",
                  "title": t('challenge.competitiveAdvantages.systematicQA.items.breezeQuality.title'),
                  "backgroundColor": "bg-fresh-green-50",
                  "borderColor": "border-fresh-green-200",
                  "items": [
                    t('challenge.competitiveAdvantages.systematicQA.items.breezeQuality.items.0'),
                    t('challenge.competitiveAdvantages.systematicQA.items.breezeQuality.items.1'),
                    t('challenge.competitiveAdvantages.systematicQA.items.breezeQuality.items.2'),
                    t('challenge.competitiveAdvantages.systematicQA.items.breezeQuality.items.3'),
                    t('challenge.competitiveAdvantages.systematicQA.items.breezeQuality.items.4')
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
              "title": t('challenge.competitiveAdvantages.qualityGap.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "quality-gap-problem",
                  "title": t('challenge.competitiveAdvantages.qualityGap.items.problem.title'),
                  "backgroundColor": "bg-brand-orange-50",
                  "borderColor": "border-brand-orange-200",
                  "items": [
                    t('challenge.competitiveAdvantages.qualityGap.items.problem.items.0')
                  ]
                },
                {
                  "id": "quality-integration-advantage",
                  "title": t('challenge.competitiveAdvantages.qualityGap.items.advantage.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-brand-blue-200",
                  "items": [
                    t('challenge.competitiveAdvantages.qualityGap.items.advantage.items.0')
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
              "title": t('challenge.competitiveAdvantages.evolutionaryCapability.title'),
              "description": t('challenge.competitiveAdvantages.evolutionaryCapability.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "standard-tools-static",
                  "title": t('challenge.competitiveAdvantages.evolutionaryCapability.items.standardStatic.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('challenge.competitiveAdvantages.evolutionaryCapability.items.standardStatic.items.0'),
                    t('challenge.competitiveAdvantages.evolutionaryCapability.items.standardStatic.items.1'),
                    t('challenge.competitiveAdvantages.evolutionaryCapability.items.standardStatic.items.2')
                  ]
                },
                {
                  "id": "breeze-dynamic-evolution",
                  "title": t('challenge.competitiveAdvantages.evolutionaryCapability.items.breezeDynamic.title'),
                  "backgroundColor": "bg-fresh-green-50",
                  "borderColor": "border-fresh-green-200",
                  "items": [
                    t('challenge.competitiveAdvantages.evolutionaryCapability.items.breezeDynamic.items.0'),
                    t('challenge.competitiveAdvantages.evolutionaryCapability.items.breezeDynamic.items.1'),
                    t('challenge.competitiveAdvantages.evolutionaryCapability.items.breezeDynamic.items.2')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "prominentDisplay-section-10",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.competitiveAdvantages.measurableROI.title'),
              "backgroundGradient": "from-brand-blue-50 to-brand-purple-50",
              "borderColor": "border-secondary-500",
              "description": t('challenge.competitiveAdvantages.measurableROI.description'),
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-11",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.competitiveAdvantages.roiComparison.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "standard-tools-roi",
                  "title": t('challenge.competitiveAdvantages.roiComparison.items.standardROI.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-brand-blue-200",
                  "items": [
                    t('challenge.competitiveAdvantages.roiComparison.items.standardROI.items.0'),
                    t('challenge.competitiveAdvantages.roiComparison.items.standardROI.items.1'),
                    t('challenge.competitiveAdvantages.roiComparison.items.standardROI.items.2'),
                    t('challenge.competitiveAdvantages.roiComparison.items.standardROI.items.3')
                  ]
                },
                {
                  "id": "breeze-comprehensive-roi",
                  "title": t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.title'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-200",
                  "items": [
                    t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.items.0'),
                    t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.items.1'),
                    t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.items.2'),
                    t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.items.3'),
                    t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.items.4'),
                    t('challenge.competitiveAdvantages.roiComparison.items.breezeROI.items.5')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "strategic-difference",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.competitiveAdvantages.strategicDifference.title'),
              "subtitle": t('challenge.competitiveAdvantages.strategicDifference.subtitle'),
              "backgroundGradient": "bg-gradient-to-r from-success-600 to-secondary-600",
              "textColor": "text-white",
              "columns": 3,
              "items": [
                {
                  "id": "organizational-intelligence",
                  "title": t('challenge.competitiveAdvantages.strategicDifference.items.orgIntelligence.title'),
                  "description": t('challenge.competitiveAdvantages.strategicDifference.items.orgIntelligence.description'),
                  "cardBackgroundColor": "bg-white/20"
                },
                {
                  "id": "systematic-quality",
                  "title": t('challenge.competitiveAdvantages.strategicDifference.items.systematicQuality.title'),
                  "description": t('challenge.competitiveAdvantages.strategicDifference.items.systematicQuality.description'),
                  "cardBackgroundColor": "bg-white/20"
                },
                {
                  "id": "continuous-evolution",
                  "title": t('challenge.competitiveAdvantages.strategicDifference.items.continuousEvolution.title'),
                  "description": t('challenge.competitiveAdvantages.strategicDifference.items.continuousEvolution.description'),
                  "cardBackgroundColor": "bg-white/20"
                }
              ],
              "ultimateResult": {
                "title": t('challenge.competitiveAdvantages.strategicDifference.ultimateResult.title'),
                "description": t('challenge.competitiveAdvantages.strategicDifference.ultimateResult.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('challenge.competitiveAdvantages.strategicDifference.buttonText'),
              "variant": "cta"
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

export default CompetitiveAdvantagesNew;
