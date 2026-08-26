"use client";
import Link from "next/link";
import { useState } from "react";
import Icon from "../../components/ui/icons/Icon";
import Button from "@/components/ui/button/Button";
import Toggle from "@/components/ui/toggle/Toggle";
export default function CookiePolicyPage() {
  const [cookiesOpen, setCookiesOpen] = useState<number | null>(null);
  const toggleSection = (section: number) => {
    setCookiesOpen((current) => (current === section ? null : section));
  };
  const [analytics, setAnalytics] = useState(false);
  const [preferences, setPreferences] = useState(false);

  return (
    <main className="cookie-policy-page-container">
      <aside className="nav">
        <h2 className="content">Contents</h2>
        <ul>
          <li>
            <Link href="/cookies#cookies-overview">Overview</Link>
          </li>
          <li>
            <Link href="/cookies#what-are-cookies">What are cookies?</Link>
          </li>
          <li>
            <Link href="/cookies#how-are-cookies-used">How they're used</Link>
          </li>
          <li>
            <Link href="/cookies#necessary-cookies">Necessary</Link>
          </li>
          <li>
            <Link href="/cookies#analytics-cookies">Analytics </Link>
          </li>
          <li>
            <Link href="/cookies#preference-cookies">Preference </Link>
          </li>
          <li>
            <Link href="/cookies#marketing-cookies">Marketing</Link>
          </li>
          <li>
            <Link href="/cookies#manage-cookies">Manage Preferences</Link>
          </li>
          <li>
            <Link href="/cookies#browser-controls">Browser Controls</Link>
          </li>
          <li>
            <Link href="/cookies#cookies-changes">Changes</Link>
          </li>
          <li>
            <Link href="/cookies#contact">Contact</Link>
          </li>
        </ul>
      </aside>
      <div className="policies">
        <section className="intro" id="cookies-overview">
          {" "}
          <h1 className="content">Cookie Policy</h1>
          <div className="date">
            <Icon name="calendar" className="icon" size={16} />
            <span>Last updated: 17 August 2026</span>
          </div>
          <p>
            This Cookie Policy explains how this portfolio website uses cookies
            and similar technologies, why they are used, and the choices
            available to you.
          </p>
          <div className="info">
            <div className="icon-holder">
              <Icon name="shield" size={24} className="icon" />
            </div>
            <p>
              This website uses a limited number of cookies and similar
              technologies. Optional <br /> cookies are disabled unless you
              choose to enable them through the cookie settings.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 1 ? "cookie-item--open" : ""}`}
          id="what-are-cookies"
        >
          <div className="header">
            <h2 className="content">1. What are cookies?</h2>
            <button
              onClick={() => setCookiesOpen((prev) => (prev === 1 ? null : 1))}
              className="cookie-header-toggle"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body">
            <p>
              Cookies are small pieces of information stored on your device when
              you visit a website. They can be used for purposes such as
              <span className="pink">
                {" "}
                enabling website functionality
              </span>, <span className="pink"> remembering choices</span> and
              <span className="pink"> understanding how a website is used</span>
              .
            </p>
            <p>
              Similar technologies, including local storage and other browser
              storage technologies, may perform comparable functions. References
              to "cookies" in this policy include these technologies where
              appropriate.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 2 ? "cookie-item--open" : ""}`}
          id="how-are-cookies-used"
        >
          <div className="header">
            <h2 className="content">2. How this website uses cookies</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 2 ? null : 2))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 2}
              aria-controls="how-are-cookies-used-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="how-are-cookies-used-content">
            <p>
              This portfolio uses a limited number of cookies and similar
              technologies.
            </p>
            <p>
              They are divided into the following categories:{" "}
              <span className="pink">necessary cookies</span>,
              <span className="pink"> analytics cookies</span>, and{" "}
              <span className="pink">preference cookies</span>
            </p>
            <p>
              Optional cookies are disabled unless you choose to enable them
              through the cookie settings.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 3 ? "cookie-item--open" : ""}`}
          id="necessary-cookies"
        >
          <div className="header">
            <h2 className="content">3. Necessary cookies</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 3 ? null : 3))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 3}
              aria-controls="necessary-cookies-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="necessary-cookies-content">
            <p>
              Necessary cookies support functionality required for the website
              or its privacy controls to operate as intended.
            </p>{" "}
            <div className="p-gap"></div>{" "}
            <p>These cookies cannot be disabled through the cookie settings.</p>{" "}
            <div className="cookie-display">
              <div className="display-top">
                {" "}
                <div className="left">
                  <div className="icon-holder">
                    <Icon name="cookie" size={24} className="icon" />
                  </div>
                  <span>portfolio_necessary_cookies</span>{" "}
                </div>
                <span className="alwaysactive">Always active</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="provider" size={24} className="icon" />
                </div>
                <span className="name">Provider:</span>
                <span className="description">This website</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="purpose" size={24} className="icon" />
                </div>
                <span className="name">Purpose:</span>
                <span className="description">
                  Remembers the cookie preferences you have selected so that you
                  are not repeatedly asked to make the same choice.
                </span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="category" size={24} className="icon" />
                </div>
                <span className="name">Category:</span>
                <span className="description">Necessary</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="duration" size={24} className="icon" />
                </div>
                <span className="name">Duration:</span>
                <span className="description">Up to 6 months</span>
              </div>
            </div>{" "}
            <p>
              This cookie stores your consent preferences, the version of the
              consent configuration that you agreed to, and the date on which
              your preferences were updated.
            </p>{" "}
            <div className="p-gap"></div>{" "}
            <p>
              It is not used for advertising or to track your activity across
              other websites.
            </p>
          </div>
        </section>

        <section
          className={`info ${cookiesOpen === 4 ? "cookie-item--open" : ""}`}
          id="analytics-cookies"
        >
          <div className="header">
            <h2 className="content">4. Analytics cookies</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 4 ? null : 4))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 4}
              aria-controls="analytics-cookies-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="analytics-cookies-content">
            <p>
              With your permission, this website uses{" "}
              <span className="pink">analytics technologies</span> to help
              understand how visitors interact with the portfolio.
            </p>{" "}
            <div className="p-gap"></div>
            <p>Analytics may be used to understand information such as:</p>
            <div className="analysis-holders">
              <div className="analysis-item">
                <Icon name="pagesViewed" size={64} className="icon" />
                <span>pages viewed</span>
              </div>
              <div className="analysis-item">
                <Icon name="projectsViewed" size={64} className="icon" />
                <span>project and case-study views</span>
              </div>
              <div className="analysis-item">
                <Icon name="portfolioLinks" size={64} className="icon" />
                <span>interactions with portfolio links</span>
              </div>
              <div className="analysis-item">
                <Icon name="deviceBrowser" size={64} className="icon" />
                <span>device & browser information</span>
              </div>
              <div className="analysis-item">
                {" "}
                <Icon name="referringSources" size={64} className="icon" />
                <span>referring sources</span>
              </div>
              <div className="analysis-item">
                {" "}
                <Icon name="keyActions" size={64} className="icon" />
                <span>interactions with external links</span>
              </div>{" "}
            </div>
            <p>
              This information is used to understand how the portfolio is being
              used and identify opportunities to improve its content, usability
              and performance.
            </p>
            <div className="p-gap"></div>
            <p>
              Analytics cookies and technologies are not enabled through this
              consent system unless you choose to allow Analytics cookies.
            </p>
            <div className="cookie-display">
              <div className="display-top">
                {" "}
                <div className="left">
                  <div className="icon-holder">
                    <Icon name="cookie" size={24} className="icon" />
                  </div>
                  <span>portfolio_analytics</span>{" "}
                </div>
                <span className="alwaysactive">
                  Optional — disabled by default
                </span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="provider" size={24} className="icon" />
                </div>
                <span className="name">Provider:</span>
                <span className="description">[Analytics provider]</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="purpose" size={24} className="icon" />
                </div>
                <span className="name">Purpose:</span>
                <span className="description">
                  Website usage measurement and improvement
                </span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="category" size={24} className="icon" />
                </div>
                <span className="name">Category:</span>
                <span className="description">Analytics</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="duration" size={24} className="icon" />
                </div>
                <span className="name">Duration:</span>
                <span className="description">
                  [Insert duration after analytics provider is configured]
                </span>
              </div>
            </div>{" "}
            <div className="p-gap"></div>
            <p>
              Details of the individual analytics cookies or storage
              technologies used will be added here when the analytics service is
              implemented.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 5 ? "cookie-item--open" : ""}`}
          id="preference-cookies"
        >
          <div className="header">
            <h2 className="content">5. Preference cookies</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 5 ? null : 5))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 5}
              aria-controls="preference-cookies-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="preference-cookies-content">
            <div className="cookie-display">
              <div className="display-top">
                {" "}
                <div className="left">
                  <div className="icon-holder">
                    <Icon name="cookie" size={24} className="icon" />
                  </div>
                  <span>portfolio_preferences</span>{" "}
                </div>
                <span className="alwaysactive">
                  Optional — disabled by default
                </span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="provider" size={24} className="icon" />
                </div>
                <span className="name">Provider:</span>
                <span className="description">This website</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="purpose" size={24} className="icon" />
                </div>
                <span className="name">Purpose:</span>
                <span className="description">
                  Remembers optional website experience preferences selected by
                  you.
                </span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="category" size={24} className="icon" />
                </div>
                <span className="name">Category:</span>
                <span className="description">Preferences</span>
              </div>
              <div className="display-row">
                <div className="icon-holder">
                  <Icon name="duration" size={24} className="icon" />
                </div>
                <span className="name">Duration:</span>
                <span className="description">Up to 6 months</span>
              </div>
            </div>{" "}
            <p>
              Preference cookies allow the website to remember optional choices
              you make about how you would like to experience the portfolio.
            </p>
            <div className="p-gap"></div>
            <p>
              Depending on the features available on the website, these
              preferences may include choices relating to interface behaviour,
              animation or the presentation of portfolio content.
            </p>
            <div className="p-gap"></div>
            <p>
              Preference storage is not used for advertising or cross-site
              tracking.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 6 ? "cookie-item--open" : ""}`}
          id="marketing-cookies"
        >
          <div className="header">
            <h2 className="content">6. Marketing and advertising cookies</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 6 ? null : 6))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 6}
              aria-controls="marketing-cookies-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="marketing-cookies-content">
            <p>
              This website does not currently use cookies for personalised
              advertising, remarketing or cross-site advertising.
            </p>
            <div className="p-gap"></div>
            <p>
              If this changes in the future, this policy and the cookie consent
              controls will be updated before such technologies are used where
              consent is required.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 7 ? "cookie-item--open" : ""}`}
          id="manage-cookies"
        >
          <div className="header">
            <h2 className="content">7. Managing your preferences</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 7 ? null : 7))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 7}
              aria-controls="manage-cookies-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="manage-cookies-content">
            <p>
              When you first visit this website, you are provided with controls
              that allow you to accept optional cookies, reject optional
              cookies, or manage your preferences individually.
            </p>
            <div className="p-gap"></div>
            <p>You can choose independently whether to enable:</p>
            <div className="toggle-holders">
              {" "}
              <Toggle
                id="necessary-cookies-toggle"
                checked={true}
                onChange={() => {}}
                label="Necessary cookies"
                status="Always active"
                disabled
              />
              <hr />
              <Toggle
                label="Analytics cookies"
                id="analytics-cookies-toggle"
                status=" "
                checked={analytics}
                onChange={setAnalytics}
              />
              <hr />
              <Toggle
                id="preference-cookies-toggle"
                checked={preferences}
                status=" "
                onChange={setPreferences}
                label="Preference cookies"
              />
            </div>
            <div className="info-btn">
              <div className="fyi">
                <Icon name="info" size={24} className="icon" />{" "}
                <p>
                  Necessary cookies cannot be disabled through these controls
                  because they support required functionality.
                </p>
              </div>{" "}
              <Button variant="primary" className="save-preference-btn">
                Save Preferences
              </Button>{" "}
            </div>
            <div className="p-gap"></div>
            <p>
              You can revisit your choices at any time by selecting Cookie
              settings in the website footer.
            </p>
            <div className="p-gap"></div>
            <p>
              Withdrawing consent will prevent the relevant optional
              technologies from being used in accordance with your updated
              preferences.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 8 ? "cookie-item--open" : ""}`}
          id="browser-controls"
        >
          <div className="header">
            <h2 className="content">8. Browser controls</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 8 ? null : 8))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 8}
              aria-controls="browser-controls-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="browser-controls-content">
            <p>
              Your browser may also allow you to view, delete or block cookies
              and other stored website data.
            </p>
            <div className="p-gap"></div>
            <p>
              Blocking or deleting cookies through your browser may cause your
              saved cookie preferences to be removed. If this happens, you may
              be asked to select your preferences again the next time you visit
              this website.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 9 ? "cookie-item--open" : ""}`}
          id="cookies-changes"
        >
          <div className="header">
            <h2 className="content">9. Changes to this policy</h2>

            <button
              type="button"
              onClick={() => setCookiesOpen((prev) => (prev === 9 ? null : 9))}
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 9}
              aria-controls="cookies-changes-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="cookies-changes-content">
            <p>
              This Cookie Policy may be updated if the technologies used by this
              website change.
            </p>
            <div className="p-gap"></div>
            <p>
              Where a change materially affects the choices previously made by
              visitors, the website{" "}
              <span className="pink">
                may request updated cookie preferences
              </span>
              .
            </p>
            <div className="p-gap"></div>
            <p>
              The date at the top of this policy indicates when it was most
              recently updated.
            </p>
          </div>
        </section>
        <section
          className={`info ${cookiesOpen === 10 ? "cookie-item--open" : ""}`}
          id="contact"
        >
          <div className="header">
            <h2 className="content">10. Contact</h2>

            <button
              type="button"
              onClick={() =>
                setCookiesOpen((prev) => (prev === 10 ? null : 10))
              }
              className="cookie-header-toggle"
              aria-expanded={cookiesOpen === 10}
              aria-controls="contact-content"
            >
              <Icon name="chevron" size={32} className="icon" />
            </button>
          </div>

          <div className="body" id="contact-content">
            <p>
              If you have questions about this Cookie Policy or how this website
              handles information, please use the contact details provided on
              the Contact page.
            </p>
            <Button href="/contact" variant="primary">
              Contact me
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}
