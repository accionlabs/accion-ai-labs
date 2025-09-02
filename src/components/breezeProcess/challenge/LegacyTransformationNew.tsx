import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface LegacyTransformationNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Legacy Transformation topic - kept within the component
const legacyTransformationConfig: TopicConfig = {
  "id": "legacy-transformation",
  "title": "Legacy System Transformation",
  "slides": [
    {
      "id": "legacy-transformation-main",
      "sections": [
        {
          "id": "prominentDisplay-section-1",
          "type": "prominentDisplay",
          "content": {
            "title": "Legacy System",
            "subtitle": "Transformation",
            "titleGradient": "from-orange-600 to-red-600",
            "description": "Breeze.AI solves the most challenging problem in software engineering: transforming legacy systems with missing or outdated documentation into modern, well-specified applications.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "flexibleGrid-section-2",
          "type": "flexibleGrid",
          "content": {
            "title": "The Legacy Documentation Crisis",
            "description": "For applications that have been in operation for several years, the documentation problem becomes exponentially more difficult than greenfield development.",
            "columns": 4,
            "items": [
              {
                "id": "missing-documentation",
                "title": "Missing Documentation",
                "description": "Detailed specifications often don't exist or are severely outdated",
                "icon": "📄",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "iconBackgroundColor": "bg-red-100",
                "titleColor": "text-red-800",
                "textColor": "text-red-600"
              },
              {
                "id": "knowledge-erosion",
                "title": "Knowledge Erosion",
                "description": "Original architects and designers may have left, taking contextual knowledge",
                "icon": "🧠",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "iconBackgroundColor": "bg-orange-100",
                "titleColor": "text-orange-800",
                "textColor": "text-orange-600"
              },
              {
                "id": "specification-time-warp",
                "title": "Specification Time Warp",
                "description": "Existing specs reflect best practices from years or decades ago",
                "icon": "⏰",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "iconBackgroundColor": "bg-yellow-100",
                "titleColor": "text-yellow-800",
                "textColor": "text-yellow-600"
              },
              {
                "id": "evolution-without-docs",
                "title": "Evolution Without Docs",
                "description": "Applications evolve through fixes and features, but documentation doesn't follow",
                "icon": "🔄",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "iconBackgroundColor": "bg-purple-100",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-600"
              }
            ],
            "variant": "icons"
          }
        },
        {
          "id": "prominentDisplay-section-3",
          "type": "prominentDisplay",
          "content": {
            "title": "The Vicious Legacy Cycle",
            "backgroundGradient": "from-gray-900 to-gray-800",
            "description": "Applications that most need modernization (legacy systems with outdated specifications) are also the ones with the least reliable foundation for that modernization. Traditional reverse engineering is time-consuming, error-prone, and often incomplete.",
            "icon": "💀",
            "titleColor": "text-red-300",
            "textColor": "text-gray-300",
            "variant": "hero"
          }
        },
        {
          "id": "flexibleGrid-section-4",
          "type": "flexibleGrid",
          "content": {
            "title": "Breeze.AI's Legacy Transformation Solution",
            "description": "One of Breeze.AI's most immediately valuable capabilities addresses the crisis facing long-standing applications: <strong className=\"text-blue-700\">automatic knowledge extraction and modernization</strong>.",
            "backgroundColor": "from-blue-50 to-green-50",
            "borderColor": "border-l-4 border-blue-500",
            "innerBackgroundColor": "bg-white/80 backdrop-blur-sm",
            "variant": "detailed-list",
            "items": [
              {
                "id": "game-changing-capability",
                "title": "The Game-Changing Capability:",
                "description": "Breeze.AI agents can convert existing artifacts—documents, diagrams, or entire code repositories—into structured knowledge graphs using predefined and proven ontologies.",
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
            "title": "Automatic Knowledge Extraction Process",
            "steps": [
              {
                "id": "artifact-analysis",
                "number": 1,
                "title": "Artifact Analysis",
                "description": "Core Breeze.AI ontology agents analyze and convert existing artifacts into machine-readable functional, architectural, and design semantic graphs.",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "circleColor": "bg-blue-500",
                "textColor": "text-blue-800",
                "detailBox": {
                  "title": "Input Sources",
                  "description": "Documents, diagrams, code repositories, database schemas, configuration files, deployment scripts",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-blue-200",
                  "textColor": "text-blue-600"
                }
              },
              {
                "id": "semantic-analysis",
                "number": 2,
                "title": "Semantic Analysis",
                "description": "Goes beyond simple documentation extraction—performs semantic analysis to understand implicit patterns and relationships that exist in the legacy system.",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "circleColor": "bg-green-500",
                "textColor": "text-green-800",
                "detailBox": {
                  "title": "Discovery Capabilities",
                  "description": "Architectural patterns, design conventions, functional behaviors, business rules, data relationships",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-green-200",
                  "textColor": "text-green-600"
                }
              },
              {
                "id": "knowledge-reconstruction",
                "number": 3,
                "title": "Knowledge Reconstruction",
                "description": "Creates a comprehensive semantic model of the existing system that captures both what the system does and the reasoning behind design decisions.",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "circleColor": "bg-purple-500",
                "textColor": "text-purple-800",
                "detailBox": {
                  "title": "Reconstruction Elements",
                  "description": "Business logic patterns, architectural decisions, design rationale, integration patterns, performance considerations",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-purple-200",
                  "textColor": "text-purple-600"
                }
              },
              {
                "id": "gap-identification",
                "number": 4,
                "title": "Gap Identification & Modernization",
                "description": "Interactive visualization tools help identify missing specifications, inconsistent implementations, and areas where the system deviates from modern best practices.",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "circleColor": "bg-orange-500",
                "textColor": "text-orange-800",
                "detailBox": {
                  "title": "Modernization Opportunities",
                  "description": "Security pattern updates, performance optimizations, accessibility improvements, architectural pattern evolution",
                  "backgroundColor": "bg-white",
                  "borderColor": "border-orange-200",
                  "textColor": "text-orange-600"
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
            "title": "Human Validation & Enhancement",
            "description": "The extraction process includes comprehensive human validation to ensure accuracy and completeness.",
            "layout": "grid-2",
            "items": [
              {
                "id": "interactive-validation",
                "title": "Interactive Validation",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Agents represent knowledge graphs through interactive visualizations, documents, and diagrams that make review and correction straightforward",
                  "Visual graph editors for reviewing ontology structures",
                  "Generated documentation for stakeholder review",
                  "Interactive diagrams showing system relationships",
                  "Validation workflows with role-based access"
                ]
              },
              {
                "id": "stakeholder-collaboration",
                "title": "Stakeholder Collaboration",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Human product owners, architects, and designers can validate if extracted information is accurate and complete",
                  "Product owners validate functional requirements",
                  "Architects review and approve technical patterns",
                  "Designers confirm UI/UX specifications",
                  "Developers verify implementation understanding"
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
            "title": "The Tip of the Iceberg Principle",
            "description": "While creating structured documentation from existing artifacts provides immediate value, this capability represents just the beginning of what becomes possible once these knowledge graphs exist.",
            "layout": "single",
            "items": [
              {
                "id": "future-possibilities",
                "title": "Once Knowledge Graphs Exist",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "Automated implementation agents can be created",
                  "Specification evolution becomes systematic",
                  "BDD testing becomes automatic",
                  "Change impact analysis becomes precise",
                  "Modernization becomes manageable"
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
            "title": "Systematic Modernization Advantages",
            "description": "After legacy system analysis, the modernization process gains significant advantages over traditional approaches.",
            "columns": 3,
            "items": [
              {
                "id": "gradual-modernization",
                "title": "Gradual Modernization",
                "description": "Legacy components can be modernized incrementally while maintaining system integrity. No big-bang rewrites required.",
                "icon": "🔄",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "iconBackgroundColor": "bg-green-100",
                "titleColor": "text-green-800",
                "textColor": "text-green-600"
              },
              {
                "id": "pattern-migration",
                "title": "Pattern Migration",
                "description": "Existing patterns can be analyzed and improved while preserving essential business logic. Modernize implementation without losing functionality.",
                "icon": "🔀",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "iconBackgroundColor": "bg-blue-100",
                "titleColor": "text-blue-800",
                "textColor": "text-blue-600"
              },
              {
                "id": "quality-improvement",
                "title": "Quality Improvement",
                "description": "Modern implementation can maintain functional behavior while improving architectural and design adherence to current best practices.",
                "icon": "⬆️",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "iconBackgroundColor": "bg-purple-100",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-600"
              }
            ],
            "variant": "icons"
          }
        },
        {
          "id": "flexibleGrid-section-8",
          "type": "flexibleGrid",
          "content": {
            "title": "Real-World Impact",
            "backgroundColor": "from-blue-50 to-purple-50",
            "borderColor": "border-l-4 border-blue-500",
            "innerBackgroundColor": "bg-white/80 backdrop-blur-sm",
            "variant": "detailed-list",
            "items": [
              {
                "id": "ecommerce-transformation",
                "title": "E-commerce Platform Modernization",
                "description": "15-year-old e-commerce system with minimal documentation transformed into modern, well-specified application in 3 months. <br/>• 847 business rules automatically extracted and documented<br/>• Security patterns updated to current standards<br/>• Performance optimizations applied systematically<br/>• Mobile-responsive design patterns implemented",
                "bulletColor": "bg-blue-500"
              },
              {
                "id": "financial-integration",
                "title": "Financial Services Integration",
                "description": "Legacy banking system with scattered documentation consolidated into unified semantic model enabling rapid integration development. <br/>• Compliance requirements automatically mapped<br/>• API specifications generated from existing interfaces<br/>• Security policies modernized and enforced<br/>• Integration patterns standardized across systems",
                "bulletColor": "bg-purple-500"
              }
            ],
            "containerStyle": "gradient"
          }
        },
        {
          "id": "legacy-breakthrough",
          "type": "prominentDisplay",
          "content": {
            "title": "Breaking the Legacy Modernization Barrier",
            "subtitle": "For the first time, organizations can systematically modernize their legacy applications without the traditional risks and overwhelming costs.",
            "backgroundGradient": "bg-gradient-to-r from-orange-600 to-red-600",
            "textColor": "text-white",
            "items": [
              {
                "id": "traditional-approach",
                "title": "Traditional Legacy Modernization",
                "description": "High-risk, high-cost projects that often fail due to incomplete understanding",
                "cardBackgroundColor": "bg-white/20"
              },
              {
                "id": "breeze-approach",
                "title": "Breeze.AI Legacy Transformation",
                "description": "Systematic, manageable process with complete semantic understanding first",
                "cardBackgroundColor": "bg-white/20"
              }
            ],
            "conclusion": {
              "title": "The Result:",
              "description": "Legacy systems become <strong>modernization opportunities</strong> rather than technical debt liabilities, with clear paths to current best practices.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "Discover Competitive Advantages",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const LegacyTransformationNew: React.FC<LegacyTransformationNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={legacyTransformationConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default LegacyTransformationNew;