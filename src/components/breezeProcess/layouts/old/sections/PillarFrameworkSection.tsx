import React from 'react';

interface Pillar {
  id: string;
  title: string;
  description: string;
  icon: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
  iconBackgroundColor: string;
}

interface PillarFrameworkConfig {
  title: string;
  description?: string;
  pillars: Pillar[];
  additionalSection?: {
    title: string;
    description: string;
    backgroundColor: string;
    item: {
      title: string;
      description: string;
      icon: string;
      backgroundColor: string;
      borderColor: string;
      titleColor: string;
      textColor: string;
      iconBackgroundColor: string;
    };
  };
}

interface PillarFrameworkSectionProps {
  content: PillarFrameworkConfig;
}

const PillarFrameworkSection: React.FC<PillarFrameworkSectionProps> = ({ content }) => {
  const { title, description, pillars, additionalSection } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6 text-center">{description}</p>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pillars.map((pillar) => (
          <div 
            key={pillar.id} 
            className={`${pillar.backgroundColor} p-6 rounded-lg ${pillar.borderColor} text-center`}
          >
            <div className={`w-16 h-16 mx-auto ${pillar.iconBackgroundColor} rounded-full flex items-center justify-center mb-4`}>
              <span className="text-2xl">{pillar.icon}</span>
            </div>
            <h4 className={`font-bold ${pillar.titleColor} mb-3`}>{pillar.title}</h4>
            <p className={`${pillar.textColor} text-sm`}>{pillar.description}</p>
          </div>
        ))}
      </div>
      
      {additionalSection && (
        <div className={`mt-8 ${additionalSection.backgroundColor} p-6 rounded-lg`}>
          <h4 className="font-bold text-gray-800 mb-3 text-center">{additionalSection.title}</h4>
          <div className={`${additionalSection.item.backgroundColor} p-4 rounded-lg border ${additionalSection.item.borderColor} text-center`}>
            <div className={`w-12 h-12 mx-auto ${additionalSection.item.iconBackgroundColor} rounded-full flex items-center justify-center mb-3`}>
              <span className="text-xl">{additionalSection.item.icon}</span>
            </div>
            <h5 className={`font-bold ${additionalSection.item.titleColor} mb-2`}>{additionalSection.item.title}</h5>
            <p className={`${additionalSection.item.textColor} text-sm`}>{additionalSection.item.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PillarFrameworkSection;