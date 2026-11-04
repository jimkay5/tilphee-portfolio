
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="contact-page">
      <section className="contact-hero">
        <p className="eyebrow">LET'S WORK TOGETHER</p>
        <h1>
          Let’s make your
          <br />
          workflow <span>work smarter.</span>
        </h1>
        <p className="contact-intro">
          Have a process that takes too much time, leads slipping through the
          cracks, or a business workflow ready for automation? Let's talk about
          what intelligent automation could make possible.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-details">
          <p className="eyebrow">GET IN TOUCH</p>
          <h2>Tell me what you’re working on.</h2>
          <p>
            I primarily help real estate professionals improve property
            enquiries, lead management, client communication and everyday
            operations through AI and automation. I also work with other
            businesses where automation can improve their processes.
          </p>

          <div className="contact-method">
            <span>Gmail</span>
            <a href="mailto:boluwatifedorcas42@gmail.com">
              boluwatifedorcas42@gmail.com
            </a>
          </div>

          <div className="contact-method">
            <span>LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/boluwatife-oladapo-944043424/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect with me
            </a>
          </div>

          <div className="contact-method">
            <span>Instagram</span>
            <a
              href="https://instagram.com/tilphee"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tilphee
            </a>
          </div>

          <div className="contact-method">
            <span>Telegram</span>
            <a
              href="https://t.me/tilphee"
              target="_blank"
              rel="noopener noreferrer"
            >
              @tilphee
            </a>
          </div>

          <div className="contact-method">
            <span>Facebook</span>
            <a
              href="https://facebook.com/tilphee"
              target="_blank"
              rel="noopener noreferrer"
            >
              facebook.com/tilphee
            </a>
          </div>

          <div className="contact-method">
            <span>Location</span>
            <p>Lagos, Nigeria · Working remotely worldwide</p>
          </div>
        </div>

        <form
          className="contact-form"
          action="https://api.web3forms.com/submit"
          method="POST"
        >
          <input
            type="hidden"
            name="access_key"
            value="7b7172b3-2ae1-40c8-917b-0e3b8c445357"
          />
          <input
            type="hidden"
            name="subject"
            value="New Tilphee Portfolio Enquiry"
          />

          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="email">Email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

          <label htmlFor="business">Business or industry</label>
          <input
            id="business"
            name="business"
            type="text"
            placeholder="e.g. Real estate, consulting, e-commerce"
          />

          <label htmlFor="message">How can I help?</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about the process you'd like to improve..."
            required
          />

          <button type="submit" className="button button-primary">
            Send enquiry <span aria-hidden="true">→</span>
          </button>

          <p className="form-note">
            Your message will be sent directly to my inbox.
          </p>
        </form>
      </section>

      <section className="contact-bottom">
        <h2>Not sure where to start?</h2>
        <p>
          That’s okay. Tell me what’s slowing your business down, and we can
          figure out the next step together.
        </p>
        <Link href="/projects" className="text-link">
          Explore my work →
        </Link>
      </section>
    </main>
  );
}
