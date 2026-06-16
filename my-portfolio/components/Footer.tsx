// components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-zinc-400 md:flex-row">
        <p>© {year} Igor Guazzelli. All rights reserved.</p>
        <nav className="flex items-center gap-6">
          <a href="https://github.com/IgorGuazz" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">GitHub</a>
          <a href="https://linkedin.com/in/igor-guazzelli-a0b85316b/" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">LinkedIn</a>
          <a href="mailto:igor.guazzelli@gmail.com" className="transition hover:text-white">Email</a>
        </nav>
      </div>
    </footer>
  );
}