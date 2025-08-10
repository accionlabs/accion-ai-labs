#!/usr/bin/env python3
"""
Apollo Launchpad Orphan Node Analysis
Systematic analysis of all Apollo ontologies for orphaned nodes
"""

# All Apollo nodes extracted from ontologyData.ts
apollo_nodes = {
    # Root nodes (excluded from orphan analysis)
    'apollo_functional_root': {'type': 'functional', 'level': 'root', 'name': 'Apollo Functional Layer'},
    'apollo_design_root': {'type': 'design', 'level': 'root', 'name': 'Apollo Design Layer'},
    'apollo_architecture_root': {'type': 'architecture', 'level': 'root', 'name': 'Apollo Architecture Layer'},
    'apollo_code_root': {'type': 'code', 'level': 'root', 'name': 'Apollo Code Layer'},
    
    # Functional Ontology
    'apollo_persona_business_user': {'type': 'functional', 'level': 'persona', 'name': 'Business User'},
    'apollo_outcome_authenticate': {'type': 'functional', 'level': 'outcomes', 'name': 'Authenticate to System'},
    'apollo_scenario_2fa_login': {'type': 'functional', 'level': 'scenarios', 'name': '2FA Login'},
    'apollo_step_authentication': {'type': 'functional', 'level': 'steps', 'name': 'Authentication'},
    'apollo_step_2fa_verification': {'type': 'functional', 'level': 'steps', 'name': 'Two-Factor Verification'},
    'apollo_action_enter_email': {'type': 'functional', 'level': 'actions', 'name': 'Enter Email'},
    'apollo_action_enter_password': {'type': 'functional', 'level': 'actions', 'name': 'Enter Password'},
    'apollo_action_submit_login': {'type': 'functional', 'level': 'actions', 'name': 'Submit Login Form'},
    'apollo_action_enter_otp': {'type': 'functional', 'level': 'actions', 'name': 'Enter OTP'},
    'apollo_action_submit_2fa': {'type': 'functional', 'level': 'actions', 'name': 'Submit 2FA Form'},
    
    # Design Ontology
    'apollo_journey_shopping': {'type': 'design', 'level': 'user_journeys', 'name': 'Shopping Experience'},
    'apollo_flow_login_2fa': {'type': 'design', 'level': 'flows', 'name': 'Login + 2FA Flow'},
    'apollo_page_login': {'type': 'design', 'level': 'pages', 'name': 'Login Page'},
    'apollo_page_2fa': {'type': 'design', 'level': 'pages', 'name': '2FA Verification Page'},
    'apollo_template_form': {'type': 'design', 'level': 'templates', 'name': 'Form Template'},
    'apollo_organism_login_form': {'type': 'design', 'level': 'organisms', 'name': 'Login Form'},
    'apollo_organism_2fa_form': {'type': 'design', 'level': 'organisms', 'name': 'Two-Factor Authentication Form'},
    'apollo_molecule_email_group': {'type': 'design', 'level': 'molecules', 'name': 'Email Field Group'},
    'apollo_molecule_password_group': {'type': 'design', 'level': 'molecules', 'name': 'Password Field Group'},
    'apollo_molecule_otp_group': {'type': 'design', 'level': 'molecules', 'name': 'OTP Field Group'},
    'apollo_atom_email_input': {'type': 'design', 'level': 'atoms', 'name': 'Email Input'},
    'apollo_atom_password_input': {'type': 'design', 'level': 'atoms', 'name': 'Password Input'},
    'apollo_atom_otp_input': {'type': 'design', 'level': 'atoms', 'name': 'OTP Input'},
    'apollo_atom_primary_button': {'type': 'design', 'level': 'atoms', 'name': 'Primary Button'},
    
    # Architecture Ontology
    'apollo_layer_ux': {'type': 'architecture', 'level': 'layers', 'name': 'User Experience Layer'},
    'apollo_layer_gateway': {'type': 'architecture', 'level': 'layers', 'name': 'API Gateway Layer'},
    'apollo_layer_services': {'type': 'architecture', 'level': 'layers', 'name': 'Services Layer'},
    'apollo_service_auth': {'type': 'architecture', 'level': 'services', 'name': 'Authentication Microservice'},
    'apollo_service_identity': {'type': 'architecture', 'level': 'services', 'name': 'Identity & Access Service'},
    'apollo_service_notification': {'type': 'architecture', 'level': 'services', 'name': 'System Notification Service'},
    'apollo_entity_react_frontend': {'type': 'architecture', 'level': 'entities_components', 'name': 'React Frontend'},
    'apollo_entity_auth_microservice': {'type': 'architecture', 'level': 'entities_components', 'name': 'Node.js/Express Microservice'},
    
    # Code Ontology - Frontend
    'apollo_frontend_app': {'type': 'code', 'level': 'applications', 'name': 'Apollo Launchpad SPA'},
    'apollo_frontend_module_auth': {'type': 'code', 'level': 'modules', 'name': 'AuthModule'},
    'apollo_frontend_component_login_form': {'type': 'code', 'level': 'components', 'name': 'LoginForm.tsx'},
    'apollo_frontend_component_2fa_form': {'type': 'code', 'level': 'components', 'name': 'TwoFactorAuthForm.tsx'},
    'apollo_frontend_function_handle_submit': {'type': 'code', 'level': 'functions_hooks', 'name': 'handleSubmit()'},
    'apollo_frontend_hook_use_auth': {'type': 'code', 'level': 'functions_hooks', 'name': 'useAuth()'},
    'apollo_frontend_state_email': {'type': 'code', 'level': 'properties_state', 'name': 'email'},
    'apollo_frontend_state_password': {'type': 'code', 'level': 'properties_state', 'name': 'password'},
    'apollo_frontend_state_otp': {'type': 'code', 'level': 'properties_state', 'name': 'otp'},
    'apollo_frontend_state_loading': {'type': 'code', 'level': 'properties_state', 'name': 'isLoading'},
    'apollo_frontend_config_api': {'type': 'code', 'level': 'configurations', 'name': 'api.config.ts'},
    
    # Code Ontology - Backend
    'apollo_backend_app': {'type': 'code', 'level': 'applications', 'name': 'Authentication Microservice'},
    'apollo_backend_module_auth': {'type': 'code', 'level': 'modules', 'name': 'AuthModule'},
    'apollo_backend_class_auth_service': {'type': 'code', 'level': 'classes_services', 'name': 'AuthService'},
    'apollo_backend_class_auth_router': {'type': 'code', 'level': 'classes_services', 'name': 'AuthRouter'},
    'apollo_backend_function_login_endpoint': {'type': 'code', 'level': 'functions_methods', 'name': 'POST /auth/login'},
    'apollo_backend_function_2fa_endpoint': {'type': 'code', 'level': 'functions_methods', 'name': 'POST /auth/verify-2fa'},
    'apollo_backend_function_password_hash': {'type': 'code', 'level': 'functions_methods', 'name': 'password hashing (bcrypt)'},
    'apollo_backend_function_jwt_generation': {'type': 'code', 'level': 'functions_methods', 'name': 'JWT generation'},
    'apollo_backend_property_jwt_token': {'type': 'code', 'level': 'properties_fields', 'name': 'JWT token'},
    'apollo_backend_config_jwt_secret': {'type': 'code', 'level': 'configurations', 'name': 'jwt.secret'},
    
    # Code Ontology - Data
    'apollo_data_app': {'type': 'code', 'level': 'applications', 'name': 'User Database'},
    'apollo_data_module_user': {'type': 'code', 'level': 'modules', 'name': 'UserModule'},
    'apollo_data_collection_users': {'type': 'code', 'level': 'classes_processors', 'name': 'users collection'},
    'apollo_data_query_find_user': {'type': 'code', 'level': 'functions_queries', 'name': 'db.users.findOne({ email })'},
    
    # Code Ontology - Frontend React Elements (granular)
    'apollo_frontend_element_email_input': {'type': 'code', 'level': 'properties_state', 'name': 'Email Input Element'},
    'apollo_frontend_element_password_input': {'type': 'code', 'level': 'properties_state', 'name': 'Password Input Element'},
    'apollo_frontend_element_otp_input': {'type': 'code', 'level': 'properties_state', 'name': 'OTP Input Element'},
    'apollo_frontend_element_submit_button': {'type': 'code', 'level': 'properties_state', 'name': 'Submit Button Element'}
}

# All edges where Apollo nodes are targets (extracted from ontologyData.ts)
apollo_targets = {
    'apollo_persona_business_user',
    'apollo_journey_shopping',
    'apollo_layer_ux',
    'apollo_frontend_app',
    'apollo_backend_app',
    'apollo_data_app',
    'apollo_outcome_authenticate',
    'apollo_scenario_2fa_login',
    'apollo_step_authentication',
    'apollo_step_2fa_verification',
    'apollo_action_enter_email',
    'apollo_action_enter_password',
    'apollo_action_submit_login',
    'apollo_action_enter_otp',
    'apollo_action_submit_2fa',
    'apollo_flow_login_2fa',
    'apollo_page_login',
    'apollo_page_2fa',
    'apollo_template_form',
    'apollo_organism_login_form',
    'apollo_organism_2fa_form',
    'apollo_molecule_email_group',
    'apollo_molecule_password_group',
    'apollo_molecule_otp_group',
    'apollo_atom_email_input',
    'apollo_atom_password_input',
    'apollo_atom_otp_input',
    'apollo_atom_primary_button',
    'apollo_layer_gateway',
    'apollo_layer_services',
    'apollo_service_auth',
    'apollo_service_identity',
    'apollo_service_notification',
    'apollo_entity_auth_microservice',
    'apollo_frontend_module_auth',
    'apollo_frontend_component_login_form',
    'apollo_frontend_component_2fa_form',
    'apollo_frontend_function_handle_submit',
    'apollo_frontend_hook_use_auth',
    'apollo_frontend_state_email',
    'apollo_frontend_state_password',
    'apollo_frontend_state_otp',
    'apollo_frontend_state_loading',
    'apollo_frontend_element_email_input',
    'apollo_frontend_element_password_input',
    'apollo_frontend_element_submit_button',
    'apollo_frontend_element_otp_input',
    'apollo_backend_module_auth',
    'apollo_backend_class_auth_service',
    'apollo_backend_class_auth_router',
    'apollo_backend_function_login_endpoint',
    'apollo_backend_function_2fa_endpoint',
    'apollo_backend_function_password_hash',
    'apollo_backend_function_jwt_generation',
    'apollo_data_module_user',
    'apollo_data_collection_users',
    'apollo_data_query_find_user'
}

