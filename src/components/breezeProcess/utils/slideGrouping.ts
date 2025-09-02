import { SlideSection } from '../layouts/types';

export interface SlideGroup {
  id: string;
  sections: SlideSection[];
}

/**
 * Groups sections by their slideGroup property, or creates individual slides
 * for sections without a slideGroup
 */
export function groupSectionsIntoSlides(sections: SlideSection[]): SlideGroup[] {
  const groups: { [key: string]: SlideSection[] } = {};
  const ungroupedSections: SlideSection[] = [];
  
  // First pass: group sections with slideGroup property
  sections.forEach(section => {
    if (section.slideGroup) {
      if (!groups[section.slideGroup]) {
        groups[section.slideGroup] = [];
      }
      groups[section.slideGroup].push(section);
    } else {
      ungroupedSections.push(section);
    }
  });
  
  // Create slide groups array
  const slideGroups: SlideGroup[] = [];
  
  // Add grouped sections (maintain order from original sections array)
  const processedGroups = new Set<string>();
  sections.forEach(section => {
    if (section.slideGroup && !processedGroups.has(section.slideGroup)) {
      slideGroups.push({
        id: section.slideGroup,
        sections: groups[section.slideGroup]
      });
      processedGroups.add(section.slideGroup);
    } else if (!section.slideGroup) {
      // Add ungrouped sections as individual slides
      slideGroups.push({
        id: section.id,
        sections: [section]
      });
    }
  });
  
  return slideGroups;
}

/**
 * Get total number of slides based on grouped sections
 */
export function getTotalSlideCount(sections: SlideSection[]): number {
  return groupSectionsIntoSlides(sections).length;
}

/**
 * Get sections for a specific slide index
 */
export function getSectionsForSlide(sections: SlideSection[], slideIndex: number): SlideSection[] {
  const slideGroups = groupSectionsIntoSlides(sections);
  return slideGroups[slideIndex]?.sections || [];
}