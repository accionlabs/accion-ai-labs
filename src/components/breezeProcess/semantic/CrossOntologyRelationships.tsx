import React from 'react';
import { useTranslation } from 'react-i18next';

interface CrossOntologyRelationshipsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CrossOntologyRelationshipsNew: React.FC<CrossOntologyRelationshipsNewProps> = () => {
  const { t } = useTranslation('breezeProcess');

  const relationshipTypes = React.useMemo(() => [
    {
      type: t('semantic.relationships.relationshipTypes.implements.type'),
      description: t('semantic.relationships.relationshipTypes.implements.description'),
      examples: [t('semantic.relationships.relationshipTypes.implements.examples.0'), t('semantic.relationships.relationshipTypes.implements.examples.1')],
      color: "bg-brand-purple-50 border-brand-purple-600 text-brand-purple-800"
    },
    {
      type: t('semantic.relationships.relationshipTypes.supports.type'),
      description: t('semantic.relationships.relationshipTypes.supports.description'),
      examples: [t('semantic.relationships.relationshipTypes.supports.examples.0'), t('semantic.relationships.relationshipTypes.supports.examples.1')],
      color: "bg-brand-blue-50 border-secondary text-secondary"
    },
    {
      type: t('semantic.relationships.relationshipTypes.requires.type'),
      description: t('semantic.relationships.relationshipTypes.requires.description'),
      examples: [t('semantic.relationships.relationshipTypes.requires.examples.0'), t('semantic.relationships.relationshipTypes.requires.examples.1')],
      color: "bg-success-50 border-success text-success-800"
    },
    {
      type: t('semantic.relationships.relationshipTypes.triggers.type'),
      description: t('semantic.relationships.relationshipTypes.triggers.description'),
      examples: [t('semantic.relationships.relationshipTypes.triggers.examples.0'), t('semantic.relationships.relationshipTypes.triggers.examples.1')],
      color: "bg-warning-50 border-warning text-warning-800"
    },
    {
      type: t('semantic.relationships.relationshipTypes.validates.type'),
      description: t('semantic.relationships.relationshipTypes.validates.description'),
      examples: [t('semantic.relationships.relationshipTypes.validates.examples.0'), t('semantic.relationships.relationshipTypes.validates.examples.1')],
      color: "bg-error-50 border-error text-error-800"
    },
    {
      type: t('semantic.relationships.relationshipTypes.realizes.type'),
      description: t('semantic.relationships.relationshipTypes.realizes.description'),
      examples: [t('semantic.relationships.relationshipTypes.realizes.examples.0'), t('semantic.relationships.relationshipTypes.realizes.examples.1')],
      color: "bg-info-50 border-info text-info-800"
    },
    {
      type: t('semantic.relationships.relationshipTypes.renders.type'),
      description: t('semantic.relationships.relationshipTypes.renders.description'),
      examples: [t('semantic.relationships.relationshipTypes.renders.examples.0'), t('semantic.relationships.relationshipTypes.renders.examples.1')],
      color: "bg-brand-pink-50 border-brand-pink-600 text-brand-pink-800"
    }
  ], [t]);

