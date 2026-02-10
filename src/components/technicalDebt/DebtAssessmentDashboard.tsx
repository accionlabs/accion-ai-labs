import React, { useState } from 'react';
import {
  ExclamationTriangleIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ClockIcon,
  ScaleIcon
} from '@heroicons/react/24/outline';
import {
  technicalDebtIssues,
  getDebtMetrics,
  getCodeGraphStats,
  TechnicalDebtIssue
} from '../../data/technicalDebtData';
import { useTranslation } from 'react-i18next';

interface MetricCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  color: 'red' | 'yellow' | 'green' | 'blue';
  icon?: React.ElementType;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, subtitle, color, icon: Icon }) => {
  const colorClasses = {
    red: 'bg-red-50 border-red-200 text-red-600',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-600',
    green: 'bg-green-50 border-green-200 text-green-600',
    blue: 'bg-blue-50 border-blue-200 text-blue-600'
  }[color];

  return (
    <div className={`rounded-lg border-2 p-6 ${colorClasses}`}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">{title}</h3>
        {Icon && <Icon className="h-5 w-5" />}
      </div>
      <div className="text-3xl font-bold">{value}</div>
      {subtitle && <div className="text-sm mt-1 opacity-75">{subtitle}</div>}
    </div>
  );
};

interface IssueRowProps {
  issue: TechnicalDebtIssue;
  onSelect: () => void;
  isSelected: boolean;
}

