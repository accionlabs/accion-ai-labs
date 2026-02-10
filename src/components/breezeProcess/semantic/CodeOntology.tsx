import React from 'react';
import { useTranslation } from 'react-i18next';

interface CodeOntologyNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CodeOntologyNew: React.FC<CodeOntologyNewProps> = () => {
  const { t } = useTranslation('breezeProcess');

  const frontendLayers = React.useMemo(() => [
    { layer: t('semantic.code.frontendLayers.items.0.layer'), description: t('semantic.code.frontendLayers.items.0.description'), example: t('semantic.code.frontendLayers.items.0.example') },
    { layer: t('semantic.code.frontendLayers.items.1.layer'), description: t('semantic.code.frontendLayers.items.1.description'), example: t('semantic.code.frontendLayers.items.1.example') },
    { layer: t('semantic.code.frontendLayers.items.2.layer'), description: t('semantic.code.frontendLayers.items.2.description'), example: t('semantic.code.frontendLayers.items.2.example') },
    { layer: t('semantic.code.frontendLayers.items.3.layer'), description: t('semantic.code.frontendLayers.items.3.description'), example: t('semantic.code.frontendLayers.items.3.example') },
    { layer: t('semantic.code.frontendLayers.items.4.layer'), description: t('semantic.code.frontendLayers.items.4.description'), example: t('semantic.code.frontendLayers.items.4.example') },
    { layer: t('semantic.code.frontendLayers.items.5.layer'), description: t('semantic.code.frontendLayers.items.5.description'), example: t('semantic.code.frontendLayers.items.5.example') }
  ], [t]);

  const backendLayers = React.useMemo(() => [
    { layer: t('semantic.code.backendLayers.items.0.layer'), description: t('semantic.code.backendLayers.items.0.description'), example: t('semantic.code.backendLayers.items.0.example') },
    { layer: t('semantic.code.backendLayers.items.1.layer'), description: t('semantic.code.backendLayers.items.1.description'), example: t('semantic.code.backendLayers.items.1.example') },
    { layer: t('semantic.code.backendLayers.items.2.layer'), description: t('semantic.code.backendLayers.items.2.description'), example: t('semantic.code.backendLayers.items.2.example') },
    { layer: t('semantic.code.backendLayers.items.3.layer'), description: t('semantic.code.backendLayers.items.3.description'), example: t('semantic.code.backendLayers.items.3.example') },
    { layer: t('semantic.code.backendLayers.items.4.layer'), description: t('semantic.code.backendLayers.items.4.description'), example: t('semantic.code.backendLayers.items.4.example') },
    { layer: t('semantic.code.backendLayers.items.5.layer'), description: t('semantic.code.backendLayers.items.5.description'), example: t('semantic.code.backendLayers.items.5.example') }
  ], [t]);

  const dataLayers = React.useMemo(() => [
    { layer: t('semantic.code.dataLayers.items.0.layer'), description: t('semantic.code.dataLayers.items.0.description'), example: t('semantic.code.dataLayers.items.0.example') },
    { layer: t('semantic.code.dataLayers.items.1.layer'), description: t('semantic.code.dataLayers.items.1.description'), example: t('semantic.code.dataLayers.items.1.example') },
    { layer: t('semantic.code.dataLayers.items.2.layer'), description: t('semantic.code.dataLayers.items.2.description'), example: t('semantic.code.dataLayers.items.2.example') },
    { layer: t('semantic.code.dataLayers.items.3.layer'), description: t('semantic.code.dataLayers.items.3.description'), example: t('semantic.code.dataLayers.items.3.example') },
    { layer: t('semantic.code.dataLayers.items.4.layer'), description: t('semantic.code.dataLayers.items.4.description'), example: t('semantic.code.dataLayers.items.4.example') },
    { layer: t('semantic.code.dataLayers.items.5.layer'), description: t('semantic.code.dataLayers.items.5.description'), example: t('semantic.code.dataLayers.items.5.example') }
  ], [t]);

