import React from 'react';
import { Link } from 'react-router-dom';
import {
  CubeTransparentIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  ArrowPathIcon,
  MagnifyingGlassCircleIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  SparklesIcon,
  ServerStackIcon,
  PuzzlePieceIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';

const PortfolioRationalizationShowcase: React.FC = () => {
  const capabilities = [
    {
      icon: MagnifyingGlassCircleIcon,
      title: "Semantic Analysis",
      description: "Deep understanding of application functionality across different technology stacks"
    },
    {
      icon: DocumentDuplicateIcon,
      title: "Overlap Detection",
      description: "AI-powered identification of functional redundancies and duplications"
    },
    {
      icon: PuzzlePieceIcon,
      title: "Integration Mapping",
      description: "Comprehensive analysis of system dependencies and data flows"
    },
    {
      icon: ScaleIcon,
      title: "Consolidation Planning",
      description: "Strategic recommendations for application merger and retirement"
    }
  ];

  const metrics = [
    { label: "Applications", value: "500+", subtext: "Analyzed" },
    { label: "Cost Reduction", value: "35%", subtext: "Average savings" },
    { label: "Redundancy", value: "42%", subtext: "Identified overlaps" },
    { label: "Time to Value", value: "8 weeks", subtext: "Full assessment" }
  ];

  const ontologyLayers = [
    {
      name: "Functional",
      description: "Business capabilities and user journeys",
      examples: ["Customer onboarding", "Order processing", "Payment handling"]
    },
    {
      name: "Design",
      description: "System patterns and architectural decisions",
      examples: ["Microservices", "Event-driven", "API gateway"]
    },
    {
      name: "Architecture",
      description: "Technology stack and infrastructure",
      examples: ["Cloud platforms", "Databases", "Message queues"]
    },
    {
      name: "Code",
      description: "Implementation details and libraries",
      examples: ["Frameworks", "Dependencies", "Code patterns"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Rationalization</h1>
          <Link
            to="/portfolio"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
          >
            View Deep Dive
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl">
          AI-driven application portfolio analysis that identifies redundancies, overlaps, and 
          consolidation opportunities across your entire software estate using our four-ontology 
          semantic framework.
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <CubeTransparentIcon className="h-8 w-8 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">Optimize Your Application Portfolio</h2>
            <p className="text-gray-600">Semantic analysis reveals hidden redundancies and consolidation opportunities</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {metrics.map((metric, idx) => (
            <div key={idx} className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
              <div className="text-sm font-semibold text-gray-700">{metric.label}</div>
              <div className="text-xs text-gray-500">{metric.subtext}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Four Ontology Framework */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Four-Ontology Semantic Framework</h2>
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ontologyLayers.map((layer, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 border-2 border-blue-200 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{layer.name}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">Layer {idx + 1}</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">{layer.description}</p>
                <div className="space-y-1">
                  {layer.examples.map((example, exIdx) => (
                    <div key={exIdx} className="text-xs text-gray-500 flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{capability.title}</h3>
                  <p className="text-sm text-gray-600">{capability.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Analysis Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Rationalization Process</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                1
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Discovery & Ingestion</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Automated discovery and semantic analysis of all applications in your portfolio
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>Duration: 1-2 weeks</span>
                  <span>•</span>
                  <span>500+ apps analyzed</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                2
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Overlap Analysis</h3>
                <p className="text-sm text-gray-600 mb-2">
                  AI-powered detection of functional redundancies across all four ontology layers
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>Duration: 2-3 weeks</span>
                  <span>•</span>
                  <span>42% average overlap found</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                3
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Consolidation Planning</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Strategic recommendations for application merger, modernization, or retirement
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>Duration: 1-2 weeks</span>
                  <span>•</span>
                  <span>Detailed roadmap provided</span>
                </div>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                4
              </div>
              <div className="ml-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">Implementation Support</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Ongoing guidance and automation support for portfolio optimization
                </p>
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <span>Duration: Ongoing</span>
                  <span>•</span>
                  <span>35% cost reduction achieved</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Visual Analysis Example */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Visual Portfolio Analysis</h2>
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-purple-200">
              <div className="flex items-center mb-3">
                <ChartPieIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Coverage Analysis</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Analyzed</span>
                  <span className="font-semibold">100%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-blue-200">
              <div className="flex items-center mb-3">
                <ServerStackIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Redundancy Detection</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Overlaps</span>
                  <span className="font-semibold">42%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '42%' }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-3">
                <CurrencyDollarIcon className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Cost Savings</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Reduction</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* AI Agent Teams */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Intelligent Agent Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border-2 border-blue-200">
            <div className="flex items-center mb-3">
              <SparklesIcon className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Discovery Agents</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Crawl codebases and documentation to build semantic models
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Code parsers</li>
              <li>• API analyzers</li>
              <li>• Doc extractors</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-purple-200">
            <div className="flex items-center mb-3">
              <ChartBarIcon className="h-6 w-6 text-purple-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Analysis Agents</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Identify patterns, overlaps, and optimization opportunities
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Pattern matchers</li>
              <li>• Overlap detectors</li>
              <li>• Cost analyzers</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border-2 border-green-200">
            <div className="flex items-center mb-3">
              <ArrowPathIcon className="h-6 w-6 text-green-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Planning Agents</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Generate consolidation strategies and migration paths
            </p>
            <ul className="text-xs text-gray-500 space-y-1">
              <li>• Strategy builders</li>
              <li>• Risk assessors</li>
              <li>• Roadmap generators</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Story */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Story</h2>
        <div className="border-l-4 border-blue-600 pl-6">
          <h3 className="font-semibold text-gray-900 mb-2">Global E-commerce Platform</h3>
          <p className="text-gray-600 mb-4">
            Analyzed 500+ applications across multiple business units to identify consolidation opportunities
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-blue-600">127</div>
              <div className="text-sm text-gray-600">Apps retired</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">35%</div>
              <div className="text-sm text-gray-600">Cost reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">60%</div>
              <div className="text-sm text-gray-600">Faster delivery</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">8 weeks</div>
              <div className="text-sm text-gray-600">To insights</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioRationalizationShowcase;