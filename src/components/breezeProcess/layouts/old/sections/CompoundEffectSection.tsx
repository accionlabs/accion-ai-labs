import React from 'react';

interface CompoundEffectConfig {
  title: string;  
  subtitle: string;
  backgroundGradient: string;
  textColor: string;
  benefitCards: {
    id: string;
    title: string;
    description: string;
    cardBackgroundColor: string;
  }[];
  columns?: 2 | 3 | 4; // Optional: specify number of columns for cards
  ultimateResult: {
    title: string;
    description: string;
    backgroundColor: string;
  };
  buttonText?: string;
  onButtonClick?: () => void;
}

interface CompoundEffectSectionProps {
  content: CompoundEffectConfig;
  onNext?: () => void;
}

const CompoundEffectSection: React.FC<CompoundEffectSectionProps> = ({ content, onNext }) => {
  const handleButtonClick = () => {
    if (content.onButtonClick) {
      content.onButtonClick();
    } else if (onNext) {
      onNext();
    }
  };

  // Determine grid columns based on configuration or number of cards
  const getGridColumns = () => {
    if (content.columns) {
      return content.columns === 2 ? 'grid-cols-1 md:grid-cols-2' :
             content.columns === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
             'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
    // Default behavior based on number of cards
    const cardCount = content.benefitCards.length;
    return cardCount <= 2 ? 'grid-cols-1 md:grid-cols-2' :
           cardCount === 3 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' :
           'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
  };

  return (
    <div className={`${content.backgroundGradient} ${content.textColor} rounded-xl p-8 text-center`}>
      <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
      <p className="text-lg mb-6 opacity-90">
        {content.subtitle}
      </p>
      
      <div className={`grid ${getGridColumns()} gap-6 mb-8`}>
        {content.benefitCards.map((card) => (
          <div key={card.id} className={`${card.cardBackgroundColor} p-6 rounded-lg backdrop-blur-sm`}>
            <h4 className="font-bold mb-2">{card.title}</h4>
            <p className="text-sm">{card.description}</p>
          </div>
        ))}
      </div>
      
      <div className={`${content.ultimateResult.backgroundColor} rounded-lg p-6 backdrop-blur-sm`}>
        <p className="text-xl font-bold mb-2">{content.ultimateResult.title}</p>
        <p className="text-lg" dangerouslySetInnerHTML={{ __html: content.ultimateResult.description }} />
      </div>
      
      {content.buttonText && (
        <div className="mt-8">
          <button
            onClick={handleButtonClick}
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            {content.buttonText}
            <span className="text-2xl">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CompoundEffectSection;