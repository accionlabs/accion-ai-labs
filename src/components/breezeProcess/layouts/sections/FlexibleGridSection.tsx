import React from 'react';
import { formatBulletText } from '../../utils/textFormatting';

// Unified interface for process steps
interface ProcessStep {
  icon?: string;
  title: string;
  description?: string;
  backgroundColor?: string;
  iconColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

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

// Unified interface for all grid-based content
interface FlexibleGridItem {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  iconBackgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  iconColor?: string;
  items?: string[]; // For list-style content
  benefits?: string[]; // For benefits-style content
  processSteps?: ProcessStep[]; // For process flow content
  subItems?: FlexibleGridItem[]; // For nested items (architecture layers)
  svgDiagram?: SVGDiagram; // For SVG diagrams
  gridSpan?: 'single' | 'double' | 'triple' | 'full-row'; // How many grid cells to span
  onClick?: () => void;
  isClickable?: boolean;
  example?: string;
}

// Interface for process visualization outcomes
interface ProcessOutcome {
  id: string;
  title: string;
  subtitle?: string;
  letter: string;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
}

// Interface for process visualization result
interface ProcessResult {
  title: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
  icon?: string;
}

// Interface for process visualization steps
interface ProcessVisualizationStep {
  id: string;
  number: number;
  title: string;
  description: string;
  backgroundColor?: string;
  circleColor?: string;
  textColor?: string;
  icon?: string;
  isHighlight?: boolean;
  borderColor?: string;
}

// Interface for multiple outcomes section
interface MultipleOutcomes {
  title: string;
  outcomes: ProcessOutcome[];
}

interface FlexibleGridConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  variant: 'cards' | 'content' | 'icons' | 'checklist' | 'benefits' | 'detailed-list' | 'process-flow' | 'process-visualization' | 'architecture-layers';
  layout?: 'grid-2' | 'grid-3' | 'grid-4' | 'single';
  columns?: 2 | 3 | 4;
  items: FlexibleGridItem[];
  
  // Process visualization specific properties
  steps?: ProcessVisualizationStep[];
  multipleOutcomes?: MultipleOutcomes;
  finalResult?: ProcessResult;
  // Container styling options
  containerStyle?: 'default' | 'gradient' | 'minimal';
  backgroundColor?: string;
  borderColor?: string;
  // Layout-specific options
  textAlignment?: 'left' | 'center' | 'right';
  showBullets?: boolean;
  categories?: Array<{
    title: string;
    color?: string;
    benefits: string[];
  }>;
}

interface FlexibleGridSectionProps {
  content: FlexibleGridConfig;
  onNavigate?: (screenId: string) => void;
  className?: string;
}

