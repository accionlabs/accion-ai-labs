import React from 'react';
import { ContentConfig } from '../../types';
import { formatBulletText } from '../../../utils/textFormatting';

interface ContentSectionProps {
  config: ContentConfig;
  className?: string;
}

const ContentSection: React.FC<ContentSectionProps> = ({ config, className = '' }) => {
  const { title, subtitle, description, layout = 'single', items = [] } = config;
  
  const getGridClass = () => {
    switch (layout) {
      case 'grid-2': return 'grid-cols-1 md:grid-cols-2';
      case 'grid-3': return 'grid-cols-1 md:grid-cols-3';
      case 'grid-4': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1';
    }
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 mb-8 ${className}`}>
      {title && <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>}
      {subtitle && <h4 className="text-lg font-semibold text-gray-700 mb-4">{subtitle}</h4>}
      {description && <p className="text-lg text-gray-700 mb-6">{description}</p>}
      
      {items.length > 0 && (
        <div className={`grid ${getGridClass()} gap-6`}>
          {items.map((item, index) => (
            <div 
              key={item.id || index} 
              className={`p-6 rounded-lg ${item.backgroundColor || 'bg-gray-50'} ${item.borderColor ? `border ${item.borderColor}` : ''}`}
            >
              {item.icon && (
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 mx-auto ${item.color || 'bg-gray-100'} rounded-full flex items-center justify-center mb-3`}>
                    <span className="text-xl">{item.icon}</span>
                  </div>
                </div>
              )}
              
              {item.title && (
                <h4 className={`font-bold mb-2 ${item.color ? `text-${item.color}` : 'text-gray-800'}`}>
                  {item.title}
                </h4>
              )}
              
              {item.subtitle && (
                <h5 className="text-sm text-gray-600 mb-2">{item.subtitle}</h5>
              )}
              
              {item.description && (
                <p className="text-sm text-gray-600 mb-3">{item.description}</p>
              )}
              
              {item.items && item.items.length > 0 && (
                <ul className="text-sm text-gray-600 space-y-1">
                  {item.items.map((listItem, itemIndex) => (
                    <li key={itemIndex} dangerouslySetInnerHTML={{ __html: `• ${formatBulletText(listItem)}` }} />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContentSection;