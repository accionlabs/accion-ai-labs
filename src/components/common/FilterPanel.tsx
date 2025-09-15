import React from 'react';
import { useOntology } from '../../contexts/OntologyContext';
import { ProductType, OntologyType } from '../../types/ontology';

interface FilterPanelProps {
  showInconsistencies?: boolean;
  onToggleInconsistencies?: () => void;
  multiOntologyMode?: boolean;
}

const FilterPanel: React.FC<FilterPanelProps> = ({ 
  showInconsistencies = true, 
  onToggleInconsistencies,
  multiOntologyMode = false
}) => {
  const { state, dispatch } = useOntology();

  const handleProductFilter = (product: ProductType) => {
    dispatch({ type: 'SET_PRODUCT_FILTER', payload: product });
  };

  const handleOntologyFilter = (ontology: OntologyType) => {
    if (multiOntologyMode && ontology !== 'all') {
      dispatch({ type: 'TOGGLE_ONTOLOGY', payload: ontology });
    } else {
      dispatch({ type: 'SET_ONTOLOGY_FILTER', payload: ontology });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET_FILTERS' });
  };

  const productOptions: { value: ProductType; label: string; color: string }[] = [
    { value: 'all', label: 'All Products', color: 'gray' },
    { value: 'phoenix', label: 'Phoenix CRM', color: 'error' },
    { value: 'apollo', label: 'Apollo Launchpad', color: 'secondary' },
    { value: 'voyager', label: 'Voyager Analytics', color: 'brand-purple' }
  ];

  const ontologyOptions: { value: OntologyType; label: string; color: string }[] = [
    { value: 'all', label: 'All Ontologies', color: 'gray' },
    { value: 'functional', label: 'Functional', color: 'secondary' },
    { value: 'design', label: 'Design', color: 'brand-purple' },
    { value: 'architecture', label: 'Architecture', color: 'success' },
    { value: 'code', label: 'Code', color: 'warning' }
  ];

  const getColorClasses = (color: string, isSelected: boolean) => {
    const colorMap = {
      gray: isSelected ? 'bg-gray-100 text-gray-800 border-gray-300' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50',
      error: isSelected ? 'bg-error/10 text-error border-error/30' : 'bg-white text-error border-error/20 hover:bg-error/5',
      secondary: isSelected ? 'bg-secondary/10 text-secondary border-secondary/30' : 'bg-white text-secondary border-secondary/20 hover:bg-secondary/5',
      'brand-purple': isSelected ? 'bg-brand-purple-100 text-brand-purple-800 border-brand-purple-300' : 'bg-white text-brand-purple-600 border-brand-purple-200 hover:bg-brand-purple-50',
      success: isSelected ? 'bg-success/10 text-success border-success/30' : 'bg-white text-success border-success/20 hover:bg-success/5',
      warning: isSelected ? 'bg-warning/10 text-warning border-warning/30' : 'bg-white text-warning border-warning/20 hover:bg-warning/5'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.gray;
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Filters</h3>
        <button
          onClick={handleReset}
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Reset All
        </button>
      </div>

      {/* Product Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Product</h4>
        <div className="grid grid-cols-2 gap-2">
          {productOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => handleProductFilter(option.value)}
              className={`px-3 py-2 text-sm rounded-lg border transition-colors ${getColorClasses(
                option.color,
                state.selectedProduct === option.value
              )}`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Ontology Filter */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Ontology</h4>
        <div className="grid grid-cols-2 gap-2">
          {ontologyOptions.map((option) => {
            const isSelected = multiOntologyMode 
              ? (option.value === 'all' ? state.selectedOntologies.size === 4 : state.selectedOntologies.has(option.value))
              : state.selectedOntology === option.value;
            
            return (
              <button
                key={option.value}
                onClick={() => handleOntologyFilter(option.value)}
                className={`px-3 py-2 text-sm rounded-lg border transition-colors ${getColorClasses(
                  option.color,
                  isSelected
                )}`}
              >
                {multiOntologyMode && option.value !== 'all' && (
                  <span className="mr-1">
                    {state.selectedOntologies.has(option.value) ? '☑' : '☐'}
                  </span>
                )}
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Inconsistencies Toggle */}
      {onToggleInconsistencies && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Display Options</h4>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showInconsistencies}
              onChange={onToggleInconsistencies}
              className="rounded border-gray-300 text-error focus:ring-error"
            />
            <span className="ml-2 text-sm text-gray-600">
              Highlight Inconsistencies
            </span>
          </label>
        </div>
      )}

      {/* Filter Summary */}
      <div className="pt-4 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Current Filters</h4>
        <div className="space-y-1">
          <div className="text-xs text-gray-500">
            Product: <span className="font-medium">{productOptions.find(p => p.value === state.selectedProduct)?.label}</span>
          </div>
          <div className="text-xs text-gray-500">
            Ontology: <span className="font-medium">{ontologyOptions.find(o => o.value === state.selectedOntology)?.label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;