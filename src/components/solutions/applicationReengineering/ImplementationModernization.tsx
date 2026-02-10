import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PaintBrushIcon,
  CodeBracketIcon,
  BeakerIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  UserIcon,
  CpuChipIcon,
  ClockIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ImplementationModernization: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedTrack, setSelectedTrack] = useState<'design' | 'architecture' | 'testing' | 'code'>('design');

  const modernizationTracks = {
    design: {
      title: t('appReengineering.implementationModernization.tracks.design.title'),
      icon: PaintBrushIcon,
      color: 'purple',
      description: t('appReengineering.implementationModernization.tracks.design.description'),
      outputs: t('appReengineering.implementationModernization.tracks.design.outputs', { returnObjects: true }) as unknown as string[],
      approach: t('appReengineering.implementationModernization.tracks.design.approach')
    },
    architecture: {
      title: t('appReengineering.implementationModernization.tracks.architecture.title'),
      icon: CubeIcon,
      color: 'green',
      description: t('appReengineering.implementationModernization.tracks.architecture.description'),
      outputs: t('appReengineering.implementationModernization.tracks.architecture.outputs', { returnObjects: true }) as unknown as string[],
      approach: t('appReengineering.implementationModernization.tracks.architecture.approach')
    },
    testing: {
      title: t('appReengineering.implementationModernization.tracks.testing.title'),
      icon: BeakerIcon,
      color: 'blue',
      description: t('appReengineering.implementationModernization.tracks.testing.description'),
      outputs: t('appReengineering.implementationModernization.tracks.testing.outputs', { returnObjects: true }) as unknown as string[],
      approach: t('appReengineering.implementationModernization.tracks.testing.approach')
    },
    code: {
      title: t('appReengineering.implementationModernization.tracks.code.title'),
      icon: CodeBracketIcon,
      color: 'orange',
      description: t('appReengineering.implementationModernization.tracks.code.description'),
      outputs: t('appReengineering.implementationModernization.tracks.code.outputs', { returnObjects: true }) as unknown as string[],
      approach: t('appReengineering.implementationModernization.tracks.code.approach')
    }
  };

  const currentTrack = modernizationTracks[selectedTrack];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' }
    };
    return colorMap[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/application-reengineering" className="text-sm text-orange-600 hover:text-orange-700 mb-2 inline-block">
            &larr; {t('appReengineering.implementationModernization.backToOverview')}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{t('appReengineering.implementationModernization.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('appReengineering.implementationModernization.header.description')}
          </p>
        </div>

        {/* Validation Gateway */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircleIcon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('appReengineering.implementationModernization.gateway.title')}</h2>
              <p className="text-sm text-gray-700 mb-3">
                {t('appReengineering.implementationModernization.gateway.description')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('appReengineering.implementationModernization.gateway.businessApproved')}
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('appReengineering.implementationModernization.gateway.storiesApproved')}
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('appReengineering.implementationModernization.gateway.uxApproved')}
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('appReengineering.implementationModernization.gateway.archApproved')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Four Modernization Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('appReengineering.implementationModernization.tracks.title')}</h2>

          {/* Track Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(Object.keys(modernizationTracks) as Array<keyof typeof modernizationTracks>).map((key) => {
              const track = modernizationTracks[key];
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
                    {track.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Track Details */}
          <div className={`border-2 ${getColorClasses(currentTrack.color).border} rounded-lg p-6 ${getColorClasses(currentTrack.color).bg}`}>
            <div className="flex items-start mb-4">
              <currentTrack.icon className={`h-8 w-8 ${getColorClasses(currentTrack.color).text} mr-3`} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentTrack.title}</h3>
                <p className="text-sm text-gray-600">{currentTrack.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('appReengineering.implementationModernization.tracks.outputs')}</h4>
                <ul className="space-y-2">
                  {currentTrack.outputs.map((output, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('appReengineering.implementationModernization.tracks.approach')}</h4>
                <p className="text-sm text-gray-700">{currentTrack.approach}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Parallel Development Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start mb-4">
            <BoltIcon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('appReengineering.implementationModernization.parallel.title')}</h2>
              <p className="text-sm text-gray-600">
                {t('appReengineering.implementationModernization.parallel.description')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual */}
            <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center mb-4">
                <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('appReengineering.implementationModernization.parallel.manual.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('appReengineering.implementationModernization.parallel.manual.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.implementationModernization.parallel.manual.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* AI-Powered */}
            <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
              <div className="flex items-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('appReengineering.implementationModernization.parallel.ai.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('appReengineering.implementationModernization.parallel.ai.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.implementationModernization.parallel.ai.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline Comparison */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('appReengineering.implementationModernization.parallel.timelineComparison')}</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">{t('appReengineering.implementationModernization.parallel.traditional')}</p>
                <div className="flex items-center gap-1">
                  <div className="flex-1 bg-red-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual assessment
                  </div>
                  <div className="flex-1 bg-orange-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual planning
                  </div>
                  <div className="flex-1 bg-yellow-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual refactoring
                  </div>
                  <div className="flex-1 bg-green-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual testing
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {t('appReengineering.implementationModernization.parallel.traditionalTimeline')}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">{t('appReengineering.implementationModernization.parallel.breeze')}</p>
                <div className="flex items-start gap-1">
                  <div className="flex-1 space-y-1">
                    <div className="bg-blue-500 h-5 rounded flex items-center justify-center text-xs text-white font-medium">AI Discovery</div>
                    <div className="bg-purple-500 h-5 rounded flex items-center justify-center text-xs text-white font-medium">AI Validation</div>
                    <div className="bg-green-500 h-5 rounded flex items-center justify-center text-xs text-white font-medium">AI Tests</div>
                  </div>
                  <div className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-16 rounded flex items-center justify-center text-xs text-white font-medium">
                    Manual + AI Re-engineering in Parallel
                  </div>
                </div>
                <p className="text-xs text-green-600 mt-1 flex items-center font-semibold">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {t('appReengineering.implementationModernization.parallel.breezeTimeline')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.implementationModernization.agentEcosystem.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('appReengineering.implementationModernization.agentEcosystem.design')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.implementationModernization.agentEcosystem.designAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('appReengineering.implementationModernization.agentEcosystem.architecture')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.implementationModernization.agentEcosystem.architectureAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('appReengineering.implementationModernization.agentEcosystem.testing')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.implementationModernization.agentEcosystem.testingAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('appReengineering.implementationModernization.agentEcosystem.refactoring')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.implementationModernization.agentEcosystem.refactoringAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.implementationModernization.outcomes.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-3">
                <BoltIcon className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('appReengineering.implementationModernization.outcomes.faster.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('appReengineering.implementationModernization.outcomes.faster.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('appReengineering.implementationModernization.outcomes.downtime.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('appReengineering.implementationModernization.outcomes.downtime.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <SparklesIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('appReengineering.implementationModernization.outcomes.livingDocs.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('appReengineering.implementationModernization.outcomes.livingDocs.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">{t('appReengineering.implementationModernization.nextStep.title')}</h2>
          <p className="text-sm mb-4 opacity-90">
            {t('appReengineering.implementationModernization.nextStep.description')}
          </p>
          <Link
            to="/solutions/application-reengineering/validation"
            className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('appReengineering.implementationModernization.nextStep.button')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImplementationModernization;
