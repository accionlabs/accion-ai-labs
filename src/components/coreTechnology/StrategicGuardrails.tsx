import React, { useState } from 'react';
import { 
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  FunnelIcon,
  ArrowPathIcon,
  ChartBarIcon,
  UserGroupIcon,
  EyeIcon,
  CheckCircleIcon,
  CpuChipIcon,
  BeakerIcon,
  CommandLineIcon,
  SparklesIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';

const StrategicGuardrails: React.FC = () => {
  const [selectedRail, setSelectedRail] = useState<string>('orchestration');

  const guardrails = {
    orchestration: {
      name: 'Agent Orchestration Guardrails',
      icon: CpuChipIcon,
      color: 'blue',
      description: 'Control and monitor multi-agent system interactions',
      controls: [
        'Agent role boundaries enforcement',
        'Cross-agent communication protocols',
        'Task delegation validation',
        'Agent capability verification',
        'Circular dependency prevention'
      ],
      risks: ['Agent conflicts', 'Task duplication', 'Infinite loops', 'Resource exhaustion'],
      implementation: 'Policy-driven orchestration with LangGraph state machines'
    },
    reasoning: {
      name: 'Reasoning & Decision Rails',
      icon: SparklesIcon,
      color: 'purple',
      description: 'Validate agent reasoning chains and decision processes',
      controls: [
        'Chain-of-thought validation',
        'Reasoning step verification',
        'Logic consistency checks',
        'Decision tree auditing',
        'Hallucination detection'
      ],
      risks: ['Invalid reasoning', 'Logic errors', 'False conclusions', 'Biased decisions'],
      implementation: 'ReAct pattern with structured reasoning validation'
    },
    memory: {
      name: 'Agent Memory Governance',
      icon: BeakerIcon,
      color: 'green',
      description: 'Secure and validate agent memory systems',
      controls: [
        'Memory isolation between agents',
        'Context window management',
        'Memory injection prevention',
        'Temporal consistency checks',
        'Memory retention policies'
      ],
      risks: ['Memory corruption', 'Context poisoning', 'Data leakage', 'Memory overflow'],
      implementation: 'Vector database with access control and versioning'
    },
    tool: {
      name: 'Tool Usage Authorization',
      icon: CommandLineIcon,
      color: 'orange',
      description: 'Control agent access to external tools and APIs',
      controls: [
        'Tool permission matrix',
        'API rate limiting',
        'Credential management',
        'Action authorization',
        'Output sanitization'
      ],
      risks: ['Unauthorized access', 'API abuse', 'Data exfiltration', 'System compromise'],
      implementation: 'Function calling with granular permission system'
    },
    collaboration: {
      name: 'Multi-Agent Collaboration Rules',
      icon: UserGroupIcon,
      color: 'indigo',
      description: 'Govern agent-to-agent interactions and teamwork',
      controls: [
        'Communication protocol enforcement',
        'Message validation & filtering',
        'Consensus mechanisms',
        'Conflict resolution rules',
        'Team formation policies'
      ],
      risks: ['Agent collusion', 'Information cascade', 'Deadlock scenarios', 'Trust violations'],
      implementation: 'CrewAI collaboration framework with built-in safeguards'
    },
    compliance: {
      name: 'Regulatory & Ethical Compliance',
      icon: ScaleIcon,
      color: 'red',
      description: 'Ensure agent behavior meets regulatory requirements',
      controls: [
        'GDPR data handling for agents',
        'Explainable AI requirements',
        'Audit trail generation',
        'Bias detection & mitigation',
        'Industry-specific regulations'
      ],
      risks: ['Legal violations', 'Ethical breaches', 'Audit failures', 'Reputation damage'],
      implementation: 'Automated compliance checking with policy engines'
    }
  };

  const agentFlow = [
    { stage: 'Request Receipt', rails: ['orchestration', 'compliance'] },
    { stage: 'Agent Selection', rails: ['orchestration', 'tool'] },
    { stage: 'Task Execution', rails: ['reasoning', 'memory'] },
    { stage: 'Agent Collaboration', rails: ['collaboration', 'memory'] },
    { stage: 'Response Assembly', rails: ['reasoning', 'compliance'] }
  ];

  const agentTypes = [
    {
      name: 'Supervisor Agent',
      responsibilities: ['Task delegation', 'Team coordination', 'Resource allocation'],
      guardrails: ['orchestration', 'collaboration']
    },
    {
      name: 'Specialist Agents',
      responsibilities: ['Domain expertise', 'Tool usage', 'Data processing'],
      guardrails: ['tool', 'reasoning', 'memory']
    },
    {
      name: 'Validator Agent',
      responsibilities: ['Output verification', 'Quality assurance', 'Compliance checking'],
      guardrails: ['compliance', 'reasoning']
    },
    {
      name: 'Monitor Agent',
      responsibilities: ['System observation', 'Performance tracking', 'Anomaly detection'],
      guardrails: ['all']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-4">
            Agent Governance & Security
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Strategic Guardrails for AI Agents</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Comprehensive governance framework for autonomous agent systems. Ensuring safe, reliable, and compliant 
            multi-agent operations through policy-driven controls and real-time monitoring.
          </p>
        </div>

        {/* Agent System Flow with Guardrails */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Multi-Agent System Protection</h2>
          
          {/* Static Flow Diagram */}
          <div className="overflow-x-auto pb-4">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/diagrams/strategic-guardrails.svg`}
              alt="Multi-Agent Orchestration Pipeline with Strategic Guardrails"
              className="w-full h-auto min-w-[800px]"
            />
          </div>
        </div>

        {/* Guardrail Selection Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Guardrail Components</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(guardrails).map(([key, rail]) => (
              <button
                key={key}
                onClick={() => setSelectedRail(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedRail === key 
                    ? `border-${rail.color}-500 bg-${rail.color}-50` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <rail.icon className={`h-8 w-8 ${
                  selectedRail === key ? `text-${rail.color}-600` : 'text-gray-400'
                } mb-2 mx-auto`} />
                <h3 className="font-semibold text-gray-900 text-sm">{rail.name}</h3>
              </button>
            ))}
          </div>

          {/* Selected Guardrail Details */}
          {selectedRail && (
            <div className="border-t pt-6">
              {Object.entries(guardrails).filter(([key]) => key === selectedRail).map(([key, rail]) => (
              <div key={key}>
                <div className="flex items-center mb-6">
                  <rail.icon className={`h-8 w-8 text-${rail.color}-600 mr-3`} />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{rail.name}</h3>
                    <p className="text-gray-600">{rail.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                      Agent Controls
                    </h4>
                    <ul className="space-y-2">
                      {rail.controls.map((control, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-sm text-gray-600">{control}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risks Mitigated */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-2 text-yellow-600" />
                      Risks Mitigated
                    </h4>
                    <ul className="space-y-2">
                      {rail.risks.map((risk, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2 mt-1">⚠</span>
                          <span className="text-sm text-gray-600">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <ArrowPathIcon className="h-4 w-4 mr-2 text-blue-600" />
                      Implementation
                    </h4>
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                      {rail.implementation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>

        {/* Agent Types and Their Guardrails */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Agent Types & Required Guardrails</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentTypes.map((agent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{agent.name}</h3>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">Responsibilities:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {agent.responsibilities.map((resp, idx) => (
                      <li key={idx}>• {resp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">Required Guardrails:</p>
                  <div className="flex flex-wrap gap-1">
                    {agent.guardrails.map((g, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack for Agent Guardrails */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Agent Guardrails Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Orchestration Frameworks</h3>
              <p className="text-sm text-gray-600 mb-3">
                Multi-agent coordination and governance platforms
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• LangGraph for state machines</li>
                <li>• CrewAI for team coordination</li>
                <li>• AutoGen for agent management</li>
                <li>• Temporal for workflow orchestration</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Validation & Monitoring</h3>
              <p className="text-sm text-gray-600 mb-3">
                Real-time agent behavior validation and observability
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Guardrails AI for validation</li>
                <li>• LangSmith for tracing</li>
                <li>• Weights & Biases for monitoring</li>
                <li>• Custom policy engines</li>
              </ul>
            </div>
            
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Security & Compliance</h3>
              <p className="text-sm text-gray-600 mb-3">
                Enterprise-grade security for autonomous agents
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• OWASP for LLM security</li>
                <li>• Zero-trust agent architecture</li>
                <li>• Homomorphic encryption</li>
                <li>• Audit trail generation</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agent System Metrics Dashboard */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Agent System Health Dashboard</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <CpuChipIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-600">Active Agents</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <ShieldCheckIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-600">Policy Compliance</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <SparklesIcon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">0.02s</p>
              <p className="text-xs text-gray-600">Avg Decision Time</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <EyeIcon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">Full</p>
              <p className="text-xs text-gray-600">Observability</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Agent Collaboration Patterns</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Sequential Processing</span>
                  <span className="font-semibold">45%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Parallel Execution</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Hierarchical Delegation</span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Guardrail Triggers</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Role Boundary Violations</span>
                  <span className="font-semibold text-green-600">0</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Memory Limit Warnings</span>
                  <span className="font-semibold text-yellow-600">3</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Tool Access Denials</span>
                  <span className="font-semibold text-green-600">2</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">System Performance</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Agent Success Rate</span>
                  <span className="font-semibold text-green-600">98.5%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Avg Task Completion</span>
                  <span className="font-semibold">1.2s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">Resource Utilization</span>
                  <span className="font-semibold">67%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicGuardrails;