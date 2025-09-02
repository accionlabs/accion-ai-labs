import React from 'react';
import { formatBulletText } from '../../../utils/textFormatting';

interface ProcessStep {
  id: string;
  number: string | number;
  title: string;
  description: string;
  backgroundColor: string;
  circleColor: string;
  textColor?: string;
  icon?: string;
  isHighlight?: boolean;
  borderColor?: string;
  detailBox?: {
    title: string;
    description: string;
    backgroundColor?: string;
    borderColor?: string;
    textColor?: string;
  };
}

interface ProcessVisualizationConfig {
  title: string;
  description?: string;
  steps: ProcessStep[];
  multipleOutcomes?: {
    title: string;
    outcomes: {
      id: string;
      title: string;
      subtitle: string;
      letter: string;
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    }[];
  };
  finalResult?: {
    title: string;
    description: string;
    backgroundColor: string;
    textColor: string;
    icon: string;
  };
}

interface ProcessVisualizationSectionProps {
  content: ProcessVisualizationConfig;
}

const ProcessVisualizationSection: React.FC<ProcessVisualizationSectionProps> = ({ content }) => {
  const { title, steps, multipleOutcomes, finalResult } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      
      <div className="space-y-6">
        {/* Main Steps */}
        {steps.map((step) => (
          <div 
            key={step.id} 
            className={`flex items-start gap-6 p-6 ${step.backgroundColor} rounded-lg border ${step.borderColor || ''} ${step.isHighlight ? `border-2 ${step.borderColor || 'border-red-200'}` : ''}`}
          >
            <div className={`w-16 h-16 ${step.circleColor} text-white rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0`}>
              {step.number}
            </div>
            <div className="flex-1">
              <h4 className={`font-bold ${step.textColor || 'text-gray-800'} mb-2`}>{step.title}</h4>
              <p className={`${step.textColor || 'text-gray-600'} mb-3`}>{step.description}</p>
              {step.detailBox && (
                <div className={`${step.detailBox.backgroundColor || 'bg-white'} p-3 rounded border ${step.detailBox.borderColor || 'border-gray-200'}`}>
                  <p className={`text-sm ${step.detailBox.textColor || 'text-gray-600'}`} dangerouslySetInnerHTML={{ __html: formatBulletText(`${step.detailBox.title}: ${step.detailBox.description}`) }} />
                </div>
              )}
            </div>
            {step.icon && <div className="text-4xl text-gray-300">{step.icon}</div>}
          </div>
        ))}

        {/* Multiple Outcomes */}
        {multipleOutcomes && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {multipleOutcomes.outcomes.map((outcome) => (
              <div 
                key={outcome.id} 
                className={`flex flex-col items-center gap-3 p-4 ${outcome.backgroundColor} rounded-lg border ${outcome.borderColor}`}
              >
                <div className={`w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold`}>
                  {outcome.letter}
                </div>
                <div className="text-center">
                  <h5 className={`font-semibold ${outcome.textColor}`}>{outcome.title}</h5>
                  <p className={`text-xs ${outcome.textColor.replace('800', '600')}`}>{outcome.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Final Result */}
        {finalResult && (
          <div className={`flex items-center gap-6 p-6 ${finalResult.backgroundColor} ${finalResult.textColor} rounded-lg`}>
            <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
              {finalResult.icon}
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-red-300">{finalResult.title}</h4>
              <p className="text-gray-300">{finalResult.description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessVisualizationSection;