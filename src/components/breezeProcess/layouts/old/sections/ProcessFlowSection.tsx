import React from 'react';
import { ProcessFlowSectionProps } from '../../types';

const ProcessFlowSection: React.FC<ProcessFlowSectionProps> = ({ content }) => {
  const { title, description, steps, layout = 'vertical', backgroundGradient } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6">
          {description}
        </p>
      )}
      
      <div className={`p-6 rounded-lg ${backgroundGradient || 'bg-gradient-to-br from-purple-50 to-orange-50'}`}>
        <div className={`space-y-4 ${layout === 'horizontal' ? 'md:flex md:space-y-0 md:space-x-4' : ''}`}>
          {steps?.map((step, index) => (
            <div key={step.id} className="flex items-center gap-3">
              <div className={`w-8 h-8 ${step.circleColor || 'bg-blue-500'} text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                {step.number || index + 1}
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-gray-800">
                  {step.title}
                  {step.icon && <span className="ml-2">{step.icon}</span>}
                </h5>
                {step.description && (
                  <p className="text-xs text-gray-600 mt-1">
                    {step.description}
                  </p>
                )}
                {step.details && (
                  <div className="mt-2 space-y-1">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="text-xs text-gray-600">
                        {detail}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessFlowSection;