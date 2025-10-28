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
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-4">
            Our Platform
          </div>
          <h1 className="text-3xl font-bold text-gray-900">The Breeze.AI Platform</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Building reliable AI agents for enterprise software requires deep context. Breeze.AI is our comprehensive 
            platform with a graph-based methodology that gives LLMs the deep understanding they need to solve 
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
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Complete Context:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Every relationship preserved, full system understanding available
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">Semantic Relationships:</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Not just "what connects" but "how and why it connects"
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
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

          <div className="p-4 bg-secondary/10 rounded-lg">
            <p className="text-sm text-secondary">
              <strong>The Key Insight:</strong> LLMs perform best when they have access to structured, 
              interconnected knowledge. Our semantic graphs provide this structure by converting your 
              codebase, documentation, and design patterns into a navigable knowledge network that 
              AI agents can reliably traverse and reason about.
            </p>
          </div>
        </div>

        {/* The Process - Three Boxes */}
        <div className="bg-gradient-to-r from-secondary to-brand-purple-600 rounded-2xl p-8 sm:p-12 text-white mb-12">
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
            <div className="border-l-4 border-secondary pl-4">
              <div className="flex items-center mb-2">
                <CodeBracketIcon className="h-6 w-6 text-secondary mr-2" />
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
            
            <div className="border-l-4 border-brand-purple-500 pl-4">
              <div className="flex items-center mb-2">
                <BeakerIcon className="h-6 w-6 text-brand-purple-600 mr-2" />
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
            
            <div className="border-l-4 border-success pl-4">
              <div className="flex items-center mb-2">
                <CubeIcon className="h-6 w-6 text-success mr-2" />
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

        {/* Agent-Based Artifact Generation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 lg:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Agent-Based Artifact Generation</h2>
          <p className="text-gray-600 mb-6">
            Once knowledge graphs are built, specialized AI agents leverage them to generate validated,
            consistent artifacts across all stakeholder types — ensuring everyone works from a single source of truth.
          </p>

          <div className="bg-gradient-to-r from-secondary/10 to-brand-purple-50 rounded-xl p-6 mb-8 border border-secondary/20">
            <div className="flex items-center mb-4">
              <SparklesIcon className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">Bidirectional Intelligence</h3>
            </div>
            <p className="text-sm text-gray-700">
              Our agents work in both directions: extracting knowledge from existing artifacts into graphs,
              and generating new artifacts from those graphs. This bidirectional capability ensures consistency,
              traceability, and validation across your entire software lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-secondary/20 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-white">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                <BeakerIcon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Functional Artifacts</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• User stories & epics</li>
                <li>• Functional specifications</li>
                <li>• Business requirements docs</li>
                <li>• Process workflows</li>
              </ul>
            </div>

            <div className="border border-pink-200 rounded-lg p-4 bg-gradient-to-br from-pink-50 to-white">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                <PaintBrushIcon className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Design Artifacts</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• UI/UX flow diagrams</li>
                <li>• Design system components</li>
                <li>• Interactive prototypes</li>
                <li>• Style guides</li>
              </ul>
            </div>

            <div className="border border-green-200 rounded-lg p-4 bg-gradient-to-br from-green-50 to-white">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <CubeIcon className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Architecture Artifacts</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• System architecture diagrams</li>
                <li>• Component interaction maps</li>
                <li>• Deployment topologies</li>
                <li>• Technical specifications</li>
              </ul>
            </div>

            <div className="border border-purple-200 rounded-lg p-4 bg-gradient-to-br from-purple-50 to-white">
              <div className="w-10 h-10 bg-brand-purple-100 rounded-lg flex items-center justify-center mb-3">
                <CodeBracketIcon className="h-6 w-6 text-brand-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation Artifacts</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Test scripts (Gherkin/BDD)</li>
                <li>• API documentation</li>
                <li>• Code scaffolding</li>
                <li>• Integration contracts</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">The Key Advantage</h4>
                <p className="text-sm text-gray-700">
                  Because all artifacts are generated from the same knowledge graph, they're automatically consistent
                  and traceable. Changes in requirements flow through to all stakeholder artifacts, eliminating the
                  "manual translation tax" and reducing ambiguity by 85%.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team & Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">How We Deliver Custom Solutions</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Specialized Team</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <div className="flex items-center mb-2">
                  <CogIcon className="h-6 w-6 text-secondary mr-2" />
                  <h4 className="font-semibold text-gray-900">Breeze Framework</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Our proprietary framework for creating and managing semantic knowledge graphs 
                  optimized for LLM consumption.
                </p>
              </div>
              
              <div className="border-l-4 border-brand-purple-500 pl-4">
                <div className="flex items-center mb-2">
                  <AcademicCapIcon className="h-6 w-6 text-brand-purple-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">Semantic Engineers</h4>
                </div>
                <p className="text-sm text-gray-600">
                  Specialists trained in creating ontologies and using our agents to build 
                  comprehensive knowledge graphs of your systems.
                </p>
              </div>
              
              <div className="border-l-4 border-success pl-4">
                <div className="flex items-center mb-2">
                  <UserGroupIcon className="h-6 w-6 text-success mr-2" />
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
              <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Discovery & Ontology Design</h3>
              <p className="text-sm text-gray-600">
                We analyze your codebase and requirements to design custom ontologies 
                that capture your unique domain knowledge.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-brand-purple-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Graph Construction</h3>
              <p className="text-sm text-gray-600">
                Our semantic engineers deploy extraction agents to build comprehensive 
                knowledge graphs from your artifacts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-success">3</span>
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
                  <span className="text-secondary mr-2 mt-0.5">•</span>
                  <span><strong>Graph Traversal:</strong> LLMs can follow relationships to find exactly what they need</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-0.5">•</span>
                  <span><strong>Semantic Anchoring:</strong> Every piece of information is connected to its context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-0.5">•</span>
                  <span><strong>Explicit Relationships:</strong> No guessing about how things connect</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Practical Benefits</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-success mr-2 mt-0.5">•</span>
                  <span><strong>Consistent Results:</strong> Same context leads to reliable outputs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 mt-0.5">•</span>
                  <span><strong>Complete Understanding:</strong> No missing connections or context</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 mt-0.5">•</span>
                  <span><strong>Explainable Decisions:</strong> Clear reasoning paths through the graph</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Integration Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Integration with Breeze.AI Platform</h2>
          <p className="text-gray-600 mb-8">
            Our Core Technology components work together to deliver production-quality AI solutions. 
            Explore each component to understand how they enable enterprise-grade deployments.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/core-technology/kaps-framework"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-brand-purple-300"
            >
              <CircleStackIcon className="h-8 w-8 text-brand-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">KAPS Framework</h3>
              <p className="text-sm text-gray-600">
                AI adoption framework with four specialized portfolios
              </p>
              <span className="text-brand-purple-600 text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/core-technology/agentic-architecture"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-success"
            >
              <CubeIcon className="h-8 w-8 text-success mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Agentic Architecture</h3>
              <p className="text-sm text-gray-600">
                Multi-agent orchestration architecture
              </p>
              <span className="text-success text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/core-technology/gen-ai-box"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-orange-300"
            >
              <BeakerIcon className="h-8 w-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Gen AI in a Box</h3>
              <p className="text-sm text-gray-600">
                On-premise installation for secure, local semantic engineering
              </p>
              <span className="text-orange-600 text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/core-technology/guardrails"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-red-300"
            >
              <DocumentTextIcon className="h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Strategic Guardrails</h3>
              <p className="text-sm text-gray-600">
                Control structures for safe, compliant AI operations
              </p>
              <span className="text-red-600 text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                Learn more <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary to-brand-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Ready to See What's Possible?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Explore real examples of how our semantic graph approach has solved complex 
            enterprise challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions/product-development"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-secondary rounded-xl hover:bg-gray-100 transition-all"
            >
              Product Engineering Deep Dive
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/solutions/application-reengineering"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 rounded-xl hover:bg-white/30 transition-all"
            >
              Application Re-engineering Deep Dive
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologyOverview;