---
title: Demo Implementation Plan
---
# Breeze AI UI Rationalization Demo - Implementation Guide

## Project Overview

This document provides detailed specifications for implementing an interactive demonstration of Breeze AI's four-ontology framework for UI/UX rationalization across enterprise product portfolios.

## Technical Stack

- **Frontend**: React 18+ with TypeScript
- **Visualization**: D3.js v7 for graph rendering
- **UI Components**: Custom design system components
- **State Management**: React Context + useReducer
- **Styling**: Tailwind CSS
- **Code Display**: Monaco Editor for code diff visualization

## Data Structure

### Ontology Node Structure

```typescript
interface OntologyNode {
  id: string;
  type: 'functional' | 'design' | 'architecture' | 'code';
  level: string; // e.g., 'persona', 'outcomes', 'scenarios', etc.
  name: string;
  description: string;
  properties: Record<string, any>;
  product: 'phoenix' | 'apollo' | 'voyager';
  coordinates?: { x: number; y: number };
  inconsistencies?: string[];
}

interface OntologyEdge {
  id: string;
  source: string;
  target: string;
  type: 'implements' | 'supports' | 'requires' | 'triggers' | 'validates' | 'realizes' | 'renders';
  strength: number; // 0-1, for visualization weight
  inconsistent?: boolean;
}
```

### Sample Data Sets

#### Phoenix CRM Ontology Nodes

```typescript
const phoenixNodes: OntologyNode[] = [
  // Functional Ontology
  {
    id: 'phoenix_persona_sysadmin',
    type: 'functional',
    level: 'persona',
    name: 'System Administrator',
    description: 'Internal staff managing customer data and orders',
    properties: { access_level: 'internal', security_clearance: 'high' },
    product: 'phoenix'
  },
  {
    id: 'phoenix_outcome_access',
    type: 'functional',
    level: 'outcomes',
    name: 'Access System',
    description: 'Gain authenticated access to CRM system',
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
    name: 'login.php',
    description: 'Server-rendered login page',
    properties: { rendering: 'server', framework: 'php' },
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
```

#### Apollo Launchpad Ontology Nodes

```typescript
const apolloNodes: OntologyNode[] = [
  // Functional Ontology
  {
    id: 'apollo_persona_shopper',
    type: 'functional',
    level: 'persona',
    name: 'E-commerce Shopper',
    description: 'External customer making purchases',
    properties: { access_level: 'external', security_clearance: 'standard' },
    product: 'apollo'
  },
  {
    id: 'apollo_outcome_purchase',
    type: 'functional',
    level: 'outcomes',
    name: 'Complete Purchase',
    description: 'Successfully authenticate to make purchases',
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
  }
];
```

#### Voyager Analytics Ontology Nodes

```typescript
const voyagerNodes: OntologyNode[] = [
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
    id: 'voyager_outcome_retrieve_data',
    type: 'functional',
    level: 'outcomes',
    name: 'Retrieve Product Data',
    description: 'Access analytics dashboard and data',
    properties: { session_duration: 'until_token_expiry', multi_factor: false },
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
    id: 'voyager_flow_sso_auth',
    type: 'design',
    level: 'flows',
    name: 'SSO Authentication Flow',
    description: 'OAuth2/OIDC authentication flow',
    properties: { pages: 3, external_redirects: 2 },
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
    id: 'voyager_organism_auth_response',
    type: 'design',
    level: 'organisms',
    name: 'Auth Response',
    description: 'SSO authentication response structure',
    properties: { format: 'json', tokens: ['access_token', 'id_token'] },
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
    id: 'voyager_atom_access_token',
    type: 'design',
    level: 'atoms',
    name: 'Access Token Field',
    description: 'JWT access token',
    properties: { type: 'string', encoding: 'jwt' },
    product: 'voyager'
  },

  // Architecture Ontology
  {
    id: 'voyager_layer_ux',
    type: 'architecture',
    level: 'layers',
    name: 'User Experience Layer',
    description: 'Micro-frontend architecture',
    properties: { technology: 'Multiple', architecture: 'micro_frontend' },
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

  // Code Ontology - Frontend (Limited for SSO)
  {
    id: 'voyager_frontend_app',
    type: 'code',
    level: 'applications',
    name: 'Voyager Analytics Micro-frontend',
    description: 'Analytics dashboard micro-frontend',
    properties: { technology: 'Multiple', deployment: 'kubernetes' },
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
    id: 'voyager_backend_class_callback_handler',
    type: 'code',
    level: 'classes_services',
    name: 'OAuth Callback Handler',
    description: 'Handle SSO provider callbacks',
    properties: { type: 'controller_class', endpoints: ['/auth/callback'] },
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
  }
];
```

### Ontology Edges (Relationships)

```typescript
const ontologyEdges: OntologyEdge[] = [
  // Phoenix CRM Relationships
  // Functional hierarchy
  { id: 'phoenix_persona_to_outcome', source: 'phoenix_persona_sysadmin', target: 'phoenix_outcome_access', type: 'requires', strength: 1 },
  { id: 'phoenix_outcome_to_scenario', source: 'phoenix_outcome_access', target: 'phoenix_scenario_basic_login', type: 'implements', strength: 1 },
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
  { id: 'phoenix_layer_to_service', source: 'phoenix_layer_services', target: 'phoenix_service_auth', type: 'implements', strength: 1 },
  { id: 'phoenix_service_to_entity', source: 'phoenix_service_auth', target: 'phoenix_entity_php_backend', type: 'realizes', strength: 1 },

  // Code hierarchy - Frontend
  { id: 'phoenix_fe_app_to_module', source: 'phoenix_frontend_app', target: 'phoenix_frontend_module_login', type: 'implements', strength: 1 },
  { id: 'phoenix_fe_module_to_component', source: 'phoenix_frontend_module_login', target: 'phoenix_frontend_component_form', type: 'implements', strength: 1 },
  { id: 'phoenix_fe_component_to_function', source: 'phoenix_frontend_component_form', target: 'phoenix_frontend_function_validation', type: 'implements', strength: 1 },

  // Code hierarchy - Backend
  { id: 'phoenix_be_app_to_module', source: 'phoenix_backend_app', target: 'phoenix_backend_module_auth', type: 'implements', strength: 1 },
  { id: 'phoenix_be_module_to_classes', source: 'phoenix_backend_module_auth', target: 'phoenix_backend_class_login', type: 'implements', strength: 1 },
  { id: 'phoenix_be_module_to_classes2', source: 'phoenix_backend_module_auth', target: 'phoenix_backend_class_auth', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions', source: 'phoenix_backend_class_login', target: 'phoenix_backend_function_post_handler', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions2', source: 'phoenix_backend_class_auth', target: 'phoenix_backend_function_password_hash', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions3', source: 'phoenix_backend_class_auth', target: 'phoenix_backend_function_db_query', type: 'implements', strength: 1 },
  { id: 'phoenix_be_class_to_functions4', source: 'phoenix_backend_class_auth', target: 'phoenix_backend_function_session_create', type: 'implements', strength: 1 },

  // Cross-ontology relationships
  { id: 'phoenix_functional_to_design', source: 'phoenix_action_submit_form', target: 'phoenix_atom_login_button', type: 'implements', strength: 1 },
  { id: 'phoenix_functional_to_arch', source: 'phoenix_step_authentication', target: 'phoenix_service_auth', type: 'validates', strength: 1 },
  { id: 'phoenix_functional_to_code', source: 'phoenix_action_submit_form', target: 'phoenix_backend_function_post_handler', type: 'triggers', strength: 1 },
  { id: 'phoenix_design_to_code', source: 'phoenix_page_login', target: 'phoenix_frontend_component_form', type: 'renders', strength: 1 },
  { id: 'phoenix_arch_to_code', source: 'phoenix_service_auth', target: 'phoenix_backend_class_auth', type: 'realizes', strength: 1 },
  { id: 'phoenix_code_to_code', source: 'phoenix_backend_class_auth', target: 'phoenix_data_class_users_table', type: 'requires', strength: 1 },

  // Apollo Launchpad Relationships (similar structure)
  // Functional hierarchy
  { id: 'apollo_persona_to_outcome', source: 'apollo_persona_shopper', target: 'apollo_outcome_purchase', type: 'requires', strength: 1 },
  { id: 'apollo_outcome_to_scenario', source: 'apollo_outcome_purchase', target: 'apollo_scenario_2fa_login', type: 'implements', strength: 1 },
  { id: 'apollo_scenario_to_steps', source: 'apollo_scenario_2fa_login', target: 'apollo_step_authentication', type: 'implements', strength: 1 },
  { id: 'apollo_scenario_to_steps2', source: 'apollo_scenario_2fa_login', target: 'apollo_step_2fa_verification', type: 'implements', strength: 1 },

  // Cross-ontology relationships showing inconsistencies
  { id: 'apollo_vs_phoenix_inconsistency', source: 'apollo_action_enter_email', target: 'phoenix_action_enter_username', type: 'implements', strength: 0.5, inconsistent: true },

  // Voyager Analytics Relationships (SSO flow)
  { id: 'voyager_persona_to_outcome', source: 'voyager_persona_api_consumer', target: 'voyager_outcome_retrieve_data', type: 'requires', strength: 1 },
  { id: 'voyager_outcome_to_scenario', source: 'voyager_outcome_retrieve_data', target: 'voyager_scenario_sso_auth', type: 'implements', strength: 1 },
  { id: 'voyager_functional_to_arch', source: 'voyager_step_code_exchange', target: 'voyager_service_identity', type: 'validates', strength: 1 },
  { id: 'voyager_arch_to_code', source: 'voyager_service_identity', target: 'voyager_backend_class_callback_handler', type: 'realizes', strength: 1 }
];
```

## Target Unified Design System

### Unified Authentication Component Library

```typescript
interface UnifiedDesignSystem {
  // Target Design Ontology
  user_journeys: {
    unified_auth_journey: {
      name: "Unified Authentication Journey",
      description: "Consistent auth experience across all products",
      properties: {
        progressive_enhancement: true,
        accessibility: "wcag_aa",
        responsive: true,
        security_levels: ["basic", "2fa", "sso"]
      }
    }
  },
  
  flows: {
    adaptive_auth_flow: {
      name: "Adaptive Authentication Flow",
      description: "Single flow that adapts to security requirements",
      properties: {
        steps: ["credential_input", "security_verification", "access_granted"],
        branching: {
          basic: ["credential_input", "access_granted"],
          "2fa": ["credential_input", "otp_verification", "access_granted"],
          sso: ["sso_redirect", "token_exchange", "access_granted"]
        }
      }
    }
  },
  
  templates: {
    unified_auth_template: {
      name: "Unified Auth Template",
      description: "Responsive authentication layout",
      properties: {
        layout: "centered_card",
        responsive_breakpoints: ["mobile", "tablet", "desktop"],
        branding_slot: true,
        progress_indicator: true
      }
    }
  },
  
  organisms: {
    adaptive_auth_form: {
      name: "Adaptive Authentication Form",
      description: "Form that adapts to authentication method",
      variants: {
        basic: ["email_password_form"],
        "2fa": ["email_password_form", "otp_verification_form"],
        sso: ["sso_redirect_message"]
      },
      properties: {
        validation: "real_time",
        error_handling: "inline",
        loading_states: true,
        accessibility: "full_keyboard_navigation"
      }
    }
  },
  
  molecules: {
    unified_credential_group: {
      name: "Unified Credential Input Group",
      description: "Standardized credential input with validation",
      variants: {
        email: { label: "Email Address", type: "email", autocomplete: "email" },
        username: { label: "Username", type: "text", autocomplete: "username" },
        password: { label: "Password", type: "password", show_toggle: true }
      }
    },
    
    unified_verification_group: {
      name: "Unified Verification Input Group",
      description: "OTP and verification code input",
      properties: {
        input_type: "numeric",
        length: 6,
        auto_submit: true,
        resend_timer: true
      }
    }
  },
  
  atoms: {
    unified_input: {
      name: "Unified Input Field",
      description: "Standardized input component",
      properties: {
        variants: ["text", "email", "password", "numeric"],
        states: ["default", "focus", "error", "success", "disabled"],
        accessibility: "aria_labeled",
        validation: "built_in"
      }
    },
    
    unified_button: {
      name: "Unified Action Button",
      description: "Consistent button component",
      properties: {
        variants: ["primary", "secondary", "ghost"],
        states: ["default", "hover", "active", "loading", "disabled"],
        sizes: ["small", "medium", "large"],
        icons: "optional"
      }
    }
  }
}
```

## React Component Implementation

### Main Application Structure

```typescript
// App.tsx - Main Application Component
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OntologyProvider } from './contexts/OntologyContext';
import { DemoProvider } from './contexts/DemoContext';
import Dashboard from './components/Dashboard';
import GraphExplorer from './components/GraphExplorer';
import ComponentComparator from './components/ComponentComparator';
import TransformationSimulator from './components/TransformationSimulator';
import './App.css';

const App: React.FC = () => {
  return (
    <OntologyProvider>
      <DemoProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/graph-explorer" element={<GraphExplorer />} />
              <Route path="/component-comparator" element={<ComponentComparator />} />
              <Route path="/transformation" element={<TransformationSimulator />} />
            </Routes>
          </div>
        </Router>
      </DemoProvider>
    </OntologyProvider>
  );
};

export default App;
```

### Context Providers

```typescript
// contexts/OntologyContext.tsx
import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { phoenixNodes, apolloNodes, voyagerNodes, ontologyEdges } from '../data/ontologyData';

interface OntologyState {
  nodes: OntologyNode[];
  edges: OntologyEdge[];
  selectedProduct: 'phoenix' | 'apollo' | 'voyager' | 'all';
  selectedOntology: 'functional' | 'design' | 'architecture' | 'code' | 'all';
  focusedNode: string | null;
  inconsistencies: string[];
}

interface OntologyContextType {
  state: OntologyState;
  dispatch: React.Dispatch<OntologyAction>;
  getFilteredNodes: () => OntologyNode[];
  getFilteredEdges: () => OntologyEdge[];
  getInconsistencyCount: () => number;
}

type OntologyAction = 
  | { type: 'SET_PRODUCT_FILTER'; payload: 'phoenix' | 'apollo' | 'voyager' | 'all' }
  | { type: 'SET_ONTOLOGY_FILTER'; payload: 'functional' | 'design' | 'architecture' | 'code' | 'all' }
  | { type: 'SET_FOCUSED_NODE'; payload: string | null }
  | { type: 'HIGHLIGHT_INCONSISTENCIES'; payload: string[] };

const initialState: OntologyState = {
  nodes: [...phoenixNodes, ...apolloNodes, ...voyagerNodes],
  edges: ontologyEdges,
  selectedProduct: 'all',
  selectedOntology: 'all',
  focusedNode: null,
  inconsistencies: []
};

const ontologyReducer = (state: OntologyState, action: OntologyAction): OntologyState => {
  switch (action.type) {
    case 'SET_PRODUCT_FILTER':
      return { ...state, selectedProduct: action.payload };
    case 'SET_ONTOLOGY_FILTER':
      return { ...state, selectedOntology: action.payload };
    case 'SET_FOCUSED_NODE':
      return { ...state, focusedNode: action.payload };
    case 'HIGHLIGHT_INCONSISTENCIES':
      return { ...state, inconsistencies: action.payload };
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
    
    if (state.selectedOntology !== 'all') {
      filtered = filtered.filter(node => node.type === state.selectedOntology);
    }
    
    return filtered;
  };

  const getFilteredEdges = (): OntologyEdge[] => {
    const filteredNodeIds = new Set(getFilteredNodes().map(node => node.id));
    return state.edges.filter(edge => 
      filteredNodeIds.has(edge.source) && filteredNodeIds.has(edge.target)
    );
  };

  const getInconsistencyCount = (): number => {
    return state.nodes.filter(node => node.inconsistencies && node.inconsistencies.length > 0).length +
           state.edges.filter(edge => edge.inconsistent).length;
  };

  const value: OntologyContextType = {
    state,
    dispatch,
    getFilteredNodes,
    getFilteredEdges,
    getInconsistencyCount
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
```

