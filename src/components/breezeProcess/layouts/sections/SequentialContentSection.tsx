import React from 'react';

// Interface for SVG diagram content
interface SVGDiagram {
  content?: string; // SVG markup as string
  src?: string; // Path to external SVG file
  alt?: string; // Alt text for accessibility
  width?: string; // CSS width (e.g., '300px', '100%')
  height?: string; // CSS height (e.g., '200px', 'auto')
  viewBox?: string; // SVG viewBox attribute
  preserveAspectRatio?: string; // SVG preserveAspectRatio attribute
  className?: string; // Additional CSS classes
}

// Unified interface for all sequential content (Timeline, ProcessFlow)
interface SequentialStep {
  id: string;
  number?: string | number;
  title: string;
  description?: string;
  icon?: string;
  // Timeline-specific
  color?: string;
  backgroundColor?: string;
  isHighlight?: boolean;
  textColor?: string;  // Custom text color for the step
  // ProcessFlow-specific
  circleColor?: string;
  details?: string[];
}

interface SequentialContentConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  steps: SequentialStep[];
  variant: 'timeline' | 'process-flow';
  layout?: 'vertical' | 'horizontal';
  
  // SVG diagram support
  svgDiagram?: SVGDiagram;
  
  // Visual styling
  containerStyle?: 'default' | 'gradient' | 'minimal';
  backgroundGradient?: string;
  
  // Step styling options
  stepStyle?: 'card' | 'minimal' | 'highlight';
  numberStyle?: 'circle' | 'badge' | 'none';
  
  // Layout options
  spacing?: 'tight' | 'normal' | 'relaxed';
  alignment?: 'left' | 'center';
}

interface SequentialContentSectionProps {
  content: SequentialContentConfig;
  className?: string;
}

