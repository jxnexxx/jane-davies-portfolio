import type { CookieConsent, CookiePreferences } from "./cookie.types";

const COOKIE_NAME = "portfolio_cookie_consent";

const COOKIE_MAX_AGE = 60 * 60 * 24 * 180;

export const COOKIE_CONSENT_VERSION = 1;

const isValidCookieConsent = (value: unknown): value is CookieConsent => {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const consent = value as Partial<CookieConsent>;

  return (
    consent.necessary === true &&
    typeof consent.analytics === "boolean" &&
    typeof consent.version === "number" &&
    consent.version === COOKIE_CONSENT_VERSION &&
    typeof consent.updatedAt === "string"
  );
};

export const createCookieConsent = (
  preferences: CookiePreferences,
): CookieConsent => {
  return {
    ...preferences,
    necessary: true,
    version: COOKIE_CONSENT_VERSION,
    updatedAt: new Date().toISOString(),
  };
};

export const getCookieConsent = (): CookieConsent | null => {
  if (typeof document === "undefined") {
    return null;
  }

  const cookies = document.cookie.split("; ");

  const consentCookie = cookies.find((cookie) =>
    cookie.startsWith(`${COOKIE_NAME}=`),
  );

  if (!consentCookie) {
    return null;
  }

  try {
    const encodedValue = consentCookie.substring(COOKIE_NAME.length + 1);

    const decodedValue = decodeURIComponent(encodedValue);

    const parsedValue: unknown = JSON.parse(decodedValue);

    if (!isValidCookieConsent(parsedValue)) {
      return null;
    }

    return parsedValue;
  } catch {
    return null;
  }
};

export const setCookieConsent = (consent: CookieConsent): void => {
  if (typeof document === "undefined") {
    return;
  }

  const encodedConsent = encodeURIComponent(JSON.stringify(consent));

  const attributes = [
    `${COOKIE_NAME}=${encodedConsent}`,
    `Max-Age=${COOKIE_MAX_AGE}`,
    "Path=/",
    "SameSite=Lax",
  ];

  if (window.location.protocol === "https:") {
    attributes.push("Secure");
  }

  document.cookie = attributes.join("; ");
};

export const deleteCookieConsent = (): void => {
  if (typeof document === "undefined") {
    return;
  }

  document.cookie = [
    `${COOKIE_NAME}=`,
    "Max-Age=0",
    "Path=/",
    "SameSite=Lax",
  ].join("; ");
};
