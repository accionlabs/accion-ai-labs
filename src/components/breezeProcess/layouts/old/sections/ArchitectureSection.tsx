import React from 'react';
import { ArchitectureSectionProps } from '../../types';

const ArchitectureSection: React.FC<ArchitectureSectionProps> = ({ content }) => {
  const { title, description, layers, backgroundGradient, centerTitle } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className={`text-2xl font-bold text-gray-800 mb-6 ${centerTitle ? 'text-center' : ''}`}>
        {title}
      </h3>
      
      {description && (
        <p className="text-lg text-gray-700 mb-6">
          {description}
        </p>
      )}
      
      <div className={`p-8 rounded-lg ${backgroundGradient || 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
        <div className="space-y-3">
          {layers?.map((layer, index) => (
            <div 
              key={layer.id} 
              className={`bg-white p-3 rounded text-center ${layer.borderColor || 'border border-gray-200'}`}
            >
              <h5 className={`font-semibold ${layer.titleColor || 'text-gray-800'}`}>
                {layer.title}
                {layer.icon && <span className="ml-2">{layer.icon}</span>}
              </h5>
              {layer.description && (
                <p className={`text-xs mt-1 ${layer.descriptionColor || 'text-gray-600'}`}>
                  {layer.description}
                </p>
              )}
              {layer.items && (
                <div className="mt-2 space-y-1">
                  {layer.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`text-xs ${layer.itemColor || 'text-gray-600'}`}>
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSection;