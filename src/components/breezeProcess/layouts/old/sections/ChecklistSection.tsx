import React from 'react';
import { formatBulletText } from '../../../utils/textFormatting';

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
  iconColor: string;
}

interface ChecklistConfig {
  title: string;
  description?: string;
  items: ChecklistItem[];
  columns?: 2 | 3 | 4;
}

interface ChecklistSectionProps {
  content: ChecklistConfig;
}

const ChecklistSection: React.FC<ChecklistSectionProps> = ({ content }) => {
  const { title, description, items, columns = 2 } = content;

  const gridClass = columns === 4 
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
    : columns === 3 
    ? 'grid-cols-1 md:grid-cols-3' 
    : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6 text-center">{description}</p>
      )}
      
      <div className={`grid ${gridClass} gap-6`}>
        {items.map((item) => (
          <div 
            key={item.id} 
            className={`${item.backgroundColor} p-6 rounded-lg border ${item.borderColor}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 ${item.iconColor} text-white rounded-full flex items-center justify-center`}>
                <span className="text-lg">✓</span>
              </div>
              <h4 className={`font-bold ${item.titleColor}`}>{item.title}</h4>
            </div>
            <p className={`${item.textColor} text-sm`} dangerouslySetInnerHTML={{ __html: formatBulletText(item.description) }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChecklistSection;