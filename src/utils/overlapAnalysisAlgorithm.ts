import { OntologyNode, OntologyEdge } from '../types/ontology';

export interface FunctionalOverlapAnalysis {
  functionalBoundary: {
    deepestOverlapLevel: string;
    overlappingNodes: {
      phoenix: OntologyNode[];
      apollo: OntologyNode[];  
      voyager: OntologyNode[];
    };
    divergencePoint: string; // Level where overlap stops
  };
  implementationDivergence: {
    level: string;
    phoenixApproach: OntologyNode[];
    apolloApproach: OntologyNode[];
    voyagerApproach: OntologyNode[];
    divergenceReason: string;
  }[];
  reverseTraversalBasis: OntologyNode[]; // Nodes to use for arch/design impact
}

export interface CodeImpactByLevel {
  level: string;
  phoenix: OntologyNode[];
  apollo: OntologyNode[];
  voyager: OntologyNode[];
  hasOverlap: boolean;
}

/**
 * Advanced Overlap Analysis Algorithm
 * 
 * This algorithm identifies:
 * 1. The deepest level where functional overlap exists
 * 2. Where and why products diverge in implementation
 * 3. The correct nodes to use for reverse traversal
 */
export class OverlapAnalysisEngine {
  private nodes: OntologyNode[];
  private edges: OntologyEdge[];
  
  constructor(nodes: OntologyNode[], edges: OntologyEdge[]) {
    this.nodes = nodes;
    this.edges = edges;
  }

  /**
   * Find functional overlap and identify where products diverge
   */
  analyzeFunctionalOverlap(ontologyType: string): FunctionalOverlapAnalysis {
    const functionalLevels = ['persona', 'outcomes', 'scenarios', 'steps', 'actions'];
    const ontologyNodes = this.nodes.filter(node => node.type === ontologyType);
    
    let deepestOverlapLevel = '';
    let overlappingNodes: { phoenix: OntologyNode[], apollo: OntologyNode[], voyager: OntologyNode[] } = { phoenix: [], apollo: [], voyager: [] };
    let divergencePoint = '';
    const implementationDivergence: {
      level: string;
      phoenixApproach: OntologyNode[];
      apolloApproach: OntologyNode[];
      voyagerApproach: OntologyNode[];
      divergenceReason: string;
    }[] = [];

    // Traverse from top to bottom to find deepest overlap
    // ACCUMULATE overlapping nodes at each level, not overwrite them
    for (const level of functionalLevels) {
      const levelAnalysis = this.analyzeLevelOverlap(ontologyNodes, level);
      
      if (levelAnalysis.hasOverlap) {
        deepestOverlapLevel = level;
        // ACCUMULATE overlapping nodes from all levels, not just the current one
        overlappingNodes.phoenix.push(...levelAnalysis.overlappingNodes.phoenix);
        overlappingNodes.apollo.push(...levelAnalysis.overlappingNodes.apollo);
        overlappingNodes.voyager.push(...levelAnalysis.overlappingNodes.voyager);
      } else if (deepestOverlapLevel && !divergencePoint) {
        // Found the divergence point
        divergencePoint = level;
        implementationDivergence.push({
          level,
          phoenixApproach: levelAnalysis.phoenixNodes,
          apolloApproach: levelAnalysis.apolloNodes,
          voyagerApproach: levelAnalysis.voyagerNodes,
          divergenceReason: this.analyzeDivergenceReason(levelAnalysis)
        });
        break;
      }
    }

    // Use the deepest overlapping nodes for reverse traversal
    const reverseTraversalBasis = [
      ...overlappingNodes.phoenix,
      ...overlappingNodes.apollo,
      ...overlappingNodes.voyager
    ];

    return {
      functionalBoundary: {
        deepestOverlapLevel,
        overlappingNodes,
        divergencePoint
      },
      implementationDivergence,
      reverseTraversalBasis
    };
  }

