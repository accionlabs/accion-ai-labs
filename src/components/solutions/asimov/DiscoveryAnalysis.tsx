import React, { useState } from 'react';
import { 
  DocumentMagnifyingGlassIcon,
  CpuChipIcon,
  CircleStackIcon,
  CodeBracketIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ServerIcon,
  BoltIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowRightIcon,
  CubeTransparentIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const DiscoveryAnalysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState('codebase');

  const discoveryAgents = [
    {
      name: 'Code Analysis Agent',
      icon: CodeBracketIcon,
      description: 'Deep semantic analysis of legacy code using LLMs',
      capabilities: [
        'Syntax parsing across 30+ languages',
        'Business logic extraction',
        'Code quality assessment',
        'Technical debt quantification'
      ],
      metrics: {
        'Lines Analyzed': '10M+',
        'Accuracy': '95%',
        'Speed': '100K LOC/hour'
      }
    },
    {
      name: 'Dependency Mapper',
      icon: CubeTransparentIcon,
      description: 'Automatic discovery of system dependencies and integrations',
      capabilities: [
        'Database relationship mapping',
        'API dependency tracking',
        'Library version analysis',
        'External system identification'
      ],
      metrics: {
        'Dependencies Found': '5000+',
        'Depth': '10 levels',
        'Coverage': '99%'
      }
    },
    {
      name: 'Documentation Generator',
      icon: DocumentTextIcon,
      description: 'AI-powered documentation creation from code analysis',
      capabilities: [
        'Automatic API documentation',
        'Business process extraction',
        'Data flow diagrams',
        'System architecture docs'
      ],
      metrics: {
        'Pages Generated': '1000+',
        'Completeness': '90%',
        'Time Saved': '80%'
      }
    },
    {
      name: 'Risk Assessment Bot',
      icon: ExclamationTriangleIcon,
      description: 'Identifies migration risks and complexity factors',
      capabilities: [
        'Security vulnerability detection',
        'Performance bottleneck analysis',
        'Compliance gap identification',
        'Migration complexity scoring'
      ],
      metrics: {
        'Risks Identified': 'Avg 150',
        'False Positives': '<5%',
        'Priority Accuracy': '92%'
      }
    }
  ];

  const analysisOutputs = {
    codebase: {
      title: 'Codebase Analysis',
      icon: CodeBracketIcon,
      sections: [
        {
          name: 'Language Distribution',
          data: [
            { language: 'COBOL', lines: '2.5M', percentage: 45 },
            { language: 'Java', lines: '1.8M', percentage: 32 },
            { language: 'PL/SQL', lines: '800K', percentage: 15 },
            { language: 'Shell Scripts', lines: '450K', percentage: 8 }
          ]
        },
        {
          name: 'Code Quality Metrics',
          data: [
            { metric: 'Cyclomatic Complexity', value: 'High (>20)', status: 'warning' },
            { metric: 'Code Duplication', value: '23%', status: 'warning' },
            { metric: 'Test Coverage', value: '35%', status: 'error' },
            { metric: 'Documentation', value: '60%', status: 'success' }
          ]
        }
      ]
    },
    dependencies: {
      title: 'Dependency Map',
      icon: CubeTransparentIcon,
      sections: [
        {
          name: 'System Dependencies',
          data: [
            { type: 'Databases', count: 12, critical: true },
            { type: 'External APIs', count: 45, critical: true },
            { type: 'File Systems', count: 8, critical: false },
            { type: 'Message Queues', count: 6, critical: true }
          ]
        },
        {
          name: 'Library Analysis',
          data: [
            { library: 'Spring Framework', version: '3.2', status: 'outdated' },
            { library: 'Apache Commons', version: '2.4', status: 'outdated' },
            { library: 'Log4j', version: '1.2', status: 'vulnerable' },
            { library: 'JUnit', version: '4.12', status: 'current' }
          ]
        }
      ]
    },
    risks: {
      title: 'Risk Assessment',
      icon: ExclamationTriangleIcon,
      sections: [
        {
          name: 'Critical Risks',
          data: [
            { risk: 'Data Migration Complexity', impact: 'High', probability: 'Medium', mitigation: 'Phased migration approach' },
            { risk: 'Business Logic Gaps', impact: 'High', probability: 'Low', mitigation: 'Comprehensive testing suite' },
            { risk: 'Performance Degradation', impact: 'Medium', probability: 'Medium', mitigation: 'Performance benchmarking' },
            { risk: 'Integration Failures', impact: 'High', probability: 'Low', mitigation: 'API compatibility layer' }
          ]
        },
        {
          name: 'Complexity Factors',
          data: [
            { factor: 'Database Procedures', complexity: 85, description: '2000+ stored procedures' },
            { factor: 'Business Rules', complexity: 75, description: '500+ complex rules' },
            { factor: 'Integrations', complexity: 70, description: '45 external systems' },
            { factor: 'Data Volume', complexity: 60, description: '100TB+ data' }
          ]
        }
      ]
    }
  };

  const discoveryProcess = [
    {
      step: 1,
      name: 'Initial Scan',
      duration: '2-3 days',
      description: 'Automated scanning of entire codebase and infrastructure',
      agents: ['Code Scanner', 'Infrastructure Mapper']
    },
    {
      step: 2,
      name: 'Deep Analysis',
      duration: '1 week',
      description: 'LLM-powered analysis of business logic and patterns',
      agents: ['Code Analysis Agent', 'Pattern Recognition Bot']
    },
    {
      step: 3,
      name: 'Dependency Mapping',
      duration: '3-4 days',
      description: 'Complete mapping of all system dependencies',
      agents: ['Dependency Mapper', 'Integration Analyzer']
    },
    {
      step: 4,
      name: 'Risk Assessment',
      duration: '2-3 days',
      description: 'Comprehensive risk analysis and mitigation planning',
      agents: ['Risk Assessment Bot', 'Compliance Checker']
    },
    {
      step: 5,
      name: 'Report Generation',
      duration: '1-2 days',
      description: 'Automated generation of analysis reports and recommendations',
      agents: ['Documentation Generator', 'Report Builder']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <DocumentMagnifyingGlassIcon className="h-8 w-8 text-blue-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Discovery & Analysis Engine</h1>
              <p className="text-sm text-gray-600 mt-1">AI-powered deep analysis of legacy systems</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Discovery Agents */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Discovery Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {discoveryAgents.map((agent, index) => {
              const Icon = agent.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <Icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-gray-700 mb-2">Capabilities:</p>
                    <ul className="space-y-1">
                      {agent.capabilities.map((cap, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <CheckCircleIcon className="h-3 w-3 text-green-500 mr-1 flex-shrink-0 mt-0.5" />
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="grid grid-cols-3 gap-2">
                      {Object.entries(agent.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-sm font-bold text-blue-600">{value}</p>
                          <p className="text-xs text-gray-600">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Analysis Outputs */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Analysis Results Dashboard</h2>
          
          <div className="mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {Object.keys(analysisOutputs).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {analysisOutputs[key as keyof typeof analysisOutputs].title}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-lg p-6">
            {analysisOutputs[activeTab as keyof typeof analysisOutputs].sections.map((section, idx) => (
              <div key={idx} className="mb-6 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{section.name}</h3>
                
                {activeTab === 'codebase' && idx === 0 && (
                  <div className="space-y-3">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{item.language}</span>
                          <span className="text-sm text-gray-600">{item.lines} lines</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'codebase' && idx === 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-gray-700">{item.metric}</span>
                          <span className={`text-sm font-semibold ${
                            item.status === 'error' ? 'text-red-600' :
                            item.status === 'warning' ? 'text-yellow-600' :
                            'text-green-600'
                          }`}>
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'dependencies' && (
                  <div className="space-y-3">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4 flex items-center justify-between">
                        <div>
                          <span className="text-sm font-medium text-gray-700">
                            {item.type || item.library}
                          </span>
                          {item.version && (
                            <span className="text-xs text-gray-500 ml-2">v{item.version}</span>
                          )}
                        </div>
                        <div className="flex items-center">
                          {item.count && (
                            <span className="text-sm font-semibold text-blue-600 mr-2">{item.count}</span>
                          )}
                          {item.critical !== undefined && item.critical && (
                            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">Critical</span>
                          )}
                          {item.status && (
                            <span className={`text-xs px-2 py-1 rounded ${
                              item.status === 'outdated' ? 'bg-yellow-100 text-yellow-700' :
                              item.status === 'vulnerable' ? 'bg-red-100 text-red-700' :
                              'bg-green-100 text-green-700'
                            }`}>
                              {item.status}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {activeTab === 'risks' && (
                  <div className="space-y-3">
                    {(section.data as any[]).map((item, i) => (
                      <div key={i} className="bg-white rounded-lg p-4">
                        {item.risk ? (
                          <>
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-medium text-gray-900">{item.risk}</h4>
                              <div className="flex space-x-2">
                                <span className={`text-xs px-2 py-1 rounded ${
                                  item.impact === 'High' ? 'bg-red-100 text-red-700' :
                                  item.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  Impact: {item.impact}
                                </span>
                                <span className={`text-xs px-2 py-1 rounded ${
                                  item.probability === 'High' ? 'bg-red-100 text-red-700' :
                                  item.probability === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                                  'bg-green-100 text-green-700'
                                }`}>
                                  Probability: {item.probability}
                                </span>
                              </div>
                            </div>
                            <p className="text-xs text-gray-600">
                              <span className="font-semibold">Mitigation:</span> {item.mitigation}
                            </p>
                          </>
                        ) : (
                          <>
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-medium text-gray-700">{item.factor}</span>
                              <span className="text-sm font-semibold text-blue-600">{item.complexity}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                              <div 
                                className={`h-2 rounded-full ${
                                  item.complexity > 75 ? 'bg-red-500' :
                                  item.complexity > 50 ? 'bg-yellow-500' :
                                  'bg-green-500'
                                }`}
                                style={{ width: `${item.complexity}%` }}
                              ></div>
                            </div>
                            <p className="text-xs text-gray-600">{item.description}</p>
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Discovery Process Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Automated Discovery Process</h2>
          <div className="relative">
            <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid grid-cols-5 gap-4">
              {discoveryProcess.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-white"></div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-blue-600">Step {step.step}</span>
                      <ClockIcon className="h-4 w-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">{step.name}</h3>
                    <p className="text-xs text-gray-600 mb-2">{step.duration}</p>
                    <p className="text-xs text-gray-600 mb-3">{step.description}</p>
                    <div className="border-t pt-2">
                      <p className="text-xs font-semibold text-gray-700 mb-1">Active Agents:</p>
                      {step.agents.map((agent, idx) => (
                        <p key={idx} className="text-xs text-gray-600">• {agent}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryAnalysis;