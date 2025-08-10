/**
 * Phoenix CRM Ontology Data
 * Complete four-ontology graph for single application analysis
 */

import { OntologyNode, OntologyEdge } from '../types/ontology';

// Functional Ontology Nodes for Phoenix
export const phoenixFunctionalNodes: OntologyNode[] = [
  // Personas
  {
    id: 'phoenix-func-customer',
    name: 'Customer',
    type: 'functional',
    product: 'phoenix',
    level: 'persona',
    description: 'End users of the CRM system',
    properties: {}
  },
  {
    id: 'phoenix-func-admin',
    name: 'Administrator',
    type: 'functional',
    product: 'phoenix',
    level: 'persona',
    description: 'System administrators',
    properties: {}
  },
  
  // Outcomes
  {
    id: 'phoenix-func-manage-customers',
    name: 'Manage Customers',
    type: 'functional',
    product: 'phoenix',
    level: 'outcome',
    description: 'Create, read, update customer records',
    properties: {}
  },
  {
    id: 'phoenix-func-authenticate',
    name: 'Authenticate',
    type: 'functional',
    product: 'phoenix',
    level: 'outcome',
    description: 'Login and manage sessions',
    properties: {}
  },
  {
    id: 'phoenix-func-view-analytics',
    name: 'View Analytics',
    type: 'functional',
    product: 'phoenix',
    level: 'outcome',
    description: 'View dashboard and reports',
    properties: {}
  },
  
  // Scenarios
  {
    id: 'phoenix-func-login-scenario',
    name: 'Login with Credentials',
    type: 'functional',
    product: 'phoenix',
    level: 'scenario',
    description: 'Basic username/password login',
    properties: {}
  },
  {
    id: 'phoenix-func-crud-customer',
    name: 'CRUD Customer Record',
    type: 'functional',
    product: 'phoenix',
    level: 'scenario',
    description: 'Create, read, update, delete customer',
    properties: {}
  },
  {
    id: 'phoenix-func-view-dashboard',
    name: 'View Dashboard',
    type: 'functional',
    product: 'phoenix',
    level: 'scenario',
    description: 'View analytics dashboard',
    properties: {}
  },
  
  // Steps
  {
    id: 'phoenix-func-enter-credentials',
    name: 'Enter Credentials',
    type: 'functional',
    product: 'phoenix',
    level: 'step',
    description: 'Input username and password',
    properties: {}
  },
  {
    id: 'phoenix-func-validate-user',
    name: 'Validate User',
    type: 'functional',
    product: 'phoenix',
    level: 'step',
    description: 'Check credentials against database',
    properties: {}
  },
  {
    id: 'phoenix-func-create-session',
    name: 'Create Session',
    type: 'functional',
    product: 'phoenix',
    level: 'step',
    description: 'Establish user session',
    properties: {}
  },
  {
    id: 'phoenix-func-search-customers',
    name: 'Search Customers',
    type: 'functional',
    product: 'phoenix',
    level: 'step',
    description: 'Search for customer records',
    properties: {}
  },
  {
    id: 'phoenix-func-edit-customer',
    name: 'Edit Customer',
    type: 'functional',
    product: 'phoenix',
    level: 'step',
    description: 'Modify customer information',
    properties: {}
  }
];

// Design Ontology Nodes for Phoenix
export const phoenixDesignNodes: OntologyNode[] = [
  // User Journeys
  {
    id: 'phoenix-design-customer-journey',
    name: 'Customer Management Journey',
    type: 'design',
    product: 'phoenix',
    level: 'journey',
    description: 'Complete customer management flow',
    properties: {}
  },
  {
    id: 'phoenix-design-auth-journey',
    name: 'Authentication Journey',
    type: 'design',
    product: 'phoenix',
    level: 'journey',
    description: 'Login and session management flow',
    properties: {}
  },
  
  // Flows
  {
    id: 'phoenix-design-login-flow',
    name: 'Login Flow',
    type: 'design',
    product: 'phoenix',
    level: 'flow',
    description: 'Authentication flow',
    properties: {}
  },
  {
    id: 'phoenix-design-customer-flow',
    name: 'Customer Management Flow',
    type: 'design',
    product: 'phoenix',
    level: 'flow',
    description: 'CRUD operations flow',
    properties: {}
  },
  {
    id: 'phoenix-design-dashboard-flow',
    name: 'Dashboard Flow',
    type: 'design',
    product: 'phoenix',
    level: 'flow',
    description: 'Analytics viewing flow',
    properties: {}
  },
  
  // Pages
  {
    id: 'phoenix-design-login-page',
    name: 'Login Page',
    type: 'design',
    product: 'phoenix',
    level: 'page',
    description: 'Authentication page',
    properties: {}
  },
  {
    id: 'phoenix-design-dashboard-page',
    name: 'Dashboard Page',
    type: 'design',
    product: 'phoenix',
    level: 'page',
    description: 'Main analytics dashboard',
    properties: {}
  },
  {
    id: 'phoenix-design-customer-list-page',
    name: 'Customer List Page',
    type: 'design',
    product: 'phoenix',
    level: 'page',
    description: 'Customer listing with search',
    properties: {}
  },
  {
    id: 'phoenix-design-customer-detail-page',
    name: 'Customer Detail Page',
    type: 'design',
    product: 'phoenix',
    level: 'page',
    description: 'Individual customer view/edit',
    properties: {}
  },
  
  // Templates
  {
    id: 'phoenix-design-form-template',
    name: 'Form Template',
    type: 'design',
    product: 'phoenix',
    level: 'template',
    description: 'Standard form layout',
    properties: {}
  },
  {
    id: 'phoenix-design-list-template',
    name: 'List Template',
    type: 'design',
    product: 'phoenix',
    level: 'template',
    description: 'Table/list layout',
    properties: {}
  },
  
  // Organisms
  {
    id: 'phoenix-design-login-form',
    name: 'Login Form',
    type: 'design',
    product: 'phoenix',
    level: 'organism',
    description: 'Authentication form component',
    properties: {}
  },
  {
    id: 'phoenix-design-customer-table',
    name: 'Customer Table',
    type: 'design',
    product: 'phoenix',
    level: 'organism',
    description: 'Customer data table',
    properties: {}
  },
  {
    id: 'phoenix-design-chart-widget',
    name: 'Chart Widget',
    type: 'design',
    product: 'phoenix',
    level: 'organism',
    description: 'Analytics chart component',
    properties: {}
  },
  
  // Molecules
  {
    id: 'phoenix-design-search-bar',
    name: 'Search Bar',
    type: 'design',
    product: 'phoenix',
    level: 'molecule',
    description: 'Search input with button',
    properties: {}
  },
  {
    id: 'phoenix-design-pagination',
    name: 'Pagination',
    type: 'design',
    product: 'phoenix',
    level: 'molecule',
    description: 'Page navigation component',
    properties: {}
  }
];

// Architecture Ontology Nodes for Phoenix
export const phoenixArchitectureNodes: OntologyNode[] = [
  // Root
  {
    id: 'phoenix-arch-root',
    name: 'Phoenix CRM System',
    type: 'architecture',
    product: 'phoenix',
    level: 'root',
    description: 'Complete CRM application',
    properties: {}
  },
  
  // Modules
  {
    id: 'phoenix-arch-auth-module',
    name: 'Authentication Module',
    type: 'architecture',
    product: 'phoenix',
    level: 'modules',
    description: 'User authentication and session management',
    properties: {}
  },
  {
    id: 'phoenix-arch-customer-module',
    name: 'Customer Module',
    type: 'architecture',
    product: 'phoenix',
    level: 'modules',
    description: 'Customer data management',
    properties: {}
  },
  {
    id: 'phoenix-arch-analytics-module',
    name: 'Analytics Module',
    type: 'architecture',
    product: 'phoenix',
    level: 'modules',
    description: 'Dashboard and reporting',
    properties: {}
  },
  
  // Layers
  {
    id: 'phoenix-arch-presentation',
    name: 'Presentation Layer',
    type: 'architecture',
    product: 'phoenix',
    level: 'layers',
    description: 'PHP views and templates',
    properties: {}
  },
  {
    id: 'phoenix-arch-business',
    name: 'Business Logic Layer',
    type: 'architecture',
    product: 'phoenix',
    level: 'layers',
    description: 'Controllers and services',
    properties: {}
  },
  {
    id: 'phoenix-arch-data',
    name: 'Data Access Layer',
    type: 'architecture',
    product: 'phoenix',
    level: 'layers',
    description: 'Models and database access',
    properties: {}
  },
  
  // Services
  {
    id: 'phoenix-arch-auth-service',
    name: 'Authentication Service',
    type: 'architecture',
    product: 'phoenix',
    level: 'services',
    description: 'Login and session handling',
    properties: {}
  },
  {
    id: 'phoenix-arch-customer-service',
    name: 'Customer Service',
    type: 'architecture',
    product: 'phoenix',
    level: 'services',
    description: 'Customer CRUD operations',
    properties: {}
  },
  {
    id: 'phoenix-arch-analytics-service',
    name: 'Analytics Service',
    type: 'architecture',
    product: 'phoenix',
    level: 'services',
    description: 'Report generation and metrics',
    properties: {}
  },
  {
    id: 'phoenix-arch-database',
    name: 'MySQL Database',
    type: 'architecture',
    product: 'phoenix',
    level: 'services',
    description: 'Shared database instance',
    properties: {}
  }
];

