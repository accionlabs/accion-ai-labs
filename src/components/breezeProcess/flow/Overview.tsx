import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';
import { useTranslation } from 'react-i18next';

interface OverviewNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const OverviewNew: React.FC<OverviewNewProps> = ({ onNavigate, onNext }) => {
  const { t } = useTranslation('breezeProcess');

  const processFlowOverviewConfig: TopicConfig = React.useMemo(() => ({
    "id": "process-flow-overview",
    "title": t('flow.overview.header.title'),
    "slides": [
      {
        "id": "process-overview-main",
        "sections": [
          {
            "id": "header",
            "type": "prominentDisplay",
            "content": {
              "title": t('flow.overview.header.prominentTitle'),
              "subtitle": t('flow.overview.header.subtitle'),
              "variant": "header",
              "titleGradient": "from-blue-600 via-purple-600 to-green-600",
              "description": t('flow.overview.header.description'),
              "alignment": "center"
            }
          },
          {
            "id": "flexibleGrid-section-1",
            "type": "flexibleGrid",
            "content": {
              "title": t('flow.overview.theoryToPractice.title'),
              "backgroundColor": "from-blue-50 to-purple-50",
              "borderColor": "border-blue-500",
              "categories": [
                {
                  "title": t('flow.overview.theoryToPractice.semanticPrinciples.title'),
                  "color": "blue",
                  "benefits": [
                    t('flow.overview.theoryToPractice.semanticPrinciples.benefits.0'),
                    t('flow.overview.theoryToPractice.semanticPrinciples.benefits.1'),
                    t('flow.overview.theoryToPractice.semanticPrinciples.benefits.2'),
                    t('flow.overview.theoryToPractice.semanticPrinciples.benefits.3')
                  ]
                },
                {
                  "title": t('flow.overview.theoryToPractice.breezeImplementation.title'),
                  "color": "purple",
                  "benefits": [
                    t('flow.overview.theoryToPractice.breezeImplementation.benefits.0'),
                    t('flow.overview.theoryToPractice.breezeImplementation.benefits.1'),
                    t('flow.overview.theoryToPractice.breezeImplementation.benefits.2'),
                    t('flow.overview.theoryToPractice.breezeImplementation.benefits.3')
                  ]
                }
              ],
              "variant": "benefits",
              "containerStyle": "gradient"
            }
          },
          {
            "id": "flexibleGrid-section-2",
            "type": "flexibleGrid",
            "content": {
              "title": t('flow.overview.threePhase.title'),
              "layout": "grid-3",
              "variant": "cards",
              "items": [
                {
                  "id": "phase1",
                  "title": t('flow.overview.threePhase.phase1.title'),
                  "subtitle": t('flow.overview.threePhase.phase1.subtitle'),
                  "description": t('flow.overview.threePhase.phase1.description'),
                  "icon": "1",
                  "backgroundColor": "bg-orange-100",
                  "borderColor": "border-orange-500",
                  "color": "text-orange-600",
                  "example": t('flow.overview.threePhase.phase1.example')
                },
                {
                  "id": "phase2",
                  "title": t('flow.overview.threePhase.phase2.title'),
                  "subtitle": t('flow.overview.threePhase.phase2.subtitle'),
                  "description": t('flow.overview.threePhase.phase2.description'),
                  "icon": "2",
                  "backgroundColor": "bg-blue-100",
                  "borderColor": "border-blue-500",
                  "color": "text-blue-600",
                  "example": t('flow.overview.threePhase.phase2.example')
                },
                {
                  "id": "phase3",
                  "title": t('flow.overview.threePhase.phase3.title'),
                  "subtitle": t('flow.overview.threePhase.phase3.subtitle'),
                  "description": t('flow.overview.threePhase.phase3.description'),
                  "icon": "3",
                  "backgroundColor": "bg-green-100",
                  "borderColor": "border-green-500",
                  "color": "text-green-600",
                  "example": t('flow.overview.threePhase.phase3.example')
                }
              ]
            }
          }
        ]
      }
    ]
  }), [t]);

  return (
    <TopicLayout
      config={processFlowOverviewConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default OverviewNew;
