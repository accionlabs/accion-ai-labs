/**
 * FourOntologyBuilder
 * Builder class for constructing four-ontology graphs with sample data
 */

import FourOntologyGraph from './FourOntologyGraph';
import { OntologyNode, OntologyEdge } from '../types/ontology';

export interface ProductDefinition {
  id: 'phoenix' | 'apollo' | 'voyager';
  name: string;
  description: string;
  technology?: string;
}

export interface FunctionalRequirement {
  persona: string;
  outcomes: string[];
  scenarios: string[];
}

export interface DesignSpecification {
  atoms: string[];
  molecules: string[];
  organisms: string[];
  templates: string[];
  pages: string[];
}

export interface ArchitectureDefinition {
  services: string[];
  layers: string[];
  modules: string[];
  root: string;
}

export interface CodeImplementation {
  frontendComponents: string[];
  backendClasses: string[];
  frontendFunctions: string[];
  backendFunctions: string[];
  properties: string[];
}

export class FourOntologyBuilder {
  private graph: FourOntologyGraph;
  private nodeCounter: number;
  private edgeCounter: number;

  constructor() {
    this.graph = new FourOntologyGraph();
    this.nodeCounter = 0;
    this.edgeCounter = 0;
  }

  // ============ Product Building Methods ============

  addProduct(
    product: ProductDefinition,
    functional: FunctionalRequirement,
    design: DesignSpecification,
    architecture: ArchitectureDefinition,
    code: CodeImplementation
  ): FourOntologyBuilder {
    // Add functional nodes
    const functionalNodes = this.addFunctionalOntology(product.id, functional);
    
    // Add design nodes
    const designNodes = this.addDesignOntology(product.id, design);
    
    // Add architecture nodes
    const architectureNodes = this.addArchitectureOntology(product.id, architecture);
    
    // Add code nodes
    const codeNodes = this.addCodeOntology(product.id, code);
    
    // Connect ontologies
    this.connectFunctionalToDesign(functionalNodes, designNodes);
    this.connectDesignToCode(designNodes, codeNodes);
    this.connectArchitectureToCode(architectureNodes, codeNodes);
    this.connectFunctionalToArchitecture(functionalNodes, architectureNodes);
    
    return this;
  }

