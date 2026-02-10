import 'i18next';

// Override i18next types to work with TypeScript 4.9.5
// The latest i18next uses const type parameters which require TS 5+
declare module 'i18next' {
  interface i18n {
    getFixedT(
      lng: string | readonly string[],
      ns?: string | readonly string[],
      keyPrefix?: string
    ): (key: string, options?: Record<string, unknown>) => string;

    getFixedT(
      lng: null,
      ns: string | readonly string[],
      keyPrefix?: string
    ): (key: string, options?: Record<string, unknown>) => string;

    t(key: string, options?: Record<string, unknown>): string;
  }
}
