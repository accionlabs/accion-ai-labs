import React from 'react';

interface FailurePoint {
  id: string;
  title: string;
  description: string;
}

interface SystemicFailureConfig {
  title: string;
  description: string;
  backgroundGradient?: string;
  textColor?: string;
  failurePoints?: FailurePoint[];
  realProblem?: {
    title: string;
    description: string;
    backgroundColor?: string;
  };
  buttonText?: string;
  onNext?: () => void;
}

interface SystemicFailureSectionProps {
  content: SystemicFailureConfig;
  onNext?: () => void;
}

const SystemicFailureSection: React.FC<SystemicFailureSectionProps> = ({ content, onNext }) => {
  const { 
    title, 
    description, 
    backgroundGradient = 'bg-gradient-to-r from-red-600 to-purple-600',
    textColor = 'text-white',
    failurePoints, 
    realProblem,
    buttonText
  } = content;

  return (
    <div className={`${backgroundGradient} ${textColor} rounded-xl p-8 text-center`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg mb-6 opacity-90" dangerouslySetInnerHTML={{ __html: description }}></p>
      
      {failurePoints && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {failurePoints.map((point) => (
            <div key={point.id} className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2">{point.title}</h4>
              <p className="text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {realProblem && (
        <div className={`${realProblem.backgroundColor || 'bg-white/20'} rounded-lg p-4 backdrop-blur-sm`}>
          <p className="text-sm font-semibold mb-2">{realProblem.title}</p>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: realProblem.description }}></p>
        </div>
      )}
      
      {buttonText && onNext && (
        <div className="mt-8">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            {buttonText}
            <span className="text-2xl">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SystemicFailureSection;