import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  UserCircleIcon,
  ClipboardDocumentListIcon,
  PaintBrushIcon,
  CubeIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ArrowPathIcon,
  MapIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

const ReengineeringStrategy: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState<'business' | 'ba' | 'ux' | 'architect'>('business');

  const validationTracks = {
    business: {
      title: 'Business Owner Track',
      icon: UserCircleIcon,
      color: 'blue',
      stakeholder: 'Business Owner',
      artifact: 'Updated Functional Specifications',
      description: 'Modernized feature set with new capabilities and retired functionality',
      includes: [
        'Features to preserve as-is',
        'Features to modernize/improve',
        'Deprecated features to retire',
        'New capabilities to add',
        'Updated business rules'
      ],
      sample: 'Update: User Authentication → Add SSO, 2FA; Retire: Legacy password reset flow'
    },
    ba: {
      title: 'Business Analyst Track',
      icon: ClipboardDocumentListIcon,
      color: 'purple',
      stakeholder: 'Business Analyst',
      artifact: 'Re-engineering Epics & Stories',
      description: 'Sprint-by-sprint modernization plan with incremental delivery',
      includes: [
        'Phase-based epic breakdown',
        'Incremental migration stories',
        'Risk mitigation strategies',
        'Validation checkpoints',
        'Rollback procedures'
      ],
      sample: 'Epic: Modernize Auth → Story 1: Add SSO (3pts), Story 2: Implement 2FA (5pts), Story 3: Migrate users (8pts)'
    },
    ux: {
      title: 'UX Designer Track',
      icon: PaintBrushIcon,
      color: 'green',
      stakeholder: 'UX Designer',
      artifact: 'Modernized UI/UX Flows',
      description: 'Updated design system and improved user journeys',
      includes: [
        'Modern design system',
        'Responsive layouts',
        'Improved user flows',
        'Accessibility compliance',
        'Design component library'
      ],
      sample: 'New: Modern card-based layout, Improved: Mobile-responsive navigation, Add: Dark mode support'
    },
    architect: {
      title: 'Architect Track',
      icon: CubeIcon,
      color: 'orange',
      stakeholder: 'Architect',
      artifact: 'Target Architecture',
      description: 'Modernized system architecture with migration patterns',
      includes: [
        'Microservices extraction plan',
        'API modernization strategy',
        'Database optimization',
        'Cloud migration roadmap',
        'Technology stack updates'
      ],
      sample: 'Target: Extract Auth microservice, Modernize REST → GraphQL, Migrate MySQL → PostgreSQL, Deploy on AWS ECS'
    }
  };

  const currentTrack = validationTracks[selectedTrack];

  const reengineeringPhases = [
    {
      phase: 'Phase 1: Quick Wins',
      duration: '2-3 weeks',
      focus: 'Low-risk, high-impact improvements',
      deliverables: ['Code quality improvements', 'Documentation updates', 'Simple refactorings', 'Test coverage'],
      risk: 'Low'
    },
    {
      phase: 'Phase 2: Foundation',
      duration: '4-6 weeks',
      focus: 'Core architecture improvements',
      deliverables: ['API modernization', 'Database optimization', 'Authentication upgrade', 'Design system'],
      risk: 'Medium'
    },
    {
      phase: 'Phase 3: Transformation',
      duration: '8-10 weeks',
      focus: 'Major architectural changes',
      deliverables: ['Microservices extraction', 'UI framework migration', 'Cloud deployment', 'Performance optimization'],
      risk: 'High'
    },
    {
      phase: 'Phase 4: Optimization',
      duration: '2-4 weeks',
      focus: 'Polish and performance tuning',
      deliverables: ['Performance benchmarking', 'Security hardening', 'Monitoring setup', 'Documentation finalization'],
      risk: 'Low'
    }
  ];

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
          <Link to="/solutions/application-reengineering" className="text-sm text-orange-600 hover:text-orange-700 mb-2 inline-block">
            ← Back to Overview
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Re-engineering Strategy</h1>
          <p className="mt-2 text-gray-600">
            Strategic modernization plan with multi-stakeholder validation for Phoenix CRM
          </p>
        </div>

        {/* Strategy Philosophy */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Validated Modernization Strategy</h2>
          <p className="text-sm text-gray-700 mb-4">
            Re-engineering succeeds when all stakeholders align on the target state. We generate role-specific
            artifacts from the discovered knowledge graphs, allowing each stakeholder to validate the aspects
            they own before implementation begins.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Preserve business value</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Improve user experience</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Modernize architecture</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-5 w-5 text-green-600 mr-2" />
              <span>Eliminate technical debt</span>
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
            <div className="flex items-start mb-4">
              <div className={`p-3 bg-gradient-to-br ${getColorClasses(currentTrack.color).gradient} rounded-lg mr-4`}>
                <currentTrack.icon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{currentTrack.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{currentTrack.description}</p>
                <div className="inline-flex items-center bg-white rounded px-2 py-1">
                  <MapIcon className="h-4 w-4 text-gray-600 mr-1" />
                  <span className="text-xs font-semibold text-gray-900">{currentTrack.artifact}</span>
                </div>
              </div>
            </div>

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

            <div className="bg-white rounded-lg p-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Phoenix CRM Example:</h4>
              <p className="text-sm text-gray-700 font-mono">{currentTrack.sample}</p>
            </div>
          </div>
        </div>

        {/* Current vs Target Architecture */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Current vs. Target Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current */}
            <div className="border-2 border-red-200 rounded-lg p-5 bg-red-50">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-red-600 rounded-full mr-2"></span>
                Current Architecture
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• PHP monolith (legacy codebase)</li>
                <li>• Tightly coupled modules</li>
                <li>• Mixed tech stack (PHP/Node/Python)</li>
                <li>• MySQL + MongoDB (unoptimized)</li>
                <li>• Manual deployment process</li>
                <li>• Limited test coverage</li>
                <li>• Inconsistent API patterns</li>
              </ul>
            </div>

            {/* Target */}
            <div className="border-2 border-green-200 rounded-lg p-5 bg-green-50">
              <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                Target Architecture
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Microservices architecture</li>
                <li>• Domain-driven design</li>
                <li>• Node.js/TypeScript (standardized)</li>
                <li>• PostgreSQL (optimized schema)</li>
                <li>• CI/CD with automated testing</li>
                <li>• 80%+ test coverage</li>
                <li>• GraphQL API layer</li>
              </ul>
            </div>
          </div>

          <div className="mt-4 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm text-blue-800">
              <strong>Migration Strategy:</strong> Incremental extraction using the Strangler Fig pattern.
              New features built in target architecture while legacy is gradually decomposed.
            </p>
          </div>
        </div>

        {/* Re-engineering Roadmap */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Phased Re-engineering Roadmap</h2>
          <p className="text-sm text-gray-600 mb-6">
            Incremental approach balances risk, value delivery, and business continuity:
          </p>

          <div className="space-y-4">
            {reengineeringPhases.map((phase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-5">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm text-orange-600">{phase.duration}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 ml-11">{phase.focus}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    phase.risk === 'Low' ? 'bg-green-100 text-green-700' :
                    phase.risk === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                    'bg-red-100 text-red-700'
                  }`}>
                    {phase.risk} Risk
                  </span>
                </div>
                <div className="ml-11 grid grid-cols-2 md:grid-cols-4 gap-2">
                  {phase.deliverables.map((deliverable, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700">
                      <CheckCircleIcon className="h-3 w-3 text-green-600 mr-1 flex-shrink-0" />
                      {deliverable}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Validation Gateway */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl border border-green-200 p-6 mb-8">
          <div className="flex items-start">
            <ShieldCheckIcon className="h-8 w-8 text-green-600 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Validation Gateway</h2>
              <p className="text-sm text-gray-700 mb-4">
                Implementation begins only after all four stakeholders approve their respective artifacts.
                This ensures alignment on modernization goals, reduces rework, and mitigates risk.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <div className="flex items-center text-sm bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span>Business ✓</span>
                </div>
                <div className="flex items-center text-sm bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span>BA ✓</span>
                </div>
                <div className="flex items-center text-sm bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span>UX ✓</span>
                </div>
                <div className="flex items-center text-sm bg-white rounded px-2 py-1">
                  <CheckCircleIcon className="h-4 w-4 text-green-600 mr-1" />
                  <span>Architect ✓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Next Step */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-6 text-white">
          <h2 className="text-xl font-semibold mb-2">Next: Implementation & Modernization</h2>
          <p className="text-sm mb-4 opacity-90">
            With a validated strategy in place, we'll execute the re-engineering using AI-powered automation
            and human expertise working in parallel.
          </p>
          <Link
            to="/solutions/application-reengineering/implementation"
            className="inline-flex items-center px-4 py-2 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            View Implementation Process
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReengineeringStrategy;
