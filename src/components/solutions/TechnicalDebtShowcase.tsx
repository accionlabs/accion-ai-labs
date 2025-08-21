import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExclamationTriangleIcon,
  ChartBarIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const TechnicalDebtShowcase: React.FC = () => {
  const capabilities = [
    {
      icon: DocumentMagnifyingGlassIcon,
      title: "Autonomous Code Analysis",
      description: "Multi-agent system analyzes millions of lines of code to identify debt patterns"
    },
    {
      icon: ChartBarIcon,
      title: "Risk Quantification",
      description: "AI-powered risk scoring and business impact assessment"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Predictive Analytics",
      description: "Forecast technical debt accumulation and maintenance costs"
    },
    {
      icon: ShieldCheckIcon,
      title: "Security Vulnerability Detection",
      description: "Identify security risks and compliance violations in legacy code"
    }
  ];

  const metrics = [
    { label: "Code Coverage", value: "2M+ LOC", subtext: "Analyzed per day" },
    { label: "Debt Reduction", value: "47%", subtext: "Average improvement" },
    { label: "Time Saved", value: "60%", subtext: "In assessment phase" },
    { label: "ROI", value: "3.2x", subtext: "Within first year" }
  ];

  const process = [
    {
      phase: "Discovery",
      duration: "1 week",
      activities: [
        "Codebase scanning",
        "Dependency mapping",
        "Architecture analysis"
      ]
    },
    {
      phase: "Assessment",
      duration: "2 weeks",
      activities: [
        "Debt quantification",
        "Risk scoring",
        "Impact analysis"
      ]
    },
    {
      phase: "Planning",
      duration: "1 week",
      activities: [
        "Remediation roadmap",
        "Priority matrix",
        "Resource planning"
      ]
    },
    {
      phase: "Execution",
      duration: "Ongoing",
      activities: [
        "Automated refactoring",
        "Code modernization",
        "Continuous monitoring"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Technical Debt Management</h1>
          <Link
            to="/technical-debt"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
          >
            View Deep Dive
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl">
          AI-powered technical debt assessment and remediation platform that helps enterprises 
          identify, quantify, and systematically eliminate technical debt while maintaining 
          business continuity.
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">Transform Technical Debt into Strategic Advantage</h2>
            <p className="text-gray-600">Automated analysis, prioritization, and remediation at enterprise scale</p>
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

      {/* Core Capabilities */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-orange-600" />
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

      {/* Implementation Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Process</h2>
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                    <span className="text-xs text-orange-600 font-medium">{phase.duration}</span>
                  </div>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, actIdx) => (
                      <li key={actIdx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Agent Architecture */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Multi-Agent Architecture</h2>
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <div className="flex items-center mb-3">
                <CpuChipIcon className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Analysis Agents</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Specialized agents for code parsing, pattern detection, and dependency analysis
              </p>
              <div className="space-y-1">
                <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block mr-1">Code Parser</div>
                <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block mr-1">Pattern Detector</div>
                <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block">Dependency Mapper</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200">
              <div className="flex items-center mb-3">
                <ChartBarIcon className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Assessment Agents</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Risk scoring, impact analysis, and prioritization algorithms
              </p>
              <div className="space-y-1">
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block mr-1">Risk Scorer</div>
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block mr-1">Impact Analyzer</div>
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block">Priority Engine</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-3">
                <SparklesIcon className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Remediation Agents</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Automated refactoring, code generation, and migration planning
              </p>
              <div className="space-y-1">
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mr-1">Refactor Bot</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mr-1">Code Generator</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">Migration Planner</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">Fortune 500 Financial Services</h3>
            <p className="text-sm text-gray-600 mb-3">
              Reduced technical debt by 47% across 5M+ LOC legacy banking systems
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-green-600">
                <ClockIcon className="h-4 w-4 mr-1" />
                60% faster
              </span>
              <span className="flex items-center text-blue-600">
                <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                $2.3M saved
              </span>
            </div>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">Global E-commerce Platform</h3>
            <p className="text-sm text-gray-600 mb-3">
              Modernized microservices architecture while maintaining 99.99% uptime
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-green-600">
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                3x performance
              </span>
              <span className="flex items-center text-blue-600">
                <ShieldCheckIcon className="h-4 w-4 mr-1" />
                Zero downtime
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtShowcase;