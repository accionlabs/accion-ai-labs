import React, { useState } from 'react';
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  SparklesIcon,
  ArrowPathIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const BusinessOptimizationHub: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedAnalytic, setSelectedAnalytic] = useState<string>('trend');

  const analyticKeys = ['trend', 'sentiment', 'process', 'proactive', 'training', 'advancedAnalytics'] as const;
  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    trend: ArrowTrendingUpIcon,
    sentiment: ExclamationTriangleIcon,
    process: ArrowPathIcon,
    proactive: BellAlertIcon,
    training: AcademicCapIcon,
    advancedAnalytics: PresentationChartLineIcon
  };
  const colorMap: Record<string, string> = {
    trend: 'blue',
    sentiment: 'purple',
    process: 'green',
    proactive: 'orange',
    training: 'indigo',
    advancedAnalytics: 'red'
  };
  const capKeysMap: Record<string, string[]> = {
    trend: ['volumeForecasting', 'seasonalPattern', 'categoryTrending', 'peakTime', 'resolutionPatterns'],
    sentiment: ['realTimeTracking', 'emotionDetection', 'satisfactionTrend', 'frustrationPoints', 'agentCorrelation'],
    process: ['bottleneck', 'processMining', 'automationOpportunity', 'slaCompliance', 'resourceUtilization'],
    proactive: ['issuePrediction', 'alertGeneration', 'impactAssessment', 'timingOptimization', 'preventiveAction'],
    training: ['gapAnalysis', 'trainingNeed', 'contentRec', 'skillAssessment', 'learningPath'],
    advancedAnalytics: ['predictiveModeling', 'rootCause', 'journeyMapping', 'agentPerformance', 'costBenefit']
  };
  const insightKeysMap: Record<string, string[]> = {
    trend: ['weeklyPattern', 'topIssue', 'seasonalSpike'],
    sentiment: ['overallSentiment', 'frustrationPoints', 'csatCorrelation'],
    process: ['mainBottleneck', 'automationPotential', 'slaCompliance'],
    proactive: ['issuesPrevented', 'customerReach', 'ticketReduction'],
    training: ['knowledgeGaps', 'trainingImpact', 'contentCreated'],
    advancedAnalytics: ['costSavings', 'predictionAccuracy', 'roi']
  };

  const analytics = Object.fromEntries(analyticKeys.map(key => [key, {
    name: t(`customerService.optimizationHub.analytics.${key}.name`),
    description: t(`customerService.optimizationHub.analytics.${key}.description`),
    icon: iconMap[key],
    color: colorMap[key],
    capabilities: capKeysMap[key].map(capKey => t(`customerService.optimizationHub.analytics.${key}.capabilities.${capKey}`)),
    insights: insightKeysMap[key].map(iKey => ({
      metric: t(`customerService.optimizationHub.analytics.${key}.insights.${iKey}.metric`),
      value: t(`customerService.optimizationHub.analytics.${key}.insights.${iKey}.value`)
    }))
  }]));

  const dashboardCategoryKeys = ['operationalEfficiency', 'customerExperience', 'businessImpact'] as const;
  const dashboardMetricKeysMap: Record<string, string[]> = {
    operationalEfficiency: ['ticketVolume', 'aht', 'fcr', 'automationRate'],
    customerExperience: ['csat', 'nps', 'ces', 'resolutionQuality'],
    businessImpact: ['costPerContact', 'agentProductivity', 'revenueProtection', 'churnPrevention']
  };
  const dashboardDataMap: Record<string, Record<string, { current: string; target: string; trend: string }>> = {
    operationalEfficiency: {
      ticketVolume: { current: '35%', target: '50%', trend: 'up' },
      aht: { current: '6.2 min', target: '5 min', trend: 'down' },
      fcr: { current: '78%', target: '85%', trend: 'up' },
      automationRate: { current: '60%', target: '75%', trend: 'up' }
    },
    customerExperience: {
      csat: { current: '4.6/5', target: '4.8/5', trend: 'up' },
      nps: { current: '42', target: '60', trend: 'up' },
      ces: { current: '2.8', target: '2.0', trend: 'down' },
      resolutionQuality: { current: '91%', target: '95%', trend: 'stable' }
    },
    businessImpact: {
      costPerContact: { current: '$5.25', target: '$4.00', trend: 'down' },
      agentProductivity: { current: '250%', target: '300%', trend: 'up' },
      revenueProtection: { current: '$1.2M', target: '$2M', trend: 'up' },
      churnPrevention: { current: '18%', target: '25%', trend: 'up' }
    }
  };

  const optimizationMetrics = dashboardCategoryKeys.map(catKey => ({
    category: t(`customerService.optimizationHub.dashboard.categories.${catKey}.title`),
    metrics: dashboardMetricKeysMap[catKey].map(mKey => ({
      name: t(`customerService.optimizationHub.dashboard.categories.${catKey}.${mKey}`),
      ...dashboardDataMap[catKey][mKey]
    }))
  }));

  const feedbackStageKeys = ['dataCollection', 'analysisInsights', 'recommendations', 'implementation', 'impactMeasurement'] as const;
  const feedbackLoop = feedbackStageKeys.map(key => ({
    stage: t(`customerService.optimizationHub.feedbackLoop.stages.${key}.stage`),
    description: t(`customerService.optimizationHub.feedbackLoop.stages.${key}.description`),
    volume: t(`customerService.optimizationHub.feedbackLoop.stages.${key}.volume`)
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4">
            {t('customerService.optimizationHub.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('customerService.optimizationHub.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('customerService.optimizationHub.header.description')}
          </p>
        </div>

        {/* Key Value Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">500+</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.optimizationHub.metrics.weeklyInsights')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <LightBulbIcon className="h-8 w-8 text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">45%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.optimizationHub.metrics.processAutomation')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">32%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.optimizationHub.metrics.efficiencyGain')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <SparklesIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">89%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.optimizationHub.metrics.predictionAccuracy')}</p>
          </div>
        </div>

        {/* Analytics Components */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.optimizationHub.analytics.title')}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(analytics).map(([key, analytic]) => (
              <button
                key={key}
                onClick={() => setSelectedAnalytic(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAnalytic === key
                    ? `border-${analytic.color}-500 bg-${analytic.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <analytic.icon className={`h-8 w-8 ${
                  selectedAnalytic === key ? `text-${analytic.color}-600` : 'text-gray-400'
                } mb-2`} />
                <h3 className="font-semibold text-gray-900 text-sm">{analytic.name}</h3>
              </button>
            ))}
          </div>

          {/* Selected Analytic Details */}
          {selectedAnalytic && (
            <div className="border-t pt-6">
              {Object.entries(analytics).filter(([key]) => key === selectedAnalytic).map(([key, analytic]) => (
                <div key={key}>
                  <div className="flex items-center mb-4">
                    <analytic.icon className={`h-8 w-8 text-${analytic.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{analytic.name}</h3>
                      <p className="text-gray-600">{analytic.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.optimizationHub.analytics.capabilities')}</h4>
                      <ul className="space-y-2">
                        {analytic.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.optimizationHub.analytics.currentInsights')}</h4>
                      <div className="space-y-3">
                        {analytic.insights.map((insight, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-500">{insight.metric}</p>
                            <p className="text-sm font-semibold text-gray-900">{insight.value}</p>
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

        {/* Optimization Metrics Dashboard */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.optimizationHub.dashboard.title')}</h2>
          <div className="space-y-6">
            {optimizationMetrics.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm text-gray-600">{metric.name}</p>
                        {metric.trend === 'up' && <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />}
                        {metric.trend === 'down' && <ArrowTrendingUpIcon className="h-4 w-4 text-blue-500 rotate-180" />}
                        {metric.trend === 'stable' && <span className="h-4 w-4 text-gray-400">{'\u2014'}</span>}
                      </div>
                      <p className="text-lg font-bold text-gray-900">{metric.current}</p>
                      <p className="text-xs text-gray-500">{t('customerService.optimizationHub.dashboard.target')} {metric.target}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Improvement Cycle */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.optimizationHub.feedbackLoop.title')}</h2>
          <div className="space-y-4">
            {feedbackLoop.map((stage, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{stage.stage}</h3>
                  <p className="text-sm text-gray-600">{stage.description}</p>
                  <p className="text-xs text-purple-600 font-semibold mt-1">{stage.volume}</p>
                </div>
                {index < feedbackLoop.length - 1 && (
                  <div className="ml-4">
                    <ArrowPathIcon className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact Visualization */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.optimizationHub.impact.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('customerService.optimizationHub.impact.efficiencyTimeline')}</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{t('customerService.optimizationHub.impact.q1.label')}</span>
                  <span className="text-sm font-semibold text-green-600">{t('customerService.optimizationHub.impact.q1.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{t('customerService.optimizationHub.impact.q2.label')}</span>
                  <span className="text-sm font-semibold text-green-600">{t('customerService.optimizationHub.impact.q2.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{t('customerService.optimizationHub.impact.q3.label')}</span>
                  <span className="text-sm font-semibold text-green-600">{t('customerService.optimizationHub.impact.q3.value')}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">{t('customerService.optimizationHub.impact.q4.label')}</span>
                  <span className="text-sm font-semibold text-green-600">{t('customerService.optimizationHub.impact.q4.value')}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('customerService.optimizationHub.impact.costModel')}</h3>
              <div className="bg-white rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t('customerService.optimizationHub.impact.currentCost')}</span>
                    <span className="text-sm font-semibold">{t('customerService.optimizationHub.impact.currentCostValue')}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">{t('customerService.optimizationHub.impact.projectedSavings')}</span>
                    <span className="text-sm font-semibold text-green-600">{t('customerService.optimizationHub.impact.projectedSavingsValue')}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-sm font-semibold text-gray-900">{t('customerService.optimizationHub.impact.futureCost')}</span>
                    <span className="text-lg font-bold text-gray-900">{t('customerService.optimizationHub.impact.futureCostValue')}</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-purple-600 font-semibold">
                    {t('customerService.optimizationHub.impact.selfFunding')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOptimizationHub;
