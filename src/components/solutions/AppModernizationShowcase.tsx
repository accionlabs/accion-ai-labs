import React, { useState } from 'react';
import { 
  ArrowPathIcon, 
  CloudArrowUpIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  BoltIcon,
  CubeTransparentIcon,
  BeakerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AppModernizationShowcase: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  const migrationApproaches = [
    {
      name: 'Agent-Driven Discovery',
      icon: DocumentMagnifyingGlassIcon,
      description: 'Autonomous agents analyze legacy codebase',
      features: [
        'Multi-agent code exploration',
        'Dependency graph extraction',
        'Business logic mining',
        'Technical debt assessment'
      ]
    },
    {
      name: 'Intelligent Refactoring',
      icon: CodeBracketIcon,
      description: 'AI agents automatically refactor and optimize',
      features: [
        'Pattern recognition agents',
        'Code modernization bots',
        'API extraction agents',
        'Performance optimization'
      ]
    },
    {
      name: 'Continuous Migration',
      icon: ArrowPathIcon,
      description: 'Incremental agent-orchestrated migration',
      features: [
        'Parallel processing agents',
        'Risk assessment bots',
        'Rollback orchestration',
        'Zero-downtime migration'
      ]
    },
    {
      name: 'Cloud-Native Transform',
      icon: CloudArrowUpIcon,
      description: 'Agents architect cloud-native solutions',
      features: [
        'Containerization agents',
        'Microservices extraction',
        'Serverless transformation',
        'Auto-scaling configuration'
      ]
    }
  ];

  const asimovCapabilities = {
    core: [
      {
        name: 'Code Understanding Agent',
        description: 'Deep semantic analysis of legacy codebases using LLMs',
        metrics: '10M+ LOC analyzed'
      },
      {
        name: 'Migration Planning Agent',
        description: 'Intelligent roadmap generation with dependency resolution',
        metrics: '85% accuracy'
      },
      {
        name: 'Transformation Agent',
        description: 'Automated code transformation and modernization',
        metrics: '70% automation'
      },
      {
        name: 'Validation Agent',
        description: 'Continuous testing and validation of migrated components',
        metrics: '99.9% reliability'
      }
    ],
    technologies: [
      { name: 'COBOL to Java', success: '95%' },
      { name: 'Mainframe to Cloud', success: '88%' },
      { name: 'Monolith to Microservices', success: '92%' },
      { name: 'On-Prem to Kubernetes', success: '96%' }
    ]
  };

  const caseStudies = [
    {
      title: 'Banking Core Modernization',
      client: 'Global Financial Institution',
      challenge: '40-year-old COBOL mainframe with 15M lines of code',
      solution: 'Multi-agent swarm for parallel analysis and transformation',
      results: [
        '60% reduction in operational costs',
        '10x improvement in deployment frequency',
        'Zero-downtime migration completed in 18 months',
        '100% feature parity maintained'
      ],
      agents: ['Code Parser Agent', 'Business Logic Extractor', 'Test Generator', 'Migration Orchestrator']
    },
    {
      title: 'E-Commerce Platform Evolution',
      client: 'Fortune 500 Retailer',
      challenge: 'Monolithic Java application handling $2B annual transactions',
      solution: 'Agent-driven microservices extraction and containerization',
      results: [
        '200% improvement in scalability',
        '75% reduction in deployment time',
        'Automatic scaling during peak seasons',
        '40% reduction in infrastructure costs'
      ],
      agents: ['Service Boundary Agent', 'API Designer', 'Container Orchestrator', 'Performance Monitor']
    },
    {
      title: 'Healthcare System Transformation',
      client: 'National Healthcare Provider',
      challenge: 'Legacy VB6 applications with complex integrations',
      solution: 'Incremental migration using autonomous refactoring agents',
      results: [
        'HIPAA compliance achieved automatically',
        '80% reduction in maintenance effort',
        'Real-time data processing capability',
        '5x faster patient data retrieval'
      ],
      agents: ['Compliance Checker', 'Data Migration Agent', 'Integration Mapper', 'Security Validator']
    }
  ];

  const migrationProcess = [
    {
      phase: 'Discovery',
      duration: '2-4 weeks',
      agents: ['Code Analyzer', 'Dependency Mapper', 'Risk Assessor'],
      outputs: ['Complete codebase analysis', 'Dependency graphs', 'Risk matrix']
    },
    {
      phase: 'Planning',
      duration: '2-3 weeks',
      agents: ['Strategy Planner', 'Resource Allocator', 'Timeline Generator'],
      outputs: ['Migration roadmap', 'Resource plan', 'Risk mitigation strategy']
    },
    {
      phase: 'Transformation',
      duration: '3-6 months',
      agents: ['Code Transformer', 'Test Generator', 'Quality Validator'],
      outputs: ['Modernized codebase', 'Comprehensive test suite', 'Performance benchmarks']
    },
    {
      phase: 'Deployment',
      duration: '2-4 weeks',
      agents: ['Deployment Orchestrator', 'Rollback Manager', 'Monitor Agent'],
      outputs: ['Production deployment', 'Monitoring dashboards', 'Rollback procedures']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <ArrowPathIcon className="h-8 w-8 text-blue-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">ASIMOV: AI-Driven Application Modernization</h1>
                <p className="text-sm text-gray-600 mt-1">Autonomous System for Intelligent Migration and Optimization</p>
              </div>
            </div>
            <Link
              to="/solutions/app-modernization"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              View Deep Dive
              <ArrowRightIcon className="h-4 w-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Transform Legacy Systems with Autonomous AI Agents
              </h2>
              <p className="text-gray-600 mb-6">
                ASIMOV employs a sophisticated multi-agent system that autonomously analyzes, 
                plans, and executes application modernization initiatives. Our agents work 
                collaboratively to transform legacy systems into modern, cloud-native architectures 
                while ensuring zero business disruption.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">10M+ Lines of Code Analyzed</p>
                    <p className="text-sm text-gray-600">Autonomous agents process complex legacy codebases</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">70% Automation Rate</p>
                    <p className="text-sm text-gray-600">AI-driven transformation with minimal human intervention</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Zero-Downtime Migration</p>
                    <p className="text-sm text-gray-600">Intelligent orchestration ensures continuous operations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Agent Ecosystem</h3>
              <div className="space-y-4">
                {asimovCapabilities.core.map((capability, index) => (
                  <div key={index} className="bg-white rounded-lg p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{capability.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{capability.description}</p>
                      </div>
                      <span className="text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {capability.metrics}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Migration Approaches */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Migration Approaches</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationApproaches.map((approach, index) => {
              const Icon = approach.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <Icon className="h-10 w-10 text-blue-600 mb-4" />
                  <h3 className="font-semibold text-gray-900 mb-2">{approach.name}</h3>
                  <p className="text-sm text-gray-600 mb-4">{approach.description}</p>
                  <ul className="space-y-2">
                    {approach.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Case Studies */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <div className="space-y-4 mb-6">
            <div className="flex space-x-2">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCase(index)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCase === index
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {study.title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {caseStudies[activeCase].title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{caseStudies[activeCase].client}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Challenge</h4>
                  <p className="text-sm text-gray-600">{caseStudies[activeCase].challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Solution</h4>
                  <p className="text-sm text-gray-600">{caseStudies[activeCase].solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Agents Deployed</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudies[activeCase].agents.map((agent, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                        {agent}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Results Achieved</h4>
                <div className="space-y-3">
                  {caseStudies[activeCase].results.map((result, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Migration Process Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Agent-Orchestrated Migration Process</h2>
          <div className="relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-300"></div>
            <div className="space-y-8">
              {migrationProcess.map((phase, index) => (
                <div key={index} className="relative flex items-start">
                  <div className="absolute left-8 w-4 h-4 bg-blue-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                  <div className="ml-20 flex-1">
                    <div className="bg-gray-50 rounded-lg p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                          <p className="text-sm text-gray-600">{phase.duration}</p>
                        </div>
                        <BoltIcon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Active Agents</h4>
                          <div className="space-y-1">
                            {phase.agents.map((agent, idx) => (
                              <div key={idx} className="text-xs text-gray-600 flex items-center">
                                <CpuChipIcon className="h-3 w-3 mr-2 text-blue-500" />
                                {agent}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">Outputs</h4>
                          <div className="space-y-1">
                            {phase.outputs.map((output, idx) => (
                              <div key={idx} className="text-xs text-gray-600 flex items-center">
                                <CheckCircleIcon className="h-3 w-3 mr-2 text-green-500" />
                                {output}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technology Support */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Proven Technology Transformations</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {asimovCapabilities.technologies.map((tech, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 text-center">
                <p className="text-sm font-semibold text-gray-900 mb-2">{tech.name}</p>
                <p className="text-2xl font-bold text-blue-600">{tech.success}</p>
                <p className="text-xs text-gray-600">Success Rate</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppModernizationShowcase;