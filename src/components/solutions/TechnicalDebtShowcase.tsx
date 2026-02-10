import React from 'react';
import { Link } from 'react-router-dom';
import {
  ExclamationTriangleIcon,
  ChartBarIcon,
  CpuChipIcon,
  DocumentMagnifyingGlassIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const TechnicalDebtShowcase: React.FC = () => {
  const { t } = useTranslation('solutions');
  const capabilities = [
    {
      icon: DocumentMagnifyingGlassIcon,
      titleKey: 'technicalDebt.capabilities.codeAnalysis.title',
      descriptionKey: 'technicalDebt.capabilities.codeAnalysis.description'
    },
    {
      icon: ChartBarIcon,
      titleKey: 'technicalDebt.capabilities.riskQuantification.title',
      descriptionKey: 'technicalDebt.capabilities.riskQuantification.description'
    },
    {
      icon: ArrowTrendingUpIcon,
      titleKey: 'technicalDebt.capabilities.predictiveAnalytics.title',
      descriptionKey: 'technicalDebt.capabilities.predictiveAnalytics.description'
    },
    {
      icon: ShieldCheckIcon,
      titleKey: 'technicalDebt.capabilities.securityDetection.title',
      descriptionKey: 'technicalDebt.capabilities.securityDetection.description'
    }
  ];

  const metricKeys = ['codeCoverage', 'debtReduction', 'timeSaved', 'roi'] as const;

  const process = [
    {
      phaseKey: 'technicalDebt.process.phases.discovery.phase',
      durationKey: 'technicalDebt.process.phases.discovery.duration',
      activityKeys: [
        'technicalDebt.process.phases.discovery.activities.codebaseScanning',
        'technicalDebt.process.phases.discovery.activities.dependencyMapping',
        'technicalDebt.process.phases.discovery.activities.architectureAnalysis'
      ]
    },
    {
      phaseKey: 'technicalDebt.process.phases.assessment.phase',
      durationKey: 'technicalDebt.process.phases.assessment.duration',
      activityKeys: [
        'technicalDebt.process.phases.assessment.activities.debtQuantification',
        'technicalDebt.process.phases.assessment.activities.riskScoring',
        'technicalDebt.process.phases.assessment.activities.impactAnalysis'
      ]
    },
    {
      phaseKey: 'technicalDebt.process.phases.planning.phase',
      durationKey: 'technicalDebt.process.phases.planning.duration',
      activityKeys: [
        'technicalDebt.process.phases.planning.activities.remediationRoadmap',
        'technicalDebt.process.phases.planning.activities.priorityMatrix',
        'technicalDebt.process.phases.planning.activities.resourcePlanning'
      ]
    },
    {
      phaseKey: 'technicalDebt.process.phases.execution.phase',
      durationKey: 'technicalDebt.process.phases.execution.duration',
      activityKeys: [
        'technicalDebt.process.phases.execution.activities.automatedRefactoring',
        'technicalDebt.process.phases.execution.activities.codeModernization',
        'technicalDebt.process.phases.execution.activities.continuousMonitoring'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">{t('technicalDebt.header.title')}</h1>
          <Link
            to="/technical-debt"
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
          >
            {t('technicalDebt.header.viewDeepDive')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
        <p className="text-lg text-gray-600 max-w-4xl">
          {t('technicalDebt.header.description')}
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
            <ExclamationTriangleIcon className="h-8 w-8 text-white" />
          </div>
          <div className="ml-4">
            <h2 className="text-2xl font-bold text-gray-900">{t('technicalDebt.hero.title')}</h2>
            <p className="text-gray-600">{t('technicalDebt.hero.subtitle')}</p>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {metricKeys.map((key) => (
            <div key={key} className="bg-white rounded-lg p-4">
              <div className="text-2xl font-bold text-gray-900">{t(`technicalDebt.metrics.${key}.value`)}</div>
              <div className="text-sm font-semibold text-gray-700">{t(`technicalDebt.metrics.${key}.label`)}</div>
              <div className="text-xs text-gray-500">{t(`technicalDebt.metrics.${key}.subtext`)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Capabilities */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('technicalDebt.capabilities.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((capability, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <capability.icon className="h-6 w-6 text-orange-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{t(capability.titleKey)}</h3>
                  <p className="text-sm text-gray-600">{t(capability.descriptionKey)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Implementation Process */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('technicalDebt.process.title')}</h2>
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {process.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white rounded-lg p-4 border-2 border-orange-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">{t(phase.phaseKey)}</h3>
                    <span className="text-xs text-orange-600 font-medium">{t(phase.durationKey)}</span>
                  </div>
                  <ul className="space-y-1">
                    {phase.activityKeys.map((activityKey, actIdx) => (
                      <li key={actIdx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-orange-400 mr-2">•</span>
                        {t(activityKey)}
                      </li>
                    ))}
                  </ul>
                </div>
                {idx < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-orange-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Agent Architecture */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('technicalDebt.architecture.title')}</h2>
        <div className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 border border-orange-200">
              <div className="flex items-center mb-3">
                <CpuChipIcon className="h-6 w-6 text-orange-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('technicalDebt.architecture.analysis.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t('technicalDebt.architecture.analysis.description')}
              </p>
              <div className="space-y-1">
                <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block mr-1">{t('technicalDebt.architecture.analysis.agents.codeParser')}</div>
                <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block mr-1">{t('technicalDebt.architecture.analysis.agents.patternDetector')}</div>
                <div className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded inline-block">{t('technicalDebt.architecture.analysis.agents.dependencyMapper')}</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-red-200">
              <div className="flex items-center mb-3">
                <ChartBarIcon className="h-6 w-6 text-red-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('technicalDebt.architecture.assessment.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t('technicalDebt.architecture.assessment.description')}
              </p>
              <div className="space-y-1">
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block mr-1">{t('technicalDebt.architecture.assessment.agents.riskScorer')}</div>
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block mr-1">{t('technicalDebt.architecture.assessment.agents.impactAnalyzer')}</div>
                <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded inline-block">{t('technicalDebt.architecture.assessment.agents.priorityEngine')}</div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border border-green-200">
              <div className="flex items-center mb-3">
                <SparklesIcon className="h-6 w-6 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('technicalDebt.architecture.remediation.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t('technicalDebt.architecture.remediation.description')}
              </p>
              <div className="space-y-1">
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mr-1">{t('technicalDebt.architecture.remediation.agents.refactorBot')}</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block mr-1">{t('technicalDebt.architecture.remediation.agents.codeGenerator')}</div>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">{t('technicalDebt.architecture.remediation.agents.migrationPlanner')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="bg-white border border-gray-200 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('technicalDebt.successStories.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-orange-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">{t('technicalDebt.successStories.financial.title')}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {t('technicalDebt.successStories.financial.description')}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-green-600">
                <ClockIcon className="h-4 w-4 mr-1" />
                {t('technicalDebt.successStories.financial.faster')}
              </span>
              <span className="flex items-center text-blue-600">
                <CurrencyDollarIcon className="h-4 w-4 mr-1" />
                {t('technicalDebt.successStories.financial.saved')}
              </span>
            </div>
          </div>

          <div className="border-l-4 border-red-500 pl-4">
            <h3 className="font-semibold text-gray-900 mb-2">{t('technicalDebt.successStories.ecommerce.title')}</h3>
            <p className="text-sm text-gray-600 mb-3">
              {t('technicalDebt.successStories.ecommerce.description')}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="flex items-center text-green-600">
                <ArrowTrendingUpIcon className="h-4 w-4 mr-1" />
                {t('technicalDebt.successStories.ecommerce.performance')}
              </span>
              <span className="flex items-center text-blue-600">
                <ShieldCheckIcon className="h-4 w-4 mr-1" />
                {t('technicalDebt.successStories.ecommerce.downtime')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtShowcase;
