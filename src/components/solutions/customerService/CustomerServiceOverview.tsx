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
import { useTranslation } from 'react-i18next';

const CustomerServiceOverview: React.FC = () => {
  const { t } = useTranslation('solutions');
  const benefits = [
    {
      icon: UserGroupIcon,
      title: t('customerService.overview.benefits.reducedTickets.title'),
      description: t('customerService.overview.benefits.reducedTickets.description'),
      metric: t('customerService.overview.benefits.reducedTickets.metric'),
      color: 'blue'
    },
    {
      icon: BoltIcon,
      title: t('customerService.overview.benefits.improvedProductivity.title'),
      description: t('customerService.overview.benefits.improvedProductivity.description'),
      metric: t('customerService.overview.benefits.improvedProductivity.metric'),
      color: 'green'
    },
    {
      icon: ChartBarIcon,
      title: t('customerService.overview.benefits.processOptimization.title'),
      description: t('customerService.overview.benefits.processOptimization.description'),
      metric: t('customerService.overview.benefits.processOptimization.metric'),
      color: 'purple'
    },
    {
      icon: SparklesIcon,
      title: t('customerService.overview.benefits.enhancedUx.title'),
      description: t('customerService.overview.benefits.enhancedUx.description'),
      metric: t('customerService.overview.benefits.enhancedUx.metric'),
      color: 'orange'
    }
  ];

  const pillarKeys = ['aiServiceDesk', 'proactiveProblem', 'knowledgeMgmt', 'itOps', 'visibility'] as const;
  const capabilityKeys: Record<string, string[]> = {
    aiServiceDesk: ['nlu', 'multiChannel', 'ticketResolution', 'contextAware'],
    proactiveProblem: ['prediction', 'pattern', 'capacity', 'monitoring'],
    knowledgeMgmt: ['dynamicKb', 'contextual', 'selfLearning', 'expertCapture'],
    itOps: ['workflow', 'codeRemediation', 'changeMgmt', 'processOpt'],
    visibility: ['dashboards', 'slaPrediction', 'resourceOpt', 'analytics']
  };

  const solutionPillars = pillarKeys.map(key => ({
    title: t(`customerService.overview.pillars.${key}.title`),
    description: t(`customerService.overview.pillars.${key}.description`),
    capabilities: capabilityKeys[key].map(capKey => t(`customerService.overview.pillars.${key}.capabilities.${capKey}`))
  }));

  const keyMetrics = [
    { label: t('customerService.overview.keyMetrics.availability.label'), value: t('customerService.overview.keyMetrics.availability.value'), icon: ClockIcon },
    { label: t('customerService.overview.keyMetrics.languages.label'), value: t('customerService.overview.keyMetrics.languages.value'), icon: GlobeAltIcon },
    { label: t('customerService.overview.keyMetrics.costReduction.label'), value: t('customerService.overview.keyMetrics.costReduction.value'), icon: CurrencyDollarIcon },
    { label: t('customerService.overview.keyMetrics.fcr.label'), value: t('customerService.overview.keyMetrics.fcr.value'), icon: ShieldCheckIcon }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            {t('customerService.overview.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('customerService.overview.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('customerService.overview.header.description')}
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.overview.benefits.title')}</h2>
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
                        {benefit.metric} {t('customerService.overview.benefits.improvement')}
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.overview.pillars.title')}</h2>
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solutionPillars.map((pillar, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{pillar.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{pillar.description}</p>
                  <ul className="space-y-1">
                    {pillar.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">{'\u2713'}</span>
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.overview.nav.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/solutions/customer-service/self-heal-bot" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-blue-500">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <SparklesIcon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('customerService.overview.nav.selfHealBot.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('customerService.overview.nav.selfHealBot.description')}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  <span>{t('customerService.overview.nav.learnMore')}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/customer-service/assisted-heal-bot" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-green-500">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <UserGroupIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('customerService.overview.nav.assistedHealBot.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('customerService.overview.nav.assistedHealBot.description')}</p>
                <div className="flex items-center text-green-600 text-sm font-medium">
                  <span>{t('customerService.overview.nav.learnMore')}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/customer-service/optimization-hub" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-purple-500">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <ChartBarIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('customerService.overview.nav.optimizationHub.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('customerService.overview.nav.optimizationHub.description')}</p>
                <div className="flex items-center text-purple-600 text-sm font-medium">
                  <span>{t('customerService.overview.nav.learnMore')}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/solutions/customer-service/implementation" className="group">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-orange-500">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('customerService.overview.nav.implementationPlan.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">{t('customerService.overview.nav.implementationPlan.description')}</p>
                <div className="flex items-center text-orange-600 text-sm font-medium">
                  <span>{t('customerService.overview.nav.learnMore')}</span>
                  <ArrowRightIcon className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* ROI Preview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.overview.roi.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{t('customerService.overview.roi.selfHealValue')}</div>
              <p className="text-sm text-gray-600">{t('customerService.overview.roi.selfHeal')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{t('customerService.overview.roi.traditionalValue')}</div>
              <p className="text-sm text-gray-600">{t('customerService.overview.roi.traditional')}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{t('customerService.overview.roi.selfFundingValue')}</div>
              <p className="text-sm text-gray-600">{t('customerService.overview.roi.selfFunding')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerServiceOverview;
