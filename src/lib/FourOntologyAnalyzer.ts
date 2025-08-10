/**
 * FourOntologyAnalyzer
 * Specialized analysis functions for the four-ontology framework
 */

import FourOntologyGraph, { OntologyType, PathAnalysis, ProductId } from './FourOntologyGraph';
import { OntologyNode, OntologyEdge } from '../types/ontology';

export interface RationalizationCandidate {
  functionalOverlap: OntologyNode[];
  designDivergence: OntologyNode[];
  codeRedundancy: OntologyNode[];
  unificationPotential: number;
  estimatedEffort: 'low' | 'medium' | 'high';
  recommendations: string[];
}

export interface OntologyAlignment {
  aligned: boolean;
  misalignments: {
    source: OntologyNode;
    expectedTarget: OntologyType;
    actualTargets: OntologyNode[];
    issue: string;
  }[];
}

export interface ComplexityMetrics {
  functionalComplexity: number;
  designComplexity: number;
  architecturalComplexity: number;
  codeComplexity: number;
  overallComplexity: number;
  hotspots: OntologyNode[];
}

export interface DependencyAnalysis {
  directDependencies: Map<string, Set<string>>;
  transitiveDependencies: Map<string, Set<string>>;
  circularDependencies: string[][];
  criticalPath: OntologyNode[];
}

export class FourOntologyAnalyzer {
  private graph: FourOntologyGraph;

  constructor(graph: FourOntologyGraph) {
    this.graph = graph;
  }

  // ============ Rationalization Analysis ============

  findRationalizationCandidates(products: ProductId[]): RationalizationCandidate[] {
    const candidates: RationalizationCandidate[] = [];
    const overlapAnalysis = this.graph.analyzeOverlap(products);
    
    // Group overlapping nodes by functional area
    const functionalGroups = this.groupNodesByFunctionalArea(overlapAnalysis.overlappingNodes);
    
    functionalGroups.forEach((nodes, area) => {
      // Find design divergence
      const designNodes = this.findConnectedNodes(nodes, 'design');
      const designDivergence = this.analyzeDivergence(designNodes);
      
      // Find code redundancy
      const codeNodes = this.findConnectedNodes(nodes, 'code');
      const codeRedundancy = this.analyzeRedundancy(codeNodes);
      
      // Calculate unification potential
      const unificationPotential = this.calculateUnificationPotential(
        nodes,
        designDivergence,
        codeRedundancy
      );
      
      // Estimate effort
      const estimatedEffort = this.estimateRationalizationEffort(
        designDivergence.length,
        codeRedundancy.length
      );
      
      // Generate recommendations
      const recommendations = this.generateRationalizationRecommendations(
        area,
        nodes,
        designDivergence,
        codeRedundancy
      );
      
      candidates.push({
        functionalOverlap: nodes,
        designDivergence,
        codeRedundancy,
        unificationPotential,
        estimatedEffort,
        recommendations
      });
    });
    
    // Sort by unification potential
    return candidates.sort((a, b) => b.unificationPotential - a.unificationPotential);
  }

  private groupNodesByFunctionalArea(nodes: OntologyNode[]): Map<string, OntologyNode[]> {
    const groups = new Map<string, OntologyNode[]>();
    
    for (const node of nodes) {
      if (node.type === 'functional') {
        const area = node.level; // Use level as functional area
        if (!groups.has(area)) {
          groups.set(area, []);
        }
        groups.get(area)!.push(node);
      }
    }
    
    return groups;
  }

  private findConnectedNodes(sourceNodes: OntologyNode[], targetOntology: OntologyType): OntologyNode[] {
    const connectedNodes = new Set<OntologyNode>();
    
    for (const sourceNode of sourceNodes) {
      const traversed = this.graph.traverseFromNode(sourceNode.id, {
        direction: 'forward',
        maxDepth: 5,
        nodeFilter: node => node.type === targetOntology
      });
      
      traversed.forEach(node => connectedNodes.add(node));
    }
    
    return Array.from(connectedNodes);
  }

