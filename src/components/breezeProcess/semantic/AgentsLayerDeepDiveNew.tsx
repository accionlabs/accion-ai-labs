import React from 'react';

interface AgentsLayerDeepDiveNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const AgentsLayerDeepDiveNew: React.FC<AgentsLayerDeepDiveNewProps> = () => {
  const agentTypes = [
    {
      type: "Business Process Agents",
      purpose: "Orchestrate complete end-to-end business workflows",
      capabilities: "Multi-step coordination, decision making, exception handling",
      examples: ["Purchase Completion Agent", "Customer Onboarding Agent", "Incident Response Agent"],
      color: "bg-blue-50 border-blue-200 text-blue-800"
    },
    {
      type: "Domain Agents", 
      purpose: "Provide specialized intelligence within specific domains",
      capabilities: "Domain expertise, optimization, pattern recognition",
      examples: ["Product Discovery Agent", "System Optimization Agent", "Risk Assessment Agent"],
      color: "bg-purple-50 border-purple-200 text-purple-800"
    },
    {
      type: "Integration Agents",
      purpose: "Coordinate interactions with external systems", 
      capabilities: "Protocol translation, error recovery, data transformation",
      examples: ["External System Integration Agent", "Partner API Agent", "Legacy System Bridge Agent"],
      color: "bg-green-50 border-green-200 text-green-800"
    },
    {
      type: "Assistant Agents",
      purpose: "Support user interactions and queries",
      capabilities: "Natural language processing, context understanding, task guidance", 
      examples: ["Customer Support Agent", "Operations Assistant Agent", "Developer Helper Agent"],
      color: "bg-orange-50 border-orange-200 text-orange-800"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Agents Layer Deep Dive
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          The intelligence layer that provides autonomous coordination between user experience and services. 
          This layer enables complex workflow orchestration, intelligent decision-making, and seamless 
          multi-service coordination through specialized AI agents.
        </p>
      </div>

      {/* Agent Layer Position */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Agents Layer in Architecture</h3>
        
        <div className="flex flex-col items-center space-y-4">
          <div className="p-4 bg-purple-100 rounded-lg border-2 border-purple-300 w-full max-w-md text-center">
            <div className="font-bold text-purple-800">User Experience Layer</div>
            <div className="text-sm text-purple-600">Frontend applications and user interfaces</div>
          </div>
          
          <div className="text-gray-400 text-2xl">↓</div>
          
          <div className="p-4 bg-green-100 rounded-lg border-2 border-green-400 w-full max-w-md text-center ring-4 ring-green-200">
            <div className="font-bold text-green-800 text-lg">🤖 AGENTS LAYER</div>
            <div className="text-sm text-green-700 font-semibold">Intelligent orchestration and autonomous decision-making</div>
          </div>
          
          <div className="text-gray-400 text-2xl">↓</div>
          
          <div className="p-4 bg-yellow-100 rounded-lg border-2 border-yellow-300 w-full max-w-md text-center">
            <div className="font-bold text-yellow-800">Services Layer</div>
            <div className="text-sm text-yellow-600">Business logic and platform capabilities</div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
          <p className="text-green-800 text-center">
            <strong>Key Innovation:</strong> The Agents layer provides intelligent coordination between the User Experience layer and Services layer, 
            enabling autonomous task completion and complex workflow orchestration.
          </p>
        </div>
      </div>

      {/* Agent Types Deep Dive */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Four Types of Intelligent Agents</h3>
        
        <div className="space-y-6">
          {agentTypes.map((agent, index) => (
            <div key={index} className={`p-6 rounded-lg border-2 ${agent.color}`}>
              <div className="mb-4">
                <h4 className="text-xl font-bold mb-2">{agent.type}</h4>
                <p className="text-sm mb-3">{agent.purpose}</p>
                <div className="mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wide">Capabilities:</span>
                  <p className="text-sm">{agent.capabilities}</p>
                </div>
              </div>
              
              <div>
                <span className="text-xs font-semibold uppercase tracking-wide mb-2 block">Examples:</span>
                <div className="flex flex-wrap gap-2">
                  {agent.examples.map((example, exampleIndex) => (
                    <span key={exampleIndex} className="px-3 py-1 bg-white rounded-full text-xs font-medium border">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Agent Orchestration Examples */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Agent Orchestration in Action</h3>
        
        <div className="space-y-8">
          {/* Service Coordination Flow */}
          <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="text-lg font-bold text-blue-800 mb-4">Service Coordination Flow</h4>
            <div className="space-y-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-lg font-semibold text-gray-800 mb-2">"Complete my order for the red shoes"</div>
                <div className="text-sm text-gray-600">User Request</div>
              </div>
              
              <div className="text-center text-2xl text-gray-400">↓</div>
              
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="font-semibold text-green-800 mb-2">Purchase Completion Agent</div>
                <div className="text-sm text-green-700">Receives request and orchestrates multiple services</div>
              </div>
              
              <div className="text-center text-2xl text-gray-400">↓</div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["Product Service", "Inventory Service", "Payment Service", "Shipping Service"].map((service, index) => (
                  <div key={index} className="p-3 bg-yellow-100 rounded-lg border border-yellow-300 text-center">
                    <div className="font-semibold text-yellow-800 text-sm">{service}</div>
                  </div>
                ))}
              </div>
              
              <div className="text-center text-2xl text-gray-400">↓</div>
              
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="font-semibold text-gray-800 mb-2">Complete Order Confirmation</div>
                <div className="text-sm text-gray-600">with tracking info and delivery details</div>
              </div>
            </div>
          </div>

          {/* Agent Collaboration */}
          <div className="p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h4 className="text-lg font-bold text-purple-800 mb-4">Multi-Agent Collaboration</h4>
            <div className="space-y-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-lg font-semibold text-gray-800 mb-2">"Find and order the best running shoes for my marathon training"</div>
                <div className="text-sm text-gray-600">Complex User Request</div>
              </div>
              
              <div className="text-center text-2xl text-gray-400">↓</div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-purple-100 rounded-lg border border-purple-300">
                  <div className="font-semibold text-purple-800 mb-2">Product Discovery Agent</div>
                  <div className="text-sm text-purple-700">Analyzes preferences, finds recommendations</div>
                </div>
                <div className="p-4 bg-blue-100 rounded-lg border border-blue-300">
                  <div className="font-semibold text-blue-800 mb-2">Purchase Completion Agent</div>
                  <div className="text-sm text-blue-700">Handles order processing</div>
                </div>
                <div className="p-4 bg-orange-100 rounded-lg border border-orange-300">
                  <div className="font-semibold text-orange-800 mb-2">Customer Support Agent</div>
                  <div className="text-sm text-orange-700">Provides training advice and support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Agent Decision Making */}
          <div className="p-6 bg-green-50 rounded-lg border border-green-200">
            <h4 className="text-lg font-bold text-green-800 mb-4">Autonomous Decision Making</h4>
            <div className="space-y-4">
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="text-lg font-semibold text-gray-800 mb-2">Order Processing Complication</div>
                <div className="text-sm text-gray-600">Item out of stock, payment requires verification</div>
              </div>
              
              <div className="text-center text-2xl text-gray-400">↓</div>
              
              <div className="p-4 bg-green-100 rounded-lg border border-green-300">
                <div className="font-semibold text-green-800 mb-2">Purchase Completion Agent Decisions</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="p-3 bg-white rounded border">
                    <div className="font-semibold text-sm text-gray-800">Stock Issue</div>
                    <div className="text-xs text-gray-600">Find similar item, notify user, hold payment</div>
                  </div>
                  <div className="p-3 bg-white rounded border">
                    <div className="font-semibold text-sm text-gray-800">Payment Issue</div>
                    <div className="text-xs text-gray-600">Initiate verification, send secure link, track progress</div>
                  </div>
                </div>
              </div>
              
              <div className="text-center text-2xl text-gray-400">↓</div>
              
              <div className="text-center p-4 bg-white rounded-lg border">
                <div className="font-semibold text-gray-800 mb-2">Seamless User Experience</div>
                <div className="text-sm text-gray-600">User sees alternative options and simple verification steps</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Agent Capabilities & Benefits */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border-l-4 border-green-500 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Agents Layer Benefits</h3>
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

      {/* Implementation Considerations */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Implementation Considerations</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Technical Requirements</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Agent Runtime Environment</div>
                <div className="text-xs text-gray-600">Scalable execution environment for agent processes</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Service Discovery & Communication</div>
                <div className="text-xs text-gray-600">Dynamic service registration and secure inter-service communication</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">State Management</div>
                <div className="text-xs text-gray-600">Persistent context and conversation state across agent interactions</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Monitoring & Observability</div>
                <div className="text-xs text-gray-600">Agent behavior tracking, performance metrics, and decision auditing</div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-4">Governance & Safety</h4>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Decision Boundaries</div>
                <div className="text-xs text-gray-600">Clear limits on agent autonomy and escalation triggers</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Audit & Compliance</div>
                <div className="text-xs text-gray-600">Full traceability of agent decisions and actions</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Human Oversight</div>
                <div className="text-xs text-gray-600">Mechanisms for human intervention and override capabilities</div>
              </div>
              <div className="p-3 bg-gray-50 rounded border">
                <div className="font-semibold text-sm text-gray-800">Ethical Guidelines</div>
                <div className="text-xs text-gray-600">Built-in ethical constraints and bias prevention measures</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentsLayerDeepDiveNew;