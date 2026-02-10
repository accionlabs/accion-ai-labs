import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface LegacyTransformationNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const LegacyTransformationNew: React.FC<LegacyTransformationNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "legacy-transformation",
    "title": t('challenge.legacyTransformation.configTitle'),
    "slides": [
      {
        "id": "legacy-transformation-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.legacyTransformation.header.title'),
              "subtitle": t('challenge.legacyTransformation.header.subtitle'),
              "titleGradient": "from-warning to-error",
              "description": t('challenge.legacyTransformation.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.legacyTransformation.docCrisis.title'),
              "description": t('challenge.legacyTransformation.docCrisis.description'),
              "columns": 4,
              "items": [
                {
                  "id": "missing-documentation",
                  "title": t('challenge.legacyTransformation.docCrisis.items.missingDocs.title'),
                  "description": t('challenge.legacyTransformation.docCrisis.items.missingDocs.description'),
                  "icon": "📄",
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "iconBackgroundColor": "bg-error-100",
                  "titleColor": "text-error-800",
                  "textColor": "text-error-600"
                },
                {
                  "id": "knowledge-erosion",
                  "title": t('challenge.legacyTransformation.docCrisis.items.knowledgeErosion.title'),
                  "description": t('challenge.legacyTransformation.docCrisis.items.knowledgeErosion.description'),
                  "icon": "🧠",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "iconBackgroundColor": "bg-warning-100",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-600"
                },
                {
                  "id": "specification-time-warp",
                  "title": t('challenge.legacyTransformation.docCrisis.items.specTimeWarp.title'),
                  "description": t('challenge.legacyTransformation.docCrisis.items.specTimeWarp.description'),
                  "icon": "⏰",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "iconBackgroundColor": "bg-warning-100",
                  "titleColor": "text-warning-800",
                  "textColor": "text-warning-600"
                },
                {
                  "id": "evolution-without-docs",
                  "title": t('challenge.legacyTransformation.docCrisis.items.evolutionWithoutDocs.title'),
                  "description": t('challenge.legacyTransformation.docCrisis.items.evolutionWithoutDocs.description'),
                  "icon": "🔄",
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-600",
                  "iconBackgroundColor": "bg-brand-purple-100",
                  "titleColor": "text-brand-purple-800",
                  "textColor": "text-brand-purple-600"
                }
              ],
              "variant": "icons"
            }
          },
          {
            "id": "prominentDisplay-section-3",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.legacyTransformation.viciousCycle.title'),
              "backgroundGradient": "from-gray-900 to-gray-800",
              "description": t('challenge.legacyTransformation.viciousCycle.description'),
              "icon": "💀",
              "titleColor": "text-white",
              "textColor": "text-white",
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.legacyTransformation.solution.title'),
              "description": t('challenge.legacyTransformation.solution.description'),
              "backgroundColor": "from-blue-50 to-green-50",
              "borderColor": "border-l-4 border-secondary",
              "innerBackgroundColor": "bg-white/80 backdrop-blur-sm",
              "variant": "detailed-list",
              "items": [
                {
                  "id": "game-changing-capability",
                  "title": t('challenge.legacyTransformation.solution.items.gameChanging.title'),
                  "description": t('challenge.legacyTransformation.solution.items.gameChanging.description'),
                  "bulletColor": "bg-transparent"
                }
              ],
              "containerStyle": "gradient"
            }
          },
          {
            "id": "automatic-knowledge-extraction",
            "type": "sequentialContent",
            "content": {
              "title": t('challenge.legacyTransformation.knowledgeExtraction.title'),
              "steps": [
                {
                  "id": "artifact-analysis",
                  "number": 1,
                  "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.artifactAnalysis.title'),
                  "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.artifactAnalysis.description'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary",
                  "circleColor": "bg-secondary",
                  "textColor": "text-secondary",
                  "detailBox": {
                    "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.artifactAnalysis.detailBox.title'),
                    "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.artifactAnalysis.detailBox.description'),
                    "backgroundColor": "bg-white",
                    "borderColor": "border-secondary",
                    "textColor": "text-brand-blue-600"
                  }
                },
                {
                  "id": "semantic-analysis",
                  "number": 2,
                  "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.semanticAnalysis.title'),
                  "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.semanticAnalysis.description'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success",
                  "circleColor": "bg-success",
                  "textColor": "text-success-800",
                  "detailBox": {
                    "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.semanticAnalysis.detailBox.title'),
                    "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.semanticAnalysis.detailBox.description'),
                    "backgroundColor": "bg-white",
                    "borderColor": "border-success",
                    "textColor": "text-success-600"
                  }
                },
                {
                  "id": "knowledge-reconstruction",
                  "number": 3,
                  "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.knowledgeReconstruction.title'),
                  "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.knowledgeReconstruction.description'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-600",
                  "circleColor": "bg-brand-purple-600",
                  "textColor": "text-brand-purple-800",
                  "detailBox": {
                    "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.knowledgeReconstruction.detailBox.title'),
                    "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.knowledgeReconstruction.detailBox.description'),
                    "backgroundColor": "bg-white",
                    "borderColor": "border-brand-purple-600",
                    "textColor": "text-brand-purple-600"
                  }
                },
                {
                  "id": "gap-identification",
                  "number": 4,
                  "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.gapIdentification.title'),
                  "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.gapIdentification.description'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "circleColor": "bg-warning-500",
                  "textColor": "text-warning-800",
                  "detailBox": {
                    "title": t('challenge.legacyTransformation.knowledgeExtraction.steps.gapIdentification.detailBox.title'),
                    "description": t('challenge.legacyTransformation.knowledgeExtraction.steps.gapIdentification.detailBox.description'),
                    "backgroundColor": "bg-white",
                    "borderColor": "border-warning-200",
                    "textColor": "text-warning-600"
                  }
                }
              ],
              "variant": "process-flow",
              "layout": "process-visualization"
            }
          },
          {
            "id": "flexibleGrid-section-5",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.legacyTransformation.humanValidation.title'),
              "description": t('challenge.legacyTransformation.humanValidation.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "interactive-validation",
                  "title": t('challenge.legacyTransformation.humanValidation.items.interactiveValidation.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary",
                  "items": [
                    t('challenge.legacyTransformation.humanValidation.items.interactiveValidation.items.0'),
                    t('challenge.legacyTransformation.humanValidation.items.interactiveValidation.items.1'),
                    t('challenge.legacyTransformation.humanValidation.items.interactiveValidation.items.2'),
                    t('challenge.legacyTransformation.humanValidation.items.interactiveValidation.items.3'),
                    t('challenge.legacyTransformation.humanValidation.items.interactiveValidation.items.4')
                  ]
                },
                {
                  "id": "stakeholder-collaboration",
                  "title": t('challenge.legacyTransformation.humanValidation.items.stakeholderCollaboration.title'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success",
                  "items": [
                    t('challenge.legacyTransformation.humanValidation.items.stakeholderCollaboration.items.0'),
                    t('challenge.legacyTransformation.humanValidation.items.stakeholderCollaboration.items.1'),
                    t('challenge.legacyTransformation.humanValidation.items.stakeholderCollaboration.items.2'),
                    t('challenge.legacyTransformation.humanValidation.items.stakeholderCollaboration.items.3'),
                    t('challenge.legacyTransformation.humanValidation.items.stakeholderCollaboration.items.4')
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
              "title": t('challenge.legacyTransformation.tipOfIceberg.title'),
              "description": t('challenge.legacyTransformation.tipOfIceberg.description'),
              "layout": "single",
              "items": [
                {
                  "id": "future-possibilities",
                  "title": t('challenge.legacyTransformation.tipOfIceberg.items.futurePossibilities.title'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "items": [
                    t('challenge.legacyTransformation.tipOfIceberg.items.futurePossibilities.items.0'),
                    t('challenge.legacyTransformation.tipOfIceberg.items.futurePossibilities.items.1'),
                    t('challenge.legacyTransformation.tipOfIceberg.items.futurePossibilities.items.2'),
                    t('challenge.legacyTransformation.tipOfIceberg.items.futurePossibilities.items.3'),
                    t('challenge.legacyTransformation.tipOfIceberg.items.futurePossibilities.items.4')
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
              "title": t('challenge.legacyTransformation.modernizationAdvantages.title'),
              "description": t('challenge.legacyTransformation.modernizationAdvantages.description'),
              "columns": 3,
              "items": [
                {
                  "id": "gradual-modernization",
                  "title": t('challenge.legacyTransformation.modernizationAdvantages.items.gradualModernization.title'),
                  "description": t('challenge.legacyTransformation.modernizationAdvantages.items.gradualModernization.description'),
                  "icon": "🔄",
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success",
                  "iconBackgroundColor": "bg-success-100",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-600"
                },
                {
                  "id": "pattern-migration",
                  "title": t('challenge.legacyTransformation.modernizationAdvantages.items.patternMigration.title'),
                  "description": t('challenge.legacyTransformation.modernizationAdvantages.items.patternMigration.description'),
                  "icon": "🔀",
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary",
                  "iconBackgroundColor": "bg-brand-blue-100",
                  "titleColor": "text-secondary",
                  "textColor": "text-brand-blue-600"
                },
                {
                  "id": "quality-improvement",
                  "title": t('challenge.legacyTransformation.modernizationAdvantages.items.qualityImprovement.title'),
                  "description": t('challenge.legacyTransformation.modernizationAdvantages.items.qualityImprovement.description'),
                  "icon": "⬆️",
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-600",
                  "iconBackgroundColor": "bg-brand-purple-100",
                  "titleColor": "text-brand-purple-800",
                  "textColor": "text-brand-purple-600"
                }
              ],
              "variant": "icons"
            }
          },
          {
            "id": "flexibleGrid-section-8",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.legacyTransformation.realWorldImpact.title'),
              "backgroundColor": "from-blue-50 to-purple-50",
              "borderColor": "border-l-4 border-secondary",
              "innerBackgroundColor": "bg-white/80 backdrop-blur-sm",
              "variant": "detailed-list",
              "items": [
                {
                  "id": "ecommerce-transformation",
                  "title": t('challenge.legacyTransformation.realWorldImpact.items.ecommerce.title'),
                  "description": t('challenge.legacyTransformation.realWorldImpact.items.ecommerce.description'),
                  "bulletColor": "bg-secondary"
                },
                {
                  "id": "financial-integration",
                  "title": t('challenge.legacyTransformation.realWorldImpact.items.financial.title'),
                  "description": t('challenge.legacyTransformation.realWorldImpact.items.financial.description'),
                  "bulletColor": "bg-brand-purple-600"
                }
              ],
              "containerStyle": "gradient"
            }
          },
          {
            "id": "legacy-breakthrough",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.legacyTransformation.breakthrough.title'),
              "subtitle": t('challenge.legacyTransformation.breakthrough.subtitle'),
              "backgroundGradient": "bg-gradient-to-r from-warning to-error",
              "textColor": "text-white",
              "items": [
                {
                  "id": "traditional-approach",
                  "title": t('challenge.legacyTransformation.breakthrough.items.traditional.title'),
                  "description": t('challenge.legacyTransformation.breakthrough.items.traditional.description'),
                  "cardBackgroundColor": "bg-white/20"
                },
                {
                  "id": "breeze-approach",
                  "title": t('challenge.legacyTransformation.breakthrough.items.breeze.title'),
                  "description": t('challenge.legacyTransformation.breakthrough.items.breeze.description'),
                  "cardBackgroundColor": "bg-white/20"
                }
              ],
              "conclusion": {
                "title": t('challenge.legacyTransformation.breakthrough.conclusion.title'),
                "description": t('challenge.legacyTransformation.breakthrough.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('challenge.legacyTransformation.breakthrough.buttonText'),
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

export default LegacyTransformationNew;
