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

const SemanticEngineeringOverview: React.FC = () => {
  const [visibleMilestones, setVisibleMilestones] = useState(0);
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const journeyMilestones = [
    {
      year: "Q1 2022",
      title: "First GenAI Project",
      description: "Drug discovery use case for pharma leader using Graph RAG approach"
    },
    {
      year: "Q4 2022",
      title: "RAG + Graph RAG",
      description: "Support bot for UN agency"
    },
    {
      year: "Q1 2023",
      title: "Knowledge Platform",
      description: "Launched Knowledge assistant platform, Extensive Document processing using GenAI"
    },
    {
      year: "Q2 2023",
      title: "Generative Analytics",
      description: "Launched Generative analytics platform, implemented data bot for UN agency"
    },
    {
      year: "Q3 2023",
      title: "Cognitive Automation & Agentic",
      description: "Automated longtail debt collection for travel industry, Architected Agentic Graph RAG"
    },
    {
      year: "Q4 2023",
      title: "KAPS Framework",
      description: "Launched KAPS – GenAI adoption framework with Graph based context engineering"
    },
    {
      year: "Q1 2024",
      title: "Multi-modal Support",
      description: "Support bots with multi-modal capabilities - chat, voice, video"
    },
    {
      year: "Q2 2024",
      title: "GenAI Data Solutions",
      description: "GenAI driven Data solutions like MDM, Data migrations etc."
    },
    {
      year: "Q3 2024",
      title: "E2E Agentic Migration",
      description: "Cobol to Java – Code migration assistant for Engineering leader"
    },
    {
      year: "Q1 2025",
      title: "50+ Projects Delivered",
      description: "50+ GenAI / Agentic AI projects delivered"
    }
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
      title: "KAPS Framework",
      path: "/core-technology/kaps-framework",
      icon: <RectangleStackIcon className="h-8 w-8" />,
      role: "Adoption Framework",
      description: "AI adoption framework with four specialized portfolios",
      color: "blue"
    },
    {
      title: "Agent Architecture",
      path: "/core-technology/agent-architecture",
      icon: <CubeTransparentIcon className="h-8 w-8" />,
      role: "Solution Architecture",
      description: "Multi-agent orchestration architecture",
      color: "purple"
    },
    {
      title: "Breeze.AI",
      path: "/core-technology/breeze-ai",
      icon: <CpuChipIcon className="h-8 w-8" />,
      role: "Delivery Framework",
      description: "End-to-end semantic engineering framework",
      color: "green"
    },
    {
      title: "Gen AI in a Box",
      path: "/core-technology/gen-ai-box",
      icon: <BeakerIcon className="h-8 w-8" />,
      role: "Deployment Platform",
      description: "On-premise installation for secure, local semantic engineering",
      color: "orange"
    },
    {
      title: "Strategic Guardrails",
      path: "/core-technology/guardrails",
      icon: <ScaleIcon className="h-8 w-8" />,
      role: "Governance Framework",
      description: "Control structures for safe, compliant AI operations",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Core Technology
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Semantic Engineering Platform</h1>
          <p className="mt-3 text-xl text-gray-600 max-w-4xl">
            Accion Labs' comprehensive approach to building reliable, context-aware AI solutions through 
            structured knowledge representation and multi-agent orchestration.
          </p>
        </div>

        {/* LLM Application Methodologies */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Evolution of LLM Application Methodologies</h2>
          <p className="text-gray-600 mb-6">
            Each methodology builds upon the previous, adding new capabilities while retaining the strengths 
            of earlier approaches.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* LLM Integration/Prompt Engineering */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-red-500 mb-3">
                  <CommandLineIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">LLM Integration</h3>
                <p className="text-xs text-gray-500 mb-2">Prompt Engineering</p>
                <p className="text-sm text-gray-600 mb-3">Trained on External Data</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Characteristics:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-1">•</span>
                      Very slow and expensive
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-1">•</span>
                      Suffers from hallucinations
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-1">•</span>
                      Limited business use
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>Closed Book Approach</strong>
                  </p>
                </div>
              </div>

              {/* Fine Tuned Models */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-orange-500 mb-3">
                  <CogIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fine Tuned Models</h3>
                <p className="text-xs text-gray-500 mb-2">&nbsp;</p>
                <p className="text-sm text-gray-600 mb-3">Trained with domain or specific use case</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Characteristics:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-1">•</span>
                      Expensive & slow
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-400 mr-1">•</span>
                      Suffers from hallucinations
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-1">+</span>
                      Domain-specific knowledge
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>Closed Book Approach</strong>
                  </p>
                </div>
              </div>

              {/* RAG */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-green-600 mb-3">
                  <DocumentTextIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">RAG</h3>
                <p className="text-xs text-gray-500 mb-2">&nbsp;</p>
                <p className="text-sm text-gray-600 mb-3">Retrieval Augmented Generation</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Characteristics:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      Real time and cost effective
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-1">✓</span>
                      Does not hallucinate/Grounded
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-1">!</span>
                      Limited for textual content
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>Open Book Approach</strong>
                  </p>
                </div>
              </div>

              {/* AG-RAG Context Engineering */}
              <div className="bg-white p-6 rounded-lg border-2 border-gray-200 hover:shadow-lg transition-shadow flex flex-col">
                <div className="text-purple-600 mb-3">
                  <CircleStackIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AG-RAG</h3>
                <p className="text-xs text-gray-500 mb-2">Context Engineering</p>
                <p className="text-sm text-gray-600 mb-3">Agentic Graph RAG</p>
                <div className="flex-1 mb-3">
                  <p className="text-xs font-semibold text-gray-500 mb-1">Characteristics:</p>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">★</span>
                      Production level accuracy
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">★</span>
                      All forms of business info accessible
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-1">★</span>
                      Grounded and cost effective
                    </li>
                  </ul>
                </div>
                <div className="pt-3 border-t border-gray-200 mt-auto">
                  <p className="text-xs text-gray-500">
                    <strong>Open Book Approach</strong>
                  </p>
                </div>
              </div>
            </div>
          
          {/* Why Knowledge Graphs Section - Moved inside Evolution */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Why Knowledge Graphs Matter</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">The Challenge with Traditional AI</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <p className="text-gray-700"><strong>Loss of Context:</strong> Traditional approaches lose critical relationships between components</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <p className="text-gray-700"><strong>Inconsistent Results:</strong> Same queries produce different outputs without structured knowledge</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-red-500 mr-3 mt-1">✗</span>
                    <div>
                      <p className="text-gray-700"><strong>Limited Understanding:</strong> Unable to reason about complex interdependencies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">The Knowledge Graph Advantage</h4>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="text-gray-700"><strong>Preserved Relationships:</strong> Maintains all connections and dependencies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="text-gray-700"><strong>Consistent Reasoning:</strong> Structured data enables reliable, repeatable analysis</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-500 mr-3 mt-1">✓</span>
                    <div>
                      <p className="text-gray-700"><strong>Deep Understanding:</strong> Captures multi-layered context for accurate insights</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Our Semantic Engineering Approach */}
          <div className="mt-6 bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Our Semantic Engineering Platform
            </h3>
            <p className="text-blue-800 mb-4">
              At Accion Labs, we don't rely on a single methodology. Our Semantic Engineering platform intelligently 
              combines <strong>all these approaches</strong> based on the specific requirements of each application:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-blue-900">Prompt Engineering:</strong>
                  <span className="text-blue-700 text-sm"> For agent interactions and quick queries</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-blue-900">Fine-tuning:</strong>
                  <span className="text-blue-700 text-sm"> For domain-specific model optimization</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-blue-900">RAG:</strong>
                  <span className="text-blue-700 text-sm"> For dynamic knowledge retrieval</span>
                </div>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <div>
                  <strong className="text-blue-900">Graph RAG:</strong>
                  <span className="text-blue-700 text-sm"> For complex relationship understanding</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-blue-200">
              <p className="text-sm text-blue-700 italic">
                The key is knowing when and how to apply each technique for optimal results.
              </p>
            </div>
          </div>
        </div>

        {/* Our Journey */}
        <div ref={timelineRef} className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-sm p-8 mb-8 text-white">
          <h2 className="text-2xl font-semibold mb-6">Our Semantic Engineering Journey</h2>
          
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
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Semantic Engineering Platform</h2>
          <p className="text-gray-600 mb-8">
            Each component plays a critical role in our comprehensive approach to semantic engineering:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformComponents.map((component, index) => (
              <Link
                key={index}
                to={component.path}
                className="group bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all hover:border-blue-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-${component.color}-600`}>
                    {component.icon}
                  </div>
                  <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
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
            Ready to Transform Your Enterprise with Semantic Engineering?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Explore how our platform components work together to deliver accurate, reliable, and scalable AI solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/core-technology/kaps-framework"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Explore KAPS Framework
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemanticEngineeringOverview;