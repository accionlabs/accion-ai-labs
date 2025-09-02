import TopicCards from '../TopicCards';
import OverviewNew from './OverviewNew';
import FunctionalOntologyNew from './FunctionalOntologyNew';
// These components have been moved to old/ folder
// import DesignOntology from './DesignOntology';
// import ArchitectureOntology from './ArchitectureOntology';
// import CodeOntology from './CodeOntology';
// import Relationships from './Relationships';
// import AgentsLayer from './AgentsLayer';

interface SemanticModelProps {
  initialScreen?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const cards = [
  {
    id: 'overview',
    title: 'Framework Overview',
    description: 'Four interconnected ontologies for comprehensive software engineering governance',
    component: OverviewNew
  },
  {
    id: 'functional',
    title: 'Functional Ontology',
    description: 'Modality-agnostic representation of user needs and behaviors',
    component: FunctionalOntologyNew
  }
  // Other components have been moved to old/ folder - only showing migrated components for now
];

const SemanticModel: React.FC<SemanticModelProps> = ({ 
  initialScreen, 
  onNavigate, 
  currentTopic, 
  currentSubTopic, 
  onHome 
}) => {
  return (
    <TopicCards 
      topicTitle="Semantic Model Structure"
      cards={cards}
      initialCard={initialScreen}
      onNavigate={onNavigate}
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onHome={onHome}
    />
  );
};

export default SemanticModel;