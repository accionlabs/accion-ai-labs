// URL routing utilities for hash-based navigation

export interface RouteState {
  page: 'landing' | 'topic';
  topic?: string;
  subTopic?: string;
}

// Parse the current URL hash into route state
export const parseUrlHash = (): RouteState => {
  const hash = window.location.hash.slice(1); // Remove the '#'
  
  if (!hash || hash === 'landing') {
    return { page: 'landing' };
  }
  
  const parts = hash.split('/');
  
  if (parts.length >= 1) {
    const topic = parts[0];
    const subTopic = parts[1];
    
    return {
      page: 'topic',
      topic,
      subTopic
    };
  }
  
  return { page: 'landing' };
};

// Update the URL hash based on route state
export const updateUrlHash = (page: 'landing' | 'topic', topic?: string, subTopic?: string) => {
  let hash = '';
  
  if (page === 'landing') {
    hash = 'landing';
  } else if (page === 'topic' && topic) {
    hash = subTopic ? `${topic}/${subTopic}` : topic;
  }
  
  // Only update if the hash is different to avoid unnecessary history entries
  const currentHash = window.location.hash.slice(1);
  if (currentHash !== hash) {
    window.location.hash = hash;
  }
};

// Navigate to a specific route
export const navigateToRoute = (page: 'landing' | 'topic', topic?: string, subTopic?: string) => {
  updateUrlHash(page, topic, subTopic);
};

// Valid topics and their default subtopics
const VALID_TOPICS = {
  'challenge': 'manual-translation-tax',
  'architecture': 'overview',
  'semantic-model': 'overview', 
  'process-flow': 'overview'
};

// Get the initial route state from URL or default
export const getInitialRouteState = (): RouteState => {
  const routeFromUrl = parseUrlHash();
  
  // If URL has no hash or invalid hash, default to landing
  if (routeFromUrl.page === 'landing' || !routeFromUrl.topic) {
    return { page: 'landing' };
  }
  
  // Validate topic
  const validTopics = Object.keys(VALID_TOPICS);
  if (!validTopics.includes(routeFromUrl.topic)) {
    return { page: 'landing' };
  }
  
  // If no subtopic provided, use default
  if (!routeFromUrl.subTopic) {
    return {
      page: 'topic',
      topic: routeFromUrl.topic,
      subTopic: VALID_TOPICS[routeFromUrl.topic as keyof typeof VALID_TOPICS]
    };
  }
  
  return routeFromUrl;
};