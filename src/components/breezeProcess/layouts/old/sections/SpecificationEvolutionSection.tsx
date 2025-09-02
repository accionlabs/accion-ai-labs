import React from 'react';
import { formatBulletText } from '../../../utils/textFormatting';

interface SpecificationEvolutionConfig {
  title: string;
  description: string;
  icon: string;
  iconBackgroundColor: string;
  practicalScenarios: {
    title: string;
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    scenarios: {
      id: string;
      title: string;
      description: string;
      backgroundColor: string;
      borderColor: string;
      titleColor: string;
      textColor: string;
    }[];
  };
  revolutionaryOutcome: {
    title: string;
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    comparison: {
      traditional: {
        title: string;
        items: string[];
        textColor: string;
      };
      breezeAI: {
        title: string;
        items: string[];
        textColor: string;
      };
    };
  };
}

interface SpecificationEvolutionSectionProps {
  content: SpecificationEvolutionConfig;
}

const SpecificationEvolutionSection: React.FC<SpecificationEvolutionSectionProps> = ({ content }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        <span className={`w-12 h-12 ${content.iconBackgroundColor} rounded-full flex items-center justify-center`}>
          <span className="text-2xl">{content.icon}</span>
        </span>
        {content.title}
      </h3>
      
      <p className="text-lg text-gray-700 mb-6">
        {content.description}
      </p>
      
      <div className="space-y-6">
        <div className={`${content.practicalScenarios.backgroundColor} p-6 rounded-lg border ${content.practicalScenarios.borderColor}`}>
          <h4 className={`font-bold ${content.practicalScenarios.titleColor} mb-4`}>
            {content.practicalScenarios.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {content.practicalScenarios.scenarios.map((scenario) => (
              <div key={scenario.id} className={`${scenario.backgroundColor} p-4 rounded border ${scenario.borderColor}`}>
                <h5 className={`font-semibold ${scenario.titleColor} mb-2`}>
                  {scenario.title}
                </h5>
                <p className={`text-sm ${scenario.textColor}`} dangerouslySetInnerHTML={{ __html: formatBulletText(scenario.description) }} />
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${content.revolutionaryOutcome.backgroundColor} p-6 rounded-lg border ${content.revolutionaryOutcome.borderColor}`}>
          <h4 className={`font-bold ${content.revolutionaryOutcome.titleColor} mb-4`}>
            {content.revolutionaryOutcome.title}
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className={`font-semibold ${content.revolutionaryOutcome.titleColor} mb-3`}>
                {content.revolutionaryOutcome.comparison.traditional.title}
              </h5>
              <ul className={`${content.revolutionaryOutcome.comparison.traditional.textColor} text-sm space-y-1`}>
                {content.revolutionaryOutcome.comparison.traditional.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={`font-semibold ${content.revolutionaryOutcome.titleColor} mb-3`}>
                {content.revolutionaryOutcome.comparison.breezeAI.title}
              </h5>
              <ul className={`${content.revolutionaryOutcome.comparison.breezeAI.textColor} text-sm space-y-1`}>
                {content.revolutionaryOutcome.comparison.breezeAI.items.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecificationEvolutionSection;