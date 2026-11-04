
import { notFound } from 'next/navigation';

const projects = [
  {
    slug: 'real-estate-lead-automation',
    title: 'Real Estate Lead Automation',
    description:
      'An automation system designed to capture property enquiries, qualify potential buyers and tenants, and support consistent follow-ups.',
    challenge:
      'Managing property enquiries manually can lead to delayed responses and missed opportunities.',
    solution:
      'A streamlined workflow that captures enquiries, organizes lead information, and supports timely follow-ups.',
    outcome:
      'A more organized enquiry process and a smoother experience for prospective clients.',
  },
];

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-24">
      <p className="mb-4 text-sm uppercase tracking-widest opacity-60">
        Featured Project
      </p>

      <h1 className="mb-8 text-4xl font-bold md:text-6xl">
        {project.title}
      </h1>

      <p className="mb-12 text-lg leading-relaxed opacity-80">
        {project.description}
      </p>

      <div className="space-y-10">
        <section>
          <h2 className="mb-3 text-2xl font-semibold">The Challenge</h2>
          <p className="leading-relaxed opacity-80">{project.challenge}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">The Solution</h2>
          <p className="leading-relaxed opacity-80">{project.solution}</p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold">The Outcome</h2>
          <p className="leading-relaxed opacity-80">{project.outcome}</p>
        </section>
      </div>
    </main>
  );
}
