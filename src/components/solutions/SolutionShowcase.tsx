import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  WrenchScrewdriverIcon, 
  CpuChipIcon, 
  DocumentMagnifyingGlassIcon,
  ArrowPathIcon,
  SparklesIcon,
  ChartBarIcon,
  PhoneIcon,
  ClipboardDocumentCheckIcon,
  ChatBubbleBottomCenterTextIcon,
  MicrophoneIcon,
  BeakerIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  BoltIcon,
  ArrowRightIcon,
  CheckIcon,
  CircleStackIcon,
  RocketLaunchIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';

interface Solution {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
  capabilities: string[];
  outcomes: string[];
  status: 'deep-dive' | 'showcase-only';
  link?: string;
  caseStudy?: string;
}

const solutions: Solution[] = [
  // Deep Dive Solutions (Featured)
  {
    id: 'tech-debt',
    category: 'Featured Deep Dives',
    title: 'Technical Debt Management',
    description: 'AI agents that analyze codebases to identify technical debt, architectural violations, and provide prioritized remediation strategies.',
    icon: WrenchScrewdriverIcon,
    color: 'orange',
    capabilities: [
      'Automated code quality assessment',
      'Architecture violation detection',
      'Dependency risk analysis',
      'Remediation prioritization'
    ],
    outcomes: [
      '40% reduction in bug density',
      '60% faster feature delivery',
      'Clear remediation roadmap'
    ],
    status: 'deep-dive',
    link: '/solutions/technical-debt',
    caseStudy: 'Fortune 500 Financial Services'
  },
  {
    id: 'portfolio-rat',
    category: 'Featured Deep Dives',
    title: 'Portfolio Rationalization',
    description: 'Intelligent agents that analyze multiple applications to identify overlaps, redundancies, and consolidation opportunities.',
    icon: CpuChipIcon,
    color: 'blue',
    capabilities: [
      'Cross-application analysis',
      'Functional overlap detection',
      'Component similarity scoring',
      'Migration strategy planning'
    ],
    outcomes: [
      '30% reduction in maintenance costs',
      'Eliminated duplicate functionality',
      'Unified technology stack'
    ],
    status: 'deep-dive',
    link: '/solutions/portfolio-rationalization',
    caseStudy: 'Global E-commerce Platform'
  },
  {
    id: 'asimov-migration',
    category: 'Featured Deep Dives',
    title: 'ASIMOV Legacy Migration',
    description: 'AI-powered application modernization platform using autonomous agents for code analysis, transformation, and cloud migration.',
    icon: ArrowPathIcon,
    color: 'purple',
    capabilities: [
      'Automated code translation (COBOL to Java)',
      'Dependency mapping and analysis',
      'Incremental migration patterns',
      'Zero-downtime deployment'
    ],
    outcomes: [
      '70% reduction in migration time',
      '60% cost savings',
      '99.9% uptime during migration'
    ],
    status: 'deep-dive',
    link: '/solutions/asimov',
    caseStudy: 'Global Financial Institution'
  },
  {
    id: 'customer-service-ai',
    category: 'Featured Deep Dives',
    title: 'Customer Service AI',
    description: 'Comprehensive autonomous support system with self-healing bots, agent augmentation, and business optimization.',
    icon: PhoneIcon,
    color: 'green',
    capabilities: [
      'Self Heal Bot for L0 automation',
      'Assisted Heal Bot for L1 agents',
      'Business Optimization Hub',
      'Multi-channel support'
    ],
    outcomes: [
      '60% auto-resolution rate',
      '150% agent productivity',
      '40% cost reduction'
    ],
    status: 'deep-dive',
    link: '/solutions/customer-service',
    caseStudy: 'Fortune 500 Telecom'
  },
  
  // Data Engineering - Showcase Only
  {
    id: 'data-engineering',
    category: 'Data & Analytics',
    title: 'Data Engineering',
    description: 'AI-powered data pipeline optimization, quality management, and automated ETL processes.',
    icon: CircleStackIcon,
    color: 'indigo',
    capabilities: [
      'Automated data quality checks',
      'Intelligent ETL pipeline design',
      'Real-time anomaly detection',
      'Data lineage tracking'
    ],
    outcomes: [
      '80% reduction in data errors',
      '50% faster pipeline development',
      'Real-time data insights'
    ],
    status: 'showcase-only',
    link: '/solutions/data-engineering',
    caseStudy: 'Enterprise Retail'
  }
];

const categories = ['Featured Deep Dives', 'Data & Analytics'];

const SolutionShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Featured Deep Dives');
  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: string } = {
      orange: 'from-orange-400 to-red-500',
      blue: 'from-blue-400 to-indigo-500',
      green: 'from-green-400 to-teal-500',
      purple: 'from-purple-400 to-pink-500',
      indigo: 'from-indigo-400 to-purple-500',
      red: 'from-red-400 to-pink-500',
    };
    return colorMap[color] || 'from-gray-400 to-gray-500';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Solution Showcase</h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore how our AI agents solve real enterprise challenges. Each solution represents actual 
            implementations or proven capabilities ready for deployment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category}
                <span className="ml-2 text-sm opacity-80">
                  ({solutions.filter(s => s.category === category).length})
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSolutions.map((solution) => {
            const Icon = solution.icon;
            const isDeepDive = solution.status === 'deep-dive';
            
            return (
              <div
                key={solution.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all ${
                  isDeepDive ? 'hover:scale-105' : ''
                }`}
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${getColorClasses(solution.color)}`} />
                
                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getColorClasses(solution.color)}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {solution.status === 'deep-dive' && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        Deep Dive
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{solution.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{solution.description}</p>

                  {/* Capabilities */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Key Capabilities</h4>
                    <ul className="space-y-1">
                      {solution.capabilities.slice(0, 3).map((capability, index) => (
                        <li key={index} className="flex items-start text-xs text-gray-600">
                          <CheckIcon className="h-3 w-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {capability}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Business Outcomes</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.outcomes.slice(0, 2).map((outcome, index) => (
                        <span key={index} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Case Study */}
                  {solution.caseStudy && (
                    <div className="text-xs text-gray-500 mb-4">
                      <span className="font-semibold">Case Study:</span> {solution.caseStudy}
                    </div>
                  )}

                  {/* Action Button */}
                  {solution.link && (
                    <Link
                      to={solution.link}
                      className={`inline-flex items-center text-sm font-medium ${
                        isDeepDive ? 'text-blue-600 hover:text-blue-700' : 'text-gray-600 hover:text-gray-700'
                      }`}
                    >
                      {solution.status === 'deep-dive' ? 'Explore Deep Dive' : 'Learn More'}
                      <ArrowRightIcon className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Enterprise?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            These solutions represent just a fraction of what's possible. Let's discuss how AI agents 
            can solve your specific challenges.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Schedule a Consultation
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SolutionShowcase;