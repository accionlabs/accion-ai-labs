/**
 * Technical Debt Data Model
 * Represents code analysis of Phoenix CRM system
 */

export interface CodeNode {
  id: string;
  name: string;
  type: 'frontend' | 'backend' | 'database' | 'api' | 'library';
  subtype: 'component' | 'service' | 'module' | 'function' | 'controller' | 'repository' | 'model' | 'view' | 'utility';
  file: string;
  language: string;
  framework?: string;
  linesOfCode: number;
  complexity?: number;
  product: 'phoenix';
  dependencies?: string[];
}

export interface CodeEdge {
  source: string;
  target: string;
  type: 'imports' | 'calls' | 'extends' | 'implements' | 'uses' | 'accesses' | 'derives-to';
  weight?: number;
}

export interface DerivedMapping {
  codeNodeId: string;
  derivedNodeId: string;
  ontology: 'functional' | 'design' | 'architecture';
  mappingType: 'direct' | 'inferred' | 'partial';
  confidence: number; // 0-1
}

export interface TechnicalDebtIssue {
  id: string;
  category: 'architecture' | 'design' | 'functional' | 'code-quality';
  subcategory?: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  title: string;
  description: string;
  affectedNodes: string[];
  recommendation: string;
  effort: number; // story points
  impact: number; // 1-10
  riskLevel: 'high' | 'medium' | 'low';
}

export interface AgentExtractionResult {
  agent: 'code' | 'architecture' | 'functional' | 'design';
  status: 'pending' | 'analyzing' | 'complete';
  nodesExtracted: number;
  confidence: number;
  patterns: string[];
}

// Phoenix CRM Code Graph Data
export const phoenixCodeNodes: CodeNode[] = [
  // Frontend Components
  {
    id: 'phoenix-login-form',
    name: 'LoginForm.php',
    type: 'frontend',
    subtype: 'view',
    file: '/views/auth/LoginForm.php',
    language: 'PHP',
    framework: 'Custom',
    linesOfCode: 245,
    complexity: 8,
    product: 'phoenix',
    dependencies: ['phoenix-auth-controller', 'phoenix-jquery-validate']
  },
  {
    id: 'phoenix-user-dashboard',
    name: 'UserDashboard.php',
    type: 'frontend',
    subtype: 'view',
    file: '/views/dashboard/UserDashboard.php',
    language: 'PHP',
    framework: 'Custom',
    linesOfCode: 389,
    complexity: 12,
    product: 'phoenix',
    dependencies: ['phoenix-dashboard-controller', 'phoenix-chart-lib']
  },
  {
    id: 'phoenix-product-list',
    name: 'ProductList.php',
    type: 'frontend',
    subtype: 'view',
    file: '/views/products/ProductList.php',
    language: 'PHP',
    framework: 'Custom',
    linesOfCode: 456,
    complexity: 10,
    product: 'phoenix',
    dependencies: ['phoenix-product-controller', 'phoenix-pagination']
  },
  
  // Backend Controllers
  {
    id: 'phoenix-auth-controller',
    name: 'AuthController.php',
    type: 'backend',
    subtype: 'controller',
    file: '/controllers/AuthController.php',
    language: 'PHP',
    framework: 'MVC',
    linesOfCode: 567,
    complexity: 15,
    product: 'phoenix',
    dependencies: ['phoenix-user-model', 'phoenix-session-service', 'phoenix-db-connection']
  },
  {
    id: 'phoenix-product-controller',
    name: 'ProductController.php',
    type: 'backend',
    subtype: 'controller',
    file: '/controllers/ProductController.php',
    language: 'PHP',
    framework: 'MVC',
    linesOfCode: 892,
    complexity: 18,
    product: 'phoenix',
    dependencies: ['phoenix-product-model', 'phoenix-product-repository', 'phoenix-db-connection']
  },
  {
    id: 'phoenix-dashboard-controller',
    name: 'DashboardController.php',
    type: 'backend',
    subtype: 'controller',
    file: '/controllers/DashboardController.php',
    language: 'PHP',
    framework: 'MVC',
    linesOfCode: 345,
    complexity: 9,
    product: 'phoenix',
    dependencies: ['phoenix-analytics-service', 'phoenix-user-model']
  },
  
  // Services
  {
    id: 'phoenix-session-service',
    name: 'SessionService.php',
    type: 'backend',
    subtype: 'service',
    file: '/services/SessionService.php',
    language: 'PHP',
    linesOfCode: 234,
    complexity: 7,
    product: 'phoenix',
    dependencies: ['phoenix-db-connection']
  },
  {
    id: 'phoenix-analytics-service',
    name: 'AnalyticsService.php',
    type: 'backend',
    subtype: 'service',
    file: '/services/AnalyticsService.php',
    language: 'PHP',
    linesOfCode: 456,
    complexity: 14,
    product: 'phoenix',
    dependencies: ['phoenix-db-connection', 'phoenix-cache-service']
  },
  {
    id: 'phoenix-cache-service',
    name: 'CacheService.php',
    type: 'backend',
    subtype: 'service',
    file: '/services/CacheService.php',
    language: 'PHP',
    linesOfCode: 178,
    complexity: 6,
    product: 'phoenix',
    dependencies: []
  },
  
  // Models
  {
    id: 'phoenix-user-model',
    name: 'User.php',
    type: 'backend',
    subtype: 'model',
    file: '/models/User.php',
    language: 'PHP',
    linesOfCode: 234,
    complexity: 5,
    product: 'phoenix',
    dependencies: ['phoenix-db-connection']
  },
  {
    id: 'phoenix-product-model',
    name: 'Product.php',
    type: 'backend',
    subtype: 'model',
    file: '/models/Product.php',
    language: 'PHP',
    linesOfCode: 189,
    complexity: 4,
    product: 'phoenix',
    dependencies: ['phoenix-db-connection']
  },
  
  // Repositories
  {
    id: 'phoenix-product-repository',
    name: 'ProductRepository.php',
    type: 'backend',
    subtype: 'repository',
    file: '/repositories/ProductRepository.php',
    language: 'PHP',
    linesOfCode: 456,
    complexity: 11,
    product: 'phoenix',
    dependencies: ['phoenix-product-model', 'phoenix-db-connection']
  },
  {
    id: 'phoenix-user-repository',
    name: 'UserRepository.php',
    type: 'backend',
    subtype: 'repository',
    file: '/repositories/UserRepository.php',
    language: 'PHP',
    linesOfCode: 389,
    complexity: 10,
    product: 'phoenix',
    dependencies: ['phoenix-user-model', 'phoenix-db-connection']
  },
  
  // Database
  {
    id: 'phoenix-db-connection',
    name: 'DatabaseConnection.php',
    type: 'database',
    subtype: 'utility',
    file: '/database/DatabaseConnection.php',
    language: 'PHP',
    linesOfCode: 145,
    complexity: 8,
    product: 'phoenix',
    dependencies: []
  },
  
  // Libraries
  {
    id: 'phoenix-jquery-validate',
    name: 'jquery.validate.js',
    type: 'library',
    subtype: 'utility',
    file: '/assets/js/jquery.validate.js',
    language: 'JavaScript',
    framework: 'jQuery',
    linesOfCode: 1234,
    product: 'phoenix',
    dependencies: []
  },
  {
    id: 'phoenix-chart-lib',
    name: 'charts.js',
    type: 'library',
    subtype: 'utility',
    file: '/assets/js/charts.js',
    language: 'JavaScript',
    linesOfCode: 567,
    product: 'phoenix',
    dependencies: []
  },
  {
    id: 'phoenix-pagination',
    name: 'pagination.js',
    type: 'library',
    subtype: 'utility',
    file: '/assets/js/pagination.js',
    language: 'JavaScript',
    linesOfCode: 234,
    product: 'phoenix',
    dependencies: []
  }
];

