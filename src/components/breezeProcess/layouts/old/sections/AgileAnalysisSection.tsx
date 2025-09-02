import React from 'react';

interface AgileComparisonItem {
  id: string;
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
  items?: string[];
}

interface AgileSpecificationProblem {
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
  highlightText?: string;
}

interface AgileComplexitySection {
  title: string;
  description: string;
  backgroundColor: string;
  borderColor: string;
  titleColor: string;
  textColor: string;
  leftColumn: {
    title: string;
    items: string[];
  };
  rightColumn: {
    title: string;
    items: string[];
  };
}

interface AgileAnalysisConfig {
  title: string;
  icon?: string;
  comparisonItems?: AgileComparisonItem[];
  specificationProblem?: AgileSpecificationProblem;
  complexitySection?: AgileComplexitySection;
}

interface AgileAnalysisSectionProps {
  content: AgileAnalysisConfig;
}

const AgileAnalysisSection: React.FC<AgileAnalysisSectionProps> = ({ content }) => {
  const { title, icon, comparisonItems, specificationProblem, complexitySection } = content;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
        {icon && <span className="text-3xl">{icon}</span>}
        {title}
      </h3>
      
      {comparisonItems && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {comparisonItems.map((item) => (
            <div 
              key={item.id} 
              className={`${item.backgroundColor} p-6 rounded-lg border ${item.borderColor}`}
            >
              <h4 className={`font-bold ${item.titleColor} mb-3`}>{item.title}</h4>
              {item.description && (
                <p className={`${item.textColor} text-sm`}>{item.description}</p>
              )}
              {item.items && (
                <ul className={`${item.textColor} text-sm space-y-2`}>
                  {item.items.map((listItem, index) => (
                    <li key={index}>{listItem}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {specificationProblem && (
        <div className={`${specificationProblem.backgroundColor} p-6 rounded-lg ${specificationProblem.borderColor} mb-6`}>
          <h4 className={`font-bold ${specificationProblem.titleColor} mb-3`}>{specificationProblem.title}</h4>
          <p className={`${specificationProblem.textColor} mb-4`} dangerouslySetInnerHTML={{ __html: specificationProblem.description }}></p>
          
          {specificationProblem.highlightText && (
            <div className="bg-white p-4 rounded border border-purple-200">
              <p className="text-purple-600 text-sm" dangerouslySetInnerHTML={{ __html: specificationProblem.highlightText }}></p>
            </div>
          )}
        </div>
      )}

      {complexitySection && (
        <div className={`${complexitySection.backgroundColor} p-6 rounded-lg border ${complexitySection.borderColor}`}>
          <h4 className={`font-bold ${complexitySection.titleColor} mb-3`}>{complexitySection.title}</h4>
          <p className={`${complexitySection.textColor} text-sm mb-4`}>{complexitySection.description}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className={`font-semibold ${complexitySection.titleColor} mb-2`}>{complexitySection.leftColumn.title}</h5>
              <ul className={`${complexitySection.textColor} text-sm space-y-1`}>
                {complexitySection.leftColumn.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className={`font-semibold ${complexitySection.titleColor} mb-2`}>{complexitySection.rightColumn.title}</h5>
              <ul className={`${complexitySection.textColor} text-sm space-y-1`}>
                {complexitySection.rightColumn.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgileAnalysisSection;