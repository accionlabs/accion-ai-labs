import React from 'react';
import Overview from './Overview';

const SemanticOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Overview onNavigate={() => {}} />
    </div>
  );
};

export default SemanticOverviewPage;
