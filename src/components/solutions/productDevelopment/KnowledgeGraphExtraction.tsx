import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  PhotoIcon,
  CpuChipIcon,
  ArrowRightIcon,
  SparklesIcon,
  CheckCircleIcon,
  ChartBarIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  CubeIcon
} from '@heroicons/react/24/outline';

const KnowledgeGraphExtraction: React.FC = () => {
  const [selectedOntology, setSelectedOntology] = useState<'functional' | 'design' | 'architecture' | 'code'>('functional');

  const inputSources = [
    {
      icon: DocumentTextIcon,
      title: 'Requirements Documents',
      description: 'PRDs, specifications, feature briefs',
      examples: ['Product requirements documents', 'Technical specifications', 'Feature descriptions', 'Business requirements'],
      color: 'blue'
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Conversation Transcripts',
      description: 'Stakeholder meetings, user interviews',
      examples: ['Product planning meetings', 'User research sessions', 'Design critiques', 'Technical discussions'],
      color: 'purple'
    },
    {
      icon: PhotoIcon,
      title: 'Visual Artifacts',
      description: 'Wireframes, diagrams, mockups',
      examples: ['UI wireframes', 'System diagrams', 'User flow sketches', 'Architecture blueprints'],
      color: 'green'
    },
    {
      icon: CpuChipIcon,
      title: 'Existing Systems',
      description: 'Legacy code, APIs, documentation',
      examples: ['Source code repositories', 'API documentation', 'Database schemas', 'Technical documentation'],
      color: 'orange'
    }
  ];

  const ontologies = {
    functional: {
      title: 'Functional Ontology',
      icon: ChartBarIcon,
      color: 'blue',
      description: 'Captures what the system should do - features, user needs, business rules',
      nodes: [
        { label: 'User Management', type: 'feature' },
        { label: 'Authentication', type: 'capability' },
        { label: 'Role-Based Access', type: 'business-rule' },
        { label: 'Profile Management', type: 'capability' }
      ],
      edges: [
        { from: 'User Management', to: 'Authentication', label: 'requires' },
        { from: 'Authentication', to: 'Role-Based Access', label: 'enables' },
        { from: 'User Management', to: 'Profile Management', label: 'includes' }
      ],
      extractedFrom: ['Requirements documents', 'Stakeholder conversations', 'User stories']
    },
    design: {
      title: 'Design Ontology',
      icon: PaintBrushIcon,
      color: 'purple',
      description: 'Defines how users interact with the system - UI components, flows, patterns',
      nodes: [
        { label: 'Login Screen', type: 'screen' },
        { label: 'Email Input', type: 'component' },
        { label: 'Password Input', type: 'component' },
        { label: 'Login Button', type: 'component' }
      ],
      edges: [
        { from: 'Login Screen', to: 'Email Input', label: 'contains' },
        { from: 'Login Screen', to: 'Password Input', label: 'contains' },
        { from: 'Login Screen', to: 'Login Button', label: 'contains' }
      ],
      extractedFrom: ['Wireframes', 'Design mockups', 'User flow diagrams']
    },
    architecture: {
      title: 'Architecture Ontology',
      icon: CubeIcon,
      color: 'green',
      description: 'Describes system structure - services, APIs, data models, infrastructure',
      nodes: [
        { label: 'Auth Service', type: 'service' },
        { label: 'User API', type: 'api' },
        { label: 'User DB', type: 'database' },
        { label: 'JWT Token', type: 'data-model' }
      ],
      edges: [
        { from: 'Auth Service', to: 'User API', label: 'exposes' },
        { from: 'Auth Service', to: 'User DB', label: 'reads/writes' },
        { from: 'Auth Service', to: 'JWT Token', label: 'generates' }
      ],
      extractedFrom: ['Architecture diagrams', 'Technical discussions', 'API specs']
    },
    code: {
      title: 'Code Ontology',
      icon: CodeBracketIcon,
      color: 'orange',
      description: 'Maps implementation details - modules, classes, functions, dependencies',
      nodes: [
        { label: 'AuthController', type: 'class' },
        { label: 'login()', type: 'method' },
        { label: 'validateCredentials()', type: 'method' },
        { label: 'generateToken()', type: 'method' }
      ],
      edges: [
        { from: 'AuthController', to: 'login()', label: 'contains' },
        { from: 'login()', to: 'validateCredentials()', label: 'calls' },
        { from: 'login()', to: 'generateToken()', label: 'calls' }
      ],
      extractedFrom: ['Existing codebases', 'Code reviews', 'Technical specs']
    }
  };

  const currentOntology = ontologies[selectedOntology];

  const extractionAgents = [
    {
      name: 'Document Analyzer Agent',
      description: 'Extracts structured information from unstructured documents',
      capabilities: ['NLP-based entity extraction', 'Relationship inference', 'Requirement classification']
    },
    {
      name: 'Conversation Mining Agent',
      description: 'Analyzes meeting transcripts and captures implicit requirements',
      capabilities: ['Intent detection', 'Decision tracking', 'Concern identification']
    },
    {
      name: 'Diagram Interpreter Agent',
      description: 'Converts visual artifacts into structured graph representations',
      capabilities: ['OCR & shape recognition', 'Flow interpretation', 'Layout understanding']
    },
    {
      name: 'Cross-Reference Validator',
      description: 'Ensures consistency across all extracted ontologies',
      capabilities: ['Conflict detection', 'Gap analysis', 'Completeness checking']
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/product-development" className="text-sm text-green-600 hover:text-green-700 mb-2 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Knowledge Graph Extraction</h1>
          <p className="mt-2 text-gray-600">
            How AI agents transform requirements, conversations, and diagrams into comprehensive knowledge graphs
          </p>
        </div>

        {/* Input Sources */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: Multiple Input Sources</h2>
          <p className="text-sm text-gray-600 mb-6">
            Our AI agents can process diverse artifacts from your product development process:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {inputSources.map((source, index) => {
              const Icon = source.icon;
              const colors = getColorClasses(source.color);
              return (
                <div key={index} className={`border ${colors.border} rounded-lg p-5 ${colors.bg}`}>
                  <div className="flex items-start mb-3">
                    <Icon className={`h-7 w-7 ${colors.text} mr-3 flex-shrink-0`} />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{source.title}</h3>
                      <p className="text-sm text-gray-600">{source.description}</p>
                    </div>
                  </div>
                  <div className="ml-10">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Examples:</p>
                    <ul className="space-y-1">
                      {source.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-gray-600">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Extraction Process Visualization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: AI-Powered Extraction</h2>
          <p className="text-sm text-gray-600 mb-6">
            Specialized agents work together to extract and structure knowledge:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {extractionAgents.map((agent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-2">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{agent.name}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-3">{agent.description}</p>
                <ul className="space-y-1">
                  {agent.capabilities.map((cap, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-700">
                      <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Four Ontologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Four Comprehensive Ontologies</h2>
          <p className="text-sm text-gray-600 mb-6">
            The extraction process produces four interconnected knowledge graphs that capture different aspects of your product:
          </p>

          {/* Ontology Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {(Object.keys(ontologies) as Array<keyof typeof ontologies>).map((key) => {
              const ont = ontologies[key];
              const Icon = ont.icon;
              const colors = getColorClasses(ont.color);
              const isSelected = selectedOntology === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedOntology(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${isSelected ? colors.text : 'text-gray-400'}`} />
                  <p className={`text-xs font-semibold ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                    {ont.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Ontology Details */}
          <div className={`border-2 ${getColorClasses(currentOntology.color).border} rounded-lg p-6 ${getColorClasses(currentOntology.color).bg}`}>
            <div className="flex items-start mb-4">
              <currentOntology.icon className={`h-8 w-8 ${getColorClasses(currentOntology.color).text} mr-3`} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentOntology.title}</h3>
                <p className="text-sm text-gray-600">{currentOntology.description}</p>
              </div>
            </div>

            {/* Graph Visualization (Simplified) */}
            <div className="bg-white rounded-lg p-6 mb-4">
              <p className="text-xs font-semibold text-gray-700 mb-4">Sample Knowledge Graph:</p>
              <div className="flex flex-wrap gap-4 items-center justify-center min-h-[200px]">
                {currentOntology.nodes.map((node, idx) => (
                  <div key={idx} className="relative">
                    <div className={`px-4 py-2 rounded-lg border-2 ${getColorClasses(currentOntology.color).border} ${getColorClasses(currentOntology.color).bg}`}>
                      <p className="text-sm font-medium text-gray-900">{node.label}</p>
                      <p className="text-xs text-gray-500">{node.type}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <p className="text-xs font-semibold text-gray-700 mb-2">Relationships:</p>
                <div className="space-y-1">
                  {currentOntology.edges.map((edge, idx) => (
                    <p key={idx} className="text-xs text-gray-600">
                      <span className="font-medium">{edge.from}</span>
                      <ArrowRightIcon className="inline h-3 w-3 mx-1" />
                      <span className="italic text-gray-500">{edge.label}</span>
                      <ArrowRightIcon className="inline h-3 w-3 mx-1" />
                      <span className="font-medium">{edge.to}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Extracted From */}
            <div className="bg-white rounded-lg p-4">
              <p className="text-xs font-semibold text-gray-700 mb-2">Extracted from:</p>
              <div className="flex flex-wrap gap-2">
                {currentOntology.extractedFrom.map((source, idx) => (
                  <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cross-Ontology Relationships */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Cross-Ontology Relationships</h2>
          <p className="text-sm text-gray-600 mb-4">
            The power of semantic engineering comes from connections between ontologies:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Functional → Design</h4>
              <p className="text-xs text-gray-600 mb-2">
                Each functional requirement maps to specific UI screens and interactions
              </p>
              <p className="text-xs text-gray-500 italic">
                Example: "User Authentication" feature → Login Screen + Password Reset Flow
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Design → Architecture</h4>
              <p className="text-xs text-gray-600 mb-2">
                UI components drive backend service and API requirements
              </p>
              <p className="text-xs text-gray-500 italic">
                Example: Login Screen → Auth Service + User API endpoints
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Architecture → Code</h4>
              <p className="text-xs text-gray-600 mb-2">
                System architecture defines implementation structure
              </p>
              <p className="text-xs text-gray-500 italic">
                Example: Auth Service → AuthController class + methods
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Code → Functional</h4>
              <p className="text-xs text-gray-600 mb-2">
                Implementation validates that all features are covered
              </p>
              <p className="text-xs text-gray-500 italic">
                Example: AuthController → validates "User Authentication" is implemented
              </p>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Knowledge Graphs Matter</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <SparklesIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Single Source of Truth</h3>
              <p className="text-sm text-gray-600">
                All stakeholders work from the same validated knowledge graphs, eliminating miscommunication
              </p>
            </div>
            <div className="text-center">
              <CheckCircleIcon className="h-10 w-10 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Automatic Consistency</h3>
              <p className="text-sm text-gray-600">
                Changes to one ontology automatically suggest updates to related graphs
              </p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="h-10 w-10 text-purple-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Traceability</h3>
              <p className="text-sm text-gray-600">
                Track every requirement from concept through design, architecture, to code
              </p>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Next: Stakeholder Validation</h2>
          <p className="text-sm mb-4 opacity-90">
            Once knowledge graphs are extracted, we generate role-specific artifacts for validation by Product Owners,
            Business Analysts, UX Designers, and Architects.
          </p>
          <Link
            to="/solutions/product-development/validation"
            className="inline-flex items-center px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Validation Process
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeGraphExtraction;
