import React, { useState } from 'react';
import { 
  ChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CheckCircleIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  CloudArrowUpIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrophyIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline';

const SuccessStories: React.FC = () => {
  const [selectedStory, setSelectedStory] = useState(0);

  const successStories = [
    {
      client: 'Global Financial Institution',
      industry: 'Banking & Finance',
      logo: '🏦',
      project: 'Core Banking System Modernization',
      challenge: {
        description: '40-year-old mainframe system with 15M lines of COBOL code',
        details: [
          '3000+ batch jobs running daily',
          'Integration with 200+ downstream systems',
          '24/7 availability requirement',
          '$5B daily transaction volume'
        ]
      },
      solution: {
        approach: 'Strangler Fig Pattern with AI-driven transformation',
        agents: [
          'COBOL Analysis Agent - Parsed 15M lines of code',
          'Dependency Mapper - Identified 5000+ dependencies',
          'Java Generator - Created modern microservices',
          'Test Automation Agent - Generated 50K test cases'
        ]
      },
      results: {
        timeToMarket: '18 months (vs 5 years traditional)',
        costSavings: '$12M (60% reduction)',
        performance: '10x improvement in transaction speed',
        availability: '99.99% uptime maintained',
        additionalBenefits: [
          'Cloud-native architecture achieved',
          'DevOps practices implemented',
          'API-first approach enabled new channels',
          'Technical debt reduced by 80%'
        ]
      },
      testimonial: {
        quote: "ASIMOV's AI agents transformed our legacy systems faster than we thought possible. The automated code translation and testing saved us years of manual effort.",
        author: 'CTO, Global Financial Institution'
      }
    },
    {
      client: 'National Healthcare Provider',
      industry: 'Healthcare',
      logo: '🏥',
      project: 'Patient Management System Migration',
      challenge: {
        description: 'Legacy VB6 and PowerBuilder applications with complex integrations',
        details: [
          '500+ forms and screens',
          'HIPAA compliance requirements',
          'Real-time integration with 50+ systems',
          '10TB of patient data'
        ]
      },
      solution: {
        approach: 'Parallel Run Pattern for zero-risk migration',
        agents: [
          'VB6 Parser Agent - Analyzed legacy codebase',
          'Compliance Checker - Ensured HIPAA compliance',
          'React Generator - Created modern UI',
          'Data Migration Agent - Safely transferred patient data'
        ]
      },
      results: {
        timeToMarket: '12 months',
        costSavings: '$8M (55% reduction)',
        performance: '5x faster patient data retrieval',
        availability: 'Zero downtime during migration',
        additionalBenefits: [
          'Mobile-first responsive design',
          'Real-time analytics dashboard',
          'Automated compliance reporting',
          'Enhanced security features'
        ]
      },
      testimonial: {
        quote: "The parallel run approach gave us complete confidence. We validated every transaction before switching, ensuring patient care was never impacted.",
        author: 'VP of Technology, Healthcare Provider'
      }
    },
    {
      client: 'Fortune 500 Retailer',
      industry: 'Retail & E-commerce',
      logo: '🛍️',
      project: 'E-commerce Platform Modernization',
      challenge: {
        description: 'Monolithic Java application unable to handle peak loads',
        details: [
          '2M lines of Java code',
          'Black Friday crashes costing $10M+',
          'Unable to scale horizontally',
          '6-month release cycles'
        ]
      },
      solution: {
        approach: 'Microservices extraction with intelligent decomposition',
        agents: [
          'Domain Analyzer - Identified service boundaries',
          'API Designer - Created service contracts',
          'Container Agent - Automated containerization',
          'Performance Optimizer - Tuned for scale'
        ]
      },
      results: {
        timeToMarket: '9 months',
        costSavings: '$6M in infrastructure costs',
        performance: '200% scalability improvement',
        availability: 'Handled 5x Black Friday traffic',
        additionalBenefits: [
          'Daily deployments enabled',
          'Auto-scaling during peak times',
          'A/B testing capabilities',
          '40% reduction in AWS costs'
        ]
      },
      testimonial: {
        quote: "ASIMOV agents decomposed our monolith perfectly. We went from monthly releases to daily deployments, and finally conquered Black Friday.",
        author: 'Chief Architect, Fortune 500 Retailer'
      }
    },
    {
      client: 'Government Agency',
      industry: 'Public Sector',
      logo: '🏛️',
      project: 'Legacy System Cloud Migration',
      challenge: {
        description: 'Critical citizen services running on outdated infrastructure',
        details: [
          'Multiple programming languages (COBOL, C, Perl)',
          'Strict security and compliance requirements',
          'Limited documentation available',
          '50M citizen records'
        ]
      },
      solution: {
        approach: 'Database-first migration with gradual modernization',
        agents: [
          'Multi-language Parser - Analyzed diverse codebase',
          'Security Scanner - Identified vulnerabilities',
          'Cloud Architect Agent - Designed AWS architecture',
          'Documentation Generator - Created missing docs'
        ]
      },
      results: {
        timeToMarket: '15 months',
        costSavings: '$15M over 5 years',
        performance: '8x improvement in response time',
        availability: '99.95% uptime achieved',
        additionalBenefits: [
          'FedRAMP compliance achieved',
          'Disaster recovery implemented',
          'Self-service portal launched',
          '70% reduction in citizen complaints'
        ]
      },
      testimonial: {
        quote: "The AI agents understood our complex legacy systems better than our own team. Documentation generation alone saved us months of work.",
        author: 'Director of IT, Government Agency'
      }
    }
  ];

  const aggregateMetrics = {
    totalProjects: '500+',
    averageTimeSaved: '70%',
    totalCostSavings: '$2B+',
    successRate: '98%',
    linesOfCodeMigrated: '500M+',
    averageROI: '450%'
  };

  const industryBreakdown = [
    { industry: 'Financial Services', projects: 145, percentage: 29 },
    { industry: 'Healthcare', projects: 95, percentage: 19 },
    { industry: 'Retail', projects: 80, percentage: 16 },
    { industry: 'Government', projects: 70, percentage: 14 },
    { industry: 'Manufacturing', projects: 60, percentage: 12 },
    { industry: 'Others', projects: 50, percentage: 10 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center">
            <TrophyIcon className="h-8 w-8 text-green-600 mr-3" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Success Stories</h1>
              <p className="text-sm text-gray-600 mt-1">Real-world transformations powered by ASIMOV</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Aggregate Metrics */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Platform Impact Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {Object.entries(aggregateMetrics).map(([key, value]) => (
              <div key={key} className="text-center">
                <p className="text-3xl font-bold text-green-600 mb-2">{value}</p>
                <p className="text-xs text-gray-600">
                  {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Success Story Selector */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Success Stories</h2>
          
          {/* Story Tabs */}
          <div className="flex space-x-4 mb-8 overflow-x-auto pb-2">
            {successStories.map((story, index) => (
              <button
                key={index}
                onClick={() => setSelectedStory(index)}
                className={`flex-shrink-0 px-4 py-3 rounded-lg transition-all ${
                  selectedStory === index
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{story.logo}</span>
                  <div className="text-left">
                    <p className="font-semibold">{story.client}</p>
                    <p className="text-xs">{story.industry}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Selected Story Details */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-6">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {successStories[selectedStory].project}
              </h3>
              <p className="text-sm text-gray-600">{successStories[selectedStory].client}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Challenge & Solution */}
              <div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <ExclamationTriangleIcon className="h-5 w-5 text-yellow-600 mr-2" />
                    Challenge
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {successStories[selectedStory].challenge.description}
                  </p>
                  <ul className="space-y-2">
                    {successStories[selectedStory].challenge.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-yellow-600 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <SparklesIcon className="h-5 w-5 text-blue-600 mr-2" />
                    Solution
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    {successStories[selectedStory].solution.approach}
                  </p>
                  <ul className="space-y-2">
                    {successStories[selectedStory].solution.agents.map((agent, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {agent}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-green-600 mr-2" />
                  Results
                </h4>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white rounded-lg p-3">
                    <ClockIcon className="h-5 w-5 text-blue-600 mb-1" />
                    <p className="text-xs text-gray-600">Time to Market</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.timeToMarket}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <CurrencyDollarIcon className="h-5 w-5 text-green-600 mb-1" />
                    <p className="text-xs text-gray-600">Cost Savings</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.costSavings}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <BoltIcon className="h-5 w-5 text-yellow-600 mb-1" />
                    <p className="text-xs text-gray-600">Performance</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.performance}</p>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <ShieldCheckIcon className="h-5 w-5 text-purple-600 mb-1" />
                    <p className="text-xs text-gray-600">Availability</p>
                    <p className="text-sm font-bold text-gray-900">{successStories[selectedStory].results.availability}</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Additional Benefits:</p>
                  <ul className="space-y-1">
                    {successStories[selectedStory].results.additionalBenefits.map((benefit, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                <div className="bg-white rounded-lg p-4 mt-4">
                  <p className="text-sm text-gray-700 italic mb-2">
                    "{successStories[selectedStory].testimonial.quote}"
                  </p>
                  <p className="text-xs text-gray-600 font-semibold">
                    — {successStories[selectedStory].testimonial.author}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Breakdown */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Distribution</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Projects by Industry</h3>
              <div className="space-y-3">
                {industryBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-gray-700">{item.industry}</span>
                        <span className="text-sm text-gray-600">{item.projects} projects</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="ml-3 text-sm font-semibold text-gray-700 w-12 text-right">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Why ASIMOV Succeeds</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <SparklesIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">AI-Powered Understanding</p>
                    <p className="text-sm text-gray-600">LLMs comprehend legacy code semantics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ArrowPathIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Incremental Approach</p>
                    <p className="text-sm text-gray-600">Risk-managed phased migrations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BoltIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Automation at Scale</p>
                    <p className="text-sm text-gray-600">70% reduction in manual effort</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-900">Proven Patterns</p>
                    <p className="text-sm text-gray-600">Battle-tested migration strategies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;