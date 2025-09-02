import React from 'react';

interface MethodologyStep {
  id: string;
  number: string | number;
  title: string;
  description: string;
}

interface BreakdownPoint {
  id: string;
  title: string;
  description: string;
}

interface MethodologyBreakdownConfig {
  title: string;
  icon?: string;
  subtitle?: string;
  promiseTitle?: string;
  steps?: MethodologyStep[];
  breakdownTitle?: string;
  breakdownDescription?: string;
  breakdownPoints?: BreakdownPoint[];
  resultTitle?: string;
  resultDescription?: string;
  resultBackgroundColor?: string;
  resultTextColor?: string;
}

interface MethodologyBreakdownSectionProps {
  content: MethodologyBreakdownConfig;
}

const MethodologyBreakdownSection: React.FC<MethodologyBreakdownSectionProps> = ({ content }) => {
  const { 
    title, 
    icon, 
    subtitle, 
    promiseTitle, 
    steps, 
    breakdownTitle, 
    breakdownDescription, 
    breakdownPoints,
    resultTitle,
    resultDescription,
    resultBackgroundColor = 'bg-gray-900',
    resultTextColor = 'text-white'
  } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        {icon && <span className="text-3xl">{icon}</span>}
        {title}
      </h3>
      
      <div className="mb-6">
        {promiseTitle && (
          <h4 className="font-bold text-lg text-gray-800 mb-4">{promiseTitle}</h4>
        )}
        
        {steps && (
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="space-y-3">
              {steps.map((step) => (
                <div key={step.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                  <span className="text-gray-700">
                    <strong>{step.title}:</strong> {step.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {breakdownTitle && (
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
            <h4 className="font-bold text-red-800 mb-3">{breakdownTitle}</h4>
            {breakdownDescription && (
              <p className="text-red-700 mb-4">{breakdownDescription}</p>
            )}
            
            {breakdownPoints && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {breakdownPoints.map((point) => (
                  <div key={point.id} className="bg-white p-4 rounded border border-red-200">
                    <h5 className="font-semibold text-red-800 mb-2">{point.title}</h5>
                    <p className="text-sm text-red-600">{point.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {resultTitle && (
        <div className={`${resultBackgroundColor} ${resultTextColor} p-6 rounded-lg`}>
          <h4 className="font-bold text-red-300 mb-3">{resultTitle}</h4>
          <p className="text-gray-300" dangerouslySetInnerHTML={{ __html: resultDescription || '' }}></p>
        </div>
      )}
    </div>
  );
};

export default MethodologyBreakdownSection;