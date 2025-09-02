import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { TEAM_X_POSITIONS, phases } from './phaseConfig';

interface Phase1NewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Phase 1 using the ProcessDiagram layout
const phase1Config: TopicConfig = {
  id: 'phase1',
  title: 'Phase 1: Semantic Engineering Foundation',
  slides: [
    {
      id: 'phase1-diagram',
      sections: [
        {
          id: 'process-diagram',
          type: 'processDiagram',
          content: {
            phaseNumber: 1,
            teamPositions: TEAM_X_POSITIONS,
            phases
          }
        }
      ]
    }
  ]
};

const Phase1New: React.FC<Phase1NewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={phase1Config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default Phase1New;