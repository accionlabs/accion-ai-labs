import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useOntology } from '../contexts/OntologyContext';
import { OntologyNode } from '../types/ontology';
import { OverlapAnalysisEngine, FunctionalOverlapAnalysis, CodeImpactByLevel } from '../utils/overlapAnalysisAlgorithm';
import AppHeader from './common/AppHeader';

interface ComponentGroup {
  level: string;
  phoenix?: OntologyNode;
  apollo?: OntologyNode;
  voyager?: OntologyNode;
  inconsistencies: string[];
  connectedCodeNodes?: {
    phoenix: OntologyNode[];
    apollo: OntologyNode[];
    voyager: OntologyNode[];
  };
  [key: string]: any;
}

const ComponentComparator: React.FC = () => {
  const { state } = useOntology();
  const [functionalGroups, setFunctionalGroups] = useState<ComponentGroup[]>([]);
  const [codeGroups, setCodeGroups] = useState<ComponentGroup[]>([]);
  const [architectureGroups, setArchitectureGroups] = useState<ComponentGroup[]>([]);
  const [designGroups, setDesignGroups] = useState<ComponentGroup[]>([]);
  const [overlapAnalysis, setOverlapAnalysis] = useState<FunctionalOverlapAnalysis | null>(null);
  const [showAdvancedAnalysis, setShowAdvancedAnalysis] = useState(false);

  const findConnectedCodeNodes = (nodeId: string): OntologyNode[] => {
    const connectedCodeNodes: OntologyNode[] = [];
    const visited = new Set<string>();
    const queue = [nodeId];

    while (queue.length > 0) {
      const currentId = queue.shift()!;
      if (visited.has(currentId)) continue;
      visited.add(currentId);

      // Find edges going forward from current node
      const outgoingEdges = state.edges.filter(edge => edge.source === currentId);
      
      outgoingEdges.forEach(edge => {
        const targetNode = state.nodes.find(n => n.id === edge.target);
        if (targetNode && !visited.has(targetNode.id)) {
          if (targetNode.type === 'code') {
            // Found a code node, add it to results
            connectedCodeNodes.push(targetNode);
          }
          // Continue traversal to find more connected nodes
          queue.push(targetNode.id);
        }
      });
    }

    return connectedCodeNodes;
  };

  const generateAllComparisons = React.useCallback(() => {
    const analysisEngine = new OverlapAnalysisEngine(state.nodes, state.edges);
    
    // 1. Start with functional analysis
    const analysis = analysisEngine.analyzeFunctionalOverlap('functional');
    setOverlapAnalysis(analysis);
    
    
    // Generate functional level comparisons
    const functionalGroups = generateLevelComparisons('functional', analysis);
    setFunctionalGroups(functionalGroups);
    
    // 2. Generate code impact analysis from overlapping functional nodes
    const codeImpact = analysisEngine.findConnectedCodeNodes(analysis.reverseTraversalBasis);
    
    // Create code level comparisons
    const codeGroups = generateCodeComparisons(codeImpact);
    setCodeGroups(codeGroups);
    
    // 3. Reverse traverse from code to architecture and design
    const allCodeNodes = codeImpact.flatMap(level => [...level.phoenix, ...level.apollo, ...level.voyager]);
    const architectureNodes = analysisEngine.reverseTraverseFromCode(allCodeNodes, 'architecture');
    const designNodes = analysisEngine.reverseTraverseFromCode(allCodeNodes, 'design');
    
    // Generate architecture and design comparisons
    const architectureGroups = generateReverseComparisons(architectureNodes, 'architecture');
    const designGroups = generateReverseComparisons(designNodes, 'design');
    
    setArchitectureGroups(architectureGroups);
    setDesignGroups(designGroups);
  }, [state.nodes, state.edges]);

  useEffect(() => {
    generateAllComparisons();
  }, [generateAllComparisons]);

  const generateLevelComparisons = (ontologyType: string, analysis: FunctionalOverlapAnalysis): ComponentGroup[] => {
    const overlappingGroups: ComponentGroup[] = [];
    const functionalLevels = ['persona', 'outcomes', 'scenarios', 'steps', 'actions'];
    
    // FOLLOW THE ALGORITHM: Start from overlapping nodes and traverse systematically
    const { overlappingNodes, deepestOverlapLevel, divergencePoint } = analysis.functionalBoundary;
    
    // Show systematic traversal through overlapping nodes only, level by level
    for (const level of functionalLevels) {
      // Get overlapping nodes at this level from the analysis
      const phoenixOverlapping = overlappingNodes.phoenix.filter(n => n.level === level);
      const apolloOverlapping = overlappingNodes.apollo.filter(n => n.level === level);
      const voyagerOverlapping = overlappingNodes.voyager.filter(n => n.level === level);
      
      // Only show this level if we have overlapping nodes OR if we've reached the divergence point
      const hasOverlapAtLevel = phoenixOverlapping.length > 0 && apolloOverlapping.length > 0 && voyagerOverlapping.length > 0;
      const isAtOrPastDeepestLevel = functionalLevels.indexOf(level) <= functionalLevels.indexOf(deepestOverlapLevel || 'persona');
      
      if (hasOverlapAtLevel || (isAtOrPastDeepestLevel && level === divergencePoint)) {
        // For overlapping levels, show the overlapping nodes
        if (hasOverlapAtLevel) {
          const phoenix = phoenixOverlapping[0];
          const apollo = apolloOverlapping[0];
          const voyager = voyagerOverlapping[0];

          const group: ComponentGroup = {
            level,
            phoenix,
            apollo,
            voyager,
            inconsistencies: [],
            connectedCodeNodes: {
              phoenix: findConnectedCodeNodes(phoenix.id),
              apollo: findConnectedCodeNodes(apollo.id),
              voyager: findConnectedCodeNodes(voyager.id)
            },
            allNodes: {
              phoenix: phoenixOverlapping,
              apollo: apolloOverlapping,
              voyager: voyagerOverlapping
            }
          };

          // Calculate similarity for overlapping nodes
          const similarity = (
            calculateSimilarity(phoenix.name, apollo.name) +
            calculateSimilarity(phoenix.name, voyager.name) +
            calculateSimilarity(apollo.name, voyager.name)
          ) / 3;
          
          (group as any).similarity = similarity;
          (group as any).isOverlap = true;
          
          overlappingGroups.push(group);
        }
        // For divergence point, show where the overlap stops
        else if (level === divergencePoint) {
          // Get all nodes at divergence level to show what caused the divergence
          const allFunctionalNodes = state.nodes.filter(node => node.type === 'functional');
          const phoenixNodes = allFunctionalNodes.filter(n => n.product === 'phoenix' && n.level === level);
          const apolloNodes = allFunctionalNodes.filter(n => n.product === 'apollo' && n.level === level);
          const voyagerNodes = allFunctionalNodes.filter(n => n.product === 'voyager' && n.level === level);

          const group: ComponentGroup = {
            level,
            phoenix: phoenixNodes[0],
            apollo: apolloNodes[0],
            voyager: voyagerNodes[0],
            inconsistencies: ['Products diverge at this level - no more overlap found'],
            allNodes: {
              phoenix: phoenixNodes,
              apollo: apolloNodes,
              voyager: voyagerNodes
            }
          };

          // Mark as divergence point
          (group as any).isDivergence = true;
          overlappingGroups.push(group);
          
          // Stop here - don't continue past divergence point
          break;
        }
      }
    }
    
    return overlappingGroups;
  };

  const generateCodeComparisons = (codeImpact: CodeImpactByLevel[]): ComponentGroup[] => {
    return codeImpact.map(level => ({
      level: level.level,
      phoenix: level.phoenix.length > 0 ? level.phoenix[0] : undefined,
      apollo: level.apollo.length > 0 ? level.apollo[0] : undefined,
      voyager: level.voyager.length > 0 ? level.voyager[0] : undefined,
      inconsistencies: level.hasOverlap ? [] : ['Not all products have code at this level'],
      allNodes: {
        phoenix: level.phoenix,
        apollo: level.apollo,
        voyager: level.voyager
      },
      totalNodes: level.phoenix.length + level.apollo.length + level.voyager.length
    }));
  };

  const generateReverseComparisons = (nodes: OntologyNode[], ontologyType: string): ComponentGroup[] => {
    const groupsByLevel = new Map<string, {phoenix: OntologyNode[], apollo: OntologyNode[], voyager: OntologyNode[]}>();
    
    nodes.forEach(node => {
      if (!groupsByLevel.has(node.level)) {
        groupsByLevel.set(node.level, {phoenix: [], apollo: [], voyager: []});
      }
      
      const levelGroup = groupsByLevel.get(node.level)!;
      if (node.product === 'phoenix') levelGroup.phoenix.push(node);
      else if (node.product === 'apollo') levelGroup.apollo.push(node);
      else if (node.product === 'voyager') levelGroup.voyager.push(node);
    });

    // Sort levels based on ontology type
    let sortedEntries;
    if (ontologyType === 'design') {
      // Design should go from atoms upward
      const designOrder = ['atoms', 'molecules', 'organisms', 'templates', 'pages', 'flows', 'user_journeys'];
      sortedEntries = Array.from(groupsByLevel.entries()).sort(([levelA], [levelB]) => {
        const indexA = designOrder.indexOf(levelA);
        const indexB = designOrder.indexOf(levelB);
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
      });
    } else if (ontologyType === 'architecture') {
      // Architecture should show services, layers, modules, then root at the end
      const architectureOrder = ['services', 'layers', 'modules', 'root'];
      sortedEntries = Array.from(groupsByLevel.entries()).sort(([levelA], [levelB]) => {
        const indexA = architectureOrder.indexOf(levelA);
        const indexB = architectureOrder.indexOf(levelB);
        return (indexA === -1 ? 999 : indexA) - (indexB === -1 ? 999 : indexB);
      });
    } else {
      // Default: natural order
      sortedEntries = Array.from(groupsByLevel.entries());
    }

    return sortedEntries.map(([level, levelNodes]) => ({
      level,
      phoenix: levelNodes.phoenix.length > 0 ? levelNodes.phoenix[0] : undefined,
      apollo: levelNodes.apollo.length > 0 ? levelNodes.apollo[0] : undefined, 
      voyager: levelNodes.voyager.length > 0 ? levelNodes.voyager[0] : undefined,
      inconsistencies: [],
      allNodes: levelNodes,
      totalNodes: levelNodes.phoenix.length + levelNodes.apollo.length + levelNodes.voyager.length
    }));
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const editDistance = levenshteinDistance(longer, shorter);
    return (longer.length - editDistance) / longer.length;
  };

  const levenshteinDistance = (str1: string, str2: string): number => {
    const matrix = Array(str2.length + 1).fill(null).map(() => Array(str1.length + 1).fill(null));
    
    for (let i = 0; i <= str1.length; i++) matrix[0][i] = i;
    for (let j = 0; j <= str2.length; j++) matrix[j][0] = j;
    
    for (let j = 1; j <= str2.length; j++) {
      for (let i = 1; i <= str1.length; i++) {
        const indicator = str1[i - 1] === str2[j - 1] ? 0 : 1;
        matrix[j][i] = Math.min(
          matrix[j][i - 1] + 1,
          matrix[j - 1][i] + 1,
          matrix[j - 1][i - 1] + indicator
        );
      }
    }
    
    return matrix[str2.length][str1.length];
  };


  const getProductColor = (product: string) => {
    const colors = {
      phoenix: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', accent: 'bg-red-500' },
      apollo: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', accent: 'bg-blue-500' },
      voyager: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', accent: 'bg-purple-500' }
    };
    return colors[product as keyof typeof colors] || colors.phoenix;
  };

  const formatPropertyValue = (value: any): string => {
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'object') return JSON.stringify(value, null, 2);
    return String(value);
  };


  const ComponentCard: React.FC<{ node?: OntologyNode; product: string }> = ({ node, product }) => {
    const colors = getProductColor(product);
    
    if (!node) {
      return (
        <div className={`${colors.bg} ${colors.border} border-2 border-dashed rounded-lg p-6 text-center`}>
          <div className="text-gray-400 text-4xl mb-2">∅</div>
          <p className="text-gray-500 text-sm">No {product} implementation</p>
        </div>
      );
    }

    return (
      <div className={`${colors.bg} ${colors.border} border-2 rounded-lg p-6`}>
        <div className="flex items-center mb-4">
          <div className={`w-3 h-3 ${colors.accent} rounded-full mr-2`}></div>
          <h3 className={`font-semibold ${colors.text} text-lg`}>{node.name}</h3>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{node.description}</p>
        
        {Object.keys(node.properties).length > 0 && (
          <div className="space-y-3">
            <h4 className="font-medium text-gray-800 text-sm">Properties:</h4>
            <div className="space-y-2">
              {Object.entries(node.properties).slice(0, 4).map(([key, value]) => (
                <div key={key} className="flex justify-between items-start">
                  <span className="text-xs font-medium text-gray-600 uppercase tracking-wide">
                    {key.replace('_', ' ')}:
                  </span>
                  <span className="text-xs text-gray-700 text-right ml-2 max-w-32 break-words">
                    {formatPropertyValue(value)}
                  </span>
                </div>
              ))}
              {Object.keys(node.properties).length > 4 && (
                <div className="text-xs text-gray-500 italic">
                  ... and {Object.keys(node.properties).length - 4} more properties
                </div>
              )}
            </div>
          </div>
        )}

        {node.inconsistencies && node.inconsistencies.length > 0 && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <div className="flex items-center mb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
              <span className="text-xs font-medium text-red-800">Issues Found</span>
            </div>
            <ul className="text-xs text-red-700 space-y-1">
              {node.inconsistencies.slice(0, 2).map((issue, idx) => (
                <li key={idx}>• {issue}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  };


  // Card components for different ontology types
  const FunctionalLevelCard: React.FC<{ group: ComponentGroup; index: number }> = ({ group, index }) => {
    const isOverlap = (group as any).isOverlap;
    const isDivergence = (group as any).isDivergence;
    
    let borderColor, bgColor, borderBgColor, statusText, statusColor;
    
    if (isOverlap) {
      borderColor = 'border-green-200';
      bgColor = 'bg-green-50';
      borderBgColor = 'border-green-200';
      statusText = '✓ Overlapping Nodes';
      statusColor = 'bg-green-100 text-green-700';
    } else if (isDivergence) {
      borderColor = 'border-red-200';
      bgColor = 'bg-red-50';
      borderBgColor = 'border-red-200';
      statusText = '⚠ Divergence Point';
      statusColor = 'bg-red-100 text-red-700';
    } else {
      borderColor = 'border-blue-200';
      bgColor = 'bg-blue-50';
      borderBgColor = 'border-blue-200';
      statusText = 'Analysis Level';
      statusColor = 'bg-blue-100 text-blue-700';
    }
    
    return (
      <div className={`mb-6 border ${borderColor} rounded-lg overflow-hidden`}>
        <div className={`${bgColor} px-4 py-3 border-b ${borderBgColor}`}>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-blue-900 capitalize">
              {group.level.replace('_', ' ')} Level {isOverlap ? '(Following Overlap Path)' : isDivergence ? '(Algorithm Stops Here)' : ''}
            </h4>
            <div className="flex items-center space-x-4">
              <span className={`text-xs px-2 py-1 rounded font-medium ${statusColor}`}>
                {statusText}
              </span>
              {(group as any).allNodes && (
                <span className="text-xs text-blue-600">
                  {isOverlap ? 'Overlapping:' : 'Available:'} P:{(group as any).allNodes.phoenix.length} A:{(group as any).allNodes.apollo.length} V:{(group as any).allNodes.voyager.length}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="p-4">
          <div className="grid md:grid-cols-3 gap-4">
            <ComponentCard node={group.phoenix} product="phoenix" />
            <ComponentCard node={group.apollo} product="apollo" />
            <ComponentCard node={group.voyager} product="voyager" />
          </div>
          
          {/* Show nodes at this level */}
          {(group as any).allNodes && (
            <div className="mt-4 border-t pt-4">
              <h5 className="text-sm font-semibold text-gray-900 mb-3">
                {isOverlap ? 'Overlapping Nodes (Used by Algorithm)' : isDivergence ? 'Divergent Nodes (Why Algorithm Stopped)' : 'Nodes at This Level'}
              </h5>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h6 className="text-xs font-medium text-red-700 mb-2">
                    Phoenix {isOverlap ? 'Overlapping' : 'Nodes'} ({(group as any).allNodes.phoenix.length})
                  </h6>
                  <div className="space-y-1">
                    {(group as any).allNodes.phoenix.slice(0, 4).map((node: OntologyNode, i: number) => (
                      <div key={i} className={`text-xs text-gray-600 px-2 py-1 rounded truncate border ${isOverlap ? 'bg-green-50 border-green-200' : isDivergence ? 'bg-red-50 border-red-200' : 'bg-red-50 border-red-200'}`}>
                        <div className="font-medium">{node.name}</div>
                        {isOverlap && <div className="text-xs text-green-600">✓ In overlap path</div>}
                      </div>
                    ))}
                    {(group as any).allNodes.phoenix.length > 4 && (
                      <div className="text-xs text-gray-500">...and {(group as any).allNodes.phoenix.length - 4} more</div>
                    )}
                  </div>
                </div>
                <div>
                  <h6 className="text-xs font-medium text-blue-700 mb-2">
                    Apollo {isOverlap ? 'Overlapping' : 'Nodes'} ({(group as any).allNodes.apollo.length})
                  </h6>
                  <div className="space-y-1">
                    {(group as any).allNodes.apollo.slice(0, 4).map((node: OntologyNode, i: number) => (
                      <div key={i} className={`text-xs text-gray-600 px-2 py-1 rounded truncate border ${isOverlap ? 'bg-green-50 border-green-200' : isDivergence ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'}`}>
                        <div className="font-medium">{node.name}</div>
                        {isOverlap && <div className="text-xs text-green-600">✓ In overlap path</div>}
                      </div>
                    ))}
                    {(group as any).allNodes.apollo.length > 4 && (
                      <div className="text-xs text-gray-500">...and {(group as any).allNodes.apollo.length - 4} more</div>
                    )}
                  </div>
                </div>
                <div>
                  <h6 className="text-xs font-medium text-purple-700 mb-2">
                    Voyager {isOverlap ? 'Overlapping' : 'Nodes'} ({(group as any).allNodes.voyager.length})
                  </h6>
                  <div className="space-y-1">
                    {(group as any).allNodes.voyager.slice(0, 4).map((node: OntologyNode, i: number) => (
                      <div key={i} className={`text-xs text-gray-600 px-2 py-1 rounded truncate border ${isOverlap ? 'bg-green-50 border-green-200' : isDivergence ? 'bg-red-50 border-red-200' : 'bg-purple-50 border-purple-200'}`}>
                        <div className="font-medium">{node.name}</div>
                        {isOverlap && <div className="text-xs text-green-600">✓ In overlap path</div>}
                      </div>
                    ))}
                    {(group as any).allNodes.voyager.length > 4 && (
                      <div className="text-xs text-gray-500">...and {(group as any).allNodes.voyager.length - 4} more</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {group.inconsistencies.length > 0 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h5 className="text-sm font-medium text-yellow-800 mb-2">Divergence Analysis:</h5>
              <ul className="text-sm text-yellow-700 space-y-1">
                {group.inconsistencies.map((issue, idx) => (
                  <li key={idx}>• {issue}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  const CodeLevelCard: React.FC<{ group: ComponentGroup; index: number }> = ({ group, index }) => (
    <div className="mb-6 border border-orange-200 rounded-lg overflow-hidden">
      <div className="bg-orange-50 px-4 py-3 border-b border-orange-200">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-orange-900 capitalize">
            {group.level.replace('_', ' ')} Level Code
          </h4>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-orange-600 font-medium">
              Total: {(group as any).totalNodes || 0} nodes
            </span>
            {(group as any).allNodes && (
              <span className="text-orange-600">
                (P:{(group as any).allNodes.phoenix.length} A:{(group as any).allNodes.apollo.length} V:{(group as any).allNodes.voyager.length})
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* Show all connected code nodes directly without arbitrary highlights */}
        {(group as any).allNodes && (
          <div>
            <h5 className="text-sm font-semibold text-gray-900 mb-3">All Impacted Code Nodes at {group.level.replace('_', ' ')} Level</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h6 className="text-xs font-medium text-red-700 mb-2">Phoenix ({(group as any).allNodes.phoenix.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.phoenix.length > 0 ? (
                    (group as any).allNodes.phoenix.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-red-50 px-2 py-1 rounded border border-red-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No code nodes at this level</div>
                  )}
                </div>
              </div>
              <div>
                <h6 className="text-xs font-medium text-blue-700 mb-2">Apollo ({(group as any).allNodes.apollo.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.apollo.length > 0 ? (
                    (group as any).allNodes.apollo.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No code nodes at this level</div>
                  )}
                </div>
              </div>
              <div>
                <h6 className="text-xs font-medium text-purple-700 mb-2">Voyager ({(group as any).allNodes.voyager.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.voyager.length > 0 ? (
                    (group as any).allNodes.voyager.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-purple-50 px-2 py-1 rounded border border-purple-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No code nodes at this level</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const ArchitectureLevelCard: React.FC<{ group: ComponentGroup; index: number }> = ({ group, index }) => (
    <div className="mb-6 border border-green-200 rounded-lg overflow-hidden">
      <div className="bg-green-50 px-4 py-3 border-b border-green-200">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-green-900 capitalize">
            {group.level.replace('_', ' ')} Architecture
          </h4>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-green-600 font-medium">
              Total: {(group as any).totalNodes || 0} nodes
            </span>
            {(group as any).allNodes && (
              <span className="text-green-600">
                (P:{(group as any).allNodes.phoenix.length} A:{(group as any).allNodes.apollo.length} V:{(group as any).allNodes.voyager.length})
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* Show all impacted architecture nodes directly */}
        {(group as any).allNodes && (
          <div>
            <h5 className="text-sm font-semibold text-gray-900 mb-3">All Impacted Architecture Nodes at {group.level.replace('_', ' ')} Level</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h6 className="text-xs font-medium text-red-700 mb-2">Phoenix ({(group as any).allNodes.phoenix.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.phoenix.length > 0 ? (
                    (group as any).allNodes.phoenix.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-red-50 px-2 py-1 rounded border border-red-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No architecture nodes at this level</div>
                  )}
                </div>
              </div>
              <div>
                <h6 className="text-xs font-medium text-blue-700 mb-2">Apollo ({(group as any).allNodes.apollo.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.apollo.length > 0 ? (
                    (group as any).allNodes.apollo.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No architecture nodes at this level</div>
                  )}
                </div>
              </div>
              <div>
                <h6 className="text-xs font-medium text-purple-700 mb-2">Voyager ({(group as any).allNodes.voyager.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.voyager.length > 0 ? (
                    (group as any).allNodes.voyager.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-purple-50 px-2 py-1 rounded border border-purple-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No architecture nodes at this level</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const DesignLevelCard: React.FC<{ group: ComponentGroup; index: number }> = ({ group, index }) => (
    <div className="mb-6 border border-purple-200 rounded-lg overflow-hidden">
      <div className="bg-purple-50 px-4 py-3 border-b border-purple-200">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-purple-900 capitalize">
            {group.level.replace('_', ' ')} Design
          </h4>
          <div className="flex items-center space-x-2 text-sm">
            <span className="text-purple-600 font-medium">
              Total: {(group as any).totalNodes || 0} nodes
            </span>
            {(group as any).allNodes && (
              <span className="text-purple-600">
                (P:{(group as any).allNodes.phoenix.length} A:{(group as any).allNodes.apollo.length} V:{(group as any).allNodes.voyager.length})
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* Show all impacted design nodes directly */}
        {(group as any).allNodes && (
          <div>
            <h5 className="text-sm font-semibold text-gray-900 mb-3">All Impacted Design Nodes at {group.level.replace('_', ' ')} Level</h5>
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <h6 className="text-xs font-medium text-red-700 mb-2">Phoenix ({(group as any).allNodes.phoenix.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.phoenix.length > 0 ? (
                    (group as any).allNodes.phoenix.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-red-50 px-2 py-1 rounded border border-red-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No design nodes at this level</div>
                  )}
                </div>
              </div>
              <div>
                <h6 className="text-xs font-medium text-blue-700 mb-2">Apollo ({(group as any).allNodes.apollo.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.apollo.length > 0 ? (
                    (group as any).allNodes.apollo.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-blue-50 px-2 py-1 rounded border border-blue-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No design nodes at this level</div>
                  )}
                </div>
              </div>
              <div>
                <h6 className="text-xs font-medium text-purple-700 mb-2">Voyager ({(group as any).allNodes.voyager.length} nodes)</h6>
                <div className="space-y-1 max-h-48 overflow-y-auto">
                  {(group as any).allNodes.voyager.length > 0 ? (
                    (group as any).allNodes.voyager.map((node: OntologyNode, i: number) => (
                      <div key={i} className="text-xs text-gray-600 bg-purple-50 px-2 py-1 rounded border border-purple-200">
                        <div className="font-medium">{node.name}</div>
                        <div className="text-gray-500 text-xs truncate">{node.description}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-xs text-gray-400 italic">No design nodes at this level</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <AppHeader />
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Graph Overlap Comparator</h2>
          <p className="text-gray-600 text-sm mt-1">
            {overlapAnalysis ? (
              <>
                Functional → Code → Architecture/Design • 
                Deepest overlap: <span className="font-medium text-blue-600">{overlapAnalysis.functionalBoundary.deepestOverlapLevel}</span> • 
                {overlapAnalysis.functionalBoundary.divergencePoint && (
                  <> Divergence at: <span className="font-medium text-orange-600">{overlapAnalysis.functionalBoundary.divergencePoint}</span></>
                )}
              </>
            ) : (
              'Algorithmic progression from functional overlap through code to architectural impact'
            )}
          </p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analysis Flow Indicator */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Analysis Flow Progression</h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <span className="ml-2 font-medium text-blue-800">Functional Overlap</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <span className="ml-2 font-medium text-orange-800">Code Impact</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <span className="ml-2 font-medium text-green-800">Architecture Impact</span>
            </div>
            <div className="text-gray-400">→</div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <span className="ml-2 font-medium text-purple-800">Design Impact</span>
            </div>
          </div>
        </div>

        {/* Advanced Analysis Results */}
        {overlapAnalysis && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Algorithm Analysis Results</h2>
              <button
                onClick={() => setShowAdvancedAnalysis(!showAdvancedAnalysis)}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                {showAdvancedAnalysis ? 'Hide Algorithm Details' : 'Show Algorithm Details'}
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 capitalize">
                  Persona
                </div>
                <div className="text-sm text-gray-600">Starting Overlap</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 capitalize">
                  {overlapAnalysis.functionalBoundary.deepestOverlapLevel || 'None'}
                </div>
                <div className="text-sm text-gray-600">Deepest Overlap</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 capitalize">
                  {overlapAnalysis.functionalBoundary.divergencePoint || 'None'}
                </div>
                <div className="text-sm text-gray-600">Divergence Point</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">
                  {codeGroups.length}
                </div>
                <div className="text-sm text-gray-600">Code Levels</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">
                  {architectureGroups.length + designGroups.length}
                </div>
                <div className="text-sm text-gray-600">Arch/Design Impact</div>
              </div>
            </div>

            {showAdvancedAnalysis && (
              <div className="space-y-4">
                {overlapAnalysis.implementationDivergence.length > 0 && (
                  <div className="border-t pt-4">
                    <h3 className="text-md font-medium text-gray-900 mb-3">Implementation Divergence Analysis</h3>
                    {overlapAnalysis.implementationDivergence.map((divergence, idx) => (
                      <div key={idx} className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-yellow-800 capitalize">
                            {divergence.level} Level Divergence
                          </h4>
                          <span className="text-sm text-yellow-600">{divergence.divergenceReason}</span>
                        </div>
                        <div className="grid md:grid-cols-3 gap-3 text-sm">
                          <div>
                            <div className="font-medium text-red-700">Phoenix Approach ({divergence.phoenixApproach.length})</div>
                            <div className="text-gray-600">
                              {divergence.phoenixApproach.map(n => n.name).join(', ') || 'No implementation'}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-blue-700">Apollo Approach ({divergence.apolloApproach.length})</div>
                            <div className="text-gray-600">
                              {divergence.apolloApproach.map(n => n.name).join(', ') || 'No implementation'}
                            </div>
                          </div>
                          <div>
                            <div className="font-medium text-purple-700">Voyager Approach ({divergence.voyagerApproach.length})</div>
                            <div className="text-gray-600">
                              {divergence.voyagerApproach.map(n => n.name).join(', ') || 'No implementation'}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Step 1: Functional Overlap Analysis */}
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-3">1</div>
                <div>
                  <h2 className="text-xl font-semibold text-blue-900">Functional Overlap Analysis</h2>
                  <p className="text-blue-700 text-sm">Starting with functional ontology to identify shared goals</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {functionalGroups.map((group, index) => (
                <FunctionalLevelCard key={`functional-${group.level}-${index}`} group={group} index={index} />
              ))}
            </div>
          </div>

          {/* Step 2: Code Impact Analysis */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">2</div>
                <div>
                  <h2 className="text-xl font-semibold text-orange-900">Code Impact Analysis</h2>
                  <p className="text-orange-700 text-sm">Connected code nodes from overlapping functional areas</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {codeGroups.map((group, index) => (
                <CodeLevelCard key={`code-${group.level}-${index}`} group={group} index={index} />
              ))}
            </div>
          </div>

          {/* Step 3: Architecture Impact Analysis */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-green-50 px-6 py-4 border-b border-green-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">3</div>
                <div>
                  <h2 className="text-xl font-semibold text-green-900">Architecture Impact Analysis</h2>
                  <p className="text-green-700 text-sm">Reverse traversal from code to architectural components</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {architectureGroups.length > 0 ? (
                architectureGroups.map((group, index) => (
                  <ArchitectureLevelCard key={`arch-${group.level}-${index}`} group={group} index={index} />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">🏗️</div>
                  <p>No architecture components connected to overlapping code</p>
                </div>
              )}
            </div>
          </div>

          {/* Step 4: Design Impact Analysis */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-purple-50 px-6 py-4 border-b border-purple-200">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-3">4</div>
                <div>
                  <h2 className="text-xl font-semibold text-purple-900">Design Impact Analysis</h2>
                  <p className="text-purple-700 text-sm">Reverse traversal from code to design components</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              {designGroups.length > 0 ? (
                designGroups.map((group, index) => (
                  <DesignLevelCard key={`design-${group.level}-${index}`} group={group} index={index} />
                ))
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">🎨</div>
                  <p>No design components connected to overlapping code</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Empty state - shown if no analysis available */}
        {!overlapAnalysis && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span className="text-gray-400 text-2xl">🔍</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis Loading...</h3>
            <p className="text-gray-600">
              Performing comprehensive overlap analysis across all four ontologies.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ComponentComparator;