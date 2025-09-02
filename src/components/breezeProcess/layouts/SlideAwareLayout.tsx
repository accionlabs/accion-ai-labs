import React from 'react';
import { SlideSection } from './types';
import SlideLayout from './SlideLayout';
import { groupSectionsIntoSlides } from '../utils/slideGrouping';

interface SlideAwareLayoutProps {
  sections: SlideSection[];
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
  currentSlideIndex?: number;
}

/**
 * A layout component that's aware of slide groupings and can provide
 * slide information to parent components like TopicCards
 */
const SlideAwareLayout: React.FC<SlideAwareLayoutProps> = ({ 
  sections, 
  onNavigate, 
  onNext, 
  onPrevious,
  currentSlideIndex = 0
}) => {
  const slideGroups = React.useMemo(() => groupSectionsIntoSlides(sections), [sections]);
  
  // Store slide information globally for TopicCards to access
  React.useEffect(() => {
    // Store slide groups in a global context or on the window object
    (window as any).__slideGroups = slideGroups;
    (window as any).__totalSlides = slideGroups.length;
    
    return () => {
      delete (window as any).__slideGroups;
      delete (window as any).__totalSlides;
    };
  }, [slideGroups]);
  
  // Get sections for current slide
  const currentSections = slideGroups[currentSlideIndex]?.sections || sections;
  
  return (
    <SlideLayout 
      slide={{ id: `slide-${currentSlideIndex}`, sections: currentSections }}
      onNavigate={onNavigate}
      onNext={onNext}
      onPrevious={onPrevious}
    />
  );
};

export default SlideAwareLayout;