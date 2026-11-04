
import Link from "next/link";

const services = [
  {
    n: "01",
    title: "Real Estate Automation",
    text: "Smarter property enquiries, lead qualification, follow-ups, viewing bookings and property management workflows.",
  },
  {
    n: "02",
    title: "AI-Powered Assistants",
    text: "Intelligent property enquiry chatbots that answer questions, collect prospect details and support lead management.",
  },
  {
    n: "03",
    title: "AI Voice Agents",
    text: "Voice assistants that answer property enquiry calls, collect caller information and help route prospective clients to agents.",
  },
  {
    n: "04",
    title: "Workflow Integration",
    text: "Connected applications and systems that reduce repetitive work and help real estate teams operate more efficiently.",
  },
];

const projects = [
  {
    tag: "REAL ESTATE",
    title: "AI Real Estate Lead Capture & Qualification",
    text: "A workflow for capturing property enquiries, organising prospect information and qualifying potential clients.",
    mark: "01",
  },
  {
    tag: "REAL ESTATE",
    title: "AI Property Viewing Booking",
    text: "An automated booking workflow for collecting viewing requests, checking availability and confirming appointments.",
    mark: "02",
  },
  {
    tag: "EDUCATION",
    title: "Scholarship Application & Onboarding",
    text: "An application workflow supporting applicant information, evaluation, communication and onboarding.",
    mark: "03",
  },
  {
    tag: "REAL ESTATE",
    title: "AI Property Enquiry Chatbot",
    text: "An AI-powered assistant designed to respond to property questions and collect prospective client enquiries.",
    mark: "04",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-shell">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" /> CERTIFIED AI AUTOMATION SPECIALIST
          </div>

          <h1>
            Smarter workflows.
            <br />
            <em>Better</em> business
            <br />
            operations.
          </h1>

          <p className="hero-lede">
            I'm Boluwatife Dorcas Oladapo, a Certified AI Automation
            Specialist helping real estate professionals improve property
            enquiries, lead management, client communication and everyday
            operations through intelligent automation.
          </p>

          <div className="hero-actions">
            <Link
              className="button button-dark"
              href="/contact"
            >
              Book a Discovery Call <span>↗</span>
            </Link>

            <Link className="text-link" href="/projects">
              Explore my projects <span>→</span>
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-dot" /> REAL ESTATE FOCUSED. BUSINESS-FIRST.
            BUILT AROUND YOU.
          </div>
        </div>

        <div
          className="hero-visual"
          aria-label="Abstract illustration of connected business workflows"
        >
          <div className="visual-topline">
            <span>WORKFLOW INTELLIGENCE</span>
            <span>01 — 06</span>
          </div>

          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="visual-center">
            <div className="center-mark">
              t<span>.</span>
            </div>
            <span>CONNECTED THINKING</span>
          </div>

          <div className="flow-card flow-card-a">
            <span className="flow-icon">↗</span>
            <div>
              <b>Property enquiry</b>
              <small>New opportunity identified</small>
            </div>
            <i className="status-dot" />
          </div>

          <div className="flow-card flow-card-b">
            <span className="flow-icon gold-icon">✳</span>
            <div>
              <b>AI qualification</b>
              <small>Prospect information organised</small>
            </div>
            <i className="status-dot" />
          </div>

          <div className="flow-card flow-card-c">
            <span className="flow-icon">⌁</span>
            <div>
              <b>Next step triggered</b>
              <small>Agent notified automatically</small>
            </div>
            <i className="status-dot" />
          </div>

          <div className="visual-caption">
            GOOD AUTOMATION SHOULD FEEL
            <br />
            LIKE A NATURAL EXTENSION OF WORK.
          </div>
        </div>

        <div className="hero-index">
          01 <span /> INTRODUCING TILPHEE
        </div>
      </section>

      <section className="intro-section section-shell">
        <div className="section-kicker">01 / THE THINKING</div>

        <div className="intro-content">
          <h2>
            I don't just automate tasks.{" "}
            <em>I help businesses improve how they operate.</em>
          </h2>

          <div className="intro-aside">
            <p>
              Effective automation starts with understanding the business
              behind the process. I take time to learn how work gets done,
              identify friction and design solutions that make everyday
              operations more effective.
            </p>

            <Link href="/about" className="underlined-link">
              Get to know me <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="specialty-section">
        <div className="section-shell specialty-grid">
          <div>
            <div className="section-kicker light-kicker">
              02 / PRIMARY SPECIALISATION
            </div>

            <p className="small-overline">REAL ESTATE PROFESSIONALS</p>

            <h2>
              Automation built around the realities of <em>real estate.</em>
            </h2>

            <p className="section-description">
              From the first property enquiry to the confirmed viewing,
              well-designed workflows can help keep opportunities moving,
              calls answered and communication consistent.
            </p>

            <Link href="/services" className="button button-light">
              Explore real estate automation <span>↗</span>
            </Link>
          </div>

          <div className="specialty-list">
            <div>
              <span>01</span> Property enquiry management
            </div>
            <div>
              <span>02</span> Lead capture and qualification
            </div>
            <div>
              <span>03</span> Follow-ups and client communication
            </div>
            <div>
              <span>04</span> Viewing and appointment scheduling
            </div>
            <div>
              <span>05</span> AI chatbots and voice agents
            </div>
            <p>
              Every solution is shaped around the way your business actually
              works.
            </p>
          </div>
        </div>
      </section>

      <section className="beyond-section section-shell">
        <div className="section-kicker">03 / A BROADER PERSPECTIVE</div>

        <div className="beyond-content">
          <h2>
            Good automation
            <br />
            isn't limited to <em>one industry.</em>
          </h2>

          <div>
            <p>
              Real estate is my primary specialisation, but communication
              and operational processes exist across many industries.
              I also help other businesses identify where thoughtful
              automation can make a meaningful difference.
            </p>

            <Link href="/projects" className="underlined-link">
              Explore projects beyond real estate <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="services-section section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">04 / WHAT I DO</div>

            <h2>
              Solutions shaped
              <br />
              around <em>your needs.</em>
            </h2>
          </div>

          <p>
            Not a one-size-fits-all service list. A considered set of
            capabilities to help solve real operational challenges.
          </p>
        </div>

        <div className="service-grid">
          {services.map((s) => (
            <article className="service-card" key={s.n}>
              <div className="card-top">
                <span>{s.n}</span>
                <span>↗</span>
              </div>

              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <Link href="/services" className="underlined-link service-more">
          View all services <span>↗</span>
        </Link>
      </section>

      <section className="projects-section">
        <div className="section-shell">
          <div className="section-heading projects-heading">
            <div>
              <div className="section-kicker light-kicker">
                05 / SELECTED WORK
              </div>

              <h2>
                Thoughtful solutions.
                <br />
                <em>Practical outcomes.</em>
              </h2>
            </div>

            <p>
              A selection of projects demonstrating how I approach
              automation challenges and build practical workflow solutions.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((p) => (
              <article className="project-card" key={p.mark}>
                <div className="project-art">
                  <span className="project-number">{p.mark}</span>

                  <div className="mini-flow">
                    <i />
                    <i />
                    <i />
                  </div>

                  <span className="project-art-label">
                    TILPHEE / PROJECT
                  </span>
                </div>

                <div className="project-meta">
                  {p.tag}
                  <span>PROJECT</span>
                </div>

                <h3>{p.title}</h3>
                <p>{p.text}</p>

                <Link href="/projects" className="project-link">
                  View project <span>↗</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="projects-bottom">
            <span>SELECTED PROJECTS / PORTFOLIO</span>

            <Link href="/projects" className="button button-light">
              Explore all projects <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="approach-section section-shell">
        <div className="section-kicker">06 / HOW I WORK</div>

        <div className="approach-grid">
          <h2>
            The right automation starts with <em>understanding.</em>
          </h2>

          <div>
            <p>
              Before recommending a tool or building a workflow, I want
              to understand the people, processes and priorities behind
              the business. Every organisation operates differently,
              so every solution should be considered individually.
            </p>

            <div className="approach-steps">
              <span>01&nbsp; Discover</span>
              <span>02&nbsp; Assess</span>
              <span>03&nbsp; Design</span>
              <span>04&nbsp; Build & refine</span>
            </div>

            <Link href="/approach" className="underlined-link">
              Explore my approach <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="section-shell cta-inner">
          <div className="section-kicker light-kicker">
            HAVE A PROCESS IN MIND?
          </div>

          <h2>
            Let's make your business
            <br />
            <em>work smarter.</em>
          </h2>

          <div className="cta-bottom">
            <p>
              Tell me what's taking too much time, creating friction or
              getting in the way. Let's explore what could work better.
            </p>

            <Link
              className="button button-gold"
              href="/contact"
            >
              Start a conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
