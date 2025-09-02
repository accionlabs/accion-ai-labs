import React from 'react';
import { formatBulletText } from '../../../utils/textFormatting';

interface AutomaticBDDIntegrationConfig {
  title: string;
  description: string;
  icon: string;
  iconBackgroundColor: string;
  automatedSection: {
    title: string;
    steps: {
      id: string;
      number: string | number;
      title: string;
      description: string;
      backgroundColor: string;
      borderColor: string;
      circleColor: string;
      textColor: string;
    }[];
  };
  transformationSection: {
    title: string;
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    beforeAfter: {
      before: {
        title: string;
        description: string;
        backgroundColor: string;
        borderColor: string;
        titleColor: string;
        textColor: string;
      };
      after: {
        title: string;
        description: string;
        backgroundColor: string;
        borderColor: string;
        titleColor: string;
        textColor: string;
      };
    };
  };
}

interface AutomaticBDDIntegrationSectionProps {
  content: AutomaticBDDIntegrationConfig;
}

const AutomaticBDDIntegrationSection: React.FC<AutomaticBDDIntegrationSectionProps> = ({ content }) => {
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
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h4 className="font-bold text-gray-800 mb-4">{content.automatedSection.title}</h4>
          <div className="space-y-3">
            {content.automatedSection.steps.map((step) => (
              <div key={step.id} className={`flex items-center gap-3 p-3 ${step.backgroundColor} rounded border ${step.borderColor}`}>
                <div className={`w-8 h-8 ${step.circleColor} text-white rounded-full flex items-center justify-center font-bold text-sm`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <p className={`text-sm ${step.textColor}`} dangerouslySetInnerHTML={{ __html: formatBulletText(`${step.title} ${step.description}`) }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${content.transformationSection.backgroundColor} p-6 rounded-lg border ${content.transformationSection.borderColor}`}>
          <h4 className={`font-bold ${content.transformationSection.titleColor} mb-4`}>
            {content.transformationSection.title}
          </h4>
          <div className="space-y-4">
            <div className={`${content.transformationSection.beforeAfter.before.backgroundColor} p-4 rounded border ${content.transformationSection.beforeAfter.before.borderColor}`}>
              <h5 className={`font-semibold ${content.transformationSection.beforeAfter.before.titleColor} mb-2`}>
                {content.transformationSection.beforeAfter.before.title}
              </h5>
              <p className={`text-sm ${content.transformationSection.beforeAfter.before.textColor}`}>
                {content.transformationSection.beforeAfter.before.description}
              </p>
            </div>
            <div className={`${content.transformationSection.beforeAfter.after.backgroundColor} p-4 rounded border ${content.transformationSection.beforeAfter.after.borderColor}`}>
              <h5 className={`font-semibold ${content.transformationSection.beforeAfter.after.titleColor} mb-2`}>
                {content.transformationSection.beforeAfter.after.title}
              </h5>
              <p className={`text-sm ${content.transformationSection.beforeAfter.after.textColor}`}>
                {content.transformationSection.beforeAfter.after.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomaticBDDIntegrationSection;