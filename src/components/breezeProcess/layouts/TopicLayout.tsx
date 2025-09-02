import React from 'react';
import { TopicConfig } from './types';
import SlideLayout from './SlideLayout';
import SlideAwareLayout from './SlideAwareLayout';

interface TopicLayoutProps {
  config: TopicConfig;
  currentSlideId?: string;
  currentSlideIndex?: number;
  slideMode?: boolean;
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const TopicLayout: React.FC<TopicLayoutProps> = ({ 
  config, 
  currentSlideId, 
  currentSlideIndex = 0,
  slideMode = false,
  onNavigate, 
  onNext, 
  onPrevious 
}) => {
  // Find the current slide or default to the first one
  const currentSlide = currentSlideId 
    ? config.slides.find(slide => slide.id === currentSlideId) || config.slides[0]
    : config.slides[0];

  if (!currentSlide) {
    return <div>No slides available</div>;
  }

  // Check if any sections have slideGroup defined
  const hasSlideGroups = currentSlide.sections.some(section => section.slideGroup);
  
  // If we're in slide mode and have slide groups, use SlideAwareLayout
  if (slideMode && hasSlideGroups) {
    return (
      <SlideAwareLayout 
        sections={currentSlide.sections}
        currentSlideIndex={currentSlideIndex}
        onNavigate={onNavigate}
        onNext={onNext}
        onPrevious={onPrevious}
      />
    );
  }

  // Otherwise use regular SlideLayout
  return (
    <SlideLayout 
      slide={currentSlide}
      onNavigate={onNavigate}
      onNext={onNext}
      onPrevious={onPrevious}
    />
  );
};

export default TopicLayout;