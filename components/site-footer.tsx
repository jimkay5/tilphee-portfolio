import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link href="/" className="wordmark">
            tilphee<span>.</span>
          </Link>
          <p>Identify. Automate. Improve.</p>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/approach">My Approach</Link>
          </div>
        </div>

        <div>
          <p className="footer-label">Get in touch</p>
          <div className="footer-links">
            <a href="mailto:boluwatifedorcas42@gmail.com">Gmail ↗</a>
            <a
              href="https://instagram.com/tilphee"
              target="_blank"
              rel="noreferrer"
            >
              Instagram ↗
            </a>
            <a href="https://t.me/tilphee" target="_blank" rel="noreferrer">
              Telegram ↗
            </a>
            <a
              href="https://facebook.com/tilphee"
              target="_blank"
              rel="noreferrer"
            >
              Facebook ↗
            </a>
            <Link href="/contact">Contact page ↗</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Tilphee. All rights reserved.</span>
        <span>Built around better ways of working.</span>
      </div>
    </footer>
  );
}
