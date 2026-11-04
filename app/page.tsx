import Link from 'next/link';

const services = [
  { n: '01', title: 'Real Estate Automation', text: 'Smarter enquiry handling, lead qualification, follow-ups and property viewing workflows.' },
  { n: '02', title: 'AI & Business Automation', text: 'Purposeful AI-powered workflows that reduce repetitive work and move information where it needs to go.' },
  { n: '03', title: 'AI Agents & Assistants', text: 'Helpful assistants that respond to questions, retrieve trusted information and support business tasks.' },
  { n: '04', title: 'Workflow Integration', text: 'Connected tools and systems that help teams spend less time switching, copying and chasing.' }
];

const projects = [
  { tag: 'REAL ESTATE', title: 'Lead Management & Qualification', text: 'A structured workflow for capturing enquiries, qualifying prospects and triggering the right next steps.', mark: '01' },
  { tag: 'REAL ESTATE', title: 'Property Viewing Booking', text: 'A booking workflow that checks availability, creates appointments and keeps prospective clients informed.', mark: '02' },
  { tag: 'EDUCATION', title: 'Scholarship Application & Onboarding', text: 'An end-to-end application workflow supporting evaluation, decisions, communication and onboarding.', mark: '03' }
];

export default function Home() {
  return <main>
    <section className="hero section-shell">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> CERTIFIED AI AUTOMATION SPECIALIST</div>
        <h1>Smarter workflows.<br /><em>Better</em> business<br />operations.</h1>
        <p className="hero-lede">I'm Boluwatife, a Certified AI Automation Specialist helping real estate professionals and businesses streamline their operations through intelligent automation and thoughtfully designed workflows.</p>
        <div className="hero-actions"><a className="button button-dark" href="mailto:hello@tilphee.com?subject=Discovery%20Call%20Enquiry">Book a Discovery Call <span>↗</span></a><Link className="text-link" href="/projects">Explore my projects <span>→</span></Link></div>
        <div className="hero-note"><span className="note-dot" /> BUSINESS-FIRST. SOLUTION-LED. BUILT AROUND YOU.</div>
      </div>
      <div className="hero-visual" aria-label="Abstract illustration of connected business workflows">
        <div className="visual-topline"><span>WORKFLOW INTELLIGENCE</span><span>01 — 06</span></div>
        <div className="orbit orbit-one" /><div className="orbit orbit-two" />
        <div className="visual-center"><div className="center-mark">t<span>.</span></div><span>CONNECTED THINKING</span></div>
        <div className="flow-card flow-card-a"><span className="flow-icon">↗</span><div><b>Enquiry received</b><small>New opportunity identified</small></div><i className="status-dot" /></div>
        <div className="flow-card flow-card-b"><span className="flow-icon gold-icon">✳</span><div><b>AI qualification</b><small>Context understood</small></div><i className="status-dot" /></div>
        <div className="flow-card flow-card-c"><span className="flow-icon">⌁</span><div><b>Next step triggered</b><small>Information in motion</small></div><i className="status-dot" /></div>
        <div className="visual-caption">GOOD AUTOMATION SHOULD FEEL<br />LIKE A NATURAL EXTENSION OF WORK.</div>
      </div>
      <div className="hero-index">01 <span /> INTRODUCING TILPHEE</div>
    </section>

    <section className="intro-section section-shell">
      <div className="section-kicker">01 / THE THINKING</div>
      <div className="intro-content"><h2>I don't just automate tasks. <em>I help businesses improve how they operate.</em></h2><div className="intro-aside"><p>Effective automation starts with understanding the business behind the process. I take time to learn how work gets done, identify friction and design solutions that make everyday operations more effective.</p><Link href="/about" className="underlined-link">Get to know me <span>↗</span></Link></div></div>
    </section>

    <section className="specialty-section">
      <div className="section-shell specialty-grid"><div><div className="section-kicker light-kicker">02 / PRIMARY SPECIALISATION</div><p className="small-overline">REAL ESTATE PROFESSIONALS</p><h2>Automation built around the realities of <em>real estate.</em></h2><p className="section-description">From the first property enquiry to the confirmed viewing, well-designed workflows can help keep opportunities moving and communication consistent.</p><Link href="/services" className="button button-light">Explore real estate automation <span>↗</span></Link></div><div className="specialty-list"><div><span>01</span> Property enquiry management</div><div><span>02</span> Lead capture and qualification</div><div><span>03</span> Follow-ups and client communication</div><div><span>04</span> Viewing and appointment scheduling</div><div><span>05</span> Property information assistance</div><p>Every solution is shaped around the way your business actually works.</p></div></div>
    </section>

    <section className="beyond-section section-shell"><div className="section-kicker">03 / A BROADER PERSPECTIVE</div><div className="beyond-content"><h2>Good automation<br />isn't limited to <em>one industry.</em></h2><div><p>Real estate is my primary specialisation, but every business has processes worth improving. I also work across industries to identify where thoughtful automation can make a meaningful difference.</p><Link href="/projects" className="underlined-link">Explore projects beyond real estate <span>↗</span></Link></div></div></section>

    <section className="services-section section-shell"><div className="section-heading"><div><div className="section-kicker">04 / WHAT I DO</div><h2>Solutions shaped<br />around <em>your needs.</em></h2></div><p>Not a one-size-fits-all service list. A considered set of capabilities to help solve real operational challenges.</p></div><div className="service-grid">{services.map(s => <article className="service-card" key={s.n}><div className="card-top"><span>{s.n}</span><span>↗</span></div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div><Link href="/services" className="underlined-link service-more">View all services <span>↗</span></Link></section>

    <section className="projects-section"><div className="section-shell"><div className="section-heading projects-heading"><div><div className="section-kicker light-kicker">05 / SELECTED WORK</div><h2>Thoughtful solutions.<br /><em>Practical outcomes.</em></h2></div><p>A look at the business challenges I explore and the systems I design to address them.</p></div><div className="project-grid">{projects.map(p => <article className="project-card" key={p.mark}><div className="project-art"><span className="project-number">{p.mark}</span><div className="mini-flow"><i /><i /><i /></div><span className="project-art-label">TILPHEE / WORKFLOW STUDY</span></div><div className="project-meta">{p.tag}<span>CASE STUDY</span></div><h3>{p.title}</h3><p>{p.text}</p><Link href="/projects" className="project-link">View case study <span>↗</span></Link></article>)}</div><div className="projects-bottom"><span>SELECTED PROJECTS / PORTFOLIO</span><Link href="/projects" className="button button-light">Explore all projects <span>↗</span></Link></div></div></section>

    <section className="approach-section section-shell"><div className="section-kicker">06 / HOW I WORK</div><div className="approach-grid"><h2>The right automation starts with <em>understanding.</em></h2><div><p>Before recommending a tool or building a workflow, I want to understand the people, processes and priorities behind the business.</p><div className="approach-steps"><span>01&nbsp; Discover</span><span>02&nbsp; Assess</span><span>03&nbsp; Design</span><span>04&nbsp; Build & refine</span></div><Link href="/approach" className="underlined-link">Explore my approach <span>↗</span></Link></div></div></section>

    <section className="final-cta"><div className="section-shell cta-inner"><div className="section-kicker light-kicker">HAVE A PROCESS IN MIND?</div><h2>Let's make your business<br /><em>work smarter.</em></h2><div className="cta-bottom"><p>Tell me what's taking too much time, creating friction or getting in the way. Let's explore what could work better.</p><a className="button button-gold" href="mailto:hello@tilphee.com?subject=Let's%20talk%20automation">Start a conversation <span>↗</span></a></div></div></section>
  </main>;
}
