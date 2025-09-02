import React from 'react';
import { HeaderConfig } from '../../types';

interface HeaderSectionProps {
  config: HeaderConfig;
  className?: string;
}

const HeaderSection: React.FC<HeaderSectionProps> = ({ config, className = '' }) => {
  const { title, titleGradient, subtitle, description, alignment = 'center' } = config;
  
  const alignmentClass = alignment === 'center' ? 'text-center' : alignment === 'right' ? 'text-right' : 'text-left';
  const titleGradientClass = titleGradient || 'from-gray-800 to-gray-600';

  return (
    <div className={`mb-12 ${alignmentClass} ${className}`}>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
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
      
      {description && (
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          {description}
        </p>
      )}
    </div>
  );
};

export default HeaderSection;