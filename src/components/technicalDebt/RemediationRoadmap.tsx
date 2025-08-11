import React, { useState, useMemo } from 'react';
import { 
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  ArrowTrendingUpIcon,
  ChartBarIcon,
  CalendarIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';
import { technicalDebtIssues, TechnicalDebtIssue } from '../../data/technicalDebtData';

interface Sprint {
  id: string;
  name: string;
  issues: TechnicalDebtIssue[];
  totalEffort: number;
  totalImpact: number;
  status: 'planned' | 'in-progress' | 'completed';
  startDate?: string;
  endDate?: string;
}

interface RemediationPhase {
  name: string;
  description: string;
  sprints: Sprint[];
  totalEffort: number;
  totalImpact: number;
  riskLevel: 'high' | 'medium' | 'low';
}

const RemediationRoadmap: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'timeline' | 'impact' | 'effort'>('timeline');

  // Group issues into phases based on priority and dependencies
  const remediationPhases = useMemo<RemediationPhase[]>(() => {
    // Phase 1: Critical Security & Architecture Issues
    const phase1Issues = technicalDebtIssues.filter(i => 
      i.severity === 'critical' || 
      (i.category === 'architecture' && i.severity === 'high')
    );

    // Phase 2: Design & Functional Improvements
    const phase2Issues = technicalDebtIssues.filter(i => 
      !phase1Issues.includes(i) && 
      (i.category === 'design' || i.category === 'functional')
    );

    // Phase 3: Code Quality & Optimization
    const phase3Issues = technicalDebtIssues.filter(i => 
      !phase1Issues.includes(i) && 
      !phase2Issues.includes(i)
    );

    const createSprints = (issues: TechnicalDebtIssue[], sprintPrefix: string): Sprint[] => {
      const sprints: Sprint[] = [];
      let currentSprint: TechnicalDebtIssue[] = [];
      let currentEffort = 0;
      const maxEffortPerSprint = 21; // ~1 sprint capacity

      issues.forEach(issue => {
        if (currentEffort + issue.effort > maxEffortPerSprint && currentSprint.length > 0) {
          sprints.push({
            id: `${sprintPrefix}-${sprints.length + 1}`,
            name: `Sprint ${sprints.length + 1}`,
            issues: [...currentSprint],
            totalEffort: currentEffort,
            totalImpact: currentSprint.reduce((sum, i) => sum + i.impact, 0),
            status: 'planned'
          });
          currentSprint = [issue];
          currentEffort = issue.effort;
        } else {
          currentSprint.push(issue);
          currentEffort += issue.effort;
        }
      });

      if (currentSprint.length > 0) {
        sprints.push({
          id: `${sprintPrefix}-${sprints.length + 1}`,
          name: `Sprint ${sprints.length + 1}`,
          issues: currentSprint,
          totalEffort: currentEffort,
          totalImpact: currentSprint.reduce((sum, i) => sum + i.impact, 0),
          status: 'planned'
        });
      }

      return sprints;
    };

    return [
      {
        name: 'Phase 1: Critical Fixes',
        description: 'Address security vulnerabilities and architectural violations',
        sprints: createSprints(phase1Issues, 'phase1'),
        totalEffort: phase1Issues.reduce((sum, i) => sum + i.effort, 0),
        totalImpact: phase1Issues.reduce((sum, i) => sum + i.impact, 0),
        riskLevel: 'high'
      },
      {
        name: 'Phase 2: Design & Functional',
        description: 'Improve UI consistency and close functional gaps',
        sprints: createSprints(phase2Issues, 'phase2'),
        totalEffort: phase2Issues.reduce((sum, i) => sum + i.effort, 0),
        totalImpact: phase2Issues.reduce((sum, i) => sum + i.impact, 0),
        riskLevel: 'medium'
      },
      {
        name: 'Phase 3: Code Quality',
        description: 'Refactor and optimize codebase',
        sprints: createSprints(phase3Issues, 'phase3'),
        totalEffort: phase3Issues.reduce((sum, i) => sum + i.effort, 0),
        totalImpact: phase3Issues.reduce((sum, i) => sum + i.impact, 0),
        riskLevel: 'low'
      }
    ];
  }, []);

  const totalMetrics = {
    effort: remediationPhases.reduce((sum, p) => sum + p.totalEffort, 0),
    impact: remediationPhases.reduce((sum, p) => sum + p.totalImpact, 0),
    issues: technicalDebtIssues.length,
    sprints: remediationPhases.reduce((sum, p) => sum + p.sprints.length, 0)
  };

  const estimatedTimeline = Math.ceil(totalMetrics.sprints * 2); // 2 weeks per sprint

  const getRiskColor = (risk: string) => {
    switch(risk) {
      case 'high': return 'text-red-600 bg-red-50 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getSeverityBadge = (severity: string) => {
    const colors = {
      critical: 'bg-red-100 text-red-800',
      high: 'bg-orange-100 text-orange-800',
      medium: 'bg-yellow-100 text-yellow-800',
      low: 'bg-green-100 text-green-800'
    };
    return colors[severity as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Remediation Roadmap</h1>
          <p className="mt-2 text-gray-600">
            Prioritized action plan for systematic debt reduction
          </p>
        </div>

        {/* Overall Summary */}
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl shadow-lg p-8 mb-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="flex items-center mb-2">
                <ExclamationTriangleIcon className="h-5 w-5 mr-2" />
                <span className="text-blue-100">Total Issues</span>
              </div>
              <div className="text-3xl font-bold">{totalMetrics.issues}</div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 mr-2" />
                <span className="text-blue-100">Total Effort</span>
              </div>
              <div className="text-3xl font-bold">{totalMetrics.effort} pts</div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <ArrowTrendingUpIcon className="h-5 w-5 mr-2" />
                <span className="text-blue-100">Expected Impact</span>
              </div>
              <div className="text-3xl font-bold">{totalMetrics.impact}</div>
            </div>
            <div>
              <div className="flex items-center mb-2">
                <CalendarIcon className="h-5 w-5 mr-2" />
                <span className="text-blue-100">Timeline</span>
              </div>
              <div className="text-3xl font-bold">{estimatedTimeline} weeks</div>
            </div>
          </div>
        </div>

        {/* View Mode Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-8">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Remediation Phases</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'timeline' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Timeline View
              </button>
              <button
                onClick={() => setViewMode('impact')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'impact' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Impact Matrix
              </button>
              <button
                onClick={() => setViewMode('effort')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === 'effort' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Effort Analysis
              </button>
            </div>
          </div>
        </div>

        {/* Timeline View */}
        {viewMode === 'timeline' && (
          <div className="space-y-6">
            {remediationPhases.map((phase, phaseIndex) => (
              <div key={phaseIndex} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div 
                  className={`p-6 cursor-pointer ${selectedPhase === phaseIndex ? 'bg-blue-50' : ''}`}
                  onClick={() => setSelectedPhase(phaseIndex)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 ${
                        phaseIndex === 0 ? 'bg-red-100 text-red-600' :
                        phaseIndex === 1 ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {phaseIndex + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{phase.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{phase.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Effort</div>
                        <div className="font-semibold">{phase.totalEffort} pts</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Impact</div>
                        <div className="font-semibold">{phase.totalImpact}</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-sm font-medium border ${getRiskColor(phase.riskLevel)}`}>
                        {phase.riskLevel.toUpperCase()} RISK
                      </div>
                    </div>
                  </div>

                  {/* Sprints */}
                  {selectedPhase === phaseIndex && (
                    <div className="mt-6 space-y-4">
                      {phase.sprints.map((sprint, sprintIndex) => (
                        <div key={sprint.id} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium text-gray-900">{sprint.name}</h4>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-gray-500">
                                {sprint.issues.length} issues
                              </span>
                              <span className="text-gray-500">
                                {sprint.totalEffort} pts
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {sprint.issues.map(issue => (
                              <div key={issue.id} className="flex items-center justify-between bg-white rounded p-2">
                                <div className="flex items-center">
                                  <ExclamationTriangleIcon className={`h-4 w-4 mr-2 ${
                                    issue.severity === 'critical' ? 'text-red-500' :
                                    issue.severity === 'high' ? 'text-orange-500' :
                                    issue.severity === 'medium' ? 'text-yellow-500' :
                                    'text-green-500'
                                  }`} />
                                  <span className="text-sm text-gray-900">{issue.title}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className={`text-xs px-2 py-0.5 rounded-full ${getSeverityBadge(issue.severity)}`}>
                                    {issue.severity}
                                  </span>
                                  <span className="text-xs text-gray-500">
                                    {issue.effort} pts
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Impact Matrix View */}
        {viewMode === 'impact' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Impact vs Effort Matrix</h3>
            <div className="relative h-96 border-2 border-gray-200 rounded-lg">
              {/* Quadrant labels */}
              <div className="absolute top-2 left-2 text-sm text-gray-500">High Impact / Low Effort</div>
              <div className="absolute top-2 right-2 text-sm text-gray-500">High Impact / High Effort</div>
              <div className="absolute bottom-2 left-2 text-sm text-gray-500">Low Impact / Low Effort</div>
              <div className="absolute bottom-2 right-2 text-sm text-gray-500">Low Impact / High Effort</div>
              
              {/* Grid lines */}
              <div className="absolute top-1/2 w-full border-t border-gray-300"></div>
              <div className="absolute left-1/2 h-full border-l border-gray-300"></div>
              
              {/* Plot issues */}
              {technicalDebtIssues.map(issue => {
                const x = (issue.effort / 30) * 100; // Max effort ~30
                const y = 100 - (issue.impact / 10) * 100; // Invert Y axis
                
                return (
                  <div
                    key={issue.id}
                    className={`absolute w-3 h-3 rounded-full ${
                      issue.severity === 'critical' ? 'bg-red-500' :
                      issue.severity === 'high' ? 'bg-orange-500' :
                      issue.severity === 'medium' ? 'bg-yellow-500' :
                      'bg-green-500'
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                    title={`${issue.title} (Impact: ${issue.impact}, Effort: ${issue.effort})`}
                  />
                );
              })}
            </div>
            <div className="flex justify-center mt-4 gap-6">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm">Critical</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm">High</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                <span className="text-sm">Medium</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Low</span>
              </div>
            </div>
          </div>
        )}

        {/* Effort Analysis View */}
        {viewMode === 'effort' && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Effort Distribution Analysis</h3>
            <div className="space-y-6">
              {remediationPhases.map((phase, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-gray-900">{phase.name}</span>
                    <span className="text-sm text-gray-500">{phase.totalEffort} pts</span>
                  </div>
                  <div className="relative bg-gray-200 rounded-full h-8">
                    <div 
                      className={`absolute top-0 left-0 h-full rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        index === 0 ? 'bg-red-500' :
                        index === 1 ? 'bg-yellow-500' :
                        'bg-green-500'
                      }`}
                      style={{ width: `${(phase.totalEffort / totalMetrics.effort) * 100}%` }}
                    >
                      {Math.round((phase.totalEffort / totalMetrics.effort) * 100)}%
                    </div>
                  </div>
                  <div className="mt-2 grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Sprints:</span> {phase.sprints.length}
                    </div>
                    <div>
                      <span className="text-gray-500">Issues:</span> {phase.sprints.reduce((sum, s) => sum + s.issues.length, 0)}
                    </div>
                    <div>
                      <span className="text-gray-500">Avg per Sprint:</span> {Math.round(phase.totalEffort / phase.sprints.length)} pts
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Resource Recommendations</h4>
              <div className="text-sm text-blue-700 space-y-1">
                <div>• Estimated team size: 3-4 developers</div>
                <div>• Sprint duration: 2 weeks</div>
                <div>• Total timeline: {estimatedTimeline} weeks ({Math.round(estimatedTimeline / 4)} months)</div>
                <div>• Recommended approach: Start with Phase 1 critical fixes in parallel tracks</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemediationRoadmap;