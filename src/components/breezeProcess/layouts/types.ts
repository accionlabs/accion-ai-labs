// Types for configurable slide layouts

export interface SlideSection {
  id: string;
  type: 'header' | 'hero' | 'content' | 'cards' | 'timeline' | 'process' | 'benefits' | 'cta' | 'architecture' | 'processFlow' | 'complexContent' | 'iconGrid' | 'detailedList' | 'processVisualization' | 'comparison' | 'methodologyBreakdown' | 'agileAnalysis' | 'legacyAnalysis' | 'bddAnalysis' | 'systemicFailure' | 'processComparison' | 'checklist' | 'pillarFramework' | 'gameChanger' | 'capabilityShowcase' | 'automaticBDDIntegration' | 'specificationEvolution' | 'compoundEffect' | 'processDiagram' | 'flexibleGrid' | 'prominentDisplay' | 'sequentialContent' | 'multiColumn';
  className?: string;
  content: any; // Content will be type-specific based on section type
  slideGroup?: string; // Optional: group sections into logical slides
}

// Header section configuration
export interface HeaderConfig {
  title: string;
  titleGradient?: string;
  subtitle?: string;
  description?: string;
  alignment?: 'left' | 'center' | 'right';
}

// Hero section configuration
export interface HeroConfig {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundGradient?: string;
  borderColor?: string;
  icon?: string;
  titleColor?: string;
  subtitleColor?: string;
  textColor?: string;
}

// Content section configuration
export interface ContentConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  layout?: 'single' | 'grid-2' | 'grid-3' | 'grid-4';
  items?: ContentItem[];
}

export interface ContentItem {
  id: string;
  title?: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  items?: string[];
}

// Cards section configuration
export interface CardsConfig {
  title?: string;
  subtitle?: string;
  cards: CardConfig[];
  layout?: 'grid-2' | 'grid-3' | 'grid-4';
}

export interface CardConfig {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  onClick?: () => void;
  isClickable?: boolean;
  example?: string;
  items?: string[];
}

// Timeline/Process section configuration
export interface TimelineConfig {
  title?: string;
  subtitle?: string;
  steps: TimelineStep[];
  layout?: 'vertical' | 'horizontal';
}

export interface TimelineStep {
  id: string;
  number?: string | number;
  title: string;
  description?: string;
  icon?: string;
  color?: string;
  backgroundColor?: string;
  isHighlight?: boolean;
}

// Benefits section configuration  
export interface BenefitsConfig {
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
  borderColor?: string;
  categories: BenefitCategory[];
}

export interface BenefitCategory {
  title: string;
  color?: string;
  benefits: string[];
}

// CTA (Call to Action) section configuration
export interface CTAConfig {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonIcon?: string;
  backgroundGradient?: string;
  onButtonClick?: () => void;
}

// Main slide configuration
export interface SlideConfig {
  id: string;
  sections: SlideSection[];
}

// Architecture section configuration
export interface ArchitectureConfig {
  title: string;
  description?: string;
  layers?: ArchitectureLayer[];
  backgroundGradient?: string;
  centerTitle?: boolean;
}

export interface ArchitectureLayer {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  titleColor?: string;
  descriptionColor?: string;
  itemColor?: string;
  borderColor?: string;
  items?: string[];
}

// Process Flow section configuration
export interface ProcessFlowConfig {
  title: string;
  description?: string;
  steps?: ProcessFlowStep[];
  layout?: 'vertical' | 'horizontal';
  backgroundGradient?: string;
}

export interface ProcessFlowStep {
  id: string;
  number?: string | number;
  title: string;
  description?: string;
  icon?: string;
  circleColor?: string;
  details?: string[];
}

// Complex Content section configuration
export interface ComplexContentConfig {
  title: string;
  description?: string;
  leftColumn?: {
    sections?: ComplexSection[];
  };
  rightColumn?: {
    title: string;
    backgroundColor?: string;
    sections?: ComplexSection[];
  };
  fullWidth?: {
    title: string;
    backgroundColor?: string;
    content?: {
      title: string;
      items?: string[];
    }[];
  };
}

export interface ComplexSection {
  title: string;
  description?: string;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  textColor?: string;
  items?: string[];
}

// Icon Grid section configuration
export interface IconGridConfig {
  title: string;
  description?: string;
  items?: IconGridItem[];
  columns?: 2 | 3 | 4;
}

export interface IconGridItem {
  id?: string;
  title: string;
  description?: string;
  icon?: string;
  backgroundColor?: string;
  borderColor?: string;
  iconBackgroundColor?: string;
  titleColor?: string;
  textColor?: string;
  details?: string[];
}

// Props interfaces for the section components
export interface ArchitectureSectionProps {
  content: ArchitectureConfig;
}

export interface ProcessFlowSectionProps {
  content: ProcessFlowConfig;
}

export interface ComplexContentSectionProps {
  content: ComplexContentConfig;
}

export interface IconGridSectionProps {
  content: IconGridConfig;
}

// Detailed List section configuration
export interface DetailedListConfig {
  title: string;
  description?: string;
  backgroundColor?: string;
  borderColor?: string;
  innerBackgroundColor?: string;
  columns: {
    items: {
      id: string;
      title: string;
      description: string;
      bulletColor: string;
    }[];
  }[];
}

export interface DetailedListSectionProps {
  content: DetailedListConfig;
}

// Process Visualization section configuration
export interface ProcessVisualizationConfig {
  title: string;
  description?: string;
  steps: {
    id: string;
    number: string | number;
    title: string;
    description: string;
    backgroundColor: string;
    circleColor: string;
    textColor?: string;
    icon?: string;
    isHighlight?: boolean;
    borderColor?: string;
  }[];
  multipleOutcomes?: {
    title: string;
    outcomes: {
      id: string;
      title: string;
      subtitle: string;
      letter: string;
      backgroundColor: string;
      borderColor: string;
      textColor: string;
    }[];
  };
  finalResult?: {
    title: string;
    description: string;
    backgroundColor: string;
    textColor: string;
    icon: string;
  };
}

export interface ProcessVisualizationSectionProps {
  content: ProcessVisualizationConfig;
}

// Comparison section configuration
export interface ComparisonConfig {
  title: string;
  description?: string;
  items?: {
    id: string;
    title: string;
    description: string;
    backgroundColor: string;
    borderColor: string;
    titleColor: string;
    textColor: string;
    icon: string;
  }[];
  timeline?: {
    title: string;
    description: string;
    backgroundColor: string;
    items: {
      id: string;
      title: string;
      description: string;
      backgroundColor: string;
      textColor: string;
    }[];
  };
}

export interface ComparisonSectionProps {
  content: ComparisonConfig;
}

// Topic configuration with multiple slides
export interface TopicConfig {
  id: string;
  title: string;
  slides: SlideConfig[];
}