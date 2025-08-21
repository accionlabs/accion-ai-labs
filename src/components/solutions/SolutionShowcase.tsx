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
  status: 'live' | 'deep-dive' | 'possible';
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
  
  // Engineering Excellence
  {
    id: 'app-modernization',
    category: 'Engineering Excellence',
    title: 'App Modernization',
    description: 'Transform legacy applications into modern, cloud-native architectures using AI-driven analysis and migration.',
    icon: CloudArrowUpIcon,
    color: 'blue',
    capabilities: [
      'Microservices extraction',
      'Containerization automation',
      'Cloud migration planning',
      'Performance optimization'
    ],
    outcomes: [
      '10x deployment frequency',
      '70% infrastructure cost reduction',
      'Improved scalability'
    ],
    status: 'live',
    link: '/solutions/app-modernization',
    caseStudy: 'Enterprise Retail'
  },
  {
    id: 'code-review',
    category: 'Engineering Excellence',
    title: 'Intelligent Code Review',
    description: 'Context-aware agents that review code changes, suggest improvements, and ensure compliance with standards.',
    icon: DocumentMagnifyingGlassIcon,
    color: 'blue',
    capabilities: [
      'Semantic code analysis',
      'Best practice enforcement',
      'Security vulnerability detection',
      'Performance optimization suggestions'
    ],
    outcomes: [
      '50% reduction in review time',
      'Consistent code quality',
      'Proactive issue prevention'
    ],
    status: 'possible'
  },
  
  // Data & Analytics
  {
    id: 'data-engineering',
    category: 'Data & Analytics',
    title: 'Enterprise Data Transformation',
    description: 'AI-powered data engineering platform with autonomous agents for ingestion, processing, and governance.',
    icon: CircleStackIcon,
    color: 'indigo',
    capabilities: [
      'Intelligent data ingestion',
      'Automated pipeline orchestration',
      'Real-time stream processing',
      'Data quality monitoring'
    ],
    outcomes: [
      '10TB/hour processing',
      '99.99% pipeline uptime',
      '70% cost reduction'
    ],
    status: 'live',
    link: '/solutions/data-engineering',
    caseStudy: 'Global Analytics Platform'
  },
  {
    id: 'jit-dashboards',
    category: 'Data & Analytics',
    title: 'Just-In-Time Dashboards',
    description: 'Dynamic dashboard generation based on user queries and context, powered by intelligent visualization agents.',
    icon: ChartBarIcon,
    color: 'purple',
    capabilities: [
      'Natural language queries',
      'Automatic visualization selection',
      'Real-time data connection',
      'Collaborative insights'
    ],
    outcomes: [
      '80% faster insights',
      'No dashboard maintenance',
      'Self-service analytics'
    ],
    status: 'possible'
  },
  {
    id: 'predictive',
    category: 'Data & Analytics',
    title: 'Predictive Analytics',
    description: 'ML-powered agents that identify patterns, predict outcomes, and recommend actions.',
    icon: SparklesIcon,
    color: 'purple',
    capabilities: [
      'Anomaly detection',
      'Trend forecasting',
      'Root cause analysis',
      'Prescriptive recommendations'
    ],
    outcomes: [
      'Proactive issue resolution',
      'Data-driven decisions',
      'Reduced operational risks'
    ],
    status: 'possible'
  },
  
  // Platform & Infrastructure
  {
    id: 'test-automation',
    category: 'Platform & Infrastructure',
    title: 'Intelligent Test Automation',
    description: 'Self-learning agents that generate, execute, and maintain test suites automatically.',
    icon: BeakerIcon,
    color: 'green',
    capabilities: [
      'Test case generation',
      'Visual regression testing',
      'Self-healing tests',
      'Coverage optimization'
    ],
    outcomes: [
      '90% test coverage',
      '70% reduction in test maintenance',
      'Faster release cycles'
    ],
    status: 'possible'
  },
  {
    id: 'security-analysis',
    category: 'Platform & Infrastructure',
    title: 'Security Analysis',
    description: 'Continuous security scanning and vulnerability assessment with intelligent remediation.',
    icon: ShieldCheckIcon,
    color: 'red',
    capabilities: [
      'Code vulnerability scanning',
      'Dependency risk analysis',
      'Compliance validation',
      'Automated patching'
    ],
    outcomes: [
      'Zero-day vulnerability detection',
      'Compliance assurance',
      'Reduced security incidents'
    ],
    status: 'possible'
  },
  
  // User Experience
  {
    id: 'conversational-ui',
    category: 'User Experience',
    title: 'Conversational UI',
    description: 'Natural language interfaces that understand context and intent to simplify complex interactions.',
    icon: ChatBubbleBottomCenterTextIcon,
    color: 'green',
    capabilities: [
      'Natural language understanding',
      'Context preservation',
      'Multi-turn conversations',
      'Action execution'
    ],
    outcomes: [
      'Improved user adoption',
      'Reduced training needs',
      'Higher satisfaction scores'
    ],
    status: 'possible'
  },
  {
    id: 'api-docs',
    category: 'User Experience',
    title: 'Interactive API Documentation',
    description: 'Self-updating documentation with live examples and intelligent search.',
    icon: DocumentTextIcon,
    color: 'indigo',
    capabilities: [
      'Auto-generated from code',
      'Live API testing',
      'Intelligent search',
      'Version management'
    ],
    outcomes: [
      'Always up-to-date docs',
      'Faster integration',
      'Reduced support tickets'
    ],
    status: 'possible'
  }
];

const categories = ['Featured Deep Dives', 'Engineering Excellence', 'Data & Analytics', 'Platform & Infrastructure', 'User Experience'];

const SolutionShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Featured Deep Dives');
  const filteredSolutions = selectedCategory === 'All' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);

  const getColorClasses = (color: string, status: string) => {
    const isLive = status === 'live' || status === 'deep-dive';
    const colorMap: { [key: string]: string } = {
      orange: isLive ? 'from-orange-400 to-red-500' : 'from-orange-200 to-red-300',
      blue: isLive ? 'from-blue-400 to-indigo-500' : 'from-blue-200 to-indigo-300',
      green: isLive ? 'from-green-400 to-teal-500' : 'from-green-200 to-teal-300',
      purple: isLive ? 'from-purple-400 to-pink-500' : 'from-purple-200 to-pink-300',
      indigo: isLive ? 'from-indigo-400 to-purple-500' : 'from-indigo-200 to-purple-300',
      red: isLive ? 'from-red-400 to-pink-500' : 'from-red-200 to-pink-300',
    };
    return colorMap[color] || (isLive ? 'from-gray-400 to-gray-500' : 'from-gray-200 to-gray-300');
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
            const isLive = solution.status === 'live' || solution.status === 'deep-dive';
            
            return (
              <div
                key={solution.id}
                className={`bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all ${
                  isLive ? 'hover:scale-105' : ''
                }`}
              >
                {/* Card Header */}
                <div className={`h-2 bg-gradient-to-r ${getColorClasses(solution.color, solution.status)}`} />
                
                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${getColorClasses(solution.color, solution.status)}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    {solution.status === 'deep-dive' && (
                      <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                        Deep Dive
                      </span>
                    )}
                    {solution.status === 'live' && (
                      <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                        Live
                      </span>
                    )}
                    {solution.status === 'possible' && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
                        Available
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
                        isLive ? 'text-blue-600 hover:text-blue-700' : 'text-gray-600 hover:text-gray-700'
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