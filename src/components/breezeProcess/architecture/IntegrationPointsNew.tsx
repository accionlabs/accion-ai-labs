import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import integrationArchitecture from '../assets/integrationArchitecture.svg';
import integrationFlow from '../assets/integrationFlow.svg';

interface IntegrationPointsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Integration Points topic - kept within the component
const integrationPointsConfig: TopicConfig = {
  "id": "integration-points",
  "title": "Integration Points",
  "slides": [
    {
      "id": "integration-points-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Integration Points",
            "titleGradient": "from-cyan-600 to-blue-600",
            "description": "How Breeze.AI integrates seamlessly with existing development tools, infrastructure, and organizational processes through well-defined integration patterns and APIs.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {

          "id": "flexibleGrid-section-2",

          "type": "flexibleGrid",

          "content": {
            "title": "Integration Architecture Overview",
            "description": "Breeze.AI provides a comprehensive integration platform that connects seamlessly with your existing development ecosystem through multiple integration layers.",
            "layout": "single",
            "items": [
              {
                "id": "integration-architecture",
                "title": "Integration Architecture Diagram",
                "description": "Complete overview of how Breeze.AI integrates with development tools, project management, cloud infrastructure, and security systems.",
                "backgroundColor": "bg-gradient-to-br from-cyan-50 to-blue-50",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": integrationArchitecture,
                  "alt": "Integration Architecture Diagram",
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
            "title": "Version Control & CI/CD Integration",
            "description": "Breeze.AI integrates seamlessly with version control systems and CI/CD pipelines to enhance existing development workflows without disruption.",
            "layout": "grid-2",
            "items": [
              {
                "id": "version-control",
                "title": "Version Control Systems",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "🔧 Git: Hooks & actions",
                  "📱 GitHub: Actions & apps",
                  "🦊 GitLab: CI/CD integration",
                  "🪣 Bitbucket: Pipeline integration"
                ]
              },
              {
                "id": "cicd-pipelines",
                "title": "CI/CD Pipelines",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "🏗️ Jenkins: Plugin ecosystem",
                  "☁️ Azure DevOps: Extension available",
                  "⭕ CircleCI: Orb integration",
                  "🏢 TeamCity: Plugin support"
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
            "title": "Integration Process Flow",
            "description": "How Breeze.AI seamlessly integrates with your existing tools through a four-step automated process.",
            "layout": "horizontal",
            "steps": [
              {
                "id": "developer-action",
                "number": 1,
                "title": "Developer Action",
                "description": "Developer commits code, updates requirements, or triggers integration event",
                "color": "bg-green-500",
                "backgroundColor": "bg-green-50"
              },
              {
                "id": "ai-processing",
                "number": 2,
                "title": "AI Processing",
                "description": "Breeze.AI analyzes context, validates semantics, and determines impact",
                "color": "bg-blue-500",
                "backgroundColor": "bg-blue-50"
              },
              {
                "id": "tool-integration",
                "number": 3,
                "title": "Tool Integration",
                "description": "Automated API calls and webhook notifications to integrated tools",
                "color": "bg-purple-500",
                "backgroundColor": "bg-purple-50"
              },
              {
                "id": "quality-validation",
                "number": 4,
                "title": "Quality Validation",
                "description": "Security scanning, compliance checks, and quality gate validation",
                "color": "bg-red-500",
                "backgroundColor": "bg-red-50"
              }
            ],
            "variant": "process-flow",
            "svgDiagram": {
              "src": integrationFlow,
              "alt": "Integration Process Flow Diagram",
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
            "title": "Version Control Capabilities",
            "layout": "grid-2",
            "items": [
              {
                "id": "git-capabilities",
                "title": "Git Integration Features",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Semantic commit validation",
                  "Automatic pull request analysis",
                  "Impact assessment for changes",
                  "Compliance checking on commits"
                ]
              },
              {
                "id": "cicd-capabilities",
                "title": "CI/CD Integration Features",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Semantic test generation",
                  "Quality gate integration",
                  "Deployment validation",
                  "Performance monitoring"
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
            "title": "Testing Framework Integration",
            "description": "Automated test generation and enhancement capabilities integrate with popular testing frameworks to improve coverage and quality assurance processes.",
            "layout": "grid-2",
            "items": [
              {
                "id": "supported-frameworks",
                "title": "Supported Testing Frameworks",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "🧪 Jest: Unit & integration tests",
                  "🌲 Cypress: E2E automation",
                  "🔍 Selenium: Cross-browser testing",
                  "📮 Postman: API testing"
                ]
              },
              {
                "id": "testing-capabilities",
                "title": "Testing Enhancement Capabilities",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "BDD test case generation from specifications",
                  "Comprehensive coverage analysis and optimization",
                  "Test scenario optimization and deduplication",
                  "Intelligent regression test selection"
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
            "title": "Project Management & Collaboration",
            "description": "Integration with project management and collaboration tools ensures requirements traceability and stakeholder communication throughout the development process.",
            "layout": "grid-3",
            "items": [
              {
                "id": "issue-tracking",
                "title": "Issue Tracking",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "📋 Jira: Native integration with bidirectional sync",
                  "📐 Linear: API-based requirements synchronization",
                  "🐙 GitHub Issues: Seamless integration with repositories"
                ]
              },
              {
                "id": "documentation-platforms",
                "title": "Documentation Platforms",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "📖 Confluence: Automatic documentation generation",
                  "📝 Notion: Semantic content synchronization",
                  "📚 GitBook: Technical documentation automation"
                ]
              },
              {
                "id": "communication-tools",
                "title": "Communication Tools",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "💬 Slack: Progress notifications and alerts",
                  "👔 Microsoft Teams: Workflow integration and updates",
                  "🗣️ Discord: Developer community integration"
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
            "title": "Project Management Features",
            "layout": "grid-3",
            "items": [
              {
                "id": "issue-tracking-features",
                "title": "Issue Tracking Features",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "Automatic story point estimation",
                  "Requirements completeness validation",
                  "Progress tracking with semantic metrics"
                ]
              },
              {
                "id": "documentation-features",
                "title": "Documentation Features",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "Auto-generated technical specifications",
                  "Requirements traceability matrices",
                  "API documentation synchronization"
                ]
              },
              {
                "id": "communication-features",
                "title": "Communication Features",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "Quality gate notifications",
                  "Approval request routing",
                  "Deployment status updates"
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
            "title": "Cloud & Infrastructure Integration",
            "description": "Deep integration with cloud platforms and infrastructure services enables automatic deployment, monitoring, and scaling capabilities.",
            "layout": "grid-2",
            "items": [
              {
                "id": "cloud-platforms",
                "title": "Cloud Platforms",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "AWS: Full service integration (EC2, Lambda, RDS, S3)",
                  "Azure: Native DevOps integration (App Service, Functions, SQL)",
                  "Google Cloud: AI/ML service integration (GKE, Cloud Run, BigQuery)"
                ]
              },
              {
                "id": "container-orchestration",
                "title": "Container Orchestration",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Kubernetes: Manifest generation (Helm charts, operators)",
                  "Docker: Containerization automation (Multi-stage builds)",
                  "Infrastructure as Code generation",
                  "Auto-scaling configuration"
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
            "title": "Monitoring & Database Integration",
            "layout": "grid-2",
            "items": [
              {
                "id": "monitoring-observability",
                "title": "Monitoring & Observability",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "📊 Datadog: APM integration (Metrics, traces, logs)",
                  "🔍 New Relic: Performance monitoring (Real user monitoring)",
                  "📈 Grafana: Dashboard automation (Prometheus integration)",
                  "SLA-based alerting rules and incident response automation"
                ]
              },
              {
                "id": "database-systems",
                "title": "Database Systems",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "🐘 PostgreSQL: Schema generation (Migration scripts)",
                  "🍃 MongoDB: Document modeling (Index optimization)",
                  "📊 Redis: Caching strategies (Session management)",
                  "Data model optimization and performance tuning automation"
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
            "title": "Security & Compliance Integration",
            "description": "Integration with security and compliance tools ensures that all generated code and infrastructure meets organizational and regulatory requirements.",
            "layout": "grid-3",
            "items": [
              {
                "id": "security-scanning",
                "title": "Security Scanning",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "🛡️ Snyk: Vulnerability scanning",
                  "🔍 SonarQube: Code quality & security",
                  "🔒 Checkmarx: Static analysis",
                  "Automatic security rule application"
                ]
              },
              {
                "id": "identity-access",
                "title": "Identity & Access",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "🔐 Auth0: Authentication integration",
                  "👤 Okta: SSO & identity management",
                  "☁️ AWS IAM: Role-based access control",
                  "Principle of least privilege enforcement"
                ]
              },
              {
                "id": "compliance-frameworks",
                "title": "Compliance Frameworks",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "📋 SOC 2: Control implementation",
                  "🔒 GDPR: Privacy by design",
                  "🏥 HIPAA: Healthcare compliance",
                  "Automatic compliance validation"
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
            "title": "Explore Scalability & Performance",
            "description": "These integrations are designed to scale with your organization, supporting enterprise workloads while maintaining performance and reliability.",
            "buttonText": "Explore Scalability & Performance",
            "backgroundGradient": "from-cyan-600 to-blue-600",
            "variant": "cta",
            "items": [
              {
                "id": "developer-experience",
                "title": "Developer Experience",
                "description": "Familiar workflows, minimal context switching, gradual adoption, enhanced productivity",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "organizational-benefits",
                "title": "Organizational Benefits", 
                "description": "Reduced tool sprawl, investment protection, compliance continuity, skills transfer",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "integration-principles",
                "title": "Integration Principles",
                "description": "Non-intrusive design, extensible architecture, enterprise-grade security, scalable performance",
                "backgroundColor": "bg-white/20"
              }
            ]
          }
        }
      ]
    }
  ]
};

const IntegrationPointsNew: React.FC<IntegrationPointsNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={integrationPointsConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default IntegrationPointsNew;