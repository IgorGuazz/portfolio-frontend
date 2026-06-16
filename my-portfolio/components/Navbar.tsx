export default function Navbar() {
  const links = ["Início", "Projetos", "Sobre", "Contato"];

  return (
    <nav className="h-20 flex items-center justify-between">

      <h1 className="text-2xl font-bold text-accent">
        &lt;/&gt; Dev
      </h1>

      <div className="hidden md:flex gap-10">
        {links.map((item) => (
          <a key={item} href="#" className="text-white hover:text-accent transition">
            {item}
          </a>
        ))}
      </div>

      <button className="bg-primary px-6 py-3 rounded-xl hover:bg-accent transition">
        Contato
      </button>

    </nav>
  );
}