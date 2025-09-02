import React from 'react';
import { HeroConfig } from '../../types';

interface HeroSectionProps {
  config: HeroConfig;
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ config, className = '' }) => {
  const { 
    title, 
    subtitle, 
    description, 
    backgroundGradient = 'from-blue-50 to-purple-50', 
    borderColor = 'border-blue-500',
    icon,
    titleColor = 'text-gray-800',
    subtitleColor = 'text-gray-700',
    textColor = 'text-gray-700'
  } = config;

  return (
    <div className={`bg-gradient-to-r ${backgroundGradient} rounded-xl p-8 mb-8 border-l-4 ${borderColor} ${className}`}>
      {icon && (
        <div className="text-center mb-4">
          <span className="text-4xl">{icon}</span>
        </div>
      )}
      
      <h3 className={`text-2xl font-bold ${titleColor} mb-6`}>{title}</h3>
      
      {subtitle && (
        <h4 className={`text-lg font-semibold ${subtitleColor} mb-4`}>{subtitle}</h4>
      )}
      
      {description && (
        <p className={`text-lg ${textColor} mb-6 leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default HeroSection;