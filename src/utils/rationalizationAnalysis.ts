import { OntologyNode, OntologyEdge } from '../types/ontology';

export interface RationalizationPath {
  sharedPersona: OntologyNode;
  sharedOutcome: OntologyNode;
  divergentScenarios: {
    phoenix: OntologyNode;
    apollo: OntologyNode;
    voyager: OntologyNode;
  };
  divergentDesign: {
    phoenix: OntologyNode[];
    apollo: OntologyNode[];
    voyager: OntologyNode[];
  };
  divergentCode: {
    phoenix: OntologyNode[];
    apollo: OntologyNode[];
    voyager: OntologyNode[];
  };
}

export interface RationalizationAction {
  id: string;
  type: 'unify_design' | 'consolidate_code' | 'standardize_flow' | 'merge_components';
  priority: 'high' | 'medium' | 'low';
  description: string;
  currentNodes: {
    phoenix?: string;
    apollo?: string;
    voyager?: string;
  };
  targetUnifiedNode: {
    name: string;
    type: string;
    benefits: string[];
  };
  effort: number; // person-days
  businessImpact: string;
}

export function analyzeRationalizationPath(
  nodes: OntologyNode[], 
  edges: OntologyEdge[]
): RationalizationPath | null {
  
  // Find shared personas (same name across products)
  const personasByName = nodes
    .filter(node => node.type === 'functional' && node.level === 'persona')
    .reduce((acc, node) => {
      const key = node.name;
      if (!acc[key]) acc[key] = [];
      acc[key].push(node);
      return acc;
    }, {} as Record<string, OntologyNode[]>);

  const sharedPersonas = Object.entries(personasByName)
    .filter(([_, personas]) => personas.length >= 2) // At least 2 products share this persona
    .map(([name, personas]) => ({ name, personas }));

  if (sharedPersonas.length === 0) return null;

  // Use the first shared persona (Business User)
  const businessUserPersonas = sharedPersonas[0].personas;
  
  // Find outcomes connected to these personas
  const outcomesByName = {} as Record<string, OntologyNode[]>;
  
  businessUserPersonas.forEach(persona => {
    const personaEdges = edges.filter(edge => edge.source === persona.id);
    personaEdges.forEach(edge => {
      const outcome = nodes.find(node => node.id === edge.target);
      if (outcome && outcome.type === 'functional' && outcome.level === 'outcomes') {
        const key = outcome.name;
        if (!outcomesByName[key]) outcomesByName[key] = [];
        outcomesByName[key].push(outcome);
      }
    });
  });

  // Find shared outcomes
  const sharedOutcomes = Object.entries(outcomesByName)
    .filter(([_, outcomes]) => outcomes.length >= 2)
    .map(([name, outcomes]) => ({ name, outcomes }));

  if (sharedOutcomes.length === 0) return null;

  // Use the authentication outcome
  const authOutcomes = sharedOutcomes.find(so => so.name.includes('Authenticate'))?.outcomes || sharedOutcomes[0].outcomes;
  
  // Find scenarios connected to these outcomes
  const scenarios = {} as Record<string, OntologyNode>;
  
  authOutcomes.forEach(outcome => {
    const scenarioEdges = edges.filter(edge => edge.source === outcome.id);
    scenarioEdges.forEach(edge => {
      const scenario = nodes.find(node => node.id === edge.target);
      if (scenario && scenario.type === 'functional' && scenario.level === 'scenarios') {
        scenarios[scenario.product] = scenario;
      }
    });
  });

  // Trace to design nodes
  const designNodes = {} as Record<string, OntologyNode[]>;
  
  Object.values(scenarios).forEach(scenario => {
    const product = scenario.product;
    designNodes[product] = [];
    
    // Find actions connected to this scenario (through steps)
    const stepEdges = edges.filter(edge => edge.source === scenario.id);
    stepEdges.forEach(stepEdge => {
      const step = nodes.find(node => node.id === stepEdge.target);
      if (step) {
        const actionEdges = edges.filter(edge => edge.source === step.id);
        actionEdges.forEach(actionEdge => {
          const action = nodes.find(node => node.id === actionEdge.target);
          if (action) {
            // Find design atoms connected to this action
            const atomEdges = edges.filter(edge => edge.source === action.id && edge.type === 'realizes');
            atomEdges.forEach(atomEdge => {
              const atom = nodes.find(node => node.id === atomEdge.target && node.type === 'design');
              if (atom) {
                designNodes[product].push(atom);
              }
            });
          }
        });
      }
    });
  });

  // Trace to code nodes
  const codeNodes = {} as Record<string, OntologyNode[]>;
  
  Object.entries(designNodes).forEach(([product, atoms]) => {
    codeNodes[product] = [];
    
    atoms.forEach(atom => {
      const codeEdges = edges.filter(edge => edge.source === atom.id && edge.type === 'renders');
      codeEdges.forEach(codeEdge => {
        const codeNode = nodes.find(node => node.id === codeEdge.target && node.type === 'code');
        if (codeNode) {
          codeNodes[product].push(codeNode);
        }
      });
    });
  });

  return {
    sharedPersona: businessUserPersonas[0], // Representative persona
    sharedOutcome: authOutcomes[0], // Representative outcome
    divergentScenarios: {
      phoenix: scenarios['phoenix'],
      apollo: scenarios['apollo'],
      voyager: scenarios['voyager']
    },
    divergentDesign: {
      phoenix: designNodes['phoenix'] || [],
      apollo: designNodes['apollo'] || [],
      voyager: designNodes['voyager'] || []
    },
    divergentCode: {
      phoenix: codeNodes['phoenix'] || [],
      apollo: codeNodes['apollo'] || [],
      voyager: codeNodes['voyager'] || []
    }
  };
}

export function generateRationalizationActions(path: RationalizationPath): RationalizationAction[] {
  const actions: RationalizationAction[] = [];

  // Action 1: Unify Input Field Design
  const inputActions = [
    {
      id: 'unify_username_input',
      type: 'unify_design' as const,
      priority: 'high' as const,
      description: 'Standardize username/email input field across all products',
      currentNodes: {
        phoenix: 'Username Input (HTML + jQuery)',
        apollo: 'Email Input (React)',
        voyager: 'SSO Redirect (Vue)'
      },
      targetUnifiedNode: {
        name: 'UnifiedCredentialInput',
        type: 'Design Atom',
        benefits: [
          'Consistent user experience',
          'Single validation logic',
          'Accessibility compliance',
          'Cross-framework compatibility'
        ]
      },
      effort: 8,
      businessImpact: 'Users have same input experience across all business applications'
    },
    {
      id: 'unify_password_input', 
      type: 'unify_design' as const,
      priority: 'high' as const,
      description: 'Standardize password input field with show/hide toggle',
      currentNodes: {
        phoenix: 'Password Input (HTML)',
        apollo: 'Password Input (React + show/hide)',
        voyager: 'SSO (no password)'
      },
      targetUnifiedNode: {
        name: 'UnifiedPasswordInput',
        type: 'Design Atom',
        benefits: [
          'Consistent security UX',
          'Standardized show/hide interaction',
          'Common validation feedback',
          'Unified error handling'
        ]
      },
      effort: 6,
      businessImpact: 'Consistent password interaction reduces user confusion and support tickets'
    }
  ];

  // Action 2: Consolidate Authentication Code
  const codeActions = [
    {
      id: 'consolidate_auth_logic',
      type: 'consolidate_code' as const,
      priority: 'high' as const,
      description: 'Create unified authentication service layer',
      currentNodes: {
        phoenix: 'login.php (procedural)',
        apollo: 'AuthService.ts (class-based)',
        voyager: 'SsoHandler.vue (component-based)'
      },
      targetUnifiedNode: {
        name: 'UnifiedAuthService',
        type: 'Service Layer',
        benefits: [
          'Single source of truth for auth logic',
          'Centralized security updates',
          'Consistent error handling',
          'Shared session management'
        ]
      },
      effort: 15,
      businessImpact: 'Centralized authentication reduces security vulnerabilities and maintenance overhead'
    }
  ];

  // Action 3: Standardize Authentication Flow
  const flowActions = [
    {
      id: 'standardize_auth_flow',
      type: 'standardize_flow' as const,
      priority: 'medium' as const,
      description: 'Create unified authentication flow that supports multiple auth methods',
      currentNodes: {
        phoenix: 'Basic Login Flow',
        apollo: '2FA Login Flow', 
        voyager: 'SSO Login Flow'
      },
      targetUnifiedNode: {
        name: 'AdaptiveAuthFlow',
        type: 'User Journey',
        benefits: [
          'Consistent user mental model',
          'Progressive enhancement for security',
          'Unified onboarding experience',
          'Seamless cross-product navigation'
        ]
      },
      effort: 12,
      businessImpact: 'Users learn one authentication pattern that works across all business tools'
    }
  ];

  return [...inputActions, ...codeActions, ...flowActions];
}

export function calculateRationalizationROI(actions: RationalizationAction[]) {
  const totalEffort = actions.reduce((sum, action) => sum + action.effort, 0);
  const highPriorityActions = actions.filter(a => a.priority === 'high').length;
  
  return {
    totalEffort,
    highPriorityActions,
    estimatedSavings: {
      developmentTime: '65%', // Faster development with unified components
      maintenanceCost: '80%', // Reduced maintenance with centralized logic
      supportTickets: '45%', // Fewer user confusion issues
      securityIncidents: '70%' // Centralized security reduces vulnerabilities
    },
    paybackPeriod: '4 months',
    consistencyImprovement: '85%' // Expected consistency score after rationalization
  };
}