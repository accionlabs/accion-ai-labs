import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { 
  phoenixCodeNodes, 
  phoenixCodeEdges, 
  derivedMappings,
  CodeNode,
  CodeEdge,
  DerivedMapping 
} from '../../data/technicalDebtData';
import { 
  phoenixAllNodes,
  phoenixAllEdges
} from '../../data/phoenixOntologyData';
import { OntologyNode, OntologyEdge } from '../../types/ontology';

interface FilterOptions {
  showCode: boolean;
  showFunctional: boolean;
  showDesign: boolean;
  showArchitecture: boolean;
  showDerivedMappings: boolean;
  highlightDebtNodes: boolean;
}

const TechnicalDebtGraphExplorer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [filters, setFilters] = useState<FilterOptions>({
    showCode: true,
    showFunctional: false,
    showDesign: false,
    showArchitecture: false,
    showDerivedMappings: false,
    highlightDebtNodes: true
  });

  useEffect(() => {
    if (!svgRef.current) return;
    renderGraph();
  }, [filters]);

  const getFilteredNodes = () => {
    let allNodes: any[] = [];
    
    // Add code nodes if enabled
    if (filters.showCode) {
      allNodes = [...allNodes, ...phoenixCodeNodes];
    }
    
    // Add ontology nodes based on filters
    const ontologyNodes = phoenixAllNodes.filter(node => {
      if (node.type === 'functional' && !filters.showFunctional) return false;
      if (node.type === 'design' && !filters.showDesign) return false;
      if (node.type === 'architecture' && !filters.showArchitecture) return false;
      return true;
    });
    
    allNodes = [...allNodes, ...ontologyNodes];
    
    return allNodes;
  };

  const getFilteredEdges = () => {
    const nodes = getFilteredNodes();
    const nodeIds = new Set(nodes.map(n => n.id));
    
    let allEdges: any[] = [];
    
    // Add code edges if code nodes are shown
    if (filters.showCode) {
      const codeEdges = phoenixCodeEdges.filter(edge => 
        nodeIds.has(edge.source) && nodeIds.has(edge.target)
      );
      allEdges = [...allEdges, ...codeEdges];
    }
    
    // Add ontology edges
    const ontologyEdges = phoenixAllEdges.filter(edge => 
      nodeIds.has(edge.source) && nodeIds.has(edge.target)
    );
    allEdges = [...allEdges, ...ontologyEdges];

    // If showing derived mappings, add them as edges
    if (filters.showDerivedMappings && filters.showCode) {
      const mappingEdges: CodeEdge[] = derivedMappings
        .filter(m => nodeIds.has(m.codeNodeId) && nodeIds.has(m.derivedNodeId))
        .map(m => ({
          source: m.codeNodeId,
          target: m.derivedNodeId,
          type: 'derives-to',
          weight: m.confidence
        }));
      allEdges = [...allEdges, ...mappingEdges];
    }

    return allEdges;
  };

  const renderGraph = () => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    const g = svg.append('g');

    // Add zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    // Create arrow markers
    svg.append('defs').selectAll('marker')
      .data(['arrow'])
      .enter().append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 20)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#999');

    const nodes = getFilteredNodes();
    const edges = getFilteredEdges();

    // Create copies to avoid mutation
    const nodesCopy = nodes.map(n => ({ ...n }));
    const edgesCopy = edges.map(e => ({ ...e }));

    // Create simulation
    const simulation = d3.forceSimulation(nodesCopy as any)
      .force('link', d3.forceLink(edgesCopy as any)
        .id((d: any) => d.id)
        .distance(120)
        .strength(0.5))
      .force('charge', d3.forceManyBody().strength(-400))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .force('collision', d3.forceCollide().radius(35));

    // Draw edges with better visibility
    const link = g.append('g')
      .attr('class', 'links')
      .selectAll('line')
      .data(edgesCopy)
      .enter().append('line')
      .attr('stroke', (d) => {
        if (d.type === 'derives-to') {
          // Special styling for derived mappings
          return '#FFA500';
        }
        switch(d.type) {
          case 'imports': return '#3B82F6';
          case 'calls': return '#10B981';
          case 'accesses': return '#EF4444';
          case 'uses': return '#8B5CF6';
          case 'extends': return '#F59E0B';
          case 'implements': return '#06B6D4';
          default: return '#6B7280';
        }
      })
      .attr('stroke-width', (d) => {
        if (d.type === 'derives-to') return 2;
        return d.weight ? Math.max(2, d.weight * 2) : 2.5;
      })
      .attr('stroke-opacity', (d) => d.type === 'derives-to' ? 0.5 : 0.7)
      .attr('stroke-dasharray', (d) => d.type === 'derives-to' ? '8,4' : 'none')
      .attr('marker-end', 'url(#arrow)');

    // Draw nodes with drag functionality
    const node = g.append('g')
      .attr('class', 'nodes')
      .selectAll('g')
      .data(nodesCopy)
      .enter().append('g')
      .attr('class', 'node')
      .style('cursor', 'pointer')
      .on('click', (event, d) => setSelectedNode(d as CodeNode))
      .call(d3.drag<any, any>()
        .on('start', (event, d: any) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on('drag', (event, d: any) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on('end', (event, d: any) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    // Node circles
    node.append('circle')
      .attr('r', (d) => {
        // Code nodes are sized by lines of code
        if (d.linesOfCode !== undefined) {
          return Math.min(20 + d.linesOfCode / 50, 40);
        }
        // Ontology nodes sized by level
        if (d.level === 'root') return 25;
        if (d.level === 'persona' || d.level === 'journey') return 20;
        return 18;
      })
      .attr('fill', (d) => {
        // Ontology nodes have their own colors
        switch(d.type) {
          case 'functional': return '#DBEAFE';
          case 'design': return '#EDE9FE';
          case 'architecture': return '#D1FAE5';
          // Code node types
          case 'frontend': return '#FEF3C7';
          case 'backend': return '#FED7AA';
          case 'database': return '#FECACA';
          case 'api': return '#E9D5FF';
          case 'library': return '#CCFBF1';
          default: return '#E5E7EB';
        }
      })
      .attr('stroke', (d) => {
        if (filters.highlightDebtNodes && d.complexity && d.complexity > 10) {
          return '#EF4444';
        }
        switch(d.type) {
          case 'functional': return '#3B82F6';
          case 'design': return '#8B5CF6';
          case 'architecture': return '#10B981';
          // Code node types
          case 'frontend': return '#F59E0B';
          case 'backend': return '#EA580C';
          case 'database': return '#EF4444';
          case 'api': return '#7C3AED';
          case 'library': return '#0D9488';
          default: return '#6B7280';
        }
      })
      .attr('stroke-width', (d) => {
        if (filters.highlightDebtNodes && d.complexity && d.complexity > 10) {
          return 3;
        }
        if (d.level === 'root') return 3;
        return 2;
      })
      .attr('stroke-dasharray', (d) => {
        // Show code nodes with solid borders, ontology with normal
        return 'none';
      });

    // Node icons
    node.append('text')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
      .attr('font-size', '14px')
      .text((d) => {
        // Icons for ontology nodes
        if (d.type === 'functional') return '🎯';
        if (d.type === 'design') return '🎨';
        if (d.type === 'architecture') return '🏗️';
        
        // Icons for code nodes
        switch(d.subtype) {
          case 'component': return '🧩';
          case 'service': return '⚙️';
          case 'controller': return '🎮';
          case 'model': return '📊';
          case 'repository': return '🗄️';
          case 'view': return '👁️';
          case 'utility': return '🔧';
          default: return '📦';
        }
      });

    // Node labels
    node.append('text')
      .attr('dy', (d) => {
        // Adjust label position based on node size
        if (d.linesOfCode !== undefined) {
          return Math.min(20 + d.linesOfCode / 50, 40) + 15;
        }
        if (d.level === 'root') return 40;
        if (d.level === 'persona' || d.level === 'journey') return 35;
        return 33;
      })
      .attr('text-anchor', 'middle')
      .attr('font-size', '11px')
      .attr('fill', '#4B5563')
      .text((d) => {
        const label = d.name || d.label || '';
        return label.substring(0, 20);
      });

    // Update positions on simulation tick
    simulation.on('tick', () => {
      link
        .attr('x1', (d: any) => d.source.x)
        .attr('y1', (d: any) => d.source.y)
        .attr('x2', (d: any) => d.target.x)
        .attr('y2', (d: any) => d.target.y);

      node
        .attr('transform', (d: any) => `translate(${d.x},${d.y})`);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Phoenix CRM Graph Explorer</h2>
          <p className="text-gray-600 text-sm mt-1">
            Visualizing complete four-ontology structure and code relationships
          </p>
        </div>
      </div>

      <div className="flex h-[calc(100vh-8rem)]">
        {/* Filter Panel */}
        <div className="w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto">
          <h3 className="font-semibold text-gray-900 mb-4">Ontology Filters</h3>
          
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showCode}
                onChange={(e) => setFilters({...filters, showCode: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">Code Graph</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showFunctional}
                onChange={(e) => setFilters({...filters, showFunctional: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">Functional</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showDesign}
                onChange={(e) => setFilters({...filters, showDesign: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">Design</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showArchitecture}
                onChange={(e) => setFilters({...filters, showArchitecture: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">Architecture</span>
            </label>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <h4 className="font-medium text-gray-900 mb-3">Display Options</h4>
            
            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={filters.showDerivedMappings}
                onChange={(e) => setFilters({...filters, showDerivedMappings: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm">Show Ontology Mappings</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.highlightDebtNodes}
                onChange={(e) => setFilters({...filters, highlightDebtNodes: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm">Highlight High Complexity</span>
            </label>
          </div>

          {/* Legend */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h4 className="font-medium text-gray-900 mb-3">Legend</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-100 border-2 border-blue-500 rounded-full mr-2"></div>
                <span>Functional</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-100 border-2 border-purple-500 rounded-full mr-2"></div>
                <span>Design</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-100 border-2 border-green-500 rounded-full mr-2"></div>
                <span>Architecture</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-100 border-2 border-orange-500 rounded-full mr-2"></div>
                <span>Code</span>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <h5 className="font-medium">Edge Types:</h5>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-blue-500 mr-2"></div>
                <span>Imports</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-green-500 mr-2"></div>
                <span>Calls</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-red-500 mr-2"></div>
                <span>Accesses DB</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-purple-500 mr-2"></div>
                <span>Uses</span>
              </div>
              {filters.showDerivedMappings && (
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-orange-500 mr-2" style={{ borderTop: '2px dashed #F97316' }}></div>
                  <span>Derives To</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Graph Area */}
        <div className="flex-1 relative">
          <svg ref={svgRef} className="w-full h-full"></svg>
          
          {/* Node Details */}
          {selectedNode && (
            <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 w-80">
              <h3 className="font-semibold text-gray-900 mb-2">{selectedNode.name}</h3>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">Type:</span> {selectedNode.type}</div>
                <div><span className="font-medium">Subtype:</span> {selectedNode.subtype}</div>
                <div><span className="font-medium">File:</span> <code className="text-xs bg-gray-100 px-1">{selectedNode.file}</code></div>
                <div><span className="font-medium">Language:</span> {selectedNode.language}</div>
                {selectedNode.framework && (
                  <div><span className="font-medium">Framework:</span> {selectedNode.framework}</div>
                )}
                <div><span className="font-medium">Lines of Code:</span> {selectedNode.linesOfCode}</div>
                {selectedNode.complexity && (
                  <div>
                    <span className="font-medium">Complexity:</span> 
                    <span className={`ml-2 ${selectedNode.complexity > 10 ? 'text-red-600 font-bold' : ''}`}>
                      {selectedNode.complexity}
                    </span>
                  </div>
                )}
                {selectedNode.dependencies && selectedNode.dependencies.length > 0 && (
                  <div>
                    <span className="font-medium">Dependencies:</span>
                    <ul className="mt-1 ml-4 text-xs">
                      {selectedNode.dependencies.map((dep: string) => (
                        <li key={dep}>• {dep}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {filters.showDerivedMappings && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <h4 className="font-medium text-sm mb-1">Derived Mappings:</h4>
                  <div className="space-y-1 text-xs">
                    {derivedMappings
                      .filter(m => m.codeNodeId === selectedNode.id)
                      .map(m => (
                        <div key={m.derivedNodeId} className="flex items-center">
                          <span className="px-1 py-0.5 bg-orange-100 text-orange-700 rounded mr-2">
                            {m.ontology}
                          </span>
                          <span>{m.derivedNodeId.replace('phoenix-', '')}</span>
                          <span className="ml-auto text-gray-500">{Math.round(m.confidence * 100)}%</span>
                        </div>
                      ))}
                  </div>
                </div>
              )}
              
              <button
                onClick={() => setSelectedNode(null)}
                className="mt-3 text-xs text-gray-500 hover:text-gray-700"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtGraphExplorer;