const projects = [
  {
    title: "Portfolio Website",
    description: "Personal portfolio focused on modern UI and performance.",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    link: "#",
    image: "/project-portfolio.png"
  },

  {
    title: "TCE - RS",
    description: "Government Agency Portal.",
    technologies: ["Javascript", "WordPress", "Node.js", "PHP", "Docker"],
    link: "https://tcers.tc.br/fiscalizado/",
    image: "/project-TCE.png"
  },

  {
    title: "Projeto Sibila",
    description: "Work in Progress: Management and Documentation System for Early Education Schools.",
    technologies: ["Next.js", "React.js", "Node.js", "Nest.js", "Prisma", "PostgreSQL"],
    link: "#",
    image: ""
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-primary font-semibold">
            MY WORK
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            A selection of projects focused on performance, user experience and scalable frontend architecture.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {projects.map((project) => (
            <article key={project.title} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:border-primary hover:-translate-y-2 hover:shadow-2xl transition duration-300">

              <div className="h-60 relative overflow-hidden">

                { project.image  ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-background-secondary to-primary-dark" />

                    <div className="absolute inset-0 flex items-center justify-center text-primary text-7xl font-bold opacity-20 group-hover:scale-110 transition">
                      &lt;/&gt;
                    </div>
                  </>
                )}

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-4 text-slate-500">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-8">

                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-primary/10 text-primary-dark text-sm font-medium">
                      {tech}
                    </span>
                  ))}

                </div>

                <a href={project.link} className="mt-10 inline-flex items-center gap-2 text-primary font-semibold hover:text-accent transition">
                  View Project →
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}