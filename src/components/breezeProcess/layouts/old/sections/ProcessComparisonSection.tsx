import React from 'react';

interface ProcessStep {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  backgroundColor: string;
  borderColor: string;
  iconColor: string;
  titleColor: string;
  subtitleColor: string;
}

interface ProcessColumn {
  id: string;
  title: string;
  titleColor: string;
  steps: ProcessStep[];
  finalStep?: ProcessStep;
}

interface ProcessComparisonConfig {
  title: string;
  columns: ProcessColumn[];
}

interface ProcessComparisonSectionProps {
  content: ProcessComparisonConfig;
}

const ProcessComparisonSection: React.FC<ProcessComparisonSectionProps> = ({ content }) => {
  const { title, columns } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">{title}</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {columns.map((column) => (
          <div key={column.id} className="space-y-4">
            <h4 className={`text-xl font-bold ${column.titleColor} mb-4 text-center`}>{column.title}</h4>
            
            <div className="space-y-3">
              {column.steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className={`flex items-center gap-4 p-4 ${step.backgroundColor} rounded-lg border ${step.borderColor}`}>
                    <div className={`w-12 h-12 ${step.iconColor} text-white rounded-full flex items-center justify-center font-bold`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className={`font-semibold ${step.titleColor}`}>{step.title}</h5>
                      <p className={`text-sm ${step.subtitleColor}`}>{step.subtitle}</p>
                    </div>
                  </div>
                  
                  {index < column.steps.length - 1 && (
                    <div className="flex justify-center">
                      <div className="text-2xl text-gray-400">↓</div>
                    </div>
                  )}
                </React.Fragment>
              ))}
              
              {column.finalStep && (
                <>
                  <div className="flex justify-center">
                    <div className="text-2xl text-gray-400">↓</div>
                  </div>
                  <div className={`flex items-center gap-4 p-4 ${column.finalStep.backgroundColor} rounded-lg border ${column.finalStep.borderColor || ''}`}>
                    <div className={`w-12 h-12 ${column.finalStep.iconColor} text-white rounded-full flex items-center justify-center font-bold`}>
                      {column.finalStep.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className={`font-semibold ${column.finalStep.titleColor}`}>{column.finalStep.title}</h5>
                      <p className={`text-sm ${column.finalStep.subtitleColor}`}>{column.finalStep.subtitle}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProcessComparisonSection;