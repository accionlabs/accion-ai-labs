import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PaintBrushIcon,
  DevicePhoneMobileIcon,
  BeakerIcon,
  CodeBracketIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  BoltIcon,
  UserIcon,
  CpuChipIcon,
  ClockIcon,
  SparklesIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const ImplementationPipeline: React.FC = () => {
  const { t } = useTranslation('solutions');
  const [selectedArtifact, setSelectedArtifact] = useState<'design' | 'prototype' | 'tests' | 'code'>('design');

  const implementationArtifacts = {
    design: {
      title: t('productDevelopment.implementation.artifacts.design.title'),
      icon: PaintBrushIcon,
      color: 'purple',
      description: t('productDevelopment.implementation.artifacts.design.description'),
      stakeholder: t('productDevelopment.implementation.artifacts.design.stakeholder'),
      outputs: t('productDevelopment.implementation.artifacts.design.outputs', { returnObjects: true }) as unknown as string[],
      benefits: t('productDevelopment.implementation.artifacts.design.benefits', { returnObjects: true }) as unknown as string[],
      sample: {
        component: t('productDevelopment.implementation.artifacts.design.sample.component'),
        variants: t('productDevelopment.implementation.artifacts.design.sample.variants', { returnObjects: true }) as unknown as string[],
        tokens: t('productDevelopment.implementation.artifacts.design.sample.tokens', { returnObjects: true }) as unknown as string[]
      }
    },
    prototype: {
      title: t('productDevelopment.implementation.artifacts.prototype.title'),
      icon: DevicePhoneMobileIcon,
      color: 'blue',
      description: t('productDevelopment.implementation.artifacts.prototype.description'),
      stakeholder: t('productDevelopment.implementation.artifacts.prototype.stakeholder'),
      outputs: t('productDevelopment.implementation.artifacts.prototype.outputs', { returnObjects: true }) as unknown as string[],
      benefits: t('productDevelopment.implementation.artifacts.prototype.benefits', { returnObjects: true }) as unknown as string[],
      sample: {
        prototype: t('productDevelopment.implementation.artifacts.prototype.sample.prototype'),
        features: t('productDevelopment.implementation.artifacts.prototype.sample.features', { returnObjects: true }) as unknown as string[]
      }
    },
    tests: {
      title: t('productDevelopment.implementation.artifacts.tests.title'),
      icon: BeakerIcon,
      color: 'green',
      description: t('productDevelopment.implementation.artifacts.tests.description'),
      stakeholder: t('productDevelopment.implementation.artifacts.tests.stakeholder'),
      outputs: t('productDevelopment.implementation.artifacts.tests.outputs', { returnObjects: true }) as unknown as string[],
      benefits: t('productDevelopment.implementation.artifacts.tests.benefits', { returnObjects: true }) as unknown as string[],
      sample: {
        feature: t('productDevelopment.implementation.artifacts.tests.sample.feature'),
        scenarios: t('productDevelopment.implementation.artifacts.tests.sample.scenarios', { returnObjects: true }) as unknown as { name: string; steps: string[] }[]
      }
    },
    code: {
      title: t('productDevelopment.implementation.artifacts.code.title'),
      icon: CodeBracketIcon,
      color: 'orange',
      description: t('productDevelopment.implementation.artifacts.code.description'),
      stakeholder: t('productDevelopment.implementation.artifacts.code.stakeholder'),
      outputs: t('productDevelopment.implementation.artifacts.code.outputs', { returnObjects: true }) as unknown as string[],
      benefits: t('productDevelopment.implementation.artifacts.code.benefits', { returnObjects: true }) as unknown as string[],
      sample: {
        generated: t('productDevelopment.implementation.artifacts.code.sample.generated'),
        code: `class AuthController {
  async login(req, res) {
    const { email, password } = req.body;

    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({
        error: 'Email and password required'
      });
    }

    // Authenticate user
    const user = await this.authService
      .validateCredentials(email, password);

    if (!user) {
      return res.status(401).json({
        error: 'Invalid credentials'
      });
    }

    // Generate token
    const token = this.authService
      .generateToken(user.id);

    return res.json({ token, user });
  }
}`
      }
    }
  };

  const currentArtifact = implementationArtifacts[selectedArtifact];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-400 to-purple-600' },
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-400 to-blue-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-400 to-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-400 to-orange-600' }
    };
    return colorMap[color];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/product-development" className="text-sm text-green-600 hover:text-green-700 mb-2 inline-block">
            &larr; {t('productDevelopment.implementation.backToOverview')}
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{t('productDevelopment.implementation.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('productDevelopment.implementation.header.description')}
          </p>
        </div>

        {/* Gateway */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircleIcon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('productDevelopment.implementation.gateway.title')}</h2>
              <p className="text-sm text-gray-700 mb-3">
                {t('productDevelopment.implementation.gateway.description')}
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('productDevelopment.implementation.gateway.functionalApproved')}
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('productDevelopment.implementation.gateway.storiesApproved')}
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('productDevelopment.implementation.gateway.flowsApproved')}
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  {t('productDevelopment.implementation.gateway.architectureApproved')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Implementation Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('productDevelopment.implementation.artifacts.title')}</h2>

          {/* Track Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(Object.keys(implementationArtifacts) as Array<keyof typeof implementationArtifacts>).map((key) => {
              const artifact = implementationArtifacts[key];
              const Icon = artifact.icon;
              const colors = getColorClasses(artifact.color);
              const isSelected = selectedArtifact === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedArtifact(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${isSelected ? colors.text : 'text-gray-400'}`} />
                  <p className={`text-xs font-semibold text-center ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                    {artifact.title.split('&')[0].trim()}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Artifact Details */}
          <div className={`border-2 ${getColorClasses(currentArtifact.color).border} rounded-lg p-6 ${getColorClasses(currentArtifact.color).bg}`}>
            <div className="flex items-start mb-4">
              <div className={`p-3 bg-gradient-to-br ${getColorClasses(currentArtifact.color).gradient} rounded-lg mr-4`}>
                <currentArtifact.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentArtifact.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{currentArtifact.description}</p>
                <div className="inline-flex items-center bg-white rounded px-2 py-1">
                  <UserIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs font-semibold text-gray-900">{t('productDevelopment.implementation.artifacts.forLabel')} {currentArtifact.stakeholder}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Outputs */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.artifacts.generatedOutputs')}</h4>
                <ul className="space-y-2">
                  {currentArtifact.outputs.map((output, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                      {output}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.artifacts.keyBenefits')}</h4>
                <ul className="space-y-2">
                  {currentArtifact.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-700">
                      <SparklesIcon className="h-4 w-4 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sample Output */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.artifacts.sampleOutput')}</h4>
              {selectedArtifact === 'design' && 'component' in implementationArtifacts.design.sample && (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs font-semibold text-gray-700 mb-2">{implementationArtifacts.design.sample.component}</p>
                    <div className="flex gap-2 mb-3">
                      {implementationArtifacts.design.sample.variants.map((variant, idx) => (
                        <button
                          key={idx}
                          className="px-3 py-1 rounded text-xs font-medium bg-green-600 text-white hover:bg-green-700"
                        >
                          {variant}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-900 text-green-400 rounded p-3 font-mono text-xs">
                    {implementationArtifacts.design.sample.tokens.map((token, idx) => (
                      <p key={idx}>{token}</p>
                    ))}
                  </div>
                </div>
              )}
              {selectedArtifact === 'prototype' && 'prototype' in implementationArtifacts.prototype.sample && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-700">{implementationArtifacts.prototype.sample.prototype}</p>
                  <ul className="space-y-1">
                    {implementationArtifacts.prototype.sample.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start">
                        <CheckCircleIcon className="h-3 w-3 text-blue-600 mr-2 mt-0.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedArtifact === 'tests' && 'feature' in implementationArtifacts.tests.sample && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-700 mb-2">Feature: {implementationArtifacts.tests.sample.feature}</p>
                  {implementationArtifacts.tests.sample.scenarios.map((scenario, idx) => (
                    <div key={idx} className="bg-gray-50 rounded p-3 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-900 mb-2">Scenario: {scenario.name}</p>
                      <div className="space-y-1 font-mono text-xs text-gray-600">
                        {scenario.steps.map((step, stepIdx) => (
                          <p key={stepIdx}>{step}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {selectedArtifact === 'code' && 'generated' in implementationArtifacts.code.sample && (
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-gray-700">{implementationArtifacts.code.sample.generated}</p>
                  <pre className="bg-gray-900 text-gray-100 rounded p-3 text-xs overflow-x-auto">
                    <code>{implementationArtifacts.code.sample.code}</code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Parallel Development Process */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start mb-4">
            <BoltIcon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{t('productDevelopment.implementation.parallel.title')}</h2>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.implementation.parallel.description')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual Development */}
            <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center mb-4">
                <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('productDevelopment.implementation.parallel.manual.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('productDevelopment.implementation.parallel.manual.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.implementation.parallel.manual.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Semantic Development */}
            <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
              <div className="flex items-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">{t('productDevelopment.implementation.parallel.semantic.title')}</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                {t('productDevelopment.implementation.parallel.semantic.description')}
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.implementation.parallel.semantic.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">{t('productDevelopment.implementation.parallel.timelineComparison')}</h4>
            <div className="space-y-4">
              {/* Traditional Sequential */}
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">{t('productDevelopment.implementation.parallel.traditional')}</p>
                <div className="flex items-center gap-1">
                  <div className="flex-1 bg-blue-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Specs &rarr; Design
                  </div>
                  <div className="flex-1 bg-purple-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Design &rarr; Arch
                  </div>
                  <div className="flex-1 bg-green-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Arch &rarr; Code
                  </div>
                  <div className="flex-1 bg-orange-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Code &rarr; Tests
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {t('productDevelopment.implementation.parallel.traditionalTimeline')}
                </p>
              </div>

              {/* Breeze Parallel */}
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">{t('productDevelopment.implementation.parallel.breeze')}</p>
                <div className="relative">
                  <div className="flex items-start gap-1">
                    <div className="flex-1 space-y-1">
                      <div className="bg-blue-500 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                        Knowledge Graphs
                      </div>
                      <div className="bg-purple-500 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                        Validation
                      </div>
                      <div className="bg-green-500 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                        Artifacts
                      </div>
                      <div className="bg-orange-500 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                        Code + Tests
                      </div>
                    </div>
                    <div className="flex-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 h-24 rounded flex items-center justify-center text-xs text-white font-medium">
                      Manual + Semantic Development in Parallel
                    </div>
                  </div>
                </div>
                <p className="text-xs text-green-600 mt-1 flex items-center font-semibold">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  {t('productDevelopment.implementation.parallel.breezeTimeline')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDevelopment.implementation.agentEcosystem.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.agentEcosystem.design')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.implementation.agentEcosystem.designAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.agentEcosystem.prototype')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.implementation.agentEcosystem.prototypeAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.agentEcosystem.test')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.implementation.agentEcosystem.testAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">{t('productDevelopment.implementation.agentEcosystem.code')}</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                {(t('productDevelopment.implementation.agentEcosystem.codeAgents', { returnObjects: true }) as unknown as string[]).map((agent, idx) => (
                  <li key={idx}>• {agent}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">{t('productDevelopment.implementation.outcomes.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                <BoltIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('productDevelopment.implementation.outcomes.velocity.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.implementation.outcomes.velocity.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircleIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('productDevelopment.implementation.outcomes.defects.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.implementation.outcomes.defects.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <DocumentTextIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('productDevelopment.implementation.outcomes.livingDocs.title')}</h3>
              <p className="text-sm text-gray-600">
                {t('productDevelopment.implementation.outcomes.livingDocs.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Reference to Breeze Deep Dive */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">{t('productDevelopment.implementation.cta.title')}</h2>
          <p className="text-sm mb-4 opacity-90">
            {t('productDevelopment.implementation.cta.description')}
          </p>
          <Link
            to="/breeze-process/flow/overview"
            className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            {t('productDevelopment.implementation.cta.button')}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImplementationPipeline;
