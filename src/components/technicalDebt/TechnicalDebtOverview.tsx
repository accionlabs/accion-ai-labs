import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon,
  CpuChipIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  DocumentTextIcon,
  CodeBracketIcon,
  BeakerIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { getPublicAssetUrl } from '../../utils/assetHelper';
import AnimatedExtractionProcess from './AnimatedExtractionProcess';

const TechnicalDebtOverview: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Technical Debt Analysis Process</h1>
          <p className="mt-2 text-gray-600">
            Automated extraction and analysis of technical debt using AI-powered ontology mapping
          </p>
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 lg:p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 sm:mb-6">How the Process Works</h2>
          
          {/* Animated Extraction Process */}
          <AnimatedExtractionProcess />
          
          <div className="prose max-w-none text-gray-600 mt-6">
            <p className="mb-4">
              The Technical Debt Analysis process uses specialized AI agents to automatically extract and analyze 
              four interconnected ontologies from your codebase and documentation:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">1. Input Collection</h3>
                <p className="text-sm">
                  The system ingests both code artifacts (source files, configurations, dependencies) and 
                  documentation (requirements, design specs, architecture docs, user manuals).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">2. Parallel Agent Processing</h3>
                <p className="text-sm">
                  Four specialized AI agents work in parallel to extract domain-specific knowledge from 
                  the collected artifacts. Each agent focuses on its specific ontology.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">3. Ontology Generation</h3>
                <p className="text-sm">
                  Each agent generates a graph representation of its domain: Code (ground truth), 
                  Functional (business logic), Design (UI/UX patterns), and Architecture (system structure).
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">4. Cross-Ontology Mapping</h3>
                <p className="text-sm">
                  Relationships between the four ontologies are established, creating a unified knowledge 
                  graph that reveals gaps, violations, and inconsistencies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* The Four Ontologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">The Four Ontologies</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center mb-2">
                <CodeBracketIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Code Ontology</h3>
              </div>
              <p className="text-sm text-gray-600">
                <strong>Ground Truth</strong> - The actual implementation as it exists in the codebase. 
                Components, dependencies, and relationships extracted directly from source code.
              </p>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center mb-2">
                <BeakerIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Functional Ontology</h3>
              </div>
              <p className="text-sm text-gray-600">
                Business requirements and use cases extracted from documentation. 
                Compared against code to identify functional gaps.
              </p>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-4">
              <div className="flex items-center mb-2">
                <PaintBrushIcon className="h-6 w-6 text-pink-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Design Ontology</h3>
              </div>
              <p className="text-sm text-gray-600">
                UI/UX patterns, components, and design system elements. 
                Identifies inconsistencies and duplication in the user interface.
              </p>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center mb-2">
                <CubeIcon className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Architecture Ontology</h3>
              </div>
              <p className="text-sm text-gray-600">
                System layers, services, and architectural patterns. 
                Detects violations of architectural principles and anti-patterns.
              </p>
            </div>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">What This Process Identifies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-purple-600 font-bold">1</span>
                </span>
                Functional Gaps
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Requirements documented but not implemented
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Features present in code but undocumented
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">•</span>
                  Misalignment between specs and implementation
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-green-600 font-bold">2</span>
                </span>
                Architecture Violations
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Cross-layer dependencies and bypasses
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Shared database anti-patterns
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  Service boundary violations
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                <span className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-pink-600 font-bold">3</span>
                </span>
                Design Inconsistencies
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Duplicate UI components with variations
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Inconsistent styling and patterns
                </li>
                <li className="flex items-start">
                  <span className="text-pink-500 mr-2">•</span>
                  Deviation from design system guidelines
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Analysis Tools */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Explore the Analysis Components</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              to="/technical-debt/agent-analysis"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <SparklesIcon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">1. Agent-Based Extraction</h3>
              <p className="text-sm text-gray-600">See how AI agents process artifacts to extract ontologies</p>
              <p className="text-xs text-blue-600 mt-2">View extraction details →</p>
            </Link>

            <Link 
              to="/technical-debt/graph-explorer"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all group"
            >
              <CpuChipIcon className="h-8 w-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">2. Graph Explorer</h3>
              <p className="text-sm text-gray-600">Interactive visualization of all four ontology graphs</p>
              <p className="text-xs text-purple-600 mt-2">Explore graphs →</p>
            </Link>

            <Link 
              to="/technical-debt/assessment"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <ScaleIcon className="h-8 w-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">3. Debt Assessment</h3>
              <p className="text-sm text-gray-600">Detailed analysis of identified issues and violations</p>
              <p className="text-xs text-orange-600 mt-2">View assessment →</p>
            </Link>

            <Link 
              to="/technical-debt/remediation"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all group"
            >
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">4. Remediation Roadmap</h3>
              <p className="text-sm text-gray-600">Prioritized action plan for systematic debt reduction</p>
              <p className="text-xs text-green-600 mt-2">View roadmap →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtOverview;