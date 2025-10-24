import React from 'react';
import Overview from './Overview';

const ProcessOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Overview onNavigate={() => {}} />
    </div>
  );
};

export default ProcessOverviewPage;
