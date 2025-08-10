/**
 * FourOntologyGraph Library
 * A comprehensive library for creating and analyzing software products 
 * using the four-ontology framework (Functional, Design, Architecture, Code)
 */

import { OntologyNode, OntologyEdge } from '../types/ontology';

export type OntologyType = 'functional' | 'design' | 'architecture' | 'code';
export type NodeLevel = string;
export type ProductId = 'phoenix' | 'apollo' | 'voyager';

interface GraphNode extends OntologyNode {
  _internal?: {
    inDegree: number;
    outDegree: number;
    connectedComponents?: Set<string>;
  };
}

interface GraphEdge extends OntologyEdge {
  _internal?: {
    weight?: number;
    traversalCount?: number;
  };
}

export interface GraphMetrics {
  nodeCount: number;
  edgeCount: number;
  density: number;
  avgDegree: number;
  componentCount: number;
  ontologyDistribution: Record<OntologyType, number>;
  levelDistribution: Record<string, number>;
}

export interface OverlapAnalysis {
  overlappingNodes: GraphNode[];
  uniqueNodes: Record<ProductId, GraphNode[]>;
  overlapPercentage: number;
  commonPatterns: Pattern[];
}

export interface Pattern {
  type: string;
  nodes: GraphNode[];
  edges: GraphEdge[];
  frequency: number;
  products: ProductId[];
}

export interface PathAnalysis {
  path: GraphNode[];
  edges: GraphEdge[];
  length: number;
  crossOntologyTransitions: number;
}

export class FourOntologyGraph {
  private nodes: Map<string, GraphNode>;
  private edges: Map<string, GraphEdge>;
  private adjacencyList: Map<string, Set<string>>;
  private reverseAdjacencyList: Map<string, Set<string>>;
  private nodesByOntology: Map<OntologyType, Set<string>>;
  private nodesByProduct: Map<ProductId, Set<string>>;
  private nodesByLevel: Map<string, Set<string>>;
  private edgesByType: Map<string, Set<string>>;

  constructor() {
    this.nodes = new Map();
    this.edges = new Map();
    this.adjacencyList = new Map();
    this.reverseAdjacencyList = new Map();
    this.nodesByOntology = new Map();
    this.nodesByProduct = new Map();
    this.nodesByLevel = new Map();
    this.edgesByType = new Map();
    
    // Initialize ontology maps
    (['functional', 'design', 'architecture', 'code'] as OntologyType[]).forEach(type => {
      this.nodesByOntology.set(type, new Set());
    });
  }

  // ============ Core Graph Operations ============

  addNode(node: OntologyNode): void {
    const graphNode: GraphNode = {
      ...node,
      _internal: {
        inDegree: 0,
        outDegree: 0
      }
    };
    
    this.nodes.set(node.id, graphNode);
    
    // Update indices
    this.nodesByOntology.get(node.type as OntologyType)?.add(node.id);
    
    if (!this.nodesByProduct.has(node.product)) {
      this.nodesByProduct.set(node.product, new Set());
    }
    this.nodesByProduct.get(node.product)!.add(node.id);
    
    if (!this.nodesByLevel.has(node.level)) {
      this.nodesByLevel.set(node.level, new Set());
    }
    this.nodesByLevel.get(node.level)!.add(node.id);
    
    // Initialize adjacency lists
    this.adjacencyList.set(node.id, new Set());
    this.reverseAdjacencyList.set(node.id, new Set());
  }

  addEdge(edge: OntologyEdge): void {
    const graphEdge: GraphEdge = {
      ...edge,
      _internal: {
        weight: edge.strength || 1,
        traversalCount: 0
      }
    };
    
    this.edges.set(edge.id, graphEdge);
    
    // Update adjacency lists
    this.adjacencyList.get(edge.source)?.add(edge.target);
    this.reverseAdjacencyList.get(edge.target)?.add(edge.source);
    
    // Update node degrees
    const sourceNode = this.nodes.get(edge.source);
    const targetNode = this.nodes.get(edge.target);
    if (sourceNode?._internal) sourceNode._internal.outDegree++;
    if (targetNode?._internal) targetNode._internal.inDegree++;
    
    // Update edge type index
    if (!this.edgesByType.has(edge.type)) {
      this.edgesByType.set(edge.type, new Set());
    }
    this.edgesByType.get(edge.type)!.add(edge.id);
  }