### Dashboard Component

```typescript
// components/Dashboard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useOntology } from '../contexts/OntologyContext';
import MetricsCard from './common/MetricsCard';
import ProductComparisonChart from './charts/ProductComparisonChart';
import InconsistencyHeatmap from './charts/InconsistencyHeatmap';

const Dashboard: React.FC = () => {
  const { state, getInconsistencyCount } = useOntology();
  
  const totalNodes = state.nodes.length;
  const totalEdges = state.edges.length;
  const inconsistencyCount = getInconsistencyCount();
  const consistencyScore = Math.round(((totalNodes + totalEdges - inconsistencyCount) / (totalNodes + totalEdges)) * 100);

  const productCounts = {
    phoenix: state.nodes.filter(n => n.product === 'phoenix').length,
    apollo: state.nodes.filter(n => n.product === 'apollo').length,
    voyager: state.nodes.filter(n => n.product === 'voyager').length
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Breeze AI - UI Rationalization Analysis</h1>
        <p>Enterprise Authentication Portfolio Overview</p>
      </header>

      <div className="metrics-grid">
        <MetricsCard
          title="Portfolio Consistency Score"
          value={`${consistencyScore}%`}
          trend={consistencyScore > 75 ? 'up' : 'down'}
          description="Overall alignment across ontologies"
        />
        <MetricsCard
          title="Total Components"
          value={totalNodes.toString()}
          description="Nodes across all four ontologies"
        />
        <MetricsCard
          title="Inconsistencies Detected"
          value={inconsistencyCount.toString()}
          trend="down"
          description="Components requiring rationalization"
        />
        <MetricsCard
          title="Products Analyzed"
          value="3"
          description="Phoenix CRM, Apollo Launchpad, Voyager Analytics"
        />
      </div>

      <div className="dashboard-content">
        <div className="analysis-section">
          <h2>Product Portfolio Analysis</h2>
          <div className="analysis-grid">
            <div className="chart-container">
              <h3>Component Distribution by Product</h3>
              <ProductComparisonChart data={productCounts} />
            </div>
            <div className="chart-container">
              <h3>Inconsistency Heatmap</h3>
              <InconsistencyHeatmap />
            </div>
          </div>
        </div>

        <div className="navigation-section">
          <h2>Interactive Analysis Tools</h2>
          <div className="tool-grid">
            <Link to="/graph-explorer" className="tool-card">
              <h3>Ontology Graph Explorer</h3>
              <p>Explore the complete four-ontology graph structure with filtering and drill-down capabilities</p>
              <span className="tool-badge">Interactive</span>
            </Link>
            <Link to="/component-comparator" className="tool-card">
              <h3>Component Comparator</h3>
              <p>Side-by-side comparison of authentication components across products</p>
              <span className="tool-badge">Analysis</span>
            </Link>
            <Link to="/transformation" className="tool-card">
              <h3>Rationalization Simulator</h3>
              <p>Simulate the transformation to unified design system with impact analysis</p>
              <span className="tool-badge">Planning</span>
            </Link>
          </div>
        </div>

        <div className="business-impact-section">
          <h2>Business Impact Projection</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <h4>Development Efficiency</h4>
              <div className="impact-metric">60% faster</div>
              <p>Reduced authentication development time through component reuse</p>
            </div>
            <div className="impact-card">
              <h4>Maintenance Cost</h4>
              <div className="impact-metric">80% reduction</div>
              <p>Unified codebase eliminates duplicate maintenance overhead</p>
            </div>
            <div className="impact-card">
              <h4>User Experience</h4>
              <div className="impact-metric">Consistent</div>
              <p>Standardized authentication flow across all products</p>
            </div>
            <div className="impact-card">
              <h4>Security Compliance</h4>
              <div className="impact-metric">Centralized</div>
              <p>Single source of truth for security patterns and updates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

### Graph Explorer Component

```typescript
// components/GraphExplorer.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { useOntology } from '../contexts/OntologyContext';
import FilterPanel from './common/FilterPanel';
import NodeDetailsPanel from './common/NodeDetailsPanel';

