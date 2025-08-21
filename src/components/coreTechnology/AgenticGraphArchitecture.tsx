import React, { useState } from 'react';
import { 
  CircleStackIcon,
  MagnifyingGlassIcon,
  LinkIcon,
  CpuChipIcon,
  DocumentTextIcon,
  SparklesIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon
} from '@heroicons/react/24/outline';

const AgenticGraphArchitecture: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(2);

  const evolutionStages = [
    {
      id: 0,
      name: 'Vector Search (RAG)',
      description: 'Find relevant documents and content for user queries',
      icon: MagnifyingGlassIcon,
      color: 'blue',
      capabilities: [
        'Document retrieval',
        'Similarity search',
        'Content chunks'
      ],
      limitations: [
        'Suffers from hallucination',
        'Limited context window',
        'Misses relationships'
      ],
      accuracy: '60%',
      reliability: 'Low'
    },
    {
      id: 1,
      name: 'Graph-RAG',
      description: 'Find entities and patterns in connected data',
      icon: LinkIcon,
      color: 'purple',
      capabilities: [
        'Entity relationships',
        'Pattern detection',
        'Vector + Graph retrieval'
      ],
      limitations: [
        'Still some hallucination',
        'Complex setup required',
        'Limited reasoning'
      ],
      accuracy: '80%',
      reliability: 'Medium'
    },
    {
      id: 2,
      name: 'Agentic Graph RAG',
      description: 'Build agentic apps with LLM function calling grounded by Knowledge Graph',
      icon: CpuChipIcon,
      color: 'green',
      capabilities: [
        'Function/Tool calling',
        'Graph algorithms',
        'Machine learning',
        'Advanced reasoning'
      ],
      limitations: [
        'Requires expertise',
        'Higher compute cost'
      ],
      accuracy: '95%',
      reliability: 'High'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-4">
            Technical Architecture
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Agentic Graph-Oriented Architecture</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            The evolution from basic RAG to production-quality AI solutions through graph-based context engineering 
            and agentic capabilities.
          </p>
        </div>

        {/* Evolution Journey */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Evolution of Agentic Graph RAG</h2>
          
          {/* Evolution Diagram */}
          <div className="relative mb-8">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/diagrams/agentic-evolution.svg`}
              alt="Evolution to Agentic Graph RAG"
              className="w-full h-auto"
            />
            
            {/* Overlay for interactive stage selection */}
            <div className="absolute inset-0">
              {[
                { id: 0, x: 100, y: 150, width: 100, height: 100 },
                { id: 1, x: 400, y: 150, width: 100, height: 100 },
                { id: 2, x: 690, y: 140, width: 120, height: 120 }
              ].map((area) => (
                <button
                  key={area.id}
                  className={`absolute rounded-full bg-transparent hover:bg-blue-500 hover:bg-opacity-10 transition-colors cursor-pointer ${
                    selectedStage === area.id ? 'ring-2 ring-blue-500 ring-opacity-50' : ''
                  }`}
                  style={{ 
                    left: `${area.x}px`, 
                    top: `${area.y}px`,
                    width: `${area.width}px`,
                    height: `${area.height}px`
                  }}
                  onClick={() => setSelectedStage(area.id)}
                  aria-label={`Select ${evolutionStages[area.id].name} stage`}
                />
              ))}
            </div>
          </div>

          {/* Stage Details */}
          {selectedStage !== null && (
            <div className="bg-gray-50 rounded-lg p-6">
              {evolutionStages.filter(s => s.id === selectedStage).map(stage => (
                <div key={stage.id}>
                  <div className="flex items-center mb-4">
                    <stage.icon className={`h-8 w-8 text-${stage.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{stage.name}</h3>
                      <p className="text-gray-600">{stage.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <CheckCircleIcon className="h-4 w-4 mr-2 text-green-600" />
                        Capabilities
                      </h4>
                      <ul className="space-y-2">
                        {stage.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-green-500 mr-2 mt-1">✓</span>
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Limitations */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                        <XCircleIcon className="h-4 w-4 mr-2 text-red-600" />
                        Limitations
                      </h4>
                      <ul className="space-y-2">
                        {stage.limitations.map((limitation, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-red-500 mr-2 mt-1">×</span>
                            <span className="text-sm text-gray-600">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Performance</h4>
                      <div className="space-y-3">
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Accuracy</span>
                            <span className={`text-sm font-semibold text-${stage.color}-600`}>{stage.accuracy}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`bg-${stage.color}-600 h-2 rounded-full`}
                              style={{ width: stage.accuracy }}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between mb-1">
                            <span className="text-sm text-gray-600">Reliability</span>
                            <span className={`text-sm font-semibold text-${stage.color}-600`}>{stage.reliability}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`bg-${stage.color}-600 h-2 rounded-full`}
                              style={{ 
                                width: stage.reliability === 'High' ? '100%' : 
                                       stage.reliability === 'Medium' ? '60%' : '30%' 
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Implementation Architecture */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Agentic Graph RAG Implementation</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Architecture Layers */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Architecture Layers</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Knowledge Layer</h4>
                  <p className="text-sm text-gray-600">
                    Neo4j graph database storing entities, relationships, and metadata
                  </p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Embedding Layer</h4>
                  <p className="text-sm text-gray-600">
                    Vector embeddings in Weaviate for semantic similarity search
                  </p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Agent Layer</h4>
                  <p className="text-sm text-gray-600">
                    LangGraph agents with tool calling capabilities and graph traversal
                  </p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Orchestration Layer</h4>
                  <p className="text-sm text-gray-600">
                    Multi-agent coordination, task planning, and execution monitoring
                  </p>
                </div>
              </div>
            </div>

            {/* Key Technologies */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technology Stack</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <CircleStackIcon className="h-6 w-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Graph Database</h4>
                  <p className="text-xs text-gray-600 mt-1">Neo4j with APOC & GDS</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <DocumentTextIcon className="h-6 w-6 text-purple-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">Vector Store</h4>
                  <p className="text-xs text-gray-600 mt-1">Weaviate Cloud Service</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <CpuChipIcon className="h-6 w-6 text-green-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">LLM Framework</h4>
                  <p className="text-xs text-gray-600 mt-1">LangChain & LangGraph</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <SparklesIcon className="h-6 w-6 text-orange-600 mb-2" />
                  <h4 className="font-semibold text-gray-900 text-sm">AI Models</h4>
                  <p className="text-xs text-gray-600 mt-1">GPT-4, Claude, Llama</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Production Quality Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-green-600">95%</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Accuracy</h3>
              <p className="text-sm text-gray-600">
                Grounded responses with minimal hallucination
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-blue-600">10x</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Context</h3>
              <p className="text-sm text-gray-600">
                Complete system understanding through graphs
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl font-bold text-purple-600">&lt; 2s</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-sm text-gray-600">
                Real-time responses with cached graph traversals
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgenticGraphArchitecture;