/**
 * Asset Helper Utility
 * Handles asset URLs for both local development and GitHub Pages deployment
 */

// Get the base URL based on environment
export const getBasePath = (): string => {
  // In production (GitHub Pages), use the PUBLIC_URL from env
  // In development, use root
  return process.env.PUBLIC_URL || '';
};

// Helper to get asset URL
export const getAssetUrl = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  const basePath = getBasePath();
  
  // If basePath exists and doesn't end with /, add it
  if (basePath && !basePath.endsWith('/')) {
    return `${basePath}/${cleanPath}`;
  }
  
  return `${basePath}${cleanPath}`;
};

// Helper specifically for public assets
export const getPublicAssetUrl = (path: string): string => {
  // For assets in public folder
  const cleanPath = path.startsWith('/') ? path.substring(1) : path;
  return getAssetUrl(cleanPath);
};

export default {
  getBasePath,
  getAssetUrl,
  getPublicAssetUrl
};