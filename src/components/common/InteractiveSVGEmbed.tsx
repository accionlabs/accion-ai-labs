import React, { useEffect, useRef, useState } from 'react';

export interface InteractionConfig {
  triggerId: string;
  showElements?: string[];
  hideElements?: string[];
  isDefault?: boolean;
  activeStyles?: Record<string, any>;
  inactiveStyles?: Record<string, any>;
}

interface InteractiveSVGEmbedProps {
  svgPath: string;
  interactions: InteractionConfig[];
  height?: string;
  onInteraction?: (triggerId: string) => void;
}

const InteractiveSVGEmbed: React.FC<InteractiveSVGEmbedProps> = ({
  svgPath,
  interactions,
  height = '600px',
  onInteraction
}) => {
  const embedRef = useRef<HTMLEmbedElement>(null);
  const [svgDoc, setSvgDoc] = useState<Document | null>(null);
  const [activeTrigger, setActiveTrigger] = useState<string | null>(null);

  useEffect(() => {
    if (!embedRef.current) return;

    const setupInteractions = () => {
      const embed = embedRef.current;
      if (!embed) return;

      // Wait for the SVG to load
      const checkSVG = () => {
        const doc = (embed as any).getSVGDocument?.() || (embed as any).contentDocument;
        if (doc && doc.querySelector('svg')) {
          setSvgDoc(doc);
          
          // Get the SVG element
          const svg = doc.querySelector('svg');
          if (svg) {
            // First, inject a style element with !important rules
            const style = doc.createElement('style');
            style.textContent = `
              * {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif !important;
              }
              text, tspan {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                  sans-serif !important;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
              }
            `;
            
            // Insert style as first child of SVG
            svg.insertBefore(style, svg.firstChild);
            
            // Apply font override function - only change font-family, not colors
            const applyFontOverrides = () => {
              const textElements = doc.querySelectorAll('text, tspan');
              textElements.forEach((text: any) => {
                // Remove font-family from style attribute if it exists
                if (text.hasAttribute('style')) {
                  const currentStyle = text.getAttribute('style');
                  const newStyle = currentStyle.replace(/font-family:[^;]+;?/gi, '');
                  text.setAttribute('style', newStyle);
                }
                
                // Remove font-family attribute if it exists
                if (text.hasAttribute('font-family')) {
                  text.removeAttribute('font-family');
                }
                
                // Force set the font-family using style property - don't change colors
                text.style.setProperty('font-family', '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif', 'important');
              });
            };
            
            // Apply immediately and after a short delay to ensure it takes effect
            applyFontOverrides();
            setTimeout(applyFontOverrides, 100);
            setTimeout(applyFontOverrides, 500);
          }
          
          // Find default interaction
          const defaultInteraction = interactions.find(i => i.isDefault);
          const initialTrigger = defaultInteraction?.triggerId || null;
          setActiveTrigger(initialTrigger);

          // Setup interactions
          interactions.forEach(interaction => {
            const isDefault = interaction.triggerId === initialTrigger;
            const trigger = doc.getElementById(interaction.triggerId);
            
            if (trigger) {
              trigger.style.cursor = 'pointer';
              trigger.style.transition = 'all 0.3s ease';

              // Apply initial styles
              if (isDefault && interaction.activeStyles) {
                Object.entries(interaction.activeStyles).forEach(([key, value]) => {
                  (trigger.style as any)[key] = value;
                });
              } else if (!isDefault && interaction.inactiveStyles) {
                Object.entries(interaction.inactiveStyles).forEach(([key, value]) => {
                  (trigger.style as any)[key] = value;
                });
              }

              // Add click handler
              trigger.addEventListener('click', () => {
                handleInteraction(interaction.triggerId);
              });

              // Add hover effects
              trigger.addEventListener('mouseenter', () => {
                if (interaction.triggerId !== activeTrigger) {
                  trigger.style.opacity = '0.8';
                }
              });

              trigger.addEventListener('mouseleave', () => {
                if (interaction.triggerId !== activeTrigger) {
                  const opacity = interaction.inactiveStyles?.opacity || '1';
                  trigger.style.opacity = String(opacity);
                }
              });
            }

            // Setup initial visibility
            interaction.showElements?.forEach(elementId => {
              const element = doc.getElementById(elementId);
              if (element) {
                element.style.display = isDefault ? 'block' : 'none';
                element.style.opacity = isDefault ? '1' : '0';
                element.style.transition = 'opacity 0.3s ease-in-out';
              }
            });
          });
        } else {
          // Retry if SVG not loaded yet
          setTimeout(checkSVG, 100);
        }
      };

      const handleInteraction = (triggerId: string) => {
        setActiveTrigger(triggerId);
        updateVisibility(triggerId);
        if (onInteraction) {
          onInteraction(triggerId);
        }
      };

      const updateVisibility = (newActiveTrigger: string) => {
        if (!svgDoc) return;

        interactions.forEach(interaction => {
          const isActive = interaction.triggerId === newActiveTrigger;
          const trigger = svgDoc.getElementById(interaction.triggerId);

          if (trigger) {
            if (isActive && interaction.activeStyles) {
              Object.entries(interaction.activeStyles).forEach(([key, value]) => {
                (trigger.style as any)[key] = value;
              });
            } else if (!isActive && interaction.inactiveStyles) {
              Object.entries(interaction.inactiveStyles).forEach(([key, value]) => {
                (trigger.style as any)[key] = value;
              });
            }
          }

          if (isActive) {
            // Show elements
            interaction.showElements?.forEach(elementId => {
              const element = svgDoc.getElementById(elementId);
              if (element) {
                element.style.display = 'block';
                setTimeout(() => {
                  element.style.opacity = '1';
                }, 10);
              }
            });

            // Hide specified elements
            interaction.hideElements?.forEach(elementId => {
              const element = svgDoc.getElementById(elementId);
              if (element) {
                element.style.opacity = '0';
                setTimeout(() => {
                  element.style.display = 'none';
                }, 300);
              }
            });
          } else {
            // Hide elements for inactive interactions
            interaction.showElements?.forEach(elementId => {
              const element = svgDoc.getElementById(elementId);
              if (element) {
                element.style.opacity = '0';
                setTimeout(() => {
                  element.style.display = 'none';
                }, 300);
              }
            });
          }
        });
      };

      checkSVG();
    };

    // Load event for embed
    embedRef.current.addEventListener('load', setupInteractions);

    return () => {
      if (embedRef.current) {
        embedRef.current.removeEventListener('load', setupInteractions);
      }
    };
  }, [svgPath, interactions, onInteraction]);

  // Update visibility when activeTrigger changes
  useEffect(() => {
    if (!svgDoc || !activeTrigger) return;

    interactions.forEach(interaction => {
      const isActive = interaction.triggerId === activeTrigger;
      const trigger = svgDoc.getElementById(interaction.triggerId);

      if (trigger) {
        if (isActive && interaction.activeStyles) {
          Object.entries(interaction.activeStyles).forEach(([key, value]) => {
            (trigger.style as any)[key] = value;
          });
        } else if (!isActive && interaction.inactiveStyles) {
          Object.entries(interaction.inactiveStyles).forEach(([key, value]) => {
            (trigger.style as any)[key] = value;
          });
        }
      }

      if (isActive) {
        interaction.showElements?.forEach(elementId => {
          const element = svgDoc.getElementById(elementId);
          if (element) {
            element.style.display = 'block';
            setTimeout(() => {
              element.style.opacity = '1';
            }, 10);
          }
        });

        interaction.hideElements?.forEach(elementId => {
          const element = svgDoc.getElementById(elementId);
          if (element) {
            element.style.opacity = '0';
            setTimeout(() => {
              element.style.display = 'none';
            }, 300);
          }
        });
      } else {
        interaction.showElements?.forEach(elementId => {
          const element = svgDoc.getElementById(elementId);
          if (element) {
            element.style.opacity = '0';
            setTimeout(() => {
              element.style.display = 'none';
            }, 300);
          }
        });
      }
    });
  }, [activeTrigger, svgDoc, interactions]);

  return (
    <embed
      ref={embedRef}
      src={svgPath}
      type="image/svg+xml"
      width="100%"
      height={height}
      style={{ border: 'none' }}
    />
  );
};

export default InteractiveSVGEmbed;