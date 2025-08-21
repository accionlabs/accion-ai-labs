import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface InteractionConfig {
  triggerId: string;  // The element ID that triggers the interaction when clicked
  showElements?: string[];  // Elements to show when this trigger is active
  hideElements?: string[];  // Elements to hide when this trigger is active
  toggleElements?: string[];  // Elements to toggle when clicked
  isDefault?: boolean;  // If true, this state is active by default
  className?: string;  // Optional class to apply when active
  activeStyles?: Record<string, any>;  // Styles to apply to trigger when active
  inactiveStyles?: Record<string, any>;  // Styles to apply to trigger when inactive
}

interface InteractiveSVGProps {
  svgPath: string;
  interactions: InteractionConfig[];
  title?: string;
  description?: string;
  className?: string;
  height?: string;
  onInteraction?: (triggerId: string) => void;  // Callback when interaction occurs
}

const InteractiveSVG: React.FC<InteractiveSVGProps> = ({
  svgPath,
  interactions,
  title,
  description,
  className = '',
  height = '600px',
  onInteraction
}) => {
  const [activeTrigger, setActiveTrigger] = useState<string | null>(null);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const d3ContainerRef = useRef<any>(null);

  // Initialize SVG and setup interactions using D3
  useEffect(() => {
    if (!containerRef.current) return;

    const loadAndSetupSVG = async () => {
      try {
        // Create a D3 selection that React won't track
        if (!d3ContainerRef.current && containerRef.current) {
          const div = document.createElement('div');
          div.className = 'w-full h-full';
          containerRef.current.appendChild(div);
          d3ContainerRef.current = d3.select(div);
        }

        // Clear any existing content
        d3ContainerRef.current.selectAll('*').remove();

        // Load the SVG using D3
        const svgText = await d3.text(svgPath);
        
        // Append the SVG to the D3 container
        d3ContainerRef.current.html(svgText);
        
        const svg = d3ContainerRef.current.select('svg');
        if (svg.empty()) {
          console.error('SVG element not found');
          return;
        }

        // Make SVG responsive
        svg.attr('width', '100%').attr('height', '100%');
        
        // Use D3 to set consistent font family across all text elements
        const systemFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif';
        
        // Select all text elements and apply font family only - preserve original colors
        svg.selectAll('text, tspan')
          .attr('font-family', null)  // Remove font-family attribute
          .style('font-family', systemFontStack)
          .style('-webkit-font-smoothing', 'antialiased')
          .style('-moz-osx-font-smoothing', 'grayscale');

        // Find the default interaction
        const defaultInteraction = interactions.find(i => i.isDefault);
        const initialTrigger = defaultInteraction?.triggerId || null;
        
        // Initialize all elements to hidden except default
        interactions.forEach(interaction => {
          // Hide all showElements initially
          interaction.showElements?.forEach(elementId => {
            const element = svg.select(`#${elementId}`);
            if (!element.empty()) {
              const shouldShow = interaction.triggerId === initialTrigger;
              element
                .style('display', shouldShow ? 'block' : 'none')
                .style('visibility', shouldShow ? 'visible' : 'hidden')
                .style('opacity', shouldShow ? '1' : '0');
            }
          });
        });

        // Setup click handlers for triggers
        interactions.forEach(interaction => {
          const trigger = svg.select(`#${interaction.triggerId}`);
          if (!trigger.empty()) {
            trigger
              .style('cursor', 'pointer')
              .on('click', (event: any) => {
                event.stopPropagation();
                setActiveTrigger(interaction.triggerId);
                if (onInteraction) {
                  onInteraction(interaction.triggerId);
                }
              });
          }
        });

        setSvgLoaded(true);
        setActiveTrigger(initialTrigger);
        
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };

    loadAndSetupSVG();

    // Cleanup function - only clean up the D3 managed content
    return () => {
      if (d3ContainerRef.current) {
        d3ContainerRef.current.selectAll('*').remove();
      }
    };
  }, [svgPath, interactions, onInteraction]);

  // Update visibility when activeTrigger changes
  useEffect(() => {
    if (!svgLoaded || !d3ContainerRef.current || activeTrigger === null) return;
    
    const svg = d3ContainerRef.current.select('svg');
    if (svg.empty()) return;
    
    console.log('Updating visibility for trigger:', activeTrigger);
    
    // Process each interaction based on whether it's active
    interactions.forEach(interaction => {
      const isActive = interaction.triggerId === activeTrigger;
      
      // Update trigger styles
      const trigger = svg.select(`#${interaction.triggerId}`);
      if (!trigger.empty()) {
        if (isActive && interaction.activeStyles) {
          Object.entries(interaction.activeStyles).forEach(([key, value]) => {
            trigger.style(key, value);
          });
        } else if (!isActive && interaction.inactiveStyles) {
          Object.entries(interaction.inactiveStyles).forEach(([key, value]) => {
            trigger.style(key, value);
          });
        }
      }
      
      // Handle show/hide elements
      if (isActive) {
        // Show elements for this interaction
        interaction.showElements?.forEach(elementId => {
          const element = svg.select(`#${elementId}`);
          if (!element.empty()) {
            console.log('Showing element:', elementId);
            // Make sure to show the element and all its children
            element
              .style('display', 'block')
              .style('visibility', 'visible')
              .style('opacity', '1');
            
            // If it's a group, ensure children are visible too
            element.selectAll('*').each(function(this: any) {
              d3.select(this)
                .style('display', null)
                .style('visibility', 'visible')
                .style('opacity', '1');
            });
          }
        });
        
        // Hide elements specified in hideElements
        interaction.hideElements?.forEach(elementId => {
          const element = svg.select(`#${elementId}`);
          if (!element.empty()) {
            console.log('Hiding element from hideElements:', elementId);
            element
              .style('display', 'none')
              .style('visibility', 'hidden')
              .style('opacity', '0');
          }
        });
      } else {
        // This interaction is not active, hide its showElements
        interaction.showElements?.forEach(elementId => {
          const element = svg.select(`#${elementId}`);
          if (!element.empty()) {
            console.log('Hiding element (inactive):', elementId);
            element
              .style('display', 'none')
              .style('visibility', 'hidden')
              .style('opacity', '0');
          }
        });
      }
    });
  }, [activeTrigger, svgLoaded, interactions]);

  return (
    <div className={`${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      
      {description && (
        <p className="text-gray-600 mb-4">{description}</p>
      )}
      
      {/* SVG Container - React only manages this div, not its contents */}
      <div 
        ref={containerRef}
        className="w-full bg-gray-50 rounded-lg p-4 flex items-center justify-center overflow-auto"
        style={{ minHeight: height }}
      >
        {!svgLoaded && (
          <div className="absolute text-gray-500">Loading visualization...</div>
        )}
      </div>
    </div>
  );
};

export default InteractiveSVG;