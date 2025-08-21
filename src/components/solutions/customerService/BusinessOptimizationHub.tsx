import React, { useState } from 'react';
import { 
  ChartBarIcon,
  ArrowTrendingUpIcon,
  MagnifyingGlassIcon,
  BellAlertIcon,
  AcademicCapIcon,
  PresentationChartLineIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  CpuChipIcon,
  DocumentChartBarIcon,
  SparklesIcon,
  ArrowPathIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const BusinessOptimizationHub: React.FC = () => {
  const [selectedAnalytic, setSelectedAnalytic] = useState<string>('trend');

  const analytics = {
    trend: {
      name: 'Trend Analysis',
      description: 'Identify patterns and trends in support tickets and customer interactions',
      icon: ArrowTrendingUpIcon,
      color: 'blue',
      capabilities: [
        'Ticket volume forecasting',
        'Seasonal pattern detection',
        'Issue category trending',
        'Peak time identification',
        'Resolution time patterns'
      ],
      insights: [
        { metric: 'Weekly Pattern', value: 'Monday peaks at 35% volume' },
        { metric: 'Top Issue Trend', value: 'Password resets up 25%' },
        { metric: 'Seasonal Spike', value: 'Q4 shows 40% increase' }
      ]
    },
    sentiment: {
      name: 'Sentiment Analysis',
      description: 'Monitor and analyze customer emotions and satisfaction trends',
      icon: ExclamationTriangleIcon,
      color: 'purple',
      capabilities: [
        'Real-time sentiment tracking',
        'Emotion detection in conversations',
        'Satisfaction trend analysis',
        'Frustration point identification',
        'Agent performance correlation'
      ],
      insights: [
        { metric: 'Overall Sentiment', value: '72% Positive' },
        { metric: 'Frustration Points', value: '3 key areas identified' },
        { metric: 'CSAT Correlation', value: '0.85 with resolution time' }
      ]
    },
    process: {
      name: 'Process Analyzer',
      description: 'Optimize workflows and identify bottlenecks in support processes',
      icon: ArrowPathIcon,
      color: 'green',
      capabilities: [
        'Workflow bottleneck detection',
        'Process mining and optimization',
        'Automation opportunity identification',
        'SLA compliance tracking',
        'Resource utilization analysis'
      ],
      insights: [
        { metric: 'Main Bottleneck', value: 'L2 escalation queue' },
        { metric: 'Automation Potential', value: '45% of tickets' },
        { metric: 'SLA Compliance', value: '94% on-time' }
      ]
    },
    proactive: {
      name: 'Proactive Communication',
      description: 'Predict issues and communicate proactively with customers',
      icon: BellAlertIcon,
      color: 'orange',
      capabilities: [
        'Issue prediction modeling',
        'Proactive alert generation',
        'Customer impact assessment',
        'Communication timing optimization',
        'Preventive action recommendations'
      ],
      insights: [
        { metric: 'Issues Prevented', value: '2,400/month' },
        { metric: 'Customer Reach', value: '85% before impact' },
        { metric: 'Ticket Reduction', value: '32% for alerted issues' }
      ]
    },
    training: {
      name: 'Training & Knowledge Curator',
      description: 'Identify knowledge gaps and create targeted training programs',
      icon: AcademicCapIcon,
      color: 'indigo',
      capabilities: [
        'Knowledge gap analysis',
        'Training need identification',
        'Content recommendation',
        'Agent skill assessment',
        'Learning path optimization'
      ],
      insights: [
        { metric: 'Knowledge Gaps', value: '12 areas identified' },
        { metric: 'Training Impact', value: '+28% resolution rate' },
        { metric: 'Content Created', value: '45 new articles/month' }
      ]
    },
    analytics: {
      name: 'Advanced Analytics',
      description: 'Deep dive analytics with predictive modeling and AI insights',
      icon: PresentationChartLineIcon,
      color: 'red',
      capabilities: [
        'Predictive modeling',
        'Root cause analysis',
        'Customer journey mapping',
        'Agent performance analytics',
        'Cost-benefit analysis'
      ],
      insights: [
        { metric: 'Cost Savings', value: '$2.5M annually' },
        { metric: 'Prediction Accuracy', value: '89% for volume' },
        { metric: 'ROI', value: '340% in 6 months' }
      ]
    }
  };

  const optimizationMetrics = [
    {
      category: 'Operational Efficiency',
      metrics: [
        { name: 'Ticket Volume Reduction', current: '35%', target: '50%', trend: 'up' },
        { name: 'Average Handle Time', current: '6.2 min', target: '5 min', trend: 'down' },
        { name: 'First Contact Resolution', current: '78%', target: '85%', trend: 'up' },
        { name: 'Automation Rate', current: '60%', target: '75%', trend: 'up' }
      ]
    },
    {
      category: 'Customer Experience',
      metrics: [
        { name: 'Customer Satisfaction', current: '4.6/5', target: '4.8/5', trend: 'up' },
        { name: 'Net Promoter Score', current: '42', target: '60', trend: 'up' },
        { name: 'Customer Effort Score', current: '2.8', target: '2.0', trend: 'down' },
        { name: 'Resolution Quality', current: '91%', target: '95%', trend: 'stable' }
      ]
    },
    {
      category: 'Business Impact',
      metrics: [
        { name: 'Cost per Contact', current: '$5.25', target: '$4.00', trend: 'down' },
        { name: 'Agent Productivity', current: '250%', target: '300%', trend: 'up' },
        { name: 'Revenue Protection', current: '$1.2M', target: '$2M', trend: 'up' },
        { name: 'Churn Prevention', current: '18%', target: '25%', trend: 'up' }
      ]
    }
  ];

  const feedbackLoop = [
    {
      stage: 'Data Collection',
      description: 'Continuous gathering of interaction data across all channels',
      volume: '100K+ interactions/day'
    },
    {
      stage: 'Analysis & Insights',
      description: 'AI-powered analysis to identify patterns and opportunities',
      volume: '500+ insights/week'
    },
    {
      stage: 'Recommendation Generation',
      description: 'Actionable recommendations for process improvement',
      volume: '50+ recommendations/week'
    },
    {
      stage: 'Implementation',
      description: 'Automated and manual implementation of improvements',
      volume: '20+ improvements/week'
    },
    {
      stage: 'Impact Measurement',
      description: 'Track and measure the impact of implemented changes',
      volume: 'Real-time monitoring'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold mb-4">
            Intelligence & Optimization Layer
          </div>
          <h1 className="text-3xl font-bold text-gray-900">Business Optimization Hub</h1>
          <p className="mt-2 text-gray-600 max-w-3xl">
            AI-driven analytics engine that transforms support data into actionable business insights, 
            enabling continuous optimization and proactive service improvements.
          </p>
        </div>

        {/* Key Value Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ChartBarIcon className="h-8 w-8 text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">500+</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Weekly Insights</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <LightBulbIcon className="h-8 w-8 text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">45%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Process Automation</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <ArrowTrendingUpIcon className="h-8 w-8 text-green-600" />
              <span className="text-2xl font-bold text-gray-900">32%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Efficiency Gain</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <div className="flex items-center justify-between">
              <SparklesIcon className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">89%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">Prediction Accuracy</p>
          </div>
        </div>

        {/* Analytics Components */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Analytics & Intelligence Components</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {Object.entries(analytics).map(([key, analytic]) => (
              <button
                key={key}
                onClick={() => setSelectedAnalytic(key)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedAnalytic === key 
                    ? `border-${analytic.color}-500 bg-${analytic.color}-50` 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <analytic.icon className={`h-8 w-8 ${
                  selectedAnalytic === key ? `text-${analytic.color}-600` : 'text-gray-400'
                } mb-2`} />
                <h3 className="font-semibold text-gray-900 text-sm">{analytic.name}</h3>
              </button>
            ))}
          </div>

          {/* Selected Analytic Details */}
          {selectedAnalytic && (
            <div className="border-t pt-6">
              {Object.entries(analytics).filter(([key]) => key === selectedAnalytic).map(([key, analytic]) => (
                <div key={key}>
                  <div className="flex items-center mb-4">
                    <analytic.icon className={`h-8 w-8 text-${analytic.color}-600 mr-3`} />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{analytic.name}</h3>
                      <p className="text-gray-600">{analytic.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Capabilities */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Capabilities</h4>
                      <ul className="space-y-2">
                        {analytic.capabilities.map((capability, index) => (
                          <li key={index} className="flex items-start">
                            <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Insights */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Current Insights</h4>
                      <div className="space-y-3">
                        {analytic.insights.map((insight, index) => (
                          <div key={index} className="bg-gray-50 rounded-lg p-3">
                            <p className="text-xs text-gray-500">{insight.metric}</p>
                            <p className="text-sm font-semibold text-gray-900">{insight.value}</p>
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

        {/* Optimization Metrics Dashboard */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Real-Time Optimization Dashboard</h2>
          <div className="space-y-6">
            {optimizationMetrics.map((category, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm text-gray-600">{metric.name}</p>
                        {metric.trend === 'up' && <ArrowTrendingUpIcon className="h-4 w-4 text-green-500" />}
                        {metric.trend === 'down' && <ArrowTrendingUpIcon className="h-4 w-4 text-blue-500 rotate-180" />}
                        {metric.trend === 'stable' && <span className="h-4 w-4 text-gray-400">—</span>}
                      </div>
                      <p className="text-lg font-bold text-gray-900">{metric.current}</p>
                      <p className="text-xs text-gray-500">Target: {metric.target}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Continuous Improvement Cycle */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Continuous Improvement Feedback Loop</h2>
          <div className="space-y-4">
            {feedbackLoop.map((stage, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold text-gray-900">{stage.stage}</h3>
                  <p className="text-sm text-gray-600">{stage.description}</p>
                  <p className="text-xs text-purple-600 font-semibold mt-1">{stage.volume}</p>
                </div>
                {index < feedbackLoop.length - 1 && (
                  <div className="ml-4">
                    <ArrowPathIcon className="h-5 w-5 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact Visualization */}
        <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-gray-200 p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projected Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Efficiency Gains Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Q1: Self-heal adoption</span>
                  <span className="text-sm font-semibold text-green-600">20% efficiency</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Q2: Process optimization</span>
                  <span className="text-sm font-semibold text-green-600">35% efficiency</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Q3: Full automation</span>
                  <span className="text-sm font-semibold text-green-600">50% efficiency</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Q4: AI optimization</span>
                  <span className="text-sm font-semibold text-green-600">65% efficiency</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Cost Optimization Model</h3>
              <div className="bg-white rounded-lg p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Current Cost</span>
                    <span className="text-sm font-semibold">$5.2M/year</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Projected Savings</span>
                    <span className="text-sm font-semibold text-green-600">-$2.5M/year</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-sm font-semibold text-gray-900">Future Cost</span>
                    <span className="text-lg font-bold text-gray-900">$2.7M/year</span>
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <p className="text-xs text-purple-600 font-semibold">
                    Self-funding model: Savings reinvested in AI expansion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessOptimizationHub;