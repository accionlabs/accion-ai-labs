import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import securityLayers from '../assets/securityLayers.svg';
import accessControlMatrix from '../assets/accessControlMatrix.svg';
import securityMetrics from '../assets/securityMetrics.svg';

interface SecurityComplianceNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Security & Compliance topic - kept within the component
const securityComplianceConfig: TopicConfig = {
  "id": "security-compliance",
  "title": "Security & Compliance",
  "slides": [
    {
      "id": "security-compliance-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Security & Compliance",
            "titleGradient": "from-red-600 to-purple-600",
            "description": "Enterprise-grade security architecture with comprehensive compliance frameworks, ensuring data protection, regulatory adherence, and risk management across all operations.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {

          "id": "prominentDisplay-section-2",

          "type": "prominentDisplay",

          "content": {
            "title": "Multi-Layered Security Architecture",
            "backgroundGradient": "from-red-50 to-purple-50",
            "borderColor": "border-red-500",
            "description": "Defense-in-depth security architecture implementing zero-trust networking principles with comprehensive threat protection across all system layers.",
            "variant": "hero"
          }
        },
        {
          "id": "flexibleGrid-section-3",
          "type": "flexibleGrid",
          "content": {
            "title": "Defense-in-Depth Security Architecture",
            "description": "Visual representation of our four-layer security architecture implementing comprehensive protection strategies.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-br from-red-50 to-purple-50",
            "items": [
              {
                "id": "security-layers-diagram",
                "title": "Multi-Layer Security Architecture",
                "description": "Four distinct security layers providing comprehensive protection from application to infrastructure level",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": securityLayers,
                  "alt": "Security Layers Architecture Diagram",
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
            "title": "Security Layer Details",
            "description": "Detailed breakdown of security controls and technologies within each layer.",
            "layout": "grid-2",
            "items": [
              {
                "id": "application-api-security",
                "title": "Application & API Security",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "🔒 Input Validation: Sanitization & validation",
                  "🛡️ Output Encoding: XSS prevention",
                  "🔑 Session Management: Secure session handling",
                  "⚠️ Error Handling: Information leakage prevention",
                  "🔐 Authentication: JWT, OAuth 2.0, SAML",
                  "👤 Authorization: RBAC, ABAC policies"
                ]
              },
              {
                "id": "data-infrastructure-security",
                "title": "Data & Infrastructure Security",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "🔐 Encryption at Rest: AES-256 encryption",
                  "🔒 Encryption in Transit: TLS 1.3, mTLS",
                  "🗝️ Key Management: HSM, key rotation",
                  "🏷️ Data Classification: Sensitivity labeling",
                  "🌐 Network Segmentation: Micro-segmentation",
                  "🔍 Intrusion Detection: IDS/IPS systems"
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
            "title": "Identity & Access Management",
            "description": "Comprehensive IAM framework implementing zero-trust principles with fine-grained access controls and continuous authentication validation.",
            "layout": "grid-2",
            "items": [
              {
                "id": "authentication-framework",
                "title": "Authentication Framework",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Multi-Factor Authentication: TOTP, FIDO2, biometric options",
                  "Single Sign-On: SAML 2.0, OpenID Connect integration",
                  "Adaptive Authentication: Risk-based authentication policies",
                  "Session Management: Secure session handling with timeout controls"
                ]
              },
              {
                "id": "authorization-controls",
                "title": "Authorization Controls",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Role-Based Access Control: Hierarchical role definitions",
                  "Attribute-Based Access Control: Context-aware permissions",
                  "Just-in-Time Access: Temporary elevated permissions",
                  "Principle of Least Privilege: Minimal required permissions"
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
            "title": "Access Control Matrix",
            "description": "Visual representation of role-based permissions demonstrating granular access control across different system resources.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-br from-blue-50 to-green-50",
            "items": [
              {
                "id": "access-control-matrix-diagram",
                "title": "Permission Matrix by Role",
                "description": "Detailed breakdown of role-based access controls with dynamic permission capabilities",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": accessControlMatrix,
                  "alt": "Access Control Matrix Diagram",
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
            "title": "Data Protection & Privacy",
            "layout": "grid-3",
            "items": [
              {
                "id": "data-classification",
                "title": "Data Classification",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "🌐 Public: No restrictions, standard encryption",
                  "🏢 Internal: Employee access, enhanced encryption",
                  "🔒 Confidential: Restricted access, advanced encryption + DLP",
                  "🚨 Restricted: Highly sensitive, HSM encryption + auditing"
                ]
              },
              {
                "id": "privacy-controls",
                "title": "Privacy Controls",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "Data Minimization: Collect only necessary data",
                  "Purpose Limitation: Use data only for stated purposes",
                  "Storage Limitation: Automatic data retention policies",
                  "User Rights: Access, rectification, erasure, portability"
                ]
              },
              {
                "id": "data-loss-prevention",
                "title": "Data Loss Prevention",
                "backgroundColor": "bg-cyan-50",
                "borderColor": "border-cyan-200",
                "items": [
                  "Content Inspection: Real-time data scanning",
                  "Policy Enforcement: Automated blocking and alerts",
                  "Endpoint Protection: Device-level data controls",
                  "Network Monitoring: Traffic analysis and filtering"
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
            "title": "Compliance Frameworks",
            "description": "Comprehensive compliance coverage for major regulatory frameworks with automated compliance monitoring and reporting capabilities.",
            "layout": "grid-2",
            "items": [
              {
                "id": "major-frameworks",
                "title": "Major Compliance Frameworks",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "🛡️ SOC 2 Type II: Security, availability, processing integrity controls",
                  "📋 ISO 27001: Information security management and risk assessment",
                  "🇪🇺 GDPR: Data subject rights, consent management, breach notification",
                  "🏥 HIPAA: PHI protection, access controls, audit logging"
                ]
              },
              {
                "id": "additional-compliance",
                "title": "Additional Compliance Support",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "💳 PCI DSS: Payment card data security",
                  "🏛️ CCPA: California privacy regulations",
                  "☁️ FedRAMP: Federal cloud security authorization",
                  "🔒 NIST: Cybersecurity framework implementation"
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
            "title": "Security Monitoring & Incident Response",
            "layout": "grid-2",
            "items": [
              {
                "id": "security-operations",
                "title": "24/7 Security Operations Center",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "Continuous Monitoring: Real-time threat detection",
                  "SIEM Integration: Centralized log analysis",
                  "Threat Intelligence: AI-powered threat detection",
                  "Automated Response: Immediate threat containment",
                  "Response Times: Critical (15 min), High (1 hr), Medium (4 hr), Low (24 hr)"
                ]
              },
              {
                "id": "incident-response",
                "title": "Incident Response Plan",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "🔍 Detection & Analysis: Identify and assess security events",
                  "🚨 Containment & Eradication: Isolate threats and remove from systems",
                  "🔄 Recovery & Lessons Learned: Restore operations and improve defenses"
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
            "title": "Security Performance Dashboard",
            "description": "Real-time security metrics demonstrating the effectiveness of our security operations with visual performance indicators.",
            "layout": "grid-2",
            "backgroundColor": "bg-gradient-to-br from-orange-50 to-red-50",
            "items": [
              {
                "id": "security-metrics-dashboard",
                "title": "Live Security Metrics",
                "description": "Real-time dashboard showing key security performance indicators",
                "backgroundColor": "bg-white/90",
                "gridSpan": "single",
                "svgDiagram": {
                  "src": securityMetrics,
                  "alt": "Security Metrics Dashboard",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 400 371",
                  "preserveAspectRatio": "xMidYMid meet",
                  "className": "w-full h-auto border border-gray-200 rounded-lg bg-white p-4"
                }
              },
              {
                "id": "operational-metrics",
                "title": "Operational Security Metrics",
                "backgroundColor": "bg-white/90",
                "borderColor": "border-blue-200",
                "items": [
                  "Mean Time to Detection (MTTD): < 5 minutes",
                  "Mean Time to Response (MTTR): < 15 minutes",
                  "False Positive Rate: < 2%",
                  "Security Training Completion: 99% staff",
                  "Automated Response Rate: 95%",
                  "Security Incident Escalation: < 1%"
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
            "title": "Audit & Governance",
            "layout": "grid-3",
            "items": [
              {
                "id": "audit-logging",
                "title": "Comprehensive Audit Logging",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "All user actions and system events",
                  "Immutable audit trail with digital signatures",
                  "Real-time log analysis and alerting",
                  "Long-term archival: 7 years compliance, 3 years operational"
                ]
              },
              {
                "id": "governance-framework",
                "title": "Governance Framework",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Security policy management",
                  "Risk assessment and mitigation",
                  "Vendor security assessments",
                  "Employee security training programs"
                ]
              },
              {
                "id": "third-party-audits",
                "title": "Third-Party Audits",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Annual SOC 2 Type II audits",
                  "Quarterly penetration testing",
                  "Monthly vulnerability assessments",
                  "Continuous code security reviews"
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
            "title": "Security & Compliance Benefits",
            "backgroundColor": "from-red-50 to-purple-50",
            "borderColor": "border-red-500",
            "categories": [
              {
                "title": "Enterprise Security",
                "color": "red",
                "benefits": [
                  "Zero Trust Architecture: Never trust, always verify principle",
                  "Defense in Depth: Multiple security layers for comprehensive protection",
                  "Continuous Monitoring: Real-time threat detection and response",
                  "Automated Compliance: Built-in compliance validation and reporting"
                ]
              },
              {
                "title": "Business Value",
                "color": "purple",
                "benefits": [
                  "Risk Reduction: Proactive threat prevention and mitigation",
                  "Regulatory Readiness: Automated compliance across multiple frameworks",
                  "Customer Trust: Transparent security practices and certifications",
                  "Operational Efficiency: Automated security processes reduce manual overhead"
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
            "title": "Enterprise-Ready Security Foundation",
            "description": "Breeze.AI's comprehensive security and compliance framework provides the foundation for enterprise adoption with confidence and regulatory adherence. Complete security architecture enables confident adoption in the most security-conscious and regulated environments.",
            "buttonText": "Explore Semantic Model Structure",
            "backgroundGradient": "from-red-600 to-purple-600",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const SecurityComplianceNew: React.FC<SecurityComplianceNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={securityComplianceConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default SecurityComplianceNew;