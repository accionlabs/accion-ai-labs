import TopicCards from '../TopicCards';
import Overview from './OverviewNew';
import CoreComponentsNew from './CoreComponentsNew';
import ComponentInteractionsNew from './ComponentInteractionsNew';
import IntegrationPointsNew from './IntegrationPointsNew';
import ScalabilityPerformanceNew from './ScalabilityPerformanceNew';
import SecurityComplianceNew from './SecurityComplianceNew';

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
      component: CoreComponentsNew 
    },
    { 
      id: 'component-interactions', 
      title: 'Component Interactions', 
      description: 'How system components communicate and collaborate',
      component: ComponentInteractionsNew 
    },
    { 
      id: 'integration-points', 
      title: 'Integration Points', 
      description: 'External system interfaces and integration patterns',
      component: IntegrationPointsNew 
    },
    { 
      id: 'scalability-performance', 
      title: 'Scalability & Performance', 
      description: 'System scaling strategies and performance characteristics',
      component: ScalabilityPerformanceNew 
    },
    { 
      id: 'security-compliance', 
      title: 'Security & Compliance', 
      description: 'Security framework and compliance capabilities',
      component: SecurityComplianceNew 
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