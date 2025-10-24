import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
  ArrowPathIcon,
  BoltIcon,
  ExclamationTriangleIcon,
  ChartBarIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

const StakeholderValidation: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'po' | 'ba' | 'ux' | 'architect'>('po');

  const validationTracks = {
    po: {
      title: 'Product Owner Track',
      icon: UserCircleIcon,
      color: 'blue',
      stakeholder: 'Product Owner',
      artifact: 'Functional Specifications Document',
      description: 'Comprehensive specifications derived from the Functional Ontology',
      includes: [
        'Feature list with detailed descriptions',
        'Acceptance criteria for each feature',
        'Business rules and constraints',
        'Priority and roadmap alignment',
        'Success metrics and KPIs'
      ],
      workflow: [
        { step: 'Generate', description: 'AI creates spec document from Functional Ontology' },
        { step: 'Review', description: 'PO reviews for completeness and accuracy' },
        { step: 'Annotate', description: 'PO adds comments, corrections, and clarifications' },
        { step: 'Update', description: 'Agent updates ontology based on feedback' },
        { step: 'Approve', description: 'PO approves final specification' }
      ],
      sampleContent: {
        feature: 'User Authentication',
        description: 'Users must be able to securely log in using email and password',
        acceptanceCriteria: [
          'Users can enter email and password',
          'System validates credentials against database',
          'Invalid credentials show appropriate error message',
          'Successful login redirects to dashboard',
          'Failed login attempts are rate-limited'
        ],
        businessRules: [
          'Password must be at least 8 characters',
          'Account locks after 5 failed attempts',
          'Session expires after 24 hours of inactivity'
        ]
      }
    },
    ba: {
      title: 'Business Analyst Track',
      icon: ClipboardDocumentListIcon,
      color: 'purple',
      stakeholder: 'Business Analyst',
      artifact: 'Epics & User Stories',
      description: 'JIRA-ready epics and user stories with story mapping and dependencies',
      includes: [
        'Epic breakdown with themes',
        'User stories with acceptance criteria',
        'Story points and estimates',
        'Dependencies and relationships',
        'Sprint allocation recommendations'
      ],
      workflow: [
        { step: 'Generate', description: 'AI creates epics and stories from ontologies' },
        { step: 'Review', description: 'BA reviews story structure and completeness' },
        { step: 'Refine', description: 'BA adjusts scope, splits stories, adds details' },
        { step: 'Update', description: 'Agent synchronizes changes back to graphs' },
        { step: 'Approve', description: 'BA approves for sprint planning' }
      ],
      sampleContent: {
        epic: 'User Account Management',
        stories: [
          {
            title: 'As a user, I can log in with email/password',
            points: 5,
            acceptance: ['Login form validation', 'Error handling', 'Session management']
          },
          {
            title: 'As a user, I can reset my forgotten password',
            points: 3,
            acceptance: ['Email verification', 'Token generation', 'Password update']
          }
        ]
      }
    },
    ux: {
      title: 'UX Designer Track',
      icon: PaintBrushIcon,
      color: 'green',
      stakeholder: 'UX Designer',
      artifact: 'User Flow Diagrams',
      description: 'Visual journey maps and interaction flows derived from Design Ontology',
      includes: [
        'End-to-end user journey maps',
        'Screen-by-screen flow diagrams',
        'Interaction patterns and states',
        'Error and edge case handling',
        'Wireframe suggestions'
      ],
      workflow: [
        { step: 'Generate', description: 'AI creates flow diagrams from Design Ontology' },
        { step: 'Review', description: 'Designer validates user experience flow' },
        { step: 'Refine', description: 'Designer adjusts flows, adds alternative paths' },
        { step: 'Update', description: 'Agent updates Design Ontology with changes' },
        { step: 'Approve', description: 'Designer approves for prototyping' }
      ],
      sampleContent: {
        flow: 'Login Flow',
        steps: [
          'Landing Page → Click "Login"',
          'Login Screen → Enter credentials',
          'Validation → Success/Error',
          'Dashboard (success) or Error Message (failure)'
        ],
        alternativePaths: [
          'Forgot Password flow',
          'Account locked flow',
          'First-time user onboarding'
        ]
      }
    },
    architect: {
      title: 'Architect Track',
      icon: CubeIcon,
      color: 'orange',
      stakeholder: 'Architect',
      artifact: 'Architecture Diagrams',
      description: 'System architecture and API contracts from Architecture Ontology',
      includes: [
        'System component diagrams',
        'Service interaction flows',
        'API contract specifications',
        'Data model schemas',
        'Infrastructure requirements'
      ],
      workflow: [
        { step: 'Generate', description: 'AI creates architecture diagrams from ontology' },
        { step: 'Review', description: 'Architect validates system design' },
        { step: 'Refine', description: 'Architect adjusts patterns, adds constraints' },
        { step: 'Update', description: 'Agent updates Architecture Ontology' },
        { step: 'Approve', description: 'Architect approves for implementation' }
      ],
      sampleContent: {
        component: 'Authentication Service',
        apis: [
          'POST /auth/login → Returns JWT token',
          'POST /auth/refresh → Refreshes token',
          'POST /auth/logout → Invalidates session'
        ],
        dependencies: [
          'User Service (user data)',
          'Redis (session storage)',
          'Email Service (password reset)'
        ]
      }
    }
  };

  const currentTrack = validationTracks[selectedTrack];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, { bg: string; text: string; border: string; gradient: string }> = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', gradient: 'from-blue-400 to-blue-600' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200', gradient: 'from-purple-400 to-purple-600' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200', gradient: 'from-green-400 to-green-600' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200', gradient: 'from-orange-400 to-orange-600' }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link to="/solutions/product-development" className="text-sm text-green-600 hover:text-green-700 mb-2 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Multi-Stakeholder Validation</h1>
          <p className="mt-2 text-gray-600">
            Role-specific artifact generation and validation workflows ensure everyone stays aligned
          </p>
        </div>

        {/* Validation Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Human-in-the-Loop Validation</h2>
          <p className="text-sm text-gray-700 mb-4">
            While AI agents extract and structure knowledge, human expertise is essential for validation.
            We generate tailored artifacts for each stakeholder role, allowing them to validate the aspects
            they own while maintaining consistency across all views.
          </p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Role-specific views</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Synchronized feedback</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Single source of truth</span>
            </div>
          </div>
        </div>

        {/* Four Validation Tracks */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Four Validation Tracks</h2>

          {/* Track Selector */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {(Object.keys(validationTracks) as Array<keyof typeof validationTracks>).map((key) => {
              const track = validationTracks[key];
              const Icon = track.icon;
              const colors = getColorClasses(track.color);
              const isSelected = selectedTrack === key;

              return (
                <button
                  key={key}
                  onClick={() => setSelectedTrack(key)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    isSelected
                      ? `${colors.border} ${colors.bg} shadow-md`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mx-auto mb-2 ${isSelected ? colors.text : 'text-gray-400'}`} />
                  <p className={`text-xs font-semibold text-center ${isSelected ? 'text-gray-900' : 'text-gray-600'}`}>
                    {track.stakeholder}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Selected Track Details */}
          <div className={`border-2 ${getColorClasses(currentTrack.color).border} rounded-lg p-6 ${getColorClasses(currentTrack.color).bg}`}>
            {/* Header */}
            <div className="flex items-start mb-4">
              <div className={`p-3 bg-gradient-to-br ${getColorClasses(currentTrack.color).gradient} rounded-lg mr-4`}>
                <currentTrack.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentTrack.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{currentTrack.description}</p>
                <div className="inline-flex items-center bg-white rounded px-2 py-1">
                  <DocumentTextIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs font-semibold text-gray-900">{currentTrack.artifact}</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">What's Included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {currentTrack.includes.map((item, idx) => (
                  <div key={idx} className="flex items-start text-sm text-gray-700">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Validation Workflow */}
            <div className="bg-white rounded-lg p-4 mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Validation Workflow:</h4>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-3">
                {currentTrack.workflow.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="flex-1 min-w-[120px]">
                      <div className={`rounded-lg p-3 border-2 ${getColorClasses(currentTrack.color).border} ${getColorClasses(currentTrack.color).bg}`}>
                        <p className="text-xs font-bold text-gray-900 mb-1">{step.step}</p>
                        <p className="text-xs text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {idx < currentTrack.workflow.length - 1 && (
                      <ArrowRightIcon className="h-4 w-4 text-gray-400 flex-shrink-0 transform md:transform-none rotate-90 md:rotate-0" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Sample Content Preview */}
            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Sample Artifact Preview:</h4>
              <div className="border border-gray-200 rounded p-3 font-mono text-xs bg-gray-50">
                {selectedTrack === 'po' && 'feature' in validationTracks.po.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Feature: {validationTracks.po.sampleContent.feature}</p>
                    <p className="text-gray-700 mb-2">{validationTracks.po.sampleContent.description}</p>
                    <p className="font-semibold text-gray-900 mb-1">Acceptance Criteria:</p>
                    <ul className="list-disc list-inside space-y-1 mb-2 text-gray-600">
                      {validationTracks.po.sampleContent.acceptanceCriteria.map((criteria: string, idx: number) => (
                        <li key={idx}>{criteria}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-gray-900 mb-1">Business Rules:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {validationTracks.po.sampleContent.businessRules.map((rule: string, idx: number) => (
                        <li key={idx}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTrack === 'ba' && 'epic' in validationTracks.ba.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">Epic: {validationTracks.ba.sampleContent.epic}</p>
                    <div className="space-y-3">
                      {validationTracks.ba.sampleContent.stories.map((story: any, idx: number) => (
                        <div key={idx} className="border-l-2 border-purple-400 pl-3">
                          <p className="font-semibold text-gray-900">{story.title}</p>
                          <p className="text-gray-600">Story Points: {story.points}</p>
                          <p className="text-gray-600 text-xs mt-1">
                            Acceptance: {story.acceptance.join(', ')}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {selectedTrack === 'ux' && 'flow' in validationTracks.ux.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{validationTracks.ux.sampleContent.flow}</p>
                    <p className="font-semibold text-gray-900 mb-1">Main Flow:</p>
                    <div className="space-y-1 mb-3 text-gray-600">
                      {validationTracks.ux.sampleContent.steps.map((step: string, idx: number) => (
                        <p key={idx}>→ {step}</p>
                      ))}
                    </div>
                    <p className="font-semibold text-gray-900 mb-1">Alternative Paths:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {validationTracks.ux.sampleContent.alternativePaths.map((path: string, idx: number) => (
                        <li key={idx}>{path}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {selectedTrack === 'architect' && 'component' in validationTracks.architect.sampleContent && (
                  <div>
                    <p className="font-bold text-gray-900 mb-2">{validationTracks.architect.sampleContent.component}</p>
                    <p className="font-semibold text-gray-900 mb-1">API Endpoints:</p>
                    <ul className="list-disc list-inside space-y-1 mb-2 text-gray-600">
                      {validationTracks.architect.sampleContent.apis.map((api: string, idx: number) => (
                        <li key={idx}>{api}</li>
                      ))}
                    </ul>
                    <p className="font-semibold text-gray-900 mb-1">Dependencies:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {validationTracks.architect.sampleContent.dependencies.map((dep: string, idx: number) => (
                        <li key={idx}>{dep}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Continuous Validation During Sprints */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-start mb-4">
            <BoltIcon className="h-8 w-8 text-orange-600 mr-3 flex-shrink-0" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Continuous Sprint Validation</h2>
              <p className="text-sm text-gray-600">
                Initial validation is just the beginning. Every sprint, AI agents extract updated knowledge graphs
                from the evolving codebase and compare them with the validated baseline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold text-blue-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900">Extract Current State</h3>
              </div>
              <p className="text-sm text-gray-600">
                At the end of each sprint, agents analyze the updated codebase and extract fresh knowledge graphs
                reflecting the current implementation.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold text-purple-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900">Detect Drift & Gaps</h3>
              </div>
              <p className="text-sm text-gray-600">
                AI compares current graphs with the baseline to identify drift (unintended deviations),
                gaps (missing implementations), and inconsistencies.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-2">
                  <span className="text-sm font-bold text-green-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900">Trigger Re-Validation</h3>
              </div>
              <p className="text-sm text-gray-600">
                Stakeholders are notified of significant changes and can validate whether drift is intentional
                or needs correction, preventing technical debt.
              </p>
            </div>
          </div>

          {/* Example Drift Detection */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200 p-5">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
              <ExclamationTriangleIcon className="h-5 w-5 text-orange-600 mr-2" />
              Example: Drift Detection Alert
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">Detected Change:</p>
                <p className="text-sm text-gray-900 mb-2">
                  <strong>Architecture Ontology:</strong> New "EmailService" dependency added to AuthService
                </p>
                <p className="text-xs text-gray-600">
                  This dependency was not in the original validated architecture diagram.
                </p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="text-xs font-semibold text-gray-700 mb-2">Recommended Action:</p>
                <div className="space-y-2">
                  <div className="flex items-start text-sm">
                    <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900">If intentional: Architect approves and updates baseline</span>
                  </div>
                  <div className="flex items-start text-sm">
                    <XCircleIcon className="h-4 w-4 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-900">If unintended: Developer removes dependency or seeks approval</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits of Continuous Validation */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why Continuous Validation Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Prevent Technical Debt</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ArrowPathIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span>Catch implementation drift before it becomes debt</span>
                </li>
                <li className="flex items-start">
                  <ArrowPathIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span>Ensure design and code stay in sync</span>
                </li>
                <li className="flex items-start">
                  <ArrowPathIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span>Document changes as they happen</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Maintain Quality</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <ChartBarIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span>Continuous validation improves code quality</span>
                </li>
                <li className="flex items-start">
                  <ChartBarIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span>Test-driven development from validated specs</span>
                </li>
                <li className="flex items-start">
                  <ChartBarIcon className="h-4 w-4 text-green-600 mr-2 mt-0.5" />
                  <span>Fewer post-launch defects</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Next: Implementation Pipeline</h2>
          <p className="text-sm mb-4 opacity-90">
            Once all stakeholders validate their artifacts, we move to implementation - generating design systems,
            prototypes, test scripts, and production-ready code.
          </p>
          <Link
            to="/solutions/product-development/implementation"
            className="inline-flex items-center px-4 py-2 bg-white text-green-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Implementation Process
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StakeholderValidation;
