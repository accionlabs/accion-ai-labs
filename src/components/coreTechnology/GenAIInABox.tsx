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
import { useTranslation } from 'react-i18next';

const GenAIInABox: React.FC = () => {
  const { t, i18n } = useTranslation('coreTechnology');
  const svgSuffix = i18n.language.startsWith('ja') ? '-ja' : '';
  const [selectedLayer, setSelectedLayer] = useState<string>('kaps');
  const [selectedChallenge, setSelectedChallenge] = useState<string>('security');

  const challenges = {
    security: {
      name: t('genAIBox.challenges.security.name'),
      icon: LockClosedIcon,
      color: 'purple',
      description: t('genAIBox.challenges.security.description'),
      solution: t('genAIBox.challenges.security.solution')
    },
    performance: {
      name: t('genAIBox.challenges.performance.name'),
      icon: BoltIcon,
      color: 'green',
      description: t('genAIBox.challenges.performance.description'),
      solution: t('genAIBox.challenges.performance.solution')
    },
    cost: {
      name: t('genAIBox.challenges.cost.name'),
      icon: CurrencyDollarIcon,
      color: 'orange',
      description: t('genAIBox.challenges.cost.description'),
      solution: t('genAIBox.challenges.cost.solution')
    }
  };

  const architectureLayers = {
    kaps: {
      name: t('genAIBox.architecture.kapsFramework'),
      color: 'purple',
      components: [
        { name: t('genAIBox.architecture.businessAppUI'), type: 'interface' },
        { name: t('genAIBox.architecture.knowledgeAssistant'), type: 'app' },
        { name: t('genAIBox.architecture.generativeBI'), type: 'app' },
        { name: t('genAIBox.architecture.processAutomation'), type: 'app' },
        { name: t('genAIBox.architecture.onePaneAPIHub'), type: 'app' },
        { name: t('genAIBox.architecture.businessContextGraph'), type: 'data' }
      ]
    },
    llm: {
      name: t('genAIBox.architecture.llmInfrastructureLayer'),
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
      name: t('genAIBox.architecture.generativeAIDesignBlueprint'),
      color: 'blue',
      components: [
        { name: t('genAIBox.architecture.blueprintComponents.modelArchitecture'), type: 'design' },
        { name: t('genAIBox.architecture.blueprintComponents.trainingPipeline'), type: 'design' },
        { name: t('genAIBox.architecture.blueprintComponents.inferenceOptimization'), type: 'design' },
        { name: t('genAIBox.architecture.blueprintComponents.deploymentPatterns'), type: 'design' }
      ]
    },
    infrastructure: {
      name: t('genAIBox.architecture.hardwareInfrastructure'),
      color: 'green',
      components: [
        { name: t('genAIBox.architecture.dellLenovoServers'), type: 'hardware' },
        { name: t('genAIBox.architecture.nvidiaGPUs'), type: 'hardware' },
        { name: t('genAIBox.architecture.operatingSystem'), type: 'system' },
        { name: t('genAIBox.architecture.containerOrchestration'), type: 'system' }
      ]
    }
  };

  const adoptionBarriers = [
    {
      title: t('genAIBox.adoptionBarriers.costEfficiency.title'),
      icon: CurrencyDollarIcon,
      benefits: t('genAIBox.adoptionBarriers.costEfficiency.benefits', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.adoptionBarriers.accuracy.title'),
      icon: ChartBarIcon,
      benefits: t('genAIBox.adoptionBarriers.accuracy.benefits', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.adoptionBarriers.security.title'),
      icon: ShieldCheckIcon,
      benefits: t('genAIBox.adoptionBarriers.security.benefits', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.adoptionBarriers.accelerators.title'),
      icon: RocketLaunchIcon,
      benefits: t('genAIBox.adoptionBarriers.accelerators.benefits', { returnObjects: true }) as unknown as string[]
    }
  ];

  const businessBenefits = [
    {
      title: t('genAIBox.businessBenefits.acceleratedTimeToMarket.title'),
      items: t('genAIBox.businessBenefits.acceleratedTimeToMarket.items', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.businessBenefits.strategicAdoption.title'),
      items: t('genAIBox.businessBenefits.strategicAdoption.items', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.businessBenefits.dataSecurity.title'),
      items: t('genAIBox.businessBenefits.dataSecurity.items', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.businessBenefits.customization.title'),
      items: t('genAIBox.businessBenefits.customization.items', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.businessBenefits.lowLatency.title'),
      items: t('genAIBox.businessBenefits.lowLatency.items', { returnObjects: true }) as unknown as string[]
    },
    {
      title: t('genAIBox.businessBenefits.finetunedLLM.title'),
      items: t('genAIBox.businessBenefits.finetunedLLM.items', { returnObjects: true }) as unknown as string[]
    }
  ];

  const slmModels = [
    'Llama', 'Mistral', 'DeepSeek', 'Qwen', 'NVIDIA NeMo', 'Domain-Specific Models'
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
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-4">
            {t('genAIBox.header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('genAIBox.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('genAIBox.header.description')}
          </p>
        </div>

        {/* Top 3 Challenges */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('genAIBox.challenges.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('genAIBox.challenges.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(challenges).map(([key, challenge]) => (
              <button
                key={key}
                onClick={() => setSelectedChallenge(key)}
                className={`p-6 rounded-lg border-2 transition-all text-left ${
                  selectedChallenge === key
                    ? (challenge.color === 'purple' ? 'border-brand-purple-500 bg-brand-purple-50' :
                       challenge.color === 'green' ? 'border-success bg-success/10' :
                       challenge.color === 'orange' ? 'border-warning bg-warning/10' : 'border-secondary bg-secondary/10')
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <challenge.icon className={`h-12 w-12 ${
                  selectedChallenge === key
                    ? (challenge.color === 'purple' ? 'text-brand-purple-600' :
                       challenge.color === 'green' ? 'text-success' :
                       challenge.color === 'orange' ? 'text-warning' : 'text-secondary')
                    : 'text-gray-400'
                } mb-4`} />
                <h3 className="font-semibold text-gray-900 mb-2">{challenge.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                {selectedChallenge === key && (
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <p className="text-sm font-semibold text-success">{t('genAIBox.challenges.solutionLabel')}</p>
                    <p className="text-sm text-success">{challenge.solution}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('genAIBox.architecture.title')}</h2>

          {/* Visual Architecture Stack */}
          <div className="relative">
            <div className="absolute right-4 top-4 bottom-4 w-32 bg-success/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <ShieldCheckIcon className="h-8 w-8 text-success mx-auto mb-2" />
                <p className="text-sm font-semibold text-success">{t('genAIBox.architecture.apiSecurityLayer')}</p>
                <p className="text-sm font-semibold text-success">{t('genAIBox.architecture.securityLabel')}</p>
                <p className="text-sm font-semibold text-success">{t('genAIBox.architecture.layerLabel')}</p>
              </div>
            </div>

            <div className="space-y-4 mr-40">
              {/* KAPS Framework Layer */}
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedLayer === 'kaps' ? 'border-brand-purple-500 bg-brand-purple-50' : 'border-gray-200'
                }`}
                onClick={() => setSelectedLayer('kaps')}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{t('genAIBox.architecture.kapsFramework')}</h3>
                <div className="bg-brand-purple-600 text-white rounded p-2 mb-2 text-center text-sm">
                  {t('genAIBox.architecture.businessAppUI')}
                </div>
                <div className="grid grid-cols-4 gap-2 mb-2">
                  <div className="bg-brand-purple-500 text-white rounded p-2 text-center text-xs">
                    {t('genAIBox.architecture.knowledgeAssistant')}
                  </div>
                  <div className="bg-brand-purple-500 text-white rounded p-2 text-center text-xs">
                    {t('genAIBox.architecture.generativeBI')}
                  </div>
                  <div className="bg-brand-purple-500 text-white rounded p-2 text-center text-xs">
                    {t('genAIBox.architecture.processAutomation')}
                  </div>
                  <div className="bg-brand-purple-500 text-white rounded p-2 text-center text-xs">
                    {t('genAIBox.architecture.onePaneAPIHub')}
                  </div>
                </div>
                <div className="border-2 border-dashed border-red-300 rounded p-2 text-center text-sm text-gray-600">
                  {t('genAIBox.architecture.businessContextGraph')}
                </div>
              </div>

              {/* LLM Infrastructure Layer */}
              <div
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedLayer === 'llm' ? 'border-warning bg-warning/10' : 'border-gray-200'
                }`}
                onClick={() => setSelectedLayer('llm')}
              >
                <h3 className="font-semibold text-gray-900 mb-3">{t('genAIBox.architecture.llmInfrastructureLayer')}</h3>
                <div className="grid grid-cols-6 gap-2">
                  <div className="bg-warning text-white rounded p-2 text-center text-xs">
                    Llama
                  </div>
                  <div className="bg-warning text-white rounded p-2 text-center text-xs">
                    Mistral
                  </div>
                  <div className="bg-warning text-white rounded p-2 text-center text-xs">
                    Mixtral
                  </div>
                  <div className="bg-warning/80 rounded p-2 text-center text-xs text-white">
                    DeepSeek
                  </div>
                  <div className="bg-warning/80 rounded p-2 text-center text-xs text-white">
                    Qwen
                  </div>
                  <div className="bg-warning/80 rounded p-2 text-center text-xs text-white">
                    {t('genAIBox.architecture.custom')}
                  </div>
                </div>
              </div>

              {/* Design Blueprint */}
              <div
                className={`border-2 rounded-lg p-3 cursor-pointer transition-all ${
                  selectedLayer === 'blueprint' ? 'border-secondary bg-secondary/10' : 'border-gray-200'
                }`}
                onClick={() => setSelectedLayer('blueprint')}
              >
                <div className="bg-secondary text-white rounded p-2 text-center">
                  {t('genAIBox.architecture.generativeAIDesignBlueprint')}
                </div>
              </div>

              {/* Operating System */}
              <div className="bg-warning text-white rounded p-2 text-center">
                {t('genAIBox.architecture.operatingSystem')}
              </div>

              {/* Hardware Layer */}
              <div
                className={`grid grid-cols-2 gap-2 cursor-pointer ${
                  selectedLayer === 'infrastructure' ? 'opacity-100' : 'opacity-90'
                }`}
                onClick={() => setSelectedLayer('infrastructure')}
              >
                <div className="bg-secondary text-white rounded p-3 text-center">
                  {t('genAIBox.architecture.dellLenovoServers')}
                </div>
                <div className="bg-warning text-white rounded p-3 text-center">
                  {t('genAIBox.architecture.nvidiaGPUs')}
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
                    <CheckCircleIcon className="h-4 w-4 text-success mr-1" />
                    {component.name}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Overcoming Adoption Barriers */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('genAIBox.adoptionBarriers.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {adoptionBarriers.map((barrier, index) => (
              <div key={index} className="border-l-4 border-secondary pl-4">
                <div className="flex items-center mb-3">
                  <barrier.icon className="h-6 w-6 text-secondary mr-2" />
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
        <div className="bg-gradient-to-r from-secondary to-brand-blue-800 text-white rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">{t('genAIBox.costComparison.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('genAIBox.costComparison.dellVsCloud')}</h3>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white/80">{t('genAIBox.costComparison.vsPublicCloudIaaS')}</span>
                  <span className="text-2xl font-bold">{costComparison.savings.iaas}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{t('genAIBox.costComparison.vsTokenBasedAPI')}</span>
                  <span className="text-2xl font-bold">{costComparison.savings.api}</span>
                </div>
                <p className="text-xs text-white/70 mt-3">{t('genAIBox.costComparison.moreCostEffective')}</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">{t('genAIBox.costComparison.expectedCost')}</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{t('genAIBox.costComparison.users5k')}</span>
                  <div className="flex items-center">
                    <span className="text-white/90 mr-2">{t('genAIBox.costComparison.onPrem')}</span>
                    <span className="text-red-300 line-through mr-2">{t('genAIBox.costComparison.cloud')}</span>
                    <span className="text-yellow-300 font-semibold">{t('genAIBox.costComparison.savings38')}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/80">{t('genAIBox.costComparison.users50k')}</span>
                  <div className="flex items-center">
                    <span className="text-white/90 mr-2">{t('genAIBox.costComparison.onPrem')}</span>
                    <span className="text-red-300 line-through mr-2">{t('genAIBox.costComparison.cloud')}</span>
                    <span className="text-yellow-300 font-semibold">{t('genAIBox.costComparison.savings75')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SLMs in the Box */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('genAIBox.slms.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('genAIBox.slms.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{t('genAIBox.slms.whyUseSLMs')}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <BoltIcon className="h-5 w-5 text-success mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{t('genAIBox.slms.optimizedPerformance.title')}</p>
                    <p className="text-sm text-gray-600">{t('genAIBox.slms.optimizedPerformance.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ShieldCheckIcon className="h-5 w-5 text-secondary mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{t('genAIBox.slms.securityCompliance.title')}</p>
                    <p className="text-sm text-gray-600">{t('genAIBox.slms.securityCompliance.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CogIcon className="h-5 w-5 text-brand-purple-600 mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{t('genAIBox.slms.customizationControl.title')}</p>
                    <p className="text-sm text-gray-600">{t('genAIBox.slms.customizationControl.description')}</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ChartBarIcon className="h-5 w-5 text-warning mr-2 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">{t('genAIBox.slms.scalability.title')}</p>
                    <p className="text-sm text-gray-600">{t('genAIBox.slms.scalability.description')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">{t('genAIBox.slms.availableModels')}</h3>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('genAIBox.implementationJourney.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('genAIBox.implementationJourney.description')}
          </p>

          <div className="flex justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/assets/diagrams/genai-implementation-journey${svgSuffix}.svg`}
              alt="GenAI Implementation Journey"
              className="w-full max-w-6xl h-auto"
            />
          </div>

          <div className="mt-6 p-4 bg-secondary/10 rounded-lg text-center">
            <p className="text-sm font-semibold text-secondary">
              {t('genAIBox.implementationJourney.simplify')}
            </p>
          </div>
        </div>

        {/* Business Benefits */}
        <div className="bg-gradient-to-r from-brand-purple-50 to-brand-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('genAIBox.businessBenefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessBenefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircleIcon className="h-4 w-4 text-success mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center p-4 bg-white rounded-lg">
            <p className="text-sm text-gray-600">
              {t('genAIBox.businessBenefits.closingStatement')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAIInABox;
