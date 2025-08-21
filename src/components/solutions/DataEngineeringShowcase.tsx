import React, { useState } from 'react';
import { 
  CircleStackIcon,
  ChartBarIcon,
  BoltIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  SparklesIcon,
  ArrowPathIcon,
  CubeTransparentIcon,
  BeakerIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const DataEngineeringShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState('ingestion');

  const dataAgents = {
    ingestion: {
      title: 'Intelligent Data Ingestion',
      agents: [
        {
          name: 'Schema Discovery Agent',
          role: 'Automatically detects and adapts to changing data schemas',
          capabilities: ['Dynamic schema inference', 'Anomaly detection', 'Format optimization'],
          performance: '10TB/hour processing'
        },
        {
          name: 'Pipeline Orchestrator',
          role: 'Manages complex ETL/ELT workflows autonomously',
          capabilities: ['Dependency resolution', 'Failure recovery', 'Load balancing'],
          performance: '99.99% uptime'
        },
        {
          name: 'Quality Guardian',
          role: 'Ensures data quality through continuous validation',
          capabilities: ['Real-time validation', 'Drift detection', 'Auto-correction'],
          performance: '<0.01% error rate'
        }
      ]
    },
    processing: {
      title: 'Autonomous Processing',
      agents: [
        {
          name: 'Transformation Agent',
          role: 'Applies complex business rules and transformations',
          capabilities: ['ML-based transformation', 'Pattern recognition', 'Optimization'],
          performance: '5x faster than traditional'
        },
        {
          name: 'Aggregation Optimizer',
          role: 'Intelligently optimizes data aggregations and summaries',
          capabilities: ['Query optimization', 'Caching strategies', 'Parallel processing'],
          performance: '80% cost reduction'
        },
        {
          name: 'Stream Processor',
          role: 'Handles real-time data streams with low latency',
          capabilities: ['Event processing', 'Window operations', 'State management'],
          performance: '<100ms latency'
        }
      ]
    },
    governance: {
      title: 'Data Governance & Security',
      agents: [
        {
          name: 'Compliance Monitor',
          role: 'Ensures regulatory compliance across all data operations',
          capabilities: ['GDPR/CCPA compliance', 'Audit logging', 'Policy enforcement'],
          performance: '100% compliance rate'
        },
        {
          name: 'Lineage Tracker',
          role: 'Maintains complete data lineage and impact analysis',
          capabilities: ['End-to-end tracking', 'Impact prediction', 'Version control'],
          performance: 'Full transparency'
        },
        {
          name: 'Security Sentinel',
          role: 'Protects sensitive data through intelligent masking',
          capabilities: ['PII detection', 'Dynamic masking', 'Access control'],
          performance: 'Zero breaches'
        }
      ]
    }
  };

  const architectureLayers = [
    {
      name: 'Data Sources',
      components: ['Databases', 'APIs', 'IoT Devices', 'Files', 'Streams'],
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Ingestion Layer',
      components: ['Agent Collectors', 'Schema Validators', 'Format Converters'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Processing Engine',
      components: ['Spark Agents', 'Flink Processors', 'Kafka Streams'],
      color: 'from-purple-400 to-purple-600'
    },
    {
      name: 'Storage & Lake',
      components: ['Delta Lake', 'Iceberg Tables', 'Vector Stores'],
      color: 'from-indigo-400 to-indigo-600'
    },
    {
      name: 'Analytics & AI',
      components: ['ML Pipelines', 'BI Dashboards', 'RAG Systems'],
      color: 'from-pink-400 to-pink-600'
    }
  ];

  const useCases = [
    {
      title: 'Real-Time Analytics Platform',
      industry: 'E-Commerce',
      challenge: 'Process 100M+ events daily with sub-second analytics',
      solution: 'Multi-agent streaming architecture with intelligent caching',
      metrics: {
        'Event Processing': '150M/day',
        'Query Latency': '<50ms',
        'Cost Savings': '65%',
        'Data Accuracy': '99.99%'
      }
    },
    {
      title: 'Unified Data Lakehouse',
      industry: 'Financial Services',
      challenge: 'Consolidate 50+ data sources into unified platform',
      solution: 'Agent-orchestrated lakehouse with automated governance',
      metrics: {
        'Sources Integrated': '73',
        'Processing Time': '-85%',
        'Storage Optimization': '70%',
        'Compliance Score': '100%'
      }
    },
    {
      title: 'IoT Data Pipeline',
      industry: 'Manufacturing',
      challenge: 'Process sensor data from 10,000+ devices in real-time',
      solution: 'Edge-to-cloud agent pipeline with predictive maintenance',
      metrics: {
        'Devices Connected': '15,000',
        'Anomaly Detection': '<1s',
        'Downtime Reduction': '90%',
        'ROI': '450%'
      }
    }
  ];

  const implementationPhases = [
    {
      phase: 'Assessment',
      weeks: '2-3',
      activities: [
        'Data landscape analysis',
        'Architecture review',
        'Requirements gathering'
      ]
    },
    {
      phase: 'Design',
      weeks: '3-4',
      activities: [
        'Agent architecture design',
        'Pipeline blueprinting',
        'Security planning'
      ]
    },
    {
      phase: 'Build',
      weeks: '8-12',
      activities: [
        'Agent development',
        'Pipeline construction',
        'Testing & validation'
      ]
    },
    {
      phase: 'Deploy',
      weeks: '2-3',
      activities: [
        'Production rollout',
        'Monitoring setup',
        'Performance tuning'
      ]
    },
    {
      phase: 'Optimize',
      weeks: 'Ongoing',
      activities: [
        'Agent learning',
        'Cost optimization',
        'Scale management'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-indigo-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <CircleStackIcon className="h-8 w-8 text-indigo-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Enterprise Data Transformation Platform</h1>
                <p className="text-sm text-gray-600 mt-1">AI-Powered Data Engineering with Autonomous Agents</p>
              </div>
            </div>
            <Link
              to="/solutions/data-engineering"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
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
                Autonomous Data Engineering at Scale
              </h2>
              <p className="text-gray-600 mb-6">
                Our AI-powered data platform employs specialized agents that autonomously manage 
                the entire data lifecycle. From intelligent ingestion and real-time processing to 
                automated governance and optimization, our agents ensure your data infrastructure 
                runs at peak efficiency 24/7.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-indigo-600">10TB+</p>
                  <p className="text-sm text-gray-600">Hourly Processing</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-green-600">99.99%</p>
                  <p className="text-sm text-gray-600">Pipeline Uptime</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-purple-600">70%</p>
                  <p className="text-sm text-gray-600">Cost Reduction</p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4">
                  <p className="text-3xl font-bold text-blue-600">&lt;100ms</p>
                  <p className="text-sm text-gray-600">Query Latency</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
                  Schedule Demo
                </button>
                <button className="px-6 py-3 bg-white text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                  View Case Studies
                </button>
              </div>
            </div>
            
            {/* Architecture Visualization */}
            <div className="bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Agent-Driven Architecture</h3>
              <div className="space-y-3">
                {architectureLayers.map((layer, index) => (
                  <div key={index} className="relative">
                    <div className={`bg-gradient-to-r ${layer.color} text-white rounded-lg p-3`}>
                      <h4 className="font-semibold mb-1">{layer.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {layer.components.map((comp, idx) => (
                          <span key={idx} className="text-xs bg-white bg-opacity-20 px-2 py-1 rounded">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                    {index < architectureLayers.length - 1 && (
                      <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 z-10">
                        <ArrowPathIcon className="h-5 w-5 text-gray-400" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agent Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Specialized Data Agents</h2>
          <div className="mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {Object.keys(dataAgents).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    activeTab === key
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {dataAgents[key as keyof typeof dataAgents].title}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {dataAgents[activeTab as keyof typeof dataAgents].agents.map((agent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <CpuChipIcon className="h-8 w-8 text-indigo-600" />
                  <span className="text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                    {agent.performance}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{agent.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{agent.role}</p>
                <div className="space-y-2">
                  {agent.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {cap}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-4">
                  <h3 className="font-semibold mb-1">{useCase.title}</h3>
                  <p className="text-sm opacity-90">{useCase.industry}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Challenge</p>
                    <p className="text-sm text-gray-600">{useCase.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Solution</p>
                    <p className="text-sm text-gray-600">{useCase.solution}</p>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-3">Key Metrics</p>
                    <div className="grid grid-cols-2 gap-2">
                      {Object.entries(useCase.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <p className="text-lg font-bold text-indigo-600">{value}</p>
                          <p className="text-xs text-gray-600">{key}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Journey</h2>
          <div className="relative">
            <div className="absolute left-0 top-8 w-full h-0.5 bg-gray-200"></div>
            <div className="relative grid grid-cols-5 gap-4">
              {implementationPhases.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-2 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-white"></div>
                  <div className="mt-8 bg-gray-50 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{phase.phase}</h3>
                    <p className="text-xs text-indigo-600 font-semibold mb-3">{phase.weeks}</p>
                    <ul className="space-y-1">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="text-xs text-gray-600 flex items-start">
                          <span className="text-indigo-600 mr-1">•</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
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

export default DataEngineeringShowcase;