// Code Ontology Nodes (already in technicalDebtData.ts, importing for completeness)
// These are the actual implementation nodes

// Edges for Phoenix
export const phoenixFunctionalEdges: OntologyEdge[] = [
  // Persona to Outcomes
  { id: 'f-edge-1', source: 'phoenix-func-customer', target: 'phoenix-func-manage-customers', type: 'triggers', strength: 0.9 },
  { id: 'f-edge-2', source: 'phoenix-func-customer', target: 'phoenix-func-authenticate', type: 'triggers', strength: 0.8 },
  { id: 'f-edge-3', source: 'phoenix-func-admin', target: 'phoenix-func-view-analytics', type: 'triggers', strength: 0.9 },
  { id: 'f-edge-4', source: 'phoenix-func-admin', target: 'phoenix-func-authenticate', type: 'triggers', strength: 0.8 },
  
  // Outcomes to Scenarios
  { id: 'f-edge-5', source: 'phoenix-func-authenticate', target: 'phoenix-func-login-scenario', type: 'implements', strength: 1.0 },
  { id: 'f-edge-6', source: 'phoenix-func-manage-customers', target: 'phoenix-func-crud-customer', type: 'implements', strength: 1.0 },
  { id: 'f-edge-7', source: 'phoenix-func-view-analytics', target: 'phoenix-func-view-dashboard', type: 'implements', strength: 1.0 },
  
  // Scenarios to Steps
  { id: 'f-edge-8', source: 'phoenix-func-login-scenario', target: 'phoenix-func-enter-credentials', type: 'requires', strength: 1.0 },
  { id: 'f-edge-9', source: 'phoenix-func-login-scenario', target: 'phoenix-func-validate-user', type: 'requires', strength: 1.0 },
  { id: 'f-edge-10', source: 'phoenix-func-login-scenario', target: 'phoenix-func-create-session', type: 'requires', strength: 1.0 },
  { id: 'f-edge-11', source: 'phoenix-func-crud-customer', target: 'phoenix-func-search-customers', type: 'requires', strength: 0.8 },
  { id: 'f-edge-12', source: 'phoenix-func-crud-customer', target: 'phoenix-func-edit-customer', type: 'requires', strength: 0.9 }
];

export const phoenixDesignEdges: OntologyEdge[] = [
  // Journeys to Flows
  { id: 'd-edge-1', source: 'phoenix-design-auth-journey', target: 'phoenix-design-login-flow', type: 'implements', strength: 1.0 },
  { id: 'd-edge-2', source: 'phoenix-design-customer-journey', target: 'phoenix-design-customer-flow', type: 'implements', strength: 1.0 },
  { id: 'd-edge-3', source: 'phoenix-design-customer-journey', target: 'phoenix-design-dashboard-flow', type: 'implements', strength: 0.8 },
  
  // Flows to Pages
  { id: 'd-edge-4', source: 'phoenix-design-login-flow', target: 'phoenix-design-login-page', type: 'renders', strength: 1.0 },
  { id: 'd-edge-5', source: 'phoenix-design-customer-flow', target: 'phoenix-design-customer-list-page', type: 'renders', strength: 1.0 },
  { id: 'd-edge-6', source: 'phoenix-design-customer-flow', target: 'phoenix-design-customer-detail-page', type: 'renders', strength: 1.0 },
  { id: 'd-edge-7', source: 'phoenix-design-dashboard-flow', target: 'phoenix-design-dashboard-page', type: 'renders', strength: 1.0 },
  
  // Pages to Templates
  { id: 'd-edge-8', source: 'phoenix-design-login-page', target: 'phoenix-design-form-template', type: 'implements', strength: 0.9 },
  { id: 'd-edge-9', source: 'phoenix-design-customer-list-page', target: 'phoenix-design-list-template', type: 'implements', strength: 0.9 },
  { id: 'd-edge-10', source: 'phoenix-design-customer-detail-page', target: 'phoenix-design-form-template', type: 'implements', strength: 0.9 },
  
  // Templates to Organisms
  { id: 'd-edge-11', source: 'phoenix-design-form-template', target: 'phoenix-design-login-form', type: 'manages', strength: 1.0 },
  { id: 'd-edge-12', source: 'phoenix-design-list-template', target: 'phoenix-design-customer-table', type: 'manages', strength: 1.0 },
  { id: 'd-edge-13', source: 'phoenix-design-dashboard-page', target: 'phoenix-design-chart-widget', type: 'manages', strength: 0.8 },
  
  // Organisms to Molecules
  { id: 'd-edge-14', source: 'phoenix-design-customer-table', target: 'phoenix-design-search-bar', type: 'supports', strength: 0.7 },
  { id: 'd-edge-15', source: 'phoenix-design-customer-table', target: 'phoenix-design-pagination', type: 'supports', strength: 0.7 }
];

