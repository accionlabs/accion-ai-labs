import TopicCards from '../TopicCards';
import ManualTranslationTax from './ManualTranslationTax';
import TraditionalApproaches from './TraditionalApproaches';
import BreezeBreakthrough from './BreezeBreakthrough';
import RevolutionaryCapabilities from './RevolutionaryCapabilities';
import LegacyTransformation from './LegacyTransformation';
import CompetitiveAdvantages from './CompetitiveAdvantages';

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
      component: ManualTranslationTax 
    },
    { 
      id: 'traditional-approaches', 
      title: 'Why Traditional Approaches Fail', 
      description: 'Waterfall impossibility, Agile architecture gaps, BDD overhead',
      component: TraditionalApproaches 
    },
    { 
      id: 'breeze-breakthrough', 
      title: 'The Breeze.AI Breakthrough', 
      description: 'Machine-readable knowledge graphs eliminate translation tax',
      component: BreezeBreakthrough 
    },
    { 
      id: 'revolutionary-capabilities', 
      title: 'Revolutionary Capabilities', 
      description: 'Perfect traceability, automatic change propagation, zero ambiguity',
      component: RevolutionaryCapabilities 
    },
    { 
      id: 'legacy-transformation', 
      title: 'Legacy System Transformation', 
      description: 'Automatic knowledge extraction and modernization',
      component: LegacyTransformation 
    },
    { 
      id: 'competitive-advantages', 
      title: 'Competitive Advantages', 
      description: 'Why Breeze.AI surpasses standard AI tools like Copilot/Cursor',
      component: CompetitiveAdvantages 
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