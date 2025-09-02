import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import componentInteractionsDiagram from '../assets/componentInteractionsDiagram.svg';

interface ComponentInteractionsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Component Interactions topic - kept within the component
const componentInteractionsConfig: TopicConfig = {
  "id": "component-interactions",
  "title": "Component Interactions",
  "slides": [
    {
      "id": "component-interactions-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Component Interactions",
            "titleGradient": "from-purple-600 to-pink-600",
            "description": "How Breeze.AI components communicate and collaborate through event-driven architecture, shared semantic understanding, and intelligent orchestration patterns.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {

          "id": "flexibleGrid-section-2",

          "type": "flexibleGrid",

          "content": {
            "title": "Interaction Architecture Overview",
            "description": "Breeze.AI uses an event-driven, semantic-aware interaction model where components communicate through well-defined interfaces while maintaining shared context.",
            "layout": "single",
            "items": [
              {
                "id": "central-architecture",
                "title": "Component Interaction Flow",
                "description": "All components interact through a central Knowledge Graph that serves as the single source of truth, with specialized engines handling different aspects of the development process.",
                "backgroundColor": "bg-gradient-to-br from-purple-50 to-pink-50",
                "gridSpan": "full-row",
                "svgDiagram": {
                  "src": componentInteractionsDiagram,
                  "alt": "Component Interaction Flow Diagram",
                  "width": "100%",
                  "height": "auto",
                  "viewBox": "0 0 600 384",
                  "preserveAspectRatio": "xMidYMid meet",
                  "className": "border border-gray-200 rounded-lg bg-white p-4 max-w-full h-auto"
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
            "title": "Core Interaction Components",
            "layout": "grid-2",
            "items": [
              {
                "id": "specification-engine",
                "title": "📋 Specification Engine",
                "subtitle": "Requirements → Semantics",
                "description": "Converts human requirements into machine-readable semantic form",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-300",
                "color": "text-yellow-800"
              },
              {
                "id": "agent-platform",
                "title": "🤖 Agent Platform",
                "subtitle": "Task Orchestration",
                "description": "Coordinates specialized AI agents to execute development tasks",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-300",
                "color": "text-red-800"
              },
              {
                "id": "knowledge-graph",
                "title": "🔗 Knowledge Graph",
                "subtitle": "Central Truth Source",
                "description": "Maintains semantic relationships and serves as the central coordination hub",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-300",
                "color": "text-blue-800"
              },
              {
                "id": "generation-engine",
                "title": "⚙️ Generation Engine",
                "subtitle": "Semantics → Code",
                "description": "Transforms semantic specifications into executable implementations",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-300",
                "color": "text-green-800"
              },
              {
                "id": "quality-engine",
                "title": "✅ Quality Engine",
                "subtitle": "Validation & Compliance",
                "description": "Ensures all outputs meet quality, security, and compliance standards",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-300",
                "color": "text-indigo-800"
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-4",

          "type": "flexibleGrid",

          "content": {
            "title": "Information Flow Patterns",
            "layout": "grid-4",
            "items": [
              {
                "id": "requirements-flow",
                "title": "Requirements Flow",
                "description": "Specification Engine → Knowledge Graph",
                "icon": "🟡",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200"
              },
              {
                "id": "agent-coordination",
                "title": "Agent Coordination",
                "description": "Agent Platform ↔ Knowledge Graph",
                "icon": "🔴",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200"
              },
              {
                "id": "implementation-flow",
                "title": "Implementation Flow",
                "description": "Knowledge Graph → Generation Engine",
                "icon": "🟢",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200"
              },
              {
                "id": "quality-feedback",
                "title": "Quality Feedback",
                "description": "Quality Engine → Knowledge Graph",
                "icon": "🟣",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200"
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-5",

          "type": "flexibleGrid",

          "content": {
            "title": "Event-Driven Communication",
            "description": "Components communicate through semantic events that carry rich contextual information, enabling intelligent routing and processing decisions.",
            "layout": "grid-2",
            "items": [
              {
                "id": "semantic-event-structure",
                "title": "Semantic Event Structure",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "event: \"requirement.updated\"",
                  "source: \"specification.engine\"",
                  "ontology: \"functional\"",
                  "entity: \"user-story-123\"",
                  "changes: [\"acceptance-criteria\"]",
                  "impact: [\"design\", \"architecture\"]"
                ]
              },
              {
                "id": "event-categories",
                "title": "Event Categories",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Knowledge Events: Ontology updates, validation results",
                  "Process Events: Task completion, workflow state changes",
                  "Quality Events: Validation failures, compliance alerts",
                  "User Events: Approval decisions, manual overrides"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "sequentialContent-section-6",

          "type": "sequentialContent",

          "content": {
            "title": "Event Flow Example",
            "layout": "vertical",
            "steps": [
              {
                "id": "requirement-change",
                "number": 1,
                "title": "Requirement Change",
                "description": "User updates acceptance criteria in specification engine",
                "color": "bg-purple-500",
                "backgroundColor": "bg-purple-50"
              },
              {
                "id": "impact-analysis",
                "number": 2,
                "title": "Impact Analysis",
                "description": "Knowledge graph identifies affected design and code elements",
                "color": "bg-blue-500",
                "backgroundColor": "bg-blue-50"
              },
              {
                "id": "agent-orchestration",
                "number": 3,
                "title": "Agent Orchestration",
                "description": "Relevant agents receive update tasks with full context",
                "color": "bg-green-500",
                "backgroundColor": "bg-green-50"
              },
              {
                "id": "synchronized-update",
                "number": 4,
                "title": "Synchronized Update",
                "description": "All affected components update simultaneously",
                "color": "bg-orange-500",
                "backgroundColor": "bg-orange-50"
              }
            ],
            "variant": "timeline"
          }
        },
        {

          "id": "flexibleGrid-section-7",

          "type": "flexibleGrid",

          "content": {
            "title": "Agent Coordination Patterns",
            "description": "Specialized AI agents work together through sophisticated coordination patterns that ensure consistent, high-quality outcomes.",
            "layout": "grid-3",
            "items": [
              {
                "id": "sequential-coordination",
                "title": "Sequential Coordination",
                "description": "Agents work in predefined sequences where output from one agent becomes input for the next.",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "Example: Specification Agent → Design Agent → Implementation Agent → Test Agent",
                  "Benefits: Guaranteed consistency, Clear dependency management, Predictable execution flow"
                ]
              },
              {
                "id": "parallel-coordination",
                "title": "Parallel Coordination",
                "description": "Multiple agents work simultaneously on different aspects of the same semantic specification.",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Example: Frontend Agent || Backend Agent || Database Agent || Test Agent",
                  "Benefits: Faster execution time, Resource optimization, Independent validation"
                ]
              },
              {
                "id": "collaborative-coordination",
                "title": "Collaborative Coordination",
                "description": "Agents actively communicate and negotiate to resolve conflicts and optimize outcomes.",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Example: Performance Agent ↔ Security Agent ↔ Cost Agent",
                  "Benefits: Optimal trade-offs, Conflict resolution, Adaptive behavior"
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
            "title": "Data Flow and State Management",
            "layout": "grid-2",
            "items": [
              {
                "id": "centralized-knowledge",
                "title": "Centralized Knowledge State",
                "description": "The knowledge graph serves as the single source of truth, with all components maintaining consistent views of the current state.",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "Version Control: All changes tracked with full history",
                  "Consistency Guarantees: ACID properties for critical updates",
                  "Event Sourcing: State reconstructable from event log",
                  "Conflict Resolution: Automatic and manual resolution strategies"
                ]
              },
              {
                "id": "distributed-caching",
                "title": "Distributed Caching",
                "description": "Components maintain local caches of relevant knowledge subsets for performance while ensuring consistency.",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "Smart Invalidation: Cache updates based on semantic dependencies",
                  "Prefetching: Anticipate data needs based on workflow patterns",
                  "Eventual Consistency: Balanced performance and consistency"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "sequentialContent-section-9",

          "type": "sequentialContent",

          "content": {
            "title": "State Synchronization Flow",
            "layout": "vertical",
            "steps": [
              {
                "id": "state-change-detection",
                "number": 1,
                "title": "State Change Detection",
                "description": "Knowledge graph detects semantic changes and calculates impact scope",
                "color": "bg-indigo-500",
                "backgroundColor": "bg-indigo-50"
              },
              {
                "id": "dependency-analysis",
                "number": 2,
                "title": "Dependency Analysis",
                "description": "System identifies all components affected by the change",
                "color": "bg-blue-500",
                "backgroundColor": "bg-blue-50"
              },
              {
                "id": "coordinated-update",
                "number": 3,
                "title": "Coordinated Update",
                "description": "All affected components receive updates in dependency order",
                "color": "bg-green-500",
                "backgroundColor": "bg-green-50"
              },
              {
                "id": "validation-confirmation",
                "number": 4,
                "title": "Validation & Confirmation",
                "description": "Components validate changes and confirm successful update",
                "color": "bg-teal-500",
                "backgroundColor": "bg-teal-50"
              }
            ],
            "variant": "timeline"
          }
        },
        {

          "id": "flexibleGrid-section-10",

          "type": "flexibleGrid",

          "content": {
            "title": "Quality Assurance Interactions",
            "description": "Quality validation is deeply integrated into component interactions, ensuring standards are maintained throughout all processes.",
            "layout": "grid-3",
            "items": [
              {
                "id": "continuous-validation",
                "title": "Continuous Validation",
                "description": "Quality checks occur at every interaction point, not just at final stages.",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "Pre-flight Checks: Validate inputs before processing",
                  "In-process Monitoring: Real-time quality metrics during execution",
                  "Post-processing Validation: Comprehensive output verification",
                  "Rollback Capabilities: Automatic reversion on quality failures"
                ]
              },
              {
                "id": "quality-gates",
                "title": "Quality Gates",
                "description": "Mandatory quality checkpoints that must pass before proceeding to next stages.",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "Specification Gates: Requirements completeness and consistency",
                  "Design Gates: Architecture compliance and usability standards",
                  "Implementation Gates: Code quality and security standards",
                  "Deployment Gates: Performance and reliability requirements"
                ]
              },
              {
                "id": "quality-interaction-pattern",
                "title": "Quality Interaction Pattern",
                "description": "Step-by-step quality validation workflow",
                "backgroundColor": "bg-gradient-to-br from-red-50 to-orange-50",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "📝",
                    "title": "Component Action",
                    "description": "Agent performs development task",
                    "backgroundColor": "bg-white",
                    "iconColor": "bg-blue-500"
                  },
                  {
                    "icon": "✓",
                    "title": "Quality Validation",
                    "description": "Quality engine validates output",
                    "backgroundColor": "bg-white",
                    "iconColor": "bg-red-500"
                  },
                  {
                    "icon": "✓",
                    "title": "Pass: Continue",
                    "description": "Validation passes, next component proceeds",
                    "backgroundColor": "bg-white",
                    "iconColor": "bg-green-500"
                  },
                  {
                    "icon": "⚠",
                    "title": "Fail: Remediate",
                    "description": "Validation fails, automatic retry or human intervention",
                    "backgroundColor": "bg-white",
                    "iconColor": "bg-orange-500"
                  }
                ]
              }
            ],
            "variant": "process-flow"
          }
        },
        {

          "id": "flexibleGrid-section-11",

          "type": "flexibleGrid",

          "content": {
            "title": "Human-in-the-Loop Integration",
            "description": "Human stakeholders are seamlessly integrated into component interactions at strategic decision points without disrupting automated workflows.",
            "layout": "grid-3",
            "items": [
              {
                "id": "strategic-decisions",
                "title": "Strategic Decision Points",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Requirement Ambiguity: Clarification requests to stakeholders",
                  "Architecture Trade-offs: Performance vs. cost decisions",
                  "Design Alternatives: UX approach selection",
                  "Quality Exceptions: Standards deviation approvals"
                ]
              },
              {
                "id": "approval-workflows",
                "title": "Approval Workflows",
                "backgroundColor": "bg-pink-50",
                "borderColor": "border-pink-200",
                "items": [
                  "Specification Reviews: Product owner approvals",
                  "Architecture Reviews: Technical architect sign-offs",
                  "Design Reviews: UX designer validations",
                  "Security Reviews: Security team approvals"
                ]
              },
              {
                "id": "collaborative-refinement",
                "title": "Collaborative Refinement",
                "backgroundColor": "bg-cyan-50",
                "borderColor": "border-cyan-200",
                "items": [
                  "Iterative Improvement: Human feedback incorporation",
                  "Knowledge Enhancement: Domain expert input",
                  "Exception Handling: Edge case resolution",
                  "Learning Integration: Pattern improvement"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-12",

          "type": "flexibleGrid",

          "content": {
            "title": "Interaction Benefits",
            "backgroundColor": "from-purple-50 to-pink-50",
            "borderColor": "border-purple-500",
            "categories": [
              {
                "title": "Technical Benefits",
                "color": "purple",
                "benefits": [
                  "Consistency: Shared semantic understanding ensures alignment",
                  "Efficiency: Event-driven architecture minimizes unnecessary work",
                  "Scalability: Components can scale independently based on demand",
                  "Reliability: Built-in error handling and recovery mechanisms"
                ]
              },
              {
                "title": "Business Benefits",
                "color": "pink",
                "benefits": [
                  "Quality Assurance: Continuous validation throughout processes",
                  "Traceability: Complete audit trail of all interactions",
                  "Flexibility: Components can evolve without breaking interactions",
                  "Human Empowerment: Strategic decision-making preserved for humans"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {

          "id": "prominentDisplay-section-13",

          "type": "prominentDisplay",

          "content": {
            "title": "Understanding Integration Points",
            "description": "These interaction patterns enable Breeze.AI to integrate seamlessly with existing development tools, infrastructure, and organizational processes.",
            "buttonText": "Explore Integration Points",
            "backgroundGradient": "from-purple-600 to-pink-600",
            "variant": "cta",
            "items": [
              {
                "id": "tool-integration",
                "title": "Tool Integration",
                "description": "IDEs, CI/CD pipelines, project management tools",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "infrastructure-integration",
                "title": "Infrastructure Integration",
                "description": "Cloud platforms, databases, monitoring systems",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "process-integration",
                "title": "Process Integration",
                "description": "Existing workflows, approval processes, governance",
                "backgroundColor": "bg-white/20"
              }
            ]
          }
        }
      ]
    }
  ]
};

const ComponentInteractionsNew: React.FC<ComponentInteractionsNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={componentInteractionsConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default ComponentInteractionsNew;