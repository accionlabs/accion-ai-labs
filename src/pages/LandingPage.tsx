import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRightIcon,
  BeakerIcon,
  CpuChipIcon,
  ChartBarIcon,
  UserGroupIcon,
  SparklesIcon,
  CommandLineIcon,
  ExclamationTriangleIcon,
  CubeTransparentIcon,
  ArrowPathIcon,
  PhoneIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import { getPublicAssetUrl } from '../utils/assetHelper';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../components/common/LanguageSwitcher';

interface LandingPageProps {
  customLogo?: string;
  customCompanyName?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({
  customLogo,
  customCompanyName = "Accion AI Labs"
}) => {
  const { t } = useTranslation('landing');
  const { t: tc } = useTranslation('common');

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-blue-50 via-white to-brand-purple-50">
      {/* Header */}
      <header className="px-6 py-4 border-b border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {customLogo ? (
              <img src={customLogo} alt={customCompanyName} className="h-8 w-auto" />
            ) : (
              <div className="h-8 w-8 bg-innovation-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
            )}
            <span className="text-xl font-semibold text-gray-900">{customCompanyName}</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/core-technology" className="text-gray-600 hover:text-gray-900">{t('header.technology')}</Link>
            <Link to="/solutions" className="text-gray-600 hover:text-gray-900">{t('header.solutions')}</Link>
            <LanguageSwitcher />
            <Link to="/contact" className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-accion-red/90">
              {t('header.getStarted')}
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-semibold mb-4">
              {t('hero.badge')}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('hero.titleLine1')}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                {t('hero.titleLine2')}
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-4 px-4">
              {t('hero.subtitle')}
            </p>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 px-4">
              {t('hero.stats')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <Link
                to="/core-technology"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-white bg-innovation-gradient rounded-xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('hero.exploreTechnology')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center px-6 py-3 text-base sm:text-lg font-semibold text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
              >
                {t('hero.viewSolutions')}
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Core Technology & Solutions Overview */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {/* Why Knowledge Graphs */}
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
                {t('knowledgeGraphs.title')}
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                {t('knowledgeGraphs.subtitle')}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                <div className="bg-gradient-to-br from-brand-blue-50 to-white rounded-xl border border-brand-blue-200 p-6">
                  <div className="w-12 h-12 bg-brand-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <ShieldCheckIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('knowledgeGraphs.predictable.title')}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('knowledgeGraphs.predictable.description')}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <span className="text-secondary mr-1">✓</span>
                      {t('knowledgeGraphs.predictable.point1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-1">✓</span>
                      {t('knowledgeGraphs.predictable.point2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary mr-1">✓</span>
                      {t('knowledgeGraphs.predictable.point3')}
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-success/10 to-white rounded-xl border border-success/30 p-6">
                  <div className="w-12 h-12 bg-success/20 rounded-lg flex items-center justify-center mb-4">
                    <ChartBarIcon className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('knowledgeGraphs.explainable.title')}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('knowledgeGraphs.explainable.description')}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <span className="text-success mr-1">✓</span>
                      {t('knowledgeGraphs.explainable.point1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-1">✓</span>
                      {t('knowledgeGraphs.explainable.point2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-success mr-1">✓</span>
                      {t('knowledgeGraphs.explainable.point3')}
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-brand-purple-50 to-white rounded-xl border border-brand-purple-200 p-6">
                  <div className="w-12 h-12 bg-brand-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <SparklesIcon className="h-6 w-6 text-brand-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{t('knowledgeGraphs.productivity.title')}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {t('knowledgeGraphs.productivity.description')}
                  </p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="flex items-start">
                      <span className="text-brand-purple-600 mr-1">✓</span>
                      {t('knowledgeGraphs.productivity.point1')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-purple-600 mr-1">✓</span>
                      {t('knowledgeGraphs.productivity.point2')}
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-purple-600 mr-1">✓</span>
                      {t('knowledgeGraphs.productivity.point3')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Technology Section */}
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
                {t('platform.title')}
              </h2>
              <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                {t('platform.subtitle')}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
                <Link to="/core-technology/kaps-framework" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-secondary h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <BeakerIcon className="h-8 w-8 text-secondary mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-secondary text-base">{t('platform.kaps.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      {t('platform.kaps.description')}
                    </p>
                  </div>
                </Link>

                <Link to="/core-technology/agent-architecture" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-brand-purple-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <CubeTransparentIcon className="h-8 w-8 text-brand-purple-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-brand-purple-600 text-base">{t('platform.agentArchitecture.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      {t('platform.agentArchitecture.description')}
                    </p>
                  </div>
                </Link>

                <Link to="/core-technology" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-brand-purple-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <CpuChipIcon className="h-8 w-8 text-brand-purple-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-brand-purple-600 text-base">{t('platform.breezeAI.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      {t('platform.breezeAI.description')}
                    </p>
                  </div>
                </Link>

                <Link to="/core-technology/gen-ai-box" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-success h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <SparklesIcon className="h-8 w-8 text-success mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-success text-base">{t('platform.genAIBox.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      {t('platform.genAIBox.description')}
                    </p>
                  </div>
                </Link>

                <Link to="/core-technology/guardrails" className="group block h-full">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4 sm:p-6 hover:shadow-xl transition-all hover:border-orange-300 h-full flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-3 min-h-[3rem]">
                      <ShieldCheckIcon className="h-8 w-8 text-orange-600 mb-2 sm:mb-0 flex-shrink-0" />
                      <h3 className="sm:ml-3 font-semibold text-gray-900 group-hover:text-orange-600 text-base">{t('platform.guardrails.title')}</h3>
                    </div>
                    <p className="text-sm text-gray-600 flex-1">
                      {t('platform.guardrails.description')}
                    </p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Featured Deep Dives */}
            <div className="mb-8 sm:mb-16">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4 sm:mb-8">
                {t('deepDives.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                <Link to="/solutions/product-development" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-green-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <RocketLaunchIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-600">{t('deepDives.productEngineering.title')}</h3>
                        <span className="text-xs text-gray-500">{tc('labels.completeDeepDiveAvailable')}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('deepDives.productEngineering.description')}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      {t('deepDives.productEngineering.cta')}
                    </div>
                  </div>
                </Link>

                <Link to="/solutions/application-reengineering" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-warning">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                        <ExclamationTriangleIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-warning">{t('deepDives.appReengineering.title')}</h3>
                        <span className="text-xs text-gray-500">{tc('labels.completeDeepDiveAvailable')}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('deepDives.appReengineering.description')}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      {t('deepDives.appReengineering.cta')}
                    </div>
                  </div>
                </Link>

                <Link to="/solutions/portfolio-rationalization" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-brand-purple-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-trust-gradient rounded-lg flex items-center justify-center">
                        <CubeTransparentIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-brand-purple-600">{t('deepDives.portfolioRationalization.title')}</h3>
                        <span className="text-xs text-gray-500">{tc('labels.completeDeepDiveAvailable')}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('deepDives.portfolioRationalization.description')}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      {t('deepDives.portfolioRationalization.cta')}
                    </div>
                  </div>
                </Link>

                <Link to="/solutions/asimov" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-brand-purple-300">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-innovation-gradient rounded-lg flex items-center justify-center">
                        <ArrowPathIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-brand-purple-600">{t('deepDives.asimov.title')}</h3>
                        <span className="text-xs text-gray-500">{tc('labels.completeDeepDiveAvailable')}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('deepDives.asimov.description')}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      {t('deepDives.asimov.cta')}
                    </div>
                  </div>
                </Link>

                <Link to="/solutions/customer-service" className="group">
                  <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-xl transition-all hover:border-success">
                    <div className="flex items-center mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <PhoneIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="font-semibold text-gray-900 group-hover:text-success">{t('deepDives.customerService.title')}</h3>
                        <span className="text-xs text-gray-500">{tc('labels.completeDeepDiveAvailable')}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      {t('deepDives.customerService.description')}
                    </p>
                    <div className="mt-4 flex items-center text-xs text-gray-500">
                      <ArrowRightIcon className="h-3 w-3 mr-1" />
                      {t('deepDives.customerService.cta')}
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Demo Video */}
            <div className="relative bg-gray-900 -mx-4 sm:mx-0 sm:rounded-2xl shadow-2xl overflow-hidden">
              <div className="relative aspect-square sm:aspect-video">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={getPublicAssetUrl("assets/videos/ai-agents-autonomous-business.mp4")} type="video/mp4" />
                  {t('video.fallback')}
                </video>

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 flex items-center justify-center">
                  <div className="text-center px-6 sm:px-12 max-w-4xl">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
                      {t('video.title')}
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-white/90">
                      <span className="hidden sm:inline">{t('video.description')}</span>
                      <span className="sm:hidden">{t('video.descriptionMobile')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution Categories */}
          <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-4">
              {t('solutionCategories.title')}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
              {t('solutionCategories.subtitle')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {/* Engineering Excellence */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CpuChipIcon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('solutionCategories.engineering.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('solutionCategories.engineering.description')}
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('solutionCategories.engineering.point1')}</li>
                  <li>• {t('solutionCategories.engineering.point2')}</li>
                  <li>• {t('solutionCategories.engineering.point3')}</li>
                </ul>
              </div>

              {/* Operational Intelligence */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <ChartBarIcon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('solutionCategories.operational.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('solutionCategories.operational.description')}
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('solutionCategories.operational.point1')}</li>
                  <li>• {t('solutionCategories.operational.point2')}</li>
                  <li>• {t('solutionCategories.operational.point3')}</li>
                </ul>
              </div>

              {/* Business Process Automation */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <UserGroupIcon className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('solutionCategories.businessAutomation.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('solutionCategories.businessAutomation.description')}
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('solutionCategories.businessAutomation.point1')}</li>
                  <li>• {t('solutionCategories.businessAutomation.point2')}</li>
                  <li>• {t('solutionCategories.businessAutomation.point3')}</li>
                </ul>
              </div>

              {/* Intelligent Analytics */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-brand-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <SparklesIcon className="h-6 w-6 text-brand-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('solutionCategories.analytics.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('solutionCategories.analytics.description')}
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('solutionCategories.analytics.point1')}</li>
                  <li>• {t('solutionCategories.analytics.point2')}</li>
                  <li>• {t('solutionCategories.analytics.point3')}</li>
                </ul>
              </div>

              {/* Next-Gen Interfaces */}
              <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <CommandLineIcon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('solutionCategories.interfaces.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('solutionCategories.interfaces.description')}
                </p>
                <ul className="text-xs text-gray-500 space-y-1">
                  <li>• {t('solutionCategories.interfaces.point1')}</li>
                  <li>• {t('solutionCategories.interfaces.point2')}</li>
                  <li>• {t('solutionCategories.interfaces.point3')}</li>
                </ul>
              </div>

              {/* Custom Solutions */}
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border-2 border-dashed border-gray-300 p-6 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                  <BeakerIcon className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{t('solutionCategories.custom.title')}</h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t('solutionCategories.custom.description')}
                </p>
                <Link
                  to="/contact"
                  className="text-sm text-secondary hover:text-secondary/80 font-semibold"
                >
                  {tc('buttons.startConversation')}
                </Link>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 mt-12 sm:mt-20 text-center">
            <div className="bg-innovation-gradient rounded-2xl p-8 sm:p-12 text-white">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                {t('cta.title')}
              </h2>
              <p className="text-lg mb-8 opacity-90">
                {t('cta.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-secondary rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105"
                >
                  {tc('buttons.scheduleWorkshop')}
                </Link>
                <Link
                  to="/core-technology"
                  className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 rounded-xl hover:bg-white/30 transition-all"
                >
                  {tc('buttons.learnMore')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
