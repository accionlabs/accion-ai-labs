import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface TraditionalApproachesNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const TraditionalApproachesNew: React.FC<TraditionalApproachesNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "traditional-approaches",
    "title": t('challenge.traditionalApproaches.configTitle'),
    "slides": [
      {
        "id": "traditional-approaches-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.traditionalApproaches.header.title'),
              "subtitle": t('challenge.traditionalApproaches.header.subtitle'),
              "titleGradient": "from-error to-brand-purple-600",
              "description": t('challenge.traditionalApproaches.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "waterfall-reality",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.traditionalApproaches.waterfallReality.title'),
              "layout": "grid-2",
              "variant": "process-flow",
              "items": [
                {
                  "id": "waterfall-process",
                  "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.title'),
                  "titleColor": "text-brand-blue-700",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "📋",
                      "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.highLevelReqs.title'),
                      "description": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.highLevelReqs.description'),
                      "backgroundColor": "bg-brand-blue-50 border-secondary",
                      "iconColor": "bg-secondary",
                      "titleColor": "text-secondary",
                      "descriptionColor": "text-brand-blue-600"
                    },
                    {
                      "icon": "🏗️",
                      "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.archGuidelines.title'),
                      "description": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.archGuidelines.description'),
                      "backgroundColor": "bg-success-50 border-success",
                      "iconColor": "bg-success",
                      "titleColor": "text-success-800",
                      "descriptionColor": "text-success-600"
                    },
                    {
                      "icon": "🎨",
                      "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.designSystems.title'),
                      "description": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.designSystems.description'),
                      "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                      "iconColor": "bg-brand-purple-600",
                      "titleColor": "text-brand-purple-800",
                      "descriptionColor": "text-brand-purple-600"
                    },
                    {
                      "icon": "📝",
                      "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.detailedSpecs.title'),
                      "description": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.detailedSpecs.description'),
                      "backgroundColor": "bg-warning-50 border-warning",
                      "iconColor": "bg-warning",
                      "titleColor": "text-warning-800",
                      "descriptionColor": "text-warning-600"
                    },
                    {
                      "icon": "💻",
                      "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.codeImpl.title'),
                      "description": t('challenge.traditionalApproaches.waterfallReality.items.waterfallProcess.steps.codeImpl.description'),
                      "backgroundColor": "bg-brand-blue-50 border-brand-blue-200",
                      "iconColor": "bg-brand-blue-500",
                      "titleColor": "text-brand-blue-800",
                      "descriptionColor": "text-brand-blue-600"
                    }
                  ]
                },
                {
                  "id": "waterfall-breakdown",
                  "title": t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.title'),
                  "titleColor": "text-error-700",
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error",
                  "description": t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.description'),
                  "items": [
                    t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.items.0'),
                    t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.items.1'),
                    t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.items.2'),
                    t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.items.3'),
                    t('challenge.traditionalApproaches.waterfallReality.items.waterfallBreakdown.items.4')
                  ]
                }
              ]
            }
          },
          {
            "id": "agile-paradox",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.traditionalApproaches.agileParadox.title'),
              "layout": "grid-2",
              "variant": "process-flow",
              "items": [
                {
                  "id": "agile-process",
                  "title": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.title'),
                  "titleColor": "text-success-700",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "📋",
                      "title": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.initialArch.title'),
                      "description": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.initialArch.description'),
                      "backgroundColor": "bg-brand-blue-50 border-secondary",
                      "iconColor": "bg-secondary",
                      "titleColor": "text-secondary",
                      "descriptionColor": "text-brand-blue-600"
                    },
                    {
                      "icon": "📚",
                      "title": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.userStories.title'),
                      "description": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.userStories.description'),
                      "backgroundColor": "bg-success-50 border-success",
                      "iconColor": "bg-success",
                      "titleColor": "text-success-800",
                      "descriptionColor": "text-success-600"
                    },
                    {
                      "icon": "🏃",
                      "title": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.sprintDev.title'),
                      "description": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.sprintDev.description'),
                      "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                      "iconColor": "bg-brand-purple-600",
                      "titleColor": "text-brand-purple-800",
                      "descriptionColor": "text-brand-purple-600"
                    },
                    {
                      "icon": "🔄",
                      "title": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.functionalEvolution.title'),
                      "description": t('challenge.traditionalApproaches.agileParadox.items.agileProcess.steps.functionalEvolution.description'),
                      "backgroundColor": "bg-fresh-green-50 border-fresh-green-200",
                      "iconColor": "bg-fresh-green-500",
                      "titleColor": "text-fresh-green-800",
                      "descriptionColor": "text-fresh-green-600"
                    }
                  ]
                },
                {
                  "id": "agile-breakdown",
                  "title": t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.title'),
                  "titleColor": "text-warning-700",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "description": t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.description'),
                  "items": [
                    t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.items.0'),
                    t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.items.1'),
                    t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.items.2'),
                    t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.items.3'),
                    t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.items.4'),
                    t('challenge.traditionalApproaches.agileParadox.items.agileBreakdown.items.5')
                  ]
                }
              ]
            }
          },
          {
            "id": "bdd-dilemma",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.traditionalApproaches.bddDilemma.title'),
              "description": t('challenge.traditionalApproaches.bddDilemma.description'),
              "layout": "grid-2",
              "variant": "process-flow",
              "items": [
                {
                  "id": "bdd-process",
                  "title": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.title'),
                  "titleColor": "text-success-700",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "📝",
                      "title": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.defineTests.title'),
                      "description": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.defineTests.description'),
                      "backgroundColor": "bg-success-50 border-success",
                      "iconColor": "bg-success",
                      "titleColor": "text-success-800",
                      "descriptionColor": "text-success-600"
                    },
                    {
                      "icon": "💻",
                      "title": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.implementStories.title'),
                      "description": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.implementStories.description'),
                      "backgroundColor": "bg-brand-blue-50 border-secondary",
                      "iconColor": "bg-secondary",
                      "titleColor": "text-secondary",
                      "descriptionColor": "text-brand-blue-600"
                    },
                    {
                      "icon": "🔗",
                      "title": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.createDrivers.title'),
                      "description": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.createDrivers.description'),
                      "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                      "iconColor": "bg-brand-purple-600",
                      "titleColor": "text-brand-purple-800",
                      "descriptionColor": "text-brand-purple-600"
                    },
                    {
                      "icon": "✅",
                      "title": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.executeTests.title'),
                      "description": t('challenge.traditionalApproaches.bddDilemma.items.bddProcess.steps.executeTests.description'),
                      "backgroundColor": "bg-fresh-green-50 border-fresh-green-200",
                      "iconColor": "bg-fresh-green-500",
                      "titleColor": "text-fresh-green-800",
                      "descriptionColor": "text-fresh-green-600"
                    }
                  ]
                },
                {
                  "id": "bdd-reality",
                  "title": t('challenge.traditionalApproaches.bddDilemma.items.bddReality.title'),
                  "titleColor": "text-error-700",
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error",
                  "description": t('challenge.traditionalApproaches.bddDilemma.items.bddReality.description'),
                  "items": [
                    t('challenge.traditionalApproaches.bddDilemma.items.bddReality.items.0'),
                    t('challenge.traditionalApproaches.bddDilemma.items.bddReality.items.1'),
                    t('challenge.traditionalApproaches.bddDilemma.items.bddReality.items.2'),
                    t('challenge.traditionalApproaches.bddDilemma.items.bddReality.items.3'),
                    t('challenge.traditionalApproaches.bddDilemma.items.bddReality.items.4'),
                    t('challenge.traditionalApproaches.bddDilemma.items.bddReality.items.5')
                  ]
                }
              ],
              "finalResult": {
                "title": t('challenge.traditionalApproaches.bddDilemma.finalResult.title'),
                "description": t('challenge.traditionalApproaches.bddDilemma.finalResult.description'),
                "backgroundColor": "bg-warning-50",
                "textColor": "text-warning-800",
                "icon": "💡"
              }
            }
          },
          {
            "id": "legacy-documentation-crisis",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.traditionalApproaches.legacyDocCrisis.title'),
              "icon": "📚",
              "description": t('challenge.traditionalApproaches.legacyDocCrisis.description'),
              "items": [
                {
                  "id": "missing-documentation",
                  "title": t('challenge.traditionalApproaches.legacyDocCrisis.items.missingDocs.title'),
                  "description": t('challenge.traditionalApproaches.legacyDocCrisis.items.missingDocs.description'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error",
                  "titleColor": "text-error-800",
                  "textColor": "text-error-700"
                },
                {
                  "id": "knowledge-erosion",
                  "title": t('challenge.traditionalApproaches.legacyDocCrisis.items.knowledgeErosion.title'),
                  "description": t('challenge.traditionalApproaches.legacyDocCrisis.items.knowledgeErosion.description'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-700"
                },
                {
                  "id": "evolution-without-documentation",
                  "title": t('challenge.traditionalApproaches.legacyDocCrisis.items.evolutionWithoutDocs.title'),
                  "description": t('challenge.traditionalApproaches.legacyDocCrisis.items.evolutionWithoutDocs.description'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-600",
                  "titleColor": "text-brand-purple-800",
                  "textColor": "text-brand-purple-700"
                },
                {
                  "id": "specification-time-warp",
                  "title": t('challenge.traditionalApproaches.legacyDocCrisis.items.specTimeWarp.title'),
                  "description": t('challenge.traditionalApproaches.legacyDocCrisis.items.specTimeWarp.description'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary",
                  "titleColor": "text-secondary",
                  "textColor": "text-brand-blue-700"
                }
              ],
              "reverseEngineeringSection": {
                "title": t('challenge.traditionalApproaches.legacyDocCrisis.reverseEngineering.title'),
                "description": t('challenge.traditionalApproaches.legacyDocCrisis.reverseEngineering.description'),
                "backgroundColor": "bg-gray-900",
                "textColor": "text-white",
                "challenge": {
                  "title": t('challenge.traditionalApproaches.legacyDocCrisis.reverseEngineering.challenge.title'),
                  "description": t('challenge.traditionalApproaches.legacyDocCrisis.reverseEngineering.challenge.description'),
                  "backgroundColor": "bg-error-900/50",
                  "borderColor": "border-error",
                  "textColor": "text-error-200"
                }
              },
              "viciousCycle": {
                "title": t('challenge.traditionalApproaches.legacyDocCrisis.viciousCycle.title'),
                "description": t('challenge.traditionalApproaches.legacyDocCrisis.viciousCycle.description'),
                "backgroundColor": "bg-error-50",
                "borderColor": "border-l-4 border-error",
                "titleColor": "text-error-800",
                "textColor": "text-error-700"
              },
              "variant": "detailed-list",
              "layout": "legacy-analysis"
            }
          },
          {
            "id": "systemic-failure",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.traditionalApproaches.systemicFailure.title'),
              "description": t('challenge.traditionalApproaches.systemicFailure.description'),
              "backgroundGradient": "bg-gradient-to-r from-error to-brand-purple-600",
              "textColor": "text-white",
              "items": [
                {
                  "id": "waterfall",
                  "title": t('challenge.traditionalApproaches.systemicFailure.items.waterfall.title'),
                  "description": t('challenge.traditionalApproaches.systemicFailure.items.waterfall.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "agile",
                  "title": t('challenge.traditionalApproaches.systemicFailure.items.agile.title'),
                  "description": t('challenge.traditionalApproaches.systemicFailure.items.agile.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "bdd",
                  "title": t('challenge.traditionalApproaches.systemicFailure.items.bdd.title'),
                  "description": t('challenge.traditionalApproaches.systemicFailure.items.bdd.description'),
                  "backgroundColor": "bg-white/20"
                }
              ],
              "conclusion": {
                "title": t('challenge.traditionalApproaches.systemicFailure.conclusion.title'),
                "description": t('challenge.traditionalApproaches.systemicFailure.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('challenge.traditionalApproaches.systemicFailure.buttonText'),
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

export default TraditionalApproachesNew;
