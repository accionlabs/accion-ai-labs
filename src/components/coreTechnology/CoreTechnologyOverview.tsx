import React from 'react';
import { Link } from 'react-router-dom';
import { 
  CodeBracketIcon,
  BeakerIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  CircleStackIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import GeneralAnimatedExtraction from './GeneralAnimatedExtraction';

const CoreTechnologyOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Our Methodology
          </div>
          <h1 className="text-3xl font-bold text-gray-900">The Breeze.AI Approach</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Building reliable AI agents for enterprise software requires deep context. We've developed 
            a graph-based methodology that gives LLMs the comprehensive understanding they need to solve 
            complex problems accurately.
          </p>
        </div>

        {/* Why Graphs Work Better */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why Knowledge Graphs?</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">The Limitations of Current Approaches</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">1.</span>
                  <div>
                    <strong className="text-gray-900">Prompt Engineering:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Limited context window, loss of structural relationships, inconsistent results
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">2.</span>
                  <div>
                    <strong className="text-gray-900">Vector Embeddings:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Poor at capturing complex relationships, no hierarchy, similarity ≠ relevance
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">3.</span>
                  <div>
                    <strong className="text-gray-900">RAG (Retrieval Augmented Generation):</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Still limited by chunk size, misses cross-document relationships
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">The Graph Advantage</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Complete Context:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Every relationship preserved, full system understanding available
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Semantic Relationships:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Not just "what connects" but "how and why it connects"
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Traversable Structure:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      LLMs can navigate from any point to find relevant context
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>The Key Insight:</strong> LLMs perform best when they have access to structured, 
              interconnected knowledge. Our semantic graphs provide this structure by converting your 
              codebase, documentation, and design patterns into a navigable knowledge network that 
              AI agents can reliably traverse and reason about.
            </p>
          </div>
        </div>

        {/* The Process - Three Boxes */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            From Code to Knowledge to Action
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <DocumentTextIcon className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Existing Information</h3>
              <p className="text-sm opacity-90">
                Source code, documentation, requirements, design specs, architecture docs
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <CircleStackIcon className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Semantic Knowledge Graph</h3>
              <p className="text-sm opacity-90">
                Four interconnected ontologies capturing complete system semantics
              </p>
            </div>
            
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <SparklesIcon className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">Custom AI Agents</h3>
              <p className="text-sm opacity-90">
                Purpose-built agents that understand and act on your specific system
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              We transform conventional software engineering best practices and design frameworks 
              into ontologies that drive the creation of these knowledge graphs.
            </p>
          </div>
        </div>

        {/* The Four Ontologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">The Four-Ontology Framework</h2>
          <p className="text-gray-600 mb-8">
            We've codified decades of software engineering best practices into four complementary ontologies. 
            Each captures a different aspect of your system, and together they provide the complete context 
            that makes AI agents reliable and effective.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center mb-2">
                <CodeBracketIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Code Ontology</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>Ground Truth</strong> - The actual implementation as it exists in the codebase.
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

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Cross-Ontology Intelligence:</strong> The real power emerges when these ontologies 
              interconnect. A single user feature can be traced through functional requirements, UI components, 
              code implementations, and architectural layers — giving AI agents complete understanding of 
              impact, dependencies, and constraints.
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
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pattern Recognition</h3>
              <p className="text-sm text-gray-600">
                Our agents are trained on thousands of codebases to recognize patterns, 
                architectures, and anti-patterns across all major languages and frameworks.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Continuous Learning</h3>
              <p className="text-sm text-gray-600">
                As your codebase evolves, the knowledge graphs update automatically, 
                ensuring AI agents always work with current information.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team & Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How We Deliver Custom Solutions</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Specialized Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center mb-2">
                  <CogIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Breeze Framework</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Our proprietary framework for creating and managing semantic knowledge graphs 
                  optimized for LLM consumption.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <div className="flex items-center mb-2">
                  <AcademicCapIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Semantic Engineers</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Specialists trained in creating ontologies and using our agents to build 
                  comprehensive knowledge graphs of your systems.
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <div className="flex items-center mb-2">
                  <UserGroupIcon className="h-6 w-6 text-green-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Agent Developers</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Engineers who develop custom AI agents for your specific solution areas, 
                  leveraging the knowledge graphs for accurate results.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discovery & Ontology Design</h3>
              <p className="text-sm text-gray-600">
                We analyze your codebase and requirements to design custom ontologies 
                that capture your unique domain knowledge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Graph Construction</h3>
              <p className="text-sm text-gray-600">
                Our semantic engineers deploy extraction agents to build comprehensive 
                knowledge graphs from your artifacts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Custom Agent Development</h3>
              <p className="text-sm text-gray-600">
                Agent developers create purpose-built AI agents that leverage your 
                knowledge graphs to solve specific problems.
              </p>
            </div>
          </div>
        </div>

        {/* Why This Works */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why This Approach Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Foundation</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-0.5">•</span>
                  <span><strong>Graph Traversal:</strong> LLMs can follow relationships to find exactly what they need</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-0.5">•</span>
                  <span><strong>Semantic Anchoring:</strong> Every piece of information is connected to its context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 mt-0.5">•</span>
                  <span><strong>Explicit Relationships:</strong> No guessing about how things connect</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Practical Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">•</span>
                  <span><strong>Consistent Results:</strong> Same context leads to reliable outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">•</span>
                  <span><strong>Complete Understanding:</strong> No missing connections or context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 mt-0.5">•</span>
                  <span><strong>Explainable Decisions:</strong> Clear reasoning paths through the graph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to See What's Possible?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Explore real examples of how our semantic graph approach has solved complex 
            enterprise challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/technical-debt"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all"
            >
              Technical Debt Deep Dive
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 rounded-xl hover:bg-white/30 transition-all"
            >
              Portfolio Rationalization Example
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologyOverview;