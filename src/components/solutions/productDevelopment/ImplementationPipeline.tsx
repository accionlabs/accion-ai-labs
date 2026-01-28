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

const ImplementationPipeline: React.FC = () => {
  const [selectedArtifact, setSelectedArtifact] = useState<'design' | 'prototype' | 'tests' | 'code'>('design');

  const implementationArtifacts = {
    design: {
      title: 'Design System & Component Libraries',
      icon: PaintBrushIcon,
      color: 'purple',
      description: 'Automated generation of design systems from validated Design Ontology',
      stakeholder: 'Designers',
      outputs: [
        'Design tokens (colors, typography, spacing)',
        'Component library (buttons, forms, cards)',
        'Storybook documentation',
        'Figma/Sketch design files',
        'CSS/SCSS style definitions'
      ],
      benefits: [
        'Consistent UI across the product',
        'Faster designer-developer handoff',
        'Reusable component catalog',
        'Automatic design system updates'
      ],
      sample: {
        component: 'Button Component',
        variants: ['Primary', 'Secondary', 'Tertiary', 'Danger'],
        tokens: [
          'color-primary: #10B981',
          'spacing-md: 16px',
          'border-radius: 8px',
          'font-weight-semibold: 600'
        ]
      }
    },
    prototype: {
      title: 'Interactive Prototypes',
      icon: DevicePhoneMobileIcon,
      color: 'blue',
      description: 'Functional prototypes that follow design system guidelines',
      stakeholder: 'Designers & Product Owners',
      outputs: [
        'Clickable prototypes with real interactions',
        'State management for form validation',
        'Navigation flows between screens',
        'Responsive layouts',
        'Export to React/Vue/Angular'
      ],
      benefits: [
        'User testing before implementation',
        'Validate UX decisions early',
        'Developer reference implementation',
        'Reduce rework and iterations'
      ],
      sample: {
        prototype: 'Login Screen Prototype',
        features: [
          'Input validation with real-time feedback',
          'Error state animations',
          'Loading states during authentication',
          'Responsive mobile/desktop layouts'
        ]
      }
    },
    tests: {
      title: 'Gherkin Test Scripts',
      icon: BeakerIcon,
      color: 'green',
      description: 'BDD/TDD test scenarios for continuous validation',
      stakeholder: 'QA Engineers & Developers',
      outputs: [
        'Gherkin feature files',
        'Acceptance test scenarios',
        'Integration test templates',
        'API contract tests',
        'E2E test scripts'
      ],
      benefits: [
        'Test-driven development from day one',
        'Clear acceptance criteria',
        'Automated regression testing',
        'Living documentation'
      ],
      sample: {
        feature: 'User Authentication',
        scenarios: [
          {
            name: 'Successful Login',
            steps: [
              'Given the user is on the login page',
              'When they enter valid credentials',
              'And click the login button',
              'Then they should be redirected to the dashboard',
              'And see a welcome message'
            ]
          },
          {
            name: 'Failed Login',
            steps: [
              'Given the user is on the login page',
              'When they enter invalid credentials',
              'And click the login button',
              'Then they should see an error message',
              'And remain on the login page'
            ]
          }
        ]
      }
    },
    code: {
      title: 'Code Generation',
      icon: CodeBracketIcon,
      color: 'orange',
      description: 'AI-generated code for repetitive patterns, validated by developers',
      stakeholder: 'Developers',
      outputs: [
        'Boilerplate code (CRUD operations)',
        'API endpoints and controllers',
        'Data models and schemas',
        'Form validation logic',
        'Routing configurations'
      ],
      benefits: [
        'Accelerate repetitive tasks',
        'Consistent code patterns',
        'Follow architecture guidelines',
        'Human review and extension'
      ],
      sample: {
        generated: 'Authentication Controller',
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
            ← Back to Overview
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Implementation Pipeline</h1>
          <p className="mt-2 text-gray-600">
            From validated knowledge graphs to production-ready artifacts and code
          </p>
        </div>

        {/* Gateway */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-start">
            <CheckCircleIcon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Validation Gateway</h2>
              <p className="text-sm text-gray-700 mb-3">
                Implementation begins only after all four stakeholders (Product Owner, Business Analyst, UX Designer, Architect)
                have validated their respective artifacts. This ensures a solid, approved foundation before code generation.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  Functional Specs Approved
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  User Stories Approved
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  User Flows Approved
                </span>
                <span className="inline-flex items-center text-xs bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1" />
                  Architecture Approved
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Three Implementation Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Automated Artifact Generation</h2>

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
                  <span className="text-xs font-semibold text-gray-900">For: {currentArtifact.stakeholder}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Outputs */}
              <div className="bg-white rounded-lg p-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Generated Outputs:</h4>
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
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
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
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Sample Output:</h4>
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
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Parallel Development Workflows</h2>
              <p className="text-sm text-gray-600">
                Manual and semantic (AI-assisted) development proceed in parallel, maximizing velocity while maintaining quality.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Manual Development */}
            <div className="border-2 border-blue-200 rounded-lg p-5 bg-blue-50">
              <div className="flex items-center mb-4">
                <UserIcon className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Manual Development Track</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Developers work on complex, creative, and business-critical features that require human judgment.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Novel algorithms and business logic</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Complex integrations and workflows</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance optimization</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Security-critical components</span>
                </li>
              </ul>
            </div>

            {/* Semantic Development */}
            <div className="border-2 border-purple-200 rounded-lg p-5 bg-purple-50">
              <div className="flex items-center mb-4">
                <CpuChipIcon className="h-6 w-6 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Semantic Development Track</h3>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                AI agents generate code for repetitive patterns following architecture and design guidelines.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>CRUD operations and data access layers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>API endpoints and controllers</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Form validation and data models</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-purple-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Boilerplate and scaffolding code</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Visualization */}
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-5">
            <h4 className="text-sm font-semibold text-gray-900 mb-4">Parallel Timeline Comparison</h4>
            <div className="space-y-4">
              {/* Traditional Sequential */}
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Traditional Sequential Approach:</p>
                <div className="flex items-center gap-1">
                  <div className="flex-1 bg-blue-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Specs → Design
                  </div>
                  <div className="flex-1 bg-purple-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Design → Arch
                  </div>
                  <div className="flex-1 bg-green-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Arch → Code
                  </div>
                  <div className="flex-1 bg-orange-300 h-6 rounded flex items-center justify-center text-xs text-white font-medium">
                    Code → Tests
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-1 flex items-center">
                  <ClockIcon className="h-3 w-3 mr-1" />
                  16-20 weeks typical timeline
                </p>
              </div>

              {/* Breeze Parallel */}
              <div>
                <p className="text-xs font-semibold text-gray-700 mb-2">Breeze Parallel Approach:</p>
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
                  6-8 weeks typical timeline (60% faster)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Agent Ecosystem */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Implementation Agent Ecosystem</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Design Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Design System Generator</li>
                <li>• Token Extractor</li>
                <li>• Component Builder</li>
                <li>• Style Optimizer</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Prototype Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Interaction Builder</li>
                <li>• State Manager</li>
                <li>• Flow Navigator</li>
                <li>• Responsive Adapter</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Test Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Gherkin Generator</li>
                <li>• Scenario Builder</li>
                <li>• Test Data Creator</li>
                <li>• Coverage Analyzer</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Code Agents</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Boilerplate Generator</li>
                <li>• API Builder</li>
                <li>• Data Model Creator</li>
                <li>• Quality Validator</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Outcomes */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Outcomes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-3">
                <BoltIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">70% Higher Velocity</h3>
              <p className="text-sm text-gray-600">
                Parallel workflows and code generation dramatically accelerate development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <CheckCircleIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">40% Fewer Defects</h3>
              <p className="text-sm text-gray-600">
                TDD from day one and continuous validation ensure quality
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <DocumentTextIcon className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Living Documentation</h3>
              <p className="text-sm text-gray-600">
                Knowledge graphs and artifacts stay synchronized with code
              </p>
            </div>
          </div>
        </div>

        {/* Reference to Breeze Deep Dive */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Learn More About Breeze.AI</h2>
          <p className="text-sm mb-4 opacity-90">
            For a deeper dive into how manual and semantic development work together, explore our comprehensive
            Breeze.AI Deep Dive documentation.
          </p>
          <Link
            to="/breeze-process/flow/overview"
            className="inline-flex items-center px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Breeze Process Flow
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ImplementationPipeline;
