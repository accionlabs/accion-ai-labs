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
import { useTranslation } from 'react-i18next';

interface FilterOptions {
  showCode: boolean;
  showFunctional: boolean;
  showDesign: boolean;
  showArchitecture: boolean;
  showDerivedMappings: boolean;
  highlightDebtNodes: boolean;
}

const TechnicalDebtGraphExplorer: React.FC = () => {
  const { t } = useTranslation('technicalDebt');
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
          case 'imports': return '#1E40AF'; // secondary color
          case 'calls': return '#059669'; // success color
          case 'accesses': return '#DC2626'; // error color
          case 'uses': return '#7C3AED'; // brand purple
          case 'extends': return '#D97706'; // warning color
          case 'implements': return '#0891B2'; // cyan shade
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
          case 'functional': return '#DBEAFE'; // keeping light blue
          case 'design': return '#EDE9FE'; // keeping light purple
          case 'architecture': return '#D1FAE5'; // keeping light green
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
          case 'functional': return '#1E40AF'; // secondary
          case 'design': return '#7C3AED'; // brand purple
          case 'architecture': return '#059669'; // success
          // Code node types
          case 'frontend': return '#D97706'; // warning
          case 'backend': return '#EA580C'; // keeping orange
          case 'database': return '#DC2626'; // error
          case 'api': return '#7C3AED'; // brand purple
          case 'library': return '#0F766E'; // teal
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
        if (d.type === 'functional') return '\uD83C\uDFAF';
        if (d.type === 'design') return '\uD83C\uDFA8';
        if (d.type === 'architecture') return '\uD83C\uDFD7\uFE0F';

        // Icons for code nodes
        switch(d.subtype) {
          case 'component': return '\uD83E\uDDE9';
          case 'service': return '\u2699\uFE0F';
          case 'controller': return '\uD83C\uDFAE';
          case 'model': return '\uD83D\uDCCA';
          case 'repository': return '\uD83D\uDDC4\uFE0F';
          case 'view': return '\uD83D\uDC41\uFE0F';
          case 'utility': return '\uD83D\uDD27';
          default: return '\uD83D\uDCE6';
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
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-4">
          <h2 className="text-xl font-semibold text-gray-900">{t('graphExplorer.header.title')}</h2>
          <p className="text-gray-600 text-sm mt-1">
            {t('graphExplorer.header.description')}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row h-[calc(100vh-8rem)]">
        {/* Filter Panel - collapsible on mobile */}
        <div className="w-full md:w-64 bg-white border-r border-gray-200 p-4 overflow-y-auto md:h-full max-h-96 md:max-h-none">
          <h3 className="font-semibold text-gray-900 mb-4">{t('graphExplorer.filters.title')}</h3>

          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showCode}
                onChange={(e) => setFilters({...filters, showCode: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">{t('graphExplorer.filters.codeGraph')}</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showFunctional}
                onChange={(e) => setFilters({...filters, showFunctional: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">{t('graphExplorer.filters.functional')}</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showDesign}
                onChange={(e) => setFilters({...filters, showDesign: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">{t('graphExplorer.filters.design')}</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.showArchitecture}
                onChange={(e) => setFilters({...filters, showArchitecture: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm font-medium">{t('graphExplorer.filters.architecture')}</span>
            </label>
          </div>

          <div className="border-t border-gray-200 mt-4 pt-4">
            <h4 className="font-medium text-gray-900 mb-3">{t('graphExplorer.displayOptions.title')}</h4>

            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={filters.showDerivedMappings}
                onChange={(e) => setFilters({...filters, showDerivedMappings: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm">{t('graphExplorer.displayOptions.showOntologyMappings')}</span>
            </label>

            <label className="flex items-center">
              <input
                type="checkbox"
                checked={filters.highlightDebtNodes}
                onChange={(e) => setFilters({...filters, highlightDebtNodes: e.target.checked})}
                className="mr-2"
              />
              <span className="text-sm">{t('graphExplorer.displayOptions.highlightHighComplexity')}</span>
            </label>
          </div>

          {/* Legend */}
          <div className="border-t border-gray-200 mt-4 pt-4">
            <h4 className="font-medium text-gray-900 mb-3">{t('graphExplorer.legend.title')}</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-secondary-light border-2 border-secondary rounded-full mr-2"></div>
                <span>{t('graphExplorer.legend.functional')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-brand-purple-100 border-2 border-brand-purple-500 rounded-full mr-2"></div>
                <span>{t('graphExplorer.legend.design')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-success-light border-2 border-success rounded-full mr-2"></div>
                <span>{t('graphExplorer.legend.architecture')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-warning-light border-2 border-warning rounded-full mr-2"></div>
                <span>{t('graphExplorer.legend.code')}</span>
              </div>
            </div>

            <div className="mt-4 space-y-2 text-xs">
              <h5 className="font-medium">{t('graphExplorer.legend.edgeTypes')}</h5>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-secondary mr-2"></div>
                <span>{t('graphExplorer.legend.imports')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-success mr-2"></div>
                <span>{t('graphExplorer.legend.calls')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-error mr-2"></div>
                <span>{t('graphExplorer.legend.accessesDb')}</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-brand-purple-500 mr-2"></div>
                <span>{t('graphExplorer.legend.uses')}</span>
              </div>
              {filters.showDerivedMappings && (
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-warning mr-2" style={{ borderTop: '2px dashed #D97706' }}></div>
                  <span>{t('graphExplorer.legend.derivesTo')}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Graph Area */}
        <div className="flex-1 relative min-h-96">
          <svg ref={svgRef} className="w-full h-full min-h-96"></svg>

          {/* Node Details - Desktop */}
          {selectedNode && (
            <div className="hidden md:block absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 w-80">
              <h3 className="font-semibold text-gray-900 mb-2">{selectedNode.name}</h3>
              <div className="space-y-1 text-sm">
                <div><span className="font-medium">{t('graphExplorer.nodeDetails.type')}</span> {selectedNode.type}</div>
                <div><span className="font-medium">{t('graphExplorer.nodeDetails.subtype')}</span> {selectedNode.subtype}</div>
                <div><span className="font-medium">{t('graphExplorer.nodeDetails.file')}</span> <code className="text-xs bg-gray-100 px-1">{selectedNode.file}</code></div>
                <div><span className="font-medium">{t('graphExplorer.nodeDetails.language')}</span> {selectedNode.language}</div>
                {selectedNode.framework && (
                  <div><span className="font-medium">{t('graphExplorer.nodeDetails.framework')}</span> {selectedNode.framework}</div>
                )}
                <div><span className="font-medium">{t('graphExplorer.nodeDetails.linesOfCode')}</span> {selectedNode.linesOfCode}</div>
                {selectedNode.complexity && (
                  <div>
                    <span className="font-medium">{t('graphExplorer.nodeDetails.complexity')}</span>
                    <span className={`ml-2 ${selectedNode.complexity > 10 ? 'text-red-600 font-bold' : ''}`}>
                      {selectedNode.complexity}
                    </span>
                  </div>
                )}
                {selectedNode.dependencies && selectedNode.dependencies.length > 0 && (
                  <div>
                    <span className="font-medium">{t('graphExplorer.nodeDetails.dependencies')}</span>
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
                  <h4 className="font-medium text-sm mb-1">{t('graphExplorer.nodeDetails.derivedMappings')}</h4>
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
                {t('graphExplorer.nodeDetails.close')}
              </button>
            </div>
          )}

          {/* Node Details - Mobile Modal */}
          {selectedNode && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md max-h-96 overflow-y-auto">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{t('graphExplorer.nodeDetails.title')}</h3>
                    <button
                      onClick={() => setSelectedNode(null)}
                      className="p-2 hover:bg-gray-100 rounded"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{selectedNode.name}</h3>
                  <div className="space-y-1 text-sm">
                    <div><span className="font-medium">{t('graphExplorer.nodeDetails.type')}</span> {selectedNode.type}</div>
                    <div><span className="font-medium">{t('graphExplorer.nodeDetails.subtype')}</span> {selectedNode.subtype}</div>
                    <div><span className="font-medium">{t('graphExplorer.nodeDetails.file')}</span> <code className="text-xs bg-gray-100 px-1">{selectedNode.file}</code></div>
                    <div><span className="font-medium">{t('graphExplorer.nodeDetails.language')}</span> {selectedNode.language}</div>
                    {selectedNode.framework && (
                      <div><span className="font-medium">{t('graphExplorer.nodeDetails.framework')}</span> {selectedNode.framework}</div>
                    )}
                    <div><span className="font-medium">{t('graphExplorer.nodeDetails.linesOfCode')}</span> {selectedNode.linesOfCode}</div>
                    {selectedNode.complexity && (
                      <div>
                        <span className="font-medium">{t('graphExplorer.nodeDetails.complexity')}</span>
                        <span className={`ml-2 ${selectedNode.complexity > 10 ? 'text-red-600 font-bold' : ''}`}>
                          {selectedNode.complexity}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechnicalDebtGraphExplorer;
