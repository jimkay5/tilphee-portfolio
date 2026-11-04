
import Link from 'next/link';

const services = [
  {
    number: '01',
    title: 'Lead Generation & Enquiry Management',
    description: 'Capture, organise and distribute property enquiries from multiple channels so potential clients are not overlooked.',
    features: [
      'Automated lead capture from websites and landing pages',
      'WhatsApp enquiry and lead capture',
      'Website form lead capture',
      'Facebook and Instagram lead capture',
      'Automatic lead data collection and organisation',
      'Lead distribution to agents or sales representatives',
      'Centralised lead management',
    ],
  },
  {
    number: '02',
    title: 'Lead Qualification & Scoring',
    description: 'Identify serious prospects and help agents prioritise the enquiries that deserve attention first.',
    features: [
      'Automatically qualify prospective buyers, tenants and investors',
      'Categorise leads as hot, warm or cold',
      'Assess prospects based on budget, location, property preferences and readiness',
      'Identify high-priority leads',
      'Send qualified leads to the appropriate agent',
    ],
  },
  {
    number: '03',
    title: 'Follow-up & Client Communication',
    description: 'Maintain timely, consistent communication with prospects and clients throughout their property journey.',
    features: [
      'Automated follow-up emails and messages',
      'Follow-up reminders for agents',
      'Re-engagement of inactive prospects',
      'Personalised responses to common enquiries',
      'Automated enquiry acknowledgements',
      'Lead nurturing campaigns',
    ],
  },
  {
    number: '04',
    title: 'Property Listing Management',
    description: 'Keep property information organised and up to date across the platforms your business uses.',
    features: [
      'Automated property listing submissions',
      'Updating property prices and availability',
      'Synchronising listing information across platforms',
      'Organising property details, images and documents',
      'Notifications when property information changes',
      'Removing or flagging outdated listings',
    ],
  },
  {
    number: '05',
    title: 'Property Inspection & Appointment Scheduling',
    description: 'Simplify the process of arranging property inspections and coordinating viewing appointments.',
    features: [
      'Automated property viewing requests',
      'Inspection scheduling and calendar integration',
      'Checking agent availability',
      'Booking confirmations',
      'Inspection reminders',
      'Rescheduling and cancellation management',
      'Automatic notifications to agents',
    ],
  },
  {
    number: '06',
    title: 'Property Management',
    description: 'Support property managers with organised tenant communication, maintenance workflows and recurring reminders.',
    features: [
      'Automated rent reminders',
      'Tenant onboarding',
      'Maintenance request collection and tracking',
      'Maintenance notifications to property managers',
      'Lease renewal reminders',
      'Tenant communication',
      'Property maintenance reporting',
    ],
  },
  {
    number: '07',
    title: 'Client Onboarding & Documentation',
    description: 'Make it easier to collect, organise and track the information and documents required from clients.',
    features: [
      'Automated collection of client information',
      'Document submission and organisation',
      'Buyer and tenant onboarding workflows',
      'Document verification notifications',
      'Contract and lease renewal reminders',
      'Automatic document status updates',
    ],
  },
  {
    number: '08',
    title: 'Sales & Transaction Management',
    description: 'Keep track of prospects, transactions, payments and important milestones throughout the sales process.',
    features: [
      'Tracking prospects through the sales pipeline',
      'Monitoring transaction progress',
      'Payment reminders and notifications',
      'Automated payment confirmations',
      'Document collection and status tracking',
      'Notifications for important transaction milestones',
    ],
  },
  {
    number: '09',
    title: 'AI-Powered Website Assistants & Chatbots',
    description: 'Give prospective buyers and tenants a responsive way to get property information and make enquiries, even outside business hours.',
    features: [
      'Answering property enquiries 24/7',
      'Providing property information',
      'Recommending properties based on client preferences',
      'Collecting and qualifying leads',
      'Answering frequently asked questions',
      'Escalating complex enquiries to human agents',
    ],
  },
  {
    number: '10',
    title: 'AI Voice Agents',
    description: 'Use AI-powered voice agents to handle routine calls, respond to enquiries and help real estate teams stay responsive when agents are busy or unavailable.',
    features: [
      'Answering incoming enquiry calls',
      'Responding to frequently asked questions through voice',
      'Collecting caller details and property preferences',
      'Qualifying prospective buyers and tenants',
      'Capturing viewing and inspection requests',
      'Routing important calls to the right agent',
      'Sending call summaries and enquiry notifications',
      'Supporting follow-up calls where appropriate',
    ],
  },
  {
    number: '11',
    title: 'Marketing & Content Automation',
    description: 'Reduce the manual work involved in preparing and distributing property marketing content.',
    features: [
      'Automated property listing descriptions',
      'Social media content scheduling',
      'Property marketing email campaigns',
      'Automated distribution of new listings',
      'Follow-up campaigns for interested prospects',
      'Marketing performance reports',
    ],
  },
  {
    number: '12',
    title: 'Reporting & Business Analytics',
    description: 'Give your team better visibility into enquiries, sales activities and the performance of important workflows.',
    features: [
      'Automated lead reports',
      'Sales performance reports',
      'Property enquiry reports',
      'Inspection and booking reports',
      'Lead conversion tracking',
      'Agent performance monitoring',
      'Automated daily, weekly or monthly summaries',
    ],
  },
  {
    number: '13',
    title: 'Internal Operations & Team Management',
    description: 'Help teams coordinate responsibilities, share information and keep important internal processes moving.',
    features: [
      'Assigning tasks to team members',
      'Internal notifications and alerts',
      'Tracking agent activities',
      'Workflow approval processes',
      'Staff onboarding',
      'Task reminders and deadline notifications',
      'Information sharing between departments',
    ],
  },
];

