// Comprehensive Ontology Data for Phoenix, Apollo, and Voyager Products
// Generated from Instructions for Demo.md analysis

import { OntologyNode, OntologyEdge } from '../types/ontology';
import { 
  customNodes, 
  customEdges, 
  nodeModifications, 
  edgeModifications,
  commonMissingEdges,
  validateConfiguration
} from '../config/editableOntologyConfig';

// =============================================================================
// PHOENIX CRM ONTOLOGY NODES (Legacy PHP/jQuery CRM system)
// =============================================================================

export const phoenixNodes: OntologyNode[] = [
  // Root Nodes for each Ontology
  {
    id: 'phoenix_functional_root',
    type: 'functional',
    level: 'root',
    name: 'Phoenix Functional Layer',
    description: 'User goals, scenarios, and actions in Phoenix CRM',
    properties: { layer: 'functional', product_focus: 'customer_management' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_design_root',
    type: 'design',
    level: 'root',
    name: 'Phoenix Design Layer',
    description: 'UI patterns, layouts, and visual elements in Phoenix CRM',
    properties: { layer: 'design', framework: 'server_rendered' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_architecture_root',
    type: 'architecture',
    level: 'root',
    name: 'Phoenix Architecture Layer',
    description: 'System structure and service organization in Phoenix CRM',
    properties: { layer: 'architecture', pattern: 'monolith' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_code_root',
    type: 'code',
    level: 'root',
    name: 'Phoenix Code Layer',
    description: 'Implementation details and code structure in Phoenix CRM',
    properties: { layer: 'code', technology: 'php_mysql' },
    product: 'phoenix'
  },

  // Functional Ontology
  {
    id: 'phoenix_persona_business_user',
    type: 'functional',
    level: 'persona',
    name: 'Business User',
    description: 'Employee who needs access to CRM system for daily work',
    properties: { access_level: 'employee', role: 'sales_marketing' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_outcome_authenticate',
    type: 'functional',
    level: 'outcomes',
    name: 'Authenticate to System',
    description: 'Gain authenticated access to business application',
    properties: { session_duration: '8 hours', multi_factor: false },
    product: 'phoenix'
  },
  {
    id: 'phoenix_scenario_basic_login',
    type: 'functional',
    level: 'scenarios',
    name: 'Basic Login',
    description: 'Username/password authentication',
    properties: { complexity: 'low', security_level: 'basic' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_step_authentication',
    type: 'functional',
    level: 'steps',
    name: 'Authentication',
    description: 'Verify user credentials',
    properties: { method: 'form_submission' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_action_enter_username',
    type: 'functional',
    level: 'actions',
    name: 'Enter Username',
    description: 'User inputs username into form field',
    properties: { input_type: 'text', validation: 'required' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_action_enter_password',
    type: 'functional',
    level: 'actions',
    name: 'Enter Password',
    description: 'User inputs password into form field',
    properties: { input_type: 'password', validation: 'required' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_action_submit_form',
    type: 'functional',
    level: 'actions',
    name: 'Submit Form',
    description: 'User submits login form',
    properties: { method: 'POST', endpoint: '/login.php' },
    product: 'phoenix'
  },

  // Design Ontology
  {
    id: 'phoenix_journey_system_mgmt',
    type: 'design',
    level: 'user_journeys',
    name: 'System Management Journey',
    description: 'Complete administrative workflow',
    properties: { sessions: 'single', duration: 'extended' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_flow_login',
    type: 'design',
    level: 'flows',
    name: 'Login Flow',
    description: 'Single-page login process',
    properties: { pages: 1, redirects: 1 },
    product: 'phoenix'
  },
  {
    id: 'phoenix_page_login',
    type: 'design',
    level: 'pages',
    name: 'Login Page',
    description: 'Server-rendered login page',
    properties: { rendering: 'server', framework: 'php', file: 'login.php' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_template_form',
    type: 'design',
    level: 'templates',
    name: 'Form Template',
    description: 'Basic HTML form layout',
    properties: { responsive: false, accessibility: 'basic' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_organism_login_form',
    type: 'design',
    level: 'organisms',
    name: 'Login Form',
    description: 'Complete login form component',
    properties: { fields: 2, validation: 'client_basic' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_molecule_username_group',
    type: 'design',
    level: 'molecules',
    name: 'Username Field Group',
    description: 'Username input with label',
    properties: { label: 'Username', required: true },
    product: 'phoenix'
  },
  {
    id: 'phoenix_molecule_password_group',
    type: 'design',
    level: 'molecules',
    name: 'Password Field Group',
    description: 'Password input with label',
    properties: { label: 'Password', required: true },
    product: 'phoenix'
  },
  {
    id: 'phoenix_atom_username_input',
    type: 'design',
    level: 'atoms',
    name: 'Username Input',
    description: 'Text input field for username',
    properties: { type: 'text', maxlength: 50 },
    product: 'phoenix'
  },
  {
    id: 'phoenix_atom_password_input',
    type: 'design',
    level: 'atoms',
    name: 'Password Input',
    description: 'Password input field',
    properties: { type: 'password', show_toggle: false },
    product: 'phoenix'
  },
  {
    id: 'phoenix_atom_login_button',
    type: 'design',
    level: 'atoms',
    name: 'Login Button',
    description: 'Form submit button',
    properties: { type: 'submit', style: 'basic' },
    product: 'phoenix'
  },

  // Architecture Ontology
  {
    id: 'phoenix_layer_ux',
    type: 'architecture',
    level: 'layers',
    name: 'User Experience Layer',
    description: 'Frontend presentation layer',
    properties: { technology: 'HTML/jQuery', architecture: 'monolith' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_layer_services',
    type: 'architecture',
    level: 'layers',
    name: 'Services Layer',
    description: 'Business logic and data access',
    properties: { technology: 'PHP', pattern: 'procedural' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_service_auth',
    type: 'architecture',
    level: 'services',
    name: 'Authentication Service',
    description: 'User credential validation',
    properties: { type: 'platform_service', pattern: 'embedded' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_entity_php_backend',
    type: 'architecture',
    level: 'entities_components',
    name: 'PHP Backend Script',
    description: 'Server-side authentication logic',
    properties: { files: ['login.php', 'authenticate.php'], database: 'mysql' },
    product: 'phoenix'
  },

  // Code Ontology - Frontend
  {
    id: 'phoenix_frontend_app',
    type: 'code',
    level: 'applications',
    name: 'Phoenix CRM Web App',
    description: 'Legacy web application',
    properties: { technology: 'HTML/jQuery', deployment: 'apache' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_module_login',
    type: 'code',
    level: 'modules',
    name: 'LoginModule',
    description: 'Login-related frontend code',
    properties: { files: ['login.php'], dependencies: ['jquery'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_component_form',
    type: 'code',
    level: 'components',
    name: 'login.php (HTML form)',
    description: 'Server-rendered login form',
    properties: { type: 'server_rendered', framework: 'php', styling: 'inline' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_function_validation',
    type: 'code',
    level: 'functions_hooks',
    name: 'jQuery validation',
    description: 'Client-side form validation',
    properties: { library: 'jquery', validation_rules: ['required'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_state_username',
    type: 'code',
    level: 'properties_state',
    name: 'username',
    description: 'Username form field value',
    properties: { type: 'string', scope: 'form' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_state_password',
    type: 'code',
    level: 'properties_state',
    name: 'password',
    description: 'Password form field value',
    properties: { type: 'string', scope: 'form', sensitive: true },
    product: 'phoenix'
  },

  // Code Ontology - Frontend HTML Elements (granular)
  {
    id: 'phoenix_frontend_element_username_input',
    type: 'code',
    level: 'properties_state',
    name: 'Username HTML Input',
    description: 'HTML input element for username field',
    properties: { tag: 'input', type: 'text', name: 'username', required: true },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_element_password_input',
    type: 'code',
    level: 'properties_state',
    name: 'Password HTML Input',
    description: 'HTML input element for password field',
    properties: { tag: 'input', type: 'password', name: 'password', required: true },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_element_login_button',
    type: 'code',
    level: 'properties_state',
    name: 'Login Submit Button',
    description: 'HTML submit button for login form',
    properties: { tag: 'input', type: 'submit', value: 'Login', class: 'btn' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_frontend_element_form_labels',
    type: 'code',
    level: 'properties_state',
    name: 'Form Labels',
    description: 'HTML label elements for form fields',
    properties: { tag: 'label', for: ['username', 'password'] },
    product: 'phoenix'
  },

  // Code Ontology - Backend
  {
    id: 'phoenix_backend_app',
    type: 'code',
    level: 'applications',
    name: 'Phoenix CRM PHP App',
    description: 'Backend PHP application',
    properties: { technology: 'PHP', version: '7.4', server: 'apache' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_backend_module_auth',
    type: 'code',
    level: 'modules',
    name: 'AuthModule',
    description: 'Authentication module',
    properties: { files: ['login.php', 'authenticate.php'], dependencies: ['mysql'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_backend_class_login',
    type: 'code',
    level: 'classes_services',
    name: 'login.php',
    description: 'Login page controller',
    properties: { type: 'procedural', functions: ['render_form', 'handle_post'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_backend_class_auth',
    type: 'code',
    level: 'classes_services',
    name: 'authenticate.php',
    description: 'Authentication processor',
    properties: { type: 'procedural', functions: ['validate_credentials', 'create_session'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_backend_function_post_handler',
    type: 'code',
    level: 'functions_methods',
    name: 'POST request handling',
    description: 'Process login form submission',
    properties: { method: 'POST', validation: 'server_side' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_backend_function_password_hash',
    type: 'code',
    level: 'functions_methods',
    name: 'password hashing',
    description: 'Hash password for comparison',
    properties: { algorithm: 'md5', security: 'weak' },
    product: 'phoenix',
    inconsistencies: ['weak_hashing_algorithm']
  },
  {
    id: 'phoenix_backend_function_db_query',
    type: 'code',
    level: 'functions_methods',
    name: 'database query',
    description: 'Query user credentials',
    properties: { query: 'SELECT * FROM users WHERE username = ? AND password_hash = ?' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_backend_function_session_create',
    type: 'code',
    level: 'functions_methods',
    name: 'session creation',
    description: 'Create authenticated session',
    properties: { session_id: 'PHPSESSID', storage: 'server_memory' },
    product: 'phoenix'
  },

  // Code Ontology - Data
  {
    id: 'phoenix_data_app',
    type: 'code',
    level: 'applications',
    name: 'MySQL Database',
    description: 'Primary data storage',
    properties: { technology: 'MySQL', version: '5.7' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_data_module_user',
    type: 'code',
    level: 'modules',
    name: 'UserModule',
    description: 'User data management',
    properties: { tables: ['users', 'sessions'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_data_class_users_table',
    type: 'code',
    level: 'classes_processors',
    name: 'users table',
    description: 'User credentials storage',
    properties: { columns: ['user_id', 'username', 'password_hash', 'created_at'] },
    product: 'phoenix'
  },
  {
    id: 'phoenix_data_function_sql_query',
    type: 'code',
    level: 'functions_queries',
    name: 'SELECT * FROM users WHERE ...',
    description: 'User lookup query',
    properties: { type: 'SELECT', indexed: true },
    product: 'phoenix'
  },
  {
    id: 'phoenix_data_config_db',
    type: 'code',
    level: 'configurations',
    name: 'database.config',
    description: 'Database connection configuration',
    properties: { host: 'localhost', port: 3306, charset: 'utf8' },
    product: 'phoenix'
  }
];

// =============================================================================
// APOLLO LAUNCHPAD ONTOLOGY NODES (Modern React SPA launchpad)
// =============================================================================

export const apolloNodes: OntologyNode[] = [
  // Root Nodes for each Ontology
  {
    id: 'apollo_functional_root',
    type: 'functional',
    level: 'root',
    name: 'Apollo Functional Layer',
    description: 'User goals, scenarios, and actions in Apollo Launchpad',
    properties: { layer: 'functional', product_focus: 'e_commerce_operations' },
    product: 'apollo'
  },
  {
    id: 'apollo_design_root',
    type: 'design',
    level: 'root',
    name: 'Apollo Design Layer',
    description: 'UI patterns, layouts, and visual elements in Apollo Launchpad',
    properties: { layer: 'design', framework: 'react_spa' },
    product: 'apollo'
  },
  {
    id: 'apollo_architecture_root',
    type: 'architecture',
    level: 'root',
    name: 'Apollo Architecture Layer',
    description: 'System structure and service organization in Apollo Launchpad',
    properties: { layer: 'architecture', pattern: 'microservices' },
    product: 'apollo'
  },
  {
    id: 'apollo_code_root',
    type: 'code',
    level: 'root',
    name: 'Apollo Code Layer',
    description: 'Implementation details and code structure in Apollo Launchpad',
    properties: { layer: 'code', technology: 'node_react' },
    product: 'apollo'
  },

  // Functional Ontology
  {
    id: 'apollo_persona_business_user',
    type: 'functional',
    level: 'persona',
    name: 'Business User',
    description: 'Employee who needs access to e-commerce platform for business operations',
    properties: { access_level: 'employee', role: 'operations' },
    product: 'apollo'
  },
  {
    id: 'apollo_outcome_authenticate',
    type: 'functional',
    level: 'outcomes',
    name: 'Authenticate to System',
    description: 'Gain authenticated access to business application',
    properties: { session_duration: '2 hours', multi_factor: true },
    product: 'apollo'
  },
  {
    id: 'apollo_scenario_2fa_login',
    type: 'functional',
    level: 'scenarios',
    name: '2FA Login',
    description: 'Email/password + two-factor authentication',
    properties: { complexity: 'medium', security_level: 'high' },
    product: 'apollo'
  },
  {
    id: 'apollo_step_authentication',
    type: 'functional',
    level: 'steps',
    name: 'Authentication',
    description: 'Verify user credentials',
    properties: { method: 'api_call' },
    product: 'apollo'
  },
  {
    id: 'apollo_step_2fa_verification',
    type: 'functional',
    level: 'steps',
    name: 'Two-Factor Verification',
    description: 'Verify OTP from authenticator',
    properties: { method: 'otp_validation' },
    product: 'apollo'
  },
  {
    id: 'apollo_action_enter_email',
    type: 'functional',
    level: 'actions',
    name: 'Enter Email',
    description: 'User inputs email address',
    properties: { input_type: 'email', validation: 'email_format' },
    product: 'apollo'
  },
  {
    id: 'apollo_action_enter_password',
    type: 'functional',
    level: 'actions',
    name: 'Enter Password',
    description: 'User inputs password',
    properties: { input_type: 'password', validation: 'strength_check' },
    product: 'apollo'
  },
  {
    id: 'apollo_action_submit_login',
    type: 'functional',
    level: 'actions',
    name: 'Submit Login Form',
    description: 'Submit initial login credentials',
    properties: { method: 'POST', endpoint: '/auth/login' },
    product: 'apollo'
  },
  {
    id: 'apollo_action_enter_otp',
    type: 'functional',
    level: 'actions',
    name: 'Enter OTP',
    description: 'Input one-time password',
    properties: { input_type: 'numeric', length: 6 },
    product: 'apollo'
  },
  {
    id: 'apollo_action_submit_2fa',
    type: 'functional',
    level: 'actions',
    name: 'Submit 2FA Form',
    description: 'Submit two-factor authentication',
    properties: { method: 'POST', endpoint: '/auth/verify-2fa' },
    product: 'apollo'
  },

  // Design Ontology
  {
    id: 'apollo_journey_shopping',
    type: 'design',
    level: 'user_journeys',
    name: 'Shopping Experience',
    description: 'Complete e-commerce user journey',
    properties: { sessions: 'multiple', touchpoints: ['web', 'mobile'] },
    product: 'apollo'
  },
  {
    id: 'apollo_flow_login_2fa',
    type: 'design',
    level: 'flows',
    name: 'Login + 2FA Flow',
    description: 'Two-step authentication process',
    properties: { pages: 2, redirects: 1 },
    product: 'apollo'
  },
  {
    id: 'apollo_page_login',
    type: 'design',
    level: 'pages',
    name: 'Login Page',
    description: 'Single-page application login',
    properties: { rendering: 'client', framework: 'react' },
    product: 'apollo'
  },
  {
    id: 'apollo_page_2fa',
    type: 'design',
    level: 'pages',
    name: '2FA Verification Page',
    description: 'OTP input and verification',
    properties: { rendering: 'client', framework: 'react' },
    product: 'apollo'
  },
  {
    id: 'apollo_template_form',
    type: 'design',
    level: 'templates',
    name: 'Form Template',
    description: 'Modern responsive form layout',
    properties: { responsive: true, accessibility: 'wcag_aa' },
    product: 'apollo'
  },
  {
    id: 'apollo_organism_login_form',
    type: 'design',
    level: 'organisms',
    name: 'Login Form',
    description: 'Complete login form with validation',
    properties: { fields: 2, validation: 'real_time' },
    product: 'apollo'
  },
  {
    id: 'apollo_organism_2fa_form',
    type: 'design',
    level: 'organisms',
    name: 'Two-Factor Authentication Form',
    description: 'OTP input form',
    properties: { fields: 1, validation: 'numeric_only' },
    product: 'apollo'
  },
  {
    id: 'apollo_molecule_email_group',
    type: 'design',
    level: 'molecules',
    name: 'Email Field Group',
    description: 'Email input with label and validation',
    properties: { label: 'Email Address', validation_message: true },
    product: 'apollo'
  },
  {
    id: 'apollo_molecule_password_group',
    type: 'design',
    level: 'molecules',
    name: 'Password Field Group',
    description: 'Password input with strength indicator',
    properties: { label: 'Password', strength_indicator: true },
    product: 'apollo'
  },
  {
    id: 'apollo_molecule_otp_group',
    type: 'design',
    level: 'molecules',
    name: 'OTP Field Group',
    description: 'OTP input with timer',
    properties: { label: 'Verification Code', timer: true },
    product: 'apollo'
  },
  {
    id: 'apollo_atom_email_input',
    type: 'design',
    level: 'atoms',
    name: 'Email Input',
    description: 'Email input field with validation',
    properties: { type: 'email', autocomplete: 'email' },
    product: 'apollo'
  },
  {
    id: 'apollo_atom_password_input',
    type: 'design',
    level: 'atoms',
    name: 'Password Input',
    description: 'Password input with show/hide toggle',
    properties: { type: 'password', show_toggle: true },
    product: 'apollo'
  },
  {
    id: 'apollo_atom_otp_input',
    type: 'design',
    level: 'atoms',
    name: 'OTP Input',
    description: 'Numeric input for verification code',
    properties: { type: 'text', pattern: '[0-9]{6}' },
    product: 'apollo'
  },
  {
    id: 'apollo_atom_primary_button',
    type: 'design',
    level: 'atoms',
    name: 'Primary Button',
    description: 'Main action button with loading state',
    properties: { variant: 'primary', loading_state: true },
    product: 'apollo'
  },

  // Architecture Ontology
  {
    id: 'apollo_layer_ux',
    type: 'architecture',
    level: 'layers',
    name: 'User Experience Layer',
    description: 'React-based frontend',
    properties: { technology: 'React/TypeScript', architecture: 'spa' },
    product: 'apollo'
  },
  {
    id: 'apollo_layer_gateway',
    type: 'architecture',
    level: 'layers',
    name: 'API Gateway Layer',
    description: 'Request routing and management',
    properties: { technology: 'Express.js', features: ['rate_limiting', 'cors'] },
    product: 'apollo'
  },
  {
    id: 'apollo_layer_services',
    type: 'architecture',
    level: 'layers',
    name: 'Services Layer',
    description: 'Microservices architecture',
    properties: { technology: 'Node.js', pattern: 'microservices' },
    product: 'apollo'
  },
  {
    id: 'apollo_service_auth',
    type: 'architecture',
    level: 'services',
    name: 'Authentication Microservice',
    description: 'JWT-based authentication service',
    properties: { type: 'custom_service', auth_method: 'jwt' },
    product: 'apollo'
  },
  {
    id: 'apollo_service_identity',
    type: 'architecture',
    level: 'services',
    name: 'Identity & Access Service',
    description: 'User identity management',
    properties: { type: 'platform_service', features: ['rbac', '2fa'] },
    product: 'apollo'
  },
  {
    id: 'apollo_service_notification',
    type: 'architecture',
    level: 'services',
    name: 'System Notification Service',
    description: '2FA OTP delivery service',
    properties: { type: 'platform_service', channels: ['sms', 'email'] },
    product: 'apollo'
  },
  {
    id: 'apollo_entity_react_frontend',
    type: 'architecture',
    level: 'entities_components',
    name: 'React Frontend',
    description: 'Single-page application frontend',
    properties: { technology: 'React', state_management: 'context' },
    product: 'apollo'
  },
  {
    id: 'apollo_entity_auth_microservice',
    type: 'architecture',
    level: 'entities_components',
    name: 'Node.js/Express Microservice',
    description: 'Authentication service implementation',
    properties: { technology: 'Node.js', framework: 'Express' },
    product: 'apollo'
  },

  // Code Ontology - Frontend
  {
    id: 'apollo_frontend_app',
    type: 'code',
    level: 'applications',
    name: 'Apollo Launchpad SPA',
    description: 'React single-page application',
    properties: { technology: 'React/TypeScript', build_tool: 'Vite', deployment: 'CDN' },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_module_auth',
    type: 'code',
    level: 'modules',
    name: 'AuthModule',
    description: 'Authentication-related components',
    properties: { components: ['LoginForm', 'TwoFactorAuthForm'], hooks: ['useAuth'] },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_component_login_form',
    type: 'code',
    level: 'components',
    name: 'LoginForm.tsx',
    description: 'React login form component',
    properties: { type: 'functional_component', hooks: ['useState', 'useForm'] },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_component_2fa_form',
    type: 'code',
    level: 'components',
    name: 'TwoFactorAuthForm.tsx',
    description: 'React 2FA verification component',
    properties: { type: 'functional_component', hooks: ['useState', 'useEffect'] },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_function_handle_submit',
    type: 'code',
    level: 'functions_hooks',
    name: 'handleSubmit()',
    description: 'Form submission handler',
    properties: { async: true, validation: 'client_side' },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_hook_use_auth',
    type: 'code',
    level: 'functions_hooks',
    name: 'useAuth()',
    description: 'Authentication state management hook',
    properties: { context: 'AuthContext', state: ['user', 'token', 'loading'] },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_state_email',
    type: 'code',
    level: 'properties_state',
    name: 'email',
    description: 'Email form field state',
    properties: { type: 'string', validation: 'email' },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_state_password',
    type: 'code',
    level: 'properties_state',
    name: 'password',
    description: 'Password form field state',
    properties: { type: 'string', sensitive: true },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_state_otp',
    type: 'code',
    level: 'properties_state',
    name: 'otp',
    description: 'OTP verification code state',
    properties: { type: 'string', length: 6 },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_state_loading',
    type: 'code',
    level: 'properties_state',
    name: 'isLoading',
    description: 'Loading state indicator',
    properties: { type: 'boolean', default: false },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_config_api',
    type: 'code',
    level: 'configurations',
    name: 'api.config.ts',
    description: 'API endpoint configuration',
    properties: { base_url: 'https://api.apollolaunchpad.com', timeout: 5000 },
    product: 'apollo'
  },

  // Code Ontology - Backend
  {
    id: 'apollo_backend_app',
    type: 'code',
    level: 'applications',
    name: 'Authentication Microservice',
    description: 'Node.js authentication service',
    properties: { technology: 'Node.js/Express', port: 3001, database: 'MongoDB' },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_module_auth',
    type: 'code',
    level: 'modules',
    name: 'AuthModule',
    description: 'Authentication business logic',
    properties: { services: ['AuthService', 'TokenService'], routes: ['AuthRouter'] },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_class_auth_service',
    type: 'code',
    level: 'classes_services',
    name: 'AuthService',
    description: 'Authentication service class',
    properties: { type: 'service_class', methods: ['authenticate', 'verify2FA'] },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_class_auth_router',
    type: 'code',
    level: 'classes_services',
    name: 'AuthRouter',
    description: 'Express router for auth endpoints',
    properties: { type: 'router_class', endpoints: ['/login', '/verify-2fa'] },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_function_login_endpoint',
    type: 'code',
    level: 'functions_methods',
    name: 'POST /auth/login',
    description: 'Login endpoint handler',
    properties: { method: 'POST', middleware: ['validation', 'rate_limiting'] },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_function_2fa_endpoint',
    type: 'code',
    level: 'functions_methods',
    name: 'POST /auth/verify-2fa',
    description: '2FA verification endpoint',
    properties: { method: 'POST', middleware: ['session_validation'] },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_function_password_hash',
    type: 'code',
    level: 'functions_methods',
    name: 'password hashing (bcrypt)',
    description: 'Secure password hashing',
    properties: { algorithm: 'bcrypt', rounds: 12, security: 'strong' },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_function_jwt_generation',
    type: 'code',
    level: 'functions_methods',
    name: 'JWT generation',
    description: 'Generate authentication tokens',
    properties: { algorithm: 'HS256', expiry: '2h' },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_property_jwt_token',
    type: 'code',
    level: 'properties_fields',
    name: 'JWT token',
    description: 'Authentication token',
    properties: { type: 'string', encoding: 'base64' },
    product: 'apollo'
  },
  {
    id: 'apollo_backend_config_jwt_secret',
    type: 'code',
    level: 'configurations',
    name: 'jwt.secret',
    description: 'JWT signing secret',
    properties: { environment: 'JWT_SECRET', rotation: 'monthly' },
    product: 'apollo'
  },

  // Code Ontology - Data
  {
    id: 'apollo_data_app',
    type: 'code',
    level: 'applications',
    name: 'User Database',
    description: 'MongoDB user data storage',
    properties: { technology: 'MongoDB', version: '6.0' },
    product: 'apollo'
  },
  {
    id: 'apollo_data_module_user',
    type: 'code',
    level: 'modules',
    name: 'UserModule',
    description: 'User data management',
    properties: { collections: ['users', 'sessions'] },
    product: 'apollo'
  },
  {
    id: 'apollo_data_collection_users',
    type: 'code',
    level: 'classes_processors',
    name: 'users collection',
    description: 'User account data',
    properties: { fields: ['email', 'password_hash', '2fa_enabled', '2fa_secret'] },
    product: 'apollo'
  },
  {
    id: 'apollo_data_query_find_user',
    type: 'code',
    level: 'functions_queries',
    name: 'db.users.findOne({ email })',
    description: 'Find user by email query',
    properties: { type: 'find', indexed: true },
    product: 'apollo'
  },

  // Code Ontology - Frontend React Elements (granular)
  {
    id: 'apollo_frontend_element_email_input',
    type: 'code',
    level: 'properties_state',
    name: 'Email Input Element',
    description: 'React input element for email field',
    properties: { component: 'input', type: 'email', required: true, validation: 'email' },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_element_password_input',
    type: 'code',
    level: 'properties_state',
    name: 'Password Input Element',
    description: 'React input element for password field',
    properties: { component: 'input', type: 'password', required: true, showToggle: true },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_element_otp_input',
    type: 'code',
    level: 'properties_state',
    name: 'OTP Input Element',
    description: 'React input element for OTP verification',
    properties: { component: 'input', type: 'text', maxLength: 6, pattern: '[0-9]{6}' },
    product: 'apollo'
  },
  {
    id: 'apollo_frontend_element_submit_button',
    type: 'code',
    level: 'properties_state',
    name: 'Submit Button Element',
    description: 'React button element for form submission',
    properties: { component: 'button', type: 'submit', variant: 'primary', disabled: 'isLoading' },
    product: 'apollo'
  }
];

// =============================================================================
// VOYAGER ANALYTICS ONTOLOGY NODES (Vue.js analytics dashboard)
// =============================================================================

export const voyagerNodes: OntologyNode[] = [
  // Root Nodes for each Ontology
  {
    id: 'voyager_functional_root',
    type: 'functional',
    level: 'root',
    name: 'Voyager Functional Layer',
    description: 'User goals, scenarios, and actions in Voyager Analytics',
    properties: { layer: 'functional', product_focus: 'data_analytics' },
    product: 'voyager'
  },
  {
    id: 'voyager_design_root',
    type: 'design',
    level: 'root',
    name: 'Voyager Design Layer',
    description: 'UI patterns, layouts, and visual elements in Voyager Analytics',
    properties: { layer: 'design', framework: 'vue_microfrontend' },
    product: 'voyager'
  },
  {
    id: 'voyager_architecture_root',
    type: 'architecture',
    level: 'root',
    name: 'Voyager Architecture Layer',
    description: 'System structure and service organization in Voyager Analytics',
    properties: { layer: 'architecture', pattern: 'microfrontend' },
    product: 'voyager'
  },
  {
    id: 'voyager_code_root',
    type: 'code',
    level: 'root',
    name: 'Voyager Code Layer',
    description: 'Implementation details and code structure in Voyager Analytics',
    properties: { layer: 'code', technology: 'vue_elasticsearch' },
    product: 'voyager'
  },

  // Functional Ontology
  {
    id: 'voyager_persona_api_consumer',
    type: 'functional',
    level: 'persona',
    name: 'API Consumer (System)',
    description: 'Enterprise system accessing analytics data',
    properties: { access_level: 'enterprise', security_clearance: 'sso_required' },
    product: 'voyager'
  },
  {
    id: 'voyager_persona_business_user',
    type: 'functional',
    level: 'persona',
    name: 'Business User',
    description: 'Employee who needs access to analytics platform for data insights',
    properties: { access_level: 'employee', role: 'analytics' },
    product: 'voyager'
  },
  {
    id: 'voyager_outcome_authenticate',
    type: 'functional',
    level: 'outcomes',
    name: 'Authenticate to System',
    description: 'Gain authenticated access to business application',
    properties: { session_duration: 'until_token_expiry', multi_factor: false },
    product: 'voyager'
  },
  {
    id: 'voyager_outcome_analyze_metrics',
    type: 'functional',
    level: 'outcomes',
    name: 'Analyze Business Metrics',
    description: 'Generate insights from analytics data',
    properties: { session_duration: 'until_token_expiry', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_scenario_sso_auth',
    type: 'functional',
    level: 'scenarios',
    name: 'SSO Authentication',
    description: 'Single sign-on via enterprise provider',
    properties: { complexity: 'high', security_level: 'enterprise' },
    product: 'voyager'
  },
  {
    id: 'voyager_scenario_dashboard_access',
    type: 'functional',
    level: 'scenarios',
    name: 'Dashboard Access',
    description: 'Access real-time analytics dashboard',
    properties: { complexity: 'medium', security_level: 'enterprise' },
    product: 'voyager'
  },
  {
    id: 'voyager_step_initial_access',
    type: 'functional',
    level: 'steps',
    name: 'Initial Access',
    description: 'Navigate to application URL',
    properties: { method: 'redirect_to_sso' },
    product: 'voyager'
  },
  {
    id: 'voyager_step_sso_auth',
    type: 'functional',
    level: 'steps',
    name: 'SSO Provider Authentication',
    description: 'Authenticate with enterprise SSO',
    properties: { method: 'oauth2_flow' },
    product: 'voyager'
  },
  {
    id: 'voyager_step_code_exchange',
    type: 'functional',
    level: 'steps',
    name: 'Authorization Code Exchange',
    description: 'Exchange auth code for tokens',
    properties: { method: 'server_to_server' },
    product: 'voyager'
  },
  {
    id: 'voyager_step_load_dashboard',
    type: 'functional',
    level: 'steps',
    name: 'Load Dashboard Components',
    description: 'Initialize micro-frontend components',
    properties: { method: 'lazy_loading' },
    product: 'voyager'
  },
  {
    id: 'voyager_action_navigate_url',
    type: 'functional',
    level: 'actions',
    name: 'Navigate to URL',
    description: 'User accesses application URL',
    properties: { trigger: 'user_initiated' },
    product: 'voyager'
  },
  {
    id: 'voyager_action_enter_credentials',
    type: 'functional',
    level: 'actions',
    name: 'Enter Enterprise Credentials',
    description: 'Input SSO provider credentials',
    properties: { location: 'sso_provider_page' },
    product: 'voyager'
  },
  {
    id: 'voyager_action_exchange_code',
    type: 'functional',
    level: 'actions',
    name: 'Exchange Authorization Code for Token',
    description: 'Backend exchanges code for access token',
    properties: { method: 'server_side', protocol: 'oauth2' },
    product: 'voyager'
  },
  {
    id: 'voyager_action_filter_data',
    type: 'functional',
    level: 'actions',
    name: 'Filter Dashboard Data',
    description: 'Apply filters to analytics data',
    properties: { method: 'client_side', real_time: true },
    product: 'voyager'
  },

  // Design Ontology
  {
    id: 'voyager_journey_data_integration',
    type: 'design',
    level: 'user_journeys',
    name: 'Data Integration Journey',
    description: 'Enterprise analytics access journey',
    properties: { sessions: 'persistent', integration: 'sso' },
    product: 'voyager'
  },
  {
    id: 'voyager_journey_analytics_exploration',
    type: 'design',
    level: 'user_journeys',
    name: 'Analytics Exploration Journey',
    description: 'Interactive data exploration workflow',
    properties: { sessions: 'persistent', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_flow_sso_auth',
    type: 'design',
    level: 'flows',
    name: 'SSO Authentication Flow',
    description: 'OAuth2/OIDC authentication flow',
    properties: { pages: 3, external_redirects: 2 },
    product: 'voyager'
  },
  {
    id: 'voyager_flow_dashboard_interaction',
    type: 'design',
    level: 'flows',
    name: 'Dashboard Interaction Flow',
    description: 'Real-time data exploration flow',
    properties: { pages: 1, widgets: 'multiple' },
    product: 'voyager'
  },
  {
    id: 'voyager_page_sso_login',
    type: 'design',
    level: 'pages',
    name: 'SSO Provider Login Page',
    description: 'External SSO provider interface',
    properties: { rendering: 'external', provider: 'okta' },
    product: 'voyager'
  },
  {
    id: 'voyager_page_dashboard',
    type: 'design',
    level: 'pages',
    name: 'Voyager Analytics Dashboard',
    description: 'Main analytics dashboard',
    properties: { rendering: 'micro_frontend', components: 'multiple' },
    product: 'voyager'
  },
  {
    id: 'voyager_page_reports',
    type: 'design',
    level: 'pages',
    name: 'Analytics Reports Page',
    description: 'Detailed analytics reports',
    properties: { rendering: 'micro_frontend', export: true },
    product: 'voyager'
  },
  {
    id: 'voyager_template_api',
    type: 'design',
    level: 'templates',
    name: 'API Template',
    description: 'Structured API response format',
    properties: { format: 'json', schema: 'openapi' },
    product: 'voyager'
  },
  {
    id: 'voyager_template_dashboard',
    type: 'design',
    level: 'templates',
    name: 'Dashboard Template',
    description: 'Enterprise dashboard layout',
    properties: { responsive: true, accessibility: 'wcag_aa' },
    product: 'voyager'
  },
  {
    id: 'voyager_template_widget',
    type: 'design',
    level: 'templates',
    name: 'Widget Template',
    description: 'Reusable chart widget layout',
    properties: { responsive: true, configurable: true },
    product: 'voyager'
  },
  {
    id: 'voyager_organism_auth_response',
    type: 'design',
    level: 'organisms',
    name: 'Auth Response',
    description: 'SSO authentication response structure',
    properties: { format: 'json', tokens: ['access_token', 'id_token'] },
    product: 'voyager'
  },
  {
    id: 'voyager_organism_metrics_grid',
    type: 'design',
    level: 'organisms',
    name: 'Metrics Grid',
    description: 'Dashboard metrics display grid',
    properties: { layout: 'responsive_grid', widgets: 'configurable' },
    product: 'voyager'
  },
  {
    id: 'voyager_organism_filter_panel',
    type: 'design',
    level: 'organisms',
    name: 'Filter Panel',
    description: 'Data filtering controls',
    properties: { position: 'sidebar', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_molecule_token_object',
    type: 'design',
    level: 'molecules',
    name: 'Token Object',
    description: 'OAuth2 token response structure',
    properties: { fields: ['access_token', 'token_type', 'expires_in'] },
    product: 'voyager'
  },
  {
    id: 'voyager_molecule_chart_widget',
    type: 'design',
    level: 'molecules',
    name: 'Chart Widget',
    description: 'Individual chart component',
    properties: { types: ['line', 'bar', 'pie'], interactive: true },
    product: 'voyager'
  },
  {
    id: 'voyager_molecule_metric_card',
    type: 'design',
    level: 'molecules',
    name: 'Metric Card',
    description: 'Key metric display card',
    properties: { trend_indicator: true, threshold_alerts: true },
    product: 'voyager'
  },
  {
    id: 'voyager_atom_access_token',
    type: 'design',
    level: 'atoms',
    name: 'Access Token Field',
    description: 'JWT access token',
    properties: { type: 'string', encoding: 'jwt' },
    product: 'voyager'
  },
  {
    id: 'voyager_atom_chart_canvas',
    type: 'design',      
    level: 'atoms',
    name: 'Chart Canvas',
    description: 'Chart rendering surface',
    properties: { library: 'chart.js', responsive: true },
    product: 'voyager'
  },
  {
    id: 'voyager_atom_filter_dropdown',
    type: 'design',
    level: 'atoms',
    name: 'Filter Dropdown',
    description: 'Data filter selection dropdown',
    properties: { multi_select: true, search: true },
    product: 'voyager'
  },

  // Architecture Ontology
  {
    id: 'voyager_layer_ux',
    type: 'architecture',
    level: 'layers',
    name: 'User Experience Layer',
    description: 'Micro-frontend architecture',
    properties: { technology: 'Vue.js/TypeScript', architecture: 'micro_frontend' },
    product: 'voyager'
  },
  {
    id: 'voyager_layer_gateway',
    type: 'architecture',
    level: 'layers',
    name: 'API Gateway Layer',
    description: '.NET Core API Gateway',
    properties: { technology: '.NET Core', features: ['oauth2', 'token_validation'] },
    product: 'voyager'
  },
  {
    id: 'voyager_layer_data',
    type: 'architecture',
    level: 'layers',
    name: 'Data Layer',
    description: 'Analytics data processing layer',
    properties: { technology: 'ElasticSearch/Kafka', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_service_identity',
    type: 'architecture',
    level: 'services',
    name: 'Identity & Access Service',
    description: 'SSO integration service',
    properties: { type: 'platform_service', provider: 'external_sso' },
    product: 'voyager'
  },
  {
    id: 'voyager_service_api_key',
    type: 'architecture',
    level: 'services',
    name: 'API Key Management Service',
    description: 'Token and key management',
    properties: { type: 'platform_service', features: ['token_validation', 'refresh'] },
    product: 'voyager'
  },
  {
    id: 'voyager_service_analytics',
    type: 'architecture',
    level: 'services',
    name: 'Analytics Processing Service',
    description: 'Real-time data processing service',
    properties: { type: 'custom_service', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_entity_sso_provider',
    type: 'architecture',
    level: 'entities_components',
    name: 'SSO Provider (Okta)',
    description: 'External identity provider',
    properties: { technology: 'Okta', protocol: 'OAuth2/OIDC' },
    product: 'voyager'
  },
  {
    id: 'voyager_entity_gateway',
    type: 'architecture',
    level: 'entities_components',
    name: '.NET Core API Gateway',
    description: 'Backend API gateway',
    properties: { technology: '.NET Core', hosting: 'kubernetes' },
    product: 'voyager'
  },
  {
    id: 'voyager_entity_vue_microfrontend',
    type: 'architecture',
    level: 'entities_components',
    name: 'Vue.js Micro-frontend',
    description: 'Dashboard micro-frontend modules',
    properties: { technology: 'Vue.js', deployment: 'module_federation' },
    product: 'voyager'
  },

  // Code Ontology - Frontend
  {
    id: 'voyager_frontend_app',
    type: 'code',
    level: 'applications',
    name: 'Voyager Analytics Dashboard',
    description: 'Vue.js analytics dashboard application',
    properties: { technology: 'Vue.js/TypeScript', build_tool: 'Vite', module_federation: true },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_module_auth',
    type: 'code',
    level: 'modules',
    name: 'AuthModule',
    description: 'SSO authentication module',
    properties: { components: ['SSORedirect'], composables: ['useAuth'] },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_module_dashboard',
    type: 'code',
    level: 'modules',
    name: 'DashboardModule',
    description: 'Dashboard components and logic',
    properties: { components: ['DashboardGrid', 'MetricWidget'], composables: ['useMetrics'] },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_component_dashboard',
    type: 'code',
    level: 'components',
    name: 'Dashboard.vue',
    description: 'Main dashboard component',
    properties: { type: 'composition_api', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_component_chart',
    type: 'code',
    level: 'components',
    name: 'ChartWidget.vue',
    description: 'Interactive chart component',
    properties: { type: 'composition_api', library: 'chart.js' },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_composable_auth',
    type: 'code',
    level: 'functions_hooks',
    name: 'useAuth()',
    description: 'Authentication state composable',
    properties: { reactive: true, persistent: true },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_composable_metrics',
    type: 'code',
    level: 'functions_hooks',
    name: 'useMetrics()',
    description: 'Real-time metrics data composable',
    properties: { reactive: true, websocket: true },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_state_user',
    type: 'code',
    level: 'properties_state',
    name: 'user',
    description: 'Authenticated user state',
    properties: { type: 'object', persistent: true },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_state_metrics',
    type: 'code',
    level: 'properties_state',
    name: 'metrics',
    description: 'Real-time metrics data',
    properties: { type: 'array', reactive: true },
    product: 'voyager'
  },
  {
    id: 'voyager_frontend_config_module_federation',
    type: 'code',
    level: 'configurations',
    name: 'module-federation.config.js',
    description: 'Micro-frontend configuration',
    properties: { remotes: ['analytics', 'reporting'], shared: ['vue'] },
    product: 'voyager'
  },

  // Code Ontology - Backend
  {
    id: 'voyager_backend_app',
    type: 'code',
    level: 'applications',
    name: '.NET Core API Gateway',
    description: 'Enterprise API gateway service',
    properties: { technology: '.NET Core', version: '8.0', hosting: 'kubernetes' },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_module_auth',
    type: 'code',
    level: 'modules',
    name: 'AuthModule',
    description: 'SSO authentication module',
    properties: { controllers: ['AuthController'], services: ['OAuthService'] },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_module_analytics',
    type: 'code',
    level: 'modules',
    name: 'AnalyticsModule',
    description: 'Analytics data processing module',
    properties: { controllers: ['AnalyticsController'], services: ['DataService'] },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_class_callback_handler',
    type: 'code',
    level: 'classes_services',
    name: 'OAuth Callback Handler',
    description: 'Handle SSO provider callbacks',
    properties: { type: 'controller_class', endpoints: ['/auth/callback'] },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_class_analytics_service',
    type: 'code',
    level: 'classes_services',
    name: 'AnalyticsService',
    description: 'Analytics data processing service',
    properties: { type: 'service_class', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_function_redirect_sso',
    type: 'code',
    level: 'functions_methods',
    name: 'Redirect to SSO Provider',
    description: 'Initiate OAuth2 flow',
    properties: { method: 'GET', response: 'redirect' },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_function_handle_callback',
    type: 'code',
    level: 'functions_methods',
    name: 'Handle /auth/callback',
    description: 'Process SSO provider callback',
    properties: { method: 'GET', parameters: ['code', 'state'] },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_function_exchange_token',
    type: 'code',
    level: 'functions_methods',
    name: 'Exchange Code for Token',
    description: 'OAuth2 token exchange',
    properties: { method: 'server_to_server', protocol: 'https' },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_function_get_metrics',
    type: 'code',
    level: 'functions_methods',
    name: 'GET /api/metrics',
    description: 'Retrieve analytics metrics',
    properties: { method: 'GET', real_time: true, caching: true },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_property_access_token',
    type: 'code',
    level: 'properties_fields',
    name: 'access_token',
    description: 'OAuth2 access token',
    properties: { type: 'string', expiry: '1h' },
    product: 'voyager'
  },
  {
    id: 'voyager_backend_config_sso',
    type: 'code',
    level: 'configurations',
    name: 'sso.config',
    description: 'SSO provider configuration',
    properties: { client_id: 'env:SSO_CLIENT_ID', redirect_uri: 'configured' },
    product: 'voyager'
  },

  // Code Ontology - Data
  {
    id: 'voyager_data_app',
    type: 'code',
    level: 'applications',
    name: 'Analytics Data Store',
    description: 'ElasticSearch analytics data storage',
    properties: { technology: 'ElasticSearch', version: '8.0', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_data_module_metrics',
    type: 'code',
    level: 'modules',
    name: 'MetricsModule',
    description: 'Metrics data management',
    properties: { indices: ['user_metrics', 'system_metrics'], streaming: true },
    product: 'voyager'
  },
  {
    id: 'voyager_data_index_user_metrics',
    type: 'code',
    level: 'classes_processors',
    name: 'user_metrics index',
    description: 'User behavior analytics data',
    properties: { fields: ['user_id', 'action', 'timestamp', 'session_id'], time_series: true },
    product: 'voyager'
  },
  {
    id: 'voyager_data_query_aggregation',
    type: 'code',
    level: 'functions_queries',
    name: 'Metrics Aggregation Query',
    description: 'Real-time metrics aggregation',
    properties: { type: 'aggregation', real_time: true },
    product: 'voyager'
  },
  {
    id: 'voyager_data_config_elasticsearch',
    type: 'code',
    level: 'configurations',
    name: 'elasticsearch.config',
    description: 'ElasticSearch connection configuration',
    properties: { cluster: 'analytics-cluster', shards: 3, replicas: 1 },
    product: 'voyager'
  }
];

// =============================================================================
// COMPREHENSIVE ONTOLOGY EDGES (Relationships)
// =============================================================================

export const ontologyEdges: OntologyEdge[] = [
  // ==========================================================================
  // PHOENIX CRM RELATIONSHIPS
  // ==========================================================================
  
  // Root to first-level connections
  { id: 'phoenix_functional_root_to_persona', source: 'phoenix_functional_root', target: 'phoenix_persona_business_user', type: 'implements', strength: 1 },
  { id: 'phoenix_design_root_to_journey', source: 'phoenix_design_root', target: 'phoenix_journey_system_mgmt', type: 'implements', strength: 1 },
  { id: 'phoenix_architecture_root_to_layer', source: 'phoenix_architecture_root', target: 'phoenix_layer_ux', type: 'implements', strength: 1 },
  { id: 'phoenix_code_root_to_frontend', source: 'phoenix_code_root', target: 'phoenix_frontend_app', type: 'implements', strength: 1 },
  { id: 'phoenix_code_root_to_backend', source: 'phoenix_code_root', target: 'phoenix_backend_app', type: 'implements', strength: 1 },
  { id: 'phoenix_code_root_to_data', source: 'phoenix_code_root', target: 'phoenix_data_app', type: 'implements', strength: 1 },

  // Functional hierarchy
  { id: 'phoenix_persona_to_outcome', source: 'phoenix_persona_business_user', target: 'phoenix_outcome_authenticate', type: 'requires', strength: 1 },
  { id: 'phoenix_outcome_to_scenario', source: 'phoenix_outcome_authenticate', target: 'phoenix_scenario_basic_login', type: 'implements', strength: 1 },
  { id: 'phoenix_scenario_to_step', source: 'phoenix_scenario_basic_login', target: 'phoenix_step_authentication', type: 'implements', strength: 1 },
  { id: 'phoenix_step_to_actions', source: 'phoenix_step_authentication', target: 'phoenix_action_enter_username', type: 'implements', strength: 0.8 },
  { id: 'phoenix_step_to_actions2', source: 'phoenix_step_authentication', target: 'phoenix_action_enter_password', type: 'implements', strength: 0.8 },
  { id: 'phoenix_step_to_actions3', source: 'phoenix_step_authentication', target: 'phoenix_action_submit_form', type: 'implements', strength: 1 },

  // Design hierarchy
  { id: 'phoenix_journey_to_flow', source: 'phoenix_journey_system_mgmt', target: 'phoenix_flow_login', type: 'implements', strength: 1 },
  { id: 'phoenix_flow_to_page', source: 'phoenix_flow_login', target: 'phoenix_page_login', type: 'implements', strength: 1 },
  { id: 'phoenix_page_to_template', source: 'phoenix_page_login', target: 'phoenix_template_form', type: 'implements', strength: 1 },
  { id: 'phoenix_template_to_organism', source: 'phoenix_template_form', target: 'phoenix_organism_login_form', type: 'implements', strength: 1 },
  { id: 'phoenix_organism_to_molecules', source: 'phoenix_organism_login_form', target: 'phoenix_molecule_username_group', type: 'implements', strength: 0.9 },
  { id: 'phoenix_organism_to_molecules2', source: 'phoenix_organism_login_form', target: 'phoenix_molecule_password_group', type: 'implements', strength: 0.9 },
  { id: 'phoenix_molecule_to_atoms', source: 'phoenix_molecule_username_group', target: 'phoenix_atom_username_input', type: 'implements', strength: 1 },
  { id: 'phoenix_molecule_to_atoms2', source: 'phoenix_molecule_password_group', target: 'phoenix_atom_password_input', type: 'implements', strength: 1 },
  { id: 'phoenix_organism_to_button', source: 'phoenix_organism_login_form', target: 'phoenix_atom_login_button', type: 'implements', strength: 1 },

  // Architecture hierarchy
  { id: 'phoenix_layer_ux_to_services', source: 'phoenix_layer_ux', target: 'phoenix_layer_services', type: 'requires', strength: 1 },
  { id: 'phoenix_layer_to_service', source: 'phoenix_layer_services', target: 'phoenix_service_auth', type: 'implements', strength: 1 },
  { id: 'phoenix_service_to_entity', source: 'phoenix_service_auth', target: 'phoenix_entity_php_backend', type: 'realizes', strength: 1 },

  // Code hierarchy - Frontend
  { id: 'phoenix_fe_app_to_module', source: 'phoenix_frontend_app', target: 'phoenix_frontend_module_login', type: 'implements', strength: 1 },
  { id: 'phoenix_fe_module_to_component', source: 'phoenix_frontend_module_login', target: 'phoenix_frontend_component_form', type: 'implements', strength: 1 },
  { id: 'phoenix_fe_component_to_function', source: 'phoenix_frontend_component_form', target: 'phoenix_frontend_function_validation', type: 'implements', strength: 1 },
  { id: 'phoenix_fe_function_to_state', source: 'phoenix_frontend_function_validation', target: 'phoenix_frontend_state_username', type: 'validates', strength: 1 },
  { id: 'phoenix_fe_function_to_state2', source: 'phoenix_frontend_function_validation', target: 'phoenix_frontend_state_password', type: 'validates', strength: 1 },
  
  // Code hierarchy - Frontend HTML Elements (granular)
  { id: 'phoenix_fe_component_to_username_element', source: 'phoenix_frontend_component_form', target: 'phoenix_frontend_element_username_input', type: 'renders', strength: 1 },
  { id: 'phoenix_fe_component_to_password_element', source: 'phoenix_frontend_component_form', target: 'phoenix_frontend_element_password_input', type: 'renders', strength: 1 },
  { id: 'phoenix_fe_component_to_button_element', source: 'phoenix_frontend_component_form', target: 'phoenix_frontend_element_login_button', type: 'renders', strength: 1 },
  { id: 'phoenix_fe_component_to_labels_element', source: 'phoenix_frontend_component_form', target: 'phoenix_frontend_element_form_labels', type: 'renders', strength: 1 },
  { id: 'phoenix_fe_username_element_to_state', source: 'phoenix_frontend_element_username_input', target: 'phoenix_frontend_state_username', type: 'manages', strength: 1 },
  { id: 'phoenix_fe_password_element_to_state', source: 'phoenix_frontend_element_password_input', target: 'phoenix_frontend_state_password', type: 'manages', strength: 1 },

  // Code hierarchy - Backend
  { id: 'phoenix_be_app_to_module', source: 'phoenix_backend_app', target: 'phoenix_backend_module_auth', type: 'implements', strength: 1 },
  { id: 'phoenix_be_module_to_classes', source: 'phoenix_backend_module_auth', target: 'phoenix_backend_class_login', type: 'implements', strength: 1 },
  { id: 'phoenix_be_module_to_classes2', source: 'phoenix_backend_module_auth', target: 'phoenix_backend_class_auth', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions', source: 'phoenix_backend_class_login', target: 'phoenix_backend_function_post_handler', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions2', source: 'phoenix_backend_class_auth', target: 'phoenix_backend_function_password_hash', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions3', source: 'phoenix_backend_class_auth', target: 'phoenix_backend_function_db_query', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions4', source: 'phoenix_backend_class_auth', target: 'phoenix_backend_function_session_create', type: 'implements', strength: 1 },

  // Code hierarchy - Data
  { id: 'phoenix_data_app_to_module', source: 'phoenix_data_app', target: 'phoenix_data_module_user', type: 'implements', strength: 1 },
  { id: 'phoenix_data_module_to_table', source: 'phoenix_data_module_user', target: 'phoenix_data_class_users_table', type: 'implements', strength: 1 },
  { id: 'phoenix_data_table_to_query', source: 'phoenix_data_class_users_table', target: 'phoenix_data_function_sql_query', type: 'implements', strength: 1 },

  // Cross-ontology relationships
  { id: 'phoenix_functional_to_design', source: 'phoenix_action_submit_form', target: 'phoenix_atom_login_button', type: 'implements', strength: 1 },
  { id: 'phoenix_functional_to_arch', source: 'phoenix_step_authentication', target: 'phoenix_service_auth', type: 'validates', strength: 1 },
  { id: 'phoenix_functional_to_code', source: 'phoenix_action_submit_form', target: 'phoenix_backend_function_post_handler', type: 'triggers', strength: 1 },
  { id: 'phoenix_design_to_code', source: 'phoenix_page_login', target: 'phoenix_frontend_component_form', type: 'renders', strength: 1 },
  { id: 'phoenix_arch_to_code', source: 'phoenix_service_auth', target: 'phoenix_backend_class_auth', type: 'realizes', strength: 1 },
  { id: 'phoenix_code_to_code', source: 'phoenix_backend_class_auth', target: 'phoenix_data_class_users_table', type: 'requires', strength: 1 },
  
  // Architecture UX layer to frontend code
  { id: 'phoenix_ux_layer_to_frontend', source: 'phoenix_layer_ux', target: 'phoenix_frontend_app', type: 'realizes', strength: 1 },
  { id: 'phoenix_ux_layer_to_login_code', source: 'phoenix_layer_ux', target: 'phoenix_backend_class_login', type: 'realizes', strength: 0.8 },
  
  // Design atoms to granular code elements
  { id: 'phoenix_username_atom_to_html', source: 'phoenix_atom_username_input', target: 'phoenix_frontend_element_username_input', type: 'renders', strength: 1 },
  { id: 'phoenix_password_atom_to_html', source: 'phoenix_atom_password_input', target: 'phoenix_frontend_element_password_input', type: 'renders', strength: 1 },
  { id: 'phoenix_button_atom_to_html', source: 'phoenix_atom_login_button', target: 'phoenix_frontend_element_login_button', type: 'renders', strength: 1 },

  // ==========================================================================
  // APOLLO LAUNCHPAD RELATIONSHIPS
  // ==========================================================================
  
  // Root to first-level connections
  { id: 'apollo_functional_root_to_persona', source: 'apollo_functional_root', target: 'apollo_persona_business_user', type: 'implements', strength: 1 },
  { id: 'apollo_design_root_to_journey', source: 'apollo_design_root', target: 'apollo_journey_shopping', type: 'implements', strength: 1 },
  { id: 'apollo_architecture_root_to_layer', source: 'apollo_architecture_root', target: 'apollo_layer_ux', type: 'implements', strength: 1 },
  { id: 'apollo_code_root_to_frontend', source: 'apollo_code_root', target: 'apollo_frontend_app', type: 'implements', strength: 1 },
  { id: 'apollo_code_root_to_backend', source: 'apollo_code_root', target: 'apollo_backend_app', type: 'implements', strength: 1 },
  { id: 'apollo_code_root_to_data', source: 'apollo_code_root', target: 'apollo_data_app', type: 'implements', strength: 1 },

  // Functional hierarchy
  { id: 'apollo_persona_to_outcome', source: 'apollo_persona_business_user', target: 'apollo_outcome_authenticate', type: 'requires', strength: 1 },
  { id: 'apollo_outcome_to_scenario', source: 'apollo_outcome_authenticate', target: 'apollo_scenario_2fa_login', type: 'implements', strength: 1 },
  { id: 'apollo_scenario_to_steps', source: 'apollo_scenario_2fa_login', target: 'apollo_step_authentication', type: 'implements', strength: 1 },
  { id: 'apollo_scenario_to_steps2', source: 'apollo_scenario_2fa_login', target: 'apollo_step_2fa_verification', type: 'implements', strength: 1 },
  { id: 'apollo_step_to_actions', source: 'apollo_step_authentication', target: 'apollo_action_enter_email', type: 'implements', strength: 0.8 },
  { id: 'apollo_step_to_actions2', source: 'apollo_step_authentication', target: 'apollo_action_enter_password', type: 'implements', strength: 0.8 },
  { id: 'apollo_step_to_actions3', source: 'apollo_step_authentication', target: 'apollo_action_submit_login', type: 'implements', strength: 1 },
  { id: 'apollo_step2_to_actions', source: 'apollo_step_2fa_verification', target: 'apollo_action_enter_otp', type: 'implements', strength: 0.9 },
  { id: 'apollo_step2_to_actions2', source: 'apollo_step_2fa_verification', target: 'apollo_action_submit_2fa', type: 'implements', strength: 1 },

  // Design hierarchy
  { id: 'apollo_journey_to_flow', source: 'apollo_journey_shopping', target: 'apollo_flow_login_2fa', type: 'implements', strength: 1 },
  { id: 'apollo_flow_to_page', source: 'apollo_flow_login_2fa', target: 'apollo_page_login', type: 'implements', strength: 0.8 },
  { id: 'apollo_flow_to_page2', source: 'apollo_flow_login_2fa', target: 'apollo_page_2fa', type: 'implements', strength: 0.8 },
  { id: 'apollo_page_to_template', source: 'apollo_page_login', target: 'apollo_template_form', type: 'implements', strength: 1 },
  { id: 'apollo_page2_to_template', source: 'apollo_page_2fa', target: 'apollo_template_form', type: 'implements', strength: 1 },
  { id: 'apollo_template_to_organism', source: 'apollo_template_form', target: 'apollo_organism_login_form', type: 'implements', strength: 0.7 },
  { id: 'apollo_template_to_organism2', source: 'apollo_template_form', target: 'apollo_organism_2fa_form', type: 'implements', strength: 0.7 },
  { id: 'apollo_organism_to_molecules', source: 'apollo_organism_login_form', target: 'apollo_molecule_email_group', type: 'implements', strength: 0.9 },
  { id: 'apollo_organism_to_molecules2', source: 'apollo_organism_login_form', target: 'apollo_molecule_password_group', type: 'implements', strength: 0.9 },
  { id: 'apollo_organism2_to_molecules', source: 'apollo_organism_2fa_form', target: 'apollo_molecule_otp_group', type: 'implements', strength: 1 },
  { id: 'apollo_molecule_to_atoms', source: 'apollo_molecule_email_group', target: 'apollo_atom_email_input', type: 'implements', strength: 1 },
  { id: 'apollo_molecule_to_atoms2', source: 'apollo_molecule_password_group', target: 'apollo_atom_password_input', type: 'implements', strength: 1 },
  { id: 'apollo_molecule_to_atoms3', source: 'apollo_molecule_otp_group', target: 'apollo_atom_otp_input', type: 'implements', strength: 1 },
  { id: 'apollo_organism_to_button', source: 'apollo_organism_login_form', target: 'apollo_atom_primary_button', type: 'implements', strength: 0.8 },
  { id: 'apollo_organism2_to_button', source: 'apollo_organism_2fa_form', target: 'apollo_atom_primary_button', type: 'implements', strength: 0.8 },

  // Architecture hierarchy
  { id: 'apollo_layer_ux_to_gateway', source: 'apollo_layer_ux', target: 'apollo_layer_gateway', type: 'requires', strength: 1 },
  { id: 'apollo_layer_gateway_to_services', source: 'apollo_layer_gateway', target: 'apollo_layer_services', type: 'requires', strength: 1 },
  { id: 'apollo_layer_services_to_auth', source: 'apollo_layer_services', target: 'apollo_service_auth', type: 'implements', strength: 0.8 },
  { id: 'apollo_layer_services_to_identity', source: 'apollo_layer_services', target: 'apollo_service_identity', type: 'implements', strength: 0.8 },
  { id: 'apollo_layer_services_to_notification', source: 'apollo_layer_services', target: 'apollo_service_notification', type: 'implements', strength: 0.8 },
  { id: 'apollo_service_to_entity', source: 'apollo_service_auth', target: 'apollo_entity_auth_microservice', type: 'realizes', strength: 1 },
  { id: 'apollo_service_to_entity2', source: 'apollo_service_identity', target: 'apollo_entity_auth_microservice', type: 'realizes', strength: 0.8 },

  // Code hierarchy - Frontend
  { id: 'apollo_fe_app_to_module', source: 'apollo_frontend_app', target: 'apollo_frontend_module_auth', type: 'implements', strength: 1 },
  { id: 'apollo_fe_module_to_component', source: 'apollo_frontend_module_auth', target: 'apollo_frontend_component_login_form', type: 'implements', strength: 0.9 },
  { id: 'apollo_fe_module_to_component2', source: 'apollo_frontend_module_auth', target: 'apollo_frontend_component_2fa_form', type: 'implements', strength: 0.9 },
  { id: 'apollo_fe_component_to_function', source: 'apollo_frontend_component_login_form', target: 'apollo_frontend_function_handle_submit', type: 'implements', strength: 1 },
  { id: 'apollo_fe_component_to_hook', source: 'apollo_frontend_component_login_form', target: 'apollo_frontend_hook_use_auth', type: 'requires', strength: 1 },
  { id: 'apollo_fe_component2_to_function', source: 'apollo_frontend_component_2fa_form', target: 'apollo_frontend_function_handle_submit', type: 'implements', strength: 1 },
  { id: 'apollo_fe_component2_to_hook', source: 'apollo_frontend_component_2fa_form', target: 'apollo_frontend_hook_use_auth', type: 'requires', strength: 1 },
  { id: 'apollo_fe_hook_to_state', source: 'apollo_frontend_hook_use_auth', target: 'apollo_frontend_state_email', type: 'manages', strength: 0.8 },
  { id: 'apollo_fe_hook_to_state2', source: 'apollo_frontend_hook_use_auth', target: 'apollo_frontend_state_password', type: 'manages', strength: 0.8 },
  { id: 'apollo_fe_hook_to_state3', source: 'apollo_frontend_hook_use_auth', target: 'apollo_frontend_state_otp', type: 'manages', strength: 0.8 },
  { id: 'apollo_fe_hook_to_state4', source: 'apollo_frontend_hook_use_auth', target: 'apollo_frontend_state_loading', type: 'manages', strength: 1 },

  // Code hierarchy - Frontend React Elements (granular)
  { id: 'apollo_fe_login_component_to_email_element', source: 'apollo_frontend_component_login_form', target: 'apollo_frontend_element_email_input', type: 'renders', strength: 1 },
  { id: 'apollo_fe_login_component_to_password_element', source: 'apollo_frontend_component_login_form', target: 'apollo_frontend_element_password_input', type: 'renders', strength: 1 },
  { id: 'apollo_fe_login_component_to_button_element', source: 'apollo_frontend_component_login_form', target: 'apollo_frontend_element_submit_button', type: 'renders', strength: 1 },
  { id: 'apollo_fe_2fa_component_to_otp_element', source: 'apollo_frontend_component_2fa_form', target: 'apollo_frontend_element_otp_input', type: 'renders', strength: 1 },
  { id: 'apollo_fe_2fa_component_to_button_element', source: 'apollo_frontend_component_2fa_form', target: 'apollo_frontend_element_submit_button', type: 'renders', strength: 1 },
  { id: 'apollo_fe_email_element_to_state', source: 'apollo_frontend_element_email_input', target: 'apollo_frontend_state_email', type: 'manages', strength: 1 },
  { id: 'apollo_fe_password_element_to_state', source: 'apollo_frontend_element_password_input', target: 'apollo_frontend_state_password', type: 'manages', strength: 1 },
  { id: 'apollo_fe_otp_element_to_state', source: 'apollo_frontend_element_otp_input', target: 'apollo_frontend_state_otp', type: 'manages', strength: 1 },

  // Code hierarchy - Backend
  { id: 'apollo_be_app_to_module', source: 'apollo_backend_app', target: 'apollo_backend_module_auth', type: 'implements', strength: 1 },
  { id: 'apollo_be_module_to_service', source: 'apollo_backend_module_auth', target: 'apollo_backend_class_auth_service', type: 'implements', strength: 0.9 },
  { id: 'apollo_be_module_to_router', source: 'apollo_backend_module_auth', target: 'apollo_backend_class_auth_router', type: 'implements', strength: 0.9 },
  { id: 'apollo_be_router_to_endpoints', source: 'apollo_backend_class_auth_router', target: 'apollo_backend_function_login_endpoint', type: 'implements', strength: 0.8 },
  { id: 'apollo_be_router_to_endpoints2', source: 'apollo_backend_class_auth_router', target: 'apollo_backend_function_2fa_endpoint', type: 'implements', strength: 0.8 },
  { id: 'apollo_be_service_to_functions', source: 'apollo_backend_class_auth_service', target: 'apollo_backend_function_password_hash', type: 'implements', strength: 1 },
  { id: 'apollo_be_service_to_functions2', source: 'apollo_backend_class_auth_service', target: 'apollo_backend_function_jwt_generation', type: 'implements', strength: 1 },

  // Code hierarchy - Data
  { id: 'apollo_data_app_to_module', source: 'apollo_data_app', target: 'apollo_data_module_user', type: 'implements', strength: 1 },
  { id: 'apollo_data_module_to_collection', source: 'apollo_data_module_user', target: 'apollo_data_collection_users', type: 'implements', strength: 1 },
  { id: 'apollo_data_collection_to_query', source: 'apollo_data_collection_users', target: 'apollo_data_query_find_user', type: 'implements', strength: 1 },

  // Cross-ontology relationships
  { id: 'apollo_functional_to_design', source: 'apollo_action_submit_login', target: 'apollo_atom_primary_button', type: 'implements', strength: 1 },
  { id: 'apollo_functional_to_arch', source: 'apollo_step_authentication', target: 'apollo_service_auth', type: 'validates', strength: 1 },
  { id: 'apollo_functional_to_code', source: 'apollo_action_submit_login', target: 'apollo_backend_function_login_endpoint', type: 'triggers', strength: 1 },
  { id: 'apollo_design_to_code', source: 'apollo_page_login', target: 'apollo_frontend_component_login_form', type: 'renders', strength: 1 },
  { id: 'apollo_design_to_code2', source: 'apollo_page_2fa', target: 'apollo_frontend_component_2fa_form', type: 'renders', strength: 1 },
  { id: 'apollo_arch_to_code', source: 'apollo_service_auth', target: 'apollo_backend_class_auth_service', type: 'realizes', strength: 1 },
  { id: 'apollo_code_to_code', source: 'apollo_backend_class_auth_service', target: 'apollo_data_collection_users', type: 'requires', strength: 1 },
  
  // Architecture UX layer to frontend code
  { id: 'apollo_ux_layer_to_frontend', source: 'apollo_layer_ux', target: 'apollo_frontend_app', type: 'realizes', strength: 1 },

  // ==========================================================================
  // VOYAGER ANALYTICS RELATIONSHIPS
  // ==========================================================================
  
  // Root to first-level connections
  { id: 'voyager_functional_root_to_persona', source: 'voyager_functional_root', target: 'voyager_persona_business_user', type: 'implements', strength: 1 },
  { id: 'voyager_functional_root_to_api_persona', source: 'voyager_functional_root', target: 'voyager_persona_api_consumer', type: 'implements', strength: 1 },
  { id: 'voyager_design_root_to_journey', source: 'voyager_design_root', target: 'voyager_journey_data_integration', type: 'implements', strength: 1 },
  { id: 'voyager_design_root_to_journey2', source: 'voyager_design_root', target: 'voyager_journey_analytics_exploration', type: 'implements', strength: 1 },
  { id: 'voyager_architecture_root_to_layer', source: 'voyager_architecture_root', target: 'voyager_layer_ux', type: 'implements', strength: 1 },
  { id: 'voyager_code_root_to_frontend', source: 'voyager_code_root', target: 'voyager_frontend_app', type: 'implements', strength: 1 },
  { id: 'voyager_code_root_to_backend', source: 'voyager_code_root', target: 'voyager_backend_app', type: 'implements', strength: 1 },

  // Functional hierarchy
  { id: 'voyager_persona_api_to_outcome', source: 'voyager_persona_api_consumer', target: 'voyager_outcome_retrieve_data', type: 'requires', strength: 1 },
  { id: 'voyager_persona_to_outcome', source: 'voyager_persona_business_user', target: 'voyager_outcome_authenticate', type: 'requires', strength: 1 },
  { id: 'voyager_outcome_to_scenario', source: 'voyager_outcome_authenticate', target: 'voyager_scenario_sso_auth', type: 'implements', strength: 1 },
  { id: 'voyager_outcome2_to_scenario', source: 'voyager_outcome_analyze_metrics', target: 'voyager_scenario_dashboard_access', type: 'implements', strength: 1 },
  { id: 'voyager_scenario_to_steps', source: 'voyager_scenario_sso_auth', target: 'voyager_step_initial_access', type: 'implements', strength: 0.8 },
  { id: 'voyager_scenario_to_steps2', source: 'voyager_scenario_sso_auth', target: 'voyager_step_sso_auth', type: 'implements', strength: 0.9 },
  { id: 'voyager_scenario_to_steps3', source: 'voyager_scenario_sso_auth', target: 'voyager_step_code_exchange', type: 'implements', strength: 0.9 },
  { id: 'voyager_scenario2_to_steps', source: 'voyager_scenario_dashboard_access', target: 'voyager_step_load_dashboard', type: 'implements', strength: 1 },
  { id: 'voyager_step_to_actions', source: 'voyager_step_initial_access', target: 'voyager_action_navigate_url', type: 'implements', strength: 1 },
  { id: 'voyager_step2_to_actions', source: 'voyager_step_sso_auth', target: 'voyager_action_enter_credentials', type: 'implements', strength: 1 },
  { id: 'voyager_step3_to_actions', source: 'voyager_step_code_exchange', target: 'voyager_action_exchange_code', type: 'implements', strength: 1 },
  { id: 'voyager_step4_to_actions', source: 'voyager_step_load_dashboard', target: 'voyager_action_filter_data', type: 'implements', strength: 0.8 },

  // Design hierarchy
  { id: 'voyager_journey_to_flow', source: 'voyager_journey_data_integration', target: 'voyager_flow_sso_auth', type: 'implements', strength: 0.9 },
  { id: 'voyager_journey2_to_flow', source: 'voyager_journey_analytics_exploration', target: 'voyager_flow_dashboard_interaction', type: 'implements', strength: 1 },
  { id: 'voyager_flow_to_page', source: 'voyager_flow_sso_auth', target: 'voyager_page_sso_login', type: 'implements', strength: 0.8 },
  { id: 'voyager_flow_to_page2', source: 'voyager_flow_sso_auth', target: 'voyager_page_dashboard', type: 'implements', strength: 1 },
  { id: 'voyager_flow2_to_page', source: 'voyager_flow_dashboard_interaction', target: 'voyager_page_dashboard', type: 'implements', strength: 1 },
  { id: 'voyager_flow2_to_page2', source: 'voyager_flow_dashboard_interaction', target: 'voyager_page_reports', type: 'implements', strength: 0.8 },
  { id: 'voyager_page_to_template', source: 'voyager_page_dashboard', target: 'voyager_template_dashboard', type: 'implements', strength: 1 },
  { id: 'voyager_page2_to_template', source: 'voyager_page_reports', target: 'voyager_template_widget', type: 'implements', strength: 0.9 },
  { id: 'voyager_template_to_organism', source: 'voyager_template_dashboard', target: 'voyager_organism_metrics_grid', type: 'implements', strength: 0.9 },
  { id: 'voyager_template_to_organism2', source: 'voyager_template_dashboard', target: 'voyager_organism_filter_panel', type: 'implements', strength: 0.8 },
  { id: 'voyager_template2_to_organism', source: 'voyager_template_widget', target: 'voyager_organism_metrics_grid', type: 'implements', strength: 0.8 },
  { id: 'voyager_organism_to_molecules', source: 'voyager_organism_metrics_grid', target: 'voyager_molecule_chart_widget', type: 'implements', strength: 0.9 },
  { id: 'voyager_organism_to_molecules2', source: 'voyager_organism_metrics_grid', target: 'voyager_molecule_metric_card', type: 'implements', strength: 0.9 },
  { id: 'voyager_organism2_to_molecules', source: 'voyager_organism_filter_panel', target: 'voyager_atom_filter_dropdown', type: 'implements', strength: 1 },
  { id: 'voyager_molecule_to_atoms', source: 'voyager_molecule_chart_widget', target: 'voyager_atom_chart_canvas', type: 'implements', strength: 1 },

  // Architecture hierarchy
  { id: 'voyager_layer_ux_to_gateway', source: 'voyager_layer_ux', target: 'voyager_layer_gateway', type: 'requires', strength: 1 },
  { id: 'voyager_layer_gateway_to_data', source: 'voyager_layer_gateway', target: 'voyager_layer_data', type: 'requires', strength: 1 },
  { id: 'voyager_layer_gateway_to_identity', source: 'voyager_layer_gateway', target: 'voyager_service_identity', type: 'implements', strength: 0.9 },
  { id: 'voyager_layer_gateway_to_api_key', source: 'voyager_layer_gateway', target: 'voyager_service_api_key', type: 'implements', strength: 0.8 },
  { id: 'voyager_layer_data_to_analytics', source: 'voyager_layer_data', target: 'voyager_service_analytics', type: 'implements', strength: 1 },
  { id: 'voyager_service_to_entity', source: 'voyager_service_identity', target: 'voyager_entity_sso_provider', type: 'requires', strength: 1 },
  { id: 'voyager_service_to_entity2', source: 'voyager_service_api_key', target: 'voyager_entity_gateway', type: 'realizes', strength: 1 },
  { id: 'voyager_service_to_entity3', source: 'voyager_service_analytics', target: 'voyager_entity_vue_microfrontend', type: 'realizes', strength: 0.8 },

  // Code hierarchy - Frontend
  { id: 'voyager_fe_app_to_module', source: 'voyager_frontend_app', target: 'voyager_frontend_module_auth', type: 'implements', strength: 0.8 },
  { id: 'voyager_fe_app_to_module2', source: 'voyager_frontend_app', target: 'voyager_frontend_module_dashboard', type: 'implements', strength: 1 },
  { id: 'voyager_fe_module_to_composable', source: 'voyager_frontend_module_auth', target: 'voyager_frontend_composable_auth', type: 'implements', strength: 1 },
  { id: 'voyager_fe_module2_to_component', source: 'voyager_frontend_module_dashboard', target: 'voyager_frontend_component_dashboard', type: 'implements', strength: 0.9 },
  { id: 'voyager_fe_module2_to_component2', source: 'voyager_frontend_module_dashboard', target: 'voyager_frontend_component_chart', type: 'implements', strength: 0.9 },
  { id: 'voyager_fe_module2_to_composable', source: 'voyager_frontend_module_dashboard', target: 'voyager_frontend_composable_metrics', type: 'implements', strength: 1 },
  { id: 'voyager_fe_component_to_composable', source: 'voyager_frontend_component_dashboard', target: 'voyager_frontend_composable_auth', type: 'requires', strength: 1 },
  { id: 'voyager_fe_component_to_composable2', source: 'voyager_frontend_component_dashboard', target: 'voyager_frontend_composable_metrics', type: 'requires', strength: 1 },
  { id: 'voyager_fe_component2_to_composable', source: 'voyager_frontend_component_chart', target: 'voyager_frontend_composable_metrics', type: 'requires', strength: 1 },
  { id: 'voyager_fe_composable_to_state', source: 'voyager_frontend_composable_auth', target: 'voyager_frontend_state_user', type: 'manages', strength: 1 },
  { id: 'voyager_fe_composable2_to_state', source: 'voyager_frontend_composable_metrics', target: 'voyager_frontend_state_metrics', type: 'manages', strength: 1 },

  // Code hierarchy - Backend
  { id: 'voyager_be_app_to_module', source: 'voyager_backend_app', target: 'voyager_backend_module_auth', type: 'implements', strength: 0.8 },
  { id: 'voyager_be_app_to_module2', source: 'voyager_backend_app', target: 'voyager_backend_module_analytics', type: 'implements', strength: 1 },
  { id: 'voyager_be_module_to_handler', source: 'voyager_backend_module_auth', target: 'voyager_backend_class_callback_handler', type: 'implements', strength: 1 },
  { id: 'voyager_be_module2_to_service', source: 'voyager_backend_module_analytics', target: 'voyager_backend_class_analytics_service', type: 'implements', strength: 1 },
  { id: 'voyager_be_handler_to_functions', source: 'voyager_backend_class_callback_handler', target: 'voyager_backend_function_redirect_sso', type: 'implements', strength: 0.8 },
  { id: 'voyager_be_handler_to_functions2', source: 'voyager_backend_class_callback_handler', target: 'voyager_backend_function_handle_callback', type: 'implements', strength: 1 },
  { id: 'voyager_be_handler_to_functions3', source: 'voyager_backend_class_callback_handler', target: 'voyager_backend_function_exchange_token', type: 'implements', strength: 1 },
  { id: 'voyager_be_service_to_functions', source: 'voyager_backend_class_analytics_service', target: 'voyager_backend_function_get_metrics', type: 'implements', strength: 1 },

  // Code hierarchy - Data
  { id: 'voyager_data_app_to_module', source: 'voyager_data_app', target: 'voyager_data_module_metrics', type: 'implements', strength: 1 },
  { id: 'voyager_data_module_to_index', source: 'voyager_data_module_metrics', target: 'voyager_data_index_user_metrics', type: 'implements', strength: 1 },
  { id: 'voyager_data_index_to_query', source: 'voyager_data_index_user_metrics', target: 'voyager_data_query_aggregation', type: 'implements', strength: 1 },

  // Cross-ontology relationships
  { id: 'voyager_functional_to_arch', source: 'voyager_step_code_exchange', target: 'voyager_service_identity', type: 'validates', strength: 1 },
  { id: 'voyager_functional_to_code', source: 'voyager_action_exchange_code', target: 'voyager_backend_function_exchange_token', type: 'triggers', strength: 1 },
  { id: 'voyager_design_to_code', source: 'voyager_page_dashboard', target: 'voyager_frontend_component_dashboard', type: 'renders', strength: 1 },
  { id: 'voyager_arch_to_code', source: 'voyager_service_identity', target: 'voyager_backend_class_callback_handler', type: 'realizes', strength: 1 },
  { id: 'voyager_arch_to_code2', source: 'voyager_service_analytics', target: 'voyager_backend_class_analytics_service', type: 'realizes', strength: 1 },
  { id: 'voyager_code_to_code', source: 'voyager_backend_class_analytics_service', target: 'voyager_data_index_user_metrics', type: 'requires', strength: 1 },
  
  // Architecture UX layer to frontend code
  { id: 'voyager_ux_layer_to_frontend', source: 'voyager_layer_ux', target: 'voyager_frontend_app', type: 'realizes', strength: 1 },

  // ==========================================================================
  // CROSS-PRODUCT INCONSISTENCIES AND RELATIONSHIPS
  // ==========================================================================
  
  // Authentication method inconsistencies
  { id: 'phoenix_vs_apollo_auth_method', source: 'phoenix_action_enter_username', target: 'apollo_action_enter_email', type: 'implements', strength: 0.6, inconsistent: true },
  { id: 'apollo_vs_voyager_auth_method', source: 'apollo_step_2fa_verification', target: 'voyager_step_sso_auth', type: 'implements', strength: 0.4, inconsistent: true },
  { id: 'phoenix_vs_voyager_auth_method', source: 'phoenix_scenario_basic_login', target: 'voyager_scenario_sso_auth', type: 'implements', strength: 0.3, inconsistent: true },

  // Password hashing inconsistencies
  { id: 'phoenix_vs_apollo_hashing', source: 'phoenix_backend_function_password_hash', target: 'apollo_backend_function_password_hash', type: 'implements', strength: 0.4, inconsistent: true },

  // Technology inconsistencies
  { id: 'phoenix_vs_apollo_frontend', source: 'phoenix_frontend_app', target: 'apollo_frontend_app', type: 'implements', strength: 0.5, inconsistent: true },
  { id: 'apollo_vs_voyager_frontend', source: 'apollo_frontend_app', target: 'voyager_frontend_app', type: 'implements', strength: 0.6, inconsistent: true },
  { id: 'phoenix_vs_voyager_backend', source: 'phoenix_backend_app', target: 'voyager_backend_app', type: 'implements', strength: 0.4, inconsistent: true },

  // Database inconsistencies
  { id: 'phoenix_vs_apollo_database', source: 'phoenix_data_app', target: 'apollo_data_app', type: 'implements', strength: 0.5, inconsistent: true },
  { id: 'apollo_vs_voyager_database', source: 'apollo_data_app', target: 'voyager_data_app', type: 'implements', strength: 0.3, inconsistent: true },

  // Design pattern inconsistencies
  { id: 'phoenix_vs_apollo_button', source: 'phoenix_atom_login_button', target: 'apollo_atom_primary_button', type: 'implements', strength: 0.7, inconsistent: true },
  { id: 'phoenix_vs_apollo_validation', source: 'phoenix_frontend_function_validation', target: 'apollo_frontend_function_handle_submit', type: 'implements', strength: 0.6, inconsistent: true },

  // Architecture pattern inconsistencies
  { id: 'phoenix_vs_apollo_architecture', source: 'phoenix_layer_ux', target: 'apollo_layer_ux', type: 'implements', strength: 0.5, inconsistent: true },
  { id: 'apollo_vs_voyager_architecture', source: 'apollo_layer_ux', target: 'voyager_layer_ux', type: 'implements', strength: 0.6, inconsistent: true },

  // State management inconsistencies
  { id: 'phoenix_vs_apollo_state', source: 'phoenix_frontend_state_username', target: 'apollo_frontend_state_email', type: 'implements', strength: 0.7, inconsistent: true },
  { id: 'apollo_vs_voyager_state', source: 'apollo_frontend_state_loading', target: 'voyager_frontend_state_user', type: 'implements', strength: 0.4, inconsistent: true },

  // Session management inconsistencies
  { id: 'phoenix_vs_apollo_session', source: 'phoenix_backend_function_session_create', target: 'apollo_backend_function_jwt_generation', type: 'implements', strength: 0.5, inconsistent: true },
  { id: 'apollo_vs_voyager_session', source: 'apollo_backend_property_jwt_token', target: 'voyager_backend_property_access_token', type: 'implements', strength: 0.8, inconsistent: true },

  // Missing cross-ontology relationships (Phoenix)
  { id: 'phoenix_scenario_to_flow', source: 'phoenix_scenario_basic_login', target: 'phoenix_flow_login', type: 'implements', strength: 1 },
  { id: 'phoenix_username_action_to_atom', source: 'phoenix_action_enter_username', target: 'phoenix_atom_username_input', type: 'realizes', strength: 1 },
  { id: 'phoenix_password_action_to_atom', source: 'phoenix_action_enter_password', target: 'phoenix_atom_password_input', type: 'realizes', strength: 1 },

  // Missing cross-ontology relationships (Apollo)
  { id: 'apollo_email_action_to_atom', source: 'apollo_action_enter_email', target: 'apollo_atom_email_input', type: 'realizes', strength: 1 },
  { id: 'apollo_password_action_to_atom', source: 'apollo_action_enter_password', target: 'apollo_atom_password_input', type: 'realizes', strength: 1 },
  { id: 'apollo_otp_action_to_atom', source: 'apollo_action_enter_otp', target: 'apollo_atom_otp_input', type: 'realizes', strength: 1 },
  { id: 'apollo_2fa_action_to_button', source: 'apollo_action_submit_2fa', target: 'apollo_atom_primary_button', type: 'realizes', strength: 1 },

  // Design atoms to code components
  { id: 'apollo_email_atom_to_component', source: 'apollo_atom_email_input', target: 'apollo_frontend_component_login_form', type: 'renders', strength: 1 },
  { id: 'apollo_password_atom_to_component', source: 'apollo_atom_password_input', target: 'apollo_frontend_component_login_form', type: 'renders', strength: 1 },
  { id: 'apollo_otp_atom_to_component', source: 'apollo_atom_otp_input', target: 'apollo_frontend_component_2fa_form', type: 'renders', strength: 1 },
  { id: 'apollo_button_to_login_component', source: 'apollo_atom_primary_button', target: 'apollo_frontend_component_login_form', type: 'renders', strength: 0.8 },
  { id: 'apollo_button_to_2fa_component', source: 'apollo_atom_primary_button', target: 'apollo_frontend_component_2fa_form', type: 'renders', strength: 0.8 },

  // Design atoms to granular React elements
  { id: 'apollo_email_atom_to_element', source: 'apollo_atom_email_input', target: 'apollo_frontend_element_email_input', type: 'renders', strength: 1 },
  { id: 'apollo_password_atom_to_element', source: 'apollo_atom_password_input', target: 'apollo_frontend_element_password_input', type: 'renders', strength: 1 },
  { id: 'apollo_otp_atom_to_element', source: 'apollo_atom_otp_input', target: 'apollo_frontend_element_otp_input', type: 'renders', strength: 1 },
  { id: 'apollo_button_atom_to_element', source: 'apollo_atom_primary_button', target: 'apollo_frontend_element_submit_button', type: 'renders', strength: 1 },

  // Missing cross-ontology relationships (Voyager)
  { id: 'voyager_filter_action_to_atom', source: 'voyager_action_filter_data', target: 'voyager_atom_filter_dropdown', type: 'realizes', strength: 1 },
  { id: 'voyager_chart_atom_to_component', source: 'voyager_atom_chart_canvas', target: 'voyager_frontend_component_chart', type: 'renders', strength: 1 },
  { id: 'voyager_filter_atom_to_component', source: 'voyager_atom_filter_dropdown', target: 'voyager_frontend_component_dashboard', type: 'renders', strength: 1 }
];

// =============================================================================
// CONFIGURATION MERGING - COMBINES BASE DATA WITH CUSTOM CONFIG
// =============================================================================

// Apply node modifications
const baseNodes = [...phoenixNodes, ...apolloNodes, ...voyagerNodes];
const modifiedBaseNodes = baseNodes.map(node => {
  const modifications = nodeModifications[node.id];
  return modifications ? { ...node, ...modifications } : node;
});

// Apply edge modifications  
const modifiedBaseEdges = ontologyEdges.map(edge => {
  const modifications = edgeModifications[edge.id];
  return modifications ? { ...edge, ...modifications } : edge;
});

// Combine all data sources
const finalNodes = [...modifiedBaseNodes, ...customNodes];
const finalEdges = [...modifiedBaseEdges, ...customEdges, ...commonMissingEdges];

// Validate configuration
const validationErrors = validateConfiguration(finalNodes, finalEdges);
if (validationErrors.length > 0) {
  console.warn('Ontology configuration validation errors:', validationErrors);
}

// Combined exports for easy consumption
export const allNodes = finalNodes;
export const allEdges = finalEdges;

// Summary statistics
export const ontologyStats = {
  totalNodes: allNodes.length,
  totalEdges: allEdges.length,
  nodesByProduct: {
    phoenix: phoenixNodes.length,
    apollo: apolloNodes.length,
    voyager: voyagerNodes.length
  },
  nodesByType: {
    functional: allNodes.filter(n => n.type === 'functional').length,
    design: allNodes.filter(n => n.type === 'design').length,
    architecture: allNodes.filter(n => n.type === 'architecture').length,
    code: allNodes.filter(n => n.type === 'code').length
  },
  inconsistentEdges: allEdges.filter(e => e.inconsistent).length
};