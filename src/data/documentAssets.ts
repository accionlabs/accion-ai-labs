/**
 * Document Assets for Phoenix CRM
 * These represent the documents that agents process to extract functional requirements
 */

export interface DocumentAsset {
  id: string;
  name: string;
  type: 'requirements' | 'design' | 'architecture' | 'api' | 'user-manual';
  path: string;
  size: string;
  lastModified: string;
  processedBy: string[];
}

export const phoenixDocuments: DocumentAsset[] = [
  {
    id: 'doc-1',
    name: 'Phoenix CRM Requirements Specification v2.3',
    type: 'requirements',
    path: '/docs/requirements/phoenix-crm-requirements.pdf',
    size: '2.4 MB',
    lastModified: '2024-01-15',
    processedBy: ['functional-agent', 'design-agent']
  },
  {
    id: 'doc-2',
    name: 'Customer Management Module PRD',
    type: 'requirements',
    path: '/docs/requirements/customer-module-prd.docx',
    size: '856 KB',
    lastModified: '2024-02-20',
    processedBy: ['functional-agent']
  },
  {
    id: 'doc-3',
    name: 'Phoenix System Architecture Document',
    type: 'architecture',
    path: '/docs/architecture/phoenix-architecture.pdf',
    size: '4.1 MB',
    lastModified: '2023-11-10',
    processedBy: ['architecture-agent']
  },
  {
    id: 'doc-4',
    name: 'UI/UX Design System Guidelines',
    type: 'design',
    path: '/docs/design/design-system.sketch',
    size: '18.3 MB',
    lastModified: '2024-01-08',
    processedBy: ['design-agent']
  },
  {
    id: 'doc-5',
    name: 'Phoenix API Documentation',
    type: 'api',
    path: '/docs/api/phoenix-api-spec.yaml',
    size: '245 KB',
    lastModified: '2024-03-01',
    processedBy: ['architecture-agent', 'functional-agent']
  },
  {
    id: 'doc-6',
    name: 'User Manual - Admin Dashboard',
    type: 'user-manual',
    path: '/docs/manuals/admin-dashboard-guide.pdf',
    size: '1.8 MB',
    lastModified: '2024-02-15',
    processedBy: ['functional-agent', 'design-agent']
  },
  {
    id: 'doc-7',
    name: 'Analytics Module Design Mockups',
    type: 'design',
    path: '/docs/design/analytics-mockups.fig',
    size: '9.7 MB',
    lastModified: '2023-12-20',
    processedBy: ['design-agent']
  },
  {
    id: 'doc-8',
    name: 'Database Schema Documentation',
    type: 'architecture',
    path: '/docs/database/phoenix-db-schema.sql',
    size: '125 KB',
    lastModified: '2024-01-30',
    processedBy: ['architecture-agent', 'code-agent']
  }
];

// Functional requirements extracted from documents (not from code)
export interface ExtractedRequirement {
  id: string;
  requirement: string;
  source: string;
  hasImplementation: boolean;
  confidence: number;
  functionalNodeId?: string;
}

export const extractedRequirements: ExtractedRequirement[] = [
  {
    id: 'req-1',
    requirement: 'System shall support Single Sign-On (SSO) authentication',
    source: 'Phoenix CRM Requirements Specification v2.3',
    hasImplementation: false,
    confidence: 0.95
  },
  {
    id: 'req-2',
    requirement: 'Users shall be able to login with username and password',
    source: 'Phoenix CRM Requirements Specification v2.3',
    hasImplementation: true,
    confidence: 0.98,
    functionalNodeId: 'phoenix-func-login-scenario'
  },
  {
    id: 'req-3',
    requirement: 'System shall support bulk customer import from CSV',
    source: 'Customer Management Module PRD',
    hasImplementation: false,
    confidence: 0.92
  },
  {
    id: 'req-4',
    requirement: 'Dashboard shall display real-time analytics',
    source: 'User Manual - Admin Dashboard',
    hasImplementation: true,
    confidence: 0.88,
    functionalNodeId: 'phoenix-func-view-analytics'
  },
  {
    id: 'req-5',
    requirement: 'System shall support customer data export to PDF',
    source: 'Customer Management Module PRD',
    hasImplementation: false,
    confidence: 0.90
  },
  {
    id: 'req-6',
    requirement: 'Customer records shall support CRUD operations',
    source: 'Phoenix CRM Requirements Specification v2.3',
    hasImplementation: true,
    confidence: 0.96,
    functionalNodeId: 'phoenix-func-crud-customer'
  },
  {
    id: 'req-7',
    requirement: 'System shall provide role-based access control',
    source: 'Phoenix System Architecture Document',
    hasImplementation: false,
    confidence: 0.89
  },
  {
    id: 'req-8',
    requirement: 'Analytics module shall support custom date ranges',
    source: 'Analytics Module Design Mockups',
    hasImplementation: false,
    confidence: 0.85
  }
];

// Architecture violations detected by the Architecture Agent
export interface ArchitectureViolation {
  id: string;
  violation: string;
  description: string;
  location: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  recommendation: string;
}

export const architectureViolations: ArchitectureViolation[] = [
  {
    id: 'arch-viol-1',
    violation: 'Cross-Layer Dependency',
    description: 'UI components directly accessing database layer, bypassing service layer',
    location: 'CustomerListView.php -> CustomerDB.php',
    severity: 'critical',
    recommendation: 'Route all database access through the service layer'
  },
  {
    id: 'arch-viol-2',
    violation: 'Shared Database Anti-pattern',
    description: 'Customer, Order, and Analytics services all directly accessing the same database',
    location: 'services/CustomerService.php, services/OrderService.php, services/AnalyticsService.php',
    severity: 'high',
    recommendation: 'Implement service-specific databases or data access layers'
  },
  {
    id: 'arch-viol-3',
    violation: 'Missing Service Boundary',
    description: 'Authentication logic scattered across multiple services instead of centralized',
    location: 'Multiple locations: auth.php, UserService.php, SessionManager.php, LoginController.php',
    severity: 'high',
    recommendation: 'Create a dedicated Authentication service'
  },
  {
    id: 'arch-viol-4',
    violation: 'Circular Dependency',
    description: 'Order service depends on Customer service which depends on Order service',
    location: 'services/OrderService.php <-> services/CustomerService.php',
    severity: 'medium',
    recommendation: 'Refactor to remove circular dependency, possibly through event-driven architecture'
  }
];

// Design inconsistencies detected by the Design Agent
export interface DesignInconsistency {
  id: string;
  inconsistency: string;
  description: string;
  examples: string[];
  impact: string;
  recommendation: string;
}

export const designInconsistencies: DesignInconsistency[] = [
  {
    id: 'design-inc-1',
    inconsistency: 'Multiple Button Styles',
    description: '12 different button implementations found across the application',
    examples: [
      'CustomerListView: <button class="btn-primary">',
      'OrderForm: <input type="submit" class="submit-button">',
      'Dashboard: <a href="#" class="action-btn">',
      'Analytics: <div onclick="submit()" class="clickable-button">'
    ],
    impact: 'Inconsistent user experience, increased CSS complexity',
    recommendation: 'Create a unified Button component with consistent styling variants'
  },
  {
    id: 'design-inc-2',
    inconsistency: 'Form Validation Patterns',
    description: '8 different form validation approaches identified',
    examples: [
      'CustomerForm: Inline JavaScript validation',
      'OrderForm: Server-side only validation',
      'LoginForm: jQuery validation plugin',
      'SettingsForm: Custom validation framework'
    ],
    impact: 'Inconsistent error messaging, poor user experience',
    recommendation: 'Implement a centralized form validation system'
  },
  {
    id: 'design-inc-3',
    inconsistency: 'Modal Dialog Implementations',
    description: '5 different modal/popup implementations',
    examples: [
      'CustomerDetails: Bootstrap modal',
      'OrderConfirmation: Custom jQuery modal',
      'ErrorDialog: Native alert()',
      'SettingsModal: React Portal'
    ],
    impact: 'Inconsistent behavior, accessibility issues',
    recommendation: 'Standardize on a single modal component'
  },
  {
    id: 'design-inc-4',
    inconsistency: 'Table/Grid Components',
    description: '7 different table implementations with varying features',
    examples: [
      'CustomerList: HTML table with custom sorting',
      'OrderHistory: DataTables jQuery plugin',
      'Analytics: Custom grid component',
      'Reports: Server-rendered table'
    ],
    impact: 'Duplicate code, inconsistent sorting/filtering behavior',
    recommendation: 'Adopt a single table component library'
  }
];