const SequentialContentSection: React.FC<SequentialContentSectionProps> = ({ 
  content, 
  className = '' 
}) => {
  const { 
    title, 
    subtitle, 
    description, 
    steps, 
    variant,
    layout = 'vertical',
    svgDiagram,
    containerStyle = 'default',
    backgroundGradient,
    stepStyle = 'card',
    numberStyle = 'circle',
    spacing = 'normal',
    alignment = 'center'
  } = content;

  // Check if background is dark
  // For process-flow variant, if no backgroundGradient is specified, it uses bg-innovation-gradient (which is dark purple)
  const effectiveBackground = variant === 'process-flow' && !backgroundGradient ? 'bg-innovation-gradient' : backgroundGradient;
  const isDarkBackground = effectiveBackground && (
    effectiveBackground.includes('gray-900') || 
    effectiveBackground.includes('gray-800') || 
    effectiveBackground.includes('gray-700') ||
    effectiveBackground.includes('black') ||
    effectiveBackground.includes('innovation-gradient') ||
    effectiveBackground.includes('purple-900') ||
    effectiveBackground.includes('purple-800') ||
    effectiveBackground.includes('purple-700')
  );

  // Get container styling
  const getContainerClass = () => {
    const baseClass = className;
    
    switch (containerStyle) {
      case 'gradient':
        return `bg-gradient-to-r ${backgroundGradient || 'from-gray-50 to-secondary-light'} rounded-xl p-8 mb-8 border-l-4 border-secondary ${isDarkBackground ? 'text-white' : ''} ${baseClass}`;
      case 'minimal':
        return `mb-8 ${baseClass}`;
      default:
        return `bg-white rounded-xl shadow-lg p-8 mb-8 ${baseClass}`;
    }
  };

  // Get header alignment class
  const getHeaderAlignmentClass = () => {
    return alignment === 'center' ? 'text-center' : 'text-left';
  };

  // Get spacing class for steps container
  const getSpacingClass = () => {
    switch (spacing) {
      case 'tight': return 'space-y-2';
      case 'relaxed': return 'space-y-8';
      default: return layout === 'horizontal' ? 'space-y-6' : 'space-y-4';
    }
  };

  // Get step container class based on variant and stepStyle
  const getStepContainerClass = (step: SequentialStep) => {
    const baseHighlight = step.isHighlight ? 'border-2 border-red-200' : '';
    const baseBackground = step.backgroundColor || (stepStyle === 'card' ? 'bg-gray-50' : 'bg-transparent');
    
    switch (stepStyle) {
      case 'minimal':
        return `${baseHighlight}`;
      case 'highlight':
        return `p-4 ${baseBackground} rounded-lg border ${baseHighlight}`;
      default: // card
        return `p-4 ${baseBackground} rounded-lg ${baseHighlight}`;
    }
  };

  // Get number/circle styling
  const getNumberClass = (step: SequentialStep, _index: number) => {
    if (numberStyle === 'none') return '';
    
    // Use consistent colors for all number circles in process-flow variant
    const baseColor = variant === 'process-flow' 
      ? 'bg-secondary'  // Always use secondary color for process-flow
      : (variant === 'timeline' 
          ? (step.color || 'bg-secondary')
          : (step.circleColor || 'bg-secondary'));
    
    const size = variant === 'process-flow' ? 'w-8 h-8 text-sm' : 'w-12 h-12 text-lg';
    
    switch (numberStyle) {
      case 'badge':
        return `${size} ${baseColor} text-white rounded-md flex items-center justify-center font-bold flex-shrink-0`;
      case 'circle':
      default:
        return `${size} ${baseColor} text-white rounded-full flex items-center justify-center font-bold flex-shrink-0`;
    }
  };

  // Get title styling based on variant and highlight
  const getTitleClass = (step: SequentialStep) => {
    // If step has its own textColor, use that
    if (step.textColor) {
      const baseSize = variant === 'process-flow' ? 'text-base' : 'text-lg';
      return `font-semibold ${baseSize} ${step.textColor}`;
    }
    
    // Check if this specific step has a light background
    const hasLightStepBackground = step.backgroundColor && (
      step.backgroundColor.includes('-50') || 
      step.backgroundColor.includes('-100') || 
      step.backgroundColor.includes('-200') ||
      step.backgroundColor.includes('white')
    );
    
    // Use dark text for light step backgrounds, otherwise check container background
    const baseColor = hasLightStepBackground 
      ? (step.isHighlight ? 'text-red-800' : 'text-gray-800')
      : isDarkBackground 
        ? (step.isHighlight ? 'text-red-300' : 'text-white')
        : (step.isHighlight ? 'text-red-800' : 'text-gray-800');
    const baseSize = variant === 'process-flow' ? 'text-base' : 'text-lg';
    
    return `font-semibold ${baseSize} ${baseColor}`;
  };

  // Get description styling
  const getDescriptionClass = (step: SequentialStep) => {
    // If step has its own textColor, use a lighter shade for description
    if (step.textColor) {
      const baseSize = variant === 'process-flow' ? 'text-xs mt-1' : 'text-sm';
      // If textColor is black, use gray-600 for description
      if (step.textColor === 'text-black') {
        return `${baseSize} text-gray-600`;
      }
      return `${baseSize} ${step.textColor}`;
    }
    
    // Check if this specific step has a light background
    const hasLightStepBackground = step.backgroundColor && (
      step.backgroundColor.includes('-50') || 
      step.backgroundColor.includes('-100') || 
      step.backgroundColor.includes('-200') ||
      step.backgroundColor.includes('white')
    );
    
    // Use appropriate text color based on step background
    const baseColor = hasLightStepBackground
      ? (step.isHighlight ? 'text-red-700' : 'text-gray-600')
      : isDarkBackground
        ? (step.isHighlight ? 'text-red-200' : 'text-gray-200')
        : (step.isHighlight ? 'text-red-700' : 'text-gray-600');
    const baseSize = variant === 'process-flow' ? 'text-xs mt-1' : 'text-sm';
    
    return `${baseSize} ${baseColor}`;
  };

  // Render individual step
  const renderStep = (step: SequentialStep, index: number) => {
    const isHorizontalTimeline = layout === 'horizontal' && variant === 'timeline';
    const isHorizontalProcess = layout === 'horizontal' && variant === 'process-flow';
    
    if (isHorizontalTimeline) {
      // Timeline horizontal layout
      return (
        <div key={step.id} className={`flex items-center gap-6 ${getStepContainerClass(step)}`}>
          {numberStyle !== 'none' && (
            <div className={getNumberClass(step, index)}>
              {step.number || index + 1}
            </div>
          )}
          
          <div className="flex-1">
            <h4 className={getTitleClass(step)}>
              {step.title}
            </h4>
            {step.description && (
              <p className={getDescriptionClass(step)}>
                {step.description}
              </p>
            )}
          </div>
          
          {step.icon && (
            <div className="text-4xl text-gray-300 flex-shrink-0">
              {step.icon}
            </div>
          )}
        </div>
      );
    }
    
    if (isHorizontalProcess) {
      // Process flow horizontal layout
      // For horizontal process flow inside gradient container, always use light text
      const useWhiteText = isDarkBackground && variant === 'process-flow';
      
      return (
        <div key={step.id} className="flex items-center gap-3">
          {numberStyle !== 'none' && (
            <div className={getNumberClass(step, index)}>
              {step.number || index + 1}
            </div>
          )}
          <div className="flex-1">
            <h5 className={useWhiteText ? 'font-semibold text-base text-white' : getTitleClass(step)}>
              {step.title}
              {step.icon && <span className="ml-2">{step.icon}</span>}
            </h5>
            {step.description && (
              <p className={useWhiteText ? 'text-xs mt-1 text-gray-200' : getDescriptionClass(step)}>
                {step.description}
              </p>
            )}
            {step.details && (
              <div className="mt-2 space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className={`text-xs ${isDarkBackground ? 'text-gray-200' : 'text-gray-600'}`}>
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      );
    }
    
    // Vertical layout (default for both variants)
    return (
      <div key={step.id} className={getStepContainerClass(step)}>
        <div className="flex items-start gap-4">
          {numberStyle !== 'none' && (
            <div className={getNumberClass(step, index)}>
              {step.number || index + 1}
            </div>
          )}
          
          <div className="flex-1">
            <h4 className={getTitleClass(step)}>
              {step.title}
              {step.icon && <span className="ml-2">{step.icon}</span>}
            </h4>
            {step.description && (
              <p className={getDescriptionClass(step)}>
                {step.description}
              </p>
            )}
            {step.details && (
              <div className="mt-2 space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className={`text-xs ${isDarkBackground ? 'text-gray-200' : 'text-gray-600'}`}>
                    {detail}
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {step.icon && variant === 'timeline' && layout === 'vertical' && (
            <div className="text-2xl text-gray-300 flex-shrink-0">
              {step.icon}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Get steps container class for layout
  const getStepsContainerClass = () => {
    const baseSpacing = getSpacingClass();
    
    if (layout === 'horizontal') {
      if (variant === 'process-flow') {
        return `md:flex md:space-y-0 md:space-x-4 ${baseSpacing}`;
      }
      return baseSpacing;
    }
    
    return baseSpacing;
  };

  // Special wrapper for process flow variant
  const renderStepsContainer = () => {
    const stepsContent = (
      <div className={getStepsContainerClass()}>
        {steps.map(renderStep)}
      </div>
    );

    // Process flow wraps steps in a gradient container
    if (variant === 'process-flow') {
      return (
        <div className={`p-6 rounded-lg ${backgroundGradient || 'bg-innovation-gradient'} ${isDarkBackground ? 'text-white' : ''}`}>
          {stepsContent}
        </div>
      );
    }

    return stepsContent;
  };

  return (
    <div className={getContainerClass()}>
      {/* Header */}
      <div className={getHeaderAlignmentClass()}>
        {title && (
          <h3 className={`text-2xl font-bold mb-6 ${containerStyle === 'gradient' && isDarkBackground ? 'text-white' : 'text-gray-800'}`}>
            {title}
          </h3>
        )}
        {subtitle && (
          <p className={`text-lg mb-6 ${containerStyle === 'gradient' && isDarkBackground ? 'text-gray-200' : 'text-gray-600'}`}>
            {subtitle}
          </p>
        )}
        {description && (
          <p className={`text-lg mb-6 ${containerStyle === 'gradient' && isDarkBackground ? 'text-gray-100' : 'text-gray-700'}`}>
            {description}
          </p>
        )}
      </div>
      
      {/* SVG Diagram */}
      {svgDiagram && (
        <div className="mb-8">
          <div 
            className={`flex items-center justify-center ${svgDiagram.className || ''}`}
            style={{ 
              width: svgDiagram.width || '100%',
              height: svgDiagram.height || 'auto'
            }}
          >
            {svgDiagram.src ? (
              <img
                src={svgDiagram.src}
                alt={svgDiagram.alt || 'Process Diagram'}
                width={svgDiagram.width || '100%'}
                height={svgDiagram.height || 'auto'}
                className="max-w-full h-auto"
                style={{
                  aspectRatio: svgDiagram.preserveAspectRatio || 'auto'
                }}
              />
            ) : svgDiagram.content ? (
              <svg
                width={svgDiagram.width || '100%'}
                height={svgDiagram.height || 'auto'}
                viewBox={svgDiagram.viewBox}
                preserveAspectRatio={svgDiagram.preserveAspectRatio || 'xMidYMid meet'}
                className="max-w-full h-auto"
                dangerouslySetInnerHTML={{ __html: svgDiagram.content }}
              />
            ) : null}
          </div>
        </div>
      )}
      
      {/* Steps */}
      {renderStepsContainer()}
    </div>
  );
};

export default SequentialContentSection;