  const connectivityPatterns = React.useMemo(() => [
    {
      path: t('semantic.relationships.connectivity.patterns.0.path'),
      description: t('semantic.relationships.connectivity.patterns.0.description'),
      example: t('semantic.relationships.connectivity.patterns.0.example'),
      color: "bg-brand-purple-100"
    },
    {
      path: t('semantic.relationships.connectivity.patterns.1.path'),
      description: t('semantic.relationships.connectivity.patterns.1.description'),
      example: t('semantic.relationships.connectivity.patterns.1.example'),
      color: "bg-brand-blue-100"
    },
    {
      path: t('semantic.relationships.connectivity.patterns.2.path'),
      description: t('semantic.relationships.connectivity.patterns.2.description'),
      example: t('semantic.relationships.connectivity.patterns.2.example'),
      color: "bg-success-100"
    },
    {
      path: t('semantic.relationships.connectivity.patterns.3.path'),
      description: t('semantic.relationships.connectivity.patterns.3.description'),
      example: t('semantic.relationships.connectivity.patterns.3.example'),
      color: "bg-warning-100"
    }
  ], [t]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-innovation-gradient bg-clip-text text-transparent">
            {t('semantic.relationships.header.title')}
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          {t('semantic.relationships.header.description')}
        </p>
      </div>

      {/* Relationship Types */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.relationships.categories.title')}</h3>

        <div className="space-y-4">
          {relationshipTypes.map((relationship, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${relationship.color}`}>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">{relationship.type}</h4>
                <p className="text-sm mb-3">{relationship.description}</p>
              </div>

              <div>
                <span className="text-xs font-semibold uppercase tracking-wide mb-2 block">{t('semantic.relationships.categories.examplesLabel')}</span>
                <div className="space-y-1">
                  {relationship.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-white p-3 rounded border text-sm font-mono">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Dimensional Connectivity */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.relationships.connectivity.title')}</h3>

        <div className="mb-8">
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 bg-gray-50 p-8 rounded-lg max-w-2xl">
              {/* Functional Layer */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-brand-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-brand-purple-800">{t('semantic.relationships.connectivity.diagram.functional.label')}</div>
                  <div className="text-sm text-brand-purple-600">{t('semantic.relationships.connectivity.diagram.functional.sublabel')}</div>
                </div>
              </div>

              {/* Connection Arrows */}
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-2xl">↓</div>
                  <div className="text-xs text-gray-500">{t('semantic.relationships.connectivity.diagram.arrows.implements')}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-2xl">↓</div>
                  <div className="text-xs text-gray-500">{t('semantic.relationships.connectivity.diagram.arrows.supports')}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-2xl">↓</div>
                  <div className="text-xs text-gray-500">{t('semantic.relationships.connectivity.diagram.arrows.triggers')}</div>
                </div>
              </div>

              {/* Implementation Layers */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-brand-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🎨</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-secondary text-sm">{t('semantic.relationships.connectivity.diagram.design.label')}</div>
                    <div className="text-xs text-brand-blue-600">{t('semantic.relationships.connectivity.diagram.design.sublabel')}</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-success-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🏗️</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-success-800 text-sm">{t('semantic.relationships.connectivity.diagram.architecture.label')}</div>
                    <div className="text-xs text-success-600">{t('semantic.relationships.connectivity.diagram.architecture.sublabel')}</div>
                  </div>
                </div>
              </div>

              {/* Final Arrow */}
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-2xl">↓</div>
                <div className="text-xs text-gray-500">{t('semantic.relationships.connectivity.diagram.arrows.realizes')}</div>
              </div>

              {/* Code Layer */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-warning-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-warning-800">{t('semantic.relationships.connectivity.diagram.code.label')}</div>
                  <div className="text-sm text-warning-600">{t('semantic.relationships.connectivity.diagram.code.sublabel')}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">{t('semantic.relationships.connectivity.connectionPatterns.title')}</h4>
            <div className="space-y-3">
              {connectivityPatterns.map((pattern, index) => (
                <div key={index} className={`p-4 rounded-lg ${pattern.color} border`}>
                  <div className="font-semibold text-gray-800 mb-1">{pattern.path}</div>
                  <div className="text-sm text-gray-700 mb-2">{pattern.description}</div>
                  <div className="text-xs text-gray-600 font-mono bg-white p-2 rounded">
                    {pattern.example}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">{t('semantic.relationships.connectivity.cardinality.title')}</h4>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.connectivity.cardinality.oneToOne.title')}</div>
                <div className="text-sm text-gray-700">{t('semantic.relationships.connectivity.cardinality.oneToOne.description')}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.connectivity.cardinality.oneToMany.title')}</div>
                <div className="text-sm text-gray-700">{t('semantic.relationships.connectivity.cardinality.oneToMany.description')}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.connectivity.cardinality.manyToOne.title')}</div>
                <div className="text-sm text-gray-700">{t('semantic.relationships.connectivity.cardinality.manyToOne.description')}</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.connectivity.cardinality.manyToMany.title')}</div>
                <div className="text-sm text-gray-700">{t('semantic.relationships.connectivity.cardinality.manyToMany.description')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Governance Analytics */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.relationships.governance.title')}</h3>

        <div className="space-y-8">
          {/* Architecture Consistency */}
          <div className="p-6 bg-success-50 rounded-lg border border-success">
            <h4 className="text-lg font-bold text-success-800 mb-4">{t('semantic.relationships.governance.architectureConsistency.title')}</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.architectureConsistency.adherence.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.architectureConsistency.adherence.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.architectureConsistency.adherence.formula')}
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.architectureConsistency.serviceGap.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.architectureConsistency.serviceGap.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.architectureConsistency.serviceGap.formula')}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.architectureConsistency.bypass.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.architectureConsistency.bypass.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.architectureConsistency.bypass.formula')}
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.architectureConsistency.fragmentation.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.architectureConsistency.fragmentation.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.architectureConsistency.fragmentation.formula')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Consistency */}
          <div className="p-6 bg-brand-blue-50 rounded-lg border border-secondary">
            <h4 className="text-lg font-bold text-secondary mb-4">{t('semantic.relationships.governance.designConsistency.title')}</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.designConsistency.compliance.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.designConsistency.compliance.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.designConsistency.compliance.formula')}
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.designConsistency.patternFragmentation.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.designConsistency.patternFragmentation.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.designConsistency.patternFragmentation.formula')}
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.designConsistency.rogue.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.designConsistency.rogue.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.designConsistency.rogue.formula')}
                  </div>
                </div>

                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">{t('semantic.relationships.governance.designConsistency.utilization.title')}</div>
                  <div className="text-sm text-gray-600 mb-2">{t('semantic.relationships.governance.designConsistency.utilization.description')}</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    {t('semantic.relationships.governance.designConsistency.utilization.formula')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Ontology Analysis */}
          <div className="p-6 bg-brand-purple-50 rounded-lg border border-brand-purple-600">
            <h4 className="text-lg font-bold text-brand-purple-800 mb-4">{t('semantic.relationships.governance.crossOntology.title')}</h4>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-brand-purple-600">
                <thead>
                  <tr className="bg-brand-purple-100">
                    <th className="border border-brand-purple-600 px-3 py-2 text-left font-semibold">{t('semantic.relationships.governance.crossOntology.headers.analysisType')}</th>
                    <th className="border border-brand-purple-600 px-3 py-2 text-left font-semibold">{t('semantic.relationships.governance.crossOntology.headers.description')}</th>
                    <th className="border border-brand-purple-600 px-3 py-2 text-left font-semibold">{t('semantic.relationships.governance.crossOntology.headers.detection')}</th>
                    <th className="border border-brand-purple-600 px-3 py-2 text-left font-semibold">{t('semantic.relationships.governance.crossOntology.headers.action')}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-brand-purple-600 px-3 py-2 font-semibold">{t('semantic.relationships.governance.crossOntology.rows.complete.type')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.complete.description')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.complete.detection')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.complete.action')}</td>
                  </tr>
                  <tr className="bg-brand-purple-25">
                    <td className="border border-brand-purple-600 px-3 py-2 font-semibold">{t('semantic.relationships.governance.crossOntology.rows.designBypass.type')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.designBypass.description')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.designBypass.detection')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.designBypass.action')}</td>
                  </tr>
                  <tr>
                    <td className="border border-brand-purple-600 px-3 py-2 font-semibold">{t('semantic.relationships.governance.crossOntology.rows.architectureBypass.type')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.architectureBypass.description')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.architectureBypass.detection')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.architectureBypass.action')}</td>
                  </tr>
                  <tr className="bg-brand-purple-25">
                    <td className="border border-brand-purple-600 px-3 py-2 font-semibold">{t('semantic.relationships.governance.crossOntology.rows.orphaned.type')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.orphaned.description')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.orphaned.detection')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.orphaned.action')}</td>
                  </tr>
                  <tr>
                    <td className="border border-brand-purple-600 px-3 py-2 font-semibold">{t('semantic.relationships.governance.crossOntology.rows.conflicting.type')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.conflicting.description')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.conflicting.detection')}</td>
                    <td className="border border-brand-purple-600 px-3 py-2">{t('semantic.relationships.governance.crossOntology.rows.conflicting.action')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Governance Applications */}
      <div className="bg-gradient-to-r from-info-50 to-brand-purple-50 rounded-xl p-8 border-l-4 border-info">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('semantic.relationships.applications.title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.relationships.applications.strategic.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-info rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.relationships.applications.strategic.modernization.label')}</span>
                  <span className="text-gray-700"> {t('semantic.relationships.applications.strategic.modernization.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-purple-600 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.relationships.applications.strategic.rationalization.label')}</span>
                  <span className="text-gray-700"> {t('semantic.relationships.applications.strategic.rationalization.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.relationships.applications.strategic.crossModal.label')}</span>
                  <span className="text-gray-700"> {t('semantic.relationships.applications.strategic.crossModal.text')}</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.relationships.applications.quality.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.relationships.applications.quality.standards.label')}</span>
                  <span className="text-gray-700"> {t('semantic.relationships.applications.quality.standards.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.relationships.applications.quality.complexity.label')}</span>
                  <span className="text-gray-700"> {t('semantic.relationships.applications.quality.complexity.text')}</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-error rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">{t('semantic.relationships.applications.quality.monitoring.label')}</span>
                  <span className="text-gray-700"> {t('semantic.relationships.applications.quality.monitoring.text')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossOntologyRelationshipsNew;
