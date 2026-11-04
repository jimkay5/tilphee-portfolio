
const projects = [
  {
    number: '01',
    category: 'REAL ESTATE / LEAD MANAGEMENT',
    title: 'AI Real Estate Lead Capture & Qualification',
    description:
      'An automated lead management system that captures property enquiries, organises prospect information and helps identify serious potential clients.',
    challenge:
      'Property enquiries can arrive through different channels, making it difficult to organise prospects, identify serious buyers and maintain consistent follow-ups.',
    solution:
      'A connected workflow captures incoming leads, collects relevant information, qualifies prospects and helps ensure the right enquiries receive attention.',
    workflow: ['Enquiry received', 'Information captured', 'Lead qualified', 'Follow-up triggered', 'Team notified'],
    outcome:
      'A more organised lead pipeline, better prospect visibility and a more consistent enquiry management process.',
    tools: 'Workflow automation · AI qualification · Lead management',
    repository: 'https://github.com/Tilphee/ai-real-estate-lead-qualification',
    demo: 'https://www.youtube.com/watch?v=qiI2pesumZ0',
  },
  {
    number: '02',
    category: 'REAL ESTATE / APPOINTMENT AUTOMATION',
    title: 'AI Property Viewing Booking',
    description:
      'An automated booking workflow designed to simplify property viewing requests and appointment coordination.',
    challenge:
      'Coordinating property viewings often involves repeated messages, availability checks and manual appointment confirmations.',
    solution:
      'A booking workflow collects viewing preferences, checks availability, coordinates appointments and sends relevant confirmations.',
    workflow: ['Viewing requested', 'Preferences collected', 'Availability checked', 'Appointment confirmed', 'Reminder sent'],
    outcome:
      'A smoother booking experience and less manual appointment coordination.',
    tools: 'Booking automation · Calendar integration · Automated notifications',
    repository: 'https://github.com/Tilphee/ai-property-viewing-booking',
    demo: 'https://www.youtube.com/watch?v=HM1Ys2cAbhY',
  },
  {
    number: '03',
    category: 'EDUCATION / APPLICATION MANAGEMENT',
    title: 'Scholarship Application & Onboarding',
    description:
      'An application workflow designed to organise submissions, support evaluation and streamline applicant communication.',
    challenge:
      'Managing scholarship applications can involve large volumes of documents, eligibility checks, decision updates and onboarding communication.',
    solution:
      'A connected application workflow organises applicant details, supports review stages, tracks decisions and triggers appropriate communications.',
    workflow: ['Application submitted', 'Details organised', 'Eligibility reviewed', 'Decision recorded', 'Onboarding initiated'],
    outcome:
      'A more structured application process and clearer communication throughout the applicant journey.',
    tools: 'Form automation · Document management · Workflow integration',
    demo: 'https://www.youtube.com/watch?v=YLA2fazsff8',
  },
  {
    number: '04',
    category: 'REAL ESTATE / AI CUSTOMER SUPPORT',
    title: 'AI Property Enquiry Chatbot',
    description:
      'An AI-powered property enquiry assistant designed to respond to prospective clients and help real estate businesses manage incoming questions.',
    challenge:
      'Real estate teams can spend considerable time answering repeated property questions and collecting basic information from prospective clients.',
    solution:
      'An AI chatbot helps answer common property enquiries, collect prospect details and support the initial lead qualification process.',
    workflow: ['Visitor starts chat', 'Enquiry received', 'Questions answered', 'Lead details collected', 'Enquiry passed on'],
    outcome:
      'More responsive enquiry handling and a better organised first point of contact for prospective clients.',
    tools: 'AI chatbot · Conversational automation · Lead capture',
    repository: 'https://github.com/Tilphee/ai-property-enquiry-chatbot',
    demoComingSoon: true,
  },
];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-hero section-shell">
        <div className="section-kicker">PORTFOLIO / SELECTED WORK</div>
        <h1>
          Ideas translated
          <br />
          into <em>intelligent systems.</em>
        </h1>
        <p>
          A collection of practical automation projects demonstrating
          how AI and connected workflows can solve operational
          challenges, particularly within real estate.
        </p>
        <div className="projects-hero-bottom">
          <span>REAL ESTATE · BUSINESS · EDUCATION</span>
          <span>01 — 04 / SELECTED PROJECTS</span>
        </div>
      </section>

      <section className="projects-intro section-shell">
        <div className="section-kicker">01 / THE WORK</div>
        <div>
          <h2>Every good solution starts with understanding the problem.</h2>
          <p>
            These are projects I have worked on, exploring how AI,
            automation and connected systems can address real
            operational challenges and improve everyday processes.
          </p>
        </div>
      </section>

      <section className="case-studies section-shell">
        {projects.map((project) => (
          <article className="case-study" key={project.number}>
            <div className="case-study-top">
              <span>{project.number} / 04</span>
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
                <span className="case-detail-label">OUTCOME</span>
                <p>{project.outcome}</p>
              </div>
            </div>

            <div className="case-study-bottom">
              <div>
                <span className="case-detail-label">TECHNOLOGY AREAS</span>
                <p>{project.tools}</p>
              </div>
              <span className="study-tag">PROJECT</span>
            </div>

            <div className="project-links">
              {project.repository && (
                <a
                  href={project.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-outline"
                >
                  View repository <span>↗</span>
                </a>
              )}

              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button button-gold"
                >
                  View live demo <span>↗</span>
                </a>
              )}

              {project.demoComingSoon && (
                <span className="demo-coming-soon">
                  Live demo coming soon
                </span>
              )}
            </div>
          </article>
        ))}
      </section>

      <section className="projects-explore section-shell">
        <div className="section-kicker">02 / EXPLORE MORE</div>
        <div>
          <h2>More projects. More possibilities.</h2>
          <p>
            Explore more of my automation work, project repositories
            and practical demonstrations.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/tilphee"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-outline"
            >
              Explore GitHub projects <span>↗</span>
            </a>
            <a
              href="https://www.youtube.com/@TilpheeAutomation"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-gold"
            >
              Explore live demos <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="projects-closing">
        <div className="section-shell">
          <div className="section-kicker light-kicker">
            HAVE A CHALLENGE TO SOLVE?
          </div>
          <h2>
            Your business could be
            <br />
            the next <em>success story.</em>
          </h2>
          <div className="projects-closing-bottom">
            <p>
              Have a process that needs improving? Let's explore
              what an intelligent workflow could make possible.
            </p>
            <a
              href="mailto:boluwatifedorcas42@gmail.com?subject=Project%20Enquiry"
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
