import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface RevolutionaryCapabilitiesNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
  onPrevious?: () => void;
  slideMode?: boolean;
  currentSlideIndex?: number;
}

// Configuration for Revolutionary Capabilities topic - kept within the component
const revolutionaryCapabilitiesConfig: TopicConfig = {
  "id": "revolutionary-capabilities",
  "title": "Revolutionary Capabilities",
  "slides": [
    {
      "id": "revolutionary-capabilities-main",
      "sections": [
        {
          "id": "prominentDisplay-section-1",
          "type": "prominentDisplay",
          "content": {
            "title": "Revolutionary",
            "subtitle": "Capabilities",
            "titleGradient": "from-brand-purple-600 via-secondary to-success",
            "description": "Perfect traceability, automatic change propagation, and zero ambiguity create capabilities that were impossible with traditional development approaches.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {
          "id": "perfect-traceability",
          "type": "flexibleGrid",
          "content": {
            "title": "Perfect Traceability",
            "description": "Every line of code can be traced back to its exact specification requirement, and every specification change shows precise implementation impact.",
            "layout": "grid-2",
            "variant": "content",
            "items": [
              {
                "id": "what-this-means",
                "title": "What This Means:",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "items": [
                  "Instant Impact Analysis: Know exactly what code changes when requirements evolve",
                  "Specification Validation: Verify that implementation matches requirements perfectly", 
                  "Compliance Auditing: Automatically prove adherence to architectural and design guidelines",
                  "Change Justification: Every modification traceable to business requirements"
                ]
              },
              {
                "id": "example-scenario",
                "title": "Example Scenario:",
                "backgroundColor": "bg-brand-purple-50",
                "borderColor": "border-brand-purple-600",
                "titleColor": "text-brand-purple-800",
                "processSteps": [
                  {
                    "title": "Business Request:",
                    "description": "\"We need to add two-factor authentication\"",
                    "backgroundColor": "bg-white border-brand-purple-600",
                    "titleColor": "text-brand-purple-700",
                    "descriptionColor": "text-brand-purple-700"
                  },
                  {
                    "title": "Automatic Analysis:",
                    "description": "System identifies 47 code components requiring modification across 12 files",
                    "backgroundColor": "bg-white border-brand-purple-600", 
                    "titleColor": "text-brand-purple-700",
                    "descriptionColor": "text-brand-purple-700"
                  },
                  {
                    "title": "Precise Scope:",
                    "description": "Database schema changes, API endpoint updates, UI component modifications all mapped exactly",
                    "backgroundColor": "bg-white border-brand-purple-600",
                    "titleColor": "text-brand-purple-700", 
                    "descriptionColor": "text-brand-purple-700"
                  }
                ]
              }
            ]
          }
        },
        {
          "id": "automatic-change-propagation",
          "type": "flexibleGrid",
          "content": {
            "title": "Automatic Change Propagation",
            "description": "When specifications evolve, all affected implementations are automatically identified and updated, ensuring perfect consistency across the entire application.",
            "layout": "grid-2",
            "variant": "content",
            "items": [
              {
                "id": "traditional-problem",
                "title": "The Traditional Problem:",
                "backgroundColor": "bg-success-50",
                "borderColor": "border-success",
                "titleColor": "text-success-800",
                "items": [
                  "Manual Discovery: Developers hunt through code to find affected areas",
                  "Incomplete Updates: Some components get missed in large changes", 
                  "Inconsistent Results: Different developers implement the same change differently"
                ]
              },
              {
                "id": "breeze-ai-solution",
                "title": "The Breeze.AI Solution:",
                "backgroundColor": "bg-success-100",
                "borderColor": "border-success-300",
                "titleColor": "text-success-800",
                "items": [
                  "Automatic Discovery: System instantly identifies all affected components",
                  "Complete Coverage: Every related element updated systematically",
                  "Perfect Consistency: All changes follow identical patterns automatically"
                ]
              }
            ]
          }
        },
        {
          "id": "zero-ambiguity-processing",
          "type": "flexibleGrid",
          "content": {
            "title": "Zero Ambiguity Processing",
            "description": "Machine-readable semantics eliminate interpretation variability, ensuring every agent processes specifications identically every time.",
            "layout": "grid-2",
            "variant": "content",
            "items": [
              {
                "id": "traditional-ambiguity",
                "title": "Traditional Ambiguity Issues:",
                "backgroundColor": "bg-error-50",
                "borderColor": "border-error",
                "titleColor": "text-error-800",
                "items": [
                  "Specification: \"The system should be secure\" → Developer A: basic password validation, Developer B: OAuth integration, Developer C: SQL injection prevention",
                  "Specification: \"Make it user-friendly\" → Different interpretations lead to inconsistent UI patterns"
                ]
              },
              {
                "id": "breeze-ai-precision",
                "title": "Breeze.AI Semantic Precision:",
                "backgroundColor": "bg-brand-blue-50",
                "borderColor": "border-secondary", 
                "titleColor": "text-secondary",
                "items": [
                  "Semantic Graph: Security ontology defines exact requirements → Authentication: OAuth 2.0 with PKCE, Authorization: Role-based access control, Data protection: AES-256 encryption",
                  "Design Graph: UX patterns precisely specified → Consistent implementation across all agents and developers"
                ]
              }
            ]
          }
        },
        {
          "id": "automatic-bdd-integration",
          "type": "flexibleGrid",
          "content": {
            "title": "Automatic BDD Integration",
            "description": "Behavior-driven testing becomes the default, not an optional practice teams struggle to maintain.",
            "layout": "grid-2",
            "variant": "process-flow",
            "items": [
              {
                "id": "what-happens-automatically",
                "title": "What Happens Automatically:",
                "backgroundColor": "bg-white",
                "borderColor": "border-gray-200",
                "processSteps": [
                  {
                    "icon": "1",
                    "title": "Acceptance Tests Generated",
                    "description": "from functional specifications",
                    "backgroundColor": "bg-success-50 border-success",
                    "iconColor": "bg-success",
                    "titleColor": "text-success-800",
                    "descriptionColor": "text-success-700"
                  },
                  {
                    "icon": "2", 
                    "title": "Protocol Drivers Created",
                    "description": "linking domain language to code",
                    "backgroundColor": "bg-brand-blue-50 border-secondary",
                    "iconColor": "bg-secondary",
                    "titleColor": "text-secondary",
                    "descriptionColor": "text-brand-blue-700"
                  },
                  {
                    "icon": "3",
                    "title": "Implementation Code Generated", 
                    "description": "aligned with all ontologies",
                    "backgroundColor": "bg-brand-purple-50 border-brand-purple-600",
                    "iconColor": "bg-brand-purple-600",
                    "titleColor": "text-brand-purple-800",
                    "descriptionColor": "text-brand-purple-700"
                  },
                  {
                    "icon": "4",
                    "title": "Tests Execute Continuously",
                    "description": "validating specification adherence",
                    "backgroundColor": "bg-warning-50 border-warning",
                    "iconColor": "bg-warning",
                    "titleColor": "text-warning-800",
                    "descriptionColor": "text-warning-700"
                  }
                ]
              },
              {
                "id": "transformation",
                "title": "The Transformation:",
                "backgroundColor": "bg-warning-50",
                "borderColor": "border-warning",
                "titleColor": "text-warning-800",
                "items": [
                  "Before Breeze.AI: BDD requires significant manual effort that teams can't sustain under deadline pressure. Quality practices get abandoned when resources are tight.",
                  "With Breeze.AI: BDD happens automatically with zero overhead. Quality becomes the path of least resistance rather than additional work. Teams get quality benefits without compromise."
                ]
              }
            ]
          }
        },
        {
          "id": "specification-evolution",
          "type": "flexibleGrid",
          "slideGroup": "specification-evolution-group",
          "content": {
            "title": "Specification Evolution Management",
            "description": "Architectural and design specifications can evolve continuously without the risk and overhead traditionally associated with large-scale changes.",
            "variant": "content",
            "containerStyle": "default",
            "items": []
          }
        },
        {
          "id": "practical-scenarios",
          "type": "flexibleGrid",
          "slideGroup": "specification-evolution-group",
          "content": {
            "title": "Practical Evolution Scenarios:",
            "layout": "grid-3",
            "variant": "content",
            "containerStyle": "gradient",
            "backgroundColor": "from-blue-50 to-purple-50",
            "borderColor": "border-secondary",
            "items": [
              {
                "id": "security-modernization",
                "title": "Security Modernization",
                "backgroundColor": "bg-white",
                "borderColor": "border-secondary", 
                "titleColor": "text-secondary",
                "textColor": "text-brand-blue-700",
                "description": "New security patterns updated in architecture graph → system identifies all authentication components requiring updates automatically"
              },
              {
                "id": "performance-optimization",
                "title": "Performance Optimization", 
                "backgroundColor": "bg-white",
                "borderColor": "border-secondary",
                "titleColor": "text-secondary",
                "textColor": "text-brand-blue-700",
                "description": "Improved performance patterns integrated → database access patterns and caching strategies updated systematically"
              },
              {
                "id": "design-system-evolution",
                "title": "Design System Evolution",
                "backgroundColor": "bg-white", 
                "borderColor": "border-secondary",
                "titleColor": "text-secondary",
                "textColor": "text-brand-blue-700",
                "description": "UX standards advance → every interface component automatically aligned with evolved design patterns"
              }
            ]
          }
        },
        {
          "id": "revolutionary-outcome",
          "type": "flexibleGrid",
          "slideGroup": "specification-evolution-group",
          "content": {
            "title": "The Revolutionary Outcome:",
            "layout": "grid-2",
            "variant": "content",
            "containerStyle": "gradient",
            "backgroundColor": "from-green-50 to-blue-50",
            "borderColor": "border-success-500",
            "items": [
              {
                "id": "traditional-approach",
                "title": "Traditional Approach:",
                "backgroundColor": "bg-white",
                "borderColor": "border-success",
                "titleColor": "text-success-800",
                "textColor": "text-success-700",
                "items": [
                  "High-risk, high-effort modernization projects", 
                  "Often fail due to incomplete impact analysis",
                  "Inconsistent implementation across teams",
                  "Expensive coordination overhead"
                ]
              },
              {
                "id": "breeze-ai-approach",
                "title": "Breeze.AI Approach:",
                "backgroundColor": "bg-white",
                "borderColor": "border-success", 
                "titleColor": "text-success-800",
                "textColor": "text-success-700",
                "items": [
                  "Ongoing, manageable evolution process",
                  "Complete impact understanding before changes",
                  "Automatic consistency across all components",
                  "Zero coordination overhead"
                ]
              }
            ]
          }
        },
        {
          "id": "compound-effect",
          "type": "prominentDisplay",
          "content": {
            "title": "The Compound Effect",
            "description": "These capabilities work together to create outcomes that were impossible with traditional approaches.",
            "backgroundGradient": "bg-gradient-to-r from-brand-purple-600 via-secondary to-success",
            "textColor": "text-white",
            "variant": "cta",
            "items": [
              {
                "id": "speed",
                "title": "Speed",
                "description": "Common patterns implemented dramatically faster through automation",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "quality",
                "title": "Quality", 
                "description": "Implementation guaranteed to adhere to all specification layers",
                "backgroundColor": "bg-white/20"
              },
              {
                "id": "consistency",
                "title": "Consistency",
                "description": "Every implementation follows identical high standards automatically",
                "backgroundColor": "bg-white/20"
              }
            ],
            "conclusion": {
              "title": "The Ultimate Result:",
              "description": "Software development becomes a <strong>predictable, scalable, and continuously improving process</strong> rather than an unpredictable craft prone to technical debt accumulation.",
              "backgroundColor": "bg-white/20"
            },
            "buttonText": "See Legacy System Transformation"
          }
        }
      ]
    }
  ]
};

const RevolutionaryCapabilitiesNew: React.FC<RevolutionaryCapabilitiesNewProps> = ({ 
  onNavigate, 
  onNext, 
  onPrevious, 
  slideMode, 
  currentSlideIndex 
}) => {
  return (
    <TopicLayout 
      config={revolutionaryCapabilitiesConfig}
      onNavigate={onNavigate}
      onNext={onNext}
      onPrevious={onPrevious}
      slideMode={slideMode}
      currentSlideIndex={currentSlideIndex}
    />
  );
};

export default RevolutionaryCapabilitiesNew;