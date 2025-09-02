#!/bin/bash

# Architecture Section Wrappers
echo "Creating Architecture wrappers..."

cat > architecture/OverviewPage.tsx << 'EOF'
import React from 'react';
import OverviewNew from './OverviewNew';

const ArchitectureOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <OverviewNew />
    </div>
  );
};

export default ArchitectureOverviewPage;
EOF

cat > architecture/CoreComponentsPage.tsx << 'EOF'
import React from 'react';
import CoreComponentsNew from './CoreComponentsNew';

const CoreComponentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CoreComponentsNew />
    </div>
  );
};

export default CoreComponentsPage;
EOF

cat > architecture/ComponentInteractionsPage.tsx << 'EOF'
import React from 'react';
import ComponentInteractionsNew from './ComponentInteractionsNew';

const ComponentInteractionsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ComponentInteractionsNew />
    </div>
  );
};

export default ComponentInteractionsPage;
EOF

cat > architecture/IntegrationPointsPage.tsx << 'EOF'
import React from 'react';
import IntegrationPointsNew from './IntegrationPointsNew';

const IntegrationPointsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <IntegrationPointsNew />
    </div>
  );
};

export default IntegrationPointsPage;
EOF

cat > architecture/ScalabilityPerformancePage.tsx << 'EOF'
import React from 'react';
import ScalabilityPerformanceNew from './ScalabilityPerformanceNew';

const ScalabilityPerformancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ScalabilityPerformanceNew />
    </div>
  );
};

export default ScalabilityPerformancePage;
EOF

cat > architecture/SecurityCompliancePage.tsx << 'EOF'
import React from 'react';
import SecurityComplianceNew from './SecurityComplianceNew';

const SecurityCompliancePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <SecurityComplianceNew />
    </div>
  );
};

export default SecurityCompliancePage;
EOF

# Semantic Model Section Wrappers
echo "Creating Semantic Model wrappers..."

cat > semantic/OverviewPage.tsx << 'EOF'
import React from 'react';
import FrameworkOverview from './FrameworkOverview';

const SemanticOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FrameworkOverview />
    </div>
  );
};

export default SemanticOverviewPage;
EOF

cat > semantic/FunctionalOntologyPage.tsx << 'EOF'
import React from 'react';
import FunctionalOntology from './FunctionalOntology';

const FunctionalOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <FunctionalOntology />
    </div>
  );
};

export default FunctionalOntologyPage;
EOF

cat > semantic/DesignOntologyPage.tsx << 'EOF'
import React from 'react';
import DesignOntology from './DesignOntology';

const DesignOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <DesignOntology />
    </div>
  );
};

export default DesignOntologyPage;
EOF

cat > semantic/ArchitectureOntologyPage.tsx << 'EOF'
import React from 'react';
import ArchitectureOntology from './ArchitectureOntology';

const ArchitectureOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArchitectureOntology />
    </div>
  );
};

export default ArchitectureOntologyPage;
EOF

cat > semantic/CodeOntologyPage.tsx << 'EOF'
import React from 'react';
import CodeOntology from './CodeOntology';

const CodeOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CodeOntology />
    </div>
  );
};

export default CodeOntologyPage;
EOF

cat > semantic/RelationshipsPage.tsx << 'EOF'
import React from 'react';
import CrossOntologyRelationships from './CrossOntologyRelationships';

const RelationshipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CrossOntologyRelationships />
    </div>
  );
};

export default RelationshipsPage;
EOF

cat > semantic/AgentsLayerPage.tsx << 'EOF'
import React from 'react';
import AgentsLayerDeepDive from './AgentsLayerDeepDive';

const AgentsLayerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AgentsLayerDeepDive />
    </div>
  );
};

export default AgentsLayerPage;
EOF

# Process Flow Section Wrappers
echo "Creating Process Flow wrappers..."

cat > flow/OverviewPage.tsx << 'EOF'
import React from 'react';
import ProcessOverview from './ProcessOverview';

const ProcessOverviewPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ProcessOverview />
    </div>
  );
};

export default ProcessOverviewPage;
EOF

cat > flow/Phase1Page.tsx << 'EOF'
import React from 'react';
import Phase1Foundation from './Phase1Foundation';

const Phase1Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Phase1Foundation />
    </div>
  );
};

export default Phase1Page;
EOF

cat > flow/Phase2Page.tsx << 'EOF'
import React from 'react';
import Phase2Evolution from './Phase2Evolution';

const Phase2Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Phase2Evolution />
    </div>
  );
};

export default Phase2Page;
EOF

cat > flow/Phase3Page.tsx << 'EOF'
import React from 'react';
import Phase3SemanticFirst from './Phase3SemanticFirst';

const Phase3Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Phase3SemanticFirst />
    </div>
  );
};

export default Phase3Page;
EOF

echo "All wrappers created successfully!"