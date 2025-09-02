# Reusable Layout System

This folder contains a comprehensive reusable layout system for creating consistent, configurable slide presentations across all topics.

## 🏗️ Architecture

The layout system follows a configuration-driven approach where topics are defined using JSON-like configuration objects that specify sections and their content.

### Components Structure

```
src/layouts/
├── TopicLayout.tsx           # Main topic container
├── SlideLayout.tsx          # Individual slide renderer
├── types.ts                 # Type definitions
├── index.ts                 # Clean exports
└── sections/                # Reusable section components
    ├── HeaderSection.tsx    # Page headers with gradient titles
    ├── HeroSection.tsx      # Featured content blocks with icons
    ├── ContentSection.tsx   # Grid layouts with items and descriptions
    ├── CardsSection.tsx     # Interactive navigation cards
    ├── TimelineSection.tsx  # Step-by-step processes
    ├── BenefitsSection.tsx  # Benefits with categories
    └── CTASection.tsx       # Call-to-action blocks
```

## 🎯 Usage

### Basic Usage

```tsx
import React from 'react';
import TopicLayout from '../../layouts/TopicLayout';
import { TopicConfig } from '../../layouts/types';

const MyTopicConfig: TopicConfig = {
  id: 'my-topic',
  title: 'My Topic Title',
  slides: [
    {
      id: 'slide-1',
      sections: [
        {
          id: 'header',
          type: 'header',
          content: {
            title: 'My Title',
            titleGradient: 'from-blue-600 to-purple-600',
            description: 'My description'
          }
        }
      ]
    }
  ]
};

const MyTopic: React.FC<Props> = ({ onNavigate, onNext }) => {
  return (
    <TopicLayout 
      config={MyTopicConfig}
      onNavigate={onNavigate}
      onNext={onNext}
    />
  );
};
```

## 📋 Section Types

### 1. HeaderSection
Page headers with customizable gradients and alignment.

```tsx
{
  id: 'header',
  type: 'header',
  content: {
    title: 'Main Title',
    subtitle: 'Optional Subtitle',
    titleGradient: 'from-blue-600 to-purple-600',
    description: 'Optional description text',
    alignment: 'center' | 'left' | 'right'
  }
}
```

### 2. HeroSection  
Featured content blocks with background gradients and icons.

```tsx
{
  id: 'hero',
  type: 'hero',
  content: {
    title: 'Hero Title',
    subtitle: 'Optional subtitle',
    description: 'Hero description',
    backgroundGradient: 'from-blue-50 to-purple-50',
    borderColor: 'border-blue-500',
    icon: '🚀'
  }
}
```

### 3. ContentSection
Flexible grid layouts for displaying content items.

```tsx
{
  id: 'content',
  type: 'content',
  content: {
    title: 'Content Title',
    layout: 'grid-2' | 'grid-3' | 'grid-4' | 'single',
    items: [
      {
        id: 'item-1',
        title: 'Item Title',
        description: 'Item description',
        icon: '⭐',
        backgroundColor: 'bg-blue-50',
        borderColor: 'border-blue-200',
        items: ['List item 1', 'List item 2']
      }
    ]
  }
}
```

### 4. CardsSection
Interactive navigation cards with hover effects.

```tsx
{
  id: 'cards',
  type: 'cards',
  content: {
    title: 'Cards Title',
    layout: 'grid-2' | 'grid-3' | 'grid-4',
    cards: [
      {
        id: 'card-1',
        title: 'Card Title',
        subtitle: 'Card subtitle',
        description: 'Card description',
        icon: '🎯',
        backgroundColor: 'bg-blue-100',
        borderColor: 'border-blue-500',
        isClickable: true,
        example: 'Example text'
      }
    ]
  }
}
```

### 5. TimelineSection
Step-by-step processes with horizontal or vertical layout.

```tsx
{
  id: 'timeline',
  type: 'timeline',
  content: {
    title: 'Process Title',
    layout: 'horizontal' | 'vertical',
    steps: [
      {
        id: 'step-1',
        number: 1,
        title: 'Step Title',
        description: 'Step description',
        color: 'bg-blue-500',
        backgroundColor: 'bg-blue-50',
        icon: '📝',
        isHighlight: false
      }
    ]
  }
}
```

### 6. BenefitsSection
Benefits organized by categories with bullet points.

```tsx
{
  id: 'benefits',
  type: 'benefits',
  content: {
    title: 'Benefits Title',
    description: 'Benefits description',
    backgroundColor: 'from-blue-50 to-purple-50',
    borderColor: 'border-blue-500',
    categories: [
      {
        title: 'Category Title',
        color: 'blue',
        benefits: [
          'Benefit 1',
          'Benefit 2'
        ]
      }
    ]
  }
}
```

### 7. CTASection
Call-to-action blocks with buttons and gradients.

```tsx
{
  id: 'cta',
  type: 'cta',
  content: {
    title: 'CTA Title',
    description: 'CTA description',
    buttonText: 'Button Text',
    buttonIcon: '→',
    backgroundGradient: 'from-blue-600 to-purple-600'
  }
}
```

## 🎨 Styling

All components use Tailwind CSS classes and follow these conventions:

- **Colors**: Use Tailwind color classes (e.g., `bg-blue-50`, `text-blue-800`)
- **Gradients**: Use Tailwind gradient classes (e.g., `from-blue-600 to-purple-600`)
- **Borders**: Use Tailwind border classes (e.g., `border-blue-500`)
- **Responsive**: All layouts are mobile-responsive by default

## ✅ Benefits

1. **🎯 Consistency** - All topics use the same visual structure
2. **⚡ Efficiency** - New topics created by writing config only
3. **🔧 Maintainability** - Layout changes affect all topics at once
4. **📱 Mobile Optimized** - All sections inherit responsive design
5. **🖨️ Print Friendly** - Compatible with existing print styles
6. **👆 Touch Compatible** - Works with swipe navigation
7. **🎪 Slide Mode Ready** - Optimized for presentation mode

## 🚀 Migration

To migrate an existing topic to the new layout system:

1. Create a new component file (e.g., `MyTopicNew.tsx`)
2. Define your `TopicConfig` object within the component
3. Replace the old JSX with `<TopicLayout config={yourConfig} />`
4. Test and refine your configuration
5. Replace the old component in the topic index

## 💡 Tips

- Keep configurations within component files for better encapsulation
- Use TypeScript for full type safety
- Test configurations in different screen sizes
- Utilize the existing color schemes for consistency
- Add `isClickable: true` to cards that should navigate
- Use meaningful IDs for all sections and items