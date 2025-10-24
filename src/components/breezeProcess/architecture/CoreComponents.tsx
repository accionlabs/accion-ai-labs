import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import layeredArchitecture from '../assets/layeredArchitecture.svg';
import specificationProcessFlow from '../assets/specificationProcessFlow.svg';

interface CoreComponentsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Core Components topic - kept within the component
const coreComponentsConfig: TopicConfig = {
  "id": "core-components",
  "title": "Core Components Summary",
  "slides": [
    {
      "id": "core-components-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Core Components",
            "subtitle": "Summary",
            "titleGradient": "from-green-600 to-blue-600",
            "description": "Essential system components that work together to enable semantic-driven software development with intelligent automation and quality assurance.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "flexibleGrid-section-2",
          "type": "flexibleGrid",
          "content": {
            "title": "Knowledge Graph Engine",
            "description": "The foundational component that stores, manages, and evolves semantic knowledge graphs across all four ontologies.",
            "layout": "grid-2",
            "items": [
              {
                "id": "storage-management",
                "title": "Graph Storage & Management",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "titleColor": "text-blue-800",
                "textColor": "text-blue-700",
                "items": [
                  "Neo4j Database: Enterprise-scale graph database for complex knowledge graphs",
                  "In-Memory Graphs: High-performance in-memory storage for smaller, frequently accessed graphs",
                  "Version Control: Git-like versioning for knowledge graph evolution",
                  "Query Engine: Cypher and GraphQL interfaces for data access",
                  "Validation Engine: Constraint checking and consistency validation"
                ]
              },
              {
                "id": "ontology-management",
                "title": "Ontology Management",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "titleColor": "text-green-800",
                "textColor": "text-green-700",
                "items": [
                  "Schema Evolution: Automatic migration of ontology updates",
                  "Cross-Reference Resolution: Maintains links between ontologies",
                  "Conflict Detection: Identifies and resolves specification conflicts",
                  "Impact Analysis: Calculates change effects across all layers"
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
            "title": "Graph Engine Architecture",
            "layout": "grid-2",
            "backgroundColor": "bg-gradient-to-br from-blue-50 to-green-50",
            "items": [
              {
                "id": "architecture-layers",
                "title": "Three-Layer Architecture",
                "backgroundColor": "bg-white/80",
                "items": [
                  "Query Interface Layer: Cypher, GraphQL, REST APIs",
                  "Ontology Management Layer: Schema validation, evolution, conflict resolution",
                  "Storage Layer: Distributed graph database, version control"
                ]
              },
              {
                "id": "architecture-diagram",
                "title": "System Architecture Diagram",
                "backgroundColor": "bg-white/80",
                "gridSpan": "single",
                "svgDiagram": {
                  "src": layeredArchitecture,
                  "alt": "Three-Layer Architecture Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 300 220",
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
          "id": "flexibleGrid-section-4",
          "type": "flexibleGrid",
          "content": {
            "title": "Agent Orchestration Platform",
            "description": "Manages lifecycle, coordination, and execution of specialized AI agents that perform development tasks based on semantic knowledge.",
            "layout": "grid-3",
            "items": [
              {
                "id": "agent-lifecycle",
                "title": "Agent Lifecycle Management",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "titleColor": "text-yellow-800",
                "textColor": "text-yellow-700",
                "items": [
                  "Agent registration and discovery",
                  "Capability matching and routing",
                  "Resource allocation and scaling",
                  "Performance monitoring and optimization"
                ]
              },
              {
                "id": "task-coordination",
                "title": "Task Coordination",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "titleColor": "text-red-800",
                "textColor": "text-red-700",
                "items": [
                  "Workflow orchestration and sequencing",
                  "Inter-agent communication protocols",
                  "Dependency resolution and parallel execution",
                  "Error handling and recovery mechanisms"
                ]
              },
              {
                "id": "quality-assurance",
                "title": "Quality Assurance",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "titleColor": "text-indigo-800",
                "textColor": "text-indigo-700",
                "items": [
                  "Output validation and verification",
                  "Compliance checking and enforcement",
                  "Audit trails and traceability",
                  "Human-in-the-loop integration"
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
            "title": "Agent Types & Specializations",
            "layout": "grid-2",
            "backgroundColor": "bg-gray-50",
            "items": [
              {
                "id": "semantic-agents",
                "title": "Semantic Agents",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "titleColor": "text-gray-800",
                "textColor": "text-gray-600",
                "items": [
                  "Knowledge extraction from legacy systems",
                  "Ontology validation and consistency checking",
                  "Requirement analysis and specification generation",
                  "Business rule discovery and formalization"
                ]
              },
              {
                "id": "implementation-agents",
                "title": "Implementation Agents",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "titleColor": "text-gray-800",
                "textColor": "text-gray-600",
                "items": [
                  "Code generation from semantic specifications",
                  "Test suite creation and execution",
                  "Documentation generation and maintenance",
                  "Deployment automation and configuration"
                ]
              }
            ],
            "variant": "content",
            "containerStyle": "default"
          }
        },
        {
          "id": "flexibleGrid-section-6",
          "type": "flexibleGrid",
          "content": {
            "title": "Semantic Specification Engine",
            "description": "Transforms human requirements into machine-readable specifications across all four ontology layers, ensuring consistency and completeness.",
            "layout": "grid-2",
            "items": [
              {
                "id": "requirements-processing",
                "title": "Requirements Processing",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-700",
                "items": [
                  "Natural Language Analysis: Extract meaning from human requirements",
                  "Ambiguity Resolution: Identify and clarify unclear specifications",
                  "Completeness Checking: Detect missing requirements and edge cases",
                  "Consistency Validation: Ensure requirements don't conflict"
                ]
              },
              {
                "id": "specification-generation",
                "title": "Specification Generation",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "titleColor": "text-orange-800",
                "textColor": "text-orange-700",
                "items": [
                  "Multi-Layer Mapping: Translate requirements across ontologies",
                  "Formal Specification: Generate precise, executable specifications",
                  "Traceability Maintenance: Link specifications to source requirements",
                  "Quality Metrics: Measure specification completeness and quality"
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
            "title": "Specification Flow",
            "description": "Four-step process transforming requirements into formal specifications",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-br from-purple-50 to-orange-50",
            "items": [
              {
                "id": "specification-flow-diagram",
                "title": "Processing Pipeline",
                "description": "Comprehensive four-stage transformation process from human requirements to formal semantic specifications",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": specificationProcessFlow,
                  "alt": "Specification Process Flow Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 680 140",
                  "preserveAspectRatio": "xMidYMid meet",
                  "className": "w-full h-auto object-contain"
                }
              }
            ],
            "variant": "content",
            "containerStyle": "gradient"
          }
        },
        {
          "id": "flexibleGrid-section-8",
          "type": "flexibleGrid",
          "content": {
            "title": "Implementation Generation Engine",
            "description": "Converts semantic specifications into concrete implementation artifacts including code, tests, documentation, and deployment configurations.",
            "layout": "grid-3",
            "items": [
              {
                "id": "documentation-generation",
                "title": "Documentation Generation",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "titleColor": "text-red-800",
                "textColor": "text-red-700",
                "items": [
                  "API documentation and specifications",
                  "User guides and developer documentation",
                  "Architecture and design documentation",
                  "Compliance and audit documentation"
                ],
                "example": "Formats: OpenAPI, Markdown, PDF, Interactive Guides"
              },
              {
                "id": "code-generation",
                "title": "Code Generation",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "titleColor": "text-green-800",
                "textColor": "text-green-700",
                "items": [
                  "Pattern-based code synthesis",
                  "Multi-language support and optimization",
                  "Framework-specific implementations",
                  "Quality standards enforcement"
                ],
                "example": "Supported Patterns: MVC, Microservices, Event-driven, Serverless"
              },
              {
                "id": "test-generation",
                "title": "Test Generation",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "titleColor": "text-blue-800",
                "textColor": "text-blue-700",
                "items": [
                  "BDD test suite creation from specifications",
                  "Unit, integration, and E2E test coverage",
                  "Performance and load testing scenarios",
                  "Accessibility and security testing"
                ],
                "example": "Test Types: Unit, Integration, E2E, Performance, Security"
              }
            ],
            "variant": "detailed-list"
          }
        },
        {
          "id": "flexibleGrid-section-9",
          "type": "flexibleGrid",
          "content": {
            "title": "Quality Assurance Engine",
            "description": "Comprehensive quality validation that ensures all generated artifacts meet organizational standards, compliance requirements, and best practices.",
            "layout": "grid-2",
            "items": [
              {
                "id": "automated-quality-checks",
                "title": "Automated Quality Checks",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "titleColor": "text-indigo-800",
                "textColor": "text-indigo-700",
                "items": [
                  "Code Quality: Static analysis, code standards, complexity metrics",
                  "Security Scanning: Vulnerability detection, secure coding practices",
                  "Performance Analysis: Performance bottlenecks, optimization opportunities",
                  "Accessibility Validation: WCAG compliance, inclusive design patterns"
                ]
              },
              {
                "id": "compliance-validation",
                "title": "Compliance Validation",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "titleColor": "text-teal-800",
                "textColor": "text-teal-700",
                "items": [
                  "Regulatory Compliance: GDPR, HIPAA, SOX, industry standards",
                  "Organizational Policies: Custom rules, governance requirements",
                  "Architectural Compliance: Design pattern adherence, standards conformance",
                  "Documentation Standards: Completeness, accuracy, traceability"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "flexibleGrid-section-10",
          "type": "flexibleGrid",
          "content": {
            "title": "Quality Gate Process",
            "description": "Four critical quality checkpoints ensuring comprehensive validation",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-br from-indigo-50 to-teal-50",
            "items": [
              {
                "id": "quality-gates",
                "title": "Sequential Quality Validation",
                "backgroundColor": "bg-white/80",
                "items": [
                  "Specification Quality: Completeness, consistency, traceability",
                  "Implementation Quality: Code standards, security, performance",
                  "Testing Quality: Coverage, scenarios, validation",
                  "Deployment Quality: Configuration, security, monitoring"
                ]
              }
            ],
            "variant": "content",
            "containerStyle": "gradient"
          }
        },
        {

          "id": "flexibleGrid-section-11",

          "type": "flexibleGrid",

          "content": {
            "title": "Human-in-the-Loop Interface",
            "description": "Sophisticated user interfaces that enable human stakeholders to guide, validate, and enhance the semantic development process at appropriate decision points.",
            "columns": 4,
            "items": [
              {
                "id": "stakeholder-dashboards",
                "title": "Stakeholder Dashboards",
                "description": "Role-based views for product owners, architects, developers, and business users",
                "icon": "👥",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "iconBackgroundColor": "bg-blue-100",
                "titleColor": "text-blue-800",
                "textColor": "text-blue-600"
              },
              {
                "id": "visual-validation-tools",
                "title": "Visual Validation Tools",
                "description": "Interactive diagrams, flowcharts, and knowledge graph visualizations",
                "icon": "🔍",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "iconBackgroundColor": "bg-green-100",
                "titleColor": "text-green-800",
                "textColor": "text-green-600"
              },
              {
                "id": "approval-workflows",
                "title": "Approval Workflows",
                "description": "Structured review and approval processes with audit trails and versioning",
                "icon": "✅",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "iconBackgroundColor": "bg-purple-100",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-600"
              },
              {
                "id": "customization-interface",
                "title": "Customization Interface",
                "description": "Tools for configuring agents, patterns, and organizational standards",
                "icon": "🔧",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "iconBackgroundColor": "bg-orange-100",
                "titleColor": "text-orange-800",
                "textColor": "text-orange-600"
              }
            ],
            "variant": "icons"
          }
        },
        {

          "id": "prominentDisplay-section-12",

          "type": "prominentDisplay",

          "content": {
            "title": "Component Integration & Synergy",
            "backgroundGradient": "from-green-50 to-blue-50",
            "borderColor": "border-green-500",
            "description": "These core components work together as an integrated system, creating capabilities that exceed the sum of their individual parts.",
            "variant": "hero"
          }
        },
        {

          "id": "multiColumn-section-13",

          "type": "multiColumn",

          "content": {
            "title": "Integration Benefits",
            "leftColumn": {
              "sections": [
                {
                  "title": "Seamless Data Flow",
                  "backgroundColor": "bg-green-50",
                  "borderColor": "border border-green-200",
                  "titleColor": "text-green-800",
                  "textColor": "text-green-700",
                  "icon": "🔄",
                  "items": [
                    "Knowledge graphs provide the foundation for all components, ensuring consistent understanding and traceability across the entire development lifecycle",
                    "Requirements flow through specifications to implementation",
                    "Changes propagate automatically across all affected components",
                    "Quality metrics maintain consistency throughout the process"
                  ]
                }
              ]
            },
            "rightColumn": {
              "title": "Intelligent Automation Benefits",
              "backgroundColor": "bg-gradient-to-br from-blue-50 to-green-50",
              "sections": [
                {
                  "title": "Smart Decision Making",
                  "description": "Context-aware automated decisions",
                  "borderColor": "border border-blue-200",
                  "titleColor": "text-blue-800",
                  "textColor": "text-blue-600"
                },
                {
                  "title": "Human Oversight",
                  "description": "Critical decision points remain human-controlled",
                  "borderColor": "border border-green-200",
                  "titleColor": "text-green-800",
                  "textColor": "text-green-600"
                },
                {
                  "title": "Continuous Quality",
                  "description": "Ongoing validation, not afterthought",
                  "borderColor": "border border-purple-200",
                  "titleColor": "text-purple-800",
                  "textColor": "text-purple-600"
                }
              ]
            },
            "variant": "complex-content",
            "layout": "two-column"
          }
        },
        {

          "id": "flexibleGrid-section-14",

          "type": "flexibleGrid",

          "content": {
            "title": "Understanding Component Interactions",
            "backgroundColor": "from-green-50 to-blue-50",
            "borderColor": "border-green-500",
            "categories": [
              {
                "title": "Architecture Patterns",
                "color": "green",
                "benefits": [
                  "Event-Driven Architecture: Components communicate through semantic events and message passing",
                  "Shared Knowledge Base: All components operate on the same semantic understanding",
                  "Quality Feedback Loops: Continuous validation and improvement across all components"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {
          "id": "prominentDisplay-section-15",
          "type": "prominentDisplay",
          "content": {
            "title": "Understanding Component Interactions",
            "description": "These components work together through sophisticated interaction patterns that enable seamless collaboration and data flow.",
            "backgroundGradient": "bg-gradient-to-r from-green-600 to-blue-600",
            "textColor": "text-white",
            "variant": "cta",
            "items": [
              {
                "id": "event-driven-architecture",
                "title": "Event-Driven Architecture",
                "description": "Components communicate through semantic events and message passing",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "shared-knowledge-base",
                "title": "Shared Knowledge Base",
                "description": "All components operate on the same semantic understanding",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "quality-feedback-loops",
                "title": "Quality Feedback Loops",
                "description": "Continuous validation and improvement across all components",
                "backgroundColor": "bg-white/20"
              }
            ],
            "conclusion": {
              "title": "The Result:",
              "description": "An integrated system that delivers <strong>enterprise-grade capabilities</strong> through <strong>intelligent component collaboration</strong>.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "Explore Component Interactions"
          }
        }
      ]
    }
  ]
};

const CoreComponentsNew: React.FC<CoreComponentsNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={coreComponentsConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default CoreComponentsNew;