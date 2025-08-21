import React, { useState } from 'react';
import { 
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  CogIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';

const ImplementationRoadmap: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phases = [
    {
      id: 0,
      name: 'Phase 1: Requirements & Planning',
      duration: '2-3 weeks',
      icon: DocumentTextIcon,
      color: 'blue',
      objectives: [
        'Understand customer needs and pain points',
        'Identify integration requirements',
        'Define customization scope',
        'Assess security & compliance needs',
        'Finalize deployment strategy'
      ],
      deliverables: [
        'Requirements document',
        'Integration architecture',
        'Security assessment',
        'Project timeline',
        'Success metrics definition'
      ],
      activities: [
        {
          task: 'Stakeholder interviews',
          owner: 'Project Manager',
          duration: '3 days'
        },
        {
          task: 'System assessment',
          owner: 'Technical Architect',
          duration: '5 days'
        },
        {
          task: 'Process mapping',
          owner: 'Business Analyst',
          duration: '4 days'
        },
        {
          task: 'Compliance review',
          owner: 'Security Team',
          duration: '2 days'
        }
      ]
    },
    {
      id: 1,
      name: 'Phase 2: Configuration & Integration',
      duration: '3-4 weeks',
      icon: CogIcon,
      color: 'purple',
      objectives: [
        'Deploy AI virtual assistants',
        'Integrate with ITSM platforms',
        'Customize knowledge base',
        'Set up automation rules',
        'Configure multi-channel support'
      ],
      deliverables: [
        'Configured AI agents',
        'System integrations',
        'Knowledge base import',
        'Automation workflows',
        'Channel configurations'
      ],
      activities: [
        {
          task: 'AI agent deployment',
          owner: 'AI Engineers',
          duration: '5 days'
        },
        {
          task: 'ITSM integration',
          owner: 'Integration Team',
          duration: '7 days'
        },
        {
          task: 'Knowledge base setup',
          owner: 'Content Team',
          duration: '5 days'
        },
        {
          task: 'Workflow automation',
          owner: 'Process Engineers',
          duration: '4 days'
        }
      ]
    },
    {
      id: 2,
      name: 'Phase 3: Pilot Development',
      duration: '4-6 weeks',
      icon: BeakerIcon,
      color: 'green',
      objectives: [
        'Limited rollout to pilot users',
        'User training and adoption',
        'Performance monitoring',
        'Feedback collection',
        'Iterative improvements'
      ],
      deliverables: [
        'Pilot deployment',
        'Training materials',
        'Performance reports',
        'Feedback analysis',
        'Optimization recommendations'
      ],
      activities: [
        {
          task: 'Pilot user selection',
          owner: 'Project Manager',
          duration: '2 days'
        },
        {
          task: 'Training delivery',
          owner: 'Training Team',
          duration: '5 days'
        },
        {
          task: 'Performance monitoring',
          owner: 'Operations Team',
          duration: 'Ongoing'
        },
        {
          task: 'Feedback analysis',
          owner: 'Business Analyst',
          duration: 'Weekly'
        }
      ]
    },
    {
      id: 3,
      name: 'Phase 4: Scale & Production',
      duration: 'Ongoing',
      icon: RocketLaunchIcon,
      color: 'orange',
      objectives: [
        'Enterprise-wide rollout',
        'Live performance monitoring',
        'Continuous learning implementation',
        'Ongoing support & enhancements',
        'ROI tracking and optimization'
      ],
      deliverables: [
        'Production deployment',
        'Performance dashboards',
        'Optimization reports',
        'ROI analysis',
        'Enhancement roadmap'
      ],
      activities: [
        {
          task: 'Production rollout',
          owner: 'Operations Team',
          duration: '10 days'
        },
        {
          task: 'Performance monitoring',
          owner: 'Operations Team',
          duration: 'Continuous'
        },
        {
          task: 'Model optimization',
          owner: 'AI Engineers',
          duration: 'Monthly'
        },
        {
          task: 'Enhancement delivery',
          owner: 'Development Team',
          duration: 'Quarterly'
        }
      ]
    }
  ];

  const timeline = [
    { week: 1, phase: 0, milestone: 'Project Kickoff' },
    { week: 3, phase: 0, milestone: 'Requirements Complete' },
    { week: 4, phase: 1, milestone: 'Integration Start' },
    { week: 7, phase: 1, milestone: 'Core Systems Connected' },
    { week: 8, phase: 2, milestone: 'Pilot Launch' },
    { week: 12, phase: 2, milestone: 'Pilot Validation' },
    { week: 14, phase: 3, milestone: 'Production Ready' },
    { week: 16, phase: 3, milestone: 'Full Deployment' }
  ];

  const risks = [
    {
      risk: 'Integration Complexity',
      impact: 'High',
      probability: 'Medium',
      mitigation: 'Thorough system assessment and phased integration approach'
    },
    {
      risk: 'User Adoption',
      impact: 'High',
      probability: 'Low',
      mitigation: 'Comprehensive training program and change management'
    },
    {
      risk: 'Data Quality',
      impact: 'Medium',
      probability: 'Medium',
      mitigation: 'Data cleansing and validation before migration'
    },
    {
      risk: 'Performance Issues',
      impact: 'Medium',
      probability: 'Low',
      mitigation: 'Load testing and performance optimization during pilot'
    }
  ];

  const successMetrics = [
    { metric: 'Ticket Resolution Rate', baseline: '45%', target: '78%', timeline: 'Month 3' },
    { metric: 'Average Handle Time', baseline: '15 min', target: '6 min', timeline: 'Month 2' },
    { metric: 'Customer Satisfaction', baseline: '3.8/5', target: '4.6/5', timeline: 'Month 4' },
    { metric: 'Cost per Contact', baseline: '$15', target: '$5.25', timeline: 'Month 6' },
    { metric: 'Agent Productivity', baseline: '100%', target: '250%', timeline: 'Month 4' },
    { metric: 'First Contact Resolution', baseline: '40%', target: '67%', timeline: 'Month 3' }
  ];

  const technologies = [
    { category: 'GenAI Tools', items: ['OpenAI GPT-4', 'Claude', 'Custom NLP Pipelines', 'Fine-tuned Models'] },
    { category: 'ITSM Platforms', items: ['ServiceNow', 'Jira Service Management', 'Zendesk', 'Freshservice'] },
    { category: 'Integration Tools', items: ['UiPath RPA', 'Automation Anywhere', 'API Gateway', 'Webhook Services'] },
    { category: 'Cloud Infrastructure', items: ['AWS', 'Azure', 'Google Cloud', 'Kubernetes'] },
    { category: 'Security Framework', items: ['End-to-end Encryption', 'RBAC', 'OAuth 2.0', 'Audit Logging'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-semibold mb-4">
            Deployment Strategy
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Implementation Roadmap</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Structured 16-week implementation plan for deploying autonomous customer service solution 
            with phased approach ensuring minimal disruption and maximum adoption.
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Project Timeline</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-6">
                <div className={`absolute -left-2 w-5 h-5 rounded-full border-2 ${
                  phases[item.phase].color === 'blue' ? 'bg-blue-500 border-blue-600' :
                  phases[item.phase].color === 'purple' ? 'bg-purple-500 border-purple-600' :
                  phases[item.phase].color === 'green' ? 'bg-green-500 border-green-600' :
                  'bg-orange-500 border-orange-600'
                }`}></div>
                <div className="ml-8">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-500 mr-3">Week {item.week}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      phases[item.phase].color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      phases[item.phase].color === 'purple' ? 'bg-purple-100 text-purple-700' :
                      phases[item.phase].color === 'green' ? 'bg-green-100 text-green-700' :
                      'bg-orange-100 text-orange-700'
                    }`}>
                      {phases[item.phase].name.split(':')[0]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 font-semibold mt-1">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Phases</h2>
          
          {/* Phase Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`pb-3 px-1 border-b-2 transition-colors flex items-center ${
                  selectedPhase === phase.id 
                    ? `border-${phase.color}-600 text-${phase.color}-600` 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <phase.icon className="h-5 w-5 mr-2" />
                <span className="font-medium">{phase.name.split(':')[0]}</span>
              </button>
            ))}
          </div>

          {/* Selected Phase Details */}
          {phases[selectedPhase] && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phases[selectedPhase].name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>Duration: {phases[selectedPhase].duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Objectives */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Objectives</h4>
                  <ul className="space-y-2">
                    {phases[selectedPhase].objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Deliverables</h4>
                  <ul className="space-y-2">
                    {phases[selectedPhase].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <DocumentTextIcon className="h-4 w-4 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Key Activities</h4>
                  <div className="space-y-2">
                    {phases[selectedPhase].activities.map((activity, index) => (
                      <div key={index} className="bg-gray-50 rounded p-2">
                        <p className="text-sm font-medium text-gray-900">{activity.task}</p>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{activity.owner}</span>
                          <span>{activity.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Risk Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Risk Management</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Risk</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">Impact</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">Probability</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">Mitigation Strategy</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-900">{risk.risk}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        risk.impact === 'High' ? 'bg-red-100 text-red-700' :
                        risk.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.impact}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        risk.probability === 'High' ? 'bg-red-100 text-red-700' :
                        risk.probability === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.probability}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{risk.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Success Metrics & KPIs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {successMetrics.map((metric, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{metric.metric}</h3>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-500">Baseline</p>
                    <p className="text-lg font-semibold text-gray-600">{metric.baseline}</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">Target</p>
                    <p className="text-lg font-bold text-green-600">{metric.target}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">Timeline: {metric.timeline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.category}</h3>
                <ul className="space-y-1">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Projection */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">ROI Projection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CalendarIcon className="h-12 w-12 text-orange-600 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">Break-even Point</p>
              <p className="text-2xl font-bold text-gray-900">Month 6</p>
            </div>
            <div className="text-center">
              <CurrencyDollarIcon className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">Annual Savings</p>
              <p className="text-2xl font-bold text-gray-900">$2.5M+</p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">3-Year ROI</p>
              <p className="text-2xl font-bold text-gray-900">340%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationRoadmap;