import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface ArchitectureOverviewNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Architecture Overview topic - kept within the component
const architectureOverviewConfig: TopicConfig = {
  "id": "architecture-overview",
  "title": "System Architecture Overview",
  "slides": [
    {
      "id": "architecture-overview-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "System Architecture",
            "subtitle": "Overview",
            "titleGradient": "from-blue-600 to-purple-600",
            "description": "Breeze.AI's architecture is designed around semantic knowledge graphs and intelligent agent orchestration, enabling systematic software development at enterprise scale.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {

          "id": "flexibleGrid-section-2",

          "type": "flexibleGrid",

          "content": {
            "title": "Core Architectural Principles",
            "layout": "grid-4",
            "items": [
              {
                "id": "semantic-first",
                "title": "Semantic-First",
                "description": "Machine-readable knowledge graphs drive all system behavior",
                "icon": "🧠",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "color": "text-blue-800"
              },
              {
                "id": "agent-orchestrated",
                "title": "Agent-Orchestrated",
                "description": "Specialized AI agents handle domain-specific implementation tasks",
                "icon": "🤖",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "color": "text-green-800"
              },
              {
                "id": "bidirectional-traceability",
                "title": "Bidirectional Traceability",
                "description": "Perfect linkage between requirements, design, and implementation",
                "icon": "🔄",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "color": "text-purple-800"
              },
              {
                "id": "evolutionary-design",
                "title": "Evolutionary Design",
                "description": "Specifications and implementations evolve together systematically",
                "icon": "📈",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "color": "text-orange-800"
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "flexibleGrid-section-3",
          "type": "flexibleGrid",
          "content": {
            "title": "Three-Layer System Architecture",
            "description": "Breeze.AI's architecture consists of three interconnected layers that work together to enable semantic-driven software development.",
            "layout": "single",
            "variant": "architecture-layers",
            "items": [
              {
                "id": "knowledge-layer",
                "title": "Layer 1: Knowledge Layer",
                "subtitle": "Semantic Understanding Foundation",
                "description": "Four interconnected ontologies that capture all aspects of software development in machine-readable form.",
                "backgroundColor": "bg-gradient-to-r from-blue-50 to-purple-50",
                "borderColor": "border-l-4 border-blue-500",
                "color": "text-blue-800",
                "subItems": [
                  {
                    "id": "functional",
                    "title": "Functional",
                    "subtitle": "Business Requirements",
                    "backgroundColor": "bg-blue-100",
                    "borderColor": "border-blue-300",
                    "color": "text-blue-800"
                  },
                  {
                    "id": "design",
                    "title": "Design",
                    "subtitle": "User Experience",
                    "backgroundColor": "bg-green-100",
                    "borderColor": "border-green-300",
                    "color": "text-green-800"
                  },
                  {
                    "id": "architecture",
                    "title": "Architecture",
                    "subtitle": "Technical Design",
                    "backgroundColor": "bg-purple-100",
                    "borderColor": "border-purple-300",
                    "color": "text-purple-800"
                  },
                  {
                    "id": "code",
                    "title": "Code", 
                    "subtitle": "Implementation",
                    "backgroundColor": "bg-orange-100",
                    "borderColor": "border-orange-300",
                    "color": "text-orange-800"
                  }
                ]
              },
              {
                "id": "agent-orchestration-layer",
                "title": "Layer 2: Agent Orchestration Layer",
                "subtitle": "Intelligent Automation & Processing",
                "description": "Specialized AI agents that operate on semantic knowledge graphs to perform intelligent automation.",
                "backgroundColor": "bg-gradient-to-r from-yellow-50 to-red-50",
                "borderColor": "border-l-4 border-yellow-500",
                "color": "text-yellow-800",
                "subItems": [
                  {
                    "id": "semantic-agents",
                    "title": "Semantic Agents",
                    "subtitle": "Knowledge Graph Management",
                    "backgroundColor": "bg-yellow-100",
                    "borderColor": "border-yellow-300",
                    "color": "text-yellow-800"
                  },
                  {
                    "id": "implementation-agents",
                    "title": "Implementation Agents",
                    "subtitle": "Code Generation & Testing",
                    "backgroundColor": "bg-red-100",
                    "borderColor": "border-red-300",
                    "color": "text-red-800"
                  },
                  {
                    "id": "quality-agents",
                    "title": "Quality Agents",
                    "subtitle": "Validation & Compliance",
                    "backgroundColor": "bg-indigo-100",
                    "borderColor": "border-indigo-300",
                    "color": "text-indigo-800"
                  }
                ]
              },
              {
                "id": "execution-layer",
                "title": "Layer 3: Execution Layer",
                "subtitle": "Development & Deployment Integration",
                "description": "Integration points with existing development tools and deployment infrastructure.",
                "backgroundColor": "bg-gradient-to-r from-gray-50 to-teal-50",
                "borderColor": "border-l-4 border-gray-500",
                "color": "text-gray-800",
                "subItems": [
                  {
                    "id": "development-environment",
                    "title": "Development Environment",
                    "subtitle": "IDE Integration & Tooling",
                    "backgroundColor": "bg-gray-100",
                    "borderColor": "border-gray-300",
                    "color": "text-gray-800"
                  },
                  {
                    "id": "deployment-pipeline",
                    "title": "Deployment Pipeline",
                    "subtitle": "CI/CD & Infrastructure",
                    "backgroundColor": "bg-teal-100",
                    "borderColor": "border-teal-300",
                    "color": "text-teal-800"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "flexibleGrid-section-4",

          "type": "flexibleGrid",

          "content": {
            "title": "Four-Ontology Framework",
            "description": "At the heart of Breeze.AI's architecture are four interconnected semantic ontologies that capture all aspects of software development in machine-readable form.",
            "layout": "grid-2",
            "items": [
              {
                "id": "functional-ontology",
                "title": "Functional Ontology",
                "description": "Captures modality-agnostic user needs, business rules, and functional requirements independent of implementation technology.",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "color": "text-blue-800",
                "items": [
                  "Business process definitions",
                  "User story specifications",
                  "Domain rules and constraints",
                  "Acceptance criteria"
                ]
              },
              {
                "id": "design-ontology",
                "title": "Design Ontology",
                "description": "Specifies user experience implementation including interface design, interaction patterns, and accessibility requirements.",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "color": "text-green-800",
                "items": [
                  "UI component specifications",
                  "Interaction flow definitions",
                  "Design system compliance",
                  "Accessibility standards"
                ]
              },
              {
                "id": "architecture-ontology",
                "title": "Architecture Ontology",
                "description": "Defines logical technical design including system patterns, integration points, and technology-specific architectural decisions.",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "color": "text-purple-800",
                "items": [
                  "System architecture patterns",
                  "Integration specifications",
                  "Technology stack definitions",
                  "Non-functional requirements"
                ]
              },
              {
                "id": "code-ontology",
                "title": "Code Ontology",
                "description": "Contains physical implementation units including code structure, testing specifications, and deployment configurations.",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "color": "text-orange-800",
                "items": [
                  "Implementation specifications",
                  "Testing and validation rules",
                  "Deployment configurations",
                  "Quality assurance standards"
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
            "title": "Agent Orchestration Model",
            "description": "Specialized AI agents operate on semantic knowledge graphs to perform intelligent automation across the entire software development lifecycle.",
            "layout": "grid-3",
            "items": [
              {
                "id": "semantic-agents-detail",
                "title": "Semantic Agents",
                "description": "Manage knowledge graph creation, evolution, and validation across all four ontologies.",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "color": "text-yellow-800",
                "items": [
                  "Analysis Agents: Extract knowledge from existing artifacts",
                  "Validation Agents: Ensure ontology consistency and completeness",
                  "Evolution Agents: Manage specification updates and migrations"
                ]
              },
              {
                "id": "implementation-agents-detail",
                "title": "Implementation Agents",
                "description": "Generate code, tests, and documentation based on semantic specifications.",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "color": "text-red-800",
                "items": [
                  "Generation Agents: Create implementation artifacts from specifications",
                  "Testing Agents: Generate and execute comprehensive test suites",
                  "Documentation Agents: Produce technical and user documentation"
                ]
              },
              {
                "id": "quality-agents-detail",
                "title": "Quality Agents",
                "description": "Ensure compliance, performance, security, and architectural adherence.",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "color": "text-indigo-800",
                "items": [
                  "Compliance Agents: Validate regulatory and organizational standards",
                  "Security Agents: Implement and verify security patterns",
                  "Performance Agents: Optimize and monitor system performance"
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
            "title": "Architectural Benefits",
            "backgroundColor": "from-blue-50 to-purple-50",
            "borderColor": "border-blue-500",
            "categories": [
              {
                "title": "Technical Advantages",
                "color": "blue",
                "benefits": [
                  "Perfect Traceability: Every implementation element traces to requirements",
                  "Automatic Propagation: Changes cascade through all affected layers",
                  "Quality by Design: Compliance and standards built into generation",
                  "Systematic Evolution: Architecture updates applied consistently"
                ]
              },
              {
                "title": "Business Advantages",
                "color": "purple",
                "benefits": [
                  "Reduced Technical Debt: Specifications and code stay synchronized",
                  "Faster Development: Agents handle routine implementation tasks",
                  "Higher Quality: Systematic quality assurance across all artifacts",
                  "Easier Maintenance: Changes guided by semantic understanding"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {

          "id": "flexibleGrid-section-7",

          "type": "flexibleGrid",

          "content": {
            "title": "Technology Foundation",
            "layout": "grid-4",
            "items": [
              {
                "id": "knowledge-graphs",
                "title": "Knowledge Graphs",
                "description": "RDF/OWL-based semantic graphs with formal ontology definitions",
                "icon": "🔗",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200"
              },
              {
                "id": "ai-orchestration",
                "title": "AI Orchestration",
                "description": "Large language models with specialized fine-tuning for domain tasks",
                "icon": "🤖",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200"
              },
              {
                "id": "cloud-infrastructure",
                "title": "Cloud Infrastructure",
                "description": "Scalable cloud-native architecture with enterprise security",
                "icon": "☁️",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200"
              },
              {
                "id": "integration-apis",
                "title": "Integration APIs",
                "description": "RESTful and GraphQL APIs for development tool integration",
                "icon": "🔌",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200"
              }
            ],
            "variant": "content"
          }
        },
        {
          "id": "prominentDisplay-section-8",
          "type": "prominentDisplay",
          "content": {
            "title": "Understanding System Components",
            "description": "This architectural foundation enables powerful capabilities through carefully designed components working together seamlessly.",
            "backgroundGradient": "bg-gradient-to-r from-blue-600 to-purple-600",
            "textColor": "text-white",
            "variant": "cta",
            "items": [
              {
                "id": "semantic-intelligence",
                "title": "Semantic Intelligence",
                "description": "Machine-readable knowledge graphs enable precise understanding and automated reasoning",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "agent-orchestration",
                "title": "Agent Orchestration",
                "description": "Specialized AI agents work together to handle complex development tasks automatically",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "seamless-integration",
                "title": "Seamless Integration",
                "description": "Native integration with existing development tools and deployment pipelines",
                "backgroundColor": "bg-white/20"
              }
            ],
            "conclusion": {
              "title": "The Result:",
              "description": "A comprehensive platform that transforms software development from <strong>ad-hoc processes</strong> into <strong>systematic, scalable operations</strong>.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "Explore Core Components"
          }
        }
      ]
    }
  ]
};

const ArchitectureOverviewNew: React.FC<ArchitectureOverviewNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={architectureOverviewConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default ArchitectureOverviewNew;