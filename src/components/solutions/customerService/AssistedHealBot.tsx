import React, { useState } from 'react';
import { 
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  LanguageIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const AssistedHealBot: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState<string>('conversational');

  const agents = {
    conversational: {
      name: 'Conversational Assistant',
      role: 'L1 Agent Augmentation',
      icon: ChatBubbleLeftRightIcon,
      color: 'blue',
      capabilities: [
        'Real-time response suggestions',
        'Context-aware conversation guidance',
        'Sentiment analysis and escalation alerts',
        'Knowledge base integration',
        'Multi-channel conversation management'
      ],
      tools: ['GPT-4', 'Conversation AI', 'Sentiment Analyzer', 'Knowledge Graph'],
      metrics: {
        'Response Quality': '+85%',
        'Agent Efficiency': '+150%',
        'Escalation Reduction': '40%'
      }
    },
    summarizer: {
      name: 'Call Summarizer',
      role: 'Interaction Documentation',
      icon: DocumentTextIcon,
      color: 'purple',
      capabilities: [
        'Automatic call transcription',
        'Key points extraction',
        'Action items identification',
        'Sentiment tracking',
        'Follow-up recommendations'
      ],
      tools: ['Speech-to-Text', 'NLP Summarization', 'Entity Recognition', 'Action Parser'],
      metrics: {
        'Summary Accuracy': '95%',
        'Time Saved': '10 min/call',
        'Documentation Quality': '+90%'
      }
    },
    creator: {
      name: 'Ticket Creator',
      role: 'Automated Ticket Management',
      icon: ClipboardDocumentCheckIcon,
      color: 'green',
      capabilities: [
        'Automatic ticket generation',
        'Priority classification',
        'Category assignment',
        'SLA calculation',
        'Routing optimization'
      ],
      tools: ['Ticket Engine', 'Classification Model', 'SLA Calculator', 'Routing Algorithm'],
      metrics: {
        'Creation Speed': '5 seconds',
        'Accuracy': '98%',
        'Manual Work Reduction': '75%'
      }
    },
    triaging: {
      name: 'Ticket Triaging',
      role: 'Intelligent Routing & Prioritization',
      icon: ArrowTrendingUpIcon,
      color: 'orange',
      capabilities: [
        'Skill-based routing',
        'Urgency detection',
        'Workload balancing',
        'Expertise matching',
        'Queue optimization'
      ],
      tools: ['ML Classifier', 'Skills Matrix', 'Queue Manager', 'Load Balancer'],
      metrics: {
        'Routing Accuracy': '94%',
        'Resolution Time': '-35%',
        'First Contact Resolution': '+22%'
      }
    },
    diagnostics: {
      name: 'Ticket Diagnostics',
      role: 'Root Cause Analysis',
      icon: MagnifyingGlassIcon,
      color: 'red',
      capabilities: [
        'Automated troubleshooting',
        'Log analysis',
        'Pattern recognition',
        'Similar issue detection',
        'Resolution prediction'
      ],
      tools: ['Log Analyzer', 'Pattern Matcher', 'ML Diagnostics', 'Knowledge Base'],
      metrics: {
        'Diagnostic Accuracy': '89%',
        'Time to Diagnosis': '-60%',
        'Resolution Rate': '+45%'
      }
    },
    recommender: {
      name: 'Resolution Recommender',
      role: 'Solution Guidance',
      icon: CpuChipIcon,
      color: 'indigo',
      capabilities: [
        'Solution recommendation ranking',
        'Step-by-step guidance',
        'Alternative solutions',
        'Success probability scoring',
        'Historical resolution analysis'
      ],
      tools: ['Recommendation Engine', 'Solution Database', 'Success Predictor', 'Guide Generator'],
      metrics: {
        'Recommendation Accuracy': '91%',
        'Resolution Success': '+55%',
        'Agent Confidence': '+70%'
      }
    }
  };

  const workflowScenarios = [
    {
      title: 'Complex Technical Issue',
      severity: 'High',
      flow: [
        { agent: 'conversational', action: 'Assists L1 agent with initial troubleshooting' },
        { agent: 'diagnostics', action: 'Performs automated root cause analysis' },
        { agent: 'recommender', action: 'Suggests top 3 resolution strategies' },
        { agent: 'creator', action: 'Creates detailed ticket with findings' },
        { agent: 'summarizer', action: 'Documents interaction and resolution steps' }
      ],
      outcome: 'Issue resolved without L2 escalation',
      timeReduction: '45%'
    },
    {
      title: 'High Volume Period',
      severity: 'Medium',
      flow: [
        { agent: 'triaging', action: 'Intelligently routes incoming requests' },
        { agent: 'conversational', action: 'Provides real-time agent assistance' },
        { agent: 'creator', action: 'Auto-generates tickets for tracking' },
        { agent: 'summarizer', action: 'Creates batch summaries for review' }
      ],
      outcome: 'Handled 3x normal volume without delays',
      timeReduction: '60%'
    }
  ];

  const performanceMetrics = [
    { label: 'Agent Productivity', before: '20 tickets/day', after: '50 tickets/day', improvement: '+150%' },
    { label: 'Average Handle Time', before: '15 minutes', after: '6 minutes', improvement: '-60%' },
    { label: 'First Contact Resolution', before: '45%', after: '67%', improvement: '+49%' },
    { label: 'Customer Satisfaction', before: '3.8/5', after: '4.6/5', improvement: '+21%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
            Agent Augmentation Layer
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Assisted Heal Bot</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            AI-powered augmentation for L1 support agents, providing real-time assistance, 
            automated documentation, and intelligent routing to dramatically improve productivity and quality.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <UserGroupIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">+150%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Agent Productivity</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ClockIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">-60%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Handle Time</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <CheckCircleIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">67%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">FCR Rate</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">4.6/5</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">CSAT Score</p>
          </div>
        </div>

        {/* Agent Components Grid */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">AI Agent Components</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(agents).map(([key, agent]) => (
              <button
                key={key}
                onClick={() => setSelectedAgent(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAgent === key 
                    ? `border-${agent.color}-500 bg-${agent.color}-50` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <agent.icon className={`h-8 w-8 ${
                  selectedAgent === key ? `text-${agent.color}-600` : 'text-gray-400'
                } mb-2`} />
                <h3 className="font-semibold text-gray-900 text-sm">{agent.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{agent.role}</p>
              </button>
            ))}
          </div>

          {/* Selected Agent Details */}
          {selectedAgent && (
            <div className="border-t pt-6">
              {Object.entries(agents).filter(([key]) => key === selectedAgent).map(([key, agent]) => (
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
                          <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Impact Metrics</h4>
                      <div className="space-y-2">
                        {Object.entries(agent.metrics).map(([metric, value]) => (
                          <div key={metric} className="flex justify-between text-sm">
                            <span className="text-gray-600">{metric}:</span>
                            <span className={`font-semibold ${
                              value.includes('+') ? 'text-green-600' : 
                              value.includes('-') ? 'text-blue-600' : 'text-gray-900'
                            }`}>{value}</span>
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

        {/* Workflow Scenarios */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Intelligent Workflow Orchestration</h2>
          <div className="space-y-6">
            {workflowScenarios.map((scenario, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{scenario.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scenario.severity === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {scenario.severity} Priority
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  {scenario.flow.map((step, idx) => {
                    const agent = agents[step.agent as keyof typeof agents];
                    return (
                      <div key={idx} className="flex items-start">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full bg-${agent.color}-100 flex items-center justify-center`}>
                            <span className="text-xs font-semibold">{idx + 1}</span>
                          </div>
                          {idx < scenario.flow.length - 1 && (
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
                
                <div className="bg-green-50 rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-900">Outcome</p>
                    <p className="text-sm text-green-700">{scenario.outcome}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-900">Time Saved</p>
                    <p className="text-lg font-bold text-green-600">{scenario.timeReduction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Performance Impact Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Metric</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">Before AI</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">With Assisted Bot</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">Improvement</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((metric, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-900">{metric.label}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-600">{metric.before}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-900 font-semibold">{metric.after}</td>
                    <td className="py-3 px-4 text-sm text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        metric.improvement.includes('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {metric.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Integration Points */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Seamless Integration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">ITSM Platforms</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• ServiceNow</li>
                <li>• Jira Service Management</li>
                <li>• Zendesk</li>
                <li>• Freshservice</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Communication Channels</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Microsoft Teams</li>
                <li>• Slack</li>
                <li>• Email Systems</li>
                <li>• Voice/VoIP</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Knowledge Systems</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Confluence</li>
                <li>• SharePoint</li>
                <li>• Custom Knowledge Bases</li>
                <li>• Documentation Repos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistedHealBot;