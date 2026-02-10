import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface RevolutionaryCapabilitiesNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
  slideMode?: boolean;
  currentSlideIndex?: number;
}

const RevolutionaryCapabilitiesNew: React.FC<RevolutionaryCapabilitiesNewProps> = ({
  onNavigate,
  onNext,
  onPrevious,
  slideMode,
  currentSlideIndex
}) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "revolutionary-capabilities",
    "title": t('challenge.capabilities.configTitle'),
    "slides": [
      {
        "id": "revolutionary-capabilities-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.capabilities.header.title'),
              "subtitle": t('challenge.capabilities.header.subtitle'),
              "titleGradient": "from-brand-purple-600 via-secondary to-success",
              "description": t('challenge.capabilities.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "perfect-traceability",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.capabilities.perfectTraceability.title'),
              "description": t('challenge.capabilities.perfectTraceability.description'),
              "layout": "grid-2",
              "variant": "content",
              "items": [
                {
                  "id": "what-this-means",
                  "title": t('challenge.capabilities.perfectTraceability.items.whatThisMeans.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "items": [
                    t('challenge.capabilities.perfectTraceability.items.whatThisMeans.items.0'),
                    t('challenge.capabilities.perfectTraceability.items.whatThisMeans.items.1'),
                    t('challenge.capabilities.perfectTraceability.items.whatThisMeans.items.2'),
                    t('challenge.capabilities.perfectTraceability.items.whatThisMeans.items.3')
                  ]
                },
                {
                  "id": "example-scenario",
                  "title": t('challenge.capabilities.perfectTraceability.items.exampleScenario.title'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-600",
                  "titleColor": "text-brand-purple-800",
                  "processSteps": [
                    {
                      "title": t('challenge.capabilities.perfectTraceability.items.exampleScenario.steps.businessRequest.title'),
                      "description": t('challenge.capabilities.perfectTraceability.items.exampleScenario.steps.businessRequest.description'),
                      "backgroundColor": "bg-white border-brand-purple-600",
                      "titleColor": "text-brand-purple-700",
                      "descriptionColor": "text-brand-purple-700"
                    },
                    {
                      "title": t('challenge.capabilities.perfectTraceability.items.exampleScenario.steps.autoAnalysis.title'),
                      "description": t('challenge.capabilities.perfectTraceability.items.exampleScenario.steps.autoAnalysis.description'),
                      "backgroundColor": "bg-white border-brand-purple-600",
                      "titleColor": "text-brand-purple-700",
                      "descriptionColor": "text-brand-purple-700"
                    },
                    {
                      "title": t('challenge.capabilities.perfectTraceability.items.exampleScenario.steps.preciseScope.title'),
                      "description": t('challenge.capabilities.perfectTraceability.items.exampleScenario.steps.preciseScope.description'),
                      "backgroundColor": "bg-white border-brand-purple-600",
                      "titleColor": "text-brand-purple-700",
                      "descriptionColor": "text-brand-purple-700"
                    }
                  ]
                }
              ]
            }
          },
          {
            "id": "automatic-change-propagation",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.capabilities.changePropagation.title'),
              "description": t('challenge.capabilities.changePropagation.description'),
              "layout": "grid-2",
              "variant": "content",
              "items": [
                {
                  "id": "traditional-problem",
                  "title": t('challenge.capabilities.changePropagation.items.traditionalProblem.title'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success",
                  "titleColor": "text-success-800",
                  "items": [
                    t('challenge.capabilities.changePropagation.items.traditionalProblem.items.0'),
                    t('challenge.capabilities.changePropagation.items.traditionalProblem.items.1'),
                    t('challenge.capabilities.changePropagation.items.traditionalProblem.items.2')
                  ]
                },
                {
                  "id": "breeze-ai-solution",
                  "title": t('challenge.capabilities.changePropagation.items.breezeSolution.title'),
                  "backgroundColor": "bg-success-100",
                  "borderColor": "border-success-300",
                  "titleColor": "text-success-800",
                  "items": [
                    t('challenge.capabilities.changePropagation.items.breezeSolution.items.0'),
                    t('challenge.capabilities.changePropagation.items.breezeSolution.items.1'),
                    t('challenge.capabilities.changePropagation.items.breezeSolution.items.2')
                  ]
                }
              ]
            }
          },
          {
            "id": "zero-ambiguity-processing",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.capabilities.zeroAmbiguity.title'),
              "description": t('challenge.capabilities.zeroAmbiguity.description'),
              "layout": "grid-2",
              "variant": "content",
              "items": [
                {
                  "id": "traditional-ambiguity",
                  "title": t('challenge.capabilities.zeroAmbiguity.items.traditionalAmbiguity.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error",
                  "titleColor": "text-error-800",
                  "items": [
                    t('challenge.capabilities.zeroAmbiguity.items.traditionalAmbiguity.items.0'),
                    t('challenge.capabilities.zeroAmbiguity.items.traditionalAmbiguity.items.1')
                  ]
                },
                {
                  "id": "breeze-ai-precision",
                  "title": t('challenge.capabilities.zeroAmbiguity.items.breezePrecision.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary",
                  "titleColor": "text-secondary",
                  "items": [
                    t('challenge.capabilities.zeroAmbiguity.items.breezePrecision.items.0'),
                    t('challenge.capabilities.zeroAmbiguity.items.breezePrecision.items.1')
                  ]
                }
              ]
            }
          },
          {
            "id": "automatic-bdd-integration",
            "type": "flexibleGrid",
            "content": {
              "title": t('challenge.capabilities.bddIntegration.title'),
              "description": t('challenge.capabilities.bddIntegration.description'),
              "layout": "grid-2",
              "variant": "process-flow",
              "items": [
                {
                  "id": "what-happens-automatically",
                  "title": t('challenge.capabilities.bddIntegration.items.whatHappens.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-gray-200",
                  "processSteps": [
                    {
                      "icon": "1",
                      "title": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.acceptanceTests.title'),
                      "description": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.acceptanceTests.description'),
                      "backgroundColor": "bg-success-50 border-success",
                      "iconColor": "bg-success",
                      "titleColor": "text-success-800",
                      "descriptionColor": "text-success-700"
                    },
                    {
                      "icon": "2",
                      "title": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.protocolDrivers.title'),
                      "description": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.protocolDrivers.description'),
                      "backgroundColor": "bg-brand-blue-50 border-secondary",
                      "iconColor": "bg-secondary",
                      "titleColor": "text-secondary",
                      "descriptionColor": "text-brand-blue-700"
                    },
                    {
                      "icon": "3",
                      "title": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.implCode.title'),
                      "description": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.implCode.description'),
                      "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                      "iconColor": "bg-brand-purple-600",
                      "titleColor": "text-brand-purple-800",
                      "descriptionColor": "text-brand-purple-700"
                    },
                    {
                      "icon": "4",
                      "title": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.testsExecute.title'),
                      "description": t('challenge.capabilities.bddIntegration.items.whatHappens.steps.testsExecute.description'),
                      "backgroundColor": "bg-warning-50 border-warning",
                      "iconColor": "bg-warning",
                      "titleColor": "text-warning-800",
                      "descriptionColor": "text-warning-700"
                    }
                  ]
                },
                {
                  "id": "transformation",
                  "title": t('challenge.capabilities.bddIntegration.items.transformation.title'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning",
                  "titleColor": "text-warning-800",
                  "items": [
                    t('challenge.capabilities.bddIntegration.items.transformation.items.0'),
                    t('challenge.capabilities.bddIntegration.items.transformation.items.1')
                  ]
                }
              ]
            }
          },
          {
            "id": "specification-evolution",
            "type": "flexibleGrid",
            "slideGroup": "specification-evolution-group",
            "content": {
              "title": t('challenge.capabilities.specEvolution.title'),
              "description": t('challenge.capabilities.specEvolution.description'),
              "variant": "content",
              "containerStyle": "default",
              "items": []
            }
          },
          {
            "id": "practical-scenarios",
            "type": "flexibleGrid",
            "slideGroup": "specification-evolution-group",
            "content": {
              "title": t('challenge.capabilities.practicalScenarios.title'),
              "layout": "grid-3",
              "variant": "content",
              "containerStyle": "gradient",
              "backgroundColor": "from-blue-50 to-purple-50",
              "borderColor": "border-secondary",
              "items": [
                {
                  "id": "security-modernization",
                  "title": t('challenge.capabilities.practicalScenarios.items.securityModernization.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-secondary",
                  "titleColor": "text-secondary",
                  "textColor": "text-brand-blue-700",
                  "description": t('challenge.capabilities.practicalScenarios.items.securityModernization.description')
                },
                {
                  "id": "performance-optimization",
                  "title": t('challenge.capabilities.practicalScenarios.items.performanceOptimization.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-secondary",
                  "titleColor": "text-secondary",
                  "textColor": "text-brand-blue-700",
                  "description": t('challenge.capabilities.practicalScenarios.items.performanceOptimization.description')
                },
                {
                  "id": "design-system-evolution",
                  "title": t('challenge.capabilities.practicalScenarios.items.designSystemEvolution.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-secondary",
                  "titleColor": "text-secondary",
                  "textColor": "text-brand-blue-700",
                  "description": t('challenge.capabilities.practicalScenarios.items.designSystemEvolution.description')
                }
              ]
            }
          },
          {
            "id": "revolutionary-outcome",
            "type": "flexibleGrid",
            "slideGroup": "specification-evolution-group",
            "content": {
              "title": t('challenge.capabilities.revolutionaryOutcome.title'),
              "layout": "grid-2",
              "variant": "content",
              "containerStyle": "gradient",
              "backgroundColor": "from-green-50 to-blue-50",
              "borderColor": "border-success-500",
              "items": [
                {
                  "id": "traditional-approach",
                  "title": t('challenge.capabilities.revolutionaryOutcome.items.traditionalApproach.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-success",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-700",
                  "items": [
                    t('challenge.capabilities.revolutionaryOutcome.items.traditionalApproach.items.0'),
                    t('challenge.capabilities.revolutionaryOutcome.items.traditionalApproach.items.1'),
                    t('challenge.capabilities.revolutionaryOutcome.items.traditionalApproach.items.2'),
                    t('challenge.capabilities.revolutionaryOutcome.items.traditionalApproach.items.3')
                  ]
                },
                {
                  "id": "breeze-ai-approach",
                  "title": t('challenge.capabilities.revolutionaryOutcome.items.breezeApproach.title'),
                  "backgroundColor": "bg-white",
                  "borderColor": "border-success",
                  "titleColor": "text-success-800",
                  "textColor": "text-success-700",
                  "items": [
                    t('challenge.capabilities.revolutionaryOutcome.items.breezeApproach.items.0'),
                    t('challenge.capabilities.revolutionaryOutcome.items.breezeApproach.items.1'),
                    t('challenge.capabilities.revolutionaryOutcome.items.breezeApproach.items.2'),
                    t('challenge.capabilities.revolutionaryOutcome.items.breezeApproach.items.3')
                  ]
                }
              ]
            }
          },
          {
            "id": "compound-effect",
            "type": "prominentDisplay",
            "content": {
              "title": t('challenge.capabilities.compoundEffect.title'),
              "description": t('challenge.capabilities.compoundEffect.description'),
              "backgroundGradient": "bg-gradient-to-r from-brand-purple-600 via-secondary to-success",
              "textColor": "text-white",
              "variant": "cta",
              "items": [
                {
                  "id": "speed",
                  "title": t('challenge.capabilities.compoundEffect.items.speed.title'),
                  "description": t('challenge.capabilities.compoundEffect.items.speed.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "quality",
                  "title": t('challenge.capabilities.compoundEffect.items.quality.title'),
                  "description": t('challenge.capabilities.compoundEffect.items.quality.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "consistency",
                  "title": t('challenge.capabilities.compoundEffect.items.consistency.title'),
                  "description": t('challenge.capabilities.compoundEffect.items.consistency.description'),
                  "backgroundColor": "bg-white/20"
                }
              ],
              "conclusion": {
                "title": t('challenge.capabilities.compoundEffect.conclusion.title'),
                "description": t('challenge.capabilities.compoundEffect.conclusion.description'),
                "backgroundColor": "bg-white/20"
              },
              "buttonText": t('challenge.capabilities.compoundEffect.buttonText')
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
      onPrevious={onPrevious}
      slideMode={slideMode}
      currentSlideIndex={currentSlideIndex}
    />
  );
};

export default RevolutionaryCapabilitiesNew;