  /**
   * Analyze overlap at a specific functional level
   */
  private analyzeLevelOverlap(ontologyNodes: OntologyNode[], level: string) {
    const phoenixNodes = ontologyNodes.filter(n => n.product === 'phoenix' && n.level === level);
    const apolloNodes = ontologyNodes.filter(n => n.product === 'apollo' && n.level === level);
    const voyagerNodes = ontologyNodes.filter(n => n.product === 'voyager' && n.level === level);

    // Need nodes in all three products to have potential overlap
    if (phoenixNodes.length === 0 || apolloNodes.length === 0 || voyagerNodes.length === 0) {
      return {
        hasOverlap: false,
        phoenixNodes,
        apolloNodes,
        voyagerNodes,
        overlappingNodes: { phoenix: [], apollo: [], voyager: [] }
      };
    }

    // Find best matches across products
    const overlappingGroups: { phoenix: OntologyNode, apollo: OntologyNode, voyager: OntologyNode }[] = [];
    
    phoenixNodes.forEach(phoenix => {
      const bestApollo = this.findBestMatch(phoenix, apolloNodes);
      if (bestApollo) {
        const bestVoyager = this.findBestMatch(phoenix, voyagerNodes, bestApollo);
        if (bestVoyager) {
          const avgSimilarity = this.calculateTripleSimilarity(phoenix, bestApollo, bestVoyager);
          if (avgSimilarity > 0.3) {
            overlappingGroups.push({ phoenix, apollo: bestApollo, voyager: bestVoyager });
          }
        }
      }
    });

    return {
      hasOverlap: overlappingGroups.length > 0,
      phoenixNodes,
      apolloNodes, 
      voyagerNodes,
      overlappingNodes: {
        phoenix: overlappingGroups.map(g => g.phoenix),
        apollo: overlappingGroups.map(g => g.apollo),
        voyager: overlappingGroups.map(g => g.voyager)
      }
    };
  }

  /**
   * Find connected code nodes from a set of functional nodes
   */
  findConnectedCodeNodes(functionalNodes: OntologyNode[]): CodeImpactByLevel[] {
    const codeImpactMap = new Map<string, {phoenix: OntologyNode[], apollo: OntologyNode[], voyager: OntologyNode[]}>();

    functionalNodes.forEach(funcNode => {
      const connectedCode = this.traverseToCode(funcNode.id);
      connectedCode.forEach(codeNode => {
        if (!codeImpactMap.has(codeNode.level)) {
          codeImpactMap.set(codeNode.level, {phoenix: [], apollo: [], voyager: []});
        }
        
        const levelImpact = codeImpactMap.get(codeNode.level)!;
        if (codeNode.product === 'phoenix' && !levelImpact.phoenix.find(n => n.id === codeNode.id)) {
          levelImpact.phoenix.push(codeNode);
        } else if (codeNode.product === 'apollo' && !levelImpact.apollo.find(n => n.id === codeNode.id)) {
          levelImpact.apollo.push(codeNode);  
        } else if (codeNode.product === 'voyager' && !levelImpact.voyager.find(n => n.id === codeNode.id)) {
          levelImpact.voyager.push(codeNode);
        }
      });
    });

    return Array.from(codeImpactMap.entries()).map(([level, impact]) => ({
      level,
      ...impact,
      hasOverlap: impact.phoenix.length > 0 && impact.apollo.length > 0 && impact.voyager.length > 0
    }));
  }

  /**
   * Traverse from functional node to connected code nodes
   */
  private traverseToCode(nodeId: string): OntologyNode[] {
    const codeNodes: OntologyNode[] = [];
    const visited = new Set<string>();
    const queue = [nodeId];

    while (queue.length > 0) {
      const currentId = queue.shift()!;
      if (visited.has(currentId)) continue;
      visited.add(currentId);

      const outgoingEdges = this.edges.filter(edge => edge.source === currentId);
      
      outgoingEdges.forEach(edge => {
        const targetNode = this.nodes.find(n => n.id === edge.target);
        if (targetNode && !visited.has(targetNode.id)) {
          if (targetNode.type === 'code') {
            codeNodes.push(targetNode);
          }
          queue.push(targetNode.id);
        }
      });
    }

    return codeNodes;
  }

