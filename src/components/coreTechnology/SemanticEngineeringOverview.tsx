import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  CodeBracketIcon,
  BeakerIcon,
  CubeTransparentIcon,
  ArrowRightIcon,
  CircleStackIcon,
  SparklesIcon,
  ChartBarIcon,
  CpuChipIcon,
  RectangleStackIcon,
  ScaleIcon,
  ClockIcon,
  LightBulbIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  CommandLineIcon,
  CloudIcon,
  CogIcon
} from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';

const SemanticEngineeringOverview: React.FC = () => {
  const { t } = useTranslation('coreTechnology');
  const [visibleMilestones, setVisibleMilestones] = useState(0);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const milestoneKeys = [
    'q1_2022', 'q4_2022', 'q1_2023', 'q2_2023', 'q3_2023',
    'q4_2023', 'q1_2024', 'q2_2024', 'q3_2024', 'q1_2025'
  ];

  const journeyMilestones = [
    { year: "Q1 2022", title: t('semanticEngineering.journey.milestones.q1_2022.title'), description: t('semanticEngineering.journey.milestones.q1_2022.description') },
    { year: "Q4 2022", title: t('semanticEngineering.journey.milestones.q4_2022.title'), description: t('semanticEngineering.journey.milestones.q4_2022.description') },
    { year: "Q1 2023", title: t('semanticEngineering.journey.milestones.q1_2023.title'), description: t('semanticEngineering.journey.milestones.q1_2023.description') },
    { year: "Q2 2023", title: t('semanticEngineering.journey.milestones.q2_2023.title'), description: t('semanticEngineering.journey.milestones.q2_2023.description') },
    { year: "Q3 2023", title: t('semanticEngineering.journey.milestones.q3_2023.title'), description: t('semanticEngineering.journey.milestones.q3_2023.description') },
    { year: "Q4 2023", title: t('semanticEngineering.journey.milestones.q4_2023.title'), description: t('semanticEngineering.journey.milestones.q4_2023.description') },
    { year: "Q1 2024", title: t('semanticEngineering.journey.milestones.q1_2024.title'), description: t('semanticEngineering.journey.milestones.q1_2024.description') },
    { year: "Q2 2024", title: t('semanticEngineering.journey.milestones.q2_2024.title'), description: t('semanticEngineering.journey.milestones.q2_2024.description') },
    { year: "Q3 2024", title: t('semanticEngineering.journey.milestones.q3_2024.title'), description: t('semanticEngineering.journey.milestones.q3_2024.description') },
    { year: "Q1 2025", title: t('semanticEngineering.journey.milestones.q1_2025.title'), description: t('semanticEngineering.journey.milestones.q1_2025.description') }
  ];

  // Animation for timeline triggered by scroll visibility
  useEffect(() => {
    const currentRef = timelineRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasStartedAnimation(true);
          } else {
            // Reset animation when scrolled out of view
            setHasStartedAnimation(false);
            setVisibleMilestones(0);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Start the milestone animation when timeline becomes visible
  useEffect(() => {
    if (!hasStartedAnimation) {
      return;
    }

    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < journeyMilestones.length) {
        setVisibleMilestones(currentIndex + 1);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 800);

    return () => clearInterval(timer);
  }, [hasStartedAnimation, journeyMilestones.length]);

  const platformComponents = [
    {
      title: t('semanticEngineering.platformComponents.items.kaps.title'),
      path: "/core-technology/kaps-framework",
      icon: <RectangleStackIcon className="h-8 w-8" />,
      role: t('semanticEngineering.platformComponents.items.kaps.role'),
      description: t('semanticEngineering.platformComponents.items.kaps.description'),
      color: "blue"
    },
    {
      title: t('semanticEngineering.platformComponents.items.agentArchitecture.title'),
      path: "/core-technology/agent-architecture",
      icon: <CubeTransparentIcon className="h-8 w-8" />,
      role: t('semanticEngineering.platformComponents.items.agentArchitecture.role'),
      description: t('semanticEngineering.platformComponents.items.agentArchitecture.description'),
      color: "purple"
    },
    {
      title: t('semanticEngineering.platformComponents.items.breezeAI.title'),
      path: "/core-technology/breeze-ai",
      icon: <CpuChipIcon className="h-8 w-8" />,
      role: t('semanticEngineering.platformComponents.items.breezeAI.role'),
      description: t('semanticEngineering.platformComponents.items.breezeAI.description'),
      color: "green"
    },
    {
      title: t('semanticEngineering.platformComponents.items.genAIBox.title'),
      path: "/core-technology/gen-ai-box",
      icon: <BeakerIcon className="h-8 w-8" />,
      role: t('semanticEngineering.platformComponents.items.genAIBox.role'),
      description: t('semanticEngineering.platformComponents.items.genAIBox.description'),
      color: "orange"
    },
    {
      title: t('semanticEngineering.platformComponents.items.guardrails.title'),
      path: "/core-technology/guardrails",
      icon: <ScaleIcon className="h-8 w-8" />,
      role: t('semanticEngineering.platformComponents.items.guardrails.role'),
      description: t('semanticEngineering.platformComponents.items.guardrails.description'),
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-semibold mb-4">
            {t('semanticEngineering.header.badge')}
          </div>
          <h1 className="text-4xl font-bold text-gray-900">{t('semanticEngineering.header.title')}</h1>
          <p className="mt-3 text-xl text-gray-600 max-w-4xl">
            {t('semanticEngineering.header.description')}
          </p>
        </div>

        {/* LLM Application Methodologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">{t('semanticEngineering.evolution.title')}</h2>
          <p className="text-gray-600 mb-6">
            {t('semanticEngineering.evolution.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* LLM Integration/Prompt Engineering */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-red-500 mb-3">
                  <CommandLineIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('semanticEngineering.evolution.llmIntegration.title')}</h3>
                <p className="text-xs text-gray-500 mb-2">{t('semanticEngineering.evolution.llmIntegration.subtitle')}</p>
                <p className="text-sm text-gray-600 mb-3">{t('semanticEngineering.evolution.llmIntegration.description')}</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">{t('semanticEngineering.evolution.llmIntegration.characteristics')}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {(t('semanticEngineering.evolution.llmIntegration.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-400 mr-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>{t('semanticEngineering.evolution.llmIntegration.approach')}</strong>
                  </p>
                </div>
              </div>

              {/* Fine Tuned Models */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-orange-500 mb-3">
                  <CogIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('semanticEngineering.evolution.fineTuned.title')}</h3>
                <p className="text-xs text-gray-500 mb-2">&nbsp;</p>
                <p className="text-sm text-gray-600 mb-3">{t('semanticEngineering.evolution.fineTuned.description')}</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">{t('semanticEngineering.evolution.fineTuned.characteristics')}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {(t('semanticEngineering.evolution.fineTuned.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={idx < 2 ? "text-orange-400 mr-1" : "text-green-500 mr-1"}>{idx < 2 ? '•' : '+'}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>{t('semanticEngineering.evolution.fineTuned.approach')}</strong>
                  </p>
                </div>
              </div>

              {/* RAG */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-green-600 mb-3">
                  <DocumentTextIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('semanticEngineering.evolution.rag.title')}</h3>
                <p className="text-xs text-gray-500 mb-2">&nbsp;</p>
                <p className="text-sm text-gray-600 mb-3">{t('semanticEngineering.evolution.rag.description')}</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">{t('semanticEngineering.evolution.rag.characteristics')}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {(t('semanticEngineering.evolution.rag.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={idx < 2 ? "text-green-500 mr-1" : "text-yellow-500 mr-1"}>{idx < 2 ? '✓' : '!'}</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>{t('semanticEngineering.evolution.rag.approach')}</strong>
                  </p>
                </div>
              </div>

              {/* AG-RAG Context Engineering */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-purple-600 mb-3">
                  <CircleStackIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('semanticEngineering.evolution.agRag.title')}</h3>
                <p className="text-xs text-gray-500 mb-2">{t('semanticEngineering.evolution.agRag.subtitle')}</p>
                <p className="text-sm text-gray-600 mb-3">{t('semanticEngineering.evolution.agRag.description')}</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">{t('semanticEngineering.evolution.agRag.characteristics')}</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {(t('semanticEngineering.evolution.agRag.items', { returnObjects: true }) as unknown as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-purple-500 mr-1">★</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>{t('semanticEngineering.evolution.agRag.approach')}</strong>
                  </p>
                </div>
              </div>
            </div>

          {/* Why Knowledge Graphs Section - Moved inside Evolution */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{t('semanticEngineering.whyKnowledgeGraphs.title')}</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('semanticEngineering.whyKnowledgeGraphs.challenge.title')}</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <p className="text-gray-700"><strong>{t('semanticEngineering.whyKnowledgeGraphs.challenge.lossOfContextLabel')}:</strong> {t('semanticEngineering.whyKnowledgeGraphs.challenge.lossOfContext')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <p className="text-gray-700"><strong>{t('semanticEngineering.whyKnowledgeGraphs.challenge.inconsistentResultsLabel')}:</strong> {t('semanticEngineering.whyKnowledgeGraphs.challenge.inconsistentResults')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <p className="text-gray-700"><strong>{t('semanticEngineering.whyKnowledgeGraphs.challenge.limitedUnderstandingLabel')}:</strong> {t('semanticEngineering.whyKnowledgeGraphs.challenge.limitedUnderstanding')}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{t('semanticEngineering.whyKnowledgeGraphs.advantage.title')}</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="text-gray-700"><strong>{t('semanticEngineering.whyKnowledgeGraphs.advantage.preservedRelationshipsLabel')}:</strong> {t('semanticEngineering.whyKnowledgeGraphs.advantage.preservedRelationships')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="text-gray-700"><strong>{t('semanticEngineering.whyKnowledgeGraphs.advantage.consistentReasoningLabel')}:</strong> {t('semanticEngineering.whyKnowledgeGraphs.advantage.consistentReasoning')}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="text-gray-700"><strong>{t('semanticEngineering.whyKnowledgeGraphs.advantage.deepUnderstandingLabel')}:</strong> {t('semanticEngineering.whyKnowledgeGraphs.advantage.deepUnderstanding')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Semantic Engineering Approach */}
          <div className="mt-6 bg-secondary/10 rounded-lg p-6 border border-secondary">
            <h3 className="text-lg font-semibold text-secondary mb-3">
              {t('semanticEngineering.platform.title')}
            </h3>
            <p className="text-secondary mb-4" dangerouslySetInnerHTML={{ __html: t('semanticEngineering.platform.description') }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-secondary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-secondary">{t('semanticEngineering.platform.promptEngineeringLabel')}</strong>
                  <span className="text-secondary text-sm"> {t('semanticEngineering.platform.promptEngineering')}</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-secondary">{t('semanticEngineering.platform.fineTuningLabel')}</strong>
                  <span className="text-secondary text-sm"> {t('semanticEngineering.platform.fineTuning')}</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-secondary">{t('semanticEngineering.platform.ragLabel')}</strong>
                  <span className="text-secondary text-sm"> {t('semanticEngineering.platform.ragApproach')}</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-secondary mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-secondary">{t('semanticEngineering.platform.graphRagLabel')}</strong>
                  <span className="text-secondary text-sm"> {t('semanticEngineering.platform.graphRag')}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-secondary">
              <p className="text-sm text-secondary italic">
                {t('semanticEngineering.platform.keyPoint')}
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div ref={timelineRef} className="bg-innovation-gradient rounded-xl shadow-sm p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">{t('semanticEngineering.journey.title')}</h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-white/30"></div>

            <div className="space-y-6">
              {journeyMilestones.map((milestone, index) => {
                const [quarter, year] = milestone.year.split(' ');
                return (
                  <div
                    key={index}
                    className={`relative flex items-start transition-all duration-1000 ${
                      index < visibleMilestones
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-10'
                    }`}
                  >
                    <div className="w-20 text-center">
                      <div className="bg-white/20 rounded px-2 py-1">
                        <div className="text-sm font-bold">{quarter}</div>
                        <div className="text-xs">{year}</div>
                      </div>
                    </div>
                    <div className="mx-2">
                      <div className={`w-4 h-4 rounded-full transition-all duration-500 delay-300 ${
                        index < visibleMilestones
                          ? 'bg-white scale-100'
                          : 'bg-white/30 scale-0'
                      }`}></div>
                    </div>
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold mb-1">{milestone.title}</h3>
                      <p className="text-white/80 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Platform Components */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t('semanticEngineering.platformComponents.title')}</h2>
          <p className="text-gray-600 mb-8">
            {t('semanticEngineering.platformComponents.description')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformComponents.map((component, index) => (
              <Link
                key={index}
                to={component.path}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-secondary"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-${component.color}-600`}>
                    {component.icon}
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-secondary group-hover:translate-x-1 transition-all" />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-1">{component.title}</h3>
                <div className={`inline-block px-2 py-1 bg-${component.color}-100 text-${component.color}-700 rounded text-xs font-semibold mb-3`}>
                  {component.role}
                </div>
                <p className="text-sm text-gray-600">{component.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {t('semanticEngineering.cta.title')}
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            {t('semanticEngineering.cta.description')}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/core-technology/kaps-framework"
              className="inline-flex items-center px-6 py-3 bg-secondary text-white rounded-lg font-semibold hover:bg-brand-blue-700 transition-colors"
            >
              {t('semanticEngineering.cta.exploreKaps')}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {t('semanticEngineering.cta.getStarted')}
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemanticEngineeringOverview;
