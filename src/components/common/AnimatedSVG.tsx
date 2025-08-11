import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

export interface AnimationStep {
  id: string;
  elements: string[];
  description: string;
}

interface AnimatedSVGProps {
  svgPath: string;
  animationSteps: AnimationStep[];
  title?: string;
  stepLabels?: string[];
  className?: string;
  showStepButtons?: boolean;
  showProgressBar?: boolean;
  showDescription?: boolean;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({
  svgPath,
  animationSteps,
  title,
  stepLabels,
  className = '',
  showStepButtons = true,
  showProgressBar = true,
  showDescription = true
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [svgLoaded, setSvgLoaded] = useState(false);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const svgContentRef = useRef<string>('');

  // Load SVG content once
  useEffect(() => {
    const loadSvg = async () => {
      try {
        const response = await fetch(svgPath);
        const svgText = await response.text();
        svgContentRef.current = svgText;
        setSvgLoaded(true);
      } catch (error) {
        console.error('Error loading SVG:', error);
      }
    };
    
    loadSvg();
  }, [svgPath]);

  // Initialize SVG when loaded
  useEffect(() => {
    if (!svgLoaded || !svgContainerRef.current || svgContainerRef.current.innerHTML) return;

    // Render SVG once
    const container = svgContainerRef.current;
    container.innerHTML = svgContentRef.current;
    
    const svgElement = container.querySelector('svg');
    if (!svgElement) return;

    // Set initial visibility - hide all animated elements
    animationSteps.forEach((step, stepIndex) => {
      step.elements.forEach(elementId => {
        const element = svgElement.querySelector(`#${elementId}`);
        if (element) {
          (element as SVGElement).style.opacity = stepIndex === 0 ? '1' : '0';
          (element as SVGElement).style.transition = 'opacity 0.5s ease-in-out';
        }
      });
    });
  }, [svgLoaded, animationSteps]);

  const showStepElements = (stepIndex: number) => {
    const container = svgContainerRef.current;
    if (!container) return;
    
    const svgElement = container.querySelector('svg');
    if (!svgElement) return;

    // Show all elements up to and including current step
    for (let i = 0; i <= stepIndex; i++) {
      const step = animationSteps[i];
      step.elements.forEach(elementId => {
        const element = svgElement.querySelector(`#${elementId}`);
        if (element) {
          (element as SVGElement).style.opacity = '1';
        }
      });
    }

    // Hide elements after current step
    for (let i = stepIndex + 1; i < animationSteps.length; i++) {
      const step = animationSteps[i];
      step.elements.forEach(elementId => {
        const element = svgElement.querySelector(`#${elementId}`);
        if (element) {
          (element as SVGElement).style.opacity = '0';
        }
      });
    }
  };

  // Update display when step changes
  useEffect(() => {
    if (svgLoaded) {
      showStepElements(currentStep);
    }
  }, [currentStep, svgLoaded]);

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleNext = () => {
    if (currentStep < animationSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
  };

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
  };

  // Default step labels if not provided
  const defaultStepLabels = animationSteps.map((_, index) => `Step ${index + 1}`);
  const labels = stepLabels || defaultStepLabels;

  return (
    <div className={`${className}`}>
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      )}
      
      {/* SVG Container */}
      <div 
        ref={svgContainerRef}
        className="w-full mb-4 bg-gray-50 rounded-lg p-2 sm:p-3 min-h-[250px] sm:min-h-[350px] md:min-h-[400px] flex items-center justify-center overflow-x-auto"
      >
        {!svgLoaded && (
          <div className="text-gray-500">Loading visualization...</div>
        )}
      </div>

      {/* Controls */}
      <div className="space-y-4">
        {/* Navigation controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`
              p-2 sm:p-3 rounded-lg transition-colors flex items-center gap-1 sm:gap-2
              ${currentStep === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              }
            `}
            title="Previous Step"
          >
            <ChevronLeftIcon className="h-4 sm:h-5 w-4 sm:w-5" />
            <span className="font-medium text-sm sm:text-base">Previous</span>
          </button>

          <div className="px-2 sm:px-4 py-1 sm:py-2 bg-gray-100 rounded-lg">
            <div className="text-sm sm:text-lg font-semibold text-gray-900">
              Step {currentStep + 1} of {animationSteps.length}
            </div>
          </div>

          <button
            onClick={handleNext}
            disabled={currentStep === animationSteps.length - 1}
            className={`
              p-2 sm:p-3 rounded-lg transition-colors flex items-center gap-1 sm:gap-2
              ${currentStep === animationSteps.length - 1 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
              }
            `}
            title="Next Step"
          >
            <span className="font-medium text-sm sm:text-base">Next</span>
            <ChevronRightIcon className="h-4 sm:h-5 w-4 sm:w-5" />
          </button>
          
          <button
            onClick={handleReset}
            className="p-2 sm:p-3 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
            title="Reset to Step 1"
          >
            <ArrowPathIcon className="h-4 sm:h-5 w-4 sm:w-5 text-gray-700" />
          </button>
        </div>

        {/* Progress bar */}
        {showProgressBar && (
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentStep + 1) / animationSteps.length) * 100}%` }}
            />
          </div>
        )}

        {/* Current step description */}
        {showDescription && (
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <p className="text-sm font-medium text-blue-900">
              {animationSteps[currentStep].description}
            </p>
          </div>
        )}

        {/* Step buttons */}
        {showStepButtons && (
          <div className="grid gap-1 sm:gap-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {animationSteps.map((step, index) => {
              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(index)}
                  className={`
                    px-2 py-1.5 sm:p-2 md:p-3 rounded text-xs font-medium transition-all
                    ${index === currentStep 
                      ? 'bg-blue-600 text-white' 
                      : index <= currentStep 
                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200' 
                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                    }
                  `}
                  title={step.description}
                >
                  <div className="font-semibold text-xs">{labels[index]}</div>
                  {labels[index] !== `Step ${index + 1}` && (
                    <div className="text-xs opacity-75 mt-0.5 hidden sm:block">Step {index + 1}</div>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default AnimatedSVG;