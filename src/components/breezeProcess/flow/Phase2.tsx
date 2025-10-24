import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { TEAM_X_POSITIONS, phases } from './phaseConfig';

interface Phase2NewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Phase 2 using the ProcessDiagram layout
const phase2Config: TopicConfig = {
  id: 'phase2',
  title: 'Phase 2: Semantic Engineering Evolution',
  slides: [
    {
      id: 'phase2-diagram',
      sections: [
        {
          id: 'process-diagram',
          type: 'processDiagram',
          content: {
            phaseNumber: 2,
            teamPositions: TEAM_X_POSITIONS,
            phases
          }
        }
      ]
    }
  ]
};

const Phase2New: React.FC<Phase2NewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={phase2Config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default Phase2New;