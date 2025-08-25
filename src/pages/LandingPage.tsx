import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRightIcon, 
  BeakerIcon, 
  CpuChipIcon, 
  ChartBarIcon, 
  UserGroupIcon,
  SparklesIcon,
  CommandLineIcon,
  ExclamationTriangleIcon,
  CubeTransparentIcon,
  ArrowPathIcon,
  PhoneIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { getPublicAssetUrl } from '../utils/assetHelper';

interface LandingPageProps {
  customLogo?: string;
  customCompanyName?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ 
  customLogo, 
  customCompanyName = "Accion AI Labs" 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {customLogo ? (
              <img src={customLogo} alt={customCompanyName} className="h-8 w-auto" />
            ) : (
              <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            )}
            <span className="text-xl font-semibold text-gray-900">{customCompanyName}</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/core-technology" className="text-gray-600 hover:text-gray-900">Technology</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-gray-900">Solutions</Link>
            <Link to="/contact" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Enterprise AI Solutions by Accion Labs
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Enterprise AI Built on
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Knowledge Graphs & Semantic Understanding
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 px-4">
              While others chase the latest models, we solve the enterprise AI challenge: 
              delivering predictable, explainable results that align with your business guidelines.
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 px-4">
              50+ GenAI projects delivered. Zero hallucinations. Full traceability. 
              AI that understands relationships, not just keywords.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link
                to="/core-technology"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Explore Our Technology
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                View Solution Examples
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Core Technology & Solutions Overview */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Why Knowledge Graphs */}
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
                Why Knowledge Graphs Matter for Enterprise AI
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                The difference between AI that works in demos and AI that works in production
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl border border-blue-200 p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Predictable & Reliable</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Every decision traceable to source data. No surprises, no hallucinations.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">✓</span>
                      Consistent outputs for same queries
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">✓</span>
                      Full audit trail for compliance
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-1">✓</span>
                      Grounded in your actual data
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-green-50 to-white rounded-xl border border-green-200 p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <ChartBarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Explainable & Transparent</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Understand not just what, but why. Perfect for regulated industries.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      Visual reasoning paths
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      Relationship-based insights
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      Business-friendly explanations
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl border border-purple-200 p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <SparklesIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">10x Productivity</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    AI that understands context delivers results, not more work.
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">✓</span>
                      Multi-hop reasoning capability
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">✓</span>
                      Handles complex dependencies
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">✓</span>
                      Works within your guidelines
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Technology Section */}
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
                Our Semantic Engineering Platform
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                Five integrated components that work together to deliver accurate, reliable AI solutions
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                <Link to="/core-technology/kaps-framework" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-blue-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <BeakerIcon className="h-8 w-8 text-blue-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-blue-600 text-base">KAPS Framework</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      GenAI adoption framework with graph-based context engineering
                    </p>
                  </div>
                </Link>
                
                <Link to="/core-technology/agent-architecture" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-purple-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <CubeTransparentIcon className="h-8 w-8 text-purple-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-purple-600 text-base">Agent Architecture</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      Multi-agent orchestration for complex problem-solving
                    </p>
                  </div>
                </Link>
                
                <Link to="/core-technology" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-indigo-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <CpuChipIcon className="h-8 w-8 text-indigo-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-indigo-600 text-base">Breeze.AI</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      End-to-end semantic engineering delivery platform
                    </p>
                  </div>
                </Link>
                
                <Link to="/core-technology/gen-ai-box" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-green-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <SparklesIcon className="h-8 w-8 text-green-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-green-600 text-base">Gen AI in a Box</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      On-premise installation for secure, local AI deployment
                    </p>
                  </div>
                </Link>
                
                <Link to="/core-technology/guardrails" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-orange-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <ShieldCheckIcon className="h-8 w-8 text-orange-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-orange-600 text-base">Strategic Guardrails</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      Enterprise compliance and safety controls
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Featured Deep Dives */}
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-8">
                Featured Solutions with Deep Dives
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Link to="/solutions/technical-debt" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-orange-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <ExclamationTriangleIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600">Technical Debt Management</h3>
                        <span className="text-xs text-gray-500">Complete Deep Dive Available</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      AI agents analyze codebases to identify technical debt and provide prioritized remediation.
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      View Showcase → Deep Dive
                    </div>
                  </div>
                </Link>
                
                <Link to="/solutions/portfolio-rationalization" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-purple-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <CubeTransparentIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-purple-600">Portfolio Rationalization</h3>
                        <span className="text-xs text-gray-500">Complete Deep Dive Available</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Analyze multiple applications to identify overlaps and consolidation opportunities.
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      View Showcase → Deep Dive
                    </div>
                  </div>
                </Link>
                
                <Link to="/solutions/asimov" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-indigo-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                        <ArrowPathIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-indigo-600">ASIMOV Legacy Migration</h3>
                        <span className="text-xs text-gray-500">Complete Deep Dive Available</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      AI-powered application modernization with autonomous code transformation.
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      View Deep Dive
                    </div>
                  </div>
                </Link>
                
                <Link to="/solutions/customer-service" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-green-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <PhoneIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Customer Service AI</h3>
                        <span className="text-xs text-gray-500">Complete Deep Dive Available</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Autonomous support system with self-healing bots and agent augmentation.
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      View Deep Dive
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Demo Video */}
            <div className="relative bg-gray-900 -mx-4 sm:mx-0 sm:rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-square sm:aspect-video">
                <video 
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={getPublicAssetUrl("assets/videos/ai-agents-autonomous-business.mp4")} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 flex items-center justify-center">
                  <div className="text-center px-6 sm:px-12 max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      Building Autonomous Enterprises
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90">
                      Knowledge Graphs + Agentic AI = Autonomous operations that stay within guardrails. 
                      <span className="hidden sm:inline">AI agents that understand your business context, relationships, and constraints.</span>
                      <span className="sm:hidden">AI that understands your business.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Categories */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
              Solutions That Scale With Your Business
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              Every solution built on our Knowledge Graph foundation — ensuring consistency, 
              compliance, and continuous improvement as your business evolves.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Engineering Excellence */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CpuChipIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Engineering Excellence</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Code analysis, technical debt reduction, migration planning, and architectural optimization.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Code Review Automation</li>
                  <li>• Dependency Analysis</li>
                  <li>• Security Vulnerability Detection</li>
                </ul>
              </div>

              {/* Operational Intelligence */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Operational Intelligence</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Automated support tiers, incident response, and performance optimization.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• L0/L1/L2 Support Automation</li>
                  <li>• Incident Root Cause Analysis</li>
                  <li>• Performance Monitoring</li>
                </ul>
              </div>

              {/* Business Process Automation */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Business Automation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Customer onboarding, compliance validation, and documentation generation.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• B2B Platform Onboarding</li>
                  <li>• Compliance Checking</li>
                  <li>• Auto-Documentation</li>
                </ul>
              </div>

              {/* Intelligent Analytics */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <SparklesIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Intelligent Analytics</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Just-in-time dashboards, natural language reporting, and predictive insights.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Natural Language Queries</li>
                  <li>• Custom Dashboard Generation</li>
                  <li>• Predictive Analytics</li>
                </ul>
              </div>

              {/* Next-Gen Interfaces */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <CommandLineIcon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Next-Gen Interfaces</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Conversational UI, voice-driven development, and AR/VR visualizations.
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• Conversational Coding</li>
                  <li>• Voice Commands</li>
                  <li>• Immersive Debugging</li>
                </ul>
              </div>

              {/* Custom Solutions */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Your Custom Solution</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Have a unique challenge? Let's build a solution together.
                </p>
                <Link 
                  to="/contact"
                  className="text-sm text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Start a Conversation →
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Ready to Transform Your Enterprise?
              </h2>
              <p className="text-lg mb-8 opacity-90">
                Let's discuss how custom AI agents can solve your unique challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  Schedule Discovery Workshop
                </Link>
                <Link
                  to="/core-technology"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 rounded-xl hover:bg-white/30 transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;