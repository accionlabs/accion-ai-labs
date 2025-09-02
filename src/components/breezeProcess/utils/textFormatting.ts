// Utility functions for text formatting

/**
 * Formats text by making content before colons bold
 * Examples:
 * - "Instant Impact Analysis: Know exactly what code changes" → "<strong>Instant Impact Analysis:</strong> Know exactly what code changes"
 * - "Simple text without colon" → "Simple text without colon"
 */
export const formatBulletText = (text: string): string => {
  // Check if the text contains a colon
  const colonIndex = text.indexOf(':');
  
  if (colonIndex === -1) {
    // No colon found, return original text
    return text;
  }
  
  // Split at the first colon
  const beforeColon = text.substring(0, colonIndex + 1); // Include the colon
  const afterColon = text.substring(colonIndex + 1);
  
  // Return formatted text with bold before colon
  return `<strong>${beforeColon}</strong>${afterColon}`;
};

/**
 * Formats an array of bullet point texts
 */
export const formatBulletTexts = (texts: string[]): string[] => {
  return texts.map(formatBulletText);
};

/**
 * Component helper to render formatted bullet text as HTML
export const renderFormattedText = (text: string, className?: string) => {
  const formattedText = formatBulletText(text);
  return (
    <span 
      className={className} 
      dangerouslySetInnerHTML={{ __html: formattedText }} 
    />
  );
};
*/
