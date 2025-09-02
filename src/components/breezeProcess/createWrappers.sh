#!/bin/bash

# Challenge Section Wrappers
cat > challenge/TraditionalApproachesPage.tsx << 'EOF'
import React from 'react';
import TraditionalApproachesNew from './TraditionalApproachesNew';

const TraditionalApproachesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TraditionalApproachesNew />
    </div>
  );
};

export default TraditionalApproachesPage;
EOF

cat > challenge/BreezeBreakthroughPage.tsx << 'EOF'
import React from 'react';
import BreezeBreakthroughNew from './BreezeBreakthroughNew';

const BreezeBreakthroughPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <BreezeBreakthroughNew />
    </div>
  );
};

export default BreezeBreakthroughPage;
EOF

cat > challenge/RevolutionaryCapabilitiesPage.tsx << 'EOF'
import React from 'react';
import RevolutionaryCapabilitiesNew from './RevolutionaryCapabilitiesNew';

const RevolutionaryCapabilitiesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <RevolutionaryCapabilitiesNew />
    </div>
  );
};

export default RevolutionaryCapabilitiesPage;
EOF

cat > challenge/LegacyTransformationPage.tsx << 'EOF'
import React from 'react';
import LegacyTransformationNew from './LegacyTransformationNew';

const LegacyTransformationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LegacyTransformationNew />
    </div>
  );
};

export default LegacyTransformationPage;
EOF

cat > challenge/CompetitiveAdvantagesPage.tsx << 'EOF'
import React from 'react';
import CompetitiveAdvantagesNew from './CompetitiveAdvantagesNew';

const CompetitiveAdvantagesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CompetitiveAdvantagesNew />
    </div>
  );
};

export default CompetitiveAdvantagesPage;
EOF

echo "Challenge wrappers created"