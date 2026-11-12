"use client";
import Form from "@/features/forms/form";
import Icon from "@/components/ui/icons/Icon";
import Button from "@/components/ui/button/Button";

export default function ContactPage() {
  return (
    <main className="contact-page-container">
      <section className="contact-hero">
        <div className="text">
          <h1>
            Let's create <br /> something great <br /> together!
          </h1>
          <p>
            Whether you have a project in mind, a question, or just want to say
            hi, I'd love to hear from you! I'm always open to new opportunities
            and interesting conversations
          </p>
        </div>
      </section>
      <div className="main-section">
        {" "}
        <Form formname="contact" />
        <section className="ways-to-reach">
          <h2>Other ways to reach me:</h2>
          <div className="ways">
            <div className="way">
              <Icon name="mail" className="icon" />
              <div className="way-text">
                <span className="thing">Email</span>
                <span className="handle">jxnexxx@outlook.com</span>
              </div>
            </div>
            <div className="way">
              <Icon name="linkedin" className="icon" />
              <div className="way-text">
                <span className="thing">LinkedIn</span>
                <span className="handle">Connect with me</span>
              </div>
            </div>
            <div className="way">
              <Icon name="github" className="icon" />
              <div className="way-text">
                <span className="thing">Github</span>
                <span className="handle">View my work</span>
              </div>
            </div>
          </div>
          <hr />
          <img src="#" alt="#" />
        </section>
      </div>
      <section className="availability">
        <div className="text">
          <h2>Current Availabilty</h2>
          <p>
            I am currently open to new opportunities including full-time roles,
            freelance work, speaking engagements and collaborations. If you're
            recruiting or have a project in mind, feel free to get in touch!
          </p>
        </div>
        <hr />
        <div className="options">
          <div className="option">
            <div className="icon-holder">
              <Icon name="mail" className="icon" />
            </div>
            <span>Open to full-time roles</span>
          </div>
          <div className="option">
            <div className="icon-holder">
              <Icon name="mail" className="icon" />
            </div>
            <span>Available for freelance work</span>
          </div>
          <div className="option">
            <div className="icon-holder">
              <Icon name="mail" className="icon" />
            </div>
            <span>Open to collaborations</span>
          </div>
          <div className="option">
            <div className="icon-holder">
              <Icon name="mail" className="icon" />
            </div>
            <span>Open to speaking engagements</span>
          </div>
        </div>
      </section>
      <section className="final-cta">
        <h2>Have something in mind? </h2>
        <span>
          I'd love to hear about it and explore how we can work together!
        </span>
        <Button variant="primary">Send me a message!</Button>
      </section>
    </main>
  );
}
