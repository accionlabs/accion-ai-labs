import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { TEAM_X_POSITIONS, phases } from './phaseConfig';
import { useTranslation } from 'react-i18next';

interface Phase1NewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Phase1New: React.FC<Phase1NewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const phase1Config: TopicConfig = React.useMemo(() => ({
    id: 'phase1',
    title: t('flow.phase1.configTitle'),
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
  }), [t]);

  return (
    <TopicLayout
      config={phase1Config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default Phase1New;
