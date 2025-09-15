import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface BreezeBreakthroughNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Breeze Breakthrough topic - kept within the component
const breezeBreakthroughConfig: TopicConfig = {
  "id": "breeze-breakthrough",
  "title": "The Breeze.AI Breakthrough",
  "slides": [
    {
      "id": "breeze-breakthrough-main",
      "sections": [
        {
          "id": "prominentDisplay-section-1",
          "type": "prominentDisplay",
          "content": {
            "title": "The",
            "subtitle": "Breeze.AI Breakthrough",
            "titleGradient": "from-secondary via-brand-purple-600 to-success",
            "description": "Machine-readable knowledge graphs eliminate the Manual Translation Tax completely, transforming software development from ambiguous interpretation to precise automation.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "flexibleGrid-section-2",
          "type": "flexibleGrid",
          "content": {
            "title": "The Revolutionary Foundation",
            "description": "Breeze AI addresses the Manual Translation Tax by representing functional, architectural, and design requirements as <strong className=\"text-secondary-700\">machine-readable knowledge graphs</strong> built on well-defined and proven ontologies.",
            "backgroundColor": "bg-gradient-to-r from-brand-blue-50 via-brand-purple-50 to-fresh-green-50",
            "borderColor": "border-l-4 border-secondary-500",
            "innerBackgroundColor": "bg-white/80 backdrop-blur-sm",
            "variant": "detailed-list",
            "items": [
              {
                "id": "not-documentation",
                "title": "This isn't simply a documentation improvement—",
                "description": "It's a <strong className=\"text-brand-purple-700\">complete elimination</strong> of the translation impedance mismatch that has historically plagued software development.",
                "bulletColor": "bg-transparent"
              }
            ],
            "containerStyle": "gradient"
          }
        },
        {
          "id": "transformation-comparison",
          "type": "flexibleGrid", 
          "content": {
            "title": "The Transformation",
            "layout": "grid-2",
            "variant": "process-flow",
            "items": [
              {
                "id": "traditional-process",
                "title": "Traditional Process",
                "titleColor": "text-error-700",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "📄",
                    "title": "Business Requirements",
                    "description": "Human language documents",
                    "backgroundColor": "bg-error-50 border-error-200",
                    "iconColor": "bg-error-500",
                    "titleColor": "text-error-800",
                    "descriptionColor": "text-error-600"
                  },
                  {
                    "icon": "🤔", 
                    "title": "Human Interpretation",
                    "description": "Ambiguity & variability",
                    "backgroundColor": "bg-brand-orange-50 border-brand-orange-200",
                    "iconColor": "bg-brand-orange-500",
                    "titleColor": "text-brand-orange-800",
                    "descriptionColor": "text-brand-orange-600"
                  },
                  {
                    "icon": "⚠️",
                    "title": "Implementation Gaps", 
                    "description": "Inconsistent results",
                    "backgroundColor": "bg-warning-50 border-warning-200",
                    "iconColor": "bg-warning-500",
                    "titleColor": "text-warning-800",
                    "descriptionColor": "text-warning-600"
                  },
                  {
                    "icon": "💀",
                    "title": "Technical Debt",
                    "description": "Maintenance nightmares",
                    "backgroundColor": "bg-gray-900 text-white",
                    "iconColor": "bg-error-600",
                    "titleColor": "text-error-300", 
                    "descriptionColor": "text-gray-300"
                  }
                ]
              },
              {
                "id": "breeze-ai-process",
                "title": "Breeze AI Process",
                "titleColor": "text-success-700",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "📋",
                    "title": "Business Requirements",
                    "description": "Same starting point",
                    "backgroundColor": "bg-brand-blue-50 border-secondary-200",
                    "iconColor": "bg-brand-blue-500",
                    "titleColor": "text-secondary-800",
                    "descriptionColor": "text-secondary-600"
                  },
                  {
                    "icon": "🧠",
                    "title": "Knowledge Graphs",
                    "description": "Machine-readable semantics", 
                    "backgroundColor": "bg-success-50 border-success-200",
                    "iconColor": "bg-success-500",
                    "titleColor": "text-success-800",
                    "descriptionColor": "text-success-600"
                  },
                  {
                    "icon": "🤖",
                    "title": "AI Agent Processing",
                    "description": "Zero ambiguity",
                    "backgroundColor": "bg-brand-purple-50 border-brand-purple-200", 
                    "iconColor": "bg-brand-purple-500",
                    "titleColor": "text-brand-purple-800",
                    "descriptionColor": "text-brand-purple-600"
                  },
                  {
                    "icon": "✨",
                    "title": "High Quality Code",
                    "description": "Perfect specification alignment",
                    "backgroundColor": "bg-success-100 border-success-300",
                    "iconColor": "bg-success-600",
                    "titleColor": "text-success-800",
                    "descriptionColor": "text-success-600"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "flexibleGrid-section-3",
          "type": "flexibleGrid",
          "content": {
            "title": "Eliminating Translation Tax Components",
            "columns": 2,
            "items": [
              {
                "id": "zero-interpretation",
                "title": "Zero Interpretation Variability",
                "description": "Machine-readable semantics eliminate human interpretation inconsistencies completely. Every agent processes the same specification identically.",
                "backgroundColor": "bg-success-50",
                "borderColor": "border-success-200",
                "titleColor": "text-success-800",
                "textColor": "text-success-700",
                "iconColor": "bg-success-500"
              },
              {
                "id": "unambiguous-specs",
                "title": "Unambiguous Specifications",
                "description": "Formal ontologies remove ambiguity through precise semantic definitions. No more guessing what the specification meant.",
                "backgroundColor": "bg-brand-blue-50",
                "borderColor": "border-secondary-200",
                "titleColor": "text-secondary-800",
                "textColor": "text-secondary-700",
                "iconColor": "bg-brand-blue-500"
              },
              {
                "id": "perfect-traceability",
                "title": "Perfect Traceability",
                "description": "Direct connections between specifications and implementation enable automatic adherence verification and impact analysis.",
                "backgroundColor": "bg-brand-purple-50",
                "borderColor": "border-brand-purple-200",
                "titleColor": "text-brand-purple-800",
                "textColor": "text-brand-purple-700",
                "iconColor": "bg-brand-purple-500"
              },
              {
                "id": "automatic-propagation",
                "title": "Automatic Change Propagation",
                "description": "Specification changes automatically identify required implementation modifications with zero manual analysis required.",
                "backgroundColor": "bg-warning-50",
                "borderColor": "border-warning-200",
                "titleColor": "text-warning-800",
                "textColor": "text-warning-700",
                "iconColor": "bg-warning-500"
              }
            ],
            "variant": "checklist"
          }
        },
        {
          "id": "critical-difference",
          "type": "flexibleGrid",
          "content": {
            "title": "The Critical Difference",
            "items": [
              {
                "id": "traditional-docs",
                "title": "Traditional Documents",
                "description": "Require human interpretation, contain inherent ambiguity, create implementation variability, impose Manual Translation Tax, cannot be processed by machines",
                "backgroundColor": "bg-error-50",
                "borderColor": "border-error-200",
                "titleColor": "text-error-800",
                "textColor": "text-error-700",
                "icon": "❌"
              },
              {
                "id": "knowledge-graphs-adv",
                "title": "Knowledge Graphs",
                "description": "Systematically understood by AI agents, contain precise semantic definitions, enable consistent processing, eliminate Manual Translation Tax, support automated validation",
                "backgroundColor": "bg-success-50",
                "borderColor": "border-success-200",
                "titleColor": "text-success-800",
                "textColor": "text-success-700",
                "icon": "✅"
              }
            ],
            "timeline": {
              "title": "The Paradigm Difference",
              "description": "Unlike traditional documents that impose the Manual Translation Tax through required human interpretation, <strong>knowledge graphs can be systematically understood, validated, and processed by AI agents</strong>. This eliminates the translation layer that has historically been the source of most implementation misalignments and project inefficiencies.",
              "backgroundColor": "bg-white/80 backdrop-blur-sm",
              "items": []
            },
            "variant": "content",
            "layout": "comparison"
          }
        },
        {
          "id": "four-ontology-framework",
          "type": "flexibleGrid",
          "content": {
            "title": "Four-Ontology Framework",
            "description": "Complete semantic coverage through four interconnected ontologies that work together to eliminate the Manual Translation Tax.",
            "layout": "grid-2",
            "variant": "content",
            "items": [
              {
                "id": "functional",
                "title": "Functional Ontology",
                "description": "Captures business requirements and user stories in structured, machine-processable format while preserving original business intent and context.",
                "icon": "🎯",
                "backgroundColor": "bg-brand-purple-50",
                "borderColor": "border-t-4 border-brand-purple-500",
                "titleColor": "text-brand-purple-800",
                "textColor": "text-brand-purple-700",
                "iconBackgroundColor": "bg-brand-purple-100"
              },
              {
                "id": "architecture",
                "title": "Architecture Ontology",
                "description": "Represents system design patterns, component relationships, and structural guidelines using Accion's proven architectural blueprints.",
                "icon": "🏗️",
                "backgroundColor": "bg-success-50",
                "borderColor": "border-t-4 border-success-500",
                "titleColor": "text-success-800",
                "textColor": "text-success-700",
                "iconBackgroundColor": "bg-success-100"
              },
              {
                "id": "design",
                "title": "Design Ontology",
                "description": "Encodes user interface patterns, interaction models, and design system guidelines ensuring consistent user experiences and accessibility standards.",
                "icon": "🎨",
                "backgroundColor": "bg-brand-blue-50",
                "borderColor": "border-t-4 border-secondary-500",
                "titleColor": "text-secondary-800",
                "textColor": "text-secondary-700",
                "iconBackgroundColor": "bg-brand-blue-100"
              },
              {
                "id": "code",
                "title": "Code Ontology",
                "description": "Automatically converts generated code into semantic graphs, creating bidirectional mapping between specifications and implementation for perfect traceability.",
                "icon": "⚙️",
                "backgroundColor": "bg-warning-50",
                "borderColor": "border-t-4 border-warning-500",
                "titleColor": "text-warning-800",
                "textColor": "text-warning-700",
                "iconBackgroundColor": "bg-warning-100"
              }
            ]
          }
        },
        {
          "id": "game-changer",
          "type": "prominentDisplay",
          "content": {
            "title": "The Game Changer",
            "description": "For the first time in software engineering history, we can eliminate the gap between what we specify and what we implement.",
            "backgroundGradient": "bg-gradient-to-r from-secondary via-brand-purple-600 to-success",
            "textColor": "text-white",
            "items": [
              {
                "id": "zero-ambiguity",
                "title": "Zero Ambiguity",
                "description": "Machine-readable specifications remove all interpretation variability"
              },
              {
                "id": "perfect-traceability-benefit",
                "title": "Perfect Traceability",
                "description": "Every implementation decision traced to exact specification requirement"
              },
              {
                "id": "automatic-evolution",
                "title": "Automatic Evolution",
                "description": "Specification changes propagate automatically with measurable impact"
              }
            ],
            "conclusion": {
              "title": "The Result:",
              "description": "Software development transforms from an error-prone interpretation process to a <strong> precise, automated, and continuously improving system</strong>.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "Explore Revolutionary Capabilities",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const BreezeBreakthroughNew: React.FC<BreezeBreakthroughNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={breezeBreakthroughConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default BreezeBreakthroughNew;