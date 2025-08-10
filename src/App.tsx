import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { OntologyProvider } from './contexts/OntologyContext';
import { DemoProvider } from './contexts/DemoContext';
import { NavigationProvider } from './contexts/NavigationContext';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './pages/LandingPage';
import PortfolioOverview from './components/portfolio/PortfolioOverview';
import GraphExplorer from './components/portfolio/GraphExplorer';
import ComponentComparator from './components/portfolio/ComponentComparator';
import RationalizationRoadmap from './components/portfolio/RationalizationRoadmap';
import TechnicalDebtOverview from './components/technicalDebt/TechnicalDebtOverview';
import TechnicalDebtGraphExplorer from './components/technicalDebt/TechnicalDebtGraphExplorer';
import AgentAnalysisView from './components/technicalDebt/AgentAnalysisView';
import DebtAssessmentDashboard from './components/technicalDebt/DebtAssessmentDashboard';
import RemediationRoadmap from './components/technicalDebt/RemediationRoadmap';

const App: React.FC = () => {
  return (
    <OntologyProvider>
      <DemoProvider>
        <NavigationProvider>
          <Router basename={process.env.PUBLIC_URL}>
            <Routes>
              {/* Landing page without sidebar */}
              <Route path="/" element={<LandingPage />} />
              
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
