import React, { useState } from 'react';
import {
  CalendarIcon,
  CheckCircleIcon,
  ClockIcon,
  DocumentTextIcon,
  CogIcon,
  BeakerIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowRightIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  CurrencyDollarIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ImplementationRoadmap: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedPhase, setSelectedPhase] = useState<number>(0);

  const phaseKeys = ['phase1', 'phase2', 'phase3', 'phase4'] as const;
  const phaseIcons = [DocumentTextIcon, CogIcon, BeakerIcon, RocketLaunchIcon];
  const phaseColors = ['blue', 'purple', 'green', 'orange'];

  const phases = phaseKeys.map((key, idx) => ({
    id: idx,
    name: t(`customerService.implementationRoadmap.phases.${key}.name`),
    duration: t(`customerService.implementationRoadmap.phases.${key}.duration`),
    icon: phaseIcons[idx],
    color: phaseColors[idx],
    objectives: ['obj1', 'obj2', 'obj3', 'obj4', 'obj5'].map(objKey =>
      t(`customerService.implementationRoadmap.phases.${key}.objectives.${objKey}`)
    ),
    deliverables: ['del1', 'del2', 'del3', 'del4', 'del5'].map(delKey =>
      t(`customerService.implementationRoadmap.phases.${key}.deliverables.${delKey}`)
    ),
    activities: ['act1', 'act2', 'act3', 'act4'].map(actKey => ({
      task: t(`customerService.implementationRoadmap.phases.${key}.activities.${actKey}.task`),
      owner: t(`customerService.implementationRoadmap.phases.${key}.activities.${actKey}.owner`),
      duration: t(`customerService.implementationRoadmap.phases.${key}.activities.${actKey}.duration`)
    }))
  }));

  const milestoneKeys = [
    'projectKickoff', 'requirementsComplete', 'integrationStart', 'coreSystemsConnected',
    'pilotLaunch', 'pilotValidation', 'productionReady', 'fullDeployment'
  ] as const;
  const milestoneWeeks = [1, 3, 4, 7, 8, 12, 14, 16];
  const milestonePhases = [0, 0, 1, 1, 2, 2, 3, 3];

  const timeline = milestoneKeys.map((key, idx) => ({
    week: milestoneWeeks[idx],
    phase: milestonePhases[idx],
    milestone: t(`customerService.implementationRoadmap.timeline.milestones.${key}`)
  }));

  const riskKeys = ['integrationComplexity', 'userAdoption', 'dataQuality', 'performanceIssues'] as const;
  const risks = riskKeys.map(key => ({
    risk: t(`customerService.implementationRoadmap.risks.data.${key}.risk`),
    impact: t(`customerService.implementationRoadmap.risks.data.${key}.impact`),
    probability: t(`customerService.implementationRoadmap.risks.data.${key}.probability`),
    mitigation: t(`customerService.implementationRoadmap.risks.data.${key}.mitigation`)
  }));

  const metricKeys = ['ticketResolution', 'aht', 'csat', 'costPerContact', 'agentProductivity', 'fcr'] as const;
  const successMetrics = metricKeys.map(key => ({
    metric: t(`customerService.implementationRoadmap.successMetrics.data.${key}.metric`),
    baseline: t(`customerService.implementationRoadmap.successMetrics.data.${key}.baseline`),
    target: t(`customerService.implementationRoadmap.successMetrics.data.${key}.target`),
    timeline: t(`customerService.implementationRoadmap.successMetrics.data.${key}.timeline`)
  }));

  const techCategoryKeys = ['genAiTools', 'itsmPlatforms', 'integrationTools', 'cloudInfra', 'securityFramework'] as const;
  const technologies = techCategoryKeys.map(key => ({
    category: t(`customerService.implementationRoadmap.techStack.categories.${key}.category`),
    items: t(`customerService.implementationRoadmap.techStack.categories.${key}.items`, { returnObjects: true }) as unknown as string[]
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-warning-light text-warning rounded-full text-xs font-semibold mb-4">
            {t('customerService.implementationRoadmap.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('customerService.implementationRoadmap.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('customerService.implementationRoadmap.header.description')}
          </p>
        </div>

        {/* Timeline Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.implementationRoadmap.timeline.title')}</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-300"></div>
            {timeline.map((item, index) => (
              <div key={index} className="relative flex items-center mb-6">
                <div className={`absolute -left-2 w-5 h-5 rounded-full border-2 ${
                  phases[item.phase].color === 'blue' ? 'bg-secondary border-secondary' :
                  phases[item.phase].color === 'purple' ? 'bg-brand-purple-500 border-brand-purple-600' :
                  phases[item.phase].color === 'green' ? 'bg-success border-success' :
                  'bg-warning border-warning'
                }`}></div>
                <div className="ml-8">
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-500 mr-3">{t('customerService.implementationRoadmap.timeline.week')} {item.week}</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      phases[item.phase].color === 'blue' ? 'bg-secondary-light text-secondary' :
                      phases[item.phase].color === 'purple' ? 'bg-brand-purple-100 text-brand-purple-700' :
                      phases[item.phase].color === 'green' ? 'bg-success-light text-success' :
                      'bg-warning-light text-warning'
                    }`}>
                      {phases[item.phase].name.split(':')[0]}
                    </span>
                  </div>
                  <p className="text-sm text-gray-900 font-semibold mt-1">{item.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.implementationRoadmap.phases.title')}</h2>

          {/* Phase Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setSelectedPhase(phase.id)}
                className={`pb-3 px-1 border-b-2 transition-colors flex items-center ${
                  selectedPhase === phase.id
                    ? phase.color === 'blue' ? 'border-secondary text-secondary' :
                      phase.color === 'purple' ? 'border-brand-purple-600 text-brand-purple-600' :
                      phase.color === 'green' ? 'border-success text-success' :
                      'border-warning text-warning'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <phase.icon className="h-5 w-5 mr-2" />
                <span className="font-medium">{phase.name.split(':')[0]}</span>
              </button>
            ))}
          </div>

          {/* Selected Phase Details */}
          {phases[selectedPhase] && (
            <div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phases[selectedPhase].name}</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  <span>{t('customerService.implementationRoadmap.phases.duration')} {phases[selectedPhase].duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Objectives */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.implementationRoadmap.phases.objectives')}</h4>
                  <ul className="space-y-2">
                    {phases[selectedPhase].objectives.map((objective, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Deliverables */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.implementationRoadmap.phases.deliverables')}</h4>
                  <ul className="space-y-2">
                    {phases[selectedPhase].deliverables.map((deliverable, index) => (
                      <li key={index} className="flex items-start">
                        <DocumentTextIcon className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Activities */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.implementationRoadmap.phases.activities')}</h4>
                  <div className="space-y-2">
                    {phases[selectedPhase].activities.map((activity, index) => (
                      <div key={index} className="bg-gray-50 rounded p-2">
                        <p className="text-sm font-medium text-gray-900">{activity.task}</p>
                        <div className="flex justify-between text-xs text-gray-500 mt-1">
                          <span>{activity.owner}</span>
                          <span>{activity.duration}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Risk Management */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.implementationRoadmap.risks.title')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.implementationRoadmap.risks.risk')}</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.implementationRoadmap.risks.impact')}</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.implementationRoadmap.risks.probability')}</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.implementationRoadmap.risks.mitigation')}</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-900">{risk.risk}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        risk.impact === t('customerService.implementationRoadmap.risks.data.integrationComplexity.impact') ? 'bg-red-100 text-red-700' :
                        risk.impact === t('customerService.implementationRoadmap.risks.data.dataQuality.impact') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.impact}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        risk.probability === t('customerService.implementationRoadmap.risks.data.integrationComplexity.impact') ? 'bg-red-100 text-red-700' :
                        risk.probability === t('customerService.implementationRoadmap.risks.data.dataQuality.impact') ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.probability}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{risk.mitigation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.implementationRoadmap.successMetrics.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {successMetrics.map((metric, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 text-sm mb-2">{metric.metric}</h3>
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-xs text-gray-500">{t('customerService.implementationRoadmap.successMetrics.baseline')}</p>
                    <p className="text-lg font-semibold text-gray-600">{metric.baseline}</p>
                  </div>
                  <ArrowRightIcon className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-xs text-gray-500">{t('customerService.implementationRoadmap.successMetrics.target')}</p>
                    <p className="text-lg font-bold text-green-600">{metric.target}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">{t('customerService.implementationRoadmap.successMetrics.timeline')} {metric.timeline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.implementationRoadmap.techStack.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="border-l-4 border-secondary pl-4">
                <h3 className="font-semibold text-gray-900 mb-2">{tech.category}</h3>
                <ul className="space-y-1">
                  {tech.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600">{'\u2022'} {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ROI Projection */}
        <div className="bg-innovation-gradient rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.implementationRoadmap.roi.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <CalendarIcon className="h-12 w-12 text-warning mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">{t('customerService.implementationRoadmap.roi.breakeven')}</p>
              <p className="text-2xl font-bold text-gray-900">{t('customerService.implementationRoadmap.roi.breakevenValue')}</p>
            </div>
            <div className="text-center">
              <CurrencyDollarIcon className="h-12 w-12 text-success mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">{t('customerService.implementationRoadmap.roi.annualSavings')}</p>
              <p className="text-2xl font-bold text-gray-900">{t('customerService.implementationRoadmap.roi.annualSavingsValue')}</p>
            </div>
            <div className="text-center">
              <ChartBarIcon className="h-12 w-12 text-secondary mx-auto mb-3" />
              <p className="text-sm text-gray-600 mb-1">{t('customerService.implementationRoadmap.roi.threeYearRoi')}</p>
              <p className="text-2xl font-bold text-gray-900">{t('customerService.implementationRoadmap.roi.threeYearRoiValue')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationRoadmap;
