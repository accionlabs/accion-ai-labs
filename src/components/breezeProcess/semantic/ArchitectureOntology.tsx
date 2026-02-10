import React from 'react';
import { useTranslation } from 'react-i18next';

interface ArchitectureOntologyNewProps {
  onNavigate?: (topicId: string, subTopicId?: string) => void;
  onNext?: () => void;
}

const ArchitectureOntologyNew: React.FC<ArchitectureOntologyNewProps> = ({ onNavigate }) => {
  const { t } = useTranslation('breezeProcess');

  const tiers = React.useMemo(() => [
    { layer: t('semantic.architectureOntology.tiers.0.layer'), description: t('semantic.architectureOntology.tiers.0.description'), color: "bg-brand-purple-100 border-brand-purple-600" },
    { layer: t('semantic.architectureOntology.tiers.1.layer'), description: t('semantic.architectureOntology.tiers.1.description'), color: "bg-brand-blue-100 border-secondary" },
    { layer: t('semantic.architectureOntology.tiers.2.layer'), description: t('semantic.architectureOntology.tiers.2.description'), color: "bg-info-100 border-info" },
    { layer: t('semantic.architectureOntology.tiers.3.layer'), description: t('semantic.architectureOntology.tiers.3.description'), color: "bg-success-100 border-success", highlight: true },
    { layer: t('semantic.architectureOntology.tiers.4.layer'), description: t('semantic.architectureOntology.tiers.4.description'), color: "bg-warning-100 border-warning" },
    { layer: t('semantic.architectureOntology.tiers.5.layer'), description: t('semantic.architectureOntology.tiers.5.description'), color: "bg-warning-100 border-warning" },
    { layer: t('semantic.architectureOntology.tiers.6.layer'), description: t('semantic.architectureOntology.tiers.6.description'), color: "bg-error-100 border-error" },
    { layer: t('semantic.architectureOntology.tiers.7.layer'), description: t('semantic.architectureOntology.tiers.7.description'), color: "bg-gray-100 border-gray-300" }
  ], [t]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-innovation-gradient bg-clip-text text-transparent">
            {t('semantic.architectureOntology.header.title')}
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          {t('semantic.architectureOntology.header.description')}
        </p>
      </div>

      {/* 8-Tier Architecture Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.architectureOntology.tierStructure.title')}</h3>

        <div className="space-y-4">
          {tiers.map((tier, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${tier.color} ${tier.highlight ? 'ring-2 ring-success' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{tier.layer}</h4>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </div>
                </div>
                {tier.highlight && (
                  <div className="px-3 py-1 bg-success-200 text-success-800 text-xs font-semibold rounded-full">
                    {t('semantic.architectureOntology.tierStructure.intelligenceLayer')}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agents Layer Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.architectureOntology.agentsOverview.title')}</h3>

        <div className="mb-6 p-4 bg-success-50 rounded-lg border border-success">
          <p className="text-success-800 text-center">
            <strong>{t('semantic.architectureOntology.agentsOverview.keyInnovationLabel')}</strong> {t('semantic.architectureOntology.agentsOverview.keyInnovationText')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-brand-blue-50 rounded-lg border border-secondary">
            <h4 className="font-bold text-secondary mb-3">{t('semantic.architectureOntology.agentsOverview.agentTypes.title')}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.agentTypes.items.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-purple-600 rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.agentTypes.items.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.agentTypes.items.2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.agentTypes.items.3')}</span>
              </div>
            </div>
          </div>

          <div className="p-4 bg-success-50 rounded-lg border border-success">
            <h4 className="font-bold text-success-800 mb-3">{t('semantic.architectureOntology.agentsOverview.keyCapabilities.title')}</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.keyCapabilities.items.0')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.keyCapabilities.items.1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-brand-purple-600 rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.keyCapabilities.items.2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <span>{t('semantic.architectureOntology.agentsOverview.keyCapabilities.items.3')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Detailed Agents Layer */}
        <div className="text-center">
          <button
            onClick={() => onNavigate && onNavigate('semantic-model', 'agents-layer')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-innovation-gradient text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <span className="text-2xl">🤖</span>
            <span>{t('semantic.architectureOntology.agentsOverview.exploreButton')}</span>
            <span className="text-lg">→</span>
          </button>
          <p className="text-sm text-gray-600 mt-2">
            {t('semantic.architectureOntology.agentsOverview.exploreDescription')}
          </p>
        </div>
      </div>

      {/* Architecture Benefits */}
      <div className="bg-gradient-to-r from-success-50 to-brand-blue-50 rounded-xl p-8 border-l-4 border-success">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('semantic.architectureOntology.benefits.title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.architectureOntology.benefits.intelligence.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.architectureOntology.benefits.intelligence.orchestration.label')}</span>
                  <span className="text-gray-700"> {t('semantic.architectureOntology.benefits.intelligence.orchestration.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.architectureOntology.benefits.intelligence.problemSolving.label')}</span>
                  <span className="text-gray-700"> {t('semantic.architectureOntology.benefits.intelligence.problemSolving.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-purple-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.architectureOntology.benefits.intelligence.adaptive.label')}</span>
                  <span className="text-gray-700"> {t('semantic.architectureOntology.benefits.intelligence.adaptive.text')}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.architectureOntology.benefits.uxArchitecture.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.architectureOntology.benefits.uxArchitecture.enhancedUx.label')}</span>
                  <span className="text-gray-700"> {t('semantic.architectureOntology.benefits.uxArchitecture.enhancedUx.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-error rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.architectureOntology.benefits.uxArchitecture.contextPreservation.label')}</span>
                  <span className="text-gray-700"> {t('semantic.architectureOntology.benefits.uxArchitecture.contextPreservation.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-info rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.architectureOntology.benefits.uxArchitecture.businessLogic.label')}</span>
                  <span className="text-gray-700"> {t('semantic.architectureOntology.benefits.uxArchitecture.businessLogic.text')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureOntologyNew;
