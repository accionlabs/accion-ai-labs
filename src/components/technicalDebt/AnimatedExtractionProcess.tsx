import React from 'react';
import AnimatedSVG, { AnimationStep } from '../common/AnimatedSVG';
import { getPublicAssetUrl } from '../../utils/assetHelper';

const AnimatedExtractionProcess: React.FC = () => {
  const animationSteps: AnimationStep[] = [
    {
      id: 'step1',
      elements: ['input-artifacts'], // Input artifacts
      description: 'Step 1: Input artifacts - Code repository and documentation'
    },
    {
      id: 'step2',
      elements: ['code-agent'],
      description: 'Step 2: Code Agent analyzes source code and creates Code Graph (Ground Truth)'
    },
    {
      id: 'step3',
      elements: ['functional-agent'],
      description: 'Step 3: Functional Agent maps requirements to code using Code Graph'
    },
    {
      id: 'step4',
      elements: ['design-agent'],
      description: 'Step 4: Design Agent maps UI patterns to code components'
    },
    {
      id: 'step5',
      elements: ['architecture-agent'],
      description: 'Step 5: Architecture Agent maps system layers to code structure'
    },
    {
      id: 'step6',
      elements: ['knowledge-graph'], // Final output with arrows
      description: 'Step 6: All ontologies unified into Unified Semantic Model'
    }
  ];

  const stepLabels = [
    'Input',
    'Code Agent',
    'Functional',
    'Design',
    'Architecture',
    'Unified Model'
  ];

  return (
    <AnimatedSVG
      svgPath={getPublicAssetUrl('/assets/diagrams/extraction-process-improved.svg')}
      animationSteps={animationSteps}
      title=""
      stepLabels={stepLabels}
      showStepButtons={true}
      showProgressBar={true}
      showDescription={true}
    />
  );
};

export default AnimatedExtractionProcess;