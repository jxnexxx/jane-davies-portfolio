export type CookiePreferences = {
  necessary: true;
  analytics: boolean;
};

export type CookieConsent = CookiePreferences & {
  version: number;
  updatedAt: string;
};