const IssueRow: React.FC<IssueRowProps> = ({ issue, onSelect, isSelected }) => {
  const severityColors = {
    critical: 'bg-red-100 text-red-800 border-red-300',
    high: 'bg-orange-100 text-orange-800 border-orange-300',
    medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    low: 'bg-green-100 text-green-800 border-green-300'
  };

  const riskColors = {
    high: 'text-red-600',
    medium: 'text-yellow-600',
    low: 'text-green-600'
  };

  return (
    <tr
      className={`hover:bg-gray-50 cursor-pointer ${isSelected ? 'bg-blue-50' : ''}`}
      onClick={onSelect}
    >
      <td className="px-4 py-3">
        <div className="flex items-center">
          <ExclamationTriangleIcon className={`h-5 w-5 mr-2 ${
            issue.severity === 'critical' ? 'text-red-500' :
            issue.severity === 'high' ? 'text-orange-500' :
            issue.severity === 'medium' ? 'text-yellow-500' :
            'text-green-500'
          }`} />
          <div>
            <div className="font-medium text-gray-900">{issue.title}</div>
            <div className="text-sm text-gray-500">{issue.category} - {issue.subcategory}</div>
          </div>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${severityColors[issue.severity]}`}>
          {issue.severity.toUpperCase()}
        </span>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm">
          <div className="font-medium">{issue.impact}/10</div>
          <div className="text-gray-500">{issue.severity === issue.severity ? 'Impact' : 'Impact'}</div>
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="text-sm">
          <div className="font-medium">{issue.effort} pts</div>
          <div className="text-gray-500">{issue.severity === issue.severity ? 'Effort' : 'Effort'}</div>
        </div>
      </td>
      <td className="px-4 py-3">
        <span className={`text-sm font-medium ${riskColors[issue.riskLevel]}`}>
          {issue.riskLevel.toUpperCase()}
        </span>
      </td>
    </tr>
  );
};

const DebtAssessmentDashboard: React.FC = () => {
  const { t } = useTranslation('technicalDebt');
  const [selectedIssue, setSelectedIssue] = useState<TechnicalDebtIssue | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterSeverity, setFilterSeverity] = useState<string>('all');

  const metrics = getDebtMetrics();
  const codeStats = getCodeGraphStats();

  const filteredIssues = technicalDebtIssues.filter(issue => {
    if (filterCategory !== 'all' && issue.category !== filterCategory) return false;
    if (filterSeverity !== 'all' && issue.severity !== filterSeverity) return false;
    return true;
  });

  const calculateTotalEffort = () => {
    return filteredIssues.reduce((sum, issue) => sum + issue.effort, 0);
  };

  const calculateAverageImpact = () => {
    if (filteredIssues.length === 0) return 0;
    const total = filteredIssues.reduce((sum, issue) => sum + issue.impact, 0);
    return (total / filteredIssues.length).toFixed(1);
  };

  const getSeverityDistribution = () => {
    const dist = { critical: 0, high: 0, medium: 0, low: 0 };
    filteredIssues.forEach(issue => {
      dist[issue.severity]++;
    });
    return dist;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">{t('assessment.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('assessment.subtitle')}
          </p>
        </div>

        {/* Overall Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <MetricCard
            title={t('assessment.metrics.overallScore')}
            value={metrics.overall}
            subtitle={t('assessment.metrics.severitySuffix')}
            color={metrics.overall >= 7 ? 'red' : metrics.overall >= 5 ? 'yellow' : 'green'}
            icon={ChartBarIcon}
          />
          <MetricCard
            title={t('assessment.metrics.architecture')}
            value={metrics.architecture}
            subtitle={t('assessment.metrics.severitySuffix')}
            color={metrics.architecture >= 7 ? 'red' : metrics.architecture >= 5 ? 'yellow' : 'green'}
          />
          <MetricCard
            title={t('assessment.metrics.design')}
            value={metrics.design}
            subtitle={t('assessment.metrics.severitySuffix')}
            color={metrics.design >= 7 ? 'red' : metrics.design >= 5 ? 'yellow' : 'green'}
          />
          <MetricCard
            title={t('assessment.metrics.functional')}
            value={metrics.functional}
            subtitle={t('assessment.metrics.severitySuffix')}
            color={metrics.functional >= 7 ? 'red' : metrics.functional >= 5 ? 'yellow' : 'green'}
          />
          <MetricCard
            title={t('assessment.metrics.codeQuality')}
            value={metrics.code}
            subtitle={t('assessment.metrics.severitySuffix')}
            color={metrics.code >= 7 ? 'red' : metrics.code >= 5 ? 'yellow' : 'green'}
          />
        </div>

        {/* Ontology Extraction Results */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('assessment.ontologyResults.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="border-l-4 border-blue-500 pl-3">
              <div className="text-sm text-gray-600">{t('assessment.ontologyResults.codeGraph')}</div>
              <div className="text-xl font-bold">17 {t('assessment.ontologyResults.nodes')}</div>
              <div className="text-xs text-gray-500">15 {t('assessment.ontologyResults.edges')}</div>
            </div>
            <div className="border-l-4 border-purple-500 pl-3">
              <div className="text-sm text-gray-600">Functional</div>
              <div className="text-xl font-bold">13 {t('assessment.ontologyResults.nodes')}</div>
              <div className="text-xs text-red-600 font-medium">{t('assessment.ontologyResults.gapsFound')}</div>
            </div>
            <div className="border-l-4 border-pink-500 pl-3">
              <div className="text-sm text-gray-600">Design</div>
              <div className="text-xl font-bold">16 {t('assessment.ontologyResults.nodes')}</div>
              <div className="text-xs text-yellow-600 font-medium">{t('assessment.ontologyResults.inconsistencies')}</div>
            </div>
            <div className="border-l-4 border-green-500 pl-3">
              <div className="text-sm text-gray-600">Architecture</div>
              <div className="text-xl font-bold">11 {t('assessment.ontologyResults.nodes')}</div>
              <div className="text-xs text-red-600 font-medium">{t('assessment.ontologyResults.violations')}</div>
            </div>
            <div className="border-l-4 border-orange-500 pl-3">
              <div className="text-sm text-gray-600">{t('assessment.ontologyResults.mappings')}</div>
              <div className="text-xl font-bold">46 {t('assessment.ontologyResults.total')}</div>
              <div className="text-xs text-gray-500">{t('assessment.ontologyResults.crossOntology')}</div>
            </div>
          </div>
        </div>

        {/* Code Statistics */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">{t('assessment.codeAnalysis.title')}</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-sm text-gray-600">{t('assessment.codeAnalysis.codeComponents')}</div>
              <div className="text-2xl font-bold">{codeStats.totalNodes}</div>
              <div className="text-xs text-gray-500">{t('assessment.codeAnalysis.groundTruthNodes')}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">{t('assessment.codeAnalysis.linesOfCode')}</div>
              <div className="text-2xl font-bold">{codeStats.totalLinesOfCode.toLocaleString()}</div>
              <div className="text-xs text-gray-500">{t('assessment.codeAnalysis.acrossAllFiles')}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">{t('assessment.codeAnalysis.codeEdges')}</div>
              <div className="text-2xl font-bold">{codeStats.totalEdges}</div>
              <div className="text-xs text-gray-500">{t('assessment.codeAnalysis.dependenciesLabel')}</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">{t('assessment.codeAnalysis.avgComplexity')}</div>
              <div className="text-2xl font-bold">{codeStats.averageComplexity.toFixed(1)}</div>
            </div>
          </div>
        </div>

        {/* Filters and Issue List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">{t('assessment.issues.title')}</h2>
            <div className="flex gap-3">
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="all">{t('assessment.issues.filters.allCategories')}</option>
                <option value="architecture">{t('assessment.issues.filters.architecture')}</option>
                <option value="design">{t('assessment.issues.filters.design')}</option>
                <option value="functional">{t('assessment.issues.filters.functional')}</option>
                <option value="code-quality">{t('assessment.issues.filters.codeQuality')}</option>
              </select>
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="all">{t('assessment.issues.filters.allSeverities')}</option>
                <option value="critical">{t('assessment.issues.filters.critical')}</option>
                <option value="high">{t('assessment.issues.filters.high')}</option>
                <option value="medium">{t('assessment.issues.filters.medium')}</option>
                <option value="low">{t('assessment.issues.filters.low')}</option>
              </select>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <div className="text-sm text-gray-600">{t('assessment.issues.summary.totalIssues')}</div>
              <div className="text-xl font-bold">{filteredIssues.length}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">{t('assessment.issues.summary.totalEffort')}</div>
              <div className="text-xl font-bold">{calculateTotalEffort()} pts</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">{t('assessment.issues.summary.avgImpact')}</div>
              <div className="text-xl font-bold">{calculateAverageImpact()}/10</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-600">{t('assessment.issues.summary.criticalIssues')}</div>
              <div className="text-xl font-bold text-red-600">{getSeverityDistribution().critical}</div>
            </div>
          </div>

          {/* Issue Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-y border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('assessment.issues.table.issue')}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('assessment.issues.table.severity')}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('assessment.issues.table.impact')}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('assessment.issues.table.effort')}</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{t('assessment.issues.table.risk')}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredIssues.map(issue => (
                  <IssueRow
                    key={issue.id}
                    issue={issue}
                    isSelected={selectedIssue?.id === issue.id}
                    onSelect={() => setSelectedIssue(issue)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Selected Issue Details */}
        {selectedIssue && (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{selectedIssue.title}</h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                    selectedIssue.severity === 'critical' ? 'bg-red-100 text-red-800' :
                    selectedIssue.severity === 'high' ? 'bg-orange-100 text-orange-800' :
                    selectedIssue.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {selectedIssue.severity.toUpperCase()}
                  </span>
                  <span className="text-sm text-gray-500">
                    {selectedIssue.category} / {selectedIssue.subcategory}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedIssue(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-900 mb-1">{t('assessment.issueDetail.description')}</h4>
                <p className="text-gray-600">{selectedIssue.description}</p>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-1">{t('assessment.issueDetail.recommendation')}</h4>
                <p className="text-gray-600">{selectedIssue.recommendation}</p>
              </div>

              <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <div className="text-sm text-gray-600">{t('assessment.issueDetail.impactScore')}</div>
                  <div className="text-xl font-bold">{selectedIssue.impact}/10</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">{t('assessment.issueDetail.effortEstimate')}</div>
                  <div className="text-xl font-bold">{selectedIssue.effort} pts</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">{t('assessment.issueDetail.riskLevel')}</div>
                  <div className={`text-xl font-bold ${
                    selectedIssue.riskLevel === 'high' ? 'text-red-600' :
                    selectedIssue.riskLevel === 'medium' ? 'text-yellow-600' :
                    'text-green-600'
                  }`}>
                    {selectedIssue.riskLevel.toUpperCase()}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-2">{t('assessment.issueDetail.affectedCodeNodes')}</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedIssue.affectedNodes.map(nodeId => (
                    <code key={nodeId} className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {nodeId}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DebtAssessmentDashboard;
