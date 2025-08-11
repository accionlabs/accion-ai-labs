import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ChartBarIcon,
  UserGroupIcon,
  SparklesIcon,
  CommandLineIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  ArrowPathIcon,
  ClipboardDocumentCheckIcon,
  UserPlusIcon,
  ChartPieIcon,
  ChatBubbleBottomCenterTextIcon,
  MicrophoneIcon,
  ArrowRightIcon,
  CheckCircleIcon
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
  status: 'live' | 'possible';
  link?: string;
  caseStudy?: string;
}

const solutions: Solution[] = [
  // Engineering Excellence
  {
    id: 'tech-debt',
    category: 'Engineering Excellence',
    title: 'Technical Debt Analysis',
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
    status: 'live',
    link: '/technical-debt',
    caseStudy: 'Fortune 500 Financial Services'
  },
  {
    id: 'portfolio-rat',
    category: 'Engineering Excellence',
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
    status: 'live',
    link: '/portfolio',
    caseStudy: 'Global E-commerce Platform'
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
  {
    id: 'migration',
    category: 'Engineering Excellence',
    title: 'Migration Planning',
    description: 'Agents that analyze legacy systems and create detailed migration plans to modern architectures.',
    icon: ArrowPathIcon,
    color: 'blue',
    capabilities: [
      'Legacy system analysis',
      'Dependency mapping',
      'Risk assessment',
      'Phased migration planning'
    ],
    outcomes: [
      'Zero-downtime migrations',
      'Reduced migration risks',
      'Clear timelines and milestones'
    ],
    status: 'possible'
  },
  
  // Operational Intelligence
  {
    id: 'support-auto',
    category: 'Operational Intelligence',
    title: 'L0/L1/L2 Support Automation',
    description: 'Tiered support agents that handle monitoring, triage, and technical resolution with intelligent escalation.',
    icon: ShieldCheckIcon,
    color: 'amber',
    capabilities: [
      'Automated incident detection (L0)',
      'Smart ticket classification (L1)',
      'Root cause analysis (L2)',
      'Intelligent escalation'
    ],
    outcomes: [
      '70% reduction in MTTR',
      '80% first-contact resolution',
      '24/7 automated coverage'
    ],
    status: 'possible'
  },
  {
    id: 'incident-response',
    category: 'Operational Intelligence',
    title: 'Incident Response Orchestration',
    description: 'Agents that coordinate incident response, automate runbooks, and facilitate team communication.',
    icon: ChartBarIcon,
    color: 'amber',
    capabilities: [
      'Automated runbook execution',
      'Team coordination',
      'Impact analysis',
      'Post-mortem generation'
    ],
    outcomes: [
      'Faster incident resolution',
      'Reduced human error',
      'Comprehensive documentation'
    ],
    status: 'possible'
  },
  
  // Business Process Automation
  {
    id: 'customer-onboard',
    category: 'Business Automation',
    title: 'Customer Onboarding Automation',
    description: 'Agents that automate B2B platform setup, configuration, and integration for new enterprise customers.',
    icon: UserPlusIcon,
    color: 'green',
    capabilities: [
      'Environment provisioning',
      'Configuration validation',
      'Integration testing',
      'Documentation generation'
    ],
    outcomes: [
      '90% faster onboarding',
      'Zero configuration errors',
      'Improved customer satisfaction'
    ],
    status: 'possible'
  },
  {
    id: 'compliance',
    category: 'Business Automation',
    title: 'Compliance Validation',
    description: 'Agents that continuously monitor and validate compliance with regulations and standards.',
    icon: ClipboardDocumentCheckIcon,
    color: 'green',
    capabilities: [
      'Policy enforcement',
      'Audit trail generation',
      'Gap analysis',
      'Remediation tracking'
    ],
    outcomes: [
      '100% compliance coverage',
      'Automated audit reports',
      'Proactive risk mitigation'
    ],
    status: 'possible'
  },
  
  // Intelligent Analytics
  {
    id: 'jit-dashboards',
    category: 'Intelligent Analytics',
    title: 'Just-in-Time Dashboards',
    description: 'Agents that create custom dashboards and visualizations on-demand based on natural language queries.',
    icon: ChartPieIcon,
    color: 'purple',
    capabilities: [
      'Natural language to visualization',
      'Data source integration',
      'Real-time updates',
      'Export capabilities'
    ],
    outcomes: [
      'Instant insights',
      'No dashboard backlog',
      'Self-service analytics'
    ],
    status: 'possible'
  },
  {
    id: 'predictive',
    category: 'Intelligent Analytics',
    title: 'Predictive Analytics',
    description: 'Agents that analyze patterns and predict future trends, issues, and opportunities.',
    icon: SparklesIcon,
    color: 'purple',
    capabilities: [
      'Trend analysis',
      'Anomaly detection',
      'Forecasting',
      'Risk prediction'
    ],
    outcomes: [
      'Proactive decision making',
      'Early issue detection',
      'Optimized resource allocation'
    ],
    status: 'possible'
  },
  
  // Next-Gen Interfaces
  {
    id: 'conversational-ui',
    category: 'Next-Gen Interfaces',
    title: 'Conversational UI',
    description: 'Replace traditional forms and workflows with natural conversation interfaces.',
    icon: ChatBubbleBottomCenterTextIcon,
    color: 'pink',
    capabilities: [
      'Natural language understanding',
      'Context preservation',
      'Multi-turn conversations',
      'Action execution'
    ],
    outcomes: [
      'Intuitive user experience',
      'Reduced training time',
      'Higher user satisfaction'
    ],
    status: 'possible'
  },
  {
    id: 'voice-nav',
    category: 'Next-Gen Interfaces',
    title: 'Voice-Enabled Navigation',
    description: 'Navigate existing applications using natural voice commands for improved accessibility and efficiency.',
    icon: MicrophoneIcon,
    color: 'pink',
    capabilities: [
      'Voice-to-action mapping',
      'Multi-language support',
      'Context-aware commands',
      'Accessibility compliance'
    ],
    outcomes: [
      'Hands-free operation',
      'ADA/WCAG compliance',
      'Faster task completion'
    ],
    status: 'possible'
  },
  
  // Additional Engineering Solutions
  {
    id: 'test-automation',
    category: 'Engineering Excellence',
    title: 'Intelligent Test Generation',
    description: 'AI agents that generate comprehensive test suites based on code analysis and requirements.',
    icon: ClipboardDocumentCheckIcon,
    color: 'blue',
    capabilities: [
      'Unit test generation',
      'Integration test scenarios',
      'Edge case identification',
      'Test coverage optimization'
    ],
    outcomes: [
      '90% code coverage',
      '60% reduction in test writing time',
      'Caught edge cases early'
    ],
    status: 'possible'
  },
  {
    id: 'security-analysis',
    category: 'Engineering Excellence',
    title: 'Security Vulnerability Scanner',
    description: 'Deep semantic analysis to identify security vulnerabilities beyond static analysis tools.',
    icon: ShieldCheckIcon,
    color: 'blue',
    capabilities: [
      'OWASP vulnerability detection',
      'Data flow analysis',
      'Dependency risk assessment',
      'Compliance checking'
    ],
    outcomes: [
      'Zero-day vulnerability prevention',
      'Compliance assurance',
      'Reduced security incidents'
    ],
    status: 'possible'
  },
  {
    id: 'api-docs',
    category: 'Engineering Excellence',
    title: 'API Documentation Generator',
    description: 'Automatically generate and maintain API documentation from code and usage patterns.',
    icon: DocumentTextIcon,
    color: 'blue',
    capabilities: [
      'OpenAPI/Swagger generation',
      'Usage examples extraction',
      'Change detection',
      'Interactive documentation'
    ],
    outcomes: [
      'Always up-to-date docs',
      'Improved API adoption',
      'Reduced support tickets'
    ],
    status: 'possible'
  },
  {
    id: 'perf-optimization',
    category: 'Engineering Excellence',
    title: 'Performance Optimization Agent',
    description: 'Identify and fix performance bottlenecks using code and runtime analysis.',
    icon: ChartBarIcon,
    color: 'blue',
    capabilities: [
      'Bottleneck identification',
      'Database query optimization',
      'Memory leak detection',
      'Caching recommendations'
    ],
    outcomes: [
      '50% latency reduction',
      'Improved scalability',
      'Lower infrastructure costs'
    ],
    status: 'possible'
  }
];

const categories = [
  { name: 'All Solutions', color: 'gray' },
  { name: 'Engineering Excellence', color: 'blue' },
  { name: 'Operational Intelligence', color: 'amber' },
  { name: 'Business Automation', color: 'green' },
  { name: 'Intelligent Analytics', color: 'purple' },
  { name: 'Next-Gen Interfaces', color: 'pink' }
];

const SolutionShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Solutions');
  
  const filteredSolutions = selectedCategory === 'All Solutions' 
    ? solutions 
    : solutions.filter(s => s.category === selectedCategory);
  
  const getColorClasses = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-100 text-blue-600',
      orange: 'bg-orange-100 text-orange-600',
      amber: 'bg-amber-100 text-amber-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      pink: 'bg-pink-100 text-pink-600',
      gray: 'bg-gray-100 text-gray-600'
    };
    return colors[color] || colors.gray;
  };
  
  const getBorderColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'border-blue-200 hover:border-blue-400',
      orange: 'border-orange-200 hover:border-orange-400',
      amber: 'border-amber-200 hover:border-amber-400',
      green: 'border-green-200 hover:border-green-400',
      purple: 'border-purple-200 hover:border-purple-400',
      pink: 'border-pink-200 hover:border-pink-400',
      gray: 'border-gray-200 hover:border-gray-400'
    };
    return colors[color] || colors.gray;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Custom Solutions
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Solution Showcase</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            Every enterprise is unique. These examples demonstrate the types of custom AI agents 
            we can build for your specific challenges.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category.name
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name}
                {category.name !== 'All Solutions' && (
                  <span className="ml-2 text-xs opacity-75">
                    ({solutions.filter(s => s.category === category.name).length})
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredSolutions.map(solution => {
            const Icon = solution.icon;
            const colorClasses = getColorClasses(solution.color);
            const borderClasses = getBorderColor(solution.color);
            
            return (
              <div
                key={solution.id}
                className={`bg-white rounded-xl border-2 ${borderClasses} p-6 hover:shadow-xl transition-all relative`}
              >
                {/* Status Badge */}
                {solution.status === 'live' && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                      <CheckCircleIcon className="h-3 w-3 mr-1" />
                      Deep Dive
                    </span>
                  </div>
                )}
                
                {/* Icon and Title */}
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 ${colorClasses} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-gray-900">{solution.title}</h3>
                    <span className="text-xs text-gray-500">{solution.category}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">
                  {solution.description}
                </p>
                
                {/* Capabilities */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">What We Can Build:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {solution.capabilities.slice(0, 3).map((capability, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gray-400 mr-1">•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Outcomes */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-700 mb-2">Expected Outcomes:</h4>
                  <div className="flex flex-wrap gap-1">
                    {solution.outcomes.slice(0, 2).map((outcome, idx) => (
                      <span key={idx} className="inline-block px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                        {outcome}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Case Study */}
                {solution.caseStudy && (
                  <div className="text-xs text-gray-500 mb-4">
                    <strong>Built for:</strong> {solution.caseStudy}
                  </div>
                )}
                
                {/* CTA */}
                {solution.status === 'live' && solution.link ? (
                  <Link
                    to={solution.link}
                    className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
                  >
                    Explore Deep Dive
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="inline-flex items-center text-sm font-semibold text-gray-600 hover:text-gray-700"
                  >
                    Discuss This Solution
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                )}
              </div>
            );
          })}
        </div>

        {/* Custom Solution CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 sm:p-12 text-white text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Don't See Your Challenge Here?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            These are just examples. We specialize in creating custom AI agents 
            tailored to your unique requirements and challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white text-blue-600 rounded-xl hover:bg-gray-100 transition-all"
            >
              Start Your Custom Solution
            </Link>
            <Link
              to="/core-technology"
              className="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold bg-white/20 text-white border-2 border-white/50 rounded-xl hover:bg-white/30 transition-all"
            >
              Learn About Our Technology
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionShowcase;