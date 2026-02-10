import React from 'react';
import { useTranslation } from 'react-i18next';

interface AgentsLayerDeepDiveNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const AgentsLayerDeepDiveNew: React.FC<AgentsLayerDeepDiveNewProps> = () => {
  const { t } = useTranslation('breezeProcess');

  const agentTypes = React.useMemo(() => [
    {
      type: t('semantic.agents.agentTypes.businessProcess.type'),
      purpose: t('semantic.agents.agentTypes.businessProcess.purpose'),
      capabilities: t('semantic.agents.agentTypes.businessProcess.capabilities'),
      examples: [t('semantic.agents.agentTypes.businessProcess.examples.0'), t('semantic.agents.agentTypes.businessProcess.examples.1'), t('semantic.agents.agentTypes.businessProcess.examples.2')],
      color: "bg-brand-blue-50 border-secondary text-secondary"
    },
    {
      type: t('semantic.agents.agentTypes.domain.type'),
      purpose: t('semantic.agents.agentTypes.domain.purpose'),
      capabilities: t('semantic.agents.agentTypes.domain.capabilities'),
      examples: [t('semantic.agents.agentTypes.domain.examples.0'), t('semantic.agents.agentTypes.domain.examples.1'), t('semantic.agents.agentTypes.domain.examples.2')],
      color: "bg-brand-purple-50 border-brand-purple-600 text-brand-purple-800"
    },
    {
      type: t('semantic.agents.agentTypes.integration.type'),
      purpose: t('semantic.agents.agentTypes.integration.purpose'),
      capabilities: t('semantic.agents.agentTypes.integration.capabilities'),
      examples: [t('semantic.agents.agentTypes.integration.examples.0'), t('semantic.agents.agentTypes.integration.examples.1'), t('semantic.agents.agentTypes.integration.examples.2')],
      color: "bg-success-50 border-success text-success-800"
    },
    {
      type: t('semantic.agents.agentTypes.assistant.type'),
      purpose: t('semantic.agents.agentTypes.assistant.purpose'),
      capabilities: t('semantic.agents.agentTypes.assistant.capabilities'),
      examples: [t('semantic.agents.agentTypes.assistant.examples.0'), t('semantic.agents.agentTypes.assistant.examples.1'), t('semantic.agents.agentTypes.assistant.examples.2')],
      color: "bg-warning-50 border-warning text-warning-800"
    }
  ], [t]);

  const services = React.useMemo(() => [
    t('semantic.agents.orchestration.coordination.services.0'),
    t('semantic.agents.orchestration.coordination.services.1'),
    t('semantic.agents.orchestration.coordination.services.2'),
    t('semantic.agents.orchestration.coordination.services.3')
  ], [t]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-innovation-gradient bg-clip-text text-transparent">
            {t('semantic.agents.header.title')}
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          {t('semantic.agents.header.description')}
        </p>
      </div>

      {/* Agent Layer Position */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.agents.layerPosition.title')}</h3>

        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-brand-purple-100 rounded-lg border-2 border-brand-purple-600 w-full max-w-md text-center">
            <div className="font-bold text-brand-purple-800">{t('semantic.agents.layerPosition.uxLayer.title')}</div>
            <div className="text-sm text-brand-purple-600">{t('semantic.agents.layerPosition.uxLayer.description')}</div>
          </div>

          <div className="text-gray-400 text-2xl">↓</div>

          <div className="p-4 bg-success-100 rounded-lg border-2 border-success w-full max-w-md text-center ring-4 ring-success-200">
            <div className="font-bold text-success-800 text-lg">{t('semantic.agents.layerPosition.agentsLayer.title')}</div>
            <div className="text-sm text-success-700 font-semibold">{t('semantic.agents.layerPosition.agentsLayer.description')}</div>
          </div>

          <div className="text-gray-400 text-2xl">↓</div>

          <div className="p-4 bg-warning-100 rounded-lg border-2 border-warning w-full max-w-md text-center">
            <div className="font-bold text-warning-800">{t('semantic.agents.layerPosition.servicesLayer.title')}</div>
            <div className="text-sm text-warning-600">{t('semantic.agents.layerPosition.servicesLayer.description')}</div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-success-50 rounded-lg border border-success">
          <p className="text-success-800 text-center">
            <strong>{t('semantic.agents.layerPosition.keyInnovationLabel')}</strong> {t('semantic.agents.layerPosition.keyInnovationText')}
          </p>
        </div>
      </div>

      {/* Agent Types Deep Dive */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.agents.agentTypesSection.title')}</h3>

        <div className="space-y-6">
          {agentTypes.map((agent, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${agent.color}`}>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">{agent.type}</h4>
                <p className="text-sm mb-3">{agent.purpose}</p>
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide">{t('semantic.agents.agentTypesSection.capabilitiesLabel')}</span>
                  <p className="text-sm">{agent.capabilities}</p>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wide mb-2 block">{t('semantic.agents.agentTypesSection.examplesLabel')}</span>
                <div className="flex flex-wrap gap-2">
                  {agent.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="px-3 py-1 bg-white rounded-full text-xs font-medium border">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Orchestration Examples */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.agents.orchestration.title')}</h3>

        <div className="space-y-8">
          {/* Service Coordination Flow */}
          <div className="p-6 bg-brand-blue-50 rounded-lg border border-secondary">
            <h4 className="text-lg font-bold text-secondary mb-4">{t('semantic.agents.orchestration.coordination.title')}</h4>
            <div className="space-y-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-lg font-semibold text-gray-800 mb-2">{t('semantic.agents.orchestration.coordination.userRequest')}</div>
                <div className="text-sm text-gray-600">{t('semantic.agents.orchestration.coordination.userRequestLabel')}</div>
              </div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <div className="p-4 bg-success-100 rounded-lg border border-success">
                <div className="font-semibold text-success-800 mb-2">{t('semantic.agents.orchestration.coordination.agentName')}</div>
                <div className="text-sm text-success-700">{t('semantic.agents.orchestration.coordination.agentDescription')}</div>
              </div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {services.map((service, index) => (
                  <div key={index} className="p-3 bg-warning-100 rounded-lg border border-warning text-center">
                    <div className="font-semibold text-warning-800 text-sm">{service}</div>
                  </div>
                ))}
              </div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="font-semibold text-gray-800 mb-2">{t('semantic.agents.orchestration.coordination.result')}</div>
                <div className="text-sm text-gray-600">{t('semantic.agents.orchestration.coordination.resultDescription')}</div>
              </div>
            </div>
          </div>

          {/* Agent Collaboration */}
          <div className="p-6 bg-brand-purple-50 rounded-lg border border-brand-purple-600">
            <h4 className="text-lg font-bold text-brand-purple-800 mb-4">{t('semantic.agents.orchestration.collaboration.title')}</h4>
            <div className="space-y-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-lg font-semibold text-gray-800 mb-2">{t('semantic.agents.orchestration.collaboration.userRequest')}</div>
                <div className="text-sm text-gray-600">{t('semantic.agents.orchestration.collaboration.userRequestLabel')}</div>
              </div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-brand-purple-100 rounded-lg border border-brand-purple-600">
                  <div className="font-semibold text-brand-purple-800 mb-2">{t('semantic.agents.orchestration.collaboration.agents.discovery.name')}</div>
                  <div className="text-sm text-brand-purple-700">{t('semantic.agents.orchestration.collaboration.agents.discovery.description')}</div>
                </div>
                <div className="p-4 bg-brand-blue-100 rounded-lg border border-secondary">
                  <div className="font-semibold text-secondary mb-2">{t('semantic.agents.orchestration.collaboration.agents.purchase.name')}</div>
                  <div className="text-sm text-brand-blue-700">{t('semantic.agents.orchestration.collaboration.agents.purchase.description')}</div>
                </div>
                <div className="p-4 bg-warning-100 rounded-lg border border-warning">
                  <div className="font-semibold text-warning-800 mb-2">{t('semantic.agents.orchestration.collaboration.agents.support.name')}</div>
                  <div className="text-sm text-warning-700">{t('semantic.agents.orchestration.collaboration.agents.support.description')}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Decision Making */}
          <div className="p-6 bg-success-50 rounded-lg border border-success">
            <h4 className="text-lg font-bold text-success-800 mb-4">{t('semantic.agents.orchestration.decisionMaking.title')}</h4>
            <div className="space-y-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-lg font-semibold text-gray-800 mb-2">{t('semantic.agents.orchestration.decisionMaking.complication')}</div>
                <div className="text-sm text-gray-600">{t('semantic.agents.orchestration.decisionMaking.complicationDescription')}</div>
              </div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <div className="p-4 bg-success-100 rounded-lg border border-success">
                <div className="font-semibold text-success-800 mb-2">{t('semantic.agents.orchestration.decisionMaking.agentDecisions')}</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-white rounded border">
                    <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.orchestration.decisionMaking.stockIssue.title')}</div>
                    <div className="text-xs text-gray-600">{t('semantic.agents.orchestration.decisionMaking.stockIssue.description')}</div>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.orchestration.decisionMaking.paymentIssue.title')}</div>
                    <div className="text-xs text-gray-600">{t('semantic.agents.orchestration.decisionMaking.paymentIssue.description')}</div>
                  </div>
                </div>
              </div>

              <div className="text-center text-2xl text-gray-400">↓</div>

              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="font-semibold text-gray-800 mb-2">{t('semantic.agents.orchestration.decisionMaking.seamlessUx')}</div>
                <div className="text-sm text-gray-600">{t('semantic.agents.orchestration.decisionMaking.seamlessUxDescription')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Capabilities & Benefits */}
      <div className="bg-gradient-to-r from-success-50 to-brand-blue-50 rounded-xl p-8 border-l-4 border-success mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('semantic.agents.benefits.title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.agents.benefits.intelligence.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.agents.benefits.intelligence.orchestration.label')}</span>
                  <span className="text-gray-700"> {t('semantic.agents.benefits.intelligence.orchestration.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.agents.benefits.intelligence.problemSolving.label')}</span>
                  <span className="text-gray-700"> {t('semantic.agents.benefits.intelligence.problemSolving.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-purple-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.agents.benefits.intelligence.adaptive.label')}</span>
                  <span className="text-gray-700"> {t('semantic.agents.benefits.intelligence.adaptive.text')}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.agents.benefits.uxArchitecture.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.agents.benefits.uxArchitecture.enhancedUx.label')}</span>
                  <span className="text-gray-700"> {t('semantic.agents.benefits.uxArchitecture.enhancedUx.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-error rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.agents.benefits.uxArchitecture.contextPreservation.label')}</span>
                  <span className="text-gray-700"> {t('semantic.agents.benefits.uxArchitecture.contextPreservation.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-info rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.agents.benefits.uxArchitecture.businessLogic.label')}</span>
                  <span className="text-gray-700"> {t('semantic.agents.benefits.uxArchitecture.businessLogic.text')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Considerations */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.agents.implementation.title')}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">{t('semantic.agents.implementation.technical.title')}</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.technical.runtime.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.technical.runtime.description')}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.technical.serviceDiscovery.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.technical.serviceDiscovery.description')}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.technical.stateManagement.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.technical.stateManagement.description')}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.technical.monitoring.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.technical.monitoring.description')}</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">{t('semantic.agents.implementation.governance.title')}</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.governance.boundaries.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.governance.boundaries.description')}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.governance.audit.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.governance.audit.description')}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.governance.humanOversight.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.governance.humanOversight.description')}</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">{t('semantic.agents.implementation.governance.ethical.title')}</div>
                <div className="text-xs text-gray-600">{t('semantic.agents.implementation.governance.ethical.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsLayerDeepDiveNew;
