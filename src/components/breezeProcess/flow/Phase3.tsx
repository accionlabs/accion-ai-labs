import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { TEAM_X_POSITIONS, phases } from './phaseConfig';

interface Phase3NewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Phase 3 using the ProcessDiagram layout
const phase3Config: TopicConfig = {
  id: 'phase3',
  title: 'Phase 3: Semantic Engineering Mastery',
  slides: [
    {
      id: 'phase3-diagram',
      sections: [
        {
          id: 'process-diagram',
          type: 'processDiagram',
          content: {
            phaseNumber: 3,
            teamPositions: TEAM_X_POSITIONS,
            phases
          }
        }
      ]
    },
    {
      id: 'phase3-completion',
      sections: [
        {
          id: 'completion',
          type: 'hero',
          content: {
            title: 'Process Complete!',
            backgroundGradient: 'from-green-600 to-blue-600',
            description: 'You\'ve now seen the complete three-phase transformation from manual development to semantic engineering. The journey shows how software engineers can evolve into semantic engineers who orchestrate AI agents while maintaining quality and governance. Ready to start your transformation journey? Use the navigation above to explore how the Semantic Engineer principles connect with this practical framework.',
            titleColor: 'text-white',
            textColor: 'text-white'
          }
        }
      ]
    }
  ]
};

const Phase3New: React.FC<Phase3NewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={phase3Config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default Phase3New;