import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { OntologyNode } from '../../types/ontology';
import { useOntology } from '../../contexts/OntologyContext';

interface NodeDetailsPanelProps {
  nodeId: string | null;
  onClose: () => void;
}

const NodeDetailsPanel: React.FC<NodeDetailsPanelProps> = ({ nodeId, onClose }) => {
  const { getNodeById, state } = useOntology();
  
  if (!nodeId) return null;
  
  const node = getNodeById(nodeId);
  
  if (!node) return null;

  const getOntologyColor = (type: string) => {
    const colors = {
      functional: 'blue',
      design: 'purple',
      architecture: 'green',
      code: 'orange'
    };
    return colors[type as keyof typeof colors] || 'gray';
  };

  const getProductColor = (product: string) => {
    const colors = {
      phoenix: 'red',
      apollo: 'blue',
      voyager: 'purple'
    };
    return colors[product as keyof typeof colors] || 'gray';
  };

  const formatPropertyValue = (value: any): string => {
    if (typeof value === 'object' && value !== null) {
      return JSON.stringify(value, null, 2);
    }
    return String(value);
  };

  // Find connected nodes
  const connectedEdges = state.edges.filter(edge => 
    edge.source === nodeId || edge.target === nodeId
  );
  const connectedNodeIds = connectedEdges.map(edge => 
    edge.source === nodeId ? edge.target : edge.source
  );
  const connectedNodes = connectedNodeIds
    .map(id => getNodeById(id))
    .filter(Boolean) as OntologyNode[];

  return (
    <div className="fixed inset-y-0 right-0 w-96 bg-white shadow-xl border-l border-gray-200 z-50 overflow-y-auto">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">Node Details</h2>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 transition-colors"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
      </div>

      <div className="p-6 space-y-6">
        {/* Node Header */}
        <div>
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-3 h-3 rounded-full bg-${getOntologyColor(node.type)}-500`}></div>
            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${getOntologyColor(node.type)}-100 text-${getOntologyColor(node.type)}-800`}>
              {node.type.charAt(0).toUpperCase() + node.type.slice(1)}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900">{node.name}</h3>
          <p className="text-gray-600 mt-1">{node.description}</p>
        </div>

        {/* Basic Information */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-900 mb-3">Basic Information</h4>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div>
              <span className="text-gray-500">ID:</span>
              <div className="font-mono text-xs text-gray-700 mt-1 break-all">{node.id}</div>
            </div>
            <div>
              <span className="text-gray-500">Level:</span>
              <div className="text-gray-700 mt-1 capitalize">{node.level.replace('_', ' ')}</div>
            </div>
            <div>
              <span className="text-gray-500">Product:</span>
              <div className="mt-1">
                <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full bg-${getProductColor(node.product)}-100 text-${getProductColor(node.product)}-800`}>
                  {node.product.charAt(0).toUpperCase() + node.product.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Properties */}
        {Object.keys(node.properties).length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">Properties</h4>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="space-y-3">
                {Object.entries(node.properties).map(([key, value]) => (
                  <div key={key}>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {key.replace('_', ' ')}:
                    </span>
                    <div className="mt-1 text-sm text-gray-700">
                      {typeof value === 'boolean' ? (
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                          value ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {value ? 'Yes' : 'No'}
                        </span>
                      ) : Array.isArray(value) ? (
                        <div className="space-y-1">
                          {value.map((item, index) => (
                            <div key={index} className="text-xs bg-white px-2 py-1 rounded border">
                              {formatPropertyValue(item)}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <code className="text-xs bg-white px-2 py-1 rounded border block whitespace-pre-wrap">
                          {formatPropertyValue(value)}
                        </code>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Inconsistencies */}
        {node.inconsistencies && node.inconsistencies.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3 flex items-center">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Inconsistencies
            </h4>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="space-y-2">
                {node.inconsistencies.map((inconsistency, index) => (
                  <li key={index} className="text-sm text-red-700 flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    {inconsistency}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Connected Nodes */}
        {connectedNodes.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-3">
              Connected Nodes ({connectedNodes.length})
            </h4>
            <div className="space-y-2">
              {connectedNodes.slice(0, 8).map((connectedNode) => {
                const edge = connectedEdges.find(e => 
                  e.source === connectedNode.id || e.target === connectedNode.id
                );
                const isOutgoing = edge?.source === nodeId;
                
                return (
                  <div
                    key={connectedNode.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg text-sm"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-${getOntologyColor(connectedNode.type)}-500`}></div>
                        <span className="font-medium text-gray-900 truncate">
                          {connectedNode.name}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {connectedNode.type} • {connectedNode.product}
                      </div>
                    </div>
                    <div className="ml-2 flex items-center">
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        edge?.inconsistent 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {edge?.type} {isOutgoing ? '→' : '←'}
                      </span>
                    </div>
                  </div>
                );
              })}
              {connectedNodes.length > 8 && (
                <div className="text-xs text-gray-500 text-center py-2">
                  ... and {connectedNodes.length - 8} more connections
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NodeDetailsPanel;