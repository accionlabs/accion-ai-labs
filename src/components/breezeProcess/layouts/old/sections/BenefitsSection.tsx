import React from 'react';
import { BenefitsConfig } from '../../types';

interface BenefitsSectionProps {
  config: BenefitsConfig;
  className?: string;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ config, className = '' }) => {
  const { 
    title, 
    subtitle, 
    description, 
    backgroundColor = 'from-gray-50 to-blue-50', 
    borderColor = 'border-blue-500',
    categories 
  } = config;

  return (
    <div className={`bg-gradient-to-r ${backgroundColor} rounded-xl p-8 mb-8 border-l-4 ${borderColor} ${className}`}>
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
                  <div className={`w-2 h-2 ${category.color ? `bg-${category.color}-500` : 'bg-blue-500'} rounded-full mt-2 flex-shrink-0`}></div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;