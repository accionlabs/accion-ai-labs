/**
 * EDITABLE ONTOLOGY CONFIGURATION
 * 
 * This file contains the configuration for ontology nodes and edges that can be easily modified
 * without touching the main data file. Use this file to:
 * 
 * 1. Add/remove/modify nodes and edges
 * 2. Adjust relationship strengths  
 * 3. Add new relationship types
 * 4. Configure inconsistencies and properties
 * 
 * IMPORTANT: After making changes, restart the development server to see updates.
 */

import { OntologyNode, OntologyEdge } from '../types/ontology';

// =============================================================================
// CONFIGURATION HELPERS
// =============================================================================

export const EDGE_TYPES = [
  'implements', 'supports', 'requires', 'triggers', 
  'validates', 'realizes', 'renders', 'manages'
] as const;

export const PRODUCTS = ['phoenix', 'apollo', 'voyager'] as const;

export const ONTOLOGY_TYPES = ['functional', 'design', 'architecture', 'code'] as const;

// =============================================================================
// QUICK EDIT FUNCTIONS
// =============================================================================

/**
 * Add a new edge between two nodes
 * @param source - Source node ID
 * @param target - Target node ID  
 * @param type - Relationship type
 * @param strength - Connection strength (0-1)
 * @param inconsistent - Mark as inconsistent (optional)
 */
export const createEdge = (
  id: string,
  source: string,
  target: string,
  type: typeof EDGE_TYPES[number],
  strength: number = 1,
  inconsistent: boolean = false
): OntologyEdge => ({
  id,
  source,
  target,
  type,
  strength,
  ...(inconsistent && { inconsistent })
});

/**
 * Create a new ontology node
 * @param id - Unique node identifier
 * @param type - Ontology type
 * @param level - Node level within ontology
 * @param name - Display name
 * @param description - Node description
 * @param product - Product association
 * @param properties - Additional properties
 * @param inconsistencies - List of inconsistency descriptions (optional)
 */
export const createNode = (
  id: string,
  type: typeof ONTOLOGY_TYPES[number],
  level: string,
  name: string,
  description: string,
  product: typeof PRODUCTS[number],
  properties: Record<string, any> = {},
  inconsistencies: string[] = []
): OntologyNode => ({
  id,
  type,
  level,
  name,
  description,
  product,
  properties,
  ...(inconsistencies.length > 0 && { inconsistencies })
});

// =============================================================================
// CUSTOM EDGES - ADD YOUR MODIFICATIONS HERE
// =============================================================================

/**
 * Additional edges that you want to add or modify
 * These will be merged with the main ontology data
 */
export const customEdges: OntologyEdge[] = [
  // Example: Add missing connections
  // createEdge('voyager_persona_to_outcome2', 'voyager_persona_business_user', 'voyager_outcome_analyze_metrics', 'requires', 1),
  
  // Add your custom edges here...
];

/**
 * Additional nodes that you want to add
 * These will be merged with the main ontology data
 */
export const customNodes: OntologyNode[] = [
  // Example: Add new node
  // createNode(
  //   'new_node_id', 
  //   'functional', 
  //   'custom_level', 
  //   'New Node Name', 
  //   'Description of the new node',
  //   'phoenix',
  //   { custom_property: 'value' }
  // ),
  
  // Add your custom nodes here...
];

// =============================================================================
// EDGE MODIFICATIONS - MODIFY EXISTING EDGE PROPERTIES
// =============================================================================

/**
 * Modify properties of existing edges
 * Key = edge ID, Value = properties to override
 */
export const edgeModifications: Record<string, Partial<OntologyEdge>> = {
  // Example: Change strength of an existing edge
  // 'phoenix_persona_to_outcome': { strength: 0.8, inconsistent: true },
  
  // Add your edge modifications here...
};

/**
 * Modify properties of existing nodes  
 * Key = node ID, Value = properties to override
 */
export const nodeModifications: Record<string, Partial<OntologyNode>> = {
  // Example: Add inconsistency to an existing node
  // 'phoenix_persona_business_user': { 
  //   inconsistencies: ['Missing connection to secondary outcome'] 
  // },
  
  // Add your node modifications here...
};

