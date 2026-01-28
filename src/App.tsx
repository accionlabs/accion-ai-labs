import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { OntologyProvider } from './contexts/OntologyContext';
import { DemoProvider } from './contexts/DemoContext';
import { NavigationProvider } from './contexts/NavigationContext';
import ScrollToTop from './components/common/ScrollToTop';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './pages/LandingPage';
import PortfolioOverview from './components/portfolio/PortfolioOverview';
import GraphExplorer from './components/portfolio/GraphExplorer';
import ComponentComparator from './components/portfolio/ComponentComparator';
import RationalizationRoadmap from './components/portfolio/RationalizationRoadmap';
import UnifiedProductView from './components/portfolio/UnifiedProductView';
import TechnicalDebtOverview from './components/technicalDebt/TechnicalDebtOverview';
import TechnicalDebtGraphExplorer from './components/technicalDebt/TechnicalDebtGraphExplorer';
import AgentAnalysisView from './components/technicalDebt/AgentAnalysisView';
import DebtAssessmentDashboard from './components/technicalDebt/DebtAssessmentDashboard';
import RemediationRoadmap from './components/technicalDebt/RemediationRoadmap';
import CoreTechnologyOverview from './components/coreTechnology/CoreTechnologyOverview';
import SemanticEngineeringOverview from './components/coreTechnology/SemanticEngineeringOverview';
import KAPSFramework from './components/coreTechnology/KAPSFramework';
import AgenticGraphArchitecture from './components/coreTechnology/AgenticGraphArchitecture';
import AgenticArchitecture from './components/coreTechnology/AgenticArchitecture';
import GenAIInABox from './components/coreTechnology/GenAIInABox';
import StrategicGuardrails from './components/coreTechnology/StrategicGuardrails';
import SolutionShowcase from './components/solutions/SolutionShowcase';
import CustomerServiceOverview from './components/solutions/customerService/CustomerServiceOverview';
import DataEngineeringShowcase from './components/solutions/DataEngineeringShowcase';
import TechnicalDebtShowcase from './components/solutions/TechnicalDebtShowcase';
import PortfolioRationalizationShowcase from './components/solutions/PortfolioRationalizationShowcase';
import ASIMOVOverview from './components/solutions/asimov/ASIMOVOverview';
import DiscoveryAnalysis from './components/solutions/asimov/DiscoveryAnalysis';
import TransformationEngine from './components/solutions/asimov/TransformationEngine';
import MigrationPatterns from './components/solutions/asimov/MigrationPatterns';
import SuccessStories from './components/solutions/asimov/SuccessStories';
import SelfHealBot from './components/solutions/customerService/SelfHealBot';
import AssistedHealBot from './components/solutions/customerService/AssistedHealBot';
import BusinessOptimizationHub from './components/solutions/customerService/BusinessOptimizationHub';
import ImplementationRoadmap from './components/solutions/customerService/ImplementationRoadmap';
import ContactPage from './components/contact/ContactPage';

// Product Engineering Deep Dive imports
import ProductDevelopmentOverview from './components/solutions/productDevelopment/ProductDevelopmentOverview';
import KnowledgeGraphExtraction from './components/solutions/productDevelopment/KnowledgeGraphExtraction';
import StakeholderValidation from './components/solutions/productDevelopment/StakeholderValidation';
import ImplementationPipeline from './components/solutions/productDevelopment/ImplementationPipeline';

// Application Re-engineering Deep Dive imports
import ApplicationReengineeringOverview from './components/solutions/applicationReengineering/ApplicationReengineeringOverview';
import DiscoveryAssessment from './components/solutions/applicationReengineering/DiscoveryAssessment';
import ReengineeringStrategy from './components/solutions/applicationReengineering/ReengineeringStrategy';
import ImplementationModernization from './components/solutions/applicationReengineering/ImplementationModernization';
import ContinuousValidation from './components/solutions/applicationReengineering/ContinuousValidation';

// Breeze.AI Deep Dive imports
import ManualTranslationTaxPage from './components/breezeProcess/challenge/ManualTranslationTaxPage';
import TraditionalApproachesPage from './components/breezeProcess/challenge/TraditionalApproachesPage';
import BreezeBreakthroughPage from './components/breezeProcess/challenge/BreezeBreakthroughPage';
import RevolutionaryCapabilitiesPage from './components/breezeProcess/challenge/RevolutionaryCapabilitiesPage';
import LegacyTransformationPage from './components/breezeProcess/challenge/LegacyTransformationPage';
import CompetitiveAdvantagesPage from './components/breezeProcess/challenge/CompetitiveAdvantagesPage';

import ArchitectureOverviewPage from './components/breezeProcess/architecture/OverviewPage';
import CoreComponentsPage from './components/breezeProcess/architecture/CoreComponentsPage';
import ComponentInteractionsPage from './components/breezeProcess/architecture/ComponentInteractionsPage';
import IntegrationPointsPage from './components/breezeProcess/architecture/IntegrationPointsPage';
import ScalabilityPerformancePage from './components/breezeProcess/architecture/ScalabilityPerformancePage';
import SecurityCompliancePage from './components/breezeProcess/architecture/SecurityCompliancePage';

import SemanticOverviewPage from './components/breezeProcess/semantic/OverviewPage';
import FunctionalOntologyPage from './components/breezeProcess/semantic/FunctionalOntologyPage';
import DesignOntologyPage from './components/breezeProcess/semantic/DesignOntologyPage';
import ArchitectureOntologyPage from './components/breezeProcess/semantic/ArchitectureOntologyPage';
import CodeOntologyPage from './components/breezeProcess/semantic/CodeOntologyPage';
import RelationshipsPage from './components/breezeProcess/semantic/RelationshipsPage';
import AgentsLayerPage from './components/breezeProcess/semantic/AgentsLayerPage';

import ProcessOverviewPage from './components/breezeProcess/flow/OverviewPage';
import Phase1Page from './components/breezeProcess/flow/Phase1Page';
import Phase2Page from './components/breezeProcess/flow/Phase2Page';
import Phase3Page from './components/breezeProcess/flow/Phase3Page';

