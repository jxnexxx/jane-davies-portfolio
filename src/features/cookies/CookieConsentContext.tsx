"use client";

import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import type { CookieConsent, CookiePreferences } from "./cookie.types";

import {
  createCookieConsent,
  getCookieConsent,
  setCookieConsent,
} from "./cookieConsent";

export type CookieConsentContextValue = {
  consent: CookieConsent | null;
  isInitialized: boolean;
  isBannerOpen: boolean;
  isPreferencesOpen: boolean;

  acceptAll: () => void;
  rejectOptional: () => void;

  savePreferences: (preferences: CookiePreferences) => void;

  openPreferences: () => void;
  closePreferences: () => void;
};

export const CookieConsentContext =
  createContext<CookieConsentContextValue | null>(null);

type CookieConsentProviderProps = {
  children: ReactNode;
};

export const CookieConsentProvider = ({
  children,
}: CookieConsentProviderProps) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);

  const [isInitialized, setIsInitialized] = useState(false);

  const [isPreferencesOpen, setIsPreferencesOpen] = useState(false);

  useEffect(() => {
    const storedConsent = getCookieConsent();

    setConsent(storedConsent);
    setIsInitialized(true);
  }, []);

  const saveConsent = useCallback((preferences: CookiePreferences) => {
    const newConsent = createCookieConsent(preferences);

    setCookieConsent(newConsent);
    setConsent(newConsent);
  }, []);

  const acceptAll = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: true,
    });

    setIsPreferencesOpen(false);
  }, [saveConsent]);

  const rejectOptional = useCallback(() => {
    saveConsent({
      necessary: true,
      analytics: false,
    });

    setIsPreferencesOpen(false);
  }, [saveConsent]);

  const savePreferences = useCallback(
    (preferences: CookiePreferences) => {
      saveConsent(preferences);
      setIsPreferencesOpen(false);
    },
    [saveConsent],
  );

  const openPreferences = useCallback(() => {
    setIsPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => {
    setIsPreferencesOpen(false);
  }, []);

  const isBannerOpen = isInitialized && consent === null && !isPreferencesOpen;

  const value = useMemo(
    () => ({
      consent,
      isInitialized,
      isBannerOpen,
      isPreferencesOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openPreferences,
      closePreferences,
    }),
    [
      consent,
      isInitialized,
      isBannerOpen,
      isPreferencesOpen,
      acceptAll,
      rejectOptional,
      savePreferences,
      openPreferences,
      closePreferences,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
};
