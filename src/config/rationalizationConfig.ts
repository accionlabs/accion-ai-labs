/**
 * RATIONALIZATION CONFIGURATION
 * 
 * This file contains the configuration for the UX Rationalization Roadmap.
 * Edit the mappings here to control which existing nodes map to which unified nodes.
 * 
 * To find available node IDs:
 * 1. Check the console logs when running the app
 * 2. Look in src/data/ontologyData.ts
 * 3. Use the Graph Explorer to find node IDs
 */

export interface UnifiedNodeConfig {
  id: string;
  name: string;
  level: string;
  type: 'design' | 'code';
  description: string;
  sourceMappings: {
    phoenix: string[];
    apollo: string[];
    voyager: string[];
  };
}

// =============================================================================
// UNIFIED DESIGN NODES CONFIGURATION
// =============================================================================
export const unifiedDesignNodesConfig: UnifiedNodeConfig[] = [
  // ATOMS - Basic UI elements
  {
    id: 'unified_atom_button',
    name: 'Unified Button',
    level: 'atoms',
    type: 'design',
    description: 'Standardized button component with consistent styling',
    sourceMappings: {
      phoenix: ['phoenix_atom_login_button', 'phoenix_atom_primary_button'],
      apollo: ['apollo_atom_primary_button', 'apollo_atom_secondary_button'],
      voyager: ['voyager_atom_action_button', 'voyager_atom_submit_button']
    }
  },
  {
    id: 'unified_atom_input',
    name: 'Unified Input Field',
    level: 'atoms',
    type: 'design',
    description: 'Standardized input field with validation',
    sourceMappings: {
      phoenix: ['phoenix_atom_text_input', 'phoenix_atom_password_input'],
      apollo: ['apollo_atom_input_field', 'apollo_atom_password_field'],
      voyager: ['voyager_atom_form_input', 'voyager_atom_secure_input']
    }
  },
  
  // MOLECULES - Composite components
  {
    id: 'unified_molecule_auth_form',
    name: 'Unified Auth Form',
    level: 'molecules',
    type: 'design',
    description: 'Standardized authentication form component',
    sourceMappings: {
      phoenix: ['phoenix_molecule_username_group', 'phoenix_molecule_password_group'],
      apollo: ['apollo_molecule_login_fields', 'apollo_molecule_2fa_group'],
      voyager: ['voyager_molecule_sso_form', 'voyager_molecule_credentials']
    }
  },
  
  // ORGANISMS - Complex UI sections
  {
    id: 'unified_organism_login_panel',
    name: 'Unified Login Panel',
    level: 'organisms',
    type: 'design',
    description: 'Complete login panel with form and actions',
    sourceMappings: {
      phoenix: ['phoenix_organism_login_form', 'phoenix_organism_auth_container'],
      apollo: ['apollo_organism_auth_panel', 'apollo_organism_2fa_container'],
      voyager: ['voyager_organism_sso_panel', 'voyager_organism_login_widget']
    }
  },
  
  // TEMPLATES - Page layouts
  {
    id: 'unified_template_auth_layout',
    name: 'Unified Auth Layout',
    level: 'templates',
    type: 'design',
    description: 'Standard authentication page layout',
    sourceMappings: {
      phoenix: ['phoenix_template_form', 'phoenix_template_centered'],
      apollo: ['apollo_template_split_screen', 'apollo_template_auth'],
      voyager: ['voyager_template_fullscreen', 'voyager_template_sso']
    }
  },
  
  // PAGES - Complete pages
  {
    id: 'unified_page_login',
    name: 'Unified Login Page',
    level: 'pages',
    type: 'design',
    description: 'Complete unified login experience',
    sourceMappings: {
      phoenix: ['phoenix_page_login', 'phoenix_page_signin'],
      apollo: ['apollo_page_auth', 'apollo_page_2fa'],
      voyager: ['voyager_page_sso', 'voyager_page_login']
    }
  }
];

// =============================================================================
// UNIFIED CODE NODES CONFIGURATION
// =============================================================================
export const unifiedCodeNodesConfig: UnifiedNodeConfig[] = [
  // COMPONENT LEVEL - UI Components and Classes
  {
    id: 'unified_code_auth_component',
    name: 'AuthenticationComponent',
    level: 'components',
    type: 'code',
    description: 'Unified React component for authentication',
    sourceMappings: {
      // Map to actual CODE nodes (type: 'code') from the system
      phoenix: [
        'phoenix_frontend_component_form',
        'phoenix_frontend_module_login',
        'phoenix_backend_class_login',
        'phoenix_backend_class_auth'
      ],
      apollo: [
        'apollo_frontend_component_login_form',
        'apollo_frontend_component_2fa_form',
        'apollo_frontend_module_auth',
        'apollo_backend_class_auth_service'
      ],
      voyager: [
        'voyager_frontend_component_dashboard',
        'voyager_frontend_component_chart',
        'voyager_frontend_module_auth',
        'voyager_backend_class_callback_handler'
      ]
    }
  },
  
  // SERVICE/HOOK LEVEL - Business Logic
  {
    id: 'unified_code_auth_service',
    name: 'useAuthentication',
    level: 'services',
    type: 'code',
    description: 'Unified authentication service hook',
    sourceMappings: {
      phoenix: [
        'phoenix_frontend_function_validation',
        'phoenix_backend_function_validate',
        'phoenix_backend_function_post_handler',
        'phoenix_backend_function_db_query'
      ],
      apollo: [
        'apollo_frontend_function_handle_submit',
        'apollo_frontend_hook_use_auth',
        'apollo_backend_function_validate',
        'apollo_backend_function_generate_2fa'
      ],
      voyager: [
        'voyager_frontend_composable_auth',
        'voyager_frontend_composable_metrics',
        'voyager_backend_function_exchange_token',
        'voyager_backend_function_handle_callback'
      ]
    }
  },
  
  // API LEVEL - Backend Integration
  {
    id: 'unified_code_auth_api',
    name: 'AuthenticationAPI',
    level: 'api',
    type: 'code',
    description: 'Unified authentication API layer',
    sourceMappings: {
      phoenix: [
        'phoenix_backend_module_auth',
        'phoenix_backend_module_database',
        'phoenix_data_module_users'
      ],
      apollo: [
        'apollo_backend_module_auth',
        'apollo_backend_module_2fa',
        'apollo_backend_module_sessions'
      ],
      voyager: [
        'voyager_backend_module_auth',
        'voyager_backend_module_analytics',
        'voyager_data_module_metrics'
      ]
    }
  },
  
  // STATE MANAGEMENT - Data Storage
  {
    id: 'unified_code_auth_store',
    name: 'AuthStore',
    level: 'state',
    type: 'code',
    description: 'Unified authentication state management',
    sourceMappings: {
      phoenix: [
        'phoenix_frontend_state_username',
        'phoenix_frontend_state_password',
        'phoenix_backend_property_user',
        'phoenix_backend_property_session_id'
      ],
      apollo: [
        'apollo_frontend_state_email',
        'apollo_frontend_state_password',
        'apollo_frontend_state_otp',
        'apollo_backend_property_jwt_token'
      ],
      voyager: [
        'voyager_frontend_state_user',
        'voyager_frontend_state_metrics',
        'voyager_backend_property_access_token',
        'voyager_backend_config_sso'
      ]
    }
  }
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all unique source node IDs from unified design nodes
 */
export function getSourceDesignNodeIds(): { phoenix: string[], apollo: string[], voyager: string[] } {
  const result = { phoenix: [] as string[], apollo: [] as string[], voyager: [] as string[] };
  
  unifiedDesignNodesConfig.forEach(node => {
    result.phoenix.push(...node.sourceMappings.phoenix);
    result.apollo.push(...node.sourceMappings.apollo);
    result.voyager.push(...node.sourceMappings.voyager);
  });
  
  return {
    phoenix: Array.from(new Set(result.phoenix)),
    apollo: Array.from(new Set(result.apollo)),
    voyager: Array.from(new Set(result.voyager))
  };
}

/**
 * Get all unique source node IDs from unified code nodes
 */
export function getSourceCodeNodeIds(): { phoenix: string[], apollo: string[], voyager: string[] } {
  const result = { phoenix: [] as string[], apollo: [] as string[], voyager: [] as string[] };
  
  unifiedCodeNodesConfig.forEach(node => {
    result.phoenix.push(...node.sourceMappings.phoenix);
    result.apollo.push(...node.sourceMappings.apollo);
    result.voyager.push(...node.sourceMappings.voyager);
  });
  
  return {
    phoenix: Array.from(new Set(result.phoenix)),
    apollo: Array.from(new Set(result.apollo)),
    voyager: Array.from(new Set(result.voyager))
  };
}