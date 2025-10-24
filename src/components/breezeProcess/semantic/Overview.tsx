import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import fourOntologies from '../assets/fourOntologies.svg';
import ontologyConnectionFlow from '../assets/ontologyConnectionFlow.svg';
import implementationHierarchy from '../assets/implementationHierarchy.svg';

interface SemanticModelOverviewNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Semantic Model Overview topic - kept within the component
const semanticModelOverviewConfig: TopicConfig = {
  "id": "semantic-model-overview",
  "title": "Semantic Model Structure",
  "slides": [
    {
      "id": "semantic-model-overview-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Semantic Model",
            "subtitle": "Structure",
            "titleGradient": "from-purple-600 via-blue-600 to-green-600",
            "description": "Four distinct but interconnected ontologies that provide comprehensive software engineering governance across application portfolios, enabling strategic initiatives like modernization, rationalization, and greenfield development.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {

          "id": "flexibleGrid-section-2",

          "type": "flexibleGrid",

          "content": {
            "title": "Core Principles",
            "backgroundColor": "from-purple-50 to-blue-50",
            "borderColor": "border-purple-500",
            "categories": [
              {
                "title": "Foundation Principles",
                "color": "purple",
                "benefits": [
                  "Modality-Agnostic Foundation: Functional ontology represents user needs independently of implementation",
                  "Physical Implementation Layers: Design, Architecture, and Code ontologies handle concrete implementations"
                ]
              },
              {
                "title": "Operational Principles",
                "color": "blue",
                "benefits": [
                  "Formal Relationships: Cross-ontology mappings enable traceability and governance analytics",
                  "Independent Operation: Each ontology operates independently while maintaining structured relationships"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {
          "id": "flexibleGrid-section-3",
          "type": "flexibleGrid",
          "content": {
            "title": "Four Ontologies Architecture",
            "description": "Visual representation of the four interconnected ontologies that form the foundation of our semantic model.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-br from-purple-50 via-blue-50 to-orange-50",
            "items": [
              {
                "id": "four-ontologies-diagram",
                "title": "Ontology Structure & Relationships",
                "description": "Interactive diagram showing how the four ontologies connect and relate to each other",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": fourOntologies,
                  "alt": "Four Ontologies Architecture Diagram",
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
          "id": "flexibleGrid-section-3b",
          "type": "flexibleGrid",
          "content": {
            "title": "Ontology Details",
            "description": "Detailed breakdown of each ontology's structure, purpose, and examples.",
            "layout": "grid-2",
            "variant": "cards",
            "items": [
              {
                "id": "functional",
                "title": "Functional Ontology",
                "subtitle": "Modality-Agnostic User Needs",
                "description": "Structure: Persona → Outcomes → Scenarios → Steps → Actions. Purpose: Represents what users want to achieve, independent of how it's implemented",
                "icon": "🎯",
                "backgroundColor": "bg-purple-100",
                "borderColor": "border-purple-500",
                "color": "text-purple-700",
                "example": "\"E-commerce Shopper\" → \"Complete Purchase\" → \"Buy Gift\" → \"Search Products\" → \"Enter Search Term\"",
                "isClickable": true
              },
              {
                "id": "design",
                "title": "Design Ontology",
                "subtitle": "Physical UX Implementation",
                "description": "Structure: User Journeys → Flows → Pages → Templates → Organisms → Molecules → Atoms. Purpose: Defines how user experiences are physically implemented for specific modalities",
                "icon": "🎨",
                "backgroundColor": "bg-blue-100",
                "borderColor": "border-blue-500",
                "color": "text-blue-700",
                "example": "\"Shopping Experience\" → \"Product Discovery Flow\" → \"Search Results Page\" → \"Product Card\" → \"Add to Cart Button\"",
                "isClickable": true
              },
              {
                "id": "architecture",
                "title": "Architecture Ontology",
                "subtitle": "Logical Technical Design",
                "description": "Structure: Layers → Service Types → Services → Entities/Components. Purpose: Logical technical design including services, layers, and system organization patterns",
                "icon": "🏗️",
                "backgroundColor": "bg-green-100",
                "borderColor": "border-green-500",
                "color": "text-green-700",
                "example": "\"Services Layer\" → \"Custom Services\" → \"Product Catalog Service\" → \"Product Entity\"",
                "isClickable": true
              },
              {
                "id": "code",
                "title": "Code Ontology",
                "subtitle": "Physical Implementation Units",
                "description": "Structure: Applications → Modules → Classes/Components → Functions/Methods → Properties/Fields. Purpose: Actual executable code that realizes architecture and functionality",
                "icon": "⚙️",
                "backgroundColor": "bg-orange-100",
                "borderColor": "border-orange-500",
                "color": "text-orange-700",
                "example": "\"E-commerce Web App\" → \"ProductModule\" → \"ProductCard\" → \"renderProductCard()\" → \"product.name\"",
                "isClickable": true
              }
            ]
          }
        },
        {
          "id": "flexibleGrid-section-4",
          "type": "flexibleGrid",
          "content": {
            "title": "How the Ontologies Connect",
            "description": "Visual representation of the relationship flow showing how abstract functional requirements get implemented through concrete design and architectural decisions.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-r from-purple-50 via-blue-50 to-orange-50",
            "items": [
              {
                "id": "ontology-connection-flow-diagram",
                "title": "Ontology Connection Flow",
                "description": "Step-by-step flow showing how user intent drives design, which defines technical architecture, which guides implementation",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": ontologyConnectionFlow,
                  "alt": "Ontology Connection Flow Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 700 400",
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
            "title": "Implementation Hierarchy",
            "description": "Visual representation of how abstract user intentions flow down through increasingly concrete implementation layers.",
            "layout": "single",
            "backgroundColor": "bg-gradient-to-b from-purple-50 via-blue-50 to-orange-50",
            "items": [
              {
                "id": "implementation-hierarchy-diagram",
                "title": "From Abstract to Concrete",
                "description": "Hierarchical view showing the progression from user needs to executable code",
                "backgroundColor": "bg-white/90",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": implementationHierarchy,
                  "alt": "Implementation Hierarchy Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 739.76 450",
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
          "id": "flexibleGrid-section-5b",
          "type": "flexibleGrid",
          "content": {
            "title": "Hierarchy Summary",
            "description": "Three key abstraction levels that enable comprehensive software governance.",
            "layout": "grid-3",
            "items": [
              {
                "id": "what-users-want",
                "title": "What Users Want",
                "description": "Functional ontology captures user intentions and goals independent of implementation",
                "backgroundColor": "bg-purple-50",
                "color": "text-purple-800"
              },
              {
                "id": "how-it-works",
                "title": "How It Looks & Works",
                "description": "Design and Architecture define the user experience and technical structure",
                "backgroundColor": "bg-blue-50",
                "color": "text-blue-800"
              },
              {
                "id": "what-runs",
                "title": "What Actually Runs",
                "description": "Code ontology represents the executable implementation that users interact with",
                "backgroundColor": "bg-orange-50",
                "color": "text-orange-800"
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "flexibleGrid-section-6",
          "type": "flexibleGrid",
          "content": {
            "title": "Governance Benefits",
            "description": "The semantic model structure enables powerful governance capabilities across the entire software development lifecycle.",
            "backgroundColor": "from-gray-50 to-blue-50",
            "borderColor": "border-blue-500",
            "categories": [
              {
                "title": "Strategic Initiatives",
                "color": "blue",
                "benefits": [
                  "Application modernization with functional preservation",
                  "Portfolio rationalization through redundancy analysis",
                  "Cross-modal consistency validation",
                  "Legacy system transformation with semantic continuity"
                ]
              },
              {
                "title": "Governance Analytics",
                "color": "green",
                "benefits": [
                  "Architecture adherence tracking",
                  "Design system compliance monitoring",
                  "Implementation consistency analysis",
                  "Impact analysis for change management"
                ]
              },
              {
                "title": "Quality Assurance",
                "color": "purple",
                "benefits": [
                  "Cross-ontology validation and consistency checking",
                  "Automated compliance verification across all layers",
                  "Traceability from user needs to implementation",
                  "Continuous governance through semantic relationships"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {
          "id": "prominentDisplay-section-7",
          "type": "prominentDisplay",
          "content": {
            "title": "Comprehensive Software Governance",
            "description": "The four-ontology semantic model provides the foundation for end-to-end software engineering governance, enabling strategic portfolio management, quality assurance, and continuous compliance validation across all development activities.",
            "backgroundGradient": "from-purple-600 via-blue-600 to-green-600",
            "textColor": "text-white",
            "variant": "cta",
            "buttonText": "Explore Functional Ontology Details"
          }
        }
      ]
    }
  ]
};

const SemanticModelOverviewNew: React.FC<SemanticModelOverviewNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={semanticModelOverviewConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default SemanticModelOverviewNew;