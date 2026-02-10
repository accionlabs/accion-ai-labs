import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface BreezeBreakthroughNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const BreezeBreakthroughNew: React.FC<BreezeBreakthroughNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "breeze-breakthrough",
    "title": t('challenge.breakthrough.configTitle'),
    "slides": [
      {
        "id": "breeze-breakthrough-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.breakthrough.header.title'),
              "subtitle": t('challenge.breakthrough.header.subtitle'),
              "titleGradient": "from-secondary via-brand-purple-600 to-success",
              "description": t('challenge.breakthrough.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.breakthrough.revolutionaryFoundation.title'),
              "description": t('challenge.breakthrough.revolutionaryFoundation.description'),
              "backgroundColor": "bg-gradient-to-r from-brand-blue-50 via-brand-purple-50 to-fresh-green-50",
              "borderColor": "border-l-4 border-secondary-500",
              "innerBackgroundColor": "bg-white/80 backdrop-blur-sm",
              "variant": "detailed-list",
              "items": [
                {
                  "id": "not-documentation",
                  "title": t('challenge.breakthrough.revolutionaryFoundation.items.notDocumentation.title'),
                  "description": t('challenge.breakthrough.revolutionaryFoundation.items.notDocumentation.description'),
                  "bulletColor": "bg-transparent"
                }
              ],
              "containerStyle": "gradient"
            }
          },
          {
            "id": "transformation-comparison",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.breakthrough.transformation.title'),
              "layout": "grid-2",
              "variant": "process-flow",
              "items": [
                {
                  "id": "traditional-process",
                  "title": t('challenge.breakthrough.transformation.items.traditionalProcess.title'),
                  "titleColor": "text-error-700",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "📄",
                      "title": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.businessReqs.title'),
                      "description": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.businessReqs.description'),
                      "backgroundColor": "bg-error-50 border-error-200",
                      "iconColor": "bg-error-500",
                      "titleColor": "text-error-800",
                      "descriptionColor": "text-error-600"
                    },
                    {
                      "icon": "🤔",
                      "title": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.humanInterp.title'),
                      "description": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.humanInterp.description'),
                      "backgroundColor": "bg-brand-orange-50 border-brand-orange-200",
                      "iconColor": "bg-brand-orange-500",
                      "titleColor": "text-brand-orange-800",
                      "descriptionColor": "text-brand-orange-600"
                    },
                    {
                      "icon": "⚠️",
                      "title": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.implGaps.title'),
                      "description": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.implGaps.description'),
                      "backgroundColor": "bg-warning-50 border-warning-200",
                      "iconColor": "bg-warning-500",
                      "titleColor": "text-warning-800",
                      "descriptionColor": "text-warning-600"
                    },
                    {
                      "icon": "💀",
                      "title": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.techDebt.title'),
                      "description": t('challenge.breakthrough.transformation.items.traditionalProcess.steps.techDebt.description'),
                      "backgroundColor": "bg-gray-900 text-white",
                      "iconColor": "bg-error-600",
                      "titleColor": "text-error-300",
                      "descriptionColor": "text-gray-300"
                    }
                  ]
                },
                {
                  "id": "breeze-ai-process",
                  "title": t('challenge.breakthrough.transformation.items.breezeProcess.title'),
                  "titleColor": "text-success-700",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "📋",
                      "title": t('challenge.breakthrough.transformation.items.breezeProcess.steps.businessReqs.title'),
                      "description": t('challenge.breakthrough.transformation.items.breezeProcess.steps.businessReqs.description'),
                      "backgroundColor": "bg-brand-blue-50 border-secondary-200",
                      "iconColor": "bg-brand-blue-500",
                      "titleColor": "text-secondary-800",
                      "descriptionColor": "text-secondary-600"
                    },
                    {
                      "icon": "🧠",
                      "title": t('challenge.breakthrough.transformation.items.breezeProcess.steps.knowledgeGraphs.title'),
                      "description": t('challenge.breakthrough.transformation.items.breezeProcess.steps.knowledgeGraphs.description'),
                      "backgroundColor": "bg-success-50 border-success-200",
                      "iconColor": "bg-success-500",
                      "titleColor": "text-success-800",
                      "descriptionColor": "text-success-600"
                    },
                    {
                      "icon": "🤖",
                      "title": t('challenge.breakthrough.transformation.items.breezeProcess.steps.aiAgent.title'),
                      "description": t('challenge.breakthrough.transformation.items.breezeProcess.steps.aiAgent.description'),
                      "backgroundColor": "bg-brand-purple-50 border-brand-purple-200",
                      "iconColor": "bg-brand-purple-500",
                      "titleColor": "text-brand-purple-800",
                      "descriptionColor": "text-brand-purple-600"
                    },
                    {
                      "icon": "✨",
                      "title": t('challenge.breakthrough.transformation.items.breezeProcess.steps.highQuality.title'),
                      "description": t('challenge.breakthrough.transformation.items.breezeProcess.steps.highQuality.description'),
                      "backgroundColor": "bg-success-100 border-success-300",
                      "iconColor": "bg-success-600",
                      "titleColor": "text-success-800",
                      "descriptionColor": "text-success-600"
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.breakthrough.eliminatingTax.title'),
              "columns": 2,
              "items": [
                {
                  "id": "zero-interpretation",
                  "title": t('challenge.breakthrough.eliminatingTax.items.zeroInterpretation.title'),
                  "description": t('challenge.breakthrough.eliminatingTax.items.zeroInterpretation.description'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-700",
                  "iconColor": "bg-success-500"
                },
                {
                  "id": "unambiguous-specs",
                  "title": t('challenge.breakthrough.eliminatingTax.items.unambiguousSpecs.title'),
                  "description": t('challenge.breakthrough.eliminatingTax.items.unambiguousSpecs.description'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-200",
                  "titleColor": "text-secondary-800",
                  "textColor": "text-secondary-700",
                  "iconColor": "bg-brand-blue-500"
                },
                {
                  "id": "perfect-traceability",
                  "title": t('challenge.breakthrough.eliminatingTax.items.perfectTraceability.title'),
                  "description": t('challenge.breakthrough.eliminatingTax.items.perfectTraceability.description'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-200",
                  "titleColor": "text-brand-purple-800",
                  "textColor": "text-brand-purple-700",
                  "iconColor": "bg-brand-purple-500"
                },
                {
                  "id": "automatic-propagation",
                  "title": t('challenge.breakthrough.eliminatingTax.items.automaticPropagation.title'),
                  "description": t('challenge.breakthrough.eliminatingTax.items.automaticPropagation.description'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-700",
                  "iconColor": "bg-warning-500"
                }
              ],
              "variant": "checklist"
            }
          },
          {
            "id": "critical-difference",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.breakthrough.criticalDifference.title'),
              "items": [
                {
                  "id": "traditional-docs",
                  "title": t('challenge.breakthrough.criticalDifference.items.traditionalDocs.title'),
                  "description": t('challenge.breakthrough.criticalDifference.items.traditionalDocs.description'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "titleColor": "text-error-800",
                  "textColor": "text-error-700",
                  "icon": "❌"
                },
                {
                  "id": "knowledge-graphs-adv",
                  "title": t('challenge.breakthrough.criticalDifference.items.knowledgeGraphs.title'),
                  "description": t('challenge.breakthrough.criticalDifference.items.knowledgeGraphs.description'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-700",
                  "icon": "✅"
                }
              ],
              "timeline": {
                "title": t('challenge.breakthrough.criticalDifference.timeline.title'),
                "description": t('challenge.breakthrough.criticalDifference.timeline.description'),
                "backgroundColor": "bg-white/80 backdrop-blur-sm",
                "items": []
              },
              "variant": "content",
              "layout": "comparison"
            }
          },
          {
            "id": "four-ontology-framework",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.breakthrough.fourOntology.title'),
              "description": t('challenge.breakthrough.fourOntology.description'),
              "layout": "grid-2",
              "variant": "content",
              "items": [
                {
                  "id": "functional",
                  "title": t('challenge.breakthrough.fourOntology.items.functional.title'),
                  "description": t('challenge.breakthrough.fourOntology.items.functional.description'),
                  "icon": "🎯",
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-t-4 border-brand-purple-500",
                  "titleColor": "text-brand-purple-800",
                  "textColor": "text-brand-purple-700",
                  "iconBackgroundColor": "bg-brand-purple-100"
                },
                {
                  "id": "architecture",
                  "title": t('challenge.breakthrough.fourOntology.items.architecture.title'),
                  "description": t('challenge.breakthrough.fourOntology.items.architecture.description'),
                  "icon": "🏗️",
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-t-4 border-success-500",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-700",
                  "iconBackgroundColor": "bg-success-100"
                },
                {
                  "id": "design",
                  "title": t('challenge.breakthrough.fourOntology.items.design.title'),
                  "description": t('challenge.breakthrough.fourOntology.items.design.description'),
                  "icon": "🎨",
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-t-4 border-secondary-500",
                  "titleColor": "text-secondary-800",
                  "textColor": "text-secondary-700",
                  "iconBackgroundColor": "bg-brand-blue-100"
                },
                {
                  "id": "code",
                  "title": t('challenge.breakthrough.fourOntology.items.code.title'),
                  "description": t('challenge.breakthrough.fourOntology.items.code.description'),
                  "icon": "⚙️",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-t-4 border-warning-500",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-700",
                  "iconBackgroundColor": "bg-warning-100"
                }
              ]
            }
          },
          {
            "id": "game-changer",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.breakthrough.gameChanger.title'),
              "description": t('challenge.breakthrough.gameChanger.description'),
              "backgroundGradient": "bg-gradient-to-r from-secondary via-brand-purple-600 to-success",
              "textColor": "text-white",
              "items": [
                {
                  "id": "zero-ambiguity",
                  "title": t('challenge.breakthrough.gameChanger.items.zeroAmbiguity.title'),
                  "description": t('challenge.breakthrough.gameChanger.items.zeroAmbiguity.description')
                },
                {
                  "id": "perfect-traceability-benefit",
                  "title": t('challenge.breakthrough.gameChanger.items.perfectTraceability.title'),
                  "description": t('challenge.breakthrough.gameChanger.items.perfectTraceability.description')
                },
                {
                  "id": "automatic-evolution",
                  "title": t('challenge.breakthrough.gameChanger.items.automaticEvolution.title'),
                  "description": t('challenge.breakthrough.gameChanger.items.automaticEvolution.description')
                }
              ],
              "conclusion": {
                "title": t('challenge.breakthrough.gameChanger.conclusion.title'),
                "description": t('challenge.breakthrough.gameChanger.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('challenge.breakthrough.gameChanger.buttonText'),
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

export default BreezeBreakthroughNew;
