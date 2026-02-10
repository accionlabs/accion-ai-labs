import React, { useState } from 'react';
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon,
  MagnifyingGlassIcon,
  LanguageIcon,
  ShieldCheckIcon,
  PhoneIcon,
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  BoltIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const AssistedHealBot: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedAgent, setSelectedAgent] = useState<string>('conversational');

  const agentKeys = ['conversational', 'summarizer', 'creator', 'triaging', 'diagnostics', 'recommender'] as const;
  const iconMap: Record<string, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
    conversational: ChatBubbleLeftRightIcon,
    summarizer: DocumentTextIcon,
    creator: ClipboardDocumentCheckIcon,
    triaging: ArrowTrendingUpIcon,
    diagnostics: MagnifyingGlassIcon,
    recommender: CpuChipIcon
  };
  const colorMap: Record<string, string> = {
    conversational: 'blue',
    summarizer: 'purple',
    creator: 'green',
    triaging: 'orange',
    diagnostics: 'red',
    recommender: 'indigo'
  };
  const capKeysMap: Record<string, string[]> = {
    conversational: ['responseSuggestions', 'conversationGuidance', 'sentimentAlerts', 'kbIntegration', 'multiChannel'],
    summarizer: ['transcription', 'keyPoints', 'actionItems', 'sentimentTracking', 'followUpRecs'],
    creator: ['autoGeneration', 'priorityClassification', 'categoryAssignment', 'slaCalculation', 'routingOptimization'],
    triaging: ['skillBasedRouting', 'urgencyDetection', 'workloadBalancing', 'expertiseMatching', 'queueOptimization'],
    diagnostics: ['automatedTroubleshooting', 'logAnalysis', 'patternRecognition', 'similarIssue', 'resolutionPrediction'],
    recommender: ['solutionRanking', 'stepByStep', 'alternativeSolutions', 'successScoring', 'historicalAnalysis']
  };
  const metricKeysMap: Record<string, string[]> = {
    conversational: ['responseQuality', 'agentEfficiency', 'escalationReduction'],
    summarizer: ['summaryAccuracy', 'timeSaved', 'documentationQuality'],
    creator: ['creationSpeed', 'accuracy', 'manualWorkReduction'],
    triaging: ['routingAccuracy', 'resolutionTime', 'fcr'],
    diagnostics: ['diagnosticAccuracy', 'timeToDiagnosis', 'resolutionRate'],
    recommender: ['recommendationAccuracy', 'resolutionSuccess', 'agentConfidence']
  };
  const toolsMap: Record<string, string[]> = {
    conversational: ['GPT-4', 'Conversation AI', 'Sentiment Analyzer', 'Knowledge Graph'],
    summarizer: ['Speech-to-Text', 'NLP Summarization', 'Entity Recognition', 'Action Parser'],
    creator: ['Ticket Engine', 'Classification Model', 'SLA Calculator', 'Routing Algorithm'],
    triaging: ['ML Classifier', 'Skills Matrix', 'Queue Manager', 'Load Balancer'],
    diagnostics: ['Log Analyzer', 'Pattern Matcher', 'ML Diagnostics', 'Knowledge Base'],
    recommender: ['Recommendation Engine', 'Solution Database', 'Success Predictor', 'Guide Generator']
  };

  const agents = Object.fromEntries(agentKeys.map(key => [key, {
    name: t(`customerService.assistedHealBot.agents.${key}.name`),
    role: t(`customerService.assistedHealBot.agents.${key}.role`),
    icon: iconMap[key],
    color: colorMap[key],
    capabilities: capKeysMap[key].map(capKey => t(`customerService.assistedHealBot.agents.${key}.capabilities.${capKey}`)),
    tools: toolsMap[key],
    metrics: Object.fromEntries(metricKeysMap[key].map(mKey => [
      t(`customerService.assistedHealBot.agents.${key}.metrics.${mKey}`),
      t(`customerService.assistedHealBot.agents.${key}.metrics.${mKey}Value`)
    ]))
  }]));

  const workflowScenarios = [
    {
      title: t('customerService.assistedHealBot.workflows.complexTechnical.title'),
      severity: t('customerService.assistedHealBot.workflows.complexTechnical.severity'),
      flow: [
        { agent: 'conversational', action: t('customerService.assistedHealBot.workflows.complexTechnical.steps.step1') },
        { agent: 'diagnostics', action: t('customerService.assistedHealBot.workflows.complexTechnical.steps.step2') },
        { agent: 'recommender', action: t('customerService.assistedHealBot.workflows.complexTechnical.steps.step3') },
        { agent: 'creator', action: t('customerService.assistedHealBot.workflows.complexTechnical.steps.step4') },
        { agent: 'summarizer', action: t('customerService.assistedHealBot.workflows.complexTechnical.steps.step5') }
      ],
      outcome: t('customerService.assistedHealBot.workflows.complexTechnical.outcome'),
      timeReduction: t('customerService.assistedHealBot.workflows.complexTechnical.timeReduction')
    },
    {
      title: t('customerService.assistedHealBot.workflows.highVolume.title'),
      severity: t('customerService.assistedHealBot.workflows.highVolume.severity'),
      flow: [
        { agent: 'triaging', action: t('customerService.assistedHealBot.workflows.highVolume.steps.step1') },
        { agent: 'conversational', action: t('customerService.assistedHealBot.workflows.highVolume.steps.step2') },
        { agent: 'creator', action: t('customerService.assistedHealBot.workflows.highVolume.steps.step3') },
        { agent: 'summarizer', action: t('customerService.assistedHealBot.workflows.highVolume.steps.step4') }
      ],
      outcome: t('customerService.assistedHealBot.workflows.highVolume.outcome'),
      timeReduction: t('customerService.assistedHealBot.workflows.highVolume.timeReduction')
    }
  ];

  const perfKeys = ['agentProductivity', 'averageHandleTime', 'fcr', 'csat'] as const;
  const performanceMetrics = perfKeys.map(key => ({
    label: t(`customerService.assistedHealBot.performance.data.${key}.label`),
    before: t(`customerService.assistedHealBot.performance.data.${key}.before`),
    after: t(`customerService.assistedHealBot.performance.data.${key}.after`),
    improvement: t(`customerService.assistedHealBot.performance.data.${key}.improvement`)
  }));

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
            {t('customerService.assistedHealBot.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('customerService.assistedHealBot.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('customerService.assistedHealBot.header.description')}
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <UserGroupIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">+150%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.assistedHealBot.metrics.productivity')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ClockIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">-60%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.assistedHealBot.metrics.handleTime')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <CheckCircleIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">67%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.assistedHealBot.metrics.fcr')}</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">4.6/5</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">{t('customerService.assistedHealBot.metrics.csat')}</p>
          </div>
        </div>

        {/* Agent Components Grid */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.assistedHealBot.agents.title')}</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(agents).map(([key, agent]) => (
              <button
                key={key}
                onClick={() => setSelectedAgent(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAgent === key
                    ? `border-${agent.color}-500 bg-${agent.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <agent.icon className={`h-8 w-8 ${
                  selectedAgent === key ? `text-${agent.color}-600` : 'text-gray-400'
                } mb-2`} />
                <h3 className="font-semibold text-gray-900 text-sm">{agent.name}</h3>
                <p className="text-xs text-gray-600 mt-1">{agent.role}</p>
              </button>
            ))}
          </div>

          {/* Selected Agent Details */}
          {selectedAgent && (
            <div className="border-t pt-6">
              {Object.entries(agents).filter(([key]) => key === selectedAgent).map(([key, agent]) => (
                <div key={key}>
                  <div className="flex items-center mb-4">
                    <agent.icon className={`h-8 w-8 text-${agent.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{agent.name}</h3>
                      <p className="text-gray-600">{agent.role}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.assistedHealBot.agents.coreCapabilities')}</h4>
                      <ul className="space-y-2">
                        {agent.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tools */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.assistedHealBot.agents.techStack')}</h4>
                      <div className="flex flex-wrap gap-2">
                        {agent.tools.map((tool, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">{t('customerService.assistedHealBot.agents.impactMetrics')}</h4>
                      <div className="space-y-2">
                        {Object.entries(agent.metrics).map(([metric, value]) => (
                          <div key={metric} className="flex justify-between text-sm">
                            <span className="text-gray-600">{metric}:</span>
                            <span className={`font-semibold ${
                              value.includes('+') ? 'text-green-600' :
                              value.includes('-') ? 'text-blue-600' : 'text-gray-900'
                            }`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Workflow Scenarios */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.assistedHealBot.workflows.title')}</h2>
          <div className="space-y-6">
            {workflowScenarios.map((scenario, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{scenario.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    scenario.severity === t('customerService.assistedHealBot.workflows.complexTechnical.severity') ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {scenario.severity} {t('customerService.assistedHealBot.workflows.priority')}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  {scenario.flow.map((step, idx) => {
                    const agent = agents[step.agent as keyof typeof agents];
                    return (
                      <div key={idx} className="flex items-start">
                        <div className="flex items-center">
                          <div className={`w-8 h-8 rounded-full bg-${agent.color}-100 flex items-center justify-center`}>
                            <span className="text-xs font-semibold">{idx + 1}</span>
                          </div>
                          {idx < scenario.flow.length - 1 && (
                            <ArrowRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                          )}
                        </div>
                        <div className="ml-3 flex-1">
                          <p className="text-sm font-semibold text-gray-900">{agent.name}</p>
                          <p className="text-sm text-gray-600">{step.action}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="bg-green-50 rounded-lg p-3 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-green-900">{t('customerService.assistedHealBot.workflows.outcome')}</p>
                    <p className="text-sm text-green-700">{scenario.outcome}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-green-900">{t('customerService.assistedHealBot.workflows.timeSaved')}</p>
                    <p className="text-lg font-bold text-green-600">{scenario.timeReduction}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Performance Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.assistedHealBot.performance.title')}</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.assistedHealBot.performance.metric')}</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.assistedHealBot.performance.beforeAI')}</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.assistedHealBot.performance.withBot')}</th>
                  <th className="text-center py-3 px-4 text-sm font-semibold text-gray-900">{t('customerService.assistedHealBot.performance.improvement')}</th>
                </tr>
              </thead>
              <tbody>
                {performanceMetrics.map((metric, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-3 px-4 text-sm text-gray-900">{metric.label}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-600">{metric.before}</td>
                    <td className="py-3 px-4 text-sm text-center text-gray-900 font-semibold">{metric.after}</td>
                    <td className="py-3 px-4 text-sm text-center">
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                        metric.improvement.includes('+') ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                      }`}>
                        {metric.improvement}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Integration Points */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('customerService.assistedHealBot.integration.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.assistedHealBot.integration.itsm')}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {(t('customerService.assistedHealBot.integration.itsmItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.assistedHealBot.integration.communication')}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {(t('customerService.assistedHealBot.integration.communicationItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('customerService.assistedHealBot.integration.knowledge')}</h3>
              <ul className="space-y-1 text-sm text-gray-600">
                {(t('customerService.assistedHealBot.integration.knowledgeItems', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistedHealBot;
