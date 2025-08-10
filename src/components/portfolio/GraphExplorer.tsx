import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from 'd3';
import { useOntology } from '../../contexts/OntologyContext';
import FilterPanel from '../common/FilterPanel';
import NodeDetailsPanel from '../common/NodeDetailsPanel';

const GraphExplorer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const simulationRef = useRef<any>(null);
  const { state, getFilteredNodes, getFilteredEdges } = useOntology();
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [showInconsistencies, setShowInconsistencies] = useState(true);
  const [showTypeLabels, setShowTypeLabels] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    // Stop previous simulation
    if (simulationRef.current) {
      simulationRef.current.stop();
    }

    setIsLoading(true);
    
    // Small delay to show loading state and prevent rapid re-renders
    const timer = setTimeout(() => {
      try {
        renderGraph();
      } catch (error) {
        console.error('Error rendering graph:', error);
      } finally {
        setIsLoading(false);
      }
    }, 200);

    return () => {
      clearTimeout(timer);
      if (simulationRef.current) {
        simulationRef.current.stop();
      }
    };
  }, [state.selectedProduct, state.selectedOntology, state.selectedOntologies, showInconsistencies, showTypeLabels]);

  const renderGraph = () => {
    if (!svgRef.current) return;

    const nodes = getFilteredNodes();
    const edges = getFilteredEdges();

    // Debug logging for cross-ontology relationship
    if (process.env.NODE_ENV === 'development') {
      const targetEdge = edges.find(e => e.id === 'phoenix_ux_layer_to_login_code');
      const sourceNode = nodes.find(n => n.id === 'phoenix_layer_ux');
      const targetNode = nodes.find(n => n.id === 'phoenix_backend_class_login');
      console.log('GraphExplorer render debug:', {
        totalNodes: nodes.length,
        totalEdges: edges.length,
        targetEdgeExists: !!targetEdge,
        sourceNodeExists: !!sourceNode,
        targetNodeExists: !!targetNode,
        selectedOntologies: Array.from(state.selectedOntologies),
        selectedProduct: state.selectedProduct
      });
    }

    // Clear previous graph
    d3.select(svgRef.current).selectAll("*").remove();

    // Safety check for empty data
    if (!nodes || nodes.length === 0) {
      const svg = d3.select(svgRef.current);
      svg.append("text")
        .attr("x", 600)
        .attr("y", 400)
        .attr("text-anchor", "middle")
        .attr("fill", "#6b7280")
        .style("font-size", "16px")
        .text("No nodes match the current filters");
      return;
    }

    const width = 1200;
    const height = 800;
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .style("width", "100%")
      .style("height", "auto");

    // Create zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on("zoom", (event) => {
        container.attr("transform", event.transform);
      });

    svg.call(zoom);

    const container = svg.append("g");

    // Define color scales
    const getNodeColor = (node: any) => {
      const colors = {
        functional: '#3b82f6',
        design: '#8b5cf6',
        architecture: '#10b981',
        code: '#f59e0b'
      };
      const baseColor = colors[node.type as keyof typeof colors] || '#6b7280';
      
      // Make root nodes darker
      if (node.level === 'root') {
        const rootColors = {
          functional: '#1e40af', // darker blue
          design: '#6d28d9',     // darker purple
          architecture: '#047857', // darker green
          code: '#d97706'        // darker orange
        };
        return rootColors[node.type as keyof typeof rootColors] || '#374151';
      }
      
      return baseColor;
    };

    const getProductBorder = (product: string) => {
      const colors = {
        phoenix: '#ef4444',
        apollo: '#3b82f6',
        voyager: '#8b5cf6'
      };
      return colors[product as keyof typeof colors] || '#6b7280';
    };

    // Create copies of the data to avoid mutation issues
    const nodesCopy = nodes.map(n => ({ ...n }));
    const edgesCopy = edges.map(e => ({ ...e }));

    // Create force simulation with safety checks
    let simulation: any;
    try {
      simulation = d3.forceSimulation(nodesCopy as any)
        .force("link", d3.forceLink(edgesCopy).id((d: any) => d.id).distance(100).strength(0.5))
        .force("charge", d3.forceManyBody().strength(-300))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collision", d3.forceCollide().radius(25));
      
      // Store simulation reference for cleanup
      simulationRef.current = simulation;
    } catch (error) {
      console.error('Error creating simulation:', error);
      return;
    }

    // Create edges
    const link = container.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(edgesCopy)
      .enter().append("line")
      .attr("stroke", (d: any) => {
        if (showInconsistencies && d.inconsistent) {
          return "#ef4444";
        }
        // Color edges by relationship type
        const edgeColors = {
          implements: "#3b82f6",
          supports: "#10b981", 
          requires: "#f59e0b",
          triggers: "#8b5cf6",
          validates: "#ef4444",
          realizes: "#06b6d4",
          renders: "#84cc16",
          manages: "#6366f1"
        };
        return edgeColors[d.type as keyof typeof edgeColors] || "#d1d5db";
      })
      .attr("stroke-width", (d: any) => {
        if (showInconsistencies && d.inconsistent) {
          return 3;
        }
        return Math.max(1.5, d.strength * 2.5);
      })
      .attr("stroke-dasharray", (d: any) => {
        if (showInconsistencies && d.inconsistent) {
          return "5,5";
        }
        return "none";
      })
      .attr("opacity", 0.7);

    // Create edge labels for inconsistent edges
    if (showInconsistencies) {
      const edgeLabels = container.append("g")
        .attr("class", "edge-labels")
        .selectAll("text")
        .data(edgesCopy.filter((d: any) => d.inconsistent))
        .enter().append("text")
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("font-weight", "bold")
        .attr("fill", "#ef4444")
        .attr("background", "white")
        .text((d: any) => d.type);
    }

    // Create nodes
    const node = container.append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(nodesCopy)
      .enter().append("g")
      .attr("class", "node")
      .style("cursor", "pointer")
      .call(d3.drag<any, any>()
        .on("start", (event, d: any) => {
          if (!event.active) simulation.alphaTarget(0.3).restart();
          d.fx = d.x;
          d.fy = d.y;
        })
        .on("drag", (event, d: any) => {
          d.fx = event.x;
          d.fy = event.y;
        })
        .on("end", (event, d: any) => {
          if (!event.active) simulation.alphaTarget(0);
          d.fx = null;
          d.fy = null;
        }));

    // Add circles for nodes
    node.append("circle")
      .attr("r", (d: any) => {
        // Make root nodes larger
        if (d.level === 'root') {
          return 25;
        }
        
        const hasInconsistencies = d.inconsistencies && d.inconsistencies.length > 0;
        return hasInconsistencies && showInconsistencies ? 18 : 15;
      })
      .attr("fill", (d: any) => getNodeColor(d))
      .attr("stroke", (d: any) => getProductBorder(d.product))
      .attr("stroke-width", (d: any) => {
        const hasInconsistencies = d.inconsistencies && d.inconsistencies.length > 0;
        return hasInconsistencies && showInconsistencies ? 4 : 2;
      })
      .attr("stroke-dasharray", (d: any) => {
        const hasInconsistencies = d.inconsistencies && d.inconsistencies.length > 0;
        return hasInconsistencies && showInconsistencies ? "3,3" : "none";
      })
      .style("opacity", 0.9);

    // Add labels for nodes
    node.append("text")
      .attr("dx", 20)
      .attr("dy", 5)
      .attr("font-size", "11px")
      .attr("font-weight", "500")
      .attr("fill", "#374151")
      .text((d: any) => {
        const maxLength = 20;
        return d.name.length > maxLength ? d.name.substring(0, maxLength) + "..." : d.name;
      });

    // Add type labels if enabled
    if (showTypeLabels) {
      node.append("text")
        .attr("dx", 20)
        .attr("dy", -8)
        .attr("font-size", "9px")
        .attr("font-weight", "600")
        .attr("fill", (d: any) => getNodeColor(d))
        .style("opacity", 0.8)
        .text((d: any) => {
          const typeLabels = {
            functional: 'F',
            design: 'D', 
            architecture: 'A',
            code: 'C'
          };
          return typeLabels[d.type as keyof typeof typeLabels] || d.type.charAt(0).toUpperCase();
        });

      // Add level labels
      node.append("text")
        .attr("dx", 20)
        .attr("dy", 18)
        .attr("font-size", "8px")
        .attr("font-weight", "400")
        .attr("fill", "#6b7280")
        .style("opacity", 0.7)
        .text((d: any) => {
          const levelText = d.level.replace('_', ' ');
          return levelText.length > 15 ? levelText.substring(0, 12) + "..." : levelText;
        });
    }

    // Add inconsistency indicators
    if (showInconsistencies) {
      node.filter((d: any) => d.inconsistencies && d.inconsistencies.length > 0)
        .append("circle")
        .attr("r", 6)
        .attr("cx", 12)
        .attr("cy", -12)
        .attr("fill", "#ef4444")
        .attr("stroke", "white")
        .attr("stroke-width", 2);

      node.filter((d: any) => d.inconsistencies && d.inconsistencies.length > 0)
        .append("text")
        .attr("x", 12)
        .attr("y", -8)
        .attr("text-anchor", "middle")
        .attr("font-size", "10px")
        .attr("font-weight", "bold")
        .attr("fill", "white")
        .text("!");
    }

    // Node interactions
    node
      .on("mouseover", function(event, d: any) {
        const hoverSize = d.level === 'root' ? 30 : 20;
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", hoverSize)
          .style("opacity", 1);

        // Highlight connected edges
        link.style("opacity", (linkData: any) => {
          return linkData.source.id === d.id || linkData.target.id === d.id ? 1 : 0.2;
        });

        // Highlight connected nodes
        node.style("opacity", (nodeData: any) => {
          const isConnected = edgesCopy.some((edge: any) => 
            (edge.source.id === d.id && edge.target.id === nodeData.id) ||
            (edge.target.id === d.id && edge.source.id === nodeData.id)
          );
          return nodeData.id === d.id || isConnected ? 1 : 0.3;
        });
      })
      .on("mouseout", function(event, d: any) {
        let baseRadius;
        if (d.level === 'root') {
          baseRadius = 25;
        } else {
          const hasInconsistencies = d.inconsistencies && d.inconsistencies.length > 0;
          baseRadius = hasInconsistencies && showInconsistencies ? 18 : 15;
        }
        
        d3.select(this).select("circle")
          .transition()
          .duration(200)
          .attr("r", baseRadius)
          .style("opacity", 0.9);

        // Reset highlighting
        link.style("opacity", 0.6);
        node.style("opacity", 1);
      })
      .on("click", function(event, d: any) {
        setSelectedNodeId(d.id);
        event.stopPropagation();
      });

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      if (showInconsistencies) {
        container.selectAll(".edge-labels text")
          .attr("x", (d: any) => (d.source.x + d.target.x) / 2)
          .attr("y", (d: any) => (d.source.y + d.target.y) / 2);
      }

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // Click on svg to deselect
    svg.on("click", () => {
      setSelectedNodeId(null);
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900">Graph Explorer</h2>
          <p className="text-gray-600 text-sm mt-1">
            Interactive visualization of {getFilteredNodes().length} nodes and {getFilteredEdges().length} relationships
          </p>
        </div>
      </div>
      
      <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
          <FilterPanel 
            showInconsistencies={showInconsistencies}
            onToggleInconsistencies={() => setShowInconsistencies(!showInconsistencies)}
            multiOntologyMode={true}
          />
          
          {/* Display Options */}
          <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Display Options</h3>
            <label className="flex items-center mb-3">
              <input
                type="checkbox"
                checked={showTypeLabels}
                onChange={() => setShowTypeLabels(!showTypeLabels)}
                className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-gray-600">
                Show Type Labels
              </span>
            </label>
          </div>
          
          {/* Legend */}
          <div className="mt-6 bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3">Legend</h3>
            
            {/* Ontology Types */}
            <div className="mb-4">
              <h4 className="text-xs font-medium text-gray-700 mb-2">Ontology Types</h4>
              <div className="space-y-2">
                {[
                  { type: 'functional', color: '#3b82f6', label: 'Functional' },
                  { type: 'design', color: '#8b5cf6', label: 'Design' },
                  { type: 'architecture', color: '#10b981', label: 'Architecture' },
                  { type: 'code', color: '#f59e0b', label: 'Code' }
                ].map(item => (
                  <div key={item.type} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Borders */}
            <div className="mb-4">
              <h4 className="text-xs font-medium text-gray-700 mb-2">Product Borders</h4>
              <div className="space-y-2">
                {[
                  { product: 'phoenix', color: '#ef4444', label: 'Phoenix' },
                  { product: 'apollo', color: '#3b82f6', label: 'Apollo' },
                  { product: 'voyager', color: '#8b5cf6', label: 'Voyager' }
                ].map(item => (
                  <div key={item.product} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full border-2" 
                      style={{ borderColor: item.color, backgroundColor: 'white' }}
                    ></div>
                    <span className="text-xs text-gray-600">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Edge Types */}
            <div className="mb-4">
              <h4 className="text-xs font-medium text-gray-700 mb-2">Relationship Types</h4>
              <div className="grid grid-cols-2 gap-1 text-xs">
                {[
                  { type: 'implements', color: '#3b82f6' },
                  { type: 'supports', color: '#10b981' },
                  { type: 'requires', color: '#f59e0b' },
                  { type: 'triggers', color: '#8b5cf6' },
                  { type: 'validates', color: '#ef4444' },
                  { type: 'realizes', color: '#06b6d4' },
                  { type: 'renders', color: '#84cc16' },
                  { type: 'manages', color: '#6366f1' }
                ].map(item => (
                  <div key={item.type} className="flex items-center space-x-1">
                    <div 
                      className="w-3 h-0.5" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs text-gray-600 capitalize">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inconsistency Indicators */}
            {showInconsistencies && (
              <div>
                <h4 className="text-xs font-medium text-gray-700 mb-2">Inconsistencies</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-xs text-gray-600">Node Issues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-0.5 bg-red-500" style={{ content: '', borderTop: '2px dashed #ef4444' }}></div>
                    <span className="text-xs text-gray-600">Edge Issues</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Main Graph Area */}
        <div className="flex-1 relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
                <p className="text-gray-600">Loading graph...</p>
              </div>
            </div>
          )}
          
          <div className="h-full bg-white">
            <svg ref={svgRef} className="w-full h-full"></svg>
          </div>

          {/* Graph Controls */}
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-sm border border-gray-200 p-2">
            <div className="text-xs text-gray-500 text-center mb-2">Graph Controls</div>
            <div className="space-y-1 text-xs text-gray-600">
              <div>• Drag nodes to reposition</div>
              <div>• Scroll to zoom</div>
              <div>• Click node for details</div>
              <div>• Hover to highlight connections</div>
              <div>• Select multiple ontologies</div>
              <div>• Toggle type/level labels</div>
            </div>
          </div>
        </div>

        {/* Node Details Panel */}
        <NodeDetailsPanel 
          nodeId={selectedNodeId} 
          onClose={() => setSelectedNodeId(null)} 
        />
      </div>
    </div>
  );
};

export default GraphExplorer;