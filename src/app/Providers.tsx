"use client";

import type { ReactNode } from "react";
import CookieBanner from "@/features/cookies/CookieBanner";
import { CookieConsentProvider } from "@/features/cookies/CookieConsentContext";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <CookieConsentProvider>
      {children}
      <CookieBanner />
    </CookieConsentProvider>
  );
}
