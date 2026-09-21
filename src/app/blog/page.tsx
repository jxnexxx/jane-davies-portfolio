import Button from "@/components/ui/button/Button";
import Icon from "@/components/ui/icons/Icon";
import { blogPosts } from "./blog";

export default function BlogPage() {
  const featuredBlog = blogPosts.find((blog) => blog.featured);
  return (
    <>
      <div className="blog-page-container">
        <div className="hero">
          <h1 className="th1">This is my blog page</h1>
          <div className="content">
            <div className="text">
              <h1 className="dh1">This is my blog page</h1>
              <p>
                I love <span className="pink-ita">(talking about)</span>{" "}
                frontend engineering as you can see.
              </p>
              <p>
                These are thoughts, lessons & things I've learned along the way.
              </p>{" "}
              <p>
                A collection of articles about frontend development, design,
                accessibility and building for the web.
              </p>
            </div>
            <img src="#" alt="blocks" />
          </div>
        </div>
        <section className="sect1">
          {featuredBlog && (
            <article className="featured-article-container blog-entry">
              <img
                src={featuredBlog.image}
                alt="featpost"
                className="featured-post-bg-img"
              />
              <span className="featured-post-banner">Featured post</span>
              <div className="blog-info">
                <h3 className="title">{featuredBlog.title}</h3>
                <p className="intro">{featuredBlog.introText}</p>
                <div className="blog-details">
                  <div className="date">
                    <Icon name="calendar" size={20} className="date-icon" />
                    <span className="full-date">{featuredBlog.date}</span>
                  </div>
                  <div className="read-author">
                    <span className="read-time">{`${featuredBlog.readTime} minute read`}</span>
                    <img src={featuredBlog.authorImg} alt="jane" />
                  </div>
                  <span className="category">{featuredBlog.category}</span>
                </div>
              </div>
              <Button
                variant="primary"
                className="blog-post-btn"
                href={`/blog/${featuredBlog.slug}`}
              >
                <span className="btn-text">Read full article</span>
                <Icon name="arrow" size={24} className="icon" />
              </Button>
            </article>
          )}
        </section>
        <section className="sect2">
          <h2 className="eyebrow">more entries</h2>
          <div className="blog-entry-container">
            {blogPosts
              .filter((blog) => !blog.featured)
              .map((blog) => (
                <article className="blog-entry" key={blog.id}>
                  <img className="blog-img" src={blog.image} alt="#" />
                  <div className="blog-info">
                    <span className="category">{blog.category}</span>
                    <h3 className="title">{blog.title}</h3>
                    <p className="excerpt">{blog.excerpt}</p>
                    <div className="blog-details">
                      <div className="date">
                        <Icon name="calendar" size={20} className="date-icon" />
                        <span className="full-date">{blog.date}</span>
                      </div>
                      <div className="read-author">
                        <span className="read-time">{`•  ${blog.readTime} min read`}</span>
                        <img src={blog.authorImg} alt="jane" />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
        <section className="sect3">
          <img src="#" alt="blocks" className="desktop-cta-blocks" />
          <aside className="newsletter-cta">
            <Icon
              name="mail"
              size={56}
              className="newsletter-icon"
              color="#c46f86"
            />
            <h2 className="content">Subscribe to my newsletter</h2>
            <p>get ideas, tutorials and resources straight to your inbox</p>

            <img src="#" alt="blocks" className="tablet-cta-blocks" />
            <div className="submit-sect">
              <input
                className="email-entry"
                type="email"
                placeholder="Enter your email address..."
              />
              <Button variant="primary" className="subscribe-btn">
                <span className="submit-btn-text">Subscribe</span>
                <Icon name="arrow" size={24} className="icon" />
              </Button>
            </div>
          </aside>
        </section>
      </div>
    </>
  );
}
