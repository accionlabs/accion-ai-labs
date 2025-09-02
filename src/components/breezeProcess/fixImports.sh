#!/bin/bash

# Fix import paths in all TypeScript/JavaScript files in breezeProcess directory
# Changes ../../layouts to ../layouts, ../../assets to ../assets, etc.

echo "Fixing import paths in breezeProcess components..."

# Find all .tsx and .ts files and fix the import paths
find . -type f \( -name "*.tsx" -o -name "*.ts" \) | while read file; do
  echo "Processing: $file"
  
  # Create a temporary file
  temp_file="${file}.tmp"
  
  # Fix the import paths
  sed -e "s|from '../../layouts|from '../layouts|g" \
      -e "s|from \"../../layouts|from \"../layouts|g" \
      -e "s|from '../../assets|from '../assets|g" \
      -e "s|from \"../../assets|from \"../assets|g" \
      -e "s|from '../../config|from '../config|g" \
      -e "s|from \"../../config|from \"../config|g" \
      -e "s|from '../../utils|from '../utils|g" \
      -e "s|from \"../../utils|from \"../utils|g" \
      "$file" > "$temp_file"
  
  # Replace the original file
  mv "$temp_file" "$file"
done

echo "Import paths fixed successfully!"