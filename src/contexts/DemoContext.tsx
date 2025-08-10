import React, { createContext, useContext, useReducer, ReactNode } from 'react';

interface DemoState {
  currentStep: number;
  isPlaying: boolean;
  selectedComponent: string | null;
  comparisonMode: 'side-by-side' | 'overlay' | 'diff';
  showInconsistencies: boolean;
  simulationProgress: number;
  customBranding: {
    logo?: string;
    companyName: string;
    primaryColor: string;
  };
}

interface DemoContextType {
  state: DemoState;
  dispatch: React.Dispatch<DemoAction>;
  nextStep: () => void;
  previousStep: () => void;
  jumpToStep: (step: number) => void;
  togglePlayback: () => void;
  resetDemo: () => void;
  updateBranding: (branding: Partial<DemoState['customBranding']>) => void;
}

type DemoAction = 
  | { type: 'NEXT_STEP' }
  | { type: 'PREVIOUS_STEP' }
  | { type: 'JUMP_TO_STEP'; payload: number }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'SET_SELECTED_COMPONENT'; payload: string | null }
  | { type: 'SET_COMPARISON_MODE'; payload: DemoState['comparisonMode'] }
  | { type: 'TOGGLE_INCONSISTENCIES' }
  | { type: 'SET_SIMULATION_PROGRESS'; payload: number }
  | { type: 'UPDATE_BRANDING'; payload: Partial<DemoState['customBranding']> }
  | { type: 'RESET_DEMO' };

const initialState: DemoState = {
  currentStep: 0,
  isPlaying: false,
  selectedComponent: null,
  comparisonMode: 'side-by-side',
  showInconsistencies: true,
  simulationProgress: 0,
  customBranding: {
    companyName: 'Breeze AI',
    primaryColor: '#3b82f6'
  }
};

const demoReducer = (state: DemoState, action: DemoAction): DemoState => {
  switch (action.type) {
    case 'NEXT_STEP':
      return { ...state, currentStep: Math.min(state.currentStep + 1, 4) };
    case 'PREVIOUS_STEP':
      return { ...state, currentStep: Math.max(state.currentStep - 1, 0) };
    case 'JUMP_TO_STEP':
      return { ...state, currentStep: Math.max(0, Math.min(action.payload, 4)) };
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.payload };
    case 'SET_SELECTED_COMPONENT':
      return { ...state, selectedComponent: action.payload };
    case 'SET_COMPARISON_MODE':
      return { ...state, comparisonMode: action.payload };
    case 'TOGGLE_INCONSISTENCIES':
      return { ...state, showInconsistencies: !state.showInconsistencies };
    case 'SET_SIMULATION_PROGRESS':
      return { ...state, simulationProgress: Math.max(0, Math.min(action.payload, 100)) };
    case 'UPDATE_BRANDING':
      return { 
        ...state, 
        customBranding: { ...state.customBranding, ...action.payload }
      };
    case 'RESET_DEMO':
      return { 
        ...initialState,
        customBranding: state.customBranding // Preserve branding across resets
      };
    default:
      return state;
  }
};

const DemoContext = createContext<DemoContextType | undefined>(undefined);

export const DemoProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(demoReducer, initialState);

  const nextStep = () => {
    dispatch({ type: 'NEXT_STEP' });
  };

  const previousStep = () => {
    dispatch({ type: 'PREVIOUS_STEP' });
  };

  const jumpToStep = (step: number) => {
    dispatch({ type: 'JUMP_TO_STEP', payload: step });
  };

  const togglePlayback = () => {
    dispatch({ type: 'SET_PLAYING', payload: !state.isPlaying });
  };

  const resetDemo = () => {
    dispatch({ type: 'RESET_DEMO' });
  };

  const updateBranding = (branding: Partial<DemoState['customBranding']>) => {
    dispatch({ type: 'UPDATE_BRANDING', payload: branding });
  };

  const value: DemoContextType = {
    state,
    dispatch,
    nextStep,
    previousStep,
    jumpToStep,
    togglePlayback,
    resetDemo,
    updateBranding
  };

  return (
    <DemoContext.Provider value={value}>
      {children}
    </DemoContext.Provider>
  );
};

export const useDemo = (): DemoContextType => {
  const context = useContext(DemoContext);
  if (!context) {
    throw new Error('useDemo must be used within a DemoProvider');
  }
  return context;
};