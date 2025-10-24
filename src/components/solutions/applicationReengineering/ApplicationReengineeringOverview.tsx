import React from 'react';
import { Link } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  SparklesIcon,
  UserGroupIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ServerIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const ApplicationReengineeringOverview: React.FC = () => {
  const valueMetrics = [
    { metric: '70%', label: 'Faster Modernization', description: 'AI-accelerated re-engineering' },
    { metric: '60%', label: 'Cost Reduction', description: 'vs traditional re-engineering' },
    { metric: '40%', label: 'Fewer Defects', description: 'Continuous validation prevents issues' },
    { metric: '0', label: 'Production Downtime', description: 'Incremental modernization strategy' }
  ];

  const coreCapabilities = [
    {
      icon: SparklesIcon,
      title: 'Automated Discovery & Assessment',
      description: 'AI agents analyze your legacy codebase to build comprehensive knowledge graphs and identify technical debt',
      features: [
        'Four-ontology graph extraction',
        'Technical debt quantification',
        'Architecture violation detection',
        'Missing functionality identification'
      ]
    },
    {
      icon: UserGroupIcon,
      title: 'Multi-Stakeholder Re-engineering Strategy',
      description: 'Generate validated modernization plans for business owners, analysts, designers, and architects',
      features: [
        'Updated functional specifications',
        'Re-engineering epics & stories',
        'Modernized UI/UX flows',
        'Target architecture design'
      ]
    },
    {
      icon: CodeBracketIcon,
      title: 'AI-Powered Implementation',
      description: 'Automated refactoring, modernization, and test generation with human validation',
      features: [
        'Code refactoring & modernization',
        'Design system migration',
        'Automated test generation',
        'Incremental deployment strategy'
      ]
    },
    {
      icon: ArrowPathIcon,
      title: 'Continuous Validation',
      description: 'Every sprint, validate that modernization improves quality without breaking functionality',
      features: [
        'Sprint-by-sprint quality tracking',
        'Drift detection from target architecture',
        'Functionality preservation checks',
        'Prevent new technical debt'
      ]
    }
  ];

  const reengineeringJourney = [
    {
      phase: 'Discovery & Assessment',
      duration: '2-3 weeks',
      description: 'Understand current state and identify technical debt',
      activities: ['Extract knowledge graphs', 'Assess technical debt', 'Explore system architecture', 'Identify quick wins']
    },
    {
      phase: 'Strategy & Planning',
      duration: '2-4 weeks',
      description: 'Define target architecture and modernization roadmap',
      activities: ['Multi-stakeholder validation', 'Target architecture design', 'Migration pattern selection', 'Risk assessment']
    },
    {
      phase: 'Implementation',
      duration: '8-16 weeks',
      description: 'Execute modernization with AI-powered automation',
      activities: ['Incremental refactoring', 'Design system migration', 'Test automation', 'Continuous deployment']
    },
    {
      phase: 'Continuous Improvement',
      duration: 'Ongoing',
      description: 'Validate quality improvements and prevent regression',
      activities: ['Sprint validation', 'Drift detection', 'Quality monitoring', 'Living documentation']
    }
  ];

  const navigationLinks = [
    {
      path: '/solutions/application-reengineering/discovery',
      label: 'Discovery & Assessment',
      icon: SparklesIcon,
      description: 'Extract knowledge graphs and assess technical debt'
    },
    {
      path: '/solutions/application-reengineering/strategy',
      label: 'Re-engineering Strategy',
      icon: UserGroupIcon,
      description: 'Multi-stakeholder planning and target architecture'
    },
    {
      path: '/solutions/application-reengineering/implementation',
      label: 'Implementation & Modernization',
      icon: CodeBracketIcon,
      description: 'AI-powered refactoring and artifact generation'
    },
    {
      path: '/solutions/application-reengineering/validation',
      label: 'Continuous Validation',
      icon: ShieldCheckIcon,
      description: 'Sprint-by-sprint quality tracking and drift detection'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <WrenchScrewdriverIcon className="h-10 w-10 text-orange-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">Application Re-engineering</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                Systematically modernize legacy applications using AI-powered analysis, multi-stakeholder
                validation, and continuous quality monitoring
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
              <p className="text-3xl font-bold text-orange-600 mb-2">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-orange-200 p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">The Re-engineering Challenge</h2>
              <p className="text-gray-700 mb-4">
                Legacy applications hold businesses back, but traditional re-engineering is risky, expensive,
                and often fails. Organizations face a difficult choice: live with mounting technical debt or
                risk a costly modernization that might break critical functionality.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <CurrencyDollarIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">$85B Annually</p>
                  <p className="text-xs text-gray-600">US enterprises spend on technical debt</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <ClockIcon className="h-6 w-6 text-red-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">23% Slower</p>
                  <p className="text-xs text-gray-600">Feature delivery in debt-heavy systems</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <ServerIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">60% of Time</p>
                  <p className="text-xs text-gray-600">Developers spend dealing with bad code</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Re-engineering Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
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

        {/* Re-engineering Journey */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Systematic Re-engineering Journey</h2>
          <div className="relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-300"></div>
            {reengineeringJourney.map((phase, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="absolute left-8 w-4 h-4 bg-orange-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-orange-600 font-medium">{phase.duration}</p>
                      </div>
                      <BoltIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircleIcon className="h-3 w-3 text-orange-600 mr-1" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Teaser */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Case Study: Phoenix CRM Modernization</h2>
          <p className="text-sm text-gray-700 mb-4">
            Phoenix CRM, an 8-year-old enterprise application with 500K lines of code, suffered from accumulated
            technical debt, mixed technology stacks, and inconsistent practices. We systematically re-engineered
            the application while maintaining 100% uptime and preserving all business functionality.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-orange-600">147</p>
              <p className="text-sm font-semibold text-gray-900">Critical Issues Fixed</p>
              <p className="text-xs text-gray-600">Architecture violations resolved</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-green-600">35%</p>
              <p className="text-sm font-semibold text-gray-900">Maintenance Cost Reduction</p>
              <p className="text-xs text-gray-600">After 6 months of re-engineering</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-blue-600">50%</p>
              <p className="text-sm font-semibold text-gray-900">Faster Feature Delivery</p>
              <p className="text-xs text-gray-600">Post-modernization velocity</p>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Our Approach Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Incremental approach:</strong> Small, validated changes reduce risk</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Automated testing:</strong> Comprehensive test suite catches regressions</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>Continuous validation:</strong> Every sprint verifies quality improvements</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Accelerated Delivery</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <BoltIcon className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <span><strong>AI automation:</strong> Automated refactoring for repetitive patterns</span>
                </li>
                <li className="flex items-start">
                  <BoltIcon className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <span><strong>Parallel workflows:</strong> Manual + AI work happening simultaneously</span>
                </li>
                <li className="flex items-start">
                  <BoltIcon className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <span><strong>Living documentation:</strong> Automatically updated as code evolves</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                to={link.path}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <Icon className="h-8 w-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.label}</h3>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                <div className="flex items-center text-orange-600 text-sm">
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

export default ApplicationReengineeringOverview;
