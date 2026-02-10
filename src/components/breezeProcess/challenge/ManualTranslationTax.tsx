import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface ManualTranslationTaxNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ManualTranslationTaxNew: React.FC<ManualTranslationTaxNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "manual-translation-tax",
    "title": t('challenge.manualTranslationTax.configTitle'),
    "slides": [
      {
        "id": "manual-translation-tax-main",
        "sections": [
          {
            "id": "header",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.manualTranslationTax.header.title'),
              "subtitle": t('challenge.manualTranslationTax.header.subtitle'),
              "variant": "header",
              "titleGradient": "from-error to-warning",
              "description": t('challenge.manualTranslationTax.header.description'),
              "alignment": "center"
            }
          },
          {
            "id": "core-problem",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.manualTranslationTax.coreProblem.title'),
              "description": t('challenge.manualTranslationTax.coreProblem.description'),
              "variant": "detailed-list",
              "layout": "grid-2",
              "containerStyle": "gradient",
              "backgroundColor": "from-error-50 to-brand-orange-50",
              "borderColor": "border-error-500",
              "items": [
                {
                  "id": "interpretation",
                  "title": t('challenge.manualTranslationTax.coreProblem.items.interpretation.title'),
                  "description": t('challenge.manualTranslationTax.coreProblem.items.interpretation.description'),
                  "backgroundColor": "bg-white",
                  "titleColor": "text-error-800",
                  "textColor": "text-error-700"
                },
                {
                  "id": "ambiguity",
                  "title": t('challenge.manualTranslationTax.coreProblem.items.ambiguity.title'),
                  "description": t('challenge.manualTranslationTax.coreProblem.items.ambiguity.description'),
                  "backgroundColor": "bg-white",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-700"
                },
                {
                  "id": "traceability",
                  "title": t('challenge.manualTranslationTax.coreProblem.items.traceability.title'),
                  "description": t('challenge.manualTranslationTax.coreProblem.items.traceability.description'),
                  "backgroundColor": "bg-white",
                  "titleColor": "text-error-800",
                  "textColor": "text-error-700"
                },
                {
                  "id": "change-propagation",
                  "title": t('challenge.manualTranslationTax.coreProblem.items.changePropagation.title'),
                  "description": t('challenge.manualTranslationTax.coreProblem.items.changePropagation.description'),
                  "backgroundColor": "bg-white",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-700"
                }
              ]
            }
          },
          {
            "id": "translation-process",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.manualTranslationTax.translationProcess.title'),
              "variant": "process-visualization",
              "items": [],
              "steps": [
                {
                  "id": "step1",
                  "number": 1,
                  "title": t('challenge.manualTranslationTax.translationProcess.steps.step1.title'),
                  "description": t('challenge.manualTranslationTax.translationProcess.steps.step1.description'),
                  "backgroundColor": "bg-brand-blue-50",
                  "circleColor": "bg-brand-blue-500",
                  "textColor": "text-gray-800",
                  "icon": "📄"
                },
                {
                  "id": "step2",
                  "number": 2,
                  "title": t('challenge.manualTranslationTax.translationProcess.steps.step2.title'),
                  "description": t('challenge.manualTranslationTax.translationProcess.steps.step2.description'),
                  "backgroundColor": "bg-warning-50",
                  "circleColor": "bg-warning-500",
                  "textColor": "text-gray-800",
                  "icon": "📋"
                },
                {
                  "id": "step3",
                  "number": 3,
                  "title": t('challenge.manualTranslationTax.translationProcess.steps.step3.title'),
                  "description": t('challenge.manualTranslationTax.translationProcess.steps.step3.description'),
                  "backgroundColor": "bg-error-50",
                  "circleColor": "bg-error-500",
                  "textColor": "text-error-800",
                  "icon": "⚠️",
                  "isHighlight": true,
                  "borderColor": "border-error-200"
                }
              ],
              "multipleOutcomes": {
                "title": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.title'),
                "outcomes": [
                  {
                    "id": "impl-a",
                    "title": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.outcomes.implA.title'),
                    "subtitle": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.outcomes.implA.subtitle'),
                    "letter": "A",
                    "backgroundColor": "bg-warning-50",
                    "borderColor": "border-warning-200",
                    "textColor": "text-warning-800"
                  },
                  {
                    "id": "impl-b",
                    "title": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.outcomes.implB.title'),
                    "subtitle": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.outcomes.implB.subtitle'),
                    "letter": "B",
                    "backgroundColor": "bg-warning-50",
                    "borderColor": "border-warning-200",
                    "textColor": "text-warning-800"
                  },
                  {
                    "id": "impl-c",
                    "title": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.outcomes.implC.title'),
                    "subtitle": t('challenge.manualTranslationTax.translationProcess.multipleOutcomes.outcomes.implC.subtitle'),
                    "letter": "C",
                    "backgroundColor": "bg-warning-50",
                    "borderColor": "border-warning-200",
                    "textColor": "text-warning-800"
                  }
                ]
              },
              "finalResult": {
                "title": t('challenge.manualTranslationTax.translationProcess.finalResult.title'),
                "description": t('challenge.manualTranslationTax.translationProcess.finalResult.description'),
                "backgroundColor": "bg-gray-900",
                "textColor": "text-white",
                "icon": "💀"
              }
            }
          },
          {
            "id": "devastating-impact",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.manualTranslationTax.devastatingImpact.title'),
              "items": [
                {
                  "id": "functional-success",
                  "title": t('challenge.manualTranslationTax.devastatingImpact.items.functionalSuccess.title'),
                  "description": t('challenge.manualTranslationTax.devastatingImpact.items.functionalSuccess.description'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-700",
                  "icon": "✅"
                },
                {
                  "id": "arch-design-failure",
                  "title": t('challenge.manualTranslationTax.devastatingImpact.items.archDesignFailure.title'),
                  "description": t('challenge.manualTranslationTax.devastatingImpact.items.archDesignFailure.description'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "titleColor": "text-error-800",
                  "textColor": "text-error-700",
                  "icon": "❌"
                }
              ],
              "timeline": {
                "title": t('challenge.manualTranslationTax.devastatingImpact.timeline.title'),
                "description": t('challenge.manualTranslationTax.devastatingImpact.timeline.description'),
                "backgroundColor": "bg-gray-50",
                "items": [
                  {
                    "id": "year1",
                    "title": t('challenge.manualTranslationTax.devastatingImpact.timeline.items.year1.title'),
                    "description": t('challenge.manualTranslationTax.devastatingImpact.timeline.items.year1.description'),
                    "backgroundColor": "bg-brand-blue-100",
                    "textColor": "text-secondary-800"
                  },
                  {
                    "id": "year3",
                    "title": t('challenge.manualTranslationTax.devastatingImpact.timeline.items.year3.title'),
                    "description": t('challenge.manualTranslationTax.devastatingImpact.timeline.items.year3.description'),
                    "backgroundColor": "bg-warning-100",
                    "textColor": "text-warning-800"
                  },
                  {
                    "id": "year5",
                    "title": t('challenge.manualTranslationTax.devastatingImpact.timeline.items.year5.title'),
                    "description": t('challenge.manualTranslationTax.devastatingImpact.timeline.items.year5.description'),
                    "backgroundColor": "bg-error-100",
                    "textColor": "text-error-800"
                  }
                ]
              },
              "variant": "content",
              "layout": "comparison"
            }
          },
          {
            "id": "flexibleGrid-section-1",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.manualTranslationTax.impossibleEconomics.title'),
              "description": t('challenge.manualTranslationTax.impossibleEconomics.description'),
              "backgroundColor": "from-gray-50 to-brand-blue-50",
              "borderColor": "border-l-4 border-secondary-500",
              "variant": "detailed-list",
              "items": [
                {
                  "id": "analysis-paralysis",
                  "title": t('challenge.manualTranslationTax.impossibleEconomics.items.analysisParalysis.title'),
                  "description": t('challenge.manualTranslationTax.impossibleEconomics.items.analysisParalysis.description'),
                  "bulletColor": "bg-brand-blue-500"
                },
                {
                  "id": "implementation-uncertainty",
                  "title": t('challenge.manualTranslationTax.impossibleEconomics.items.implementationUncertainty.title'),
                  "description": t('challenge.manualTranslationTax.impossibleEconomics.items.implementationUncertainty.description'),
                  "bulletColor": "bg-brand-purple-500"
                },
                {
                  "id": "risk-aversion",
                  "title": t('challenge.manualTranslationTax.impossibleEconomics.items.riskAversion.title'),
                  "description": t('challenge.manualTranslationTax.impossibleEconomics.items.riskAversion.description'),
                  "bulletColor": "bg-warning-500"
                },
                {
                  "id": "resource-competition",
                  "title": t('challenge.manualTranslationTax.impossibleEconomics.items.resourceCompetition.title'),
                  "description": t('challenge.manualTranslationTax.impossibleEconomics.items.resourceCompetition.description'),
                  "bulletColor": "bg-error-500"
                }
              ],
              "layout": "grid-2",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-2",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.manualTranslationTax.cta.title'),
              "description": t('challenge.manualTranslationTax.cta.description'),
              "conclusion": {
                "title": t('challenge.manualTranslationTax.cta.conclusion.title'),
                "description": t('challenge.manualTranslationTax.cta.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('challenge.manualTranslationTax.cta.buttonText'),
              "backgroundGradient": "from-error to-warning",
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

export default ManualTranslationTaxNew;
