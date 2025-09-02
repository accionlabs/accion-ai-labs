# Layout Migration Guide

This guide shows how to migrate from individual layout sections to consolidated components.

## 1. ProminentDisplaySection (replaces 3 components)

### HeaderSection → ProminentDisplaySection
```typescript
// OLD
{
  type: 'header',
  content: {
    title: 'Title',
    titleGradient: 'from-blue-600 to-purple-600',
    subtitle: 'Subtitle',
    description: 'Description',
    alignment: 'center'
  }
}

// NEW
{
  type: 'prominentDisplay',
  content: {
    variant: 'header',
    title: 'Title',
    titleGradient: 'from-blue-600 to-purple-600',
    subtitle: 'Subtitle',
    description: 'Description',
    alignment: 'center'
  }
}
```

### HeroSection → ProminentDisplaySection
```typescript
// OLD
{
  type: 'hero',
  content: {
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
    backgroundGradient: 'from-blue-50 to-purple-50',
    borderColor: 'border-blue-500',
    icon: '🚀',
    titleColor: 'text-blue-800'
  }
}

// NEW
{
  type: 'prominentDisplay',
  content: {
    variant: 'hero',
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
    backgroundGradient: 'from-blue-50 to-purple-50',
    borderColor: 'border-blue-500',
    icon: '🚀',
    titleColor: 'text-blue-800'
  }
}
```

### CTASection → ProminentDisplaySection
```typescript
// OLD
{
  type: 'cta',
  content: {
    title: 'Title',
    subtitle: 'Subtitle',
    description: 'Description',
    buttonText: 'Click Me',
    backgroundGradient: 'from-blue-600 to-purple-600'
  }
}

// NEW
{
  type: 'prominentDisplay',
  content: {
    variant: 'cta',
    title: 'Title',
    subtitle: 'Subtitle', 
    description: 'Description',
    buttonText: 'Click Me',
    backgroundGradient: 'from-blue-600 to-purple-600'
  }
}
```

## 2. FlexibleGridSection (replaces 6 components)

### ContentSection → FlexibleGridSection
```typescript
// OLD
{
  type: 'content',
  content: {
    title: 'Title',
    layout: 'grid-2',
    items: [
      {
        id: 'item1',
        title: 'Item Title',
        description: 'Description',
        icon: '📊',
        backgroundColor: 'bg-blue-50'
      }
    ]
  }
}

// NEW
{
  type: 'flexibleGrid',
  content: {
    variant: 'content',
    title: 'Title',
    layout: 'grid-2',
    items: [
      {
        id: 'item1',
        title: 'Item Title',
        description: 'Description',
        icon: '📊',
        backgroundColor: 'bg-blue-50'
      }
    ]
  }
}
```

### CardsSection → FlexibleGridSection
```typescript
// OLD
{
  type: 'cards',
  content: {
    title: 'Title',
    layout: 'grid-3',
    cards: [
      {
        id: 'card1',
        title: 'Card Title',
        description: 'Description',
        icon: '🎯',
        isClickable: true
      }
    ]
  }
}

// NEW
{
  type: 'flexibleGrid',
  content: {
    variant: 'cards',
    title: 'Title',
    layout: 'grid-3',
    items: [
      {
        id: 'card1',
        title: 'Card Title',
        description: 'Description',
        icon: '🎯',
        isClickable: true
      }
    ]
  }
}
```

### IconGridSection → FlexibleGridSection
```typescript
// OLD
{
  type: 'iconGrid',
  content: {
    title: 'Title',
    columns: 4,
    items: [
      {
        id: 'icon1',
        title: 'Icon Title',
        description: 'Description',
        icon: '⚡',
        backgroundColor: 'bg-blue-50'
      }
    ]
  }
}

// NEW
{
  type: 'flexibleGrid',
  content: {
    variant: 'icons',
    title: 'Title',
    columns: 4,
    items: [
      {
        id: 'icon1',
        title: 'Icon Title',
        description: 'Description',
        icon: '⚡',
        backgroundColor: 'bg-blue-50'
      }
    ]
  }
}
```

### BenefitsSection → FlexibleGridSection
```typescript
// OLD
{
  type: 'benefits',
  content: {
    title: 'Title',
    backgroundColor: 'from-blue-50 to-purple-50',
    categories: [
      {
        title: 'Category',
        benefits: ['Benefit 1', 'Benefit 2']
      }
    ]
  }
}

// NEW
{
  type: 'flexibleGrid',
  content: {
    variant: 'benefits',
    title: 'Title',
    containerStyle: 'gradient',
    backgroundColor: 'from-blue-50 to-purple-50',
    categories: [
      {
        title: 'Category',
        benefits: ['Benefit 1', 'Benefit 2']
      }
    ]
  }
}
```

### ChecklistSection → FlexibleGridSection
```typescript
// OLD
{
  type: 'checklist',
  content: {
    title: 'Title',
    columns: 2,
    items: [
      {
        id: 'check1',
        title: 'Check Title',
        description: 'Description',
        backgroundColor: 'bg-blue-50'
      }
    ]
  }
}

// NEW
{
  type: 'flexibleGrid',
  content: {
    variant: 'checklist',
    title: 'Title',
    columns: 2,
    items: [
      {
        id: 'check1',
        title: 'Check Title',
        description: 'Description',
        backgroundColor: 'bg-blue-50'
      }
    ]
  }
}
```

### DetailedListSection → FlexibleGridSection
```typescript
// OLD
{
  type: 'detailedList',
  content: {
    title: 'Title',
    backgroundColor: 'bg-gradient-to-r from-red-50 to-orange-50',
    columns: [
      {
        items: [
          {
            id: 'item1',
            title: 'Item Title',
            description: 'Description',
            bulletColor: 'bg-red-500'
          }
        ]
      }
    ]
  }
}

// NEW
{
  type: 'flexibleGrid',
  content: {
    variant: 'detailed-list',
    title: 'Title',
    containerStyle: 'gradient',
    backgroundColor: 'from-red-50 to-orange-50',
    layout: 'grid-2',
    items: [
      {
        id: 'item1',
        title: 'Item Title',
        description: 'Description',
        backgroundColor: 'bg-white',
        titleColor: 'text-red-800'
      }
    ]
  }
}
```

## 3. SequentialContentSection (replaces 2 components)

### TimelineSection → SequentialContentSection
```typescript
// OLD
{
  type: 'timeline',
  content: {
    title: 'Title',
    layout: 'vertical',
    steps: [
      {
        id: 'step1',
        title: 'Step Title',
        description: 'Description',
        color: 'bg-blue-500'
      }
    ]
  }
}

// NEW
{
  type: 'sequentialContent',
  content: {
    variant: 'timeline',
    title: 'Title',
    layout: 'vertical',
    steps: [
      {
        id: 'step1',
        title: 'Step Title',
        description: 'Description',
        color: 'bg-blue-500'
      }
    ]
  }
}
```

### ProcessFlowSection → SequentialContentSection
```typescript
// OLD
{
  type: 'processFlow',
  content: {
    title: 'Title',
    backgroundGradient: 'bg-gradient-to-br from-purple-50 to-orange-50',
    steps: [
      {
        id: 'step1',
        title: 'Step Title',
        circleColor: 'bg-blue-500'
      }
    ]
  }
}

// NEW
{
  type: 'sequentialContent',
  content: {
    variant: 'process-flow',
    title: 'Title',
    backgroundGradient: 'bg-gradient-to-br from-purple-50 to-orange-50',
    steps: [
      {
        id: 'step1',
        title: 'Step Title',
        circleColor: 'bg-blue-500'
      }
    ]
  }
}
```

## 4. MultiColumnSection (replaces 2 components)

### ArchitectureSection → MultiColumnSection
```typescript
// OLD
{
  type: 'architecture',
  content: {
    title: 'Title',
    backgroundGradient: 'bg-gradient-to-br from-blue-50 to-green-50',
    layers: [
      {
        id: 'layer1',
        title: 'Layer Title',
        description: 'Description'
      }
    ]
  }
}

// NEW
{
  type: 'multiColumn',
  content: {
    variant: 'architecture',
    title: 'Title',
    backgroundGradient: 'bg-gradient-to-br from-blue-50 to-green-50',
    layers: [
      {
        id: 'layer1',
        title: 'Layer Title',
        description: 'Description'
      }
    ]
  }
}
```

### ComplexContentSection → MultiColumnSection
```typescript
// OLD
{
  type: 'complexContent',
  content: {
    title: 'Title',
    leftColumn: {
      sections: [/* sections */]
    },
    rightColumn: {
      title: 'Right Title',
      sections: [/* sections */]
    }
  }
}

// NEW
{
  type: 'multiColumn',
  content: {
    variant: 'complex-content',
    title: 'Title',
    layout: 'two-column',
    leftColumn: {
      sections: [/* sections */]
    },
    rightColumn: {
      title: 'Right Title',
      sections: [/* sections */]
    }
  }
}
```

## Key Changes Summary:
1. **Add `variant` property** - specifies which original component behavior to use
2. **Change `type`** - from individual section types to consolidated types
3. **Flatten arrays** - `columns[].items[]` becomes `items[]` in FlexibleGrid
4. **Rename properties** - `cards` becomes `items`, etc.
5. **Add container styling** - `containerStyle: 'gradient'` for gradient backgrounds