import React from 'react';
import TopicLayout from '../layouts/TopicLayout';
import { TopicConfig } from '../layouts/types';

interface ScalabilityPerformanceNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

// Configuration for Scalability & Performance topic - kept within the component
const scalabilityPerformanceConfig: TopicConfig = {
  "id": "scalability-performance",
  "title": "Scalability & Performance",
  "slides": [
    {
      "id": "scalability-performance-main",
      "sections": [
        {

          "id": "prominentDisplay-section-1",

          "type": "prominentDisplay",

          "content": {
            "title": "Scalability & Performance",
            "titleGradient": "from-green-600 to-teal-600",
            "description": "Breeze.AI's architecture is designed for enterprise-scale operations with intelligent resource management, distributed processing, and optimized performance characteristics.",
            "alignment": "center",
            "variant": "header"
          }
        },
        {

          "id": "flexibleGrid-section-2",

          "type": "flexibleGrid",

          "content": {
            "title": "Scalability Architecture",
            "description": "The system employs a multi-tier scaling strategy that adapts to varying workloads while maintaining consistent performance and availability.",
            "layout": "grid-3",
            "items": [
              {
                "id": "horizontal-scaling",
                "title": "Horizontal Scaling",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Component Independence: Each system component can scale independently based on demand patterns",
                  "Agent pool expansion",
                  "Knowledge graph sharding",
                  "API gateway clustering",
                  "Queue-based load balancing"
                ]
              },
              {
                "id": "vertical-scaling",
                "title": "Vertical Scaling",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Resource Optimization: Intelligent resource allocation based on workload characteristics",
                  "Dynamic memory allocation",
                  "CPU-intensive task optimization",
                  "Storage capacity management",
                  "Network bandwidth optimization"
                ]
              },
              {
                "id": "auto-scaling",
                "title": "Auto-Scaling",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Predictive Scaling: Machine learning-based capacity planning and proactive scaling",
                  "Workload pattern recognition",
                  "Demand forecasting",
                  "Pre-emptive resource provisioning",
                  "Cost-aware scaling decisions"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-3",

          "type": "flexibleGrid",

          "content": {
            "title": "Scaling Decision Matrix",
            "description": "Different workload types require different scaling strategies and trigger conditions.",
            "layout": "single",
            "items": [
              {
                "id": "workload-strategies",
                "title": "Workload Scaling Strategies",
                "backgroundColor": "bg-gradient-to-br from-green-50 to-purple-50",
                "items": [
                  "🤖 Agent Processing: Horizontal + Queue-based scaling (> 100 pending tasks)",
                  "📊 Knowledge Graph Queries: Read replicas + Caching (> 500ms average latency)",
                  "⚙️ Code Generation: Vertical + GPU acceleration (> 80% CPU utilization)",
                  "✅ Quality Validation: Parallel processing (> 2 minute validation time)"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-4",

          "type": "flexibleGrid",

          "content": {
            "title": "Performance Optimization",
            "layout": "grid-2",
            "items": [
              {
                "id": "intelligent-caching",
                "title": "Intelligent Caching",
                "description": "Multi-layer caching strategy optimized for semantic knowledge and agent processing patterns",
                "backgroundColor": "bg-yellow-50",
                "borderColor": "border-yellow-200",
                "items": [
                  "L1 Cache: In-memory agent context caching",
                  "L2 Cache: Distributed knowledge graph fragments",
                  "L3 Cache: Generated artifact caching with semantic invalidation",
                  "CDN: Global distribution of static resources and documentation"
                ]
              },
              {
                "id": "query-optimization",
                "title": "Query Optimization",
                "description": "Advanced query planning and execution optimization for knowledge graph operations",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200",
                "items": [
                  "Query Planner: Cost-based execution plan optimization",
                  "Index Strategy: Semantic relationship indexing",
                  "Materialized Views: Pre-computed common query patterns",
                  "Parallel Execution: Multi-threaded query processing"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-5",

          "type": "flexibleGrid",

          "content": {
            "title": "Processing & Network Optimization",
            "layout": "grid-2",
            "items": [
              {
                "id": "processing-pipeline",
                "title": "Processing Pipeline Optimization",
                "description": "Streamlined processing pipelines with minimal latency and maximum throughput",
                "backgroundColor": "bg-red-50",
                "borderColor": "border-red-200",
                "items": [
                  "Batch Processing: Optimized batch sizes for different operations",
                  "Stream Processing: Real-time event processing with Apache Kafka",
                  "Pipeline Parallelization: Concurrent stage execution",
                  "Resource Pooling: Shared resources across agent instances"
                ]
              },
              {
                "id": "network-optimization",
                "title": "Network Optimization",
                "description": "Optimized network protocols and data transfer strategies for distributed operations",
                "backgroundColor": "bg-indigo-50",
                "borderColor": "border-indigo-200",
                "items": [
                  "Protocol Optimization: HTTP/2, gRPC for internal communication",
                  "Compression: Intelligent payload compression",
                  "Connection Pooling: Persistent connections with load balancing",
                  "Edge Computing: Regional processing nodes for reduced latency"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-6",

          "type": "flexibleGrid",

          "content": {
            "title": "Intelligent Resource Management",
            "description": "Dynamic resource allocation and management based on workload characteristics, priority levels, and performance requirements.",
            "layout": "grid-3",
            "items": [
              {
                "id": "workload-classification",
                "title": "Workload Classification",
                "backgroundColor": "bg-cyan-50",
                "borderColor": "border-cyan-200",
                "items": [
                  "🚨 Critical Path Operations: High priority, low latency (< 1s response time)",
                  "📦 Batch Operations: High throughput, flexible timing (< 10min completion)",
                  "⏳ Background Tasks: Best effort, resource available (< 1hr completion)"
                ]
              },
              {
                "id": "allocation-strategy",
                "title": "Resource Allocation Strategy",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "Priority-Based Scheduling: Critical operations get reserved resources",
                  "Elastic Resource Pools: Dynamic expansion based on demand",
                  "Cost Optimization: Spot instances for non-critical workloads"
                ]
              },
              {
                "id": "performance-monitoring",
                "title": "Performance Monitoring",
                "backgroundColor": "bg-emerald-50",
                "borderColor": "border-emerald-200",
                "items": [
                  "Real-time Metrics: Continuous performance monitoring",
                  "Anomaly Detection: ML-based performance issue detection",
                  "Predictive Scaling: Proactive resource provisioning"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-7",

          "type": "flexibleGrid",

          "content": {
            "title": "High Availability & Disaster Recovery",
            "layout": "grid-2",
            "items": [
              {
                "id": "multi-region-deployment",
                "title": "Multi-Region Deployment",
                "description": "Geographically distributed architecture ensures service availability and optimal performance across global user base",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200",
                "items": [
                  "Active-Active Setup: Multiple regions serving traffic simultaneously",
                  "Intelligent Routing: Latency-based traffic distribution",
                  "Data Replication: Consistent knowledge graph synchronization",
                  "Failover Automation: Sub-minute failover with zero data loss"
                ]
              },
              {
                "id": "fault-tolerance",
                "title": "Fault Tolerance",
                "description": "Built-in resilience to component failures with graceful degradation and automatic recovery mechanisms",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200",
                "items": [
                  "Circuit Breakers: Prevent cascade failures",
                  "Retry Logic: Intelligent retry with exponential backoff",
                  "Bulkhead Pattern: Isolated failure domains",
                  "Health Checks: Continuous component health monitoring"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-8",

          "type": "flexibleGrid",

          "content": {
            "title": "Recovery Time Objectives",
            "description": "Service-level agreements for different system components with defined recovery targets.",
            "layout": "single",
            "items": [
              {
                "id": "rto-targets",
                "title": "RTO Performance Targets",
                "backgroundColor": "bg-gradient-to-br from-blue-50 to-purple-50",
                "items": [
                  "🔌 API Services: RTO 30s, 99.95% uptime SLA",
                  "📊 Knowledge Graph: RTO 2min, 99.9% availability target",
                  "🤖 Agent Processing: RTO 5min, graceful degradation mode"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-9",

          "type": "flexibleGrid",

          "content": {
            "title": "Performance Benchmarks",
            "description": "Real-world performance metrics demonstrating Breeze.AI's capability to handle enterprise-scale workloads with consistent performance characteristics.",
            "layout": "grid-4",
            "items": [
              {
                "id": "graph-queries",
                "title": "1M+ Knowledge Graph Queries/sec",
                "description": "With sub-100ms average latency",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200"
              },
              {
                "id": "concurrent-agents",
                "title": "10K+ Concurrent Agent Tasks",
                "description": "Parallel processing capability",
                "backgroundColor": "bg-blue-50",
                "borderColor": "border-blue-200"
              },
              {
                "id": "code-generation",
                "title": "50GB+ Code Generation/hour",
                "description": "Including tests and documentation",
                "backgroundColor": "bg-purple-50",
                "borderColor": "border-purple-200"
              },
              {
                "id": "system-uptime",
                "title": "99.95% System Uptime",
                "description": "Enterprise SLA guarantee",
                "backgroundColor": "bg-orange-50",
                "borderColor": "border-orange-200"
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-10",

          "type": "flexibleGrid",

          "content": {
            "title": "Load Testing Results",
            "layout": "grid-2",
            "items": [
              {
                "id": "specification-processing",
                "title": "Specification Processing",
                "backgroundColor": "bg-gray-50",
                "borderColor": "border-gray-200",
                "items": [
                  "Peak Load: 1,000 simultaneous specification uploads",
                  "Processing Time: Average 2.3 seconds per specification",
                  "Quality Validation: 15 concurrent validation pipelines",
                  "Success Rate: 99.8% completion rate under peak load"
                ]
              },
              {
                "id": "implementation-generation",
                "title": "Implementation Generation",
                "backgroundColor": "bg-gray-50",
                "borderColor": "border-gray-200",
                "items": [
                  "Peak Throughput: 500 code generation requests/minute",
                  "Average Response: 4.7 seconds for full implementation",
                  "Resource Utilization: 85% CPU efficiency",
                  "Quality Score: 96% automated quality gate pass rate"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "prominentDisplay-section-11",

          "type": "prominentDisplay",

          "content": {
            "title": "Cost Optimization",
            "backgroundGradient": "from-green-50 to-teal-50",
            "borderColor": "border-green-500",
            "description": "Intelligent resource management and operational efficiency strategies minimize costs while maintaining performance.",
            "variant": "hero"
          }
        },
        {

          "id": "flexibleGrid-section-12",

          "type": "flexibleGrid",

          "content": {
            "title": "Cost Optimization Strategies",
            "layout": "grid-2",
            "items": [
              {
                "id": "resource-efficiency",
                "title": "Resource Efficiency",
                "backgroundColor": "bg-green-50",
                "borderColor": "border-green-200",
                "items": [
                  "Right-sizing: Automatic resource allocation based on workload",
                  "Spot Instances: Up to 70% cost savings on batch operations",
                  "Reserved Capacity: Committed use discounts for predictable workloads",
                  "Auto-scaling: Scale down during low usage periods"
                ]
              },
              {
                "id": "operational-efficiency",
                "title": "Operational Efficiency",
                "backgroundColor": "bg-teal-50",
                "borderColor": "border-teal-200",
                "items": [
                  "Caching: Reduce compute costs through intelligent caching",
                  "Compression: Lower bandwidth and storage costs",
                  "Lifecycle Management: Automated data archival and cleanup",
                  "Multi-tenancy: Shared resources across customers"
                ]
              }
            ],
            "variant": "content"
          }
        },
        {

          "id": "flexibleGrid-section-13",

          "type": "flexibleGrid",

          "content": {
            "title": "Security & Compliance Foundation",
            "backgroundColor": "from-green-50 to-teal-50",
            "borderColor": "border-green-500",
            "categories": [
              {
                "title": "Enterprise Foundation",
                "color": "green",
                "benefits": [
                  "Security by Design: Built-in security controls at every architectural layer",
                  "Compliance Framework: SOC 2, ISO 27001, GDPR, and industry-specific standards",
                  "Audit & Governance: Complete audit trails and governance capabilities"
                ]
              }
            ],
            "variant": "benefits",
            "containerStyle": "gradient"
          }
        },
        {

          "id": "prominentDisplay-section-14",

          "type": "prominentDisplay",

          "content": {
            "title": "Explore Security & Compliance",
            "description": "This scalable, high-performance architecture is built on a foundation of enterprise-grade security and comprehensive compliance capabilities.",
            "buttonText": "Explore Security & Compliance",
            "backgroundGradient": "from-green-600 to-teal-600",
            "variant": "cta"
          }
        }
      ]
    }
  ]
};

const ScalabilityPerformanceNew: React.FC<ScalabilityPerformanceNewProps> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={scalabilityPerformanceConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};

export default ScalabilityPerformanceNew;