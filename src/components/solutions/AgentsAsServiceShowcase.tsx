import React, { useState } from 'react';
import { 
  CpuChipIcon,
  CloudArrowUpIcon,
  BoltIcon,
  BeakerIcon,
  CubeTransparentIcon,
  SparklesIcon,
  ArrowPathIcon,
  CommandLineIcon,
  DocumentMagnifyingGlassIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  CodeBracketSquareIcon,
  ServerStackIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AgentsAsServiceShowcase: React.FC = () => {
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [activeDeployment, setActiveDeployment] = useState('cloud');

  const agentMarketplace = [
    {
      name: 'Code Review Agent',
      category: 'Development',
      description: 'Automated PR reviews with architectural insights',
      capabilities: [
        'Security vulnerability detection',
        'Performance optimization suggestions',
        'Code style enforcement',
        'Test coverage analysis'
      ],
      pricing: '$0.02/review',
      usage: '50K+ reviews/month'
    },
    {
      name: 'Document Intelligence Agent',
      category: 'Knowledge Management',
      description: 'Extract insights from complex documents',
      capabilities: [
        'Multi-format processing',
        'Entity extraction',
        'Sentiment analysis',
        'Summary generation'
      ],
      pricing: '$0.001/page',
      usage: '10M+ pages/month'
    },
    {
      name: 'Customer Intent Agent',
      category: 'Customer Service',
      description: 'Real-time customer intent prediction',
      capabilities: [
        'Multi-channel analysis',
        'Predictive routing',
        'Emotion detection',
        'Context preservation'
      ],
      pricing: '$0.005/interaction',
      usage: '2M+ interactions/month'
    },
    {
      name: 'Compliance Monitor Agent',
      category: 'Governance',
      description: 'Continuous regulatory compliance checking',
      capabilities: [
        'GDPR/CCPA compliance',
        'Real-time monitoring',
        'Audit trail generation',
        'Risk assessment'
      ],
      pricing: '$0.01/check',
      usage: '100K+ checks/month'
    },
    {
      name: 'Data Quality Agent',
      category: 'Data Operations',
      description: 'Autonomous data quality management',
      capabilities: [
        'Anomaly detection',
        'Schema validation',
        'Duplicate identification',
        'Data profiling'
      ],
      pricing: '$0.0001/record',
      usage: '1B+ records/month'
    },
    {
      name: 'Test Automation Agent',
      category: 'Quality Assurance',
      description: 'Self-learning test generation and execution',
      capabilities: [
        'Test case generation',
        'Visual regression testing',
        'API testing',
        'Load testing'
      ],
      pricing: '$0.10/test suite',
      usage: '20K+ suites/month'
    }
  ];

  const deploymentOptions = {
    cloud: {
      title: 'Cloud-Native Deployment',
      description: 'Fully managed agents in our secure cloud',
      features: [
        'Zero infrastructure management',
        'Auto-scaling capabilities',
        '99.99% SLA guarantee',
        'Global edge locations',
        'Pay-per-use pricing'
      ],
      architecture: [
        { layer: 'API Gateway', tech: 'Kong, AWS API Gateway' },
        { layer: 'Agent Runtime', tech: 'Kubernetes, ECS' },
        { layer: 'ML Backend', tech: 'SageMaker, Vertex AI' },
        { layer: 'Data Layer', tech: 'DynamoDB, BigQuery' }
      ]
    },
    hybrid: {
      title: 'Hybrid Architecture',
      description: 'Blend of cloud services and on-premise control',
      features: [
        'Sensitive data on-premise',
        'Compute in the cloud',
        'Flexible deployment',
        'Compliance friendly',
        'Cost optimization'
      ],
      architecture: [
        { layer: 'Edge Gateway', tech: 'Envoy, Nginx' },
        { layer: 'Local Agents', tech: 'Docker, K3s' },
        { layer: 'Cloud Bridge', tech: 'VPN, Private Link' },
        { layer: 'Shared Services', tech: 'Redis, Kafka' }
      ]
    },
    onprem: {
      title: 'On-Premise Installation',
      description: 'Complete control within your infrastructure',
      features: [
        'Full data sovereignty',
        'Custom security policies',
        'Air-gapped deployment',
        'Unlimited usage',
        'One-time licensing'
      ],
      architecture: [
        { layer: 'Load Balancer', tech: 'HAProxy, F5' },
        { layer: 'Container Platform', tech: 'OpenShift, Rancher' },
        { layer: 'ML Platform', tech: 'Kubeflow, MLflow' },
        { layer: 'Storage', tech: 'MinIO, Ceph' }
      ]
    }
  };

  const integrationEcosystem = [
    { name: 'Slack', category: 'Communication' },
    { name: 'GitHub', category: 'Development' },
    { name: 'Jira', category: 'Project Management' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Snowflake', category: 'Data Warehouse' },
    { name: 'Datadog', category: 'Monitoring' },
    { name: 'Jenkins', category: 'CI/CD' },
    { name: 'Tableau', category: 'Analytics' }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      features: [
        '5 Agent Types',
        '10K API Calls',
        'Community Support',
        'Basic Analytics',
        'Standard SLA'
      ],
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      features: [
        '20 Agent Types',
        '1M API Calls',
        'Priority Support',
        'Advanced Analytics',
        '99.9% SLA',
        'Custom Integrations'
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      features: [
        'Unlimited Agents',
        'Unlimited API Calls',
        'Dedicated Support',
        'Custom Models',
        '99.99% SLA',
        'On-Premise Option',
        'White Labeling'
      ],
      cta: 'Contact Sales'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <RocketLaunchIcon className="h-8 w-8 text-purple-600 mr-3" />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Agents as a Service Platform</h1>
                <p className="text-sm text-gray-600 mt-1">Deploy Pre-trained AI Agents in Minutes</p>
              </div>
            </div>
            <Link
              to="/solutions/agents-as-service"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center"
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
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              The World's First AI Agent Marketplace
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access a comprehensive library of pre-trained, production-ready AI agents. 
              Deploy instantly via API, customize for your needs, or build your own agents 
              using our powerful framework.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <p className="text-4xl font-bold text-purple-600">100+</p>
              <p className="text-sm text-gray-600 mt-1">Pre-built Agents</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-600">50ms</p>
              <p className="text-sm text-gray-600 mt-1">Avg Response Time</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-green-600">99.99%</p>
              <p className="text-sm text-gray-600 mt-1">Uptime SLA</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-indigo-600">10M+</p>
              <p className="text-sm text-gray-600 mt-1">Daily Requests</p>
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
              <RocketLaunchIcon className="h-5 w-5 mr-2" />
              Browse Agent Catalog
            </button>
            <button className="px-6 py-3 bg-white text-purple-600 border border-purple-600 rounded-lg hover:bg-purple-50 transition-colors flex items-center">
              <CodeBracketSquareIcon className="h-5 w-5 mr-2" />
              View API Docs
            </button>
          </div>
        </div>

        {/* Agent Marketplace */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Agents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentMarketplace.map((agent, index) => (
              <div 
                key={index}
                className={`border rounded-lg p-6 cursor-pointer transition-all ${
                  selectedAgent === index 
                    ? 'border-purple-500 shadow-lg bg-purple-50' 
                    : 'border-gray-200 hover:shadow-md'
                }`}
                onClick={() => setSelectedAgent(index)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="text-xs font-semibold bg-purple-100 text-purple-700 px-2 py-1 rounded">
                      {agent.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 mt-2">{agent.name}</h3>
                  </div>
                  <CpuChipIcon className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm text-gray-600 mb-4">{agent.description}</p>
                <div className="space-y-2 mb-4">
                  {agent.capabilities.slice(0, 2).map((cap, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                      {cap}
                    </div>
                  ))}
                  {agent.capabilities.length > 2 && (
                    <p className="text-xs text-purple-600">+{agent.capabilities.length - 2} more features</p>
                  )}
                </div>
                <div className="border-t pt-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-bold text-gray-900">{agent.pricing}</p>
                    <p className="text-xs text-gray-600">{agent.usage}</p>
                  </div>
                  <button className="px-3 py-1 bg-purple-600 text-white text-sm rounded hover:bg-purple-700 transition-colors">
                    Deploy
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Deployment Options */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Flexible Deployment Options</h2>
          <div className="mb-6">
            <div className="inline-flex rounded-lg border border-gray-200 p-1">
              {Object.keys(deploymentOptions).map((key) => (
                <button
                  key={key}
                  onClick={() => setActiveDeployment(key)}
                  className={`px-4 py-2 rounded-md font-medium transition-colors capitalize ${
                    activeDeployment === key
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {key === 'onprem' ? 'On-Premise' : key}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {deploymentOptions[activeDeployment as keyof typeof deploymentOptions].title}
              </h3>
              <p className="text-gray-600 mb-4">
                {deploymentOptions[activeDeployment as keyof typeof deploymentOptions].description}
              </p>
              <div className="space-y-3">
                {deploymentOptions[activeDeployment as keyof typeof deploymentOptions].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Technology Stack</h4>
              <div className="space-y-3">
                {deploymentOptions[activeDeployment as keyof typeof deploymentOptions].architecture.map((layer, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">{layer.layer}</span>
                      <ServerStackIcon className="h-4 w-4 text-purple-600" />
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{layer.tech}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Integration Ecosystem */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Seamless Integrations</h2>
          <p className="text-gray-600 mb-6">
            Connect agents to your existing tools and workflows with pre-built integrations
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {integrationEcosystem.map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-semibold text-gray-900">{integration.name}</p>
                <p className="text-xs text-gray-600">{integration.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Simple, Transparent Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`border rounded-lg p-6 relative ${
                  tier.popular 
                    ? 'border-purple-500 shadow-lg' 
                    : 'border-gray-200'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                    <span className="text-gray-600 ml-1">{tier.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-2 rounded-lg font-medium transition-colors ${
                  tier.popular
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}>
                  {tier.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsAsServiceShowcase;