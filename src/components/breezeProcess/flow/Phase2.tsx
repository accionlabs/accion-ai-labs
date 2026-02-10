import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { TEAM_X_POSITIONS, phases } from './phaseConfig';
import { useTranslation } from 'react-i18next';

interface Phase2NewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Phase2New: React.FC<Phase2NewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const phase2Config: TopicConfig = React.useMemo(() => ({
    id: 'phase2',
    title: t('flow.phase2.configTitle'),
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
  }), [t]);

  return (
    <TopicLayout
      config={phase2Config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default Phase2New;
