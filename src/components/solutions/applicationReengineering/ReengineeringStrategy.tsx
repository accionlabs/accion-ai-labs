import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  MapIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ReengineeringStrategy: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedTrack, setSelectedTrack] = useState<'business' | 'ba' | 'ux' | 'architect'>('business');

  const validationTracks = {
    business: {
      title: t('appReengineering.strategy.tracks.business.title'),
      icon: UserCircleIcon,
      color: 'blue',
      stakeholder: t('appReengineering.strategy.tracks.business.stakeholder'),
      artifact: t('appReengineering.strategy.tracks.business.artifact'),
      description: t('appReengineering.strategy.tracks.business.description'),
      includes: t('appReengineering.strategy.tracks.business.includes', { returnObjects: true }) as unknown as string[],
      sample: t('appReengineering.strategy.tracks.business.sample')
    },
    ba: {
      title: t('appReengineering.strategy.tracks.ba.title'),
      icon: ClipboardDocumentListIcon,
      color: 'purple',
      stakeholder: t('appReengineering.strategy.tracks.ba.stakeholder'),
      artifact: t('appReengineering.strategy.tracks.ba.artifact'),
      description: t('appReengineering.strategy.tracks.ba.description'),
      includes: t('appReengineering.strategy.tracks.ba.includes', { returnObjects: true }) as unknown as string[],
      sample: t('appReengineering.strategy.tracks.ba.sample')
    },
    ux: {
      title: t('appReengineering.strategy.tracks.ux.title'),
      icon: PaintBrushIcon,
      color: 'green',
      stakeholder: t('appReengineering.strategy.tracks.ux.stakeholder'),
      artifact: t('appReengineering.strategy.tracks.ux.artifact'),
      description: t('appReengineering.strategy.tracks.ux.description'),
      includes: t('appReengineering.strategy.tracks.ux.includes', { returnObjects: true }) as unknown as string[],
      sample: t('appReengineering.strategy.tracks.ux.sample')
    },
    architect: {
      title: t('appReengineering.strategy.tracks.architect.title'),
      icon: CubeIcon,
      color: 'orange',
      stakeholder: t('appReengineering.strategy.tracks.architect.stakeholder'),
      artifact: t('appReengineering.strategy.tracks.architect.artifact'),
      description: t('appReengineering.strategy.tracks.architect.description'),
      includes: t('appReengineering.strategy.tracks.architect.includes', { returnObjects: true }) as unknown as string[],
      sample: t('appReengineering.strategy.tracks.architect.sample')
    }
  };

  const currentTrack = validationTracks[selectedTrack];

  const reengineeringPhases = t('appReengineering.strategy.roadmap.phases', { returnObjects: true }) as unknown as { phase: string; duration: string; focus: string; deliverables: string[]; risk: string }[];

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
          <Link to="/solutions/application-reengineering" className="text-sm text-orange-600 hover:text-orange-700 mb-2 inline-block">
            &larr; {t('appReengineering.strategy.backToOverview')}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{t('appReengineering.strategy.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('appReengineering.strategy.header.description')}
          </p>
        </div>

        {/* Strategy Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">{t('appReengineering.strategy.philosophy.title')}</h2>
          <p className="text-sm text-gray-700 mb-4">
            {t('appReengineering.strategy.philosophy.description')}
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('appReengineering.strategy.philosophy.preserveValue')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('appReengineering.strategy.philosophy.improveUx')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('appReengineering.strategy.philosophy.modernizeArch')}</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>{t('appReengineering.strategy.philosophy.eliminateDebt')}</span>
            </div>
          </div>
        </div>

        {/* Four Validation Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('appReengineering.strategy.tracks.title')}</h2>

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
            <div className="flex items-start mb-4">
              <div className={`p-3 bg-gradient-to-br ${getColorClasses(currentTrack.color).gradient} rounded-lg mr-4`}>
                <currentTrack.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentTrack.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{currentTrack.description}</p>
                <div className="inline-flex items-center bg-white rounded px-2 py-1">
                  <MapIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs font-semibold text-gray-900">{currentTrack.artifact}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('appReengineering.strategy.tracks.whatsIncluded')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentTrack.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('appReengineering.strategy.tracks.phoenixExample')}</h4>
              <p className="text-sm text-gray-700 font-mono">{currentTrack.sample}</p>
            </div>
          </div>
        </div>

        {/* Current vs Target Architecture */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('appReengineering.strategy.architecture.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current */}
            <div className="border-2 border-red-200 rounded-lg p-5 bg-red-50">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                {t('appReengineering.strategy.architecture.current')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.strategy.architecture.currentItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Target */}
            <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                {t('appReengineering.strategy.architecture.target')}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.strategy.architecture.targetItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>{t('appReengineering.strategy.architecture.migrationStrategy')}</strong> {t('appReengineering.strategy.architecture.migrationStrategyDesc')}
            </p>
          </div>
        </div>

        {/* Re-engineering Roadmap */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('appReengineering.strategy.roadmap.title')}</h2>
          <p className="text-sm text-gray-600 mb-6">
            {t('appReengineering.strategy.roadmap.description')}
          </p>

          <div className="space-y-4">
            {reengineeringPhases.map((phase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-orange-600">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 ml-11">{phase.focus}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    phase.risk === 'Low' ? 'bg-green-100 text-green-700' :
                    phase.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {phase.risk} {t('appReengineering.strategy.roadmap.risk')}
                  </span>
                </div>
                <div className="ml-11 grid grid-cols-2 md:grid-cols-4 gap-2">
                  {phase.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700">
                      <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Gateway */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-start">
            <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('appReengineering.strategy.validationGateway.title')}</h2>
              <p className="text-sm text-gray-700 mb-4">
                {t('appReengineering.strategy.validationGateway.description')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {(t('appReengineering.strategy.validationGateway.approvals', { returnObjects: true }) as unknown as string[]).map((approval, idx) => (
                  <div key={idx} className="flex items-center text-sm bg-white rounded px-2 py-1">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-1" />
                    <span>{approval}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">{t('appReengineering.strategy.nextStep.title')}</h2>
          <p className="text-sm mb-4 opacity-90">
            {t('appReengineering.strategy.nextStep.description')}
          </p>
          <Link
            to="/solutions/application-reengineering/implementation"
            className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('appReengineering.strategy.nextStep.button')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReengineeringStrategy;
