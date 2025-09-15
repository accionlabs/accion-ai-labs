import React from 'react';

// Interface for CTA benefit items
interface CTAItem {
  id: string;
  title: string;
  description?: string;
  backgroundColor?: string;
}

// Interface for CTA conclusion section
interface CTAConclusion {
  title: string;
  description: string;
  backgroundColor?: string;
}

// Unified interface for all prominent display content (Hero, Header, CTA)
interface ProminentDisplayConfig {
  title: string;
  subtitle?: string;
  description?: string;
  variant: 'hero' | 'header' | 'cta';
  
  // Visual styling
  backgroundGradient?: string;
  borderColor?: string;
  icon?: string;
  titleColor?: string;
  subtitleColor?: string;
  textColor?: string;
  
  // Header-specific options
  titleGradient?: string;
  alignment?: 'left' | 'center' | 'right';
  
  // CTA-specific options
  buttonText?: string;
  buttonIcon?: string;
  onButtonClick?: () => void;
  items?: CTAItem[]; // For benefit boxes in CTA variant
  conclusion?: CTAConclusion; // For result/conclusion section
  ultimateResult?: CTAConclusion; // Alternative name for conclusion (for backward compatibility)
  
  // Layout options
  size?: 'small' | 'medium' | 'large';
  containerStyle?: 'default' | 'gradient' | 'minimal' | 'cta';
}

interface ProminentDisplaySectionProps {
  content: ProminentDisplayConfig;
  onNext?: () => void;
  className?: string;
}

const ProminentDisplaySection: React.FC<ProminentDisplaySectionProps> = ({ 
  content, 
  onNext, 
  className = '' 
}) => {
  const { 
    title, 
    subtitle, 
    description, 
    variant,
    backgroundGradient,
    borderColor,
    icon,
    titleColor,
    subtitleColor,
    textColor,
    titleGradient,
    alignment = 'center',
    buttonText,
    buttonIcon = '→',
    onButtonClick,
    items,
    conclusion,
    ultimateResult,
    size = 'medium',
    containerStyle
  } = content;

  // Check if background is dark
  const isDarkBackground = backgroundGradient && (
    backgroundGradient.includes('gray-900') || 
    backgroundGradient.includes('gray-800') || 
    backgroundGradient.includes('gray-700') ||
    backgroundGradient.includes('black') ||
    backgroundGradient.includes('innovation-gradient') ||
    backgroundGradient.includes('purple-900') ||
    backgroundGradient.includes('purple-800') ||
    backgroundGradient.includes('purple-700')
  );

  // Determine container styling based on variant and containerStyle
  const getContainerClass = () => {
    const baseClassName = className;
    
    // Override container style based on variant if not explicitly set
    const effectiveContainerStyle = containerStyle || 
      (variant === 'hero' ? 'gradient' : 
       variant === 'cta' ? 'cta' : 
       'minimal');
    
    switch (effectiveContainerStyle) {
      case 'gradient':
        return `bg-gradient-to-r ${backgroundGradient || 'from-blue-50 to-purple-50'} rounded-xl p-8 mb-8 border-l-4 ${borderColor || 'border-blue-500'} ${baseClassName}`;
      case 'cta':
        return `bg-gradient-to-r ${backgroundGradient || 'from-secondary to-brand-purple-600'} text-white rounded-xl p-8 text-center ${baseClassName}`;
      case 'minimal':
        return `mb-12 ${getAlignmentClass()} ${baseClassName}`;
      default:
        return `bg-white rounded-xl shadow-lg p-8 mb-8 ${baseClassName}`;
    }
  };

  // Get text alignment class
  const getAlignmentClass = () => {
    switch (alignment) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      default: return 'text-left';
    }
  };

  // Get title sizing based on variant and size
  const getTitleClass = () => {
    const baseSize = variant === 'header' && size === 'large' ? 'text-4xl' : 
                    variant === 'header' ? 'text-3xl' : 
                    size === 'large' ? 'text-3xl' :
                    size === 'small' ? 'text-xl' : 
                    'text-2xl';
    
    // Use provided titleColor if available, otherwise determine based on background
    const baseColor = titleColor ? titleColor :
                     variant === 'cta' ? 'text-white' :
                     isDarkBackground ? 'text-white' :
                     'text-gray-800';
    
    return `${baseSize} font-bold ${baseColor} mb-4`;
  };

  // Get subtitle class
  const getSubtitleClass = () => {
    const baseSize = variant === 'header' ? 'text-xl' : 'text-lg';
    const baseColor = subtitleColor ? subtitleColor :
                     variant === 'cta' ? 'text-white opacity-90' :
                     isDarkBackground ? 'text-gray-200' :
                     'text-gray-700';
    
    return `${baseSize} font-semibold ${baseColor} mb-4`;
  };

  // Get description class
  const getDescriptionClass = () => {
    const baseSize = variant === 'header' ? 'text-xl' : 'text-lg';
    const baseColor = textColor ? textColor :
                     variant === 'cta' ? 'text-white opacity-90' :
                     isDarkBackground ? 'text-gray-200' :
                     'text-gray-700';
    const maxWidth = variant === 'header' ? 'max-w-4xl mx-auto' : '';
    
    return `${baseSize} ${baseColor} mb-6 leading-relaxed ${maxWidth}`;
  };

  // Handle button click for CTA variant
  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (onNext) {
      onNext();
    }
  };

  // Render title with gradient support for header variant
  const renderTitle = () => {
    if (variant === 'header' && titleGradient) {
      const titleGradientClass = titleGradient || 'from-gray-800 to-gray-600';
      return (
        <h1 className={getTitleClass()}>
          <span className={`bg-gradient-to-r ${titleGradientClass} bg-clip-text text-transparent`}>
            {title}
          </span>
          {subtitle && (
            <>
              {' '}
              <span className="text-gray-800">{subtitle}</span>
            </>
          )}
        </h1>
      );
    }
    
    // Standard title rendering for hero and cta variants
    const TitleElement = variant === 'header' ? 'h1' : 'h3';
    return <TitleElement className={getTitleClass()}>{title}</TitleElement>;
  };

  return (
    <div className={getContainerClass()}>
      {/* Icon (hero variant) */}
      {icon && variant === 'hero' && (
        <div className="text-center mb-4">
          <span className="text-4xl">{icon}</span>
        </div>
      )}
      
      {/* Icon (cta variant) */}
      {icon && variant === 'cta' && (
        <div className="text-center mb-4">
          <span className="text-5xl">{icon}</span>
        </div>
      )}
      
      {/* Title */}
      {renderTitle()}
      
      {/* Subtitle (for hero and cta variants, not header since it's handled in title for header) */}
      {subtitle && variant !== 'header' && (
        <h4 className={getSubtitleClass()}>{subtitle}</h4>
      )}
      
      {/* Description */}
      {description && (
        <p className={getDescriptionClass()}>
          {description}
        </p>
      )}
      
      {/* CTA Items (benefit boxes) */}
      {variant === 'cta' && items && items.length > 0 && (
        <div className={`grid grid-cols-1 gap-4 mb-8 ${
          items.length === 1 ? 'md:grid-cols-1' : 
          items.length === 2 ? 'md:grid-cols-2' : 
          items.length === 4 ? 'md:grid-cols-2 lg:grid-cols-4' :
          'md:grid-cols-3'
        }`}>
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`${item.backgroundColor || 'bg-white/20'} p-4 rounded-lg backdrop-blur-sm`}
            >
              <h4 className="font-bold mb-2">{item.title}</h4>
              {item.description && (
                <p className="text-sm">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      )}
      
      {/* CTA Conclusion */}
      {variant === 'cta' && (conclusion || ultimateResult) && (
        <div className={`${(conclusion || ultimateResult)!.backgroundColor || 'bg-white/20'} rounded-lg p-6 backdrop-blur-sm mb-8`}>
          <p className="text-xl font-bold mb-2">{(conclusion || ultimateResult)!.title}</p>
          <p 
            className="text-lg" 
            dangerouslySetInnerHTML={{ __html: (conclusion || ultimateResult)!.description }}
          />
        </div>
      )}
      
      {/* CTA Button */}
      {variant === 'cta' && buttonText && (handleButtonClick || onNext) && (
        <div className="mt-8">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-3 bg-white text-secondary px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {buttonText}
            <span className="text-2xl">{buttonIcon}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default ProminentDisplaySection;