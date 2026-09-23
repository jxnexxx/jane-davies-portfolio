import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icons/Icon";

export default function ConnectPage() {
  return (
    <>
      <div className="connect-page-container">
        <section className="hero-section">
          <div className="text">
            <span className="eyebrow"></span>
            <h1>
              Let's <span className="pink">connect </span>!
            </h1>
            <p className="hero-paragraph">
              Follow what I'm building, read what I'm thinking or find me
              elsewhere on the web!
            </p>
          </div>
          <img src="#" alt="h" className="hero-img" />
        </section>
        <section className="sect1">
          <div className="sect1-text">
            {" "}
            <div className="sect1-header-text">
              <span className="eyebrow">articles</span>
              <h2>Read my writing</h2>{" "}
            </div>
            <p>
              I share my articles in a few different places in a few different
              formats. So choose the one that works best for you
            </p>
          </div>
          <div className="read-options-container">
            <div className="read-option blog-option">
              <div className="option-text">
                <h3>My Blog</h3>
                <p>
                  The home of my writing. All articles live here first, with the
                  full editorial experience{" "}
                </p>
              </div>
              <div className="read-option-cta">
                {" "}
                <Button variant="primary" className="circle-arrow">
                  <Icon name="arrow" className="connect-arrow" />
                </Button>
                <span className="cta-span">READ MY BLOG</span>
              </div>
            </div>
            <div className="read-option linkedin-option">
              {" "}
              <div className="option-text">
                <h3>LinkedIn</h3>
                <p>
                  Follow my thoughts on frontend development, tech and the
                  industry
                </p>
              </div>
              <div className="read-option-cta">
                {" "}
                <Button variant="primary" className="circle-arrow">
                  <Icon name="arrow" className="connect-arrow" />
                </Button>
                <span className="cta-span">FOLLOW ON LINKEDIN</span>
              </div>
            </div>
            <div className="read-option substack-option">
              {" "}
              <div className="option-text">
                <h3>Substack</h3>
                <p>Get new articles delivered straight to your inbox!</p>
              </div>
              <div className="read-option-cta">
                {" "}
                <Button variant="primary" className="circle-arrow">
                  <Icon name="arrow" className="connect-arrow" />
                </Button>
                <span className="cta-span">SUBSCRIBE ON SUBSTACK</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
