const skills = [
  {
    title: "Frontend",
    description: "Building responsive and modern interfaces.",
  },

  {
    title: "UI / UX",
    description: "Designing intuitive and user-friendly experiences.",
  },

  {
    title: "Performance",
    description: "Optimizing applications for speed and scalability.",
  },

  {
    title: "Clean Code",
    description: "Creating maintainable and scalable solutions.",
  },
];

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind",
  "Prisma",
  "Node.js",
];

export default function Skills() {
  return (
    <section id="about" className="py-20">

      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center">

          <span className="text-primary font-semibold">
            ABOUT ME
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Skills & Experience
          </h2>

          <p className="mt-6 text-slate-500 max-w-2xl mx-auto">
            Passionate about creating modern digital experiences with clean interfaces and scalable architecture.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* About */}

          <div>

            <h3 className="text-3xl font-bold">
              Frontend focused, product oriented.
            </h3>

            <p className="mt-8 text-slate-600 leading-8">
              I enjoy transforming ideas into polished interfaces, combining performance, usability and visual consistency.
            </p>

            <p className="mt-6 text-slate-600 leading-8">
              My main focus is building web applications with modern technologies and great user experiences.
            </p>

            <div className="flex flex-wrap gap-3 mt-10">

              {technologies.map((tech) => (
                <span key={tech} className="px-5 py-3 rounded-full bg-primary/10 text-primary-dark font-medium">
                  {tech}
                </span>
              ))}

            </div>

          </div>

          {/* Cards */}

          <div className="grid sm:grid-cols-2 gap-6">

            {skills.map((skill) => (
              <article key={skill.title} className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-primary hover:-translate-y-2 hover:shadow-xl transition">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                  ✦
                </div>

                <h4 className="text-2xl font-semibold mt-8">
                  {skill.title}
                </h4>

                <p className="mt-4 text-slate-500">
                  {skill.description}
                </p>

              </article>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}