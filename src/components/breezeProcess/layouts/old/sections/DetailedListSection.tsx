import React from 'react';
import { formatBulletText } from '../../../utils/textFormatting';

interface DetailedListItem {
  id: string;
  title: string;
  description: string;
  bulletColor: string;
}

interface DetailedListColumn {
  items: DetailedListItem[];
}

interface DetailedListConfig {
  title: string;
  description?: string;
  backgroundColor?: string;
  borderColor?: string;
  innerBackgroundColor?: string;
  columns: DetailedListColumn[];
}

interface DetailedListSectionProps {
  content: DetailedListConfig;
}

const DetailedListSection: React.FC<DetailedListSectionProps> = ({ content }) => {
  const { title, description, backgroundColor, borderColor, innerBackgroundColor, columns } = content;

  return (
    <div className={`rounded-xl p-8 mb-8 ${backgroundColor || 'bg-gradient-to-r from-red-50 to-orange-50'} ${borderColor || 'border-l-4 border-red-500'}`}>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      {description && (
        <p className="text-lg text-gray-700 mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }}></p>
      )}
      
      <div className={`rounded-lg p-6 shadow-sm ${innerBackgroundColor || 'bg-white'}`}>
        <h4 className="font-bold text-lg text-gray-800 mb-4">The Translation Tax Components:</h4>
        <div className={`grid grid-cols-1 ${columns.length > 1 ? 'md:grid-cols-2' : ''} gap-6`}>
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="space-y-4">
              {column.items.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <div className={`w-3 h-3 ${item.bulletColor} rounded-full mt-2 flex-shrink-0`}></div>
                  <div>
                    <h5 className="font-semibold text-gray-800" dangerouslySetInnerHTML={{ __html: formatBulletText(item.title) }} />
                    <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: formatBulletText(item.description) }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedListSection;