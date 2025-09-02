import React from 'react';

interface GameChangerBenefit {
  id: string;
  title: string;
  description: string;
}

interface GameChangerConfig {
  title: string;
  description: string;
  backgroundGradient?: string;
  textColor?: string;
  benefits?: GameChangerBenefit[];
  conclusion?: {
    title: string;
    description: string;
    backgroundColor?: string;
  };
  buttonText?: string;
  onNext?: () => void;
}

interface GameChangerSectionProps {
  content: GameChangerConfig;
  onNext?: () => void;
}

const GameChangerSection: React.FC<GameChangerSectionProps> = ({ content, onNext }) => {
  const { 
    title, 
    description, 
    backgroundGradient = 'bg-gradient-to-r from-blue-600 via-purple-600 to-green-600',
    textColor = 'text-white',
    benefits,
    conclusion,
    buttonText
  } = content;

  return (
    <div className={`${backgroundGradient} ${textColor} rounded-xl p-8 text-center`}>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-lg mb-6 opacity-90">{description}</p>
      
      {benefits && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
              <h4 className="font-bold mb-2">{benefit.title}</h4>
              <p className="text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {conclusion && (
        <div className={`${conclusion.backgroundColor || 'bg-white/20'} rounded-lg p-6 backdrop-blur-sm mb-8`}>
          <p className="text-xl font-bold mb-2">{conclusion.title}</p>
          <p className="text-lg" dangerouslySetInnerHTML={{ __html: conclusion.description }}></p>
        </div>
      )}
      
      {buttonText && onNext && (
        <div className="mt-8">
          <button
            onClick={onNext}
            className="inline-flex items-center gap-3 bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
          >
            {buttonText}
            <span className="text-2xl">→</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default GameChangerSection;