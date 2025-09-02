#!/bin/bash

# Fix SVG namespace issues
echo "Fixing SVG namespace issues..."
find ./assets -name "*.svg" -type f | while read file; do
  echo "Processing SVG: $file"
  # Remove xmlns:svg namespace
  sed -i '' 's/ xmlns:svg="[^"]*"//g' "$file"
done

# Fix missing TopicCards component
echo "Creating TopicCards component..."
cat > TopicCards.tsx << 'EOF'
import React from 'react';

interface TopicCardsProps {
  // Add props as needed
}

const TopicCards: React.FC<TopicCardsProps> = () => {
  return <div className="p-8">Topic Cards Component</div>;
};

export default TopicCards;
EOF

# Fix index.tsx files that import TopicCards
echo "Fixing index.tsx imports..."
sed -i '' "s|import TopicCards from '../../components/TopicCards'|import TopicCards from '../TopicCards'|g" architecture/index.tsx
sed -i '' "s|import TopicCards from '../../components/TopicCards'|import TopicCards from '../TopicCards'|g" flow/index.tsx
sed -i '' "s|import TopicCards from '../../components/TopicCards'|import TopicCards from '../TopicCards'|g" semantic/index.tsx
sed -i '' "s|import TopicCards from '../../components/TopicCards'|import TopicCards from '../TopicCards'|g" challenge/index.tsx

# Fix types import in layout sections
echo "Fixing types imports in layout sections..."
sed -i '' "s|from '../types'|from '../../types'|g" layouts/old/sections/*.tsx
sed -i '' "s|from '../utils/textFormatting'|from '../../../utils/textFormatting'|g" layouts/old/sections/*.tsx

echo "Fixes complete!"