const App: React.FC = () => {
  return (
    <OntologyProvider>
      <DemoProvider>
        <NavigationProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop />
            <Routes>
              {/* Landing page without sidebar */}
              <Route path="/" element={<LandingPage />} />
              
              {/* Core Technology Section */}
              <Route path="/core-technology" element={
                <AppLayout>
                  <SemanticEngineeringOverview />
                </AppLayout>
              } />
              <Route path="/core-technology/kaps-framework" element={
                <AppLayout>
                  <KAPSFramework />
                </AppLayout>
              } />
              <Route path="/core-technology/breeze-ai" element={
                <AppLayout>
                  <CoreTechnologyOverview />
                </AppLayout>
              } />
              <Route path="/core-technology/agentic-architecture" element={
                <AppLayout>
                  <AgenticGraphArchitecture />
                </AppLayout>
              } />
              <Route path="/core-technology/agent-architecture" element={
                <AppLayout>
                  <AgenticArchitecture />
                </AppLayout>
              } />
              <Route path="/core-technology/gen-ai-box" element={
                <AppLayout>
                  <GenAIInABox />
                </AppLayout>
              } />
              <Route path="/core-technology/guardrails" element={
                <AppLayout>
                  <StrategicGuardrails />
                </AppLayout>
              } />
              
              {/* Solutions Showcase */}
              <Route path="/solutions" element={
                <AppLayout>
                  <SolutionShowcase />
                </AppLayout>
              } />
              <Route path="/solutions/customer-service" element={
                <AppLayout>
                  <CustomerServiceOverview />
                </AppLayout>
              } />
              <Route path="/solutions/customer-service/self-heal-bot" element={
                <AppLayout>
                  <SelfHealBot />
                </AppLayout>
              } />
              <Route path="/solutions/customer-service/assisted-heal-bot" element={
                <AppLayout>
                  <AssistedHealBot />
                </AppLayout>
              } />
              <Route path="/solutions/customer-service/optimization-hub" element={
                <AppLayout>
                  <BusinessOptimizationHub />
                </AppLayout>
              } />
              <Route path="/solutions/customer-service/implementation" element={
                <AppLayout>
                  <ImplementationRoadmap />
                </AppLayout>
              } />
              <Route path="/solutions/data-engineering" element={
                <AppLayout>
                  <DataEngineeringShowcase />
                </AppLayout>
              } />
              <Route path="/solutions/technical-debt" element={
                <AppLayout>
                  <TechnicalDebtShowcase />
                </AppLayout>
              } />
              <Route path="/solutions/portfolio-rationalization" element={
                <AppLayout>
                  <PortfolioRationalizationShowcase />
                </AppLayout>
              } />
              
              {/* ASIMOV Legacy Migration Deep Dive */}
              <Route path="/solutions/asimov" element={
                <AppLayout>
                  <ASIMOVOverview />
                </AppLayout>
              } />
              <Route path="/solutions/asimov/discovery" element={
                <AppLayout>
                  <DiscoveryAnalysis />
                </AppLayout>
              } />
              <Route path="/solutions/asimov/transformation" element={
                <AppLayout>
                  <TransformationEngine />
                </AppLayout>
              } />
              <Route path="/solutions/asimov/patterns" element={
                <AppLayout>
                  <MigrationPatterns />
                </AppLayout>
              } />
              <Route path="/solutions/asimov/success-stories" element={
                <AppLayout>
                  <SuccessStories />
                </AppLayout>
              } />

              {/* Product Engineering Deep Dive */}
              <Route path="/solutions/product-development" element={
                <AppLayout>
                  <ProductDevelopmentOverview />
                </AppLayout>
              } />
              <Route path="/solutions/product-development/extraction" element={
                <AppLayout>
                  <KnowledgeGraphExtraction />
                </AppLayout>
              } />
              <Route path="/solutions/product-development/validation" element={
                <AppLayout>
                  <StakeholderValidation />
                </AppLayout>
              } />
              <Route path="/solutions/product-development/implementation" element={
                <AppLayout>
                  <ImplementationPipeline />
                </AppLayout>
              } />

              {/* Application Re-engineering Deep Dive */}
              <Route path="/solutions/application-reengineering" element={
                <AppLayout>
                  <ApplicationReengineeringOverview />
                </AppLayout>
              } />
              <Route path="/solutions/application-reengineering/discovery" element={
                <AppLayout>
                  <DiscoveryAssessment />
                </AppLayout>
              } />
              <Route path="/solutions/application-reengineering/strategy" element={
                <AppLayout>
                  <ReengineeringStrategy />
                </AppLayout>
              } />
              <Route path="/solutions/application-reengineering/implementation" element={
                <AppLayout>
                  <ImplementationModernization />
                </AppLayout>
              } />
              <Route path="/solutions/application-reengineering/validation" element={
                <AppLayout>
                  <ContinuousValidation />
                </AppLayout>
              } />

              {/* Contact Page */}
              <Route path="/contact" element={
                <AppLayout>
                  <ContactPage />
                </AppLayout>
              } />
              
              {/* Technical Debt Section */}
              <Route path="/technical-debt" element={
                <AppLayout>
                  <TechnicalDebtOverview />
                </AppLayout>
              } />
              <Route path="/technical-debt/graph-explorer" element={
                <AppLayout showToolSidebar>
                  <TechnicalDebtGraphExplorer />
                </AppLayout>
              } />
              <Route path="/technical-debt/agent-analysis" element={
                <AppLayout>
                  <AgentAnalysisView />
                </AppLayout>
              } />
              <Route path="/technical-debt/assessment" element={
                <AppLayout>
                  <DebtAssessmentDashboard />
                </AppLayout>
              } />
              <Route path="/technical-debt/remediation" element={
                <AppLayout>
                  <RemediationRoadmap />
                </AppLayout>
              } />
              
              {/* Portfolio Rationalization Section */}
              <Route path="/portfolio" element={
                <AppLayout>
                  <PortfolioOverview />
                </AppLayout>
              } />
              <Route path="/portfolio/graph-explorer" element={
                <AppLayout showToolSidebar>
                  <GraphExplorer />
                </AppLayout>
              } />
              <Route path="/portfolio/component-comparator" element={
                <AppLayout showToolSidebar>
                  <ComponentComparator />
                </AppLayout>
              } />
              <Route path="/portfolio/rationalization-roadmap" element={
                <AppLayout>
                  <RationalizationRoadmap />
                </AppLayout>
              } />
              <Route path="/portfolio/unified-product" element={
                <AppLayout>
                  <UnifiedProductView />
                </AppLayout>
              } />
              
              {/* Breeze.AI Deep Dive Section */}
              {/* Challenge & Solution */}
              <Route path="/breeze-process/challenge/manual-translation-tax" element={
                <AppLayout>
                  <ManualTranslationTaxPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/challenge/traditional-approaches" element={
                <AppLayout>
                  <TraditionalApproachesPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/challenge/breakthrough" element={
                <AppLayout>
                  <BreezeBreakthroughPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/challenge/capabilities" element={
                <AppLayout>
                  <RevolutionaryCapabilitiesPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/challenge/legacy" element={
                <AppLayout>
                  <LegacyTransformationPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/challenge/advantages" element={
                <AppLayout>
                  <CompetitiveAdvantagesPage />
                </AppLayout>
              } />
              
              {/* Architecture */}
              <Route path="/breeze-process/architecture/overview" element={
                <AppLayout>
                  <ArchitectureOverviewPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/architecture/components" element={
                <AppLayout>
                  <CoreComponentsPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/architecture/interactions" element={
                <AppLayout>
                  <ComponentInteractionsPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/architecture/integration" element={
                <AppLayout>
                  <IntegrationPointsPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/architecture/scalability" element={
                <AppLayout>
                  <ScalabilityPerformancePage />
                </AppLayout>
              } />
              <Route path="/breeze-process/architecture/security" element={
                <AppLayout>
                  <SecurityCompliancePage />
                </AppLayout>
              } />
              
              {/* Semantic Model */}
              <Route path="/breeze-process/semantic/overview" element={
                <AppLayout>
                  <SemanticOverviewPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/semantic/functional" element={
                <AppLayout>
                  <FunctionalOntologyPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/semantic/design" element={
                <AppLayout>
                  <DesignOntologyPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/semantic/architecture" element={
                <AppLayout>
                  <ArchitectureOntologyPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/semantic/code" element={
                <AppLayout>
                  <CodeOntologyPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/semantic/relationships" element={
                <AppLayout>
                  <RelationshipsPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/semantic/agents" element={
                <AppLayout>
                  <AgentsLayerPage />
                </AppLayout>
              } />
              
              {/* Process Flow */}
              <Route path="/breeze-process/flow/overview" element={
                <AppLayout>
                  <ProcessOverviewPage />
                </AppLayout>
              } />
              <Route path="/breeze-process/flow/phase1" element={
                <AppLayout>
                  <Phase1Page />
                </AppLayout>
              } />
              <Route path="/breeze-process/flow/phase2" element={
                <AppLayout>
                  <Phase2Page />
                </AppLayout>
              } />
              <Route path="/breeze-process/flow/phase3" element={
                <AppLayout>
                  <Phase3Page />
                </AppLayout>
              } />
              
              {/* Legacy redirects */}
              <Route path="/dashboard" element={<Navigate to="/portfolio" replace />} />
              <Route path="/graph-explorer" element={<Navigate to="/portfolio/graph-explorer" replace />} />
              <Route path="/component-comparator" element={<Navigate to="/portfolio/component-comparator" replace />} />
              <Route path="/rationalization-roadmap" element={<Navigate to="/portfolio/rationalization-roadmap" replace />} />

              {/* Technical Debt to Application Re-engineering redirects */}
              <Route path="/solutions/technical-debt" element={<Navigate to="/solutions/application-reengineering" replace />} />
              <Route path="/technical-debt" element={<Navigate to="/solutions/application-reengineering" replace />} />
              <Route path="/technical-debt/agent-analysis" element={<Navigate to="/solutions/application-reengineering/discovery" replace />} />
              <Route path="/technical-debt/graph-explorer" element={<Navigate to="/solutions/application-reengineering/discovery" replace />} />
              <Route path="/technical-debt/assessment" element={<Navigate to="/solutions/application-reengineering/discovery" replace />} />
              <Route path="/technical-debt/remediation" element={<Navigate to="/solutions/application-reengineering/strategy" replace />} />
            </Routes>
          </Router>
        </NavigationProvider>
      </DemoProvider>
    </OntologyProvider>
  );
};

export default App;
