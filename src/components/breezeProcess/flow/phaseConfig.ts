
// CONFIGURABLE COORDINATES - Edit these to adjust arrow positions
// 4-column grid: DE (12.5%), HIL (37.5%), SE (62.5%), AD (87.5%)
export const TEAM_X_POSITIONS = {
  DE: 11,             // Development Engineers (DE) - center of first column
  HIL: 37,            // Human In Loop (HIL) - center of second column
  SE: 63,             // Semantic Engineers - center of third column  
  AD: 89              // Agent Developers - center of fourth column
};

// CONFIGURABLE BOX HEIGHTS - Edit these to adjust activity group container heights
export const BOX_HEIGHTS = {
  // Phase 1
  collaboration1: 120,
  parallel1: 100,
  integration1: 120,
  
  // Phase 2  
  deployment2: 100,
  collaboration2: 140,
  parallel2: 100,
  
  // Phase 3
  pipeline3: 100,
  optimization3: 50,
  automated3: 100,
  feedback3: 100
};

// PHASE DATA CONFIGURATION - Edit this to modify phase content
export const phases = {
  1: {
    title: "Semantic Engineering Foundation",
    description: "Manual development handles the complete product backlog while Breeze.AI semantic engineers and agent developers customize the foundation for the specific client context. Semantic engineers adapt Breeze.AI's base ontologies to capture the client's enterprise constraints (existing systems, interfaces, component libraries, coding guidelines, architectural patterns) and project-specific contexts (functional requirements, UX design patterns, architectural decisions). Agent developers customize Breeze.AI's base agent implementations and develop new specialized agents tailored to the client's unique requirements. Quality benchmarks are established through code quality metrics and functional acceptance test completion rates",
    sections: [
      {
        id: "baseline",
        title: "Semantic Context & Agent Customization",
        activities: [
          { sequence: 1, type: 'self', team: 'AD', activities: ['Breeze.AI Base Agents Setup'] },
          { sequence: 1, type: 'self', team: 'SE', activities: ['Breeze.AI Semantic Ontology Setup'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Existing Engineering Context' },
          { sequence: 3, type: 'flow', from: 'SE', to: 'AD', label: 'Semantic Ontology Customization' },
          { sequence: 4, type: 'flow', from: 'AD', to: 'SE', label: 'Base Agent Customization' }
        ]
      },
      {
        id: "development",
        title: "Manual Development & Agent Prototyping",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Groomed Backlog'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Groomed Backlog'] },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Story Point Estimation'] },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Entire Scope for Manual Development'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Selected Scope for Semantic Engineering' },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Manual Effort Estimates of Selected Scope' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Effort Estimates of Entire Scope'] },
          { sequence: 4, type: 'self', team: 'DE', activities: ['Development of Entire Scope'] },
          { sequence: 4, type: 'flow', from: 'SE', to: 'AD', label: 'Base Semantic Model' },
          { sequence: 5, type: 'flow', from: 'AD', to: 'SE', label: 'Agent Prototypes' }
        ]
      },
      {
        id: "integration1",
        title: "Integration Testing",
        activities: [
          { sequence: 1, type: 'self', team: 'SE', activities: ['Agent Execution'] },
          { sequence: 1, type: 'self', team: 'DE', activities: ['Manual Testing'] },
          { sequence: 2, type: 'flow', from: 'SE', to: 'HIL', label: 'Agent Developed Artifacts' },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Peer Reviews'] },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Artifact Reviews' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Development Fixes'] },
          { sequence: 4, type: 'flow', from: 'SE', to: 'AD', label: 'Semantic Model Updates' },
          { sequence: 4, type: 'self', team: 'DE', activities: ['Test Automation'] },
          { sequence: 5, type: 'flow', from: 'AD', to: 'SE', label: 'Agent Updates' }
        ]
      },
      {
        id: "performance1",
        title: "Deployment & Performance Metrics",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Deployment of Manual Scope'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Deployment of Semantic Scope'] },
          { sequence: 2, type: 'flow', from: 'DE', to: 'HIL', label: 'Actual Manual Development Effort' },
          { sequence: 2, type: 'flow', from: 'SE', to: 'HIL', label: 'Semantic Engineering Performance' },
          { sequence: 3, type: 'self', team: 'HIL', activities: ['Automation Metrics'] }
        ]
      }
    ],
    automatedOutput: {
      percentage: "10%",
      deliverables: "Deployed Features + Validated Agents + Automation Metrics"
    },
    manualOutput: {
      percentage: "100%",
      deliverables: "Deployed Features"
    }
  },
  2: {
    title: "Semantic Engineering Evolution",
    description: "Validated customized agents receive independent portions of the product backlog scope, working in parallel with manual development teams handling separate, mutually exclusive scope areas. The semantic engineering capabilities evolve and expand as agents demonstrate proficiency across increasingly complex use cases. The allocation incrementally shifts toward semantic engineering while the Breeze.AI-based context model grows to support new patterns and complexity, enabling the semantic engineering process to mature and handle increasingly diverse scope while maintaining quality through human-in-the-loop review processes",
    sections: [
      {
        id: "bifurcation",
        title: "Scope Bifurcation",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Groomed Backlog'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Groomed Backlog'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Selected Scope compatible with Validated Agents' },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Remaining Scope for Manual Development'] },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Manual Effort Estimates of Selected Scope' }
        ]
      },
      {
        id: "development",
        title: "Manual Development & Semantic Enhancement",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Remaining Scope'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Remaining Scope'] },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Story Point Estimation'] },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Stories for Development'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Selected Scope for Semantic Enhancement' },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Manual Effort Estimates of Selected Scope' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Effort Estimates of Remaining Scope'] },
          { sequence: 4, type: 'self', team: 'DE', activities: ['Development of Remaining Scope'] },
          { sequence: 4, type: 'flow', from: 'SE', to: 'AD', label: 'Enhanced Semantic Model' },
          { sequence: 5, type: 'flow', from: 'AD', to: 'SE', label: 'Enhanced Agents' }
        ]
      },
      {
        id: "integration1",
        title: "Integration Testing",
        activities: [
          { sequence: 1, type: 'self', team: 'SE', activities: ['Agent Execution'] },
          { sequence: 1, type: 'self', team: 'DE', activities: ['Manual Testing'] },
          { sequence: 2, type: 'flow', from: 'SE', to: 'HIL', label: 'Agent Developed Artifacts' },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Peer Reviews'] },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Artifact Reviews' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Development Fixes'] },
          { sequence: 4, type: 'flow', from: 'SE', to: 'AD', label: 'Semantic Model Updates' },
          { sequence: 4, type: 'self', team: 'DE', activities: ['Test Automation'] },
          { sequence: 5, type: 'flow', from: 'AD', to: 'SE', label: 'Agent Updates' }
        ]
      },
      {
        id: "performance1",
        title: "Deployment & Performance Metrics",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Deployment of Manual Scope'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Deployment of Semantic Scope'] },
          { sequence: 2, type: 'flow', from: 'DE', to: 'HIL', label: 'Actual Manual Development Effort' },
          { sequence: 2, type: 'flow', from: 'SE', to: 'HIL', label: 'Semantic Engineering Performance' },
          { sequence: 3, type: 'self', team: 'HIL', activities: ['Automation Metrics'] }
        ]
      }
    ],
    automatedOutput: {
      percentage: "10% to 80%",
      deliverables: "Deployed Features + Enhanced Agents + Automation Metrics"
    },
    manualOutput: {
      percentage: '90% down to 20%',
      deliverables: "Deployed Features"
    }
  },
  3: {
    title: "Semantic First Engineering",
    description: "Breeze.AI-powered semantic engineering manages approximately 80% of the product backlog independently, with manual development reserved for novel, complex, or architecturally significant work items. The mature Breeze.AI semantic context model supports most standard development patterns, while human engineers focus on innovation, complex problem-solving. The semantic engineers and agent developers contibue to maintain the semantic models and agents",
    sections: [
      {
        id: "bifurcation",
        title: "Semantic First Execution",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Groomed Backlog'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Groomed Backlog'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Entire Scope for Semantic Engineering' },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Complex Scope for Manual Development'] },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Manual Effort Estimates of Complex Scope' }
        ]
      },
      {
        id: "development",
        title: "Manual Development & Semantic Enhancement",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Complex Scope'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Entire Scope'] },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Story Point Estimation'] },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Stories for Development'] },
          { sequence: 2, type: 'flow', from: 'HIL', to: 'SE', label: 'Entire Scope for Semantic Evalutation' },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Manual Effort Estimates of Entire Scope' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Effort Estimates of Complex Scope'] },
          { sequence: 4, type: 'self', team: 'SE', activities: ['Semantic Evaluation'] },
          { sequence: 4, type: 'self', team: 'DE', activities: ['Development of Complex Scope'] },
          { sequence: 5, type: 'flow', from: 'SE', to: 'AD', label: 'Semantic Model Gaps' },
          { sequence: 6, type: 'flow', from: 'AD', to: 'SE', label: 'Enhanced Agents' }
        ]
      },
      {
        id: "integration1",
        title: "Integration Testing",
        activities: [
          { sequence: 1, type: 'self', team: 'SE', activities: ['Agent Execution'] },
          { sequence: 1, type: 'self', team: 'DE', activities: ['Manual Testing'] },
          { sequence: 2, type: 'flow', from: 'SE', to: 'HIL', label: 'Agent Developed Artifacts' },
          { sequence: 2, type: 'self', team: 'DE', activities: ['Peer Reviews'] },
          { sequence: 3, type: 'flow', from: 'HIL', to: 'SE', label: 'Artifact Reviews' },
          { sequence: 3, type: 'self', team: 'DE', activities: ['Development Fixes'] },
          { sequence: 4, type: 'flow', from: 'SE', to: 'AD', label: 'Semantic Model Updates' },
          { sequence: 4, type: 'self', team: 'DE', activities: ['Test Automation'] },
          { sequence: 5, type: 'flow', from: 'AD', to: 'SE', label: 'Agent Updates' }
        ]
      },
      {
        id: "performance1",
        title: "Deployment & Performance Metrics",
        activities: [
          { sequence: 1, type: 'self', team: 'DE', activities: ['Deployment of Manual Scope'] },
          { sequence: 1, type: 'self', team: 'HIL', activities: ['Deployment of Semantic Scope'] },
          { sequence: 2, type: 'flow', from: 'DE', to: 'HIL', label: 'Actual Manual Development Effort' },
          { sequence: 2, type: 'flow', from: 'SE', to: 'HIL', label: 'Semantic Engineering Performance' },
          { sequence: 3, type: 'self', team: 'HIL', activities: ['Automation Metrics'] }
        ]
      }
    ],
    automatedOutput: {
      percentage: "80% to 100%",
      deliverables: "Deployed Features + Mature Agents + Automation Metrics"
    },
    manualOutput: {
      percentage: "Up to 20%",
      deliverables: "Deployed Features"
    }
  }
};