# Root nodes (should be excluded from orphan analysis)
root_nodes = {
    'apollo_functional_root',
    'apollo_design_root', 
    'apollo_architecture_root',
    'apollo_code_root'
}

def analyze_apollo_orphans():
    """Identify orphaned Apollo nodes systematically"""
    
    print("=" * 80)
    print("APOLLO LAUNCHPAD ORPHAN NODE ANALYSIS")
    print("=" * 80)
    
    # Identify orphaned nodes
    all_apollo_nodes = set(apollo_nodes.keys())
    orphaned_nodes = all_apollo_nodes - apollo_targets - root_nodes
    
    print(f"\nTOTAL APOLLO NODES: {len(all_apollo_nodes)}")
    print(f"ROOT NODES (excluded): {len(root_nodes)}")
    print(f"NODES WITH INCOMING EDGES: {len(apollo_targets)}")
    print(f"ORPHANED NODES: {len(orphaned_nodes)}")
    
    # Group orphans by ontology type
    orphans_by_type = {
        'functional': [],
        'design': [],
        'architecture': [], 
        'code': []
    }
    
    for node_id in orphaned_nodes:
        node = apollo_nodes[node_id]
        orphans_by_type[node['type']].append({
            'id': node_id,
            'name': node['name'],
            'level': node['level']
        })
    
    # Print detailed analysis
    print("\n" + "="*60)
    print("ORPHANED NODES BY ONTOLOGY TYPE")
    print("="*60)
    
    for ontology_type, orphans in orphans_by_type.items():
        print(f"\n{ontology_type.upper()} ONTOLOGY - {len(orphans)} orphaned nodes:")
        print("-" * 50)
        
        if orphans:
            for orphan in orphans:
                print(f"  • {orphan['id']}")
                print(f"    Name: {orphan['name']}")
                print(f"    Level: {orphan['level']}")
                print()
        else:
            print("  ✓ No orphaned nodes found")
    
    # Special analysis sections
    print("\n" + "="*60)
    print("SPECIAL PATTERN ANALYSIS")
    print("="*60)
    
    # Configuration nodes analysis
    config_orphans = [node for node in orphaned_nodes if 'config' in node]
    print(f"\nCONFIGURATION NODES: {len(config_orphans)} orphaned")
    for node in config_orphans:
        print(f"  • {node}: {apollo_nodes[node]['name']}")
    
    # React-specific elements analysis
    react_orphans = [node for node in orphaned_nodes if 'frontend' in node and ('component' in node or 'hook' in node or 'state' in node)]
    print(f"\nREACT-SPECIFIC ELEMENTS: {len(react_orphans)} orphaned")
    for node in react_orphans:
        print(f"  • {node}: {apollo_nodes[node]['name']}")
    
    # Entity/Component orphans
    entity_orphans = [node for node in orphaned_nodes if 'entity' in node]
    print(f"\nENTITY/COMPONENT NODES: {len(entity_orphans)} orphaned")
    for node in entity_orphans:
        print(f"  • {node}: {apollo_nodes[node]['name']}")
    
    return orphaned_nodes, orphans_by_type

