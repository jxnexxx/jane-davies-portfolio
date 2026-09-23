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
          <div className="sect-text">
            {" "}
            <div className="sect-header-text">
              <span className="eyebrow">articles</span>
              <h2>Read my writing</h2>{" "}
            </div>
            <p>
              Frontend, the web, career and all the in-between. Here are some of
              the themes you'll find in my writing
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
        <section className="sect2">
          <div className="sect-text">
            {" "}
            <div className="sect-header-text">
              <span className="eyebrow">topics</span>
              <h2>What I write about</h2>{" "}
            </div>
            <p>
              I share my articles in a few different places in a few different
              formats. So choose the one that works best for you
            </p>
          </div>
          <div className="topics-container">
            <p className="topic">career & industry</p>
            <p className="topic">web performance</p>
            <p className="topic">react & frameworks</p>
            <p className="topic">javascript</p>
            <p className="topic">UI/UX </p>
            <p className="topic">frontend engineering</p>
          </div>
        </section>
        <section className="sect3">
          <div className="sect-text">
            {" "}
            <div className="sect-header-text">
              <span className="eyebrow">Latest</span>
              <h2>Lastest article</h2>{" "}
            </div>
            <p>Read it where you prefer</p>
          </div>
          <div className="content">
            <img src="#" alt="#" className="latest-image" />
            <div className="latest-details">
              <span className="eyebrow">frontend engineering</span>
              <h3>Face your frontend</h3>
              <p>
                an exploration of frontend stuff and more and more information
                about this article i want everyone to see it.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
