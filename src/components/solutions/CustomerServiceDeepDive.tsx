import React, { useState } from 'react';
import { 
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  SparklesIcon,
  CpuChipIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ClockIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ArrowRightIcon,
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftRightIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

const CustomerServiceDeepDive: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>('triage');
  const [activeScenario, setActiveScenario] = useState<number>(0);

  const agentTeam = {
    triage: {
      name: 'Triage & Routing Agent',
      role: 'First Response Orchestrator',
      icon: ArrowPathIcon,
      color: 'blue',
      capabilities: [
        'Intent classification using NLP',
        'Sentiment analysis & urgency detection',
        'Multi-language support (50+ languages)',
        'Smart routing to specialist agents',
        'Context extraction & summarization'
      ],
      tools: ['LangChain', 'spaCy', 'Sentiment Analyzer', 'Language Detector'],
      metrics: {
        'Avg Classification Time': '0.3s',
        'Routing Accuracy': '96%',
        'Languages Supported': '50+'
      }
    },
    knowledge: {
      name: 'Knowledge Retrieval Agent',
      role: 'Information Specialist',
      icon: DocumentTextIcon,
      color: 'purple',
      capabilities: [
        'RAG-based knowledge retrieval',
        'Product documentation search',
        'FAQ & policy lookup',
        'Historical case analysis',
        'Real-time knowledge base updates'
      ],
      tools: ['Vector DB', 'Elasticsearch', 'Knowledge Graph', 'Document Parser'],
      metrics: {
        'Knowledge Coverage': '98%',
        'Retrieval Speed': '0.5s',
        'Accuracy Rate': '94%'
      }
    },
    resolution: {
      name: 'Resolution Specialist Agent',
      role: 'Problem Solver',
      icon: SparklesIcon,
      color: 'green',
      capabilities: [
        'Complex problem solving',
        'Step-by-step guidance generation',
        'Transaction processing',
        'System integration & API calls',
        'Solution validation & testing'
      ],
      tools: ['GPT-4', 'Function Calling', 'API Gateway', 'Process Engine'],
      metrics: {
        'First Contact Resolution': '78%',
        'Avg Resolution Time': '3.2 min',
        'Success Rate': '92%'
      }
    },
    escalation: {
      name: 'Escalation Manager Agent',
      role: 'Human Handoff Coordinator',
      icon: UserGroupIcon,
      color: 'orange',
      capabilities: [
        'Human agent availability check',
        'Context preservation & transfer',
        'Priority queue management',
        'Skill-based routing',
        'Seamless handoff orchestration'
      ],
      tools: ['Workforce Management', 'Queue Manager', 'Context Store', 'Skills Matrix'],
      metrics: {
        'Handoff Success Rate': '99%',
        'Context Retention': '100%',
        'Avg Wait Time': '45s'
      }
    },
    quality: {
      name: 'Quality Assurance Agent',
      role: 'Response Validator',
      icon: ShieldCheckIcon,
      color: 'red',
      capabilities: [
        'Response quality validation',
        'Compliance checking',
        'Tone & sentiment monitoring',
        'Accuracy verification',
        'Continuous improvement feedback'
      ],
      tools: ['Policy Engine', 'Compliance Checker', 'Tone Analyzer', 'Feedback Loop'],
      metrics: {
        'Quality Score': '4.8/5',
        'Compliance Rate': '100%',
        'Error Detection': '99.5%'
      }
    }
  };

  const customerScenarios = [
    {
      title: 'Billing Inquiry',
      channel: 'Chat',
      complexity: 'Medium',
      flow: [
        { agent: 'triage', action: 'Identifies billing inquiry, extracts account details' },
        { agent: 'knowledge', action: 'Retrieves billing policies and account history' },
        { agent: 'resolution', action: 'Analyzes charges, identifies discrepancy' },
        { agent: 'quality', action: 'Validates response for accuracy and compliance' }
      ],
      outcome: 'Issue resolved in 2.5 minutes with refund processed',
      satisfaction: '5/5'
    },
    {
      title: 'Technical Support',
      channel: 'Phone (Voice AI)',
      complexity: 'High',
      flow: [
        { agent: 'triage', action: 'Voice-to-text, identifies technical issue' },
        { agent: 'knowledge', action: 'Searches troubleshooting guides and known issues' },
        { agent: 'resolution', action: 'Provides step-by-step troubleshooting' },
        { agent: 'escalation', action: 'Complex issue - transfers to specialist with full context' }
      ],
      outcome: 'Escalated to human expert with complete context preserved',
      satisfaction: '4.5/5'
    },
    {
      title: 'Product Return',
      channel: 'Email',
      complexity: 'Low',
      flow: [
        { agent: 'triage', action: 'Processes email, extracts order information' },
        { agent: 'knowledge', action: 'Retrieves return policy and order details' },
        { agent: 'resolution', action: 'Initiates return, generates shipping label' },
        { agent: 'quality', action: 'Ensures policy compliance and sends confirmation' }
      ],
      outcome: 'Return processed automatically in 45 seconds',
      satisfaction: '5/5'
    }
  ];

  const implementationPhases = [
    {
      phase: 'Phase 1: Foundation',
      duration: '2-4 weeks',
      activities: [
        'Deploy core agent framework',
        'Integrate with existing CRM/ticketing system',
        'Import knowledge base and FAQs',
        'Configure routing rules'
      ]
    },
    {
      phase: 'Phase 2: Training',
      duration: '2-3 weeks',
      activities: [
        'Train agents on historical tickets',
        'Fine-tune NLP models',
        'Optimize routing algorithms',
        'Establish quality benchmarks'
      ]
    },
    {
      phase: 'Phase 3: Pilot',
      duration: '4-6 weeks',
      activities: [
        'Limited rollout to specific channels',
        'Human-in-the-loop validation',
        'Performance monitoring',
        'Iterative improvements'
      ]
    },
    {
      phase: 'Phase 4: Scale',
      duration: 'Ongoing',
      activities: [
        'Full production deployment',
        'Multi-channel activation',
        'Continuous learning implementation',
        'Advanced analytics integration'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Solution Deep Dive
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Autonomous Customer Service & Support</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Multi-agent system delivering 24/7 intelligent customer support across all channels with 
            human-level understanding and resolution capabilities.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ClockIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">24/7</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Availability</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <BoltIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">78%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">First Contact Resolution</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">65%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Cost Reduction</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <GlobeAltIcon className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">50+</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Languages</p>
          </div>
        </div>

        {/* Agent Team Architecture */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Multi-Agent Team Architecture</h2>
          
          {/* Agent Network Visualization */}
          <div className="relative h-64 mb-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Central Customer */}
              <div className="absolute bg-white rounded-full p-4 shadow-lg z-10">
                <UserGroupIcon className="h-8 w-8 text-gray-700" />
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs font-semibold whitespace-nowrap">Customer</span>
              </div>
              
              {/* Agent Nodes */}
              {Object.entries(agentTeam).map(([key, agent], index) => {
                const angle = (index * 72) * Math.PI / 180;
                const radius = 120;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                return (
                  <button
                    key={key}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all cursor-pointer ${
                      selectedAgent === key ? 'ring-2 ring-blue-500 scale-110' : ''
                    }`}
                    style={{ 
                      left: `calc(50% + ${x}px)`, 
                      top: `calc(50% + ${y}px)`
                    }}
                    onClick={() => setSelectedAgent(key)}
                  >
                    <agent.icon className={`h-6 w-6 text-${agent.color}-600`} />
                    <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-xs whitespace-nowrap">
                      {agent.name.split(' ')[0]}
                    </span>
                  </button>
                );
              })}
              
              {/* Connection Lines */}
              <svg className="absolute inset-0 pointer-events-none">
                {Object.keys(agentTeam).map((_, index) => {
                  const angle = (index * 72) * Math.PI / 180;
                  const radius = 120;
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  
                  return (
                    <line
                      key={index}
                      x1="50%"
                      y1="50%"
                      x2={`calc(50% + ${x}px)`}
                      y2={`calc(50% + ${y}px)`}
                      stroke="#e5e7eb"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                    />
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Selected Agent Details */}
          {selectedAgent && (
            <div className="bg-gray-50 rounded-lg p-6">
              {Object.entries(agentTeam).filter(([key]) => key === selectedAgent).map(([key, agent]) => (
                <div key={key}>
                  <div className="flex items-center mb-4">
                    <agent.icon className={`h-8 w-8 text-${agent.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-gray-600">{agent.role}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Core Capabilities</h4>
                      <ul className="space-y-2">
                        {agent.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.tools.map((tool, index) => (
                          <span key={index} className="px-2 py-1 bg-white rounded text-xs text-gray-700 border border-gray-300">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Performance Metrics</h4>
                      <div className="space-y-2">
                        {Object.entries(agent.metrics).map(([metric, value]) => (
                          <div key={metric} className="flex justify-between text-sm">
                            <span className="text-gray-600">{metric}:</span>
                            <span className="font-semibold text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Customer Journey Scenarios */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Real-World Customer Scenarios</h2>
          
          {/* Scenario Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            {customerScenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => setActiveScenario(index)}
                className={`pb-3 px-1 border-b-2 transition-colors ${
                  activeScenario === index 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <span className="font-medium">{scenario.title}</span>
              </button>
            ))}
          </div>

          {/* Active Scenario Details */}
          {customerScenarios[activeScenario] && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Channel</p>
                  <div className="flex items-center">
                    {customerScenarios[activeScenario].channel.includes('Chat') && <ChatBubbleBottomCenterTextIcon className="h-5 w-5 text-blue-600 mr-2" />}
                    {customerScenarios[activeScenario].channel.includes('Phone') && <PhoneIcon className="h-5 w-5 text-green-600 mr-2" />}
                    {customerScenarios[activeScenario].channel.includes('Email') && <EnvelopeIcon className="h-5 w-5 text-purple-600 mr-2" />}
                    <span className="text-sm font-semibold">{customerScenarios[activeScenario].channel}</span>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Complexity</p>
                  <p className="text-sm font-semibold text-gray-900">{customerScenarios[activeScenario].complexity}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Outcome</p>
                  <p className="text-sm font-semibold text-green-600">Success</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <p className="text-xs text-gray-500 mb-1">Satisfaction</p>
                  <p className="text-sm font-semibold text-gray-900">{customerScenarios[activeScenario].satisfaction}</p>
                </div>
              </div>

              {/* Agent Flow */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-700">Agent Workflow</h4>
                {customerScenarios[activeScenario].flow.map((step, index) => {
                  const agent = agentTeam[step.agent as keyof typeof agentTeam];
                  return (
                    <div key={index} className="flex items-start">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full bg-${agent.color}-100 flex items-center justify-center`}>
                          <span className="text-xs font-semibold text-gray-700">{index + 1}</span>
                        </div>
                        {index < customerScenarios[activeScenario].flow.length - 1 && (
                          <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                        )}
                      </div>
                      <div className="ml-3 flex-1">
                        <p className="text-sm font-semibold text-gray-900">{agent.name}</p>
                        <p className="text-sm text-gray-600">{step.action}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-4 p-4 bg-green-50 rounded-lg">
                <p className="text-sm font-semibold text-green-900 mb-1">Result</p>
                <p className="text-sm text-green-700">{customerScenarios[activeScenario].outcome}</p>
              </div>
            </div>
          )}
        </div>

        {/* Channel Support */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Omnichannel Support Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Web Chat</h3>
              <p className="text-xs text-gray-600">Real-time chat with context awareness</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <PhoneIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Voice AI</h3>
              <p className="text-xs text-gray-600">Natural conversation with speech recognition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <EnvelopeIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
              <p className="text-xs text-gray-600">Automated email processing and response</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Social Media</h3>
              <p className="text-xs text-gray-600">Twitter, Facebook, Instagram monitoring</p>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Roadmap</h2>
          <div className="space-y-6">
            {implementationPhases.map((phase, index) => (
              <div key={index} className="flex">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                  {index < implementationPhases.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 mx-5 mt-2"></div>
                  )}
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                  <p className="text-sm text-gray-600 mb-2">Duration: {phase.duration}</p>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ROI & Benefits */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Expected ROI & Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quantitative Benefits</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Cost per Interaction</span>
                  <div className="flex items-center">
                    <span className="text-red-500 line-through mr-2">$15</span>
                    <span className="text-green-600 font-semibold">$5.25</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Average Handle Time</span>
                  <div className="flex items-center">
                    <span className="text-red-500 line-through mr-2">8 min</span>
                    <span className="text-green-600 font-semibold">3.2 min</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Customer Wait Time</span>
                  <div className="flex items-center">
                    <span className="text-red-500 line-through mr-2">5 min</span>
                    <span className="text-green-600 font-semibold">0 min</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Agent Productivity</span>
                  <span className="text-green-600 font-semibold">+250%</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Qualitative Benefits</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 availability without human staffing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Consistent service quality across all interactions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Scalability to handle peak volumes instantly</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Continuous learning and improvement</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced employee satisfaction (focus on complex tasks)</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Expected ROI Timeline</p>
                <p className="text-2xl font-bold text-gray-900">6-8 months</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Annual Savings</p>
                <p className="text-2xl font-bold text-green-600">$2.5M+</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">CSAT Improvement</p>
                <p className="text-2xl font-bold text-blue-600">+35%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceDeepDive;