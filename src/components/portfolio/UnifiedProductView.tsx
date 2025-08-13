import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, ArrowRightIcon, CubeTransparentIcon } from '@heroicons/react/24/outline';
import AnimatedSVG, { AnimationStep } from '../common/AnimatedSVG';
import { getPublicAssetUrl } from '../../utils/assetHelper';

interface ProductNode {
  id: string;
  name: string;
  type: 'product' | 'unified';
  features: string[];
  color: string;
}

const UnifiedProductView: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  const products: ProductNode[] = [
    {
      id: 'phoenix',
      name: 'Phoenix CRM',
      type: 'product',
      features: ['Basic Auth', 'User Management', 'Session Handling', 'Password Reset'],
      color: '#ef4444'
    },
    {
      id: 'apollo',
      name: 'Apollo Launchpad',
      type: 'product',
      features: ['2FA Auth', 'JWT Tokens', 'OAuth Integration', 'Role-Based Access'],
      color: '#3b82f6'
    },
    {
      id: 'voyager',
      name: 'Voyager Analytics',
      type: 'product',
      features: ['SSO/SAML', 'Enterprise Security', 'API Keys', 'Audit Logging'],
      color: '#8b5cf6'
    },
    {
      id: 'unified',
      name: 'Unified Authentication Platform',
      type: 'unified',
      features: [
        'Multi-Factor Authentication',
        'Single Sign-On (SSO)',
        'OAuth 2.0 & SAML',
        'JWT Token Management',
        'Role-Based Access Control',
        'Session Management',
        'Password Policies',
        'Audit & Compliance',
        'API Security'
      ],
      color: '#10b981'
    }
  ];

  const animationSteps: AnimationStep[] = [
    {
      id: 'step1',
      elements: ['source-products'],
      description: 'Three separate products with overlapping authentication functionality'
    },
    {
      id: 'step2',
      elements: ['product-features'],
      description: 'Each product has its own authentication implementation and features'
    },
    {
      id: 'step3',
      elements: ['overlap-analysis'],
      description: 'Identify common patterns and duplicate functionality across products'
    },
    {
      id: 'step4',
      elements: ['convergence-arrows'],
      description: 'Consolidate all features into a unified platform'
    },
    {
      id: 'step5',
      elements: ['unified-product'],
      description: 'Create unified authentication platform container'
    },
    {
      id: 'step6',
      elements: ['unified-features'],
      description: 'All features from all products preserved in unified platform'
    }
  ];

  const stepLabels = [
    'Source Products',
    'Feature Analysis',
    'Overlap Analysis',
    'Consolidation',
    'Unified Platform',
    'Complete Union'
  ];

  const unificationSteps = [
    {
      title: 'Identify Overlapping Functionality',
      description: 'Analyze functional graphs to identify common authentication patterns across products',
      highlights: ['Basic Auth', '2FA Auth', 'SSO/SAML']
    },
    {
      title: 'Extract Core Capabilities',
      description: 'Extract essential authentication capabilities from each product\'s implementation',
      highlights: ['User Management', 'JWT Tokens', 'Enterprise Security']
    },
    {
      title: 'Eliminate Redundancy',
      description: 'Remove duplicate implementations and consolidate similar functionalities',
      highlights: ['Session Handling', 'OAuth Integration', 'API Keys']
    },
    {
      title: 'Create Unified Architecture',
      description: 'Design a unified authentication platform that encompasses all required outcomes',
      highlights: ['Multi-Factor Authentication', 'Single Sign-On', 'Role-Based Access Control']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Unified Product Creation</h1>
          <p className="mt-2 text-gray-600">
            Discover how the rationalization process creates a unified product that combines all functionality 
            without the ambiguity of overlapping functional graphs
          </p>
        </div>

        {/* Navigation Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
          <Link to="/portfolio" className="hover:text-blue-600">Portfolio Rationalization</Link>
          <ArrowRightIcon className="h-4 w-4" />
          <span className="text-gray-900">Unified Product View</span>
        </div>

        {/* Process Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Rationalization Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {unificationSteps.map((step, index) => (
              <div 
                key={index}
                className="border rounded-lg p-4 border-gray-200 hover:border-gray-300 transition-all"
              >
                <div className="flex items-center mb-2">
                  <span className="w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center text-xs font-bold border-blue-500 text-blue-500">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-sm">{step.title}</h3>
                </div>
                <p className="text-xs text-gray-600 mb-2">{step.description}</p>
                <div className="flex flex-wrap gap-1">
                  {step.highlights.slice(0, 2).map((highlight, hIndex) => (
                    <span 
                      key={hIndex}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced SVG Visualization */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Unification Visualization</h2>
          <AnimatedSVG
            svgPath={getPublicAssetUrl('/assets/diagrams/unified-product-process.svg')}
            animationSteps={animationSteps}
            stepLabels={stepLabels}
            showStepButtons={true}
            showProgressBar={true}
            showDescription={true}
            className="border border-gray-200 rounded-lg p-4 bg-gray-50"
          />
        </div>

        {/* Benefits of Unified Product */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Benefits of the Unified Product</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">No Functional Ambiguity</h3>
              <p className="text-sm text-gray-600">
                The unified product eliminates overlapping functional graphs, providing clear, 
                unambiguous authentication paths for all use cases.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Complete Feature Coverage</h3>
              <p className="text-sm text-gray-600">
                All outcomes from Phoenix, Apollo, and Voyager are preserved and enhanced 
                in the unified platform, ensuring no functionality is lost.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">Optimized Architecture</h3>
              <p className="text-sm text-gray-600">
                The rationalized product uses best practices from all three products, 
                resulting in a more maintainable and scalable solution.
              </p>
            </div>
          </div>
        </div>

        {/* Feature Mapping */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Feature Mapping</h2>
          <p className="text-gray-600 mb-4">
            See how features from individual products map to the unified platform:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Source Products</h3>
              {products.filter(p => p.type === 'product').map(product => (
                <div key={product.id} className="mb-4">
                  <div className="flex items-center mb-2">
                    <div 
                      className="w-3 h-3 rounded-full mr-2" 
                      style={{ backgroundColor: product.color }}
                    />
                    <span className="font-medium text-sm">{product.name}</span>
                  </div>
                  <div className="ml-5 space-y-1">
                    {product.features.map((feature, index) => (
                      <div 
                        key={index}
                        className="text-xs text-gray-600 hover:text-gray-900 cursor-pointer"
                        onMouseEnter={() => setSelectedFeature(feature)}
                        onMouseLeave={() => setSelectedFeature(null)}
                      >
                        • {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Unified Platform</h3>
              <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                <div className="flex items-center mb-3">
                  <CubeTransparentIcon className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium">Unified Authentication Platform</span>
                </div>
                <div className="space-y-2">
                  {products.find(p => p.type === 'unified')?.features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`text-sm p-2 rounded transition-all ${
                        selectedFeature && feature.toLowerCase().includes(selectedFeature.toLowerCase().split(' ')[0])
                          ? 'bg-green-100 border border-green-300'
                          : 'hover:bg-green-100'
                      }`}
                    >
                      <span className="text-green-700">✓</span> {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation Roadmap</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Phase 1: Analysis</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Complete functional overlap analysis across all three products
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Phase 2: Design</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Create unified authentication architecture and API specifications
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Phase 3: Migration</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Gradual migration of existing products to unified platform
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="h-5 w-5 rounded-full border-2 border-gray-300 mr-3 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900">Phase 4: Optimization</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Performance tuning and feature enhancement based on usage patterns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Explore the Unified Product?</h2>
          <p className="mb-6 text-blue-100">
            Dive deeper into the rationalization process and see how the unified architecture 
            eliminates redundancy while preserving all essential functionality.
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              to="/portfolio/rationalization-roadmap"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Rationalization Roadmap
            </Link>
            <Link 
              to="/portfolio/graph-explorer"
              className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Explore Ontology Graphs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedProductView;