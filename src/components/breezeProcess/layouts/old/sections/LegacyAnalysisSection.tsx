import React from 'react';

interface LegacyProblem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
}

interface LegacyAnalysisConfig {
  title: string;
  icon?: string;
  description?: string;
  problems?: LegacyProblem[];
  reverseEngineeringSection?: {
    title: string;
    description: string;
    backgroundColor: string;
    textColor: string;
    challenge?: {
      title: string;
      description: string;
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    };
  };
  viciousCycle?: {
    title: string;
    description: string;
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    textColor: string;
  };
}

interface LegacyAnalysisSectionProps {
  content: LegacyAnalysisConfig;
}

const LegacyAnalysisSection: React.FC<LegacyAnalysisSectionProps> = ({ content }) => {
  const { title, icon, description, problems, reverseEngineeringSection, viciousCycle } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        {icon && <span className="text-3xl">{icon}</span>}
        {title}
      </h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6">{description}</p>
      )}
      
      {problems && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="space-y-6">
            {problems.slice(0, Math.ceil(problems.length / 2)).map((problem) => (
              <div 
                key={problem.id} 
                className={`${problem.backgroundColor} p-6 rounded-lg border ${problem.borderColor}`}
              >
                <h4 className={`font-bold ${problem.titleColor} mb-3`}>{problem.title}</h4>
                <p className={`${problem.textColor} text-sm`}>{problem.description}</p>
              </div>
            ))}
          </div>
          
          <div className="space-y-6">
            {problems.slice(Math.ceil(problems.length / 2)).map((problem) => (
              <div 
                key={problem.id} 
                className={`${problem.backgroundColor} p-6 rounded-lg border ${problem.borderColor}`}
              >
                <h4 className={`font-bold ${problem.titleColor} mb-3`}>{problem.title}</h4>
                <p className={`${problem.textColor} text-sm`}>{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {reverseEngineeringSection && (
        <div className={`${reverseEngineeringSection.backgroundColor} ${reverseEngineeringSection.textColor} p-6 rounded-lg mb-6`}>
          <h4 className="font-bold text-red-300 mb-3">{reverseEngineeringSection.title}</h4>
          <p className="text-gray-300 mb-4">{reverseEngineeringSection.description}</p>
          
          {reverseEngineeringSection.challenge && (
            <div className={`${reverseEngineeringSection.challenge.backgroundColor} p-4 rounded border ${reverseEngineeringSection.challenge.borderColor}`}>
              <p className={`${reverseEngineeringSection.challenge.textColor} text-sm`}>
                <strong>{reverseEngineeringSection.challenge.title}:</strong> {reverseEngineeringSection.challenge.description}
              </p>
            </div>
          )}
        </div>
      )}

      {viciousCycle && (
        <div className={`${viciousCycle.backgroundColor} p-6 rounded-lg ${viciousCycle.borderColor}`}>
          <h4 className={`font-bold ${viciousCycle.titleColor} mb-3`}>{viciousCycle.title}</h4>
          <p className={viciousCycle.textColor}>{viciousCycle.description}</p>
        </div>
      )}
    </div>
  );
};

export default LegacyAnalysisSection;