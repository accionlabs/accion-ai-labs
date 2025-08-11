import React from 'react';
import { Link } from 'react-router-dom';
import { getPublicAssetUrl } from '../../utils/assetHelper';

const PortfolioOverview: React.FC = () => {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Rationalization</h1>
          <p className="mt-2 text-gray-600">
            Analyze and optimize your product portfolio through systematic UX rationalization
          </p>
        </div>

        {/* Demo Scenario */}
        <div id="demo-scenario" className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Demo Scenario: Enterprise Authentication</h2>
          <p className="text-gray-600 mb-6">
            Explore how three different products in an enterprise portfolio handle 
            user authentication, revealing opportunities for standardization and optimization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border border-gray-200 rounded-lg p-4 bg-red-50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-red-600 font-bold">P</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phoenix CRM</h3>
                  <p className="text-xs text-gray-500">Legacy PHP/MySQL System</p>
                </div>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Basic username/password authentication</li>
                <li>• Server-rendered PHP pages</li>
                <li>• jQuery-based interactions</li>
                <li>• MD5 password hashing (insecure)</li>
                <li>• MySQL database</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-blue-50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-blue-600 font-bold">A</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Apollo Launchpad</h3>
                  <p className="text-xs text-gray-500">Modern React SPA</p>
                </div>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Email-based authentication with 2FA</li>
                <li>• React SPA with JWT tokens</li>
                <li>• Modern component architecture</li>
                <li>• bcrypt password hashing</li>
                <li>• MongoDB database</li>
              </ul>
            </div>

            <div className="border border-gray-200 rounded-lg p-4 bg-purple-50">
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-purple-600 font-bold">V</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Voyager Analytics</h3>
                  <p className="text-xs text-gray-500">Vue.js Dashboard</p>
                </div>
              </div>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• SSO integration with SAML</li>
                <li>• Vue.js micro-frontend architecture</li>
                <li>• Real-time data processing</li>
                <li>• Enterprise-grade security</li>
                <li>• ElasticSearch backend</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 1: Agent-Based Extraction Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-2">
            <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full mr-3">Step 1</span>
            <h2 className="text-xl font-semibold text-gray-900">Agent-Based Extraction</h2>
          </div>
          <p className="text-gray-600 mb-6">
            AI agents automatically extract four ontology graphs (Code, Functional, Design, Architecture) from each product's 
            codebase and documentation, creating structured knowledge graphs for analysis.
          </p>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
            <img 
              src={getPublicAssetUrl("assets/diagrams/portfolio-extraction-process.svg")} 
              alt="Portfolio Extraction Process" 
              className="w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Step 2: Portfolio Rationalization Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center mb-2">
            <span className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full mr-3">Step 2</span>
            <h2 className="text-xl font-semibold text-gray-900">Rationalization &amp; Strategy Selection</h2>
          </div>
          <p className="text-gray-600 mb-6">
            The extracted graphs are analyzed for overlaps, then split into parallel design and architecture 
            rationalization tracks. Three implementation strategies are compared showing their respective code impact.
          </p>
          <div className="border border-gray-200 rounded-lg p-4 bg-gray-50 overflow-x-auto">
            <img 
              src={getPublicAssetUrl("assets/diagrams/portfolio-rationalization-process.svg")} 
              alt="Portfolio Rationalization Process" 
              className="w-full h-auto"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </div>
        </div>

        {/* Interactive Tools */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Interactive Analysis Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link 
              to="/portfolio/graph-explorer" 
              className="block p-6 border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-blue-600 text-xl">🕸️</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Ontology Graph Explorer</h3>
              <p className="text-sm text-gray-600">Explore the complete four-ontology graph structure with filtering and drill-down capabilities</p>
              <span className="inline-block mt-3 text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">Interactive</span>
            </Link>

            <Link 
              to="/portfolio/component-comparator" 
              className="block p-6 border border-gray-200 rounded-lg hover:border-purple-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">🔍</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Component Comparator</h3>
              <p className="text-sm text-gray-600">Side-by-side comparison of authentication components across products</p>
              <span className="inline-block mt-3 text-xs bg-purple-100 text-purple-600 px-2 py-1 rounded">Analysis</span>
            </Link>

            <Link 
              to="/portfolio/rationalization-roadmap" 
              className="block p-6 border border-gray-200 rounded-lg hover:border-green-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-green-600 text-xl">🎯</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Rationalization Roadmap</h3>
              <p className="text-sm text-gray-600">Complete roadmap with strategy comparison, design & architecture tracks</p>
              <span className="inline-block mt-3 text-xs bg-green-100 text-green-600 px-2 py-1 rounded">Planning</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioOverview;