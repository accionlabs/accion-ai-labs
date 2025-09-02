import React from 'react';
import { CTAConfig } from '../../types';

interface CTASectionProps {
  config: CTAConfig;
  onNext?: () => void;
  className?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ config, onNext, className = '' }) => {
  const { 
    title, 
    subtitle, 
    description, 
    buttonText, 
    buttonIcon = '→',
    backgroundGradient = 'from-blue-600 to-purple-600',
    onButtonClick 
  } = config;

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else if (onNext) {
      onNext();
    }
  };

  return (
    <div className={`bg-gradient-to-r ${backgroundGradient} text-white rounded-xl p-8 text-center ${className}`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      
      {subtitle && (
        <h4 className="text-lg font-semibold mb-4 opacity-90">{subtitle}</h4>
      )}
      
      {description && (
        <p className="text-lg mb-6 opacity-90">{description}</p>
      )}
      
      {buttonText && (handleButtonClick || onNext) && (
        <div className="mt-8">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            {buttonText}
            <span className="text-2xl">{buttonIcon}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CTASection;