const steps = [
  ['01', 'Understand', 'Learn how your real estate business operates, the tools you use and the challenges your team faces.'],
  ['02', 'Identify', 'Find repetitive tasks, communication gaps and opportunities where automation can make a meaningful difference.'],
  ['03', 'Design', 'Plan a solution around your actual processes, business structure and operational needs.'],
  ['04', 'Build & refine', 'Implement, test and improve the workflow so it supports the way your business works.'],
];

export default function ServicesPage() {
  return (
    <main className="services-page">
      <section className="services-hero section-shell">
        <div className="section-kicker">WHAT I DO / REAL ESTATE AUTOMATION</div>
        <h1>
          Better systems.<br />
          <em>Smarter real estate</em> operations.
        </h1>
        <p>
          I help real estate professionals simplify property enquiries,
          lead management, client communication and everyday operations
          through practical AI and automation solutions.
        </p>
        <Link href="/contact" className="button button-dark">
          Let's improve your operations <span>↗</span>
        </Link>
        <div className="services-hero-note">
          REAL ESTATE FOCUSED. BUSINESS-DRIVEN. BUILT AROUND YOUR WORKFLOW.
        </div>
      </section>

      <section className="services-overview section-shell">
        <div className="section-kicker">01 / HOW I CAN HELP</div>
        <div className="services-intro">
          <h2>More than automation. Better business operations.</h2>
          <p>
            Real estate businesses have different structures, workflows
            and operational challenges. The automation opportunities
            below are examples of what can be improved through AI and
            automation.
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
              </div>

              <div className="service-detail-mark">t<span>.</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="services-specialty">
        <div className="section-shell specialty-inner">
          <div>
            <div className="section-kicker light-kicker">
              02 / AI VOICE AGENTS & CLIENT COMMUNICATION
            </div>
            <p className="small-overline">SMARTER PROPERTY CONVERSATIONS</p>
            <h2>Every enquiry deserves a <em>response.</em></h2>
            <p>
              AI voice agents can help real estate businesses answer
              incoming calls, respond to routine questions, collect
              prospect details and capture property viewing requests.
              They can also notify agents when a caller needs personal
              attention, helping businesses remain responsive even
              outside normal working hours.
            </p>
            <Link href="/contact" className="button button-light">
              Discuss an AI voice agent <span>↗</span>
            </Link>
          </div>

          <div className="real-estate-points">
            <div><span>01</span> A prospect calls</div>
            <div><span>02</span> The AI voice agent responds</div>
            <div><span>03</span> Enquiry details are collected</div>
            <div><span>04</span> The prospect is qualified</div>
            <div><span>05</span> The right agent is notified</div>
          </div>
        </div>
      </section>

      <section className="services-process section-shell">
        <div className="section-kicker">03 / MY APPROACH</div>
        <div className="services-process-heading">
          <h2>
            Your business first.<br />
            <em>The right solution follows.</em>
          </h2>
          <p>
            I assess each business's existing processes to identify
            repetitive tasks, operational gaps and opportunities for
            improvement, then develop solutions that align with its
            specific needs.
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

        <div className="services-intro">
          <p>
            The possibilities go beyond this list. Every solution starts
            with understanding how the business operates. Communication
            and enquiry workflows can also be adapted to support businesses
            in other industries where they are relevant.
          </p>
        </div>
      </section>

      <section className="services-cta">
        <div className="section-shell">
          <div className="section-kicker light-kicker">
            LET'S EXPLORE WHAT'S POSSIBLE
          </div>
          <h2>
            Let's make your real estate<br />
            <em>operations work smarter.</em>
          </h2>

          <div className="services-cta-bottom">
            <p>
              Tell me how your business currently handles enquiries,
              clients and daily operations. Together, we can identify
              where the right automation can make a difference.
            </p>

            <Link href="/contact" className="button button-gold">
              Let's discuss your business <span>↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
