import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheckIcon,
  ArrowLeftIcon,
  ChartBarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  BoltIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ContinuousValidation: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedSprint, setSelectedSprint] = useState<number>(3);

  const validationProcess = t('appReengineering.continuousValidation.process.steps', { returnObjects: true }) as unknown as { step: string; description: string; duration: string; automated: boolean }[];

  const sprintData = t('appReengineering.continuousValidation.dashboard.sprintData', { returnObjects: true }) as unknown as { sprint: number; quality: number; drift: number; issues: { critical: number; moderate: number; low: number }; improvements: string[] }[];

  const driftExamples = t('appReengineering.continuousValidation.driftDetection.examples', { returnObjects: true }) as unknown as { type: string; severity: string; detected: string; description: string; impact: string; action: string; prevented: string }[];

  const qualityMetrics = t('appReengineering.continuousValidation.qualityTrends.metrics', { returnObjects: true }) as unknown as { metric: string; baseline: number; current: number; target: number; unit: string }[];

  const selectedSprintData = sprintData[selectedSprint - 1];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-600 bg-red-50 border-red-200';
      case 'moderate': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'low': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/solutions/application-reengineering"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            {t('appReengineering.continuousValidation.backToOverview')}
          </Link>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center mb-4">
                <ShieldCheckIcon className="h-10 w-10 text-green-600 mr-3" />
                <h1 className="text-3xl font-bold text-gray-900">{t('appReengineering.continuousValidation.header.title')}</h1>
              </div>
              <p className="text-lg text-gray-600 max-w-3xl">
                {t('appReengineering.continuousValidation.header.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* The Challenge */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-orange-200 p-6 mb-8">
          <div className="flex items-start">
            <ExclamationTriangleIcon className="h-8 w-8 text-orange-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('appReengineering.continuousValidation.challenge.title')}</h2>
              <p className="text-gray-700 mb-4">
                {t('appReengineering.continuousValidation.challenge.description')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{t('appReengineering.continuousValidation.challenge.silentDrift.title')}</p>
                  <p className="text-xs text-gray-600">{t('appReengineering.continuousValidation.challenge.silentDrift.description')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{t('appReengineering.continuousValidation.challenge.newDebt.title')}</p>
                  <p className="text-xs text-gray-600">{t('appReengineering.continuousValidation.challenge.newDebt.description')}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-orange-100">
                  <p className="text-sm font-semibold text-gray-900 mb-1">{t('appReengineering.continuousValidation.challenge.qualityUncertainty.title')}</p>
                  <p className="text-xs text-gray-600">{t('appReengineering.continuousValidation.challenge.qualityUncertainty.description')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint-by-Sprint Validation Process */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.continuousValidation.process.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('appReengineering.continuousValidation.process.description')}
          </p>

          <div className="space-y-4">
            {validationProcess.map((step, index) => (
              <div key={index} className="flex items-start border border-gray-200 rounded-lg p-4">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{step.step}</h3>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="h-4 w-4 mr-1" />
                        {step.duration}
                      </span>
                      {step.automated && (
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                          {t('appReengineering.continuousValidation.process.automated')}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 bg-green-50 rounded-lg p-4 border border-green-200">
            <div className="flex items-start">
              <BoltIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">{t('appReengineering.continuousValidation.process.totalTime')}</p>
                <p className="text-xs text-gray-600">
                  {t('appReengineering.continuousValidation.process.totalTimeDetail')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sprint Progress Dashboard */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.continuousValidation.dashboard.title')}</h2>

          {/* Sprint Selector */}
          <div className="flex space-x-2 mb-6">
            {sprintData.map((sprint) => (
              <button
                key={sprint.sprint}
                onClick={() => setSelectedSprint(sprint.sprint)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedSprint === sprint.sprint
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {t('appReengineering.continuousValidation.dashboard.sprintLabel')} {sprint.sprint}
              </button>
            ))}
          </div>

          {/* Sprint Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-6 border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700">{t('appReengineering.continuousValidation.dashboard.qualityScore')}</h3>
                <ArrowTrendingUpIcon className="h-5 w-5 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-green-600 mb-1">{selectedSprintData.quality}/100</p>
              <p className="text-xs text-gray-600">
                {selectedSprint > 1 && `+${selectedSprintData.quality - sprintData[selectedSprint - 2].quality} from last sprint`}
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700">{t('appReengineering.continuousValidation.dashboard.driftIssues')}</h3>
                <ChartBarIcon className="h-5 w-5 text-orange-600" />
              </div>
              <p className="text-3xl font-bold text-orange-600 mb-1">{selectedSprintData.drift}</p>
              <p className="text-xs text-gray-600">
                {selectedSprint > 1 && selectedSprintData.drift < sprintData[selectedSprint - 2].drift
                  ? `${sprintData[selectedSprint - 2].drift - selectedSprintData.drift} fewer than last sprint`
                  : 'Caught and resolved'}
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-700">{t('appReengineering.continuousValidation.dashboard.issuesBySeverity')}</h3>
                <ExclamationTriangleIcon className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('appReengineering.continuousValidation.dashboard.critical')}</span>
                  <span className="font-semibold text-red-600">{selectedSprintData.issues.critical}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('appReengineering.continuousValidation.dashboard.moderate')}</span>
                  <span className="font-semibold text-orange-600">{selectedSprintData.issues.moderate}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">{t('appReengineering.continuousValidation.dashboard.low')}</span>
                  <span className="font-semibold text-yellow-600">{selectedSprintData.issues.low}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sprint Improvements */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('appReengineering.continuousValidation.dashboard.sprintLabel')} {selectedSprint} {t('appReengineering.continuousValidation.dashboard.improvements')}</h3>
            <ul className="space-y-2">
              {selectedSprintData.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start text-sm text-gray-700">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                  {improvement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drift Detection Examples */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.continuousValidation.driftDetection.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('appReengineering.continuousValidation.driftDetection.description')}
          </p>

          <div className="space-y-4">
            {driftExamples.map((example, index) => (
              <div key={index} className={`border rounded-lg p-6 ${getSeverityColor(example.severity)}`}>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{example.type}</h3>
                    <p className="text-xs font-medium uppercase">{example.detected}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase ${
                    example.severity === 'critical' ? 'bg-red-200 text-red-800' :
                    example.severity === 'moderate' ? 'bg-orange-200 text-orange-800' :
                    'bg-yellow-200 text-yellow-800'
                  }`}>
                    {example.severity}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 uppercase mb-1">{t('appReengineering.continuousValidation.driftDetection.whatDetected')}</p>
                    <p className="text-sm text-gray-800">{example.description}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-700 uppercase mb-1">{t('appReengineering.continuousValidation.driftDetection.impact')}</p>
                    <p className="text-sm text-gray-800">{example.impact}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-3 border border-green-200">
                    <div className="flex items-start">
                      <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">{t('appReengineering.continuousValidation.driftDetection.actionTaken')}</p>
                        <p className="text-sm text-gray-800">{example.action}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-blue-200">
                    <div className="flex items-start">
                      <ShieldCheckIcon className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold text-gray-700 mb-1">{t('appReengineering.continuousValidation.driftDetection.whatPrevented')}</p>
                        <p className="text-sm text-gray-800">{example.prevented}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Improvement Trends */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.continuousValidation.qualityTrends.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('appReengineering.continuousValidation.qualityTrends.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualityMetrics.map((metric, index) => {
              const progress = ((metric.current - metric.baseline) / (metric.target - metric.baseline)) * 100;

              return (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{metric.metric}</h3>
                    <span className={`px-2 py-1 text-xs font-semibold rounded ${
                      progress >= 75 ? 'bg-green-100 text-green-700' :
                      progress >= 50 ? 'bg-blue-100 text-blue-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {Math.round(progress)}% {t('appReengineering.continuousValidation.qualityTrends.toTarget')}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t('appReengineering.continuousValidation.qualityTrends.baseline')}</span>
                      <span className="font-semibold text-red-600">{metric.baseline}{metric.unit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t('appReengineering.continuousValidation.qualityTrends.current')}</span>
                      <span className="font-semibold text-blue-600">{metric.current}{metric.unit}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{t('appReengineering.continuousValidation.qualityTrends.target')}</span>
                      <span className="font-semibold text-green-600">{metric.target}{metric.unit}</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          progress >= 75 ? 'bg-green-500' :
                          progress >= 50 ? 'bg-blue-500' :
                          'bg-yellow-500'
                        }`}
                        style={{ width: `${Math.min(progress, 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('appReengineering.continuousValidation.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('appReengineering.continuousValidation.benefits.immediateFeedback.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('appReengineering.continuousValidation.benefits.immediateFeedback.catchDrift')}</strong> {t('appReengineering.continuousValidation.benefits.immediateFeedback.catchDriftDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('appReengineering.continuousValidation.benefits.immediateFeedback.lowerCost')}</strong> {t('appReengineering.continuousValidation.benefits.immediateFeedback.lowerCostDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('appReengineering.continuousValidation.benefits.immediateFeedback.teamLearning')}</strong> {t('appReengineering.continuousValidation.benefits.immediateFeedback.teamLearningDesc')}</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('appReengineering.continuousValidation.benefits.objectiveProof.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('appReengineering.continuousValidation.benefits.objectiveProof.measurable')}</strong> {t('appReengineering.continuousValidation.benefits.objectiveProof.measurableDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('appReengineering.continuousValidation.benefits.objectiveProof.stakeholder')}</strong> {t('appReengineering.continuousValidation.benefits.objectiveProof.stakeholderDesc')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span><strong>{t('appReengineering.continuousValidation.benefits.objectiveProof.prevent')}</strong> {t('appReengineering.continuousValidation.benefits.objectiveProof.preventDesc')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContinuousValidation;
