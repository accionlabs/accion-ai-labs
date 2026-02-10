import React from 'react';
import { Link } from 'react-router-dom';
import {
  CodeBracketIcon,
  BeakerIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  DocumentTextIcon,
  CircleStackIcon,
  SparklesIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import GeneralAnimatedExtraction from './GeneralAnimatedExtraction';
import { useTranslation } from 'react-i18next';

const CoreTechnologyOverview: React.FC = () => {
  const { t } = useTranslation('coreTechnology');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-4">
            {t('overview.header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('overview.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('overview.header.description')}
          </p>
        </div>

        {/* Why Graphs Work Better */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('overview.whyGraphs.title')}</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('overview.whyGraphs.limitations.title')}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">1.</span>
                  <div>
                    <strong className="text-gray-900">{t('overview.whyGraphs.limitations.promptEngineering.label')}</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('overview.whyGraphs.limitations.promptEngineering.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">2.</span>
                  <div>
                    <strong className="text-gray-900">{t('overview.whyGraphs.limitations.vectorEmbeddings.label')}</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('overview.whyGraphs.limitations.vectorEmbeddings.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-400 mr-3 mt-1">3.</span>
                  <div>
                    <strong className="text-gray-900">{t('overview.whyGraphs.limitations.rag.label')}</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('overview.whyGraphs.limitations.rag.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('overview.whyGraphs.graphAdvantage.title')}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">{t('overview.whyGraphs.graphAdvantage.completeContext.label')}</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('overview.whyGraphs.graphAdvantage.completeContext.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">{t('overview.whyGraphs.graphAdvantage.semanticRelationships.label')}</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('overview.whyGraphs.graphAdvantage.semanticRelationships.description')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-secondary mr-2 mt-1">✓</span>
                  <div>
                    <strong className="text-gray-900">{t('overview.whyGraphs.graphAdvantage.traversableStructure.label')}</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      {t('overview.whyGraphs.graphAdvantage.traversableStructure.description')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-secondary/10 rounded-lg">
            <p className="text-sm text-secondary">
              <strong>{t('overview.whyGraphs.keyInsight.label')}</strong> {t('overview.whyGraphs.keyInsight.description')}
            </p>
          </div>
        </div>

        {/* The Process - Three Boxes */}
        <div className="bg-gradient-to-r from-secondary to-brand-purple-600 rounded-2xl p-8 sm:p-12 text-white mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">
            {t('overview.process.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <DocumentTextIcon className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">{t('overview.process.existingInfo.title')}</h3>
              <p className="text-sm opacity-90">
                {t('overview.process.existingInfo.description')}
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <CircleStackIcon className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">{t('overview.process.semanticKnowledgeGraph.title')}</h3>
              <p className="text-sm opacity-90">
                {t('overview.process.semanticKnowledgeGraph.description')}
              </p>
            </div>

            <div className="bg-white/20 backdrop-blur rounded-xl p-6 text-center">
              <SparklesIcon className="h-12 w-12 mx-auto mb-3" />
              <h3 className="font-semibold text-lg mb-2">{t('overview.process.customAgents.title')}</h3>
              <p className="text-sm opacity-90">
                {t('overview.process.customAgents.description')}
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg opacity-90">
              {t('overview.process.bottomText')}
            </p>
          </div>
        </div>

        {/* The Four Ontologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('overview.ontologyFramework.title')}</h2>
          <p className="text-gray-600 mb-8">
            {t('overview.ontologyFramework.description')}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border-l-4 border-secondary pl-4">
              <div className="flex items-center mb-2">
                <CodeBracketIcon className="h-6 w-6 text-secondary mr-2" />
                <h3 className="font-semibold text-gray-900">{t('overview.ontologyFramework.code.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                <strong>{t('overview.ontologyFramework.code.subtitle')}</strong> - {t('overview.ontologyFramework.code.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.ontologyFramework.code.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-brand-purple-500 pl-4">
              <div className="flex items-center mb-2">
                <BeakerIcon className="h-6 w-6 text-brand-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('overview.ontologyFramework.functional.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t('overview.ontologyFramework.functional.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.ontologyFramework.functional.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-pink-500 pl-4">
              <div className="flex items-center mb-2">
                <PaintBrushIcon className="h-6 w-6 text-pink-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('overview.ontologyFramework.design.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t('overview.ontologyFramework.design.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.ontologyFramework.design.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-success pl-4">
              <div className="flex items-center mb-2">
                <CubeIcon className="h-6 w-6 text-success mr-2" />
                <h3 className="font-semibold text-gray-900">{t('overview.ontologyFramework.architecture.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                {t('overview.ontologyFramework.architecture.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.ontologyFramework.architecture.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>{t('overview.ontologyFramework.crossOntology.label')}</strong> {t('overview.ontologyFramework.crossOntology.description')}
            </p>
          </div>
        </div>

        {/* Knowledge Extraction Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 lg:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">{t('overview.knowledgeExtraction.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('overview.knowledgeExtraction.description')}
          </p>

          {/* Animated Extraction Process */}
          <GeneralAnimatedExtraction />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('overview.knowledgeExtraction.patternRecognition.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.knowledgeExtraction.patternRecognition.description')}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('overview.knowledgeExtraction.continuousLearning.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.knowledgeExtraction.continuousLearning.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Agent-Based Artifact Generation */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-3 sm:p-6 lg:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">{t('overview.artifactGeneration.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('overview.artifactGeneration.description')}
          </p>

          <div className="bg-gradient-to-r from-secondary/10 to-brand-purple-50 rounded-xl p-6 mb-8 border border-secondary/20">
            <div className="flex items-center mb-4">
              <SparklesIcon className="h-8 w-8 text-secondary mr-3" />
              <h3 className="text-lg font-semibold text-gray-900">{t('overview.artifactGeneration.bidirectional.title')}</h3>
            </div>
            <p className="text-sm text-gray-700">
              {t('overview.artifactGeneration.bidirectional.description')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-secondary/20 rounded-lg p-4 bg-gradient-to-br from-blue-50 to-white">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center mb-3">
                <BeakerIcon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.artifactGeneration.functional.title')}</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                {(t('overview.artifactGeneration.functional.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-pink-200 rounded-lg p-4 bg-gradient-to-br from-pink-50 to-white">
              <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                <PaintBrushIcon className="h-6 w-6 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.artifactGeneration.design.title')}</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                {(t('overview.artifactGeneration.design.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-green-200 rounded-lg p-4 bg-gradient-to-br from-green-50 to-white">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                <CubeIcon className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.artifactGeneration.architecture.title')}</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                {(t('overview.artifactGeneration.architecture.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border border-purple-200 rounded-lg p-4 bg-gradient-to-br from-purple-50 to-white">
              <div className="w-10 h-10 bg-brand-purple-100 rounded-lg flex items-center justify-center mb-3">
                <CodeBracketIcon className="h-6 w-6 text-brand-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.artifactGeneration.implementation.title')}</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                {(t('overview.artifactGeneration.implementation.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 bg-success/10 rounded-lg border border-success/20">
            <div className="flex items-start">
              <SparklesIcon className="h-6 w-6 text-success mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{t('overview.artifactGeneration.keyAdvantage.title')}</h4>
                <p className="text-sm text-gray-700">
                  {t('overview.artifactGeneration.keyAdvantage.description')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Team & Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('overview.customSolutions.title')}</h2>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('overview.customSolutions.team.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-secondary pl-4">
                <div className="flex items-center mb-2">
                  <CogIcon className="h-6 w-6 text-secondary mr-2" />
                  <h4 className="font-semibold text-gray-900">{t('overview.customSolutions.team.breezeFramework.title')}</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t('overview.customSolutions.team.breezeFramework.description')}
                </p>
              </div>

              <div className="border-l-4 border-brand-purple-500 pl-4">
                <div className="flex items-center mb-2">
                  <AcademicCapIcon className="h-6 w-6 text-brand-purple-600 mr-2" />
                  <h4 className="font-semibold text-gray-900">{t('overview.customSolutions.team.semanticEngineers.title')}</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t('overview.customSolutions.team.semanticEngineers.description')}
                </p>
              </div>

              <div className="border-l-4 border-success pl-4">
                <div className="flex items-center mb-2">
                  <UserGroupIcon className="h-6 w-6 text-success mr-2" />
                  <h4 className="font-semibold text-gray-900">{t('overview.customSolutions.team.agentDevelopers.title')}</h4>
                </div>
                <p className="text-sm text-gray-600">
                  {t('overview.customSolutions.team.agentDevelopers.description')}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-secondary">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.customSolutions.steps.step1.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.customSolutions.steps.step1.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-brand-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-brand-purple-600">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.customSolutions.steps.step2.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.customSolutions.steps.step2.description')}
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-success">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.customSolutions.steps.step3.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.customSolutions.steps.step3.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Why This Works */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('overview.whyWorks.title')}</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('overview.whyWorks.technicalFoundation.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-0.5">•</span>
                  <span><strong>Graph Traversal:</strong> {t('overview.whyWorks.technicalFoundation.graphTraversal')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-0.5">•</span>
                  <span><strong>Semantic Anchoring:</strong> {t('overview.whyWorks.technicalFoundation.semanticAnchoring')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-2 mt-0.5">•</span>
                  <span><strong>Explicit Relationships:</strong> {t('overview.whyWorks.technicalFoundation.explicitRelationships')}</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{t('overview.whyWorks.practicalBenefits.title')}</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="text-success mr-2 mt-0.5">•</span>
                  <span><strong>Consistent Results:</strong> {t('overview.whyWorks.practicalBenefits.consistentResults')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 mt-0.5">•</span>
                  <span><strong>Complete Understanding:</strong> {t('overview.whyWorks.practicalBenefits.completeUnderstanding')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2 mt-0.5">•</span>
                  <span><strong>Explainable Decisions:</strong> {t('overview.whyWorks.practicalBenefits.explainableDecisions')}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Deep Dive Section */}
        <div className="bg-gradient-to-br from-secondary/5 via-brand-purple-50 to-pink-50 rounded-xl border border-secondary/20 p-6 sm:p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center mr-4">
              <CircleStackIcon className="h-7 w-7 text-secondary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">{t('overview.deepDive.title')}</h2>
              <p className="text-sm text-gray-600">{t('overview.deepDive.subtitle')}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Challenge & Solution */}
            <Link
              to="/breeze-process/challenge/manual-translation-tax"
              className="group bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-secondary/40 transition-all"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <SparklesIcon className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">{t('overview.deepDive.challenge.title')}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('overview.deepDive.challenge.description')}
                  </p>
                </div>
              </div>
              <ul className="text-xs text-gray-500 space-y-1 ml-13 pl-13">
                {(t('overview.deepDive.challenge.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <span className="text-secondary text-sm mt-3 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.deepDive.challenge.link')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            {/* System Architecture */}
            <Link
              to="/breeze-process/architecture/overview"
              className="group bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-secondary/40 transition-all"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <CubeIcon className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">{t('overview.deepDive.architecture.title')}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('overview.deepDive.architecture.description')}
                  </p>
                </div>
              </div>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.deepDive.architecture.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <span className="text-secondary text-sm mt-3 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.deepDive.architecture.link')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            {/* Semantic Model */}
            <Link
              to="/breeze-process/semantic/overview"
              className="group bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-secondary/40 transition-all"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <CircleStackIcon className="h-5 w-5 text-brand-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">{t('overview.deepDive.semantic.title')}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('overview.deepDive.semantic.description')}
                  </p>
                </div>
              </div>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.deepDive.semantic.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <span className="text-secondary text-sm mt-3 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.deepDive.semantic.link')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            {/* Process Flow */}
            <Link
              to="/breeze-process/flow/overview"
              className="group bg-white rounded-xl p-5 border border-gray-200 hover:shadow-lg hover:border-secondary/40 transition-all"
            >
              <div className="flex items-start mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <CogIcon className="h-5 w-5 text-success" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-secondary transition-colors">{t('overview.deepDive.processFlow.title')}</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {t('overview.deepDive.processFlow.description')}
                  </p>
                </div>
              </div>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('overview.deepDive.processFlow.items', { returnObjects: true }) as unknown as string[]).map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              <span className="text-secondary text-sm mt-3 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.deepDive.processFlow.link')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* Platform Integration Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('overview.platformIntegration.title')}</h2>
          <p className="text-gray-600 mb-8">
            {t('overview.platformIntegration.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              to="/core-technology/kaps-framework"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-brand-purple-300"
            >
              <CircleStackIcon className="h-8 w-8 text-brand-purple-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.platformIntegration.kapsFramework.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.platformIntegration.kapsFramework.description')}
              </p>
              <span className="text-brand-purple-600 text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.platformIntegration.learnMore')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/core-technology/agentic-architecture"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-success"
            >
              <CubeIcon className="h-8 w-8 text-success mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.platformIntegration.agenticArchitecture.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.platformIntegration.agenticArchitecture.description')}
              </p>
              <span className="text-success text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.platformIntegration.learnMore')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/core-technology/gen-ai-box"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-orange-300"
            >
              <BeakerIcon className="h-8 w-8 text-orange-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.platformIntegration.genAIBox.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.platformIntegration.genAIBox.description')}
              </p>
              <span className="text-orange-600 text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.platformIntegration.learnMore')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>

            <Link
              to="/core-technology/guardrails"
              className="group border rounded-lg p-4 hover:shadow-lg transition-all hover:border-red-300"
            >
              <DocumentTextIcon className="h-8 w-8 text-red-600 mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">{t('overview.platformIntegration.strategicGuardrails.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('overview.platformIntegration.strategicGuardrails.description')}
              </p>
              <span className="text-red-600 text-sm mt-2 inline-flex items-center group-hover:gap-2 transition-all">
                {t('overview.platformIntegration.learnMore')} <ArrowRightIcon className="h-4 w-4 ml-1" />
              </span>
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-secondary to-brand-purple-600 rounded-2xl p-8 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            {t('overview.cta.title')}
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            {t('overview.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/solutions/product-development"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-secondary rounded-xl hover:bg-gray-100 transition-all"
            >
              {t('overview.cta.productEngineering')}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/solutions/application-reengineering"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 rounded-xl hover:bg-white/30 transition-all"
            >
              {t('overview.cta.applicationReengineering')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreTechnologyOverview;