  private addFunctionalOntology(
    productId: 'phoenix' | 'apollo' | 'voyager',
    functional: FunctionalRequirement
  ): Map<string, OntologyNode> {
    const nodes = new Map<string, OntologyNode>();
    
    // Add persona node
    const personaNode: OntologyNode = {
      id: `${productId}_persona_${this.nodeCounter++}`,
      name: functional.persona,
      type: 'functional',
      level: 'persona',
      product: productId,
      description: `Primary user persona for ${productId}`,
      properties: {
        role: functional.persona,
        product: productId
      }
    };
    this.graph.addNode(personaNode);
    nodes.set('persona', personaNode);
    
    // Add outcome nodes
    const outcomeNodes: OntologyNode[] = [];
    for (const outcome of functional.outcomes) {
      const node: OntologyNode = {
        id: `${productId}_outcome_${this.nodeCounter++}`,
        name: outcome,
        type: 'functional',
        level: 'outcomes',
        product: productId,
        description: `Desired outcome: ${outcome}`,
        properties: {
          outcome,
          product: productId
        }
      };
      this.graph.addNode(node);
      outcomeNodes.push(node);
      
      // Connect persona to outcome
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: personaNode.id,
        target: node.id,
        type: 'requires',
        strength: 1
      });
    }
    nodes.set('outcomes', outcomeNodes[0]); // Store first outcome as representative
    
    // Add scenario nodes
    const scenarioNodes: OntologyNode[] = [];
    for (const scenario of functional.scenarios) {
      const node: OntologyNode = {
        id: `${productId}_scenario_${this.nodeCounter++}`,
        name: scenario,
        type: 'functional',
        level: 'scenarios',
        product: productId,
        description: `Usage scenario: ${scenario}`,
        properties: {
          scenario,
          product: productId
        }
      };
      this.graph.addNode(node);
      scenarioNodes.push(node);
      
      // Connect outcomes to scenarios
      for (const outcomeNode of outcomeNodes) {
        this.graph.addEdge({
          id: `edge_${this.edgeCounter++}`,
          source: outcomeNode.id,
          target: node.id,
          type: 'triggers',
          strength: 0.8
        });
      }
    }
    nodes.set('scenarios', scenarioNodes[0]);
    
    return nodes;
  }

  private addDesignOntology(
    productId: 'phoenix' | 'apollo' | 'voyager',
    design: DesignSpecification
  ): Map<string, OntologyNode> {
    const nodes = new Map<string, OntologyNode>();
    const levels: (keyof DesignSpecification)[] = ['atoms', 'molecules', 'organisms', 'templates', 'pages'];
    
    let previousLevelNodes: OntologyNode[] = [];
    
    for (const level of levels) {
      const currentLevelNodes: OntologyNode[] = [];
      const items = design[level] as string[];
      
      for (const item of items) {
        const node: OntologyNode = {
          id: `${productId}_design_${level}_${this.nodeCounter++}`,
          name: item,
          type: 'design',
          level,
          product: productId,
          description: `${level} component: ${item}`,
          properties: {
            componentType: level,
            product: productId
          }
        };
        this.graph.addNode(node);
        currentLevelNodes.push(node);
        
        // Connect to previous level
        if (previousLevelNodes.length > 0) {
          for (const prevNode of previousLevelNodes) {
            this.graph.addEdge({
              id: `edge_${this.edgeCounter++}`,
              source: prevNode.id,
              target: node.id,
              type: 'implements',
              strength: 0.7
            });
          }
        }
      }
      
      if (currentLevelNodes.length > 0) {
        nodes.set(level, currentLevelNodes[0]);
        previousLevelNodes = currentLevelNodes;
      }
    }
    
    return nodes;
  }

  private addArchitectureOntology(
    productId: 'phoenix' | 'apollo' | 'voyager',
    architecture: ArchitectureDefinition
  ): Map<string, OntologyNode> {
    const nodes = new Map<string, OntologyNode>();
    
    // Add root node
    const rootNode: OntologyNode = {
      id: `${productId}_arch_root`,
      name: architecture.root,
      type: 'architecture',
      level: 'root',
      product: productId,
      description: `Root architecture: ${architecture.root}`,
      properties: {
        architectureType: 'root',
        product: productId
      }
    };
    this.graph.addNode(rootNode);
    nodes.set('root', rootNode);
    
    // Add module nodes
    const moduleNodes: OntologyNode[] = [];
    for (const module of architecture.modules) {
      const node: OntologyNode = {
        id: `${productId}_arch_module_${this.nodeCounter++}`,
        name: module,
        type: 'architecture',
        level: 'modules',
        product: productId,
        description: `Module: ${module}`,
        properties: {
          moduleType: module,
          product: productId
        }
      };
      this.graph.addNode(node);
      moduleNodes.push(node);
      
      // Connect root to modules
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: rootNode.id,
        target: node.id,
        type: 'manages',
        strength: 1
      });
    }
    
    // Add layer nodes
    const layerNodes: OntologyNode[] = [];
    for (const layer of architecture.layers) {
      const node: OntologyNode = {
        id: `${productId}_arch_layer_${this.nodeCounter++}`,
        name: layer,
        type: 'architecture',
        level: 'layers',
        product: productId,
        description: `Layer: ${layer}`,
        properties: {
          layerType: layer,
          product: productId
        }
      };
      this.graph.addNode(node);
      layerNodes.push(node);
      
      // Connect modules to layers
      for (const moduleNode of moduleNodes) {
        this.graph.addEdge({
          id: `edge_${this.edgeCounter++}`,
          source: moduleNode.id,
          target: node.id,
          type: 'implements',
          strength: 0.8
        });
      }
    }
    
    // Add service nodes
    const serviceNodes: OntologyNode[] = [];
    for (const service of architecture.services) {
      const node: OntologyNode = {
        id: `${productId}_arch_service_${this.nodeCounter++}`,
        name: service,
        type: 'architecture',
        level: 'services',
        product: productId,
        description: `Service: ${service}`,
        properties: {
          serviceType: service,
          product: productId
        }
      };
      this.graph.addNode(node);
      serviceNodes.push(node);
      
      // Connect layers to services
      for (const layerNode of layerNodes) {
        this.graph.addEdge({
          id: `edge_${this.edgeCounter++}`,
          source: layerNode.id,
          target: node.id,
          type: 'supports',
          strength: 0.7
        });
      }
    }
    
    nodes.set('services', serviceNodes[0]);
    nodes.set('layers', layerNodes[0]);
    nodes.set('modules', moduleNodes[0]);
    
    return nodes;
  }

  private addCodeOntology(
    productId: 'phoenix' | 'apollo' | 'voyager',
    code: CodeImplementation
  ): Map<string, OntologyNode> {
    const nodes = new Map<string, OntologyNode>();
    
    // Add frontend components
    for (const component of code.frontendComponents) {
      const node: OntologyNode = {
        id: `${productId}_code_fe_component_${this.nodeCounter++}`,
        name: component,
        type: 'code',
        level: 'frontend_components',
        product: productId,
        description: `Frontend component: ${component}`,
        properties: {
          codeType: 'frontend_component',
          technology: 'React',
          product: productId
        }
      };
      this.graph.addNode(node);
      if (!nodes.has('frontend_components')) {
        nodes.set('frontend_components', node);
      }
    }
    
    // Add backend classes
    for (const cls of code.backendClasses) {
      const node: OntologyNode = {
        id: `${productId}_code_be_class_${this.nodeCounter++}`,
        name: cls,
        type: 'code',
        level: 'backend_classes',
        product: productId,
        description: `Backend class: ${cls}`,
        properties: {
          codeType: 'backend_class',
          technology: 'Node.js',
          product: productId
        }
      };
      this.graph.addNode(node);
      if (!nodes.has('backend_classes')) {
        nodes.set('backend_classes', node);
      }
    }
    
    // Add frontend functions
    for (const func of code.frontendFunctions) {
      const node: OntologyNode = {
        id: `${productId}_code_fe_function_${this.nodeCounter++}`,
        name: func,
        type: 'code',
        level: 'frontend_functions',
        product: productId,
        description: `Frontend function: ${func}`,
        properties: {
          codeType: 'frontend_function',
          product: productId
        }
      };
      this.graph.addNode(node);
      if (!nodes.has('frontend_functions')) {
        nodes.set('frontend_functions', node);
      }
    }
    
    // Add backend functions
    for (const func of code.backendFunctions) {
      const node: OntologyNode = {
        id: `${productId}_code_be_function_${this.nodeCounter++}`,
        name: func,
        type: 'code',
        level: 'backend_functions',
        product: productId,
        description: `Backend function: ${func}`,
        properties: {
          codeType: 'backend_function',
          product: productId
        }
      };
      this.graph.addNode(node);
      if (!nodes.has('backend_functions')) {
        nodes.set('backend_functions', node);
      }
    }
    
    // Add properties
    for (const prop of code.properties) {
      const node: OntologyNode = {
        id: `${productId}_code_property_${this.nodeCounter++}`,
        name: prop,
        type: 'code',
        level: 'backend_properties',
        product: productId,
        description: `Property: ${prop}`,
        properties: {
          codeType: 'property',
          product: productId
        }
      };
      this.graph.addNode(node);
      if (!nodes.has('properties')) {
        nodes.set('properties', node);
      }
    }
    
    return nodes;
  }

  // ============ Connection Methods ============

  private connectFunctionalToDesign(
    functionalNodes: Map<string, OntologyNode>,
    designNodes: Map<string, OntologyNode>
  ): void {
    // Connect scenarios to pages
    const scenario = functionalNodes.get('scenarios');
    const page = designNodes.get('pages');
    
    if (scenario && page) {
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: scenario.id,
        target: page.id,
        type: 'realizes',
        strength: 0.9
      });
    }
  }

  private connectDesignToCode(
    designNodes: Map<string, OntologyNode>,
    codeNodes: Map<string, OntologyNode>
  ): void {
    // Connect organisms to frontend components
    const organism = designNodes.get('organisms');
    const component = codeNodes.get('frontend_components');
    
    if (organism && component) {
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: organism.id,
        target: component.id,
        type: 'implements',
        strength: 0.9
      });
    }
    
    // Connect templates to backend classes
    const template = designNodes.get('templates');
    const backendClass = codeNodes.get('backend_classes');
    
    if (template && backendClass) {
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: template.id,
        target: backendClass.id,
        type: 'implements',
        strength: 0.8
      });
    }
  }

  private connectArchitectureToCode(
    architectureNodes: Map<string, OntologyNode>,
    codeNodes: Map<string, OntologyNode>
  ): void {
    // Connect services to backend classes
    const service = architectureNodes.get('services');
    const backendClass = codeNodes.get('backend_classes');
    
    if (service && backendClass) {
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: service.id,
        target: backendClass.id,
        type: 'manages',
        strength: 0.9
      });
    }
    
    // Connect layers to frontend components
    const layer = architectureNodes.get('layers');
    const component = codeNodes.get('frontend_components');
    
    if (layer && component) {
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: layer.id,
        target: component.id,
        type: 'manages',
        strength: 0.8
      });
    }
  }

  private connectFunctionalToArchitecture(
    functionalNodes: Map<string, OntologyNode>,
    architectureNodes: Map<string, OntologyNode>
  ): void {
    // Connect outcomes to root architecture
    const outcome = functionalNodes.get('outcomes');
    const root = architectureNodes.get('root');
    
    if (outcome && root) {
      this.graph.addEdge({
        id: `edge_${this.edgeCounter++}`,
        source: outcome.id,
        target: root.id,
        type: 'triggers',
        strength: 0.7
      });
    }
  }

  // ============ Build Method ============

  build(): FourOntologyGraph {
    return this.graph;
  }

  // ============ Static Factory Methods ============

  static createAuthenticationExample(): FourOntologyGraph {
    const builder = new FourOntologyBuilder();
    
    // Phoenix Product
    builder.addProduct(
      {
        id: 'phoenix',
        name: 'Phoenix CRM',
        description: 'Legacy CRM system',
        technology: 'PHP'
      },
      {
        persona: 'Sales Representative',
        outcomes: ['Access System', 'Manage Customers'],
        scenarios: ['Login to System', 'View Dashboard']
      },
      {
        atoms: ['Input Field', 'Button', 'Label'],
        molecules: ['Login Form', 'Navigation Menu'],
        organisms: ['Authentication Panel', 'Dashboard Widget'],
        templates: ['Login Template', 'Dashboard Template'],
        pages: ['Login Page', 'Dashboard Page']
      },
      {
        root: 'Monolithic',
        modules: ['Authentication Module', 'Customer Module'],
        layers: ['Presentation Layer', 'Business Layer', 'Data Layer'],
        services: ['Auth Service', 'Customer Service']
      },
      {
        frontendComponents: ['LoginForm', 'DashboardView'],
        backendClasses: ['AuthController', 'UserModel'],
        frontendFunctions: ['validateLogin', 'submitForm'],
        backendFunctions: ['authenticate', 'hashPassword'],
        properties: ['username', 'password', 'sessionId']
      }
    );
    
    // Apollo Product
    builder.addProduct(
      {
        id: 'apollo',
        name: 'Apollo Launchpad',
        description: 'Modern SPA platform',
        technology: 'React'
      },
      {
        persona: 'Product Manager',
        outcomes: ['Secure Access', 'Collaborate'],
        scenarios: ['Multi-factor Authentication', 'Team Workspace']
      },
      {
        atoms: ['TextField', 'PrimaryButton', 'Icon'],
        molecules: ['AuthForm', 'TeamSelector'],
        organisms: ['TwoFactorAuth', 'WorkspacePanel'],
        templates: ['AuthTemplate', 'WorkspaceTemplate'],
        pages: ['AuthPage', 'WorkspacePage']
      },
      {
        root: 'Microservices',
        modules: ['Auth Module', 'Workspace Module'],
        layers: ['Frontend Layer', 'API Gateway', 'Service Layer'],
        services: ['JWT Service', 'Team Service']
      },
      {
        frontendComponents: ['AuthComponent', 'WorkspaceComponent'],
        backendClasses: ['JWTHandler', 'TeamManager'],
        frontendFunctions: ['handleOAuth', 'refreshToken'],
        backendFunctions: ['generateJWT', 'verifyToken'],
        properties: ['email', 'token', 'refreshToken']
      }
    );
    
    // Voyager Product
    builder.addProduct(
      {
        id: 'voyager',
        name: 'Voyager Analytics',
        description: 'Analytics dashboard',
        technology: 'Vue.js'
      },
      {
        persona: 'Data Analyst',
        outcomes: ['Single Sign-On', 'Analyze Data'],
        scenarios: ['SSO Login', 'View Analytics']
      },
      {
        atoms: ['SSOButton', 'Chart', 'Metric'],
        molecules: ['SSOProvider', 'ChartContainer'],
        organisms: ['SSOPanel', 'AnalyticsDashboard'],
        templates: ['SSOTemplate', 'AnalyticsTemplate'],
        pages: ['SSOPage', 'AnalyticsPage']
      },
      {
        root: 'Serverless',
        modules: ['SSO Module', 'Analytics Module'],
        layers: ['CDN Layer', 'Lambda Layer', 'Database Layer'],
        services: ['SAML Service', 'Query Service']
      },
      {
        frontendComponents: ['SSOComponent', 'ChartComponent'],
        backendClasses: ['SAMLHandler', 'QueryBuilder'],
        frontendFunctions: ['initSSO', 'loadCharts'],
        backendFunctions: ['validateSAML', 'executeQuery'],
        properties: ['samlToken', 'userId', 'analyticsId']
      }
    );
    
    return builder.build();
  }
}

export default FourOntologyBuilder;