export const phoenixArchitectureEdges: OntologyEdge[] = [
  // Root to Modules
  { id: 'a-edge-1', source: 'phoenix-arch-root', target: 'phoenix-arch-auth-module', type: 'implements', strength: 1.0 },
  { id: 'a-edge-2', source: 'phoenix-arch-root', target: 'phoenix-arch-customer-module', type: 'implements', strength: 1.0 },
  { id: 'a-edge-3', source: 'phoenix-arch-root', target: 'phoenix-arch-analytics-module', type: 'implements', strength: 1.0 },
  
  // Modules to Layers
  { id: 'a-edge-4', source: 'phoenix-arch-auth-module', target: 'phoenix-arch-presentation', type: 'manages', strength: 0.8 },
  { id: 'a-edge-5', source: 'phoenix-arch-auth-module', target: 'phoenix-arch-business', type: 'manages', strength: 0.9 },
  { id: 'a-edge-6', source: 'phoenix-arch-customer-module', target: 'phoenix-arch-presentation', type: 'manages', strength: 0.8 },
  { id: 'a-edge-7', source: 'phoenix-arch-customer-module', target: 'phoenix-arch-business', type: 'manages', strength: 0.9 },
  { id: 'a-edge-8', source: 'phoenix-arch-analytics-module', target: 'phoenix-arch-business', type: 'manages', strength: 0.9 },
  
  // Layers to Services
  { id: 'a-edge-9', source: 'phoenix-arch-business', target: 'phoenix-arch-auth-service', type: 'implements', strength: 1.0 },
  { id: 'a-edge-10', source: 'phoenix-arch-business', target: 'phoenix-arch-customer-service', type: 'implements', strength: 1.0 },
  { id: 'a-edge-11', source: 'phoenix-arch-business', target: 'phoenix-arch-analytics-service', type: 'implements', strength: 1.0 },
  { id: 'a-edge-12', source: 'phoenix-arch-data', target: 'phoenix-arch-database', type: 'manages', strength: 1.0 },
  
  // Services to Database (VIOLATION - all services share same DB)
  { id: 'a-edge-13', source: 'phoenix-arch-auth-service', target: 'phoenix-arch-database', type: 'requires', strength: 0.9, inconsistent: true },
  { id: 'a-edge-14', source: 'phoenix-arch-customer-service', target: 'phoenix-arch-database', type: 'requires', strength: 0.9, inconsistent: true },
  { id: 'a-edge-15', source: 'phoenix-arch-analytics-service', target: 'phoenix-arch-database', type: 'requires', strength: 0.9, inconsistent: true }
];

// Cross-ontology edges (how different views connect)
export const phoenixCrossOntologyEdges: OntologyEdge[] = [
  // Functional to Design
  { id: 'x-edge-1', source: 'phoenix-func-login-scenario', target: 'phoenix-design-login-flow', type: 'realizes', strength: 0.8 },
  { id: 'x-edge-2', source: 'phoenix-func-crud-customer', target: 'phoenix-design-customer-flow', type: 'realizes', strength: 0.8 },
  { id: 'x-edge-3', source: 'phoenix-func-view-dashboard', target: 'phoenix-design-dashboard-flow', type: 'realizes', strength: 0.8 },
  
  // Functional to Architecture
  { id: 'x-edge-4', source: 'phoenix-func-authenticate', target: 'phoenix-arch-auth-service', type: 'implements', strength: 0.9 },
  { id: 'x-edge-5', source: 'phoenix-func-manage-customers', target: 'phoenix-arch-customer-service', type: 'implements', strength: 0.9 },
  { id: 'x-edge-6', source: 'phoenix-func-view-analytics', target: 'phoenix-arch-analytics-service', type: 'implements', strength: 0.9 },
  
  // Design to Architecture
  { id: 'x-edge-7', source: 'phoenix-design-login-page', target: 'phoenix-arch-presentation', type: 'supports', strength: 0.7 },
  { id: 'x-edge-8', source: 'phoenix-design-customer-list-page', target: 'phoenix-arch-presentation', type: 'supports', strength: 0.7 },
  { id: 'x-edge-9', source: 'phoenix-design-dashboard-page', target: 'phoenix-arch-presentation', type: 'supports', strength: 0.7 }
];

// Combine all nodes and edges
export const phoenixAllNodes = [
  ...phoenixFunctionalNodes,
  ...phoenixDesignNodes,
  ...phoenixArchitectureNodes
];

export const phoenixAllEdges = [
  ...phoenixFunctionalEdges,
  ...phoenixDesignEdges,
  ...phoenixArchitectureEdges,
  ...phoenixCrossOntologyEdges
];