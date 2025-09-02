import React from 'react';
import { ComplexContentSectionProps } from '../../types';

const ComplexContentSection: React.FC<ComplexContentSectionProps> = ({ content }) => {
  const { title, description, leftColumn, rightColumn, fullWidth } = content;

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
      
      {fullWidth ? (
        <div className={`p-6 rounded-lg ${fullWidth.backgroundColor || 'bg-gray-50'}`}>
          <h4 className="font-bold text-gray-800 mb-4">{fullWidth.title}</h4>
          {fullWidth.content && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fullWidth.content.map((section, index) => (
                <div key={index}>
                  <h5 className="font-semibold text-gray-800 mb-2">{section.title}</h5>
                  <ul className="text-gray-600 text-sm space-y-1">
                    {section.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leftColumn && (
            <div className="space-y-6">
              {leftColumn.sections?.map((section, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg ${section.backgroundColor || 'bg-gray-50'} ${section.borderColor || ''}`}
                >
                  <h4 className={`font-bold mb-3 ${section.titleColor || 'text-gray-800'}`}>
                    {section.title}
                    {section.icon && <span className="ml-2">{section.icon}</span>}
                  </h4>
                  {section.description && (
                    <p className={`text-sm mb-3 ${section.textColor || 'text-gray-700'}`}>
                      {section.description}
                    </p>
                  )}
                  {section.items && (
                    <ul className={`text-sm space-y-2 ${section.textColor || 'text-gray-700'}`}>
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>• {item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
          
          {rightColumn && (
            <div className={`p-6 rounded-lg ${rightColumn.backgroundColor || 'bg-gradient-to-br from-blue-50 to-green-50'}`}>
              <h4 className="font-bold text-gray-800 mb-4 text-center">{rightColumn.title}</h4>
              {rightColumn.sections && (
                <div className="space-y-3">
                  {rightColumn.sections.map((section, index) => (
                    <div 
                      key={index} 
                      className={`bg-white p-3 rounded text-center ${section.borderColor || 'border border-gray-200'}`}
                    >
                      <h5 className={`font-semibold ${section.titleColor || 'text-gray-800'}`}>
                        {section.title}
                      </h5>
                      {section.description && (
                        <p className={`text-xs mt-1 ${section.textColor || 'text-gray-600'}`}>
                          {section.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComplexContentSection;