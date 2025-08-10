/**
 * Example usage of the FourOntology library
 * Demonstrates various analysis capabilities
 */

import FourOntologyGraph from '../FourOntologyGraph';
import FourOntologyAnalyzer from '../FourOntologyAnalyzer';
import FourOntologyBuilder from '../FourOntologyBuilder';
import { phoenixNodes, apolloNodes, voyagerNodes, allEdges } from '../../data/ontologyData';

// ============ Example 1: Create graph from existing data ============
export function createGraphFromExistingData() {
  console.log('=== Creating Graph from Existing Data ===');
  
  const graph = new FourOntologyGraph();
  
  // Add all nodes
  [...phoenixNodes, ...apolloNodes, ...voyagerNodes].forEach(node => {
    graph.addNode(node);
  });
  
  // Add all edges
  allEdges.forEach(edge => {
    graph.addEdge(edge);
  });
  
  // Calculate metrics
  const metrics = graph.calculateMetrics();
  console.log('Graph Metrics:', metrics);
  
  return graph;
}

// ============ Example 2: Use builder to create sample graph ============
export function createGraphWithBuilder() {
  console.log('=== Creating Graph with Builder ===');
  
  const graph = FourOntologyBuilder.createAuthenticationExample();
  
  // Get nodes by ontology
  const functionalNodes = graph.getNodesByOntology('functional');
  const designNodes = graph.getNodesByOntology('design');
  const architectureNodes = graph.getNodesByOntology('architecture');
  const codeNodes = graph.getNodesByOntology('code');
  
  console.log(`Functional nodes: ${functionalNodes.length}`);
  console.log(`Design nodes: ${designNodes.length}`);
  console.log(`Architecture nodes: ${architectureNodes.length}`);
  console.log(`Code nodes: ${codeNodes.length}`);
  
  return graph;
}

// ============ Example 3: Find rationalization candidates ============
export function findRationalizationOpportunities() {
  console.log('=== Finding Rationalization Opportunities ===');
  
  const graph = FourOntologyBuilder.createAuthenticationExample();
  const analyzer = new FourOntologyAnalyzer(graph);
  
  const candidates = analyzer.findRationalizationCandidates(['phoenix', 'apollo', 'voyager']);
  
  console.log(`Found ${candidates.length} rationalization candidates`);
  
  candidates.forEach((candidate, index) => {
    console.log(`\nCandidate ${index + 1}:`);
    console.log(`  Functional Overlap: ${candidate.functionalOverlap.length} nodes`);
    console.log(`  Design Divergence: ${candidate.designDivergence.length} nodes`);
    console.log(`  Code Redundancy: ${candidate.codeRedundancy.length} nodes`);
    console.log(`  Unification Potential: ${candidate.unificationPotential}%`);
    console.log(`  Estimated Effort: ${candidate.estimatedEffort}`);
    console.log('  Recommendations:');
    candidate.recommendations.forEach(rec => {
      console.log(`    - ${rec}`);
    });
  });
  
  return candidates;
}

// ============ Example 4: Analyze overlap between products ============
export function analyzeProductOverlap() {
  console.log('=== Analyzing Product Overlap ===');
  
  const graph = FourOntologyBuilder.createAuthenticationExample();
  
  const overlap = graph.analyzeOverlap(['phoenix', 'apollo', 'voyager']);
  
  console.log(`Overlap Percentage: ${overlap.overlapPercentage.toFixed(2)}%`);
  console.log(`Overlapping Nodes: ${overlap.overlappingNodes.length}`);
  console.log(`Common Patterns Found: ${overlap.commonPatterns.length}`);
  
  // Show unique nodes per product
  Object.entries(overlap.uniqueNodes).forEach(([product, nodes]) => {
    console.log(`${product} unique nodes: ${nodes.length}`);
  });
  
  // Show common patterns
  overlap.commonPatterns.slice(0, 3).forEach((pattern, index) => {
    console.log(`\nPattern ${index + 1}:`);
    console.log(`  Type: ${pattern.type}`);
    console.log(`  Frequency: ${pattern.frequency}`);
    console.log(`  Products: ${pattern.products.join(', ')}`);
    console.log(`  Nodes involved: ${pattern.nodes.length}`);
  });
  
  return overlap;
}

// ============ Example 5: Check ontology alignment ============
export function checkAlignment() {
  console.log('=== Checking Ontology Alignment ===');
  
  const graph = createGraphFromExistingData();
  const analyzer = new FourOntologyAnalyzer(graph);
  
  const alignment = analyzer.checkOntologyAlignment();
  
  console.log(`Alignment Status: ${alignment.aligned ? 'Aligned' : 'Misaligned'}`);
  console.log(`Misalignments Found: ${alignment.misalignments.length}`);
  
  // Show first 5 misalignments
  alignment.misalignments.slice(0, 5).forEach((misalignment, index) => {
    console.log(`\nMisalignment ${index + 1}:`);
    console.log(`  Source: ${misalignment.source.name} (${misalignment.source.type})`);
    console.log(`  Expected Target: ${misalignment.expectedTarget}`);
    console.log(`  Issue: ${misalignment.issue}`);
  });
  
  return alignment;
}

// ============ Example 6: Calculate complexity metrics ============
export function calculateComplexity() {
  console.log('=== Calculating Complexity Metrics ===');
  
  const graph = FourOntologyBuilder.createAuthenticationExample();
  const analyzer = new FourOntologyAnalyzer(graph);
  
  const complexity = analyzer.calculateComplexity();
  
  console.log('Complexity Metrics:');
  console.log(`  Functional: ${complexity.functionalComplexity.toFixed(2)}`);
  console.log(`  Design: ${complexity.designComplexity.toFixed(2)}`);
  console.log(`  Architecture: ${complexity.architecturalComplexity.toFixed(2)}`);
  console.log(`  Code: ${complexity.codeComplexity.toFixed(2)}`);
  console.log(`  Overall: ${complexity.overallComplexity.toFixed(2)}`);
  console.log(`  Hotspots: ${complexity.hotspots.length} nodes`);
  
  // Show top 3 hotspots
  complexity.hotspots.slice(0, 3).forEach((hotspot, index) => {
    console.log(`\nHotspot ${index + 1}: ${hotspot.name}`);
    console.log(`  Type: ${hotspot.type}`);
    console.log(`  Level: ${hotspot.level}`);
    console.log(`  Product: ${hotspot.product}`);
  });
  
  return complexity;
}

// ============ Example 7: Analyze dependencies ============
export function analyzeDependencies() {
  console.log('=== Analyzing Dependencies ===');
  
  const graph = createGraphFromExistingData();
  const analyzer = new FourOntologyAnalyzer(graph);
  
  const dependencies = analyzer.analyzeDependencies();
  
  console.log(`Direct Dependencies: ${dependencies.directDependencies.size} nodes with dependencies`);
  console.log(`Transitive Dependencies: ${dependencies.transitiveDependencies.size} nodes`);
  console.log(`Circular Dependencies: ${dependencies.circularDependencies.length} cycles found`);
  console.log(`Critical Path Length: ${dependencies.criticalPath.length} nodes`);
  
  // Show circular dependencies
  dependencies.circularDependencies.slice(0, 3).forEach((cycle, index) => {
    console.log(`\nCircular Dependency ${index + 1}:`);
    console.log(`  Cycle: ${cycle.join(' -> ')}`);
  });
  
  // Show critical path
  if (dependencies.criticalPath.length > 0) {
    console.log('\nCritical Path:');
    dependencies.criticalPath.forEach((node, index) => {
      console.log(`  ${index + 1}. ${node.name} (${node.type})`);
    });
  }
  
  return dependencies;
}

// ============ Example 8: Graph traversal ============
export function demonstrateTraversal() {
  console.log('=== Demonstrating Graph Traversal ===');
  
  const graph = createGraphFromExistingData();
  
  // Find a functional node to start from
  const startNode = graph.findNode(node => 
    node.type === 'functional' && node.level === 'persona'
  );
  
  if (startNode) {
    console.log(`Starting from: ${startNode.name}`);
    
    // Forward traversal
    const forwardNodes = graph.traverseFromNode(startNode.id, {
      direction: 'forward',
      maxDepth: 3
    });
    console.log(`Forward traversal (3 levels): ${forwardNodes.length} nodes`);
    
    // Backward traversal
    const backwardNodes = graph.traverseFromNode(startNode.id, {
      direction: 'backward',
      maxDepth: 2
    });
    console.log(`Backward traversal (2 levels): ${backwardNodes.length} nodes`);
    
    // Filtered traversal - only design nodes
    const designNodes = graph.traverseFromNode(startNode.id, {
      direction: 'forward',
      nodeFilter: node => node.type === 'design'
    });
    console.log(`Design nodes reachable: ${designNodes.length}`);
    
    // Find path to code
    const codeNode = graph.findNode(node => node.type === 'code');
    if (codeNode) {
      const path = graph.findShortestPath(startNode.id, codeNode.id);
      if (path) {
        console.log(`\nPath from ${startNode.name} to ${codeNode.name}:`);
        console.log(`  Length: ${path.length}`);
        console.log(`  Cross-ontology transitions: ${path.crossOntologyTransitions}`);
        console.log('  Path:');
        path.path.forEach((node, index) => {
          console.log(`    ${index + 1}. ${node.name} (${node.type})`);
        });
      }
    }
  }
}

// ============ Example 9: Find inconsistencies ============
export function findInconsistencies() {
  console.log('=== Finding Inconsistencies ===');
  
  const graph = createGraphFromExistingData();
  const inconsistentNodes = graph.findInconsistencies();
  
  console.log(`Found ${inconsistentNodes.length} inconsistent nodes`);
  
  // Group by issue type
  const issueGroups = new Map<string, number>();
  inconsistentNodes.forEach(node => {
    node.inconsistencies?.forEach(issue => {
      issueGroups.set(issue, (issueGroups.get(issue) || 0) + 1);
    });
  });
  
  console.log('\nIssue Summary:');
  issueGroups.forEach((count, issue) => {
    console.log(`  ${issue}: ${count} nodes`);
  });
  
  // Show first 5 inconsistent nodes
  console.log('\nSample Inconsistent Nodes:');
  inconsistentNodes.slice(0, 5).forEach((node, index) => {
    console.log(`\n${index + 1}. ${node.name} (${node.type}/${node.level})`);
    node.inconsistencies?.forEach(issue => {
      console.log(`   - ${issue}`);
    });
  });
  
  return inconsistentNodes;
}

// ============ Example 10: Recommend connections ============
export function recommendConnections() {
  console.log('=== Recommending Connections ===');
  
  const graph = createGraphFromExistingData();
  
  // Find a node with few connections
  const node = graph.findNode(n => n.type === 'design' && n.level === 'molecules');
  
  if (node) {
    console.log(`Recommending connections for: ${node.name}`);
    
    const recommendations = graph.recommendConnections(node.id);
    
    console.log(`Found ${recommendations.length} recommended connections`);
    
    recommendations.slice(0, 5).forEach((rec, index) => {
      const targetNode = graph.findNode(n => n.id === rec.target);
      if (targetNode) {
        console.log(`\n${index + 1}. Connect to: ${targetNode.name}`);
        console.log(`   Type: ${rec.type}`);
        console.log(`   Strength: ${rec.strength}`);
      }
    });
  }
  
  return [];
}

// ============ Main execution function ============
export function runAllExamples() {
  console.log('==================================================');
  console.log('       Four Ontology Graph Library Examples       ');
  console.log('==================================================\n');
  
  // Run all examples
  createGraphFromExistingData();
  console.log('\n');
  
  createGraphWithBuilder();
  console.log('\n');
  
  findRationalizationOpportunities();
  console.log('\n');
  
  analyzeProductOverlap();
  console.log('\n');
  
  checkAlignment();
  console.log('\n');
  
  calculateComplexity();
  console.log('\n');
  
  analyzeDependencies();
  console.log('\n');
  
  demonstrateTraversal();
  console.log('\n');
  
  findInconsistencies();
  console.log('\n');
  
  recommendConnections();
  
  console.log('\n==================================================');
  console.log('            Examples Completed Successfully        ');
  console.log('==================================================');
}

// Export for use in React components
export {
  FourOntologyGraph,
  FourOntologyAnalyzer,
  FourOntologyBuilder
};

export default runAllExamples;