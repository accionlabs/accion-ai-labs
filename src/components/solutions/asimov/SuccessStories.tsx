import React, { useState } from 'react';
import {
  ChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const SuccessStories: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedStory, setSelectedStory] = useState(0);

  const storyKeys = ['financial', 'healthcare', 'retail', 'government'];

  const successStories = storyKeys.map(sk => {
    const base = `asimov.successStories.stories.${sk}`;
    return {
      client: t(`${base}.client`),
      industry: t(`${base}.industry`),
      logo: sk === 'financial' ? '\u{1F3E6}' : sk === 'healthcare' ? '\u{1F3E5}' : sk === 'retail' ? '\u{1F6CD}\uFE0F' : '\u{1F3DB}\uFE0F',
      project: t(`${base}.project`),
      challenge: {
        description: t(`${base}.challengeDescription`),
        details: t(`${base}.challengeDetails`, { returnObjects: true }) as unknown as string[]
      },
      solution: {
        approach: t(`${base}.solutionApproach`),
        agents: t(`${base}.solutionAgents`, { returnObjects: true }) as unknown as string[]
      },
      results: {
        timeToMarket: t(`${base}.resultsTimeToMarket`),
        costSavings: t(`${base}.resultsCostSavings`),
        performance: t(`${base}.resultsPerformance`),
        availability: t(`${base}.resultsAvailability`),
        additionalBenefits: t(`${base}.resultsBenefits`, { returnObjects: true }) as unknown as string[]
      },
      testimonial: {
        quote: t(`${base}.testimonialQuote`),
        author: t(`${base}.testimonialAuthor`)
      }
    };
  });

  const aggregateMetricKeys = ['totalProjects', 'averageTimeSaved', 'totalCostSavings', 'successRate', 'linesOfCodeMigrated', 'averageROI'];
  const aggregateMetrics = aggregateMetricKeys.map(mk => ({
    value: t(`asimov.successStories.aggregateMetrics.${mk}.value`),
    label: t(`asimov.successStories.aggregateMetrics.${mk}.label`)
  }));

  const industryKeys = ['financialServices', 'healthcare', 'retail', 'government', 'manufacturing', 'others'];
  const industryBreakdown = industryKeys.map(ik => ({
    industry: t(`asimov.successStories.industryBreakdown.${ik}.industry`),
    projects: (t(`asimov.successStories.industryBreakdown.${ik}.projects`, { returnObjects: true }) as unknown) as number,
    percentage: ik === 'financialServices' ? 29 : ik === 'healthcare' ? 19 : ik === 'retail' ? 16 : ik === 'government' ? 14 : ik === 'manufacturing' ? 12 : 10
  }));

  const whySucceedsKeys = ['aiPowered', 'incremental', 'automation', 'provenPatterns'];
  const whySucceedsIcons = [SparklesIcon, ArrowPathIcon, BoltIcon, CheckCircleIcon];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <TrophyIcon className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{t('asimov.successStories.header.title')}</h1>
              <p className="text-sm text-gray-600 mt-1">{t('asimov.successStories.header.subtitle')}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Aggregate Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.successStories.platformMetrics')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {aggregateMetrics.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">{item.value}</p>
                <p className="text-xs text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.successStories.featured')}</h2>

          {/* Story Tabs */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {successStories.map((story, index) => (
              <button
                key={index}
                onClick={() => setSelectedStory(index)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg transition-all ${
                  selectedStory === index
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{story.logo}</span>
                  <div className="text-left">
                    <p className="font-semibold">{story.client}</p>
                    <p className="text-xs">{story.industry}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Story Details */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {successStories[selectedStory].project}
              </h3>
              <p className="text-sm text-gray-600">{successStories[selectedStory].client}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenge & Solution */}
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                    {t('asimov.successStories.challenge')}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {successStories[selectedStory].challenge.description}
                  </p>
                  <ul className="space-y-2">
                    {successStories[selectedStory].challenge.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                    {t('asimov.successStories.solution')}
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {successStories[selectedStory].solution.approach}
                  </p>
                  <ul className="space-y-2">
                    {successStories[selectedStory].solution.agents.map((agent, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {agent}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-green-600 mr-2" />
                  {t('asimov.successStories.results')}
                </h4>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <ClockIcon className="h-5 w-5 text-blue-600 mb-1" />
                    <p className="text-xs text-gray-600">{t('asimov.successStories.timeToMarket')}</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.timeToMarket}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-600 mb-1" />
                    <p className="text-xs text-gray-600">{t('asimov.successStories.costSavings')}</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.costSavings}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <BoltIcon className="h-5 w-5 text-yellow-600 mb-1" />
                    <p className="text-xs text-gray-600">{t('asimov.successStories.performance')}</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.performance}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <ShieldCheckIcon className="h-5 w-5 text-purple-600 mb-1" />
                    <p className="text-xs text-gray-600">{t('asimov.successStories.availability')}</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.availability}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">{t('asimov.successStories.additionalBenefits')}</p>
                  <ul className="space-y-1">
                    {successStories[selectedStory].results.additionalBenefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "{successStories[selectedStory].testimonial.quote}"
                  </p>
                  <p className="text-xs text-gray-600 font-semibold">
                    — {successStories[selectedStory].testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('asimov.successStories.industryDistribution')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('asimov.successStories.projectsByIndustry')}</h3>
              <div className="space-y-3">
                {industryBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.industry}</span>
                        <span className="text-sm text-gray-600">{item.projects} {t('asimov.successStories.projects')}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-3 text-sm font-semibold text-gray-700 w-12 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('asimov.successStories.whySucceeds')}</h3>
              <div className="space-y-3">
                {whySucceedsKeys.map((key, index) => {
                  const Icon = whySucceedsIcons[index];
                  return (
                    <div key={key} className="flex items-start">
                      <Icon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-gray-900">{t(`asimov.successStories.whySucceedsReasons.${key}.title`)}</p>
                        <p className="text-sm text-gray-600">{t(`asimov.successStories.whySucceedsReasons.${key}.description`)}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
