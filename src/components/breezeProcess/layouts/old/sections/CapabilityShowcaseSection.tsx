import React from 'react';
import { formatBulletText } from '../../../utils/textFormatting';

interface CapabilityShowcaseConfig {
  title: string;
  description: string;
  icon: string;
  iconBackgroundColor: string;
  benefitsSection: {
    title: string;
    items: {
      id: string;
      title: string;
      description: string;
      bulletColor: string;
    }[];
  };
  exampleSection: {
    title: string;
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    steps: {
      id: string;
      title: string;
      description: string;
      backgroundColor: string;
      borderColor: string;
      textColor: string;
      arrow?: boolean;
    }[];
  };
}

interface CapabilityShowcaseSectionProps {
  content: CapabilityShowcaseConfig;
}

const CapabilityShowcaseSection: React.FC<CapabilityShowcaseSectionProps> = ({ content }) => {
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
          <h4 className="font-bold text-gray-800 mb-4">{content.benefitsSection.title}</h4>
          <div className="space-y-3">
            {content.benefitsSection.items.map((item) => (
              <div key={item.id} className="flex items-start gap-3">
                <div className={`w-2 h-2 ${item.bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
                <div>
                  <p className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: formatBulletText(`${item.title}: ${item.description}`) }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className={`${content.exampleSection.backgroundColor} p-6 rounded-lg border ${content.exampleSection.borderColor}`}>
          <h4 className={`font-bold ${content.exampleSection.titleColor} mb-4`}>{content.exampleSection.title}</h4>
          <div className="space-y-3 text-sm">
            {content.exampleSection.steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div className={`${step.backgroundColor} p-3 rounded border ${step.borderColor}`}>
                  <p className={step.textColor}>
                    <strong>{step.title}:</strong> {step.description}
                  </p>
                </div>
                {step.arrow && index < content.exampleSection.steps.length - 1 && (
                  <div className="text-center text-purple-400">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapabilityShowcaseSection;