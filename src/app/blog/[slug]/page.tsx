import { notFound } from "next/navigation";
import { blogPosts } from "../blog";
import Button from "@/components/ui/button/Button";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  return (
    <>
      <div className="individual-blog-page-container">
        <section className="hero-section">
          <div className="text">
            <p className="eyebrow">{post.category}</p>
            <h1>{post.title}</h1>
            <p className="excerpt">{post.introText}</p>
            <div className="date-readlength">
              <p className="date">{post.fullDate}</p>
              <div className="dot"></div>
              <p className="time">{`${post.readTime} minute read`}</p>
            </div>
          </div>
          <img src={post.pageImg} alt="hero image" className="hero-img" />
        </section>
        <section className="full-article">
          <aside className="article-navigation">
            <h3>In this article</h3>
          </aside>
          <div className="article-content">
            <div className="introduction">
              <p>
                This is the intro paragraph a lot of things will be going on in
                this section that no one knows yet. I want the first few
                sentences to be cursive and larger than normal. This is the
                intro paragraph a lot of things will be going on in this section
                that no one knows yet. I want the first few sentences to be
                cursive and larger than normal. This is the intro paragraph a
                lot of things will be going on in this section that no one knows
                yet. I want the first few sentences to be cursive and larger
                than normal. This is the intro paragraph a lot of things will be
                going on in this section that no one knows yet. I want the first
                few sentences to be cursive and larger than normal. This is the
                intro paragraph a lot of things will be going on in this section
                that no one knows yet. I want the first few sentences to be
                cursive and larger than normal.
              </p>
            </div>

            {post.sections.map((section) => (
              <div
                key={section.id}
                className={`${section.variant}-section post-section`}
              >
                <h2 className="sub-heading">{section.title}</h2>
                {section.variant === "pullQuote" && (
                  <div className="section-text">
                    {section.preQuote?.map((paragraph, index) => (
                      <p key={`pre-${index}`}>{paragraph}</p>
                    ))}

                    <span className="hook-sentence">{section.quote}</span>

                    {section.postQuote?.map((paragraph, index) => (
                      <p key={`post-${index}`}>{paragraph}</p>
                    ))}
                  </div>
                )}
                {section.variant === "editorial" && (
                  <div className="editorial-section-container">
                    <div className="left-sect-container">
                      <span className="intro-span">{section.introSpan}</span>
                      <div className="top-left-text">
                        {section.topLeftText?.map((paragraph, index) => (
                          <p key={`pre-${index}`}>{paragraph}</p>
                        ))}
                      </div>

                      {section.id === "frontend-identity-crisis" && (
                        <div className="bottom-left-display">
                          <div className="user-view">
                            <h4>What the user sees</h4>
                            <Button className="display-btn" variant="primary">
                              Click me!
                            </Button>
                          </div>
                          <hr />
                          <div className="engineer-view">
                            <h4>What the engineer sees</h4>
                            <ul className="engineer-view-list">
                              <li>State management</li>
                              <li>Accessibility (ARIA)</li>
                              <li>Keyboard interaction</li>
                              <li>Focus management</li>
                              <li>Loading & error states</li>
                              <li>Responsive behaviour</li>
                              <li>API integration</li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="right-sect-container">
                      {" "}
                      {section.topRightText?.map((paragraph, index) => (
                        <p key={`pre-${index}`}>{paragraph}</p>
                      ))}{" "}
                      {section.id === "frontend-identity-crisis" && (
                        <div className="jobmarket-stats-sect">
                          <h4>Frontend roles have recovered less strongly</h4>
                          <p>
                            Between 2024 and 2026, UK Software Engineer
                            vacancies fell by only around 9%, from 6,159 to
                            5,630, while Front-End Developer vacancies fell by
                            roughly 34%, from 405 to 267. The difference is even
                            more pronounced in London, where vacancies
                            explicitly titled Front-End Developer fell from 101
                            to 26, a decline of around 74%.
                          </p>
                          <div className="stat">
                            <span className="stat-name">
                              UK Software Engineer
                            </span>

                            <div className="stat-content">
                              <strong>6,159 → 5,630</strong>
                              <span>↓ 9%</span>
                            </div>
                          </div>

                          <div className="stat">
                            <span className="stat-name">
                              UK Front-End Developer
                            </span>

                            <div className="stat-content">
                              <strong>405 → 267</strong>
                              <span>↓ 34%</span>
                            </div>
                          </div>

                          <div className="stat">
                            <span className="stat-name">
                              London Front-End Developer
                            </span>

                            <div className="stat-content">
                              <strong>101 → 26</strong>
                              <span>↓ 74%</span>
                            </div>
                          </div>
                          <small>2024 → 2026 · Source: ...</small>
                        </div>
                      )}
                      {section.bottomRightText?.map((paragraph, index) => (
                        <p key={`pre-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
