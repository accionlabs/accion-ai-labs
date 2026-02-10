import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { TEAM_X_POSITIONS, phases } from './phaseConfig';
import { useTranslation } from 'react-i18next';

interface Phase3NewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const Phase3New: React.FC<Phase3NewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const phase3Config: TopicConfig = React.useMemo(() => ({
    id: 'phase3',
    title: t('flow.phase3.configTitle'),
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
              title: t('flow.phase3.completion.title'),
              backgroundGradient: 'from-green-600 to-blue-600',
              description: t('flow.phase3.completion.description'),
              titleColor: 'text-white',
              textColor: 'text-white'
            }
          }
        ]
      }
    ]
  }), [t]);

  return (
    <TopicLayout
      config={phase3Config}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default Phase3New;