  const technologyStacks = React.useMemo(() => [
    {
      category: t('semantic.code.technologyStacks.frontend.category'),
      color: "bg-brand-blue-50 border-secondary",
      stacks: [
        {
          name: t('semantic.code.technologyStacks.frontend.stacks.0.name'),
          applications: t('semantic.code.technologyStacks.frontend.stacks.0.applications'),
          components: t('semantic.code.technologyStacks.frontend.stacks.0.components'),
          functions: t('semantic.code.technologyStacks.frontend.stacks.0.functions')
        },
        {
          name: t('semantic.code.technologyStacks.frontend.stacks.1.name'),
          applications: t('semantic.code.technologyStacks.frontend.stacks.1.applications'),
          components: t('semantic.code.technologyStacks.frontend.stacks.1.components'),
          functions: t('semantic.code.technologyStacks.frontend.stacks.1.functions')
        }
      ]
    },
    {
      category: t('semantic.code.technologyStacks.backend.category'),
      color: "bg-success-50 border-success",
      stacks: [
        {
          name: t('semantic.code.technologyStacks.backend.stacks.0.name'),
          applications: t('semantic.code.technologyStacks.backend.stacks.0.applications'),
          components: t('semantic.code.technologyStacks.backend.stacks.0.components'),
          functions: t('semantic.code.technologyStacks.backend.stacks.0.functions')
        },
        {
          name: t('semantic.code.technologyStacks.backend.stacks.1.name'),
          applications: t('semantic.code.technologyStacks.backend.stacks.1.applications'),
          components: t('semantic.code.technologyStacks.backend.stacks.1.components'),
          functions: t('semantic.code.technologyStacks.backend.stacks.1.functions')
        }
      ]
    },
    {
      category: t('semantic.code.technologyStacks.data.category'),
      color: "bg-brand-purple-50 border-brand-purple-600",
      stacks: [
        {
          name: t('semantic.code.technologyStacks.data.stacks.0.name'),
          applications: t('semantic.code.technologyStacks.data.stacks.0.applications'),
          components: t('semantic.code.technologyStacks.data.stacks.0.components'),
          functions: t('semantic.code.technologyStacks.data.stacks.0.functions')
        },
        {
          name: t('semantic.code.technologyStacks.data.stacks.1.name'),
          applications: t('semantic.code.technologyStacks.data.stacks.1.applications'),
          components: t('semantic.code.technologyStacks.data.stacks.1.components'),
          functions: t('semantic.code.technologyStacks.data.stacks.1.functions')
        }
      ]
    }
  ], [t]);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-warning to-error bg-clip-text text-transparent">
            {t('semantic.code.header.title')}
          </span>
        </h1>

        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          {t('semantic.code.header.description')}
        </p>
      </div>

      {/* Visual Layered Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.code.structure.title')}</h3>

        <div className="space-y-6">
          {/* Frontend Code Layers */}
          <div className="p-6 bg-brand-blue-50 rounded-xl border-2 border-secondary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <h4 className="text-xl font-bold text-secondary">{t('semantic.code.frontendLayers.title')}</h4>
            </div>
            <div className="space-y-3">
              {frontendLayers.map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-secondary">
                  <div className="w-6 h-6 bg-brand-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-secondary">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Code Layers */}
          <div className="p-6 bg-success-50 rounded-xl border-2 border-success">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h4 className="text-xl font-bold text-success-800">{t('semantic.code.backendLayers.title')}</h4>
            </div>
            <div className="space-y-3">
              {backendLayers.map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-success">
                  <div className="w-6 h-6 bg-success-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-success-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Code Layers */}
          <div className="p-6 bg-brand-purple-50 rounded-xl border-2 border-brand-purple-600">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-brand-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <h4 className="text-xl font-bold text-brand-purple-800">{t('semantic.code.dataLayers.title')}</h4>
            </div>
            <div className="space-y-3">
              {dataLayers.map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-brand-purple-600">
                  <div className="w-6 h-6 bg-brand-purple-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-brand-purple-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology-Specific Implementations */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{t('semantic.code.technologyStacks.title')}</h3>

        <div className="space-y-8">
          {technologyStacks.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`p-6 rounded-lg border-2 ${category.color}`}>
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.category} {t('semantic.code.technologyStacks.stacksSuffix')}</h4>

              <div className="space-y-6">
                {category.stacks.map((stack, stackIndex) => (
                  <div key={stackIndex} className="bg-white p-6 rounded-lg border shadow-sm">
                    <h5 className="text-lg font-bold text-gray-800 mb-4">{stack.name}</h5>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-warning-50 rounded border border-warning">
                        <div className="font-semibold text-warning-800 mb-2">{t('semantic.code.technologyStacks.applicationsLabel')}</div>
                        <div className="text-sm text-gray-700">{stack.applications}</div>
                      </div>

                      <div className="p-3 bg-brand-blue-50 rounded border border-secondary">
                        <div className="font-semibold text-secondary mb-2">{t('semantic.code.technologyStacks.componentsLabel')}</div>
                        <div className="text-sm text-gray-700">{stack.components}</div>
                      </div>

                      <div className="p-3 bg-success-50 rounded border border-success">
                        <div className="font-semibold text-success-800 mb-2">{t('semantic.code.technologyStacks.functionsLabel')}</div>
                        <div className="text-sm text-gray-700">{stack.functions}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Ontology Benefits */}
      <div className="bg-gradient-to-r from-warning-50 to-error-50 rounded-xl p-8 border-l-4 border-warning">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">{t('semantic.code.benefits.title')}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.code.benefits.clarity.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <span className="text-gray-700">{t('semantic.code.benefits.clarity.items.0')}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-error rounded-full mt-2"></div>
                <span className="text-gray-700">{t('semantic.code.benefits.clarity.items.1')}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-pink-600 rounded-full mt-2"></div>
                <span className="text-gray-700">{t('semantic.code.benefits.clarity.items.2')}</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">{t('semantic.code.benefits.development.title')}</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-indigo-600 rounded-full mt-2"></div>
                <span className="text-gray-700">{t('semantic.code.benefits.development.items.0')}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-brand-purple-600 rounded-full mt-2"></div>
                <span className="text-gray-700">{t('semantic.code.benefits.development.items.1')}</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-info rounded-full mt-2"></div>
                <span className="text-gray-700">{t('semantic.code.benefits.development.items.2')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOntologyNew;
