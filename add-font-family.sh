#!/bin/bash

# Add font-family="Inter, system-ui, sans-serif" to all <text> elements that don't have it
for svg in public/assets/diagrams/*.svg; do
  echo "Processing: $svg"
  
  # Create a temporary file
  temp_file="${svg}.tmp"
  
  # Process the file line by line
  while IFS= read -r line; do
    # Check if line contains <text and doesn't already have font-family
    if [[ "$line" == *"<text"* ]] && [[ "$line" != *"font-family"* ]]; then
      # Add font-family attribute after <text
      line=$(echo "$line" | sed 's/<text/<text font-family="Inter, system-ui, sans-serif"/')
    fi
    echo "$line"
  done < "$svg" > "$temp_file"
  
  # Replace original file with modified one
  mv "$temp_file" "$svg"
done

echo "Font family addition complete!"