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

const DiscoveryAssessment: React.FC = () => {
  const [selectedOntology, setSelectedOntology] = useState<'functional' | 'design' | 'architecture' | 'code'>('functional');

  const ontologies = {
    functional: {
      title: 'Functional Ontology',
      icon: ChartBarIcon,
      color: 'blue',
      description: 'What the system actually does - extracted features, business logic, and user workflows',
      insights: [
        '427 functional capabilities identified',
        '89 undocumented features discovered',
        '23 deprecated functions still in use',
        '156 business rules extracted'
      ]
    },
    design: {
      title: 'Design Ontology',
      icon: PaintBrushIcon,
      color: 'purple',
      description: 'User interface patterns, components, and interaction flows across the application',
      insights: [
        '342 UI components cataloged',
        '78 duplicate component variations',
        '12 inconsistent design patterns',
        '45 accessibility violations'
      ]
    },
    architecture: {
      title: 'Architecture Ontology',
      icon: CubeIcon,
      color: 'green',
      description: 'System structure, services, APIs, data models, and infrastructure dependencies',
      insights: [
        '147 architecture violations detected',
        '23 tightly coupled modules',
        '67 API inconsistencies',
        '34 database anti-patterns'
      ]
    },
    code: {
      title: 'Code Ontology',
      icon: CodeBracketIcon,
      color: 'orange',
      description: 'Implementation details, code quality metrics, dependencies, and technical debt',
      insights: [
        '312 code smells identified',
        '1,247 components analyzed',
        '186 dependencies mapped',
        '45% code duplication detected'
      ]
    }
  };

  const currentOntology = ontologies[selectedOntology];

  const debtCategories = [
    {
      category: 'Critical Issues',
      count: 147,
      color: 'red',
      icon: ExclamationTriangleIcon,
      description: 'Architecture violations requiring immediate attention',
      examples: ['Layer boundary violations', 'Circular dependencies', 'Security vulnerabilities']
    },
    {
      category: 'Code Quality',
      count: 312,
      color: 'orange',
      icon: CodeBracketIcon,
      description: 'Code smells affecting maintainability',
      examples: ['Duplicate code blocks', 'Complex methods (>50 lines)', 'Poor naming conventions']
    },
    {
      category: 'Missing Tests',
      count: 234,
      color: 'yellow',
      icon: BugAntIcon,
      description: 'Components lacking adequate test coverage',
      examples: ['0% coverage on critical paths', 'No integration tests', 'Manual testing only']
    },
    {
      category: 'Performance',
      count: 89,
      color: 'purple',
      icon: ServerIcon,
      description: 'Performance bottlenecks and inefficiencies',
      examples: ['N+1 queries', 'Unoptimized algorithms', 'Memory leaks']
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
            ← Back to Overview
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Discovery & Assessment</h1>
          <p className="mt-2 text-gray-600">
            Comprehensive analysis of Phoenix CRM to understand current state and identify technical debt
          </p>
        </div>

        {/* Case Study Context */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Case Study: Phoenix CRM</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">System Overview</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 8 years in production</li>
                <li>• ~500K lines of code</li>
                <li>• PHP monolith + microservices</li>
                <li>• 12,000+ active users</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Technical Stack</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• PHP, Node.js, Python</li>
                <li>• MySQL + MongoDB</li>
                <li>• 427 API endpoints</li>
                <li>• 143 database tables</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Challenges</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• 3 teams, inconsistent practices</li>
                <li>• Outdated documentation</li>
                <li>• Knowledge silos</li>
                <li>• Accumulated technical debt</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 1: Automated Extraction */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 1: AI-Powered Knowledge Extraction</h2>
          <p className="text-sm text-gray-600 mb-6">
            Our AI agents analyzed Phoenix CRM's codebase to build comprehensive knowledge graphs across
            four dimensions. This process is fully automated and typically takes 2-4 hours for a 500K LOC application.
          </p>

          <AnimatedExtractionProcess />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">What We Analyze</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                  <span>Source code across all languages</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                  <span>API definitions and contracts</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                  <span>Database schemas and migrations</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5" />
                  <span>Configuration and deployment files</span>
                </li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-3">What We Discover</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                  <span>Undocumented features and behaviors</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                  <span>Hidden dependencies and coupling</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                  <span>Architecture violations and anti-patterns</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5" />
                  <span>Code quality issues and duplications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Step 2: Four Ontology Graphs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 2: Explore Knowledge Graphs</h2>
          <p className="text-sm text-gray-600 mb-6">
            The extraction process produces four interconnected knowledge graphs that capture different
            aspects of Phoenix CRM:
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
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Insights from Phoenix CRM:</h4>
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
                <strong>💡 Interactive Explorer:</strong> The full graph explorer allows you to navigate
                relationships, filter by patterns, and drill down into specific components.{' '}
                <Link to="/technical-debt/graph-explorer" className="underline font-semibold">
                  Try the interactive version →
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Step 3: Technical Debt Assessment */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Step 3: Technical Debt Assessment</h2>
          <p className="text-sm text-gray-600 mb-6">
            By analyzing the knowledge graphs and comparing them against best practices, we identified
            and categorized technical debt across Phoenix CRM:
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
                    <p className="text-xs font-semibold text-gray-700 mb-2">Examples:</p>
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
                <h4 className="font-semibold text-gray-900 mb-2">Impact Analysis</h4>
                <p className="text-sm text-gray-700 mb-2">
                  Our AI agents quantified the business impact of addressing this technical debt:
                </p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>35% reduction</strong> in maintenance costs within 6 months</li>
                  <li>• <strong>50% faster</strong> feature delivery after re-engineering</li>
                  <li>• <strong>4x fewer</strong> production incidents in modernized modules</li>
                  <li>• <strong>60% improvement</strong> in developer satisfaction scores</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Summary */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Discovery Complete: What We Learned</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white rounded-lg p-4">
              <DocumentTextIcon className="h-6 w-6 text-blue-600 mb-2" />
              <p className="font-semibold text-gray-900">Comprehensive Understanding</p>
              <p className="text-sm text-gray-600 mt-1">
                Four complete ontology graphs documenting all aspects of the system
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <ExclamationTriangleIcon className="h-6 w-6 text-orange-600 mb-2" />
              <p className="font-semibold text-gray-900">782 Issues Identified</p>
              <p className="text-sm text-gray-600 mt-1">
                Categorized, prioritized, and quantified for impact
              </p>
            </div>
            <div className="bg-white rounded-lg p-4">
              <ChartBarIcon className="h-6 w-6 text-green-600 mb-2" />
              <p className="font-semibold text-gray-900">Clear ROI Path</p>
              <p className="text-sm text-gray-600 mt-1">
                Projected 35% cost savings and 50% velocity improvement
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            With a complete understanding of Phoenix CRM's current state and technical debt, we can now
            create a strategic re-engineering plan with validated stakeholder input.
          </p>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Next: Re-engineering Strategy</h2>
          <p className="text-sm mb-4 opacity-90">
            With comprehensive discovery complete, we'll create a strategic modernization plan with
            validation from all key stakeholders.
          </p>
          <Link
            to="/solutions/application-reengineering/strategy"
            className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Re-engineering Strategy
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryAssessment;