  /**
   * Find nodes connected to code nodes via reverse traversal (for arch/design impact)
   */
  reverseTraverseFromCode(codeNodes: OntologyNode[], targetType: 'architecture' | 'design'): OntologyNode[] {
    const impactedNodes: OntologyNode[] = [];
    const visited = new Set<string>();

    codeNodes.forEach(codeNode => {
      const queue = [codeNode.id];
      
      while (queue.length > 0) {
        const currentId = queue.shift()!;
        if (visited.has(currentId)) continue;
        visited.add(currentId);

        // Find incoming edges (reverse traversal)
        const incomingEdges = this.edges.filter(edge => edge.target === currentId);
        
        incomingEdges.forEach(edge => {
          const sourceNode = this.nodes.find(n => n.id === edge.source);
          if (sourceNode && !visited.has(sourceNode.id)) {
            if (sourceNode.type === targetType) {
              if (!impactedNodes.find(n => n.id === sourceNode.id)) {
                impactedNodes.push(sourceNode);
              }
            }
            queue.push(sourceNode.id);
          }
        });
      }
    });

    return impactedNodes;
  }

  // Helper methods
  private findBestMatch(baseNode: OntologyNode, candidates: OntologyNode[], secondaryMatch?: OntologyNode): OntologyNode | null {
    if (candidates.length === 0) return null;
    
    let bestMatch = candidates[0];
    let bestSimilarity = this.calculateSimilarity(baseNode, bestMatch);
    
    if (secondaryMatch) {
      bestSimilarity = (bestSimilarity + this.calculateSimilarity(secondaryMatch, bestMatch)) / 2;
    }

    candidates.forEach(candidate => {
      let similarity = this.calculateSimilarity(baseNode, candidate);
      if (secondaryMatch) {
        similarity = (similarity + this.calculateSimilarity(secondaryMatch, candidate)) / 2;
      }
      
      if (similarity > bestSimilarity) {
        bestMatch = candidate;
        bestSimilarity = similarity;
      }
    });

    return bestSimilarity > 0.3 ? bestMatch : null;
  }

  private calculateSimilarity(node1: OntologyNode, node2: OntologyNode): number {
    const nameSim = this.stringSimilarity(node1.name, node2.name);
    const descSim = this.stringSimilarity(node1.description, node2.description);
    return Math.max(nameSim, descSim);
  }

  private calculateTripleSimilarity(n1: OntologyNode, n2: OntologyNode, n3: OntologyNode): number {
    return (
      this.calculateSimilarity(n1, n2) +
      this.calculateSimilarity(n1, n3) +
      this.calculateSimilarity(n2, n3)
    ) / 3;
  }

  private stringSimilarity(str1: string, str2: string): number {
    const words1 = str1.toLowerCase().split(/\s+/);
    const words2 = str2.toLowerCase().split(/\s+/);
    const intersection = words1.filter(word => words2.includes(word));
    const union = Array.from(new Set([...words1, ...words2]));
    return union.length > 0 ? intersection.length / union.length : 0;
  }

  private analyzeDivergenceReason(levelAnalysis: any): string {
    const { phoenixNodes, apolloNodes, voyagerNodes } = levelAnalysis;
    
    if (phoenixNodes.length === 0) return "Phoenix has no implementation at this level";
    if (apolloNodes.length === 0) return "Apollo has no implementation at this level";
    if (voyagerNodes.length === 0) return "Voyager has no implementation at this level";
    
    return "Products use different implementation approaches at this level";
  }
}