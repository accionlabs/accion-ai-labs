import React from 'react';
import { Link } from 'react-router-dom';
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';

const ProductDevelopmentOverview: React.FC = () => {
  const valueMetrics = [
    { metric: '60%', label: 'Faster Time to Market', description: 'Accelerated product launch cycles' },
    { metric: '85%', label: 'Reduced Ambiguity', description: 'Clear, validated requirements' },
    { metric: '40%', label: 'Fewer Defects', description: 'TDD and continuous validation' },
    { metric: '70%', label: 'Higher Velocity', description: 'Parallel development workflows' }
  ];

  const coreCapabilities = [
    {
      icon: DocumentTextIcon,
      title: 'Semantic Knowledge Extraction',
      description: 'AI agents analyze requirements, conversations, and diagrams to build comprehensive knowledge graphs',
      features: [
        'Multi-source document analysis',
        'Conversation transcript mining',
        'Diagram interpretation',
        'Four-ontology graph generation'
      ]
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Stakeholder Validation',
      description: 'Generate role-specific artifacts for Product Owners, BAs, UX Designers, and Architects',
      features: [
        'Functional specifications for POs',
        'Epics & user stories for BAs',
        'User flow diagrams for UX',
        'Architecture diagrams for Architects'
      ]
    },
    {
      icon: CodeBracketIcon,
      title: 'Intelligent Artifact Generation',
      description: 'Automated creation of design systems, prototypes, and test scripts from validated knowledge graphs',
      features: [
        'Design system & component libraries',
        'Interactive prototypes',
        'Gherkin/BDD test scripts',
        'Code generation for repetitive patterns'
      ]
    },
    {
      icon: BoltIcon,
      title: 'Continuous Sprint Validation',
      description: 'Every sprint, agents compare updated graphs with baseline to catch drift and prevent technical debt',
      features: [
        'Automated graph extraction per sprint',
        'Drift detection and gap analysis',
        'Stakeholder re-validation triggers',
        'Technical debt prevention'
      ]
    }
  ];

  const agentEcosystem = {
    extraction: [
      'Document Analyzer Agent',
      'Conversation Mining Agent',
      'Diagram Interpreter Agent',
      'Cross-Reference Validator'
    ],
    validation: [
      'Functional Spec Generator',
      'User Story Generator',
      'Flow Diagram Generator',
      'Architecture Diagram Generator'
    ],
    implementation: [
      'Design System Generator',
      'Prototype Builder Agent',
      'Test Script Generator',
      'Code Generation Agent'
    ],
    continuous: [
      'Graph Extraction Agent',
      'Drift Detection Agent',
      'Gap Analysis Agent',
      'Technical Debt Monitor'
    ]
  };

  const navigationLinks = [
    {
      path: '/solutions/product-development/extraction',
      label: 'Knowledge Graph Extraction',
      icon: SparklesIcon,
      description: 'See how we derive graphs from requirements'
    },
    {
      path: '/solutions/product-development/validation',
      label: 'Stakeholder Validation',
      icon: UserGroupIcon,
      description: 'Four validation tracks for different roles'
    },
    {
      path: '/solutions/product-development/implementation',
      label: 'Implementation Pipeline',
      icon: CodeBracketIcon,
      description: 'Artifacts, prototypes, and code generation'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-10 w-10 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">AI-Powered Product Engineering</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                Accelerate product engineering from concept to code using semantic knowledge graphs,
                multi-stakeholder validation, and intelligent artifact generation
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {valueMetrics.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The Challenge: Manual Translation Tax</h2>
          <p className="text-gray-700 mb-4">
            Traditional product engineering suffers from the "manual translation tax" - the costly process of
            manually translating requirements between different stakeholder languages. Business requirements
            become functional specs, which become user stories, which become designs, which finally become code.
            Each translation introduces delays, ambiguity, and potential errors.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <ClockIcon className="h-6 w-6 text-orange-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Weeks of Delays</p>
              <p className="text-xs text-gray-600">Handoffs between teams slow everything down</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <ShieldCheckIcon className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Lost in Translation</p>
              <p className="text-xs text-gray-600">Requirements drift as they move between roles</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <BeakerIcon className="h-6 w-6 text-purple-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">Technical Debt</p>
              <p className="text-xs text-gray-600">Implementation diverges from original intent</p>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Development Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircleIcon className="h-4 w-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How It Works: End-to-End Workflow</h2>
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Extract Knowledge Graphs</h3>
                <p className="text-sm text-gray-600 mb-2">
                  AI agents analyze requirements documents, conversation transcripts, diagrams, and other artifacts
                  to automatically build four comprehensive ontology graphs: Functional, Design, Architecture, and Code.
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-purple-600">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Multi-Stakeholder Validation</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Generate role-specific artifacts from the knowledge graphs. Product Owners validate functional specs,
                  Business Analysts review epics/stories, UX Designers check user flows, and Architects approve system designs.
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-green-600">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Generate Implementation Artifacts</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Once validated, automatically generate design systems, interactive prototypes, Gherkin test scripts,
                  and working code for repetitive patterns. Developers validate and extend the generated code.
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-orange-600">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Sprint Validation</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Every sprint, agents extract updated knowledge graphs and compare them with the baseline. Any drift,
                  gaps, or inconsistencies trigger stakeholder re-validation, preventing technical debt accumulation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Multi-Agent Development Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Extraction Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.extraction.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Validation Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.validation.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Implementation Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.implementation.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Continuous Validation</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.continuous.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why This Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Speed & Quality</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Test-Driven Development:</strong> Gherkin scripts from day one ensure quality</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Parallel Workflows:</strong> Design, architecture, and code progress simultaneously</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Faster Iterations:</strong> Changes propagate across all artifacts automatically</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Prevent Technical Debt</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Continuous Validation:</strong> Catch drift before it becomes debt</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Single Source of Truth:</strong> Knowledge graphs keep everyone aligned</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Automated Drift Detection:</strong> AI monitors implementation vs. design</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navigationLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                to={link.path}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <Icon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.label}</h3>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                <div className="flex items-center text-green-600 text-sm">
                  <span>Explore</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDevelopmentOverview;
