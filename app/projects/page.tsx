
import Link from 'next/link';

const projects = [
  {
    number: '01',
    category: 'REAL ESTATE / LEAD MANAGEMENT',
    title: 'Lead Management & Qualification',
    description: 'A structured enquiry management workflow designed to help real estate professionals capture, organise and qualify prospective clients.',
    challenge: 'Property enquiries can arrive through multiple channels, making it difficult to track prospects, respond consistently and identify serious buyers.',
    solution: 'A connected workflow captures incoming enquiries, organises prospect information, applies qualification criteria and triggers appropriate follow-ups.',
    workflow: ['Enquiry received', 'Information captured', 'Lead qualified', 'Follow-up triggered', 'Team notified'],
    outcome: 'A more organised lead pipeline, clearer prospect information and a consistent follow-up process.',
    tools: 'Workflow automation · AI qualification · CRM integration',
  },
  {
    number: '02',
    category: 'REAL ESTATE / APPOINTMENT AUTOMATION',
    title: 'Property Viewing Booking',
    description: 'An intelligent booking workflow designed to simplify property viewing requests and appointment coordination.',
    challenge: 'Coordinating property viewings often involves repeated messages, availability checks and manual appointment confirmations.',
    solution: 'A booking workflow collects viewing preferences, checks availability, coordinates appointments and sends relevant confirmations.',
    workflow: ['Viewing requested', 'Preferences collected', 'Availability checked', 'Appointment confirmed', 'Reminder sent'],
    outcome: 'A smoother booking experience and less manual appointment coordination.',
    tools: 'Booking automation · Calendar integration · Automated notifications',
  },
  {
    number: '03',
    category: 'EDUCATION / APPLICATION MANAGEMENT',
    title: 'Scholarship Application & Onboarding',
    description: 'An end-to-end application workflow designed to organise submissions, support evaluation and streamline applicant communication.',
    challenge: 'Managing scholarship applications can involve large volumes of documents, eligibility checks, decision updates and onboarding communication.',
    solution: 'A connected application workflow organises applicant details, supports review stages, tracks decisions and triggers appropriate communications.',
    workflow: ['Application submitted', 'Details organised', 'Eligibility reviewed', 'Decision recorded', 'Onboarding initiated'],
    outcome: 'A more structured application process and clearer communication throughout the applicant journey.',
    tools: 'Form automation · Document management · Workflow integration',
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero section-shell">
        <div className="section-kicker">PORTFOLIO / SELECTED WORK</div>
        <h1>Ideas translated<br />into <em>intelligent systems.</em></h1>
        <p>
          A collection of automation concepts and workflow solutions
          exploring how thoughtful technology can address real
          operational challenges.
        </p>
        <div className="projects-hero-bottom">
          <span>REAL ESTATE · BUSINESS · EDUCATION</span>
          <span>01 — 03 / WORKFLOW STUDIES</span>
        </div>
      </section>

      <section className="projects-intro section-shell">
        <div className="section-kicker">01 / THE WORK</div>
        <div>
          <h2>Every good solution starts with understanding the problem.</h2>
          <p>
            These workflow studies demonstrate how I approach business
            challenges, identify opportunities for improvement and
            design practical automation solutions.
          </p>
        </div>
      </section>

      <section className="case-studies section-shell">
        {projects.map((project) => (
          <article className="case-study" key={project.number}>
            <div className="case-study-top">
              <span>{project.number} / 03</span>
              <span>{project.category}</span>
            </div>

            <div className="case-study-heading">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>

            <div className="case-study-art">
              <div className="case-art-label">TILPHEE / WORKFLOW DESIGN</div>
              <div className="case-flow">
                {project.workflow.map((item, index) => (
                  <div className="case-flow-step" key={item}>
                    <span>0{index + 1}</span>
                    <b>{item}</b>
                    {index !== project.workflow.length - 1 && (
                      <i>→</i>
                    )}
                  </div>
                ))}
              </div>
              <div className="case-art-footer">
                INTELLIGENT AUTOMATION / {project.number}
              </div>
            </div>

            <div className="case-study-details">
              <div>
                <span className="case-detail-label">THE CHALLENGE</span>
                <p>{project.challenge}</p>
              </div>
              <div>
                <span className="case-detail-label">THE APPROACH</span>
                <p>{project.solution}</p>
              </div>
              <div>
                <span className="case-detail-label">EXPECTED OUTCOME</span>
                <p>{project.outcome}</p>
              </div>
            </div>

            <div className="case-study-bottom">
              <div>
                <span className="case-detail-label">TECHNOLOGY AREAS</span>
                <p>{project.tools}</p>
              </div>
              <span className="study-tag">WORKFLOW STUDY</span>
            </div>
          </article>
        ))}
      </section>

      <section className="projects-closing">
        <div className="section-shell">
          <div className="section-kicker light-kicker">HAVE A CHALLENGE TO SOLVE?</div>
          <h2>Your business could be<br />the next <em>success story.</em></h2>
          <div className="projects-closing-bottom">
            <p>
              Have a process that needs improving? Let's explore
              what an intelligent workflow could make possible.
            </p>
            <a
              href="mailto:hello@tilphee.com?subject=Project%20Enquiry"
              className="button button-gold"
            >
              Discuss a project <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
