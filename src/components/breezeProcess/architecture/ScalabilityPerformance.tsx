import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface ScalabilityPerformanceNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const ScalabilityPerformanceNew: React.FC<ScalabilityPerformanceNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const config: TopicConfig = React.useMemo(() => ({
    "id": "scalability-performance",
    "title": t('architecture.scalabilityPerformance.configTitle'),
    "slides": [
      {
        "id": "scalability-performance-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.scalabilityPerformance.header.title'),
              "titleGradient": "from-green-600 to-teal-600",
              "description": t('architecture.scalabilityPerformance.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.scalabilityPerformance.scalabilityArchitecture.title'),
              "description": t('architecture.scalabilityPerformance.scalabilityArchitecture.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "horizontal-scaling",
                  "title": t('architecture.scalabilityPerformance.scalabilityArchitecture.horizontalScaling.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.horizontalScaling.items.0'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.horizontalScaling.items.1'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.horizontalScaling.items.2'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.horizontalScaling.items.3'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.horizontalScaling.items.4')
                  ]
                },
                {
                  "id": "vertical-scaling",
                  "title": t('architecture.scalabilityPerformance.scalabilityArchitecture.verticalScaling.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.verticalScaling.items.0'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.verticalScaling.items.1'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.verticalScaling.items.2'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.verticalScaling.items.3'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.verticalScaling.items.4')
                  ]
                },
                {
                  "id": "auto-scaling",
                  "title": t('architecture.scalabilityPerformance.scalabilityArchitecture.autoScaling.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.autoScaling.items.0'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.autoScaling.items.1'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.autoScaling.items.2'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.autoScaling.items.3'),
                    t('architecture.scalabilityPerformance.scalabilityArchitecture.autoScaling.items.4')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.scalabilityPerformance.scalingDecisionMatrix.title'),
              "description": t('architecture.scalabilityPerformance.scalingDecisionMatrix.description'),
              "layout": "single",
              "items": [
                {
                  "id": "workload-strategies",
                  "title": t('architecture.scalabilityPerformance.scalingDecisionMatrix.workloadStrategies.title'),
                  "backgroundColor": "bg-gradient-to-br from-green-50 to-purple-50",
                  "items": [
                    t('architecture.scalabilityPerformance.scalingDecisionMatrix.workloadStrategies.items.0'),
                    t('architecture.scalabilityPerformance.scalingDecisionMatrix.workloadStrategies.items.1'),
                    t('architecture.scalabilityPerformance.scalingDecisionMatrix.workloadStrategies.items.2'),
                    t('architecture.scalabilityPerformance.scalingDecisionMatrix.workloadStrategies.items.3')
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
              "title": t('architecture.scalabilityPerformance.performanceOptimization.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "intelligent-caching",
                  "title": t('architecture.scalabilityPerformance.performanceOptimization.intelligentCaching.title'),
                  "description": t('architecture.scalabilityPerformance.performanceOptimization.intelligentCaching.description'),
                  "backgroundColor": "bg-yellow-50",
                  "borderColor": "border-yellow-200",
                  "items": [
                    t('architecture.scalabilityPerformance.performanceOptimization.intelligentCaching.items.0'),
                    t('architecture.scalabilityPerformance.performanceOptimization.intelligentCaching.items.1'),
                    t('architecture.scalabilityPerformance.performanceOptimization.intelligentCaching.items.2'),
                    t('architecture.scalabilityPerformance.performanceOptimization.intelligentCaching.items.3')
                  ]
                },
                {
                  "id": "query-optimization",
                  "title": t('architecture.scalabilityPerformance.performanceOptimization.queryOptimization.title'),
                  "description": t('architecture.scalabilityPerformance.performanceOptimization.queryOptimization.description'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "items": [
                    t('architecture.scalabilityPerformance.performanceOptimization.queryOptimization.items.0'),
                    t('architecture.scalabilityPerformance.performanceOptimization.queryOptimization.items.1'),
                    t('architecture.scalabilityPerformance.performanceOptimization.queryOptimization.items.2'),
                    t('architecture.scalabilityPerformance.performanceOptimization.queryOptimization.items.3')
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
              "title": t('architecture.scalabilityPerformance.processingNetworkOptimization.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "processing-pipeline",
                  "title": t('architecture.scalabilityPerformance.processingNetworkOptimization.processingPipeline.title'),
                  "description": t('architecture.scalabilityPerformance.processingNetworkOptimization.processingPipeline.description'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "items": [
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.processingPipeline.items.0'),
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.processingPipeline.items.1'),
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.processingPipeline.items.2'),
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.processingPipeline.items.3')
                  ]
                },
                {
                  "id": "network-optimization",
                  "title": t('architecture.scalabilityPerformance.processingNetworkOptimization.networkOptimization.title'),
                  "description": t('architecture.scalabilityPerformance.processingNetworkOptimization.networkOptimization.description'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "items": [
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.networkOptimization.items.0'),
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.networkOptimization.items.1'),
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.networkOptimization.items.2'),
                    t('architecture.scalabilityPerformance.processingNetworkOptimization.networkOptimization.items.3')
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
              "title": t('architecture.scalabilityPerformance.intelligentResourceManagement.title'),
              "description": t('architecture.scalabilityPerformance.intelligentResourceManagement.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "workload-classification",
                  "title": t('architecture.scalabilityPerformance.intelligentResourceManagement.workloadClassification.title'),
                  "backgroundColor": "bg-cyan-50",
                  "borderColor": "border-cyan-200",
                  "items": [
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.workloadClassification.items.0'),
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.workloadClassification.items.1'),
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.workloadClassification.items.2')
                  ]
                },
                {
                  "id": "allocation-strategy",
                  "title": t('architecture.scalabilityPerformance.intelligentResourceManagement.allocationStrategy.title'),
                  "backgroundColor": "bg-teal-50",
                  "borderColor": "border-teal-200",
                  "items": [
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.allocationStrategy.items.0'),
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.allocationStrategy.items.1'),
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.allocationStrategy.items.2')
                  ]
                },
                {
                  "id": "performance-monitoring",
                  "title": t('architecture.scalabilityPerformance.intelligentResourceManagement.performanceMonitoring.title'),
                  "backgroundColor": "bg-emerald-50",
                  "borderColor": "border-emerald-200",
                  "items": [
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.performanceMonitoring.items.0'),
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.performanceMonitoring.items.1'),
                    t('architecture.scalabilityPerformance.intelligentResourceManagement.performanceMonitoring.items.2')
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
              "title": t('architecture.scalabilityPerformance.highAvailability.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "multi-region-deployment",
                  "title": t('architecture.scalabilityPerformance.highAvailability.multiRegion.title'),
                  "description": t('architecture.scalabilityPerformance.highAvailability.multiRegion.description'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('architecture.scalabilityPerformance.highAvailability.multiRegion.items.0'),
                    t('architecture.scalabilityPerformance.highAvailability.multiRegion.items.1'),
                    t('architecture.scalabilityPerformance.highAvailability.multiRegion.items.2'),
                    t('architecture.scalabilityPerformance.highAvailability.multiRegion.items.3')
                  ]
                },
                {
                  "id": "fault-tolerance",
                  "title": t('architecture.scalabilityPerformance.highAvailability.faultTolerance.title'),
                  "description": t('architecture.scalabilityPerformance.highAvailability.faultTolerance.description'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('architecture.scalabilityPerformance.highAvailability.faultTolerance.items.0'),
                    t('architecture.scalabilityPerformance.highAvailability.faultTolerance.items.1'),
                    t('architecture.scalabilityPerformance.highAvailability.faultTolerance.items.2'),
                    t('architecture.scalabilityPerformance.highAvailability.faultTolerance.items.3')
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
              "title": t('architecture.scalabilityPerformance.recoveryTimeObjectives.title'),
              "description": t('architecture.scalabilityPerformance.recoveryTimeObjectives.description'),
              "layout": "single",
              "items": [
                {
                  "id": "rto-targets",
                  "title": t('architecture.scalabilityPerformance.recoveryTimeObjectives.rtoTargets.title'),
                  "backgroundColor": "bg-gradient-to-br from-blue-50 to-purple-50",
                  "items": [
                    t('architecture.scalabilityPerformance.recoveryTimeObjectives.rtoTargets.items.0'),
                    t('architecture.scalabilityPerformance.recoveryTimeObjectives.rtoTargets.items.1'),
                    t('architecture.scalabilityPerformance.recoveryTimeObjectives.rtoTargets.items.2')
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
              "title": t('architecture.scalabilityPerformance.performanceBenchmarks.title'),
              "description": t('architecture.scalabilityPerformance.performanceBenchmarks.description'),
              "layout": "grid-4",
              "items": [
                {
                  "id": "graph-queries",
                  "title": t('architecture.scalabilityPerformance.performanceBenchmarks.graphQueries.title'),
                  "description": t('architecture.scalabilityPerformance.performanceBenchmarks.graphQueries.description'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200"
                },
                {
                  "id": "concurrent-agents",
                  "title": t('architecture.scalabilityPerformance.performanceBenchmarks.concurrentAgents.title'),
                  "description": t('architecture.scalabilityPerformance.performanceBenchmarks.concurrentAgents.description'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200"
                },
                {
                  "id": "code-generation",
                  "title": t('architecture.scalabilityPerformance.performanceBenchmarks.codeGeneration.title'),
                  "description": t('architecture.scalabilityPerformance.performanceBenchmarks.codeGeneration.description'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200"
                },
                {
                  "id": "system-uptime",
                  "title": t('architecture.scalabilityPerformance.performanceBenchmarks.systemUptime.title'),
                  "description": t('architecture.scalabilityPerformance.performanceBenchmarks.systemUptime.description'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200"
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-10",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.scalabilityPerformance.loadTestingResults.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "specification-processing",
                  "title": t('architecture.scalabilityPerformance.loadTestingResults.specificationProcessing.title'),
                  "backgroundColor": "bg-gray-50",
                  "borderColor": "border-gray-200",
                  "items": [
                    t('architecture.scalabilityPerformance.loadTestingResults.specificationProcessing.items.0'),
                    t('architecture.scalabilityPerformance.loadTestingResults.specificationProcessing.items.1'),
                    t('architecture.scalabilityPerformance.loadTestingResults.specificationProcessing.items.2'),
                    t('architecture.scalabilityPerformance.loadTestingResults.specificationProcessing.items.3')
                  ]
                },
                {
                  "id": "implementation-generation",
                  "title": t('architecture.scalabilityPerformance.loadTestingResults.implementationGeneration.title'),
                  "backgroundColor": "bg-gray-50",
                  "borderColor": "border-gray-200",
                  "items": [
                    t('architecture.scalabilityPerformance.loadTestingResults.implementationGeneration.items.0'),
                    t('architecture.scalabilityPerformance.loadTestingResults.implementationGeneration.items.1'),
                    t('architecture.scalabilityPerformance.loadTestingResults.implementationGeneration.items.2'),
                    t('architecture.scalabilityPerformance.loadTestingResults.implementationGeneration.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "prominentDisplay-section-11",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.scalabilityPerformance.costOptimization.title'),
              "backgroundGradient": "from-green-50 to-teal-50",
              "borderColor": "border-green-500",
              "description": t('architecture.scalabilityPerformance.costOptimization.description'),
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-12",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.scalabilityPerformance.costOptimizationStrategies.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "resource-efficiency",
                  "title": t('architecture.scalabilityPerformance.costOptimizationStrategies.resourceEfficiency.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.resourceEfficiency.items.0'),
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.resourceEfficiency.items.1'),
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.resourceEfficiency.items.2'),
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.resourceEfficiency.items.3')
                  ]
                },
                {
                  "id": "operational-efficiency",
                  "title": t('architecture.scalabilityPerformance.costOptimizationStrategies.operationalEfficiency.title'),
                  "backgroundColor": "bg-teal-50",
                  "borderColor": "border-teal-200",
                  "items": [
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.operationalEfficiency.items.0'),
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.operationalEfficiency.items.1'),
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.operationalEfficiency.items.2'),
                    t('architecture.scalabilityPerformance.costOptimizationStrategies.operationalEfficiency.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-13",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.scalabilityPerformance.securityComplianceFoundation.title'),
              "backgroundColor": "from-green-50 to-teal-50",
              "borderColor": "border-green-500",
              "categories": [
                {
                  "title": t('architecture.scalabilityPerformance.securityComplianceFoundation.enterpriseFoundation.title'),
                  "color": "green",
                  "benefits": [
                    t('architecture.scalabilityPerformance.securityComplianceFoundation.enterpriseFoundation.items.0'),
                    t('architecture.scalabilityPerformance.securityComplianceFoundation.enterpriseFoundation.items.1'),
                    t('architecture.scalabilityPerformance.securityComplianceFoundation.enterpriseFoundation.items.2')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-14",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.scalabilityPerformance.cta.title'),
              "description": t('architecture.scalabilityPerformance.cta.description'),
              "buttonText": t('architecture.scalabilityPerformance.cta.buttonText'),
              "backgroundGradient": "from-green-600 to-teal-600",
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

export default ScalabilityPerformanceNew;
