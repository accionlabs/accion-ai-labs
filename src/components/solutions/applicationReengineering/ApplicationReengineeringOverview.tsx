import React from 'react';
import { Link } from 'react-router-dom';
import {
  WrenchScrewdriverIcon,
  SparklesIcon,
  UserGroupIcon,
  CodeBracketIcon,
  CheckCircleIcon,
  ArrowRightIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ExclamationTriangleIcon,
  ServerIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ApplicationReengineeringOverview: React.FC = () => {
  const { t } = useTranslation('solutions');
  const valueMetrics = [
    { metric: t('appReengineering.overview.metrics.fasterModernization.metric'), label: t('appReengineering.overview.metrics.fasterModernization.label'), description: t('appReengineering.overview.metrics.fasterModernization.description') },
    { metric: t('appReengineering.overview.metrics.costReduction.metric'), label: t('appReengineering.overview.metrics.costReduction.label'), description: t('appReengineering.overview.metrics.costReduction.description') },
    { metric: t('appReengineering.overview.metrics.fewerDefects.metric'), label: t('appReengineering.overview.metrics.fewerDefects.label'), description: t('appReengineering.overview.metrics.fewerDefects.description') },
    { metric: t('appReengineering.overview.metrics.zeroDowntime.metric'), label: t('appReengineering.overview.metrics.zeroDowntime.label'), description: t('appReengineering.overview.metrics.zeroDowntime.description') }
  ];

  const coreCapabilities = [
    {
      icon: SparklesIcon,
      title: t('appReengineering.overview.capabilities.discovery.title'),
      description: t('appReengineering.overview.capabilities.discovery.description'),
      features: t('appReengineering.overview.capabilities.discovery.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: UserGroupIcon,
      title: t('appReengineering.overview.capabilities.strategy.title'),
      description: t('appReengineering.overview.capabilities.strategy.description'),
      features: t('appReengineering.overview.capabilities.strategy.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: CodeBracketIcon,
      title: t('appReengineering.overview.capabilities.implementation.title'),
      description: t('appReengineering.overview.capabilities.implementation.description'),
      features: t('appReengineering.overview.capabilities.implementation.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: ArrowPathIcon,
      title: t('appReengineering.overview.capabilities.validation.title'),
      description: t('appReengineering.overview.capabilities.validation.description'),
      features: t('appReengineering.overview.capabilities.validation.features', { returnObjects: true }) as unknown as string[]
    }
  ];

  const reengineeringJourney = [
    {
      phase: t('appReengineering.overview.journey.phases.discovery.phase'),
      duration: t('appReengineering.overview.journey.phases.discovery.duration'),
      description: t('appReengineering.overview.journey.phases.discovery.description'),
      activities: t('appReengineering.overview.journey.phases.discovery.activities', { returnObjects: true }) as unknown as string[]
    },
    {
      phase: t('appReengineering.overview.journey.phases.strategy.phase'),
      duration: t('appReengineering.overview.journey.phases.strategy.duration'),
      description: t('appReengineering.overview.journey.phases.strategy.description'),
      activities: t('appReengineering.overview.journey.phases.strategy.activities', { returnObjects: true }) as unknown as string[]
    },
    {
      phase: t('appReengineering.overview.journey.phases.implementation.phase'),
      duration: t('appReengineering.overview.journey.phases.implementation.duration'),
      description: t('appReengineering.overview.journey.phases.implementation.description'),
      activities: t('appReengineering.overview.journey.phases.implementation.activities', { returnObjects: true }) as unknown as string[]
    },
    {
      phase: t('appReengineering.overview.journey.phases.continuous.phase'),
      duration: t('appReengineering.overview.journey.phases.continuous.duration'),
      description: t('appReengineering.overview.journey.phases.continuous.description'),
      activities: t('appReengineering.overview.journey.phases.continuous.activities', { returnObjects: true }) as unknown as string[]
    }
  ];

  const navigationLinks = [
    {
      path: '/solutions/application-reengineering/discovery',
      label: t('appReengineering.overview.nav.discovery.label'),
      icon: SparklesIcon,
      description: t('appReengineering.overview.nav.discovery.description')
    },
    {
      path: '/solutions/application-reengineering/strategy',
      label: t('appReengineering.overview.nav.strategy.label'),
      icon: UserGroupIcon,
      description: t('appReengineering.overview.nav.strategy.description')
    },
    {
      path: '/solutions/application-reengineering/implementation',
      label: t('appReengineering.overview.nav.implementation.label'),
      icon: CodeBracketIcon,
      description: t('appReengineering.overview.nav.implementation.description')
    },
    {
      path: '/solutions/application-reengineering/validation',
      label: t('appReengineering.overview.nav.validation.label'),
      icon: ShieldCheckIcon,
      description: t('appReengineering.overview.nav.validation.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <WrenchScrewdriverIcon className="h-10 w-10 text-orange-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">{t('appReengineering.overview.header.title')}</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                {t('appReengineering.overview.header.description')}
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
              <p className="text-3xl font-bold text-orange-600 mb-2">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* The Challenge */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-orange-200 p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('appReengineering.overview.challenge.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('appReengineering.overview.challenge.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <CurrencyDollarIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('appReengineering.overview.challenge.annualSpend.title')}</p>
                  <p className="text-xs text-gray-600">{t('appReengineering.overview.challenge.annualSpend.description')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <ClockIcon className="h-6 w-6 text-red-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('appReengineering.overview.challenge.slower.title')}</p>
                  <p className="text-xs text-gray-600">{t('appReengineering.overview.challenge.slower.description')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <ServerIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('appReengineering.overview.challenge.timeSpent.title')}</p>
                  <p className="text-xs text-gray-600">{t('appReengineering.overview.challenge.timeSpent.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.overview.capabilities.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
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

        {/* Re-engineering Journey */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.overview.journey.title')}</h2>
          <div className="relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-300"></div>
            {reengineeringJourney.map((phase, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="absolute left-8 w-4 h-4 bg-orange-600 rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-orange-600 font-medium">{phase.duration}</p>
                      </div>
                      <BoltIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                    <div className="grid grid-cols-2 gap-2">
                      {phase.activities.map((activity, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <CheckCircleIcon className="h-3 w-3 text-orange-600 mr-1" />
                          {activity}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Teaser */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.overview.caseStudy.title')}</h2>
          <p className="text-sm text-gray-700 mb-4">
            {t('appReengineering.overview.caseStudy.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-orange-600">{t('appReengineering.overview.caseStudy.criticalIssues.value')}</p>
              <p className="text-sm font-semibold text-gray-900">{t('appReengineering.overview.caseStudy.criticalIssues.label')}</p>
              <p className="text-xs text-gray-600">{t('appReengineering.overview.caseStudy.criticalIssues.description')}</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-green-600">{t('appReengineering.overview.caseStudy.maintenanceCost.value')}</p>
              <p className="text-sm font-semibold text-gray-900">{t('appReengineering.overview.caseStudy.maintenanceCost.label')}</p>
              <p className="text-xs text-gray-600">{t('appReengineering.overview.caseStudy.maintenanceCost.description')}</p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="text-2xl font-bold text-blue-600">{t('appReengineering.overview.caseStudy.fasterDelivery.value')}</p>
              <p className="text-sm font-semibold text-gray-900">{t('appReengineering.overview.caseStudy.fasterDelivery.label')}</p>
              <p className="text-xs text-gray-600">{t('appReengineering.overview.caseStudy.fasterDelivery.description')}</p>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.overview.differentiators.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('appReengineering.overview.differentiators.riskMitigation.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('appReengineering.overview.differentiators.riskMitigation.incremental')}</strong> {t('appReengineering.overview.differentiators.riskMitigation.incrementalDesc')}</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('appReengineering.overview.differentiators.riskMitigation.automated')}</strong> {t('appReengineering.overview.differentiators.riskMitigation.automatedDesc')}</span>
                </li>
                <li className="flex items-start">
                  <ShieldCheckIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span><strong>{t('appReengineering.overview.differentiators.riskMitigation.continuous')}</strong> {t('appReengineering.overview.differentiators.riskMitigation.continuousDesc')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('appReengineering.overview.differentiators.acceleratedDelivery.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <BoltIcon className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <span><strong>{t('appReengineering.overview.differentiators.acceleratedDelivery.ai')}</strong> {t('appReengineering.overview.differentiators.acceleratedDelivery.aiDesc')}</span>
                </li>
                <li className="flex items-start">
                  <BoltIcon className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <span><strong>{t('appReengineering.overview.differentiators.acceleratedDelivery.parallel')}</strong> {t('appReengineering.overview.differentiators.acceleratedDelivery.parallelDesc')}</span>
                </li>
                <li className="flex items-start">
                  <BoltIcon className="h-4 w-4 text-orange-600 mr-2 mt-0.5" />
                  <span><strong>{t('appReengineering.overview.differentiators.acceleratedDelivery.living')}</strong> {t('appReengineering.overview.differentiators.acceleratedDelivery.livingDesc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {navigationLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                key={index}
                to={link.path}
                className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow border border-gray-200 group"
              >
                <Icon className="h-8 w-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.label}</h3>
                <p className="text-sm text-gray-600 mb-3">{link.description}</p>
                <div className="flex items-center text-orange-600 text-sm">
                  <span>{t('appReengineering.overview.nav.explore')}</span>
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

export default ApplicationReengineeringOverview;