  // ============ Query Operations ============

  getNodesByOntology(type: OntologyType): GraphNode[] {
    const nodeIds = this.nodesByOntology.get(type) || new Set();
    return Array.from(nodeIds).map(id => this.nodes.get(id)!).filter(Boolean);
  }

  getNodesByProduct(productId: ProductId): GraphNode[] {
    const nodeIds = this.nodesByProduct.get(productId) || new Set();
    return Array.from(nodeIds).map(id => this.nodes.get(id)!).filter(Boolean);
  }

  getNodesByLevel(level: string): GraphNode[] {
    const nodeIds = this.nodesByLevel.get(level) || new Set();
    return Array.from(nodeIds).map(id => this.nodes.get(id)!).filter(Boolean);
  }

  findNode(predicate: (node: GraphNode) => boolean): GraphNode | undefined {
    let result: GraphNode | undefined;
    this.nodes.forEach(node => {
      if (!result && predicate(node)) {
        result = node;
      }
    });
    return result;
  }

  findNodes(predicate: (node: GraphNode) => boolean): GraphNode[] {
    const results: GraphNode[] = [];
    this.nodes.forEach(node => {
      if (predicate(node)) results.push(node);
    });
    return results;
  }

  // ============ Traversal Operations ============

  traverseFromNode(
    startNodeId: string,
    options: {
      direction?: 'forward' | 'backward' | 'both';
      maxDepth?: number;
      edgeFilter?: (edge: GraphEdge) => boolean;
      nodeFilter?: (node: GraphNode) => boolean;
    } = {}
  ): GraphNode[] {
    const {
      direction = 'forward',
      maxDepth = Infinity,
      edgeFilter,
      nodeFilter
    } = options;
    
    const visited = new Set<string>();
    const result: GraphNode[] = [];
    const queue: { nodeId: string; depth: number }[] = [{ nodeId: startNodeId, depth: 0 }];
    
    while (queue.length > 0) {
      const { nodeId, depth } = queue.shift()!;
      
      if (visited.has(nodeId) || depth > maxDepth) continue;
      visited.add(nodeId);
      
      const node = this.nodes.get(nodeId);
      if (!node) continue;
      
      if (!nodeFilter || nodeFilter(node)) {
        result.push(node);
      }
      
      // Get neighbors based on direction
      let neighbors: Set<string> = new Set();
      if (direction === 'forward' || direction === 'both') {
        this.adjacencyList.get(nodeId)?.forEach(n => neighbors.add(n));
      }
      if (direction === 'backward' || direction === 'both') {
        this.reverseAdjacencyList.get(nodeId)?.forEach(n => neighbors.add(n));
      }
      
      // Apply edge filter if provided
      if (edgeFilter) {
        const filteredNeighbors = new Set<string>();
        neighbors.forEach(neighborId => {
          const edge = this.findEdgeBetween(nodeId, neighborId);
          if (edge && edgeFilter(edge)) {
            filteredNeighbors.add(neighborId);
          }
        });
        neighbors = filteredNeighbors;
      }
      
      // Add neighbors to queue
      neighbors.forEach(neighborId => {
        queue.push({ nodeId: neighborId, depth: depth + 1 });
      });
    }
    
    return result;
  }

