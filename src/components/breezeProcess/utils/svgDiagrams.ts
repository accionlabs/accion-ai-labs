// Utility functions for generating common SVG diagrams

export interface LayerConfig {
  id: string;
  title: string;
  subtitle?: string;
  color: string;
  backgroundColor: string;
}

export interface FlowStepConfig {
  id: string;
  title: string;
  subtitle?: string;
  color: string;
  backgroundColor: string;
}

export interface DiagramDimensions {
  width: number;
  height: number;
  padding: number;
}

/**
 * Generates a layered architecture diagram with stacked layers and arrows
 */
export const generateLayeredArchitectureDiagram = (
  layers: LayerConfig[], 
  dimensions: DiagramDimensions = { width: 300, height: 220, padding: 10 }
): string => {
  const { width, height, padding } = dimensions;
  const layerHeight = (height - padding * 2 - (layers.length - 1) * 10) / layers.length;
  
  let svgContent = '';
  
  // Add layers
  layers.forEach((layer, index) => {
    const y = padding + index * (layerHeight + 10);
    
    svgContent += `
      <rect x="${padding}" y="${y}" width="${width - padding * 2}" height="${layerHeight}" 
            rx="5" fill="${layer.backgroundColor}" stroke="${layer.color}" stroke-width="2"/>
      <text x="${width / 2}" y="${y + layerHeight / 2 - 5}" text-anchor="middle" 
            font-family="Arial" font-size="14" font-weight="bold" fill="${layer.color}">
        ${layer.title}
      </text>`;
    
    if (layer.subtitle) {
      svgContent += `
        <text x="${width / 2}" y="${y + layerHeight / 2 + 10}" text-anchor="middle" 
              font-family="Arial" font-size="11" fill="${layer.color}">
          ${layer.subtitle}
        </text>`;
    }
    
    // Add arrow to next layer
    if (index < layers.length - 1) {
      const arrowY = y + layerHeight;
      svgContent += `
        <path d="M ${width / 2} ${arrowY} L ${width / 2} ${arrowY + 10}" 
              stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>`;
    }
  });
  
  // Add arrow marker definition
  const markerDefs = `
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
      </marker>
    </defs>`;
  
  return markerDefs + svgContent;
};

/**
 * Generates a horizontal process flow diagram
 */
export const generateProcessFlowDiagram = (
  steps: FlowStepConfig[],
  dimensions: DiagramDimensions = { width: 600, height: 120, padding: 20 }
): string => {
  const { width, height, padding } = dimensions;
  const stepWidth = (width - padding * 2 - (steps.length - 1) * 40) / steps.length;
  const stepHeight = height - padding * 2;
  
  let svgContent = '';
  
  steps.forEach((step, index) => {
    const x = padding + index * (stepWidth + 40);
    const y = padding;
    
    // Step box
    svgContent += `
      <rect x="${x}" y="${y}" width="${stepWidth}" height="${stepHeight}" 
            rx="8" fill="${step.backgroundColor}" stroke="${step.color}" stroke-width="2"/>
      <text x="${x + stepWidth / 2}" y="${y + stepHeight / 2 - 5}" text-anchor="middle" 
            font-family="Arial" font-size="12" font-weight="bold" fill="${step.color}">
        ${step.title}
      </text>`;
    
    if (step.subtitle) {
      svgContent += `
        <text x="${x + stepWidth / 2}" y="${y + stepHeight / 2 + 10}" text-anchor="middle" 
              font-family="Arial" font-size="10" fill="${step.color}">
          ${step.subtitle}
        </text>`;
    }
    
    // Arrow to next step
    if (index < steps.length - 1) {
      const arrowStartX = x + stepWidth;
      const arrowEndX = arrowStartX + 40;
      const arrowY = y + stepHeight / 2;
      
      svgContent += `
        <path d="M ${arrowStartX} ${arrowY} L ${arrowEndX} ${arrowY}" 
              stroke="#666" stroke-width="2" marker-end="url(#arrowhead)"/>`;
    }
  });
  
  // Add arrow marker definition
  const markerDefs = `
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#666"/>
      </marker>
    </defs>`;
  
  return markerDefs + svgContent;
};

/**
 * Generates a component interaction diagram with nodes and connections
 */
export const generateComponentInteractionDiagram = (
  components: Array<{
    id: string;
    title: string;
    x: number;
    y: number;
    color: string;
    backgroundColor: string;
  }>,
  connections: Array<{
    from: string;
    to: string;
    label?: string;
  }>,
  _dimensions: DiagramDimensions = { width: 400, height: 300, padding: 20 }
): string => {
  // const { width, height } = dimensions; // These are defined but not used in this function
  const componentWidth = 80;
  const componentHeight = 40;
  
  let svgContent = '';
  
  // Draw connections first (so they appear behind components)
  connections.forEach(connection => {
    const fromComponent = components.find(c => c.id === connection.from);
    const toComponent = components.find(c => c.id === connection.to);
    
    if (fromComponent && toComponent) {
      const fromX = fromComponent.x + componentWidth / 2;
      const fromY = fromComponent.y + componentHeight / 2;
      const toX = toComponent.x + componentWidth / 2;
      const toY = toComponent.y + componentHeight / 2;
      
      svgContent += `
        <path d="M ${fromX} ${fromY} L ${toX} ${toY}" 
              stroke="#94a3b8" stroke-width="2" marker-end="url(#arrowhead)" opacity="0.7"/>`;
      
      if (connection.label) {
        const midX = (fromX + toX) / 2;
        const midY = (fromY + toY) / 2;
        svgContent += `
          <text x="${midX}" y="${midY - 5}" text-anchor="middle" 
                font-family="Arial" font-size="10" fill="#64748b">
            ${connection.label}
          </text>`;
      }
    }
  });
  
  // Draw components
  components.forEach(component => {
    svgContent += `
      <rect x="${component.x}" y="${component.y}" width="${componentWidth}" height="${componentHeight}" 
            rx="6" fill="${component.backgroundColor}" stroke="${component.color}" stroke-width="2"/>
      <text x="${component.x + componentWidth / 2}" y="${component.y + componentHeight / 2 + 4}" 
            text-anchor="middle" font-family="Arial" font-size="11" font-weight="bold" fill="${component.color}">
        ${component.title}
      </text>`;
  });
  
  // Add arrow marker definition
  const markerDefs = `
    <defs>
      <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
        <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
      </marker>
    </defs>`;
  
  return markerDefs + svgContent;
};

/**
 * Helper function to create an SVGDiagram object with common defaults
 */
export const createSVGDiagram = (
  content: string,
  width: string = '100%',
  height: string = 'auto',
  viewBox?: string,
  className?: string
) => ({
  content,
  width,
  height,
  viewBox,
  className: className || 'border border-gray-200 rounded-lg bg-white'
});