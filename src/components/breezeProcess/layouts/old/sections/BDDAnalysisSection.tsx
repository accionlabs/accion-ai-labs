import React from 'react';

interface BDDProcessStep {
  id: string;
  number: string | number;
  description: string;
}

interface BDDFailure {
  id: string;
  failure: string;
}

interface BDDAnalysisConfig {
  title: string;
  icon?: string;
  description?: string;
  processTitle?: string;
  steps?: BDDProcessStep[];
  realityTitle?: string;
  realityDescription?: string;
  failures?: BDDFailure[];
  conclusionTitle?: string;
  conclusionDescription?: string;
  conclusionBackgroundColor?: string;
  conclusionBorderColor?: string;
  conclusionTitleColor?: string;
  conclusionTextColor?: string;
}

interface BDDAnalysisSectionProps {
  content: BDDAnalysisConfig;
}

const BDDAnalysisSection: React.FC<BDDAnalysisSectionProps> = ({ content }) => {
  const { 
    title, 
    icon, 
    description, 
    processTitle, 
    steps, 
    realityTitle, 
    realityDescription, 
    failures,
    conclusionTitle,
    conclusionDescription,
    conclusionBackgroundColor = 'bg-yellow-50',
    conclusionBorderColor = 'border-l-4 border-yellow-500',
    conclusionTitleColor = 'text-yellow-800',
    conclusionTextColor = 'text-yellow-700'
  } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        {icon && <span className="text-3xl">{icon}</span>}
        {title}
      </h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6">{description}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
        {/* BDD Process */}
        {processTitle && steps && (
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-4">{processTitle}</h4>
            <div className="space-y-3">
              {steps.map((step) => (
                <div key={step.id} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-xs">
                    {step.number}
                  </div>
                  <p className="text-sm text-blue-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* BDD Reality */}
        {realityTitle && (
          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-4">{realityTitle}</h4>
            {realityDescription && (
              <p className="text-red-700 mb-4 text-sm">{realityDescription}</p>
            )}
            
            {failures && (
              <div className="bg-white p-4 rounded border border-red-200">
                <h5 className="font-semibold text-red-800 mb-2">Common BDD Failures:</h5>
                <ul className="text-red-600 text-sm space-y-1">
                  {failures.map((failure) => (
                    <li key={failure.id}>• {failure.failure}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Conclusion */}
      {conclusionTitle && (
        <div className={`${conclusionBackgroundColor} p-6 rounded-lg ${conclusionBorderColor}`}>
          <h4 className={`font-bold ${conclusionTitleColor} mb-3`}>{conclusionTitle}</h4>
          <p className={conclusionTextColor}>{conclusionDescription}</p>
        </div>
      )}
    </div>
  );
};

export default BDDAnalysisSection;