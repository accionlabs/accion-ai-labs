import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useOntology } from '../../contexts/OntologyContext';
import { OntologyNode } from '../../types/ontology';
import * as d3 from 'd3';
import { 
  unifiedDesignNodesConfig, 
  unifiedCodeNodesConfig,
  UnifiedNodeConfig 
} from '../../config/rationalizationConfig';

// Use the UnifiedNodeConfig from the config file
type UnifiedNode = UnifiedNodeConfig;

const RationalizationRoadmap: React.FC = () => {
  const { state } = useOntology();
  const [sourceDesignNodes, setSourceDesignNodes] = useState<{
    phoenix: OntologyNode[];
    apollo: OntologyNode[];
    voyager: OntologyNode[];
  }>({ phoenix: [], apollo: [], voyager: [] });
  
  const [unifiedDesignNodes, setUnifiedDesignNodes] = useState<UnifiedNode[]>([]);
  const [unifiedCodeNodes, setUnifiedCodeNodes] = useState<UnifiedNode[]>([]);
  const [unifiedArchitectureNodes, setUnifiedArchitectureNodes] = useState<UnifiedNode[]>([]);
  const [sourceArchitectureNodes, setSourceArchitectureNodes] = useState<{
    phoenix: OntologyNode[];
    apollo: OntologyNode[];
    voyager: OntologyNode[];
  }>({ phoenix: [], apollo: [], voyager: [] });
  const [selectedView, setSelectedView] = useState<'design' | 'code' | 'architecture'>('architecture');
  
  const designMappingRef = useRef<SVGSVGElement>(null);
  const codeMappingRef = useRef<SVGSVGElement>(null);
  const architectureMappingRef = useRef<SVGSVGElement>(null);
  
  const findCodeNodesConnectedToDesign = (designNodeId: string): OntologyNode[] => {
    const connectedCodeNodes: OntologyNode[] = [];
    
    // Find edges where design node connects to code nodes
    const relevantEdges = state.edges.filter(edge => 
      edge.source === designNodeId || edge.target === designNodeId
    );
    
    console.log(`        Edges involving ${designNodeId}: ${relevantEdges.length}`);
    
    relevantEdges.forEach(edge => {
      const otherNodeId = edge.source === designNodeId ? edge.target : edge.source;
      const otherNode = state.nodes.find(n => n.id === otherNodeId);
      
      if (otherNode && otherNode.type === 'code') {
        console.log(`          Found code connection: ${otherNode.id} (${otherNode.name})`);
        connectedCodeNodes.push(otherNode);
      }
    });
    
    return connectedCodeNodes;
  };
  
  const populateCodeMappingsFromDesign = useCallback((unifiedCodeNodes: UnifiedNode[]) => {
    // For each unified design node, find which existing design nodes map to it
    // Then find which existing code nodes are connected to those design nodes
    // Finally, map those code nodes to the corresponding unified code nodes
    
    console.log('=== POPULATING CODE MAPPINGS FROM DESIGN ===');
    console.log('Unified Design Nodes:', unifiedDesignNodes.length);
    console.log('Total edges in system:', state.edges.length);
    
    let totalMappingsFound = 0;
    
    unifiedDesignNodes.forEach(unifiedDesign => {
      console.log(`\nProcessing unified design: ${unifiedDesign.name}`);
      
      // Get all source design nodes that map to this unified design
      const sourceDesignIds = [
        ...unifiedDesign.sourceMappings.phoenix,
        ...unifiedDesign.sourceMappings.apollo,
        ...unifiedDesign.sourceMappings.voyager
      ];
      
      console.log(`  Source design IDs:`, sourceDesignIds);
      
      // Find code nodes connected to these design nodes
      sourceDesignIds.forEach(designId => {
        const designNode = state.nodes.find(n => n.id === designId);
        console.log(`    Checking design node: ${designId} (${designNode?.name})`);
        
        const connectedCodeNodes = findCodeNodesConnectedToDesign(designId);
        console.log(`      Found ${connectedCodeNodes.length} connected code nodes`);
        
        // Map these code nodes to appropriate unified code nodes based on level
        connectedCodeNodes.forEach(codeNode => {
          console.log(`        Code node: ${codeNode.id} (${codeNode.name}, level: ${codeNode.level})`);
          
          // Determine which unified code node this should map to
          let targetUnifiedCode: UnifiedNode | undefined;
          
          if (codeNode.level === 'frontend_components' || codeNode.level === 'backend_classes') {
            targetUnifiedCode = unifiedCodeNodes.find(n => n.id === 'unified_code_auth_component');
          } else if (codeNode.level === 'frontend_functions' || codeNode.level === 'backend_functions') {
            targetUnifiedCode = unifiedCodeNodes.find(n => n.id === 'unified_code_auth_service');
          } else if (codeNode.level === 'backend_properties' || codeNode.level === 'frontend_properties') {
            targetUnifiedCode = unifiedCodeNodes.find(n => n.id === 'unified_code_auth_store');
          } else if (codeNode.level === 'backend_functions' && codeNode.name.includes('handler')) {
            targetUnifiedCode = unifiedCodeNodes.find(n => n.id === 'unified_code_auth_api');
          }
          
          if (targetUnifiedCode) {
            console.log(`          -> Mapping to: ${targetUnifiedCode.name}`);
            if (!targetUnifiedCode.sourceMappings[codeNode.product as keyof typeof targetUnifiedCode.sourceMappings].includes(codeNode.id)) {
              targetUnifiedCode.sourceMappings[codeNode.product as keyof typeof targetUnifiedCode.sourceMappings].push(codeNode.id);
              totalMappingsFound++;
            }
          } else {
            console.log(`          -> No target found for level: ${codeNode.level}`);
          }
        });
      });
    });
    
    console.log(`\n=== TOTAL MAPPINGS FOUND: ${totalMappingsFound} ===\n`);
  }, [unifiedDesignNodes, state.nodes, state.edges]);
  
  const generateUnifiedCodeNodes = useCallback(() => {
    // Load unified code nodes from configuration
    const unified: UnifiedNode[] = [...unifiedCodeNodesConfig];
    
    // For now, skip the dynamic population and use static mappings from config
    // populateCodeMappingsFromDesign(unified);
    
    console.log('Unified Code Nodes from Config:', unified);
    
    setUnifiedCodeNodes(unified);
  }, []);

  useEffect(() => {
    // Get design nodes that are impacted by overlapping functionality
    // In a real implementation, this would come from the overlap analysis
    const impactedDesignNodes = {
      phoenix: state.nodes.filter(n => n.type === 'design' && n.product === 'phoenix'),
      apollo: state.nodes.filter(n => n.type === 'design' && n.product === 'apollo'),
      voyager: state.nodes.filter(n => n.type === 'design' && n.product === 'voyager')
    };
    
    setSourceDesignNodes(impactedDesignNodes);
    
    // Get architecture nodes
    const impactedArchitectureNodes = {
      phoenix: state.nodes.filter(n => n.type === 'architecture' && n.product === 'phoenix'),
      apollo: state.nodes.filter(n => n.type === 'architecture' && n.product === 'apollo'),
      voyager: state.nodes.filter(n => n.type === 'architecture' && n.product === 'voyager')
    };
    
    setSourceArchitectureNodes(impactedArchitectureNodes);
    
    // Generate unified design nodes based on atomic design principles
    generateUnifiedDesignNodes(impactedDesignNodes);
    
    // Generate unified architecture nodes
    generateUnifiedArchitectureNodes(impactedArchitectureNodes);
  }, [state.nodes]);
  
  useEffect(() => {
    // Generate unified code nodes after design nodes are ready
    if (unifiedDesignNodes.length > 0) {
      generateUnifiedCodeNodes();
    }
  }, [unifiedDesignNodes, state.edges, generateUnifiedCodeNodes]);

  const generateUnifiedDesignNodes = (sourceNodes: typeof sourceDesignNodes) => {
    // Load unified design nodes from configuration
    const unified: UnifiedNode[] = [...unifiedDesignNodesConfig];
    
    // Optional: You can still apply dynamic filters here if needed
    // For now, we use the static mappings from the config
    
    console.log('Unified Design Nodes from Config:', unified);
    
    setUnifiedDesignNodes(unified);
  };

  const generateUnifiedArchitectureNodes = (sourceNodes: typeof sourceArchitectureNodes) => {
    // Create unified architecture nodes with hardcoded mappings to actual node IDs
    const unified: UnifiedNode[] = [
      {
        id: 'unified_arch_auth_service',
        name: 'Authentication Service',
        type: 'architecture',
        level: 'services',
        description: 'Unified authentication service handling all auth flows',
        sourceMappings: {
          phoenix: ['phoenix_service_auth'],
          apollo: ['apollo_service_auth', 'apollo_service_identity'],
          voyager: ['voyager_service_identity']
        }
      },
      {
        id: 'unified_arch_api_gateway',
        name: 'API Gateway',
        type: 'architecture',
        level: 'layers',
        description: 'Unified API gateway with consistent endpoints',
        sourceMappings: {
          phoenix: ['phoenix_layer_services'],
          apollo: ['apollo_layer_gateway'],
          voyager: ['voyager_layer_gateway']
        }
      },
      {
        id: 'unified_arch_data_layer',
        name: 'Data Access Layer',
        type: 'architecture',
        level: 'layers',
        description: 'Unified data access patterns and repositories',
        sourceMappings: {
          phoenix: ['phoenix_layer_services'],
          apollo: ['apollo_layer_services'],
          voyager: ['voyager_layer_data']
        }
      },
      {
        id: 'unified_arch_user_module',
        name: 'User Management Module',
        type: 'architecture',
        level: 'modules',
        description: 'Consolidated user management functionality',
        sourceMappings: {
          phoenix: ['phoenix_entity_php_backend'],
          apollo: ['apollo_entity_auth_microservice'],
          voyager: ['voyager_entity_sso_provider']
        }
      },
      {
        id: 'unified_arch_security_layer',
        name: 'Security Layer',
        type: 'architecture',
        level: 'layers',
        description: 'Unified security patterns and policies',
        sourceMappings: {
          phoenix: ['phoenix_service_auth'],
          apollo: ['apollo_service_notification'],
          voyager: ['voyager_service_api_key']
        }
      },
      {
        id: 'unified_arch_infrastructure',
        name: 'Infrastructure Root',
        type: 'architecture',
        level: 'root',
        description: 'Unified deployment and infrastructure',
        sourceMappings: {
          phoenix: ['phoenix_architecture_root'],
          apollo: ['apollo_architecture_root'],
          voyager: ['voyager_architecture_root']
        }
      },
      {
        id: 'unified_arch_ux_layer',
        name: 'User Experience Layer',
        type: 'architecture',
        level: 'layers',
        description: 'Unified frontend architecture',
        sourceMappings: {
          phoenix: ['phoenix_layer_ux'],
          apollo: ['apollo_layer_ux'],
          voyager: ['voyager_layer_ux']
        }
      }
    ];
    
    setUnifiedArchitectureNodes(unified);
  };

  // This section is now moved above

  useEffect(() => {
    if (selectedView === 'design' && designMappingRef.current && unifiedDesignNodes.length > 0) {
      drawMappingVisualization(designMappingRef.current, unifiedDesignNodes, sourceDesignNodes);
    } else if (selectedView === 'code' && codeMappingRef.current && unifiedCodeNodes.length > 0) {
      drawCodeMappingVisualization(codeMappingRef.current, unifiedCodeNodes);
    } else if (selectedView === 'architecture' && architectureMappingRef.current && unifiedArchitectureNodes.length > 0) {
      drawArchitectureMappingVisualization(architectureMappingRef.current, unifiedArchitectureNodes, sourceArchitectureNodes);
    }
  }, [selectedView, unifiedDesignNodes, unifiedCodeNodes, unifiedArchitectureNodes, sourceDesignNodes, sourceArchitectureNodes, state.nodes]);

  const drawMappingVisualization = (
    svgElement: SVGSVGElement, 
    targetNodes: UnifiedNode[], 
    sourceNodes: typeof sourceDesignNodes
  ) => {
    const svg = d3.select(svgElement);
    svg.selectAll("*").remove();
    
    const width = 1200;
    const height = 900;
    const margin = { top: 40, right: 40, bottom: 40, left: 20 };
    
    svg.attr("width", width).attr("height", height);
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Draw source nodes on the left
    const sourceX = 50;
    let sourceY = 20;
    const nodeHeight = 35;
    const nodeWidth = 200;
    const nodeSpacing = 8;
    const productSpacing = 50; // Space between product groups
    const maxNodesPerProduct = 6;
    
    // Calculate section heights
    const sectionHeight = (maxNodesPerProduct * (nodeHeight + nodeSpacing)) + productSpacing;
    
    // Phoenix nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#dc2626")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Phoenix Design");
    
    sourceY += 20;
    
    sourceNodes.phoenix.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#fee2e2")
        .attr("stroke", "#dc2626")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      // Add text with proper clipping
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#991b1b");
      
      // Truncate text if too long
      const maxLength = 25;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    sourceY += sectionHeight;
    
    // Apollo nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#2563eb")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Apollo Design");
    
    sourceY += 20;
    
    sourceNodes.apollo.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#dbeafe")
        .attr("stroke", "#2563eb")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#1e40af");
      
      const maxLength = 25;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    sourceY += sectionHeight;
    
    // Voyager nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#7c3aed")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Voyager Design");
    
    sourceY += 20;
    
    sourceNodes.voyager.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#ede9fe")
        .attr("stroke", "#7c3aed")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#6d28d9");
      
      const maxLength = 25;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    // Draw target unified nodes on the right
    const targetX = 700;
    let targetY = 100;
    
    g.append("text")
      .attr("x", targetX)
      .attr("y", targetY - 10)
      .attr("fill", "#059669")
      .attr("font-weight", "bold")
      .text("Unified Design System");
    
    const targetNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    targetNodes.forEach((node, i) => {
      const y = targetY + (i * (nodeHeight + nodeSpacing + 20));
      targetNodePositions[node.id] = { x: targetX, y: y + nodeHeight/2 };
      
      g.append("rect")
        .attr("x", targetX)
        .attr("y", y)
        .attr("width", 180)
        .attr("height", nodeHeight + 10)
        .attr("fill", "#d1fae5")
        .attr("stroke", "#059669")
        .attr("stroke-width", 2)
        .attr("rx", 4);
      
      g.append("text")
        .attr("x", targetX + 10)
        .attr("y", y + 15)
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text(node.name);
      
      g.append("text")
        .attr("x", targetX + 10)
        .attr("y", y + 30)
        .attr("font-size", "10px")
        .attr("fill", "#6b7280")
        .text(node.level);
    });
    
    // Draw mapping lines
    const lineGenerator = d3.line()
      .curve(d3.curveBasis);
    
    // Track source node positions
    const sourceNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    // Phoenix nodes positions
    let currentY = 40; // Starting Y after "Phoenix Design" label
    sourceNodes.phoenix.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = currentY + (i * (nodeHeight + nodeSpacing));
      sourceNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
    });
    
    // Apollo nodes positions
    currentY = 40 + sectionHeight; // Starting Y after "Apollo Design" label
    sourceNodes.apollo.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = currentY + (i * (nodeHeight + nodeSpacing));
      sourceNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
    });
    
    // Voyager nodes positions  
    currentY = 40 + (sectionHeight * 2); // Starting Y after "Voyager Design" label
    sourceNodes.voyager.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = currentY + (i * (nodeHeight + nodeSpacing));
      sourceNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
    });
    
    targetNodes.forEach(targetNode => {
      const targetPos = targetNodePositions[targetNode.id];
      
      // Map from each source
      ['phoenix', 'apollo', 'voyager'].forEach((product) => {
        const mappedIds = targetNode.sourceMappings[product as keyof typeof targetNode.sourceMappings];
        
        mappedIds.forEach(sourceId => {
          const sourcePos = sourceNodePositions[sourceId];
          if (sourcePos && targetPos) {
            const path = lineGenerator([
              [sourcePos.x, sourcePos.y],
              [(sourcePos.x + targetX) / 2, sourcePos.y],
              [(sourcePos.x + targetX) / 2, targetPos.y],
              [targetX, targetPos.y]
            ] as [number, number][]);
            
            g.append("path")
              .attr("d", path)
              .attr("fill", "none")
              .attr("stroke", product === 'phoenix' ? "#dc2626" : product === 'apollo' ? "#2563eb" : "#7c3aed")
              .attr("stroke-width", 1)
              .attr("opacity", 0.4)
              .attr("stroke-dasharray", "3,3");
          }
        });
      });
    });
  };

  const drawCodeMappingVisualization = (svgElement: SVGSVGElement, targetNodes: UnifiedNode[]) => {
    const svg = d3.select(svgElement);
    svg.selectAll("*").remove();
    
    // Get source code nodes from state - only nodes with type: 'code'
    const sourceCodeNodes = {
      phoenix: state.nodes.filter(n => n.type === 'code' && n.product === 'phoenix'),
      apollo: state.nodes.filter(n => n.type === 'code' && n.product === 'apollo'),
      voyager: state.nodes.filter(n => n.type === 'code' && n.product === 'voyager')
    };
    
    console.log('\n=== DRAWING CODE MAPPING VISUALIZATION ===');
    console.log('Target nodes:', targetNodes.length);
    console.log('Source code nodes by product:', {
      phoenix: sourceCodeNodes.phoenix.length,
      apollo: sourceCodeNodes.apollo.length,
      voyager: sourceCodeNodes.voyager.length
    });
    
    // Debug: Show what mappings exist
    console.log('\nTarget nodes and their mappings:');
    targetNodes.forEach(target => {
      const totalMappings = 
        target.sourceMappings.phoenix.length + 
        target.sourceMappings.apollo.length + 
        target.sourceMappings.voyager.length;
      console.log(`${target.name}: ${totalMappings} total mappings`);
      if (target.sourceMappings.phoenix.length > 0) {
        console.log('  Phoenix:', target.sourceMappings.phoenix);
      }
      if (target.sourceMappings.apollo.length > 0) {
        console.log('  Apollo:', target.sourceMappings.apollo);
      }
      if (target.sourceMappings.voyager.length > 0) {
        console.log('  Voyager:', target.sourceMappings.voyager);
      }
    });
    
    // Log available source nodes to understand what we have
    console.log('\nAvailable source nodes:');
    console.log('Phoenix nodes:', sourceCodeNodes.phoenix.map(n => n.id));
    console.log('Apollo nodes:', sourceCodeNodes.apollo.map(n => n.id));
    console.log('Voyager nodes:', sourceCodeNodes.voyager.map(n => n.id));
    
    // Layout constants
    const sourceX = 50;
    let sourceY = 20;
    const nodeHeight = 35;
    const nodeWidth = 250;
    const nodeSpacing = 8;
    const productSpacing = 60;
    const maxNodesPerProduct = 8;
    
    // Calculate dynamic height based on actual content
    const phoenixCount = Math.min(sourceCodeNodes.phoenix.length, maxNodesPerProduct);
    const apolloCount = Math.min(sourceCodeNodes.apollo.length, maxNodesPerProduct);
    const voyagerCount = Math.min(sourceCodeNodes.voyager.length, maxNodesPerProduct);
    
    const totalHeight = 20 + // initial margin
      (phoenixCount * (nodeHeight + nodeSpacing)) + productSpacing + 30 + // phoenix section
      (apolloCount * (nodeHeight + nodeSpacing)) + productSpacing + 30 + // apollo section  
      (voyagerCount * (nodeHeight + nodeSpacing)) + 30; // voyager section
    
    const width = 1200;
    const height = Math.max(700, totalHeight + 100);
    const margin = { top: 40, right: 40, bottom: 40, left: 20 };
    
    svg.attr("width", width).attr("height", height);
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Phoenix code nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#dc2626")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Phoenix Code");
    
    sourceY += 20;
    const phoenixNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    sourceCodeNodes.phoenix.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      phoenixNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
      
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#fee2e2")
        .attr("stroke", "#dc2626")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#991b1b");
      
      const maxLength = 28;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    sourceY += (phoenixCount * (nodeHeight + nodeSpacing)) + productSpacing;
    
    // Apollo code nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#2563eb")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Apollo Code");
    
    sourceY += 20;
    const apolloNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    sourceCodeNodes.apollo.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      apolloNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
      
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#dbeafe")
        .attr("stroke", "#2563eb")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#1e40af");
      
      const maxLength = 28;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    sourceY += (apolloCount * (nodeHeight + nodeSpacing)) + productSpacing;
    
    // Voyager code nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#7c3aed")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Voyager Code");
    
    sourceY += 20;
    const voyagerNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    sourceCodeNodes.voyager.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      voyagerNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
      
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#ede9fe")
        .attr("stroke", "#7c3aed")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#6d28d9");
      
      const maxLength = 28;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    // Draw target unified code nodes on the right
    const targetX = 700;
    let targetY = 80;
    
    g.append("text")
      .attr("x", targetX)
      .attr("y", targetY - 10)
      .attr("fill", "#ea580c")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Unified Code Implementation");
    
    targetY += 10;
    const targetNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    targetNodes.forEach((node, i) => {
      const y = targetY + (i * (nodeHeight + nodeSpacing + 30));
      targetNodePositions[node.id] = { x: targetX, y: y + nodeHeight/2 };
      
      g.append("rect")
        .attr("x", targetX)
        .attr("y", y)
        .attr("width", 240)
        .attr("height", nodeHeight + 15)
        .attr("fill", "#fed7aa")
        .attr("stroke", "#ea580c")
        .attr("stroke-width", 2)
        .attr("rx", 4);
      
      g.append("text")
        .attr("x", targetX + 10)
        .attr("y", y + 18)
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text(node.name);
      
      g.append("text")
        .attr("x", targetX + 10)
        .attr("y", y + 35)
        .attr("font-size", "10px")
        .attr("fill", "#6b7280")
        .text(node.level.replace('_', ' '));
    });
    
    // Draw mapping lines
    const lineGenerator = d3.line()
      .curve(d3.curveBasis);
    
    targetNodes.forEach(targetNode => {
      const targetPos = targetNodePositions[targetNode.id];
      
      // Map from each source based on sourceMappings
      if (targetNode.sourceMappings.phoenix && targetNode.sourceMappings.phoenix.length > 0) {
        console.log(`Drawing ${targetNode.sourceMappings.phoenix.length} Phoenix connections for ${targetNode.name}`);
        targetNode.sourceMappings.phoenix.forEach(sourceId => {
          const sourcePos = phoenixNodePositions[sourceId];
          console.log(`  Phoenix source ${sourceId}: position =`, sourcePos);
          if (sourcePos && targetPos) {
            const path = lineGenerator([
              [sourcePos.x, sourcePos.y],
              [(sourcePos.x + targetX) / 2, sourcePos.y],
              [(sourcePos.x + targetX) / 2, targetPos.y],
              [targetX, targetPos.y]
            ] as [number, number][]);
            
            g.append("path")
              .attr("d", path)
              .attr("fill", "none")
              .attr("stroke", "#dc2626")
              .attr("stroke-width", 1.5)
              .attr("opacity", 0.5)
              .attr("stroke-dasharray", "3,3");
          }
        });
      }
      
      if (targetNode.sourceMappings.apollo && targetNode.sourceMappings.apollo.length > 0) {
        console.log(`Drawing ${targetNode.sourceMappings.apollo.length} Apollo connections for ${targetNode.name}`);
        targetNode.sourceMappings.apollo.forEach(sourceId => {
          const sourcePos = apolloNodePositions[sourceId];
          console.log(`  Apollo source ${sourceId}: position =`, sourcePos);
          if (sourcePos && targetPos) {
            const path = lineGenerator([
              [sourcePos.x, sourcePos.y],
              [(sourcePos.x + targetX) / 2, sourcePos.y],
              [(sourcePos.x + targetX) / 2, targetPos.y],
              [targetX, targetPos.y]
            ] as [number, number][]);
            
            g.append("path")
              .attr("d", path)
              .attr("fill", "none")
              .attr("stroke", "#2563eb")
              .attr("stroke-width", 1.5)
              .attr("opacity", 0.5)
              .attr("stroke-dasharray", "3,3");
          }
        });
      }
      
      if (targetNode.sourceMappings.voyager && targetNode.sourceMappings.voyager.length > 0) {
        console.log(`Drawing ${targetNode.sourceMappings.voyager.length} Voyager connections for ${targetNode.name}`);
        targetNode.sourceMappings.voyager.forEach(sourceId => {
          const sourcePos = voyagerNodePositions[sourceId];
          console.log(`  Voyager source ${sourceId}: position =`, sourcePos);
          if (sourcePos && targetPos) {
            const path = lineGenerator([
              [sourcePos.x, sourcePos.y],
              [(sourcePos.x + targetX) / 2, sourcePos.y],
              [(sourcePos.x + targetX) / 2, targetPos.y],
              [targetX, targetPos.y]
            ] as [number, number][]);
            
            g.append("path")
              .attr("d", path)
              .attr("fill", "none")
              .attr("stroke", "#7c3aed")
              .attr("stroke-width", 1.5)
              .attr("opacity", 0.5)
              .attr("stroke-dasharray", "3,3");
          }
        });
      }
    });
  };

  const drawArchitectureMappingVisualization = (
    svgElement: SVGSVGElement, 
    targetNodes: UnifiedNode[], 
    sourceNodes: typeof sourceArchitectureNodes
  ) => {
    const svg = d3.select(svgElement);
    svg.selectAll("*").remove();
    
    const width = 1200;
    const height = 900;
    const margin = { top: 40, right: 40, bottom: 40, left: 20 };
    
    svg.attr("width", width).attr("height", height);
    svg.attr("viewBox", `0 0 ${width} ${height}`);
    
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);
    
    // Draw source nodes on the left
    const sourceX = 50;
    let sourceY = 20;
    const nodeHeight = 35;
    const nodeWidth = 220;
    const nodeSpacing = 8;
    const productSpacing = 50;
    const maxNodesPerProduct = 6;
    
    // Calculate section heights
    const sectionHeight = (maxNodesPerProduct * (nodeHeight + nodeSpacing)) + productSpacing;
    
    // Phoenix nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#dc2626")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Phoenix Architecture");
    
    sourceY += 20;
    
    sourceNodes.phoenix.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#fee2e2")
        .attr("stroke", "#dc2626")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#991b1b");
      
      const maxLength = 28;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    sourceY += sectionHeight;
    
    // Apollo nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#2563eb")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Apollo Architecture");
    
    sourceY += 20;
    
    sourceNodes.apollo.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#dbeafe")
        .attr("stroke", "#2563eb")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#1e40af");
      
      const maxLength = 28;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    sourceY += sectionHeight;
    
    // Voyager nodes
    g.append("text")
      .attr("x", sourceX)
      .attr("y", sourceY)
      .attr("fill", "#7c3aed")
      .attr("font-weight", "bold")
      .attr("font-size", "14px")
      .text("Voyager Architecture");
    
    sourceY += 20;
    
    sourceNodes.voyager.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = sourceY + (i * (nodeHeight + nodeSpacing));
      g.append("rect")
        .attr("x", sourceX)
        .attr("y", y)
        .attr("width", nodeWidth)
        .attr("height", nodeHeight)
        .attr("fill", "#ede9fe")
        .attr("stroke", "#7c3aed")
        .attr("rx", 4)
        .attr("id", `source-${node.id}`);
      
      const text = g.append("text")
        .attr("x", sourceX + 8)
        .attr("y", y + nodeHeight/2 + 4)
        .attr("font-size", "11px")
        .attr("fill", "#6d28d9");
      
      const maxLength = 28;
      const displayText = node.name.length > maxLength ? 
        node.name.substring(0, maxLength) + '...' : node.name;
      text.text(displayText);
    });
    
    // Draw target unified nodes on the right
    const targetX = 700;
    let targetY = 100;
    
    g.append("text")
      .attr("x", targetX)
      .attr("y", targetY - 10)
      .attr("fill", "#059669")
      .attr("font-weight", "bold")
      .text("Unified Architecture");
    
    const targetNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    targetNodes.forEach((node, i) => {
      const y = targetY + (i * (nodeHeight + nodeSpacing + 20));
      targetNodePositions[node.id] = { x: targetX, y: y + nodeHeight/2 };
      
      g.append("rect")
        .attr("x", targetX)
        .attr("y", y)
        .attr("width", 200)
        .attr("height", nodeHeight + 10)
        .attr("fill", "#d1fae5")
        .attr("stroke", "#059669")
        .attr("stroke-width", 2)
        .attr("rx", 4);
      
      g.append("text")
        .attr("x", targetX + 10)
        .attr("y", y + 15)
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text(node.name);
      
      g.append("text")
        .attr("x", targetX + 10)
        .attr("y", y + 30)
        .attr("font-size", "10px")
        .attr("fill", "#6b7280")
        .text(node.level);
    });
    
    // Draw mapping lines
    const lineGenerator = d3.line()
      .curve(d3.curveBasis);
    
    // Track source node positions for architecture
    const sourceNodePositions: {[key: string]: {x: number, y: number}} = {};
    
    // Phoenix architecture nodes positions
    let currentY = 40; // Starting Y after "Phoenix Architecture" label
    sourceNodes.phoenix.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = currentY + (i * (nodeHeight + nodeSpacing));
      sourceNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
    });
    
    // Apollo architecture nodes positions
    currentY = 40 + sectionHeight; // Starting Y after "Apollo Architecture" label
    sourceNodes.apollo.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = currentY + (i * (nodeHeight + nodeSpacing));
      sourceNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
    });
    
    // Voyager architecture nodes positions  
    currentY = 40 + (sectionHeight * 2); // Starting Y after "Voyager Architecture" label
    sourceNodes.voyager.slice(0, maxNodesPerProduct).forEach((node, i) => {
      const y = currentY + (i * (nodeHeight + nodeSpacing));
      sourceNodePositions[node.id] = { x: sourceX + nodeWidth, y: y + nodeHeight/2 };
    });
    
    targetNodes.forEach(targetNode => {
      const targetPos = targetNodePositions[targetNode.id];
      
      // Map from each source
      ['phoenix', 'apollo', 'voyager'].forEach((product) => {
        const mappedIds = targetNode.sourceMappings[product as keyof typeof targetNode.sourceMappings];
        
        mappedIds.forEach(sourceId => {
          const sourcePos = sourceNodePositions[sourceId];
          if (sourcePos && targetPos) {
            const path = lineGenerator([
              [sourcePos.x, sourcePos.y],
              [(sourcePos.x + targetX) / 2, sourcePos.y],
              [(sourcePos.x + targetX) / 2, targetPos.y],
              [targetX, targetPos.y]
            ] as [number, number][]);
            
            g.append("path")
              .attr("d", path)
              .attr("fill", "none")
              .attr("stroke", product === 'phoenix' ? "#dc2626" : product === 'apollo' ? "#2563eb" : "#7c3aed")
              .attr("stroke-width", 1)
              .attr("opacity", 0.4)
              .attr("stroke-dasharray", "3,3");
          }
        });
      });
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-4">
          <h2 className="text-xl font-semibold text-gray-900">Rationalization Roadmap</h2>
          <p className="text-gray-600 text-sm mt-1">
            Strategy comparison, design & architecture rationalization tracks for unified portfolio
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-4 lg:py-8">
        {/* Rationalization Strategy Comparison */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Rationalization Strategy Comparison</h2>
          <p className="text-gray-600 mb-6">
            Three implementation strategies with different risk profiles, timelines, and code impact.
          </p>
          
          <div className="space-y-6">
            {/* Strategy 1: Big Bang */}
            <div className="border-2 border-red-200 rounded-lg p-6 bg-red-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-red-900">Strategy 1: Big Bang Replacement</h3>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">High Risk</span>
                  <span className="text-sm text-gray-600">12-18 months</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Approach</h4>
                  <p className="text-sm text-gray-600">Replace all three products with unified solution at once</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Code Changes</h4>
                  <p className="text-sm text-gray-600">~80% codebase replacement • 58 components affected</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Design Impact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Complete UI overhaul</li>
                    <li>• New component library</li>
                    <li>• Extensive training needed</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Architecture Impact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Full system migration</li>
                    <li>• Complete data migration</li>
                    <li>• Service rewrites</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-red-200 flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-gray-600">Cost: <strong className="text-red-600">$$$$$</strong></span>
                  <span className="text-gray-600">Downtime: <strong className="text-red-600">Significant</strong></span>
                </div>
              </div>
            </div>

            {/* Strategy 2: Phased Migration */}
            <div className="border-2 border-blue-200 rounded-lg p-6 bg-blue-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Strategy 2: Phased Migration</h3>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">Medium Risk</span>
                  <span className="text-sm text-gray-600">18-24 months</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Approach</h4>
                  <p className="text-sm text-gray-600">Migrate products one by one, starting with Phoenix (most legacy)</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Code Changes</h4>
                  <p className="text-sm text-gray-600">~30% per phase • 17-20 components per product</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Design Impact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Gradual UI updates</li>
                    <li>• Progressive component adoption</li>
                    <li>• Phased training</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Architecture Impact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Service-by-service migration</li>
                    <li>• API versioning required</li>
                    <li>• Temporary integration layers</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-blue-200 flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-gray-600">Cost: <strong className="text-yellow-600">$$$$</strong></span>
                  <span className="text-gray-600">Downtime: <strong className="text-yellow-600">Minimal per phase</strong></span>
                </div>
              </div>
            </div>

            {/* Strategy 3: Strangler Fig */}
            <div className="border-2 border-green-300 rounded-lg p-6 bg-green-50 relative">
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-xs font-bold">RECOMMENDED</span>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-green-900">Strategy 3: Strangler Fig Pattern</h3>
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">Low Risk</span>
                  <span className="text-sm text-gray-600">24-30 months</span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Approach</h4>
                  <p className="text-sm text-gray-600">Build unified components alongside existing, gradually replace</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Code Changes</h4>
                  <p className="text-sm text-gray-600">~10-15% increments • 5-8 components at a time</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Design Impact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Incremental design system adoption</li>
                    <li>• A/B testing possible</li>
                    <li>• Continuous user feedback</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Architecture Impact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Facade pattern implementation</li>
                    <li>• Gradual backend consolidation</li>
                    <li>• Zero downtime deployment</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-green-200 flex items-center justify-between">
                <div className="flex items-center space-x-6 text-sm">
                  <span className="text-gray-600">Cost: <strong className="text-green-600">$$$</strong></span>
                  <span className="text-gray-600">Downtime: <strong className="text-green-600">None</strong></span>
                </div>
                <div className="text-sm text-green-700 font-medium">
                  ✓ Best balance of risk, cost, and business continuity
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={() => setSelectedView('architecture')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedView === 'architecture' 
                  ? 'bg-green-100 text-green-700 border-2 border-green-300' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Architecture Rationalization
            </button>
            <button
              onClick={() => setSelectedView('design')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedView === 'design' 
                  ? 'bg-purple-100 text-purple-700 border-2 border-purple-300' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Design Rationalization
            </button>
            <button
              onClick={() => setSelectedView('code')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedView === 'code' 
                  ? 'bg-orange-100 text-orange-700 border-2 border-orange-300' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              Code Rationalization
            </button>
          </div>
        </div>

        {/* Architecture Rationalization View */}
        {selectedView === 'architecture' && (
          <>
            {/* Unified Architecture Components */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Unified Architecture Components</h2>
              <p className="text-sm text-gray-600 mb-4">
                Consolidated architecture patterns derived from overlapping functionality analysis
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Service Layer */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">Authentication Service</h3>
                    <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
                      Services
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Unified auth service handling all authentication flows</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• OAuth 2.0 / SAML support</li>
                    <li>• JWT token management</li>
                    <li>• Session handling</li>
                  </ul>
                  <div className="text-xs text-gray-500 mt-3">
                    <div>Consolidates:</div>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-red-600">P: 3 services</span>
                      <span className="text-blue-600">A: 2 services</span>
                      <span className="text-purple-600">V: 2 services</span>
                    </div>
                  </div>
                </div>

                {/* API Layer */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">API Gateway</h3>
                    <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
                      Layers
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Unified API gateway with consistent endpoints</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• RESTful API design</li>
                    <li>• GraphQL support</li>
                    <li>• Rate limiting</li>
                  </ul>
                  <div className="text-xs text-gray-500 mt-3">
                    <div>Consolidates:</div>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-red-600">P: 12 endpoints</span>
                      <span className="text-blue-600">A: 8 endpoints</span>
                      <span className="text-purple-600">V: 10 endpoints</span>
                    </div>
                  </div>
                </div>

                {/* Data Layer */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">Data Access Layer</h3>
                    <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
                      Layers
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Unified data access patterns and repositories</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Repository pattern</li>
                    <li>• ORM abstraction</li>
                    <li>• Caching strategy</li>
                  </ul>
                  <div className="text-xs text-gray-500 mt-3">
                    <div>Consolidates:</div>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-red-600">P: MySQL</span>
                      <span className="text-blue-600">A: MongoDB</span>
                      <span className="text-purple-600">V: ElasticSearch</span>
                    </div>
                  </div>
                </div>

                {/* Module Architecture */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">User Management Module</h3>
                    <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
                      Modules
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Consolidated user management functionality</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Profile management</li>
                    <li>• Role-based access</li>
                    <li>• Permissions system</li>
                  </ul>
                  <div className="text-xs text-gray-500 mt-3">
                    <div>Replaces:</div>
                    <div className="flex space-x-2 mt-1">
                      <span className="text-red-600">P: 4 modules</span>
                      <span className="text-blue-600">A: 3 modules</span>
                      <span className="text-purple-600">V: 3 modules</span>
                    </div>
                  </div>
                </div>

                {/* Security Architecture */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">Security Layer</h3>
                    <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
                      Layers
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Unified security patterns and policies</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Encryption standards</li>
                    <li>• Security headers</li>
                    <li>• Audit logging</li>
                  </ul>
                  <div className="text-xs text-gray-500 mt-3">
                    <div>Improves:</div>
                    <div className="text-xs">
                      <span className="text-green-600">Consistent security across all products</span>
                    </div>
                  </div>
                </div>

                {/* Infrastructure */}
                <div className="border border-green-200 bg-green-50 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-green-800">Infrastructure Root</h3>
                    <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
                      Root
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Unified deployment and infrastructure</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• Container orchestration</li>
                    <li>• CI/CD pipelines</li>
                    <li>• Monitoring setup</li>
                  </ul>
                  <div className="text-xs text-gray-500 mt-3">
                    <div>Benefits:</div>
                    <div className="text-xs">
                      <span className="text-green-600">Single deployment strategy</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Architecture Mapping Visualization */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Architecture Mapping Visualization</h2>
              <p className="text-sm text-gray-600 mb-4">
                Mapping from existing architecture components to unified architecture patterns
              </p>
              <div className="overflow-x-auto -mx-4 px-4">
                <svg ref={architectureMappingRef}></svg>
              </div>
            </div>

            {/* Architecture Migration Strategy */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Architecture Migration Strategy</h2>
              
              <div className="space-y-6">
                {/* Phase 1 */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Service Consolidation</h3>
                  <p className="text-sm text-gray-600 mb-3">Consolidate authentication and user management services</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Phoenix</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Extract auth logic</li>
                        <li>• Create service facade</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Apollo</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Adapt JWT handling</li>
                        <li>• Unify token format</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Voyager</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Integrate SAML</li>
                        <li>• Standardize SSO</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 2: API Unification</h3>
                  <p className="text-sm text-gray-600 mb-3">Create unified API gateway with versioned endpoints</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">API Design</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• RESTful standards</li>
                        <li>• OpenAPI spec</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Gateway Setup</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Route configuration</li>
                        <li>• Load balancing</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Migration</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Gradual cutover</li>
                        <li>• Backward compat</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 3: Data Layer Integration</h3>
                  <p className="text-sm text-gray-600 mb-3">Implement unified data access patterns</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Data Abstraction</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Repository pattern</li>
                        <li>• Query builders</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Migration Strategy</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Schema mapping</li>
                        <li>• Data sync tools</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Performance</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Caching layers</li>
                        <li>• Query optimization</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Design Rationalization View */}
        {selectedView === 'design' && (
          <>
            {/* Unified Design Components */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Unified Design System Components</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unifiedDesignNodes.map(node => (
                  <div key={node.id} className="border border-purple-200 bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-purple-800">{node.name}</h3>
                      <span className="text-xs bg-purple-200 text-purple-700 px-2 py-1 rounded">
                        {node.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{node.description}</p>
                    <div className="text-xs text-gray-500">
                      <div>Maps from:</div>
                      <div className="flex space-x-2 mt-1">
                        <span className="text-red-600">P: {node.sourceMappings.phoenix.length}</span>
                        <span className="text-blue-600">A: {node.sourceMappings.apollo.length}</span>
                        <span className="text-purple-600">V: {node.sourceMappings.voyager.length}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Design Mapping Visualization */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Design Mapping Visualization</h2>
              <div className="overflow-x-auto -mx-4 px-4">
                <svg ref={designMappingRef}></svg>
              </div>
            </div>
          </>
        )}

        {/* Code Rationalization View */}
        {selectedView === 'code' && (
          <>
            {/* Unified Code Structure */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Unified Code Implementation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unifiedCodeNodes.map(node => {
                  const totalMappings = node.sourceMappings.phoenix.length + 
                                       node.sourceMappings.apollo.length + 
                                       node.sourceMappings.voyager.length;
                  return (
                    <div key={node.id} className="border border-orange-200 bg-orange-50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-orange-800">{node.name}</h3>
                        <span className="text-xs bg-orange-200 text-orange-700 px-2 py-1 rounded">
                          {node.level.replace('_', ' ')}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{node.description}</p>
                      <div className="text-xs text-gray-500">
                        {totalMappings > 0 ? (
                          <>
                            <div>Consolidates:</div>
                            <div className="flex space-x-2 mt-1">
                              <span className="text-red-600">P: {node.sourceMappings.phoenix.length}</span>
                              <span className="text-blue-600">A: {node.sourceMappings.apollo.length}</span>
                              <span className="text-purple-600">V: {node.sourceMappings.voyager.length}</span>
                            </div>
                          </>
                        ) : (
                          <div className="text-yellow-600">No direct code mappings found</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Code Mapping Visualization */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Code Mapping Visualization</h2>
              <p className="text-sm text-gray-600 mb-4">
                Code mappings are derived from design connections: Existing Code → Existing Design → Unified Design → Unified Code
              </p>
              <div className="overflow-x-auto -mx-4 px-4">
                <svg ref={codeMappingRef}></svg>
              </div>
            </div>
          </>
        )}

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Unified Implementation Roadmap</h2>
          <p className="text-sm text-gray-600 mb-6">
            Comprehensive roadmap integrating architecture, design, and code rationalization tracks
          </p>
          
          <div className="space-y-6">
            {/* Phase 1: Foundation */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 1: Architecture Foundation</h3>
                  <p className="text-sm text-gray-600 mb-3">Establish unified architecture patterns and service boundaries</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Services Layer</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Consolidate auth services</li>
                        <li>• Unify API gateways</li>
                        <li>• Standardize data access</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Infrastructure</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Container orchestration</li>
                        <li>• CI/CD pipelines</li>
                        <li>• Monitoring setup</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Security Layer</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Unified auth patterns</li>
                        <li>• Token management</li>
                        <li>• Security policies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 2: Design System */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 2: Unified Design System</h3>
                  <p className="text-sm text-gray-600 mb-3">Create atomic design components consolidating UI patterns</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Component Library</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Atoms & molecules</li>
                        <li>• Organisms & templates</li>
                        <li>• Design tokens</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Style Guide</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Color systems</li>
                        <li>• Typography scales</li>
                        <li>• Spacing rules</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Documentation</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Component docs</li>
                        <li>• Usage guidelines</li>
                        <li>• Best practices</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 3: Code Implementation */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 3: Code Consolidation</h3>
                  <p className="text-sm text-gray-600 mb-3">Implement unified components and services across products</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Frontend Code</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• React components</li>
                        <li>• State management</li>
                        <li>• API integration</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Backend Services</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Service modules</li>
                        <li>• Business logic</li>
                        <li>• Data models</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Shared Libraries</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Utility functions</li>
                        <li>• Common hooks</li>
                        <li>• Validation logic</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phase 4: Migration & Deployment */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">Phase 4: Migration & Deployment</h3>
                  <p className="text-sm text-gray-600 mb-3">Gradual migration following selected rationalization strategy</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Strangler Fig Pattern</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Incremental replacement</li>
                        <li>• Feature flags</li>
                        <li>• A/B testing</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Quality Assurance</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Regression testing</li>
                        <li>• Performance monitoring</li>
                        <li>• User acceptance</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded p-3">
                      <h4 className="text-xs font-semibold text-gray-700 mb-1">Deprecation</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Legacy code removal</li>
                        <li>• Database cleanup</li>
                        <li>• Documentation update</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RationalizationRoadmap;