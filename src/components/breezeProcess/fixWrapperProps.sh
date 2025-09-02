#!/bin/bash

echo "Fixing wrapper component props..."

# Fix flow wrapper components
cat > flow/OverviewPage.tsx << 'EOF'
import React from 'react';
import OverviewNew from './OverviewNew';

const ProcessOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <OverviewNew onNavigate={() => {}} />
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
      <Phase1New onNavigate={() => {}} />
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
      <Phase2New onNavigate={() => {}} />
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
      <Phase3New onNavigate={() => {}} />
    </div>
  );
};

export default Phase3Page;
EOF

# Fix semantic wrapper components  
cat > semantic/FunctionalOntologyPage.tsx << 'EOF'
import React from 'react';
import FunctionalOntologyNew from './FunctionalOntologyNew';

const FunctionalOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FunctionalOntologyNew onNavigate={() => {}} />
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
      <DesignOntologyNew onNavigate={() => {}} />
    </div>
  );
};

export default DesignOntologyPage;
EOF

cat > semantic/OverviewPage.tsx << 'EOF'
import React from 'react';
import OverviewNew from './OverviewNew';

const SemanticOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <OverviewNew onNavigate={() => {}} />
    </div>
  );
};

export default SemanticOverviewPage;
EOF

echo "Wrapper props fixed!"