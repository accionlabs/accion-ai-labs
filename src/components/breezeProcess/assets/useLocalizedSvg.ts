import { useTranslation } from 'react-i18next';

/**
 * Hook that returns a helper function to pick the correct SVG based on current language.
 * Usage:
 *   const l = useLocalizedSvg();
 *   const src = l(enSvg, jaSvg);
 */
export function useLocalizedSvg(): (enSvg: string, jaSvg: string) => string {
  const { i18n } = useTranslation();
  const isJa = i18n.language.startsWith('ja');
  return (enSvg: string, jaSvg: string) => isJa ? jaSvg : enSvg;
}
