import React from 'react';

interface CrossOntologyRelationshipsNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CrossOntologyRelationshipsNew: React.FC<CrossOntologyRelationshipsNewProps> = () => {
  const relationshipTypes = [
    {
      type: "Implements",
      description: "Design or Code node realizes Functional node",
      examples: ['"Add to Cart Button" implements "Add to Cart Action"', '"addToCart()" implements "Add to Cart Action"'],
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    {
      type: "Supports", 
      description: "Architecture node enables Design, Code, or Functional capability",
      examples: ['"Product Entity Service" supports "Product Display"', '"ProductRepository" supports "Product Storage"'],
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      type: "Requires",
      description: "Functional node needs specific Design, Architecture, or Code implementation", 
      examples: ['"Compare Products Action" requires "Product Comparison Template"', 'requires "compareProducts()"'],
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      type: "Triggers",
      description: "Functional action initiates Architecture process or Code execution",
      examples: ['"Confirm Purchase Action" triggers "Order Workflow Service"', 'triggers "processPayment()"'],
      color: "bg-orange-50 border-orange-200 text-orange-800"
    },
    {
      type: "Validates", 
      description: "Architecture service or Code unit ensures Functional requirement",
      examples: ['"Authentication Service" validates "User Login Action"', '"validateCredentials()" validates "User Login Action"'],
      color: "bg-red-50 border-red-200 text-red-800"
    },
    {
      type: "Realizes",
      description: "Code unit implements Architecture concept",
      examples: ['"ProductService.java" realizes "Product Entity Service"', '"authMiddleware.ts" realizes "Authentication Service"'],
      color: "bg-teal-50 border-teal-200 text-teal-800"
    },
    {
      type: "Renders",
      description: "Code unit implements Design concept", 
      examples: ['"ProductCard.tsx" renders "Product Card Component"', '"login.vue" renders "Login Form Template"'],
      color: "bg-pink-50 border-pink-200 text-pink-800"
    }
  ];

  const connectivityPatterns = [
    {
      path: "Direct Functional-Code",
      description: "Immediate traceability for analysis",
      example: "User Action → Code Function",
      color: "bg-purple-100"
    },
    {
      path: "Functional-Design-Code", 
      description: "UI governance path",
      example: "User Action → UI Component → React Component",
      color: "bg-blue-100"
    },
    {
      path: "Functional-Architecture-Code",
      description: "Service governance path", 
      example: "User Action → Service → API Implementation",
      color: "bg-green-100"
    },
    {
      path: "Cross-validation",
      description: "Compare all paths for consistency",
      example: "Validate multiple implementation paths",
      color: "bg-orange-100"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent">
            Cross-Ontology Relationships
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Formal mappings that enable traceability and governance across the four ontologies. 
          These relationships provide the foundation for comprehensive software engineering analytics, 
          consistency validation, and portfolio governance.
        </p>
      </div>

      {/* Relationship Types */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Relationship Categories</h3>
        
        <div className="space-y-4">
          {relationshipTypes.map((relationship, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${relationship.color}`}>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">{relationship.type}</h4>
                <p className="text-sm mb-3">{relationship.description}</p>
              </div>
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide mb-2 block">Examples:</span>
                <div className="space-y-1">
                  {relationship.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="bg-white p-3 rounded border text-sm font-mono">
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Multi-Dimensional Connectivity */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Multi-Dimensional Connectivity Model</h3>
        
        <div className="mb-8">
          <div className="text-center">
            <div className="inline-flex flex-col items-center gap-6 bg-gray-50 p-8 rounded-lg max-w-2xl">
              {/* Functional Layer */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-purple-800">Functional</div>
                  <div className="text-sm text-purple-600">User Actions & Intent</div>
                </div>
              </div>
              
              {/* Connection Arrows */}
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-2xl">↓</div>
                  <div className="text-xs text-gray-500">implements</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-2xl">↓</div>
                  <div className="text-xs text-gray-500">supports</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-gray-400 text-2xl">↓</div>
                  <div className="text-xs text-gray-500">triggers</div>
                </div>
              </div>
              
              {/* Implementation Layers */}
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🎨</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-blue-800 text-sm">Design</div>
                    <div className="text-xs text-blue-600">UX/UI</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🏗️</span>
                  </div>
                  <div className="text-left">
                    <div className="font-bold text-green-800 text-sm">Architecture</div>
                    <div className="text-xs text-green-600">Services</div>
                  </div>
                </div>
              </div>
              
              {/* Final Arrow */}
              <div className="flex flex-col items-center">
                <div className="text-gray-400 text-2xl">↓</div>
                <div className="text-xs text-gray-500">realizes</div>
              </div>
              
              {/* Code Layer */}
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-orange-800">Code</div>
                  <div className="text-sm text-orange-600">Implementation Units</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Connection Patterns</h4>
            <div className="space-y-3">
              {connectivityPatterns.map((pattern, index) => (
                <div key={index} className={`p-4 rounded-lg ${pattern.color} border`}>
                  <div className="font-semibold text-gray-800 mb-1">{pattern.path}</div>
                  <div className="text-sm text-gray-700 mb-2">{pattern.description}</div>
                  <div className="text-xs text-gray-600 font-mono bg-white p-2 rounded">
                    {pattern.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Cardinality Patterns</h4>
            <div className="space-y-3">
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">One-to-One</div>
                <div className="text-sm text-gray-700">Single Action maps to single Component or Code unit</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">One-to-Many</div>
                <div className="text-sm text-gray-700">Single Action implemented by multiple Components or Code units</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">Many-to-One</div>
                <div className="text-sm text-gray-700">Multiple Actions share same Component or Code unit</div>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border">
                <div className="font-semibold text-gray-800 mb-1">Many-to-Many</div>
                <div className="text-sm text-gray-700">Complex interactions across multiple dimensions</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Governance Analytics */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Governance Analytics & Consistency Metrics</h3>
        
        <div className="space-y-8">
          {/* Architecture Consistency */}
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h4 className="text-lg font-bold text-green-800 mb-4">Architecture Consistency Metrics</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Architecture Adherence</div>
                  <div className="text-sm text-gray-600 mb-2">% of Code units that properly realize Architecture services</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    (Code units with Architecture mapping / Total Code units) × 100
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Service Implementation Gap</div>
                  <div className="text-sm text-gray-600 mb-2">Architecture services without Code implementations</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Count of unmapped Architecture services
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Direct Implementation Bypass</div>
                  <div className="text-sm text-gray-600 mb-2">Code units implementing Functional actions without Architecture services</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Count of Functional→Code without Architecture path
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Service Fragmentation</div>
                  <div className="text-sm text-gray-600 mb-2">Multiple Code implementations per Architecture service</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Average Code units per Architecture service
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Design Consistency */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-lg font-bold text-blue-800 mb-4">Design Consistency Metrics</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Design System Compliance</div>
                  <div className="text-sm text-gray-600 mb-2">% of Code units that render approved Design components</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    (Code units with Design mapping / UI Code units) × 100
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Pattern Fragmentation</div>
                  <div className="text-sm text-gray-600 mb-2">Different Design implementations per Functional action</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Count of Design patterns per Functional action
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Rogue Implementations</div>
                  <div className="text-sm text-gray-600 mb-2">Code units bypassing Design system</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    Count of UI Code without Design mapping
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <div className="font-semibold text-gray-800 mb-1">Component Utilization</div>
                  <div className="text-sm text-gray-600 mb-2">% of Design components actually implemented</div>
                  <div className="text-xs font-mono bg-gray-100 p-2 rounded">
                    (Implemented Design components / Total Design components) × 100
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Ontology Analysis */}
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="text-lg font-bold text-purple-800 mb-4">Cross-Ontology Consistency Analysis</h4>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse border border-purple-300">
                <thead>
                  <tr className="bg-purple-100">
                    <th className="border border-purple-300 px-3 py-2 text-left font-semibold">Analysis Type</th>
                    <th className="border border-purple-300 px-3 py-2 text-left font-semibold">Description</th>
                    <th className="border border-purple-300 px-3 py-2 text-left font-semibold">Detection Method</th>
                    <th className="border border-purple-300 px-3 py-2 text-left font-semibold">Action Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-purple-300 px-3 py-2 font-semibold">Complete Pathway</td>
                    <td className="border border-purple-300 px-3 py-2">Functional→Design→Code and Functional→Architecture→Code both exist</td>
                    <td className="border border-purple-300 px-3 py-2">Cross-reference all mappings</td>
                    <td className="border border-purple-300 px-3 py-2">✅ Best practice</td>
                  </tr>
                  <tr className="bg-purple-25">
                    <td className="border border-purple-300 px-3 py-2 font-semibold">Design Bypass</td>
                    <td className="border border-purple-300 px-3 py-2">Functional→Architecture→Code exists but no Design mapping</td>
                    <td className="border border-purple-300 px-3 py-2">Missing Design relationships</td>
                    <td className="border border-purple-300 px-3 py-2">Create Design patterns</td>
                  </tr>
                  <tr>
                    <td className="border border-purple-300 px-3 py-2 font-semibold">Architecture Bypass</td>
                    <td className="border border-purple-300 px-3 py-2">Functional→Design→Code exists but no Architecture mapping</td>
                    <td className="border border-purple-300 px-3 py-2">Missing Architecture relationships</td>
                    <td className="border border-purple-300 px-3 py-2">Define service layer</td>
                  </tr>
                  <tr className="bg-purple-25">
                    <td className="border border-purple-300 px-3 py-2 font-semibold">Orphaned Code</td>
                    <td className="border border-purple-300 px-3 py-2">Code exists without any Functional mapping</td>
                    <td className="border border-purple-300 px-3 py-2">Unmapped Code units</td>
                    <td className="border border-purple-300 px-3 py-2">Remove or map to function</td>
                  </tr>
                  <tr>
                    <td className="border border-purple-300 px-3 py-2 font-semibold">Conflicting Paths</td>
                    <td className="border border-purple-300 px-3 py-2">Different Code units for same Functional action via different paths</td>
                    <td className="border border-purple-300 px-3 py-2">Multiple implementation paths</td>
                    <td className="border border-purple-300 px-3 py-2">Consolidate implementations</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Governance Applications */}
      <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl p-8 border-l-4 border-teal-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Governance Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Strategic Initiatives</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Application Modernization:</span>
                  <span className="text-gray-700"> Maintain Functional mappings while updating Design/Architecture/Code</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Portfolio Rationalization:</span>
                  <span className="text-gray-700"> Identify duplicate implementations and consolidation opportunities</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Cross-Modal Consistency:</span>
                  <span className="text-gray-700"> Ensure equivalent experiences across web, mobile, and API interfaces</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Quality Governance</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Implementation Standards:</span>
                  <span className="text-gray-700"> Ensure Code units follow established patterns for similar Functional Actions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Complexity Management:</span>
                  <span className="text-gray-700"> Monitor Code complexity relative to Functional scope</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Consistency Monitoring:</span>
                  <span className="text-gray-700"> Automated alerts for governance violations and architectural drift</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrossOntologyRelationshipsNew;
