import React from 'react';
import AnimatedSVG, { AnimationStep } from '../common/AnimatedSVG';
import { getPublicAssetUrl } from '../../utils/assetHelper';

const GeneralAnimatedExtraction: React.FC = () => {
  const animationSteps: AnimationStep[] = [
    {
      id: 'step1',
      elements: ['input-artifacts'],
      description: 'Step 1: Collect input artifacts from your codebase and documentation'
    },
    {
      id: 'step2',
      elements: ['code-agent'],
      description: 'Step 2: Code Agent analyzes source code to create the ground truth'
    },
    {
      id: 'step3',
      elements: ['functional-agent'],
      description: 'Step 3: Functional Agent extracts business logic and requirements'
    },
    {
      id: 'step4',
      elements: ['design-agent'],
      description: 'Step 4: Design Agent identifies UI/UX patterns and components'
    },
    {
      id: 'step5',
      elements: ['architecture-agent'],
      description: 'Step 5: Architecture Agent maps system structure and layers'
    },
    {
      id: 'step6',
      elements: ['knowledge-graph'],
      description: 'Step 6: Create unified semantic model connecting all ontologies'
    }
  ];

  const stepLabels = [
    'Input',
    'Code Analysis',
    'Functional',
    'Design',
    'Architecture',
    'Unified Model'
  ];

  return (
    <AnimatedSVG
      svgPath={getPublicAssetUrl('/assets/diagrams/extraction-process-general.svg')}
      animationSteps={animationSteps}
      title=""
      stepLabels={stepLabels}
      showStepButtons={true}
      showProgressBar={true}
      showDescription={true}
    />
  );
};

export default GeneralAnimatedExtraction;