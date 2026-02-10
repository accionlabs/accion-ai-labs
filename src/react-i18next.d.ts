import 'react-i18next';

// Override react-i18next types to work with TypeScript 4.9.5
// The latest react-i18next uses const type parameters which require TS 5+
declare module 'react-i18next' {
  export function useTranslation(ns?: string | string[]): {
    t: (key: string, options?: Record<string, unknown>) => string;
    i18n: {
      language: string;
      changeLanguage: (lng: string) => Promise<any>;
      getFixedT: (lng: string, ns?: string) => (key: string, options?: Record<string, unknown>) => string;
    };
    ready: boolean;
  };
}
