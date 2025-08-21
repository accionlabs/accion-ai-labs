import React, { useState } from 'react';
import { 
  CodeBracketIcon,
  ArrowPathIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  CubeTransparentIcon,
  ServerStackIcon,
  BoltIcon,
  CheckCircleIcon,
  DocumentTextIcon,
  BeakerIcon,
  CommandLineIcon,
  ArrowRightIcon,
  CpuChipIcon
} from '@heroicons/react/24/outline';

const MigrationPatterns: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState('strangler-fig');

  const migrationPatterns = {
    'strangler-fig': {
      name: 'Strangler Fig Pattern',
      icon: ArrowPathIcon,
      description: 'Gradually replace legacy system components with modern services',
      bestFor: 'Large monolithic applications with complex business logic',
      approach: [
        'Identify module boundaries in legacy system',
        'Create new service alongside legacy',
        'Route traffic to new service incrementally',
        'Decommission legacy component when ready'
      ],
      benefits: [
        'Zero downtime migration',
        'Incremental risk management',
        'Rollback capability at each step',
        'Continuous value delivery'
      ],
      agents: [
        { name: 'Boundary Identifier Agent', role: 'Discovers natural service boundaries' },
        { name: 'Traffic Router Agent', role: 'Manages gradual traffic migration' },
        { name: 'Validation Agent', role: 'Ensures functional parity' },
        { name: 'Decommission Agent', role: 'Safely removes legacy components' }
      ],
      timeline: '6-18 months',
      riskLevel: 'Low',
      complexity: 'Medium'
    },
    'big-bang': {
      name: 'Big Bang Migration',
      icon: BoltIcon,
      description: 'Complete system replacement in a single coordinated effort',
      bestFor: 'Small to medium systems with well-defined boundaries',
      approach: [
        'Complete analysis and planning phase',
        'Build entire new system in parallel',
        'Comprehensive testing and validation',
        'Single cutover to new system'
      ],
      benefits: [
        'Faster overall migration',
        'Clean architecture from start',
        'No hybrid state management',
        'Lower long-term complexity'
      ],
      agents: [
        { name: 'Full System Analyzer', role: 'Complete system understanding' },
        { name: 'Parallel Builder Agent', role: 'Constructs new system' },
        { name: 'Cutover Orchestrator', role: 'Manages transition' },
        { name: 'Rollback Manager', role: 'Handles failure scenarios' }
      ],
      timeline: '3-6 months',
      riskLevel: 'High',
      complexity: 'Low'
    },
    'parallel-run': {
      name: 'Parallel Run Pattern',
      icon: ServerStackIcon,
      description: 'Run old and new systems simultaneously for validation',
      bestFor: 'Mission-critical systems requiring zero data loss',
      approach: [
        'Deploy new system alongside legacy',
        'Duplicate all transactions to both systems',
        'Compare outputs for validation',
        'Switch primary system after confidence'
      ],
      benefits: [
        '100% validation before switch',
        'No data loss risk',
        'Performance comparison',
        'Gradual team training'
      ],
      agents: [
        { name: 'Transaction Duplicator', role: 'Copies all operations' },
        { name: 'Output Comparator', role: 'Validates results match' },
        { name: 'Discrepancy Resolver', role: 'Handles mismatches' },
        { name: 'Switchover Agent', role: 'Manages final transition' }
      ],
      timeline: '4-8 months',
      riskLevel: 'Very Low',
      complexity: 'High'
    },
    'database-first': {
      name: 'Database-First Migration',
      icon: CircleStackIcon,
      description: 'Modernize data layer before application transformation',
      bestFor: 'Data-centric applications with complex schemas',
      approach: [
        'Migrate to modern database platform',
        'Implement data abstraction layer',
        'Gradually modernize application logic',
        'Optimize for new database capabilities'
      ],
      benefits: [
        'Immediate performance gains',
        'Simplified application migration',
        'Better data governance',
        'Cloud-ready data platform'
      ],
      agents: [
        { name: 'Schema Migration Agent', role: 'Transforms database schema' },
        { name: 'Data Sync Agent', role: 'Maintains data consistency' },
        { name: 'Query Optimizer', role: 'Rewrites and optimizes queries' },
        { name: 'Performance Monitor', role: 'Tracks migration impact' }
      ],
      timeline: '3-9 months',
      riskLevel: 'Medium',
      complexity: 'Medium'
    },
    'hybrid-bridge': {
      name: 'Hybrid Bridge Pattern',
      icon: CubeTransparentIcon,
      description: 'Create integration layer between old and new systems',
      bestFor: 'Systems with extensive third-party integrations',
      approach: [
        'Build API bridge layer',
        'Migrate components behind bridge',
        'Maintain backward compatibility',
        'Gradually deprecate legacy APIs'
      ],
      benefits: [
        'No integration disruption',
        'Flexible migration schedule',
        'API modernization',
        'Partner system compatibility'
      ],
      agents: [
        { name: 'API Bridge Builder', role: 'Creates compatibility layer' },
        { name: 'Protocol Translator', role: 'Handles format conversions' },
        { name: 'Integration Monitor', role: 'Tracks API usage' },
        { name: 'Deprecation Manager', role: 'Manages API lifecycle' }
      ],
      timeline: '6-12 months',
      riskLevel: 'Low',
      complexity: 'High'
    }
  };

  const patternComparison = [
    {
      factor: 'Migration Speed',
      patterns: {
        'strangler-fig': 3,
        'big-bang': 5,
        'parallel-run': 2,
        'database-first': 4,
        'hybrid-bridge': 3
      }
    },
    {
      factor: 'Risk Level',
      patterns: {
        'strangler-fig': 5,
        'big-bang': 2,
        'parallel-run': 5,
        'database-first': 3,
        'hybrid-bridge': 4
      }
    },
    {
      factor: 'Cost Efficiency',
      patterns: {
        'strangler-fig': 4,
        'big-bang': 3,
        'parallel-run': 2,
        'database-first': 4,
        'hybrid-bridge': 3
      }
    },
    {
      factor: 'Complexity',
      patterns: {
        'strangler-fig': 3,
        'big-bang': 5,
        'parallel-run': 2,
        'database-first': 3,
        'hybrid-bridge': 2
      }
    }
  ];

  const implementationSteps = [
    {
      step: 1,
      title: 'Pattern Selection',
      description: 'AI agents analyze system and recommend optimal pattern',
      duration: '1 week'
    },
    {
      step: 2,
      title: 'Architecture Design',
      description: 'Design target architecture based on selected pattern',
      duration: '2-3 weeks'
    },
    {
      step: 3,
      title: 'Agent Configuration',
      description: 'Configure and train specialized migration agents',
      duration: '1-2 weeks'
    },
    {
      step: 4,
      title: 'Pilot Migration',
      description: 'Execute pattern on pilot component for validation',
      duration: '2-4 weeks'
    },
    {
      step: 5,
      title: 'Full Execution',
      description: 'Roll out pattern across entire system',
      duration: '3-12 months'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <CodeBracketIcon className="h-8 w-8 text-purple-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Migration Patterns</h1>
              <p className="text-sm text-gray-600 mt-1">Proven patterns for successful legacy modernization</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Pattern Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Select Migration Pattern</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
            {Object.entries(migrationPatterns).map(([key, pattern]) => {
              const Icon = pattern.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPattern(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedPattern === key
                      ? 'border-purple-600 bg-purple-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${
                    selectedPattern === key ? 'text-purple-600' : 'text-gray-600'
                  }`} />
                  <p className={`text-xs font-medium ${
                    selectedPattern === key ? 'text-purple-900' : 'text-gray-700'
                  }`}>
                    {pattern.name}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Pattern Details */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].name}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].description}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Best For:</p>
                  <p className="text-sm text-gray-600">
                    {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].bestFor}
                  </p>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Migration Approach:</p>
                  <ol className="space-y-2">
                    {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].approach.map((step, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 flex-shrink-0">
                          {idx + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <p className="text-xs text-gray-600">Timeline</p>
                    <p className="text-sm font-bold text-purple-600">
                      {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].timeline}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600">Risk Level</p>
                    <p className={`text-sm font-bold ${
                      migrationPatterns[selectedPattern as keyof typeof migrationPatterns].riskLevel === 'Low' ? 'text-green-600' :
                      migrationPatterns[selectedPattern as keyof typeof migrationPatterns].riskLevel === 'Medium' ? 'text-yellow-600' :
                      migrationPatterns[selectedPattern as keyof typeof migrationPatterns].riskLevel === 'Very Low' ? 'text-green-500' :
                      'text-red-600'
                    }`}>
                      {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].riskLevel}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600">Complexity</p>
                    <p className="text-sm font-bold text-indigo-600">
                      {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].complexity}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Key Benefits:</p>
                  <ul className="space-y-2">
                    {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].benefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Specialized Agents:</p>
                  <div className="space-y-2">
                    {migrationPatterns[selectedPattern as keyof typeof migrationPatterns].agents.map((agent, idx) => (
                      <div key={idx} className="bg-white rounded-lg p-3">
                        <div className="flex items-start">
                          <CpuChipIcon className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-gray-900">{agent.name}</p>
                            <p className="text-xs text-gray-600">{agent.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pattern Comparison */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pattern Comparison Matrix</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Factor</th>
                  {Object.keys(migrationPatterns).map((key) => (
                    <th key={key} className="text-center py-3 px-4 text-sm font-semibold text-gray-700">
                      {migrationPatterns[key as keyof typeof migrationPatterns].name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {patternComparison.map((comparison, idx) => (
                  <tr key={idx} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-700">{comparison.factor}</td>
                    {Object.entries(comparison.patterns).map(([pattern, score]) => (
                      <td key={pattern} className="py-3 px-4 text-center">
                        <div className="flex justify-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-8 rounded ${
                                i < score ? 'bg-purple-600' : 'bg-gray-200'
                              }`}
                            />
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Implementation Steps */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pattern Implementation Process</h2>
          <div className="relative">
            <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid grid-cols-5 gap-4">
              {implementationSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-purple-600 rounded-full ring-4 ring-white"></div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-4">
                    <div className="text-center mb-2">
                      <span className="text-xs font-semibold text-purple-600">Step {step.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm mb-2">{step.title}</h3>
                    <p className="text-xs text-gray-600 mb-2">{step.description}</p>
                    <p className="text-xs text-purple-600 font-medium">{step.duration}</p>
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

export default MigrationPatterns;