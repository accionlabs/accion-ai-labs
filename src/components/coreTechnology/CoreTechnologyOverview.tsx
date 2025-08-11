import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CubeTransparentIcon,
  CodeBracketIcon,
  BeakerIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  SparklesIcon,
  DocumentTextIcon,
  CircleStackIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import GeneralAnimatedExtraction from './GeneralAnimatedExtraction';

const CoreTechnologyOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Core Technology
          </div>
          <h1 className="text-3xl font-bold text-gray-900">The Breeze.AI Approach</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Our semantic ontology framework transforms code, documentation, and artifacts into 
            intelligent knowledge graphs that power custom AI agents.
          </p>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <div className="max-w-4xl">
            <h2 className="text-3xl font-bold mb-4">
              From Code to Knowledge to Action
            </h2>
            <p className="text-lg mb-6 opacity-90">
              We don't just analyze your code — we understand it. Our AI agents extract semantic meaning 
              from your entire technology stack, creating a unified knowledge model that enables 
              intelligent automation tailored to your enterprise.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <DocumentTextIcon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Multi-Source Input</h3>
                <p className="text-sm opacity-90">Code, docs, configs, and more</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <CircleStackIcon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Knowledge Graphs</h3>
                <p className="text-sm opacity-90">Semantic understanding</p>
              </div>
              <div className="bg-white/20 backdrop-blur rounded-lg p-4">
                <SparklesIcon className="h-8 w-8 mb-2" />
                <h3 className="font-semibold mb-1">Custom Agents</h3>
                <p className="text-sm opacity-90">Tailored solutions</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Four Ontologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Four-Ontology Framework</h2>
          <p className="text-gray-600 mb-8">
            Our framework captures your system from four complementary perspectives, creating a 
            comprehensive understanding that no single view could provide.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center mb-2">
                <CodeBracketIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Code Ontology</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Ground Truth</strong> - The actual implementation as it exists in your codebase.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Components & dependencies</li>
                <li>• Functions & methods</li>
                <li>• Data structures</li>
                <li>• API contracts</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center mb-2">
                <BeakerIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Functional Ontology</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Business logic and requirements mapped to implementation.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• User stories & features</li>
                <li>• Business rules</li>
                <li>• Process workflows</li>
                <li>• Integration points</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-pink-500 pl-4">
              <div className="flex items-center mb-2">
                <PaintBrushIcon className="h-6 w-6 text-pink-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Design Ontology</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                UI/UX patterns and design system elements.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• UI components</li>
                <li>• Design patterns</li>
                <li>• User flows</li>
                <li>• Style guidelines</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center mb-2">
                <CubeIcon className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Architecture Ontology</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                System structure and architectural patterns.
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• System layers</li>
                <li>• Service topology</li>
                <li>• Data flows</li>
                <li>• Security boundaries</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Why Four Ontologies?</strong> Each perspective reveals different insights. 
              Functional gaps appear when comparing business requirements to code. Design inconsistencies 
              emerge from UI pattern analysis. Architectural violations surface through layer dependencies. 
              Together, they provide complete system understanding.
            </p>
          </div>
        </div>

        {/* Knowledge Extraction Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 lg:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Agent-Based Knowledge Extraction</h2>
          <p className="text-gray-600 mb-6">
            Specialized AI agents work in parallel to extract domain-specific knowledge from your 
            artifacts, creating interconnected graphs that capture your system's complete semantics.
          </p>
          
          {/* Animated Extraction Process */}
          <GeneralAnimatedExtraction />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Analysis</h3>
              <p className="text-sm text-gray-600">
                Our agents don't just parse — they understand context, recognize patterns, 
                and identify relationships that traditional tools miss.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-sm text-gray-600">
                As your codebase evolves, our agents continuously update the knowledge graphs, 
                ensuring your AI solutions always reflect current reality.
              </p>
            </div>
          </div>
        </div>

        {/* Unified Knowledge Model */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Unified Semantic Model</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cross-Ontology Relationships</h3>
              <p className="text-sm text-gray-600 mb-4">
                The real power emerges when we connect the ontologies. A single user feature 
                traces through functional requirements, UI components, code implementations, 
                and architectural layers.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <ArrowPathIcon className="h-5 w-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-gray-900">Traceability</strong>
                    <p className="text-xs text-gray-600">Follow any feature from UI to database</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowPathIcon className="h-5 w-5 text-purple-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-gray-900">Impact Analysis</strong>
                    <p className="text-xs text-gray-600">Understand change ripple effects</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowPathIcon className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div>
                    <strong className="text-sm text-gray-900">Gap Detection</strong>
                    <p className="text-xs text-gray-600">Identify missing implementations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Knowledge Graph Benefits</h3>
              <p className="text-sm text-gray-600 mb-4">
                Unlike traditional static analysis, our knowledge graphs capture semantic 
                meaning, enabling AI agents to reason about your system like a senior engineer would.
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-2">Example Insights:</h4>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• "This API endpoint is called by 3 UI components but isn't documented"</li>
                  <li>• "These 5 services share 80% code overlap and could be consolidated"</li>
                  <li>• "This architectural pattern violates your security guidelines"</li>
                  <li>• "This new feature impacts 12 existing workflows"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Demo */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 sm:p-8 text-white mb-8">
          <div className="flex items-center mb-4">
            <CubeTransparentIcon className="h-8 w-8 mr-3" />
            <h2 className="text-2xl font-semibold">Explore a Live Knowledge Graph</h2>
          </div>
          <p className="text-gray-300 mb-6">
            See how our ontologies work together to provide complete system understanding. 
            Explore real examples from our implemented solutions.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              to="/technical-debt/graph-explorer"
              className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-blue-300">Technical Debt Graph</h3>
              <p className="text-sm text-gray-400">
                Explore how we identify architectural violations and technical debt
              </p>
              <span className="inline-flex items-center mt-2 text-sm text-blue-400 group-hover:text-blue-300">
                View Example <ArrowRightIcon className="ml-1 h-4 w-4" />
              </span>
            </Link>
            <Link 
              to="/portfolio/graph-explorer"
              className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-all group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-purple-300">Portfolio Graph</h3>
              <p className="text-sm text-gray-400">
                See how we analyze multiple applications for consolidation
              </p>
              <span className="inline-flex items-center mt-2 text-sm text-purple-400 group-hover:text-purple-300">
                View Example <ArrowRightIcon className="ml-1 h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our semantic framework is the foundation for unlimited possibilities. 
              Let's explore how custom AI agents can transform your enterprise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                Explore Solution Examples
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologyOverview;