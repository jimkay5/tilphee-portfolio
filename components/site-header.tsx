'use client';

import Link from 'next/link';
import { useState } from 'react';

const links = [
  ['About', '/about'], ['Services', '/services'], ['Projects', '/projects'], ['My Approach', '/approach'], ['Contact', '/contact']
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="wordmark" aria-label="Tilphee home">tilphee<span>.</span></Link>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}><span /><span /></button>
        <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
          <a className="nav-cta" href="mailto:hello@tilphee.com?subject=Discovery%20Call%20Enquiry">Book a Discovery Call <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}
