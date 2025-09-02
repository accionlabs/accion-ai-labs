import React from 'react';
import { CardsConfig } from '../../types';

interface CardsSectionProps {
  config: CardsConfig;
  onNavigate?: (screenId: string) => void;
  className?: string;
}

const CardsSection: React.FC<CardsSectionProps> = ({ config, onNavigate, className = '' }) => {
  const { title, subtitle, cards, layout = 'grid-2' } = config;
  
  const getGridClass = () => {
    switch (layout) {
      case 'grid-3': return 'grid-cols-1 md:grid-cols-3';
      case 'grid-4': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default: return 'grid-cols-1 md:grid-cols-2';
    }
  };

  return (
    <div className={`mb-12 ${className}`}>
      {title && <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">{title}</h3>}
      {subtitle && <p className="text-lg text-gray-600 mb-8 text-center">{subtitle}</p>}
      
      <div className={`grid ${getGridClass()} gap-6`}>
        {cards.map((card) => {
          const CardElement = card.isClickable && onNavigate ? 'button' : 'div';
          const clickProps = card.isClickable && onNavigate && card.onClick 
            ? { onClick: card.onClick }
            : card.isClickable && onNavigate 
            ? { onClick: () => onNavigate(card.id) }
            : {};
          
          return (
            <CardElement
              key={card.id}
              className={`bg-white rounded-xl p-6 shadow-lg ${card.borderColor ? `border-t-4 ${card.borderColor}` : ''} ${
                card.isClickable ? 'hover:shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer text-left group' : ''
              }`}
              {...clickProps}
            >
              <div className="text-center mb-4">
                {card.icon && (
                  <div className={`w-12 h-12 mx-auto ${card.backgroundColor || 'bg-gray-100'} rounded-full flex items-center justify-center mb-3 ${
                    card.isClickable ? 'group-hover:bg-opacity-80 transition-colors' : ''
                  }`}>
                    <span className="text-2xl">{card.icon}</span>
                  </div>
                )}
                
                <h3 className={`text-xl font-bold text-gray-800 ${card.isClickable ? `group-hover:${card.color || 'text-blue-700'}` : ''}`}>
                  {card.title}
                </h3>
                
                {card.subtitle && (
                  <p className="text-sm text-gray-600">{card.subtitle}</p>
                )}
              </div>
              
              {card.description && (
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
              )}
              
              {card.items && card.items.length > 0 && (
                <ul className="text-sm text-gray-700 space-y-2">
                  {card.items.map((item, index) => (
                    <li key={index}>• {item}</li>
                  ))}
                </ul>
              )}
              
              {card.example && (
                <div className={`${card.backgroundColor || 'bg-gray-50'} p-3 rounded-lg mt-3 ${
                  card.isClickable ? 'group-hover:bg-opacity-80 transition-colors' : ''
                }`}>
                  <p className={`text-xs ${card.color || 'text-gray-700'}`}>
                    <strong>Example:</strong> {card.example}
                  </p>
                </div>
              )}
              
              {card.isClickable && (
                <div className="mt-4 text-center">
                  <span className={`text-sm ${card.color || 'text-blue-600'} group-hover:${card.color || 'text-blue-700'} font-medium`}>
                    Click to explore →
                  </span>
                </div>
              )}
            </CardElement>
          );
        })}
      </div>
    </div>
  );
};

export default CardsSection;