  findShortestPath(startNodeId: string, endNodeId: string): PathAnalysis | null {
    const queue: { nodeId: string; path: string[]; edges: string[] }[] = [
      { nodeId: startNodeId, path: [startNodeId], edges: [] }
    ];
    const visited = new Set<string>();
    
    while (queue.length > 0) {
      const { nodeId, path, edges } = queue.shift()!;
      
      if (nodeId === endNodeId) {
        const pathNodes = path.map(id => this.nodes.get(id)!);
        const pathEdges = edges.map(id => this.edges.get(id)!);
        
        // Count cross-ontology transitions
        let crossOntologyTransitions = 0;
        for (let i = 1; i < pathNodes.length; i++) {
          if (pathNodes[i].type !== pathNodes[i - 1].type) {
            crossOntologyTransitions++;
          }
        }
        
        return {
          path: pathNodes,
          edges: pathEdges,
          length: path.length - 1,
          crossOntologyTransitions
        };
      }
      
      if (visited.has(nodeId)) continue;
      visited.add(nodeId);
      
      const neighbors = this.adjacencyList.get(nodeId) || new Set();
      neighbors.forEach(neighborId => {
        const edge = this.findEdgeBetween(nodeId, neighborId);
        if (edge) {
          queue.push({
            nodeId: neighborId,
            path: [...path, neighborId],
            edges: [...edges, edge.id]
          });
        }
      });
    }
    
    return null;
  }

  // ============ Analysis Operations ============

  analyzeOverlap(products: ProductId[]): OverlapAnalysis {
    const productNodes = new Map<ProductId, Set<string>>();
    const allNodes = new Set<string>();
    
    // Collect nodes for each product
    products.forEach(product => {
      const nodes = this.nodesByProduct.get(product) || new Set();
      productNodes.set(product, nodes);
      nodes.forEach(n => allNodes.add(n));
    });
    
    // Find overlapping nodes (similar nodes across products)
    const overlappingNodes: GraphNode[] = [];
    const uniqueNodes: Record<ProductId, GraphNode[]> = {
      phoenix: [],
      apollo: [],
      voyager: []
    };
    
    products.forEach(product => {
      uniqueNodes[product] = [];
    });
    
    // Group nodes by similarity
    const processedNodes = new Set<string>();
    allNodes.forEach(nodeId => {
      if (processedNodes.has(nodeId)) return;
      
      const node = this.nodes.get(nodeId)!;
      const similarNodes = this.findSimilarNodes(node, products);
      
      if (similarNodes.length > 1) {
        overlappingNodes.push(...similarNodes);
        similarNodes.forEach(n => processedNodes.add(n.id));
      } else {
        uniqueNodes[node.product].push(node);
        processedNodes.add(node.id);
      }
    });
    
    // Calculate overlap percentage
    const overlapPercentage = (overlappingNodes.length / allNodes.size) * 100;
    
    // Find common patterns
    const commonPatterns = this.findCommonPatterns(products);
    
    return {
      overlappingNodes,
      uniqueNodes,
      overlapPercentage,
      commonPatterns
    };
  }

  findSimilarNodes(node: GraphNode, products: ProductId[]): GraphNode[] {
    const similar: GraphNode[] = [node];
    
    products.forEach(product => {
      if (product === node.product) return;
      
      const productNodes = this.getNodesByProduct(product);
      productNodes.forEach(otherNode => {
        if (this.areNodesSimilar(node, otherNode)) {
          similar.push(otherNode);
        }
      });
    });
    
    return similar;
  }

  private areNodesSimilar(node1: GraphNode, node2: GraphNode): boolean {
    // Check if nodes are functionally similar
    if (node1.type !== node2.type) return false;
    if (node1.level !== node2.level) return false;
    
    // Check name similarity (simple heuristic)
    const name1 = node1.name.toLowerCase();
    const name2 = node2.name.toLowerCase();
    
    // Check for common keywords
    const keywords1 = new Set(name1.split(/[\s_-]+/));
    const keywords2 = new Set(name2.split(/[\s_-]+/));
    
    const intersection = new Set(Array.from(keywords1).filter(x => keywords2.has(x)));
    const union = new Set(Array.from(keywords1).concat(Array.from(keywords2)));
    
    const similarity = intersection.size / union.size;
    return similarity > 0.5; // 50% similarity threshold
  }

  findCommonPatterns(products: ProductId[]): Pattern[] {
    const patterns: Map<string, Pattern> = new Map();
    
    // Find common subgraph patterns
    products.forEach(product => {
      const productNodes = this.getNodesByProduct(product);
      
      // Look for common architectural patterns
      productNodes.forEach(node => {
        const subgraph = this.extractSubgraph(node.id, 2); // 2-hop neighborhood
        const patternKey = this.generatePatternKey(subgraph);
        
        if (!patterns.has(patternKey)) {
          patterns.set(patternKey, {
            type: `${node.type}_pattern`,
            nodes: subgraph.nodes,
            edges: subgraph.edges,
            frequency: 0,
            products: []
          });
        }
        
        const pattern = patterns.get(patternKey)!;
        pattern.frequency++;
        if (!pattern.products.includes(product)) {
          pattern.products.push(product);
        }
      });
    });
    
    // Filter patterns that appear in multiple products
    return Array.from(patterns.values())
      .filter(p => p.products.length > 1)
      .sort((a, b) => b.frequency - a.frequency);
  }

  private extractSubgraph(nodeId: string, maxDepth: number): { nodes: GraphNode[], edges: GraphEdge[] } {
    const nodes = this.traverseFromNode(nodeId, { maxDepth, direction: 'both' });
    const nodeIds = new Set(nodes.map(n => n.id));
    
    const edges: GraphEdge[] = [];
    this.edges.forEach(edge => {
      if (nodeIds.has(edge.source) && nodeIds.has(edge.target)) {
        edges.push(edge);
      }
    });
    
    return { nodes, edges };
  }

  private generatePatternKey(subgraph: { nodes: GraphNode[], edges: GraphEdge[] }): string {
    // Generate a unique key for the pattern based on structure
    const nodeTypes = subgraph.nodes.map(n => `${n.type}:${n.level}`).sort().join(',');
    const edgeTypes = subgraph.edges.map(e => e.type).sort().join(',');
    return `${nodeTypes}|${edgeTypes}`;
  }

  // ============ Metrics Operations ============

  calculateMetrics(): GraphMetrics {
    const nodeCount = this.nodes.size;
    const edgeCount = this.edges.size;
    
    // Calculate density
    const maxPossibleEdges = nodeCount * (nodeCount - 1);
    const density = maxPossibleEdges > 0 ? edgeCount / maxPossibleEdges : 0;
    
    // Calculate average degree
    let totalDegree = 0;
    this.nodes.forEach(node => {
      totalDegree += (node._internal?.inDegree || 0) + (node._internal?.outDegree || 0);
    });
    const avgDegree = nodeCount > 0 ? totalDegree / nodeCount : 0;
    
    // Calculate connected components
    const componentCount = this.countConnectedComponents();
    
    // Calculate ontology distribution
    const ontologyDistribution: Record<OntologyType, number> = {
      functional: 0,
      design: 0,
      architecture: 0,
      code: 0
    };
    
    this.nodesByOntology.forEach((nodeIds, type) => {
      ontologyDistribution[type] = nodeIds.size;
    });
    
    // Calculate level distribution
    const levelDistribution: Record<string, number> = {};
    this.nodesByLevel.forEach((nodeIds, level) => {
      levelDistribution[level] = nodeIds.size;
    });
    
    return {
      nodeCount,
      edgeCount,
      density,
      avgDegree,
      componentCount,
      ontologyDistribution,
      levelDistribution
    };
  }

  private countConnectedComponents(): number {
    const visited = new Set<string>();
    let componentCount = 0;
    
    this.nodes.forEach((_, nodeId) => {
      if (!visited.has(nodeId)) {
        componentCount++;
        this.dfsMarkComponent(nodeId, visited);
      }
    });
    
    return componentCount;
  }

  private dfsMarkComponent(nodeId: string, visited: Set<string>): void {
    visited.add(nodeId);
    
    const neighbors = new Set<string>();
    const forwardNeighbors = this.adjacencyList.get(nodeId);
    const backwardNeighbors = this.reverseAdjacencyList.get(nodeId);
    if (forwardNeighbors) forwardNeighbors.forEach(n => neighbors.add(n));
    if (backwardNeighbors) backwardNeighbors.forEach(n => neighbors.add(n));
    
    neighbors.forEach(neighborId => {
      if (!visited.has(neighborId)) {
        this.dfsMarkComponent(neighborId, visited);
      }
    });
  }

