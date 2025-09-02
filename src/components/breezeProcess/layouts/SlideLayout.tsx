import React from 'react';
import { SlideConfig } from './types';
import FlexibleGridSection from './sections/FlexibleGridSection';
import ProminentDisplaySection from './sections/ProminentDisplaySection';
import SequentialContentSection from './sections/SequentialContentSection';
import MultiColumnSection from './sections/MultiColumnSection';
import ProcessDiagramSection from './old/sections/ProcessDiagramSection';

interface SlideLayoutProps {
  slide: SlideConfig;
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ slide, onNavigate, onNext }) => {
  const renderSection = (section: any, index: number) => {
    const key = `${slide.id}-${section.id}-${index}`;
    
    switch (section.type) {
      case 'flexibleGrid':
        return <FlexibleGridSection key={key} content={section.content} onNavigate={onNavigate} className={section.className} />;
      case 'prominentDisplay':
        return <ProminentDisplaySection key={key} content={section.content} onNext={onNext} className={section.className} />;
      case 'sequentialContent':
        return <SequentialContentSection key={key} content={section.content} className={section.className} />;
      case 'multiColumn':
        return <MultiColumnSection key={key} content={section.content} className={section.className} />;
      case 'processDiagram':
        return <ProcessDiagramSection key={key} content={section.content} />;
      default:
        console.warn(`Unknown section type: ${section.type}`);
        return null;
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      {slide.sections.map((section, index) => renderSection(section, index))}
    </div>
  );
};

export default SlideLayout;