import React from 'react';

// Unified interface for multi-column layouts (Architecture, ComplexContent)
interface MultiColumnSection {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  textColor?: string;
  itemColor?: string;
  items?: string[];
}

interface MultiColumnConfig {
  title: string;
  description?: string;
  variant: 'architecture' | 'complex-content';
  
  // Architecture-specific
  layers?: MultiColumnSection[];
  backgroundGradient?: string;
  centerTitle?: boolean;
  
  // Complex-content specific
  layout?: 'two-column' | 'full-width';
  leftColumn?: {
    sections?: MultiColumnSection[];
  };
  rightColumn?: {
    title: string;
    backgroundColor?: string;
    sections?: MultiColumnSection[];
  };
  fullWidth?: {
    title: string;
    backgroundColor?: string;
    content?: {
      title: string;
      items?: string[];
    }[];
  };
  
  // General styling options
  containerStyle?: 'default' | 'minimal';
  columnStyle?: 'card' | 'layered' | 'minimal';
  spacing?: 'tight' | 'normal' | 'relaxed';
}

interface MultiColumnSectionProps {
  content: MultiColumnConfig;
  className?: string;
}

const MultiColumnSection: React.FC<MultiColumnSectionProps> = ({ 
  content, 
  className = '' 
}) => {
  const { 
    title, 
    description, 
    variant,
    layers,
    backgroundGradient,
    centerTitle,
    layout,
    leftColumn,
    rightColumn,
    fullWidth,
    containerStyle = 'default',
    columnStyle: _columnStyle = 'card',
    spacing = 'normal'
  } = content;

  // Get container styling
  const getContainerClass = () => {
    switch (containerStyle) {
      case 'minimal':
        return `mb-8 ${className}`;
      default:
        return `bg-white rounded-xl shadow-lg p-8 mb-8 ${className}`;
    }
  };

  // Get spacing class
  const getSpacingClass = () => {
    switch (spacing) {
      case 'tight': return 'space-y-2';
      case 'relaxed': return 'space-y-6';
      default: return 'space-y-3';
    }
  };

  // Render architecture layers
  const renderArchitectureLayers = () => {
    if (!layers) return null;

    return (
      <div className={`p-8 rounded-lg ${backgroundGradient || 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
        <div className={getSpacingClass()}>
          {layers.map((layer) => (
            <div 
              key={layer.id} 
              className={`bg-white p-3 rounded text-center ${layer.borderColor || 'border border-gray-200'}`}
            >
              <h5 className={`font-semibold ${layer.titleColor || 'text-gray-800'}`}>
                {layer.title}
                {layer.icon && <span className="ml-2">{layer.icon}</span>}
              </h5>
              {layer.description && (
                <p className={`text-xs mt-1 ${layer.descriptionColor || 'text-gray-600'}`}>
                  {layer.description}
                </p>
              )}
              {layer.items && (
                <div className="mt-2 space-y-1">
                  {layer.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`text-xs ${layer.itemColor || 'text-gray-600'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render complex content section
  const renderComplexSection = (section: MultiColumnSection, index: number) => {
    const sectionSpacing = spacing === 'tight' ? 'space-y-1' : spacing === 'relaxed' ? 'space-y-3' : 'space-y-2';
    
    return (
      <div 
        key={index} 
        className={`p-6 rounded-lg ${section.backgroundColor || 'bg-gray-50'} ${section.borderColor || ''}`}
      >
        <h4 className={`font-bold mb-3 ${section.titleColor || 'text-gray-800'}`}>
          {section.title}
          {section.icon && <span className="ml-2">{section.icon}</span>}
        </h4>
        {section.description && (
          <p className={`text-sm mb-3 ${section.textColor || 'text-gray-700'}`}>
            {section.description}
          </p>
        )}
        {section.items && (
          <ul className={`text-sm ${sectionSpacing} ${section.textColor || 'text-gray-700'}`}>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex}>• {item}</li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  // Render right column for architecture-style layout
  const renderRightColumnArchitecture = () => {
    if (!rightColumn || !rightColumn.sections) return null;

    return (
      <div className={`p-6 rounded-lg ${rightColumn.backgroundColor || 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
        <h4 className="font-bold text-gray-800 mb-4 text-center">{rightColumn.title}</h4>
        <div className={getSpacingClass()}>
          {rightColumn.sections.map((section, index) => (
            <div 
              key={index} 
              className={`bg-white p-3 rounded text-center ${section.borderColor || 'border border-gray-200'}`}
            >
              <h5 className={`font-semibold ${section.titleColor || 'text-gray-800'}`}>
                {section.title}
              </h5>
              {section.description && (
                <p className={`text-xs mt-1 ${section.textColor || 'text-gray-600'}`}>
                  {section.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render full-width content
  const renderFullWidthContent = () => {
    if (!fullWidth) return null;

    return (
      <div className={`p-6 rounded-lg ${fullWidth.backgroundColor || 'bg-gray-50'}`}>
        <h4 className="font-bold text-gray-800 mb-4">{fullWidth.title}</h4>
        {fullWidth.content && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fullWidth.content.map((section, index) => (
              <div key={index}>
                <h5 className="font-semibold text-gray-800 mb-2">{section.title}</h5>
                <ul className="text-gray-600 text-sm space-y-1">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Render two-column layout
  const renderTwoColumnLayout = () => {
    const columnSpacing = spacing === 'tight' ? 'gap-4' : spacing === 'relaxed' ? 'gap-12' : 'gap-8';
    const sectionSpacing = spacing === 'tight' ? 'space-y-4' : spacing === 'relaxed' ? 'space-y-8' : 'space-y-6';

    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 ${columnSpacing}`}>
        {leftColumn && (
          <div className={sectionSpacing}>
            {leftColumn.sections?.map(renderComplexSection)}
          </div>
        )}
        
        {rightColumn && renderRightColumnArchitecture()}
      </div>
    );
  };

  return (
    <div className={getContainerClass()}>
      {/* Header */}
      <h3 className={`text-2xl font-bold text-gray-800 mb-6 ${centerTitle ? 'text-center' : ''}`}>
        {title}
      </h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6">
          {description}
        </p>
      )}
      
      {/* Content based on variant */}
      {variant === 'architecture' && renderArchitectureLayers()}
      
      {variant === 'complex-content' && layout === 'full-width' && renderFullWidthContent()}
      
      {variant === 'complex-content' && layout !== 'full-width' && renderTwoColumnLayout()}
    </div>
  );
};

export default MultiColumnSection;