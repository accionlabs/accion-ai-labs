import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import integrationArchitecture from '../assets/integrationArchitecture.svg';
import integrationFlow from '../assets/integrationFlow.svg';
import integrationArchitectureJa from '../assets/ja/integrationArchitecture.svg';
import integrationFlowJa from '../assets/ja/integrationFlow.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface IntegrationPointsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const IntegrationPointsNew: React.FC<IntegrationPointsNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const config: TopicConfig = React.useMemo(() => ({
    "id": "integration-points",
    "title": t('architecture.integrationPoints.configTitle'),
    "slides": [
      {
        "id": "integration-points-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.integrationPoints.header.title'),
              "titleGradient": "from-info to-secondary",
              "description": t('architecture.integrationPoints.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.integrationPoints.architectureOverview.title'),
              "description": t('architecture.integrationPoints.architectureOverview.description'),
              "layout": "single",
              "items": [
                {
                  "id": "integration-architecture",
                  "title": t('architecture.integrationPoints.architectureOverview.diagram.title'),
                  "description": t('architecture.integrationPoints.architectureOverview.diagram.description'),
                  "backgroundColor": "bg-gradient-to-br from-cyan-50 to-blue-50",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(integrationArchitecture, integrationArchitectureJa),
                    "alt": t('architecture.integrationPoints.architectureOverview.diagram.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 800 600",
                    "preserveAspectRatio": "xMidYMid meet",
                    "className": "border border-gray-200 rounded-lg bg-white p-6 max-w-full h-auto"
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
              "title": t('architecture.integrationPoints.versionControlCiCd.title'),
              "description": t('architecture.integrationPoints.versionControlCiCd.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "version-control",
                  "title": t('architecture.integrationPoints.versionControlCiCd.versionControl.title'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "items": [
                    t('architecture.integrationPoints.versionControlCiCd.versionControl.items.0'),
                    t('architecture.integrationPoints.versionControlCiCd.versionControl.items.1'),
                    t('architecture.integrationPoints.versionControlCiCd.versionControl.items.2'),
                    t('architecture.integrationPoints.versionControlCiCd.versionControl.items.3')
                  ]
                },
                {
                  "id": "cicd-pipelines",
                  "title": t('architecture.integrationPoints.versionControlCiCd.cicdPipelines.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-200",
                  "items": [
                    t('architecture.integrationPoints.versionControlCiCd.cicdPipelines.items.0'),
                    t('architecture.integrationPoints.versionControlCiCd.cicdPipelines.items.1'),
                    t('architecture.integrationPoints.versionControlCiCd.cicdPipelines.items.2'),
                    t('architecture.integrationPoints.versionControlCiCd.cicdPipelines.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "sequentialContent-section-3",
            "type": "sequentialContent",
            "content": {
              "title": t('architecture.integrationPoints.integrationProcessFlow.title'),
              "description": t('architecture.integrationPoints.integrationProcessFlow.description'),
              "layout": "horizontal",
              "steps": [
                {
                  "id": "developer-action",
                  "number": 1,
                  "title": t('architecture.integrationPoints.integrationProcessFlow.steps.developerAction.title'),
                  "description": t('architecture.integrationPoints.integrationProcessFlow.steps.developerAction.description'),
                  "color": "bg-success-500",
                  "backgroundColor": "bg-success-50"
                },
                {
                  "id": "ai-processing",
                  "number": 2,
                  "title": t('architecture.integrationPoints.integrationProcessFlow.steps.aiProcessing.title'),
                  "description": t('architecture.integrationPoints.integrationProcessFlow.steps.aiProcessing.description'),
                  "color": "bg-brand-blue-500",
                  "backgroundColor": "bg-brand-blue-50"
                },
                {
                  "id": "tool-integration",
                  "number": 3,
                  "title": t('architecture.integrationPoints.integrationProcessFlow.steps.toolIntegration.title'),
                  "description": t('architecture.integrationPoints.integrationProcessFlow.steps.toolIntegration.description'),
                  "color": "bg-brand-purple-500",
                  "backgroundColor": "bg-brand-purple-50"
                },
                {
                  "id": "quality-validation",
                  "number": 4,
                  "title": t('architecture.integrationPoints.integrationProcessFlow.steps.qualityValidation.title'),
                  "description": t('architecture.integrationPoints.integrationProcessFlow.steps.qualityValidation.description'),
                  "color": "bg-error-500",
                  "backgroundColor": "bg-error-50"
                }
              ],
              "variant": "process-flow",
              "svgDiagram": {
                "src": l(integrationFlow, integrationFlowJa),
                "alt": t('architecture.integrationPoints.integrationProcessFlow.diagram.alt'),
                "width": "100%",
                "height": "auto",
                "viewBox": "0 0 900 400",
                "preserveAspectRatio": "xMidYMid meet",
                "className": "border border-gray-200 rounded-lg bg-white p-4 max-w-full h-auto mb-6"
              }
            }
          },
          {
            "id": "flexibleGrid-section-4",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.integrationPoints.versionControlCapabilities.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "git-capabilities",
                  "title": t('architecture.integrationPoints.versionControlCapabilities.gitFeatures.title'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "items": [
                    t('architecture.integrationPoints.versionControlCapabilities.gitFeatures.items.0'),
                    t('architecture.integrationPoints.versionControlCapabilities.gitFeatures.items.1'),
                    t('architecture.integrationPoints.versionControlCapabilities.gitFeatures.items.2'),
                    t('architecture.integrationPoints.versionControlCapabilities.gitFeatures.items.3')
                  ]
                },
                {
                  "id": "cicd-capabilities",
                  "title": t('architecture.integrationPoints.versionControlCapabilities.cicdFeatures.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-200",
                  "items": [
                    t('architecture.integrationPoints.versionControlCapabilities.cicdFeatures.items.0'),
                    t('architecture.integrationPoints.versionControlCapabilities.cicdFeatures.items.1'),
                    t('architecture.integrationPoints.versionControlCapabilities.cicdFeatures.items.2'),
                    t('architecture.integrationPoints.versionControlCapabilities.cicdFeatures.items.3')
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
              "title": t('architecture.integrationPoints.testingFramework.title'),
              "description": t('architecture.integrationPoints.testingFramework.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "supported-frameworks",
                  "title": t('architecture.integrationPoints.testingFramework.supportedFrameworks.title'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "items": [
                    t('architecture.integrationPoints.testingFramework.supportedFrameworks.items.0'),
                    t('architecture.integrationPoints.testingFramework.supportedFrameworks.items.1'),
                    t('architecture.integrationPoints.testingFramework.supportedFrameworks.items.2'),
                    t('architecture.integrationPoints.testingFramework.supportedFrameworks.items.3')
                  ]
                },
                {
                  "id": "testing-capabilities",
                  "title": t('architecture.integrationPoints.testingFramework.testingCapabilities.title'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-200",
                  "items": [
                    t('architecture.integrationPoints.testingFramework.testingCapabilities.items.0'),
                    t('architecture.integrationPoints.testingFramework.testingCapabilities.items.1'),
                    t('architecture.integrationPoints.testingFramework.testingCapabilities.items.2'),
                    t('architecture.integrationPoints.testingFramework.testingCapabilities.items.3')
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
              "title": t('architecture.integrationPoints.projectManagement.title'),
              "description": t('architecture.integrationPoints.projectManagement.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "issue-tracking",
                  "title": t('architecture.integrationPoints.projectManagement.issueTracking.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('architecture.integrationPoints.projectManagement.issueTracking.items.0'),
                    t('architecture.integrationPoints.projectManagement.issueTracking.items.1'),
                    t('architecture.integrationPoints.projectManagement.issueTracking.items.2')
                  ]
                },
                {
                  "id": "documentation-platforms",
                  "title": t('architecture.integrationPoints.projectManagement.documentationPlatforms.title'),
                  "backgroundColor": "bg-brand-indigo-50",
                  "borderColor": "border-brand-indigo-200",
                  "items": [
                    t('architecture.integrationPoints.projectManagement.documentationPlatforms.items.0'),
                    t('architecture.integrationPoints.projectManagement.documentationPlatforms.items.1'),
                    t('architecture.integrationPoints.projectManagement.documentationPlatforms.items.2')
                  ]
                },
                {
                  "id": "communication-tools",
                  "title": t('architecture.integrationPoints.projectManagement.communicationTools.title'),
                  "backgroundColor": "bg-info-50",
                  "borderColor": "border-info-200",
                  "items": [
                    t('architecture.integrationPoints.projectManagement.communicationTools.items.0'),
                    t('architecture.integrationPoints.projectManagement.communicationTools.items.1'),
                    t('architecture.integrationPoints.projectManagement.communicationTools.items.2')
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
              "title": t('architecture.integrationPoints.projectManagementFeatures.title'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "issue-tracking-features",
                  "title": t('architecture.integrationPoints.projectManagementFeatures.issueTracking.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('architecture.integrationPoints.projectManagementFeatures.issueTracking.items.0'),
                    t('architecture.integrationPoints.projectManagementFeatures.issueTracking.items.1'),
                    t('architecture.integrationPoints.projectManagementFeatures.issueTracking.items.2')
                  ]
                },
                {
                  "id": "documentation-features",
                  "title": t('architecture.integrationPoints.projectManagementFeatures.documentation.title'),
                  "backgroundColor": "bg-brand-indigo-50",
                  "borderColor": "border-brand-indigo-200",
                  "items": [
                    t('architecture.integrationPoints.projectManagementFeatures.documentation.items.0'),
                    t('architecture.integrationPoints.projectManagementFeatures.documentation.items.1'),
                    t('architecture.integrationPoints.projectManagementFeatures.documentation.items.2')
                  ]
                },
                {
                  "id": "communication-features",
                  "title": t('architecture.integrationPoints.projectManagementFeatures.communication.title'),
                  "backgroundColor": "bg-info-50",
                  "borderColor": "border-info-200",
                  "items": [
                    t('architecture.integrationPoints.projectManagementFeatures.communication.items.0'),
                    t('architecture.integrationPoints.projectManagementFeatures.communication.items.1'),
                    t('architecture.integrationPoints.projectManagementFeatures.communication.items.2')
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
              "title": t('architecture.integrationPoints.cloudInfrastructure.title'),
              "description": t('architecture.integrationPoints.cloudInfrastructure.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "cloud-platforms",
                  "title": t('architecture.integrationPoints.cloudInfrastructure.cloudPlatforms.title'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "items": [
                    t('architecture.integrationPoints.cloudInfrastructure.cloudPlatforms.items.0'),
                    t('architecture.integrationPoints.cloudInfrastructure.cloudPlatforms.items.1'),
                    t('architecture.integrationPoints.cloudInfrastructure.cloudPlatforms.items.2')
                  ]
                },
                {
                  "id": "container-orchestration",
                  "title": t('architecture.integrationPoints.cloudInfrastructure.containerOrchestration.title'),
                  "backgroundColor": "bg-brand-purple-50",
                  "borderColor": "border-brand-purple-200",
                  "items": [
                    t('architecture.integrationPoints.cloudInfrastructure.containerOrchestration.items.0'),
                    t('architecture.integrationPoints.cloudInfrastructure.containerOrchestration.items.1'),
                    t('architecture.integrationPoints.cloudInfrastructure.containerOrchestration.items.2'),
                    t('architecture.integrationPoints.cloudInfrastructure.containerOrchestration.items.3')
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
              "title": t('architecture.integrationPoints.monitoringDatabase.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "monitoring-observability",
                  "title": t('architecture.integrationPoints.monitoringDatabase.monitoring.title'),
                  "backgroundColor": "bg-success-50",
                  "borderColor": "border-success-200",
                  "items": [
                    t('architecture.integrationPoints.monitoringDatabase.monitoring.items.0'),
                    t('architecture.integrationPoints.monitoringDatabase.monitoring.items.1'),
                    t('architecture.integrationPoints.monitoringDatabase.monitoring.items.2'),
                    t('architecture.integrationPoints.monitoringDatabase.monitoring.items.3')
                  ]
                },
                {
                  "id": "database-systems",
                  "title": t('architecture.integrationPoints.monitoringDatabase.database.title'),
                  "backgroundColor": "bg-brand-blue-50",
                  "borderColor": "border-secondary-200",
                  "items": [
                    t('architecture.integrationPoints.monitoringDatabase.database.items.0'),
                    t('architecture.integrationPoints.monitoringDatabase.database.items.1'),
                    t('architecture.integrationPoints.monitoringDatabase.database.items.2'),
                    t('architecture.integrationPoints.monitoringDatabase.database.items.3')
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
              "title": t('architecture.integrationPoints.securityCompliance.title'),
              "description": t('architecture.integrationPoints.securityCompliance.description'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "security-scanning",
                  "title": t('architecture.integrationPoints.securityCompliance.securityScanning.title'),
                  "backgroundColor": "bg-error-50",
                  "borderColor": "border-error-200",
                  "items": [
                    t('architecture.integrationPoints.securityCompliance.securityScanning.items.0'),
                    t('architecture.integrationPoints.securityCompliance.securityScanning.items.1'),
                    t('architecture.integrationPoints.securityCompliance.securityScanning.items.2'),
                    t('architecture.integrationPoints.securityCompliance.securityScanning.items.3')
                  ]
                },
                {
                  "id": "identity-access",
                  "title": t('architecture.integrationPoints.securityCompliance.identityAccess.title'),
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "items": [
                    t('architecture.integrationPoints.securityCompliance.identityAccess.items.0'),
                    t('architecture.integrationPoints.securityCompliance.identityAccess.items.1'),
                    t('architecture.integrationPoints.securityCompliance.identityAccess.items.2'),
                    t('architecture.integrationPoints.securityCompliance.identityAccess.items.3')
                  ]
                },
                {
                  "id": "compliance-frameworks",
                  "title": t('architecture.integrationPoints.securityCompliance.complianceFrameworks.title'),
                  "backgroundColor": "bg-brand-indigo-50",
                  "borderColor": "border-brand-indigo-200",
                  "items": [
                    t('architecture.integrationPoints.securityCompliance.complianceFrameworks.items.0'),
                    t('architecture.integrationPoints.securityCompliance.complianceFrameworks.items.1'),
                    t('architecture.integrationPoints.securityCompliance.complianceFrameworks.items.2'),
                    t('architecture.integrationPoints.securityCompliance.complianceFrameworks.items.3')
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
              "title": t('architecture.integrationPoints.cta.title'),
              "description": t('architecture.integrationPoints.cta.description'),
              "buttonText": t('architecture.integrationPoints.cta.buttonText'),
              "backgroundGradient": "from-info to-secondary",
              "variant": "cta",
              "items": [
                {
                  "id": "developer-experience",
                  "title": t('architecture.integrationPoints.cta.developerExperience.title'),
                  "description": t('architecture.integrationPoints.cta.developerExperience.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "organizational-benefits",
                  "title": t('architecture.integrationPoints.cta.organizationalBenefits.title'),
                  "description": t('architecture.integrationPoints.cta.organizationalBenefits.description'),
                  "backgroundColor": "bg-white/20"
                },
                {
                  "id": "integration-principles",
                  "title": t('architecture.integrationPoints.cta.integrationPrinciples.title'),
                  "description": t('architecture.integrationPoints.cta.integrationPrinciples.description'),
                  "backgroundColor": "bg-white/20"
                }
              ]
            }
          }
        ]
      }
    ]
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [t, l]);

  return (
    <TopicLayout
      config={config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default IntegrationPointsNew;