def analyze_2fa_completeness():
    """Analyze 2FA authentication flow completeness"""
    print("\n" + "="*60)
    print("2FA AUTHENTICATION FLOW COMPLETENESS ANALYSIS")
    print("="*60)
    
    # Key 2FA flow components
    flow_components = {
        'apollo_scenario_2fa_login': apollo_nodes['apollo_scenario_2fa_login']['name'],
        'apollo_step_authentication': apollo_nodes['apollo_step_authentication']['name'], 
        'apollo_step_2fa_verification': apollo_nodes['apollo_step_2fa_verification']['name'],
        'apollo_action_enter_otp': apollo_nodes['apollo_action_enter_otp']['name'],
        'apollo_action_submit_2fa': apollo_nodes['apollo_action_submit_2fa']['name'],
        'apollo_page_2fa': apollo_nodes['apollo_page_2fa']['name'],
        'apollo_organism_2fa_form': apollo_nodes['apollo_organism_2fa_form']['name'],
        'apollo_molecule_otp_group': apollo_nodes['apollo_molecule_otp_group']['name'],
        'apollo_atom_otp_input': apollo_nodes['apollo_atom_otp_input']['name'],
        'apollo_frontend_component_2fa_form': apollo_nodes['apollo_frontend_component_2fa_form']['name'],
        'apollo_frontend_state_otp': apollo_nodes['apollo_frontend_state_otp']['name'],
        'apollo_backend_function_2fa_endpoint': apollo_nodes['apollo_backend_function_2fa_endpoint']['name'],
        'apollo_service_notification': apollo_nodes['apollo_service_notification']['name']
    }
    
    print("\n2FA Flow Components Status:")
    print("-" * 40)
    
    for component_id, component_name in flow_components.items():
        status = "✓ CONNECTED" if component_id in apollo_targets else "✗ ORPHANED"
        print(f"{status}: {component_name}")
        print(f"           ID: {component_id}")
        print()

def generate_recommendations():
    """Generate implementation recommendations"""
    print("\n" + "="*60)
    print("IMPLEMENTATION RECOMMENDATIONS")
    print("="*60)
    
    recommendations = [
        {
            'priority': 'HIGH',
            'category': 'Configuration Orphans',
            'issue': 'apollo_frontend_config_api and apollo_backend_config_jwt_secret are orphaned',
            'impact': 'Configuration nodes are critical for application functionality',
            'action': 'Connect config nodes to their consuming components/services'
        },
        {
            'priority': 'HIGH', 
            'category': 'Entity Components',
            'issue': 'apollo_entity_react_frontend is orphaned',
            'impact': 'Architectural entities should be connected to implementation layers',
            'action': 'Link entity to apollo_frontend_app or apollo_layer_ux'
        },
        {
            'priority': 'MEDIUM',
            'category': '2FA Flow Completeness',
            'issue': 'Notification service may be disconnected from 2FA flow',
            'impact': 'OTP delivery mechanism needs clear integration points',
            'action': 'Verify notification service connections to 2FA endpoints'
        },
        {
            'priority': 'MEDIUM',
            'category': 'Cross-Layer Connections',
            'issue': 'Some design atoms may lack direct code implementations',
            'impact': 'Potential gaps between design and implementation',
            'action': 'Audit design-to-code traceability for all atoms'
        },
        {
            'priority': 'LOW',
            'category': 'Token Management',
            'issue': 'JWT token property connectivity',
            'impact': 'Token lifecycle management clarity',
            'action': 'Ensure JWT token has clear usage connections'
        }
    ]
    
    for i, rec in enumerate(recommendations, 1):
        print(f"\n{i}. {rec['category']} [{rec['priority']} PRIORITY]")
        print(f"   Issue: {rec['issue']}")
        print(f"   Impact: {rec['impact']}")
        print(f"   Action: {rec['action']}")

if __name__ == "__main__":
    orphaned_nodes, orphans_by_type = analyze_apollo_orphans()
    analyze_2fa_completeness()
    generate_recommendations()
    
    print("\n" + "="*60)
    print("ANALYSIS COMPLETE")
    print("="*60)
    print(f"Total orphaned nodes found: {len(orphaned_nodes)}")
    print("Review recommendations above for remediation steps.")