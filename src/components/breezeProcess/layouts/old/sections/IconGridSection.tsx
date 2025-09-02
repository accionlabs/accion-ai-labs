import React from 'react';
import { IconGridSectionProps } from '../../types';
import { formatBulletText } from '../../../utils/textFormatting';

const IconGridSection: React.FC<IconGridSectionProps> = ({ content }) => {
  const { title, description, items, columns = 4 } = content;

  const gridClass = columns === 4 
    ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
    : columns === 3 
    ? 'grid-cols-1 md:grid-cols-3' 
    : 'grid-cols-1 md:grid-cols-2';

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">
        {title}
      </h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6">
          {description}
        </p>
      )}
      
      <div className={`grid ${gridClass} gap-6`}>
        {items?.map((item, index) => (
          <div 
            key={item.id || index} 
            className={`p-6 rounded-lg border text-center ${item.backgroundColor || 'bg-gray-50'} ${item.borderColor || 'border-gray-200'}`}
          >
            <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${item.iconBackgroundColor || 'bg-gray-100'}`}>
              <span className="text-xl">{item.icon}</span>
            </div>
            <h4 className={`font-bold mb-2 ${item.titleColor || 'text-gray-800'}`}>
              {item.title}
            </h4>
            {item.description && (
              <p className={`text-sm ${item.textColor || 'text-gray-600'}`} dangerouslySetInnerHTML={{ __html: formatBulletText(item.description) }} />
            )}
            {item.details && (
              <div className="mt-3 space-y-1">
                {item.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className={`text-xs ${item.textColor || 'text-gray-600'}`} dangerouslySetInnerHTML={{ __html: formatBulletText(detail) }} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default IconGridSection;