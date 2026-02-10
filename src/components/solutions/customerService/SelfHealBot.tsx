import React, { useState } from 'react';
import {
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  BoltIcon,
  UserIcon,
  CpuChipIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  MicrophoneIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const SelfHealBot: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedFeature, setSelectedFeature] = useState<string>('chatbot');

  const featureKeys = ['chatbot', 'personalization', 'automation', 'multilingual'] as const;
  const capabilityKeysMap: Record<string, string[]> = {
    chatbot: ['nlu', 'context', 'multiTurn', 'intent', 'dynamic'],
    personalization: ['profileTracking', 'preferenceLearning', 'roleBasedCustomization', 'contextRetention', 'personalizedRecs'],
    automation: ['ticketCreation', 'proactiveNotification', 'followUp', 'statusUpdate', 'resolution'],
    multilingual: ['langDetection', 'neuralTranslation', 'culturalContext', 'multilingualKb', 'crossLangEntity']
  };
  const metricKeysMap: Record<string, string[]> = {
    chatbot: ['responseTime', 'resolutionRate', 'userSatisfaction'],
    personalization: ['personalizationAccuracy', 'contextRetention', 'userEngagement'],
    automation: ['automationRate', 'timeSaved', 'errorReduction'],
    multilingual: ['languagesSupported', 'translationAccuracy', 'globalCoverage']
  };
  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    chatbot: ChatBubbleBottomCenterTextIcon,
    personalization: UserIcon,
    automation: BoltIcon,
    multilingual: GlobeAltIcon
  };
  const colorMap: Record<string, string> = {
    chatbot: 'blue',
    personalization: 'purple',
    automation: 'green',
    multilingual: 'orange'
  };
  const techMap: Record<string, string[]> = {
    chatbot: ['GPT-4', 'LangChain', 'spaCy NLP', 'Rasa Framework'],
    personalization: ['Vector DB', 'Redis Cache', 'User Analytics Engine', 'ML Personalization'],
    automation: ['Workflow Engine', 'Event Triggers', 'Notification Service', 'Template Engine'],
    multilingual: ['Google Translate API', 'Azure Translator', 'Polyglot NLP', 'Language Models']
  };

  const features = Object.fromEntries(featureKeys.map(key => [key, {
    name: t(`customerService.selfHealBot.capabilities.${key}.name`),
    description: t(`customerService.selfHealBot.capabilities.${key}.description`),
    icon: iconMap[key],
    color: colorMap[key],
    capabilities: capabilityKeysMap[key].map(capKey => t(`customerService.selfHealBot.capabilities.${key}.capabilities.${capKey}`)),
    technologies: techMap[key],
    metrics: Object.fromEntries(metricKeysMap[key].map(mKey => [
      t(`customerService.selfHealBot.capabilities.${key}.metrics.${mKey}`),
      t(`customerService.selfHealBot.capabilities.${key}.metrics.${mKey}Value`)
    ]))
  }]));

  const useCaseKeys = ['passwordReset', 'accountUpdate', 'serviceStatus'] as const;
  const useCases = useCaseKeys.map(key => ({
    title: t(`customerService.selfHealBot.useCases.${key}.title`),
    channel: t(`customerService.selfHealBot.useCases.${key}.channel`),
    steps: ['step1', 'step2', 'step3', 'step4'].map(s => t(`customerService.selfHealBot.useCases.${key}.steps.${s}`)),
    resolution: t(`customerService.selfHealBot.useCases.${key}.resolution`),
    satisfaction: t(`customerService.selfHealBot.useCases.${key}.satisfaction`)
  }));

  const channelKeys = ['webChat', 'mobileApp', 'email', 'voice'] as const;
  const channelIconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    webChat: ChatBubbleBottomCenterTextIcon,
    mobileApp: DevicePhoneMobileIcon,
    email: EnvelopeIcon,
    voice: MicrophoneIcon
  };
  const channels = channelKeys.map(key => ({
    name: t(`customerService.selfHealBot.channels.${key}.name`),
    icon: channelIconMap[key],
    status: t(`customerService.selfHealBot.channels.${key}.status`),
    volume: t(`customerService.selfHealBot.channels.${key}.volume`)
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-secondary-light text-secondary rounded-full text-xs font-semibold mb-4">
            {t('customerService.selfHealBot.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('customerService.selfHealBot.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('customerService.selfHealBot.header.description')}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">60%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.selfHealBot.metrics.autoResolution')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ClockIcon className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold text-gray-900">&lt;1s</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.selfHealBot.metrics.responseTime')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <GlobeAltIcon className="h-8 w-8 text-brand-purple-600" />
              <span className="text-2xl font-bold text-gray-900">50+</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.selfHealBot.metrics.languages')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-warning" />
              <span className="text-2xl font-bold text-gray-900">4.7/5</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.selfHealBot.metrics.satisfaction')}</p>
          </div>
        </div>

        {/* Core Features */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.selfHealBot.capabilities.title')}</h2>

          {/* Feature Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setSelectedFeature(key)}
                className={`pb-3 px-1 border-b-2 transition-colors flex items-center ${
                  selectedFeature === key
                    ? 'border-secondary text-secondary'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <feature.icon className="h-5 w-5 mr-2" />
                <span className="font-medium">{feature.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Feature Details */}
          {selectedFeature && (
            <div>
              {Object.entries(features).filter(([key]) => key === selectedFeature).map(([key, feature]) => (
                <div key={key}>
                  <div className="flex items-center mb-4">
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.selfHealBot.capabilities.capabilitiesLabel')}</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.selfHealBot.capabilities.technologies')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {feature.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.selfHealBot.capabilities.performance')}</h4>
                      <div className="space-y-2">
                        {Object.entries(feature.metrics).map(([metric, value]) => (
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

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.selfHealBot.useCases.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{useCase.title}</h3>
                  <span className="text-xs bg-secondary-light text-secondary px-2 py-1 rounded">
                    {useCase.channel}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  {useCase.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-xs text-secondary mr-2 mt-0.5">{idx + 1}.</span>
                      <span className="text-xs text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">{t('customerService.selfHealBot.useCases.resolution')}</span>
                    <span className="text-green-600 font-semibold">{useCase.resolution}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500">{t('customerService.selfHealBot.useCases.satisfaction')}</span>
                    <span className="text-gray-900 font-semibold">{useCase.satisfaction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.selfHealBot.channels.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-secondary-light rounded-full flex items-center justify-center mx-auto mb-3">
                  <channel.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{channel.name}</h3>
                <p className="text-xs text-gray-600 mb-2">{t('customerService.selfHealBot.channels.status')} {channel.status}</p>
                <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-secondary h-full"
                    style={{ width: channel.volume }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{channel.volume} {t('customerService.selfHealBot.channels.ofVolume')}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-innovation-gradient rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.selfHealBot.architecture.title')}</h2>
          <div className="bg-white rounded-lg p-6">
            <div className="space-y-4">
              {/* Input Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-secondary-light rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.selfHealBot.architecture.inputLayer.title')}</h3>
                  <p className="text-xs text-gray-600">{t('customerService.selfHealBot.architecture.inputLayer.description')}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>

              {/* Processing Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-brand-purple-100 rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.selfHealBot.architecture.nlpProcessing.title')}</h3>
                  <p className="text-xs text-gray-600">{t('customerService.selfHealBot.architecture.nlpProcessing.description')}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>

              {/* Resolution Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-success-light rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.selfHealBot.architecture.automatedResolution.title')}</h3>
                  <p className="text-xs text-gray-600">{t('customerService.selfHealBot.architecture.automatedResolution.description')}</p>
                </div>
              </div>

              <div className="flex justify-center">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>

              {/* Output Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-warning-light rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.selfHealBot.architecture.responseDelivery.title')}</h3>
                  <p className="text-xs text-gray-600">{t('customerService.selfHealBot.architecture.responseDelivery.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfHealBot;
