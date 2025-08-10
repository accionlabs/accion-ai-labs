# Ontology Configuration Guide

This directory contains the editable configuration for ontology nodes and edges. Use these files to modify the graph data without touching the main codebase.

## Files

### `editableOntologyConfig.ts`
This is your main configuration file for making changes to nodes and edges.

## How to Edit Nodes and Edges

### Adding New Edges

To add a new edge (connection between nodes):

```typescript
export const customEdges: OntologyEdge[] = [
  createEdge('my_new_edge', 'source_node_id', 'target_node_id', 'requires', 1),
];
```

### Adding New Nodes

To add a new node:

```typescript
export const customNodes: OntologyNode[] = [
  createNode(
    'my_new_node', 
    'functional', 
    'outcomes', 
    'My New Outcome', 
    'Description of the new outcome',
    'phoenix',
    { custom_property: 'value' }
  ),
];
```

### Modifying Existing Edges

To change properties of existing edges:

```typescript
export const edgeModifications: Record<string, Partial<OntologyEdge>> = {
  'existing_edge_id': { strength: 0.5, inconsistent: true },
};
```

### Modifying Existing Nodes

To change properties of existing nodes:

```typescript
export const nodeModifications: Record<string, Partial<OntologyNode>> = {
  'existing_node_id': { 
    inconsistencies: ['This node has an issue'] 
  },
};
```

## Quick Reference

### Available Edge Types
- `implements` - Blue line
- `supports` - Green line  
- `requires` - Orange line
- `triggers` - Purple line
- `validates` - Red line
- `realizes` - Cyan line
- `renders` - Lime line
- `manages` - Indigo line

### Available Node Types
- `functional` - Blue nodes (personas, outcomes, scenarios, steps, actions)
- `design` - Purple nodes (journeys, flows, pages, templates, organisms, molecules, atoms)
- `architecture` - Green nodes (layers, services, entities)
- `code` - Orange nodes (applications, modules, classes, functions, properties, configurations)

### Products
- `phoenix` - Red border (Legacy PHP/jQuery CRM)
- `apollo` - Blue border (React E-commerce Platform)
- `voyager` - Purple border (Vue.js Analytics Dashboard)

## Common Tasks

### Fix Missing Connection
```typescript
export const commonMissingEdges: OntologyEdge[] = [
  createEdge('fix_missing_connection', 'source_node', 'target_node', 'requires', 1),
];
```

### Mark Node as Inconsistent
```typescript
export const nodeModifications: Record<string, Partial<OntologyNode>> = {
  'problematic_node_id': { 
    inconsistencies: ['Description of the problem'] 
  },
};
```

### Change Edge Strength
```typescript
export const edgeModifications: Record<string, Partial<OntologyEdge>> = {
  'weak_edge_id': { strength: 0.3 },
};
```

## After Making Changes

1. Save the `editableOntologyConfig.ts` file
2. The development server will automatically reload
3. Refresh your browser to see the changes
4. Check the browser console for any validation errors

## Finding Node IDs

To find node IDs for creating connections:

1. Open the Graph Explorer
2. Click on a node to see its details in the right panel
3. The node ID will be shown in the details
4. Or search the main `ontologyData.ts` file for node names

## Validation

The system will automatically validate your configuration and show warnings in the browser console if:
- You reference non-existent node IDs in edges
- You use invalid edge types
- You use invalid node types

## Example: Adding the Missing Voyager Edge

The missing edge you mentioned is already fixed in `commonMissingEdges`. Here's how it was done:

```typescript
export const commonMissingEdges: OntologyEdge[] = [
  createEdge(
    'voyager_persona_to_outcome2_fix', 
    'voyager_persona_business_user', 
    'voyager_outcome_analyze_metrics', 
    'requires', 
    1
  ),
];
```

This connects the Business User persona to the "Analyze Business Metrics" outcome that was previously disconnected.