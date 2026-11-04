
import Link from 'next/link';

const stages = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'Every engagement begins with a conversation. I want to understand your business, how your operations work, the challenges you experience and what you want to achieve.',
    details: ['Business objectives', 'Existing processes', 'Operational challenges'],
  },
  {
    number: '02',
    title: 'Workflow Assessment',
    description: 'I examine the processes behind your operations to identify repetitive tasks, bottlenecks, unnecessary manual work and opportunities for improvement.',
    details: ['Process evaluation', 'Repetitive task identification', 'Automation opportunities'],
  },
  {
    number: '03',
    title: 'Solution Design',
    description: 'With a clear understanding of your needs, I map out a suitable solution. Every recommendation is based on your actual requirements, not a predetermined collection of tools.',
    details: ['Workflow mapping', 'Solution architecture', 'Tool selection'],
  },
  {
    number: '04',
    title: 'Development & Integration',
    description: 'I bring the proposed solution to life by building the automation, connecting relevant applications and configuring the different stages of the workflow.',
    details: ['Automation development', 'Application integration', 'System configuration'],
  },
  {
    number: '05',
    title: 'Testing & Refinement',
    description: 'Before deployment, I test the workflow, check how its different components interact and make necessary adjustments to improve reliability.',
    details: ['Workflow testing', 'Error handling', 'Performance refinement'],
  },
  {
    number: '06',
    title: 'Deployment & Support',
    description: 'Once everything is ready, the solution is implemented and I provide the necessary guidance to help you understand and use the new workflow.',
    details: ['Implementation', 'User guidance', 'Post-deployment support'],
  },
];

export default function ApproachPage() {
  return (
    <main className="approach-page">

      <section className="approach-hero section-shell">
        <div className="section-kicker">MY APPROACH / HOW I WORK</div>
        <h1>The right automation<br />starts with <em>understanding.</em></h1>
        <p>
          Good automation isn't about using the most tools or building
          the most complicated systems. It's about understanding a
          business and finding a better way to get things done.
        </p>
        <div className="approach-hero-note">
          UNDERSTAND FIRST. DESIGN WITH PURPOSE. BUILD WITH INTENTION.
        </div>
      </section>

      <section className="approach-philosophy">
        <div className="section-shell philosophy-grid">
          <div>
            <div className="section-kicker light-kicker">01 / MY PHILOSOPHY</div>
            <p className="small-overline">A BUSINESS-FIRST MINDSET</p>
            <h2>Technology should make work easier, <em>not more complicated.</em></h2>
          </div>
          <div className="philosophy-copy">
            <p>
              Every business operates differently. What works for one
              organisation may not be the right solution for another.
              That's why I don't begin with a tool or a template.
              I begin with the business.
            </p>
            <p>
              By understanding existing processes, identifying
              operational challenges and considering the desired
              outcomes, I can recommend solutions that serve a
              genuine purpose.
            </p>
          </div>
        </div>
      </section>

      <section className="approach-stages section-shell">
        <div className="section-kicker">02 / THE PROCESS</div>
        <div className="stages-heading">
          <h2>A considered process.<br /><em>A purposeful result.</em></h2>
          <p>
            From the first conversation to implementation,
            every stage is designed to keep the solution
            connected to the business need.
          </p>
        </div>

        <div className="stages-list">
          {stages.map((stage) => (
            <article className="stage-card" key={stage.number}>
              <div className="stage-number">{stage.number}</div>
              <div className="stage-content">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
                <div className="stage-details">
                  {stage.details.map((detail) => (
                    <span key={detail}>{detail}</span>
                  ))}
                </div>
              </div>
              <div className="stage-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      <section className="approach-principle">
        <div className="section-shell principle-inner">
          <div className="section-kicker light-kicker">03 / WHAT GUIDES MY DECISIONS</div>
          <span className="principle-mark">“</span>
          <h2>Not every business challenge requires artificial intelligence.</h2>
          <p>
            Sometimes a straightforward automation or system integration
            is the better solution. My priority is finding what works
            best for the business, not introducing complexity where
            it isn't needed.
          </p>
          <span className="principle-signature">TILPHEE / A DIFFERENT WAY OF THINKING</span>
        </div>
      </section>

      <section className="approach-closing section-shell">
        <div className="section-kicker">READY TO START?</div>
        <h2>Let's understand what<br />could work <em>better.</em></h2>
        <p>
          Whether you're in real estate or another industry,
          let's have a conversation about your business and
          the processes you'd like to improve.
        </p>
        <Link href="/contact" className="button button-dark">
          Start a conversation <span>↗</span>
        </Link>
      </section>

    </main>
  );
}
