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

const AgentAnalysisView: React.FC = () => {
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
          title: 'Code Agent',
          description: 'Analyzes source code to build the ground truth code graph',
          inputs: ['Source Code Files', 'Dependencies', 'Configurations'],
          outputs: ['Code Graph', 'Dependency Map', 'Complexity Metrics'],
          color: 'blue'
        };
      case 'functional':
        return {
          title: 'Functional Agent',
          description: 'Extracts business requirements and functional behaviors from documentation',
          inputs: ['Requirements Docs', 'User Stories', 'User Manuals'],
          outputs: ['Functional Hierarchy', 'Use Cases', 'Functional Gaps'],
          color: 'purple'
        };
      case 'design':
        return {
          title: 'Design Agent',
          description: 'Identifies UI/UX patterns and design components',
          inputs: ['Design Mockups', 'Style Guides', 'UI Code'],
          outputs: ['Design System', 'Component Library', 'User Journeys'],
          color: 'pink'
        };
      case 'architecture':
        return {
          title: 'Architecture Agent',
          description: 'Maps system architecture and identifies patterns and violations',
          inputs: ['Architecture Docs', 'API Specs', 'System Code'],
          outputs: ['Architecture Layers', 'Service Map', 'Violations'],
          color: 'green'
        };
      default:
        return null;
    }
  };

  const agentInfo = getAgentDescription();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Agent-Based Ontology Extraction</h1>
          <p className="mt-2 text-gray-600">
            Demonstration of how AI agents process code and documentation to extract ontologies
          </p>
          <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> This is a conceptual demonstration showing how the extraction process works. 
              The data shown represents expected outputs from a fully operational system.
            </p>
          </div>
        </div>

        {/* Asset Overview */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Code Assets */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Code Assets</h2>
              <CodeBracketIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">PHP Files</span>
                <span className="text-sm font-medium">15 files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">JavaScript Files</span>
                <span className="text-sm font-medium">8 files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Lines of Code</span>
                <span className="text-sm font-medium">4,872</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Components Identified</span>
                <span className="text-sm font-medium">{phoenixCodeNodes.length}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                <span className="font-medium">Source:</span> /src/phoenix-crm/
              </div>
            </div>
          </div>

          {/* Document Assets */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Document Assets</h2>
              <DocumentTextIcon className="h-6 w-6 text-gray-400" />
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Requirements Docs</span>
                <span className="text-sm font-medium">{documentsByType.requirements || 0} files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Design Docs</span>
                <span className="text-sm font-medium">{documentsByType.design || 0} files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Architecture Docs</span>
                <span className="text-sm font-medium">{documentsByType.architecture || 0} files</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Documents</span>
                <span className="text-sm font-medium">{phoenixDocuments.length}</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="text-xs text-gray-500">
                <span className="font-medium">Source:</span> /docs/phoenix/
              </div>
            </div>
          </div>
        </div>

        {/* Extraction Process Diagram */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Extraction Process Flow</h2>
          
          <img 
            src={getPublicAssetUrl('/assets/diagrams/agent-extraction-flow.svg')} 
            alt="Agent-Based Extraction Process"
            className="w-full max-w-5xl mx-auto mb-6"
          />

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-medium text-blue-900 mb-2">Key Process Steps</h4>
              <ol className="space-y-1 text-sm text-blue-800">
                <li>1. Collect all code and documentation artifacts</li>
                <li>2. Four specialized agents process in parallel</li>
                <li>3. Each agent generates its ontology graph</li>
                <li>4. Cross-ontology mappings are established</li>
                <li>5. Unified knowledge graph is created</li>
              </ol>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-medium text-green-900 mb-2">Benefits</h4>
              <ul className="space-y-1 text-sm text-green-800">
                <li>• Comprehensive system understanding</li>
                <li>• Automated gap identification</li>
                <li>• Violation detection</li>
                <li>• Impact analysis capability</li>
                <li>• Refactoring guidance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agent Details */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Agent Capabilities</h2>
          
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
                    {agent} Agent
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
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Processes:</h4>
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
                      <h4 className="text-sm font-medium text-gray-700 mb-1">Produces:</h4>
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
                  <h4 className="font-medium text-gray-900 mb-3">Sample Processing</h4>
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
                                Extracts: Requirements, User Stories, Acceptance Criteria
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
                              Analyzes: Dependencies, Complexity, Patterns
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
                                Maps: Components, Layouts, Interactions
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
                                Identifies: Layers, Services, Patterns
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
              {selectedAgent === 'functional' && 'Example: Functional Gap Detection'}
              {selectedAgent === 'architecture' && 'Example: Architecture Violation Detection'}
              {selectedAgent === 'design' && 'Example: Design Inconsistency Detection'}
              {selectedAgent === 'code' && 'Example: Code Quality Analysis'}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {selectedAgent === 'functional' && 'How the Functional Agent identifies gaps by comparing documentation against code'}
              {selectedAgent === 'architecture' && 'How the Architecture Agent identifies violations of architectural principles'}
              {selectedAgent === 'design' && 'How the Design Agent identifies UI/UX inconsistencies and duplication'}
              {selectedAgent === 'code' && 'How the Code Agent analyzes source code for quality issues'}
            </p>
          </div>

          {/* Functional Analysis Example */}
          {selectedAgent === 'functional' && (
            <div className="grid md:grid-cols-2 gap-6">
              {/* Implemented Requirements */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                  <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                  Implemented Requirements ({implementedRequirements.length})
                </h3>
                <div className="space-y-2">
                  {implementedRequirements.map(req => (
                    <div key={req.id} className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <p className="text-sm text-gray-900">{req.requirement}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Source: {req.source}
                      </p>
                      <p className="text-xs text-green-600 mt-1">
                        ✓ Found in code: {req.functionalNodeId}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Functional Gaps */}
              <div>
                <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                  <ExclamationTriangleIcon className="h-5 w-5 text-yellow-500 mr-2" />
                  Functional Gaps ({functionalGaps.length})
                </h3>
                <div className="space-y-2">
                  {functionalGaps.map(gap => (
                    <div key={gap.id} className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <p className="text-sm text-gray-900">{gap.requirement}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        Source: {gap.source}
                      </p>
                      <p className="text-xs text-yellow-700 mt-1">
                        ⚠ No implementation found in code
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
                        <strong>Location:</strong> <code className="bg-gray-100 px-1 rounded">{violation.location}</code>
                      </p>
                      <p className="text-gray-600">
                        <strong>Fix:</strong> {violation.recommendation}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Detection Method:</strong> The Architecture Agent analyzes code structure, dependencies, 
                  and architectural documentation to identify violations of design principles like separation of concerns, 
                  service boundaries, and layered architecture.
                </p>
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
                    <p className="text-xs font-medium text-gray-600 mb-2">Examples found:</p>
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
                      <span className="font-medium text-gray-600">Impact:</span>
                      <p className="text-gray-700">{inconsistency.impact}</p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-600">Recommendation:</span>
                      <p className="text-gray-700">{inconsistency.recommendation}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-900">
                  <strong>Detection Method:</strong> The Design Agent analyzes UI code, stylesheets, and design documentation 
                  to identify duplicate components, inconsistent patterns, and deviations from design system guidelines.
                </p>
              </div>
            </div>
          )}

          {/* Code Analysis Example */}
          {selectedAgent === 'code' && (
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Code Complexity</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cyclomatic Complexity</span>
                      <span className="font-medium">8.3 avg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Max Nesting Depth</span>
                      <span className="font-medium text-red-600">7 levels</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Long Methods</span>
                      <span className="font-medium text-yellow-600">23 found</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Code Duplication</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duplicate Blocks</span>
                      <span className="font-medium text-red-600">47 found</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lines Duplicated</span>
                      <span className="font-medium">1,234</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Duplication %</span>
                      <span className="font-medium text-yellow-600">12.3%</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Code Smells</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">God Classes</span>
                      <span className="font-medium text-red-600">3 found</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dead Code</span>
                      <span className="font-medium">156 lines</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Magic Numbers</span>
                      <span className="font-medium text-yellow-600">89 found</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-medium text-gray-900 mb-2">Top Issues by File</h4>
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
                <p className="text-sm text-blue-900">
                  <strong>Detection Method:</strong> The Code Agent performs static analysis on source code to identify 
                  complexity issues, duplication, code smells, and violations of coding standards. This forms the ground truth 
                  for all other ontology mappings.
                </p>
              </div>
            </div>
          )}

          {selectedAgent === 'functional' && (
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Functional gaps can only be identified when requirements exist in documentation 
                but have no corresponding implementation in code. This demonstrates the value of processing both 
                code and documentation artifacts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgentAnalysisView;