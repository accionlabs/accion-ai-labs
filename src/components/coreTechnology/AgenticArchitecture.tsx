import React from 'react';
import { 
  CpuChipIcon,
  ServerStackIcon,
  CloudArrowUpIcon,
  CircleStackIcon,
  CommandLineIcon,
  CogIcon,
  LockClosedIcon,
  ArrowsRightLeftIcon,
  BeakerIcon,
  ChartBarIcon,
  DocumentMagnifyingGlassIcon,
  BoltIcon,
  CubeTransparentIcon,
  SignalIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
  QueueListIcon
} from '@heroicons/react/24/outline';

const AgenticArchitecture: React.FC = () => {
  // Architecture layers for AI Agentic Systems
  const architectureLayers = [
    {
      id: 'agent-layer',
      name: 'Agent Orchestration Layer',
      color: 'purple',
      icon: RocketLaunchIcon,
      tagline: 'Multi-Agent Coordination & Governance',
      description: 'The brain of the agentic system - orchestrates, coordinates, and governs autonomous agents across the enterprise',
      importance: 'Critical for managing agent lifecycles, preventing conflicts, and ensuring goal alignment',
      components: [
        {
          title: 'Agent Registry & Discovery',
          description: 'Central catalog of all agents, their capabilities, APIs, and current status',
          icon: DocumentMagnifyingGlassIcon,
          features: ['Agent capability indexing', 'Dynamic agent discovery', 'Version management', 'Agent health monitoring'],
          technologies: ['Service Mesh', 'Agent Protocol Standards', 'GraphQL Federation', 'mDNS Discovery'],
          examples: ['Agent Yellow Pages', 'Capability Matching Engine', 'Agent DNS Service', 'Skills Marketplace']
        },
        {
          title: 'Multi-Agent Orchestrator',
          description: 'Coordinates complex workflows across multiple specialized agents with task decomposition',
          icon: CogIcon,
          features: ['Task planning & decomposition', 'Agent assignment optimization', 'Workflow choreography', 'Deadlock prevention'],
          technologies: ['LangGraph', 'AutoGen', 'CrewAI', 'Temporal Workflows'],
          examples: ['Mission Control Center', 'Agent Conductor', 'Task Distribution Engine', 'Workflow Manager']
        },
        {
          title: 'Agent Communication Bus',
          description: 'High-performance messaging infrastructure for inter-agent communication and collaboration',
          icon: ArrowsRightLeftIcon,
          features: ['Async message passing', 'Event streaming', 'Protocol translation', 'Message prioritization'],
          technologies: ['Apache Kafka', 'NATS', 'RabbitMQ', 'gRPC'],
          examples: ['Agent Message Broker', 'Event Hub', 'Communication Gateway', 'Protocol Bridge']
        },
        {
          title: 'Goal & Policy Engine',
          description: 'Ensures agents operate within boundaries and align with organizational objectives',
          icon: ShieldCheckIcon,
          features: ['Goal decomposition', 'Policy enforcement', 'Constraint satisfaction', 'Compliance validation'],
          technologies: ['Policy as Code', 'OPA (Open Policy Agent)', 'Constraint Solvers', 'Rule Engines'],
          examples: ['Goal Alignment System', 'Policy Governor', 'Constraint Manager', 'Compliance Enforcer']
        }
      ],
      metrics: [
        'Agent coordination efficiency',
        'Task completion rate',
        'Inter-agent communication latency',
        'Policy compliance score'
      ]
    },
    {
      id: 'cognitive-layer',
      name: 'Cognitive Processing Layer',
      color: 'blue',
      icon: CpuChipIcon,
      tagline: 'Intelligence, Reasoning & Learning Core',
      description: 'The cognitive engine that powers agent intelligence - handles reasoning, learning, and decision-making',
      importance: 'Enables agents to think, reason, learn, and make intelligent decisions autonomously',
      components: [
        {
          title: 'LLM Gateway & Router',
          description: 'Intelligent routing of requests to appropriate language models with fallback and load balancing',
          icon: GlobeAltIcon,
          features: ['Model selection logic', 'Load balancing', 'Fallback strategies', 'Cost optimization'],
          technologies: ['LiteLLM', 'LangChain', 'OpenRouter', 'Model Gateway APIs'],
          examples: ['LLM Traffic Manager', 'Model Router', 'Intelligence Gateway', 'AI Request Broker']
        },
        {
          title: 'Reasoning & Planning Engine',
          description: 'Advanced reasoning capabilities including chain-of-thought, tree-of-thought, and planning algorithms',
          icon: BoltIcon,
          features: ['Chain-of-thought reasoning', 'Multi-step planning', 'Hypothesis generation', 'Causal inference'],
          technologies: ['ReAct Framework', 'Tree of Thoughts', 'MCTS Planning', 'Causal AI'],
          examples: ['Reasoning Engine', 'Planning System', 'Thought Processor', 'Strategy Generator']
        },
        {
          title: 'Memory & Context Management',
          description: 'Persistent memory systems for maintaining context, learning from experience, and knowledge accumulation',
          icon: CircleStackIcon,
          features: ['Long-term memory', 'Working memory', 'Episodic recall', 'Context switching'],
          technologies: ['Vector Databases', 'Graph Databases', 'Redis', 'Memory Networks'],
          examples: ['Agent Memory Bank', 'Context Store', 'Experience Database', 'Knowledge Repository']
        },
        {
          title: 'Learning & Adaptation System',
          description: 'Continuous learning mechanisms that enable agents to improve from feedback and experience',
          icon: ChartBarIcon,
          features: ['Reinforcement learning', 'Few-shot learning', 'Transfer learning', 'Online learning'],
          technologies: ['RLHF', 'Fine-tuning Pipelines', 'Active Learning', 'Meta-Learning'],
          examples: ['Learning Engine', 'Adaptation System', 'Feedback Processor', 'Improvement Module']
        }
      ],
      metrics: [
        'Reasoning accuracy',
        'Planning success rate',
        'Memory retrieval precision',
        'Learning curve improvement'
      ]
    },
    {
      id: 'execution-layer',
      name: 'Execution & Integration Layer',
      color: 'green',
      icon: ServerStackIcon,
      tagline: 'Tools, Actions & System Integration',
      description: 'The hands of the agentic system - executes actions, integrates with tools, and interacts with external systems',
      importance: 'Bridges the gap between agent intelligence and real-world actions across enterprise systems',
      components: [
        {
          title: 'Tool Registry & Execution',
          description: 'Catalog and execution framework for tools, APIs, and functions that agents can use',
          icon: WrenchScrewdriverIcon,
          features: ['Tool discovery', 'Dynamic tool loading', 'Safe execution sandbox', 'Tool chaining'],
          technologies: ['Function Calling', 'Tool Protocols', 'API Gateways', 'Sandbox Environments'],
          examples: ['Tool Library', 'Action Executor', 'Function Registry', 'API Catalog']
        },
        {
          title: 'Enterprise Integration Hub',
          description: 'Connectors and adapters for seamless integration with enterprise systems and databases',
          icon: CubeTransparentIcon,
          features: ['System connectors', 'Data adapters', 'Protocol conversion', 'Transaction management'],
          technologies: ['Apache Camel', 'MuleSoft', 'Zapier APIs', 'Enterprise Service Bus'],
          examples: ['Integration Gateway', 'System Bridge', 'Enterprise Connector', 'Data Access Layer']
        },
        {
          title: 'Workflow Execution Engine',
          description: 'Executes complex multi-step workflows with error handling, retries, and state management',
          icon: QueueListIcon,
          features: ['State machines', 'Saga patterns', 'Compensation logic', 'Parallel execution'],
          technologies: ['Temporal', 'Apache Airflow', 'Step Functions', 'Camunda'],
          examples: ['Workflow Runner', 'Process Engine', 'Task Executor', 'State Manager']
        },
        {
          title: 'Monitoring & Observability',
          description: 'Real-time monitoring of agent actions, performance metrics, and system health',
          icon: SignalIcon,
          features: ['Action logging', 'Performance tracking', 'Anomaly detection', 'Audit trails'],
          technologies: ['OpenTelemetry', 'Prometheus', 'Grafana', 'ELK Stack'],
          examples: ['Agent Monitor', 'Observability Platform', 'Performance Tracker', 'Audit System']
        }
      ],
      metrics: [
        'Tool execution success rate',
        'Integration reliability',
        'Workflow completion time',
        'System availability'
      ]
    },
    {
      id: 'infrastructure-layer',
      name: 'Infrastructure & Platform Layer',
      color: 'orange',
      icon: CloudArrowUpIcon,
      tagline: 'Scalable Foundation & DevOps',
      description: 'The foundation that ensures agents run reliably, scale efficiently, and deploy seamlessly',
      importance: 'Provides the robust, scalable infrastructure needed for enterprise-grade agent deployments',
      components: [
        {
          title: 'Agent Runtime Environment',
          description: 'Containerized runtime for deploying and managing agent instances at scale',
          icon: CubeTransparentIcon,
          features: ['Container orchestration', 'Auto-scaling', 'Resource allocation', 'Isolation'],
          technologies: ['Kubernetes', 'Docker', 'Ray', 'Serverless Platforms'],
          examples: ['Agent Containers', 'Runtime Platform', 'Execution Environment', 'Agent Pods']
        },
        {
          title: 'Data & Storage Platform',
          description: 'Distributed storage for agent data, models, and persistent state',
          icon: CircleStackIcon,
          features: ['Distributed storage', 'Model versioning', 'State persistence', 'Backup & recovery'],
          technologies: ['S3/Object Storage', 'PostgreSQL', 'MongoDB', 'MinIO'],
          examples: ['Data Lake', 'Model Store', 'State Database', 'Knowledge Base']
        },
        {
          title: 'Security & Governance',
          description: 'Comprehensive security framework for agent authentication, authorization, and compliance',
          icon: LockClosedIcon,
          features: ['Agent authentication', 'Access control', 'Encryption', 'Compliance monitoring'],
          technologies: ['OAuth/OIDC', 'Vault', 'RBAC', 'Zero Trust Architecture'],
          examples: ['Security Gateway', 'Auth Service', 'Compliance Engine', 'Trust Framework']
        },
        {
          title: 'MLOps & AgentOps Pipeline',
          description: 'CI/CD pipelines for agent development, testing, and deployment',
          icon: CommandLineIcon,
          features: ['Agent CI/CD', 'A/B testing', 'Gradual rollouts', 'Rollback capabilities'],
          technologies: ['MLflow', 'Kubeflow', 'GitHub Actions', 'ArgoCD'],
          examples: ['Agent Pipeline', 'Deployment System', 'Testing Framework', 'Release Manager']
        }
      ],
      metrics: [
        'Infrastructure utilization',
        'Deployment frequency',
        'Security compliance rate',
        'Platform reliability (uptime)'
      ]
    }
  ];

  // Helper function to get color classes
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; lightBg: string; hoverBg: string } } = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
        lightBg: 'bg-blue-50',
        hoverBg: 'hover:bg-blue-50'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-300',
        lightBg: 'bg-purple-50',
        hoverBg: 'hover:bg-purple-50'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
        lightBg: 'bg-green-50',
        hoverBg: 'hover:bg-green-50'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-700',
        border: 'border-orange-300',
        lightBg: 'bg-orange-50',
        hoverBg: 'hover:bg-orange-50'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4">
            Enterprise Agent Architecture
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Agentic AI Architecture Blueprint</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            A comprehensive architectural framework for building, deploying, and managing autonomous AI agents at enterprise scale. 
            Each layer provides critical capabilities that enable agents to think, act, and learn independently while maintaining 
            governance and reliability.
          </p>
        </div>

        {/* Architecture Overview Diagram */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Layered Agent Architecture</h2>
          <div className="bg-gradient-to-b from-purple-50 via-blue-50 via-green-50 to-orange-50 rounded-lg p-6">
            <div className="space-y-3">
              {/* Visual representation of layers */}
              <div className="bg-purple-100 border-2 border-purple-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-purple-800">🎯 Agent Orchestration Layer</span>
                <p className="text-xs text-purple-600 mt-1">Multi-Agent Coordination & Governance</p>
              </div>
              <div className="bg-blue-100 border-2 border-blue-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-blue-800">🧠 Cognitive Processing Layer</span>
                <p className="text-xs text-blue-600 mt-1">Intelligence, Reasoning & Learning</p>
              </div>
              <div className="bg-green-100 border-2 border-green-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-green-800">⚡ Execution & Integration Layer</span>
                <p className="text-xs text-green-600 mt-1">Tools, Actions & System Integration</p>
              </div>
              <div className="bg-orange-100 border-2 border-orange-300 rounded-lg p-4 text-center">
                <span className="font-semibold text-orange-800">🏗️ Infrastructure & Platform Layer</span>
                <p className="text-xs text-orange-600 mt-1">Scalable Foundation & DevOps</p>
              </div>
            </div>
          </div>
          
          {/* Key Architecture Principles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center">
              <div className="text-2xl mb-2">🔄</div>
              <h4 className="text-sm font-semibold text-gray-900">Loosely Coupled</h4>
              <p className="text-xs text-gray-600 mt-1">
                Agents operate independently with well-defined interfaces
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📈</div>
              <h4 className="text-sm font-semibold text-gray-900">Horizontally Scalable</h4>
              <p className="text-xs text-gray-600 mt-1">
                Add more agents as needed without architectural changes
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🛡️</div>
              <h4 className="text-sm font-semibold text-gray-900">Secure by Design</h4>
              <p className="text-xs text-gray-600 mt-1">
                Zero-trust principles with agent authentication & authorization
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🎭</div>
              <h4 className="text-sm font-semibold text-gray-900">Event-Driven</h4>
              <p className="text-xs text-gray-600 mt-1">
                Asynchronous communication enables real-time responsiveness
              </p>
            </div>
          </div>
        </div>

        {/* Critical Capabilities Banner */}
        <div className="bg-gradient-to-r from-purple-600 to-orange-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-3">Why This Architecture Enables True Agent Autonomy</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">🤖 Agent-First Design</h4>
              <p className="text-sm text-purple-100">
                Built specifically for autonomous agents, not retrofitted from traditional architectures.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔮 Cognitive Capabilities</h4>
              <p className="text-sm text-purple-100">
                Native support for reasoning, planning, learning, and memory at the architectural level.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🌐 Enterprise Ready</h4>
              <p className="text-sm text-purple-100">
                Production-grade with security, governance, and compliance built into every layer.
              </p>
            </div>
          </div>
        </div>

        {/* Architecture Layers - Detailed Sections */}
        <div className="space-y-8">
          {architectureLayers.map((layer, layerIndex) => {
            const colors = getColorClasses(layer.color);
            const LayerIcon = layer.icon;
            
            return (
              <div key={layer.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Layer Header */}
                <div className={`${colors.bg} border-b-4 border-${layer.color}-400 p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className={`p-3 bg-white rounded-lg mr-4 shadow-sm`}>
                        <LayerIcon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">{layer.name}</h2>
                          <span className={`ml-3 px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                            Layer {layerIndex + 1}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-700">🏗️ {layer.tagline}</p>
                        <p className="text-sm text-gray-600 mt-2">{layer.description}</p>
                        <p className="text-sm font-medium text-gray-700 mt-3">
                          <span className="font-semibold">Why Critical:</span> {layer.importance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Components */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Core Components</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {layer.components.map((component, index) => {
                        const ComponentIcon = component.icon;
                        return (
                          <div 
                            key={index}
                            className={`border border-gray-200 rounded-lg p-4 hover:border-${layer.color}-300 ${colors.hoverBg} transition-all`}
                          >
                            <div className="flex items-start mb-3">
                              <div className={`p-2 ${colors.bg} rounded-lg mr-3 flex-shrink-0`}>
                                <ComponentIcon className={`h-5 w-5 ${colors.text}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{component.title}</h4>
                                <p className="text-sm text-gray-600">{component.description}</p>
                              </div>
                            </div>
                            
                            {/* Features */}
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-700 mb-2">Key Features:</p>
                              <div className="flex flex-wrap gap-2">
                                {component.features.map((feature, idx) => (
                                  <span 
                                    key={idx}
                                    className="inline-block px-2 py-1 bg-gray-50 text-xs text-gray-600 rounded"
                                  >
                                    {feature}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {/* Technologies */}
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-700 mb-2">Technologies:</p>
                              <div className="flex flex-wrap gap-2">
                                {component.technologies.map((tech, idx) => (
                                  <span 
                                    key={idx}
                                    className={`inline-block px-2 py-1 ${colors.lightBg} text-xs ${colors.text} rounded`}
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                            
                            {/* Implementation Examples */}
                            <div>
                              <p className="text-xs font-semibold text-gray-700 mb-2">Implementation Examples:</p>
                              <div className="flex flex-wrap gap-2">
                                {component.examples.map((example, idx) => (
                                  <span 
                                    key={idx}
                                    className="inline-block px-2 py-1 bg-green-50 text-xs text-green-700 rounded"
                                  >
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Layer Success Metrics</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {layer.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`inline-block w-3 h-3 ${colors.bg} rounded-full mb-2`} />
                          <p className="text-xs text-gray-600">{metric}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integration Patterns */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Integration Patterns</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🔗</div>
              <h4 className="font-semibold text-gray-900 mb-2">Synchronous Request-Response</h4>
              <p className="text-sm text-gray-600 mb-2">
                Direct agent invocation for immediate responses with timeout handling.
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Use for:</span> Real-time queries, UI interactions, critical decisions
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">📨</div>
              <h4 className="font-semibold text-gray-900 mb-2">Asynchronous Message Queue</h4>
              <p className="text-sm text-gray-600 mb-2">
                Queue-based communication for decoupled, scalable agent interactions.
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Use for:</span> Batch processing, long-running tasks, system integration
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="text-2xl mb-2">🌊</div>
              <h4 className="font-semibold text-gray-900 mb-2">Event-Driven Streaming</h4>
              <p className="text-sm text-gray-600 mb-2">
                Real-time event streams for reactive agent behaviors and complex workflows.
              </p>
              <p className="text-xs text-gray-500">
                <span className="font-semibold">Use for:</span> Real-time analytics, monitoring, multi-agent coordination
              </p>
            </div>
          </div>
        </div>

        {/* Deployment Models */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Deployment Models</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Centralized Agent Hub</h4>
                <p className="text-sm text-gray-600">All agents run in a central cluster with shared resources and governance. Best for starting out and maintaining control.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 text-purple-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Distributed Agent Network</h4>
                <p className="text-sm text-gray-600">Agents deployed across multiple regions/clouds for resilience and performance. Ideal for global operations.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Edge Agent Deployment</h4>
                <p className="text-sm text-gray-600">Lightweight agents at the edge for low-latency, local decision-making. Perfect for IoT and real-time scenarios.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Hybrid Multi-Cloud</h4>
                <p className="text-sm text-gray-600">Agents span on-premise, private cloud, and public cloud for maximum flexibility and compliance.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Considerations */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">⚖️</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Governance & Control</h4>
            <p className="text-xs text-gray-600">
              Built-in governance ensures agents operate within defined boundaries while maintaining 
              autonomy for decision-making and learning.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">🔐</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Security & Trust</h4>
            <p className="text-xs text-gray-600">
              Zero-trust architecture with agent authentication, encrypted communication, and 
              comprehensive audit trails for compliance.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">📊</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Observability & Control</h4>
            <p className="text-xs text-gray-600">
              Complete visibility into agent behavior, performance, and decisions with real-time 
              monitoring and intervention capabilities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticArchitecture;