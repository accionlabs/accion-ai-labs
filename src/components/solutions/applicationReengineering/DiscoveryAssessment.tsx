import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  SparklesIcon,
  CpuChipIcon,
  ChartBarIcon,
  CodeBracketIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentTextIcon,
  BugAntIcon,
  ServerIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';
import AnimatedExtractionProcess from '../../technicalDebt/AnimatedExtractionProcess';
import { useTranslation } from 'react-i18next';

const DiscoveryAssessment: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedOntology, setSelectedOntology] = useState<'functional' | 'design' | 'architecture' | 'code'>('functional');

  const ontologies = {
    functional: {
      title: t('appReengineering.discovery.ontologies.functional.title'),
      icon: ChartBarIcon,
      color: 'blue',
      description: t('appReengineering.discovery.ontologies.functional.description'),
      insights: t('appReengineering.discovery.ontologies.functional.insights', { returnObjects: true }) as unknown as string[]
    },
    design: {
      title: t('appReengineering.discovery.ontologies.design.title'),
      icon: PaintBrushIcon,
      color: 'purple',
      description: t('appReengineering.discovery.ontologies.design.description'),
      insights: t('appReengineering.discovery.ontologies.design.insights', { returnObjects: true }) as unknown as string[]
    },
    architecture: {
      title: t('appReengineering.discovery.ontologies.architecture.title'),
      icon: CubeIcon,
      color: 'green',
      description: t('appReengineering.discovery.ontologies.architecture.description'),
      insights: t('appReengineering.discovery.ontologies.architecture.insights', { returnObjects: true }) as unknown as string[]
    },
    code: {
      title: t('appReengineering.discovery.ontologies.code.title'),
      icon: CodeBracketIcon,
      color: 'orange',
      description: t('appReengineering.discovery.ontologies.code.description'),
      insights: t('appReengineering.discovery.ontologies.code.insights', { returnObjects: true }) as unknown as string[]
    }
  };

  const currentOntology = ontologies[selectedOntology];

  const debtCategories = [
    {
      category: t('appReengineering.discovery.debtCategories.critical.category'),
      count: 147,
      color: 'red',
      icon: ExclamationTriangleIcon,
      description: t('appReengineering.discovery.debtCategories.critical.description'),
      examples: t('appReengineering.discovery.debtCategories.critical.examples', { returnObjects: true }) as unknown as string[]
    },
    {
      category: t('appReengineering.discovery.debtCategories.codeQuality.category'),
      count: 312,
      color: 'orange',
      icon: CodeBracketIcon,
      description: t('appReengineering.discovery.debtCategories.codeQuality.description'),
      examples: t('appReengineering.discovery.debtCategories.codeQuality.examples', { returnObjects: true }) as unknown as string[]
    },
    {
      category: t('appReengineering.discovery.debtCategories.missingTests.category'),
      count: 234,
      color: 'yellow',
      icon: BugAntIcon,
      description: t('appReengineering.discovery.debtCategories.missingTests.description'),
      examples: t('appReengineering.discovery.debtCategories.missingTests.examples', { returnObjects: true }) as unknown as string[]
    },
    {
      category: t('appReengineering.discovery.debtCategories.performance.category'),
      count: 89,
      color: 'purple',
      icon: ServerIcon,
      description: t('appReengineering.discovery.debtCategories.performance.description'),
      examples: t('appReengineering.discovery.debtCategories.performance.examples', { returnObjects: true }) as unknown as string[]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/application-reengineering" className="text-sm text-orange-600 hover:text-orange-700 mb-2 inline-block">
            &larr; {t('appReengineering.discovery.backToOverview')}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{t('appReengineering.discovery.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('appReengineering.discovery.header.description')}
          </p>
        </div>

        {/* Case Study Context */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.discovery.caseStudy.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('appReengineering.discovery.caseStudy.systemOverview')}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {(t('appReengineering.discovery.caseStudy.systemOverviewItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('appReengineering.discovery.caseStudy.technicalStack')}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {(t('appReengineering.discovery.caseStudy.technicalStackItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('appReengineering.discovery.caseStudy.challenges')}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {(t('appReengineering.discovery.caseStudy.challengesItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Step 1: Automated Extraction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.discovery.step1.title')}</h2>
          <p className="text-sm text-gray-600 mb-6">
            {t('appReengineering.discovery.step1.description')}
          </p>

          <AnimatedExtractionProcess />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">{t('appReengineering.discovery.step1.whatWeAnalyze')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.discovery.step1.analyzeItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">{t('appReengineering.discovery.step1.whatWeDiscover')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('appReengineering.discovery.step1.discoverItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2: Four Ontology Graphs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.discovery.step2.title')}</h2>
          <p className="text-sm text-gray-600 mb-6">
            {t('appReengineering.discovery.step2.description')}
          </p>

          {/* Ontology Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {(Object.keys(ontologies) as Array<keyof typeof ontologies>).map((key) => {
              const ont = ontologies[key];
              const Icon = ont.icon;
              const colors = getColorClasses(ont.color);
              const isSelected = selectedOntology === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedOntology(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-6 w-6 mx-auto mb-2 ${isSelected ? colors.text : 'text-gray-400'}`} />
                  <p className={`text-xs font-semibold ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                    {ont.title}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Ontology Details */}
          <div className={`border-2 ${getColorClasses(currentOntology.color).border} rounded-lg p-6 ${getColorClasses(currentOntology.color).bg}`}>
            <div className="flex items-start mb-4">
              <currentOntology.icon className={`h-8 w-8 ${getColorClasses(currentOntology.color).text} mr-3`} />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentOntology.title}</h3>
                <p className="text-sm text-gray-600">{currentOntology.description}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('appReengineering.discovery.step2.keyInsights')}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentOntology.insights.map((insight, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircleIcon className={`h-4 w-4 ${getColorClasses(currentOntology.color).text} mr-2 mt-0.5 flex-shrink-0`} />
                    {insight}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 bg-blue-100 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                <strong>{t('appReengineering.discovery.step2.interactiveExplorer')}</strong> {t('appReengineering.discovery.step2.interactiveExplorerDesc')}{' '}
                <Link to="/technical-debt/graph-explorer" className="underline font-semibold">
                  {t('appReengineering.discovery.step2.tryInteractive')}
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Technical Debt Assessment */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.discovery.step3.title')}</h2>
          <p className="text-sm text-gray-600 mb-6">
            {t('appReengineering.discovery.step3.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {debtCategories.map((category, index) => {
              const Icon = category.icon;
              const colors = getColorClasses(category.color);

              return (
                <div key={index} className={`border-2 ${colors.border} rounded-lg p-5 ${colors.bg}`}>
                  <div className="flex items-start mb-3">
                    <Icon className={`h-7 w-7 ${colors.text} mr-3 flex-shrink-0`} />
                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <h3 className="font-semibold text-gray-900">{category.category}</h3>
                        <span className={`text-2xl font-bold ${colors.text}`}>{category.count}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded p-3">
                    <p className="text-xs font-semibold text-gray-700 mb-2">{t('appReengineering.discovery.step3.examples')}</p>
                    <ul className="space-y-1">
                      {category.examples.map((example, idx) => (
                        <li key={idx} className="text-xs text-gray-600">• {example}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-start">
              <ShieldCheckIcon className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('appReengineering.discovery.step3.impactAnalysis.title')}</h4>
                <p className="text-sm text-gray-700 mb-2">
                  {t('appReengineering.discovery.step3.impactAnalysis.description')}
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  {(t('appReengineering.discovery.step3.impactAnalysis.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                    <li key={idx}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Summary */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('appReengineering.discovery.summary.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4">
              <DocumentTextIcon className="h-6 w-6 text-blue-600 mb-2" />
              <p className="font-semibold text-gray-900">{t('appReengineering.discovery.summary.comprehensive.title')}</p>
              <p className="text-sm text-gray-600 mt-1">
                {t('appReengineering.discovery.summary.comprehensive.description')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-orange-600 mb-2" />
              <p className="font-semibold text-gray-900">{t('appReengineering.discovery.summary.issues.title')}</p>
              <p className="text-sm text-gray-600 mt-1">
                {t('appReengineering.discovery.summary.issues.description')}
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <ChartBarIcon className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold text-gray-900">{t('appReengineering.discovery.summary.roi.title')}</p>
              <p className="text-sm text-gray-600 mt-1">
                {t('appReengineering.discovery.summary.roi.description')}
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            {t('appReengineering.discovery.summary.conclusion')}
          </p>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">{t('appReengineering.discovery.nextStep.title')}</h2>
          <p className="text-sm mb-4 opacity-90">
            {t('appReengineering.discovery.nextStep.description')}
          </p>
          <Link
            to="/solutions/application-reengineering/strategy"
            className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('appReengineering.discovery.nextStep.button')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryAssessment;