export const phoenixCodeEdges: CodeEdge[] = [
  // Frontend to Backend
  { source: 'phoenix-login-form', target: 'phoenix-auth-controller', type: 'calls' },
  { source: 'phoenix-user-dashboard', target: 'phoenix-dashboard-controller', type: 'calls' },
  { source: 'phoenix-product-list', target: 'phoenix-product-controller', type: 'calls' },
  
  // Controller to Service/Model
  { source: 'phoenix-auth-controller', target: 'phoenix-user-model', type: 'uses' },
  { source: 'phoenix-auth-controller', target: 'phoenix-session-service', type: 'calls' },
  { source: 'phoenix-auth-controller', target: 'phoenix-db-connection', type: 'accesses' },
  { source: 'phoenix-product-controller', target: 'phoenix-product-model', type: 'uses' },
  { source: 'phoenix-product-controller', target: 'phoenix-product-repository', type: 'calls' },
  { source: 'phoenix-dashboard-controller', target: 'phoenix-analytics-service', type: 'calls' },
  { source: 'phoenix-dashboard-controller', target: 'phoenix-user-model', type: 'uses' },
  
  // Service dependencies
  { source: 'phoenix-session-service', target: 'phoenix-db-connection', type: 'accesses' },
  { source: 'phoenix-analytics-service', target: 'phoenix-db-connection', type: 'accesses' },
  { source: 'phoenix-analytics-service', target: 'phoenix-cache-service', type: 'calls' },
  
  // Repository to Model/DB
  { source: 'phoenix-product-repository', target: 'phoenix-product-model', type: 'uses' },
  { source: 'phoenix-product-repository', target: 'phoenix-db-connection', type: 'accesses' },
  { source: 'phoenix-user-repository', target: 'phoenix-user-model', type: 'uses' },
  { source: 'phoenix-user-repository', target: 'phoenix-db-connection', type: 'accesses' },
  
  // Model to DB
  { source: 'phoenix-user-model', target: 'phoenix-db-connection', type: 'accesses' },
  { source: 'phoenix-product-model', target: 'phoenix-db-connection', type: 'accesses' },
  
  // Frontend libraries
  { source: 'phoenix-login-form', target: 'phoenix-jquery-validate', type: 'imports' },
  { source: 'phoenix-user-dashboard', target: 'phoenix-chart-lib', type: 'imports' },
  { source: 'phoenix-product-list', target: 'phoenix-pagination', type: 'imports' }
];

// Mappings from Code to Other Ontologies
export const derivedMappings: DerivedMapping[] = [
  // Code to Architecture mappings
  {
    codeNodeId: 'phoenix-auth-controller',
    derivedNodeId: 'phoenix-arch-auth-service',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-auth-controller',
    derivedNodeId: 'phoenix-arch-auth-module',
    ontology: 'architecture',
    mappingType: 'inferred',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-session-service',
    derivedNodeId: 'phoenix-arch-auth-service',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-product-controller',
    derivedNodeId: 'phoenix-arch-customer-service',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-product-model',
    derivedNodeId: 'phoenix-arch-customer-module',
    ontology: 'architecture',
    mappingType: 'inferred',
    confidence: 0.8
  },
  {
    codeNodeId: 'phoenix-product-repository',
    derivedNodeId: 'phoenix-arch-data',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-user-repository',
    derivedNodeId: 'phoenix-arch-data',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-analytics-service',
    derivedNodeId: 'phoenix-arch-analytics-service',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-dashboard-controller',
    derivedNodeId: 'phoenix-arch-analytics-module',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-db-connection',
    derivedNodeId: 'phoenix-arch-database',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 1.0
  },
  {
    codeNodeId: 'phoenix-login-form',
    derivedNodeId: 'phoenix-arch-presentation',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-user-dashboard',
    derivedNodeId: 'phoenix-arch-presentation',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-product-list',
    derivedNodeId: 'phoenix-arch-presentation',
    ontology: 'architecture',
    mappingType: 'direct',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-cache-service',
    derivedNodeId: 'phoenix-arch-business',
    ontology: 'architecture',
    mappingType: 'inferred',
    confidence: 0.8
  },
  
  // Code to Functional mappings
  {
    codeNodeId: 'phoenix-login-form',
    derivedNodeId: 'phoenix-func-enter-credentials',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-login-form',
    derivedNodeId: 'phoenix-func-login-scenario',
    ontology: 'functional',
    mappingType: 'inferred',
    confidence: 0.8
  },
  {
    codeNodeId: 'phoenix-auth-controller',
    derivedNodeId: 'phoenix-func-validate-user',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-auth-controller',
    derivedNodeId: 'phoenix-func-authenticate',
    ontology: 'functional',
    mappingType: 'inferred',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-session-service',
    derivedNodeId: 'phoenix-func-create-session',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-product-controller',
    derivedNodeId: 'phoenix-func-manage-customers',
    ontology: 'functional',
    mappingType: 'inferred',
    confidence: 0.8
  },
  {
    codeNodeId: 'phoenix-product-list',
    derivedNodeId: 'phoenix-func-search-customers',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-product-repository',
    derivedNodeId: 'phoenix-func-crud-customer',
    ontology: 'functional',
    mappingType: 'inferred',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-product-model',
    derivedNodeId: 'phoenix-func-edit-customer',
    ontology: 'functional',
    mappingType: 'partial',
    confidence: 0.75
  },
  {
    codeNodeId: 'phoenix-user-dashboard',
    derivedNodeId: 'phoenix-func-view-dashboard',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-dashboard-controller',
    derivedNodeId: 'phoenix-func-view-analytics',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-analytics-service',
    derivedNodeId: 'phoenix-func-view-analytics',
    ontology: 'functional',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-user-model',
    derivedNodeId: 'phoenix-func-customer',
    ontology: 'functional',
    mappingType: 'inferred',
    confidence: 0.7
  },
  {
    codeNodeId: 'phoenix-cache-service',
    derivedNodeId: 'phoenix-func-view-analytics',
    ontology: 'functional',
    mappingType: 'partial',
    confidence: 0.6
  },
  
  // Code to Design mappings
  {
    codeNodeId: 'phoenix-login-form',
    derivedNodeId: 'phoenix-design-login-form',
    ontology: 'design',
    mappingType: 'direct',
    confidence: 1.0
  },
  {
    codeNodeId: 'phoenix-login-form',
    derivedNodeId: 'phoenix-design-login-page',
    ontology: 'design',
    mappingType: 'inferred',
    confidence: 0.85
  },
  {
    codeNodeId: 'phoenix-user-dashboard',
    derivedNodeId: 'phoenix-design-dashboard-page',
    ontology: 'design',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-user-dashboard',
    derivedNodeId: 'phoenix-design-dashboard-flow',
    ontology: 'design',
    mappingType: 'inferred',
    confidence: 0.8
  },
  {
    codeNodeId: 'phoenix-product-list',
    derivedNodeId: 'phoenix-design-customer-table',
    ontology: 'design',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-product-list',
    derivedNodeId: 'phoenix-design-customer-list-page',
    ontology: 'design',
    mappingType: 'direct',
    confidence: 0.9
  },
  {
    codeNodeId: 'phoenix-pagination',
    derivedNodeId: 'phoenix-design-pagination',
    ontology: 'design',
    mappingType: 'direct',
    confidence: 1.0
  },
  {
    codeNodeId: 'phoenix-chart-lib',
    derivedNodeId: 'phoenix-design-chart-widget',
    ontology: 'design',
    mappingType: 'direct',
    confidence: 0.95
  },
  {
    codeNodeId: 'phoenix-jquery-validate',
    derivedNodeId: 'phoenix-design-form-template',
    ontology: 'design',
    mappingType: 'partial',
    confidence: 0.7
  },
  {
    codeNodeId: 'phoenix-product-controller',
    derivedNodeId: 'phoenix-design-customer-detail-page',
    ontology: 'design',
    mappingType: 'inferred',
    confidence: 0.75
  },
  {
    codeNodeId: 'phoenix-auth-controller',
    derivedNodeId: 'phoenix-design-auth-journey',
    ontology: 'design',
    mappingType: 'inferred',
    confidence: 0.7
  },
  {
    codeNodeId: 'phoenix-product-repository',
    derivedNodeId: 'phoenix-design-customer-flow',
    ontology: 'design',
    mappingType: 'partial',
    confidence: 0.65
  },
  {
    codeNodeId: 'phoenix-user-model',
    derivedNodeId: 'phoenix-design-customer-journey',
    ontology: 'design',
    mappingType: 'partial',
    confidence: 0.6
  },
  {
    codeNodeId: 'phoenix-analytics-service',
    derivedNodeId: 'phoenix-design-dashboard-flow',
    ontology: 'design',
    mappingType: 'inferred',
    confidence: 0.75
  },
  {
    codeNodeId: 'phoenix-dashboard-controller',
    derivedNodeId: 'phoenix-design-list-template',
    ontology: 'design',
    mappingType: 'partial',
    confidence: 0.65
  },
  {
    codeNodeId: 'phoenix-session-service',
    derivedNodeId: 'phoenix-design-login-flow',
    ontology: 'design',
    mappingType: 'inferred',
    confidence: 0.8
  },
  {
    codeNodeId: 'phoenix-cache-service',
    derivedNodeId: 'phoenix-design-dashboard-page',
    ontology: 'design',
    mappingType: 'partial',
    confidence: 0.5
  },
  {
    codeNodeId: 'phoenix-product-model',
    derivedNodeId: 'phoenix-design-search-bar',
    ontology: 'design',
    mappingType: 'partial',
    confidence: 0.6
  }
];

// Technical Debt Issues
export const technicalDebtIssues: TechnicalDebtIssue[] = [
  {
    id: 'debt-1',
    category: 'architecture',
    subcategory: 'Database',
    severity: 'critical',
    title: 'Shared Database Anti-pattern',
    description: 'Multiple services (Auth, Product, Analytics) directly access the same database instance, violating microservices principles',
    affectedNodes: ['phoenix-auth-controller', 'phoenix-product-controller', 'phoenix-analytics-service', 'phoenix-db-connection'],
    recommendation: 'Implement service-specific databases with API-based communication',
    effort: 21,
    impact: 9,
    riskLevel: 'high'
  },
  {
    id: 'debt-2',
    category: 'code-quality',
    subcategory: 'Security',
    severity: 'critical',
    title: 'MD5 Password Hashing',
    description: 'Using MD5 for password hashing is cryptographically broken and poses severe security risk',
    affectedNodes: ['phoenix-auth-controller', 'phoenix-user-model'],
    recommendation: 'Migrate to bcrypt or Argon2 for password hashing',
    effort: 8,
    impact: 10,
    riskLevel: 'high'
  },
  {
    id: 'debt-3',
    category: 'design',
    subcategory: 'UI Consistency',
    severity: 'high',
    title: 'Multiple Authentication Form Implementations',
    description: 'Found 4 different login form implementations with inconsistent validation and styling',
    affectedNodes: ['phoenix-login-form'],
    recommendation: 'Create unified authentication component library',
    effort: 13,
    impact: 7,
    riskLevel: 'medium'
  },
  {
    id: 'debt-4',
    category: 'architecture',
    subcategory: 'Service Boundaries',
    severity: 'high',
    title: 'Missing Service Layer Abstraction',
    description: 'Controllers directly access models and database, lacking proper service layer isolation',
    affectedNodes: ['phoenix-auth-controller', 'phoenix-product-controller', 'phoenix-dashboard-controller'],
    recommendation: 'Introduce service layer between controllers and data access',
    effort: 21,
    impact: 8,
    riskLevel: 'medium'
  },
  {
    id: 'debt-5',
    category: 'code-quality',
    subcategory: 'Complexity',
    severity: 'medium',
    title: 'High Cyclomatic Complexity',
    description: 'ProductController has complexity score of 18, making it difficult to maintain and test',
    affectedNodes: ['phoenix-product-controller'],
    recommendation: 'Refactor into smaller, focused methods',
    effort: 5,
    impact: 6,
    riskLevel: 'low'
  },
  {
    id: 'debt-6',
    category: 'functional',
    subcategory: 'Feature Gap',
    severity: 'medium',
    title: 'Missing Two-Factor Authentication',
    description: 'No 2FA implementation despite handling sensitive customer data',
    affectedNodes: ['phoenix-auth-controller', 'phoenix-login-form'],
    recommendation: 'Implement TOTP-based 2FA',
    effort: 13,
    impact: 8,
    riskLevel: 'medium'
  },
  {
    id: 'debt-7',
    category: 'design',
    subcategory: 'Component Reuse',
    severity: 'medium',
    title: 'Duplicate Pagination Logic',
    description: 'Pagination implemented separately in 3 different views instead of reusable component',
    affectedNodes: ['phoenix-product-list', 'phoenix-pagination'],
    recommendation: 'Extract to reusable pagination component',
    effort: 8,
    impact: 5,
    riskLevel: 'low'
  },
  {
    id: 'debt-8',
    category: 'code-quality',
    subcategory: 'Dependencies',
    severity: 'low',
    title: 'Outdated jQuery Library',
    description: 'Using jQuery 1.x which has known vulnerabilities and performance issues',
    affectedNodes: ['phoenix-jquery-validate'],
    recommendation: 'Upgrade to modern validation library or native HTML5 validation',
    effort: 5,
    impact: 4,
    riskLevel: 'low'
  }
];

