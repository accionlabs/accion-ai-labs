import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface CompetitiveAdvantagesNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Competitive Advantages topic - kept within the component
const competitiveAdvantagesConfig: TopicConfig = {
  "id": "competitive-advantages",
  "title": "Competitive Advantages",
  "slides": [
    {
      "id": "competitive-advantages-main",
      "sections": [
        {
          "id": "prominentDisplay-section-1",
          "type": "prominentDisplay",
          "content": {
            "title": "Competitive Advantages",
            "titleGradient": "from-green-600 to-blue-600",
            "description": "Why Breeze.AI surpasses standard AI tools like Copilot and Cursor: semantic understanding, organizational context, and systematic quality assurance.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "flexibleGrid-section-2",
          "type": "flexibleGrid",
          "content": {
            "title": "The Limitation of Standard AI Tools",
            "description": "While out-of-the-box agent tools like Cursor or Copilot can perform relatively complex code generation, they fundamentally lack the ability to create or use detailed, contextual semantic models by themselves.",
            "layout": "grid-2",
            "items": [
              {
                "id": "what-they-cant-do",
                "title": "⚠️ What Standard Tools Can't Do",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "Understand specific architectural patterns unique to your organization",
                  "Maintain consistency with your established design systems",
                  "Comprehend your business domain models and rules",
                  "Ensure adherence to your compliance and security requirements",
                  "Provide traceability between requirements and implementation"
                ]
              },
              {
                "id": "practical-implications",
                "title": "What This Means in Practice",
                "backgroundColor": "bg-gray-50",
                "borderColor": "border-gray-200",
                "items": [
                  "Generic Code Generation: Works functionally but may not align with your specific architectural guidelines",
                  "No Organizational Context: Operates without understanding critical enterprise patterns and conventions",
                  "Limited Quality Assurance: No systematic way to ensure generated code meets your specific standards"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "prominentDisplay-section-3",
          "type": "prominentDisplay",
          "content": {
            "title": "Breeze.AI's Semantic Understanding Advantage",
            "backgroundGradient": "from-green-50 to-blue-50",
            "borderColor": "border-green-500",
            "description": "Breeze.AI enables the creation of custom agents that understand the functional, architectural, and design semantic models represented in your knowledge graphs.",
            "variant": "hero"
          }
        },
        {
          "id": "flexibleGrid-section-4",
          "type": "flexibleGrid",
          "content": {
            "title": "Semantic Model Integration",
            "layout": "grid-2",
            "items": [
              {
                "id": "semantic-model-integration",
                "title": "Semantic Model Integration",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Architectural Patterns: Agents understand your specific system design principles",
                  "Design Systems: Code generation aligns with your established UI/UX guidelines",
                  "Business Domain Models: Implementation reflects your specific business rules",
                  "Quality Standards: Generated code meets your organizational standards automatically"
                ]
              },
              {
                "id": "contextual-code-generation",
                "title": "Contextual Code Generation",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Code automatically adheres to architectural guidelines",
                  "UI components follow your design system precisely",
                  "Business logic implements domain rules correctly",
                  "Security patterns match your compliance requirements"
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
            "title": "Custom Agent Workflows",
            "description": "Enterprise software development requires custom agent workflows that represent typical use cases occurring in long-standing applications—patterns that repeat but cannot be captured as strict business rules.",
            "backgroundColor": "bg-white",
            "innerBackgroundColor": "bg-purple-50",
            "borderColor": "border-purple-200",
            "variant": "detailed-list",
            "items": [
              {
                "id": "beyond-simple-generation",
                "title": "Beyond Simple Code Generation",
                "description": "These patterns often repeat across different parts of an application but require contextual understanding that only custom agents with semantic model awareness can provide.",
                "bulletColor": "bg-purple-500"
              }
            ],
            "containerStyle": "gradient"
          }
        },
        {
          "id": "flexibleGrid-section-5b",
          "type": "flexibleGrid",
          "content": {
            "title": "Pattern Categories",
            "layout": "grid-3",
            "variant": "content",
            "items": [
              {
                "id": "business-logic-patterns",
                "title": "Business Logic Patterns",
                "backgroundColor": "bg-white",
                "borderColor": "border-purple-200",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-600",
                "items": [
                  "Domain-specific validation rules",
                  "Workflow patterns",
                  "Business process implementations"
                ]
              },
              {
                "id": "architectural-implementation",
                "title": "Architectural Implementation",
                "backgroundColor": "bg-white",
                "borderColor": "border-purple-200",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-600",
                "items": [
                  "Service layer patterns",
                  "Data access patterns",
                  "Integration approaches specific to your stack"
                ]
              },
              {
                "id": "design-interaction-patterns",
                "title": "Design Interaction Patterns",
                "backgroundColor": "bg-white",
                "borderColor": "border-purple-200",
                "titleColor": "text-purple-800",
                "textColor": "text-purple-600",
                "items": [
                  "User flow implementations",
                  "Component interactions",
                  "Accessibility patterns"
                ]
              }
            ]
          }
        },
        {
          "id": "flexibleGrid-section-6",
          "type": "flexibleGrid",
          "content": {
            "title": "Example: E-commerce Pattern Recognition",
            "backgroundColor": "bg-orange-50",
            "borderColor": "border-orange-200",
            "layout": "grid-2",
            "variant": "content",
            "items": [
              {
                "id": "standard-tool-approach",
                "title": "Standard Tool Approach:",
                "backgroundColor": "bg-white",
                "borderColor": "border-orange-200",
                "titleColor": "text-orange-800",
                "textColor": "text-orange-600",
                "items": [
                  "\"Create a product listing page\" → Generates generic listing with basic functionality"
                ]
              },
              {
                "id": "breeze-approach",
                "title": "Breeze.AI Custom Agent Approach:",
                "backgroundColor": "bg-white",
                "borderColor": "border-orange-200",
                "titleColor": "text-orange-800",
                "textColor": "text-orange-600",
                "items": [
                  "Understands your e-commerce semantic model → Implements product listing with your specific filtering patterns, inventory integration, pricing rules, accessibility standards, and design system components"
                ]
              }
            ]
          }
        },
        {
          "id": "flexibleGrid-section-7",
          "type": "flexibleGrid",
          "content": {
            "title": "Systematic Quality Assurance",
            "layout": "grid-2",
            "items": [
              {
                "id": "standard-tools-quality",
                "title": "Standard Tools Quality Approach",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "Manual code review required for quality assurance",
                  "No automatic adherence to organizational standards",
                  "Testing and validation added as separate steps",
                  "Quality practices depend on developer discipline",
                  "No systematic compliance verification"
                ]
              },
              {
                "id": "breeze-integrated-quality",
                "title": "Breeze.AI Integrated Quality",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Quality built into the agent behavior by default",
                  "Automatic adherence to all specification layers",
                  "BDD testing generated automatically with implementation",
                  "Compliance validation happens during generation",
                  "Architectural patterns enforced systematically"
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
            "title": "The Quality Gap Solution",
            "layout": "grid-2",
            "items": [
              {
                "id": "quality-gap-problem",
                "title": "The Quality Gap Problem",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "Standard tools generate functional code but leave quality assurance, compliance verification, and architectural adherence as manual tasks that teams must handle separately."
                ]
              },
              {
                "id": "quality-integration-advantage",
                "title": "The Quality Integration Advantage",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Quality becomes the path of least resistance rather than additional work. Teams get enterprise-grade quality automatically without manual overhead or process discipline requirements."
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
            "title": "Evolutionary Capability",
            "description": "Perhaps the most significant advantage: Breeze.AI enables systematic evolution of architectural and design specifications while standard tools operate with static understanding.",
            "layout": "grid-2",
            "items": [
              {
                "id": "standard-tools-static",
                "title": "Standard Tools: Static Knowledge",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "Training Data Limitation: Knowledge frozen at training time",
                  "No Organizational Learning: Cannot adapt to your specific patterns",
                  "Evolution Resistance: Updating patterns requires model retraining"
                ]
              },
              {
                "id": "breeze-dynamic-evolution",
                "title": "Breeze.AI: Dynamic Evolution",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Living Knowledge Graphs: Specifications evolve with best practices",
                  "Organizational Adaptation: Agents learn and improve from your patterns",
                  "Systematic Modernization: Architecture updates propagate automatically"
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
            "title": "Measurable ROI Advantage",
            "backgroundGradient": "from-blue-50 to-purple-50",
            "borderColor": "border-blue-500",
            "description": "Breeze.AI delivers comprehensive ROI across the entire development lifecycle, not just code generation speed.",
            "variant": "hero"
          }
        },
        {
          "id": "flexibleGrid-section-11",
          "type": "flexibleGrid",
          "content": {
            "title": "ROI Comparison",
            "layout": "grid-2",
            "items": [
              {
                "id": "standard-tools-roi",
                "title": "Standard AI Tools ROI",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Faster initial code generation",
                  "Reduced typing and boilerplate creation",
                  "Some productivity improvement for individual developers",
                  "But: Quality assurance, architectural compliance, and specification evolution remain manual tasks with associated costs"
                ]
              },
              {
                "id": "breeze-comprehensive-roi",
                "title": "Breeze.AI Comprehensive ROI",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Faster implementation of organizational patterns",
                  "Automatic quality assurance and compliance",
                  "Eliminated technical debt from specification drift",
                  "Systematic modernization without project overhead",
                  "Perfect traceability and change impact analysis",
                  "Result: Compound benefits across the entire development lifecycle"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "strategic-difference",
          "type": "prominentDisplay",
          "content": {
            "title": "The Strategic Difference",
            "subtitle": "While standard AI tools provide tactical code generation improvements, Breeze.AI delivers strategic transformation of the entire development process.",
            "backgroundGradient": "bg-gradient-to-r from-green-600 to-blue-600",
            "textColor": "text-white",
            "columns": 3,
            "items": [
              {
                "id": "organizational-intelligence",
                "title": "Organizational Intelligence",
                "description": "Agents understand your specific patterns, standards, and requirements",
                "cardBackgroundColor": "bg-white/20"
              },
              {
                "id": "systematic-quality",
                "title": "Systematic Quality",
                "description": "Quality assurance built into every generated component automatically",
                "cardBackgroundColor": "bg-white/20"
              },
              {
                "id": "continuous-evolution",
                "title": "Continuous Evolution",
                "description": "Specifications and implementations evolve together systematically",
                "cardBackgroundColor": "bg-white/20"
              }
            ],
            "ultimateResult": {
              "title": "The Bottom Line:",
              "description": "Standard tools help you <strong>code faster</strong>. Breeze.AI helps you <strong>build better software systematically</strong> while coding faster.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "Explore System Architecture",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const CompetitiveAdvantagesNew: React.FC<CompetitiveAdvantagesNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={competitiveAdvantagesConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default CompetitiveAdvantagesNew;