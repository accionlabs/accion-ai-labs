import React from 'react';
import {
  ArrowPathIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  CloudArrowUpIcon,
  BoltIcon,
  CheckCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CodeBracketIcon,
  BeakerIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ASIMOVOverview: React.FC = () => {
  const { t } = useTranslation('solutions');
  const coreCapabilities = [
    {
      icon: DocumentMagnifyingGlassIcon,
      title: t('asimov.overview.capabilities.discovery.title'),
      description: t('asimov.overview.capabilities.discovery.description'),
      features: t('asimov.overview.capabilities.discovery.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: CpuChipIcon,
      title: t('asimov.overview.capabilities.transformation.title'),
      description: t('asimov.overview.capabilities.transformation.description'),
      features: t('asimov.overview.capabilities.transformation.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: CloudArrowUpIcon,
      title: t('asimov.overview.capabilities.cloudNative.title'),
      description: t('asimov.overview.capabilities.cloudNative.description'),
      features: t('asimov.overview.capabilities.cloudNative.features', { returnObjects: true }) as unknown as string[]
    },
    {
      icon: ShieldCheckIcon,
      title: t('asimov.overview.capabilities.zeroRisk.title'),
      description: t('asimov.overview.capabilities.zeroRisk.description'),
      features: t('asimov.overview.capabilities.zeroRisk.features', { returnObjects: true }) as unknown as string[]
    }
  ];

  const migrationApproach = {
    phases: [
      {
        phase: t('asimov.overview.methodology.phases.discoveryAssessment.phase'),
        duration: t('asimov.overview.methodology.phases.discoveryAssessment.duration'),
        description: t('asimov.overview.methodology.phases.discoveryAssessment.description'),
        deliverables: t('asimov.overview.methodology.phases.discoveryAssessment.deliverables', { returnObjects: true }) as unknown as string[]
      },
      {
        phase: t('asimov.overview.methodology.phases.planningDesign.phase'),
        duration: t('asimov.overview.methodology.phases.planningDesign.duration'),
        description: t('asimov.overview.methodology.phases.planningDesign.description'),
        deliverables: t('asimov.overview.methodology.phases.planningDesign.deliverables', { returnObjects: true }) as unknown as string[]
      },
      {
        phase: t('asimov.overview.methodology.phases.iterativeTransformation.phase'),
        duration: t('asimov.overview.methodology.phases.iterativeTransformation.duration'),
        description: t('asimov.overview.methodology.phases.iterativeTransformation.description'),
        deliverables: t('asimov.overview.methodology.phases.iterativeTransformation.deliverables', { returnObjects: true }) as unknown as string[]
      },
      {
        phase: t('asimov.overview.methodology.phases.deploymentOptimization.phase'),
        duration: t('asimov.overview.methodology.phases.deploymentOptimization.duration'),
        description: t('asimov.overview.methodology.phases.deploymentOptimization.description'),
        deliverables: t('asimov.overview.methodology.phases.deploymentOptimization.deliverables', { returnObjects: true }) as unknown as string[]
      }
    ]
  };

  const valueProposition = [
    { metric: t('asimov.overview.valueProposition.migrationTime.metric'), label: t('asimov.overview.valueProposition.migrationTime.label'), description: t('asimov.overview.valueProposition.migrationTime.description') },
    { metric: t('asimov.overview.valueProposition.codeCoverage.metric'), label: t('asimov.overview.valueProposition.codeCoverage.label'), description: t('asimov.overview.valueProposition.codeCoverage.description') },
    { metric: t('asimov.overview.valueProposition.costSavings.metric'), label: t('asimov.overview.valueProposition.costSavings.label'), description: t('asimov.overview.valueProposition.costSavings.description') },
    { metric: t('asimov.overview.valueProposition.uptime.metric'), label: t('asimov.overview.valueProposition.uptime.label'), description: t('asimov.overview.valueProposition.uptime.description') }
  ];

  const navigationLinks = [
    { path: '/solutions/asimov/discovery', label: t('asimov.overview.nav.discoveryAnalysis'), icon: DocumentMagnifyingGlassIcon },
    { path: '/solutions/asimov/transformation', label: t('asimov.overview.nav.transformationEngine'), icon: CpuChipIcon },
    { path: '/solutions/asimov/patterns', label: t('asimov.overview.nav.migrationPatterns'), icon: CodeBracketIcon },
    { path: '/solutions/asimov/success-stories', label: t('asimov.overview.nav.successStories'), icon: ChartBarIcon }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-brand-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <ArrowPathIcon className="h-10 w-10 text-secondary mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">{t('asimov.overview.header.title')}</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                {t('asimov.overview.header.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Value Metrics */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {valueProposition.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <p className="text-3xl font-bold text-secondary mb-2">{item.metric}</p>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.label}</p>
              <p className="text-xs text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.overview.capabilities.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-start mb-4">
                    <Icon className="h-8 w-8 text-secondary mr-3 flex-shrink-0" />
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

        {/* Migration Approach */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.overview.methodology.title')}</h2>
          <div className="relative">
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gray-300"></div>
            {migrationApproach.phases.map((phase, index) => (
              <div key={index} className="relative flex items-start mb-8 last:mb-0">
                <div className="absolute left-8 w-4 h-4 bg-secondary rounded-full -translate-x-1/2 ring-4 ring-white"></div>
                <div className="ml-16 flex-1">
                  <div className="bg-gradient-to-r from-brand-blue-50 to-brand-purple-100 rounded-lg p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-secondary font-medium">{phase.duration}</p>
                      </div>
                      <BoltIcon className="h-6 w-6 text-secondary" />
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{phase.description}</p>
                    <div>
                      <p className="text-xs font-semibold text-gray-700 mb-2">{t('asimov.overview.methodology.keyDeliverables')}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-600">
                            <SparklesIcon className="h-3 w-3 text-secondary mr-1" />
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.overview.agentEcosystem.title')}</h2>
          <div className="bg-gradient-to-br from-brand-blue-50 to-brand-purple-100 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{t('asimov.overview.agentEcosystem.discovery')}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {(t('asimov.overview.agentEcosystem.discoveryAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                    <li key={idx}>• {agent}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{t('asimov.overview.agentEcosystem.transformation')}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {(t('asimov.overview.agentEcosystem.transformationAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                    <li key={idx}>• {agent}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">{t('asimov.overview.agentEcosystem.validation')}</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {(t('asimov.overview.agentEcosystem.validationAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                    <li key={idx}>• {agent}</li>
                  ))}
                </ul>
              </div>
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
                <Icon className="h-8 w-8 text-secondary mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-gray-900 mb-2">{link.label}</h3>
                <div className="flex items-center text-secondary text-sm">
                  <span>{t('asimov.overview.nav.explore')}</span>
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

export default ASIMOVOverview;
