import React from 'react';
import { Link } from 'react-router-dom';
import { getPublicAssetUrl } from '../../utils/assetHelper';
import { useTranslation } from 'react-i18next';

const PortfolioOverview: React.FC = () => {
  const { t } = useTranslation('portfolio');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('overview.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('overview.subtitle')}
          </p>
        </div>

        {/* Demo Scenario */}
        <div id="demo-scenario" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('overview.demoScenario.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('overview.demoScenario.description')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">P</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phoenix CRM</h3>
                  <p className="text-xs text-gray-500">{t('overview.demoScenario.phoenix.subtitle')}</p>
                </div>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• {t('overview.demoScenario.phoenix.features.auth')}</li>
                <li>• {t('overview.demoScenario.phoenix.features.rendering')}</li>
                <li>• {t('overview.demoScenario.phoenix.features.interactions')}</li>
                <li>• {t('overview.demoScenario.phoenix.features.hashing')}</li>
                <li>• {t('overview.demoScenario.phoenix.features.database')}</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Apollo Launchpad</h3>
                  <p className="text-xs text-gray-500">{t('overview.demoScenario.apollo.subtitle')}</p>
                </div>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• {t('overview.demoScenario.apollo.features.auth')}</li>
                <li>• {t('overview.demoScenario.apollo.features.spa')}</li>
                <li>• {t('overview.demoScenario.apollo.features.architecture')}</li>
                <li>• {t('overview.demoScenario.apollo.features.hashing')}</li>
                <li>• {t('overview.demoScenario.apollo.features.database')}</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-purple-50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">V</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Voyager Analytics</h3>
                  <p className="text-xs text-gray-500">{t('overview.demoScenario.voyager.subtitle')}</p>
                </div>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• {t('overview.demoScenario.voyager.features.auth')}</li>
                <li>• {t('overview.demoScenario.voyager.features.architecture')}</li>
                <li>• {t('overview.demoScenario.voyager.features.processing')}</li>
                <li>• {t('overview.demoScenario.voyager.features.security')}</li>
                <li>• {t('overview.demoScenario.voyager.features.database')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 1: Agent-Based Extraction Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-2">
            <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-3">{t('overview.step1.label')}</span>
            <h2 className="text-xl font-semibold text-gray-900">{t('overview.step1.title')}</h2>
          </div>
          <p className="text-gray-600 mb-6">
            {t('overview.step1.description')}
          </p>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <img
              src={getPublicAssetUrl("assets/diagrams/portfolio-extraction-process.svg")}
              alt={t('overview.step1.imageAlt')}
              className="w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Step 2: Portfolio Rationalization Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-2">
            <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full mr-3">{t('overview.step2.label')}</span>
            <h2 className="text-xl font-semibold text-gray-900">{t('overview.step2.title')}</h2>
          </div>
          <p className="text-gray-600 mb-6">
            {t('overview.step2.description')}
          </p>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 overflow-x-auto">
            <img
              src={getPublicAssetUrl("assets/diagrams/portfolio-rationalization-process.svg")}
              alt={t('overview.step2.imageAlt')}
              className="w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>{t('overview.step2.note.title')}</strong> {t('overview.step2.note.content')}
            </p>
          </div>
        </div>

        {/* Interactive Tools */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('overview.tools.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/portfolio/graph-explorer"
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">{'\uD83D\uDD78\uFE0F'}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.tools.graphExplorer.title')}</h3>
              <p className="text-sm text-gray-600">{t('overview.tools.graphExplorer.description')}</p>
              <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">{t('overview.tools.graphExplorer.badge')}</span>
            </Link>

            <Link
              to="/portfolio/component-comparator"
              className="block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">{'\uD83D\uDD0D'}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.tools.comparator.title')}</h3>
              <p className="text-sm text-gray-600">{t('overview.tools.comparator.description')}</p>
              <span className="inline-block mt-3 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">{t('overview.tools.comparator.badge')}</span>
            </Link>

            <Link
              to="/portfolio/rationalization-roadmap"
              className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">{'\uD83C\uDFAF'}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.tools.roadmap.title')}</h3>
              <p className="text-sm text-gray-600">{t('overview.tools.roadmap.description')}</p>
              <span className="inline-block mt-3 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">{t('overview.tools.roadmap.badge')}</span>
            </Link>

            <Link
              to="/portfolio/unified-product"
              className="block p-6 border border-gray-200 rounded-lg hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-emerald-600 text-xl">{'\uD83D\uDD2C'}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('overview.tools.unifiedProduct.title')}</h3>
              <p className="text-sm text-gray-600">{t('overview.tools.unifiedProduct.description')}</p>
              <span className="inline-block mt-3 text-xs bg-emerald-100 text-emerald-600 px-2 py-1 rounded">{t('overview.tools.unifiedProduct.badge')}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;
