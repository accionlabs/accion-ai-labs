import React, { useState } from 'react';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  DocumentCheckIcon,
  ExclamationTriangleIcon,
  FunnelIcon,
  ArrowPathIcon,
  ChartBarIcon,
  UserGroupIcon,
  EyeIcon,
  CheckCircleIcon,
  CpuChipIcon,
  BeakerIcon,
  CommandLineIcon,
  SparklesIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const StrategicGuardrails: React.FC = () => {
  const { t, i18n } = useTranslation('coreTechnology');
  const svgSuffix = i18n.language.startsWith('ja') ? '-ja' : '';
  const [selectedRail, setSelectedRail] = useState<string>('orchestration');

  const guardrails = {
    orchestration: {
      name: t('guardrails.guardrailComponents.orchestration.name'),
      icon: CpuChipIcon,
      color: 'blue',
      description: t('guardrails.guardrailComponents.orchestration.description'),
      controls: t('guardrails.guardrailComponents.orchestration.controls', { returnObjects: true }) as unknown as string[],
      risks: t('guardrails.guardrailComponents.orchestration.risks', { returnObjects: true }) as unknown as string[],
      implementation: t('guardrails.guardrailComponents.orchestration.implementation')
    },
    reasoning: {
      name: t('guardrails.guardrailComponents.reasoning.name'),
      icon: SparklesIcon,
      color: 'purple',
      description: t('guardrails.guardrailComponents.reasoning.description'),
      controls: t('guardrails.guardrailComponents.reasoning.controls', { returnObjects: true }) as unknown as string[],
      risks: t('guardrails.guardrailComponents.reasoning.risks', { returnObjects: true }) as unknown as string[],
      implementation: t('guardrails.guardrailComponents.reasoning.implementation')
    },
    memory: {
      name: t('guardrails.guardrailComponents.memory.name'),
      icon: BeakerIcon,
      color: 'green',
      description: t('guardrails.guardrailComponents.memory.description'),
      controls: t('guardrails.guardrailComponents.memory.controls', { returnObjects: true }) as unknown as string[],
      risks: t('guardrails.guardrailComponents.memory.risks', { returnObjects: true }) as unknown as string[],
      implementation: t('guardrails.guardrailComponents.memory.implementation')
    },
    tool: {
      name: t('guardrails.guardrailComponents.tool.name'),
      icon: CommandLineIcon,
      color: 'orange',
      description: t('guardrails.guardrailComponents.tool.description'),
      controls: t('guardrails.guardrailComponents.tool.controls', { returnObjects: true }) as unknown as string[],
      risks: t('guardrails.guardrailComponents.tool.risks', { returnObjects: true }) as unknown as string[],
      implementation: t('guardrails.guardrailComponents.tool.implementation')
    },
    collaboration: {
      name: t('guardrails.guardrailComponents.collaboration.name'),
      icon: UserGroupIcon,
      color: 'indigo',
      description: t('guardrails.guardrailComponents.collaboration.description'),
      controls: t('guardrails.guardrailComponents.collaboration.controls', { returnObjects: true }) as unknown as string[],
      risks: t('guardrails.guardrailComponents.collaboration.risks', { returnObjects: true }) as unknown as string[],
      implementation: t('guardrails.guardrailComponents.collaboration.implementation')
    },
    compliance: {
      name: t('guardrails.guardrailComponents.compliance.name'),
      icon: ScaleIcon,
      color: 'red',
      description: t('guardrails.guardrailComponents.compliance.description'),
      controls: t('guardrails.guardrailComponents.compliance.controls', { returnObjects: true }) as unknown as string[],
      risks: t('guardrails.guardrailComponents.compliance.risks', { returnObjects: true }) as unknown as string[],
      implementation: t('guardrails.guardrailComponents.compliance.implementation')
    }
  };

  const agentTypes = [
    {
      name: t('guardrails.agentTypes.supervisor.name'),
      responsibilities: t('guardrails.agentTypes.supervisor.responsibilities', { returnObjects: true }) as unknown as string[],
      guardrails: ['orchestration', 'collaboration']
    },
    {
      name: t('guardrails.agentTypes.specialist.name'),
      responsibilities: t('guardrails.agentTypes.specialist.responsibilities', { returnObjects: true }) as unknown as string[],
      guardrails: ['tool', 'reasoning', 'memory']
    },
    {
      name: t('guardrails.agentTypes.validator.name'),
      responsibilities: t('guardrails.agentTypes.validator.responsibilities', { returnObjects: true }) as unknown as string[],
      guardrails: ['compliance', 'reasoning']
    },
    {
      name: t('guardrails.agentTypes.monitor.name'),
      responsibilities: t('guardrails.agentTypes.monitor.responsibilities', { returnObjects: true }) as unknown as string[],
      guardrails: ['all']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-semibold mb-4">
            {t('guardrails.header.badge')}
          </div>
          <h1 className="text-3xl font-bold text-gray-900">{t('guardrails.header.title')}</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            {t('guardrails.header.description')}
          </p>
        </div>

        {/* Agent System Flow with Guardrails */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('guardrails.multiAgentProtection.title')}</h2>

          {/* Static Flow Diagram */}
          <div className="overflow-x-auto pb-4">
            <img
              src={`${process.env.PUBLIC_URL}/assets/diagrams/strategic-guardrails${svgSuffix}.svg`}
              alt="Multi-Agent Orchestration Pipeline with Strategic Guardrails"
              className="w-full h-auto min-w-[800px]"
            />
          </div>
        </div>

        {/* Guardrail Selection Buttons */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('guardrails.guardrailComponents.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(guardrails).map(([key, rail]) => (
              <button
                key={key}
                onClick={() => setSelectedRail(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedRail === key
                    ? `border-${rail.color}-500 bg-${rail.color}-50`
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <rail.icon className={`h-8 w-8 ${
                  selectedRail === key ? `text-${rail.color}-600` : 'text-gray-400'
                } mb-2 mx-auto`} />
                <h3 className="font-semibold text-gray-900 text-sm">{rail.name}</h3>
              </button>
            ))}
          </div>

          {/* Selected Guardrail Details */}
          {selectedRail && (
            <div className="border-t pt-6">
              {Object.entries(guardrails).filter(([key]) => key === selectedRail).map(([key, rail]) => (
              <div key={key}>
                <div className="flex items-center mb-6">
                  <rail.icon className={`h-8 w-8 text-${rail.color}-600 mr-3`} />
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900">{rail.name}</h3>
                    <p className="text-gray-600">{rail.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Controls */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                      {t('guardrails.guardrailComponents.agentControls')}
                    </h4>
                    <ul className="space-y-2">
                      {rail.controls.map((control, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          <span className="text-sm text-gray-600">{control}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Risks Mitigated */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <ExclamationTriangleIcon className="h-4 w-4 mr-2 text-yellow-600" />
                      {t('guardrails.guardrailComponents.risksMitigated')}
                    </h4>
                    <ul className="space-y-2">
                      {rail.risks.map((risk, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-yellow-500 mr-2 mt-1">⚠</span>
                          <span className="text-sm text-gray-600">{risk}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Implementation */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                      <ArrowPathIcon className="h-4 w-4 mr-2 text-blue-600" />
                      {t('guardrails.guardrailComponents.implementationLabel')}
                    </h4>
                    <p className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                      {rail.implementation}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          )}
        </div>

        {/* Agent Types and Their Guardrails */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('guardrails.agentTypes.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {agentTypes.map((agent, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">{agent.name}</h3>
                <div className="mb-3">
                  <p className="text-xs text-gray-500 mb-2">{t('guardrails.agentTypes.responsibilities')}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {agent.responsibilities.map((resp, idx) => (
                      <li key={idx}>• {resp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-2">{t('guardrails.agentTypes.requiredGuardrails')}</p>
                  <div className="flex flex-wrap gap-1">
                    {agent.guardrails.map((g, idx) => (
                      <span key={idx} className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs">
                        {g}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack for Agent Guardrails */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('guardrails.technologyStack.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('guardrails.technologyStack.orchestrationFrameworks.title')}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t('guardrails.technologyStack.orchestrationFrameworks.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('guardrails.technologyStack.orchestrationFrameworks.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('guardrails.technologyStack.validationMonitoring.title')}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t('guardrails.technologyStack.validationMonitoring.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('guardrails.technologyStack.validationMonitoring.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-gray-900 mb-2">{t('guardrails.technologyStack.securityCompliance.title')}</h3>
              <p className="text-sm text-gray-600 mb-3">
                {t('guardrails.technologyStack.securityCompliance.description')}
              </p>
              <ul className="text-xs text-gray-500 space-y-1">
                {(t('guardrails.technologyStack.securityCompliance.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Agent System Metrics Dashboard */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('guardrails.dashboard.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center">
              <CpuChipIcon className="h-6 w-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">12</p>
              <p className="text-xs text-gray-600">{t('guardrails.dashboard.activeAgents')}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <ShieldCheckIcon className="h-6 w-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-600">{t('guardrails.dashboard.policyCompliance')}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <SparklesIcon className="h-6 w-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">0.02s</p>
              <p className="text-xs text-gray-600">{t('guardrails.dashboard.avgDecisionTime')}</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center">
              <EyeIcon className="h-6 w-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-900">Full</p>
              <p className="text-xs text-gray-600">{t('guardrails.dashboard.observability')}</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/80 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('guardrails.dashboard.collaborationPatterns.title')}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.collaborationPatterns.sequentialProcessing')}</span>
                  <span className="font-semibold">45%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.collaborationPatterns.parallelExecution')}</span>
                  <span className="font-semibold">35%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.collaborationPatterns.hierarchicalDelegation')}</span>
                  <span className="font-semibold">20%</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('guardrails.dashboard.guardrailTriggers.title')}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.guardrailTriggers.roleBoundaryViolations')}</span>
                  <span className="font-semibold text-green-600">0</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.guardrailTriggers.memoryLimitWarnings')}</span>
                  <span className="font-semibold text-yellow-600">3</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.guardrailTriggers.toolAccessDenials')}</span>
                  <span className="font-semibold text-green-600">2</span>
                </div>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">{t('guardrails.dashboard.systemPerformance.title')}</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.systemPerformance.agentSuccessRate')}</span>
                  <span className="font-semibold text-green-600">98.5%</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.systemPerformance.avgTaskCompletion')}</span>
                  <span className="font-semibold">1.2s</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-600">{t('guardrails.dashboard.systemPerformance.resourceUtilization')}</span>
                  <span className="font-semibold">67%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategicGuardrails;
