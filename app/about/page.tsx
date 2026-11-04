
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Boluwatife | Tilphee',
  description:
    'Meet Boluwatife Dorcas Oladapo, a Certified AI Automation Specialist helping businesses improve operations through intelligent automation.'
};

const expertise = [
  {
    number: '01',
    title: 'AI Automation',
    description:
      'Designing intelligent workflows that use AI to simplify suitable business tasks and processes.'
  },
  {
    number: '02',
    title: 'Business Process Automation',
    description:
      'Reducing repetitive administrative work and improving the flow of everyday operations.'
  },
  {
    number: '03',
    title: 'Workflow Design & Integration',
    description:
      'Connecting applications and systems to create more organised, efficient workflows.'
  },
  {
    number: '04',
    title: 'AI Agents & Business Assistants',
    description:
      'Building assistants that retrieve information, respond to enquiries and support business tasks.'
  },
  {
    number: '05',
    title: 'Lead Management & Qualification',
    description:
      'Creating workflows that capture, organise, qualify and manage prospective clients.'
  },
  {
    number: '06',
    title: 'Customer Communication',
    description:
      'Streamlining enquiries, follow-ups, notifications and customer interactions.'
  },
  {
    number: '07',
    title: 'Appointment Automation',
    description:
      'Simplifying appointment requests, scheduling, confirmations and reminders.'
  },
  {
    number: '08',
    title: 'Application & System Integration',
    description:
      'Helping information move between business applications with less manual intervention.'
  }
];

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* ABOUT HERO */}
      <section className="about-hero section-shell">
        <div className="about-hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            THE PERSON BEHIND TILPHEE
          </div>

          <h1>
            Meet <em>Boluwatife.</em>
            <br />
            Thoughtful thinking.
            <br />
            Intelligent solutions.
          </h1>

          <p className="about-hero-lede">
            I'm Boluwatife Dorcas Oladapo, a Certified AI Automation
            Specialist focused on helping real estate professionals
            and businesses improve how they operate through
            intelligent automation.
          </p>

          <div className="about-hero-actions">
            <Link href="/contact" className="button button-dark">
              Let's work together <span>↗</span>
            </Link>

            <Link href="/projects" className="text-link">
              Explore my work <span>→</span>
            </Link>
          </div>

          <div className="about-identity">
            <span>BASED ON UNDERSTANDING</span>
            <span>BUILT AROUND REAL BUSINESS NEEDS</span>
          </div>
        </div>

        <div className="about-portrait-wrap">
          <div className="about-portrait">
            <div className="portrait-topline">
              <span>THE PROFESSIONAL</span>
              <span>01 / TILPHEE</span>
            </div>

            <div className="portrait-monogram">
              <span>B</span>
              <i>.</i>
            </div>

            <div className="portrait-orbit portrait-orbit-one" />
            <div className="portrait-orbit portrait-orbit-two" />

            <div className="portrait-bottom">
              <div>
                <strong>Boluwatife Dorcas Oladapo</strong>
                <span>Certified AI Automation Specialist</span>
              </div>
              <span className="portrait-index">T.</span>
            </div>
          </div>

          <div className="portrait-caption">
            <span>INTELLIGENCE WITH INTENTION.</span>
            <span>PEOPLE BEFORE PROCESSES.</span>
          </div>
        </div>

        <div className="about-hero-index">
          01 <span /> GET TO KNOW ME
        </div>
      </section>

      {/* PERSONAL INTRODUCTION */}
      <section className="about-introduction section-shell">
        <div className="section-kicker">01 / MY STORY</div>

        <div className="about-intro-grid">
          <h2>
            I believe technology should make work easier,
            <em> not more complicated.</em>
          </h2>

          <div className="about-intro-copy">
            <p>
              My work centres on understanding how businesses
              operate, identifying repetitive tasks and recognising
              opportunities where automation can make a meaningful
              difference.
            </p>

            <p>
              My primary specialisation is AI automation for real
              estate professionals. I explore ways to improve
              property enquiries, lead management, client
              communication and other everyday operations.
            </p>

            <p>
              Beyond real estate, I also work with businesses across
              different industries. Every business has its own
              processes, challenges and priorities, and I believe
              solutions should reflect those differences.
            </p>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL FOCUS */}
      <section className="about-focus">
        <div className="section-shell about-focus-grid">
          <div>
            <div className="section-kicker light-kicker">
              02 / MY PROFESSIONAL FOCUS
            </div>

            <p className="small-overline">
              CERTIFIED AI AUTOMATION SPECIALIST
            </p>

            <h2>
              Understanding the process.
              <em> Improving the outcome.</em>
            </h2>

            <p className="about-focus-description">
              I approach automation as a business problem-solving
              discipline. Before choosing a tool or designing a
              workflow, I want to understand what needs to work
              better and why.
            </p>

            <Link href="/approach" className="button button-light">
              Discover my approach <span>↗</span>
            </Link>
          </div>

          <div className="about-focus-details">
            <div>
              <span>01</span>
              <strong>Understand</strong>
              <p>Learn how the business currently operates.</p>
            </div>

            <div>
              <span>02</span>
              <strong>Identify</strong>
              <p>Recognise friction, repetitive tasks and gaps.</p>
            </div>

            <div>
              <span>03</span>
              <strong>Design</strong>
              <p>Develop solutions around actual business needs.</p>
            </div>

            <div>
              <span>04</span>
              <strong>Improve</strong>
              <p>Build, test and refine practical workflows.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AREAS OF EXPERTISE */}
      <section className="about-expertise section-shell">
        <div className="section-heading">
          <div>
            <div className="section-kicker">
              03 / AREAS OF EXPERTISE
            </div>

            <h2>
              The capabilities
              <br />
              behind the <em>solutions.</em>
            </h2>
          </div>

          <p>
            A combination of AI, automation, workflow design and
            system integration skills used to address different
            operational challenges.
          </p>
        </div>

        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.number}>
              <div className="expertise-card-top">
                <span>{item.number}</span>
                <span>↗</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CERTIFICATION */}
      <section className="about-certification">
        <div className="section-shell certification-grid">
          <div>
            <div className="section-kicker">
              04 / PROFESSIONAL CREDENTIALS
            </div>

            <h2>
              Learning.
              <br />
              Building.
              <br />
              <em>Growing.</em>
            </h2>

            <p>
              I believe professional growth involves continuously
              developing technical knowledge, exploring new
              possibilities and applying what I learn to practical
              business challenges.
            </p>
          </div>

          <div className="certificate-card">
            <div className="certificate-top">
              <span>TILPHEE / CREDENTIALS</span>
              <span>01</span>
            </div>

            <div className="certificate-symbol">T.</div>

            <div className="certificate-rule" />

            <p>PROFESSIONAL CERTIFICATION</p>

            <h3>Certified AI Automation Specialist</h3>

            <span className="certificate-provider">
              Cybervast AI Automation Program
            </span>

            <div className="certificate-bottom">
              <span>PROFESSIONAL DEVELOPMENT</span>
              <span>CYBERVAST</span>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="about-philosophy">
        <div className="section-shell">
          <div className="section-kicker light-kicker">
            05 / WHAT GUIDES MY WORK
          </div>

          <h2>
            Technology should make work easier,
            <em> not introduce unnecessary complexity.</em>
          </h2>

          <div className="philosophy-bottom">
            <span>MY PROFESSIONAL PHILOSOPHY</span>

            <p>
              Not every challenge needs artificial intelligence.
              Sometimes a straightforward automation or system
              integration is the better answer. What matters is
              finding a solution that genuinely works for the
              business.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="about-cta section-shell">
        <div className="section-kicker">06 / LET'S CONNECT</div>

        <div className="about-cta-content">
          <h2>
            Every better workflow
            <br />
            starts with <em>a conversation.</em>
          </h2>

          <div>
            <p>
              Have an operational challenge you'd like to solve?
              Let's talk about your business, your processes and
              where intelligent automation could help.
            </p>

            <Link href="/contact" className="button button-dark">
              Start a conversation <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