const GraphExplorer: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const { state, dispatch, getFilteredNodes, getFilteredEdges } = useOntology();
  const [selectedNode, setSelectedNode] = useState<OntologyNode | null>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const nodes = getFilteredNodes();
    const edges = getFilteredEdges();

    // Clear previous visualization
    d3.select(svgRef.current).selectAll("*").remove();

    const width = 1200;
    const height = 800;
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Create force simulation
    const simulation = d3.forceSimulation(nodes as any)
      .force("link", d3.forceLink(edges).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-300))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30));

    // Create links
    const link = svg.append("g")
      .selectAll("line")
      .data(edges)
      .enter()
      .append("line")
      .attr("stroke", d => d.inconsistent ? "#ef4444" : "#6b7280")
      .attr("stroke-width", d => d.strength * 3)
      .attr("stroke-dasharray", d => d.inconsistent ? "5,5" : "none");

    // Create nodes
    const node = svg.append("g")
      .selectAll("circle")
      .data(nodes)
      .enter()
      .append("circle")
      .attr("r", 20)
      .attr("fill", d => getNodeColor(d))
      .attr("stroke", d => d.inconsistencies && d.inconsistencies.length > 0 ? "#ef4444" : "#fff")
      .attr("stroke-width", d => d.inconsistencies && d.inconsistencies.length > 0 ? 3 : 2)
      .call(d3.drag<SVGCircleElement, OntologyNode>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .on("click", (event, d) => {
        setSelectedNode(d);
        dispatch({ type: 'SET_FOCUSED_NODE', payload: d.id });
      });

    // Add labels
    const label = svg.append("g")
      .selectAll("text")
      .data(nodes)
      .enter()
      .append("text")
      .text(d => d.name)
      .attr("font-size", "12px")
      .attr("text-anchor", "middle")
      .attr("dy", 4);

    // Update positions on simulation tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node
        .attr("cx", (d: any) => d.x)
        .attr("cy", (d: any) => d.y);

      label
        .attr("x", (d: any) => d.x)
        .attr("y", (d: any) => d.y);
    });

    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: any, d: any) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [state.selectedProduct, state.selectedOntology, getFilteredNodes, getFilteredEdges]);

  const getNodeColor = (node: OntologyNode): string => {
    const colors = {
      functional: "#3b82f6",  // blue
      design: "#8b5cf6",      // purple
      architecture: "#10b981", // green
      code: "#f59e0b"         // orange
    };
    return colors[node.type];
  };

  return (
    <div className="graph-explorer">
      <div className="explorer-header">
        <h1>Ontology Graph Explorer</h1>
        <p>Interactive visualization of the four-ontology framework</p>
      </div>

      <div className="explorer-content">
        <div className="explorer-sidebar">
          <FilterPanel />
          {selectedNode && (
            <NodeDetailsPanel 
              node={selectedNode} 
              onClose={() => setSelectedNode(null)} 
            />
          )}
        </div>

        <div className="graph-container">
          <div className="graph-legend">
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#3b82f6" }}></div>
              <span>Functional</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#8b5cf6" }}></div>
              <span>Design</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#10b981" }}></div>
              <span>Architecture</span>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{ backgroundColor: "#f59e0b" }}></div>
              <span>Code</span>
            </div>
            <div className="legend-item">
              <div className="legend-line inconsistent"></div>
              <span>Inconsistency</span>
            </div>
          </div>
          
          <svg ref={svgRef} className="ontology-graph"></svg>
        </div>
      </div>
    </div>
  );
};

export default GraphExplorer;
```

### Component Comparator

```typescript
// components/ComponentComparator.tsx
import React, { useState } from 'react';
import { useOntology } from '../contexts/OntologyContext';
import CodeDiffViewer from './common/CodeDiffViewer';
import ComponentPreview from './common/ComponentPreview';

