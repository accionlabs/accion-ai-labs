import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { OntologyNode, OntologyEdge, ProductType, OntologyType } from '../types/ontology';
import { allNodes, allEdges } from '../data/ontologyData';

interface OntologyState {
  nodes: OntologyNode[];
  edges: OntologyEdge[];
  selectedProduct: ProductType;
  selectedOntology: OntologyType;
  selectedOntologies: Set<string>; // For multi-selection
  focusedNode: string | null;
  inconsistencies: string[];
  isLoading: boolean;
}

interface OntologyContextType {
  state: OntologyState;
  dispatch: React.Dispatch<OntologyAction>;
  getFilteredNodes: () => OntologyNode[];
  getFilteredEdges: () => OntologyEdge[];
  getInconsistencyCount: () => number;
  getNodeById: (id: string) => OntologyNode | undefined;
  getConsistencyScore: () => number;
  getProductCounts: () => Record<string, number>;
}

type OntologyAction = 
  | { type: 'SET_PRODUCT_FILTER'; payload: ProductType }
  | { type: 'SET_ONTOLOGY_FILTER'; payload: OntologyType }
  | { type: 'TOGGLE_ONTOLOGY'; payload: string }
  | { type: 'SET_FOCUSED_NODE'; payload: string | null }
  | { type: 'HIGHLIGHT_INCONSISTENCIES'; payload: string[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'RESET_FILTERS' };

const initialState: OntologyState = {
  nodes: allNodes,
  edges: allEdges,
  selectedProduct: 'all',
  selectedOntology: 'all',
  selectedOntologies: new Set(['functional', 'design', 'architecture', 'code']),
  focusedNode: null,
  inconsistencies: [],
  isLoading: false
};

const ontologyReducer = (state: OntologyState, action: OntologyAction): OntologyState => {
  switch (action.type) {
    case 'SET_PRODUCT_FILTER':
      return { ...state, selectedProduct: action.payload };
    case 'SET_ONTOLOGY_FILTER':
      return { ...state, selectedOntology: action.payload };
    case 'TOGGLE_ONTOLOGY':
      const newSet = new Set(state.selectedOntologies);
      if (newSet.has(action.payload)) {
        newSet.delete(action.payload);
      } else {
        newSet.add(action.payload);
      }
      return { ...state, selectedOntologies: newSet };
    case 'SET_FOCUSED_NODE':
      return { ...state, focusedNode: action.payload };
    case 'HIGHLIGHT_INCONSISTENCIES':
      return { ...state, inconsistencies: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'RESET_FILTERS':
      return { 
        ...state, 
        selectedProduct: 'all', 
        selectedOntology: 'all',
        selectedOntologies: new Set(['functional', 'design', 'architecture', 'code']),
        focusedNode: null,
        inconsistencies: []
      };
    default:
      return state;
  }
};

const OntologyContext = createContext<OntologyContextType | undefined>(undefined);

export const OntologyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(ontologyReducer, initialState);

  const getFilteredNodes = (): OntologyNode[] => {
    let filtered = state.nodes;
    
    if (state.selectedProduct !== 'all') {
      filtered = filtered.filter(node => node.product === state.selectedProduct);
    }
    
    // Use multi-selection if available, fallback to single selection
    if (state.selectedOntologies.size > 0 && state.selectedOntologies.size < 4) {
      filtered = filtered.filter(node => state.selectedOntologies.has(node.type));
    } else if (state.selectedOntology !== 'all') {
      filtered = filtered.filter(node => node.type === state.selectedOntology);
    }
    // When all 4 ontologies are selected (size === 4), show all ontology types
    // This ensures cross-ontology relationships are visible
    
    return filtered;
  };

  const getFilteredEdges = (): OntologyEdge[] => {
    const filteredNodeIds = new Set(getFilteredNodes().map(node => node.id));
    const filteredEdges = state.edges.filter(edge => 
      filteredNodeIds.has(edge.source) && filteredNodeIds.has(edge.target)
    );
    
    // Debug logging for the specific cross-ontology relationship
    if (process.env.NODE_ENV === 'development') {
      const targetEdge = state.edges.find(e => e.id === 'phoenix_ux_layer_to_login_code');
      if (targetEdge) {
        const sourceInNodes = filteredNodeIds.has(targetEdge.source);
        const targetInNodes = filteredNodeIds.has(targetEdge.target);
        const edgeInFiltered = filteredEdges.some(e => e.id === 'phoenix_ux_layer_to_login_code');
        console.log('Cross-ontology edge debug:', {
          edge: targetEdge,
          sourceInNodes,
          targetInNodes,
          edgeInFiltered,
          filteredNodesCount: filteredNodeIds.size,
          selectedOntologies: Array.from(state.selectedOntologies),
          selectedProduct: state.selectedProduct
        });
      }
    }
    
    return filteredEdges;
  };

  const getInconsistencyCount = (): number => {
    const inconsistentNodes = state.nodes.filter(node => 
      node.inconsistencies && node.inconsistencies.length > 0
    ).length;
    const inconsistentEdges = state.edges.filter(edge => edge.inconsistent).length;
    return inconsistentNodes + inconsistentEdges;
  };

  const getNodeById = (id: string): OntologyNode | undefined => {
    return state.nodes.find(node => node.id === id);
  };

  const getConsistencyScore = (): number => {
    const totalElements = state.nodes.length + state.edges.length;
    const inconsistentElements = getInconsistencyCount();
    return Math.round(((totalElements - inconsistentElements) / totalElements) * 100);
  };

  const getProductCounts = (): Record<string, number> => {
    return {
      phoenix: state.nodes.filter(n => n.product === 'phoenix').length,
      apollo: state.nodes.filter(n => n.product === 'apollo').length,
      voyager: state.nodes.filter(n => n.product === 'voyager').length
    };
  };

  const value: OntologyContextType = {
    state,
    dispatch,
    getFilteredNodes,
    getFilteredEdges,
    getInconsistencyCount,
    getNodeById,
    getConsistencyScore,
    getProductCounts
  };

  return (
    <OntologyContext.Provider value={value}>
      {children}
    </OntologyContext.Provider>
  );
};

export const useOntology = (): OntologyContextType => {
  const context = useContext(OntologyContext);
  if (!context) {
    throw new Error('useOntology must be used within an OntologyProvider');
  }
  return context;
};