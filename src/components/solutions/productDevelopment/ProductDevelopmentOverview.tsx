import React from 'react';
import { Link } from 'react-router-dom';
import {
  RocketLaunchIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  BeakerIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ProductDevelopmentOverview: React.FC = () => {
  const { t } = useTranslation('solutions');
  const valueMetrics = [
    { metric: t('productDevelopment.overview.metrics.fasterTime.metric'), label: t('productDevelopment.overview.metrics.fasterTime.label'), description: t('productDevelopment.overview.metrics.fasterTime.description') },
    { metric: t('productDevelopment.overview.metrics.reducedAmbiguity.metric'), label: t('productDevelopment.overview.metrics.reducedAmbiguity.label'), description: t('productDevelopment.overview.metrics.reducedAmbiguity.description') },
    { metric: t('productDevelopment.overview.metrics.fewerDefects.metric'), label: t('productDevelopment.overview.metrics.fewerDefects.label'), description: t('productDevelopment.overview.metrics.fewerDefects.description') },
    { metric: t('productDevelopment.overview.metrics.higherVelocity.metric'), label: t('productDevelopment.overview.metrics.higherVelocity.label'), description: t('productDevelopment.overview.metrics.higherVelocity.description') }
  ];

  const coreCapabilities = [
    {
      icon: DocumentTextIcon,
      title: t('productDevelopment.overview.capabilities.semanticExtraction.title'),
      description: t('productDevelopment.overview.capabilities.semanticExtraction.description'),
      features: t('productDevelopment.overview.capabilities.semanticExtraction.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: UserGroupIcon,
      title: t('productDevelopment.overview.capabilities.stakeholderValidation.title'),
      description: t('productDevelopment.overview.capabilities.stakeholderValidation.description'),
      features: t('productDevelopment.overview.capabilities.stakeholderValidation.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: CodeBracketIcon,
      title: t('productDevelopment.overview.capabilities.artifactGeneration.title'),
      description: t('productDevelopment.overview.capabilities.artifactGeneration.description'),
      features: t('productDevelopment.overview.capabilities.artifactGeneration.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: BoltIcon,
      title: t('productDevelopment.overview.capabilities.sprintValidation.title'),
      description: t('productDevelopment.overview.capabilities.sprintValidation.description'),
      features: t('productDevelopment.overview.capabilities.sprintValidation.features', { returnObjects: true }) as unknown as string[]
    }
  ];

  const agentEcosystem = {
    extraction: [
      t('productDevelopment.overview.agentEcosystem.extractionAgents.agent1'),
      t('productDevelopment.overview.agentEcosystem.extractionAgents.agent2'),
      t('productDevelopment.overview.agentEcosystem.extractionAgents.agent3'),
      t('productDevelopment.overview.agentEcosystem.extractionAgents.agent4')
    ],
    validation: [
      t('productDevelopment.overview.agentEcosystem.validationAgents.agent1'),
      t('productDevelopment.overview.agentEcosystem.validationAgents.agent2'),
      t('productDevelopment.overview.agentEcosystem.validationAgents.agent3'),
      t('productDevelopment.overview.agentEcosystem.validationAgents.agent4')
    ],
    implementation: [
      t('productDevelopment.overview.agentEcosystem.implementationAgents.agent1'),
      t('productDevelopment.overview.agentEcosystem.implementationAgents.agent2'),
      t('productDevelopment.overview.agentEcosystem.implementationAgents.agent3'),
      t('productDevelopment.overview.agentEcosystem.implementationAgents.agent4')
    ],
    continuous: [
      t('productDevelopment.overview.agentEcosystem.continuousAgents.agent1'),
      t('productDevelopment.overview.agentEcosystem.continuousAgents.agent2'),
      t('productDevelopment.overview.agentEcosystem.continuousAgents.agent3'),
      t('productDevelopment.overview.agentEcosystem.continuousAgents.agent4')
    ]
  };

  const navigationLinks = [
    {
      path: '/solutions/product-development/extraction',
      label: t('productDevelopment.overview.nav.extraction.label'),
      icon: SparklesIcon,
      description: t('productDevelopment.overview.nav.extraction.description')
    },
    {
      path: '/solutions/product-development/validation',
      label: t('productDevelopment.overview.nav.validation.label'),
      icon: UserGroupIcon,
      description: t('productDevelopment.overview.nav.validation.description')
    },
    {
      path: '/solutions/product-development/implementation',
      label: t('productDevelopment.overview.nav.implementation.label'),
      icon: CodeBracketIcon,
      description: t('productDevelopment.overview.nav.implementation.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <RocketLaunchIcon className="h-10 w-10 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">{t('productDevelopment.overview.header.title')}</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                {t('productDevelopment.overview.header.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {valueMetrics.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-green-600 mb-2">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Problem */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDevelopment.overview.challenge.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('productDevelopment.overview.challenge.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <ClockIcon className="h-6 w-6 text-orange-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">{t('productDevelopment.overview.challenge.delays.title')}</p>
              <p className="text-xs text-gray-600">{t('productDevelopment.overview.challenge.delays.description')}</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <ShieldCheckIcon className="h-6 w-6 text-red-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">{t('productDevelopment.overview.challenge.lostInTranslation.title')}</p>
              <p className="text-xs text-gray-600">{t('productDevelopment.overview.challenge.lostInTranslation.description')}</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-orange-100">
              <BeakerIcon className="h-6 w-6 text-purple-600 mb-2" />
              <p className="text-sm font-semibold text-gray-900">{t('productDevelopment.overview.challenge.technicalDebt.title')}</p>
              <p className="text-xs text-gray-600">{t('productDevelopment.overview.challenge.technicalDebt.description')}</p>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDevelopment.overview.capabilities.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-green-600 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{capability.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{capability.description}</p>
                      <ul className="space-y-2">
                        {capability.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-700">
                            <CheckCircleIcon className="h-4 w-4 text-success mr-2 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDevelopment.overview.workflow.title')}</h2>
          <div className="space-y-6">
            {/* Phase 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('productDevelopment.overview.workflow.step1.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('productDevelopment.overview.workflow.step1.description')}
                </p>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-purple-600">2</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('productDevelopment.overview.workflow.step2.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('productDevelopment.overview.workflow.step2.description')}
                </p>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-green-600">3</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('productDevelopment.overview.workflow.step3.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('productDevelopment.overview.workflow.step3.description')}
                </p>
              </div>
            </div>

            {/* Phase 4 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-bold text-orange-600">4</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('productDevelopment.overview.workflow.step4.title')}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t('productDevelopment.overview.workflow.step4.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('productDevelopment.overview.agentEcosystem.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.overview.agentEcosystem.extraction')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.extraction.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.overview.agentEcosystem.validation')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.validation.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.overview.agentEcosystem.implementation')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.implementation.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.overview.agentEcosystem.continuous')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {agentEcosystem.continuous.map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDevelopment.overview.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('productDevelopment.overview.benefits.speedQuality.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('productDevelopment.overview.benefits.speedQuality.tdd')}</strong> {t('productDevelopment.overview.benefits.speedQuality.tddDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('productDevelopment.overview.benefits.speedQuality.parallel')}</strong> {t('productDevelopment.overview.benefits.speedQuality.parallelDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('productDevelopment.overview.benefits.speedQuality.faster')}</strong> {t('productDevelopment.overview.benefits.speedQuality.fasterDesc')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('productDevelopment.overview.benefits.preventDebt.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('productDevelopment.overview.benefits.preventDebt.continuous')}</strong> {t('productDevelopment.overview.benefits.preventDebt.continuousDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('productDevelopment.overview.benefits.preventDebt.singleSource')}</strong> {t('productDevelopment.overview.benefits.preventDebt.singleSourceDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('productDevelopment.overview.benefits.preventDebt.automated')}</strong> {t('productDevelopment.overview.benefits.preventDebt.automatedDesc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {navigationLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                to={link.path}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <Icon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.label}</h3>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                <div className="flex items-center text-green-600 text-sm">
                  <span>{t('productDevelopment.overview.nav.explore')}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDevelopmentOverview;
