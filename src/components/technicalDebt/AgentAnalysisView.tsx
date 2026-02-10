import React, { useState } from 'react';
import {
  DocumentTextIcon,
  CodeBracketIcon,
  CpuChipIcon,
  BeakerIcon,
  PaintBrushIcon,
  CubeIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  FolderOpenIcon,
  DocumentIcon,
  ArrowRightIcon,
  ArrowDownIcon
} from '@heroicons/react/24/outline';
import {
  phoenixDocuments,
  extractedRequirements,
  architectureViolations,
  designInconsistencies
} from '../../data/documentAssets';
import { getPublicAssetUrl } from '../../utils/assetHelper';
import { phoenixCodeNodes } from '../../data/technicalDebtData';
import { useTranslation } from 'react-i18next';

const AgentAnalysisView: React.FC = () => {
  const { t } = useTranslation('technicalDebt');
  const [selectedAgent, setSelectedAgent] = useState<string>('functional');

  // Count documents by type
  const documentsByType = phoenixDocuments.reduce((acc, doc) => {
    acc[doc.type] = (acc[doc.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Functional gaps (requirements without implementation)
  const functionalGaps = extractedRequirements.filter(req => !req.hasImplementation);
  const implementedRequirements = extractedRequirements.filter(req => req.hasImplementation);

  const getAgentDescription = () => {
    switch(selectedAgent) {
      case 'code':
        return {
          title: t('agentAnalysis.agentCapabilities.agents.code.title'),
          description: t('agentAnalysis.agentCapabilities.agents.code.description'),
          inputs: [
            t('agentAnalysis.agentCapabilities.agents.code.input1'),
            t('agentAnalysis.agentCapabilities.agents.code.input2'),
            t('agentAnalysis.agentCapabilities.agents.code.input3')
          ],
          outputs: [
            t('agentAnalysis.agentCapabilities.agents.code.output1'),
            t('agentAnalysis.agentCapabilities.agents.code.output2'),
            t('agentAnalysis.agentCapabilities.agents.code.output3')
          ],
          color: 'blue'
        };
      case 'functional':
        return {
          title: t('agentAnalysis.agentCapabilities.agents.functional.title'),
          description: t('agentAnalysis.agentCapabilities.agents.functional.description'),
          inputs: [
            t('agentAnalysis.agentCapabilities.agents.functional.input1'),
            t('agentAnalysis.agentCapabilities.agents.functional.input2'),
            t('agentAnalysis.agentCapabilities.agents.functional.input3')
          ],
          outputs: [
            t('agentAnalysis.agentCapabilities.agents.functional.output1'),
            t('agentAnalysis.agentCapabilities.agents.functional.output2'),
            t('agentAnalysis.agentCapabilities.agents.functional.output3')
          ],
          color: 'purple'
        };
      case 'design':
        return {
          title: t('agentAnalysis.agentCapabilities.agents.design.title'),
          description: t('agentAnalysis.agentCapabilities.agents.design.description'),
          inputs: [
            t('agentAnalysis.agentCapabilities.agents.design.input1'),
            t('agentAnalysis.agentCapabilities.agents.design.input2'),
            t('agentAnalysis.agentCapabilities.agents.design.input3')
          ],
          outputs: [
            t('agentAnalysis.agentCapabilities.agents.design.output1'),
            t('agentAnalysis.agentCapabilities.agents.design.output2'),
            t('agentAnalysis.agentCapabilities.agents.design.output3')
          ],
          color: 'pink'
        };
      case 'architecture':
        return {
          title: t('agentAnalysis.agentCapabilities.agents.architecture.title'),
          description: t('agentAnalysis.agentCapabilities.agents.architecture.description'),
          inputs: [
            t('agentAnalysis.agentCapabilities.agents.architecture.input1'),
            t('agentAnalysis.agentCapabilities.agents.architecture.input2'),
            t('agentAnalysis.agentCapabilities.agents.architecture.input3')
          ],
          outputs: [
            t('agentAnalysis.agentCapabilities.agents.architecture.output1'),
            t('agentAnalysis.agentCapabilities.agents.architecture.output2'),
            t('agentAnalysis.agentCapabilities.agents.architecture.output3')
          ],
          color: 'green'
        };
      default:
        return null;
    }
  };

  const agentInfo = getAgentDescription();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('agentAnalysis.header.title')}</h1>
          <p className="mt-2 text-gray-600">
            {t('agentAnalysis.header.description')}
          </p>
        </div>

        {/* Asset Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Code Assets */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{t('agentAnalysis.codeAssets.title')}</h2>
              <CodeBracketIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.codeAssets.phpFiles')}</span>
                <span className="text-sm font-medium">15 files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.codeAssets.jsFiles')}</span>
                <span className="text-sm font-medium">8 files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.codeAssets.totalLinesOfCode')}</span>
                <span className="text-sm font-medium">4,872</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.codeAssets.componentsIdentified')}</span>
                <span className="text-sm font-medium">{phoenixCodeNodes.length}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                <span className="font-medium">{t('agentAnalysis.codeAssets.source')}</span> /src/phoenix-crm/
              </div>
            </div>
          </div>

          {/* Document Assets */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">{t('agentAnalysis.documentAssets.title')}</h2>
              <DocumentTextIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.documentAssets.requirementsDocs')}</span>
                <span className="text-sm font-medium">{documentsByType.requirements || 0} files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.documentAssets.designDocs')}</span>
                <span className="text-sm font-medium">{documentsByType.design || 0} files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.documentAssets.architectureDocs')}</span>
                <span className="text-sm font-medium">{documentsByType.architecture || 0} files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{t('agentAnalysis.documentAssets.totalDocuments')}</span>
                <span className="text-sm font-medium">{phoenixDocuments.length}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                <span className="font-medium">{t('agentAnalysis.documentAssets.source')}</span> /docs/phoenix/
              </div>
            </div>
          </div>
        </div>

        {/* Extraction Process Diagram */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('agentAnalysis.extractionProcess.title')}</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">{t('agentAnalysis.extractionProcess.keySteps')}</h4>
              <ol className="space-y-1 text-sm text-blue-800">
                <li>{t('agentAnalysis.extractionProcess.step1')}</li>
                <li>{t('agentAnalysis.extractionProcess.step2')}</li>
                <li>{t('agentAnalysis.extractionProcess.step3')}</li>
                <li>{t('agentAnalysis.extractionProcess.step4')}</li>
                <li>{t('agentAnalysis.extractionProcess.step5')}</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-900 mb-2">{t('agentAnalysis.extractionProcess.benefits')}</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• {t('agentAnalysis.extractionProcess.benefit1')}</li>
                <li>• {t('agentAnalysis.extractionProcess.benefit2')}</li>
                <li>• {t('agentAnalysis.extractionProcess.benefit3')}</li>
                <li>• {t('agentAnalysis.extractionProcess.benefit4')}</li>
                <li>• {t('agentAnalysis.extractionProcess.benefit5')}</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agent Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">{t('agentAnalysis.agentCapabilities.title')}</h2>

          <div className="grid md:grid-cols-4 gap-4 mb-6">
            {['code', 'functional', 'design', 'architecture'].map((agent) => {
              const colors = {
                code: 'blue',
                functional: 'purple',
                design: 'pink',
                architecture: 'green'
              };
              const icons = {
                code: CodeBracketIcon,
                functional: BeakerIcon,
                design: PaintBrushIcon,
                architecture: CubeIcon
              };
              const Icon = icons[agent as keyof typeof icons];
              const color = colors[agent as keyof typeof colors];

              return (
                <button
                  key={agent}
                  onClick={() => setSelectedAgent(agent)}
                  className={`p-4 rounded-lg border-2 transition-all ${
                    selectedAgent === agent
                      ? `bg-${color}-50 border-${color}-500`
                      : 'bg-white border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Icon className={`h-8 w-8 mb-2 ${
                    selectedAgent === agent ? `text-${color}-600` : 'text-gray-400'
                  }`} />
                  <h3 className={`font-medium capitalize ${
                    selectedAgent === agent ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {agent} {t('agentAnalysis.agentCapabilities.agentSuffix')}
                  </h3>
                </button>
              );
            })}
          </div>

          {agentInfo && (
            <div className="border-t border-gray-200 pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">{agentInfo.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{agentInfo.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">{t('agentAnalysis.agentCapabilities.processes')}</h4>
                      <ul className="space-y-1">
                        {agentInfo.inputs.map((input, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <ArrowRightIcon className="h-3 w-3 mr-2 text-gray-400" />
                            {input}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-1">{t('agentAnalysis.agentCapabilities.produces')}</h4>
                      <ul className="space-y-1">
                        {agentInfo.outputs.map((output, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-600">
                            <CheckCircleIcon className="h-3 w-3 mr-2 text-green-500" />
                            {output}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-3">{t('agentAnalysis.agentCapabilities.sampleProcessing')}</h4>
                  {selectedAgent === 'functional' ? (
                    <div className="space-y-2">
                      {phoenixDocuments
                        .filter(doc => doc.type === 'requirements' || doc.type === 'user-manual')
                        .slice(0, 3)
                        .map(doc => (
                          <div key={doc.id} className="flex items-start p-2 bg-purple-50 rounded">
                            <DocumentIcon className="h-4 w-4 text-purple-500 mt-0.5 mr-2" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                              <p className="text-xs text-gray-600 mt-1">
                                {t('agentAnalysis.agentCapabilities.extractsRequirements')}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : selectedAgent === 'code' ? (
                    <div className="space-y-2">
                      {phoenixCodeNodes.slice(0, 3).map(node => (
                        <div key={node.id} className="flex items-start p-2 bg-blue-50 rounded">
                          <FolderOpenIcon className="h-4 w-4 text-blue-500 mt-0.5 mr-2" />
                          <div className="flex-1">
                            <p className="text-sm font-medium text-gray-900">{node.name}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              {t('agentAnalysis.agentCapabilities.analyzesDependencies')}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : selectedAgent === 'design' ? (
                    <div className="space-y-2">
                      {phoenixDocuments
                        .filter(doc => doc.type === 'design')
                        .slice(0, 2)
                        .map(doc => (
                          <div key={doc.id} className="flex items-start p-2 bg-pink-50 rounded">
                            <DocumentIcon className="h-4 w-4 text-pink-500 mt-0.5 mr-2" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                              <p className="text-xs text-gray-600 mt-1">
                                {t('agentAnalysis.agentCapabilities.mapsComponents')}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      {phoenixDocuments
                        .filter(doc => doc.type === 'architecture')
                        .slice(0, 2)
                        .map(doc => (
                          <div key={doc.id} className="flex items-start p-2 bg-green-50 rounded">
                            <DocumentIcon className="h-4 w-4 text-green-500 mt-0.5 mr-2" />
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-900">{doc.name}</p>
                              <p className="text-xs text-gray-600 mt-1">
                                {t('agentAnalysis.agentCapabilities.identifiesLayers')}
                              </p>
                            </div>
                          </div>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Analysis Examples Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {selectedAgent === 'functional' && t('agentAnalysis.analysisExamples.functionalGapTitle')}
              {selectedAgent === 'architecture' && t('agentAnalysis.analysisExamples.architectureViolationTitle')}
              {selectedAgent === 'design' && t('agentAnalysis.analysisExamples.designInconsistencyTitle')}
              {selectedAgent === 'code' && t('agentAnalysis.analysisExamples.codeQualityTitle')}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedAgent === 'functional' && t('agentAnalysis.analysisExamples.functionalGapDesc')}
              {selectedAgent === 'architecture' && t('agentAnalysis.analysisExamples.architectureViolationDesc')}
              {selectedAgent === 'design' && t('agentAnalysis.analysisExamples.designInconsistencyDesc')}
              {selectedAgent === 'code' && t('agentAnalysis.analysisExamples.codeQualityDesc')}
            </p>
          </div>

          {/* Functional Analysis Example */}
          {selectedAgent === 'functional' && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Implemented Requirements */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  {t('agentAnalysis.analysisExamples.implementedRequirements')} ({implementedRequirements.length})
                </h3>
                <div className="space-y-2">
                  {implementedRequirements.map(req => (
                    <div key={req.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-900">{req.requirement}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {t('agentAnalysis.analysisExamples.sourceLabel')} {req.source}
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        ✓ {t('agentAnalysis.analysisExamples.foundInCode')} {req.functionalNodeId}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional Gaps */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  {t('agentAnalysis.analysisExamples.functionalGaps')} ({functionalGaps.length})
                </h3>
                <div className="space-y-2">
                  {functionalGaps.map(gap => (
                    <div key={gap.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-gray-900">{gap.requirement}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {t('agentAnalysis.analysisExamples.sourceLabel')} {gap.source}
                      </p>
                      <p className="text-xs text-yellow-700 mt-1">
                        ⚠ {t('agentAnalysis.analysisExamples.noImplementation')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Architecture Analysis Example */}
          {selectedAgent === 'architecture' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {architectureViolations.map(violation => (
                  <div
                    key={violation.id}
                    className={`p-4 rounded-lg border-2 ${
                      violation.severity === 'critical' ? 'bg-red-50 border-red-300' :
                      violation.severity === 'high' ? 'bg-orange-50 border-orange-300' :
                      violation.severity === 'medium' ? 'bg-yellow-50 border-yellow-300' :
                      'bg-green-50 border-green-300'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{violation.violation}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        violation.severity === 'critical' ? 'bg-red-200 text-red-800' :
                        violation.severity === 'high' ? 'bg-orange-200 text-orange-800' :
                        violation.severity === 'medium' ? 'bg-yellow-200 text-yellow-800' :
                        'bg-green-200 text-green-800'
                      }`}>
                        {violation.severity.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mb-2">{violation.description}</p>
                    <div className="text-xs space-y-1">
                      <p className="text-gray-600">
                        <strong>{t('agentAnalysis.analysisExamples.locationLabel')}</strong> <code className="bg-gray-100 px-1 rounded">{violation.location}</code>
                      </p>
                      <p className="text-gray-600">
                        <strong>{t('agentAnalysis.analysisExamples.fixLabel')}</strong> {violation.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900" dangerouslySetInnerHTML={{ __html: t('agentAnalysis.analysisExamples.detectionMethodArchitecture') }} />
              </div>
            </div>
          )}

          {/* Design Analysis Example */}
          {selectedAgent === 'design' && (
            <div className="space-y-4">
              {designInconsistencies.map(inconsistency => (
                <div key={inconsistency.id} className="p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{inconsistency.inconsistency}</h4>
                  <p className="text-sm text-gray-700 mb-3">{inconsistency.description}</p>

                  <div className="mb-3">
                    <p className="text-xs font-medium text-gray-600 mb-2">{t('agentAnalysis.analysisExamples.examplesFound')}</p>
                    <div className="space-y-1">
                      {inconsistency.examples.map((example, idx) => (
                        <code key={idx} className="block text-xs bg-white p-2 rounded border border-pink-100">
                          {example}
                        </code>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-medium text-gray-600">{t('agentAnalysis.analysisExamples.impactLabel')}</span>
                      <p className="text-gray-700">{inconsistency.impact}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">{t('agentAnalysis.analysisExamples.recommendationLabel')}</span>
                      <p className="text-gray-700">{inconsistency.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-900" dangerouslySetInnerHTML={{ __html: t('agentAnalysis.analysisExamples.detectionMethodDesign') }} />
              </div>
            </div>
          )}

          {/* Code Analysis Example */}
          {selectedAgent === 'code' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('agentAnalysis.analysisExamples.codeComplexity')}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.cyclomaticComplexity')}</span>
                      <span className="font-medium">8.3 avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.maxNestingDepth')}</span>
                      <span className="font-medium text-red-600">7 levels</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.longMethods')}</span>
                      <span className="font-medium text-yellow-600">23 found</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('agentAnalysis.analysisExamples.codeDuplication')}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.duplicateBlocks')}</span>
                      <span className="font-medium text-red-600">47 found</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.linesDuplicated')}</span>
                      <span className="font-medium">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.duplicationPercent')}</span>
                      <span className="font-medium text-yellow-600">12.3%</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-2">{t('agentAnalysis.analysisExamples.codeSmellsTitle')}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.godClasses')}</span>
                      <span className="font-medium text-red-600">3 found</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.deadCode')}</span>
                      <span className="font-medium">156 lines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t('agentAnalysis.analysisExamples.magicNumbers')}</span>
                      <span className="font-medium text-yellow-600">89 found</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">{t('agentAnalysis.analysisExamples.topIssuesByFile')}</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <code className="bg-white px-2 py-1 rounded border">CustomerService.php</code>
                    <span className="text-red-600 font-medium">Complexity: 42, Duplication: 18%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <code className="bg-white px-2 py-1 rounded border">OrderController.php</code>
                    <span className="text-orange-600 font-medium">Complexity: 31, Methods: 47</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <code className="bg-white px-2 py-1 rounded border">DatabaseManager.php</code>
                    <span className="text-yellow-600 font-medium">God Class, 2134 lines</span>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900" dangerouslySetInnerHTML={{ __html: t('agentAnalysis.analysisExamples.detectionMethodCode') }} />
              </div>
            </div>
          )}

          {selectedAgent === 'functional' && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: t('agentAnalysis.analysisExamples.functionalNote') }} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentAnalysisView;
