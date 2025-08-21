import React, { useState } from 'react';
import { 
  CubeIcon,
  ServerIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  BoltIcon,
  CpuChipIcon,
  CloudIcon,
  BeakerIcon,
  CogIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  RocketLaunchIcon,
  LockClosedIcon,
  SparklesIcon,
  ChartPieIcon,
  DocumentTextIcon,
  CodeBracketIcon
} from '@heroicons/react/24/outline';

const GenAIInABox: React.FC = () => {
  const [selectedLayer, setSelectedLayer] = useState<string>('kaps');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('security');

  const challenges = {
    security: {
      name: 'Data Security',
      icon: LockClosedIcon,
      color: 'purple',
      description: 'Concerns over sensitive data exposure',
      solution: 'On-premise deployment with complete data control'
    },
    performance: {
      name: 'Performance',
      icon: BoltIcon,
      color: 'green',
      description: 'Time-consuming optimization process',
      solution: 'Pre-optimized models with task-specific tuning'
    },
    cost: {
      name: 'High Adoption Cost',
      icon: CurrencyDollarIcon,
      color: 'orange',
      description: 'Infrastructure and LLM usage costs',
      solution: 'Open-source models with optimized hardware'
    }
  };

  const architectureLayers = {
    kaps: {
      name: 'KAPS Framework by Accion Labs',
      color: 'purple',
      components: [
        { name: 'Business Applications User Interface', type: 'interface' },
        { name: 'Knowledge Assistant', type: 'app' },
        { name: 'Generative BI', type: 'app' },
        { name: 'Process Automation', type: 'app' },
        { name: 'OnePane API Hub', type: 'app' },
        { name: 'Business Context Graph', type: 'data' }
      ]
    },
    llm: {
      name: 'LLM Infrastructure Layer',
      color: 'orange',
      components: [
        { name: 'Llama', type: 'model' },
        { name: 'Mistral', type: 'model' },
        { name: 'Mixtral', type: 'model' },
        { name: 'DeepSeek', type: 'model' },
        { name: 'Qwen', type: 'model' },
        { name: 'NVIDIA NeMo', type: 'framework' }
      ]
    },
    blueprint: {
      name: 'Generative AI Design Blueprint',
      color: 'blue',
      components: [
        { name: 'Model Architecture', type: 'design' },
        { name: 'Training Pipeline', type: 'design' },
        { name: 'Inference Optimization', type: 'design' },
        { name: 'Deployment Patterns', type: 'design' }
      ]
    },
    infrastructure: {
      name: 'Hardware Infrastructure',
      color: 'green',
      components: [
        { name: 'Dell / Lenovo Servers', type: 'hardware' },
        { name: 'NVIDIA GPUs', type: 'hardware' },
        { name: 'Operating System', type: 'system' },
        { name: 'Container Orchestration', type: 'system' }
      ]
    }
  };

  const adoptionBarriers = [
    {
      title: 'Cost Efficiency',
      icon: CurrencyDollarIcon,
      benefits: [
        'Optimized Hardware: Maximize AI performance with tailored hardware solutions',
        'On-Premise Hosting Option: Keep data local to reduce cloud costs',
        'Open-Source Models: Access advanced AI capabilities without licensing fees'
      ]
    },
    {
      title: 'Accuracy',
      icon: ChartBarIcon,
      benefits: [
        'Task-Specific Models: Tailor Transformer or SSM models for specific operational needs',
        'Model Fine-Tuning: Customize models meticulously for enhanced precision',
        'Graph RAG Architecture: Enhance coherence using retrieval-augmented generation techniques'
      ]
    },
    {
      title: 'Security',
      icon: ShieldCheckIcon,
      benefits: [
        'On-Premise Data: Maintain data privacy and control with local storage',
        'Access Control: Safeguard sensitive information with robust management',
        'Guardrails Configurations: Ensure safety and compliance with predefined AI behavior rules'
      ]
    },
    {
      title: 'Accelerators',
      icon: RocketLaunchIcon,
      benefits: [
        'Gen AI Development Framework: Rapidly create generative AI solutions with a robust framework',
        'Ready-to-Deploy Applications: Quickly deploy pre-configured applications for immediate use',
        'Industry-Specific Solutions: Customized AI solutions to meet specific industry challenges'
      ]
    }
  ];

  const businessBenefits = [
    {
      title: 'Accelerated Time To Market',
      items: [
        'Ready-to-deploy business apps',
        'Base framework for quick custom solutions',
        'Shorter analysis & design cycles'
      ]
    },
    {
      title: 'Strategic Gen AI Adoption',
      items: [
        'Strategic roadmap for Gen AI adoption',
        'Ready to explore use case portfolios',
        'Continuous capability enhancement'
      ]
    },
    {
      title: 'Data Security and Compliance',
      items: [
        'On-premise deployment for control over data',
        'Compliance with data protection regulations',
        'Vital for sectors like healthcare and finance'
      ]
    },
    {
      title: 'Customization and Control',
      items: [
        'Tailoring LLMs to specific needs',
        'Integration with existing systems',
        'Fine-tuning models for specialized tasks'
      ]
    },
    {
      title: 'Low Latency and Cost Control',
      items: [
        'Achieving low latency for real-time applications',
        'High performance & accuracy, smaller footprint',
        'Cost savings in the long term'
      ]
    },
    {
      title: 'Finetuned LLM on Server',
      items: [
        'Pre-fine-tuned domain-specific models',
        'Reduces manual annotation costs',
        'Creates highly performant, versatile LLMs'
      ]
    }
  ];

  const slmModels = [
    'Llama', 'Mistral', 'DeepSeek', 'Qwen', 'NVIDIA NeMo', 'Domain-Specific Models'
  ];

  const implementationPhases = [
    {
      phase: 'Establish Strategy',
      icon: CogIcon,
      outcome: 'Consensus on Roadmap',
      services: ['Accelerator Workshop', 'Advisory Services']
    },
    {
      phase: 'Prepare Data',
      icon: DocumentTextIcon,
      outcome: 'Validated data for model',
      services: ['Data Preparation', 'Data Security', 'Data Lakehouse']
    },
    {
      phase: 'GenAI Platform',
      icon: CubeIcon,
      outcome: 'Deployed GenAI platform',
      services: ['Infrastructure Deployment', 'Software Stack Deployment']
    },
    {
      phase: 'Deploy & Test Model',
      icon: BeakerIcon,
      outcome: 'Tuned Model',
      services: ['Use case implementation', 'Accuracy improvement', 'RAG services']
    },
    {
      phase: 'Operate & Scale',
      icon: RocketLaunchIcon,
      outcome: 'Simplified GenAI operations',
      services: ['Residency Services', 'Managed Services', 'Infrastructure Support']
    }
  ];

  const costComparison = {
    onPrem: { '5k': 100, '10k': 200, '50k': 400 },
    cloud: { '5k': 175, '10k': 350, '50k': 700 },
    savings: { iaas: '75%', api: '88%' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Infrastructure Solution
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Generative AI in a Box</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Cost-efficient, high-throughput Generative AI deployments with complete on-premise control, 
            enterprise-grade security, and pre-optimized models for rapid deployment.
          </p>
        </div>

        {/* Top 3 Challenges */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Top 3 Challenges in Gen AI Adoption</h2>
          <p className="text-gray-600 mb-6">
            Addressing critical challenges in GenAI adoption, including concerns over data security, 
            performance optimization, & the high costs of infrastructure & LLM usage
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(challenges).map(([key, challenge]) => (
              <button
                key={key}
                onClick={() => setSelectedChallenge(key)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  selectedChallenge === key 
                    ? `border-${challenge.color}-500 bg-${challenge.color}-50` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <challenge.icon className={`h-12 w-12 ${
                  selectedChallenge === key ? `text-${challenge.color}-600` : 'text-gray-400'
                } mb-4`} />
                <h3 className="font-semibold text-gray-900 mb-2">{challenge.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                {selectedChallenge === key && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-green-700">Solution:</p>
                    <p className="text-sm text-green-600">{challenge.solution}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Gen AI in a Box Architecture</h2>
          
          {/* Visual Architecture Stack */}
          <div className="relative">
            <div className="absolute right-4 top-4 bottom-4 w-32 bg-green-100 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ShieldCheckIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <p className="text-sm font-semibold text-green-700">API &</p>
                <p className="text-sm font-semibold text-green-700">Security</p>
                <p className="text-sm font-semibold text-green-700">Layer</p>
              </div>
            </div>
            
            <div className="space-y-4 mr-40">
              {/* KAPS Framework Layer */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedLayer === 'kaps' ? 'border-purple-500 bg-purple-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedLayer('kaps')}
              >
                <h3 className="font-semibold text-gray-900 mb-3">KAPS Framework by Accion Labs</h3>
                <div className="bg-purple-600 text-white rounded p-2 mb-2 text-center text-sm">
                  Business Applications User Interface
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  <div className="bg-purple-500 text-white rounded p-2 text-center text-xs">
                    Knowledge Assistant
                  </div>
                  <div className="bg-purple-500 text-white rounded p-2 text-center text-xs">
                    Generative BI
                  </div>
                  <div className="bg-purple-500 text-white rounded p-2 text-center text-xs">
                    Process Automation
                  </div>
                  <div className="bg-purple-500 text-white rounded p-2 text-center text-xs">
                    OnePane API Hub
                  </div>
                </div>
                <div className="border-2 border-dashed border-red-300 rounded p-2 text-center text-sm text-gray-600">
                  Business Context Graph
                </div>
              </div>

              {/* LLM Infrastructure Layer */}
              <div 
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedLayer === 'llm' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedLayer('llm')}
              >
                <h3 className="font-semibold text-gray-900 mb-3">LLM Infrastructure Layer (ex. NVIDIA Nemo)</h3>
                <div className="grid grid-cols-6 gap-2">
                  <div className="bg-orange-400 text-white rounded p-2 text-center text-xs">
                    Llama
                  </div>
                  <div className="bg-orange-400 text-white rounded p-2 text-center text-xs">
                    Mistral
                  </div>
                  <div className="bg-orange-400 text-white rounded p-2 text-center text-xs">
                    Mixtral
                  </div>
                  <div className="bg-orange-300 rounded p-2 text-center text-xs text-white">
                    DeepSeek
                  </div>
                  <div className="bg-orange-300 rounded p-2 text-center text-xs text-white">
                    Qwen
                  </div>
                  <div className="bg-orange-300 rounded p-2 text-center text-xs text-white">
                    Custom
                  </div>
                </div>
              </div>

              {/* Design Blueprint */}
              <div 
                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                  selectedLayer === 'blueprint' ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedLayer('blueprint')}
              >
                <div className="bg-blue-600 text-white rounded p-2 text-center">
                  Generative AI Design Blueprint
                </div>
              </div>

              {/* Operating System */}
              <div className="bg-orange-400 text-white rounded p-2 text-center">
                Operating System
              </div>

              {/* Hardware Layer */}
              <div 
                className={`grid grid-cols-2 gap-2 cursor-pointer ${
                  selectedLayer === 'infrastructure' ? 'opacity-100' : 'opacity-90'
                }`}
                onClick={() => setSelectedLayer('infrastructure')}
              >
                <div className="bg-blue-600 text-white rounded p-3 text-center">
                  Dell / Lenovo Servers
                </div>
                <div className="bg-orange-400 text-white rounded p-3 text-center">
                  Nvidia GPUs
                </div>
              </div>
            </div>
          </div>

          {/* Layer Details */}
          {selectedLayer && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                {architectureLayers[selectedLayer as keyof typeof architectureLayers].name}
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {architectureLayers[selectedLayer as keyof typeof architectureLayers].components.map((component, index) => (
                  <div key={index} className="text-sm text-gray-600 flex items-center">
                    <CheckCircleIcon className="h-4 w-4 text-green-500 mr-1" />
                    {component.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Overcoming Adoption Barriers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Overcoming Adoption Barriers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionBarriers.map((barrier, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <div className="flex items-center mb-3">
                  <barrier.icon className="h-6 w-6 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">{barrier.title}</h3>
                </div>
                <ul className="space-y-2">
                  {barrier.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-600">
                      • {benefit.split(':')[0]}: <span className="text-gray-500">{benefit.split(':')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Comparison */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Cost Efficiency Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Dell On-Premise vs Public Cloud</h3>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-100">vs Public Cloud IaaS</span>
                  <span className="text-2xl font-bold">{costComparison.savings.iaas}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">vs Token-based API</span>
                  <span className="text-2xl font-bold">{costComparison.savings.api}</span>
                </div>
                <p className="text-xs text-blue-200 mt-3">More cost-effective over 3 years</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Expected Cost for 70B Parameter LLM</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">5k users</span>
                  <div className="flex items-center">
                    <span className="text-green-300 mr-2">On-prem</span>
                    <span className="text-red-300 line-through mr-2">Cloud</span>
                    <span className="text-yellow-300 font-semibold">38% savings</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-100">50k users</span>
                  <div className="flex items-center">
                    <span className="text-green-300 mr-2">On-prem</span>
                    <span className="text-red-300 line-through mr-2">Cloud</span>
                    <span className="text-yellow-300 font-semibold">75% savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLMs in the Box */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Small Language Models (SLMs) in the Box</h2>
          <p className="text-gray-600 mb-6">
            Optimized AI models with fewer parameters designed for efficiency, faster inference, 
            cost-effectiveness, and domain-specific fine-tuning.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Why Use SLMs?</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <BoltIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Optimized Performance</p>
                    <p className="text-sm text-gray-600">Works well on-premise or edge devices</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Security & Compliance</p>
                    <p className="text-sm text-gray-600">Can be deployed in controlled environments</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CogIcon className="h-5 w-5 text-purple-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Customization & Control</p>
                    <p className="text-sm text-gray-600">More adaptable for business-specific tasks</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="h-5 w-5 text-orange-500 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Scalability</p>
                    <p className="text-sm text-gray-600">Ideal for enterprises without massive infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Available Models</h3>
              <div className="grid grid-cols-2 gap-3">
                {slmModels.map((model, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                    <p className="text-sm font-medium text-gray-900">{model}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Journey */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Implementation Journey</h2>
          <p className="text-gray-600 mb-6">
            Accelerate GenAI outcomes and ensure long-term success with help at every stage
          </p>
          
          <div className="flex justify-center">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/diagrams/genai-implementation-journey.svg`}
              alt="GenAI Implementation Journey"
              className="w-full max-w-6xl h-auto"
            />
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
            <p className="text-sm font-semibold text-blue-900">
              Simplify your AI journey with Accion and Partner Technologies
            </p>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">
              The Generative AI in a Box concept not only resolves the most critical adoption challenges but also aims 
              to revolutionize the integration of generative AI across every aspect of the ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAIInABox;