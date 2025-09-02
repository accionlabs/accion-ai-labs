import React from 'react';

interface CodeOntologyNewProps {
  onNavigate?: (screenId: string) => void;
  onNext?: () => void;
}

const CodeOntologyNew: React.FC<CodeOntologyNewProps> = () => {
  const technologyStacks = [
    {
      category: "Frontend",
      color: "bg-blue-50 border-blue-200",
      stacks: [
        {
          name: "React/TypeScript",
          applications: "Create React App, Next.js App, Micro-frontend",
          components: "React Components, Custom Hooks, Context Providers",
          functions: "Event handlers, useEffect, useState, Custom hooks"
        },
        {
          name: "Vue.js",
          applications: "Vue CLI App, Nuxt.js App, Vue Micro-frontend", 
          components: "Vue Components, Composables, Directives",
          functions: "Methods, Computed properties, Watchers"
        }
      ]
    },
    {
      category: "Backend",
      color: "bg-green-50 border-green-200",
      stacks: [
        {
          name: "Node.js/Express",
          applications: "Express Server, Serverless Functions, Microservices",
          components: "Controllers, Services, Repositories, Middleware",
          functions: "Route handlers, Business logic methods, Database operations"
        },
        {
          name: "Java/Spring",
          applications: "Spring Boot Apps, Microservices, WAR deployments",
          components: "Controllers, Services, Repositories, Configurations", 
          functions: "REST endpoints, Service methods, Repository operations"
        }
      ]
    },
    {
      category: "Data",
      color: "bg-purple-50 border-purple-200", 
      stacks: [
        {
          name: "SQL Database",
          applications: "Database instances, Data warehouses, OLAP systems",
          components: "Tables, Views, Stored procedures, Functions",
          functions: "SQL queries, Stored procedures, Triggers"
        },
        {
          name: "Data Pipeline",
          applications: "Apache Airflow, Apache Kafka, ETL platforms",
          components: "DAGs, Operators, Processors, Transformers",
          functions: "Task functions, Stream processors, Data transformations"
        }
      ]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            Code Ontology
          </span>
        </h1>
        
        <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
          Physical implementation units - the actual executable code that realizes architecture and functionality. 
          This ontology represents the concrete code structures organized by frontend, backend, and data concerns, 
          with technology-specific implementations.
        </p>
      </div>

      {/* Visual Layered Structure */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Code Ontology Structure</h3>
        
        <div className="space-y-6">
          {/* Frontend Code Layers */}
          <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <h4 className="text-xl font-bold text-blue-800">Frontend Code Layers</h4>
            </div>
            <div className="space-y-3">
              {[
                { layer: "Applications", description: "Deployable frontend units", example: "React App, Vue SPA, Mobile App" },
                { layer: "Modules", description: "Logical feature groupings", example: "ProductModule, UserModule, CartModule" },
                { layer: "Components", description: "UI implementation units", example: "ProductCard, LoginForm, NavigationHeader" },
                { layer: "Functions/Hooks", description: "Executable UI logic", example: "useProductData(), handleSubmit(), validateForm()" },
                { layer: "Properties/State", description: "UI data units", example: "isLoading, userInput, selectedItems[]" },
                { layer: "Configurations", description: "Frontend settings", example: "webpack.config, environment.json, routing.config" }
              ].map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-blue-200">
                  <div className="w-6 h-6 bg-blue-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-blue-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Code Layers */}
          <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <h4 className="text-xl font-bold text-green-800">Backend Code Layers</h4>
            </div>
            <div className="space-y-3">
              {[
                { layer: "Applications", description: "Deployable backend units", example: "API Service, Microservice, Serverless Function" },
                { layer: "Modules", description: "Business domain groupings", example: "ProductModule, OrderModule, PaymentModule" },
                { layer: "Classes/Services", description: "Business logic units", example: "ProductService, OrderController, PaymentProcessor" },
                { layer: "Functions/Methods", description: "Executable operations", example: "createProduct(), processPayment(), GET /api/orders" },
                { layer: "Properties/Fields", description: "Data units", example: "productId, orderTotal, apiEndpoints" },
                { layer: "Configurations", description: "Backend settings", example: "database.config, service.yaml, security.properties" }
              ].map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-green-200">
                  <div className="w-6 h-6 bg-green-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Code Layers */}
          <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">D</span>
              </div>
              <h4 className="text-xl font-bold text-purple-800">Data Code Layers</h4>
            </div>
            <div className="space-y-3">
              {[
                { layer: "Applications", description: "Data processing units", example: "ETL Pipeline, Analytics Engine, Data Sync Service" },
                { layer: "Modules", description: "Data domain groupings", example: "CustomerDataModule, ProductDataModule, AnalyticsModule" },
                { layer: "Classes/Processors", description: "Data transformation units", example: "DataValidator, SchemaMapper, AnalyticsProcessor" },
                { layer: "Functions/Queries", description: "Data operations", example: "transformProduct(), validateSchema(), SELECT * FROM products" },
                { layer: "Properties/Schemas", description: "Data structure definitions", example: "productSchema, customerFields, analyticsMetrics" },
                { layer: "Configurations", description: "Data settings", example: "pipeline.yaml, schema.json, database.properties" }
              ].map((tier, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-purple-200">
                  <div className="w-6 h-6 bg-purple-400 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-purple-800">{tier.layer}</div>
                    <div className="text-sm text-gray-600">{tier.description}</div>
                    <div className="text-xs text-gray-500 italic">{tier.example}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology-Specific Implementations */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Technology-Specific Sub-Ontologies</h3>
        
        <div className="space-y-8">
          {technologyStacks.map((category, categoryIndex) => (
            <div key={categoryIndex} className={`p-6 rounded-lg border-2 ${category.color}`}>
              <h4 className="text-xl font-bold text-gray-800 mb-6 text-center">{category.category} Technology Stacks</h4>
              
              <div className="space-y-6">
                {category.stacks.map((stack, stackIndex) => (
                  <div key={stackIndex} className="bg-white p-6 rounded-lg border shadow-sm">
                    <h5 className="text-lg font-bold text-gray-800 mb-4">{stack.name}</h5>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-orange-50 rounded border border-orange-200">
                        <div className="font-semibold text-orange-800 mb-2">Applications</div>
                        <div className="text-sm text-gray-700">{stack.applications}</div>
                      </div>
                      
                      <div className="p-3 bg-blue-50 rounded border border-blue-200">
                        <div className="font-semibold text-blue-800 mb-2">Components/Classes</div>
                        <div className="text-sm text-gray-700">{stack.components}</div>
                      </div>
                      
                      <div className="p-3 bg-green-50 rounded border border-green-200">
                        <div className="font-semibold text-green-800 mb-2">Functions/Methods</div>
                        <div className="text-sm text-gray-700">{stack.functions}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Code Ontology Benefits */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border-l-4 border-orange-500">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Code Ontology Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Implementation Clarity</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Clear technology-specific structures for each concern</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Consistent patterns across different technology stacks</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Standardized organization from applications to properties</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-lg text-gray-800 mb-3">Development Benefits</h4>
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Faster onboarding with clear code structure</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Improved maintainability through consistent patterns</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                <span className="text-gray-700">Enhanced reusability of components and functions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodeOntologyNew;