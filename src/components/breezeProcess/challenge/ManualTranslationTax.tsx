import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface ManualTranslationTaxNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Manual Translation Tax topic - kept within the component
const manualTranslationTaxConfig: TopicConfig = {
  "id": "manual-translation-tax",
  "title": "The Manual Translation Tax Crisis",
  "slides": [
    {
      "id": "manual-translation-tax-main",
      "sections": [
        {
          "id": "header",
          "type": "prominentDisplay",
          "content": {
            "title": "The Manual Translation Tax",
            "subtitle": "Crisis",
            "variant": "header",
            "titleGradient": "from-error to-warning",
            "description": "Every software project pays a hidden tax: the cost of manually translating requirements into implementation. This tax creates technical debt, delays, and quality issues that plague the industry.",
            "alignment": "center"
          }
        },
        {
          "id": "core-problem",
          "type": "flexibleGrid",
          "content": {
            "title": "The Fundamental Flaw",
            "description": "In conventional software engineering, the three critical aspects of requirements—functional, architectural, and design—are created as documents that impose what we call the \"Manual Translation Tax.\"",
            "variant": "detailed-list",
            "layout": "grid-2",
            "containerStyle": "gradient",
            "backgroundColor": "from-error-50 to-brand-orange-50",
            "borderColor": "border-error-500",
            "items": [
              {
                "id": "interpretation",
                "title": "Interpretation Overhead",
                "description": "Every developer must manually interpret written specifications, introducing variability and misunderstanding",
                "backgroundColor": "bg-white",
                "titleColor": "text-error-800",
                "textColor": "text-error-700"
              },
              {
                "id": "ambiguity",
                "title": "Ambiguity Resolution",
                "description": "Unclear specifications require time-consuming clarification cycles between developers, architects, and product owners",
                "backgroundColor": "bg-white",
                "titleColor": "text-warning-800",
                "textColor": "text-warning-700"
              },
              {
                "id": "traceability",
                "title": "Traceability Loss",
                "description": "No systematic way to verify that implementation actually follows the specified requirements",
                "backgroundColor": "bg-white",
                "titleColor": "text-error-800",
                "textColor": "text-error-700"
              },
              {
                "id": "change-propagation",
                "title": "Change Propagation Failure",
                "description": "When specifications evolve, there's no automatic mechanism to identify what implementation changes are required",
                "backgroundColor": "bg-white",
                "titleColor": "text-warning-800",
                "textColor": "text-warning-700"
              }
            ]
          }
        },
        {
          "id": "translation-process",
          "type": "flexibleGrid",
          "content": {
            "title": "How the Translation Tax Works",
            "variant": "process-visualization",
            "items": [],
            "steps": [
              {
                "id": "step1",
                "number": 1,
                "title": "Business Requirements Created",
                "description": "Product owners define what the system should do",
                "backgroundColor": "bg-brand-blue-50",
                "circleColor": "bg-brand-blue-500",
                "textColor": "text-gray-800",
                "icon": "📄"
              },
              {
                "id": "step2",
                "number": 2,
                "title": "Written Specifications",
                "description": "Requirements documented in human language with inherent ambiguity",
                "backgroundColor": "bg-warning-50",
                "circleColor": "bg-warning-500",
                "textColor": "text-gray-800",
                "icon": "📋"
              },
              {
                "id": "step3",
                "number": 3,
                "title": "Human Interpretation & Variability",
                "description": "Each developer interprets specifications differently, creating inconsistent implementations",
                "backgroundColor": "bg-error-50",
                "circleColor": "bg-error-500",
                "textColor": "text-error-800",
                "icon": "⚠️",
                "isHighlight": true,
                "borderColor": "border-error-200"
              }
            ],
            "multipleOutcomes": {
              "title": "Multiple Implementation Outcomes",
              "outcomes": [
                {
                  "id": "impl-a",
                  "title": "Implementation A",
                  "subtitle": "Developer's interpretation",
                  "letter": "A",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "textColor": "text-warning-800"
                },
                {
                  "id": "impl-b",
                  "title": "Implementation B",
                  "subtitle": "Different interpretation",
                  "letter": "B",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "textColor": "text-warning-800"
                },
                {
                  "id": "impl-c",
                  "title": "Implementation C",
                  "subtitle": "Yet another interpretation",
                  "letter": "C",
                  "backgroundColor": "bg-warning-50",
                  "borderColor": "border-warning-200",
                  "textColor": "text-warning-800"
                }
              ]
            },
            "finalResult": {
              "title": "RESULT: Technical Debt",
              "description": "Inconsistent implementations, maintenance nightmares, and quality issues",
              "backgroundColor": "bg-gray-900",
              "textColor": "text-white",
              "icon": "💀"
            }
          }
        },
        {
          "id": "devastating-impact",
          "type": "flexibleGrid",
          "content": {
            "title": "Where Technical Debt Really Comes From",
            "items": [
              {
                "id": "functional-success",
                "title": "Functional Alignment Success",
                "description": "Misalignment between implementation and functional requirements is relatively rare because the testing process naturally catches and corrects such gaps. When a feature doesn't work as expected, it's immediately obvious and gets fixed.",
                "backgroundColor": "bg-success-50",
                "borderColor": "border-success-200",
                "titleColor": "text-success-800",
                "textColor": "text-success-700",
                "icon": "✅"
              },
              {
                "id": "arch-design-failure",
                "title": "Architectural & Design Alignment Failure",
                "description": "Misalignment between implementation and architectural or design requirements occurs frequently and often goes undetected because these misalignments don't typically cause immediate functional failures but accumulate as technical debt over time.",
                "backgroundColor": "bg-error-50",
                "borderColor": "border-error-200",
                "titleColor": "text-error-800",
                "textColor": "text-error-700",
                "icon": "❌"
              }
            ],
            "timeline": {
              "title": "The Double Compounding Effect",
              "description": "Applications suffer from both <strong>implementation drift</strong> (code deviating from current specifications) AND <strong>specification obsolescence</strong> (specifications becoming outdated relative to current best practices).",
              "backgroundColor": "bg-gray-50",
              "items": [
                {
                  "id": "year1",
                  "title": "Year 1",
                  "description": "Specs match best practices<br/>Implementation follows specs",
                  "backgroundColor": "bg-brand-blue-100",
                  "textColor": "text-secondary-800"
                },
                {
                  "id": "year3",
                  "title": "Year 3",
                  "description": "Specs getting outdated<br/>Implementation drifting",
                  "backgroundColor": "bg-warning-100",
                  "textColor": "text-warning-800"
                },
                {
                  "id": "year5",
                  "title": "Year 5",
                  "description": "Specs obsolete<br/>Implementation legacy",
                  "backgroundColor": "bg-error-100",
                  "textColor": "text-error-800"
                }
              ]
            },
            "variant": "content",
            "layout": "comparison"
          }
        },
        {
          "id": "flexibleGrid-section-1",
          "type": "flexibleGrid",
          "content": {
            "title": "The Impossible Economics",
            "description": "In traditional development approaches, keeping specifications current with evolving best practices is often <strong>economically unfeasible</strong> because:",
            "backgroundColor": "from-gray-50 to-brand-blue-50",
            "borderColor": "border-l-4 border-secondary-500",
            "variant": "detailed-list",
            "items": [
              {
                "id": "analysis-paralysis",
                "title": "Analysis Paralysis",
                "description": "Understanding the impact of updating specifications requires extensive manual analysis",
                "bulletColor": "bg-brand-blue-500"
              },
              {
                "id": "implementation-uncertainty",
                "title": "Implementation Uncertainty",
                "description": "Teams can't predict the full scope of changes required",
                "bulletColor": "bg-brand-purple-500"
              },
              {
                "id": "risk-aversion",
                "title": "Risk Aversion",
                "description": "Uncertainty about evolution impact makes teams reluctant to modernize",
                "bulletColor": "bg-warning-500"
              },
              {
                "id": "resource-competition",
                "title": "Resource Competition",
                "description": "Specification evolution competes with feature development—features usually win",
                "bulletColor": "bg-error-500"
              }
            ],
            "layout": "grid-2",
            "containerStyle": "gradient"
          }
        },
        {
          "id": "prominentDisplay-section-2",
          "type": "prominentDisplay",
          "content": {
            "title": "The Manual Translation Tax Crisis",
            "description": "This manual translation impedance mismatch has created an insurmountable gap between specification and implementation that no amount of process improvement can fully bridge.",
            "conclusion": {
              "title": "The fundamental issue:",
              "description": "<strong>Lack of machine-processable semantic meaning</strong> in traditional documentation",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "See How Traditional Approaches Fail",
            "backgroundGradient": "from-error to-warning",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const ManualTranslationTaxNew: React.FC<ManualTranslationTaxNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={manualTranslationTaxConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default ManualTranslationTaxNew;