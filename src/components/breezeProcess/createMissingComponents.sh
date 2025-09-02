#!/bin/bash

# Create missing semantic components
cat > semantic/ArchitectureOntologyNew.tsx << 'EOF'
import React from 'react';

const ArchitectureOntologyNew: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Architecture Ontology</h1>
      <p className="text-gray-600">Logical technical design and system architecture.</p>
    </div>
  );
};

export default ArchitectureOntologyNew;
EOF

cat > semantic/CodeOntologyNew.tsx << 'EOF'
import React from 'react';

const CodeOntologyNew: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Code Ontology</h1>
      <p className="text-gray-600">Physical implementation units and code structure.</p>
    </div>
  );
};

export default CodeOntologyNew;
EOF

cat > semantic/CrossOntologyRelationshipsNew.tsx << 'EOF'
import React from 'react';

const CrossOntologyRelationshipsNew: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Cross-Ontology Relationships</h1>
      <p className="text-gray-600">Formal mappings and governance between ontologies.</p>
    </div>
  );
};

export default CrossOntologyRelationshipsNew;
EOF

cat > semantic/AgentsLayerDeepDiveNew.tsx << 'EOF'
import React from 'react';

const AgentsLayerDeepDiveNew: React.FC = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Agents Layer Deep Dive</h1>
      <p className="text-gray-600">Intelligent orchestration and autonomous capabilities.</p>
    </div>
  );
};

export default AgentsLayerDeepDiveNew;
EOF

# Fix the wrapper pages to use the New components
cat > semantic/ArchitectureOntologyPage.tsx << 'EOF'
import React from 'react';
import ArchitectureOntologyNew from './ArchitectureOntologyNew';

const ArchitectureOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <ArchitectureOntologyNew />
    </div>
  );
};

export default ArchitectureOntologyPage;
EOF

cat > semantic/CodeOntologyPage.tsx << 'EOF'
import React from 'react';
import CodeOntologyNew from './CodeOntologyNew';

const CodeOntologyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CodeOntologyNew />
    </div>
  );
};

export default CodeOntologyPage;
EOF

cat > semantic/RelationshipsPage.tsx << 'EOF'
import React from 'react';
import CrossOntologyRelationshipsNew from './CrossOntologyRelationshipsNew';

const RelationshipsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <CrossOntologyRelationshipsNew />
    </div>
  );
};

export default RelationshipsPage;
EOF

cat > semantic/AgentsLayerPage.tsx << 'EOF'
import React from 'react';
import AgentsLayerDeepDiveNew from './AgentsLayerDeepDiveNew';

const AgentsLayerPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <AgentsLayerDeepDiveNew />
    </div>
  );
};

export default AgentsLayerPage;
EOF

echo "Created missing semantic components"