import i18n from '../i18n/i18n';

// Search index for site-wide search using Fuse.js
export interface SearchItem {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
}

// Search index entry definitions with translation keys
interface SearchEntryDef {
  id: string;
  titleKey: string;
  descriptionKey: string;
  path: string;
  categoryKey: string;
}

const searchEntries: SearchEntryDef[] = [
  // Home
  { id: 'home', titleKey: 'items.home.title', descriptionKey: 'items.home.description', path: '/', categoryKey: 'categories.home' },

  // Core Technology
  { id: 'core-technology', titleKey: 'items.coreTechnology.title', descriptionKey: 'items.coreTechnology.description', path: '/core-technology', categoryKey: 'categories.coreTechnology' },
  { id: 'kaps-framework', titleKey: 'items.kapsFramework.title', descriptionKey: 'items.kapsFramework.description', path: '/core-technology/kaps-framework', categoryKey: 'categories.coreTechnology' },
  { id: 'agent-architecture', titleKey: 'items.agentArchitecture.title', descriptionKey: 'items.agentArchitecture.description', path: '/core-technology/agent-architecture', categoryKey: 'categories.coreTechnology' },
  { id: 'breeze-ai', titleKey: 'items.breezeAI.title', descriptionKey: 'items.breezeAI.description', path: '/core-technology/breeze-ai', categoryKey: 'categories.coreTechnology' },
  { id: 'gen-ai-box', titleKey: 'items.genAIBox.title', descriptionKey: 'items.genAIBox.description', path: '/core-technology/gen-ai-box', categoryKey: 'categories.coreTechnology' },
  { id: 'guardrails', titleKey: 'items.guardrails.title', descriptionKey: 'items.guardrails.description', path: '/core-technology/guardrails', categoryKey: 'categories.coreTechnology' },

  // Solutions
  { id: 'solutions', titleKey: 'items.solutions.title', descriptionKey: 'items.solutions.description', path: '/solutions', categoryKey: 'categories.solutions' },
  { id: 'product-engineering', titleKey: 'items.productEngineering.title', descriptionKey: 'items.productEngineering.description', path: '/solutions/product-engineering', categoryKey: 'categories.solutions' },
  { id: 'product-engineering-overview', titleKey: 'items.productEngineeringOverview.title', descriptionKey: 'items.productEngineeringOverview.description', path: '/solutions/product-engineering/overview', categoryKey: 'categories.productEngineering' },
  { id: 'requirements-capture', titleKey: 'items.requirementsCapture.title', descriptionKey: 'items.requirementsCapture.description', path: '/solutions/product-engineering/requirements', categoryKey: 'categories.productEngineering' },
  { id: 'design-generation', titleKey: 'items.designGeneration.title', descriptionKey: 'items.designGeneration.description', path: '/solutions/product-engineering/design', categoryKey: 'categories.productEngineering' },
  { id: 'implementation-pipeline', titleKey: 'items.implementationPipeline.title', descriptionKey: 'items.implementationPipeline.description', path: '/solutions/product-engineering/implementation', categoryKey: 'categories.productEngineering' },
  { id: 'application-reengineering', titleKey: 'items.applicationReengineering.title', descriptionKey: 'items.applicationReengineering.description', path: '/solutions/application-reengineering', categoryKey: 'categories.solutions' },
  { id: 'reengineering-overview', titleKey: 'items.reengineeringOverview.title', descriptionKey: 'items.reengineeringOverview.description', path: '/solutions/application-reengineering/overview', categoryKey: 'categories.applicationReengineering' },
  { id: 'discovery-assessment', titleKey: 'items.discoveryAssessment.title', descriptionKey: 'items.discoveryAssessment.description', path: '/solutions/application-reengineering/discovery', categoryKey: 'categories.applicationReengineering' },
  { id: 'reengineering-strategy', titleKey: 'items.reengineeringStrategy.title', descriptionKey: 'items.reengineeringStrategy.description', path: '/solutions/application-reengineering/strategy', categoryKey: 'categories.applicationReengineering' },
  { id: 'implementation-modernization', titleKey: 'items.implementationModernization.title', descriptionKey: 'items.implementationModernization.description', path: '/solutions/application-reengineering/implementation', categoryKey: 'categories.applicationReengineering' },
  { id: 'continuous-validation', titleKey: 'items.continuousValidation.title', descriptionKey: 'items.continuousValidation.description', path: '/solutions/application-reengineering/validation', categoryKey: 'categories.applicationReengineering' },
  { id: 'asimov', titleKey: 'items.asimov.title', descriptionKey: 'items.asimov.description', path: '/solutions/asimov', categoryKey: 'categories.solutions' },
  { id: 'asimov-overview', titleKey: 'items.asimovOverview.title', descriptionKey: 'items.asimovOverview.description', path: '/solutions/asimov/overview', categoryKey: 'categories.asimov' },
  { id: 'discovery-analysis', titleKey: 'items.discoveryAnalysis.title', descriptionKey: 'items.discoveryAnalysis.description', path: '/solutions/asimov/discovery', categoryKey: 'categories.asimov' },
  { id: 'transformation-engine', titleKey: 'items.transformationEngine.title', descriptionKey: 'items.transformationEngine.description', path: '/solutions/asimov/transformation', categoryKey: 'categories.asimov' },
  { id: 'migration-patterns', titleKey: 'items.migrationPatterns.title', descriptionKey: 'items.migrationPatterns.description', path: '/solutions/asimov/patterns', categoryKey: 'categories.asimov' },
  { id: 'success-stories', titleKey: 'items.successStories.title', descriptionKey: 'items.successStories.description', path: '/solutions/asimov/success-stories', categoryKey: 'categories.asimov' },
  { id: 'customer-service', titleKey: 'items.customerService.title', descriptionKey: 'items.customerService.description', path: '/solutions/customer-service', categoryKey: 'categories.solutions' },
  { id: 'customer-service-overview', titleKey: 'items.customerServiceOverview.title', descriptionKey: 'items.customerServiceOverview.description', path: '/solutions/customer-service/overview', categoryKey: 'categories.customerService' },
  { id: 'self-heal-bot', titleKey: 'items.selfHealBot.title', descriptionKey: 'items.selfHealBot.description', path: '/solutions/customer-service/self-heal-bot', categoryKey: 'categories.customerService' },
  { id: 'assisted-heal-bot', titleKey: 'items.assistedHealBot.title', descriptionKey: 'items.assistedHealBot.description', path: '/solutions/customer-service/assisted-heal-bot', categoryKey: 'categories.customerService' },
  { id: 'business-optimization', titleKey: 'items.businessOptimization.title', descriptionKey: 'items.businessOptimization.description', path: '/solutions/customer-service/business-optimization', categoryKey: 'categories.customerService' },
  { id: 'implementation-roadmap', titleKey: 'items.implementationRoadmap.title', descriptionKey: 'items.implementationRoadmap.description', path: '/solutions/customer-service/implementation', categoryKey: 'categories.customerService' },
  { id: 'data-engineering', titleKey: 'items.dataEngineering.title', descriptionKey: 'items.dataEngineering.description', path: '/solutions/data-engineering', categoryKey: 'categories.solutions' },

  // Portfolio Rationalization
  { id: 'portfolio-overview', titleKey: 'items.portfolioOverview.title', descriptionKey: 'items.portfolioOverview.description', path: '/portfolio/overview', categoryKey: 'categories.portfolio' },
  { id: 'component-comparator', titleKey: 'items.componentComparator.title', descriptionKey: 'items.componentComparator.description', path: '/portfolio/comparator', categoryKey: 'categories.portfolio' },
  { id: 'graph-explorer', titleKey: 'items.graphExplorer.title', descriptionKey: 'items.graphExplorer.description', path: '/portfolio/graph-explorer', categoryKey: 'categories.portfolio' },
  { id: 'rationalization-roadmap', titleKey: 'items.rationalizationRoadmap.title', descriptionKey: 'items.rationalizationRoadmap.description', path: '/portfolio/roadmap', categoryKey: 'categories.portfolio' },

  // Technical Debt
  { id: 'debt-assessment', titleKey: 'items.debtAssessment.title', descriptionKey: 'items.debtAssessment.description', path: '/technical-debt/assessment', categoryKey: 'categories.technicalDebt' },
  { id: 'agent-analysis', titleKey: 'items.agentAnalysis.title', descriptionKey: 'items.agentAnalysis.description', path: '/technical-debt/agent-analysis', categoryKey: 'categories.technicalDebt' },
  { id: 'debt-graph-explorer', titleKey: 'items.debtGraphExplorer.title', descriptionKey: 'items.debtGraphExplorer.description', path: '/technical-debt/graph-explorer', categoryKey: 'categories.technicalDebt' },
  { id: 'remediation-roadmap', titleKey: 'items.remediationRoadmap.title', descriptionKey: 'items.remediationRoadmap.description', path: '/technical-debt/roadmap', categoryKey: 'categories.technicalDebt' },

  // Breeze.AI Deep Dive
  { id: 'manual-translation-tax', titleKey: 'items.manualTranslationTax.title', descriptionKey: 'items.manualTranslationTax.description', path: '/breeze-process/challenge/manual-translation-tax', categoryKey: 'categories.breezeDeepDive' },
  { id: 'traditional-approaches', titleKey: 'items.traditionalApproaches.title', descriptionKey: 'items.traditionalApproaches.description', path: '/breeze-process/challenge/traditional-approaches', categoryKey: 'categories.breezeDeepDive' },
  { id: 'breeze-breakthrough', titleKey: 'items.breezeBreakthrough.title', descriptionKey: 'items.breezeBreakthrough.description', path: '/breeze-process/challenge/breeze-breakthrough', categoryKey: 'categories.breezeDeepDive' },
  { id: 'competitive-advantages', titleKey: 'items.competitiveAdvantages.title', descriptionKey: 'items.competitiveAdvantages.description', path: '/breeze-process/challenge/competitive-advantages', categoryKey: 'categories.breezeDeepDive' },
  { id: 'architecture-overview', titleKey: 'items.architectureOverview.title', descriptionKey: 'items.architectureOverview.description', path: '/breeze-process/architecture/overview', categoryKey: 'categories.systemArchitecture' },
  { id: 'core-components', titleKey: 'items.coreComponents.title', descriptionKey: 'items.coreComponents.description', path: '/breeze-process/architecture/components', categoryKey: 'categories.systemArchitecture' },
  { id: 'component-interactions', titleKey: 'items.componentInteractions.title', descriptionKey: 'items.componentInteractions.description', path: '/breeze-process/architecture/interactions', categoryKey: 'categories.systemArchitecture' },
  { id: 'integration-points', titleKey: 'items.integrationPoints.title', descriptionKey: 'items.integrationPoints.description', path: '/breeze-process/architecture/integration', categoryKey: 'categories.systemArchitecture' },
  { id: 'scalability-performance', titleKey: 'items.scalabilityPerformance.title', descriptionKey: 'items.scalabilityPerformance.description', path: '/breeze-process/architecture/scalability', categoryKey: 'categories.systemArchitecture' },
  { id: 'security-compliance', titleKey: 'items.securityCompliance.title', descriptionKey: 'items.securityCompliance.description', path: '/breeze-process/architecture/security', categoryKey: 'categories.systemArchitecture' },
  { id: 'semantic-overview', titleKey: 'items.semanticOverview.title', descriptionKey: 'items.semanticOverview.description', path: '/breeze-process/semantic/overview', categoryKey: 'categories.semanticModel' },
  { id: 'functional-ontology', titleKey: 'items.functionalOntology.title', descriptionKey: 'items.functionalOntology.description', path: '/breeze-process/semantic/functional', categoryKey: 'categories.semanticModel' },
  { id: 'design-ontology', titleKey: 'items.designOntology.title', descriptionKey: 'items.designOntology.description', path: '/breeze-process/semantic/design', categoryKey: 'categories.semanticModel' },
  { id: 'architecture-ontology', titleKey: 'items.architectureOntology.title', descriptionKey: 'items.architectureOntology.description', path: '/breeze-process/semantic/architecture', categoryKey: 'categories.semanticModel' },
  { id: 'code-ontology', titleKey: 'items.codeOntology.title', descriptionKey: 'items.codeOntology.description', path: '/breeze-process/semantic/code', categoryKey: 'categories.semanticModel' },
  { id: 'cross-relationships', titleKey: 'items.crossRelationships.title', descriptionKey: 'items.crossRelationships.description', path: '/breeze-process/semantic/relationships', categoryKey: 'categories.semanticModel' },
  { id: 'agents-layer', titleKey: 'items.agentsLayer.title', descriptionKey: 'items.agentsLayer.description', path: '/breeze-process/semantic/agents', categoryKey: 'categories.semanticModel' },
  { id: 'process-overview', titleKey: 'items.processOverview.title', descriptionKey: 'items.processOverview.description', path: '/breeze-process/flow/overview', categoryKey: 'categories.processFlow' },
  { id: 'phase1-foundation', titleKey: 'items.phase1Foundation.title', descriptionKey: 'items.phase1Foundation.description', path: '/breeze-process/flow/phase1', categoryKey: 'categories.processFlow' },
  { id: 'phase2-evolution', titleKey: 'items.phase2Evolution.title', descriptionKey: 'items.phase2Evolution.description', path: '/breeze-process/flow/phase2', categoryKey: 'categories.processFlow' },
  { id: 'phase3-semantic-first', titleKey: 'items.phase3SemanticFirst.title', descriptionKey: 'items.phase3SemanticFirst.description', path: '/breeze-process/flow/phase3', categoryKey: 'categories.processFlow' },

  // Contact
  { id: 'contact', titleKey: 'items.contact.title', descriptionKey: 'items.contact.description', path: '/contact', categoryKey: 'categories.contact' }
];

// Build a localized search index using current i18n language
export function getLocalizedSearchIndex(): SearchItem[] {
  const t = i18n.getFixedT(i18n.language, 'search') as (key: string) => string;
  return searchEntries.map(entry => ({
    id: entry.id,
    title: t(entry.titleKey),
    description: t(entry.descriptionKey),
    path: entry.path,
    category: t(entry.categoryKey)
  }));
}

// Default export for backward compatibility (English)
export const searchIndex = getLocalizedSearchIndex();

export default searchIndex;
