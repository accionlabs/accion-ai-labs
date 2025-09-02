import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface OverviewNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for ProcessFlow Overview topic - kept within the component
const processFlowOverviewConfig: TopicConfig = {
  "id": "process-flow-overview",
  "title": "Breeze.AI Process Framework",
  "slides": [
    {
      "id": "process-overview-main",
      "sections": [
        {
          "id": "header",
          "type": "prominentDisplay",
          "content": {
            "title": "Breeze.AI",
            "subtitle": "Process Framework",
            "variant": "header",
            "titleGradient": "from-blue-600 via-purple-600 to-green-600",
            "description": "Our three-phase methodology transforms manual development into semantic engineering, implementing the theoretical concepts you've learned into practical development workflows.",
            "alignment": "center"
          }
        },
        {

          "id": "flexibleGrid-section-1",

          "type": "flexibleGrid",

          "content": {
            "title": "From Theory to Practice",
            "backgroundColor": "from-blue-50 to-purple-50",
            "borderColor": "border-blue-500",
            "categories": [
              {
                "title": "Semantic Engineer Principles",
                "color": "blue",
                "benefits": [
                  "Orchestrate autonomous agents",
                  "Design dynamic experiences",
                  "Create ethical frameworks",
                  "Govern agent ecosystems"
                ]
              },
              {
                "title": "Breeze.AI Implementation",
                "color": "purple",
                "benefits": [
                  "Phase-based transformation methodology",
                  "Human-AI collaboration workflows",
                  "Continuous validation and oversight",
                  "Gradual automation with quality gates"
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
            "title": "Three-Phase Transformation",
            "layout": "grid-3",
            "variant": "cards",
            "items": [
              {
                "id": "phase1",
                "title": "Phase 1",
                "subtitle": "Manual-Heavy Validation",
                "description": "15% Manual, 85% Automated - High human oversight with AI assistance for code generation and testing.",
                "icon": "1",
                "backgroundColor": "bg-orange-100",
                "borderColor": "border-orange-500",
                "color": "text-orange-600",
                "example": "Focus: Establishing trust and validation patterns while maintaining quality"
              },
              {
                "id": "phase2",
                "title": "Phase 2",
                "subtitle": "Balanced Collaboration",
                "description": "30% Manual, 70% Automated - Humans focus on design and orchestration while AI handles implementation.",
                "icon": "2",
                "backgroundColor": "bg-blue-100",
                "borderColor": "border-blue-500",
                "color": "text-blue-600",
                "example": "Focus: Semantic engineering practices with AI-human collaboration"
              },
              {
                "id": "phase3",
                "title": "Phase 3",
                "subtitle": "AI-Led Implementation",
                "description": "5% Manual, 95% Automated - Full semantic engineering with autonomous agents and human governance.",
                "icon": "3",
                "backgroundColor": "bg-green-100",
                "borderColor": "border-green-500",
                "color": "text-green-600",
                "example": "Focus: Agent orchestration, ethical frameworks, and ecosystem governance"
              }
            ]
          }
        }
      ]
    }
  ]
};

const OverviewNew: React.FC<OverviewNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={processFlowOverviewConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default OverviewNew;