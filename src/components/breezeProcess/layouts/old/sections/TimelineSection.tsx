import React from 'react';
import { TimelineConfig } from '../../types';

interface TimelineSectionProps {
  config: TimelineConfig;
  className?: string;
}

const TimelineSection: React.FC<TimelineSectionProps> = ({ config, className = '' }) => {
  const { title, subtitle, steps, layout = 'vertical' } = config;

  if (layout === 'horizontal') {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${className}`}>
        {title && <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>}
        {subtitle && <p className="text-lg text-gray-600 mb-6 text-center">{subtitle}</p>}
        
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.id} className={`flex items-center gap-6 p-4 ${step.backgroundColor || 'bg-gray-50'} rounded-lg ${
              step.isHighlight ? 'border-2 border-red-200' : ''
            }`}>
              <div className={`w-12 h-12 ${step.color || 'bg-blue-500'} text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0`}>
                {step.number || index + 1}
              </div>
              
              <div className="flex-1">
                <h4 className={`font-bold ${step.isHighlight ? 'text-red-800' : 'text-gray-800'}`}>
                  {step.title}
                </h4>
                {step.description && (
                  <p className={`${step.isHighlight ? 'text-red-700' : 'text-gray-600'}`}>
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
          ))}
        </div>
      </div>
    );
  }

  // Vertical layout
  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${className}`}>
      {title && <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>}
      {subtitle && <p className="text-lg text-gray-600 mb-6 text-center">{subtitle}</p>}
      
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={step.id} className={`p-4 ${step.backgroundColor || 'bg-gray-50'} rounded-lg ${
            step.isHighlight ? 'border-2 border-red-200' : ''
          }`}>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 ${step.color || 'bg-blue-500'} text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1`}>
                {step.number || index + 1}
              </div>
              
              <div className="flex-1">
                <h4 className={`font-bold mb-2 ${step.isHighlight ? 'text-red-800' : 'text-gray-800'}`}>
                  {step.title}
                </h4>
                {step.description && (
                  <p className={`text-sm ${step.isHighlight ? 'text-red-700' : 'text-gray-600'}`}>
                    {step.description}
                  </p>
                )}
              </div>
              
              {step.icon && (
                <div className="text-2xl text-gray-300 flex-shrink-0">
                  {step.icon}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimelineSection;