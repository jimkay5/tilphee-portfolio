
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Real Estate Automation',
    description: 'Streamline the journey from the first property enquiry to a confirmed viewing with intelligent, connected workflows.',
    features: [
      'Property enquiry management',
      'Lead capture and qualification',
      'Automated follow-ups',
      'Property viewing scheduling',
      'Client communication workflows',
    ],
    outcome: 'Less manual coordination. More time for meaningful client relationships.',
  },
  {
    number: '02',
    title: 'AI & Business Automation',
    description: 'Make everyday business operations more efficient by reducing repetitive tasks and connecting the processes that keep your business moving.',
    features: [
      'Business process automation',
      'Data collection and organisation',
      'Document and information workflows',
      'Automated notifications',
      'Task and process management',
    ],
    outcome: 'More organised operations and fewer repetitive tasks.',
  },
  {
    number: '03',
    title: 'AI Agents & Assistants',
    description: 'Build helpful AI-powered assistants that understand context, retrieve information and support everyday business activities.',
    features: [
      'AI-powered customer support',
      'Business knowledge assistants',
      'Enquiry response assistants',
      'Information retrieval',
      'Task-supporting AI agents',
    ],
    outcome: 'More accessible information and responsive business support.',
  },
  {
    number: '04',
    title: 'Workflow Integration',
    description: 'Bring your existing tools and platforms together so information flows smoothly between the systems your business relies on.',
    features: [
      'Third-party application integration',
      'Cross-platform workflows',
      'Automated data transfer',
      'System and tool connectivity',
      'Workflow optimisation',
    ],
    outcome: 'Connected systems and less time spent switching between tools.',
  },
];

const steps = [
  ['01', 'Discover', 'Understand your business, current processes and what needs to improve.'],
  ['02', 'Assess', 'Identify bottlenecks, opportunities and the most useful automation solutions.'],
  ['03', 'Design', 'Map out a thoughtful workflow around your actual business needs.'],
  ['04', 'Build & refine', 'Implement, test and improve the solution to support your operations.'],
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero section-shell">
        <div className="section-kicker">WHAT I DO / MY SERVICES</div>
        <h1>Better systems.<br /><em>Smarter ways</em> to work.</h1>
        <p>
          Every business has processes that could work better.
          I design intelligent automation solutions that reduce
          friction, connect systems and create room for growth.
        </p>
        <Link href="/#contact" className="button button-dark">
          Let's discuss your needs <span>↗</span>
        </Link>
        <div className="services-hero-note">
          BUSINESS-FIRST. SOLUTION-LED. BUILT AROUND YOU.
        </div>
      </section>

      <section className="services-overview section-shell">
        <div className="section-kicker">01 / MY CAPABILITIES</div>
        <div className="services-intro">
          <h2>Automation should solve a real problem, not simply add another tool.</h2>
          <p>
            My work focuses on understanding how your business operates
            and identifying where intelligent systems can make a meaningful
            difference.
          </p>
        </div>
        <div className="services-list">
          {services.map((service) => (
            <article className="service-detail" key={service.number}>
              <div className="service-detail-number">{service.number}</div>
              <div className="service-detail-main">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-features">
                  {service.features.map((feature) => (
                    <div key={feature}>
                      <span>↗</span> {feature}
                    </div>
                  ))}
                </div>
                <div className="service-outcome">{service.outcome}</div>
              </div>
              <div className="service-detail-mark">t<span>.</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-specialty">
        <div className="section-shell specialty-inner">
          <div>
            <div className="section-kicker light-kicker">02 / PRIMARY SPECIALISATION</div>
            <p className="small-overline">REAL ESTATE AUTOMATION</p>
            <h2>Property processes, made <em>simpler.</em></h2>
            <p>
              Real estate professionals manage enquiries, prospective
              clients, property information and appointments every day.
              Thoughtful automation helps bring these activities together.
            </p>
            <Link href="/contact" className="button button-light">
              Discuss a real estate workflow <span>↗</span>
            </Link>
          </div>
          <div className="real-estate-points">
            <div><span>01</span> Enquiry comes in</div>
            <div><span>02</span> Lead information is captured</div>
            <div><span>03</span> Prospect is qualified</div>
            <div><span>04</span> Follow-up is triggered</div>
            <div><span>05</span> Viewing is coordinated</div>
          </div>
        </div>
      </section>

      <section className="services-process section-shell">
        <div className="section-kicker">03 / THE PROCESS</div>
        <div className="services-process-heading">
          <h2>From business challenge<br />to <em>thoughtful solution.</em></h2>
          <p>
            A considered approach ensures that every solution
            has a purpose and fits the way your business works.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(([number, title, description]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-cta">
        <div className="section-shell">
          <div className="section-kicker light-kicker">LET'S EXPLORE WHAT'S POSSIBLE</div>
          <h2>What could your business<br /><em>do better?</em></h2>
          <div className="services-cta-bottom">
            <p>
              Tell me about the processes taking too much time
              or creating unnecessary friction. Let's find a
              smarter way forward.
            </p>
            <a
              href="mailto:hello@tilphee.com?subject=Service%20Enquiry"
              className="button button-gold"
            >
              Book a Discovery Call <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
