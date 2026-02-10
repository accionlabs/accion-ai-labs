import React from 'react';
import {
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  CogIcon,
  CpuChipIcon,
  DocumentTextIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  BeakerIcon,
  CodeBracketIcon,
  ServerStackIcon,
  ArrowPathIcon,
  DocumentDuplicateIcon,
  PresentationChartLineIcon,
  BanknotesIcon,
  LightBulbIcon,
  SparklesIcon,
  ChartPieIcon,
  CloudArrowUpIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const KAPSFramework: React.FC = () => {
  const { t, i18n } = useTranslation('coreTechnology');
  const svgSuffix = i18n.language.startsWith('ja') ? '-ja' : '';

  // Portfolio data for AI Agentic Solutions
  const portfolios = [
    {
      id: 'knowledge',
      name: t('kaps.portfolios.knowledge.name'),
      color: 'blue',
      icon: ChatBubbleBottomCenterTextIcon,
      tagline: t('kaps.portfolios.knowledge.tagline'),
      description: t('kaps.portfolios.knowledge.description'),
      businessValue: t('kaps.portfolios.knowledge.businessValue'),
      impact: t('kaps.portfolios.knowledge.impact'),
      timeToValue: '2-4 weeks',
      complexity: 'Low',
      maturityLevel: 'Beginner',
      useCases: [
        {
          title: t('kaps.portfolios.knowledge.useCases.documentProcessing.title'),
          description: t('kaps.portfolios.knowledge.useCases.documentProcessing.description'),
          icon: DocumentTextIcon,
          benefits: t('kaps.portfolios.knowledge.useCases.documentProcessing.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.knowledge.useCases.documentProcessing.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.knowledge.useCases.documentProcessing.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.knowledge.useCases.conversationalAI.title'),
          description: t('kaps.portfolios.knowledge.useCases.conversationalAI.description'),
          icon: ChatBubbleBottomCenterTextIcon,
          benefits: t('kaps.portfolios.knowledge.useCases.conversationalAI.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.knowledge.useCases.conversationalAI.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.knowledge.useCases.conversationalAI.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.knowledge.useCases.contentGeneration.title'),
          description: t('kaps.portfolios.knowledge.useCases.contentGeneration.description'),
          icon: SparklesIcon,
          benefits: t('kaps.portfolios.knowledge.useCases.contentGeneration.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.knowledge.useCases.contentGeneration.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.knowledge.useCases.contentGeneration.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.knowledge.useCases.knowledgeMining.title'),
          description: t('kaps.portfolios.knowledge.useCases.knowledgeMining.description'),
          icon: MagnifyingGlassIcon,
          benefits: t('kaps.portfolios.knowledge.useCases.knowledgeMining.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.knowledge.useCases.knowledgeMining.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.knowledge.useCases.knowledgeMining.technologies', { returnObjects: true }) as unknown as string[]
        }
      ],
      architectureComponents: t('kaps.portfolios.knowledge.architectureComponents', { returnObjects: true }) as unknown as string[],
      successMetrics: t('kaps.portfolios.knowledge.successMetrics', { returnObjects: true }) as unknown as string[]
    },
    {
      id: 'analytics',
      name: t('kaps.portfolios.analytics.name'),
      color: 'purple',
      icon: ChartBarIcon,
      tagline: t('kaps.portfolios.analytics.tagline'),
      description: t('kaps.portfolios.analytics.description'),
      businessValue: t('kaps.portfolios.analytics.businessValue'),
      impact: t('kaps.portfolios.analytics.impact'),
      timeToValue: '4-8 weeks',
      complexity: 'Medium',
      maturityLevel: 'Intermediate',
      useCases: [
        {
          title: t('kaps.portfolios.analytics.useCases.predictiveAnalytics.title'),
          description: t('kaps.portfolios.analytics.useCases.predictiveAnalytics.description'),
          icon: ChartPieIcon,
          benefits: t('kaps.portfolios.analytics.useCases.predictiveAnalytics.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.analytics.useCases.predictiveAnalytics.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.analytics.useCases.predictiveAnalytics.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.analytics.useCases.anomalyDetection.title'),
          description: t('kaps.portfolios.analytics.useCases.anomalyDetection.description'),
          icon: ShieldCheckIcon,
          benefits: t('kaps.portfolios.analytics.useCases.anomalyDetection.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.analytics.useCases.anomalyDetection.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.analytics.useCases.anomalyDetection.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.analytics.useCases.customerIntelligence.title'),
          description: t('kaps.portfolios.analytics.useCases.customerIntelligence.description'),
          icon: UserGroupIcon,
          benefits: t('kaps.portfolios.analytics.useCases.customerIntelligence.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.analytics.useCases.customerIntelligence.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.analytics.useCases.customerIntelligence.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.analytics.useCases.businessIntelligence.title'),
          description: t('kaps.portfolios.analytics.useCases.businessIntelligence.description'),
          icon: PresentationChartLineIcon,
          benefits: t('kaps.portfolios.analytics.useCases.businessIntelligence.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.analytics.useCases.businessIntelligence.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.analytics.useCases.businessIntelligence.technologies', { returnObjects: true }) as unknown as string[]
        }
      ],
      architectureComponents: t('kaps.portfolios.analytics.architectureComponents', { returnObjects: true }) as unknown as string[],
      successMetrics: t('kaps.portfolios.analytics.successMetrics', { returnObjects: true }) as unknown as string[]
    },
    {
      id: 'process',
      name: t('kaps.portfolios.process.name'),
      color: 'green',
      icon: CogIcon,
      tagline: t('kaps.portfolios.process.tagline'),
      description: t('kaps.portfolios.process.description'),
      businessValue: t('kaps.portfolios.process.businessValue'),
      impact: t('kaps.portfolios.process.impact'),
      timeToValue: '6-12 weeks',
      complexity: 'High',
      maturityLevel: 'Advanced',
      useCases: [
        {
          title: t('kaps.portfolios.process.useCases.processAutomation.title'),
          description: t('kaps.portfolios.process.useCases.processAutomation.description'),
          icon: CogIcon,
          benefits: t('kaps.portfolios.process.useCases.processAutomation.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.process.useCases.processAutomation.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.process.useCases.processAutomation.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.process.useCases.cognitiveDecision.title'),
          description: t('kaps.portfolios.process.useCases.cognitiveDecision.description'),
          icon: LightBulbIcon,
          benefits: t('kaps.portfolios.process.useCases.cognitiveDecision.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.process.useCases.cognitiveDecision.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.process.useCases.cognitiveDecision.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.process.useCases.workflowOptimization.title'),
          description: t('kaps.portfolios.process.useCases.workflowOptimization.description'),
          icon: ArrowPathIcon,
          benefits: t('kaps.portfolios.process.useCases.workflowOptimization.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.process.useCases.workflowOptimization.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.process.useCases.workflowOptimization.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.process.useCases.complianceGovernance.title'),
          description: t('kaps.portfolios.process.useCases.complianceGovernance.description'),
          icon: ShieldCheckIcon,
          benefits: t('kaps.portfolios.process.useCases.complianceGovernance.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.process.useCases.complianceGovernance.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.process.useCases.complianceGovernance.technologies', { returnObjects: true }) as unknown as string[]
        }
      ],
      architectureComponents: t('kaps.portfolios.process.architectureComponents', { returnObjects: true }) as unknown as string[],
      successMetrics: t('kaps.portfolios.process.successMetrics', { returnObjects: true }) as unknown as string[]
    },
    {
      id: 'systems',
      name: t('kaps.portfolios.systems.name'),
      color: 'orange',
      icon: CpuChipIcon,
      tagline: t('kaps.portfolios.systems.tagline'),
      description: t('kaps.portfolios.systems.description'),
      businessValue: t('kaps.portfolios.systems.businessValue'),
      impact: t('kaps.portfolios.systems.impact'),
      timeToValue: '8-16 weeks',
      complexity: 'Very High',
      maturityLevel: 'Expert',
      useCases: [
        {
          title: t('kaps.portfolios.systems.useCases.codeGeneration.title'),
          description: t('kaps.portfolios.systems.useCases.codeGeneration.description'),
          icon: CodeBracketIcon,
          benefits: t('kaps.portfolios.systems.useCases.codeGeneration.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.systems.useCases.codeGeneration.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.systems.useCases.codeGeneration.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.systems.useCases.testing.title'),
          description: t('kaps.portfolios.systems.useCases.testing.description'),
          icon: BeakerIcon,
          benefits: t('kaps.portfolios.systems.useCases.testing.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.systems.useCases.testing.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.systems.useCases.testing.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.systems.useCases.aiops.title'),
          description: t('kaps.portfolios.systems.useCases.aiops.description'),
          icon: ServerStackIcon,
          benefits: t('kaps.portfolios.systems.useCases.aiops.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.systems.useCases.aiops.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.systems.useCases.aiops.technologies', { returnObjects: true }) as unknown as string[]
        },
        {
          title: t('kaps.portfolios.systems.useCases.devops.title'),
          description: t('kaps.portfolios.systems.useCases.devops.description'),
          icon: CloudArrowUpIcon,
          benefits: t('kaps.portfolios.systems.useCases.devops.benefits', { returnObjects: true }) as unknown as string[],
          examples: t('kaps.portfolios.systems.useCases.devops.examples', { returnObjects: true }) as unknown as string[],
          technologies: t('kaps.portfolios.systems.useCases.devops.technologies', { returnObjects: true }) as unknown as string[]
        }
      ],
      architectureComponents: t('kaps.portfolios.systems.architectureComponents', { returnObjects: true }) as unknown as string[],
      successMetrics: t('kaps.portfolios.systems.successMetrics', { returnObjects: true }) as unknown as string[]
    }
  ];

  // Helper function to get color classes
  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; border: string; lightBg: string; hoverBg: string } } = {
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-700',
        border: 'border-blue-300',
        lightBg: 'bg-blue-50',
        hoverBg: 'hover:bg-blue-50'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-700',
        border: 'border-purple-300',
        lightBg: 'bg-purple-50',
        hoverBg: 'hover:bg-purple-50'
      },
      green: {
        bg: 'bg-green-100',
        text: 'text-green-700',
        border: 'border-green-300',
        lightBg: 'bg-green-50',
        hoverBg: 'hover:bg-green-50'
      },
      orange: {
        bg: 'bg-orange-100',
        text: 'text-orange-700',
        border: 'border-orange-300',
        lightBg: 'bg-orange-50',
        hoverBg: 'hover:bg-orange-50'
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4">
            {t('kaps.header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('kaps.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('kaps.header.description')}
          </p>
        </div>

        {/* Framework Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('kaps.frameworkOverview.title')}</h2>
          <div className="flex justify-center mb-6">
            <img
              src={`${process.env.PUBLIC_URL}/assets/diagrams/kaps-framework${svgSuffix}.svg`}
              alt="KAPS Framework - AI Agent Portfolios"
              className="w-full max-w-5xl h-auto"
            />
          </div>

          {/* Agentic Principles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">🤖 {t('kaps.frameworkOverview.principles.autonomousOperation.title')}</h4>
              <p className="text-xs text-blue-700">
                {t('kaps.frameworkOverview.principles.autonomousOperation.description')}
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-purple-900 mb-2">🧠 {t('kaps.frameworkOverview.principles.continuousLearning.title')}</h4>
              <p className="text-xs text-purple-700">
                {t('kaps.frameworkOverview.principles.continuousLearning.description')}
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-green-900 mb-2">🔄 {t('kaps.frameworkOverview.principles.multiAgentCollaboration.title')}</h4>
              <p className="text-xs text-green-700">
                {t('kaps.frameworkOverview.principles.multiAgentCollaboration.description')}
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-orange-900 mb-2">🎯 {t('kaps.frameworkOverview.principles.goalOrientedBehavior.title')}</h4>
              <p className="text-xs text-orange-700">
                {t('kaps.frameworkOverview.principles.goalOrientedBehavior.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Agent Capabilities Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-3">{t('kaps.agentCapabilities.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">⚡ {t('kaps.agentCapabilities.proactiveAction.title')}</h4>
              <p className="text-sm text-blue-100">
                {t('kaps.agentCapabilities.proactiveAction.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔮 {t('kaps.agentCapabilities.reasoningPlanning.title')}</h4>
              <p className="text-sm text-blue-100">
                {t('kaps.agentCapabilities.reasoningPlanning.description')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🛠️ {t('kaps.agentCapabilities.toolUsage.title')}</h4>
              <p className="text-sm text-blue-100">
                {t('kaps.agentCapabilities.toolUsage.description')}
              </p>
            </div>
          </div>
        </div>

        {/* All Portfolio Sections - Displayed Vertically */}
        <div className="space-y-8">
          {portfolios.map((portfolio, portfolioIndex) => {
            const colors = getColorClasses(portfolio.color);
            const PortfolioIcon = portfolio.icon;

            return (
              <div key={portfolio.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Portfolio Header */}
                <div className={`${colors.bg} border-b-4 border-${portfolio.color}-400 p-6`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start">
                      <div className={`p-3 bg-white rounded-lg mr-4 shadow-sm`}>
                        <PortfolioIcon className={`h-8 w-8 ${colors.text}`} />
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <h2 className="text-2xl font-bold text-gray-900">{portfolio.name}</h2>
                          <span className={`ml-3 px-2 py-1 ${colors.bg} ${colors.text} rounded-full text-xs font-semibold`}>
                            {t('kaps.portfolios.agentPortfolio')} {portfolioIndex + 1}
                          </span>
                        </div>
                        <p className="text-lg font-medium text-gray-700">🤖 {portfolio.tagline}</p>
                        <p className="text-sm text-gray-600 mt-2">{portfolio.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Portfolio Metrics */}
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-6">
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">{t('kaps.portfolios.timeToDeploy')}</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.timeToValue}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">{t('kaps.portfolios.complexity')}</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.complexity}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">{t('kaps.portfolios.aiMaturity')}</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.maturityLevel}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:col-span-2">
                      <p className="text-xs text-gray-500 mb-1">{t('kaps.portfolios.agentValueProposition')}</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.businessValue}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{t('kaps.portfolios.agenticUseCases')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {portfolio.useCases.map((useCase, index) => {
                        const UseCaseIcon = useCase.icon;
                        return (
                          <div
                            key={index}
                            className={`border border-gray-200 rounded-lg p-4 hover:border-${portfolio.color}-300 ${colors.hoverBg} transition-all`}
                          >
                            <div className="flex items-start mb-3">
                              <div className={`p-2 ${colors.bg} rounded-lg mr-3 flex-shrink-0`}>
                                <UseCaseIcon className={`h-5 w-5 ${colors.text}`} />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-gray-900 mb-1">{useCase.title}</h4>
                                <p className="text-sm text-gray-600">{useCase.description}</p>
                              </div>
                            </div>

                            {/* Agent Capabilities */}
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-700 mb-2">{t('kaps.portfolios.agentCapabilities')}</p>
                              <div className="flex flex-wrap gap-2">
                                {useCase.benefits.map((benefit, idx) => (
                                  <span
                                    key={idx}
                                    className="inline-block px-2 py-1 bg-green-50 text-xs text-green-700 rounded"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Agent Examples */}
                            <div className="mb-3">
                              <p className="text-xs font-semibold text-gray-700 mb-2">{t('kaps.portfolios.agentImplementations')}</p>
                              <div className="flex flex-wrap gap-2">
                                {useCase.examples.map((example, idx) => (
                                  <span
                                    key={idx}
                                    className={`inline-block px-2 py-1 ${colors.lightBg} text-xs ${colors.text} rounded`}
                                  >
                                    {example}
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Agent Technologies */}
                            {useCase.technologies && (
                              <div>
                                <p className="text-xs font-semibold text-gray-700 mb-2">{t('kaps.portfolios.agentTechnologies')}</p>
                                <div className="flex flex-wrap gap-2">
                                  {useCase.technologies.map((tech, idx) => (
                                    <span
                                      key={idx}
                                      className="inline-block px-2 py-1 bg-gray-100 text-xs text-gray-600 rounded"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Architecture & Success Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Architecture Components */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('kaps.portfolios.agentInfrastructure')}</h4>
                      <ul className="space-y-2">
                        {portfolio.architectureComponents.map((component, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className={`inline-block w-2 h-2 ${colors.bg} rounded-full mt-1.5 mr-2 flex-shrink-0`} />
                            <span className="text-sm text-gray-600">{component}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Success Metrics */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('kaps.portfolios.agentSuccessMetrics')}</h4>
                      <ul className="space-y-2">
                        {portfolio.successMetrics.map((metric, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Agent Deployment Roadmap */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('kaps.deploymentRoadmap.title')}</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('kaps.deploymentRoadmap.phase1.title')}</h4>
                <p className="text-sm text-gray-600">{t('kaps.deploymentRoadmap.phase1.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 text-purple-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('kaps.deploymentRoadmap.phase2.title')}</h4>
                <p className="text-sm text-gray-600">{t('kaps.deploymentRoadmap.phase2.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('kaps.deploymentRoadmap.phase3.title')}</h4>
                <p className="text-sm text-gray-600">{t('kaps.deploymentRoadmap.phase3.description')}</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{t('kaps.deploymentRoadmap.phase4.title')}</h4>
                <p className="text-sm text-gray-600">{t('kaps.deploymentRoadmap.phase4.description')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">🧠</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('kaps.differentiators.cognitiveAutonomy.title')}</h4>
            <p className="text-xs text-gray-600">
              {t('kaps.differentiators.cognitiveAutonomy.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">🤝</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('kaps.differentiators.agentCollaboration.title')}</h4>
            <p className="text-xs text-gray-600">
              {t('kaps.differentiators.agentCollaboration.description')}
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">📈</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">{t('kaps.differentiators.selfImprovement.title')}</h4>
            <p className="text-xs text-gray-600">
              {t('kaps.differentiators.selfImprovement.description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KAPSFramework;