const FlexibleGridSection: React.FC<FlexibleGridSectionProps> = ({ 
  content, 
  onNavigate, 
  className = '' 
}) => {
  const { 
    title, 
    subtitle, 
    description, 
    variant, 
    layout, 
    columns, 
    items, 
    containerStyle = 'default',
    backgroundColor,
    borderColor,
    textAlignment = 'left',
    showBullets = true,
    categories,
    steps,
    multipleOutcomes,
    finalResult
  } = content;

  // Determine grid class based on layout or columns
  const getGridClass = () => {
    if (layout) {
      switch (layout) {
        case 'grid-2': return 'grid-cols-1 md:grid-cols-2';
        case 'grid-3': return 'grid-cols-1 md:grid-cols-3';
        case 'grid-4': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        case 'single': return 'grid-cols-1';
        default: return 'grid-cols-1 md:grid-cols-2';
      }
    }
    
    if (columns) {
      switch (columns) {
        case 4: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
        case 3: return 'grid-cols-1 md:grid-cols-3';
        case 2: return 'grid-cols-1 md:grid-cols-2';
        default: return 'grid-cols-1 md:grid-cols-2';
      }
    }
    
    return 'grid-cols-1 md:grid-cols-2';
  };

  // Get container styling
  const getContainerClass = () => {
    const baseClass = className;
    
    switch (containerStyle) {
      case 'gradient':
        return `bg-gradient-to-r ${backgroundColor || 'from-gray-50 to-secondary-light'} rounded-xl p-8 mb-8 ${borderColor ? `border-l-4 ${borderColor}` : 'border-l-4 border-secondary'} ${baseClass}`;
      case 'minimal':
        return `mb-12 ${baseClass}`;
      default:
        return `bg-white rounded-xl shadow-lg p-8 mb-8 ${baseClass}`;
    }
  };

  // Get text alignment class
  const getTextAlignmentClass = () => {
    switch (textAlignment) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };

  // Render individual grid item based on variant
  const renderGridItem = (item: FlexibleGridItem, index: number) => {
    const isClickable = item.isClickable && onNavigate;
    const Element = isClickable ? 'button' : 'div';
    const clickProps = isClickable && item.onClick
      ? { onClick: item.onClick }
      : isClickable 
      ? { onClick: () => onNavigate!(item.id) }
      : {};

    // Base item styling based on variant
    const getItemClass = () => {
      const baseInteraction = isClickable 
        ? 'hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer group' 
        : '';
      
      // Get grid span class for individual items
      const getGridSpanClass = () => {
        switch (item.gridSpan) {
          case 'double': return 'md:col-span-2';
          case 'triple': return 'md:col-span-3';
          case 'full-row': return 'col-span-full';
          case 'single':
          default: return '';
        }
      };
      
      const spanClass = getGridSpanClass();
      const baseClass = spanClass ? `${spanClass} ` : '';
      
      switch (variant) {
        case 'cards':
          return `${baseClass}bg-white rounded-xl p-6 shadow-lg ${item.borderColor ? `border-t-4 ${item.borderColor}` : ''} ${baseInteraction}`;
        case 'icons':
          return `${baseClass}p-6 rounded-lg border ${item.backgroundColor || 'bg-gray-50'} ${item.borderColor || 'border-gray-200'} ${baseInteraction}`;
        case 'checklist':
          return `${baseClass}p-6 rounded-lg ${item.backgroundColor} ${item.borderColor ? `border ${item.borderColor}` : 'border border-gray-200'} ${baseInteraction}`;
        case 'content':
          return `${baseClass}p-6 rounded-lg ${item.backgroundColor || 'bg-gray-50'} ${item.borderColor ? `border ${item.borderColor}` : ''} ${baseInteraction}`;
        default:
          return `${baseClass}p-6 rounded-lg bg-gray-50 ${baseInteraction}`;
      }
    };

    return (
      <Element
        key={item.id || index}
        className={getItemClass()}
        {...clickProps}
      >
        {/* Icon */}
        {item.icon && (
          <div className={`${variant === 'cards' || variant === 'icons' ? 'text-center' : ''} mb-4`}>
            <div className={`w-12 h-12 ${variant === 'cards' || variant === 'icons' ? 'mx-auto' : ''} ${item.iconBackgroundColor || item.color || 'bg-gray-100'} rounded-full flex items-center justify-center mb-3 ${
              isClickable ? 'group-hover:bg-opacity-80 transition-colors' : ''
            }`}>
              <span className={`text-xl ${item.iconColor || 'text-gray-600'}`}>{item.icon}</span>
            </div>
          </div>
        )}

        {/* Title */}
        {item.title && (
          <h4 className={`font-bold mb-2 ${item.titleColor || (item.color ? `text-${item.color}` : 'text-gray-800')} ${
            variant === 'cards' ? 'text-center' : ''
          }`}>
            {item.title}
          </h4>
        )}

        {/* Subtitle */}
        {item.subtitle && (
          <h5 className={`text-sm text-gray-600 mb-2 ${variant === 'cards' ? 'text-center' : ''}`}>
            {item.subtitle}
          </h5>
        )}

        {/* Description */}
        {item.description && (
          <div className={`${item.textColor || 'text-gray-600'} ${variant === 'cards' ? 'text-center' : ''}`}>
            {variant === 'icons' || variant === 'checklist' ? (
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: formatBulletText(item.description) }} />
            ) : (
              <p className="text-sm">{item.description}</p>
            )}
          </div>
        )}

        {/* Example */}
        {item.example && (
          <div className="mt-3 p-3 bg-gray-100 rounded text-xs text-gray-600">
            <strong>Example:</strong> {item.example}
          </div>
        )}

        {/* SVG Diagram */}
        {item.svgDiagram && (
          <div className="mt-4">
            <div 
              className={`flex items-center justify-center ${item.svgDiagram.className || ''}`}
              style={{ 
                width: item.svgDiagram.width || '100%',
                height: item.svgDiagram.height || 'auto'
              }}
            >
              {item.svgDiagram.src ? (
                <img
                  src={item.svgDiagram.src}
                  alt={item.svgDiagram.alt || 'SVG Diagram'}
                  width={item.svgDiagram.width || '100%'}
                  height={item.svgDiagram.height || 'auto'}
                  className="max-w-full h-auto"
                  style={{
                    aspectRatio: item.svgDiagram.preserveAspectRatio || 'auto'
                  }}
                />
              ) : item.svgDiagram.content ? (
                <svg
                  width={item.svgDiagram.width || '100%'}
                  height={item.svgDiagram.height || 'auto'}
                  viewBox={item.svgDiagram.viewBox}
                  preserveAspectRatio={item.svgDiagram.preserveAspectRatio || 'xMidYMid meet'}
                  className="max-w-full h-auto"
                  dangerouslySetInnerHTML={{ __html: item.svgDiagram.content }}
                />
              ) : null}
            </div>
          </div>
        )}

        {/* Items list */}
        {item.items && item.items.length > 0 && (
          <div className="mt-3">
            <ul className="space-y-1">
              {item.items.map((listItem, idx) => (
                <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                  {showBullets && <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>}
                  <span dangerouslySetInnerHTML={{ __html: formatBulletText(listItem) }} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Benefits list (for benefits variant) */}
        {item.benefits && item.benefits.length > 0 && (
          <div className="mt-3 space-y-2">
            {item.benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${item.color ? `bg-${item.color}-500` : 'bg-secondary'} rounded-full mt-2 flex-shrink-0`}></div>
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        )}

        {/* Process Steps (for process-flow variant) */}
        {item.processSteps && item.processSteps.length > 0 && (
          <div className="mt-4 space-y-3">
            {item.processSteps.map((step, idx) => (
              <div key={idx}>
                <div className={`flex items-center gap-4 p-4 rounded-lg border ${step.backgroundColor || 'bg-gray-50'}`}>
                  {step.icon && (
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-white ${step.iconColor || 'bg-gray-500'}`}>
                      {step.icon}
                    </div>
                  )}
                  <div className="flex-1">
                    <h5 className={`font-semibold ${step.titleColor || 'text-gray-800'}`}>
                      {step.title}
                    </h5>
                    {step.description && (
                      <p className={`text-sm ${step.descriptionColor || 'text-gray-600'}`}>
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
                {idx < (item.processSteps?.length || 0) - 1 && (
                  <div className="flex justify-center">
                    <div className="text-2xl text-gray-400">↓</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Element>
    );
  };

  // Special handling for benefits variant with categories
  if (variant === 'benefits' && categories) {
    return (
      <div className={getContainerClass()}>
        {title && <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>}
        {subtitle && <h4 className="text-lg font-semibold text-gray-700 mb-4">{subtitle}</h4>}
        {description && <p className="text-lg text-gray-700 mb-6">{description}</p>}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div key={index}>
              <h4 className={`font-bold text-lg text-gray-800 mb-3 ${category.color || ''}`}>
                {category.title}
              </h4>
              <div className="space-y-2">
                {category.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start gap-3">
                    <div className={`w-2 h-2 ${category.color ? `bg-${category.color}-500` : 'bg-secondary'} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Special handling for process-visualization variant
  if (variant === 'process-visualization' && steps) {
    return (
      <div className={getContainerClass()}>
        {title && <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>}
        {subtitle && <h4 className="text-lg font-semibold text-gray-700 mb-4">{subtitle}</h4>}
        {description && <p className="text-lg text-gray-700 mb-6">{description}</p>}
        
        <div className="space-y-6">
          {/* Process Steps */}
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`flex items-center gap-6 p-4 rounded-lg ${step.backgroundColor || 'bg-gray-50'} ${step.isHighlight && step.borderColor ? `border-2 ${step.borderColor}` : ''}`}
            >
              <div className={`w-12 h-12 ${step.circleColor || 'bg-gray-500'} text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                {step.number}
              </div>
              <div className="flex-1">
                <h4 className={`font-bold ${step.isHighlight ? (step.textColor || 'text-red-800') : 'text-gray-800'}`}>
                  {step.title}
                </h4>
                <p className={step.isHighlight ? (step.textColor || 'text-red-700') : 'text-gray-600'}>
                  {step.description}
                </p>
              </div>
              {step.icon && (
                <div className={`text-4xl ${step.isHighlight ? 'text-red-400' : 'text-gray-300'}`}>
                  {step.icon}
                </div>
              )}
            </div>
          ))}
          
          {/* Multiple Outcomes */}
          {multipleOutcomes && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {multipleOutcomes.outcomes.map((outcome) => (
                <div 
                  key={outcome.id} 
                  className={`flex flex-col items-center gap-3 p-4 rounded-lg border ${outcome.backgroundColor || 'bg-orange-50'} ${outcome.borderColor || 'border-orange-200'}`}
                >
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                    {outcome.letter}
                  </div>
                  <div className="text-center">
                    <h5 className={`font-semibold ${outcome.textColor || 'text-orange-800'}`}>
                      {outcome.title}
                    </h5>
                    {outcome.subtitle && (
                      <p className="text-xs text-orange-600">{outcome.subtitle}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Final Result */}
          {finalResult && (
            <div className={`flex items-center gap-6 p-6 rounded-lg ${finalResult.backgroundColor || 'bg-gray-900'} ${finalResult.textColor || 'text-white'}`}>
              {finalResult.icon && (
                <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {finalResult.icon}
                </div>
              )}
              <div className="flex-1">
                <h4 className="font-bold text-red-300">{finalResult.title}</h4>
                <p className="text-gray-300">{finalResult.description}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Special handling for architecture-layers variant
  if (variant === 'architecture-layers') {
    return (
      <div className={getContainerClass()}>
        {/* Header content */}
        <div className={getTextAlignmentClass()}>
          {title && <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>}
          {subtitle && <h4 className="text-lg font-semibold text-gray-700 mb-4">{subtitle}</h4>}
          {description && <p className="text-lg text-gray-700 mb-6">{description}</p>}
        </div>
        
        {/* Architecture Layers */}
        <div className="space-y-8">
          {items.map((layer) => (
            <div 
              key={layer.id} 
              className={`p-6 rounded-xl ${layer.backgroundColor || 'bg-gray-50'} ${layer.borderColor || ''}`}
            >
              {/* Layer Header */}
              <div className="mb-6">
                <h4 className={`text-xl font-bold ${layer.color || 'text-gray-800'} mb-2`}>
                  {layer.title}
                </h4>
                {layer.subtitle && (
                  <h5 className="text-lg font-semibold text-gray-600 mb-2">
                    {layer.subtitle}
                  </h5>
                )}
                {layer.description && (
                  <p className="text-gray-700 mb-4">
                    {layer.description}
                  </p>
                )}
              </div>
              
              {/* Layer Components */}
              {layer.subItems && layer.subItems.length > 0 && (
                <div className={`grid gap-4 ${
                  layer.subItems.length === 4 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                  layer.subItems.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
                  layer.subItems.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                  'grid-cols-1'
                }`}>
                  {layer.subItems.map((subItem) => (
                    <div 
                      key={subItem.id}
                      className={`p-4 rounded-lg border ${subItem.backgroundColor || 'bg-white'} ${subItem.borderColor || 'border-gray-200'}`}
                    >
                      <h6 className={`font-bold mb-1 ${subItem.color || 'text-gray-800'}`}>
                        {subItem.title}
                      </h6>
                      {subItem.subtitle && (
                        <p className="text-sm text-gray-600 mb-2">
                          {subItem.subtitle}
                        </p>
                      )}
                      {subItem.description && (
                        <p className="text-sm text-gray-600">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={getContainerClass()}>
      {/* Header content */}
      <div className={getTextAlignmentClass()}>
        {title && <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>}
        {subtitle && <h4 className="text-lg font-semibold text-gray-700 mb-4">{subtitle}</h4>}
        {description && <p className="text-lg text-gray-700 mb-6">{description}</p>}
      </div>
      
      {/* Grid content */}
      {items.length > 0 && (
        <div className={`grid ${getGridClass()} gap-6`}>
          {items.map(renderGridItem)}
        </div>
      )}
    </div>
  );
};

export default FlexibleGridSection;