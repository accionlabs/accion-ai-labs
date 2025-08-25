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
import CustomerServiceDeepDive from './components/solutions/CustomerServiceDeepDive';
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
              
              {/* Legacy redirects */}
              <Route path="/dashboard" element={<Navigate to="/portfolio" replace />} />
              <Route path="/graph-explorer" element={<Navigate to="/portfolio/graph-explorer" replace />} />
              <Route path="/component-comparator" element={<Navigate to="/portfolio/component-comparator" replace />} />
              <Route path="/rationalization-roadmap" element={<Navigate to="/portfolio/rationalization-roadmap" replace />} />
            </Routes>
          </Router>
        </NavigationProvider>
      </DemoProvider>
    </OntologyProvider>
  );
};

export default App;
