import React, { useState } from 'react';
import { 
  SparklesIcon,
  ChatBubbleBottomCenterTextIcon,
  GlobeAltIcon,
  BoltIcon,
  UserIcon,
  CpuChipIcon,
  ArrowPathIcon,
  CheckCircleIcon,
  ClockIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  MicrophoneIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon
} from '@heroicons/react/24/outline';

const SelfHealBot: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('chatbot');

  const features = {
    chatbot: {
      name: 'Self-Service Chatbot',
      description: 'Intelligent conversational interface for autonomous issue resolution',
      icon: ChatBubbleBottomCenterTextIcon,
      color: 'blue',
      capabilities: [
        'Natural language understanding with 95% accuracy',
        'Context-aware conversation management',
        'Multi-turn dialogue support',
        'Intent classification and entity extraction',
        'Dynamic response generation'
      ],
      technologies: ['GPT-4', 'LangChain', 'spaCy NLP', 'Rasa Framework'],
      metrics: {
        'Response Time': '<1 second',
        'Resolution Rate': '60%',
        'User Satisfaction': '4.7/5'
      }
    },
    personalization: {
      name: 'Personalized Experience',
      description: 'Tailored interactions based on user history and preferences',
      icon: UserIcon,
      color: 'purple',
      capabilities: [
        'User profile and history tracking',
        'Preference learning and adaptation',
        'Role-based response customization',
        'Previous interaction context retention',
        'Personalized solution recommendations'
      ],
      technologies: ['Vector DB', 'Redis Cache', 'User Analytics Engine', 'ML Personalization'],
      metrics: {
        'Personalization Accuracy': '92%',
        'Context Retention': '100%',
        'User Engagement': '+45%'
      }
    },
    automation: {
      name: 'Automated Communication',
      description: 'Proactive and automated customer engagement',
      icon: BoltIcon,
      color: 'green',
      capabilities: [
        'Automated ticket creation and routing',
        'Proactive issue notification',
        'Follow-up communication scheduling',
        'Status update automation',
        'Resolution confirmation workflows'
      ],
      technologies: ['Workflow Engine', 'Event Triggers', 'Notification Service', 'Template Engine'],
      metrics: {
        'Automation Rate': '85%',
        'Time Saved': '70%',
        'Error Reduction': '95%'
      }
    },
    multilingual: {
      name: 'Multilingual Support',
      description: 'Global support in 50+ languages with real-time translation',
      icon: GlobeAltIcon,
      color: 'orange',
      capabilities: [
        'Real-time language detection',
        'Neural machine translation',
        'Cultural context adaptation',
        'Multilingual knowledge base',
        'Cross-language entity recognition'
      ],
      technologies: ['Google Translate API', 'Azure Translator', 'Polyglot NLP', 'Language Models'],
      metrics: {
        'Languages Supported': '50+',
        'Translation Accuracy': '98%',
        'Global Coverage': '195 countries'
      }
    }
  };

  const useCases = [
    {
      title: 'Password Reset',
      channel: 'Web Chat',
      steps: [
        'User initiates chat requesting password reset',
        'Bot verifies identity through security questions',
        'Automated password reset link generation',
        'Confirmation and follow-up instructions'
      ],
      resolution: 'Fully automated - 45 seconds',
      satisfaction: '5/5'
    },
    {
      title: 'Account Information Update',
      channel: 'Mobile App',
      steps: [
        'User requests account detail change',
        'Bot validates request and permissions',
        'Guides through update process',
        'Confirms changes and sends notification'
      ],
      resolution: 'Fully automated - 2 minutes',
      satisfaction: '4.8/5'
    },
    {
      title: 'Service Status Inquiry',
      channel: 'Voice Assistant',
      steps: [
        'Voice-to-text conversion of inquiry',
        'Real-time service status check',
        'Natural language response generation',
        'Option for detailed report via email'
      ],
      resolution: 'Fully automated - 30 seconds',
      satisfaction: '4.9/5'
    }
  ];

  const channels = [
    { name: 'Web Chat', icon: ChatBubbleBottomCenterTextIcon, status: 'Active', volume: '45%' },
    { name: 'Mobile App', icon: DevicePhoneMobileIcon, status: 'Active', volume: '30%' },
    { name: 'Email', icon: EnvelopeIcon, status: 'Active', volume: '15%' },
    { name: 'Voice', icon: MicrophoneIcon, status: 'Active', volume: '10%' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-4">
            Autonomous Resolution Layer
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Self Heal Bot</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            First line of defense providing instant, autonomous resolution for common issues through 
            intelligent self-service capabilities and natural language understanding.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">60%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Auto-Resolution Rate</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ClockIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">&lt;1s</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Response Time</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <GlobeAltIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">50+</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Languages</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold text-gray-900">4.7/5</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">User Satisfaction</p>
          </div>
        </div>

        {/* Core Features */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Core Capabilities</h2>
          
          {/* Feature Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setSelectedFeature(key)}
                className={`pb-3 px-1 border-b-2 transition-colors flex items-center ${
                  selectedFeature === key 
                    ? 'border-blue-600 text-blue-600' 
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <feature.icon className="h-5 w-5 mr-2" />
                <span className="font-medium">{feature.name}</span>
              </button>
            ))}
          </div>

          {/* Selected Feature Details */}
          {selectedFeature && (
            <div>
              {Object.entries(features).filter(([key]) => key === selectedFeature).map(([key, feature]) => (
                <div key={key}>
                  <div className="flex items-center mb-4">
                    <feature.icon className={`h-8 w-8 text-${feature.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.name}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Capabilities</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {feature.technologies.map((tech, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 rounded text-xs text-gray-700">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Performance</h4>
                      <div className="space-y-2">
                        {Object.entries(feature.metrics).map(([metric, value]) => (
                          <div key={metric} className="flex justify-between text-sm">
                            <span className="text-gray-600">{metric}:</span>
                            <span className="font-semibold text-gray-900">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Common Use Cases</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{useCase.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                    {useCase.channel}
                  </span>
                </div>
                
                <div className="space-y-2 mb-4">
                  {useCase.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start">
                      <span className="text-xs text-blue-600 mr-2 mt-0.5">{idx + 1}.</span>
                      <span className="text-xs text-gray-600">{step}</span>
                    </div>
                  ))}
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-500">Resolution:</span>
                    <span className="text-green-600 font-semibold">{useCase.resolution}</span>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-gray-500">Satisfaction:</span>
                    <span className="text-gray-900 font-semibold">{useCase.satisfaction}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Channel Distribution */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Omnichannel Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <channel.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{channel.name}</h3>
                <p className="text-xs text-gray-600 mb-2">Status: {channel.status}</p>
                <div className="bg-gray-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full"
                    style={{ width: channel.volume }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{channel.volume} of volume</p>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Self Heal Bot Architecture</h2>
          <div className="bg-white rounded-lg p-6">
            <div className="space-y-4">
              {/* Input Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-blue-100 rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Input Layer</h3>
                  <p className="text-xs text-gray-600">Voice, Chat, Email, Mobile App</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>
              
              {/* Processing Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-purple-100 rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">NLP Processing</h3>
                  <p className="text-xs text-gray-600">Intent Recognition, Entity Extraction, Context Management</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>
              
              {/* Resolution Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-green-100 rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Automated Resolution</h3>
                  <p className="text-xs text-gray-600">Knowledge Base, API Calls, Workflow Execution</p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <ArrowPathIcon className="h-6 w-6 text-gray-400" />
              </div>
              
              {/* Output Layer */}
              <div className="flex items-center justify-center">
                <div className="bg-orange-100 rounded-lg p-4 w-full max-w-md text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Response Delivery</h3>
                  <p className="text-xs text-gray-600">Personalized Response, Multi-language Support, Follow-up Actions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelfHealBot;