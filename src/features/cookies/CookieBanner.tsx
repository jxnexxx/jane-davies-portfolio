"use client";

import { useCookieConsent } from "./useCookieConsent";
import Button from "@/components/ui/button/Button";

export default function CookieBanner() {
  const { isBannerOpen, acceptAll, rejectOptional, openPreferences } =
    useCookieConsent();

  if (!isBannerOpen) {
    return null;
  }

  return (
    <aside className="banner" aria-labelledby="cookie-banner-title">
      <div className="content">
        <div className="holder">
          <svg
            className="cookieIcon"
            width="88"
            height="88"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.5 31.5C47.7 31.5 45.5 29.3 45.5 26.5C45.5 25.8 45.6 25.2 45.9 24.6C42.7 24.2 40.2 21.5 40.2 18.2C40.2 17.1 40.5 16 41 15.1C39.5 14.6 38.4 13.2 38.4 11.6C38.4 10.4 39 9.3 39.9 8.6C37.4 7.9 34.8 7.5 32 7.5C18.5 7.5 7.5 18.5 7.5 32C7.5 45.5 18.5 56.5 32 56.5C45.5 56.5 56.5 45.5 56.5 32C56.5 31.5 56.5 31 56.4 30.5C54.7 31.2 52.7 31.5 50.5 31.5Z"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <circle cx="21" cy="27" r="2.7" fill="currentColor" />
            <circle cx="29" cy="20" r="2.2" fill="currentColor" />
            <circle cx="33.5" cy="35.5" r="2.8" fill="currentColor" />
            <circle cx="43" cy="33" r="2.4" fill="currentColor" />
            <circle cx="36.5" cy="44.5" r="3.1" fill="currentColor" />
            <circle cx="20.5" cy="40.5" r="1.3" fill="currentColor" />
            <circle cx="31.5" cy="27.5" r="1.2" fill="currentColor" />

            <circle cx="49" cy="14" r="1.8" fill="currentColor" />
            <circle cx="54.5" cy="19.5" r="2.1" fill="currentColor" />
            <circle cx="47.5" cy="21" r="1.7" fill="currentColor" />
            <circle cx="53.5" cy="25" r="1.1" fill="currentColor" />
          </svg>
          <div className="copy">
            <h6 id="cookie-banner-title" className="title">
              Your privacy, your choice
            </h6>

            <p className="description">
              I use optional analytics to understand how visitors use my
              portfolio and improve the experience.
            </p>

            <Button href="/cookies" variant="text" className="policyLink">
              Read cookie policy
            </Button>
          </div>
        </div>

        <div className="actions">
          <Button variant="secondary" onClick={rejectOptional}>
            Reject optional
          </Button>

          <Button variant="secondary" onClick={openPreferences}>
            Manage preferences
          </Button>

          <Button variant="primary" onClick={acceptAll}>
            Accept all
          </Button>
        </div>
      </div>
    </aside>
  );
}
