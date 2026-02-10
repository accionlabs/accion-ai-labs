import React from 'react';
import { Link } from 'react-router-dom';
import {
  SparklesIcon,
  CpuChipIcon,
  ScaleIcon,
  ArrowTrendingUpIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserGroupIcon,
  ServerIcon,
  CodeBracketIcon,
  DocumentTextIcon,
  BugAntIcon
} from '@heroicons/react/24/outline';
import AnimatedExtractionProcess from './AnimatedExtractionProcess';
import { useTranslation, Trans } from 'react-i18next';

const TechnicalDebtOverview: React.FC = () => {
  const { t } = useTranslation('technicalDebt');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('overview.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('overview.header.description')}
          </p>
        </div>

        {/* The Problem */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-red-200 p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('overview.hiddenCost.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('overview.hiddenCost.description')}
                <strong className="text-red-600">{t('overview.hiddenCost.budgetHighlight')}</strong>
                {t('overview.hiddenCost.descriptionEnd')}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <ClockIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('overview.hiddenCost.stats.slower')}</p>
                  <p className="text-xs text-gray-600">{t('overview.hiddenCost.stats.slowerLabel')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <BugAntIcon className="h-6 w-6 text-red-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('overview.hiddenCost.stats.moreBugs')}</p>
                  <p className="text-xs text-gray-600">{t('overview.hiddenCost.stats.moreBugsLabel')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <CurrencyDollarIcon className="h-6 w-6 text-green-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('overview.hiddenCost.stats.annualCost')}</p>
                  <p className="text-xs text-gray-600">{t('overview.hiddenCost.stats.annualCostLabel')}</p>
                </div>
                <div className="bg-white rounded-lg p-3 border border-red-100">
                  <UserGroupIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{t('overview.hiddenCost.stats.timeSpent')}</p>
                  <p className="text-xs text-gray-600">{t('overview.hiddenCost.stats.timeSpentLabel')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Case Introduction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('overview.caseStudy.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: t('overview.caseStudy.description') }} />

              <div className="space-y-3">
                <div className="flex items-start">
                  <ServerIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('overview.caseStudy.legacyArchitecture')}</span>
                    <span className="text-gray-600 ml-2">{t('overview.caseStudy.legacyArchitectureDesc')}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <CodeBracketIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('overview.caseStudy.mixedTechnology')}</span>
                    <span className="text-gray-600 ml-2">{t('overview.caseStudy.mixedTechnologyDesc')}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <UserGroupIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('overview.caseStudy.teamChallenges')}</span>
                    <span className="text-gray-600 ml-2">{t('overview.caseStudy.teamChallengesDesc')}</span>
                  </div>
                </div>

                <div className="flex items-start">
                  <DocumentTextIcon className="h-5 w-5 text-gray-400 mr-3 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gray-900">{t('overview.caseStudy.documentationGap')}</span>
                    <span className="text-gray-600 ml-2">{t('overview.caseStudy.documentationGapDesc')}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">{t('overview.caseStudy.byTheNumbers')}</h3>
              <dl className="space-y-2">
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">{t('overview.caseStudy.linesOfCode')}</dt>
                  <dd className="text-sm font-semibold text-gray-900">~500K</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">{t('overview.caseStudy.components')}</dt>
                  <dd className="text-sm font-semibold text-gray-900">1,247</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">{t('overview.caseStudy.dependencies')}</dt>
                  <dd className="text-sm font-semibold text-gray-900">186</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">{t('overview.caseStudy.databaseTables')}</dt>
                  <dd className="text-sm font-semibold text-gray-900">143</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">{t('overview.caseStudy.apiEndpoints')}</dt>
                  <dd className="text-sm font-semibold text-gray-900">427</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-sm text-gray-600">{t('overview.caseStudy.activeUsers')}</dt>
                  <dd className="text-sm font-semibold text-gray-900">12,000+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        {/* Our Solution */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('overview.solution.title')}</h2>

          <p className="text-gray-700 mb-6">
            {t('overview.solution.description')}
          </p>

          {/* Animated Extraction Process */}
          <AnimatedExtractionProcess />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('overview.solution.whatWeAnalyze')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.codeStructure') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.businessLogic') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.architecture') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✓</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.designPatterns') }} />
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('overview.solution.whatWeDeliver')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.debtQuantification') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.rootCauses') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.riskAssessment') }} />
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">→</span>
                  <span dangerouslySetInnerHTML={{ __html: t('overview.solution.actionPlan') }} />
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Phoenix Results Preview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('overview.findings.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-red-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-red-600">147</span>
              </div>
              <h3 className="font-semibold text-gray-900">{t('overview.findings.criticalIssues')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('overview.findings.criticalIssuesDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-orange-600">312</span>
              </div>
              <h3 className="font-semibold text-gray-900">{t('overview.findings.codeSmells')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('overview.findings.codeSmellsDesc')}</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <span className="text-2xl font-bold text-yellow-600">89</span>
              </div>
              <h3 className="font-semibold text-gray-900">{t('overview.findings.missingFeatures')}</h3>
              <p className="text-sm text-gray-600 mt-1">{t('overview.findings.missingFeaturesDesc')}</p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800" dangerouslySetInnerHTML={{ __html: t('overview.findings.estimatedImpact') }} />
          </div>
        </div>

        {/* Explore the Analysis */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('overview.explore.title')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/technical-debt/agent-analysis"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <SparklesIcon className="h-8 w-8 text-blue-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.explore.agentExtraction')}</h3>
              <p className="text-sm text-gray-600">{t('overview.explore.agentExtractionDesc')}</p>
              <p className="text-xs text-blue-600 mt-2">{t('overview.explore.viewProcess')}</p>
            </Link>

            <Link
              to="/technical-debt/graph-explorer"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-purple-400 hover:shadow-md transition-all group"
            >
              <CpuChipIcon className="h-8 w-8 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.explore.knowledgeGraphs')}</h3>
              <p className="text-sm text-gray-600">{t('overview.explore.knowledgeGraphsDesc')}</p>
              <p className="text-xs text-purple-600 mt-2">{t('overview.explore.viewGraphs')}</p>
            </Link>

            <Link
              to="/technical-debt/assessment"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-orange-400 hover:shadow-md transition-all group"
            >
              <ScaleIcon className="h-8 w-8 text-orange-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.explore.debtAssessment')}</h3>
              <p className="text-sm text-gray-600">{t('overview.explore.debtAssessmentDesc')}</p>
              <p className="text-xs text-orange-600 mt-2">{t('overview.explore.viewFindings')}</p>
            </Link>

            <Link
              to="/technical-debt/remediation"
              className="block p-4 border-2 border-gray-200 rounded-lg hover:border-green-400 hover:shadow-md transition-all group"
            >
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600 mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.explore.actionPlan')}</h3>
              <p className="text-sm text-gray-600">{t('overview.explore.actionPlanDesc')}</p>
              <p className="text-xs text-green-600 mt-2">{t('overview.explore.viewRoadmap')}</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtOverview;