  private analyzeDivergence(nodes: OntologyNode[]): OntologyNode[] {
    const divergentNodes: OntologyNode[] = [];
    const nodesByProduct = new Map<string, OntologyNode[]>();
    
    // Group by product
    for (const node of nodes) {
      if (!nodesByProduct.has(node.product)) {
        nodesByProduct.set(node.product, []);
      }
      nodesByProduct.get(node.product)!.push(node);
    }
    
    // Find nodes that are significantly different
    const products = Array.from(nodesByProduct.keys());
    if (products.length <= 1) return [];
    
    nodesByProduct.forEach((productNodes, product) => {
      for (const node of productNodes) {
        let isDivergent = true;
        
        // Check if similar nodes exist in other products
        for (const otherProduct of products) {
          if (otherProduct === product) continue;
          
          const otherNodes = nodesByProduct.get(otherProduct) || [];
          const hasSimilar = otherNodes.some(other => 
            this.calculateSimilarity(node, other) > 0.7
          );
          
          if (hasSimilar) {
            isDivergent = false;
            break;
          }
        }
        
        if (isDivergent) {
          divergentNodes.push(node);
        }
      }
    });
    
    return divergentNodes;
  }

  private analyzeRedundancy(nodes: OntologyNode[]): OntologyNode[] {
    const redundantNodes: OntologyNode[] = [];
    const processed = new Set<string>();
    
    for (let i = 0; i < nodes.length; i++) {
      if (processed.has(nodes[i].id)) continue;
      
      const redundantGroup: OntologyNode[] = [nodes[i]];
      processed.add(nodes[i].id);
      
      for (let j = i + 1; j < nodes.length; j++) {
        if (processed.has(nodes[j].id)) continue;
        
        const similarity = this.calculateSimilarity(nodes[i], nodes[j]);
        if (similarity > 0.8) { // High similarity threshold for redundancy
          redundantGroup.push(nodes[j]);
          processed.add(nodes[j].id);
        }
      }
      
      if (redundantGroup.length > 1) {
        redundantNodes.push(...redundantGroup);
      }
    }
    
    return redundantNodes;
  }

  private calculateSimilarity(node1: OntologyNode, node2: OntologyNode): number {
    if (node1.type !== node2.type || node1.level !== node2.level) return 0;
    
    // Calculate name similarity
    const name1 = node1.name.toLowerCase();
    const name2 = node2.name.toLowerCase();
    
    // Levenshtein distance normalized
    const distance = this.levenshteinDistance(name1, name2);
    const maxLength = Math.max(name1.length, name2.length);
    const nameSimilarity = 1 - (distance / maxLength);
    
    // Calculate property similarity
    const props1 = Object.keys(node1.properties);
    const props2 = Object.keys(node2.properties);
    const commonProps = props1.filter(p => props2.includes(p));
    const propSimilarity = commonProps.length / Math.max(props1.length, props2.length);
    
    // Weighted average
    return nameSimilarity * 0.7 + propSimilarity * 0.3;
  }

  private levenshteinDistance(str1: string, str2: string): number {
    const matrix: number[][] = [];
    
    for (let i = 0; i <= str2.length; i++) {
      matrix[i] = [i];
    }
    
    for (let j = 0; j <= str1.length; j++) {
      matrix[0][j] = j;
    }
    
    for (let i = 1; i <= str2.length; i++) {
      for (let j = 1; j <= str1.length; j++) {
        if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    
    return matrix[str2.length][str1.length];
  }

  private calculateUnificationPotential(
    functionalNodes: OntologyNode[],
    designDivergence: OntologyNode[],
    codeRedundancy: OntologyNode[]
  ): number {
    const functionalOverlapScore = functionalNodes.length * 10;
    const divergencePenalty = designDivergence.length * 5;
    const redundancyBonus = codeRedundancy.length * 3;
    
    const potential = functionalOverlapScore - divergencePenalty + redundancyBonus;
    
    // Normalize to 0-100 scale
    return Math.min(100, Math.max(0, potential));
  }

  private estimateRationalizationEffort(
    divergenceCount: number,
    redundancyCount: number
  ): 'low' | 'medium' | 'high' {
    const complexity = divergenceCount * 2 + redundancyCount;
    
    if (complexity < 10) return 'low';
    if (complexity < 30) return 'medium';
    return 'high';
  }

  private generateRationalizationRecommendations(
    area: string,
    functionalNodes: OntologyNode[],
    designDivergence: OntologyNode[],
    codeRedundancy: OntologyNode[]
  ): string[] {
    const recommendations: string[] = [];
    
    if (functionalNodes.length > 2) {
      recommendations.push(
        `Consolidate ${functionalNodes.length} overlapping functional components in ${area} area`
      );
    }
    
    if (designDivergence.length > 0) {
      recommendations.push(
        `Standardize ${designDivergence.length} divergent design patterns to unified design system`
      );
    }
    
    if (codeRedundancy.length > 3) {
      recommendations.push(
        `Extract ${Math.floor(codeRedundancy.length / 2)} shared code modules from redundant implementations`
      );
    }
    
    if (codeRedundancy.length > 0 && designDivergence.length === 0) {
      recommendations.push(
        'Create shared component library for common functionality'
      );
    }
    
    return recommendations;
  }

  // ============ Alignment Analysis ============

  checkOntologyAlignment(): OntologyAlignment {
    const misalignments: OntologyAlignment['misalignments'] = [];
    
    // Check functional -> design alignment
    const functionalNodes = this.graph.getNodesByOntology('functional');
    for (const funcNode of functionalNodes) {
      const designNodes = this.graph.traverseFromNode(funcNode.id, {
        direction: 'forward',
        maxDepth: 3,
        nodeFilter: n => n.type === 'design'
      });
      
      if (designNodes.length === 0) {
        misalignments.push({
          source: funcNode,
          expectedTarget: 'design',
          actualTargets: [],
          issue: 'Functional requirement lacks design specification'
        });
      }
    }
    
    // Check design -> code alignment
    const designNodes = this.graph.getNodesByOntology('design');
    for (const designNode of designNodes) {
      const codeNodes = this.graph.traverseFromNode(designNode.id, {
        direction: 'forward',
        maxDepth: 3,
        nodeFilter: n => n.type === 'code'
      });
      
      if (codeNodes.length === 0) {
        misalignments.push({
          source: designNode,
          expectedTarget: 'code',
          actualTargets: [],
          issue: 'Design component lacks code implementation'
        });
      }
    }
    
    // Check architecture -> code alignment
    const archNodes = this.graph.getNodesByOntology('architecture');
    for (const archNode of archNodes) {
      const codeNodes = this.graph.traverseFromNode(archNode.id, {
        direction: 'forward',
        maxDepth: 3,
        nodeFilter: n => n.type === 'code'
      });
      
      if (codeNodes.length === 0 && archNode.level !== 'root') {
        misalignments.push({
          source: archNode,
          expectedTarget: 'code',
          actualTargets: [],
          issue: 'Architecture component lacks code implementation'
        });
      }
    }
    
    return {
      aligned: misalignments.length === 0,
      misalignments
    };
  }

  // ============ Complexity Analysis ============

  calculateComplexity(): ComplexityMetrics {
    const metrics = this.graph.calculateMetrics();
    
    // Calculate complexity for each ontology
    const functionalComplexity = this.calculateOntologyComplexity('functional');
    const designComplexity = this.calculateOntologyComplexity('design');
    const architecturalComplexity = this.calculateOntologyComplexity('architecture');
    const codeComplexity = this.calculateOntologyComplexity('code');
    
    // Overall complexity
    const overallComplexity = (
      functionalComplexity * 0.2 +
      designComplexity * 0.2 +
      architecturalComplexity * 0.3 +
      codeComplexity * 0.3
    );
    
    // Find hotspots (highly connected nodes)
    const hotspots = this.findComplexityHotspots();
    
    return {
      functionalComplexity,
      designComplexity,
      architecturalComplexity,
      codeComplexity,
      overallComplexity,
      hotspots
    };
  }

  private calculateOntologyComplexity(ontology: OntologyType): number {
    const nodes = this.graph.getNodesByOntology(ontology);
    if (nodes.length === 0) return 0;
    
    let totalComplexity = 0;
    
    for (const node of nodes) {
      // Calculate node complexity based on connections
      const outgoing = this.graph.traverseFromNode(node.id, {
        direction: 'forward',
        maxDepth: 1
      }).length - 1; // Subtract self
      
      const incoming = this.graph.traverseFromNode(node.id, {
        direction: 'backward',
        maxDepth: 1
      }).length - 1; // Subtract self
      
      const nodeComplexity = Math.log2(1 + outgoing + incoming);
      totalComplexity += nodeComplexity;
    }
    
    // Normalize by node count
    return totalComplexity / nodes.length;
  }

  private findComplexityHotspots(): OntologyNode[] {
    const nodes = this.graph.findNodes(() => true); // Get all nodes
    const nodeScores = new Map<string, number>();
    
    for (const node of nodes) {
      const connections = this.graph.traverseFromNode(node.id, {
        direction: 'both',
        maxDepth: 1
      }).length - 1; // Subtract self
      
      nodeScores.set(node.id, connections);
    }
    
    // Find nodes with connections > 75th percentile
    const scores = Array.from(nodeScores.values()).sort((a, b) => a - b);
    const percentile75 = scores[Math.floor(scores.length * 0.75)];
    
    return nodes.filter(node => {
      const score = nodeScores.get(node.id) || 0;
      return score >= percentile75;
    });
  }

  // ============ Dependency Analysis ============

  analyzeDependencies(): DependencyAnalysis {
    const directDependencies = new Map<string, Set<string>>();
    const transitiveDependencies = new Map<string, Set<string>>();
    
    // Calculate direct dependencies
    const nodes = this.graph.findNodes(() => true);
    for (const node of nodes) {
      const direct = this.graph.traverseFromNode(node.id, {
        direction: 'forward',
        maxDepth: 1
      }).filter(n => n.id !== node.id);
      
      directDependencies.set(node.id, new Set(direct.map(n => n.id)));
    }
    
    // Calculate transitive dependencies
    for (const node of nodes) {
      const transitive = this.graph.traverseFromNode(node.id, {
        direction: 'forward'
      }).filter(n => n.id !== node.id);
      
      transitiveDependencies.set(node.id, new Set(transitive.map(n => n.id)));
    }
    
    // Find circular dependencies
    const circularDependencies = this.findCircularDependencies(directDependencies);
    
    // Find critical path
    const criticalPath = this.findCriticalPath();
    
    return {
      directDependencies,
      transitiveDependencies,
      circularDependencies,
      criticalPath
    };
  }

  private findCircularDependencies(dependencies: Map<string, Set<string>>): string[][] {
    const cycles: string[][] = [];
    const visited = new Set<string>();
    const recursionStack = new Set<string>();
    
    const dfs = (nodeId: string, path: string[]): void => {
      visited.add(nodeId);
      recursionStack.add(nodeId);
      path.push(nodeId);
      
      const neighbors = dependencies.get(nodeId) || new Set();
      neighbors.forEach(neighborId => {
        if (!visited.has(neighborId)) {
          dfs(neighborId, [...path]);
        } else if (recursionStack.has(neighborId)) {
          // Found a cycle
          const cycleStart = path.indexOf(neighborId);
          if (cycleStart !== -1) {
            const cycle = path.slice(cycleStart);
            cycle.push(neighborId); // Complete the cycle
            cycles.push(cycle);
          }
        }
      });
      
      recursionStack.delete(nodeId);
    };
    
    dependencies.forEach((_, nodeId) => {
      if (!visited.has(nodeId)) {
        dfs(nodeId, []);
      }
    });
    
    return cycles;
  }

  private findCriticalPath(): OntologyNode[] {
    // Find the longest path in the graph (simplified version)
    const functionalNodes = this.graph.getNodesByOntology('functional')
      .filter(n => n.level === 'persona' || n.level === 'outcomes');
    
    let longestPath: OntologyNode[] = [];
    
    for (const startNode of functionalNodes) {
      const codeNodes = this.graph.getNodesByOntology('code');
      
      for (const endNode of codeNodes) {
        const path = this.graph.findShortestPath(startNode.id, endNode.id);
        if (path && path.path.length > longestPath.length) {
          longestPath = path.path;
        }
      }
    }
    
    return longestPath;
  }
}

export default FourOntologyAnalyzer;