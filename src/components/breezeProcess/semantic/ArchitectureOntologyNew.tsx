import React from 'react';

interface ArchitectureOntologyNewProps {
  onNavigate?: (topicId: string, subTopicId?: string) => void;
  onNext?: () => void;
}

const ArchitectureOntologyNew: React.FC<ArchitectureOntologyNewProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Architecture Ontology
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Logical technical design defining services, layers, and system organization patterns. 
          This ontology structures the technical architecture including the intelligent agents layer 
          that orchestrates services and provides autonomous capabilities.
        </p>
      </div>

      {/* 8-Tier Architecture Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">8-Tier Architecture Structure</h3>
        
        <div className="space-y-4">
          {[
            { layer: "User Experience", description: "Frontend applications and user interfaces", color: "bg-purple-100 border-purple-300" },
            { layer: "API Gateway", description: "Request routing, authentication, and API management", color: "bg-blue-100 border-blue-300" },
            { layer: "Observability & Monitoring", description: "System health, metrics, and performance tracking", color: "bg-cyan-100 border-cyan-300" },
            { layer: "Agents", description: "Intelligent orchestration and autonomous decision-making", color: "bg-green-100 border-green-300", highlight: true },
            { layer: "Services", description: "Business logic and platform capabilities", color: "bg-yellow-100 border-yellow-300" },
            { layer: "Event Queue", description: "Asynchronous messaging and event processing", color: "bg-orange-100 border-orange-300" },
            { layer: "Data Lake, Analytics, AI/ML", description: "Data processing, analytics, and machine learning", color: "bg-red-100 border-red-300" },
            { layer: "Infrastructure", description: "Computing resources, storage, and networking", color: "bg-gray-100 border-gray-300" }
          ].map((tier, index) => (
            <div key={index} className={`p-4 rounded-lg border-2 ${tier.color} ${tier.highlight ? 'ring-2 ring-green-400' : ''}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{tier.layer}</h4>
                    <p className="text-sm text-gray-600">{tier.description}</p>
                  </div>
                </div>
                {tier.highlight && (
                  <div className="px-3 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full">
                    Intelligence Layer
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agents Layer Overview */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Agents Layer: The Intelligence Engine</h3>
        
        <div className="mb-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-800 text-center">
            <strong>Key Innovation:</strong> The Agents layer provides intelligent coordination between the User Experience layer and Services layer, 
            enabling autonomous task completion and complex workflow orchestration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-3">Four Agent Types</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Business Process Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Domain Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Integration Agents</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Assistant Agents</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 rounded-lg border border-green-200">
            <h4 className="font-bold text-green-800 mb-3">Key Capabilities</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Intelligent Orchestration</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>Autonomous Problem Solving</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Context Preservation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Adaptive Behavior</span>
              </div>
            </div>
          </div>
        </div>

        {/* Link to Detailed Agents Layer */}
        <div className="text-center">
          <button
            onClick={() => onNavigate && onNavigate('semantic-model', 'agents-layer')}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
          >
            <span className="text-2xl">🤖</span>
            <span>Explore Agents Layer in Detail</span>
            <span className="text-lg">→</span>
          </button>
          <p className="text-sm text-gray-600 mt-2">
            Deep dive into agent types, orchestration patterns, and implementation considerations
          </p>
        </div>
      </div>

      {/* Architecture Benefits */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-l-4 border-green-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Architecture Ontology Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Intelligence & Autonomy</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Intelligent Orchestration:</span>
                  <span className="text-gray-700"> Agents decide which services to call and in what order</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Autonomous Problem Solving:</span>
                  <span className="text-gray-700"> Handle exceptions and edge cases without user intervention</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Adaptive Behavior:</span>
                  <span className="text-gray-700"> Learn and optimize orchestration patterns over time</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">User Experience & Architecture</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Enhanced UX:</span>
                  <span className="text-gray-700"> Complex processes appear as simple single interactions</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Context Preservation:</span>
                  <span className="text-gray-700"> Maintain conversation and task context across service calls</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <div>
                  <span className="font-semibold text-gray-800">Business Logic Abstraction:</span>
                  <span className="text-gray-700"> Complex rules encapsulated in agents, not scattered across services</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureOntologyNew;