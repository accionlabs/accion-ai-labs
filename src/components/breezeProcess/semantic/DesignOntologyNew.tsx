import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import atomicDesignHierarchy from '../assets/atomicDesignHierarchy.svg';
import crossModalConsistency from '../assets/crossModalConsistency.svg';
import designBreakdownExample from '../assets/designBreakdownExample.svg';

interface DesignOntologyNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Design Ontology topic - kept within the component
const designOntologyConfig: TopicConfig = {
  "id": "design-ontology",
  "title": "Design Ontology",
  "slides": [
    {
      "id": "design-ontology-main",
      "sections": [
        {
          "id": "prominentDisplay-section-1",
          "type": "prominentDisplay",
          "content": {
            "title": "Design Ontology",
            "titleGradient": "from-blue-600 to-purple-600",
            "description": "Physical implementation of user experience for specific modalities. This ontology defines how functional requirements are translated into concrete user interfaces and interaction patterns across web, mobile, API, and other modalities.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "flexibleGrid-section-2",
          "type": "flexibleGrid",
          "content": {
            "title": "Atomic Design Hierarchy",
            "description": "Visual representation of the seven-layer design hierarchy from strategic user journeys down to atomic interface elements.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-pink-50",
            "items": [
              {
                "id": "atomic-design-diagram",
                "title": "Seven-Layer Design Structure",
                "description": "From strategic multi-session journeys to atomic interface elements, maintaining clear separation of concerns at each level",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": atomicDesignHierarchy,
                  "alt": "Atomic Design Hierarchy Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 900 650",
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
          "id": "flexibleGrid-section-3",
          "type": "flexibleGrid",
          "content": {
            "title": "Design Layer Definitions",
            "description": "Detailed breakdown of each design layer with clear definitions and practical examples.",
            "layout": "single",
            "items": [
              {
                "id": "user-journeys-layer",
                "title": "🎯 User Journeys",
                "description": "Multi-session experiences spanning multiple applications or extended time periods",
                "backgroundColor": "bg-purple-100",
                "borderColor": "border-purple-300",
                "items": [
                  "Strategic Level: Complete customer lifecycle interactions",
                  "Examples: Customer Lifecycle Journey, Employee Onboarding Journey",
                  "Spans: Multiple sessions, applications, and touchpoints",
                  "Focus: Long-term user relationship and value delivery"
                ]
              },
              {
                "id": "flows-layer",
                "title": "🔄 Flows",
                "description": "Single-session sequences connecting multiple pages or interfaces",
                "backgroundColor": "bg-blue-100",
                "borderColor": "border-blue-300",
                "items": [
                  "Tactical Level: Connected sequences within single sessions",
                  "Examples: Registration Flow, Checkout Flow, Data Import Flow",
                  "Spans: Multiple pages or screens within one session",
                  "Focus: Goal completion and user task success"
                ]
              },
              {
                "id": "pages-layer",
                "title": "📄 Pages/Screens",
                "description": "Complete screen or interface units representing discrete interaction contexts",
                "backgroundColor": "bg-green-100",
                "borderColor": "border-green-300",
                "items": [
                  "Structural Level: Complete interface contexts",
                  "Examples: Product Listing Page, User Profile Page, API Response Schema",
                  "Spans: Single complete interface or data structure",
                  "Focus: Complete user context and information architecture"
                ]
              },
              {
                "id": "templates-layer",
                "title": "📐 Templates",
                "description": "Reusable page-level layout patterns and structures",
                "backgroundColor": "bg-yellow-100",
                "borderColor": "border-yellow-300",
                "items": [
                  "Pattern Level: Reusable structural layouts",
                  "Examples: List Template, Detail Template, Dashboard Template",
                  "Spans: Layout structure and information hierarchy",
                  "Focus: Consistency and reuse across similar contexts"
                ]
              },
              {
                "id": "organisms-layer",
                "title": "🧬 Organisms",
                "description": "Complex component groups with specific functionality",
                "backgroundColor": "bg-red-100",
                "borderColor": "border-red-300",
                "items": [
                  "Component Level: Complex functional groupings",
                  "Examples: Navigation Header, Product Grid, Data Table",
                  "Spans: Multiple related molecules working together",
                  "Focus: Specific functionality and user tasks"
                ]
              },
              {
                "id": "molecules-layer",
                "title": "🧪 Molecules",
                "description": "Simple combinations of atoms with single purpose",
                "backgroundColor": "bg-indigo-100",
                "borderColor": "border-indigo-300",
                "items": [
                  "Combination Level: Purpose-built atom groups",
                  "Examples: Search Box, Product Card, Form Field Group",
                  "Spans: Small groups of atoms with unified purpose",
                  "Focus: Single clear function or display purpose"
                ]
              },
              {
                "id": "atoms-layer",
                "title": "⚛️ Atoms",
                "description": "Individual interface elements that cannot be broken down further",
                "backgroundColor": "bg-pink-100",
                "borderColor": "border-pink-300",
                "items": [
                  "Element Level: Indivisible interface components",
                  "Examples: Button, Input Field, Label, JSON Field",
                  "Spans: Single HTML element or basic UI component",
                  "Focus: Basic interaction and display primitives"
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
            "title": "Design Breakdown Example",
            "description": "Detailed visualization of how a complete web page breaks down through the design hierarchy using a real e-commerce example.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-br from-gray-50 to-pink-50",
            "items": [
              {
                "id": "design-breakdown-diagram",
                "title": "E-commerce Search Results Breakdown",
                "description": "Complete decomposition from flow level down to atomic elements, showing practical implementation of design hierarchy",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": designBreakdownExample,
                  "alt": "Design Breakdown Example Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 1000 700",
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
          "id": "flexibleGrid-section-5",
          "type": "flexibleGrid",
          "content": {
            "title": "Cross-Modal Design Consistency",
            "description": "Comprehensive visualization demonstrating how the same functional requirements translate to different design implementations across various modalities.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-r from-blue-50 via-purple-50 to-yellow-50",
            "items": [
              {
                "id": "cross-modal-diagram",
                "title": "Same Function, Different Forms",
                "description": "How 'Complete Product Purchase' maintains consistency while adapting to Web, Mobile, Voice, and API modalities",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": crossModalConsistency,
                  "alt": "Cross-Modal Design Consistency Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 950 580",
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
            "title": "Modality-Specific Adaptations",
            "description": "How design layers adapt to different platform constraints while maintaining functional consistency.",
            "layout": "grid-2",
            "items": [
              {
                "id": "web-adaptations",
                "title": "💻 Web Modality",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Visual Hierarchy: Rich layouts with complex navigation patterns",
                  "Information Density: Detailed information display with multiple data points",
                  "Interaction Patterns: Mouse and keyboard optimized interactions",
                  "Screen Real Estate: Large displays allow for comprehensive interfaces",
                  "Navigation: Complex menu structures and breadcrumb trails"
                ]
              },
              {
                "id": "mobile-adaptations",
                "title": "📱 Mobile Modality",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Touch Interaction: Touch-optimized controls and gesture support",
                  "Progressive Disclosure: Information revealed progressively to reduce cognitive load",
                  "Simplified Navigation: Tab bars and simplified menu structures",
                  "Screen Constraints: Compact layouts optimized for small screens",
                  "Context Awareness: Location and device sensor integration"
                ]
              },
              {
                "id": "voice-adaptations",
                "title": "🎤 Voice Modality",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Conversational Flow: Natural language dialog patterns",
                  "Context Retention: Memory of conversation state and user preferences",
                  "Error Recovery: Graceful handling of misunderstood commands",
                  "Confirmation Patterns: Verbal confirmation of important actions",
                  "Audio Feedback: Sound design and speech synthesis optimization"
                ]
              },
              {
                "id": "api-adaptations",
                "title": "🔌 API Modality",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "Data Structures: JSON/XML schemas and response patterns",
                  "Error Handling: Structured error responses with meaningful codes",
                  "Versioning: Backward compatibility and evolution strategies",
                  "Documentation: Comprehensive API documentation and examples",
                  "Rate Limiting: Usage quotas and throttling mechanisms"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "prominentDisplay-section-7",
          "type": "prominentDisplay",
          "content": {
            "title": "Design-Function Mapping: The Critical Connection",
            "backgroundGradient": "from-blue-50 to-purple-50",
            "borderColor": "border-blue-500",
            "description": "The Design Ontology creates precise mappings between functional requirements and their modality-specific implementations. Each design element traces directly back to a functional action, ensuring consistency and enabling automated validation.",
            "variant": "hero"
          }
        },
        {
          "id": "flexibleGrid-section-8",
          "type": "flexibleGrid",
          "content": {
            "title": "Traceability and Validation",
            "description": "How design elements maintain perfect traceability to functional requirements and enable automated consistency checking.",
            "layout": "grid-3",
            "items": [
              {
                "id": "functional-mapping",
                "title": "Functional Mapping",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "Direct Traceability: Every design element maps to functional actions",
                  "Consistency Validation: Automated checking across modalities",
                  "Gap Analysis: Identification of unmapped functional requirements",
                  "Impact Assessment: Change propagation analysis"
                ]
              },
              {
                "id": "cross-ontology-links",
                "title": "Cross-Ontology Links",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "Architecture Integration: Design components link to system services",
                  "Code Generation: Design specs drive implementation generation",
                  "Test Coverage: Design elements enable automated test creation",
                  "Documentation: Design patterns inform user documentation"
                ]
              },
              {
                "id": "quality-assurance",
                "title": "Quality Assurance",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "Accessibility Compliance: WCAG and inclusive design validation",
                  "Brand Consistency: Style guide and design system enforcement",
                  "Performance Optimization: Loading and interaction performance metrics",
                  "User Experience Validation: Usability and satisfaction metrics"
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
            "title": "AI Agent Utilization for Design",
            "description": "How AI agents leverage the semantic richness of design ontology to automate design tasks and maintain consistency.",
            "layout": "grid-2",
            "items": [
              {
                "id": "design-generation",
                "title": "Design Generation Capabilities",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "Component Library Creation: Automated generation of design system components",
                  "Layout Optimization: AI-driven layout suggestions based on content and user patterns",
                  "Responsive Design: Automatic adaptation across device sizes and orientations",
                  "Accessibility Enhancement: Automated accessibility improvements and validation"
                ]
              },
              {
                "id": "consistency-maintenance",
                "title": "Consistency Maintenance",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Cross-Modal Validation: Ensuring functional consistency across all modalities",
                  "Brand Compliance: Automated checking against design system guidelines",
                  "Pattern Recognition: Identification of design patterns and anti-patterns",
                  "Evolution Management: Tracking and validating design system changes"
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
            "title": "Design Ontology Benefits",
            "backgroundColor": "from-blue-50 to-purple-50",
            "borderColor": "border-blue-500",
            "categories": [
              {
                "title": "Strategic Benefits",
                "color": "blue",
                "benefits": [
                  "Platform Agnostic Design: Design patterns that adapt to any modality",
                  "Future-Proof Implementation: Design systems that evolve with technology",
                  "Brand Consistency: Unified experience across all touchpoints",
                  "User Experience Excellence: Scientifically validated design decisions"
                ]
              },
              {
                "title": "Operational Benefits",
                "color": "purple",
                "benefits": [
                  "Automated Design Generation: AI-driven component and layout creation",
                  "Perfect Traceability: Every design element traces to business requirements", 
                  "Quality Assurance: Systematic validation of design consistency and accessibility",
                  "Rapid Iteration: Fast prototyping and design system evolution"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {
          "id": "prominentDisplay-section-11",
          "type": "prominentDisplay",
          "content": {
            "title": "From Design to Implementation",
            "description": "See how design specifications get translated into concrete system architectures and technical implementations through the Architecture Ontology.",
            "buttonText": "Explore Architecture Ontology",
            "backgroundGradient": "from-blue-600 to-purple-600",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const DesignOntologyNew: React.FC<DesignOntologyNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={designOntologyConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default DesignOntologyNew;