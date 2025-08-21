import React from 'react';
import { 
  ChatBubbleBottomCenterTextIcon,
  UserGroupIcon,
  SparklesIcon,
  ClockIcon,
  ChartBarIcon,
  BoltIcon,
  GlobeAltIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const CustomerServiceOverview: React.FC = () => {
  const benefits = [
    {
      icon: UserGroupIcon,
      title: 'Reduced Support Tickets',
      description: 'Significant reduction in number of support tickets flowing to human agents',
      metric: '60-80%',
      color: 'blue'
    },
    {
      icon: BoltIcon,
      title: 'Improved Agent Productivity',
      description: 'Reduced average handling time through AI augmentation',
      metric: '250%',
      color: 'green'
    },
    {
      icon: ChartBarIcon,
      title: 'Business Process Optimization',
      description: 'Data-driven insights for continuous improvement',
      metric: 'Real-time',
      color: 'purple'
    },
    {
      icon: SparklesIcon,
      title: 'Enhanced User Experience',
      description: 'Self-service capabilities with instant resolution',
      metric: '24/7',
      color: 'orange'
    }
  ];

  const solutionPillars = [
    {
      title: 'AI-Powered Service Desk',
      description: 'Automate resolutions, empower self-service, and deliver instant support through conversational AI and intelligent virtual assistants.',
      capabilities: [
        'Natural language understanding',
        'Multi-channel support',
        'Automated ticket resolution',
        'Context-aware responses'
      ]
    },
    {
      title: 'Proactive Problem Management',
      description: 'Predict and prevent incidents, optimize capacity, and ensure service availability through predictive analytics and AI-driven insights.',
      capabilities: [
        'Incident prediction',
        'Pattern recognition',
        'Capacity optimization',
        'Service availability monitoring'
      ]
    },
    {
      title: 'Intelligent Knowledge Management',
      description: 'Create dynamic knowledge bases, deliver contextual information, and empower both users and IT staff with readily accessible expertise.',
      capabilities: [
        'Dynamic knowledge base',
        'Contextual information delivery',
        'Self-learning system',
        'Expert knowledge capture'
      ]
    },
    {
      title: 'Optimized IT Operations',
      description: 'Streamline workflows, automate code remediation, and enhance change management through AI-powered automation and insights.',
      capabilities: [
        'Workflow automation',
        'Code remediation',
        'Change management',
        'Process optimization'
      ]
    },
    {
      title: 'Enhanced Visibility & Control',
      description: 'Gain real-time insights into IT performance, predict SLAs, and optimize resource allocation through AI-driven analytics and reporting.',
      capabilities: [
        'Real-time dashboards',
        'SLA prediction',
        'Resource optimization',
        'Performance analytics'
      ]
    }
  ];

  const keyMetrics = [
    { label: 'Availability', value: '24/7', icon: ClockIcon },
    { label: 'Languages', value: '50+', icon: GlobeAltIcon },
    { label: 'Cost Reduction', value: '65%', icon: CurrencyDollarIcon },
    { label: 'First Contact Resolution', value: '78%', icon: ShieldCheckIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Autonomous Support Solution
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Customer Service & Support</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            GenAI engine powered by autonomous agents as the core of an automated IT support system, 
            delivering intelligent, scalable, and cost-effective customer service.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
              <div className="flex items-center justify-between">
                <metric.icon className="h-8 w-8 text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">{metric.value}</span>
              </div>
              <p className="mt-2 text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Gen AI in Managed Services Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-start">
                  <div className={`p-3 bg-${benefit.color}-100 rounded-lg`}>
                    <benefit.icon className={`h-6 w-6 text-${benefit.color}-600`} />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{benefit.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{benefit.description}</p>
                    <div className="mt-3">
                      <span className={`inline-block px-3 py-1 bg-${benefit.color}-50 text-${benefit.color}-700 rounded-full text-sm font-semibold`}>
                        {benefit.metric} improvement
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution Pillars */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Solution Architecture</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionPillars.map((pillar, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                  <ul className="space-y-1">
                    {pillar.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">✓</span>
                        <span className="text-xs text-gray-600">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Explore Solution Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/solutions/customer-service/self-heal-bot" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <SparklesIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Self Heal Bot</h3>
                <p className="text-sm text-gray-600 mb-4">Autonomous resolution with self-service capabilities</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/customer-service/assisted-heal-bot" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <UserGroupIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Assisted Heal Bot</h3>
                <p className="text-sm text-gray-600 mb-4">AI-augmented support for L1 teams</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/customer-service/optimization-hub" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <ChartBarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Optimization Hub</h3>
                <p className="text-sm text-gray-600 mb-4">Analytics and insights for continuous improvement</p>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/customer-service/implementation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-orange-500">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Plan</h3>
                <p className="text-sm text-gray-600 mb-4">Phased approach for deployment</p>
                <div className="flex items-center text-orange-600 text-sm font-medium">
                  <span>Learn more</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ROI Preview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Expected Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">40% → 60%</div>
              <p className="text-sm text-gray-600">Self-heal resolution rate by Q4</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">80% → 20%</div>
              <p className="text-sm text-gray-600">Traditional support reduction</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">Self-Funding</div>
              <p className="text-sm text-gray-600">Cost savings fund AI expansion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceOverview;