import React from 'react';
import { 
  ArrowPathIcon, 
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  CloudArrowUpIcon,
  BoltIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  BeakerIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ASIMOVOverview: React.FC = () => {
  const coreCapabilities = [
    {
      icon: DocumentMagnifyingGlassIcon,
      title: 'AI-Powered Discovery',
      description: 'Autonomous agents analyze legacy systems to create comprehensive knowledge graphs',
      features: [
        'Deep code analysis with LLM understanding',
        'Automatic dependency mapping',
        'Business logic extraction',
        'Hidden pattern discovery'
      ]
    },
    {
      icon: CpuChipIcon,
      title: 'Intelligent Transformation',
      description: 'Multi-agent orchestration for code modernization and optimization',
      features: [
        'Automated code refactoring',
        'Language translation (COBOL to Java)',
        'Architecture modernization',
        'Performance optimization'
      ]
    },
    {
      icon: CloudArrowUpIcon,
      title: 'Cloud-Native Migration',
      description: 'Agent-driven containerization and cloud deployment strategies',
      features: [
        'Microservices extraction',
        'Container orchestration',
        'Auto-scaling configuration',
        'Infrastructure as code'
      ]
    },
    {
      icon: ShieldCheckIcon,
      title: 'Zero-Risk Execution',
      description: 'Continuous validation and rollback capabilities ensure safe migration',
      features: [
        'Parallel run validation',
        'Automated testing generation',
        'Real-time monitoring',
        'Instant rollback capability'
      ]
    }
  ];

  const migrationApproach = {
    phases: [
      {
        phase: 'Discovery & Assessment',
        duration: '2-4 weeks',
        description: 'Comprehensive analysis of legacy landscape',
        deliverables: [
          'Complete system inventory',
          'Dependency mapping',
          'Risk assessment matrix',
          'Migration roadmap'
        ]
      },
      {
        phase: 'Planning & Design',
        duration: '3-5 weeks',
        description: 'Detailed migration strategy and architecture',
        deliverables: [
          'Target architecture blueprint',
          'Migration patterns catalog',
          'Resource allocation plan',
          'Success metrics definition'
        ]
      },
      {
        phase: 'Iterative Transformation',
        duration: '3-6 months',
        description: 'Incremental modernization with continuous validation',
        deliverables: [
          'Modernized components',
          'API interfaces',
          'Test automation suite',
          'Performance benchmarks'
        ]
      },
      {
        phase: 'Deployment & Optimization',
        duration: '2-4 weeks',
        description: 'Production rollout and performance tuning',
        deliverables: [
          'Production deployment',
          'Monitoring dashboards',
          'Optimization reports',
          'Knowledge transfer'
        ]
      }
    ]
  };

  const valueProposition = [
    { metric: '70%', label: 'Reduction in Migration Time', description: 'AI automation accelerates transformation' },
    { metric: '85%', label: 'Code Coverage', description: 'Automated testing ensures quality' },
    { metric: '60%', label: 'Cost Savings', description: 'Compared to traditional migration' },
    { metric: '99.9%', label: 'Uptime During Migration', description: 'Zero-downtime deployment strategy' }
  ];

  const navigationLinks = [
    { path: '/solutions/asimov/discovery', label: 'Discovery & Analysis', icon: DocumentMagnifyingGlassIcon },
    { path: '/solutions/asimov/transformation', label: 'Transformation Engine', icon: CpuChipIcon },
    { path: '/solutions/asimov/patterns', label: 'Migration Patterns', icon: CodeBracketIcon },
    { path: '/solutions/asimov/success-stories', label: 'Success Stories', icon: ChartBarIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <ArrowPathIcon className="h-10 w-10 text-blue-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">ASIMOV Legacy Migration Platform</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                Autonomous System for Intelligent Migration and Optimization - Transform legacy applications 
                into modern, cloud-native architectures using AI-powered agents
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {valueProposition.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Migration Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-blue-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
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

        {/* Migration Approach */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proven Migration Methodology</h2>
          <div className="relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-300"></div>
            {migrationApproach.phases.map((phase, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-blue-600 font-medium">{phase.duration}</p>
                      </div>
                      <BoltIcon className="h-6 w-6 text-blue-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">Key Deliverables:</p>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <SparklesIcon className="h-3 w-3 text-blue-500 mr-1" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Multi-Agent Migration Ecosystem</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Discovery Agents</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Code Analysis Agent</li>
                  <li>• Dependency Mapper</li>
                  <li>• Business Logic Extractor</li>
                  <li>• Documentation Generator</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Transformation Agents</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Code Translator</li>
                  <li>• Refactoring Agent</li>
                  <li>• API Designer</li>
                  <li>• Test Generator</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Validation Agents</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Quality Validator</li>
                  <li>• Performance Monitor</li>
                  <li>• Security Scanner</li>
                  <li>• Compliance Checker</li>
                </ul>
              </div>
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
                <Icon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.label}</h3>
                <div className="flex items-center text-blue-600 text-sm">
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

export default ASIMOVOverview;