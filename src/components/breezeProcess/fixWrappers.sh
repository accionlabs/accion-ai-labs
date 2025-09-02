#!/bin/bash

# Fix Semantic wrappers
cat > semantic/FunctionalOntologyPage.tsx << 'EOF'
import React from 'react';
import FunctionalOntologyNew from './FunctionalOntologyNew';

const FunctionalOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FunctionalOntologyNew onNavigate={() => {}} currentTopic="semantic-model" currentSubTopic="functional" />
    </div>
  );
};

export default FunctionalOntologyPage;
EOF

cat > semantic/DesignOntologyPage.tsx << 'EOF'
import React from 'react';
import DesignOntologyNew from './DesignOntologyNew';

const DesignOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DesignOntologyNew onNavigate={() => {}} currentTopic="semantic-model" currentSubTopic="design" />
    </div>
  );
};

export default DesignOntologyPage;
EOF

# Architecture, Code, and Relationships don't have New files, so we need to check
echo "Checking for missing semantic files..."
ls semantic/

# Fix Flow wrappers  
cat > flow/OverviewPage.tsx << 'EOF'
import React from 'react';
import OverviewNew from './OverviewNew';

const ProcessOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <OverviewNew onNavigate={() => {}} currentTopic="process-flow" currentSubTopic="overview" />
    </div>
  );
};

export default ProcessOverviewPage;
EOF

cat > flow/Phase1Page.tsx << 'EOF'
import React from 'react';
import Phase1New from './Phase1New';

const Phase1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Phase1New onNavigate={() => {}} currentTopic="process-flow" currentSubTopic="phase1" />
    </div>
  );
};

export default Phase1Page;
EOF

cat > flow/Phase2Page.tsx << 'EOF'
import React from 'react';
import Phase2New from './Phase2New';

const Phase2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Phase2New onNavigate={() => {}} currentTopic="process-flow" currentSubTopic="phase2" />
    </div>
  );
};

export default Phase2Page;
EOF

cat > flow/Phase3Page.tsx << 'EOF'
import React from 'react';
import Phase3New from './Phase3New';

const Phase3Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Phase3New onNavigate={() => {}} currentTopic="process-flow" currentSubTopic="phase3" />
    </div>
  );
};

export default Phase3Page;
EOF

echo "Flow wrappers fixed"