const ComponentComparator: React.FC = () => {
  const { state } = useOntology();
  const [selectedComponent, setSelectedComponent] = useState<string>('login_form');
  
  const componentTypes = [
    { id: 'login_form', name: 'Login Form', description: 'Main authentication form' },
    { id: 'input_field', name: 'Input Field', description: 'Text input components' },
    { id: 'button', name: 'Action Button', description: 'Submit and action buttons' },
    { id: 'validation', name: 'Validation', description: 'Error handling and validation' }
  ];

  const getComponentsByType = (type: string) => {
    return state.nodes.filter(node => 
      node.name.toLowerCase().includes(type.replace('_', ' ')) ||
      node.description.toLowerCase().includes(type.replace('_', ' '))
    );
  };

  const getTargetComponent = (type: string) => {
    // Return target unified component specification
    const targetComponents = {
      login_form: {
        name: 'Unified Authentication Form',
        description: 'Adaptive form supporting basic, 2FA, and SSO authentication',
        properties: {
          responsive: true,
          accessibility: 'WCAG AA',
          validation: 'real-time',
          progressive_enhancement: true
        },
        code: `// UnifiedAuthForm.tsx
import React, { useState } from 'react';
import { UnifiedInput, UnifiedButton } from '@company/design-system';
import { useAuth } from '../hooks/useAuth';

interface UnifiedAuthFormProps {
  authType: 'basic' | '2fa' | 'sso';
  onSuccess: (token: string) => void;
}

export const UnifiedAuthForm: React.FC<UnifiedAuthFormProps> = ({
  authType,
  onSuccess
}) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const { authenticate } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const result = await authenticate(credentials, authType);
      onSuccess(result.token);
    } catch (error) {
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="unified-auth-form">
      <UnifiedInput
        type="email"
        label="Email Address"
        value={credentials.email}
        onChange={(value) => setCredentials(prev => ({ ...prev, email: value }))}
        required
        autoComplete="email"
      />
      
      <UnifiedInput
        type="password"
        label="Password"
        value={credentials.password}
        onChange={(value) => setCredentials(prev => ({ ...prev, password: value }))}
        required
        showToggle
        autoComplete="current-password"
      />
      
      <UnifiedButton
        type="submit"
        variant="primary"
        loading={loading}
        fullWidth
      >
        Sign In
      </UnifiedButton>
    </form>
  );
};`
      }
    };
    
    return targetComponents[type as keyof typeof targetComponents];
  };

  const currentComponents = getComponentsByType(selectedComponent);
  const targetComponent = getTargetComponent(selectedComponent);

  return (
    <div className="component-comparator">
      <div className="comparator-header">
        <h1>Component Rationalization Analysis</h1>
        <p>Compare current implementations with target unified design system</p>
      </div>

      <div className="component-selector">
        <h2>Select Component Type</h2>
        <div className="component-tabs">
          {componentTypes.map(type => (
            <button
              key={type.id}
              className={`tab ${selectedComponent === type.id ? 'active' : ''}`}
              onClick={() => setSelectedComponent(type.id)}
            >
              <div className="tab-name">{type.name}</div>
              <div className="tab-description">{type.description}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="comparison-grid">
        <div className="current-implementations">
          <h3>Current Implementations</h3>
          <div className="implementation-cards">
            {['phoenix', 'apollo', 'voyager'].map(product => {
              const productComponents = currentComponents.filter(c => c.product === product);
              return (
                <div key={product} className="product-card">
                  <h4>{product.charAt(0).toUpperCase() + product.slice(1)}</h4>
                  <div className="component-list">
                    {productComponents.map(component => (
                      <div key={component.id} className="component-item">
                        <div className="component-name">{component.name}</div>
                        <div className="component-properties">
                          {Object.entries(component.properties).map(([key, value]) => (
                            <span key={key} className="property-tag">
                              {key}: {String(value)}
                            </span>
                          ))}
                        </div>
                        {component.inconsistencies && (
                          <div className="inconsistencies">
                            <span className="inconsistency-badge">
                              {component.inconsistencies.length} issues
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="target-implementation">
          <h3>Target Unified Component</h3>
          {targetComponent && (
            <div className="target-card">
              <div className="target-header">
                <h4>{targetComponent.name}</h4>
                <p>{targetComponent.description}</p>
              </div>
              
              <div className="target-properties">
                <h5>Properties</h5>
                {Object.entries(targetComponent.properties).map(([key, value]) => (
                  <div key={key} className="property-row">
                    <span className="property-key">{key}:</span>
                    <span className="property-value">{String(value)}</span>
                  </div>
                ))}
              </div>

              <div className="target-code">
                <h5>Implementation Preview</h5>
                <CodeDiffViewer
                  originalCode="// Current fragmented implementations..."
                  unifiedCode={targetComponent.code}
                  language="typescript"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="rationalization-impact">
        <h3>Rationalization Impact Analysis</h3>
        <div className="impact-metrics">
          <div className="metric-card">
            <div className="metric-value">3 → 1</div>
            <div className="metric-label">Implementations</div>
            <div className="metric-description">Consolidate to single component</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">-67%</div>
            <div className="metric-label">Code Maintenance</div>
            <div className="metric-description">Reduced maintenance overhead</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">100%</div>
            <div className="metric-label">Consistency</div>
            <div className="metric-description">Unified user experience</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">+40%</div>
            <div className="metric-label">Accessibility</div>
            <div className="metric-description">WCAG AA compliance</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentComparator;
```

## CSS Styling Framework

```css
/* App.css - Main Application Styles */
.app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  color: #1f2937;
  background-color: #f9fafb;
  min-height: 100vh;
}

/* Dashboard Styles */
.dashboard {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.dashboard-header {
  text-align: center;
  margin-bottom: 3rem;
}

.dashboard-header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
}

.dashboard-header p {
  font-size: 1.125rem;
  color: #6b7280;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.metrics-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.metrics-card h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.metrics-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.25rem;
}

.metrics-value.trend-up {
  color: #059669;
}

.metrics-value.trend-down {
  color: #dc2626;
}

.metrics-description {
  font-size: 0.875rem;
  color: #6b7280;
}

/* Analysis Section */
.analysis-section {
  margin-bottom: 3rem;
}

.analysis-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.chart-container {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.chart-container h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Navigation Section */
.navigation-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.tool-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.tool-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  transition: all 0.2s ease;
  position: relative;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-color: #3b82f6;
}

.tool-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.tool-card p {
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.tool-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #3b82f6;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Business Impact Section */
.business-impact-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.impact-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 1.5rem;
  text-align: center;
}

.impact-card h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.impact-metric {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.impact-card p {
  font-size: 0.875rem;
  opacity: 0.8;
  line-height: 1.4;
}

/* Graph Explorer Styles */
.graph-explorer {
  padding: 2rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.explorer-header {
  text-align: center;
  margin-bottom: 2rem;
}

.explorer-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.explorer-content {
  display: flex;
  flex: 1;
  gap: 2rem;
  min-height: 0;
}

.explorer-sidebar {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.graph-container {
  flex: 1;
  background: white;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  position: relative;
  overflow: hidden;
}

.graph-legend {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: rgba(255, 255, 255, 0.95);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 50%;
}

.legend-line {
  width: 20px;
  height: 2px;
  background: #6b7280;
}

.legend-line.inconsistent {
  background: #ef4444;
  background-image: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 2px,
    #ef4444 2px,
    #ef4444 4px
  );
}

.ontology-graph {
  width: 100%;
  height: 100%;
  cursor: grab;
}

.ontology-graph:active {
  cursor: grabbing;
}

/* Filter Panel Styles */
.filter-panel {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.filter-panel h3 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.filter-group {
  margin-bottom: 1.5rem;
}

.filter-group:last-child {
  margin-bottom: 0;
}

.filter-group label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}

.filter-select {
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  background: white;
  font-size: 0.875rem;
}

.filter-select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Node Details Panel */
.node-details-panel {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
  max-height: 400px;
  overflow-y: auto;
}

.node-details-header {
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.node-details-header h3 {
  font-size: 1.125rem;
  font-weight: 600;
  flex: 1;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #6b7280;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button:hover {
  color: #374151;
}

.node-type-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.node-type-badge.functional {
  background: #dbeafe;
  color: #1d4ed8;
}

.node-type-badge.design {
  background: #ede9fe;
  color: #7c3aed;
}

.node-type-badge.architecture {
  background: #d1fae5;
  color: #065f46;
}

.node-type-badge.code {
  background: #fef3c7;
  color: #92400e;
}

.node-properties {
  margin-bottom: 1rem;
}

.node-properties h4 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.property-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.property-item {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  border-bottom: 1px solid #f3f4f6;
  font-size: 0.875rem;
}

.property-key {
  font-weight: 500;
  color: #374151;
}

.property-value {
  color: #6b7280;
}

.inconsistencies {
  margin-top: 1rem;
}

.inconsistencies h4 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #dc2626;
  margin-bottom: 0.5rem;
}

.inconsistency-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.inconsistency-item {
  background: #fef2f2;
  color: #dc2626;
  padding: 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
}

/* Component Comparator Styles */
.component-comparator {
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
}

.comparator-header {
  text-align: center;
  margin-bottom: 3rem;
}

.comparator-header h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.component-selector {
  margin-bottom: 3rem;
}

.component-selector h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.component-tabs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.tab {
  background: white;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  padding: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.tab:hover {
  border-color: #3b82f6;
}

.tab.active {
  border-color: #3b82f6;
  background: #eff6ff;
}

.tab-name {
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.tab-description {
  font-size: 0.875rem;
  color: #6b7280;
}

.comparison-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
}

.current-implementations h3,
.target-implementation h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.implementation-cards {
  display: grid;
  gap: 1rem;
}

.product-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.product-card h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: capitalize;
}

.component-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.component-item {
  background: #f9fafb;
  border-radius: 8px;
  padding: 1rem;
}

.component-name {
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.component-properties {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}

.property-tag {
  background: #e5e7eb;
  color: #374151;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
}

.inconsistencies {
  margin-top: 0.5rem;
}

.inconsistency-badge {
  background: #fef2f2;
  color: #dc2626;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: 500;
}

.target-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.target-header h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #059669;
}

.target-header p {
  color: #6b7280;
  margin-bottom: 1rem;
}

.target-properties {
  margin-bottom: 1.5rem;
}

.target-properties h5 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.property-row {
  display: flex;
  justify-content: space-between;
  padding: 0.25rem 0;
  font-size: 0.875rem;
}

.property-key {
  font-weight: 500;
  color: #374151;
}

.property-value {
  color: #6b7280;
}

.target-code h5 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.rationalization-impact {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid #e5e7eb;
}

.rationalization-impact h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.impact-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
}

.metric-card {
  text-align: center;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 12px;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  opacity: 0.9;
}

.metric-description {
  font-size: 0.75rem;
  opacity: 0.8;
  line-height: 1.3;
}

/* Code Diff Viewer */
.code-diff-viewer {
  background: #1f2937;
  border-radius: 8px;
  overflow: hidden;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
}

.diff-header {
  background: #374151;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.diff-title {
  color: #f9fafb;
  font-size: 0.875rem;
  font-weight: 500;
}

.diff-toggle {
  display: flex;
  background: #4b5563;
  border-radius: 6px;
  overflow: hidden;
}

.diff-toggle button {
  background: none;
  border: none;
  color: #d1d5db;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.diff-toggle button.active {
  background: #3b82f6;
  color: white;
}

.diff-content {
  padding: 1rem;
  color: #e5e7eb;
  font-size: 0.875rem;
  line-height: 1.5;
  max-height: 400px;
  overflow-y: auto;
}

.diff-content pre {
  margin: 0;
  white-space: pre-wrap;
}

.diff-line-added {
  background: rgba(16, 185, 129, 0.2);
  color: #a7f3d0;
}

.diff-line-removed {
  background: rgba(239, 68, 68, 0.2);
  color: #fca5a5;
}

/* Responsive Design */
@media (max-width: 768px) {
  .dashboard,
  .graph-explorer,
  .component-comparator {
    padding: 1rem;
  }
  
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  
  .analysis-grid {
    grid-template-columns: 1fr;
  }
  
  .tool-grid {
    grid-template-columns: 1fr;
  }
  
  .explorer-content {
    flex-direction: column;
  }
  
  .explorer-sidebar {
    width: 100%;
    order: 2;
  }
  
  .comparison-grid {
    grid-template-columns: 1fr;
  }
  
  .component-tabs {
    grid-template-columns: 1fr;
  }
  
  .impact-grid,
  .impact-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .impact-grid,
  .impact-metrics {
    grid-template-columns: 1fr;
  }
  
  .dashboard-header h1 {
    font-size: 2rem;
  }
  
  .explorer-header h1,
  .comparator-header h1 {
    font-size: 1.75rem;
  }
}

/* Animation Classes */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-in-right {
  animation: slideInRight 0.3s ease-in-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Utility Classes */
.text-center {
  text-align: center;
}

.font-bold {
  font-weight: 700;
}

.text-sm {
  font-size: 0.875rem;
}

.text-xs {
  font-size: 0.75rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.p-2 {
  padding: 0.5rem;
}

.p-4 {
  padding: 1rem;
}

.rounded {
  border-radius: 0.375rem;
}

.shadow {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.bg-white {
  background-color: white;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.text-gray-600 {
  color: #6b7280;
}

.text-gray-900 {
  color: #111827;
}

.border {
  border: 1px solid #e5e7eb;
}

.cursor-pointer {
  cursor: pointer;
}

.select-none {
  user-select: none;
}
```

## Usage Instructions for Claude Code

To implement this Breeze AI UI Rationalization Demo using Claude Code:

### 1. Project Setup

```bash
# Create new React TypeScript project
npx create-react-app breeze-demo --template typescript
cd breeze-demo

# Install dependencies
npm install d3 @types/d3 react-router-dom
```

### 2. File Structure

```
src/
├── components/
│   ├── Dashboard.tsx
│   ├── GraphExplorer.tsx
│   ├── ComponentComparator.tsx
│   ├── TransformationSimulator.tsx
│   ├── common/
│   │   ├── MetricsCard.tsx
│   │   ├── FilterPanel.tsx
│   │   ├── NodeDetailsPanel.tsx
│   │   ├── CodeDiffViewer.tsx
│   │   └── ComponentPreview.tsx
│   └── charts/
│       ├── ProductComparisonChart.tsx
│       └── InconsistencyHeatmap.tsx
├── contexts/
│   ├── OntologyContext.tsx
│   └── DemoContext.tsx
├── data/
│   └── ontologyData.ts
├── hooks/
│   └── useGraphVisualization.ts
├── types/
│   └── ontology.ts
├── App.tsx
├── App.css
└── index.tsx
```

### 3. Key Implementation Commands

**Start the project:**

```bash
npm start
```

**Add the ontology data:**

- Copy the node and edge data structures into `src/data/ontologyData.ts`
- Export the arrays for use in components

**Implement D3 graph visualization:**

- Use the provided GraphExplorer component
- Customize force simulation parameters for optimal layout
- Add zoom and pan functionality

**Add interactive features:**

- Implement filtering in FilterPanel component
- Add node selection and details display
- Create component comparison views

### 4. Customization Options

**Graph Layout:**

- Adjust force simulation parameters
- Modify node colors and sizes
- Customize edge styling for different relationship types

**Business Metrics:**

- Update ROI calculations in Dashboard
- Modify consistency scoring algorithms
- Add custom KPIs for specific organizations

**Visual Themes:**

- Customize CSS color schemes
- Adjust spacing and typography
- Add company branding elements

### 5. Demo Presentation Flow

1. **Start with Dashboard** - Show overall portfolio health
2. **Explore Graph** - Demonstrate ontology relationships
3. **Compare Components** - Highlight inconsistencies
4. **Show Transformation** - Present unified design system
5. **Business Impact** - Quantify ROI and benefits

This implementation provides a complete, interactive demonstration of how Breeze AI's four-ontology framework enables systematic UI rationalization across enterprise product portfolios.