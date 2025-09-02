import TopicCards from '../TopicCards';
import OverviewNew from './OverviewNew';
import Phase1New from './Phase1New';
import Phase2 from './Phase2New';
import Phase3 from './Phase3New';

interface ProcessFlowProps {
  initialScreen?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const ProcessFlow: React.FC<ProcessFlowProps> = ({ 
  initialScreen = 'overview',
  onNavigate,
  currentTopic,
  currentSubTopic,
  onHome
}) => {
  const cards = [
    { 
      id: 'overview', 
      title: 'Process Overview', 
      description: 'Three-phase methodology introduction',
      component: OverviewNew 
    },
    { 
      id: 'phase1', 
      title: 'Phase 1: Foundation', 
      description: 'Semantic Engineering Foundation (15% Manual)',
      component: Phase1New 
    },
    { 
      id: 'phase2', 
      title: 'Phase 2: Evolution', 
      description: 'Semantic Engineering Evolution (30% Manual)',
      component: Phase2 
    },
    { 
      id: 'phase3', 
      title: 'Phase 3: Semantic First', 
      description: 'Semantic First Engineering (5% Manual)',
      component: Phase3 
    }
  ];

  const handleComplete = () => {
    // Navigate back to Semantic Engineer concepts
    onNavigate('semantic-engineer', 'crisis');
  };

  return (
    <TopicCards
      topicTitle="Breeze.AI Process"
      cards={cards}
      initialCard={initialScreen}
      onNavigate={onNavigate}
      onComplete={handleComplete}
      completionButtonText="Back to Semantic Engineer"
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onHome={onHome}
    />
  );
};

export default ProcessFlow;