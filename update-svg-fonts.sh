#!/bin/bash

# Update font-family in all SVG files to use consistent Inter font
for svg in public/assets/diagrams/*.svg; do
  echo "Processing: $svg"
  # Update font-family attributes to use Inter, but preserve other attributes
  # This handles various formats: font-family="...", font-family='...', font-family:...
  sed -i '' \
    -e 's/font-family="[^"]*"/font-family="Inter, system-ui, sans-serif"/g' \
    -e "s/font-family='[^']*'/font-family='Inter, system-ui, sans-serif'/g" \
    -e 's/font-family:[^;"]*/font-family: Inter, system-ui, sans-serif/g' \
    -e 's/font-family:[^;]*;/font-family: Inter, system-ui, sans-serif;/g' \
    "$svg"
done

echo "Font family update complete!"