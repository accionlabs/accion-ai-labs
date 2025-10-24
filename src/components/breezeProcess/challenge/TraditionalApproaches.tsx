import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface TraditionalApproachesNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Traditional Approaches topic - kept within the component
const traditionalApproachesConfig: TopicConfig = {
  "id": "traditional-approaches",
  "title": "Why Traditional Approaches Fail",
  "slides": [
    {
      "id": "traditional-approaches-main",
      "sections": [
        {
          "id": "prominentDisplay-section-1",
          "type": "prominentDisplay",
          "content": {
            "title": "Why",
            "subtitle": "Traditional Approaches Fail",
            "titleGradient": "from-error to-brand-purple-600",
            "description": "Neither Waterfall nor Agile methodologies can solve the Manual Translation Tax. Each creates its own set of problems that make the crisis worse.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "waterfall-reality",
          "type": "flexibleGrid",
          "content": {
            "title": "The Waterfall Reality: When Detailed Specifications Become Impossible",
            "layout": "grid-2",
            "variant": "process-flow",
            "items": [
              {
                "id": "waterfall-process",
                "title": "The Waterfall Promise 🌊",
                "titleColor": "text-brand-blue-700",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "📋",
                    "title": "High-Level Requirements",
                    "description": "Business defines what system should do",
                    "backgroundColor": "bg-brand-blue-50 border-secondary",
                    "iconColor": "bg-secondary",
                    "titleColor": "text-secondary",
                    "descriptionColor": "text-brand-blue-600"
                  },
                  {
                    "icon": "🏗️",
                    "title": "Architectural Guidelines",
                    "description": "System design patterns and structure",
                    "backgroundColor": "bg-success-50 border-success",
                    "iconColor": "bg-success",
                    "titleColor": "text-success-800",
                    "descriptionColor": "text-success-600"
                  },
                  {
                    "icon": "🎨",
                    "title": "Design Systems",
                    "description": "UI patterns and interaction models",
                    "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                    "iconColor": "bg-brand-purple-600",
                    "titleColor": "text-brand-purple-800",
                    "descriptionColor": "text-brand-purple-600"
                  },
                  {
                    "icon": "📝",
                    "title": "Detailed Specifications",
                    "description": "Complete implementation details",
                    "backgroundColor": "bg-warning-50 border-warning",
                    "iconColor": "bg-warning",
                    "titleColor": "text-warning-800",
                    "descriptionColor": "text-warning-600"
                  },
                  {
                    "icon": "💻",
                    "title": "Code Implementation",
                    "description": "Final working software",
                    "backgroundColor": "bg-brand-blue-50 border-brand-blue-200",
                    "iconColor": "bg-brand-blue-500",
                    "titleColor": "text-brand-blue-800",
                    "descriptionColor": "text-brand-blue-600"
                  }
                ]
              },
              {
                "id": "waterfall-breakdown",
                "title": "The Critical Breakdown Point ⚠️",
                "titleColor": "text-error-700",
                "backgroundColor": "bg-error-50",
                "borderColor": "border-error",
                "description": "In practice, the waterfall breaks down at the detailed specification stage due to:",
                "items": [
                  "Complex interdependencies that make detailed specs impossible to maintain",
                  "Legacy evolution and technical debt that contradict original guidelines", 
                  "Rapid business changes that outpace specification updates",
                  "Gap between high-level architecture and implementation reality",
                  "Teams assume incomplete specs will automatically ensure requirement adherence"
                ]
              }
            ]
          }
        },
        {
          "id": "agile-paradox",
          "type": "flexibleGrid",
          "content": {
            "title": "The Agile Paradox: Architecture Lost in Sprints",
            "layout": "grid-2",
            "variant": "process-flow",
            "items": [
              {
                "id": "agile-process",
                "title": "The Agile Promise 🔄",
                "titleColor": "text-success-700",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "📋",
                    "title": "Initial Architecture",
                    "description": "Architects create upfront design and guidelines",
                    "backgroundColor": "bg-brand-blue-50 border-secondary",
                    "iconColor": "bg-secondary",
                    "titleColor": "text-secondary",
                    "descriptionColor": "text-brand-blue-600"
                  },
                  {
                    "icon": "📚",
                    "title": "User Story Backlogs",
                    "description": "Functional requirements captured as stories",
                    "backgroundColor": "bg-success-50 border-success",
                    "iconColor": "bg-success",
                    "titleColor": "text-success-800",
                    "descriptionColor": "text-success-600"
                  },
                  {
                    "icon": "🏃",
                    "title": "Sprint Development",
                    "description": "Teams iterate on functional features",
                    "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                    "iconColor": "bg-brand-purple-600",
                    "titleColor": "text-brand-purple-800",
                    "descriptionColor": "text-brand-purple-600"
                  },
                  {
                    "icon": "🔄",
                    "title": "Functional Evolution",
                    "description": "Requirements adapt through feedback",
                    "backgroundColor": "bg-fresh-green-50 border-fresh-green-200",
                    "iconColor": "bg-fresh-green-500",
                    "titleColor": "text-fresh-green-800",
                    "descriptionColor": "text-fresh-green-600"
                  }
                ]
              },
              {
                "id": "agile-breakdown",
                "title": "The Architectural Reality ⚠️",
                "titleColor": "text-warning-700",
                "backgroundColor": "bg-warning-50",
                "borderColor": "border-warning-200",
                "description": "While functional requirements evolve, architectural specifications stagnate:",
                "items": [
                  "Architecture decisions made at the beginning, then treated as static",
                  "Architects rarely participate in ongoing sprints after initial design",
                  "Engineers must study years-old guidelines with no current context",
                  "No mechanism for architectural specification evolution",
                  "Specification stagnation creates growing gap with implementation reality",
                  "Conway's law oversimplifies the complexity of architectural evolution"
                ]
              }
            ]
          }
        },
        {
          "id": "bdd-dilemma",
          "type": "flexibleGrid",
          "content": {
            "title": "The Behavior-Driven Development Dilemma",
            "description": "BDD represents a proven methodology that dramatically improves functional requirement adherence, yet it faces adoption challenges that reveal deeper systemic issues.",
            "layout": "grid-2",
            "variant": "process-flow",
            "items": [
              {
                "id": "bdd-process",
                "title": "The BDD Promise 🧪",
                "titleColor": "text-success-700",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "📝",
                    "title": "Define Acceptance Tests",
                    "description": "Write tests using domain-specific language (Gherkin)",
                    "backgroundColor": "bg-success-50 border-success",
                    "iconColor": "bg-success",
                    "titleColor": "text-success-800",
                    "descriptionColor": "text-success-600"
                  },
                  {
                    "icon": "💻",
                    "title": "Implement User Stories",
                    "description": "Write code to fulfill user story requirements",
                    "backgroundColor": "bg-brand-blue-50 border-secondary",
                    "iconColor": "bg-secondary",
                    "titleColor": "text-secondary",
                    "descriptionColor": "text-brand-blue-600"
                  },
                  {
                    "icon": "🔗",
                    "title": "Create Protocol Drivers",
                    "description": "Build drivers for domain-specific terms",
                    "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                    "iconColor": "bg-brand-purple-600",
                    "titleColor": "text-brand-purple-800",
                    "descriptionColor": "text-brand-purple-600"
                  },
                  {
                    "icon": "✅",
                    "title": "Execute Acceptance Tests",
                    "description": "Validate requirements through automated testing",
                    "backgroundColor": "bg-fresh-green-50 border-fresh-green-200",
                    "iconColor": "bg-fresh-green-500",
                    "titleColor": "text-fresh-green-800",
                    "descriptionColor": "text-fresh-green-600"
                  }
                ]
              },
              {
                "id": "bdd-reality",
                "title": "The BDD Reality ⚠️",
                "titleColor": "text-error-700",
                "backgroundColor": "bg-error-50",
                "borderColor": "border-error",
                "description": "While BDD almost certainly increases efficiency and productivity, it creates additional workload that teams struggle to maintain:",
                "items": [
                  "Incomplete adoption under deadline pressure",
                  "Eventual abandonment due to manual overhead",
                  "Manual effort becomes unsustainable over time",
                  "Quality practices become casualties of resource constraints",
                  "Teams can't sustain the required discipline consistently",
                  "BDD requires paying the Manual Translation Tax through significant overhead"
                ]
              }
            ],
            "finalResult": {
              "title": "The Manual Translation Tax in Practice",
              "description": "Teams acknowledge that BDD improves quality but can't sustain the manual effort required to implement it properly. This highlights a fundamental issue—when quality-improving practices require paying the Manual Translation Tax through significant manual overhead, they become casualties of deadline pressure and resource constraints.",
              "backgroundColor": "bg-warning-50",
              "textColor": "text-warning-800",
              "icon": "💡"
            }
          }
        },
        {
          "id": "legacy-documentation-crisis",
          "type": "flexibleGrid",
          "content": {
            "title": "The Legacy Documentation Crisis",
            "icon": "📚",
            "description": "For software applications in operation for several years, both the documentation problem and specification evolution problem become even more acute.",
            "items": [
              {
                "id": "missing-documentation",
                "title": "Missing Documentation",
                "description": "Detailed functional, architectural, and design specifications often don't exist or are severely outdated.",
                "backgroundColor": "bg-error-50",
                "borderColor": "border-error",
                "titleColor": "text-error-800",
                "textColor": "text-error-700"
              },
              {
                "id": "knowledge-erosion",
                "title": "Knowledge Erosion",
                "description": "Original architects and designers may have left the organization, taking contextual knowledge about specifications and design.",
                "backgroundColor": "bg-warning-50",
                "borderColor": "border-warning-200",
                "titleColor": "text-warning-800",
                "textColor": "text-warning-700"
              },
              {
                "id": "evolution-without-documentation",
                "title": "Evolution Without Documentation",
                "description": "Applications evolve through bug fixes and enhancements, but these changes rarely update comprehensive specifications.",
                "backgroundColor": "bg-brand-purple-50",
                "borderColor": "border-brand-purple-600",
                "titleColor": "text-brand-purple-800",
                "textColor": "text-brand-purple-700"
              },
              {
                "id": "specification-time-warp",
                "title": "The Specification Time Warp",
                "description": "Many legacy applications operate with specifications reflecting best practices from years or decades ago.",
                "backgroundColor": "bg-brand-blue-50",
                "borderColor": "border-secondary",
                "titleColor": "text-secondary",
                "textColor": "text-brand-blue-700"
              }
            ],
            "reverseEngineeringSection": {
              "title": "Reverse Engineering Impossibility",
              "description": "Attempting to reconstruct current design intent from existing code AND modernize that intent to current best practices is time-consuming, error-prone, and often incomplete.",
              "backgroundColor": "bg-gray-900",
              "textColor": "text-white",
              "challenge": {
                "title": "The Challenge",
                "description": "Teams must simultaneously figure out what the application currently does AND what it should be doing according to modern standards.",
                "backgroundColor": "bg-error-900/50",
                "borderColor": "border-error",
                "textColor": "text-error-200"
              }
            },
            "viciousCycle": {
              "title": "The Vicious Modernization Cycle",
              "description": "Applications that most need modernization (legacy systems with outdated specifications) are also the ones with the least reliable foundation for that modernization. This creates a vicious cycle where the applications that would benefit most from specification evolution are also the ones where such evolution is most risky and difficult to implement.",
              "backgroundColor": "bg-error-50",
              "borderColor": "border-l-4 border-error",
              "titleColor": "text-error-800",
              "textColor": "text-error-700"
            },
            "variant": "detailed-list",
            "layout": "legacy-analysis"
          }
        },
        {
          "id": "systemic-failure",
          "type": "prominentDisplay",
          "content": {
            "title": "The Systemic Failure",
            "description": "Neither Waterfall nor Agile can solve the Manual Translation Tax because both rely on <strong> human interpretation of ambiguous specifications</strong>.",
            "backgroundGradient": "bg-gradient-to-r from-error to-brand-purple-600",
            "textColor": "text-white",
            "items": [
              {
                "id": "waterfall",
                "title": "Waterfall",
                "description": "Detailed specifications become impossible to maintain",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "agile",
                "title": "Agile",
                "description": "Architecture and design specifications stagnate",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "bdd",
                "title": "BDD",
                "description": "Manual overhead makes quality practices unsustainable",
                "backgroundColor": "bg-white/20"
              }
            ],
            "conclusion": {
              "title": "The Real Problem:",
              "description": "<strong>The fundamental reliance on human interpretation</strong> creates an insurmountable gap that no process improvement can bridge.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "Discover the Breeze.AI Breakthrough",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const TraditionalApproachesNew: React.FC<TraditionalApproachesNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={traditionalApproachesConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default TraditionalApproachesNew;