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

const KAPSFramework: React.FC = () => {
  // Portfolio data for AI Agentic Solutions
  const portfolios = [
    {
      id: 'knowledge',
      name: 'Knowledge Portfolio',
      color: 'blue',
      icon: ChatBubbleBottomCenterTextIcon,
      tagline: 'Autonomous Knowledge Agents',
      description: 'Deploy intelligent agents that autonomously process, understand, and generate content from unstructured data with reasoning capabilities',
      businessValue: 'Self-organizing knowledge agents that learn and improve continuously',
      impact: 'Autonomous agents handle complex knowledge tasks without human intervention',
      timeToValue: '2-4 weeks',
      complexity: 'Low',
      maturityLevel: 'Beginner',
      useCases: [
        {
          title: 'Document Processing Agent Network',
          description: 'Multi-agent system where specialized agents collaborate to extract, validate, and enrich information from documents',
          icon: DocumentTextIcon,
          benefits: ['Autonomous document understanding', 'Self-correcting accuracy', 'Agent learns from feedback'],
          examples: ['Contract Analysis Agent', 'Compliance Review Agent', 'Invoice Processing Swarm', 'Legal Research Assistant'],
          technologies: ['LangChain Agents', 'AutoGPT', 'Semantic Memory Systems', 'RAG Pipelines']
        },
        {
          title: 'Conversational AI Agent Ecosystem',
          description: 'Orchestrated agent teams that handle complex multi-turn conversations with memory, context, and goal-seeking behavior',
          icon: ChatBubbleBottomCenterTextIcon,
          benefits: ['Goal-oriented dialogue', 'Multi-agent handoffs', 'Persistent memory across sessions'],
          examples: ['Customer Success Agent Team', 'Technical Support Bot Network', 'Sales Agent Orchestration', 'HR Assistant Collective'],
          technologies: ['Agent Orchestration Frameworks', 'Memory Networks', 'Tool-Using Agents', 'Chain-of-Thought Reasoning']
        },
        {
          title: 'Content Generation Agent Factory',
          description: 'Autonomous agents that plan, create, review, and optimize content with minimal human oversight',
          icon: SparklesIcon,
          benefits: ['Self-improving content quality', 'Multi-agent review process', 'Adaptive style learning'],
          examples: ['Marketing Campaign Agent', 'Technical Writing Assistant', 'Creative Brief Generator', 'Social Media Agent Network'],
          technologies: ['CrewAI', 'Agent Feedback Loops', 'Fine-tuned LLM Agents', 'Prompt Chaining Systems']
        },
        {
          title: 'Knowledge Mining Agent Swarm',
          description: 'Distributed agents that autonomously discover, connect, and synthesize knowledge from multiple sources',
          icon: MagnifyingGlassIcon,
          benefits: ['Autonomous knowledge graph building', 'Cross-domain synthesis', 'Proactive insight generation'],
          examples: ['Research Discovery Agents', 'Competitive Intelligence Network', 'Patent Analysis Swarm', 'Market Research Collective'],
          technologies: ['Graph Neural Networks', 'Agent-based Web Crawling', 'Embedding-based Agents', 'Knowledge Graph Agents']
        }
      ],
      architectureComponents: [
        'Agent Orchestration Platform',
        'Shared Memory & Context Store',
        'Tool Registry for Agents',
        'Agent Communication Protocol',
        'Feedback & Learning Loop System'
      ],
      successMetrics: [
        'Agent autonomy level',
        'Task completion without intervention',
        'Agent learning rate',
        'Multi-agent collaboration efficiency'
      ]
    },
    {
      id: 'analytics',
      name: 'Analytics Portfolio',
      color: 'purple',
      icon: ChartBarIcon,
      tagline: 'Intelligent Analytics Agents',
      description: 'Deploy autonomous analyst agents that proactively discover insights, predict outcomes, and recommend actions from structured data',
      businessValue: 'Self-directed analytics agents that anticipate needs and act on insights',
      impact: 'Proactive intelligence agents that identify opportunities before humans ask',
      timeToValue: '4-8 weeks',
      complexity: 'Medium',
      maturityLevel: 'Intermediate',
      useCases: [
        {
          title: 'Predictive Analytics Agent Team',
          description: 'Collaborative agents that autonomously build, validate, and deploy predictive models with continuous learning',
          icon: ChartPieIcon,
          benefits: ['Self-optimizing models', 'Autonomous feature engineering', 'Proactive anomaly detection'],
          examples: ['Demand Forecasting Agent', 'Risk Assessment Network', 'Churn Prediction Swarm', 'Revenue Optimization Agent'],
          technologies: ['AutoML Agents', 'Model Selection Agents', 'Feature Engineering Bots', 'Ensemble Agent Networks']
        },
        {
          title: 'Anomaly Detection Agent Network',
          description: 'Distributed agents that continuously monitor data streams, learn normal patterns, and coordinate responses to anomalies',
          icon: ShieldCheckIcon,
          benefits: ['Adaptive threshold learning', 'Coordinated incident response', 'Root cause analysis automation'],
          examples: ['Fraud Detection Swarm', 'Security Threat Hunters', 'Quality Control Agents', 'System Health Monitors'],
          technologies: ['Streaming Agent Architectures', 'Unsupervised Learning Agents', 'Alert Correlation Agents', 'Response Automation Bots']
        },
        {
          title: 'Customer Intelligence Agent Collective',
          description: 'Multi-agent system that builds living customer profiles, predicts behaviors, and orchestrates personalized experiences',
          icon: UserGroupIcon,
          benefits: ['Real-time profile evolution', 'Predictive journey mapping', 'Autonomous personalization'],
          examples: ['Customer 360 Agent', 'Behavior Prediction Network', 'Recommendation Agent Swarm', 'Engagement Optimization Bots'],
          technologies: ['Graph-based Agent Systems', 'Reinforcement Learning Agents', 'Multi-Armed Bandit Agents', 'Collaborative Filtering Agents']
        },
        {
          title: 'Business Intelligence Agent Assistant',
          description: 'Autonomous agents that interpret business questions, explore data, and generate insights with explanations',
          icon: PresentationChartLineIcon,
          benefits: ['Natural language to insights', 'Hypothesis testing agents', 'Automated insight narratives'],
          examples: ['Executive Analytics Agent', 'KPI Monitoring Swarm', 'Insight Discovery Network', 'Report Generation Collective'],
          technologies: ['SQL-generating Agents', 'Visualization Agents', 'Statistical Analysis Bots', 'Narrative Generation Agents']
        }
      ],
      architectureComponents: [
        'Analytics Agent Hub',
        'Model Registry & Versioning',
        'Feature Store for Agents',
        'Stream Processing Agent Layer',
        'Insight Action Pipeline'
      ],
      successMetrics: [
        'Proactive insight generation rate',
        'Agent-discovered opportunities',
        'Prediction accuracy improvement',
        'Time to insight reduction'
      ]
    },
    {
      id: 'process',
      name: 'Process Portfolio',
      color: 'green',
      icon: CogIcon,
      tagline: 'Autonomous Process Agents',
      description: 'Deploy cognitive agents that autonomously execute, optimize, and evolve business processes with decision-making capabilities',
      businessValue: 'Self-managing process agents that adapt and improve workflows continuously',
      impact: 'Intelligent automation that thinks, decides, and acts like expert humans',
      timeToValue: '6-12 weeks',
      complexity: 'High',
      maturityLevel: 'Advanced',
      useCases: [
        {
          title: 'Intelligent Process Automation Swarm',
          description: 'Multi-agent systems where specialized agents handle different process steps, negotiate handoffs, and optimize flow',
          icon: CogIcon,
          benefits: ['Self-orchestrating workflows', 'Dynamic process optimization', 'Exception handling agents'],
          examples: ['Claims Processing Network', 'Loan Origination Swarm', 'Supply Chain Agents', 'Order Fulfillment Collective'],
          technologies: ['Process Mining Agents', 'Decision Agents', 'Workflow Orchestration Bots', 'RPA + AI Agent Integration']
        },
        {
          title: 'Cognitive Decision Agent Network',
          description: 'Expert agents that analyze context, weigh options, and make complex decisions with explainable reasoning',
          icon: LightBulbIcon,
          benefits: ['Autonomous decision making', 'Multi-criteria optimization', 'Explainable agent reasoning'],
          examples: ['Credit Approval Agent', 'Treatment Recommendation System', 'Investment Advisory Network', 'Resource Allocation Swarm'],
          technologies: ['Expert System Agents', 'Reasoning Engines', 'Multi-Agent Negotiation', 'Explainable AI Agents']
        },
        {
          title: 'Dynamic Workflow Optimization Agents',
          description: 'Agents that continuously monitor, learn, and restructure processes for optimal performance',
          icon: ArrowPathIcon,
          benefits: ['Self-healing processes', 'Bottleneck prediction', 'Autonomous re-routing'],
          examples: ['Manufacturing Flow Optimizer', 'Call Center Router Agent', 'Logistics Planning Swarm', 'Service Scheduling Network'],
          technologies: ['Reinforcement Learning Agents', 'Digital Twin Agents', 'Simulation-based Agents', 'Optimization Algorithm Bots']
        },
        {
          title: 'Compliance & Governance Agent Force',
          description: 'Vigilant agents that monitor, enforce, and adapt to regulatory requirements across all processes',
          icon: ShieldCheckIcon,
          benefits: ['Continuous compliance monitoring', 'Regulatory change adaptation', 'Automated audit trails'],
          examples: ['GDPR Compliance Agent', 'AML Monitoring Network', 'Quality Assurance Swarm', 'Risk Management Collective'],
          technologies: ['Policy Engine Agents', 'Regulation Parsing Bots', 'Audit Trail Agents', 'Compliance Reasoning Systems']
        }
      ],
      architectureComponents: [
        'Process Agent Orchestrator',
        'Decision Engine Framework',
        'Agent Task Queue System',
        'Process Memory & Learning Store',
        'Inter-Agent Communication Bus'
      ],
      successMetrics: [
        'Process autonomy percentage',
        'Agent decision accuracy',
        'Self-optimization rate',
        'Human intervention reduction'
      ]
    },
    {
      id: 'systems',
      name: 'Systems Portfolio',
      color: 'orange',
      icon: CpuChipIcon,
      tagline: 'AI Development & Infrastructure Agents',
      description: 'Deploy sophisticated agents that autonomously develop code, manage infrastructure, and optimize entire technology ecosystems',
      businessValue: 'Self-evolving technology agents that build, test, and maintain systems',
      impact: 'Autonomous IT agents that act as virtual engineering teams',
      timeToValue: '8-16 weeks',
      complexity: 'Very High',
      maturityLevel: 'Expert',
      useCases: [
        {
          title: 'Code Generation Agent Collective',
          description: 'Teams of specialized agents that collaboratively design, implement, review, and refactor code autonomously',
          icon: CodeBracketIcon,
          benefits: ['Autonomous feature development', 'Multi-agent code review', 'Self-documenting systems'],
          examples: ['Full-Stack Development Agent', 'Legacy Migration Swarm', 'API Builder Network', 'Code Modernization Collective'],
          technologies: ['GitHub Copilot Agents', 'Code Generation LLMs', 'AST Manipulation Agents', 'Devin-style Agents']
        },
        {
          title: 'Intelligent Testing Agent Army',
          description: 'Autonomous agents that generate tests, find bugs, and ensure quality through collaborative testing strategies',
          icon: BeakerIcon,
          benefits: ['Self-generating test suites', 'Autonomous bug hunting', 'Self-healing test maintenance'],
          examples: ['Test Generation Swarm', 'Security Testing Agents', 'Performance Testing Network', 'Chaos Engineering Bots'],
          technologies: ['Test Generation Agents', 'Fuzzing Bots', 'Property-based Testing Agents', 'Test Optimization Networks']
        },
        {
          title: 'AIOps Agent Ecosystem',
          description: 'Infrastructure agents that predict issues, optimize resources, and maintain system health autonomously',
          icon: ServerStackIcon,
          benefits: ['Predictive maintenance', 'Self-healing infrastructure', 'Autonomous scaling decisions'],
          examples: ['Incident Response Team', 'Capacity Planning Agents', 'Cost Optimization Swarm', 'Security Operations Center'],
          technologies: ['Monitoring Agents', 'Root Cause Analysis Bots', 'Remediation Agents', 'Infrastructure-as-Code Agents']
        },
        {
          title: 'DevOps Automation Agent Pipeline',
          description: 'End-to-end autonomous agents that manage CI/CD, deployments, and release strategies without human intervention',
          icon: CloudArrowUpIcon,
          benefits: ['Autonomous deployment decisions', 'Self-optimizing pipelines', 'Intelligent rollback agents'],
          examples: ['Release Management Agent', 'Pipeline Optimization Network', 'Deployment Strategy Swarm', 'GitOps Agent Collective'],
          technologies: ['Pipeline Automation Agents', 'Deployment Decision Bots', 'Canary Analysis Agents', 'Configuration Management Agents']
        }
      ],
      architectureComponents: [
        'Development Agent Platform',
        'Code Intelligence Engine',
        'Test Agent Framework',
        'Infrastructure Agent Hub',
        'DevSecOps Agent Pipeline'
      ],
      successMetrics: [
        'Autonomous development velocity',
        'Agent-generated code quality',
        'Self-remediation success rate',
        'Infrastructure optimization score'
      ]
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
            AI Agentic Framework
          </div>
          <h1 className="text-3xl font-bold text-gray-900">KAPS Framework for Autonomous AI Agents</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            A comprehensive framework for deploying autonomous AI agents across four strategic portfolios. These are not 
            traditional software solutions but intelligent, self-directed agents that reason, learn, and act autonomously 
            to transform enterprise operations.
          </p>
        </div>

        {/* Framework Overview */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Agentic AI Architecture Overview</h2>
          <div className="flex justify-center mb-6">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/diagrams/kaps-framework.svg`}
              alt="KAPS Framework - AI Agent Portfolios"
              className="w-full max-w-5xl h-auto"
            />
          </div>
          
          {/* Agentic Principles */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-blue-900 mb-2">🤖 Autonomous Operation</h4>
              <p className="text-xs text-blue-700">
                Agents operate independently, making decisions and taking actions without constant human oversight.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-purple-900 mb-2">🧠 Continuous Learning</h4>
              <p className="text-xs text-purple-700">
                Agents learn from interactions, feedback, and outcomes to improve their performance over time.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-green-900 mb-2">🔄 Multi-Agent Collaboration</h4>
              <p className="text-xs text-green-700">
                Agents work in teams, negotiating tasks, sharing knowledge, and coordinating complex workflows.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="text-sm font-semibold text-orange-900 mb-2">🎯 Goal-Oriented Behavior</h4>
              <p className="text-xs text-orange-700">
                Agents pursue objectives autonomously, planning steps and adapting strategies to achieve goals.
              </p>
            </div>
          </div>
        </div>

        {/* Agent Capabilities Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-6 mb-8 text-white">
          <h3 className="text-xl font-bold mb-3">What Makes These Solutions Agentic?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold mb-2">⚡ Proactive Action</h4>
              <p className="text-sm text-blue-100">
                Agents don't wait for commands - they identify opportunities and act on them autonomously.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🔮 Reasoning & Planning</h4>
              <p className="text-sm text-blue-100">
                Using chain-of-thought and other techniques, agents reason through problems and plan solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">🛠️ Tool Usage</h4>
              <p className="text-sm text-blue-100">
                Agents autonomously select and use tools, APIs, and other agents to accomplish their goals.
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
                            Agent Portfolio {portfolioIndex + 1}
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
                      <p className="text-xs text-gray-500 mb-1">Time to Deploy</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.timeToValue}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">Complexity</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.complexity}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3">
                      <p className="text-xs text-gray-500 mb-1">AI Maturity</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.maturityLevel}</p>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:col-span-2">
                      <p className="text-xs text-gray-500 mb-1">Agent Value Proposition</p>
                      <p className="text-sm font-semibold text-gray-900">{portfolio.businessValue}</p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Agentic Use Cases</h3>
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
                              <p className="text-xs font-semibold text-gray-700 mb-2">Agent Capabilities:</p>
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
                              <p className="text-xs font-semibold text-gray-700 mb-2">Agent Implementations:</p>
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
                                <p className="text-xs font-semibold text-gray-700 mb-2">Agent Technologies:</p>
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
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Agent Infrastructure</h4>
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
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Agent Success Metrics</h4>
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
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Agent Deployment Roadmap</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-blue-100 text-blue-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phase 1: Knowledge Agents (Weeks 1-4)</h4>
                <p className="text-sm text-gray-600">Deploy conversational and document processing agents for immediate autonomous knowledge handling.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-purple-100 text-purple-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phase 2: Analytics Agents (Weeks 5-12)</h4>
                <p className="text-sm text-gray-600">Launch predictive and analytical agents that proactively discover insights and opportunities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phase 3: Process Agents (Weeks 13-24)</h4>
                <p className="text-sm text-gray-600">Deploy autonomous process agents that execute complex workflows with decision-making capabilities.</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-orange-100 text-orange-700 rounded-full w-8 h-8 flex items-center justify-center font-semibold text-sm mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Phase 4: System Agents (Weeks 25+)</h4>
                <p className="text-sm text-gray-600">Implement development and infrastructure agents that autonomously build and maintain systems.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">🧠</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Cognitive Autonomy</h4>
            <p className="text-xs text-gray-600">
              Unlike traditional automation, our agents think, reason, and make decisions independently, 
              adapting to new situations without reprogramming.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">🤝</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Agent Collaboration</h4>
            <p className="text-xs text-gray-600">
              Agents work in teams, delegating tasks, sharing insights, and coordinating complex 
              multi-step processes across the enterprise.
            </p>
          </div>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <span className="text-2xl mb-2">📈</span>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Self-Improvement</h4>
            <p className="text-xs text-gray-600">
              Agents learn from every interaction, continuously improving their performance and 
              discovering new ways to achieve objectives.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KAPSFramework;