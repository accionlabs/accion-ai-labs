import TopicCards from '../TopicCards';
import Overview from './Overview';
import CoreComponents from './CoreComponents';
import ComponentInteractions from './ComponentInteractions';
import IntegrationPoints from './IntegrationPoints';
import ScalabilityPerformance from './ScalabilityPerformance';
import SecurityCompliance from './SecurityCompliance';

interface ArchitectureProps {
  initialScreen?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const Architecture: React.FC<ArchitectureProps> = ({
  initialScreen = 'overview',
  onNavigate,
  currentTopic,
  currentSubTopic,
  onHome
}) => {
  const cards = [
    { 
      id: 'overview', 
      title: 'Architecture Overview', 
      description: 'High-level system architecture and design principles',
      component: Overview 
    },
    { 
      id: 'core-components', 
      title: 'Core Components Summary', 
      description: 'Essential system components and their responsibilities',
      component: CoreComponents 
    },
    { 
      id: 'component-interactions', 
      title: 'Component Interactions', 
      description: 'How system components communicate and collaborate',
      component: ComponentInteractions 
    },
    { 
      id: 'integration-points', 
      title: 'Integration Points', 
      description: 'External system interfaces and integration patterns',
      component: IntegrationPoints 
    },
    { 
      id: 'scalability-performance', 
      title: 'Scalability & Performance', 
      description: 'System scaling strategies and performance characteristics',
      component: ScalabilityPerformance 
    },
    { 
      id: 'security-compliance', 
      title: 'Security & Compliance', 
      description: 'Security framework and compliance capabilities',
      component: SecurityCompliance 
    }
  ];

  return (
    <TopicCards
      topicTitle="System Architecture & Components"
      cards={cards}
      initialCard={initialScreen}
      onNavigate={onNavigate}
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onHome={onHome}
    />
  );
};

export default Architecture;