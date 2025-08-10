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
  const [selectedView, setSelectedView] = useState<'design' | 'code'>('design');
  
  const designMappingRef = useRef<SVGSVGElement>(null);
  const codeMappingRef = useRef<SVGSVGElement>(null);
  
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
    
    // Generate unified design nodes based on atomic design principles
    generateUnifiedDesignNodes(impactedDesignNodes);
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

  // This section is now moved above

  useEffect(() => {
    if (selectedView === 'design' && designMappingRef.current && unifiedDesignNodes.length > 0) {
      drawMappingVisualization(designMappingRef.current, unifiedDesignNodes, sourceDesignNodes);
    } else if (selectedView === 'code' && codeMappingRef.current && unifiedCodeNodes.length > 0) {
      drawCodeMappingVisualization(codeMappingRef.current, unifiedCodeNodes);
    }
  }, [selectedView, unifiedDesignNodes, unifiedCodeNodes, sourceDesignNodes, state.nodes]);

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
    
    targetNodes.forEach(targetNode => {
      const targetPos = targetNodePositions[targetNode.id];
      
      // Map from each source
      let sourceIndex = 0;
      ['phoenix', 'apollo', 'voyager'].forEach((product, productIndex) => {
        const sourceList = sourceNodes[product as keyof typeof sourceNodes];
        const mappedIds = targetNode.sourceMappings[product as keyof typeof targetNode.sourceMappings];
        
        mappedIds.forEach(sourceId => {
          const sourceNode = sourceList.find(n => n.id === sourceId);
          if (sourceNode) {
            const sourceNodeIndex = sourceList.indexOf(sourceNode);
            const sourceY = (productIndex * 200) + 50 + (sourceNodeIndex * (nodeHeight + nodeSpacing)) + nodeHeight/2;
            
            const path = lineGenerator([
              [sourceX + 150, sourceY],
              [(sourceX + targetX) / 2, sourceY],
              [(sourceX + targetX) / 2, targetPos.y],
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

  return (
    <div className="min-h-screen bg-gray-50">
      
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h2 className="text-xl font-semibold text-gray-900">UX Rationalization Roadmap</h2>
          <p className="text-gray-600 text-sm mt-1">
            Unified design system and code structure from overlapping functionality
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* View Selector */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
          <div className="flex space-x-4">
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

        {/* Design Rationalization View */}
        {selectedView === 'design' && (
          <>
            {/* Unified Design Components */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Unified Design System Components</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {unifiedDesignNodes.map(node => (
                  <div key={node.id} className="border border-green-200 bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-green-800">{node.name}</h3>
                      <span className="text-xs bg-green-200 text-green-700 px-2 py-1 rounded">
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
              <div className="overflow-x-auto">
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
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              <div className="overflow-x-auto">
                <svg ref={codeMappingRef}></svg>
              </div>
            </div>
          </>
        )}

        {/* Implementation Roadmap */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Implementation Roadmap</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">1</div>
              <div>
                <h3 className="font-semibold text-gray-900">Create Unified Design System</h3>
                <p className="text-sm text-gray-600">Build atomic design components that consolidate patterns from all three products</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">2</div>
              <div>
                <h3 className="font-semibold text-gray-900">Implement Unified Code Components</h3>
                <p className="text-sm text-gray-600">Create shared React components implementing the unified design system</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">3</div>
              <div>
                <h3 className="font-semibold text-gray-900">Migrate Existing Products</h3>
                <p className="text-sm text-gray-600">Gradually replace product-specific components with unified ones</p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mr-4">4</div>
              <div>
                <h3 className="font-semibold text-gray-900">Deprecate Legacy Code</h3>
                <p className="text-sm text-gray-600">Remove redundant implementations once migration is complete</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RationalizationRoadmap;