// =============================================================================
// QUICK FIXES FOR COMMON ISSUES
// =============================================================================

/**
 * Common missing edges that users frequently need to add
 */
export const commonMissingEdges: OntologyEdge[] = [
  // The missing Voyager persona to second outcome connection
  createEdge(
    'voyager_persona_to_outcome2_fix', 
    'voyager_persona_business_user', 
    'voyager_outcome_analyze_metrics', 
    'requires', 
    1
  ),
  
  // Fix orphaned Voyager design nodes - Connect authentication response hierarchy
  createEdge(
    'voyager_sso_page_to_api_template',
    'voyager_page_sso_login',
    'voyager_template_api', 
    'implements',
    0.8
  ),
  createEdge(
    'voyager_api_template_to_auth_response',
    'voyager_template_api',
    'voyager_organism_auth_response',
    'implements', 
    1
  ),
  createEdge(
    'voyager_auth_response_to_token_object',
    'voyager_organism_auth_response',
    'voyager_molecule_token_object',
    'implements',
    1
  ),
  createEdge(
    'voyager_token_object_to_access_token',
    'voyager_molecule_token_object', 
    'voyager_atom_access_token',
    'implements',
    1
  ),
  // Fix for Phoenix orphaned database.config node
  createEdge(
    'phoenix_db_query_to_config',
    'phoenix_backend_function_db_query',
    'phoenix_data_config_db',
    'requires',
    1
  ),
  // Fix for Apollo orphaned nodes
  // 1. Connect React Frontend to UX Layer (architecture)
  createEdge(
    'apollo_ux_to_react_frontend',
    'apollo_layer_ux',
    'apollo_entity_react_frontend',
    'implements',
    1
  ),
  // 2. Connect JWT Token to JWT generation function (code)
  createEdge(
    'apollo_jwt_function_to_token',
    'apollo_backend_function_jwt_generation',
    'apollo_backend_property_jwt_token',
    'implements',
    1
  ),
  // 3. Connect jwt.secret to JWT generation function (code)
  createEdge(
    'apollo_jwt_function_to_secret',
    'apollo_backend_function_jwt_generation',
    'apollo_backend_config_jwt_secret',
    'requires',
    1
  ),
  // 4. Connect api.config.ts to frontend handle_submit function (code)
  createEdge(
    'apollo_frontend_function_to_api_config',
    'apollo_frontend_function_handle_submit',
    'apollo_frontend_config_api',
    'requires',
    1
  ),
  // Fix for Voyager orphaned code nodes
  // 1. Connect access_token to exchange_token function (code)
  createEdge(
    'voyager_exchange_token_to_access_token',
    'voyager_backend_function_exchange_token',
    'voyager_backend_property_access_token',
    'implements',
    1
  ),
  // 2. Connect module-federation.config.js to dashboard component (code)
  createEdge(
    'voyager_dashboard_to_module_federation',
    'voyager_frontend_component_dashboard',
    'voyager_frontend_config_module_federation',
    'requires',
    1
  ),
  // 3. Connect elasticsearch.config to analytics service (code)
  createEdge(
    'voyager_analytics_service_to_elasticsearch',
    'voyager_backend_class_analytics_service',
    'voyager_data_config_elasticsearch',
    'requires',
    1
  ),
  // 4. Connect sso.config to redirect_sso function (code)
  createEdge(
    'voyager_redirect_sso_to_config',
    'voyager_backend_function_redirect_sso',
    'voyager_backend_config_sso',
    'requires',
    1
  ),
];

// =============================================================================
// CONFIGURATION VALIDATION
// =============================================================================

/**
 * Validates that all edge references point to valid nodes
 */
export const validateConfiguration = (nodes: OntologyNode[], edges: OntologyEdge[]): string[] => {
  const nodeIds = new Set(nodes.map(n => n.id));
  const errors: string[] = [];
  
  edges.forEach(edge => {
    if (!nodeIds.has(edge.source)) {
      errors.push(`Edge ${edge.id}: Source node '${edge.source}' not found`);
    }
    if (!nodeIds.has(edge.target)) {
      errors.push(`Edge ${edge.id}: Target node '${edge.target}' not found`);
    }
  });
  
  return errors;
};