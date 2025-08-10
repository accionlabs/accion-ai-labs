import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { OntologyProvider } from './contexts/OntologyContext';
import { DemoProvider } from './contexts/DemoContext';
import LandingPage from './pages/LandingPage';
import Dashboard from './components/Dashboard';
import GraphExplorer from './components/GraphExplorer';
import ComponentComparator from './components/ComponentComparator';
import RationalizationRoadmap from './components/RationalizationRoadmap';

const App: React.FC = () => {
  return (
    <OntologyProvider>
      <DemoProvider>
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app min-h-screen bg-gray-50">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/graph-explorer" element={<GraphExplorer />} />
              <Route path="/component-comparator" element={<ComponentComparator />} />
              <Route path="/rationalization-roadmap" element={<RationalizationRoadmap />} />
            </Routes>
          </div>
        </Router>
      </DemoProvider>
    </OntologyProvider>
  );
};

export default App;
