import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  MdEmail,
} from "react-icons/md";

export default function Hero() {
  return (
    <section id="hero" className="grid lg:grid-cols-2 gap-20 items-center py-20">

      {/* Left */}

      <div>

        <span className="text-accent">
          Hi, I'm
        </span>

        <h1 className="text-6xl font-bold mt-4">
          Igor Guazzelli
        </h1>

        <h2 className="text-5xl font-bold mt-3 text-primary">
          Fullstack Developer
        </h2>

        <p className="mt-8 text-slate-300 max-w-xl text-lg">
          Fullstack developer focused on creating modern and engaging web experiences. I enjoy turning complex ideas into intuitive interfaces through clean code, performance-oriented solutions and thoughtful design, primarily working with React, Next.js and TypeScript.
        </p>

        {/* Buttons */}

        <div className="flex gap-4 mt-10">

          <a href="#projects" className="bg-primary px-8 py-4 rounded-xl hover:bg-accent transition">
            View Projects
          </a>

          <a href="/CVIgorGuazzelliEnglish.pdf" download className="border border-primary px-8 py-4 rounded-xl hover:bg-white/10 transition">
            Resume
          </a>

        </div>

        {/* Socials */}

        <div className="flex items-center gap-6 mt-10">

          <a
            href="https://linkedin.com/in/igor-guazzelli-a0b85316b/"
            target="_blank"
            className="text-slate-300 hover:text-accent hover:-translate-y-1 transition"
          >
            <FaLinkedin size={28} />
          </a>

          <a
            href="https://github.com/IgorGuazz"
            target="_blank"
            className="text-slate-300 hover:text-accent hover:-translate-y-1 transition"
          >
            <FaGithub size={28} />
          </a>

        </div>

      </div>

      {/* Terminal */}

      <div className="rounded-3xl overflow-hidden bg-background-dark border border-primary-dark shadow-2xl">

        <div className="h-14 px-5 flex items-center justify-between border-b border-primary-dark bg-black/20">

          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>

          <span className="text-sm text-slate-400">
            portfolio.tsx
          </span>

          <div className="w-16" />

        </div>

        <div className="p-10">

          <pre className="text-accent text-sm leading-8 overflow-x-auto">
{`const developer = {
 name: "Igor Guazzelli",
 role: "Fullstack Developer",
 stack: ["React", "Next.js", "Tailwind", "TypeScript",
         "JavaScript", "Java", "Node.js",
         "Python", "PostgreSQL", "Scrum", "Git",
         "Docker", "Jira", "Figma", "VS Code"]
 local: "Porto Alegre — BR",
 foco: "UI • UX • Performance",
 status: "Open to Projects"
}`}
          </pre>

        </div>

      </div>

    </section>
  );
}


