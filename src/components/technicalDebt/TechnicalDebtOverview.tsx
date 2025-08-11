import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SparklesIcon,
  CpuChipIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ServerIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';
import AnimatedExtractionProcess from './AnimatedExtractionProcess';

const TechnicalDebtOverview: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Technical Debt Analysis Deep Dive</h1>
          <p className="mt-2 text-gray-600">
            How we identify, quantify, and remediate technical debt using semantic ontology analysis
          </p>
        </div>

        {/* The Problem */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">The Hidden Cost of Technical Debt</h2>
              <p className="text-gray-700 mb-4">
                Technical debt silently accumulates in every codebase, creating a compound effect that slows development, 
                increases bugs, and makes systems harder to maintain. Studies show that organizations spend 
                <strong className="text-red-600"> 40% of their IT budget</strong> just managing technical debt.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <ClockIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">23% slower</p>
                  <p className="text-xs text-gray-600">Feature delivery</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <BugAntIcon className="h-6 w-6 text-red-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">4x more bugs</p>
                  <p className="text-xs text-gray-600">In debt-heavy modules</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <CurrencyDollarIcon className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">$85B annually</p>
                  <p className="text-xs text-gray-600">US enterprises alone</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <UserGroupIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">60% of time</p>
                  <p className="text-xs text-gray-600">Dealing with bad code</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case Introduction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Case Study: Phoenix CRM Application</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-4">
                To demonstrate our technical debt analysis approach, we'll examine <strong>Phoenix CRM</strong>, 
                a real-world enterprise CRM system that has evolved over 8 years:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <ServerIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Legacy Architecture:</span>
                    <span className="text-gray-600 ml-2">Started as PHP monolith, partially migrated to microservices</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CodeBracketIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Mixed Technology:</span>
                    <span className="text-gray-600 ml-2">PHP, Node.js, Python services with MySQL and MongoDB</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <UserGroupIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Team Challenges:</span>
                    <span className="text-gray-600 ml-2">3 different teams, inconsistent practices, knowledge silos</span>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">Documentation Gap:</span>
                    <span className="text-gray-600 ml-2">Outdated docs, undocumented features, lost requirements</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Phoenix by the Numbers</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Lines of Code:</dt>
                  <dd className="text-sm font-semibold text-gray-900">~500K</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Components:</dt>
                  <dd className="text-sm font-semibold text-gray-900">1,247</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Dependencies:</dt>
                  <dd className="text-sm font-semibold text-gray-900">186</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Database Tables:</dt>
                  <dd className="text-sm font-semibold text-gray-900">143</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">API Endpoints:</dt>
                  <dd className="text-sm font-semibold text-gray-900">427</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">Active Users:</dt>
                  <dd className="text-sm font-semibold text-gray-900">12,000+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Our Solution: Semantic Ontology Analysis</h2>
          
          <p className="text-gray-700 mb-6">
            Traditional static analysis tools only scratch the surface. Our approach uses AI agents to build a 
            comprehensive understanding of your system across four critical dimensions:
          </p>

          {/* Animated Extraction Process */}
          <AnimatedExtractionProcess />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Analyze</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Code Structure:</strong> Components, dependencies, quality metrics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Business Logic:</strong> Features vs. implementation alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Architecture:</strong> Layer violations, anti-patterns, coupling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span><strong>Design Patterns:</strong> UI consistency, component duplication</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">What We Deliver</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span><strong>Debt Quantification:</strong> Precise metrics and impact analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span><strong>Root Causes:</strong> Why debt accumulated and where</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span><strong>Risk Assessment:</strong> Business impact and urgency scoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span><strong>Action Plan:</strong> Prioritized remediation roadmap</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phoenix Results Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Found in Phoenix CRM</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-red-600">147</span>
              </div>
              <h3 className="font-semibold text-gray-900">Critical Issues</h3>
              <p className="text-sm text-gray-600 mt-1">Architecture violations requiring immediate attention</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-orange-600">312</span>
              </div>
              <h3 className="font-semibold text-gray-900">Code Smells</h3>
              <p className="text-sm text-gray-600 mt-1">Duplicate code, complex methods, poor naming</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-yellow-600">89</span>
              </div>
              <h3 className="font-semibold text-gray-900">Missing Features</h3>
              <p className="text-sm text-gray-600 mt-1">Documented requirements not implemented</p>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800">
              <strong>Estimated Impact:</strong> Addressing these issues would reduce maintenance costs by 35% 
              and accelerate feature delivery by 50% within 6 months.
            </p>
          </div>
        </div>

        {/* Explore the Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Explore the Phoenix Analysis</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link 
              to="/technical-debt/agent-analysis"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <SparklesIcon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">1. Agent Extraction</h3>
              <p className="text-sm text-gray-600">See how AI agents analyzed Phoenix's codebase</p>
              <p className="text-xs text-blue-600 mt-2">View process →</p>
            </Link>

            <Link 
              to="/technical-debt/graph-explorer"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all group"
            >
              <CpuChipIcon className="h-8 w-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">2. Knowledge Graphs</h3>
              <p className="text-sm text-gray-600">Explore the four ontology graphs we extracted</p>
              <p className="text-xs text-purple-600 mt-2">View graphs →</p>
            </Link>

            <Link 
              to="/technical-debt/assessment"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <ScaleIcon className="h-8 w-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">3. Debt Assessment</h3>
              <p className="text-sm text-gray-600">Detailed breakdown of identified issues</p>
              <p className="text-xs text-orange-600 mt-2">View findings →</p>
            </Link>

            <Link 
              to="/technical-debt/remediation"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all group"
            >
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">4. Action Plan</h3>
              <p className="text-sm text-gray-600">Prioritized roadmap for debt reduction</p>
              <p className="text-xs text-green-600 mt-2">View roadmap →</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtOverview;