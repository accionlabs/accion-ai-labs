// Search index for site-wide search using Fuse.js
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
}

export const searchIndex: SearchItem[] = [
  // Home
  {
    id: 'home',
    title: 'Home',
    description: 'Accion AI Labs - Semantic Engineering Platform for enterprise software development',
    path: '/',
    category: 'Home'
  },

  // Core Technology
  {
    id: 'core-technology',
    title: 'Core Technology Overview',
    description: 'Four-ontology framework for semantic software engineering with Breeze.AI',
    path: '/core-technology',
    category: 'Core Technology'
  },
  {
    id: 'kaps-framework',
    title: 'KAPS Framework',
    description: 'Knowledge, Architecture, Process, and Standards framework for semantic engineering',
    path: '/core-technology/kaps-framework',
    category: 'Core Technology'
  },
  {
    id: 'agent-architecture',
    title: 'Agent Architecture',
    description: 'Agentic graph architecture with specialized AI agents for software development',
    path: '/core-technology/agent-architecture',
    category: 'Core Technology'
  },
  {
    id: 'breeze-ai',
    title: 'Breeze.AI',
    description: 'Core semantic engineering platform for automated software development',
    path: '/core-technology/breeze-ai',
    category: 'Core Technology'
  },
  {
    id: 'gen-ai-box',
    title: 'Gen AI in a Box',
    description: 'Packaged generative AI solutions for enterprise deployment',
    path: '/core-technology/gen-ai-box',
    category: 'Core Technology'
  },
  {
    id: 'guardrails',
    title: 'Strategic Guardrails',
    description: 'Safety and compliance guardrails for AI-assisted development',
    path: '/core-technology/guardrails',
    category: 'Core Technology'
  },

  // Solutions
  {
    id: 'solutions',
    title: 'All Solutions',
    description: 'Complete portfolio of AI-powered enterprise solutions',
    path: '/solutions',
    category: 'Solutions'
  },
  {
    id: 'product-engineering',
    title: 'Product Engineering',
    description: 'AI-accelerated product development and engineering solutions',
    path: '/solutions/product-engineering',
    category: 'Solutions'
  },
  {
    id: 'product-engineering-overview',
    title: 'Product Engineering Overview',
    description: 'Semantic-first approach to product development lifecycle',
    path: '/solutions/product-engineering/overview',
    category: 'Product Engineering'
  },
  {
    id: 'requirements-capture',
    title: 'Requirements Capture',
    description: 'AI-powered requirements gathering and semantic analysis',
    path: '/solutions/product-engineering/requirements',
    category: 'Product Engineering'
  },
  {
    id: 'design-generation',
    title: 'Design Generation',
    description: 'Automated design artifact generation from semantic specifications',
    path: '/solutions/product-engineering/design',
    category: 'Product Engineering'
  },
  {
    id: 'implementation-pipeline',
    title: 'Implementation Pipeline',
    description: 'Continuous implementation pipeline with semantic validation',
    path: '/solutions/product-engineering/implementation',
    category: 'Product Engineering'
  },
  {
    id: 'application-reengineering',
    title: 'Application Re-engineering',
    description: 'Legacy application modernization and technical debt remediation',
    path: '/solutions/application-reengineering',
    category: 'Solutions'
  },
  {
    id: 'reengineering-overview',
    title: 'Re-engineering Overview',
    description: 'Comprehensive approach to application modernization',
    path: '/solutions/application-reengineering/overview',
    category: 'Application Re-engineering'
  },
  {
    id: 'discovery-assessment',
    title: 'Discovery & Assessment',
    description: 'Automated codebase analysis and technical debt assessment',
    path: '/solutions/application-reengineering/discovery',
    category: 'Application Re-engineering'
  },
  {
    id: 'reengineering-strategy',
    title: 'Re-engineering Strategy',
    description: 'Strategic planning for application modernization',
    path: '/solutions/application-reengineering/strategy',
    category: 'Application Re-engineering'
  },
  {
    id: 'implementation-modernization',
    title: 'Implementation & Modernization',
    description: 'Executing modernization with semantic preservation',
    path: '/solutions/application-reengineering/implementation',
    category: 'Application Re-engineering'
  },
  {
    id: 'continuous-validation',
    title: 'Continuous Validation',
    description: 'Ongoing validation and quality assurance during modernization',
    path: '/solutions/application-reengineering/validation',
    category: 'Application Re-engineering'
  },
  {
    id: 'asimov',
    title: 'ASIMOV',
    description: 'AI-powered legacy system migration and modernization',
    path: '/solutions/asimov',
    category: 'Solutions'
  },
  {
    id: 'asimov-overview',
    title: 'ASIMOV Overview',
    description: 'Automated system for intelligent migration of vintage systems',
    path: '/solutions/asimov/overview',
    category: 'ASIMOV'
  },
  {
    id: 'discovery-analysis',
    title: 'Discovery & Analysis',
    description: 'Deep analysis of legacy systems for migration planning',
    path: '/solutions/asimov/discovery',
    category: 'ASIMOV'
  },
  {
    id: 'transformation-engine',
    title: 'Transformation Engine',
    description: 'Automated code transformation and migration engine',
    path: '/solutions/asimov/transformation',
    category: 'ASIMOV'
  },
  {
    id: 'migration-patterns',
    title: 'Migration Patterns',
    description: 'Proven patterns for legacy system migration',
    path: '/solutions/asimov/patterns',
    category: 'ASIMOV'
  },
  {
    id: 'success-stories',
    title: 'Success Stories',
    description: 'Case studies and success stories from ASIMOV migrations',
    path: '/solutions/asimov/success-stories',
    category: 'ASIMOV'
  },
  {
    id: 'customer-service',
    title: 'Customer Service AI',
    description: 'AI-powered customer service and support solutions',
    path: '/solutions/customer-service',
    category: 'Solutions'
  },
  {
    id: 'customer-service-overview',
    title: 'Customer Service Overview',
    description: 'Comprehensive AI solutions for customer support',
    path: '/solutions/customer-service/overview',
    category: 'Customer Service'
  },
  {
    id: 'self-heal-bot',
    title: 'Self-Heal Bot',
    description: 'Autonomous customer service bot with self-healing capabilities',
    path: '/solutions/customer-service/self-heal-bot',
    category: 'Customer Service'
  },
  {
    id: 'assisted-heal-bot',
    title: 'Assisted Heal Bot',
    description: 'Human-assisted AI bot for complex customer issues',
    path: '/solutions/customer-service/assisted-heal-bot',
    category: 'Customer Service'
  },
  {
    id: 'business-optimization',
    title: 'Business Optimization Hub',
    description: 'AI-driven business process optimization for customer service',
    path: '/solutions/customer-service/business-optimization',
    category: 'Customer Service'
  },
  {
    id: 'implementation-roadmap',
    title: 'Implementation Roadmap',
    description: 'Roadmap for deploying customer service AI solutions',
    path: '/solutions/customer-service/implementation',
    category: 'Customer Service'
  },
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    description: 'AI-powered data engineering and pipeline automation',
    path: '/solutions/data-engineering',
    category: 'Solutions'
  },

  // Portfolio Rationalization
  {
    id: 'portfolio-overview',
    title: 'Portfolio Overview',
    description: 'Software portfolio analysis and rationalization dashboard',
    path: '/portfolio/overview',
    category: 'Portfolio'
  },
  {
    id: 'component-comparator',
    title: 'Component Comparator',
    description: 'Compare and analyze software components across products',
    path: '/portfolio/comparator',
    category: 'Portfolio'
  },
  {
    id: 'graph-explorer',
    title: 'Graph Explorer',
    description: 'Interactive exploration of semantic knowledge graphs',
    path: '/portfolio/graph-explorer',
    category: 'Portfolio'
  },
  {
    id: 'rationalization-roadmap',
    title: 'Rationalization Roadmap',
    description: 'Strategic roadmap for portfolio rationalization',
    path: '/portfolio/roadmap',
    category: 'Portfolio'
  },

  // Technical Debt
  {
    id: 'debt-assessment',
    title: 'Technical Debt Assessment',
    description: 'Comprehensive technical debt analysis and scoring',
    path: '/technical-debt/assessment',
    category: 'Technical Debt'
  },
  {
    id: 'agent-analysis',
    title: 'Agent Analysis',
    description: 'AI agent-based analysis of technical debt patterns',
    path: '/technical-debt/agent-analysis',
    category: 'Technical Debt'
  },
  {
    id: 'debt-graph-explorer',
    title: 'Debt Graph Explorer',
    description: 'Visualize technical debt relationships and dependencies',
    path: '/technical-debt/graph-explorer',
    category: 'Technical Debt'
  },
  {
    id: 'remediation-roadmap',
    title: 'Remediation Roadmap',
    description: 'Prioritized roadmap for technical debt remediation',
    path: '/technical-debt/roadmap',
    category: 'Technical Debt'
  },

  // Breeze.AI Deep Dive
  {
    id: 'manual-translation-tax',
    title: 'Manual Translation Tax',
    description: 'The crisis of manual translation in software development',
    path: '/breeze-process/challenge/manual-translation-tax',
    category: 'Breeze.AI Deep Dive'
  },
  {
    id: 'traditional-approaches',
    title: 'Traditional Approaches',
    description: 'Why traditional software development approaches fail',
    path: '/breeze-process/challenge/traditional-approaches',
    category: 'Breeze.AI Deep Dive'
  },
  {
    id: 'breeze-breakthrough',
    title: 'Breeze Breakthrough',
    description: 'How Breeze.AI solves the semantic engineering challenge',
    path: '/breeze-process/challenge/breeze-breakthrough',
    category: 'Breeze.AI Deep Dive'
  },
  {
    id: 'competitive-advantages',
    title: 'Competitive Advantages',
    description: 'Key differentiators and competitive advantages of Breeze.AI',
    path: '/breeze-process/challenge/competitive-advantages',
    category: 'Breeze.AI Deep Dive'
  },
  {
    id: 'architecture-overview',
    title: 'Architecture Overview',
    description: 'High-level architecture of the Breeze.AI platform',
    path: '/breeze-process/architecture/overview',
    category: 'System Architecture'
  },
  {
    id: 'core-components',
    title: 'Core Components',
    description: 'Essential components of the Breeze.AI system',
    path: '/breeze-process/architecture/components',
    category: 'System Architecture'
  },
  {
    id: 'component-interactions',
    title: 'Component Interactions',
    description: 'How Breeze.AI components interact and communicate',
    path: '/breeze-process/architecture/interactions',
    category: 'System Architecture'
  },
  {
    id: 'integration-points',
    title: 'Integration Points',
    description: 'Integration capabilities and extension points',
    path: '/breeze-process/architecture/integration',
    category: 'System Architecture'
  },
  {
    id: 'scalability-performance',
    title: 'Scalability & Performance',
    description: 'Scaling strategies and performance optimization',
    path: '/breeze-process/architecture/scalability',
    category: 'System Architecture'
  },
  {
    id: 'security-compliance',
    title: 'Security & Compliance',
    description: 'Security measures and compliance frameworks',
    path: '/breeze-process/architecture/security',
    category: 'System Architecture'
  },
  {
    id: 'semantic-overview',
    title: 'Semantic Framework Overview',
    description: 'Four-ontology semantic model structure',
    path: '/breeze-process/semantic/overview',
    category: 'Semantic Model'
  },
  {
    id: 'functional-ontology',
    title: 'Functional Ontology',
    description: 'Business capabilities and functional requirements modeling',
    path: '/breeze-process/semantic/functional',
    category: 'Semantic Model'
  },
  {
    id: 'design-ontology',
    title: 'Design Ontology',
    description: 'User experience and interface design modeling',
    path: '/breeze-process/semantic/design',
    category: 'Semantic Model'
  },
  {
    id: 'architecture-ontology',
    title: 'Architecture Ontology',
    description: 'System architecture and technical design modeling',
    path: '/breeze-process/semantic/architecture',
    category: 'Semantic Model'
  },
  {
    id: 'code-ontology',
    title: 'Code Ontology',
    description: 'Source code structure and implementation modeling',
    path: '/breeze-process/semantic/code',
    category: 'Semantic Model'
  },
  {
    id: 'cross-relationships',
    title: 'Cross-Ontology Relationships',
    description: 'Traceability links between ontology layers',
    path: '/breeze-process/semantic/relationships',
    category: 'Semantic Model'
  },
  {
    id: 'agents-layer',
    title: 'Agents Layer',
    description: 'AI agents that operate on the semantic model',
    path: '/breeze-process/semantic/agents',
    category: 'Semantic Model'
  },
  {
    id: 'process-overview',
    title: 'Process Flow Overview',
    description: 'Three-phase evolution of semantic engineering',
    path: '/breeze-process/flow/overview',
    category: 'Process Flow'
  },
  {
    id: 'phase1-foundation',
    title: 'Phase 1: Foundation',
    description: 'Building the semantic foundation with 15% manual effort',
    path: '/breeze-process/flow/phase1',
    category: 'Process Flow'
  },
  {
    id: 'phase2-evolution',
    title: 'Phase 2: Evolution',
    description: 'Evolving to 30% manual effort with AI assistance',
    path: '/breeze-process/flow/phase2',
    category: 'Process Flow'
  },
  {
    id: 'phase3-semantic-first',
    title: 'Phase 3: Semantic First',
    description: 'Achieving semantic-first development with 5% manual effort',
    path: '/breeze-process/flow/phase3',
    category: 'Process Flow'
  },

  // Contact
  {
    id: 'contact',
    title: 'Get Started',
    description: 'Contact Accion AI Labs to get started with semantic engineering',
    path: '/contact',
    category: 'Contact'
  }
];

export default searchIndex;