// Agent Extraction Status
export const agentExtractionStatus: AgentExtractionResult[] = [
  {
    agent: 'code',
    status: 'complete',
    nodesExtracted: phoenixCodeNodes.length,
    confidence: 1.0,
    patterns: ['MVC Pattern', 'Repository Pattern', 'Service Layer (partial)']
  },
  {
    agent: 'architecture',
    status: 'complete',
    nodesExtracted: 8,
    confidence: 0.85,
    patterns: ['Monolithic Architecture', 'Shared Database', 'Direct DB Access']
  },
  {
    agent: 'functional',
    status: 'complete',
    nodesExtracted: 12,
    confidence: 0.75,
    patterns: ['CRUD Operations', 'User Authentication', 'Dashboard Analytics']
  },
  {
    agent: 'design',
    status: 'complete',
    nodesExtracted: 9,
    confidence: 0.8,
    patterns: ['Server-Side Rendering', 'Form-based UI', 'Table Layouts']
  }
];

// Aggregated metrics
export const calculateDebtScore = (category?: string): number => {
  const issues = category 
    ? technicalDebtIssues.filter(i => i.category === category)
    : technicalDebtIssues;
  
  if (issues.length === 0) return 0;
  
  const severityWeights = { critical: 10, high: 7, medium: 4, low: 2 };
  const totalWeight = issues.reduce((sum, issue) => sum + severityWeights[issue.severity], 0);
  const maxPossible = issues.length * 10;
  
  return Math.round((totalWeight / maxPossible) * 10 * 10) / 10;
};

export const getDebtMetrics = () => ({
  overall: calculateDebtScore(),
  architecture: calculateDebtScore('architecture'),
  design: calculateDebtScore('design'),
  functional: calculateDebtScore('functional'),
  code: calculateDebtScore('code-quality')
});

export const getCodeGraphStats = () => ({
  totalNodes: phoenixCodeNodes.length,
  totalEdges: phoenixCodeEdges.length,
  nodesByType: phoenixCodeNodes.reduce((acc, node) => {
    acc[node.type] = (acc[node.type] || 0) + 1;
    return acc;
  }, {} as Record<string, number>),
  totalLinesOfCode: phoenixCodeNodes.reduce((sum, node) => sum + node.linesOfCode, 0),
  averageComplexity: phoenixCodeNodes.reduce((sum, node) => sum + (node.complexity || 0), 0) / phoenixCodeNodes.filter(n => n.complexity).length
});