import React from 'react';

interface ComparisonItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
  icon: string;
}

interface TimelineItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
}

interface ComparisonConfig {
  title: string;
  description?: string;
  items?: ComparisonItem[];
  timeline?: {
    title: string;
    description: string;
    backgroundColor: string;
    items: TimelineItem[];
  };
}

interface ComparisonSectionProps {
  content: ComparisonConfig;
}

const ComparisonSection: React.FC<ComparisonSectionProps> = ({ content }) => {
  const { title, description, items, timeline } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      
      {/* Main comparison items */}
      {items && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {items.map((item) => (
            <div 
              key={item.id} 
              className={`${item.backgroundColor} p-6 rounded-lg border ${item.borderColor}`}
            >
              <h4 className={`font-bold ${item.titleColor} mb-3 flex items-center gap-2`}>
                <span className="text-xl">{item.icon}</span>
                {item.title}
              </h4>
              <p className={`${item.textColor} text-sm`}>{item.description}</p>
            </div>
          ))}
        </div>
      )}

      {/* Timeline section */}
      {timeline && (
        <div className={`${timeline.backgroundColor} p-6 rounded-lg`}>
          <h4 className="font-bold text-gray-800 mb-4">{timeline.title}</h4>
          <p className="text-gray-700 mb-4" dangerouslySetInnerHTML={{ __html: timeline.description }}></p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {timeline.items.map((item) => (
              <div 
                key={item.id} 
                className={`text-center p-4 ${item.backgroundColor} rounded-lg`}
              >
                <h5 className={`font-bold ${item.textColor}`}>{item.title}</h5>
                <p className={`text-xs ${item.textColor.replace('800', '600')} mt-2`} dangerouslySetInnerHTML={{ __html: item.description }}></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparisonSection;