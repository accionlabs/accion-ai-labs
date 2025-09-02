import TopicCards from '../TopicCards';
import ManualTranslationTaxNew from './ManualTranslationTaxNew';
import TraditionalApproachesNew from './TraditionalApproachesNew';
import BreezeBreakthroughNew from './BreezeBreakthroughNew';
import RevolutionaryCapabilitiesNew from './RevolutionaryCapabilitiesNew';
import LegacyTransformationNew from './LegacyTransformationNew';
import CompetitiveAdvantagesNew from './CompetitiveAdvantagesNew';

interface ChallengeProps {
  initialScreen?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const Challenge: React.FC<ChallengeProps> = ({ 
  initialScreen = 'manual-translation-tax',
  onNavigate,
  currentTopic,
  currentSubTopic,
  onHome
}) => {
  const cards = [
    { 
      id: 'manual-translation-tax', 
      title: 'The Manual Translation Tax Crisis', 
      description: 'Core problems: ambiguity, technical debt, specification drift',
      component: ManualTranslationTaxNew 
    },
    { 
      id: 'traditional-approaches', 
      title: 'Why Traditional Approaches Fail', 
      description: 'Waterfall impossibility, Agile architecture gaps, BDD overhead',
      component: TraditionalApproachesNew 
    },
    { 
      id: 'breeze-breakthrough', 
      title: 'The Breeze.AI Breakthrough', 
      description: 'Machine-readable knowledge graphs eliminate translation tax',
      component: BreezeBreakthroughNew 
    },
    { 
      id: 'revolutionary-capabilities', 
      title: 'Revolutionary Capabilities', 
      description: 'Perfect traceability, automatic change propagation, zero ambiguity',
      component: RevolutionaryCapabilitiesNew 
    },
    { 
      id: 'legacy-transformation', 
      title: 'Legacy System Transformation', 
      description: 'Automatic knowledge extraction and modernization',
      component: LegacyTransformationNew 
    },
    { 
      id: 'competitive-advantages', 
      title: 'Competitive Advantages', 
      description: 'Why Breeze.AI surpasses standard AI tools like Copilot/Cursor',
      component: CompetitiveAdvantagesNew 
    }
  ];

  return (
    <TopicCards
      topicTitle="The Challenge & The Breeze.AI Solution"
      cards={cards}
      initialCard={initialScreen}
      onNavigate={onNavigate}
      currentTopic={currentTopic}
      currentSubTopic={currentSubTopic}
      onHome={onHome}
    />
  );
};

export default Challenge;