export interface OntologyNode {
  id: string;
  type: 'functional' | 'design' | 'architecture' | 'code';
  level: string;
  name: string;
  description: string;
  properties: Record<string, any>;
  product: 'phoenix' | 'apollo' | 'voyager';
  coordinates?: { x: number; y: number };
  inconsistencies?: string[];
}

export interface OntologyEdge {
  id: string;
  source: string;
  target: string;
  type: 'implements' | 'supports' | 'requires' | 'triggers' | 'validates' | 'realizes' | 'renders' | 'manages';
  strength: number; // 0-1, for visualization weight
  inconsistent?: boolean;
}

export interface ProductMetrics {
  phoenix: number;
  apollo: number;
  voyager: number;
}

export interface ConsistencyMetric {
  score: number;
  inconsistencies: number;
  totalComponents: number;
}

export interface BusinessImpactMetric {
  title: string;
  value: string;
  description: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface ComponentComparison {
  componentType: string;
  phoenix: OntologyNode[];
  apollo: OntologyNode[];
  voyager: OntologyNode[];
  inconsistencies: string[];
}

export interface TransformationPlan {
  currentState: {
    components: number;
    inconsistencies: number;
    maintainability: number;
  };
  targetState: {
    components: number;
    inconsistencies: number;
    maintainability: number;
  };
  roi: {
    developmentEfficiency: string;
    maintenanceCost: string;
    timeToMarket: string;
  };
}

export type ProductType = 'phoenix' | 'apollo' | 'voyager' | 'all';
export type OntologyType = 'functional' | 'design' | 'architecture' | 'code' | 'all';