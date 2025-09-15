import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Home, FileText, Presentation } from 'lucide-react';
import { getPreviousItem, getNextItem, getTopicByIds } from './config/navigationConfig';
import { SlideGroup } from './utils/slideGrouping';

interface TopicCard {
  id: string;
  title: string;
  description: string;
  component: React.ComponentType<any>;
}

interface TopicCardsProps {
  topicTitle: string;
  cards: TopicCard[];
  initialCard?: string;
  onNavigate: (topicId: string, subTopicId?: string) => void;
  onComplete?: () => void;
  completionButtonText?: string;
  currentTopic: string;
  currentSubTopic?: string;
  onHome?: () => void;
}

const TopicCards: React.FC<TopicCardsProps> = ({ 
  topicTitle,
  cards,
  initialCard,
  onNavigate,
  onComplete,
  completionButtonText = "Continue",
  currentTopic,
  currentSubTopic,
  onHome
}) => {
  const [currentCardId, setCurrentCardId] = useState(initialCard || cards[0]?.id);
  const [isSlideMode, setIsSlideMode] = useState(() => {
    // Persist slide mode preference in localStorage
    const saved = localStorage.getItem('slideMode');
    return saved ? JSON.parse(saved) : false;
  });
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slides, setSlides] = useState<Element[]>([]);
  const [slidesLoading, setSlidesLoading] = useState(false);
  const [slideGroups, setSlideGroups] = useState<SlideGroup[]>([]);
  const [useConfiguredSlides, setUseConfiguredSlides] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  
  // Touch event state for swipe detection
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Sync internal state when initialCard prop changes (from external navigation)
  useEffect(() => {
    if (initialCard && initialCard !== currentCardId) {
      setCurrentCardId(initialCard);
    }
  }, [initialCard, currentCardId]);

  // Scroll to top when subtopic changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentSubTopic]);

  // Extract slides from content when component mounts or card changes
  useEffect(() => {
    if (isSlideMode) {
      setSlidesLoading(true);
    }
    
    // First check if this is a TopicLayout-based component with slide configuration
    const currentCard = cards.find(card => card.id === currentCardId);
    let useConfigSlides = false;
    
    // Try to extract slide configuration from TopicLayout components
    // This is a heuristic approach - we'll look for components that have a config property
    if (currentCard?.component) {
      try {
        // Create a temporary instance to check if it has slide configuration
        const tempDiv = document.createElement('div');
        document.body.appendChild(tempDiv);
        
        // We can't easily inspect React component props, so we'll use DOM detection as fallback
        // But first let's try to detect if it has slideGroup configuration
        
        // For now, we'll use a simple heuristic: if we see specific component patterns,
        // we know they use TopicLayout with slide groups
        const componentName = currentCard.component.name;
        const isTopicLayoutComponent = componentName && (
          componentName.includes('New') || 
          componentName.includes('TopicLayout') ||
          componentName.includes('Revolutionary') ||
          componentName.includes('Challenge')
        );
        
        if (isTopicLayoutComponent) {
          // This is likely a TopicLayout component
          // We'll detect the slide groups after rendering
          useConfigSlides = true;
        }
        
        document.body.removeChild(tempDiv);
      } catch (error) {
        console.log('Could not detect slide configuration:', error);
      }
    }
    
    setUseConfiguredSlides(useConfigSlides);
    
    // Use a small delay to ensure content is fully rendered
    const timer = setTimeout(() => {
      if (contentRef.current) {
        // Look inside the component's rendered content for sections
        // The component structure is: contentRef -> [component content] -> div.max-w-6xl -> sections
        let sectionsContainer: HTMLElement = contentRef.current;
        
        // Try to find the main container inside the component
        const maxWContainer = contentRef.current.querySelector('.max-w-6xl.mx-auto') as HTMLElement;
        if (maxWContainer) {
          sectionsContainer = maxWContainer;
        }
        
        // Robust slide detection - look for all direct children that are substantial content blocks
        const allChildren = Array.from(sectionsContainer.children) as HTMLElement[];
        
        console.log('Container:', sectionsContainer.className);
        console.log('Total children:', allChildren.length);
        
        // Simple and robust approach: use all direct children as potential slides
        // Filter only by basic criteria to ensure we don't miss slides
        const potentialSlides = allChildren.filter(child => {
          const isDiv = child.tagName === 'DIV';
          const hasContent = child.textContent && child.textContent.trim().length > 50;
          const hasHeight = child.offsetHeight > 50;
          const isVisible = getComputedStyle(child).display !== 'none';
          
          console.log('Child analysis:', {
            tagName: child.tagName,
            className: child.className,
            height: child.offsetHeight,
            textLength: child.textContent?.length || 0,
            isVisible,
            qualifies: isDiv && hasContent && hasHeight && isVisible
          });
          
          return isDiv && hasContent && hasHeight && isVisible;
        });
        
        console.log('Final slides detected:', potentialSlides.length);
        
        // If we still don't have enough slides, just use the first few direct children
        if (potentialSlides.length < 2 && allChildren.length > 0) {
          console.log('Using fallback: all substantial children');
          const fallbackSlides = allChildren.filter(child => {
            return child.tagName === 'DIV' && child.offsetHeight > 30;
          }).slice(0, Math.max(3, Math.ceil(allChildren.length / 2))); // Use first half or minimum 3
          
          if (fallbackSlides.length > potentialSlides.length) {
            console.log('Using fallback slides:', fallbackSlides.length);
            potentialSlides.length = 0;
            potentialSlides.push(...fallbackSlides);
          }
        }
        
        // Check if we have configured slide groups from TopicLayout
        const configuredSlideGroups = (window as any).__slideGroups;
        const totalConfiguredSlides = (window as any).__totalSlides;
        
        if (configuredSlideGroups && totalConfiguredSlides > 0) {
          console.log('Using configured slide groups:', totalConfiguredSlides, 'slides');
          setSlideGroups(configuredSlideGroups);
          setUseConfiguredSlides(true);
          // For configured slides, we'll use logical slides instead of DOM elements
          setSlides([]); // Clear DOM-based slides
          setSlidesLoading(false);
        } else {
          console.log('Detected potential slides:', potentialSlides.length);
          console.log('Slide details:', potentialSlides.map(slide => ({
            className: slide.className,
            height: (slide as HTMLElement).offsetHeight,
            textContent: (slide as HTMLElement).textContent?.substring(0, 50) + '...'
          })));
          
          setSlides(potentialSlides);
          setSlideGroups([]);
          setUseConfiguredSlides(false);
          setSlidesLoading(false);
        }
        
        // If we're in slide mode, set up slide visibility
        if (isSlideMode && potentialSlides.length > 0) {
          console.log('Setting up slide visibility for', potentialSlides.length, 'slides');
          
          // Reset all children first
          allChildren.forEach(child => {
            child.classList.remove('slide-visible', 'slide-hidden');
          });
          
          // Set up proper slide visibility based on detected slides
          potentialSlides.forEach((slide, index) => {
            if (index === currentSlideIndex) {
              slide.classList.add('slide-visible');
              console.log('Showing slide', index);
            } else {
              slide.classList.add('slide-hidden');
              console.log('Hiding slide', index);
            }
          });
        } else if (!isSlideMode) {
          // Reset all slides when not in slide mode
          allChildren.forEach(child => {
            child.classList.remove('slide-visible', 'slide-hidden');
          });
        }
      }
    }, 50); // Minimal delay to ensure DOM is ready, but prevent flicker

    return () => clearTimeout(timer);
  }, [currentCardId]);

  // Update slide visibility when slide mode or current slide changes
  useEffect(() => {
    if (isSlideMode && slides.length > 0) {
      slides.forEach((slide, index) => {
        const element = slide as HTMLElement;
        if (index === currentSlideIndex) {
          element.classList.add('slide-visible');
          element.classList.remove('slide-hidden');
        } else {
          element.classList.add('slide-hidden');
          element.classList.remove('slide-visible');
        }
      });
      
      // Scroll to the card content (below breadcrumbs) when slide changes
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const targetY = window.scrollY + rect.top - 50; // 50px margin from top
        window.scrollTo({ 
          top: targetY, 
          behavior: 'smooth' 
        });
      }
    } else if (!isSlideMode && slides.length > 0) {
      // Reset all slides to visible when not in slide mode
      slides.forEach((slide) => {
        const element = slide as HTMLElement;
        element.classList.remove('slide-visible', 'slide-hidden');
      });
    }
  }, [isSlideMode, currentSlideIndex, slides]);

  // Reset slide index when switching to slide mode or changing topics
  useEffect(() => {
    if (isSlideMode) {
      setCurrentSlideIndex(0);
    }
  }, [isSlideMode, currentTopic, currentSubTopic]);

  // Use centralized navigation configuration

  const currentIndex = cards.findIndex(card => card.id === currentCardId);
  const currentCard = cards[currentIndex];
  const CurrentComponent = currentCard?.component;

  // Get previous/next navigation info using centralized config
  const previousItem = currentTopic && currentSubTopic ? getPreviousItem(currentTopic, currentSubTopic) : null;
  const nextItem = currentTopic && currentSubTopic ? getNextItem(currentTopic, currentSubTopic) : null;

  const goToCard = (cardId: string) => {
    setCurrentCardId(cardId);
    // Get the current topic from the parent component
    // Since we can't reliably extract from URL, we'll need to pass it down
    // For now, we'll determine it based on the topicTitle
    const topicId = topicTitle === 'The Semantic Engineer' ? 'semantic-engineer' : 
                   topicTitle === 'Semantic Model Structure' ? 'semantic-model' : 
                   'process-flow';
    onNavigate(topicId, cardId);
  };

  const goToPrevious = () => {
    if (previousItem) {
      onNavigate(previousItem.topicId, previousItem.subTopicId);
    }
  };

  const goToNext = () => {
    if (nextItem) {
      onNavigate(nextItem.topicId, nextItem.subTopicId);
    } else if (onComplete) {
      onComplete();
    }
  };

  // Get total slide count (configured or DOM-based)
  const getTotalSlides = () => {
    if (useConfiguredSlides) {
      return slideGroups.length;
    }
    return slides.length;
  };

  // Slide navigation functions
  const goToNextSlide = () => {
    const totalSlides = getTotalSlides();
    if (currentSlideIndex < totalSlides - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      // At last slide, move to next topic
      goToNext();
    }
  };

  const goToPreviousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      // At first slide, move to previous topic
      goToPrevious();
    }
  };

  const toggleSlideMode = () => {
    const newSlideMode = !isSlideMode;
    setIsSlideMode(newSlideMode);
    // Persist slide mode preference in localStorage
    localStorage.setItem('slideMode', JSON.stringify(newSlideMode));
  };

  // Keyboard navigation for slides and mode switching
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Esc key to exit slide mode (works globally)
      if (event.key === 'Escape' && isSlideMode) {
        event.preventDefault();
        toggleSlideMode();
        return;
      }

      // Slide navigation keys (only work in slide mode)
      if (!isSlideMode) return;

      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        goToNextSlide();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        goToPreviousSlide();
      } else if (event.key === 'Home') {
        event.preventDefault();
        setCurrentSlideIndex(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        setCurrentSlideIndex(getTotalSlides() - 1);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSlideMode, currentSlideIndex, getTotalSlides(), toggleSlideMode]);

  // Touch event handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isSlideMode) return;
    setTouchEnd(null); // Reset touch end
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSlideMode) return;
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!isSlideMode || !touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNextSlide();
    } else if (isRightSwipe) {
      goToPreviousSlide();
    }
  };


  // Get current topic and subtopic info for breadcrumbs
  const { topic, subTopic } = getTopicByIds(currentTopic, currentSubTopic);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Breadcrumb Navigation and View Mode Toggle */}
      <div className="flex items-center justify-between mb-8 print:hidden">
        <nav className="breadcrumbs hidden md:block" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-sm">
            {/* Home */}
            {onHome && (
              <button
                onClick={onHome}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Home className="w-4 h-4" />
                <span>Home</span>
              </button>
            )}
            
            {/* Separator */}
            {onHome && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            
            {/* Current Topic */}
            <button
              onClick={() => topic && onNavigate(topic.id, topic.subItems[0]?.id)}
              className="text-gray-600 hover:text-gray-800 transition-colors"
            >
              {topic?.title}
            </button>
            
            {/* Separator */}
            {subTopic && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            
            {/* Current Subtopic */}
            {subTopic && (
              <span className="text-gray-900 font-medium">
                {subTopic.title}
              </span>
            )}
          </div>
        </nav>
        
        {/* Mobile-only simplified breadcrumb */}
        <nav className="breadcrumbs md:hidden" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-sm">
            {onHome && (
              <button
                onClick={onHome}
                className="flex items-center gap-1 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Home className="w-4 h-4" />
              </button>
            )}
            {onHome && subTopic && (
              <ChevronRight className="w-4 h-4 text-gray-400" />
            )}
            {subTopic && (
              <span className="text-gray-900 font-medium text-xs truncate max-w-32">
                {subTopic.title}
              </span>
            )}
          </div>
        </nav>

        {/* View Mode Toggle */}
        <div className="flex items-center gap-3">
          {/* Toggle Switch */}
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-600" />
            <div className="relative">
              <button
                onClick={toggleSlideMode}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isSlideMode ? 'bg-secondary' : 'bg-gray-300'
                }`}
                title={isSlideMode ? 'Switch to Document Mode' : 'Switch to Slide Mode'}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isSlideMode ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            <Presentation className="w-4 h-4 text-gray-600" />
          </div>

          {/* Mode Label and Counter */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-gray-700 hidden md:block">
              {isSlideMode ? 'Slide Mode' : 'Document Mode'}
            </span>
            {isSlideMode && getTotalSlides() > 0 && (
              <span className="text-xs bg-brand-blue-100 text-secondary px-2 py-1 rounded-full font-medium">
                {currentSlideIndex + 1}/{getTotalSlides()}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Current Card Content */}
      <div className="mb-8 pb-24">
        {CurrentComponent && (
          <div className={`bg-white rounded-xl shadow-lg p-4 md:p-8 ${isSlideMode ? 'slide-mode' : ''}`}>
            <div 
              ref={contentRef} 
              className={`${isSlideMode ? 'slide-container' : ''} mobile-scale md:transform-none`}
              style={isSlideMode ? { minHeight: '400px' } : {}}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <CurrentComponent 
                onNavigate={goToCard} 
                onNext={goToNext}
                onPrevious={goToPrevious}
                slideMode={isSlideMode}
                currentSlideIndex={currentSlideIndex}
              />
            </div>
          </div>
        )}
      </div>

      {/* Navigation Controls - Fixed to bottom */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-80 fixed-bottom-nav border-t border-gray-200 shadow-lg z-50 print:hidden">
        <div className="max-w-6xl mx-auto px-2 md:px-6 py-2 md:py-4 mobile-nav-compact md:mobile-nav-normal">
          {/* Slide Mode Layout */}
          {isSlideMode ? (
            <div className="flex items-center justify-between gap-1 md:gap-4">
              {/* Left: Topic Previous */}
              <button
                onClick={goToPrevious}
                disabled={!previousItem}
                className={`flex items-center gap-1 px-2 py-2 md:px-4 md:py-2 rounded-lg font-medium transition-all text-xs md:text-sm ${
                  !previousItem
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                <div className="text-left hidden sm:block">
                  {previousItem && (
                    <div className="text-xs md:text-sm font-medium">
                      Previous Topic
                    </div>
                  )}
                </div>
              </button>

              {/* Center: Slide Navigation Controls */}
              {getTotalSlides() > 0 && (
                <div className="flex items-center gap-1 md:gap-3">
                  <button
                    onClick={goToPreviousSlide}
                    className={`flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                      currentSlideIndex === 0 && previousItem
                        ? 'text-secondary bg-brand-blue-50 hover:bg-brand-blue-100 border border-secondary'
                        : 'text-white bg-gradient-to-r from-gray-600 to-gray-700 hover:shadow-lg border border-gray-600'
                    }`}
                    title={currentSlideIndex === 0 && previousItem ? `Go to previous topic: ${previousItem.title}` : 'Go to previous slide'}
                  >
                    <ChevronLeft className="w-3 h-3 md:w-4 md:h-4" />
                    {currentSlideIndex === 0 && previousItem ? (
                      <span className="text-xs font-medium hidden sm:inline">
                        ← Topic
                      </span>
                    ) : (
                      <span className="hidden sm:inline">Previous</span>
                    )}
                  </button>
                  
                  <span className="text-xs md:text-sm text-gray-500 px-1 md:px-3 font-medium slide-counter">
                    {slidesLoading ? '...' : getTotalSlides() > 0 ? `${currentSlideIndex + 1}/${getTotalSlides()}` : '0'}
                  </span>
                  
                  <button
                    onClick={goToNextSlide}
                    className={`flex items-center gap-1 px-2 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all ${
                      currentSlideIndex === getTotalSlides() - 1 && (nextItem || !nextItem)
                        ? 'text-secondary bg-brand-blue-50 hover:bg-brand-blue-100 border border-secondary'
                        : 'text-white bg-innovation-gradient hover:shadow-lg'
                    }`}
                    title={
                      currentSlideIndex === getTotalSlides() - 1 && nextItem 
                        ? `Go to next topic: ${nextItem.title}` 
                        : currentSlideIndex === getTotalSlides() - 1 && !nextItem
                        ? 'Complete this section'
                        : 'Go to next slide'
                    }
                  >
                    {currentSlideIndex === getTotalSlides() - 1 && nextItem ? (
                      <span className="text-xs font-medium hidden sm:inline">
                        Topic →
                      </span>
                    ) : currentSlideIndex === getTotalSlides() - 1 && !nextItem ? (
                      <span className="text-xs font-medium">{completionButtonText.split(' ')[0]}</span>
                    ) : (
                      <span className="hidden sm:inline">Next</span>
                    )}
                    <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
                  </button>
                </div>
              )}

              {/* Right: Topic Next */}
              <button
                onClick={goToNext}
                className="flex items-center gap-1 px-2 py-2 md:px-4 md:py-2 rounded-lg font-medium text-gray-600 hover:bg-gray-100 border border-gray-300 transition-all text-xs md:text-sm"
              >
                <div className="text-right hidden sm:block">
                  {nextItem ? (
                    <div className="text-xs md:text-sm font-medium">
                      Next Topic
                    </div>
                  ) : (
                    <div className="text-xs md:text-sm font-medium">{completionButtonText.split(' ')[0]}</div>
                  )}
                </div>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>
          ) : (
            /* Document Mode Layout */
            <div className="flex justify-between items-center gap-2">
              <button
                onClick={goToPrevious}
                disabled={!previousItem}
                className={`flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 rounded-lg font-medium transition-all text-xs md:text-sm ${
                  !previousItem
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                <div className="text-left">
                  {previousItem && (
                    <>
                      <div className="text-xs text-gray-500 hidden md:block">Previous</div>
                      <div className="text-xs md:text-sm font-medium">
                        Previous Topic
                      </div>
                    </>
                  )}
                </div>
              </button>

              <button
                onClick={goToNext}
                className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-6 md:py-3 bg-innovation-gradient text-white rounded-lg font-medium hover:shadow-lg transition-all text-xs md:text-sm"
              >
                <div className="text-right">
                  {nextItem ? (
                    <>
                      <div className="text-xs text-blue-200 hidden md:block">Next</div>
                      <div className="text-xs md:text-sm font-medium">
                        Next Topic
                      </div>
                    </>
                  ) : (
                    <div className="text-xs md:text-sm font-medium">{completionButtonText}</div>
                  )}
                </div>
                <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Bottom padding to prevent content from being hidden behind fixed navigation */}
      <div className="h-24 print:hidden"></div>
    </div>
  );
};

export default TopicCards;