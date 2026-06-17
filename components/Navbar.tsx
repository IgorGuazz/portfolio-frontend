const links = [
  {
    label: "Home",
    href: "#hero",
  },

  {
    label: "Projects",
    href: "#projects",
  },

  {
    label: "About",
    href: "#about",
  },

  {
    label: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-20 bg-background-dark/80 backdrop-blur-md border-b border-primary-dark">

      <div className="max-w-7xl h-full mx-auto px-8 flex items-center justify-between">

        <a href="#hero" className="text-2xl font-bold text-accent hover:opacity-90 transition">
          &lt;/&gt; Igor
        </a>

        <div className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-white hover:text-accent transition">
              {link.label}
            </a>
          ))}

        </div>

        <a href="#contact" className="bg-primary px-6 py-3 rounded-xl hover:bg-accent transition">
          Contact Me
        </a>

      </div>

    </nav>
  );
}