  // ============ Utility Operations ============

  private findEdgeBetween(sourceId: string, targetId: string): GraphEdge | undefined {
    let result: GraphEdge | undefined;
    this.edges.forEach(edge => {
      if (!result && edge.source === sourceId && edge.target === targetId) {
        result = edge;
      }
    });
    return result;
  }

  clone(): FourOntologyGraph {
    const newGraph = new FourOntologyGraph();
    
    // Clone nodes
    this.nodes.forEach(node => {
      newGraph.addNode({ ...node });
    });
    
    // Clone edges
    this.edges.forEach(edge => {
      newGraph.addEdge({ ...edge });
    });
    
    return newGraph;
  }

  toJSON(): { nodes: OntologyNode[], edges: OntologyEdge[] } {
    return {
      nodes: Array.from(this.nodes.values()).map(n => {
        const { _internal, ...node } = n;
        return node;
      }),
      edges: Array.from(this.edges.values()).map(e => {
        const { _internal, ...edge } = e;
        return edge;
      })
    };
  }

  static fromJSON(data: { nodes: OntologyNode[], edges: OntologyEdge[] }): FourOntologyGraph {
    const graph = new FourOntologyGraph();
    
    data.nodes.forEach(node => graph.addNode(node));
    data.edges.forEach(edge => graph.addEdge(edge));
    
    return graph;
  }

  // ============ Advanced Analysis ============

  findInconsistencies(): OntologyNode[] {
    const inconsistentNodes: OntologyNode[] = [];
    
    this.nodes.forEach(node => {
      const issues: string[] = [];
      
      // Check for orphaned nodes
      if (this.adjacencyList.get(node.id)?.size === 0 && 
          this.reverseAdjacencyList.get(node.id)?.size === 0) {
        issues.push('Orphaned node with no connections');
      }
      
      // Check for missing cross-ontology connections
      if (node.type === 'functional') {
        const hasDesignConnection = this.hasConnectionToOntology(node.id, 'design');
        if (!hasDesignConnection) {
          issues.push('Functional node lacks design connection');
        }
      }
      
      if (node.type === 'design') {
        const hasCodeConnection = this.hasConnectionToOntology(node.id, 'code');
        if (!hasCodeConnection) {
          issues.push('Design node lacks code implementation');
        }
      }
      
      if (issues.length > 0) {
        inconsistentNodes.push({
          ...node,
          inconsistencies: issues
        });
      }
    });
    
    return inconsistentNodes;
  }

  private hasConnectionToOntology(nodeId: string, targetOntology: OntologyType): boolean {
    const connected = this.traverseFromNode(nodeId, { maxDepth: 5, direction: 'both' });
    return connected.some(n => n.type === targetOntology);
  }

  recommendConnections(nodeId: string): GraphEdge[] {
    const node = this.nodes.get(nodeId);
    if (!node) return [];
    
    const recommendations: GraphEdge[] = [];
    const connected = new Set(this.traverseFromNode(nodeId, { maxDepth: 2 }).map(n => n.id));
    
    // Find similar nodes that are well-connected
    const similarNodes = this.findNodes(n => 
      n.type === node.type && 
      n.level === node.level && 
      n.id !== nodeId &&
      !connected.has(n.id)
    );
    
    similarNodes.forEach(similarNode => {
      // Check if similar node has connections that this node lacks
      const similarConnections = this.adjacencyList.get(similarNode.id) || new Set();
      
      similarConnections.forEach(targetId => {
        const target = this.nodes.get(targetId);
        if (target && !connected.has(targetId)) {
          recommendations.push({
            id: `rec_${nodeId}_${targetId}`,
            source: nodeId,
            target: targetId,
            type: 'triggers', // Use a valid edge type
            strength: 0.5,
            _internal: {
              weight: 0.5,
              traversalCount: 0
            }
          });
        }
      });
    });
    
    return recommendations;
  }
}

export default FourOntologyGraph;