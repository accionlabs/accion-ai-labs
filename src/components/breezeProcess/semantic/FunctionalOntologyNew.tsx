import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import functionalOntologyLayers from '../assets/functionalOntologyLayers.svg';
import modalityIndependence from '../assets/modalityIndependence.svg';
import ecommerceJourney from '../assets/ecommerceJourney.svg';

interface FunctionalOntologyNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Functional Ontology topic - kept within the component
const functionalOntologyConfig: TopicConfig = {
  "id": "functional-ontology",
  "title": "Functional Ontology",
  "slides": [
    {
      "id": "functional-ontology-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Functional Ontology",
            "titleGradient": "from-purple-600 to-blue-600",
            "description": "Modality-agnostic representation of user needs and behaviors. This ontology captures what users want to achieve, independent of how those goals are implemented across different interfaces and technologies.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "flexibleGrid-section-2",
          "type": "flexibleGrid",
          "content": {
            "title": "Functional Ontology Layer Structure",
            "description": "Visual representation of the five hierarchical layers that structure functional requirements from abstract personas to concrete atomic actions.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-red-50",
            "items": [
              {
                "id": "functional-layers-diagram",
                "title": "Five-Layer Hierarchy",
                "description": "Each layer builds upon the previous while maintaining modality independence and clear separation of concerns",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": functionalOntologyLayers,
                  "alt": "Functional Ontology Layer Structure Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 800 600",
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
            "title": "Layer Definitions",
            "layout": "single",
            "items": [
              {
                "id": "persona-layer",
                "title": "👤 Persona",
                "description": "User archetypes with specific needs, goals, and contexts",
                "backgroundColor": "bg-purple-100",
                "borderColor": "border-purple-300",
                "items": [
                  "Example: E-commerce Shopper, System Administrator"
                ]
              },
              {
                "id": "outcomes-layer",
                "title": "🎯 Outcomes",
                "description": "High-level goals the persona wants to achieve",
                "backgroundColor": "bg-blue-100",
                "borderColor": "border-blue-300",
                "items": [
                  "Example: Complete Purchase, Monitor System Health"
                ]
              },
              {
                "id": "scenarios-layer",
                "title": "📋 Scenarios",
                "description": "Specific use cases within an outcome",
                "backgroundColor": "bg-green-100",
                "borderColor": "border-green-300",
                "items": [
                  "Example: Buy Gift for Friend, Investigate Performance Alert"
                ]
              },
              {
                "id": "steps-layer",
                "title": "👣 Steps",
                "description": "Logical progression of activities in a scenario",
                "backgroundColor": "bg-orange-100",
                "borderColor": "border-orange-300",
                "items": [
                  "Example: Search Products, Review Options, Make Decision"
                ]
              },
              {
                "id": "actions-layer",
                "title": "⚡ Actions",
                "description": "Atomic user intentions that drive interactions",
                "backgroundColor": "bg-red-100",
                "borderColor": "border-red-300",
                "items": [
                  "Example: Enter Search Term, Filter Results, Compare Items"
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
            "title": "Complete E-commerce Journey Example",
            "description": "Visual representation of how a complete user journey maps through all five layers of the functional ontology with concrete examples.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-red-50",
            "items": [
              {
                "id": "ecommerce-journey-diagram", 
                "title": "Complete Journey Mapping",
                "description": "From persona characteristics through atomic actions, showing the hierarchical decomposition of user needs",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": ecommerceJourney,
                  "alt": "E-commerce Journey Functional Ontology Mapping",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 800 700",
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
            "title": "Action-Level Detail",
            "description": "Each step contains multiple atomic actions that represent the smallest meaningful user intentions.",
            "layout": "grid-2",
            "items": [
              {
                "id": "search-actions",
                "title": "Search Products Actions",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "⚡ Enter Search Term",
                  "⚡ Apply Category Filter"
                ]
              },
              {
                "id": "review-actions",
                "title": "Review Options Actions",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "⚡ View Product Details",
                  "⚡ Compare Products",
                  "⚡ Read Reviews"
                ]
              },
              {
                "id": "decision-actions",
                "title": "Make Decision Actions",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "⚡ Add to Cart",
                  "⚡ Proceed to Checkout"
                ]
              },
              {
                "id": "transaction-actions",
                "title": "Complete Transaction Actions",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "⚡ Enter Shipping Info",
                  "⚡ Enter Payment Info",
                  "⚡ Confirm Purchase"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "prominentDisplay-section-6",

          "type": "prominentDisplay",

          "content": {
            "title": "Modality Independence: The Key Insight",
            "backgroundGradient": "from-purple-50 to-blue-50",
            "borderColor": "border-purple-500",
            "description": "The functional ontology deliberately avoids any reference to specific implementation technologies. \"Enter Search Term\" is the same user intention whether executed through a web form, mobile app, voice interface, or future AR system.",
            "variant": "hero"
          }
        },
        {
          "id": "flexibleGrid-section-7",
          "type": "flexibleGrid",
          "content": {
            "title": "Modality Independence Visualization",
            "description": "Visual demonstration of how a single functional action maintains the same semantic meaning across multiple interface modalities.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50",
            "items": [
              {
                "id": "modality-independence-diagram",
                "title": "Same Function, Different Implementations",
                "description": "One user intention expressed through multiple interface technologies while preserving semantic consistency",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": modalityIndependence,
                  "alt": "Modality Independence Across Interface Types",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 900 500",
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
          "id": "flexibleGrid-section-7b",
          "type": "flexibleGrid",
          "content": {
            "title": "Implementation Examples by Modality",
            "description": "Detailed breakdown showing how functional actions translate to specific interface implementations.",
            "layout": "grid-2",
            "items": [
              {
                "id": "search-term-implementations",
                "title": "⚡ Action: \"Enter Search Term\"",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "💻 Web: Text input field with placeholder",
                  "📱 Mobile: Touch keyboard with search suggestions",
                  "🎤 Voice: Speech recognition with confirmation",
                  "👓 AR: Gesture-based text input or voice command"
                ]
              },
              {
                "id": "filter-implementations",
                "title": "⚡ Action: \"Apply Category Filter\"",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "💻 Web: Dropdown menu or checkbox list",
                  "📱 Mobile: Swipeable filter cards",
                  "🎤 Voice: Spoken category selection",
                  "👓 AR: Spatial gesture-based selection"
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
            "title": "Semantic Richness and Context",
            "description": "Each functional element carries rich semantic metadata that enables intelligent automation and validation.",
            "layout": "grid-3",
            "items": [
              {
                "id": "persona-context",
                "title": "Persona Context",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Demographics and psychographics",
                  "Technical proficiency levels",
                  "Domain knowledge assumptions",
                  "Accessibility requirements",
                  "Cultural and linguistic context"
                ]
              },
              {
                "id": "outcome-validation",
                "title": "Outcome Validation",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Success criteria definitions",
                  "Business value metrics",
                  "User satisfaction indicators",
                  "Performance benchmarks",
                  "Risk and compliance requirements"
                ]
              },
              {
                "id": "action-semantics",
                "title": "Action Semantics",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Pre-conditions and post-conditions",
                  "Data input and output requirements",
                  "Error handling scenarios",
                  "Undo and recovery capabilities",
                  "Security and privacy implications"
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
            "title": "Cross-Ontology Mapping",
            "description": "Functional elements establish formal relationships with Design, Architecture, and Code ontologies, enabling perfect traceability.",
            "layout": "grid-2",
            "items": [
              {
                "id": "traceability-relationships",
                "title": "Traceability Relationships",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "Functional Actions → Design Components",
                  "Scenarios → User Experience Flows",
                  "Outcomes → Architecture Services",
                  "Personas → System Access Patterns"
                ]
              },
              {
                "id": "validation-benefits",
                "title": "Validation Benefits",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "Automatic consistency checking across ontologies",
                  "Impact analysis for requirement changes",
                  "Coverage validation for implementation",
                  "Quality assurance through semantic verification"
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
            "title": "AI Agent Utilization",
            "description": "The semantic richness of the functional ontology enables AI agents to understand and act upon user intentions with human-level comprehension.",
            "layout": "grid-2",
            "items": [
              {
                "id": "agent-capabilities",
                "title": "Agent Capabilities",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "Intent Recognition: Understand user goals from partial descriptions",
                  "Context Inference: Fill in missing information based on persona patterns",
                  "Validation: Verify completeness and consistency of functional specifications",
                  "Generation: Create comprehensive user stories from high-level outcomes"
                ]
              },
              {
                "id": "automation-benefits",
                "title": "Automation Benefits",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "Requirement Elaboration: Expand high-level needs into detailed scenarios",
                  "Edge Case Discovery: Identify missing scenarios and error conditions",
                  "Cross-Platform Consistency: Ensure uniform behavior across modalities",
                  "User Experience Optimization: Suggest improvements based on persona patterns"
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
            "title": "Functional Ontology Benefits",
            "backgroundColor": "from-purple-50 to-blue-50",
            "borderColor": "border-purple-500",
            "categories": [
              {
                "title": "Strategic Benefits",
                "color": "purple",
                "benefits": [
                  "Future-Proof Design: Requirements independent of current technology",
                  "Cross-Platform Consistency: Same user intentions across all interfaces",
                  "Stakeholder Alignment: Clear, unambiguous requirement definitions",
                  "Market Adaptability: Easy extension to new platforms and technologies"
                ]
              },
              {
                "title": "Operational Benefits",
                "color": "blue",
                "benefits": [
                  "Automated Analysis: AI agents can process and validate requirements",
                  "Perfect Traceability: Every implementation traces to user intentions",
                  "Change Impact Assessment: Understand consequences of requirement modifications",
                  "Quality Assurance: Systematic verification of requirement coverage"
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
            "title": "From Function to Form",
            "description": "See how functional requirements get translated into concrete user experience implementations through the Design Ontology.",
            "buttonText": "Explore Design Ontology",
            "backgroundGradient": "from-purple-600 to-blue-600",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const FunctionalOntologyNew: React.FC<FunctionalOntologyNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={functionalOntologyConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default FunctionalOntologyNew;