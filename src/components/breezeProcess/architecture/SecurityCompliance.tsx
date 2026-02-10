import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import securityLayers from '../assets/securityLayers.svg';
import accessControlMatrix from '../assets/accessControlMatrix.svg';
import securityMetrics from '../assets/securityMetrics.svg';
import securityLayersJa from '../assets/ja/securityLayers.svg';
import accessControlMatrixJa from '../assets/ja/accessControlMatrix.svg';
import securityMetricsJa from '../assets/ja/securityMetrics.svg';
import { useTranslation } from 'react-i18next';
import { useLocalizedSvg } from '../assets/useLocalizedSvg';

interface SecurityComplianceNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const SecurityComplianceNew: React.FC<SecurityComplianceNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');
  const l = useLocalizedSvg();

  const config: TopicConfig = React.useMemo(() => ({
    "id": "security-compliance",
    "title": t('architecture.securityCompliance.configTitle'),
    "slides": [
      {
        "id": "security-compliance-main",
        "sections": [
          {
            "id": "prominentDisplay-section-1",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.securityCompliance.header.title'),
              "titleGradient": "from-red-600 to-purple-600",
              "description": t('architecture.securityCompliance.header.description'),
              "alignment": "center",
              "variant": "header"
            }
          },
          {
            "id": "prominentDisplay-section-2",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.securityCompliance.multiLayeredSecurity.title'),
              "backgroundGradient": "from-red-50 to-purple-50",
              "borderColor": "border-red-500",
              "description": t('architecture.securityCompliance.multiLayeredSecurity.description'),
              "variant": "hero"
            }
          },
          {
            "id": "flexibleGrid-section-3",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.securityCompliance.defenseInDepth.title'),
              "description": t('architecture.securityCompliance.defenseInDepth.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-br from-red-50 to-purple-50",
              "items": [
                {
                  "id": "security-layers-diagram",
                  "title": t('architecture.securityCompliance.defenseInDepth.diagram.title'),
                  "description": t('architecture.securityCompliance.defenseInDepth.diagram.description'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(securityLayers, securityLayersJa),
                    "alt": t('architecture.securityCompliance.defenseInDepth.diagram.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 600 450",
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
              "title": t('architecture.securityCompliance.securityLayerDetails.title'),
              "description": t('architecture.securityCompliance.securityLayerDetails.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "application-api-security",
                  "title": t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.title'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "items": [
                    t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.items.0'),
                    t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.items.1'),
                    t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.items.2'),
                    t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.items.3'),
                    t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.items.4'),
                    t('architecture.securityCompliance.securityLayerDetails.applicationApiSecurity.items.5')
                  ]
                },
                {
                  "id": "data-infrastructure-security",
                  "title": t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.items.0'),
                    t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.items.1'),
                    t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.items.2'),
                    t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.items.3'),
                    t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.items.4'),
                    t('architecture.securityCompliance.securityLayerDetails.dataInfrastructureSecurity.items.5')
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
              "title": t('architecture.securityCompliance.identityAccessManagement.title'),
              "description": t('architecture.securityCompliance.identityAccessManagement.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "authentication-framework",
                  "title": t('architecture.securityCompliance.identityAccessManagement.authenticationFramework.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('architecture.securityCompliance.identityAccessManagement.authenticationFramework.items.0'),
                    t('architecture.securityCompliance.identityAccessManagement.authenticationFramework.items.1'),
                    t('architecture.securityCompliance.identityAccessManagement.authenticationFramework.items.2'),
                    t('architecture.securityCompliance.identityAccessManagement.authenticationFramework.items.3')
                  ]
                },
                {
                  "id": "authorization-controls",
                  "title": t('architecture.securityCompliance.identityAccessManagement.authorizationControls.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('architecture.securityCompliance.identityAccessManagement.authorizationControls.items.0'),
                    t('architecture.securityCompliance.identityAccessManagement.authorizationControls.items.1'),
                    t('architecture.securityCompliance.identityAccessManagement.authorizationControls.items.2'),
                    t('architecture.securityCompliance.identityAccessManagement.authorizationControls.items.3')
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
              "title": t('architecture.securityCompliance.accessControlMatrix.title'),
              "description": t('architecture.securityCompliance.accessControlMatrix.description'),
              "layout": "single",
              "backgroundColor": "bg-gradient-to-br from-blue-50 to-green-50",
              "items": [
                {
                  "id": "access-control-matrix-diagram",
                  "title": t('architecture.securityCompliance.accessControlMatrix.diagram.title'),
                  "description": t('architecture.securityCompliance.accessControlMatrix.diagram.description'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "full-row",
                  "svgDiagram": {
                    "src": l(accessControlMatrix, accessControlMatrixJa),
                    "alt": t('architecture.securityCompliance.accessControlMatrix.diagram.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 500 300",
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
              "title": t('architecture.securityCompliance.dataProtectionPrivacy.title'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "data-classification",
                  "title": t('architecture.securityCompliance.dataProtectionPrivacy.dataClassification.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataClassification.items.0'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataClassification.items.1'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataClassification.items.2'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataClassification.items.3')
                  ]
                },
                {
                  "id": "privacy-controls",
                  "title": t('architecture.securityCompliance.dataProtectionPrivacy.privacyControls.title'),
                  "backgroundColor": "bg-indigo-50",
                  "borderColor": "border-indigo-200",
                  "items": [
                    t('architecture.securityCompliance.dataProtectionPrivacy.privacyControls.items.0'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.privacyControls.items.1'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.privacyControls.items.2'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.privacyControls.items.3')
                  ]
                },
                {
                  "id": "data-loss-prevention",
                  "title": t('architecture.securityCompliance.dataProtectionPrivacy.dataLossPrevention.title'),
                  "backgroundColor": "bg-cyan-50",
                  "borderColor": "border-cyan-200",
                  "items": [
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataLossPrevention.items.0'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataLossPrevention.items.1'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataLossPrevention.items.2'),
                    t('architecture.securityCompliance.dataProtectionPrivacy.dataLossPrevention.items.3')
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
              "title": t('architecture.securityCompliance.complianceFrameworks.title'),
              "description": t('architecture.securityCompliance.complianceFrameworks.description'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "major-frameworks",
                  "title": t('architecture.securityCompliance.complianceFrameworks.majorFrameworks.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('architecture.securityCompliance.complianceFrameworks.majorFrameworks.items.0'),
                    t('architecture.securityCompliance.complianceFrameworks.majorFrameworks.items.1'),
                    t('architecture.securityCompliance.complianceFrameworks.majorFrameworks.items.2'),
                    t('architecture.securityCompliance.complianceFrameworks.majorFrameworks.items.3')
                  ]
                },
                {
                  "id": "additional-compliance",
                  "title": t('architecture.securityCompliance.complianceFrameworks.additionalCompliance.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('architecture.securityCompliance.complianceFrameworks.additionalCompliance.items.0'),
                    t('architecture.securityCompliance.complianceFrameworks.additionalCompliance.items.1'),
                    t('architecture.securityCompliance.complianceFrameworks.additionalCompliance.items.2'),
                    t('architecture.securityCompliance.complianceFrameworks.additionalCompliance.items.3')
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
              "title": t('architecture.securityCompliance.securityMonitoring.title'),
              "layout": "grid-2",
              "items": [
                {
                  "id": "security-operations",
                  "title": t('architecture.securityCompliance.securityMonitoring.securityOperations.title'),
                  "backgroundColor": "bg-orange-50",
                  "borderColor": "border-orange-200",
                  "items": [
                    t('architecture.securityCompliance.securityMonitoring.securityOperations.items.0'),
                    t('architecture.securityCompliance.securityMonitoring.securityOperations.items.1'),
                    t('architecture.securityCompliance.securityMonitoring.securityOperations.items.2'),
                    t('architecture.securityCompliance.securityMonitoring.securityOperations.items.3'),
                    t('architecture.securityCompliance.securityMonitoring.securityOperations.items.4')
                  ]
                },
                {
                  "id": "incident-response",
                  "title": t('architecture.securityCompliance.securityMonitoring.incidentResponse.title'),
                  "backgroundColor": "bg-red-50",
                  "borderColor": "border-red-200",
                  "items": [
                    t('architecture.securityCompliance.securityMonitoring.incidentResponse.items.0'),
                    t('architecture.securityCompliance.securityMonitoring.incidentResponse.items.1'),
                    t('architecture.securityCompliance.securityMonitoring.incidentResponse.items.2')
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
              "title": t('architecture.securityCompliance.securityPerformanceDashboard.title'),
              "description": t('architecture.securityCompliance.securityPerformanceDashboard.description'),
              "layout": "grid-2",
              "backgroundColor": "bg-gradient-to-br from-orange-50 to-red-50",
              "items": [
                {
                  "id": "security-metrics-dashboard",
                  "title": t('architecture.securityCompliance.securityPerformanceDashboard.liveMetrics.title'),
                  "description": t('architecture.securityCompliance.securityPerformanceDashboard.liveMetrics.description'),
                  "backgroundColor": "bg-white/90",
                  "gridSpan": "single",
                  "svgDiagram": {
                    "src": l(securityMetrics, securityMetricsJa),
                    "alt": t('architecture.securityCompliance.securityPerformanceDashboard.liveMetrics.alt'),
                    "width": "100%",
                    "height": "auto",
                    "viewBox": "0 0 400 371",
                    "preserveAspectRatio": "xMidYMid meet",
                    "className": "w-full h-auto border border-gray-200 rounded-lg bg-white p-4"
                  }
                },
                {
                  "id": "operational-metrics",
                  "title": t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.title'),
                  "backgroundColor": "bg-white/90",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.items.0'),
                    t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.items.1'),
                    t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.items.2'),
                    t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.items.3'),
                    t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.items.4'),
                    t('architecture.securityCompliance.securityPerformanceDashboard.operationalMetrics.items.5')
                  ]
                }
              ],
              "variant": "content",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-10",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.securityCompliance.auditGovernance.title'),
              "layout": "grid-3",
              "items": [
                {
                  "id": "audit-logging",
                  "title": t('architecture.securityCompliance.auditGovernance.auditLogging.title'),
                  "backgroundColor": "bg-blue-50",
                  "borderColor": "border-blue-200",
                  "items": [
                    t('architecture.securityCompliance.auditGovernance.auditLogging.items.0'),
                    t('architecture.securityCompliance.auditGovernance.auditLogging.items.1'),
                    t('architecture.securityCompliance.auditGovernance.auditLogging.items.2'),
                    t('architecture.securityCompliance.auditGovernance.auditLogging.items.3')
                  ]
                },
                {
                  "id": "governance-framework",
                  "title": t('architecture.securityCompliance.auditGovernance.governanceFramework.title'),
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border-green-200",
                  "items": [
                    t('architecture.securityCompliance.auditGovernance.governanceFramework.items.0'),
                    t('architecture.securityCompliance.auditGovernance.governanceFramework.items.1'),
                    t('architecture.securityCompliance.auditGovernance.governanceFramework.items.2'),
                    t('architecture.securityCompliance.auditGovernance.governanceFramework.items.3')
                  ]
                },
                {
                  "id": "third-party-audits",
                  "title": t('architecture.securityCompliance.auditGovernance.thirdPartyAudits.title'),
                  "backgroundColor": "bg-purple-50",
                  "borderColor": "border-purple-200",
                  "items": [
                    t('architecture.securityCompliance.auditGovernance.thirdPartyAudits.items.0'),
                    t('architecture.securityCompliance.auditGovernance.thirdPartyAudits.items.1'),
                    t('architecture.securityCompliance.auditGovernance.thirdPartyAudits.items.2'),
                    t('architecture.securityCompliance.auditGovernance.thirdPartyAudits.items.3')
                  ]
                }
              ],
              "variant": "content"
            }
          },
          {
            "id": "flexibleGrid-section-11",
            "type": "flexibleGrid",
            "content": {
              "title": t('architecture.securityCompliance.benefits.title'),
              "backgroundColor": "from-red-50 to-purple-50",
              "borderColor": "border-red-500",
              "categories": [
                {
                  "title": t('architecture.securityCompliance.benefits.enterpriseSecurity.title'),
                  "color": "red",
                  "benefits": [
                    t('architecture.securityCompliance.benefits.enterpriseSecurity.items.0'),
                    t('architecture.securityCompliance.benefits.enterpriseSecurity.items.1'),
                    t('architecture.securityCompliance.benefits.enterpriseSecurity.items.2'),
                    t('architecture.securityCompliance.benefits.enterpriseSecurity.items.3')
                  ]
                },
                {
                  "title": t('architecture.securityCompliance.benefits.businessValue.title'),
                  "color": "purple",
                  "benefits": [
                    t('architecture.securityCompliance.benefits.businessValue.items.0'),
                    t('architecture.securityCompliance.benefits.businessValue.items.1'),
                    t('architecture.securityCompliance.benefits.businessValue.items.2'),
                    t('architecture.securityCompliance.benefits.businessValue.items.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "prominentDisplay-section-12",
            "type": "prominentDisplay",
            "content": {
              "title": t('architecture.securityCompliance.cta.title'),
              "description": t('architecture.securityCompliance.cta.description'),
              "buttonText": t('architecture.securityCompliance.cta.buttonText'),
              "backgroundGradient": "from-red-600 to-purple-600",
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
      config={config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default SecurityComplianceNew;
