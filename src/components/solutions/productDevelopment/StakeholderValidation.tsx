import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const StakeholderValidation: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedTrack, setSelectedTrack] = useState<'po' | 'ba' | 'ux' | 'architect'>('po');

  const validationTracks = {
    po: {
      title: t('productDevelopment.validation.tracks.po.title'),
      icon: UserCircleIcon,
      color: 'blue',
      stakeholder: t('productDevelopment.validation.tracks.po.stakeholder'),
      artifact: t('productDevelopment.validation.tracks.po.artifact'),
      description: t('productDevelopment.validation.tracks.po.description'),
      includes: t('productDevelopment.validation.tracks.po.includes', { returnObjects: true }) as unknown as string[],
      workflow: t('productDevelopment.validation.tracks.po.workflow', { returnObjects: true }) as unknown as { step: string; description: string }[],
      sampleContent: {
        feature: t('productDevelopment.validation.tracks.po.sampleContent.feature'),
        description: t('productDevelopment.validation.tracks.po.sampleContent.description'),
        acceptanceCriteria: t('productDevelopment.validation.tracks.po.sampleContent.acceptanceCriteria', { returnObjects: true }) as unknown as string[],
        businessRules: t('productDevelopment.validation.tracks.po.sampleContent.businessRules', { returnObjects: true }) as unknown as string[]
      }
    },
    ba: {
      title: t('productDevelopment.validation.tracks.ba.title'),
      icon: ClipboardDocumentListIcon,
      color: 'purple',
      stakeholder: t('productDevelopment.validation.tracks.ba.stakeholder'),
      artifact: t('productDevelopment.validation.tracks.ba.artifact'),
      description: t('productDevelopment.validation.tracks.ba.description'),
      includes: t('productDevelopment.validation.tracks.ba.includes', { returnObjects: true }) as unknown as string[],
      workflow: t('productDevelopment.validation.tracks.ba.workflow', { returnObjects: true }) as unknown as { step: string; description: string }[],
      sampleContent: {
        epic: t('productDevelopment.validation.tracks.ba.sampleContent.epic'),
        stories: t('productDevelopment.validation.tracks.ba.sampleContent.stories', { returnObjects: true }) as unknown as { title: string; points: number; acceptance: string[] }[]
      }
    },
    ux: {
      title: t('productDevelopment.validation.tracks.ux.title'),
      icon: PaintBrushIcon,
      color: 'green',
      stakeholder: t('productDevelopment.validation.tracks.ux.stakeholder'),
      artifact: t('productDevelopment.validation.tracks.ux.artifact'),
      description: t('productDevelopment.validation.tracks.ux.description'),
      includes: t('productDevelopment.validation.tracks.ux.includes', { returnObjects: true }) as unknown as string[],
      workflow: t('productDevelopment.validation.tracks.ux.workflow', { returnObjects: true }) as unknown as { step: string; description: string }[],
      sampleContent: {
        flow: t('productDevelopment.validation.tracks.ux.sampleContent.flow'),
        steps: t('productDevelopment.validation.tracks.ux.sampleContent.steps', { returnObjects: true }) as unknown as string[],
        alternativePaths: t('productDevelopment.validation.tracks.ux.sampleContent.alternativePaths', { returnObjects: true }) as unknown as string[]
      }
    },
    architect: {
      title: t('productDevelopment.validation.tracks.architect.title'),
      icon: CubeIcon,
      color: 'orange',
      stakeholder: t('productDevelopment.validation.tracks.architect.stakeholder'),
      artifact: t('productDevelopment.validation.tracks.architect.artifact'),
      description: t('productDevelopment.validation.tracks.architect.description'),
      includes: t('productDevelopment.validation.tracks.architect.includes', { returnObjects: true }) as unknown as string[],
      workflow: t('productDevelopment.validation.tracks.architect.workflow', { returnObjects: true }) as unknown as { step: string; description: string }[],
      sampleContent: {
        component: t('productDevelopment.validation.tracks.architect.sampleContent.component'),
        apis: t('productDevelopment.validation.tracks.architect.sampleContent.apis', { returnObjects: true }) as unknown as string[],
        dependencies: t('productDevelopment.validation.tracks.architect.sampleContent.dependencies', { returnObjects: true }) as unknown as string[]
      }
    }
  };

  const currentTrack = validationTracks[selectedTrack];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-400 to-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-400 to-purple-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-400 to-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-400 to-orange-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/product-development" className="text-sm text-green-600 hover:text-green-700 mb-2 inline-block">
            &larr; {t('productDevelopment.validation.backToOverview')}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{t('productDevelopment.validation.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('productDevelopment.validation.header.description')}
          </p>
        </div>

        {/* Validation Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('productDevelopment.validation.philosophy.title')}</h2>
          <p className="text-sm text-gray-700 mb-4">
            {t('productDevelopment.validation.philosophy.description')}
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('productDevelopment.validation.philosophy.roleViews')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('productDevelopment.validation.philosophy.syncFeedback')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('productDevelopment.validation.philosophy.singleSource')}</span>
            </div>
          </div>
        </div>

        {/* Four Validation Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('productDevelopment.validation.tracks.title')}</h2>

          {/* Track Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(Object.keys(validationTracks) as Array<keyof typeof validationTracks>).map((key) => {
              const track = validationTracks[key];
              const Icon = track.icon;
              const colors = getColorClasses(track.color);
              const isSelected = selectedTrack === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedTrack(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${isSelected ? colors.text : 'text-gray-400'}`} />
                  <p className={`text-xs font-semibold text-center ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                    {track.stakeholder}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Track Details */}
          <div className={`border-2 ${getColorClasses(currentTrack.color).border} rounded-lg p-6 ${getColorClasses(currentTrack.color).bg}`}>
            {/* Header */}
            <div className="flex items-start mb-4">
              <div className={`p-3 bg-gradient-to-br ${getColorClasses(currentTrack.color).gradient} rounded-lg mr-4`}>
                <currentTrack.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentTrack.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{currentTrack.description}</p>
                <div className="inline-flex items-center bg-white rounded px-2 py-1">
                  <DocumentTextIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs font-semibold text-gray-900">{currentTrack.artifact}</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('productDevelopment.validation.tracks.whatsIncluded')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentTrack.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Validation Workflow */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('productDevelopment.validation.tracks.validationWorkflow')}</h4>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
                {currentTrack.workflow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 min-w-[120px]">
                      <div className={`rounded-lg p-3 border-2 ${getColorClasses(currentTrack.color).border} ${getColorClasses(currentTrack.color).bg}`}>
                        <p className="text-xs font-bold text-gray-900 mb-1">{step.step}</p>
                        <p className="text-xs text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {idx < currentTrack.workflow.length - 1 && (
                      <ArrowRightIcon className="h-4 w-4 text-gray-400 flex-shrink-0 transform md:transform-none rotate-90 md:rotate-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Sample Content Preview */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('productDevelopment.validation.tracks.samplePreview')}</h4>
              <div className="border border-gray-200 rounded p-3 font-mono text-xs bg-gray-50">
                {selectedTrack === 'po' && 'feature' in validationTracks.po.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{t('productDevelopment.validation.tracks.labels.feature')} {validationTracks.po.sampleContent.feature}</p>
                    <p className="text-gray-700 mb-2">{validationTracks.po.sampleContent.description}</p>
                    <p className="font-semibold text-gray-900 mb-1">{t('productDevelopment.validation.tracks.labels.acceptanceCriteria')}</p>
                    <ul className="list-disc list-inside space-y-1 mb-2 text-gray-600">
                      {validationTracks.po.sampleContent.acceptanceCriteria.map((criteria: string, idx: number) => (
                        <li key={idx}>{criteria}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-gray-900 mb-1">{t('productDevelopment.validation.tracks.labels.businessRules')}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {validationTracks.po.sampleContent.businessRules.map((rule: string, idx: number) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTrack === 'ba' && 'epic' in validationTracks.ba.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{t('productDevelopment.validation.tracks.labels.epic')} {validationTracks.ba.sampleContent.epic}</p>
                    <div className="space-y-3">
                      {validationTracks.ba.sampleContent.stories.map((story: any, idx: number) => (
                        <div key={idx} className="border-l-2 border-purple-400 pl-3">
                          <p className="font-semibold text-gray-900">{story.title}</p>
                          <p className="text-gray-600">{t('productDevelopment.validation.tracks.labels.storyPoints')} {story.points}</p>
                          <p className="text-gray-600 text-xs mt-1">
                            {t('productDevelopment.validation.tracks.labels.acceptance')} {story.acceptance.join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedTrack === 'ux' && 'flow' in validationTracks.ux.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{validationTracks.ux.sampleContent.flow}</p>
                    <p className="font-semibold text-gray-900 mb-1">{t('productDevelopment.validation.tracks.labels.mainFlow')}</p>
                    <div className="space-y-1 mb-3 text-gray-600">
                      {validationTracks.ux.sampleContent.steps.map((step: string, idx: number) => (
                        <p key={idx}>&rarr; {step}</p>
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">{t('productDevelopment.validation.tracks.labels.alternativePaths')}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {validationTracks.ux.sampleContent.alternativePaths.map((path: string, idx: number) => (
                        <li key={idx}>{path}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTrack === 'architect' && 'component' in validationTracks.architect.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{validationTracks.architect.sampleContent.component}</p>
                    <p className="font-semibold text-gray-900 mb-1">{t('productDevelopment.validation.tracks.labels.apiEndpoints')}</p>
                    <ul className="list-disc list-inside space-y-1 mb-2 text-gray-600">
                      {validationTracks.architect.sampleContent.apis.map((api: string, idx: number) => (
                        <li key={idx}>{api}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-gray-900 mb-1">{t('productDevelopment.validation.tracks.labels.dependencies')}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {validationTracks.architect.sampleContent.dependencies.map((dep: string, idx: number) => (
                        <li key={idx}>{dep}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Validation During Sprints */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start mb-4">
            <BoltIcon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('productDevelopment.validation.sprintValidation.title')}</h2>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.validation.sprintValidation.description')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900">{t('productDevelopment.validation.sprintValidation.step1.title')}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.validation.sprintValidation.step1.description')}
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900">{t('productDevelopment.validation.sprintValidation.step2.title')}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.validation.sprintValidation.step2.description')}
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900">{t('productDevelopment.validation.sprintValidation.step3.title')}</h3>
              </div>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.validation.sprintValidation.step3.description')}
              </p>
            </div>
          </div>

          {/* Example Drift Detection */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-orange-600 mr-2" />
              {t('productDevelopment.validation.sprintValidation.driftExample.title')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">{t('productDevelopment.validation.sprintValidation.driftExample.detectedChange')}</p>
                <p className="text-sm text-gray-900 mb-2">
                  <strong>Architecture Ontology:</strong> {t('productDevelopment.validation.sprintValidation.driftExample.changeDescription')}
                </p>
                <p className="text-xs text-gray-600">
                  {t('productDevelopment.validation.sprintValidation.driftExample.changeDetail')}
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">{t('productDevelopment.validation.sprintValidation.driftExample.recommendedAction')}</p>
                <div className="space-y-2">
                  <div className="flex items-start text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900">{t('productDevelopment.validation.sprintValidation.driftExample.ifIntentional')}</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <XCircleIcon className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900">{t('productDevelopment.validation.sprintValidation.driftExample.ifUnintended')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Continuous Validation */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDevelopment.validation.benefits.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.validation.benefits.preventDebt.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.validation.benefits.preventDebt.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowPathIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.validation.benefits.maintainQuality.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.validation.benefits.maintainQuality.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChartBarIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">{t('productDevelopment.validation.nextStep.title')}</h2>
          <p className="text-sm mb-4 opacity-90">
            {t('productDevelopment.validation.nextStep.description')}
          </p>
          <Link
            to="/solutions/product-development/implementation"
            className="inline-flex items-center px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('productDevelopment.validation.nextStep.button')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StakeholderValidation;
