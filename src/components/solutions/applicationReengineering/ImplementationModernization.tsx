import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  UserIcon,
  CpuChipIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const ImplementationModernization: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'design' | 'architecture' | 'testing' | 'code'>('design');

  const modernizationTracks = {
    design: {
      title: 'Design System Migration',
      icon: PaintBrushIcon,
      color: 'purple',
      description: 'Modernize UI with new design system and component library',
      outputs: [
        'Modern design system (Tailwind CSS)',
        'Reusable component library',
        'Responsive, accessible layouts',
        'Dark mode support'
      ],
      approach: 'Incremental UI migration using design system components'
    },
    architecture: {
      title: 'Architecture Modernization',
      icon: CubeIcon,
      color: 'green',
      description: 'Extract microservices and modernize system architecture',
      outputs: [
        'Auth microservice (Node.js/TypeScript)',
        'GraphQL API gateway',
        'PostgreSQL migration',
        'AWS ECS deployment'
      ],
      approach: 'Strangler Fig pattern - gradually replace legacy with modern services'
    },
    testing: {
      title: 'Test Automation',
      icon: BeakerIcon,
      color: 'blue',
      description: 'Generate comprehensive test suites for existing functionality',
      outputs: [
        'Gherkin/BDD scenarios (existing features)',
        'Unit tests (80%+ coverage target)',
        'Integration tests',
        'E2E regression tests'
      ],
      approach: 'AI generates tests from extracted knowledge graphs'
    },
    code: {
      title: 'Code Refactoring',
      icon: CodeBracketIcon,
      color: 'orange',
      description: 'Automated refactoring with human validation',
      outputs: [
        'Eliminate code duplications',
        'Improve naming and structure',
        'Modernize language features',
        'Remove dead code'
      ],
      approach: 'AI refactors repetitive patterns, humans validate complex logic'
    }
  };

  const currentTrack = modernizationTracks[selectedTrack];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colorMap[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/application-reengineering" className="text-sm text-orange-600 hover:text-orange-700 mb-2 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Implementation & Modernization</h1>
          <p className="mt-2 text-gray-600">
            AI-powered refactoring and modernization with parallel manual + automated workflows
          </p>
        </div>

        {/* Validation Gateway */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircleIcon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">All Stakeholders Approved</h2>
              <p className="text-sm text-gray-700 mb-3">
                Implementation begins with validated target architecture and stakeholder alignment on modernization goals.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  Business Specs Approved
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  Re-engineering Stories Approved
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  UI/UX Flows Approved
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  Target Architecture Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Modernization Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Four Modernization Tracks</h2>

          {/* Track Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(Object.keys(modernizationTracks) as Array<keyof typeof modernizationTracks>).map((key) => {
              const track = modernizationTracks[key];
              const Icon = track.icon;
              const colors = getColorClasses(track.color);
              const isSelected = selectedTrack === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedTrack(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${isSelected ? colors.text : 'text-gray-400'}`} />
                  <p className={`text-xs font-semibold text-center ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                    {track.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Track Details */}
          <div className={`border-2 ${getColorClasses(currentTrack.color).border} rounded-lg p-6 ${getColorClasses(currentTrack.color).bg}`}>
            <div className="flex items-start mb-4">
              <currentTrack.icon className={`h-8 w-8 ${getColorClasses(currentTrack.color).text} mr-3`} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentTrack.title}</h3>
                <p className="text-sm text-gray-600">{currentTrack.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Outputs:</h4>
                <ul className="space-y-2">
                  {currentTrack.outputs.map((output, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Approach:</h4>
                <p className="text-sm text-gray-700">{currentTrack.approach}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parallel Development Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start mb-4">
            <BoltIcon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Parallel Re-engineering Workflows</h2>
              <p className="text-sm text-gray-600">
                Manual expert work and AI-powered automation proceed in parallel, maximizing velocity while maintaining quality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual */}
            <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center mb-4">
                <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Expert Manual Work</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Developers focus on complex business logic, critical refactorings, and architectural decisions.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complex business logic migration</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Microservice boundary design</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Critical path optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Security-critical components</span>
                </li>
              </ul>
            </div>

            {/* AI-Powered */}
            <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
              <div className="flex items-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">AI-Powered Automation</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                AI agents handle repetitive refactoring, test generation, and code quality improvements.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Eliminate code duplication</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Generate test coverage</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Modernize syntax and patterns</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Update dependencies</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Comparison */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Timeline Comparison</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Traditional Re-engineering:</p>
                <div className="flex items-center gap-1">
                  <div className="flex-1 bg-red-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual assessment
                  </div>
                  <div className="flex-1 bg-orange-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual planning
                  </div>
                  <div className="flex-1 bg-yellow-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual refactoring
                  </div>
                  <div className="flex-1 bg-green-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual testing
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  20-24 weeks typical timeline
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Breeze AI Re-engineering:</p>
                <div className="flex items-start gap-1">
                  <div className="flex-1 space-y-1">
                    <div className="bg-blue-500 h-5 rounded flex items-center justify-center text-xs text-white font-medium">AI Discovery</div>
                    <div className="bg-purple-500 h-5 rounded flex items-center justify-center text-xs text-white font-medium">AI Validation</div>
                    <div className="bg-green-500 h-5 rounded flex items-center justify-center text-xs text-white font-medium">AI Tests</div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-16 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual + AI Re-engineering in Parallel
                  </div>
                </div>
                <p className="text-xs text-green-600 mt-1 flex items-center font-semibold">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  12-16 weeks typical timeline (40% faster)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Re-engineering Agent Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Design Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Design System Generator</li>
                <li>• Component Migrator</li>
                <li>• Accessibility Auditor</li>
                <li>• Responsive Adapter</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Architecture Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Microservice Extractor</li>
                <li>• API Modernizer</li>
                <li>• Database Optimizer</li>
                <li>• Deployment Planner</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Testing Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Gherkin Generator</li>
                <li>• Unit Test Creator</li>
                <li>• E2E Test Builder</li>
                <li>• Coverage Analyzer</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Refactoring Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Duplication Eliminator</li>
                <li>• Code Quality Improver</li>
                <li>• Syntax Modernizer</li>
                <li>• Dependency Updater</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <BoltIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">40% Faster</h3>
              <p className="text-sm text-gray-600">
                Parallel workflows dramatically accelerate re-engineering
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">0 Downtime</h3>
              <p className="text-sm text-gray-600">
                Incremental deployment with automated rollback
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <SparklesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Living Docs</h3>
              <p className="text-sm text-gray-600">
                Documentation auto-updates as system evolves
              </p>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Next: Continuous Validation</h2>
          <p className="text-sm mb-4 opacity-90">
            During re-engineering, continuous sprint-by-sprint validation ensures we're actually improving
            quality and not introducing new technical debt.
          </p>
          <Link
            to="/solutions/application-reengineering/validation"
            className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Continuous Validation
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImplementationModernization;
